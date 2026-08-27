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
    discord: "Discord"
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