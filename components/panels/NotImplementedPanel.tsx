// components/panels/NotImplementedPanel.tsx
import { Card } from "@heroui/react";

interface NotImplementedPanelProps {
	pageName: string;
	moduleName: string;
}

export function NotImplementedPanel({ pageName, moduleName }: NotImplementedPanelProps) {
	return (
		<Card className="border border-slate-200 shadow-sm p-8 text-center">
			<Card.Content className="items-center">
				<div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
					<i className="fa-solid fa-hourglass-half text-2xl" />
				</div>
				<h2 className="text-2xl font-semibold text-slate-900 mb-2">{pageName}</h2>
				<p className="text-slate-500 max-w-2xl">
					{moduleName} está registrado en el navbar y su vista detallada aún no está implementada.
				</p>
			</Card.Content>
		</Card>
	);
}
