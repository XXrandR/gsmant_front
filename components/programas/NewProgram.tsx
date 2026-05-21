"use client";
import { useState } from "react";
import { 
  IoClose, 
  IoChevronBack, 
  IoChevronForward,
} from "react-icons/io5";
import { MdPlaylistAdd, MdTune } from "react-icons/md";

interface NewProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProgram: (programData: any) => void;
}

export function NewProgram({ isOpen, onClose, onCreateProgram }: NewProgramModalProps) {
  const [formData, setFormData] = useState({
    programName: "",
    equipmentType: "Camión Pesado",
    subtype: "Volvo FH16",
    frequency: "Weekly",
    startDate: "",
  });

  const [currentMonth, setCurrentMonth] = useState("Oct 2023");

  // Mock data for selects
  const equipmentTypes = [
    "Camión Pesado",
    "Montacargas",
    "Remolque",
    "Maquinaria Pesada",
    "Vehículo Liviano"
  ];

  const subtypes: Record<string, string[]> = {
    "Camión Pesado": ["Volvo FH16", "Scania R500", "Mercedes Benz Actros", "Fuso Canter"],
    "Montacargas": ["Toyota 8FGU25", "Hyster H50FT", "Clark C25", "Linde H30"],
    "Remolque": ["Utility 4000DX", "Great Dane Everest", "Wabash DuraPlate", "Hyundai Translead"],
    "Maquinaria Pesada": ["Caterpillar 320", "Komatsu PC200", "Hitachi ZX210", "Volvo EC220"],
    "Vehículo Liviano": ["Toyota Hilux", "Ford Ranger", "Chevrolet Colorado", "Nissan Frontier"]
  };

  const frequencyOptions = ["Daily", "Weekly", "Monthly"];

  // Mock calendar days
  const getCalendarDays = () => {
    return [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateProgram(formData);
    onClose();
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      programName: "",
      equipmentType: "Camión Pesado",
      subtype: "Volvo FH16",
      frequency: "Weekly",
      startDate: "",
    });
  };

  const handleEquipmentChange = (value: string) => {
    setFormData({
      ...formData,
      equipmentType: value,
      subtype: subtypes[value][0] || "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#1a1b22]/60 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto border border-[#c2c6d4]">
        
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 p-4 sm:p-6 border-b border-[#c2c6d4] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MdPlaylistAdd className="text-[#00488d] text-2xl sm:text-[28px]" />
            <h3 className="text-lg sm:text-xl font-semibold font-['Inter'] text-[#1a1b22]">
              New Maintenance Program
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-[#eeedf7] rounded-full transition-colors text-[#424752]"
          >
            <IoClose className="text-xl sm:text-2xl" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Form */}
          <div className="p-4 sm:p-6 lg:border-r border-[#c2c6d4]">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#1a1b22] mb-2 font-medium">
                  Program Name
                </label>
                <input
                  className="w-full border-2 border-[#c2c6d4] rounded-lg p-2.5 sm:p-3 focus:border-[#00488d] focus:ring-0 transition-colors font-['Inter'] text-[13px] sm:text-[14px] outline-none"
                  placeholder="e.g. Semi-Annual Engine Check"
                  type="text"
                  value={formData.programName}
                  onChange={(e) => setFormData({ ...formData, programName: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#1a1b22] mb-2 font-medium">
                    Tipo de Equipo
                  </label>
                  <select
                    className="w-full border-2 border-[#c2c6d4] rounded-lg p-2.5 sm:p-3 focus:border-[#00488d] focus:ring-0 transition-colors font-['Inter'] text-[13px] sm:text-[14px] outline-none"
                    value={formData.equipmentType}
                    onChange={(e) => handleEquipmentChange(e.target.value)}
                  >
                    {equipmentTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#1a1b22] mb-2 font-medium">
                    Subtipo
                  </label>
                  <select
                    className="w-full border-2 border-[#c2c6d4] rounded-lg p-2.5 sm:p-3 focus:border-[#00488d] focus:ring-0 transition-colors font-['Inter'] text-[13px] sm:text-[14px] outline-none"
                    value={formData.subtype}
                    onChange={(e) => setFormData({ ...formData, subtype: e.target.value })}
                  >
                    {subtypes[formData.equipmentType]?.map((sub) => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#1a1b22] mb-3 font-medium">
                  Recurrence settings
                </label>
                <div className="flex flex-wrap gap-2">
                  {frequencyOptions.map((freq) => (
                    <label key={freq} className="flex-1 min-w-[80px]">
                      <input
                        type="radio"
                        name="frequency"
                        className="hidden peer"
                        value={freq}
                        checked={formData.frequency === freq}
                        onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                      />
                      <div className="text-center py-2 border-2 border-[#c2c6d4] rounded-lg peer-checked:border-[#00488d] peer-checked:bg-[#d6e3ff] peer-checked:text-[#001b3d] cursor-pointer font-['Geist'] text-[11px] sm:text-[12px] transition-all hover:bg-[#eeedf7]">
                        {freq}
                      </div>
                    </label>
                  ))}
                </div>
                <div className="mt-2">
                  <button className="text-[#00488d] font-bold font-['Geist'] text-[11px] sm:text-[12px] flex items-center gap-1" type="button">
                    <MdTune className="text-base sm:text-[18px]" />
                    Custom Interval
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-['Geist'] text-[11px] sm:text-[12px] leading-4 text-[#1a1b22] mb-2 font-medium">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    className="w-full border-2 border-[#c2c6d4] rounded-lg p-2.5 sm:p-3 focus:border-[#00488d] focus:ring-0 transition-colors font-['Inter'] text-[13px] sm:text-[14px] outline-none"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 sm:py-4 bg-[#005fb8] text-white font-bold rounded-lg hover:opacity-90 transition-opacity mt-4 font-['Geist'] text-[13px] sm:text-[14px]"
              >
                Create Program
              </button>
            </form>
          </div>

          {/* Right Side - Planning Calendar */}
          <div className="p-4 sm:p-6 bg-white">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h4 className="text-base sm:text-lg font-semibold font-['Inter'] text-[#1a1b22]">
                Planning
              </h4>
              <div className="flex gap-2 items-center">
                <button className="p-1 hover:bg-[#eeedf7] rounded transition-colors text-[#424752]">
                  <IoChevronBack className="text-lg sm:text-xl" />
                </button>
                <span className="font-['Geist'] text-[12px] sm:text-[14px] font-medium">{currentMonth}</span>
                <button className="p-1 hover:bg-[#eeedf7] rounded transition-colors text-[#424752]">
                  <IoChevronForward className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>

            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
                <div key={idx} className="text-center text-[9px] sm:text-[10px] font-bold text-[#424752] uppercase">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {getCalendarDays().map((day, idx) => (
                <div
                  key={idx}
                  className={`aspect-square flex flex-col items-center justify-center text-[11px] sm:text-[13px] font-medium transition-all
                    ${day === 1 ? 'bg-[#eeedf7] rounded font-bold' : ''}
                    ${day === 2 ? 'cursor-pointer hover:bg-[#d6e3ff]/30 rounded relative' : ''}
                    ${day === 6 ? 'cursor-pointer hover:bg-[#d6e3ff]/30 rounded relative' : ''}
                    ${day === 8 ? 'cursor-pointer hover:bg-[#d6e3ff]/30 rounded relative' : ''}
                  `}
                >
                  <span className={day <= 3 && day !== 28 && day !== 29 && day !== 30 ? 'text-[#1a1b22]' : 'text-[#727783]'}>
                    {day}
                  </span>
                  {day === 2 && (
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#00488d] rounded-full mt-0.5"></div>
                  )}
                  {day === 6 && (
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#f5a524] rounded-full mt-0.5"></div>
                  )}
                  {day === 8 && (
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-[#17c964] rounded-full mt-0.5"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Upcoming Tasks */}
            <div className="mt-4 sm:mt-6 space-y-2">
              <div className="flex items-center gap-2 sm:gap-3 p-2 bg-[#eeedf7] rounded-lg">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00488d] rounded-full"></div>
                <span className="text-[11px] sm:text-[12px] font-['Geist'] font-medium">Preventive - Engine (Volvo)</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-2 bg-[#eeedf7] rounded-lg">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#f5a524] rounded-full"></div>
                <span className="text-[11px] sm:text-[12px] font-['Geist'] font-medium">Tire Rotation (Scania)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function NewProgram() {
//     return (

//         <section className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden">
//             <div className="p-6 border-b border-outline-variant flex items-center justify-between">
//                 <h4 className="font-headline-md text-headline-md text-on-surface">New Maintenance Program</h4>
//                 <span className="material-symbols-outlined text-outline" data-icon="playlist_add">playlist_add</span>
//             </div>
//             <form className="p-6 space-y-5">
//                 <div>
//                     <label className="block text-label-sm text-on-surface mb-2">Program Name</label>
//                     <input className="w-full border-2 border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-0 transition-colors font-body-md text-body-md" placeholder="e.g. Semi-Annual Engine Check" type="text" />
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                     <div>
//                         <label className="block text-label-sm text-on-surface mb-2">Tipo de Equipo</label>
//                         <select className="w-full border-2 border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-0 transition-colors font-body-md text-body-md appearance-none">
//                             <option>Camión Pesado</option>
//                             <option>Montacargas</option>
//                             <option>Remolque</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-label-sm text-on-surface mb-2">Subtipo</label>
//                         <select className="w-full border-2 border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-0 transition-colors font-body-md text-body-md appearance-none">
//                             <option>Volvo FH16</option>
//                             <option>Scania R500</option>
//                             <option>Fuso Canter</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div>
//                     <label className="block text-label-sm text-on-surface mb-3">Recurrence settings</label>
//                     <div className="flex flex-wrap gap-2">
//                         <label className="flex-1">
//                             <input className="hidden peer" name="freq" type="radio" />
//                             <div className="text-center py-2 border-2 border-outline-variant rounded-lg peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed cursor-pointer font-label-sm transition-all hover:bg-surface-container-low">Daily</div>
//                         </label>
//                         <label className="flex-1">
//                             <input className="hidden peer" name="freq" type="radio" />
//                             <div className="text-center py-2 border-2 border-outline-variant rounded-lg peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed cursor-pointer font-label-sm transition-all hover:bg-surface-container-low">Weekly</div>
//                         </label>
//                         <label className="flex-1">
//                             <input className="hidden peer" name="freq" type="radio" />
//                             <div className="text-center py-2 border-2 border-outline-variant rounded-lg peer-checked:border-primary peer-checked:bg-primary-fixed peer-checked:text-on-primary-fixed cursor-pointer font-label-sm transition-all hover:bg-surface-container-low">Monthly</div>
//                         </label>
//                     </div>
//                     <div className="mt-2">
//                         <button className="text-primary font-bold text-label-sm flex items-center gap-1" type="button">
//                             <span className="material-symbols-outlined text-[18px]" data-icon="tune">tune</span>
//                             Custom Interval
//                         </button>
//                     </div>
//                 </div>
//                 <div>
//                     <label className="block text-label-sm text-on-surface mb-2">Start Date</label>
//                     <div className="relative">
//                         <input className="w-full border-2 border-outline-variant rounded-lg p-3 focus:border-primary focus:ring-0 transition-colors font-body-md text-body-md" type="date" />
//                     </div>
//                 </div>
//                 <button className="w-full py-4 bg-primary-container text-on-primary-container font-bold rounded-lg hover:opacity-90 transition-opacity mt-4">
//                     Create Program
//                 </button>
//             </form>


//             <section className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
//                 <div className="flex items-center justify-between mb-6">
//                     <h4 className="font-headline-md text-headline-md text-on-surface">Planning</h4>
//                     <div className="flex gap-2">
//                         <button className="p-1 hover:bg-surface-muted rounded transition-colors"><span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
//                         <span className="font-label-md">Oct 2023</span>
//                         <button className="p-1 hover:bg-surface-muted rounded transition-colors"><span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-7 gap-2 mb-2">
//                     <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase">M</div>
//                     <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase">T</div>
//                     <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase">W</div>
//                     <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase">T</div>
//                     <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase">F</div>
//                     <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase">S</div>
//                     <div className="text-center text-[10px] font-bold text-on-surface-variant uppercase">S</div>
//                 </div>
//                 <div className="grid grid-cols-7 gap-2">
//                     <div className="aspect-square flex items-center justify-center text-label-sm text-outline">28</div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm text-outline">29</div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm text-outline">30</div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold bg-surface-muted rounded">1</div>
//                     <div className="aspect-square flex flex-col items-center justify-center text-label-sm font-bold relative group cursor-pointer">
//                         2 <div className="w-1.5 h-1.5 bg-primary rounded-full mt-0.5"></div>
//                     </div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold">3</div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold">4</div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold">5</div>
//                     <div className="aspect-square flex flex-col items-center justify-center text-label-sm font-bold relative group cursor-pointer">
//                         6 <div className="w-1.5 h-1.5 bg-warning rounded-full mt-0.5"></div>
//                     </div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold">7</div>
//                     <div className="aspect-square flex flex-col items-center justify-center text-label-sm font-bold relative group cursor-pointer">
//                         8 <div className="w-1.5 h-1.5 bg-success rounded-full mt-0.5"></div>
//                     </div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold">9</div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold">10</div>
//                     <div className="aspect-square flex items-center justify-center text-label-sm font-bold">11</div>
//                 </div>
//                 <div className="mt-6 space-y-2">
//                     <div className="flex items-center gap-3 p-2 bg-surface-container-low rounded-lg">
//                         <div className="w-2 h-2 bg-primary rounded-full"></div>
//                         <span className="text-label-sm font-medium">Preventive - Engine (Volvo)</span>
//                     </div>
//                     <div className="flex items-center gap-3 p-2 bg-surface-container-low rounded-lg">
//                         <div className="w-2 h-2 bg-warning rounded-full"></div>
//                         <span className="text-label-sm font-medium">Tire Rotation (Scania)</span>
//                     </div>
//                 </div>
//             </section>

//         </section>
//     );
// }