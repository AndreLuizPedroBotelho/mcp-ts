import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getInfoCnpjTool } from "./tools/infoCnpj.tool.js";

const server = new McpServer({
    name: "mcp-ts",
    version: "1.0.0",
});


server.registerTool(
    getInfoCnpjTool.name,
    { inputSchema: getInfoCnpjTool.inputSchema },
    getInfoCnpjTool.getInfoCnpj
);


// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});