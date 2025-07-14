import { api } from "../http/axios"

export interface IUser {
    name?: string
    email: string
    password: string
}
class UserData {
    register(data: IUser) {
        return api.post('/user/register', data)
    }
    login(data: IUser) {
        return api.post('/user/login', data)
    }
    me() {
        return api.get('/user/me')
    }
}

export default new UserData()