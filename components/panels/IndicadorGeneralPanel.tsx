// components/panels/IndicadorGeneralPanel.tsx
import { Card, CardHeader } from "@heroui/react";

export function IndicadorGeneralPanel() {
	return (
		<Card className="border border-slate-200 shadow-sm">
			<CardHeader className="px-6 py-5 border-b border-slate-200">
				<div>
					<p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">1. Configuración General</p>
					<h2 className="text-2xl font-semibold text-slate-900">Indicador General</h2>
				</div>
			</CardHeader>
			<Card.Content className="p-6">
				<div className="grid md:grid-cols-3 gap-4">
					<Card className="bg-slate-950 text-white p-5">
						<p className="text-sm text-slate-300">Disponibilidad</p>
						<p className="text-3xl font-bold mt-2">98.2%</p>
					</Card>
					<Card className="border border-slate-200 p-5">
						<p className="text-sm text-slate-500">OTs abiertas</p>
						<p className="text-3xl font-bold mt-2 text-slate-900">42</p>
					</Card>
					<Card className="border border-slate-200 p-5">
						<p className="text-sm text-slate-500">Flota activa</p>
						<p className="text-3xl font-bold mt-2 text-slate-900">186</p>
					</Card>
				</div>
			</Card.Content>
		</Card>
	);
}
