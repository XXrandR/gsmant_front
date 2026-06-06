'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { type ModuleKey } from '@/data/modules';
import { useAtom } from 'jotai';
import { atomActiveModule, atomActivePage } from '@/data/local/AtomLocalStorage';

interface DashboardContextType {
	activeModule: ModuleKey;
	activePage: string;
	setActiveModule: (module: ModuleKey) => void;
	setActivePage: (page: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
	const [activeModule, setActiveModule] = useAtom<ModuleKey>(atomActiveModule);
	const [activePage, setActivePage] = useAtom(atomActivePage);

	return (
		<DashboardContext.Provider value={{ activeModule, activePage, setActiveModule, setActivePage }}>
			{children}
		</DashboardContext.Provider>
	);
}

export function useDashboard() {
	const context = useContext(DashboardContext);
	if (!context) throw new Error('useDashboard must be used within DashboardProvider');
	return context;
}
