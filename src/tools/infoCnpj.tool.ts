import axios from "axios";
import { z } from "zod";


const getInfoCnpj = async ({ input }: any) => {
    const { cnpj } = input;

    const request = await axios.get(
        `https://minhareceita.org/${cnpj.replace(/\D/g, "")}`
    );
    return {
        content: [
            {
                type: "text" as const, // <--- Change here
                text: JSON.stringify(request.data),
            },
        ],
    };
}


export const getInfoCnpjTool = {
    name: "getInfoCnpj",
    description: "Pegar informações da receita pelo cnpj",
    inputSchema: z.object({
        cnpj: z.string()
    }),
    getInfoCnpj
};