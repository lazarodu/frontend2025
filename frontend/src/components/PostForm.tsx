import { useState, type FormEvent } from "react"

interface PostFormProps {
    onSubmit: (post: {
        title: string
        description: string
        content:string
    }) => void
}

export function PostForm({onSubmit
    }: PostFormProps) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()
        onSubmit({title, description, content})
        setTitle('')
        setDescription('')
        setContent('')
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título</label>
                <input type="text" name="title" id="title" 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" id="description" 
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Conteúdo</label>
                <textarea name="content" id="content"
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Publicar</button>
        </form>
    )
}