export interface Comment {
    comment_id?: number;
    name: string;
    comment_text: string;
    account_id: number;
    bug_id: number;
    parent_id: number | null;
    //created: Date;
}