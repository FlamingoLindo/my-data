const labelMap: Record<string, string> = {
    name: "Name",
    age: "Age",
    birthDate: "Birth Date",
    gender: "Gender",
    sex: "Sex",
    height: "Height",
    weight: "Weight",
    phone: "Phone",
    race: "Race",
    "documents.cpf": "CPF",
    "documents.rg.number": "RG Number",
    "documents.rg.issuing_agency": "Issuing Agency",
    "documents.rg.state": "State",
    cep: "Cep",
    state: "State",
    city: "City",
    street: "Street",
    neighborhood: "Neighborhood",
    number: "Number",
    nisPis: "PIS/NIS",
    youtube: "Youtube",
    twitch: "Twitch",
    reddit: "Reddit",
    github: "Github",
    linkedin: "Linkedin",
    instagram: "Instagram",
    twitter: "Twitter",
    steam: "Steam",
    discord: "Discord",
    firstLicense: "First License",
    emissionDate: "Emission Date",
    expirationDate: "Expiration Date",
    category: "Category",
    observation: "Observation",
    passportNumber: "Passport Number",
    passportEmissionDate: "Passport Emission Date",
    passportExpirationDate: "Passport Expiration Date",
    ptPassportNumber: "Passport Number",
    ptPassportEmissionDate: "Passport Emission Date",
    ptPassportExpirationDate: "Passport Expiration Date",
    gmail1: "Gmail 1",
    gmail2: "Gmail 2",
    gmail3: "Gmail 3",
    gmail4: "Gmail 4",
    gmail5: "Gmail 5",
    gmail6: "Gmail 6",
    gmail7: "Gmail 7",
    cock1: "Cock 1",
    cock2: "Cock 2",
    cock3: "Cock 3",
    cock4: "Cock 4",
    cock5: "Cock 5",
    bankName: "Name",
    bankAgency: "Agency",
    bankAccount: "Account",
    bankNumber: "Number",
    personal: "Personal",
    residential: "Residential",
    contractPath: "Contract",
    conclusionPath: "Conclusion",
    diplomaPath: "Diploma",
    diplomaLink: "Link",
    historyPath: "History",
    idsPath: "IDs",
    certificatePath: "Certificates",
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