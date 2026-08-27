import {
    MILITARY_FILE_PATH
} from "$env/static/private";
import type { IMilitary } from "$lib/interfaces/military.interface";


export function load() {
    const military: IMilitary = {
        militaryFile: MILITARY_FILE_PATH
    }

    return { military };
}