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
    description: "Get company information using a CNPJ number",
    inputSchema: {
      cnpj: z
        .string()
        .regex(/^\d{14}$|^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/)
        .describe("CNPJ number (with or without formatting: 12345678901234 or 12.345.678/0001-34)"),
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