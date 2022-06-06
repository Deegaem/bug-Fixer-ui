import { Account } from "./account";
export interface Chat {
    message: string;
    sender: Account;
    created: Date;
}