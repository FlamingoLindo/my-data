import { MY_USERNAME, MY_PASSWORD, AUTH_SECRET, WHITELISTEDIPS } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request, cookies, getClientAddress }) => {
        const ip = getClientAddress().replace("::ffff:", "");
        const allowed = WHITELISTEDIPS.split(',').map(i => i.trim()).filter(Boolean);

        if (!allowed.includes(ip)) {
            return redirect(303, 'https://www.youtube.com/watch?v=p-Bptisac1A?autoplay=1');
        }

        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        if (username === MY_USERNAME && password === MY_PASSWORD) {
            cookies.set('session', AUTH_SECRET, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7,
                // secure: false,
            });
            throw redirect(303, '/menu');
        }

        return fail(401, { message: 'Invalid credentials' });
    }
};