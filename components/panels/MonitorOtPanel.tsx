import { Card, CardHeader, Button, Table, Chip } from "@heroui/react";

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
					<Button className="bg-brand-600 text-white rounded-xl">Exportar estado OTs</Button>
				</div>
			</CardHeader>
			<Card.Content className="p-6">
				<div className="grid grid-cols-1 xl:grid-cols-[1.7fr_1fr] gap-6">
					<Card className="border border-slate-200 overflow-hidden">
						<Table aria-label="OTs table">
							<Table.ScrollContainer>
								<Table.Content aria-label="Team members" className="min-w-[600px]">
									<Table.Header>
										<Table.Column>ID OT</Table.Column>
										<Table.Column>Vehículo</Table.Column>
										<Table.Column>Tipo</Table.Column>
										<Table.Column>Estado</Table.Column>
										<Table.Column>Evidencia</Table.Column>
									</Table.Header>
									<Table.Body>
										<Table.Row key="1">
											<Table.Cell className="font-mono">#OT-2049</Table.Cell>
											<Table.Cell>Bus-045</Table.Cell>
											<Table.Cell>Preventivo</Table.Cell>
											<Table.Cell><Chip color="warning" size="sm">En Proceso</Chip></Table.Cell>
											<Table.Cell>2 fotos</Table.Cell>
										</Table.Row>
										<Table.Row key="2">
											<Table.Cell className="font-mono">#OT-2050</Table.Cell>
											<Table.Cell>Carga-012</Table.Cell>
											<Table.Cell>Correctivo</Table.Cell>
											<Table.Cell><Chip color="danger" size="sm">Retrasado</Chip></Table.Cell>
											<Table.Cell>Pendiente</Table.Cell>
										</Table.Row>
										<Table.Row key="3">
											<Table.Cell className="font-mono">#OT-2051</Table.Cell>
											<Table.Cell>Bus-088</Table.Cell>
											<Table.Cell>Lavado</Table.Cell>
											<Table.Cell><Chip color="success" size="sm">Cerrado</Chip></Table.Cell>
											<Table.Cell>1 foto</Table.Cell>
										</Table.Row>
									</Table.Body>
								</Table.Content>
							</Table.ScrollContainer>
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
