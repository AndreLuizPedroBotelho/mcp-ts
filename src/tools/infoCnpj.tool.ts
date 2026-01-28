import axios from "axios";

export class GetInfoCnpjTool {
    static async infoCnpj({ cnpj }: any): Promise<any> {

        try {
            const request = await axios.get(
                `https://minhareceita.org/${cnpj}`
            );

            return {
                content: [
                    {
                        type: "text" as const,
                        text: JSON.stringify(request.data),
                    },
                ],
            };
        } catch (error: any) {
            const statusCode = error.response?.status || "unknown";
            const errorMessage = error.response?.data?.message || error.message || "Unknown error";

            return {
                content: [
                    {
                        type: "text" as const,
                        text: JSON.stringify({
                            error: `API error ${statusCode}`,
                            message: errorMessage,
                            cnpj,
                        }),
                    },
                ],
            };
        }
    }
}