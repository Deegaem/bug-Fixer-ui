export interface Comment {
  comment_id: number;
  commenttext: string;
  account_id: number;
  bug_id: number;
  parent_id: number | null;
  created: Date;
}
