export interface Comment {
  comment_id: number;
  parent_id: number | null;
  bug_id: number;
  account_id: number;
  assigntofname: string;
  assigntolname: string;
  commenttext: string;
  created: Date;
}
