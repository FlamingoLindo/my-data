import {
    NAME,
    AGE,
    GENDER,
    RACE,
    HEIGHT,
    WEIGHT,
    PHONE,
    CPF,
    RG_NUMBER,
    RG_AGENCY,
    RG_STATE,
} from "$env/static/private";
import type { IMe } from "$lib/types/me.interface";

export function load() {
    const me: IMe = {
        name: NAME,
        age: Number(AGE),
        gender: GENDER,
        race: RACE,
        height: Number(HEIGHT),
        weight: Number(WEIGHT),
        phone: PHONE,
        documents: {
            cpf: CPF,
            rg: {
                number: RG_NUMBER,
                issuing_agency: RG_AGENCY,
                state: RG_STATE,
            },
        },
    };

    return { me };
}