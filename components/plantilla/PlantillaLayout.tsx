import {
	Button,
	Card,
	Input,
	Select,
	Tabs,
} from "@heroui/react";
import { useMemo, useState } from "react";

type Vehicle = {
	id: number;
	code: string;
	type: string;
};

const vehiclesMock: Vehicle[] = [
	{ id: 1, code: "BUS-001", type: "Bus Urbano" },
	{ id: 2, code: "BUS-002", type: "Bus Interprovincial" },
	{ id: 3, code: "VAN-101", type: "Van" },
	{ id: 4, code: "CAM-301", type: "Camión" },
];

const seatTypes = [
	{ id: "standard", label: "Estándar" },
	{ id: "semi-cama", label: "Semi Cama" },
	{ id: "cama", label: "Cama" },
	{ id: "vip", label: "VIP" },
];

export function PlantillaLayout() {
	const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(
		vehiclesMock[0],
	);

	const [seatType, setSeatType] = useState("standard");

	const selectedSeat = useMemo(() => {
		return seatTypes.find((x) => x.id === seatType);
	}, [seatType]);

	return (
		<div className="flex h-screen gap-4 p-4">
			{/* LEFT SIDE */}
			<Card className="w-[320px] min-w-[320px] border border-default-200">
				<Card.Header className="flex flex-col items-start gap-1 border-b border-default-100 px-4 py-4">
					<Card.Title>
						Vehículos
					</Card.Title>

					<Card.Description>
						Seleccione una unidad para editar
						la plantilla. 
					</Card.Description>
				</Card.Header>

				<Card.Content className="flex flex-col gap-4 p-4">
					<Input
						placeholder="Buscar vehículo..."
					/>

					<div className="flex flex-col gap-2 overflow-y-auto">
						{vehiclesMock.map((vehicle) => {
							const isSelected =
								selectedVehicle.id ===
								vehicle.id;

							return (
								<Button
									key={vehicle.id}
									variant={
										isSelected
											? "primary"
											: "outline"
									}
									className="h-auto justify-start py-3 w-full"
									onPress={() =>
										setSelectedVehicle(
											vehicle,
										)
									}
								>
									<div className="flex flex-col items-start">
										<span className="font-semibold">
											{
												vehicle.code
											}
										</span>

										<span className="text-xs opacity-70">
											{
												vehicle.type
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
				<Card.Header className="flex flex-row items-start justify-between border-b border-default-100 px-6 py-5">
					<div className="flex flex-col gap-1">
						<Card.Title className="text-2xl">
							Plantilla de Vehículo
						</Card.Title>

						<Card.Description>
							{selectedVehicle.code} ·{" "}
							{selectedVehicle.type}
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

				<Card.Content className="p-6">
					<Tabs
						variant="secondary"
						defaultSelectedKey="llantas"
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

								<Tabs.Tab id="otros">
									<Tabs.Separator />
									Otros Equipos
									<Tabs.Indicator />
								</Tabs.Tab>
							</Tabs.List>
						</Tabs.ListContainer>

						<Tabs.Panel
							id="llantas"
							className="pt-6"
						>
							<div className="rounded-xl border border-default-200 p-4">
								<h3 className="font-semibold">
									Configuración de
									Llantas y Ejes
								</h3>

								<p className="mt-2 text-sm text-default-500">
									Aquí iría la
									distribución de
									ejes, llantas,
									posiciones y
									plantillas.
								</p>
							</div>
						</Tabs.Panel>

						<Tabs.Panel
							id="asientos"
							className="pt-6"
						>
							<div className="flex max-w-md flex-col gap-4">
								<Select
									placeholder="Seleccione un tipo"
									onSelectionChange={(
										keys,
									) => {

									}}
								>
								</Select>

								<Card
									variant="secondary"
									className="border border-default-200"
								>
									<Card.Content className="p-4">
										<p className="text-sm text-default-500">
											Tipo
											seleccionado
										</p>

										<p className="font-semibold">
											{
												selectedSeat?.label
											}
										</p>
									</Card.Content>
								</Card>
							</div>
						</Tabs.Panel>

						<Tabs.Panel
							id="otros"
							className="pt-6"
						>
							<div className="rounded-xl border border-default-200 p-4">
								<h3 className="font-semibold">
									Otros Equipos
								</h3>

								<p className="mt-2 text-sm text-default-500">
									GPS, cámaras,
									pantallas, aire
									acondicionado y
									las otras veinte
									cosas que después
									nadie documenta
									correctamente.
								</p>
							</div>
						</Tabs.Panel>
					</Tabs>
				</Card.Content>
			</Card>
		</div>
	);
}
