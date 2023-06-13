import { Account } from "src/app/core/data-access/account"
import { Comment } from "src/app/comments/data-access/comment"
export interface Bug {
    bug_id?: number;
    bugTitle: string;
    created: Date;
    modified: Date;
    status: string;
    priority: string;
    severity: string;
    assignedtoaccount: Account;
    description: string;
    expectedResult: string;
    actualResult: string;
    screenShotUrl: string;
    stepsToReproduce: string;
    comments: Comment[];
}