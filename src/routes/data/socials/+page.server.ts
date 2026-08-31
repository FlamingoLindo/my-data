import {
    YOUTUBE,
    TWITCH,
    REDDIT,
    GITHUB,
    LINKEDIN,
    INSTAGRAM,
    TWITTER,
    STEAM,
    DISCORD,
} from "$env/static/private";
import type { ISocials } from "$lib/interfaces/socials.interface";

export function load() {
    const socials: ISocials = {
        youtube: YOUTUBE,
        twitch: TWITCH,
        reddit: REDDIT,
        github: GITHUB,
        linkedin: LINKEDIN,
        instagram: INSTAGRAM,
        twitter: TWITTER,
        steam: STEAM,
        discord: DISCORD
    }

    return { socials };
}