'use client'

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardProvider } from "@/context/DashboardContext";

export default function Home() {
	return (
		<DashboardProvider>
			<DashboardLayout />
		</DashboardProvider>
	);
}
