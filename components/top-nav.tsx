import { Briefcase } from 'lucide-react';

export function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/[0.01] backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-zinc-100">Rudratek</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#" className="text-white relative after:absolute after:bottom-[-24px] after:left-0 after:w-full after:h-[2px] after:bg-indigo-500">Jobs</a>
          <a href="#" className="hover:text-white transition-colors">Companies</a>
          <a href="#" className="hover:text-white transition-colors">Salaries</a>
        </div>
        <div>
          <button className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-xs sm:text-sm font-medium transition-all duration-300 border border-white/[0.05] hover:border-white/[0.1] shadow-sm">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
