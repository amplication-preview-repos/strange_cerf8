import { InputJsonValue } from "../../types";

export type PlayerSettingsCreateInput = {
  lastLogin?: Date | null;
  playerName?: string | null;
  preferences?: InputJsonValue;
};
