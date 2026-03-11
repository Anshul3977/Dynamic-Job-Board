import { Filter, Search } from 'lucide-react';

interface FilterSidebarProps {
  departments: string[];
  types: string[];
  selectedDepartment: string | null;
  selectedType: string | null;
  onDepartmentChange: (dept: string | null) => void;
  onTypeChange: (type: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterSidebar({
  departments,
  types,
  selectedDepartment,
  selectedType,
  onDepartmentChange,
  onTypeChange,
  searchQuery,
  onSearchChange
}: FilterSidebarProps) {
  return (
    <div className="sticky top-28 z-40 w-full rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
          <Filter className="w-4 h-4 text-indigo-400" />
        </div>
        <h2 className="text-xl font-semibold text-zinc-100 font-display tracking-tight">Filters</h2>
      </div>

      <div className="space-y-8">
        {/* Search */}
        <div className="space-y-4">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Search</label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 border border-white/[0.05] rounded-2xl leading-5 bg-white/[0.02] text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 focus:bg-white/[0.05] sm:text-sm transition-all duration-300"
              placeholder="Keywords, roles..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
          {/* Department */}
          <div className="space-y-4">
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Department</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input
                    type="radio"
                    name="department"
                    className="peer appearance-none w-5 h-5 rounded-full border border-white/20 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500/20 transition-all cursor-pointer"
                    checked={selectedDepartment === null}
                    onChange={() => onDepartmentChange(null)}
                  />
                  <div className="absolute w-2 h-2 rounded-full bg-indigo-400 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">All Departments</span>
              </label>
              {departments.map((dept) => (
                <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      type="radio"
                      name="department"
                      className="peer appearance-none w-5 h-5 rounded-full border border-white/20 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500/20 transition-all cursor-pointer"
                      checked={selectedDepartment === dept}
                      onChange={() => onDepartmentChange(dept)}
                    />
                    <div className="absolute w-2 h-2 rounded-full bg-indigo-400 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{dept}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Type */}
          <div className="space-y-4">
            <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Role Type</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <input
                    type="radio"
                    name="type"
                    className="peer appearance-none w-5 h-5 rounded-full border border-white/20 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500/20 transition-all cursor-pointer"
                    checked={selectedType === null}
                    onChange={() => onTypeChange(null)}
                  />
                  <div className="absolute w-2 h-2 rounded-full bg-indigo-400 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">All Types</span>
              </label>
              {types.map((type) => (
                <label key={type} className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5">
                    <input
                      type="radio"
                      name="type"
                      className="peer appearance-none w-5 h-5 rounded-full border border-white/20 bg-white/5 checked:border-indigo-500 checked:bg-indigo-500/20 transition-all cursor-pointer"
                      checked={selectedType === type}
                      onChange={() => onTypeChange(type)}
                    />
                    <div className="absolute w-2 h-2 rounded-full bg-indigo-400 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
