import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { GetInfoCnpjTool } from "./tools/infoCnpj.tool.js";

const server = new McpServer({
    name: "mcp-ts",
    version: "1.0.0",
});

server.registerTool(
  "info-cnpj",
  {
    description: "Get information for a CNPJ number without formatting",
    inputSchema: {
      cnpj: z
        .string()
        .length(14)
        .describe("CNPJ number without formatting"),
    },
  },
  GetInfoCnpjTool.infoCnpj,
);

// Start the server
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("mcp-ts running on stdio");
}

main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});