import { SeatType, VehicleTemplate } from "./dtos/template";

export const vehicleTemplatesMock: VehicleTemplate[] = [
	{
		id: 1,
		model: "MLS-100",
		brand: "Volvo",
		seatType: { id: "standard", label: "Estándar" },
	},
	{
		id: 2,
		model: "M2 106",
		brand: "Scania",
		seatType: { id: "semi-cama", label: "Semi Cama" },
	},
	{
		id: 3,
		model: "M2 112",
		brand: "Volvo",
		seatType: { id: "cama", label: "Cama" },
	},
	{
		id: 4,
		model: "K360",
		brand: "Scania",
		seatType: { id: "vip", label: "VIP" },
	},
	{
		id: 5,
		model: "Paradiso 1800",
		brand: "Mercedes-Benz",
		seatType: { id: "standard", label: "Estándar" },
	},
	{
		id: 6,
		model: "G7 1200",
		brand: "Marcopolo",
		seatType: { id: "semi-cama", label: "Semi Cama" },
	},
	{
		id: 7,
		model: "i6",
		brand: "Irizar",
		seatType: { id: "cama", label: "Cama" },
	},
	{
		id: 8,
		model: "Comil Campione",
		brand: "Comil",
		seatType: { id: "vip", label: "VIP" },
	},
	{
		id: 9,
		model: "B450R",
		brand: "Volvo",
		seatType: { id: "standard", label: "Estándar" },
	},
	{
		id: 10,
		model: "Futura",
		brand: "VDL",
		seatType: { id: "semi-cama", label: "Semi Cama" },
	},
	{
		id: 11,
		model: "Lion's Coach",
		brand: "MAN",
		seatType: { id: "cama", label: "Cama" },
	},
	{
		id: 12,
		model: "Tourismo",
		brand: "Mercedes-Benz",
		seatType: { id: "vip", label: "VIP" },
	},
];

export const seatTypes: SeatType[] = [
	{ id: "standard", label: "Estándar" },
	{ id: "semi-cama", label: "Semi Cama" },
	{ id: "cama", label: "Cama" },
	{ id: "vip", label: "VIP" },
];