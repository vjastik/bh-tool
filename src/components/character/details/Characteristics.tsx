import React from "react";
import { Circle, Shield, BicepsFlexed, Brain, Zap, Dices } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store/store";
import { updateStats } from "../../../store/characterSlice";
import { DICE_VALUES } from "../../../utils/dice";
import { CharacterStats, DiceType } from "../../../types/character";

export const Characteristics = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state: RootState) =>
    state.characters.characters.find((char) => char.id === id)
  );

  if (!character || !id) {
    return null;
  }

  const statIcons = {
    str: BicepsFlexed,
    dex: Zap,
    int: Brain,
    con: Shield,
    wis: Circle,
  };

  const handleChangeStat = (stats: Partial<CharacterStats>) => {
    dispatch(
      updateStats({ characterId: id, stats: { ...character.stats, ...stats } })
    );
  };

  const getAvailableDice = (currentStat: keyof CharacterStats) => {
    const usedDice = Object.entries(character.stats)
      .filter(([stat, value]) => stat !== currentStat && value !== null)
      .map(([_, value]) => value);

    return DICE_VALUES.filter((dice) => !usedDice.includes(dice));
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Dices size={20} className="text-indigo-400" />
        {t("characters.form.stats")}
      </h2>

      <div className="flex flex-wrap gap-4">
        {Object.entries(character.stats).map(([stat, value]) => {
          const Icon = statIcons[stat as keyof typeof statIcons];
          return (
            <div
              key={stat}
              className="flex-1 min-w-[120px] p-4 bg-dark-300/50 rounded-lg border border-dark-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon size={20} className="text-indigo-400" />
                <div className="text-sm text-gray-400">
                  {t(`stats.${stat}`)}
                </div>
              </div>
              <select
                value={value || ""}
                onChange={(e) =>
                  handleChangeStat({
                    [stat]: e.target.value as DiceType,
                  })
                }
                className="w-full bg-transparent text-lg font-medium focus:outline-none cursor-pointer hover:text-indigo-400 transition-colors"
              >
                <option value="">{t("common.empty")}</option>
                {getAvailableDice(stat as keyof CharacterStats).map((dice) => (
                  <option key={dice} value={dice}>
                    {dice}
                  </option>
                ))}
              </select>
            </div>
          );
        })}
      </div>
    </>
  );
};
