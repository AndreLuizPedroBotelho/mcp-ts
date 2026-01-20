import axios from "axios";

const getInfoCnpj = async ({ cnpj }: any) => {
    const request = await axios.get(
        `https://minhareceita.org/${cnpj.replace(/\D/g, "")}`
    );
    return {
        content: [
            {
                type: "text" as const,
                text: JSON.stringify(request.data),
            },
        ],
    };
}


export default {
    getInfoCnpj
}