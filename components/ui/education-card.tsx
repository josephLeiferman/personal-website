'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Spotlight } from '@/components/ui/spotlight';
import { EducationExperience } from '@/app/data';

type Props = { edu: EducationExperience };

const EducationCard: React.FC<Props> = ({ edu }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setOpen(!open)}
      className="relative cursor-pointer overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] transition-shadow hover:shadow-md dark:bg-zinc-600/30"
    >
      <Spotlight
        className="from-blue-950 via-blue-700 to-blue-300 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
        size={400}
      />

      <div className="relative w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
        <div className="flex justify-between">
          <div>
            <h4 className="font-normal dark:text-zinc-100">{edu.program}</h4>
            <p className="text-zinc-500 dark:text-zinc-400">{edu.school}</p>
          </div>
          <div>
            <p className="text-zinc-600 dark:text-zinc-400">
              {edu.start} – {edu.end}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 float-right">{edu.location}</p>
          </div>
        </div>

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
              {edu.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default EducationCard;