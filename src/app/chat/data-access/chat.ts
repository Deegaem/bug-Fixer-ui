import { Account } from "src/app/accounts/data-access/account";

export interface Chat {
    message: string;
    sender: Account;
    created: Date;
}