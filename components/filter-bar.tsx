import { motion } from 'motion/react';
import { Filter, Search } from 'lucide-react';

interface FilterBarProps {
  departments: string[];
  types: string[];
  selectedDepartment: string | null;
  selectedType: string | null;
  onDepartmentChange: (dept: string | null) => void;
  onTypeChange: (type: string | null) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function FilterBar({
  departments,
  types,
  selectedDepartment,
  selectedType,
  onDepartmentChange,
  onTypeChange,
  searchQuery,
  onSearchChange
}: FilterBarProps) {
  return (
    <div className="sticky top-4 z-40 w-full rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-white/10 p-4 shadow-2xl shadow-black/50">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-white/10 rounded-xl leading-5 bg-white/5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 sm:text-sm transition-all"
            placeholder="Search roles, keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-400">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filters:</span>
          </div>
          
          <select
            className="bg-white/5 border border-white/10 text-zinc-300 text-sm rounded-xl focus:ring-indigo-500/50 focus:border-indigo-500/50 block p-2.5 appearance-none cursor-pointer hover:bg-white/10 transition-colors"
            value={selectedDepartment || ''}
            onChange={(e) => onDepartmentChange(e.target.value || null)}
          >
            <option value="" className="bg-zinc-900 text-zinc-300">All Departments</option>
            {departments.map((dept) => (
              <option key={dept} value={dept} className="bg-zinc-900 text-zinc-300">
                {dept}
              </option>
            ))}
          </select>

          <select
            className="bg-white/5 border border-white/10 text-zinc-300 text-sm rounded-xl focus:ring-indigo-500/50 focus:border-indigo-500/50 block p-2.5 appearance-none cursor-pointer hover:bg-white/10 transition-colors"
            value={selectedType || ''}
            onChange={(e) => onTypeChange(e.target.value || null)}
          >
            <option value="" className="bg-zinc-900 text-zinc-300">All Types</option>
            {types.map((type) => (
              <option key={type} value={type} className="bg-zinc-900 text-zinc-300">
                {type}
              </option>
            ))}
          </select>
          
          {(selectedDepartment || selectedType || searchQuery) && (
            <button
              onClick={() => {
                onDepartmentChange(null);
                onTypeChange(null);
                onSearchChange('');
              }}
              className="text-xs text-zinc-400 hover:text-white underline underline-offset-4 transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
