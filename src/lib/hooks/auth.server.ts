import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { AUTH_SECRET } from '$env/static/private';

const PUBLIC_ROUTES = ['/'];

export const authHandle: Handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');

    event.locals.user = session === AUTH_SECRET ? { loggedIn: true } : null;

    const isPublic = PUBLIC_ROUTES.includes(event.url.pathname);

    if (!event.locals.user && !isPublic) {
        throw redirect(303, '/');
    }

    return resolve(event);
};