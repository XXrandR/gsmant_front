'use client';

import { Header } from './Header';
import { PagePanels } from './PagePanels';
import { useDashboard } from '@/context/DashboardContext';

export function DashboardLayout() {
	const { activePage } = useDashboard();

	return (
		<div className="h-full flex flex-col">
			<Header />
			<main className="flex-1 overflow-y-auto main-scroll px-4 sm:px-6 lg:px-8 py-6">
				<PagePanels activePage={activePage} />
			</main>
		</div>
	);
}
