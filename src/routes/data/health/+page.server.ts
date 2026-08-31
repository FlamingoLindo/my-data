import {
    HEALTH_INSURANCE_CARD,
    HEALTH_INSURANCE_PLAN,
    HEALTH_INSURANCE_NUMBER,
    HEALTH_INSURANCE_ACCOMMODATION,
    HEALTH_INSURANCE_EXPIRATION_DATE,
    HEALTH_INSURANCE_COVERAGE,
    HEALTH_INSURANCE_ANS,
    HEALTH_INSURANCE_SEGMENTATION,
    GLASSES_PRESCRIPTION,
    EYE_CEMA,
    AUDIO_ANGELICA,
    AUDIO_NESF,
    AUDIO_RENATA,
    BIRTH_DATA,
    NEUROPSYCHOLOGIST,
    ALLERGIES,
    BLOOD_TEST,
    BLOOD_TYPE,
    VACCINES
} from "$env/static/private";
import type { IHealth } from "$lib/interfaces/health.interface";

export function load() {
    const health: IHealth = {
        insurance: {
            cardPath: HEALTH_INSURANCE_CARD,
            plan: HEALTH_INSURANCE_PLAN,
            number: HEALTH_INSURANCE_NUMBER,
            accommodation: HEALTH_INSURANCE_ACCOMMODATION,
            expirationDate: HEALTH_INSURANCE_EXPIRATION_DATE,
            coverage: HEALTH_INSURANCE_COVERAGE,
            ans: HEALTH_INSURANCE_ANS,
            segmentation: HEALTH_INSURANCE_SEGMENTATION,
        },
        eye: {
            prescriptionPath: GLASSES_PRESCRIPTION,
            cemaPath: EYE_CEMA,
        },
        audio: {
            angelicaPath: AUDIO_ANGELICA,
            nesfPath: AUDIO_NESF,
            renataPath: AUDIO_RENATA,
        },
        neuro: {
            neuroPath: NEUROPSYCHOLOGIST,
        },
        birth: {
            birthDataPath: BIRTH_DATA,
        },
        blood: {
            type: BLOOD_TYPE,
            testPath: BLOOD_TEST,
        },
        allergies: {
            allergiesPath: ALLERGIES,
        },
        vaccines: {
            vaccinesPath: VACCINES
        }
    };

    return { health };
}