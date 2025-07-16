import { api } from "../http/axios"

export interface IUser {
    name?: string
    email: string
    password: string
}
class UserData {
    register(data: IUser) {
        return api.post('/users/register/', { ...data, role: "user" })
    }
    login(data: IUser) {
        return api.post('/users/login/', data)
    }
    me() {
        return api.get('/users/me/')
    }
}

export default new UserData()