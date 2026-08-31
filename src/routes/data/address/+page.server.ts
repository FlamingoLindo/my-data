import {
    CEP,
    STATE,
    CITY,
    STREET,
    NEIGHBORHOOD,
    NUMBER,
    MAPS_LINK
} from "$env/static/private";
import type { IAddress } from "$lib/interfaces/address.interface";

export function load() {
    const address: IAddress = {
        cep: CEP,
        state: STATE,
        city: CITY,
        street: STREET,
        neighborhood: NEIGHBORHOOD,
        number: NUMBER,
    };
    return { address, mapsEmbedUrl: MAPS_LINK, };
}