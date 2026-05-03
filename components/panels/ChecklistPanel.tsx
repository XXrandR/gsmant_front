// components/panels/ChecklistPanel.tsx
import { Card, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

export function ChecklistPanel() {
	return (
		<Card className="border border-slate-200 shadow-sm">
			<CardHeader className="px-6 py-5 border-b border-slate-200">
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">7. Reportes</p>
					<h2 className="text-2xl font-semibold text-slate-900">Checklist</h2>
				</div>
			</CardHeader>
			<Card.Content className="p-6">
				<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
					<Card className="border border-slate-200 p-4">
						<p className="text-sm text-slate-500">Pendientes</p>
						<p className="text-2xl font-bold text-slate-900 mt-2">14</p>
					</Card>
					<Card className="border border-slate-200 p-4">
						<p className="text-sm text-slate-500">Completados</p>
						<p className="text-2xl font-bold text-slate-900 mt-2">121</p>
					</Card>
					<Card className="border border-slate-200 p-4">
						<p className="text-sm text-slate-500">Observaciones</p>
						<p className="text-2xl font-bold text-slate-900 mt-2">9</p>
					</Card>
					<Card className="border border-slate-200 p-4">
						<p className="text-sm text-slate-500">Sin evidencia</p>
						<p className="text-2xl font-bold text-red-600 mt-2">3</p>
					</Card>
				</div>
				<Card className="border border-slate-200 overflow-hidden">
					<Table aria-label="Checklist table">
						<TableHeader>
							<TableColumn>Unidad</TableColumn>
							<TableColumn>Fecha</TableColumn>
							<TableColumn>Inspector</TableColumn>
							<TableColumn>Resultado</TableColumn>
						</TableHeader>
						<TableBody>
							<TableRow key="1">
								<TableCell>Bus-045</TableCell>
								<TableCell>25/04/2026</TableCell>
								<TableCell>M. Salazar</TableCell>
								<TableCell>Con observaciones</TableCell>
							</TableRow>
							<TableRow key="2">
								<TableCell>Carga-012</TableCell>
								<TableCell>25/04/2026</TableCell>
								<TableCell>R. Torres</TableCell>
								<TableCell>Conforme</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Card>
			</Card.Content>
		</Card>
	);
}
