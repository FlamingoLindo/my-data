import { m } from "$lib/paraglide/messages";

const labelMap: Record<string, string> = {
    name: m["name"](),
    age: m["age"](),
    birthDate: m["birthDate"](),
    gender: m["gender"](),
    sex: m["sex"](),
    height: m["height"](),
    weight: m["weight"](),
    phone: m["phone"](),
    race: m["race"](),
    "documents.cpf": m["cpf"](),
    "documents.rg.number": m["rgNumber"](),
    "documents.rg.issuing_agency": m["issuingAgency"](),
    "documents.rg.state": m["state"](),
    cep: m["cep"](),
    state: m["state"](),
    city: m["city"](),
    street: m["street"](),
    neighborhood: m["neighborhood"](),
    number: m["number"](),
    nisPis: m["nisPis"](),
    youtube: m["youtube"](),
    twitch: m["twitch"](),
    reddit: m["reddit"](),
    github: m["github"](),
    linkedin: m["linkedin"](),
    instagram: m["instagram"](),
    twitter: m["twitter"](),
    steam: m["steam"](),
    discord: m["discord"](),
    firstLicense: m["firstLicense"](),
    emissionDate: m["emissionDate"](),
    expirationDate: m["expirationDate"](),
    category: m["category"](),
    observation: m["observation"](),
    passportNumber: m["passportNumber"](),
    passportEmissionDate: m["passportEmissionDate"](),
    passportExpirationDate: m["passportExpirationDate"](),
    ptPassportNumber: m["ptPassportNumber"](),
    ptPassportEmissionDate: m["ptPassportEmissionDate"](),
    ptPassportExpirationDate: m["ptPassportExpirationDate"](),
    gmail1: m["gmail1"](),
    gmail2: m["gmail2"](),
    gmail3: m["gmail3"](),
    gmail4: m["gmail4"](),
    gmail5: m["gmail5"](),
    gmail6: m["gmail6"](),
    gmail7: m["gmail7"](),
    cock1: "Cock 1",
    cock2: "Cock 2",
    cock3: "Cock 3",
    cock4: "Cock 4",
    cock5: "Cock 5",
    bankName: m["bankName"](),
    bankAgency: m["bankAgency"](),
    bankAccount: m["bankAccount"](),
    bankNumber: m["bankNumber"](),
    personal: m["personal"](),
    residential: m["residential"](),
    contractPath: m["contractPath"](),
    conclusionPath: m["conclusionPath"](),
    diplomaPath: m["diplomaPath"](),
    diplomaLink: m["diplomaLink"](),
    historyPath: m["historyPath"](),
    idsPath: m["idsPath"](),
    certificatePath: m["certificatePath"](),
    mugshotsPath: m["mugshotsPath"](),
    cardPath: m["cardPath"](),
    cemaPath: m["cemaPath"](),
    angelicaPath: m["angelicaPath"](),
    nesfPath: m["nesfPath"](),
    renataPath: m["renataPath"](),
    neuroPath: m["neuroPath"](),
    birthDataPath: m["birthDataPath"](),
    testPath: m["testPath"](),
    plan: m["plan"](),
    accommodation: m["accommodation"](),
    coverage: m["coverage"](),
    ans: m["ans"](),
    segmentation: m["segmentation"](),
    prescriptionPath: m["prescriptionPath"](),
    cema: m["cema"](),
    angelica: m["angelica"](),
    nesf: m["nesf"](),
    renata: m["renata"](),
    neuro: m["neuro"](),
    birthData: m["birthData"](),
    type: m["type"](),
    allergiesPath: m["allergiesPath"](),
    vaccinesPath: m["vaccinesPath"]()
};
export interface FlatField {
    path: string;
    label: string;
    value: string | number;
}

export function flattenObject(obj: Record<string, any>, prefix = ""): FlatField[] {
    let fields: FlatField[] = [];

    for (const key in obj) {
        const value = obj[key];
        const path = prefix ? `${prefix}.${key}` : key;

        if (
            value !== null &&
            typeof value === "object" &&
            !Array.isArray(value)
        ) {
            fields = fields.concat(flattenObject(value, path));
        } else {
            fields.push({
                path,
                label: labelMap[path] ?? key,
                value,
            });
        }
    }

    return fields;
}