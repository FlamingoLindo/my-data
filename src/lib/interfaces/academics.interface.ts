export interface IAcademics {
    ipe: IIpe
    umc: IUmc
}

interface IIpe {
    diplomaPath: string,
    idsPath: string,
    certificatePath: string,
    historyPath: string,
    mugshotsPath: string
}

interface IUmc {
    contractPath: string,
    conclusionPath: string,
    diplomaPath: string,
    diplomaLink: string,
    historyPath: string
}