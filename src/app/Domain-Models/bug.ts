import { Comment } from "./comment";
import { Account } from "./account";
export interface Bug {
    bug_id?: number;
    bugTitle: string;
    status: string;
    priority: string;
    severity: string;
    assignTo: Account;
    description: string;
    stepsToReproduce: string;
    expectedAndActualResult: string;
    created: Date;
    modified: Date;
    screenShotUrl: string;
    comments: Comment[];
}