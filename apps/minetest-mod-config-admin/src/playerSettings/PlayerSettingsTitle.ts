import { PlayerSettings as TPlayerSettings } from "../api/playerSettings/PlayerSettings";

export const PLAYERSETTINGS_TITLE_FIELD = "playerName";

export const PlayerSettingsTitle = (record: TPlayerSettings): string => {
  return record.playerName?.toString() || String(record.id);
};
