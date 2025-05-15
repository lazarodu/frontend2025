interface PostProps {
    id: string
    title: string
    description: string
    autor: string
    data: string
}
interface PostListProps {
    posts: PostProps[]
}
export function Post({posts}: PostListProps) {
    return (
        <>
            {posts.map((post) => (
                <section key={post.id}>
                    <aside>
                        <h3>{post.title}</h3>
                        <h6>{post.autor}</h6>, <h6>{post.data}</h6>
                    </aside>
                    <h5>{post.description}</h5>
                </section>
            ))}
        </>
    )
}