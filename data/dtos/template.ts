export type SeatType = {
	id: string;
	label: string;
};

export type VehicleTemplate = {
	id: number;
	model: string;
	brand: string;
    seatType: SeatType;
};