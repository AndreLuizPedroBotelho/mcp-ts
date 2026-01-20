import { z } from "zod";
import infoCnpj from "../functions/infoCnpj.function.js";
import { ToolInterface } from "../interface/tool.interface.js";

export class getInfoCnpjTool {
    static infoCnpj(): ToolInterface {
        return {
            title: "Cnpj informações",
            description: "Pegar informações da receita pelo cnpj",
            inputSchema: z.object({
                cnpj: z.string()
            }),
            tool: infoCnpj
        }
    }
}