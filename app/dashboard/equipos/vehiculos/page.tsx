"use client";

import { useState } from "react";
import { Card, Input, Button, Chip } from "@heroui/react";

const vehiculos = [
  {
    id: 1,
    placa: "B7A-956",
    interno: "BUS-001",
    modelo: "Volvo-MLS-100",
    tipo: "Estándar",
    estado: "Activo",
    kilometraje: "325000 km",
  },
  {
    id: 2,
    placa: "C2F-741",
    interno: "BUS-002",
    modelo: "Scania-K360",
    tipo: "VIP",
    estado: "Mantenimiento",
    kilometraje: "412000 km",
  },
  {
    id: 3,
    placa: "D9K-321",
    interno: "BUS-003",
    modelo: "Mercedes-Benz-Paradiso",
    tipo: "Semi Cama",
    estado: "Activo",
    kilometraje: "298000 km",
  },
  {
    id: 4,
    placa: "F1T-889",
    interno: "BUS-004",
    modelo: "Irizar-i6",
    tipo: "Cama",
    estado: "Inactivo",
    kilometraje: "510000 km",
  },
];

export default function VehiculosPage() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehiculos[0]);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Gestión de Vehículos
          </h1>

          <p className="text-slate-500 mt-1">
            Administración de buses y unidades operativas.
          </p>
        </div>

        <div className="flex gap-3">
          <Button className="bg-slate-100 text-slate-700">
            Exportar
          </Button>

          <Button className="bg-blue-500 text-white">
            + Nuevo Vehículo
          </Button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-6">
        {/* LISTADO */}
        <Card className="border border-slate-200 shadow-sm p-5">
          <Card.Content className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Vehículos Registrados
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Seleccione una unidad para visualizar su información.
              </p>
            </div>

            <Input placeholder="Buscar placa o interno..." />

            <div className="space-y-3 max-h-[650px] overflow-auto pr-2">
              {vehiculos.map((vehiculo) => (
                <button
                  key={vehiculo.id}
                  onClick={() => setSelectedVehicle(vehiculo)}
                  className={`w-full text-left border rounded-2xl p-4 transition-all ${
                    selectedVehicle.id === vehiculo.id
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "bg-white border-slate-200 hover:border-blue-300"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">
                        {vehiculo.placa}
                      </h3>

                      <p
                        className={`text-sm ${
                          selectedVehicle.id === vehiculo.id
                            ? "text-blue-100"
                            : "text-slate-500"
                        }`}
                      >
                        {vehiculo.interno}
                      </p>
                    </div>

                    <Chip
                      size="sm"
                      color={
                        vehiculo.estado === "Activo"
                          ? "success"
                          : vehiculo.estado === "Mantenimiento"
                            ? "warning"
                            : "danger"
                      }
                      variant="soft"
                    >
                      {vehiculo.estado}
                    </Chip>
                  </div>

                  <div className="mt-4 space-y-1">
                    <p className="text-sm">
                      <span className="font-medium">Modelo:</span>{" "}
                      {vehiculo.modelo}
                    </p>

                    <p className="text-sm">
                      <span className="font-medium">Tipo:</span> {vehiculo.tipo}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </Card.Content>
        </Card>

        {/* DETALLE */}
        <div className="space-y-6">
          {/* INFO */}
          <Card className="border border-slate-200 shadow-sm p-6">
            <Card.Content>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {selectedVehicle.placa}
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Interno: {selectedVehicle.interno}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-slate-100 text-slate-700">
                    Editar
                  </Button>

                  <Button className="bg-red-500 text-white">
                    Desactivar
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
                <div className="border border-slate-200 rounded-2xl p-4">
                  <p className="text-sm text-slate-500">Plantilla</p>

                  <h3 className="font-semibold text-slate-900 mt-1">
                    {selectedVehicle.modelo}
                  </h3>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4">
                  <p className="text-sm text-slate-500">Tipo</p>

                  <h3 className="font-semibold text-slate-900 mt-1">
                    {selectedVehicle.tipo}
                  </h3>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4">
                  <p className="text-sm text-slate-500">Kilometraje</p>

                  <h3 className="font-semibold text-slate-900 mt-1">
                    {selectedVehicle.kilometraje}
                  </h3>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4">
                  <p className="text-sm text-slate-500">Estado</p>

                  <h3 className="font-semibold text-slate-900 mt-1">
                    {selectedVehicle.estado}
                  </h3>
                </div>
              </div>
            </Card.Content>
          </Card>

          {/* SISTEMAS */}
          <Card className="border border-slate-200 shadow-sm p-6">
            <Card.Content>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">
                    Sistemas Asociados
                  </h2>

                  <p className="text-slate-500 text-sm mt-1">
                    Sistemas heredados desde la plantilla vehicular.
                  </p>
                </div>

                <Button className="bg-blue-500 text-white">
                  Ver Plantilla
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                {[
                  "Sistema de Motor",
                  "Sistema Eléctrico",
                  "Sistema de Frenos",
                  "Sistema Neumático",
                  "Sistema de Suspensión",
                  "Sistema de Dirección",
                ].map((sistema, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl p-5 hover:border-blue-300 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-800">
                        {sistema}
                      </h3>

                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    <p className="text-sm text-slate-500 mt-3">
                      Operativo y asociado correctamente.
                    </p>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
}
