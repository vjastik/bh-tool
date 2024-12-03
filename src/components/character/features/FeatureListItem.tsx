import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Trash2, Edit2, Check, X } from "lucide-react";
import { CharacterFeature } from "../../../types/character";

interface FeatureListItemProps {
  feature: CharacterFeature;
  onUpdate: (feature: CharacterFeature) => void;
  onDelete: (id: string) => void;
}

export default function FeatureListItem({
  feature,
  onUpdate,
  onDelete,
}: FeatureListItemProps) {
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(feature.name);
  const [description, setDescription] = useState(feature.description);

  const handleSave = () => {
    onUpdate({
      ...feature,
      name,
      description,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(feature.name);
    setDescription(feature.description);
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
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-medium text-lg mb-1">{feature.name}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
        <div className="flex gap-2 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setIsEditing(true)}
            className="p-1 text-gray-400 hover:text-white transition-colors"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(feature.id)}
            className="p-1 text-gray-400 hover:text-red-400 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
