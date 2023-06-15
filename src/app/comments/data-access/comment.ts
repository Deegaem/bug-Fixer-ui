export interface Comment {
    comment_id?: number;
    bug_id: number;
    parent_id: number | null;
    account_id: number;
    created: Date;
    commenttext: string;
}