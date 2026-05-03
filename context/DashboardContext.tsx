// context/DashboardContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { type ModuleKey } from '@/data/modules';

interface DashboardContextType {
	activeModule: ModuleKey;
	activePage: string;
	setActiveModule: (module: ModuleKey) => void;
	setActivePage: (page: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
	const [activeModule, setActiveModule] = useState<ModuleKey>('Gestión de Neumáticos');
	const [activePage, setActivePage] = useState('Mantenimiento de neumáticos');

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
