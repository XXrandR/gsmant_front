'use server'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function getProfile() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;

    if (!sessionCookie) {
        return { error: 'Not authenticated' };
    }

    const session: {
        id: number,
        name: string,
        role: string,
        loggedIn: boolean,
    } = JSON.parse(sessionCookie);

    return { user: session };
}

export async function login(username: string, password: string) {
    const user = { id: 45, name: username, role: 'ADMIN' };

    const isAdmin = username === "admin" && password === "admin";
    const isJhosua = username === "jhosua" && password === "jhosua";

    if (!isAdmin && !isJhosua) {
        return { error: 'Credenciales invalidas' };
    }

    const sessionData = {
        id: user.id,
        name: user.name,
        role: user.role,
        loggedIn: true,
    };

    const cookieStore = await cookies();
    cookieStore.set('session', JSON.stringify(sessionData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
    });

    redirect('/dashboard/inicio/indicador-general');
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('session');
    redirect('/login');
}