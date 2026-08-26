export interface IMe {
    name: string,
    age: number,
    birthDate: string
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

export interface IAddress {
    cep: string,
    state: string,
    city: string,
    street: string,
    neighborhood: string,
    number: string
}

export interface IWork {

}

