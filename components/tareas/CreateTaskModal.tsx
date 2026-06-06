"use client";
import { Input } from "@heroui/react";
import { useState } from "react";
import {
    IoClose,
    IoSearch,
    IoCheckmarkCircle,
} from "react-icons/io5";
import { MdSettingsInputComponent, MdAddCircle, MdEdit, MdAddTask } from "react-icons/md";

interface Worker {
    code: string;
    name: string;
    selected: boolean;
}

interface FormData {
    title: string;
    priority: string;
    estimatedTime: number;
    searchWorker: string;
}

export default function CreateTaskModal() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedWorkers, setSelectedWorkers] = useState<Worker[]>([]);
    const [formData, setFormData] = useState<FormData>({
        title: "",
        priority: "Media",
        estimatedTime: 60,
        searchWorker: "",
    });

    const workersList: Worker[] = [
        { code: "001", name: "JHOSUA DAGA", selected: false },
        { code: "002", name: "JHOSUA", selected: false },
        { code: "003", name: "PEOPLE 1", selected: false },
        { code: "004", name: "PEOPLE 1", selected: false },
        { code: "005", name: "PERSONAL MANT.", selected: false },
        { code: "006", name: "PERSONAL MANT.", selected: false },
    ];

    const handleWorkerSelect = (code: string): void => {
        const worker = workersList.find(w => w.code === code);
        if (worker) {
            if (selectedWorkers.find(w => w.code === code)) {
                setSelectedWorkers(selectedWorkers.filter(w => w.code !== code));
            } else {
                setSelectedWorkers([...selectedWorkers, worker]);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        console.log("Task created:", { ...formData, selectedWorkers });
        // Add your API call here
        setIsOpen(false);
        resetForm();
    };

    const resetForm = (): void => {
        setFormData({
            title: "",
            priority: "Media",
            estimatedTime: 60,
            searchWorker: "",
        });
        setSelectedWorkers([]);
    };

    const handleClose = (): void => {
        setIsOpen(false);
        resetForm();
    };

    return (
        <>
            {/* Button to open modal */}
            <button
                onClick={() => setIsOpen(true)}
                className="w-full sm:w-auto bg-[#00488d] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-['Geist'] text-[13px] sm:text-[14px] leading-5 hover:bg-[#00488d]/90 transition-all active:scale-[0.98]"
            >
                Crear Nueva Tarea
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-[#1a1b22]/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl lg:max-w-6xl border border-[#c2c6d4] flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
                        {/* Modal Header */}
                        <div className="p-4 sm:p-6 border-b border-[#c2c6d4] flex justify-between items-center sticky top-0 bg-white z-10">
                            <div>
                                <h3 className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter'] text-[#1a1b22]">
                                    Crear y Asignar Nueva Tarea
                                </h3>
                                <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752] mt-1">
                                    Complete la información y seleccione el personal asignado
                                </p>
                            </div>
                            <button
                                onClick={handleClose}
                                className="p-1.5 sm:p-2 hover:bg-[#eeedf7] rounded-full transition-colors text-[#424752]"
                            >
                                <IoClose className="text-xl sm:text-2xl" />
                            </button>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-0">
                            {/* Left Side - Task Form */}
                            <div className="flex-1 p-4 sm:p-6 lg:border-r border-[#c2c6d4]">
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#c2c6d4]">
                                    <MdAddTask className="text-[#00488d] text-2xl sm:text-[28px]" />
                                    <h2 className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter']">
                                        Datos de la Tarea
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                    <div className="space-y-4 sm:space-y-6">
                                        <div>
                                            <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase mb-2">
                                                Título de la Tarea
                                            </label>
                                            <input
                                                className="w-full rounded-lg border-[#c2c6d4] focus:border-[#00488d] focus:ring-[#00488d] font-['Inter'] text-[13px] sm:text-[14px] leading-5 p-2 sm:p-2.5 border"
                                                placeholder="Ej. Cambio de Aceite y Filtros..."
                                                type="text"
                                                value={formData.title}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, title: e.target.value })
                                                }
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase mb-2">
                                                    Prioridad
                                                </label>
                                                <select
                                                    className="w-full rounded-lg border-[#c2c6d4] focus:border-[#00488d] focus:ring-[#00488d] font-['Inter'] text-[13px] sm:text-[14px] leading-5 p-2 sm:p-2.5 border"
                                                    value={formData.priority}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, priority: e.target.value })
                                                    }
                                                >
                                                    <option>Baja</option>
                                                    <option>Media</option>
                                                    <option>Alta</option>
                                                    <option>Crítica</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] text-[#424752] uppercase mb-2">
                                                    Tiempo Estimado (Minutos)
                                                </label>
                                                <input
                                                    className="w-full rounded-lg border-[#c2c6d4] focus:border-[#00488d] focus:ring-[#00488d] font-['Inter'] text-[13px] sm:text-[14px] leading-5 p-2 sm:p-2.5 border"
                                                    type="number"
                                                    value={formData.estimatedTime}
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            estimatedTime: parseInt(e.target.value),
                                                        })
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-xl border border-outline-variant shadow-[0px_4px_12px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
                                            <div className="p-4 sm:p-5 md:p-6 border-b border-outline-variant bg-white">
                                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                                                    <h2 className="text-lg sm:text-xl md:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter'] text-[#00488d] flex items-center gap-2">
                                                        <MdSettingsInputComponent className="text-xl sm:text-2xl" />
                                                        Equipo
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <div className="grid grid-cols-1 sm:grid-cols-5 bg-[#e8e7f1] py-2 sm:py-3 px-4 sm:px-5 md:px-6 font-['Geist'] text-[10px] sm:text-[11px] leading-4 text-[#424752] uppercase tracking-wider">
                                                    <div className="sm:col-span-2 font-medium">Tipo de Equipo</div>
                                                    <div className="hidden sm:block sm:col-span-3 pl-4">Subtipo / Componente</div>
                                                </div>

                                                <div className="overflow-y-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px]">
                                                    <div className="block sm:grid sm:grid-cols-5 border-b border-outline-variant/50 hover:bg-[#eeedf7] transition-colors px-4 sm:px-5 md:px-6 py-3 sm:py-4 items-center font-['Geist'] text-[12px] sm:text-[13px] leading-[18px] cursor-pointer" >
                                                        <div className="sm:col-span-2 font-bold text-[#1a1b22] mb-3 sm:mb-0 flex items-center gap-2">
                                                            <Input type="checkbox" className="w-4 h-4 rounded border-[#c2c6d4] text-[#00488d] focus:ring-[#00488d] cursor-pointer" onClick={(event) => event.stopPropagation()}></Input>
                                                                <span>COMPRESORA DE AIRE IND...</span>
                                                        </div>
                                                        <div className="sm:col-span-3 sm:pl-4 sm:border-l border-outline-variant/30 space-y-2 sm:space-y-1">
                                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/sub">
                                                                <span className="text-[#424752] text-[12px] sm:text-[13px]">CAMPBELL HAUSFELD B.C.</span>
                                                                <svg className="text-[#424752] opacity-0 group-hover/sub:opacity-100 text-sm sm:text-[14px] cursor-pointer hover:text-[#00488d] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/sub">
                                                                <span className="text-[#424752] text-[12px] sm:text-[13px]">INGERSOLL RAND-B.C-MOD</span>
                                                                <svg className="text-[#424752] opacity-0 group-hover/sub:opacity-100 text-sm sm:text-[14px] cursor-pointer hover:text-[#00488d] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="block sm:grid sm:grid-cols-5 border-b border-outline-variant/50 hover:bg-[#eeedf7] transition-colors px-4 sm:px-5 md:px-6 py-3 sm:py-4 items-center font-['Geist'] text-[12px] sm:text-[13px] leading-[18px] bg-[#f4f4f5]/50 cursor-pointer" >
                                                        <div className="sm:col-span-2 font-bold text-[#1a1b22] mb-3 sm:mb-0 flex items-center gap-2">
                                                            <Input type="checkbox" className="w-4 h-4 rounded border-[#c2c6d4] text-[#00488d] focus:ring-[#00488d] cursor-pointer" onClick={(event) => event.stopPropagation()}></Input>
                                                                <span>FLOTA PESADA (BUS)</span>
                                                        </div>
                                                        <div className="sm:col-span-3 sm:pl-4 sm:border-l border-outline-variant/30 space-y-2 sm:space-y-1">
                                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/sub">
                                                                <span className="text-[#424752] text-[12px] sm:text-[13px]">VOLVO B9R / SCANIA K400</span>
                                                                <svg className="text-[#424752] opacity-0 group-hover/sub:opacity-100 text-sm sm:text-[14px] cursor-pointer hover:text-[#00488d] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                                                </svg>
                                                            </div>
                                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/sub">
                                                                <span className="text-[#424752] text-[12px] sm:text-[13px]">MERCEDES BENZ O-500 RSE</span>
                                                                <svg className="text-[#424752] opacity-0 group-hover/sub:opacity-100 text-sm sm:text-[14px] cursor-pointer hover:text-[#00488d] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="block sm:grid sm:grid-cols-5 border-b border-outline-variant/50 hover:bg-[#eeedf7] transition-colors px-4 sm:px-5 md:px-6 py-3 sm:py-4 items-center font-['Geist'] text-[12px] sm:text-[13px] leading-[18px] cursor-pointer">
                                                        <div className="sm:col-span-2 font-bold text-[#1a1b22] mb-3 sm:mb-0 flex items-center gap-2">
                                                            <Input type="checkbox" className="w-4 h-4 rounded border-[#c2c6d4] text-[#00488d] focus:ring-[#00488d] cursor-pointer" onClick={(event) => event.stopPropagation()}></Input>
                                                                <span>MAQUINARIA DE LAVADO</span>
                                                        </div>
                                                        <div className="sm:col-span-3 sm:pl-4 sm:border-l border-outline-variant/30 space-y-2 sm:space-y-1">
                                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/sub">
                                                                <span className="text-[#424752] text-[12px] sm:text-[13px]">FREIGHTLINER M2 112</span>
                                                                <svg className="text-[#424752] opacity-0 group-hover/sub:opacity-100 text-sm sm:text-[14px] cursor-pointer hover:text-[#00488d] transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </form>
                            </div>

                            {/* Right Side - Workers Selection */}
                            <div className="flex-1 flex flex-col bg-[#fbf8ff]">
                                <div className="p-4 sm:p-6 border-b border-[#c2c6d4] bg-white">
                                    <div>
                                        <h3 className="text-lg sm:text-[20px] leading-6 sm:leading-7 font-semibold font-['Inter'] text-[#1a1b22]">
                                            Lista de Recursos Humanos
                                        </h3>
                                        <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752] mt-1">
                                            Seleccione los perfiles para asignar a la tarea actual
                                        </p>
                                    </div>
                                </div>

                                {/* Search/Filters */}
                                <div className="p-3 sm:p-4 bg-[#eeedf7]">
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                        <div className="relative flex-1 w-full">
                                            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727783] text-lg sm:text-xl" />
                                            <input
                                                className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 bg-white border border-[#c2c6d4] rounded-lg focus:ring-2 focus:ring-[#00488d] focus:border-[#00488d] outline-none transition-all font-['Inter'] text-[13px] sm:text-[14px] leading-5"
                                                placeholder="Buscar por código o descripción..."
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <label className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white rounded-lg border border-[#c2c6d4] cursor-pointer hover:bg-[#d6e3ff]/30 transition-all text-[11px] sm:text-[12px]">
                                                <input
                                                    type="radio"
                                                    name="search_type"
                                                    className="text-[#00488d] focus:ring-[#00488d] w-3 h-3 sm:w-4 sm:h-4"
                                                    defaultChecked
                                                />
                                                <span className="font-['Geist'] leading-4">
                                                    Todos
                                                </span>
                                            </label>
                                            <label className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-white rounded-lg border border-[#c2c6d4] cursor-pointer hover:bg-[#d6e3ff]/30 transition-all text-[11px] sm:text-[12px]">
                                                <input
                                                    type="radio"
                                                    name="search_type"
                                                    className="text-[#00488d] focus:ring-[#00488d] w-3 h-3 sm:w-4 sm:h-4"
                                                />
                                                <span className="font-['Geist'] leading-4 whitespace-nowrap">
                                                    Con menos tareas
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Workers Table */}
                                <div className="flex-1 overflow-y-auto">
                                    <div className="overflow-x-auto">
                                        <table className="w-full min-w-[400px] text-left border-collapse">
                                            <thead className="sticky top-0 bg-[#f4f4f5] text-[#424752] font-['Geist'] text-[11px] sm:text-[12px] leading-4 tracking-[0.05em] uppercase z-10 shadow-sm">
                                                <tr>
                                                    <th className="p-3 sm:p-4 w-12">SEL</th>
                                                    <th className="p-3 sm:p-4 w-16 sm:w-20">CÓDIGO</th>
                                                    <th className="p-3 sm:p-4">DESCRIPCIÓN DEL PUESTO</th>
                                                    <th className="p-3 sm:p-4 text-center w-20 sm:w-24">CANT.</th>
                                                </tr>
                                            </thead>
                                            <tbody className="font-['Geist'] text-[12px] sm:text-[13px] leading-[18px] divide-y divide-[#c2c6d4]/10">
                                                {workersList.map((worker) => (
                                                    <tr
                                                        key={worker.code}
                                                        className={`hover:bg-[#d6e3ff]/10 transition-colors cursor-pointer ${selectedWorkers.find((w) => w.code === worker.code)
                                                            ? "bg-[#d6e3ff]/20"
                                                            : ""
                                                            }`}
                                                        onClick={() => handleWorkerSelect(worker.code)}
                                                    >
                                                        <td className="p-3 sm:p-4">
                                                            <input
                                                                type="checkbox"
                                                                className="rounded border-[#c2c6d4] text-[#00488d] focus:ring-[#00488d] cursor-pointer w-3.5 h-3.5 sm:w-4 sm:h-4"
                                                                checked={
                                                                    !!selectedWorkers.find(
                                                                        (w) => w.code === worker.code
                                                                    )
                                                                }
                                                                onChange={() => handleWorkerSelect(worker.code)}
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                        </td>
                                                        <td className="p-3 sm:p-4 text-[#424752] font-mono text-[11px] sm:text-[13px]">
                                                            {worker.code}
                                                        </td>
                                                        <td
                                                            className={`p-3 sm:p-4 font-medium text-[12px] sm:text-[13px] ${selectedWorkers.find((w) => w.code === worker.code)
                                                                ? "font-bold text-[#00488d]"
                                                                : ""
                                                                }`}
                                                        >
                                                            {worker.name}
                                                        </td>
                                                        <td className="p-3 sm:p-4 text-center text-[#727783] text-[11px] sm:text-[13px]">-</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Selected workers summary and actions */}
                                <div className="p-3 sm:p-4 border-t border-[#c2c6d4] bg-white">
                                    {selectedWorkers.length > 0 && (
                                        <div className="mb-3 p-2 sm:p-3 bg-[#d6e3ff]/20 rounded-lg">
                                            <p className="text-[11px] sm:text-[12px] font-['Geist'] text-[#424752]">
                                                <strong>{selectedWorkers.length}</strong> trabajador(es)
                                                seleccionado(s):
                                            </p>
                                            <div className="flex flex-wrap gap-1 mt-1.5">
                                                {selectedWorkers.map((w) => (
                                                    <span
                                                        key={w.code}
                                                        className="text-[10px] sm:text-[11px] bg-[#00488d] text-white px-1.5 sm:px-2 py-0.5 rounded"
                                                    >
                                                        {w.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
                                        <button
                                            onClick={handleClose}
                                            className="px-4 sm:px-6 py-1.5 sm:py-2 border border-[#c2c6d4] text-[#1a1b22] rounded-lg font-['Geist'] text-[11px] sm:text-[12px] leading-4 hover:bg-[#eeedf7] transition-all"
                                        >
                                            Cancelar
                                        </button>
                                        <button
                                            onClick={() => {
                                                console.log("Selected workers:", selectedWorkers);
                                                setIsOpen(false);
                                            }}
                                            className="px-5 sm:px-8 py-1.5 sm:py-2 bg-[#00488d] text-white rounded-lg font-['Geist'] text-[11px] sm:text-[12px] leading-4 flex items-center justify-center gap-1.5 sm:gap-2 hover:opacity-90 active:scale-95 transition-all"
                                        >
                                            <IoCheckmarkCircle className="text-base sm:text-[18px]" />
                                            Aceptar Selección
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
