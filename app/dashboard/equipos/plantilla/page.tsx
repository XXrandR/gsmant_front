"use client";
import { AsientosPanel } from "@/components/plantilla/AsientosPanel";
import { AsientosPanelDetalle } from "@/components/plantilla/AsientosPanelDetalle";
import { ExteriorPanel } from "@/components/plantilla/ExteriorPanel";
import { ExteriorPanelDetalle } from "@/components/plantilla/ExteriorPanelDetalle";
import { LlantasPanel } from "@/components/plantilla/LlantasPanel";
import { LlantasPanelDetalle } from "@/components/plantilla/LlantasPanelDetalle";
import { VehicleSelector } from "@/components/plantilla/VehicleSelector";
import { VehicleTemplate } from "@/data/dtos/template";
import { seatTypes, vehicleTemplatesMock } from "@/data/mockData";
import { Button, Card, Tabs } from "@heroui/react";
import { useMemo, useState } from "react";

export default function PlantillaLayout() {
  const [selectedTemplate, setSelectedTemplate] = useState<VehicleTemplate>(
    vehicleTemplatesMock[0],
  );

  const [seatType, setSeatType] = useState("standard");

  const [selectedTab, setSelectedTab] = useState("llantas");

  const selectedSeat = useMemo(() => {
    return seatTypes.find((x) => x.id === seatType);
  }, [seatType]);

  return (
    <div className="flex flex-col gap-2 xl:h-full xl:flex-row">
      <div className="w-full xl:w-[320px] xl:min-w-[320px] xl:max-w-[320px]">
        <VehicleSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={(vehicle) => setSelectedTemplate(vehicle)}
          vehicleTemplatesMock={vehicleTemplatesMock}
        />
      </div>

      <Card className="flex min-h-0 flex-1 flex-col border border-default-200">
        <Card.Header className="flex flex-col gap-4 p-2 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <Card.Title className="text-xl sm:text-2xl">
              Plantilla de Vehículo
            </Card.Title>
            <Card.Description className="truncate">
              {selectedTemplate.brand}
              {" · "}
              {selectedTemplate.model}
              {" · "}
              {selectedTemplate.seatType.label}
            </Card.Description>
          </div>

          <div className="flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
            <Button variant="danger-soft" className="w-full sm:w-auto">
              Cancelar
            </Button>
            <Button variant="primary" className="w-full sm:w-auto">
              Guardar
            </Button>
            <Button variant="danger" className="md:ml-8 w-full sm:w-auto">
              Eliminar
            </Button>
          </div>
        </Card.Header>

        <Card.Content className="flex min-h-0 flex-1 flex-col overflow-hidden p-3">
          <div className="flex min-h-0 flex-1 flex-col gap-4 xl:flex-row">
            <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
              <Tabs
                variant="secondary"
                selectedKey={selectedTab}
                onSelectionChange={(key) => setSelectedTab(String(key))}
                className="flex min-h-0 flex-1 flex-col"
              >
                <Tabs.ListContainer className="overflow-x-auto">
                  <Tabs.List aria-label="Plantilla Tabs" className="min-w-max">
                    <Tabs.Tab id="llantas">
                      Llantas/Ejes
                      <Tabs.Indicator />
                    </Tabs.Tab>

                    <Tabs.Tab id="asientos">
                      <Tabs.Separator />
                      Asientos
                      <Tabs.Indicator />
                    </Tabs.Tab>

                    <Tabs.Tab id="exterior">
                      <Tabs.Separator />
                      Componentes
                      <Tabs.Indicator />
                    </Tabs.Tab>
                  </Tabs.List>
                </Tabs.ListContainer>

                <div className="flex-1 overflow-y-auto pt-4">
                  <Tabs.Panel id="llantas">
                    <LlantasPanel />
                  </Tabs.Panel>

                  <Tabs.Panel id="asientos">
                    <AsientosPanel />
                  </Tabs.Panel>

                  <Tabs.Panel id="exterior">
                    <ExteriorPanel />
                  </Tabs.Panel>
                </div>
              </Tabs>
            </div>

            {/* DETAIL PANEL */}
            {selectedTab !== "exterior" && (
              <div className="w-full shrink-0 xl:w-[280px]">
                <Card className="h-full border border-default-200">
                  <Card.Content className="p-4">
                    {selectedTab === "llantas" && <LlantasPanelDetalle />}

                    {selectedTab === "asientos" && <AsientosPanelDetalle />}
                  </Card.Content>
                </Card>
              </div>
            )}
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
