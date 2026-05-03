// data/modules.ts
export type ModuleKey =
	| 'Inicio'
	| 'Gestión de Equipos'
	| 'Gestión de Neumáticos'
	| 'Gestión de Mantenimiento'
	| 'Planificación y Operación'
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
		pages: ['Indicador General'],
	},
	{
		key: 'Gestión de Equipos',
		name: 'Gestión de Equipos',
		icon: 'fa-toolbox',
		pages: [
			'Maestro de equipos',
			'Tipo de equipos',
			'Subtipo de equipos',
			'Configuración de neumáticos',
			'Asignación de plantilla',
			'Asignación de características',
			'Asignación de repuesto',
			'Sección de Vehículo',
			'Subsecciones y Asignación de Componentes',
			'Componentes',
			'Plantilla de Ejes del Vehículo (mantenimiento y asignación)',
			'Configuración de tipo de Ejes',
		],
	},
	{
		key: 'Gestión de Neumáticos',
		name: 'Gestión de Neumáticos',
		icon: 'fa-life-ring',
		pages: [
			'Maestro de neumáticos',
			'Tipos de neumáticos',
			'Tipo de banda',
			'Proveedores de neumáticos (CRUD)',
			'Mantenimiento de tipos de baja',
			'Mantenimiento de motivos de baja',
			'Reporte de tiempo de vida / estado (resumido y detallado)',
			'Mantenimiento de neumáticos',
			'Reparación de neumáticos (con reporte de vida/estado)',
			'Inspección de neumáticos',
		],
	},
	{
		key: 'Gestión de Mantenimiento',
		name: 'Gestión de Mantenimiento',
		icon: 'fa-wrench',
		pages: ['Maestro de mantenimientos', 'Tipos de mantenimientos', 'Subtipo de mantenimientos'],
	},
	{
		key: 'Planificación y Operación',
		name: 'Planificación y Operación',
		icon: 'fa-clipboard-list',
		pages: [
			'Actividades (tipos de acciones)',
			'Tareas (generación de OTs)',
			'Programas (generación periódica de OTs)',
			'Asignación de rotación de neumáticos (validar)',
			'Cierre o Anulación (usuarios restringidos)',
			'Con evidencia (foto u otros)',
			'Monitor de Órdenes de Trabajo',
			'Configuración de tareas (usuarios restringidos)',
			'Mantenimiento de pedidos (con reportes)',
			'Estadística de retraso',
		],
	},
	{
		key: 'Reportes',
		name: 'Reportes',
		icon: 'fa-chart-pie',
		pages: [
			'Checklist',
			'Predictivo',
			'Auxilio',
			'Conservación',
			'Correctivo',
			'Fumigación',
			'Lavado',
			'Preventivo',
			'Revisión Técnica',
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
