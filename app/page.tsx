'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { jobs } from '@/lib/mock-data';
import { JobCard } from '@/components/job-card';
import { FilterSidebar } from '@/components/filter-sidebar';
import { TopNav } from '@/components/top-nav';

export default function Home() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique departments and types for filters
  const departments = useMemo(() => Array.from(new Set(jobs.map(j => j.department))), []);
  const types = useMemo(() => Array.from(new Set(jobs.map(j => j.type))), []);

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
  }, [selectedDepartment, selectedType, searchQuery]);

  return (
    <div className="relative min-h-screen pb-24 selection:bg-indigo-500/30">
      <TopNav />

      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-gradient-to-br from-[#0a0514] via-[#130b29] to-[#0a1128]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[150px]" />
        <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-blue-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500 font-display mb-4">
            Find your next role.
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Explore opportunities at top companies. Filter by department, role type, and more to find the perfect fit.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="col-span-full text-center py-24 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm"
                  >
                    <p className="text-zinc-400 text-lg">No roles found matching your criteria.</p>
                    <button 
                      onClick={() => {
                        setSelectedDepartment(null);
                        setSelectedType(null);
                        setSearchQuery('');
                      }}
                      className="mt-4 text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors"
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
