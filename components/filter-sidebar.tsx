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
    <div className="sticky top-24 z-40 w-full rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-indigo-400" />
        <h2 className="text-lg font-semibold text-zinc-100 font-display">Filters</h2>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-400">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-zinc-500" />
            </div>
            <input
              type="text"
              className="block w-full pl-9 pr-3 py-2.5 border border-white/10 rounded-xl leading-5 bg-white/5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all"
              placeholder="Keywords..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        {/* Department */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-400">Department</label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="department"
                className="w-4 h-4 rounded-full border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-0"
                checked={selectedDepartment === null}
                onChange={() => onDepartmentChange(null)}
              />
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">All Departments</span>
            </label>
            {departments.map((dept) => (
              <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="department"
                  className="w-4 h-4 rounded-full border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-0"
                  checked={selectedDepartment === dept}
                  onChange={() => onDepartmentChange(dept)}
                />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{dept}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Type */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-zinc-400">Role Type</label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="type"
                className="w-4 h-4 rounded-full border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-0"
                checked={selectedType === null}
                onChange={() => onTypeChange(null)}
              />
              <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">All Types</span>
            </label>
            {types.map((type) => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="type"
                  className="w-4 h-4 rounded-full border-white/20 bg-white/5 text-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-0"
                  checked={selectedType === type}
                  onChange={() => onTypeChange(type)}
                />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
