import {
	Button,
	Card,
	Input,
	Select,
	Tabs,
} from "@heroui/react";
import { useMemo, useState } from "react";

type VehicleTemplate = {
	id: number;
	name: string;
	model: string;
	brand: string;
};

const vehicleTemplatesMock: VehicleTemplate[] = [
	{
		id: 1,
		name: "BUS CONVENCIONAL 4X2",
		model: "MLS-100",
		brand: "Volvo",
	},
	{
		id: 2,
		name: "BUS ELECTRONICO EURO II O400 RSD 6X2",
		model: "M2 106",
		brand: "Scania",
	},
	{
		id: 3,
		name: "BUS ELECTRONICO EURO II O500 RSE 4X2 STANDAR V2011",
		model: "M2 112",
		brand: "Volvo",
	},
	{
		id: 4,
		name: "BUS ELECTRONICO EURO II O500 RSE 4X2 CLIMATIZADO",
		model: "MLS-100",
		brand: "Scania",
	},
	{
		id: 5,
		name: "BUS ELECTRONICO O400 RSE 4X2",
		model: "M2 106",
		brand: "Volvo",
	},
	{
		id: 6,
		name: "BUS ELECTRONICO EURO III B430R 6X2 STANDAR V2016",
		model: "M2 112",
		brand: "Scania",
	},
];

const seatTypes = [
	{ id: "standard", label: "Estándar" },
	{ id: "semi-cama", label: "Semi Cama" },
	{ id: "cama", label: "Cama" },
	{ id: "vip", label: "VIP" },
];

