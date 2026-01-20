import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import infoCnpjRoute from "./infoCnpj.route.js";

export default function routes(server: McpServer) {
    infoCnpjRoute(server);
}