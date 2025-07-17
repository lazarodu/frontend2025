import type { CommentListProps } from "../../types/CommentType";
import { SSection } from "./styles";

export function CommentList({ comments }: CommentListProps) {
  return (
    <SSection>
      {comments.map((comment) => (
        <aside key={comment.id}>
          <h5>{comment.comment}</h5>
          <div>
            <h6>{comment.user_id}</h6>, <h6>{comment.date}</h6>
          </div>
        </aside>
      ))}
    </SSection>
  );
}
