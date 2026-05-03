"use client"
import { Card, CardHeader, Button, Select, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";

export function MantenimientoNeumaticosPanel() {
	return (
		<Card className="border border-slate-200 shadow-sm">
			<CardHeader className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex justify-between items-center">
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">4. Gestión de Neumáticos</p>
					<h2 className="text-2xl font-semibold text-slate-900">Mantenimiento de neumáticos</h2>
				</div>
				<Button className="bg-brand-600 text-white shadow-sm">
					Nuevo mantenimiento
				</Button>
			</CardHeader>
			<Card.Content className="p-6">
				<div className="grid grid-cols-1 xl:grid-cols-[1.6fr_1fr] gap-6">
					<Card className="border border-slate-200 overflow-hidden">
						<div className="px-5 py-4 border-b border-slate-200 flex justify-between items-center">
							<h3 className="font-semibold text-slate-800">Control operativo</h3>
							{/* <Select */}
							{/* 	placeholder="Todos los estados" */}
							{/* 	className="w-48" */}
							{/* > */}
							{/* 	<SelectItem key="all">Todos los estados</SelectItem> */}
							{/* 	<SelectItem key="operativo">Operativo</SelectItem> */}
							{/* 	<SelectItem key="mantenimiento">Mantenimiento</SelectItem> */}
							{/* 	<SelectItem key="observado">Observado</SelectItem> */}
							{/* </Select> */}
						</div>
						<Table aria-label="Neumáticos table">
							<Table.Content>
								<Table.Header>
									<Table.Column>Código</Table.Column>
									<Table.Column>Unidad</Table.Column>
									<Table.Column>Ubicación</Table.Column>
									<Table.Column>Banda</Table.Column>
									<Table.Column>Estado</Table.Column>
								</Table.Header>
								<Table.Body>
									<TableRow key="1">
										<Table.Cell className="font-mono">NEU-00418</Table.Cell>
										<Table.Cell>Bus-045</Table.Cell>
										<Table.Cell>Eje traccional derecho</Table.Cell>
										<Table.Cell>2 mm</Table.Cell>
										<Table.Cell><Chip color="danger" size="sm">Crítico</Chip></Table.Cell>
									</TableRow>
									<TableRow key="2">
										<Table.Cell className="font-mono">NEU-00302</Table.Cell>
										<Table.Cell>Carga-012</Table.Cell>
										<Table.Cell>Eje 2 interno</Table.Cell>
										<Table.Cell>9 mm</Table.Cell>
										<Table.Cell><Chip color="success" size="sm">Operativo</Chip></Table.Cell>
									</TableRow>
									<TableRow key="3">
										<TableCell className="font-mono">NEU-00591</TableCell>
										<TableCell>Bus-088</TableCell>
										<TableCell>Direccional izquierdo</TableCell>
										<TableCell>6 mm</TableCell>
										<TableCell><Chip color="warning" size="sm">Inspección</Chip></TableCell>
									</TableRow>
								</Table.Body>
							</Table.Content>
						</Table>
					</Card>
					<div className="space-y-4">
						<Card className="border border-slate-200 p-5 bg-slate-50">
							<h3 className="font-semibold text-slate-800 mb-3">Resumen</h3>
							<div className="space-y-3 text-sm text-slate-600">
								<div className="flex justify-between"><span>En mantenimiento</span><strong className="text-slate-900">12</strong></div>
								<div className="flex justify-between"><span>Requieren cambio</span><strong className="text-red-600">4</strong></div>
								<div className="flex justify-between"><span>Inspección hoy</span><strong className="text-amber-600">9</strong></div>
							</div>
						</Card>
						<Card className="border border-slate-200 p-5">
							<h3 className="font-semibold text-slate-800 mb-3">Acciones</h3>
							<div className="grid grid-cols-2 gap-2 text-sm">
								<Button className="rounded-xl">Registrar OT</Button>
								<Button className="rounded-xl">Inspección</Button>
								<Button className="rounded-xl">Enviar a reparación</Button>
								<Button className="rounded-xl">Historial</Button>
							</div>
						</Card>
					</div>
				</div>
			</Card.Content>
		</Card>
	);
}
