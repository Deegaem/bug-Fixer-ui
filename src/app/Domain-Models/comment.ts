export interface Comment {
    comment_id?: number;
    comment_text: string;
    account_id: number;
    bug_id: number;
    parent_id: number;
    //created: Date;
}