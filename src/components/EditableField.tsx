import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';

interface EditableFieldProps {
  value: string | number;
  onChange: (value: string | number) => void;
  type?: 'text' | 'number';
  label?: string;
  className?: string;
}

export default function EditableField({
  value,
  onChange,
  type = 'text',
  label,
  className = ''
}: EditableFieldProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const handleSubmit = () => {
    onChange(tempValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Escape') {
      setTempValue(value);
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <div className={className}>
        {label && (
          <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
        )}
        <input
          type={type}
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
          onBlur={handleSubmit}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          autoFocus
        />
      </div>
    );
  }

  return (
    <div
      className={`group cursor-pointer relative ${className}`}
      onClick={() => setIsEditing(true)}
    >
      {label && (
        <div className="text-sm font-medium text-gray-700 mb-1">{label}</div>
      )}
      <div className="flex items-center gap-2">
        <span>{value}</span>
        <Edit2 size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
      </div>
    </div>
  );
}