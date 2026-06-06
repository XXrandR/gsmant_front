export type ModuleKey =
	| 'inicio'
	| 'equipos'
	| 'planificacion'
	| 'operacion'
	| 'reportes';

export interface ModulePage {
	key: string;
	name: string;
	description?: string;
}

export interface Module {
	key: ModuleKey;
	name: string;
	icon: string;
	pages: ModulePage[];
}

export const modules: Module[] = [
	{
		key: 'inicio',
		name: 'Inicio',
		icon: 'fa-sliders',
		pages: [
			{
				key: 'indicador-general',
				name: 'Indicador General',
			},
			{
				key: 'monitor-ots',
				name: 'Monitor de Órdenes de Trabajo',
			},
		],
	},

	{
		key: 'equipos',
		name: 'Gestión de Equipos',
		icon: 'fa-toolbox',
		pages: [
			{
				key: 'vehiculos',
				name: 'Vehículos',
				description: 'Documentos, modelo, marca',
			},
			{
				key: 'otros-equipos',
				name: 'Otros Equipos',
				description: 'Modelo, marca',
			},
			{
				key: 'neumaticos',
				name: 'Neumáticos',
				description:
					'Maestro, rotación, tipos, banda, proveedores, bajas, reparación',
			},
			{
				key: 'plantilla',
				name: 'Plantilla',
				description:
					'Sección de vehículo, configuración de neumáticos',
			},
		],
	},

	{
		key: 'planificacion',
		name: 'Planificación',
		icon: 'fa-wrench',
		pages: [
			{
				key: 'tareas',
				name: 'Tareas',
				description: 'Genera OTs automáticamente',
			},
			{
				key: 'programas',
				name: 'Programas',
				description: 'Lista de actividades y generación automática de OTs',
			},
		],
	},

	{
		key: 'operacion',
		name: 'Operación',
		icon: 'fa-clipboard-list',
		pages: [
			{
				key: 'pedidos',
				name: 'Pedidos',
			},
			{
				key: 'orden-trabajo',
				name: 'Orden de Trabajo',
			},
			{
				key: 'anulacion',
				name: 'Anulación',
				description: 'Usuarios restringidos',
			},
		],
	},

	{
		key: 'reportes',
		name: 'Reportes',
		icon: 'fa-chart-pie',
		pages: [
			{
				key: 'monitor-ots',
				name: 'Monitor de Órdenes de Trabajo',
			},
			{
				key: 'pedidos',
				name: 'Pedidos',
			},
			{
				key: 'checklist',
				name: 'Checklist',
			},
			{
				key: 'vida-util',
				name: 'Reporte de tiempo de vida / estado',
				description: 'Resumido y detallado',
			},
		],
	},
];

/**
 * Get module info by page key
 */
export function getModuleByPageKey(
	pageKey: string
): { moduleKey: ModuleKey; moduleName: string } | null {
	for (const module of modules) {
		if (module.pages.some((page) => page.key === pageKey)) {
			return {
				moduleKey: module.key,
				moduleName: module.name,
			};
		}
	}

	return null;
}

/**
 * Get page info by page key
 */
export function getPageByKey(pageKey: string): {
	module: Module;
	page: ModulePage;
} | null {
	for (const module of modules) {
		const page = module.pages.find((p) => p.key === pageKey);

		if (page) {
			return { module, page };
		}
	}

	return null;
}