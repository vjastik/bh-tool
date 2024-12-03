import React from 'react';

interface StatInputProps {
  label: string;
  value: number;
}

export default function StatInput({ label, value }: StatInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        {label}:
      </label>
      <p>{value}</p>
    </div>
  );
}