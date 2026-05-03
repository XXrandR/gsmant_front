'use client'
import { MantenimientoNeumaticosPanel } from '../panels/MantenimientoNeumaticosPanel';
import { MonitorOtPanel } from '../panels/MonitorOtPanel';
import { ChecklistPanel } from '../panels/ChecklistPanel';
import { IndicadorGeneralPanel } from '../panels/IndicadorGeneralPanel';
import { ReparacionNeumaticosPanel } from '../panels/ReparacionNeumaticosPanel';
import { NotImplementedPanel } from '../panels/NotImplementedPanel';
import { useDashboard } from '@/context/DashboardContext';
import { getModuleByPage } from '@/data/modules';

const implementedPanels: Record<string, React.FC> = {
	'Mantenimiento de neumáticos': MantenimientoNeumaticosPanel,
	'Monitor de Órdenes de Trabajo': MonitorOtPanel,
	'Checklist': ChecklistPanel,
	'Indicador General': IndicadorGeneralPanel,
	'Reparación de neumáticos (con reporte de vida/estado)': ReparacionNeumaticosPanel,
};

export function PagePanels({ activePage }: { activePage: string }) {
	const { activeModule } = useDashboard();
	const moduleInfo = getModuleByPage(activePage);
	const PanelComponent = implementedPanels[activePage];

	if (PanelComponent) {
		return <PanelComponent />;
	}

	return (
		<NotImplementedPanel
			pageName={activePage}
			moduleName={moduleInfo?.moduleName || activeModule}
		/>
	);
}
