import { Comment } from "src/app/comments/data-access/comment"
export interface Bug {
    bug_id?: number;
    bugtitle: string;
    created: Date;
    modified: Date;
    status: string;
    priority: string;
    severity: string;
    assignedto: String;
    description: string;
    expectedresult: string;
    actualresult: string;
    stepstoreproduce: string;
    screenshoturl: string;
    comments: Comment[];
}