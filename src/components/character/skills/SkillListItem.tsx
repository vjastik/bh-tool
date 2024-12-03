import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Trash2, Edit2, Check, X, Zap } from "lucide-react";
import { CharacterSkill } from "../../../types/character";

interface SkillListItemProps {
  skill: CharacterSkill;
  onUpdate: (skill: CharacterSkill) => void;
  onDelete: (id: string) => void;
  onUse: (id: string) => void;
  mp: number;
}

export default function SkillListItem({
  skill,
  onUpdate,
  onDelete,
  onUse,
  mp,
}: SkillListItemProps) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(skill.name);
  const [description, setDescription] = useState(skill.description);
  const [mpCost, setMpCost] = useState(skill.mpCost);

  const handleSave = () => {
    onUpdate({
      ...skill,
      name,
      description,
      mpCost,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(skill.name);
    setDescription(skill.description);
    setMpCost(skill.mpCost);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-dark-300/50 rounded-lg p-4 border border-dark-100">
        <div className="space-y-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-dark-400/50 border border-dark-50 rounded px-3 py-2 text-white focus:outline-none focus:border-primary-500"
            placeholder={t("common.name")}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-dark-400/50 border border-dark-50 rounded px-3 py-2 text-white focus:outline-none focus:border-primary-500 min-h-[80px]"
            placeholder={t("common.description")}
          />
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              {t("skills.mpCost")}
            </label>
            <input
              type="number"
              value={mpCost}
              onChange={(e) =>
                setMpCost(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-24 bg-dark-400/50 border border-dark-50 rounded px-3 py-2 text-white focus:outline-none focus:border-primary-500"
              min="1"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={handleCancel}
              className="flex items-center gap-1 px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
              {t("common.cancel")}
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1 px-3 py-1 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <Check size={16} />
              {t("common.save")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-dark-300/50 rounded-lg p-4 border border-dark-100 hover:border-dark-50 transition-colors">
      <div className="flex justify-between items-start gap-4 sm:flex-row flex-col">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-lg">{skill.name}</h3>
            <span className="text-sm text-blue-400">
              {skill.mpCost} {t("stats.mp")}
            </span>
          </div>
          <p className="text-gray-400">{skill.description}</p>
        </div>
        <div className="flex gap-2 justify-between w-full sm:w-auto">
          <button
            onClick={() => onUse(skill.id)}
            className={`flex items-center gap-1 px-3 py-1 rounded border ${
              mp > 0
                ? "text-blue-400 border-blue-400/20 hover:border-blue-400/40"
                : "text-purple-400 border-purple-400/20 hover:border-purple-400/40"
            } transition-colors`}
          >
            <Zap size={16} />
            {t("common.use")}
          </button>
          <div className="flex gap-2 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setIsEditing(true)}
              className="p-1 text-gray-400 hover:text-white transition-colors"
            >
              <Edit2 size={16} />
            </button>
            <button
              onClick={() => onDelete(skill.id)}
              className="p-1 text-gray-400 hover:text-red-400 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
