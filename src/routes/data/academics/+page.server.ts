import {
    SCHOOL_DIPLOMA,
    SCHOOL_IDS,
    SCHOOL_CERTIFICATES,
    SCHOOL_HISTORY,
    SCHOOL_MUGSHOTS,
    UMC_CONTRACT,
    UMC_CONCLUSION,
    UMC_DIPLOMA,
    UMC_DIPLOMA_LINK,
    UMC_HISTORY,
} from "$env/static/private";
import type { IAcademics } from "$lib/interfaces/academics.interface";

export function load() {
    const academics: IAcademics = {
        ipe: {
            diplomaPath: SCHOOL_DIPLOMA,
            idsPath: SCHOOL_IDS,
            certificatePath: SCHOOL_CERTIFICATES,
            historyPath: SCHOOL_HISTORY,
            mugshotsPath: SCHOOL_MUGSHOTS
        },
        umc: {
            contractPath: UMC_CONTRACT,
            conclusionPath: UMC_CONCLUSION,
            diplomaPath: UMC_DIPLOMA,
            diplomaLink: UMC_DIPLOMA_LINK,
            historyPath: UMC_HISTORY
        }
    };

    return { academics };
}