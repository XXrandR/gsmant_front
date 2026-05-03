'use client';
import { useDashboard } from '@/context/DashboardContext';
import { modules, type ModuleKey } from '@/data/modules';
import {
	Dropdown,
	Button,
	Input,
	Avatar,
} from "@heroui/react";

export function Header() {
	const { activeModule, activePage, setActiveModule, setActivePage } = useDashboard();

	const handleSelectionChange = (page: string, moduleKey: ModuleKey) => {
		setActiveModule(moduleKey);
		setActivePage(page);
	};

	const activeModuleData = modules.find(m => m.key === activeModule);

	return (
		<div className="relative">
			<div className="absolute inset-x-0 top-0 h-24 pointer-events-none" />
			<div className="relative px-4 sm:px-6 lg:px-8 pt-4 pb-3">
				<div className="glass-panel rounded-2xl border border-blue-400/50 shadow-lg shadow-slate-200/60 px-4 sm:px-6 py-4">
					{/* Top row */}
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						<div className="flex items-center gap-4">
							<div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-300/50">
								<i className="fa-solid fa-truck-fast text-brand-500 text-xl" />
							</div>
							<div>
								<h1 className="text-2xl font-bold text-slate-950">GSMANT</h1>
							</div>
						</div>


						{/* Modules Navigation */}
						<div className="mt-5 overflow-x-auto custom-scrollbar">
							<div className="flex gap-2 min-w-max pb-2 items-start">
								{modules.map((module) => (
									<Dropdown key={module.key}>
										<Button
											className={`module-tab px-4 py-3 rounded-2xl text-sm font-medium ${activeModule === module.key ? "bg-slate-950 text-white" : "bg-white border-slate-200 text-slate-700"
												}`}
										>
											{module.name}
										</Button>
										<Dropdown.Popover>
											<Dropdown.Menu
												aria-label={module.name}
												selectionMode="single"
												selectedKeys={activeModule === module.key ? new Set([activePage]) : new Set()}
												className="max-h-96 overflow-y-auto custom-scrollbar"
											>
												{module.pages.map((page) => (
													<Dropdown.Item key={page} onPress={() => handleSelectionChange(page, module.key)}>{page}</Dropdown.Item>
												))}
											</Dropdown.Menu>
										</Dropdown.Popover>
									</Dropdown>
								))}
							</div>
						</div>

						<div className="flex flex-col sm:flex-row sm:items-center gap-3">
							<Input
								placeholder="Buscar placa, OT, neumático o módulo..." variant="secondary" />
							<div className="flex items-center gap-3">
								<div className="flex items-center gap-3 rounded-2xl bg-slate-950 px-3 py-2 text-white">
									<Avatar className="w-9 h-9 rounded-xl bg-brand-600 text-white" />
									<div className="leading-tight">
										<p className="text-sm font-medium">Jefe de Taller</p>
										<p className="text-xs text-slate-300">Admin Flota Lima</p>
									</div>
								</div>
							</div>
						</div>

					</div>

					{/* Breadcrumb + Actions */}
					<div className="mt-4 flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
						<div className="flex items-center text-slate-500 text-sm">
							<span className="hover:text-brand-600 cursor-pointer">GSMANT MODULOS</span>
							<i className="fa-solid fa-chevron-right mx-2 text-[10px]" />
							<span className="hover:text-brand-600 cursor-pointer">
								{activeModuleData?.name || activeModule}
							</span>
							<i className="fa-solid fa-chevron-right mx-2 text-[10px]" />
							<span className="font-semibold text-slate-800">{activePage}</span>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
