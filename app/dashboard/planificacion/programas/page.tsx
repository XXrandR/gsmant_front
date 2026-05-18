"use client";
import { useState } from "react";
import { 
  IoSearch, 
  IoFilter, 
  IoCreateOutline, 
  IoTrashOutline,
  IoArrowUp,
  IoTrendingDown,
  IoWarningOutline,
  IoAddCircleOutline
} from "react-icons/io5";
import { MdEmergency } from "react-icons/md";
import { NewProgram } from "@/components/programas/NewProgram";

interface Program {
  id: string;
  name: string;
  frequency: string;
  frequencyType: "MONTHLY" | "WEEKLY" | "DAILY" | "CUSTOM";
  equipmentType: string;
  equipmentSubtype: string;
  nextDate: string;
  status?: "active" | "overdue";
}

export default function ProgramasPage() {
  const [isNewProgramModalOpen, setIsNewProgramModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const mockPrograms: Program[] = [
    {
      id: "1",
      name: "Engine General Overhaul",
      frequency: "MONTHLY",
      frequencyType: "MONTHLY",
      equipmentType: "Camión Pesado",
      equipmentSubtype: "Volvo FH16",
      nextDate: "Oct 24, 2023",
    },
    {
      id: "2",
      name: "Bi-Weekly Brake Inspection",
      frequency: "WEEKLY",
      frequencyType: "WEEKLY",
      equipmentType: "Remolque",
      equipmentSubtype: "Flatbed 40ft",
      nextDate: "Oct 12, 2023",
    },
    {
      id: "3",
      name: "Daily Fluid Level Check",
      frequency: "DAILY",
      frequencyType: "DAILY",
      equipmentType: "Montacargas",
      equipmentSubtype: "Toyota 8-Series",
      nextDate: "TODAY",
    },
    {
      id: "4",
      name: "Quarterly Suspension Tune-up",
      frequency: "CUSTOM",
      frequencyType: "CUSTOM",
      equipmentType: "Camión Pesado",
      equipmentSubtype: "Scania R500",
      nextDate: "Nov 05, 2023",
    },
  ];

  const filteredPrograms = mockPrograms.filter(program =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.equipmentType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFrequencyBadge = (frequency: string, type: string) => {
    const styles: Record<string, string> = {
      MONTHLY: "bg-[#eeedf7] text-[#5e656a]",
      WEEKLY: "bg-[#d6e3ff] text-[#001b3d]",
      DAILY: "bg-[#17c964]/20 text-[#17c964]",
      CUSTOM: "bg-[#f5a524]/20 text-[#f5a524]",
    };
    return styles[type] || styles.MONTHLY;
  };

  const getNextDateStyle = (date: string) => {
    if (date === "TODAY") return "text-[#ba1a1a] font-bold";
    return "font-medium";
  };

  const handleCreateProgram = (programData: any) => {
    console.log("New program created:", programData);
    // Here you would typically make an API call to save the program
    // and then refresh the list
  };

  return (
    <div className="p-4 sm:p-6 w-full space-y-6 sm:space-y-8 pb-20">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#c2c6d4] shadow-sm">
          <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752] mb-1 uppercase tracking-wide">
            TOTAL PROGRAMS
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#00488d]">128</h3>
            <span className="text-[#17c964] flex items-center font-bold font-['Geist'] text-[11px] sm:text-[12px]">
              <IoArrowUp className="text-sm sm:text-base" /> 12%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#c2c6d4] shadow-sm">
          <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752] mb-1 uppercase tracking-wide">
            ACTIVE WEEKLY
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1b22]">42</h3>
            <span className="bg-[#d6e3ff] text-[#001b3d] px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
              STABLE
            </span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#c2c6d4] shadow-sm">
          <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752] mb-1 uppercase tracking-wide">
            ACTIVE MONTHLY
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#1a1b22]">76</h3>
            <span className="text-[#f5a524] flex items-center font-bold font-['Geist'] text-[11px] sm:text-[12px]">
              <IoTrendingDown className="text-sm sm:text-base" /> 4%
            </span>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#c2c6d4] shadow-sm">
          <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752] mb-1 uppercase tracking-wide">
            UPCOMING RENEWALS
          </p>
          <div className="flex items-end justify-between">
            <h3 className="text-3xl sm:text-4xl font-bold font-['Inter'] text-[#f31260]">15</h3>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ffdad6] text-[#ba1a1a] rounded-lg flex items-center justify-center">
              <MdEmergency className="text-lg sm:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Programs Table */}
      <div className="bg-white rounded-xl border border-[#c2c6d4] shadow-sm overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#c2c6d4] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white sticky top-0 z-10">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold font-['Inter'] text-[#1a1b22]">
              Active Maintenance Programs
            </h4>
            <p className="font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#424752] mt-1">
              Manage and monitor your recurring schedules
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#727783] text-lg" />
              <input
                className="pl-9 sm:pl-10 pr-4 py-2 border border-[#c2c6d4] rounded-full font-['Geist'] text-[12px] sm:text-[13px] focus:border-[#00488d] focus:ring-0 outline-none w-full sm:w-64"
                placeholder="Search programs..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-2 border border-[#c2c6d4] rounded-lg hover:bg-[#eeedf7] transition-colors text-[#424752]">
              <IoFilter className="text-lg" />
            </button>
            <button
              onClick={() => setIsNewProgramModalOpen(true)}
              className="bg-[#00488d] text-white px-4 py-2 rounded-lg font-['Geist'] text-[12px] sm:text-[13px] hover:bg-[#00488d]/90 transition-all flex items-center gap-2"
            >
              <IoAddCircleOutline className="text-lg" />
              New Program
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead className="bg-[#f4f4f5]">
              <tr className="text-left">
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] font-bold text-[#424752] uppercase tracking-wider">
                  Program Name
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] font-bold text-[#424752] uppercase tracking-wider">
                  Frequency
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] font-bold text-[#424752] uppercase tracking-wider">
                  Equipment Info
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] font-bold text-[#424752] uppercase tracking-wider">
                  Next Date
                </th>
                <th className="px-4 sm:px-6 py-3 sm:py-4 font-['Geist'] text-[11px] sm:text-[12px] font-bold text-[#424752] uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="font-['Geist'] text-[12px] sm:text-[13px] leading-[18px]">
              {filteredPrograms.map((program) => (
                <tr
                  key={program.id}
                  className="hover:bg-[#d6e3ff]/20 transition-colors border-b border-[#c2c6d4]"
                >
                  <td className="px-4 sm:px-6 py-3 sm:py-4 font-bold text-[#00488d]">
                    {program.name}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <span className={`px-2 py-1 rounded-full font-bold text-[10px] sm:text-[11px] ${getFrequencyBadge(program.frequency, program.frequencyType)}`}>
                      {program.frequency}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-[#1a1b22]">{program.equipmentType}</span>
                      <span className="text-[10px] sm:text-[11px] text-[#424752]">{program.equipmentSubtype}</span>
                    </div>
                  </td>
                  <td className={`px-4 sm:px-6 py-3 sm:py-4 ${getNextDateStyle(program.nextDate)}`}>
                    {program.nextDate}
                  </td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-right">
                    <button className="p-1 hover:bg-[#eeedf7] rounded text-[#727783] hover:text-[#00488d] transition-all">
                      <IoCreateOutline className="text-lg sm:text-xl" />
                    </button>
                    <button className="p-1 hover:bg-[#eeedf7] rounded text-[#727783] hover:text-[#ba1a1a] transition-all ml-1">
                      <IoTrashOutline className="text-lg sm:text-xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-3 sm:p-4 bg-[#eeedf7] flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-[#c2c6d4]">
          <span className="font-['Geist'] text-[11px] sm:text-[12px] text-[#424752]">
            Showing {filteredPrograms.length} of {mockPrograms.length} programs
          </span>
          <div className="flex gap-1">
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#c2c6d4] bg-white text-[#424752] text-sm hover:bg-[#00488d] hover:text-white transition-all">
              1
            </button>
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#c2c6d4] bg-white text-[#424752] text-sm hover:bg-[#00488d] hover:text-white transition-all">
              2
            </button>
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded border border-[#c2c6d4] bg-white text-[#424752] text-sm hover:bg-[#00488d] hover:text-white transition-all">
              3
            </button>
          </div>
        </div>
      </div>

      {/* New Program Modal */}
      <NewProgram
        isOpen={isNewProgramModalOpen}
        onClose={() => setIsNewProgramModalOpen(false)}
        onCreateProgram={handleCreateProgram}
      />
    </div>
  );
}
