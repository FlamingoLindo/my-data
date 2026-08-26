export interface IMe {
    name: string,
    age: number,
    race: string,
    gender: string,
    height: number,
    weight: number,
    phone: string,
    documents: IDocuments
}

interface IDocuments {
    cpf: string,
    rg: IRg,
}

interface IRg {
    number: string,
    issuing_agency: string,
    state: string,
}

interface IAddress {
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
    number: string
}

const labelMap: Record<string, string> = {
    name: "Name",
    age: "Age",
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