export function PlantillaLayout() {
	const [selectedTemplate, setSelectedTemplate] =
		useState<VehicleTemplate>(
			vehicleTemplatesMock[0],
		);

	const [seatType, setSeatType] = useState("standard");

const [selectedTab, setSelectedTab] =
	useState("llantas");

	const selectedSeat = useMemo(() => {
		return seatTypes.find((x) => x.id === seatType);
	}, [seatType]);

	return (
		<div className="flex h-screen gap-1 p-1">
			{/* LEFT SIDE */}
			<Card className="w-[320px] min-w-[320px] border border-default-200">
				<Card.Header className="flex flex-col items-start gap-1 px-4 py-4">
					<Card.Title>
						Subtipos de Equipos (Plantillas Vehiculares)
					</Card.Title>
				</Card.Header>

				<Card.Content className="flex flex-col gap-2 p-2">
					<Input
						placeholder="Buscar plantilla..."
					/>

					<div className="flex flex-col gap-2 overflow-y-auto">
						{vehicleTemplatesMock.map((template) => {
							const isSelected =
								selectedTemplate.id ===
								template.id;

							return (
								<Button
									key={template.id}
									variant={
										isSelected
											? "primary"
											: "outline"
									}
									className="h-auto justify-start py-3 w-full whitespace-normal"
									onPress={() =>
										setSelectedTemplate(
											template,
										)
									}
								>
									<div className="flex flex-col items-start w-full text-left">
										<span className="font-semibold text-sm whitespace-normal break-words leading-5 text-left">
											{
												template.name
											}
										</span>

										<span className="text-xs opacity-70">
											{
												template.model
											}
										</span>
									</div>
								</Button>
							);
						})}
					</div>
				</Card.Content>
			</Card>

			{/* RIGHT SIDE */}
			<Card className="flex-1 border border-default-200">
				<Card.Header className="flex flex-row items-start justify-between px-4 py-3">
					<div className="flex flex-col gap-1">
						<Card.Title className="text-2xl">
							Plantilla de Vehículo
						</Card.Title>

						<Card.Description>
							{selectedTemplate.name} ·{" "}
							{selectedTemplate.model}
						</Card.Description>
					</div>

					<div className="flex gap-2">
						<Button variant="danger-soft">
							Cancelar
						</Button>

						<Button variant="primary">
							Guardar
						</Button>
					</div>
				</Card.Header>

				<Card.Content className="p-3">
	<div className="flex gap-4 h-full">
		{/* CENTER PANEL */}
		<div className="flex-1">
			<Tabs
				variant="secondary"
				selectedKey={selectedTab}
				onSelectionChange={(key) =>
					setSelectedTab(String(key))
				}
				className="w-full"
			>
				<Tabs.ListContainer>
					<Tabs.List aria-label="Plantilla Tabs">
						<Tabs.Tab id="llantas">
							Llantas y Ejes
							<Tabs.Indicator />
						</Tabs.Tab>

						<Tabs.Tab id="asientos">
							<Tabs.Separator />
							Asientos
							<Tabs.Indicator />
						</Tabs.Tab>

						<Tabs.Tab id="exterior">
							<Tabs.Separator />
							Exterior
							<Tabs.Indicator />
						</Tabs.Tab>
					</Tabs.List>
				</Tabs.ListContainer>

				{/* TAB LLANTAS */}
<Tabs.Panel
	id="llantas"
	className="pt-3"
>
	<div className="flex flex-col gap-3">
		{/* HEADER */}
			<h3 className="font-semibold text-lg">
				Configuración de Ejes y Neumáticos
			</h3>

			<p className="mt-1 text-sm text-default-500">
				Defina la distribución de ejes,
				tipos y posiciones.
			</p>

			{/* ACTIONS */}
			<div className="mt-6 flex gap-2">
				<Button variant="primary">
					+ Agregar eje
				</Button>

				<Button variant="outline">
					Eliminar
				</Button>
			</div>

			{/* TABLE */}
			<div className="mt-6 overflow-x-auto rounded-xl border border-default-200">
				<table className="w-full border-collapse text-sm">
					<thead className="bg-default-100">
						<tr>
							<th className="border-b border-default-200 p-3 text-left">
								#
							</th>

							<th className="border-b border-default-200 p-3 text-left">
								Tipo Eje
							</th>

							<th className="border-b border-default-200 p-3 text-left">
								Eje Básico
							</th>

							<th className="border-b border-default-200 p-3 text-left">
								Posición
							</th>

							<th className="border-b border-default-200 p-3 text-left">
								Recorrido Máx. (mm)
							</th>

							<th className="border-b border-default-200 p-3 text-left">
								Remanente Min. (mm)
							</th>

							<th className="border-b border-default-200 p-3 text-left">
								Opciones
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="border-b border-default-100 p-3">
								1
							</td>

							<td className="border-b border-default-100 p-3">
								EJE DIRECCIONAL
							</td>

							<td className="border-b border-default-100 p-3">
								EJE 1
							</td>

							<td className="border-b border-default-100 p-3">
								1
							</td>

							<td className="border-b border-default-100 p-3">
								30000
							</td>

							<td className="border-b border-default-100 p-3">
								5
							</td>

							<td className="border-b border-default-100 p-3">
								<div className="flex gap-2">
									<Button
										size="sm"
										variant="outline"
									>
										✏️
									</Button>

									<Button
										size="sm"
										variant="danger-soft"
									>
										🗑
									</Button>
								</div>
							</td>
						</tr>

						<tr>
							<td className="border-b border-default-100 p-3">
								2
							</td>

							<td className="border-b border-default-100 p-3">
								EJE MOTRIZ
							</td>

							<td className="border-b border-default-100 p-3">
								EJE 2
							</td>

							<td className="border-b border-default-100 p-3">
								2
							</td>

							<td className="border-b border-default-100 p-3">
								30000
							</td>

							<td className="border-b border-default-100 p-3">
								5
							</td>

							<td className="border-b border-default-100 p-3">
								<div className="flex gap-2">
									<Button
										size="sm"
										variant="outline"
									>
										✏️
									</Button>

									<Button
										size="sm"
										variant="danger-soft"
									>
										🗑
									</Button>
								</div>
							</td>
						</tr>

						<tr>
							<td className="p-3">
								3
							</td>

							<td className="p-3">
								EJE PORTADOR
							</td>

							<td className="p-3">
								EJE 3
							</td>

							<td className="p-3">
								3
							</td>

							<td className="p-3">
								30000
							</td>

							<td className="p-3">
								5
							</td>

							<td className="p-3">
								<div className="flex gap-2">
									<Button
										size="sm"
										variant="outline"
									>
										✏️
									</Button>

									<Button
										size="sm"
										variant="danger-soft"
									>
										🗑
									</Button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
	

		{/* SUMMARY */}
		<div className="grid grid-cols-5 gap-4">
			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						N° de Ejes
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						4
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Ejes Direccionales
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						1
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Ejes Motrices
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						2
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Ejes Portadores
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						1
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Total Neumáticos
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						16
					</p>
				</Card.Content>
			</Card>
		</div>
	</div>
</Tabs.Panel>
				{/* TAB ASIENTOS */}
<Tabs.Panel
	id="asientos"
	className="pt-3"
>
	<div className="flex flex-col gap-3">
		{/* HEADER */}
			<h3 className="font-semibold text-lg">
				Configuración de Asientos
			</h3>

			<p className="mt-1 text-sm text-default-500">
				Defina la distribución de asientos,
				filas, columnas y numeración automática.
			</p>

			{/* CONFIGURATION */}
			<div className="mt-6 grid grid-cols-4 gap-4">
				{/* DISTRIBUCION */}
				<Card className="border border-default-200">
					<Card.Content className="p-4">
						<p className="mb-3 text-sm font-medium">
							Tipo de distribución
						</p>

						<div className="flex gap-2">
							<Button variant="primary">
								2 x 2
							</Button>

							<Button variant="outline">
								2 x 1
							</Button>

							<Button variant="outline">
								1 x 1
							</Button>
						</div>
					</Card.Content>
				</Card>

				{/* PISO */}
				<Card className="border border-default-200">
					<Card.Content className="p-4">
						<p className="mb-3 text-sm font-medium">
							Piso del vehículo
						</p>

						<div className="flex flex-col gap-2">
							<Button variant="primary">
								Un piso
							</Button>

							<Button variant="outline">
								Doble piso
							</Button>
						</div>
					</Card.Content>
				</Card>

				{/* FILAS */}
				<Card className="border border-default-200">
					<Card.Content className="p-4">
						<p className="mb-3 text-sm font-medium">
							Cantidad de filas
						</p>

						<Input
							type="number"
							defaultValue="13"
						/>

						<p className="mt-2 text-xs text-default-500">
							Incluye filas del 1 al 13
						</p>
					</Card.Content>
				</Card>

				{/* PASILLO */}
				<Card className="border border-default-200">
					<Card.Content className="p-4">
						<p className="mb-3 text-sm font-medium">
							Pasillo
						</p>

						<Select
							placeholder="Seleccione"
						>
						</Select>

						<p className="mt-2 text-xs text-default-500">
							Posición del pasillo
						</p>
					</Card.Content>
				</Card>
			</div>

			{/* ACTIONS */}
			<div className="mt-6 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="h-5 w-10 rounded-full bg-primary relative">
						<div className="absolute right-1 top-1 h-3 w-3 rounded-full bg-white" />
					</div>

					<div>
						<p className="text-sm font-medium">
							Generar numeración automática
						</p>

						<p className="text-xs text-default-500">
							La numeración se asignará de adelante hacia atrás.
						</p>
					</div>
				</div>

				<Button variant="primary">
					Generar distribución
				</Button>
			</div>
		

		{/* SUMMARY */}
		<div className="grid grid-cols-5 gap-4">
			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Total Asientos
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						51
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Por Derecha
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						25
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Por Izquierda
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						26
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Filas
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						13
					</p>
				</Card.Content>
			</Card>

			<Card className="border border-default-200">
				<Card.Content className="p-4 text-center">
					<p className="text-sm text-default-500">
						Columnas
					</p>

					<p className="mt-2 text-3xl font-bold text-primary">
						2 + 2
					</p>
				</Card.Content>
			</Card>
		</div>

		{/* TABLE */}
		<div className="rounded-xl border border-default-200 overflow-x-auto">
			<div className="border-b border-default-200 px-4 py-3">
				<h4 className="font-semibold">
					Vista de datos (lista de asientos)
				</h4>
			</div>

			<table className="w-full border-collapse text-sm">
				<thead className="bg-default-100">
					<tr>
						<th className="border-b border-default-200 p-3 text-left">
							#
						</th>

						<th className="border-b border-default-200 p-3 text-left">
							Fila
						</th>

						<th className="border-b border-default-200 p-3 text-left">
							Columna
						</th>

						<th className="border-b border-default-200 p-3 text-left">
							Lado
						</th>

						<th className="border-b border-default-200 p-3 text-left">
							Posición
						</th>

						<th className="border-b border-default-200 p-3 text-left">
							Ubicación
						</th>

						<th className="border-b border-default-200 p-3 text-left">
							Índice
						</th>

						<th className="border-b border-default-200 p-3 text-left">
							N° Asiento
						</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td className="border-b border-default-100 p-3">
							1
						</td>

						<td className="border-b border-default-100 p-3">
							1
						</td>

						<td className="border-b border-default-100 p-3">
							1
						</td>

						<td className="border-b border-default-100 p-3">
							Izquierda
						</td>

						<td className="border-b border-default-100 p-3">
							V
						</td>

						<td className="border-b border-default-100 p-3">
							I
						</td>

						<td className="border-b border-default-100 p-3">
							1
						</td>

						<td className="border-b border-default-100 p-3">
							1
						</td>
					</tr>

					<tr>
						<td className="border-b border-default-100 p-3">
							2
						</td>

						<td className="border-b border-default-100 p-3">
							1
						</td>

						<td className="border-b border-default-100 p-3">
							2
						</td>

						<td className="border-b border-default-100 p-3">
							Izquierda
						</td>

						<td className="border-b border-default-100 p-3">
							P
						</td>

						<td className="border-b border-default-100 p-3">
							I
						</td>

						<td className="border-b border-default-100 p-3">
							2
						</td>

						<td className="border-b border-default-100 p-3">
							2
						</td>
					</tr>

					<tr>
						<td className="border-b border-default-100 p-3">
							3
						</td>

						<td className="border-b border-default-100 p-3">
							1
						</td>

						<td className="border-b border-default-100 p-3">
							3
						</td>

						<td className="border-b border-default-100 p-3">
							Derecha
						</td>

						<td className="border-b border-default-100 p-3">
							P
						</td>

						<td className="border-b border-default-100 p-3">
							D
						</td>

						<td className="border-b border-default-100 p-3">
							3
						</td>

						<td className="border-b border-default-100 p-3">
							3
						</td>
					</tr>

					<tr>
						<td className="p-3">
							4
						</td>

						<td className="p-3">
							1
						</td>

						<td className="p-3">
							4
						</td>

						<td className="p-3">
							Derecha
						</td>

						<td className="p-3">
							V
						</td>

						<td className="p-3">
							D
						</td>

						<td className="p-3">
							4
						</td>

						<td className="p-3">
							4
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		{/* FOOTER INFO */}
		<div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
			<p className="text-sm text-default-600">
				V = Ventana, P = Pasillo &nbsp; | &nbsp;
				I = Izquierda, D = Derecha
			</p>
		</div>
	</div>
</Tabs.Panel>

				{/* TAB EXTERIOR */}
				<Tabs.Panel
					id="exterior"
					className="pt-3"
				>
					<div className="rounded-xl border border-default-200 p-4">
						<h3 className="font-semibold text-lg">
							Exterior
						</h3>

						<p className="mt-2 text-sm text-default-500">
							Próximamente:
							puertas, ventanas,
							faros y espejos.
						</p>
					</div>
				</Tabs.Panel>
			</Tabs>
		</div>

		{/* RIGHT PANEL */}
		<div className="w-[200px] min-w-[200px]">
			<Card className="h-full border border-default-200">
				<Card.Content className="p-4">
					{/* CROQUIS LLANTAS */}
					{selectedTab ===
						"llantas" && (
						<div className="flex flex-col gap-5 items-center pt-4">
							<div className="flex items-center gap-4">
								<div className="w-7 h-7 rounded-full border-[3px] border-black" />

								<div className="w-12 h-1.5 bg-black rounded-full" />

								<div className="w-7 h-7 rounded-full border-[3px] border-black" />
							</div>

							<div className="flex items-center gap-4">
								<div className="w-7 h-7 rounded-full border-[3px] border-black" />

								<div className="w-12 h-1.5 bg-black rounded-full" />

								<div className="w-7 h-7 rounded-full border-[3px] border-black" />
							</div>

							<div className="text-sm text-default-500 text-center">
								Vista preliminar de
								ejes y neumáticos
							</div>
						</div>
					)}

					{/* CROQUIS ASIENTOS */}
					{selectedTab ===
						"asientos" && (
						<div className="flex justify-center pt-6">
							<div className="grid grid-cols-5 gap-3">
								{Array.from({
									length: 20,
								}).map((_, i) => (
									<>
										<div
											key={`left-${i}`}
											className="w-6 h-6 rounded-lg bg-primary/20 border border-primary flex items-center justify-center text-xs"
										>
											{i * 2 + 1}
										</div>

										<div
											key={`left2-${i}`}
											className="w-6 h-6 rounded-lg bg-primary/20 border border-primary flex items-center justify-center text-xs"
										>
											{i * 2 + 2}
										</div>

										<div />

										<div
											key={`right-${i}`}
											className="w-6 h-6 rounded-lg bg-success/20 border border-success flex items-center justify-center text-xs"
										>
											{i * 2 + 3}
										</div>

										<div
											key={`right2-${i}`}
											className="w-6 h-6 rounded-lg bg-success/20 border border-success flex items-center justify-center text-xs"
										>
											{i * 2 + 4}
										</div>
									</>
								))}
							</div>
						</div>
					)}

					{/* CROQUIS EXTERIOR */}
					{selectedTab ===
						"exterior" && (
						<div className="flex items-center justify-center h-full text-default-400">
							Exterior próximamente
						</div>
					)}
				</Card.Content>
			</Card>
		</div>
	</div>
</Card.Content>
			</Card>
		</div>
	);
}
