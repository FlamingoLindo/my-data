import { redirect } from '@sveltejs/kit';

export function load() {
    console.log("GET OUT OF HERE YOU LOSER, YOU DON'T HAVE PERMISSION TO BE HERE")
    redirect(307, 'https://www.youtube.com/watch?v=p-Bptisac1A?autoplay=1');
}