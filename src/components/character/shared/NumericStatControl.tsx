import React from 'react';
import { Plus, Minus } from 'lucide-react';

interface NumericStatControlProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function NumericStatControl({
  value,
  onChange,
  min = 0,
  max = 999
}: NumericStatControlProps) {
  const handleChange = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => handleChange(value - 1)}
        className="p-1 rounded-md hover:bg-dark-300/50 text-gray-400 hover:text-primary-400 transition-colors"
      >
        <Minus size={16} />
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => handleChange(parseInt(e.target.value) || 0)}
        className="w-16 bg-transparent text-center focus:outline-none text-lg font-bold"
      />
      <button
        type="button"
        onClick={() => handleChange(value + 1)}
        className="p-1 rounded-md hover:bg-dark-300/50 text-gray-400 hover:text-primary-400 transition-colors"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}