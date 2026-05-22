"use client";

const equipos = [
  {
    id: "EQ-001",
    tipo: "Van",
    marca: "Hyundai",
    modelo: "H1",
    estado: "Activo",
    ubicacion: "Taller Lima",
  },
  {
    id: "EQ-002",
    tipo: "Grupo Electrógeno",
    marca: "Modasa",
    modelo: "MLS-100",
    estado: "Mantenimiento",
    ubicacion: "Agencia Ica",
  },
  {
    id: "EQ-003",
    tipo: "Camioneta",
    marca: "Toyota",
    modelo: "Hilux",
    estado: "Activo",
    ubicacion: "Taller Norte",
  },
  {
    id: "EQ-004",
    tipo: "Station Wagon",
    marca: "Toyota",
    modelo: "Corolla",
    estado: "Inactivo",
    ubicacion: "Almacén",
  },
];

export default function OtrosEquiposPage() {
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Otros Equipos</h1>

          <p className="text-slate-500 mt-1">
            Gestión de vehículos y equipos no relacionados a buses
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-medium transition">
          + Nuevo Equipo
        </button>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Vehículos Livianos</p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">35</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Equipos Estacionarios</p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">12</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <p className="text-slate-500 text-sm">Equipos Inactivos</p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">5</h2>
        </div>
      </div>

      {/* FILTROS */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Buscar equipo..."
            className="border border-slate-300 rounded-xl px-4 py-2 flex-1 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="border border-slate-300 rounded-xl px-4 py-2">
            <option>Todos los tipos</option>
            <option>Van</option>
            <option>Grupo Electrógeno</option>
            <option>Camioneta</option>
          </select>

          <select className="border border-slate-300 rounded-xl px-4 py-2">
            <option>Todos los estados</option>
            <option>Activo</option>
            <option>Mantenimiento</option>
            <option>Inactivo</option>
          </select>
        </div>
      </div>

      {/* TABLA */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr className="text-left text-sm text-slate-600">
              <th className="px-6 py-4">Código</th>
              <th className="px-6 py-4">Tipo</th>
              <th className="px-6 py-4">Marca</th>
              <th className="px-6 py-4">Modelo</th>
              <th className="px-6 py-4">Ubicación</th>
              <th className="px-6 py-4">Estado</th>
            </tr>
          </thead>

          <tbody>
            {equipos.map((equipo) => (
              <tr
                key={equipo.id}
                className="border-b border-slate-100 hover:bg-slate-50 transition"
              >
                <td className="px-6 py-4 font-medium text-slate-800">
                  {equipo.id}
                </td>

                <td className="px-6 py-4 text-slate-600">{equipo.tipo}</td>

                <td className="px-6 py-4 text-slate-600">{equipo.marca}</td>

                <td className="px-6 py-4 text-slate-600">{equipo.modelo}</td>

                <td className="px-6 py-4 text-slate-600">{equipo.ubicacion}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
										${
                      equipo.estado === "Activo"
                        ? "bg-green-100 text-green-700"
                        : equipo.estado === "Mantenimiento"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                    }`}
                  >
                    {equipo.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
