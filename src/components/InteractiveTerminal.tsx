import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Square, Terminal as TerminalIcon, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, SKILL_CATEGORIES, AWARDS, EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { sound } from '../utils/soundEffects';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
  time: string;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      if (logs.length === 0) {
        setLogs([
          {
            id: 'init-1',
            command: 'system.boot',
            time: '00:00:01',
            output: (
              <div className="text-slate-300 space-y-1">
                <p className="text-emerald-400 font-bold">BHANU-OS v3.0.0 (Darwin arm64 / Linux x86_64)</p>
                <p className="text-slate-400 text-xs">
                  Connected to Bhanu Teja's interactive profile environment.
                </p>
                <p className="text-xs text-sky-400">
                  Type <span className="font-bold underline text-white">help</span> to list commands, or tap the quick pills below.
                </p>
              </div>
            )
          }
        ]);
      }
    }
  }, [isOpen, logs.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    sound.playTerminalKey();
    const [mainCmd, ...args] = trimmed.toLowerCase().split(' ');

    let outputNode: React.ReactNode = null;
    const now = new Date().toLocaleTimeString('en-US', { hour12: false });

    switch (mainCmd) {
      case 'help':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-sky-400 font-semibold mb-1">Available System Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 font-mono">
              <div><span className="text-emerald-400 font-bold">whoami</span> - Identity & summary</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - View all core projects</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - Technical competence matrix</div>
              <div><span className="text-emerald-400 font-bold">exp</span> - Career & leadership history</div>
              <div><span className="text-emerald-400 font-bold">edu</span> - College & academics</div>
              <div><span className="text-emerald-400 font-bold">awards</span> - Competitions & achievements</div>
              <div><span className="text-emerald-400 font-bold">cert</span> - Cloud & AI certifications</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Direct links & email</div>
              <div><span className="text-emerald-400 font-bold">hire</span> - Why collaborate with Bhanu Teja</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal buffer</div>
              <div><span className="text-emerald-400 font-bold">exit</span> - Close terminal window</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-white font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-sky-400">{PERSONAL_INFO.role}</p>
            <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
            <p className="text-emerald-400 font-mono text-[11px] mt-1">Status: {PERSONAL_INFO.availability}</p>
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs space-y-2 text-slate-300">
            <p className="text-sky-400 font-semibold">Featured Engineering Projects:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-sky-500/50 pl-2">
                <span className="text-white font-bold">{p.title}</span>{' '}
                <span className="text-slate-400">({p.tags.slice(0, 3).join(', ')})</span>
                <p className="text-slate-300 text-[11px]">{p.subtitle}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs space-y-2 text-slate-300">
            <p className="text-sky-400 font-semibold">Technical Stack Matrix:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="bg-slate-900/60 p-2 rounded border border-white/5">
                  <p className="text-indigo-400 font-bold">{cat.category}:</p>
                  <p className="text-slate-300">{cat.skills.map((s) => s.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'exp':
        outputNode = (
          <div className="text-xs space-y-2 text-slate-300">
            <p className="text-sky-400 font-semibold">Professional & Leadership Milestones:</p>
            {EXPERIENCES.map((e) => (
              <div key={e.id} className="border-l-2 border-violet-500/50 pl-2">
                <p className="text-white font-bold">{e.role} @ {e.company}</p>
                <p className="text-slate-400 text-[11px]">{e.period} • {e.location}</p>
                <p className="text-slate-300 text-[11px]">{e.achievements[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'edu':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-emerald-400 font-bold">{EDUCATION.institution}</p>
            <p className="text-white">{EDUCATION.degree} | 2024 – Present (3rd Year)</p>
            <p className="text-sky-300 font-mono">Cumulative CGPA: {EDUCATION.gpa} / 10.0</p>
            <p className="text-slate-400 text-[11px]">{EDUCATION.previousEducation.institution} ({EDUCATION.previousEducation.period}): {EDUCATION.previousEducation.score}</p>
            <p className="text-slate-400 text-[11px]">{EDUCATION.schoolEducation.institution} ({EDUCATION.schoolEducation.period}): {EDUCATION.schoolEducation.score}</p>
          </div>
        );
        break;

      case 'awards':
      case 'achievements':
      case 'honors':
        outputNode = (
          <div className="text-xs space-y-2 text-slate-300">
            <p className="text-amber-400 font-bold">Key Honors & Competitions:</p>
            <ul className="space-y-2 text-[11px]">
              <li className="border-l-2 border-amber-500/60 pl-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white font-bold">Winner — Scale Challenge (System Design)</span>
                  <span className="text-amber-300 font-mono text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">1st Place Winner</span>
                </div>
                <p className="text-slate-400 text-[10px]">CONVERGENCE 2K26 • VNR VJIET (Autonomous)</p>
                <p className="text-slate-300 text-[11px]">Won 1st Place in the Scale Challenge System Design competition by architecting a scalable, fault-tolerant, and high-performance distributed solution for a real-world problem.</p>
              </li>

              <li className="border-l-2 border-amber-500/60 pl-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white font-bold">Runner-Up — Project Contest</span>
                  <span className="text-amber-300 font-mono text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">2nd Place Runner-Up</span>
                </div>
                <p className="text-slate-400 text-[10px]">CONVERGENCE 2K26 • Team TechnoForge • VNR VJIET</p>
                <p className="text-slate-300 text-[11px]">Secured 2nd Place in Idea Pitching and technical demonstration for GreenFleet-Q — an AI-driven maritime route and fuel optimization platform combining Random Forest and QPSO algorithms.</p>
              </li>

              <li className="border-l-2 border-amber-500/60 pl-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white font-bold">3rd Prize Winner: Vistera 2K26</span>
                  <span className="text-amber-300 font-mono text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">3rd Prize Winner</span>
                </div>
                <p className="text-slate-400 text-[10px]">Vistera 2K26 • Competitive Innovation Contest</p>
                <p className="text-slate-300 text-[11px]">Won 3rd Prize among 1,600+ participants and 425+ teams for technical innovation and algorithmic implementation.</p>
              </li>

              <li className="border-l-2 border-amber-500/60 pl-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white font-bold">LeetCode Competitive Problem Solving</span>
                  <span className="text-amber-300 font-mono text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">Peak Rating 1844</span>
                </div>
                <p className="text-slate-400 text-[10px]">LeetCode (Top 11.39%) • 229+ Problems Solved</p>
                <p className="text-slate-300 text-[11px]">Consistent top-tier contest rating across data structures, dynamic programming, and graph algorithms.</p>
              </li>

              <li className="border-l-2 border-amber-500/60 pl-2.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-white font-bold">CodeChef Division 3</span>
                  <span className="text-amber-300 font-mono text-[10px] bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">Max Rating 1530</span>
                </div>
                <p className="text-slate-400 text-[10px]">CodeChef Competitive Contests • 264+ Problems Solved</p>
                <p className="text-slate-300 text-[11px]">Active Div 3 competitor with consistent performance across global rated long and cook-off contests.</p>
              </li>
            </ul>
          </div>
        );
        break;

      case 'cert':
      case 'certifications':
        outputNode = (
          <div className="text-xs space-y-1.5 text-slate-300">
            <p className="text-emerald-400 font-bold">Industry Certifications:</p>
            <div className="space-y-1.5">
              {CERTIFICATIONS.map((c, idx) => (
                <div key={idx} className="border-l-2 border-emerald-500/50 pl-2">
                  <p className="text-white font-bold text-[11px]">{c.name}</p>
                  <p className="text-slate-400 text-[10px]">{c.issuer} • {c.year}</p>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs space-y-1 text-slate-300">
            <p className="text-sky-400 font-bold">Reach Out Directly:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-300 underline">{PERSONAL_INFO.email}</a></p>
            <p>Phone: <span className="text-slate-300">{PERSONAL_INFO.phone}</span></p>
            <p>GitHub: <a href={PERSONAL_INFO.social.github} target="_blank" rel="noreferrer" className="text-sky-300 underline">{PERSONAL_INFO.social.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noreferrer" className="text-sky-300 underline">{PERSONAL_INFO.social.linkedin}</a></p>
          </div>
        );
        break;

      case 'hire':
        confetti({
          particleCount: 75,
          spread: 80,
          origin: { y: 0.6 }
        });
        sound.playSuccess();
        outputNode = (
          <div className="text-xs space-y-2 text-slate-300 bg-emerald-950/20 p-2.5 rounded border border-emerald-500/30">
            <p className="text-emerald-400 font-bold text-sm">Why hire Bhanu Teja?</p>
            <p>[+] Strong AI/ML depth: LightGBM (92% acc), SHAP explainable AI, transformer NLP analysis.</p>
            <p>[+] High problem-solving competence: LeetCode 1844, CodeChef 1530, 490+ problems solved.</p>
            <p>[+] Proven under pressure: Winner of Convergence 2K26 Scale Challenge (System Design) & 2nd Place Project Contest.</p>
            <p>[+] Practical full-stack engineering: FastAPI, React, Node.js, Express, MongoDB, IoT telemetry pipelines.</p>
            <p>[+] Exceptional academic record: 9.42 CGPA in AI & ML at VNR VJIET.</p>
            <p className="text-sky-300 font-mono">Let's connect: {PERSONAL_INFO.email} | {PERSONAL_INFO.phone}</p>
          </div>
        );
        break;

      case 'clear':
        setLogs([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        outputNode = (
          <div className="text-xs text-rose-400">
            Command not recognized: <span className="font-mono font-bold text-white">"{trimmed}"</span>.
            Type <span className="underline cursor-pointer" onClick={() => executeCommand('help')}>help</span> for available commands.
          </div>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: trimmed,
        output: outputNode,
        time: now,
      }
    ]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sound.playTerminalKey();
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex + 1 < commandHistory.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const quickPills = ['whoami', 'skills', 'projects', 'exp', 'hire', 'awards', 'cert', 'contact'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl h-[560px] max-h-[85vh] flex flex-col rounded-2xl bg-[#090d18] border border-sky-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.15)] overflow-hidden"
          >
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    sound.playClick();
                    onClose();
                  }}
                  className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors"
                  title="Close"
                />
                <button
                  onClick={() => {
                    sound.playClick();
                    setLogs([]);
                  }}
                  className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-400 transition-colors"
                  title="Clear"
                />
                <button
                  className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-400 transition-colors"
                  title="Maximize"
                />
                <div className="flex items-center gap-2 ml-3">
                  <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-mono text-xs text-slate-300">
                    bhanuteja@portfolio:~ <span className="text-slate-500">(zsh)</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 terminal-scanlines">
              {logs.map((log) => (
                <div key={log.id} className="space-y-1">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-sky-400 font-semibold">~</span>
                    <span className="text-slate-200 font-bold">{log.command}</span>
                    <span className="text-[10px] text-slate-500 ml-auto">{log.time}</span>
                  </div>
                  <div className="pl-4">{log.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick Command Suggestions */}
            <div className="px-4 py-2 bg-[#0b101c] border-t border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
              <span className="text-slate-500 text-[10px] uppercase font-bold shrink-0">Pills:</span>
              {quickPills.map((pill) => (
                <button
                  key={pill}
                  onClick={() => executeCommand(pill)}
                  className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-sky-500/20 text-slate-300 hover:text-sky-300 border border-white/5 hover:border-sky-500/40 shrink-0 transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Input Line Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 bg-[#0d1322] border-t border-white/10">
              <span className="text-emerald-400 font-mono text-sm font-bold">➜</span>
              <span className="text-sky-400 font-mono text-xs font-semibold">~</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command... (e.g. skills, projects, hire)"
                className="flex-1 bg-transparent text-slate-100 font-mono text-xs focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-400 border border-sky-500/40 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
