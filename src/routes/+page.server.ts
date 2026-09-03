import { MY_USERNAME, MY_PASSWORD, AUTH_SECRET } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
    default: async ({ request, cookies }) => {
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