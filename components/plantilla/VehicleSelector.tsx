import { VehicleTemplate } from "@/data/dtos/template";
import {
	Button,
	Card,
	Input,
} from "@heroui/react";

export function VehicleSelector({
	vehicleTemplatesMock,
	selectedTemplate,
	setSelectedTemplate,
}: {
	vehicleTemplatesMock: VehicleTemplate[];
	selectedTemplate: VehicleTemplate;
	setSelectedTemplate: (
		selection: VehicleTemplate
	) => void;
}) {
	return (
		<Card className="flex h-full flex-col border border-default-200 p-6">
			<Card.Header>
				<Card.Title className="text-base sm:text-lg">
					Subtipos de Equipos
				</Card.Title>
				<Card.Description>
					Plantillas Vehiculares
				</Card.Description>
			</Card.Header>

            <Card.Content className="flex min-h-0 flex-1 flex-col overflow-hidden gap-3">
				<Input placeholder="Buscar plantilla..." />

                <div className="grid h-60 gap-2 px-2 overflow-y-auto sm:grid-cols-2 xl:h-full xl:grid-cols-1 xl:min-h-0">
					{vehicleTemplatesMock.map(
						(template) => {
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
									className="h-auto w-full rounded-2xl justify-start py-3 whitespace-normal"
									onPress={() =>
										setSelectedTemplate(
											template
										)
									}
								>
									<div className="w-full text-left">
										<p className="text-sm font-semibold leading-5 break-words">
											{
												`${template.brand}-${template.model}`
											}
										</p>

										<p className="text-xs opacity-70">
											{
												template.seatType.label
											}
										</p>
									</div>
								</Button>
							);
						}
					)}
				</div>
			</Card.Content>
		</Card>
	);
}
