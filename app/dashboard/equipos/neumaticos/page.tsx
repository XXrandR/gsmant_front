'use client'
import { Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";

export default function NeumaticosPanel() {
	return (
		<Card className="border border-slate-200 shadow-sm">
			<CardHeader className="px-6 py-5 border-b border-slate-200">
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">Neumáticos</p>
					<h2 className="text-2xl font-semibold text-slate-900">Mantenimiento de neumáticos (monitoreo de estado)</h2>
				</div>
			</CardHeader>
			<Card.Content className="p-6">
				<div className="grid xl:grid-cols-[1.3fr_1fr] gap-6">
					<Card className="border border-slate-200 overflow-hidden">
						<Table aria-label="Neumáticos reparación">
                            <Table.Content  aria-label="Team members" className="min-w-[600px]">
                                <Table.Header>
                                    <Table.Column>Código</Table.Column>
                                    <Table.Column>Falla</Table.Column>
                                    <Table.Column>Vida útil</Table.Column>
                                    <Table.Column>Estado</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row key="1">
                                        <Table.Cell className="font-mono">NEU-00418</Table.Cell>
                                        <Table.Cell>Corte lateral</Table.Cell>
                                        <Table.Cell>74%</Table.Cell>
                                        <Table.Cell><Chip color="danger" size="sm">Urgente</Chip></Table.Cell>
                                    </Table.Row>
                                    <Table.Row key="2">
                                        <Table.Cell className="font-mono">NEU-00277</Table.Cell>
                                        <Table.Cell>Pinchadura múltiple</Table.Cell>
                                        <Table.Cell>58%</Table.Cell>
                                        <Table.Cell><Chip color="warning" size="sm">Programado</Chip></Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Content>
						</Table>
					</Card>
					<Card className="border border-slate-200 p-5 bg-slate-50">
						<h3 className="font-semibold text-slate-800 mb-3">Reporte de vida / estado</h3>
						<p className="text-sm text-slate-600">El módulo cruza reparación, porcentaje de vida remanente, motivo de baja sugerido y trazabilidad por unidad.</p>
					</Card>
				</div>
			</Card.Content>
		</Card>
	);
}
