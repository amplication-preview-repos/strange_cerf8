import { InputJsonValue } from "../../types";

export type PlayerSettingsUpdateInput = {
  lastLogin?: Date | null;
  playerName?: string | null;
  preferences?: InputJsonValue;
};
