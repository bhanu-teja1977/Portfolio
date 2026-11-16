import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Shield, Cpu, RefreshCw, CheckCircle2, Zap } from 'lucide-react';
import { sound } from '../utils/soundEffects';

interface ServiceNode {
  name: string;
  subtext: string;
  baseLatency: number;
  protocol: string;
  uptime: string;
  status: 'Operational' | 'Optimal' | 'Secured';
}

const SERVICES: ServiceNode[] = [
  {
    name: 'PhishGuard Inference Engine',
    subtext: 'FastAPI & LightGBM SHAP Explainer',
    baseLatency: 18,
    protocol: 'REST • Python',
    uptime: '99.9%',
    status: 'Operational',
  },
  {
    name: 'AeroTwin Digital Twin Pipeline',
    subtext: 'Real-Time Sensor Telemetry for MALE UAVs',
    baseLatency: 24,
    protocol: 'Telemetry • WSS',
    uptime: '99.9%',
    status: 'Optimal',
  },
  {
    name: 'GreenFleet-Q Optimizer',
    subtext: 'FastAPI QPSO Route Calculation Engine',
    baseLatency: 35,
    protocol: 'FastAPI • Recharts',
    uptime: '99.8%',
    status: 'Optimal',
  },
  {
    name: 'SignalSafe Spatial Service',
    subtext: 'Cellular Quality Predictor & Geospatial GIS',
    baseLatency: 22,
    protocol: 'GeoJSON • REST',
    uptime: '100%',
    status: 'Operational',
  },
  {
    name: 'DrishyaMitra Web API Gateway',
    subtext: 'MERN Stack Express REST & MongoDB Cluster',
    baseLatency: 14,
    protocol: 'Node.js • JWT',
    uptime: '99.9%',
    status: 'Secured',
  }
];

export const SystemTelemetry: React.FC = () => {
  const [latencies, setLatencies] = useState<number[]>(SERVICES.map(s => s.baseLatency));
  const [isPinging, setIsPinging] = useState(false);

  const triggerLivePing = () => {
    sound.playClick();
    setIsPinging(true);
    setTimeout(() => {
      setLatencies(SERVICES.map(s => Math.max(8, s.baseLatency + Math.floor((Math.random() - 0.5) * 8))));
      setIsPinging(false);
      sound.playSuccess();
    }, 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLatencies(SERVICES.map(s => Math.max(8, s.baseLatency + Math.floor((Math.random() - 0.5) * 6))));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              System Telemetry & Live Services
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1">
            Engineered Production Nodes
          </h2>
        </div>

        <button
          onClick={triggerLivePing}
          disabled={isPinging}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-sky-500/40 text-xs font-mono text-sky-400 transition-all hover:bg-slate-800 disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isPinging ? 'animate-spin' : ''}`} />
          <span>Ping Edge Fleet</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="p-5 rounded-2xl glass-panel border border-white/5 hover:border-sky-500/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-display text-sm font-bold text-white">
                  {service.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {service.subtext}
                </p>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                {service.status}
              </span>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">{service.protocol}</span>
              <div className="flex items-center gap-1.5 text-sky-400">
                <Zap className="w-3 h-3" />
                <span>{latencies[idx]}ms</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SystemTelemetry;
