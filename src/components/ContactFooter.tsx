import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactFooterProps {
  onOpenTerminal?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = () => {
  return (
    <footer className="mt-20 pb-8 font-Outfit">
      <div className="text-center space-y-2">
        <div className="text-4xl font-Ovo dark:text-white font-bold">
          {PERSONAL_INFO.name}
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 font-Outfit">
          {PERSONAL_INFO.role}
        </p>
        <div className="w-max flex items-center gap-2 mx-auto text-neutral-700 dark:text-neutral-300 pt-1">
          <img
            alt="Email Icon"
            className="w-5 dark:hidden"
            src="/assets/mail_icon.png"
          />
          <img
            alt="Email Icon"
            className="w-5 hidden dark:block"
            src="/assets/mail_icon_dark.png"
          />
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:underline text-sm font-medium"
          >
            {PERSONAL_INFO.email}
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 dark:border-neutral-800 mx-[10%] mt-12 py-5 text-xs text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.</p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0 font-medium">
          <li>
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={PERSONAL_INFO.social.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition"
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              href={PERSONAL_INFO.social.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              CodeChef
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default ContactFooter;
