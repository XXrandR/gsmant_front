"use client";

import CreateTaskModal from "@/components/tareas/CreateTaskModal";
import { 
  AiOutlineCheckCircle, 
  AiOutlineWarning, 
  AiOutlineFilter, 
  AiOutlineDownload,
  AiOutlineUserAdd,
  AiOutlineLeft,
  AiOutlineRight
} from "react-icons/ai";
import { 
  MdTask, 
  MdPendingActions, 
  MdVerified, 
  MdAssignment, 
  MdBadge 
} from "react-icons/md";

export default function TareasPage() {
  return (
    <div className="p-4 sm:p-6 w-full space-y-6 sm:space-y-8 pb-20 overflow-y-auto">
      {/* Dashboard Stats / Summary (Bento Style) */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 bg-[#d6e3ff] text-[#00488d] rounded-lg">
            <MdTask className="text-xl sm:text-2xl" />
          </div>
          <div>
            <p className="text-[#424752] font-['Geist'] text-[10px] sm:text-[12px] leading-4 tracking-[0.05em] uppercase">Total Tareas</p>
            <p className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter']">1,284</p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 bg-[#f5a524]/20 text-[#f5a524] rounded-lg">
            <MdPendingActions className="text-xl sm:text-2xl" />
          </div>
          <div>
            <p className="text-[#424752] font-['Geist'] text-[10px] sm:text-[12px] leading-4 tracking-[0.05em] uppercase">En Proceso</p>
            <p className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter']">42</p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 bg-[#17c964]/20 text-[#17c964] rounded-lg">
            <MdVerified className="text-xl sm:text-2xl" />
          </div>
          <div>
            <p className="text-[#424752] font-['Geist'] text-[10px] sm:text-[12px] leading-4 tracking-[0.05em] uppercase">Completadas</p>
            <p className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter']">1,120</p>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-3 sm:gap-4">
          <div className="p-2 sm:p-3 bg-[#ba1a1a]/20 text-[#ba1a1a] rounded-lg">
            <AiOutlineWarning className="text-xl sm:text-2xl" />
          </div>
          <div>
            <p className="text-[#424752] font-['Geist'] text-[10px] sm:text-[12px] leading-4 tracking-[0.05em] uppercase">Vencidas</p>
            <p className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter']">8</p>
          </div>
        </div>
      </section>

      <CreateTaskModal />
      
      {/* Main Interactive Section: Tasks and Workers */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 1. Lista de Tareas Asignadas */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
          <div className="p-3 sm:p-4 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-white">
            <h2 className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter'] text-[#00488d] flex items-center gap-2">
              <MdAssignment className="text-xl sm:text-2xl" />
              Lista de Tareas Asignadas
            </h2>
            <div className="flex gap-2 self-end sm:self-auto">
              <button className="p-2 hover:bg-[#eeedf7] rounded-lg transition-all text-[#424752]">
                <AiOutlineFilter className="text-xl" />
              </button>
              <button className="p-2 hover:bg-[#eeedf7] rounded-lg transition-all text-[#424752]">
                <AiOutlineDownload className="text-xl" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead className="bg-[#e8e7f1] sticky top-0 z-10">
                <tr>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase border-b border-outline-variant">ID</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase border-b border-outline-variant">Descripción</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase border-b border-outline-variant">Fecha</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase border-b border-outline-variant">Prioridad</th>
                  <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase border-b border-outline-variant">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant font-['Geist'] text-[12px] sm:text-[13px] leading-[18px]">
                <tr className="hover:bg-[#005fb8]/5 transition-colors cursor-pointer group bg-[#005fb8]/10">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 font-bold text-[#00488d]">1730</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">REVISAR COMPRESORA DE AIRE INDUSTRIAL CAMPBELL</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">24/05/2024</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <span className="px-2 py-1 bg-[#ffdad6] text-[#93000a] rounded font-['Geist'] text-[10px] sm:text-[11px] uppercase">Alta</span>
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#f5a524]"></span>
                      <span className="text-[11px] sm:text-[13px]">En Proceso</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#005fb8]/5 transition-colors cursor-pointer group">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 font-bold text-[#00488d]">1731</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">CAMBIAR COMPRESORA DE AIRE VOLVO B9R</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">22/05/2024</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <span className="px-2 py-1 bg-[#dce3e9] text-[#5e656a] rounded font-['Geist'] text-[10px] sm:text-[11px] uppercase">Media</span>
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#17c964]"></span>
                      <span className="text-[11px] sm:text-[13px]">Programada</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#005fb8]/5 transition-colors cursor-pointer group">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 font-bold text-[#00488d]">1732</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">REPARAR TANQUE DE AIRE MERCEDES BENZ</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">21/05/2024</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <span className="px-2 py-1 bg-[#ffdad6] text-[#93000a] rounded font-['Geist'] text-[10px] sm:text-[11px] uppercase">Alta</span>
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#17c964]"></span>
                      <span className="text-[11px] sm:text-[13px]">Programada</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[#005fb8]/5 transition-colors cursor-pointer group">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 font-bold text-[#00488d]">1733</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">MANTENIMIENTO PREVENTIVO MOTOR CUMMINS</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">19/05/2024</td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <span className="px-2 py-1 bg-[#d6e3ff] text-[#00488d] rounded font-['Geist'] text-[10px] sm:text-[11px] uppercase">Baja</span>
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3">
                    <div className="flex items-center gap-2 text-[#424752]/60">
                      <span className="w-2 h-2 rounded-full bg-[#585f64]"></span>
                      <span className="text-[11px] sm:text-[13px]">Completada</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 sm:p-4 bg-[#eeedf7] border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-3 font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752]">
            <span>Mostrando 1-4 de 1284 resultados</span>
            <div className="flex gap-1">
              <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-[#e8e7f1]">
                <AiOutlineLeft className="text-[16px] sm:text-[18px]" />
              </button>
              <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded bg-[#00488d] text-white text-sm">1</button>
              <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-[#e8e7f1] text-sm">2</button>
              <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-[#e8e7f1] text-sm">3</button>
              <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded hover:bg-[#e8e7f1]">
                <AiOutlineRight className="text-[16px] sm:text-[18px]" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Recursos Humanos */}
        <div className="bg-white rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex flex-col h-full overflow-hidden">
          <div className="p-3 sm:p-4 border-b border-outline-variant bg-white">
            <h2 className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter'] text-[#00488d] flex items-center gap-2">
              <MdBadge className="text-xl sm:text-2xl" />
              Personal Asignado
            </h2>
            <p className="text-[#424752] font-['Geist'] text-[11px] sm:text-[12px] leading-4 mt-1">
              Tarea Seleccionada: <span className="font-bold">#1730</span>
            </p>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="p-3 sm:p-4 space-y-3">
              <div className="p-3 sm:p-4 border border-outline-variant rounded-lg hover:border-[#00488d] transition-all group flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#dce3e9]"></div>
                  <div>
                    <p className="font-bold text-[13px] sm:text-[14px] leading-5 font-['Inter'] text-[#1a1b22]">Juan Pérez Caldas</p>
                    <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752]">Mecánico - Nivel II</p>
                  </div>
                </div>
                <AiOutlineCheckCircle className="text-[#17c964] text-xl sm:text-2xl" />
              </div>

              <div className="p-3 sm:p-4 border border-outline-variant rounded-lg hover:border-[#00488d] transition-all group flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#dce3e9]"></div>
                  <div>
                    <p className="font-bold text-[13px] sm:text-[14px] leading-5 font-['Inter'] text-[#1a1b22]">Carlos Méndez R.</p>
                    <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752]">Electricista Industrial</p>
                  </div>
                </div>
                <AiOutlineCheckCircle className="text-[#17c964] text-xl sm:text-2xl" />
              </div>

              <div className="p-3 sm:p-4 border border-dashed border-outline-variant rounded-lg hover:bg-[#eeedf7] transition-all cursor-pointer flex items-center justify-center gap-2 text-[#00488d] font-['Geist'] text-[13px] sm:text-[14px] leading-5 py-4 sm:py-6">
                <AiOutlineUserAdd className="text-xl" />
                Asignar más personal
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 border-t border-outline-variant flex flex-col gap-2 bg-white">
            <div className="flex justify-between font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752]">
              <span>Horas Est. Totales:</span>
              <span className="font-bold">4.5 hrs</span>
            </div>
            <div className="flex justify-between font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752]">
              <span>Personal Requerido:</span>
              <span className="font-bold text-[#17c964]">Cubierto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative h-40 sm:h-48 rounded-2xl overflow-hidden bg-[#00488d] shadow-[0px_4px_12px_rgba(0,0,0,0.05)] flex items-center px-4 sm:px-8 md:px-12 group">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            alt="Maintenance Facility background" 
            className="w-full h-full object-cover grayscale brightness-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX8QHokPlwvvLAzQNTx37rgYbBQPRsBA06ct8pSWlobrPMc_zjVA2E1k-NV21hYlSm0G0WcwIA7I2-rZyRteCNNFPRby58Ro8L-3-xjMV6_HDvY4MJHObnli4C9-4xRul-Xm9-iPDnksIeCsgW6-Z-Ls_c7UHPGNI9COpqctyhJxOOgF62P5sPPLhjCCM7eQFAgOy6-9WSuULwm_1R87kmK2Y_EvXuvBLkDw9XgQcEIWa7nH4F1hQtA2REAtYEM_UbBs4oI3O4iPkE" 
          />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-2 font-['Inter']">
            Optimización de Activos Fleet Maestro
          </h3>
          <p className="text-white/80 text-sm sm:text-base font-['Inter']">
            Reduzca el tiempo de inactividad hasta en un 15% con nuestro nuevo motor de planificación inteligente basado en datos reales de operación.
          </p>
        </div>
        <div className="absolute right-4 sm:right-8 md:right-12 bottom-4 sm:bottom-8 flex gap-3 sm:gap-4 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-['Geist'] text-xs sm:text-sm hover:bg-white/20 whitespace-nowrap">
            Explorar Analíticas
          </button>
          <button className="bg-white text-[#00488d] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-['Geist'] text-xs sm:text-sm shadow-lg shadow-[#00488d]/20 hover:scale-105 transition-transform whitespace-nowrap">
            Ver Reportes Anuales
          </button>
        </div>
      </section>
    </div>
  );
}