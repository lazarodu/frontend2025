import { useState, type FormEvent } from "react"

interface CommentFormProps {
    onSubmit: (post: {
        comment:string
    }) => void
}

export function CommentForm({onSubmit
    }: CommentFormProps) {
    const [comment, setComment] = useState('')

    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()
        onSubmit({comment})
        setComment('')
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="comment">Comentário</label>
                <input type="text" name="comment" id="comment" 
                    onChange={(e) => setComment(e.target.value)}
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}