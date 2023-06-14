import { Comment } from "src/app/comments/data-access/comment"
export interface Bug {
    bug_id?: number;
    bugTitle: string;
    created: Date;
    modified: Date;
    status: string;
    priority: string;
    severity: string;
    assignedto: String;
    description: string;
    expectedResult: string;
    actualResult: string;
    stepsToReproduce: string;
    screenShotUrl: string;
    comments: Comment[];
}