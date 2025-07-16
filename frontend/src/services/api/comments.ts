import { api } from "../http/axios"

export interface IComment {
    post_id: string
    comment: string
    date?: string
}
class CommentData {
    getByUser() {
        return api.get(`/comments/user/`)
    }
    getByPost(post_id: string) {
        return api.get(`/comments/post/${post_id}`)
    }
    create(data: IComment) {
        return api.post('/comments/', data)
    }
    delete(id: string) {
        return api.delete(`/comments/${id}`)
    }
}

export default new CommentData()