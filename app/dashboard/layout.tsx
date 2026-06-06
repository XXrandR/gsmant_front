import { Header } from '@/components/layout/Header';
import { DashboardProvider } from '@/context/DashboardContext';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: React.ReactNode; }) {
	const cookieStore = await cookies();
	const sessionCookie = cookieStore.get('session')?.value;

	if (!sessionCookie) {
		redirect('/login');
	}

	return (
		<DashboardProvider>
			<div className="flex h-full flex-col">
				<Header />
				<main className="flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6 lg:overflow-hidden">
					{children}
				</main>
			</div>
		</DashboardProvider>
	);
}