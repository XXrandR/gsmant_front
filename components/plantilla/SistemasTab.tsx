"use client";

import { Pencil, Trash2, Plus, Check } from "lucide-react";

const sistemas = [
  {
    id: 1,
    nombre: "Sistema de Motor",
    area: "Mecánica",
    componentes: 15,
  },
  {
    id: 2,
    nombre: "Sistema de Frenos",
    area: "Mecánica",
    componentes: 8,
  },
  {
    id: 3,
    nombre: "Sistema Neumático",
    area: "Mecánica",
    componentes: 12,
  },
  {
    id: 4,
    nombre: "Sistema Eléctrico",
    area: "Electricidad",
    componentes: 18,
  },
  {
    id: 5,
    nombre: "Sistema de Suspensión",
    area: "Mecánica",
    componentes: 6,
  },
];

const componentes = [
  {
    id: 1,
    nombre: "Motor",
    tipo: "Principal",
    obligatorio: true,
  },
  {
    id: 2,
    nombre: "Radiador",
    tipo: "Enfriamiento",
    obligatorio: true,
  },
  {
    id: 3,
    nombre: "Ventilador",
    tipo: "Enfriamiento",
    obligatorio: true,
  },
  {
    id: 4,
    nombre: "Bomba de Agua",
    tipo: "Enfriamiento",
    obligatorio: true,
  },
  {
    id: 5,
    nombre: "Filtro de Aceite",
    tipo: "Filtración",
    obligatorio: true,
  },
];

export default function SistemasTab() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* SISTEMAS */}
        <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Sistemas del Vehículo
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Defina los sistemas que componen este modelo de vehículo.
                </p>
              </div>
            </div>

            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-2 text-sm flex items-center gap-2 transition-all">
              <Plus size={16} />
              Agregar sistema
            </button>
          </div>

          <div className="overflow-auto max-h-[520px]">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-[60px]">
                    #
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Sistema
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Área/Sección
                  </th>

                  <th className="text-center px-4 py-3 font-semibold text-gray-700">
                    Componentes
                  </th>

                  <th className="text-center px-4 py-3 font-semibold text-gray-700 w-[140px]">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody>
                {sistemas.map((sistema) => (
                  <tr
                    key={sistema.id}
                    className="border-t border-gray-100 hover:bg-blue-50 cursor-pointer transition-all"
                  >
                    <td className="px-4 py-4 text-gray-600">{sistema.id}</td>

                    <td className="px-4 py-4 font-medium text-gray-800">
                      {sistema.nombre}
                    </td>

                    <td className="px-4 py-4 text-gray-600">{sistema.area}</td>

                    <td className="px-4 py-4 text-center">
                      <span className="border border-blue-300 text-blue-600 rounded-full px-3 py-1 text-xs font-medium bg-blue-50">
                        {sistema.componentes}
                      </span>
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-yellow-50 transition-all">
                          <Pencil size={16} className="text-yellow-600" />
                        </button>

                        <button className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-all">
                          <Trash2 size={16} className="text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-100 text-sm text-gray-500">
            Total sistemas: {sistemas.length}
          </div>
        </div>

        {/* COMPONENTES */}
        <div className="border border-gray-200 rounded-2xl bg-white overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Componentes del Sistema
                </h2>

                <p className="text-blue-600 mt-1 font-medium">
                  Sistema de Motor
                </p>
              </div>

              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-5 py-2 text-sm flex items-center gap-2 transition-all whitespace-nowrap">
                <Plus size={16} />
                Agregar componente
              </button>
            </div>
          </div>

          <div className="overflow-auto max-h-[520px]">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 w-[60px]">
                    #
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Componente
                  </th>

                  <th className="text-left px-4 py-3 font-semibold text-gray-700">
                    Tipo
                  </th>

                  <th className="text-center px-4 py-3 font-semibold text-gray-700 w-[100px]">
                    Oblig.
                  </th>

                  <th className="text-center px-4 py-3 font-semibold text-gray-700 w-[140px]">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody>
                {componentes.map((componente) => (
                  <tr
                    key={componente.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-all"
                  >
                    <td className="px-4 py-4 text-gray-600">{componente.id}</td>

                    <td className="px-4 py-4 font-medium text-gray-800">
                      {componente.nombre}
                    </td>

                    <td className="px-4 py-4 text-gray-600">
                      {componente.tipo}
                    </td>

                    <td className="px-4 py-4 text-center">
                      {componente.obligatorio && (
                        <div className="flex justify-center">
                          <Check size={18} className="text-green-500" />
                        </div>
                      )}
                    </td>

                    <td className="px-4 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-yellow-50 transition-all">
                          <Pencil size={16} className="text-yellow-600" />
                        </button>

                        <button className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center hover:bg-red-100 transition-all">
                          <Trash2 size={16} className="text-red-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-100 text-sm text-gray-500">
            Total componentes: {componentes.length}
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 flex gap-4 items-start">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-blue-200 text-blue-500 text-lg font-bold">
          i
        </div>

        <div>
          <h3 className="font-semibold text-blue-900 text-lg">Información</h3>

          <p className="text-blue-800 text-sm mt-1">
            Los sistemas y componentes definidos aquí serán utilizados para
            mantenimiento, checklist, órdenes de trabajo y reportes.
          </p>
        </div>
      </div>
    </div>
  );
}
