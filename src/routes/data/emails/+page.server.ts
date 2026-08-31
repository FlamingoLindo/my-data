import {
    EMAIL1,
    EMAIL2,
    EMAIL3,
    EMAIL4,
    EMAIL5,
    EMAIL6,
    EMAIL7,
    EMAIL8,
    EMAIL9,
    EMAIL10,
    EMAIL11,
    EMAIL12,
} from "$env/static/private";
import type { IEmail } from "$lib/interfaces/emails.interface";

export function load() {
    const email: IEmail = {
        gmail: {
            gmail1: EMAIL1,
            gmail2: EMAIL2,
            gmail3: EMAIL3,
            gmail4: EMAIL4,
            gmail5: EMAIL5,
            gmail6: EMAIL6,
            gmail7: EMAIL7,
        },
        cock: {
            cock1: EMAIL8,
            cock2: EMAIL9,
            cock3: EMAIL10,
            cock4: EMAIL11,
            cock5: EMAIL12,
        }
    };
    return { email };
}