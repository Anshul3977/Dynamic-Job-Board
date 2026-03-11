import { Briefcase } from 'lucide-react';

export function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/[0.02] backdrop-blur-xl border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          <span className="font-display font-semibold text-lg tracking-tight text-zinc-100">Rudratek</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-400">
          <a href="#" className="text-white">Jobs</a>
          <a href="#" className="hover:text-white transition-colors">Companies</a>
          <a href="#" className="hover:text-white transition-colors">Salaries</a>
        </div>
        <div>
          <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/5 shadow-sm">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
