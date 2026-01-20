import { getInfoCnpjTool } from "../tools/infoCnpj.tool.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import routeFunction from "../functions/route.function.js";

export default function infoCnpjRoute(server: McpServer) {
    server.registerTool(
        "getInfoCnpj",
        ...routeFunction.serializeRoute(getInfoCnpjTool.infoCnpj())
    );
}