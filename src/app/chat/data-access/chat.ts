import { Account } from "src/app/authentication/data-access/account";

export interface Chat {
    message: string;
    sender: Account;
    created: Date;
}