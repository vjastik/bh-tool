import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatBadgeProps {
  icon: LucideIcon;
  label: string;
  value: number;
  color: 'rose' | 'blue' | 'purple';
}

const colorClasses = {
  rose: 'from-rose-500/20 to-rose-500/5 border-rose-500/20',
  blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/20'
};

export default function StatBadge({ icon: Icon, label, value, color }: StatBadgeProps) {
  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm rounded-lg p-2 border text-center`}>
      <div className="flex items-center justify-center gap-1 text-sm text-white/80 mb-1">
        <Icon size={16} />
        {label}
      </div>
      <div className="font-bold">{value}</div>
    </div>
  );
}