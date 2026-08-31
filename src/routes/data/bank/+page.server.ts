import {
    BANK_NAME,
    BANK_AGENCY,
    BANK_ACCOUNT,
    BANK_NUMBER
} from "$env/static/private";
import type { IBank } from "$lib/interfaces/bank.interface";

export function load() {
    const bank: IBank = {
        bankName: BANK_NAME,
        bankAgency: BANK_AGENCY,
        bankAccount: BANK_ACCOUNT,
        bankNumber: Number(BANK_NUMBER),
    };
    return { bank };
}