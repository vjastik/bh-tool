import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ArrowLeft, Circle, Brain, Heart } from "lucide-react";
import { RootState } from "../store/store";
import {
  updateCharacter,
  addFeature,
  updateFeature,
  deleteFeature,
  addSkill,
  updateSkill,
  deleteSkill,
  useSkill,
  addItem,
  removeItem,
  equipWeapon,
  setPocketItem,
} from "../store/characterSlice";
import {
  Character,
  CharacterFeature,
  CharacterSkill,
  Item,
} from "../types/character";
import StatCard from "./character/details/StatCard";
import CharacterHeader from "./details/CharacterHeader";
import FeatureList from "./character/features/FeatureList";
import SkillList from "./character/skills/SkillList";
import InventorySection from "./character/inventory/InventorySection";
import AddItemDialog from "./character/inventory/AddItemDialog";
import Button from "./ui/Button";
import Card from "./ui/Card";
import PageContainer from "./ui/PageContainer";
import { Characteristics } from "./character/details/Characteristics";

export default function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showAddItem, setShowAddItem] = useState(false);

  const character = useSelector((state: RootState) =>
    state.characters.characters.find((char) => char.id === id)
  );

  if (!character || !id) {
    return null;
  }

  const handleUpdate = (updates: Partial<Character>) => {
    dispatch(
      updateCharacter({
        ...character,
        ...updates,
      })
    );
  };

  const handleFeatureAdd = () => {
    const feature: CharacterFeature = {
      id: crypto.randomUUID(),
      name: t("features.new.name"),
      description: t("features.new.description"),
    };
    dispatch(addFeature({ characterId: id, feature }));
  };

  const handleFeatureUpdate = (feature: CharacterFeature) => {
    dispatch(updateFeature({ characterId: id, feature }));
  };

  const handleFeatureDelete = (featureId: string) => {
    dispatch(deleteFeature({ characterId: id, featureId }));
  };

  const handleSkillAdd = () => {
    const skill: CharacterSkill = {
      id: crypto.randomUUID(),
      name: t("skills.new.name"),
      description: t("skills.new.description"),
      mpCost: 1,
    };
    dispatch(addSkill({ characterId: id, skill }));
  };

  const handleSkillUpdate = (skill: CharacterSkill) => {
    dispatch(updateSkill({ characterId: id, skill }));
  };

  const handleSkillDelete = (skillId: string) => {
    dispatch(deleteSkill({ characterId: id, skillId }));
  };

  const handleSkillUse = (skillId: string) => {
    dispatch(useSkill({ characterId: id, skillId }));
  };

  const handleAddItem = (item: Item) => {
    dispatch(addItem({ characterId: id, item }));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem({ characterId: id, itemId }));
  };

  const handleEquipWeapon = (weapon: Item | null) => {
    dispatch(equipWeapon({ characterId: id, weapon }));
  };

  const handleSetPocketItem = (index: number, item: Item | null) => {
    dispatch(setPocketItem({ characterId: id, pocketIndex: index, item }));
  };

  return (
    <PageContainer>
      <Button
        icon={ArrowLeft}
        variant="secondary"
        onClick={() => navigate("/")}
        className="mb-6 sm:mb-8"
      >
        {t("common.back")}
      </Button>

      <div className="space-y-6">
        <CharacterHeader
          name={character.name}
          onNameChange={(name) => handleUpdate({ name })}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            icon={Heart}
            label={t("stats.hp")}
            value={character.hp}
            onChange={(hp) => handleUpdate({ hp })}
            color="rose"
          />
          <StatCard
            icon={Brain}
            label={t("stats.mp")}
            value={character.mp}
            onChange={(mp) => handleUpdate({ mp })}
            color="blue"
          />
          <StatCard
            icon={Circle}
            label={t("stats.chaos")}
            value={character.chaos}
            onChange={(chaos) => handleUpdate({ chaos })}
            color="purple"
          />
        </div>

        <Card>
          <Characteristics />
        </Card>

        <Card>
          <InventorySection
            pockets={character.pockets}
            backpack={character.backpack}
            weapon={character.weapon}
            onAddItem={() => setShowAddItem(true)}
            onRemoveItem={handleRemoveItem}
            onEquipWeapon={handleEquipWeapon}
            onSetPocketItem={handleSetPocketItem}
          />
        </Card>

        <Card>
          <FeatureList
            features={character.features || []}
            onFeatureAdd={handleFeatureAdd}
            onFeatureUpdate={handleFeatureUpdate}
            onFeatureDelete={handleFeatureDelete}
          />
        </Card>

        <Card>
          <SkillList
            skills={character.skills || []}
            onSkillAdd={handleSkillAdd}
            onSkillUpdate={handleSkillUpdate}
            onSkillDelete={handleSkillDelete}
            onSkillUse={handleSkillUse}
            mp={character.mp}
          />
        </Card>
      </div>

      {showAddItem && (
        <AddItemDialog
          onAdd={handleAddItem}
          onClose={() => setShowAddItem(false)}
        />
      )}
    </PageContainer>
  );
}
