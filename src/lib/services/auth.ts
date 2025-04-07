import api from "@/lib/api";

// interface LoginResponse {
//     status: string,
//     token: string,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     user: any
// }

interface LoginCredential {
    email: string;
    password: string
}

export const auth = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    login: async (data: LoginCredential) =>{
        const response = await api.post('/auth/login', data);
        return response.data
    },
    // register: async (data:any) =>{
    //     // implement register here 
    // }
}