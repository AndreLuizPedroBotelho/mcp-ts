import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import infoCnpjRoute from "./infoCnpj.route";

export default function routes(server: McpServer) {
    infoCnpjRoute(server);
}