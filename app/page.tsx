'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jobs as mockJobs, Job } from '@/lib/mock-data';
import { JobCard } from '@/components/job-card';
import { FilterSidebar } from '@/components/filter-sidebar';
import { TopNav } from '@/components/top-nav';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      // Simulate network latency
      await new Promise(resolve => setTimeout(resolve, 800));
      setJobs(mockJobs);
      setIsLoading(false);
    };
    fetchJobs();
  }, []);

  // Extract unique departments and types for filters
  const departments = useMemo(() => Array.from(new Set(jobs.map(j => j.department))), [jobs]);
  const types = useMemo(() => Array.from(new Set(jobs.map(j => j.type))), [jobs]);

  // Filter jobs based on state
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesDept = selectedDepartment ? job.department === selectedDepartment : true;
      const matchesType = selectedType ? job.type === selectedType : true;
      const matchesSearch = searchQuery 
        ? job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          job.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      
      return matchesDept && matchesType && matchesSearch;
    });
  }, [jobs, selectedDepartment, selectedType, searchQuery]);

  return (
    <div className="relative min-h-screen pb-24 selection:bg-indigo-500/30">
      <TopNav />

      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#05020a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a103c] via-[#0a0514] to-[#05020a]" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[150px] mix-blend-screen" />
        <div className="absolute top-[30%] left-[50%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-40">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-xs font-medium text-zinc-300 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            We're hiring globally
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-600 font-display mb-6 leading-[1.1]">
            Find your next <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">masterpiece.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
            Explore opportunities at top companies. Filter by department, role type, and more to find the perfect fit for your expertise.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <FilterSidebar 
              departments={departments}
              types={types}
              selectedDepartment={selectedDepartment}
              selectedType={selectedType}
              onDepartmentChange={setSelectedDepartment}
              onTypeChange={setSelectedType}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
              <AnimatePresence mode="popLayout">
                {isLoading ? (
                  // Loading Skeletons
                  Array.from({ length: 6 }).map((_, i) => (
                    <motion.div
                      key={`skeleton-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-[280px] rounded-3xl bg-white/[0.02] border border-white/[0.05] p-6 sm:p-8 animate-pulse"
                    >
                      <div className="flex justify-between mb-6">
                        <div className="w-24 h-6 rounded-full bg-white/5" />
                        <div className="w-16 h-4 rounded bg-white/5" />
                      </div>
                      <div className="w-3/4 h-8 rounded bg-white/5 mb-4" />
                      <div className="space-y-2 mb-8">
                        <div className="w-full h-4 rounded bg-white/5" />
                        <div className="w-5/6 h-4 rounded bg-white/5" />
                      </div>
                      <div className="flex gap-4 mt-auto">
                        <div className="w-20 h-4 rounded bg-white/5" />
                        <div className="w-20 h-4 rounded bg-white/5" />
                      </div>
                    </motion.div>
                  ))
                ) : filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="col-span-full flex flex-col items-center justify-center text-center py-32 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl"
                  >
                    <div className="w-16 h-16 mb-6 rounded-full bg-white/[0.05] flex items-center justify-center">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-100 font-display mb-2">No roles found</h3>
                    <p className="text-zinc-400 text-base max-w-md mb-8">We couldn't find any positions matching your current filter criteria.</p>
                    <button 
                      onClick={() => {
                        setSelectedDepartment(null);
                        setSelectedType(null);
                        setSearchQuery('');
                      }}
                      className="px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white text-sm font-medium transition-all border border-white/[0.05] hover:border-white/[0.1]"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </main>
        </div>

      </div>
    </div>
  );
}
