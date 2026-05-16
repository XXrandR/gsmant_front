'use client';
import { Header } from '@/components/layout/Header';
import { DashboardProvider } from '@/context/DashboardContext';
import { useSession } from '@/context/SessionContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { session } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (
			!session.loading &&
			!session.loggedIn
		) {
			router.push("/login");
		}
	}, [
		session.loading,
		session.loggedIn,
		router,
	]);

	if (session.loading) {
		return null;
	}

	if (!session.loggedIn) {
		return null;
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