import { getInfoCnpjTool } from "../tools/infoCnpj.tool";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import routeFunction from "../functions/route.function";

export default function infoCnpjRoute(server: McpServer) {
    server.registerTool(
        "getInfoCnpj",
        ...routeFunction.serializeRoute(getInfoCnpjTool.infoCnpj())
    );
}