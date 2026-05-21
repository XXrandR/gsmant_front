'use client';
import { useState } from 'react';
import { useDashboard } from '@/context/DashboardContext';
import { modules, type ModuleKey } from '@/data/modules';
import Link from 'next/link'
import {
	Dropdown,
	Button,
	Input,
	Avatar,
	Drawer,
} from "@heroui/react";
import {
	Bars,
	ChevronRight,
} from "@gravity-ui/icons";
import { Grid } from 'lucide-react';
import { HeaderUserSection } from './HeaderUserSection';

export function Header() {
	const { activeModule, activePage, setActiveModule, setActivePage, } = useDashboard();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleSelectionChange = (
		page: string,
		moduleKey: ModuleKey,
	) => {
		setActiveModule(moduleKey);
		setActivePage(page);
		setIsMenuOpen(false);
	};
	const activeModuleData = modules.find((m) => m.key === activeModule,) || {
		key: 'inicio',
		name: 'Inicio',
		icon: 'fa-sliders',
		pages: [ { key: 'indicador-general',name: 'Indicador General',},],};
	const activeModulePageData = activeModuleData.pages.find((m) => m.key === activePage)

	return (
		<div>
			<div className="absolute inset-x-0 top-0 h-20 pointer-events-none" />
			<div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-2">
				<div className="glass-panel rounded-2xl border border-red-200/50 shadow-lg shadow-slate-200/60 px-3 sm:px-4 py-3 sm:py-4">
					<div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
						<div className="flex items-center justify-between xl:hidden">
							<div className="flex items-center gap-3">
								<div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-300/50">
									<img
										src="/icon.png"
										alt="GSMANT Logo"
										className="w-11 h-11 object-contain"
									/>
								</div>
								<div>
									<h1
										className="text-2xl tracking-wide text-slate-950"
										style={{ fontFamily: 'Serpentine' }}
									>
										GSMANT
									</h1>
									<p className="text-xs text-slate-500">
										{activeModuleData?.name}
									</p>
								</div>
							</div>
							<Drawer
								isOpen={isMenuOpen}
								onOpenChange={setIsMenuOpen}
							>
								<Button
									isIconOnly
									className="bg-black"
									onPress={() => setIsMenuOpen(true)}
								>
									<Bars className="size-5" />
								</Button>

								<Drawer.Content placement="left">
									<Drawer.Backdrop />
									<Drawer.Dialog className="max-w-[320px]">
										<Drawer.CloseTrigger onPress={() => setIsMenuOpen(false)} />
										<Drawer.Header className="border-b border-slate-200 pb-4">
											<div className="flex items-center gap-3 flex-row">
												<div className="flex size-11 items-center justify-center rounded-2xl bg-slate-100">
													<i className="fa-solid fa-truck-fast text-brand-500" />
												</div>
												<div>
													<Drawer.Heading className="text-lg font-bold">
														GSMANT
													</Drawer.Heading>
													<p className="text-xs text-slate-500">
														Módulos del Sistema
													</p>
												</div>
											</div>
											<Input
												className="w-full xl:w-[320px]"
												placeholder="Buscar placa, OT, neumático o módulo..."
												variant="secondary"
											/>
										</Drawer.Header>
										<Drawer.Body className="py-4">
											{/* MODULES */}
											<div className="flex flex-col gap-5">
												{modules.map((module) => (
													<div
														key={module.key}
														className="flex flex-col gap-2"
													>
														<div className="flex items-center gap-2 px-1">
															<Grid className="size-4 text-slate-400" />
															<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
																{module.name}
															</p>
														</div>

														<div className="flex flex-col gap-1">
															{module.pages.map((page) => {
																const isActive = activePage === page.key && activeModule === module.key;
																return (
																	<Link
																		key={page.key}
																		href={`/dashboard/${module.key}/${page.key}`}
																		onClick={() =>
																			handleSelectionChange(
																				page.key,
																				module.key
																			)
																		}
																		className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-all ${
																			isActive
																				? "bg-slate-950 text-white"
																				: "text-slate-700 hover:bg-slate-100"
																		}`}
																	>
																		<span>{page.name}</span>
																		<ChevronRight className="size-4 opacity-60" />
																	</Link>
																);
															})}
														</div>

													</div>
												))}
											</div>
										</Drawer.Body>
										<Drawer.Footer>
											<div className="flex items-center justify-center sm:justify-start gap-3 rounded-2xl bg-slate-950 px-3 py-2 text-white shrink-0 my-4">
												<Avatar className="w-9 h-9 rounded-xl bg-brand-600 text-white" />
												<div className="leading-tight">
													<p className="text-sm font-medium">
														Jefe de Taller
													</p>
													<p className="text-xs text-slate-300">
														Admin Flota Lima
													</p>
												</div>
											</div>
										</Drawer.Footer>
									</Drawer.Dialog>
								</Drawer.Content>
							</Drawer>
						</div>
						<div className="hidden xl:flex items-center gap-8 w-full">
							<div className="flex items-center gap-4 shrink-0">
								<div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-300/50">
									<img
										src="/icon.png"
										alt="GSMANT Logo"
										className="w-10 h-10 object-contain"
									/>
								</div>
								<div>
									<h1 className="text-2xl font-bold text-slate-950" style={{ fontFamily: 'Serpentine' }}>
										GSMANT
									</h1>
								</div>
							</div>
							<div className="w-full flex items-center justify-center">
								<div className="flex gap-2 min-w-max pb-1">
									{modules.map((module) => (
										<Dropdown key={module.key}>
											<Button
												size="sm"
												className={`module-tab px-4 py-2 rounded-2xl text-sm font-medium ${activeModule === module.key
													? "bg-slate-950 text-white"
													: "bg-white border-slate-200 text-slate-700"
													}`}
											>
												{module.name}
											</Button>
											<Dropdown.Popover>
												<Dropdown.Menu
													aria-label={module.name}
													selectionMode="single"
													selectedKeys={
														activeModule === module.key
															? new Set([activePage])
															: new Set()
													}
													className="max-h-96 overflow-y-auto custom-scrollbar"
												>
													{module.pages.map((page) => (
														<Dropdown.Item key={page.key}>
															<Link onClick={() => {handleSelectionChange(page.key,module.key)}} 
																href={`/dashboard/${module.key}/${page.key}`}>
																{page.name}
															</Link>
														</Dropdown.Item>
													))}
												</Dropdown.Menu>
											</Dropdown.Popover>
										</Dropdown>
									))}
								</div>
							</div>
							<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full xl:w-auto">
								<Input
									className="w-full xl:w-[320px]"
									placeholder="Buscar placa, OT, neumático o módulo..."
									variant="secondary"
								/>
								<HeaderUserSection />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-4 sm:px-6 xl:px-8 pb-2 overflow-x-auto">
				<div className="flex items-center text-sm text-slate-500 min-w-max">
					<span className="hover:text-brand-600 cursor-pointer whitespace-nowrap">
						Modulos del Sistema
					</span>
					<i className="fa-solid fa-chevron-right mx-2 text-[10px]" />
					<span className="hover:text-brand-600 cursor-pointer whitespace-nowrap">
						{activeModuleData?.name || activeModule}
					</span>
					<i className="fa-solid fa-chevron-right mx-2 text-[10px]" />

					<span className="font-semibold text-slate-800 whitespace-nowrap">
						{activeModulePageData?.name || 'inicio'}
					</span>
				</div>
			</div>
		</div>
	);
}
