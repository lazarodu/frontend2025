export interface CommentProps {
  id: string;
  comment: string;
  autor: string;
  data: string;
}
export interface CommentListProps {
  comments: CommentProps[];
}
export function CommentList({ comments }: CommentListProps) {
  return (
    <>
      {comments.map((comment) => (
        <article key={comment.id}>
          <aside>
            <h3>{comment.comment}</h3>
            <h6>{comment.autor}</h6>, <h6>{comment.data}</h6>
          </aside>
        </article>
      ))}
    </>
  );
}
