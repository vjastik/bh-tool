import React, { useState } from 'react';
import { Edit2 } from 'lucide-react';

interface CharacterHeaderProps {
  name: string;
  onNameChange: (name: string) => void;
}

export default function CharacterHeader({ name, onNameChange }: CharacterHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(name);

  const handleSubmit = () => {
    onNameChange(tempName);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={tempName}
        onChange={(e) => setTempName(e.target.value)}
        onBlur={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
          if (e.key === 'Escape') {
            setTempName(name);
            setIsEditing(false);
          }
        }}
        className="text-4xl sm:text-5xl font-bold bg-transparent border-b-2 border-indigo-500 focus:outline-none w-full"
        autoFocus
      />
    );
  }

  return (
    <h1
      className="text-4xl sm:text-5xl font-bold group cursor-pointer flex items-center gap-3"
      onClick={() => setIsEditing(true)}
    >
      {name}
      <Edit2 size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500" />
    </h1>
  );
}