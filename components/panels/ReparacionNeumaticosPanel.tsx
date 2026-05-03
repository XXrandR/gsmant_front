// components/panels/ReparacionNeumaticosPanel.tsx
import { Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@heroui/react";

export function ReparacionNeumaticosPanel() {
	return (
		<Card className="border border-slate-200 shadow-sm">
			<CardHeader className="px-6 py-5 border-b border-slate-200">
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">4. Gestión de Neumáticos</p>
					<h2 className="text-2xl font-semibold text-slate-900">Reparación de neumáticos (con reporte de vida/estado)</h2>
				</div>
			</CardHeader>
			<Card.Content className="p-6">
				<div className="grid xl:grid-cols-[1.3fr_1fr] gap-6">
					<Card className="border border-slate-200 overflow-hidden">
						<Table aria-label="Neumáticos reparación">
							<TableHeader>
								<TableColumn>Código</TableColumn>
								<TableColumn>Falla</TableColumn>
								<TableColumn>Vida útil</TableColumn>
								<TableColumn>Estado</TableColumn>
							</TableHeader>
							<TableBody>
								<TableRow key="1">
									<TableCell className="font-mono">NEU-00418</TableCell>
									<TableCell>Corte lateral</TableCell>
									<TableCell>74%</TableCell>
									<TableCell><Chip color="danger" size="sm">Urgente</Chip></TableCell>
								</TableRow>
								<TableRow key="2">
									<TableCell className="font-mono">NEU-00277</TableCell>
									<TableCell>Pinchadura múltiple</TableCell>
									<TableCell>58%</TableCell>
									<TableCell><Chip color="warning" size="sm">Programado</Chip></TableCell>
								</TableRow>
							</TableBody>
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
