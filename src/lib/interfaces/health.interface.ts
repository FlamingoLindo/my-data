// TODO need to add an interface for family history

export interface IHealth {
    insurance: IHealthInsurance
    eye: IEye,
    audio: IAudio,
    neuro: INeuro
    birth: IBirth,
    blood: IBlood,
    allergies: IAllergies,
    vaccines: IVaccines
}

interface IHealthInsurance {
    cardPath: string,
    plan: string,
    number: string,
    accommodation: string
    expirationDate: string,
    coverage: string,
    ans: string,
    segmentation: string
}

interface IEye {
    prescriptionPath: string,
    cemaPath: string
}

interface IAudio {
    angelicaPath: string,
    nesfPath: string
    renataPath: string
}
interface INeuro {
    neuroPath: string
}

interface IBirth {
    birthDataPath: string
}

interface IBlood {
    type: string,
    testPath: string,
}

interface IAllergies {
    allergiesPath: string
}

interface IVaccines {
    vaccinesPath: string
}