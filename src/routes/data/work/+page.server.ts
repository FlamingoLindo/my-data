import {
    NIS_PIS,
    CONTRACT_FILE_PATH
} from "$env/static/private";
import type { IWork } from "$lib/interfaces/work.interface";

export function load() {
    const work: IWork = {
        nisPis: NIS_PIS,
        contractFile: CONTRACT_FILE_PATH
    }

    return { work };
}