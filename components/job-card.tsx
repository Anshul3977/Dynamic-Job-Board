import { motion } from 'motion/react';
import { MapPin, Briefcase, DollarSign } from 'lucide-react';
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
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative flex flex-col h-full rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 p-6 overflow-hidden transition-all hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)]"
    >
      {/* Subtle gradient glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300 border border-indigo-500/20">
            {job.department}
          </span>
          <span className="text-xs text-zinc-500 font-mono">{job.postedAt}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-zinc-100 font-display tracking-tight group-hover:text-white transition-colors mb-2">
          {job.title}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3 flex-1">
          {job.description}
        </p>

        <div className="space-y-3 mt-auto">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-zinc-500" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-zinc-500" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-zinc-500" />
              <span>{job.salary}</span>
            </div>
          </div>

          <button className="w-full mt-4 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-all border border-white/5 hover:border-white/20 group-hover:bg-indigo-500/20 group-hover:text-indigo-200 group-hover:border-indigo-500/30">
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  );
}
