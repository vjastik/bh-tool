import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number;
  onChange: (value: number) => void;
  color: 'rose' | 'blue' | 'purple';
}

const colorClasses = {
  rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/20 hover:border-rose-500/40',
  blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40',
  purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/20 hover:border-purple-500/40'
};

export default function StatCard({ icon: Icon, label, value, onChange, color }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm rounded-xl p-6 border transition-colors cursor-pointer group`}>
      <div className="flex items-center gap-3 mb-4">
        <Icon size={24} className="text-white/80" />
        <div className="text-lg font-medium text-white/80">{label}</div>
      </div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value) || 0)}
        className="text-3xl font-bold bg-transparent w-full focus:outline-none"
      />
    </div>
  );
}