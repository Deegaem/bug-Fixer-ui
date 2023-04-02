import { Account } from "src/app/core/data-access/account";

export interface Chat {
    message: string;
    sender: Account;
    created: Date;
}