interface PostProps {
    title: string
    description: string
    content: string
}
export function Post({title, description, content}:PostProps) {
    return (
        <article>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <p>{content}</p>
        </article>
    )
}
