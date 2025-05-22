export interface PostDetailProps {
  id?: string;
  title: string;
  description: string;
  content: string;
  autor: string;
  data: string;
}
export function PostDetails({
  title,
  description,
  content,
  autor,
  data,
}: PostDetailProps) {
  return (
    <article>
      <section>
        <h3>{title}</h3>
        <h6>{autor}</h6>, <h6>{data}</h6>
        <h5>{description}</h5>
        <p>{content}</p>
      </section>
    </article>
  );
}
