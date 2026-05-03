// components/panels/MonitorOtPanel.tsx
import { Card, CardHeader, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";

export function MonitorOtPanel() {
	return (
		<Card className="border border-slate-200 shadow-sm overflow-hidden">
			<CardHeader className="px-6 py-5 border-b border-slate-200 bg-slate-50/70 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-1">6. Planificación y Operación</p>
					<h2 className="text-2xl font-semibold text-slate-900">Monitor de Órdenes de Trabajo</h2>
				</div>
				<div className="flex gap-2">
					<Button className="rounded-xl">Filtrar</Button>
					<Button className="bg-brand-600 text-white rounded-xl">Generar OT</Button>
				</div>
			</CardHeader>
			<Card.Content className="p-6">
				<div className="grid grid-cols-1 xl:grid-cols-[1.7fr_1fr] gap-6">
					<Card className="border border-slate-200 overflow-hidden">
						<Table aria-label="OTs table">
							<TableHeader>
								<TableColumn>ID OT</TableColumn>
								<TableColumn>Vehículo</TableColumn>
								<TableColumn>Tipo</TableColumn>
								<TableColumn>Estado</TableColumn>
								<TableColumn>Evidencia</TableColumn>
							</TableHeader>
							<TableBody>
								<TableRow key="1">
									<TableCell className="font-mono">#OT-2049</TableCell>
									<TableCell>Bus-045</TableCell>
									<TableCell>Preventivo</TableCell>
									<TableCell><Chip color="warning" size="sm">En Proceso</Chip></TableCell>
									<TableCell>2 fotos</TableCell>
								</TableRow>
								<TableRow key="2">
									<TableCell className="font-mono">#OT-2050</TableCell>
									<TableCell>Carga-012</TableCell>
									<TableCell>Correctivo</TableCell>
									<TableCell><Chip color="danger" size="sm">Retrasado</Chip></TableCell>
									<TableCell>Pendiente</TableCell>
								</TableRow>
								<TableRow key="3">
									<TableCell className="font-mono">#OT-2051</TableCell>
									<TableCell>Bus-088</TableCell>
									<TableCell>Lavado</TableCell>
									<TableCell><Chip color="success" size="sm">Cerrado</Chip></TableCell>
									<TableCell>1 foto</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Card>
					<Card className="border border-slate-200 p-5 bg-slate-50">
						<h3 className="font-semibold text-slate-800 mb-3">Gestión OT</h3>
						<ul className="space-y-2 text-sm text-slate-600">
							<li>Cierre o anulación restringida</li>
							<li>Evidencia con foto u otros</li>
							<li>Configuración de tareas</li>
							<li>Mantenimiento de pedidos</li>
							<li>Estadística de retraso</li>
						</ul>
					</Card>
				</div>
			</Card.Content>
		</Card>
	);
}
