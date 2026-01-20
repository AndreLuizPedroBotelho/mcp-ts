import { ToolCallback } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ToolInterface } from "../interface/tool.interface.js";

const serializeRoute = (tool: ToolInterface): [
    { title: string; description: string; inputSchema: any },
    ToolCallback<any>
] => {
    return [
        {
            title: tool.title,
            description: tool.description,
            inputSchema: tool.inputSchema,
        },
        tool.tool
    ]
}


export default {
    serializeRoute
}