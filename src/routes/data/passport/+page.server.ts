import {
    PASSPORT_NUMBER,
    PASSPORT_EMISSION_DATE,
    PASSPORT_EXPIRATION_DATE,
    PASSPORT_BR_FILE_PATH,
    PT_PASSPORT_NUMBER,
    PT_PASSPORT_EMISSION_DATE,
    PT_PASSPORT_EXPIRATION_DATE,
    PT_PASSPORT_FILE_PATH,
} from "$env/static/private";
import type { IPassportBR, IPassportPT } from "$lib/interfaces/passport.interface";

export function load() {
    const passportBr: IPassportBR = {
        passportNumber: PASSPORT_NUMBER,
        passportEmissionDate: PASSPORT_EMISSION_DATE,
        passportExpirationDate: PASSPORT_EXPIRATION_DATE,
        passportBrFilePath: PASSPORT_BR_FILE_PATH
    };

    const passportPt: IPassportPT = {
        ptPassportNumber: PT_PASSPORT_NUMBER,
        ptPassportEmissionDate: PT_PASSPORT_EMISSION_DATE,
        ptPassportExpirationDate: PT_PASSPORT_EXPIRATION_DATE,
        passportPtFilePath: PT_PASSPORT_FILE_PATH
    };

    return { passportBr, passportPt };
}