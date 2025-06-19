'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { WorkExperience } from '@/app/data';

type Props = { job: WorkExperience };


const JobCard: React.FC<Props> = ({ job }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout           // smooth height changes
      className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
      onClick={() => setOpen((prev) => !prev)}
    >
      {/* Optional decorative gradient. Delete if you don't have this component */}
      <Spotlight
        className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={64}
      />

      <div className="relative w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
        <div className="flex justify-between">
          <div>
            <h4 className="font-normal dark:text-zinc-100">{job.title}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{job.company}</p>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            {job.start} – {job.end}
          </p>
        </div>

        {/* Collapsible description */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.p
              key="desc"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            >
              {job.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default JobCard;
