import { useState, type FormEvent } from "react"
import type { PostProps } from "../../types/PostType"
import { SForm } from "./styles"

interface PostFormProps {
    initialData?: Partial<PostProps>
    onSubmit: (post: {
        title: string
        description: string
        content: string
    }) => void
}

export function PostForm({ initialData, onSubmit
}: PostFormProps) {
    const [title, setTitle] = useState(initialData?.title || '')
    const [description, setDescription] = useState(initialData?.description || '')
    const [content, setContent] = useState(initialData?.content || '')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        onSubmit({ title, description, content })
        setTitle('')
        setDescription('')
        setContent('')
    }

    return (
        <SForm method="post" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Conteúdo</label>
                <textarea name="content" id="content" value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Publicar</button>
        </SForm>
    )
}