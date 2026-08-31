import {
    PHONE,
    RESIDENTIAL_PHONE
} from "$env/static/private";
import type { IPhone } from "$lib/interfaces/phones.interface";

export function load() {
    const phone: IPhone = {
        personal: PHONE,
        residential: RESIDENTIAL_PHONE
    };

    return { phone };
}