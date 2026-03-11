import { motion } from 'motion/react';
import { MapPin, Briefcase, DollarSign, ArrowUpRight } from 'lucide-react';
import { Job } from '@/lib/mock-data';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="group relative flex flex-col h-full rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-2xl border border-white/[0.05] hover:border-white/[0.1] p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)]"
    >
      {/* Subtle top highlight on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Radial gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-5">
          <span className="inline-flex items-center rounded-full bg-white/[0.05] px-3 py-1 text-xs font-medium text-zinc-300 border border-white/[0.05] group-hover:bg-indigo-500/10 group-hover:text-indigo-300 group-hover:border-indigo-500/20 transition-colors duration-300">
            {job.department}
          </span>
          <span className="text-xs text-zinc-500 font-mono tracking-wider uppercase">{job.postedAt}</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 font-display tracking-tight group-hover:text-white transition-colors mb-3 pr-8">
          {job.title}
        </h3>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 line-clamp-3 flex-1 font-light">
          {job.description}
        </p>

        <div className="space-y-5 mt-auto">
          <div className="flex flex-wrap items-center gap-y-3 gap-x-5 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
              <span>{job.salary}</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 mt-2 px-4 py-3 sm:py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] text-white text-sm font-medium transition-all duration-300 border border-white/[0.05] hover:border-white/[0.1] group-hover:bg-indigo-500/20 group-hover:text-indigo-100 group-hover:border-indigo-500/30">
            <span>View Details</span>
            <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
