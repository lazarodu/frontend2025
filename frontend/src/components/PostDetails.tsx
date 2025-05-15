interface PostDetailProps {
    title: string
    description: string
    autor: string
    data: string
}
export function PostDetails({title, description, autor, data}:PostDetailProps) {
    return (
        <article>
            <section>
                <h3>{title}</h3>
                <h6>{autor}</h6>, <h6>{data}</h6>
            </section>
            <h5>{description}</h5>
        </article>
    )
}
