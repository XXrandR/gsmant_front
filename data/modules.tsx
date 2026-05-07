// data/modules.ts
export type ModuleKey =
	| 'Inicio'
	| 'Equipos'
	| 'Planificacion'
	| 'Operación'
	| 'Reportes';

export interface Module {
	key: ModuleKey;
	name: string;
	icon: string;
	pages: string[];
}

export const modules: Module[] = [
	{
		key: 'Inicio',
		name: 'Inicio',
		icon: 'fa-sliders',
		pages: ['Indicador General',
			'Monitor de Órdenes de Trabajo',
		],
	},
	{
		key: 'Equipos',
		name: 'Gestión de Equipos',
		icon: 'fa-toolbox',
		pages: [
			'Vehiculos', // (documentos,modelo,marca)
			'Otros Equipos', // (modelo,marca)
			'Componentes', // (Asignación de repuesto)
			'Neumaticos', // (Maestro de neumáticos,Rotacion,Tipos de neumaticos,Tipo de banda, proveedores, tipos de baja,motivos de baja, reparacion)
			'Plantilla', // (Sección de Vehículo, configuracion de neumaticos,)
		],
	},
	{
		key: 'Planificacion',
		name: 'Planificacion',
		icon: 'fa-wrench',
		pages: [
			'Tareas', // (genera OTs en automatico)
			'Programas' // (agrega lista de actividades,genera OTs en automatico)
		],
	},
	{
		key: 'Operación',
		name: 'Operación',
		icon: 'fa-clipboard-list',
		pages: [
			'Pedidos',
			'Cierre OTs',
			'Anulación (usuarios restringidos)',
		],
	},
	{
		key: 'Reportes',
		name: 'Reportes',
		icon: 'fa-chart-pie',
		pages: [
			'Monitor de Órdenes de Trabajo',
			'Pedidos',
			'Checklist',
			'Reporte de tiempo de vida / estado (resumido y detallado)',
		],
	},
];

export function getModuleByPage(pageName: string): { moduleKey: ModuleKey; moduleName: string } | null {
	for (const module of modules) {
		if (module.pages.includes(pageName)) {
			return { moduleKey: module.key, moduleName: module.name };
		}
	}
	return null;
}
