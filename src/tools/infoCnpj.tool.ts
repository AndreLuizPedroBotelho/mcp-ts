import axios from "axios";

export class GetInfoCnpjTool {
    static async infoCnpj({ cnpj }: any): Promise<any> {
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
}