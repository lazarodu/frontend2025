export interface CommentProps {
  id: string
  post_id: string
  user_id: string
  comment: string
  date: string
}

export interface CommentListProps {
  comments: CommentProps[];
}