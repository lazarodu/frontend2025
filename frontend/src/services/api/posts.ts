import { api } from "../http/axios"

export interface IPost {
    title: string
    description: string
    content: string
    date?: string
}
class PostData {
    getAll() {
        return api.get('/posts/')
    }
    getId(id: string) {
        return api.get(`/posts/${id}`)
    }
    create(data: IPost) {
        return api.post('/posts/', data)
    }
    update(id: string, data: IPost) {
        return api.put(`/posts/${id}`, data)
    }
    delete(id: string) {
        return api.delete(`/posts/${id}`)
    }
}

export default new PostData()