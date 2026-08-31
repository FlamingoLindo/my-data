import {
    FIRST_LICENSE,
    EMISSION_DATE,
    EXPIRATION_DATE,
    CATEGORY,
    OBSERVATION,
    LICENSE_FILE_PATH,
} from "$env/static/private";
import type { IDriver } from "$lib/interfaces/driver.interface";

export function load() {
    const driver: IDriver = {
        firstLicense: FIRST_LICENSE,
        emissionDate: EMISSION_DATE,
        expirationDate: EXPIRATION_DATE,
        category: CATEGORY,
        observation: OBSERVATION,
        licenseFilePath: LICENSE_FILE_PATH
    };

    return { driver };
}