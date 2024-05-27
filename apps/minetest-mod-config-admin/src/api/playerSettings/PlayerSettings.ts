import { JsonValue } from "type-fest";

export type PlayerSettings = {
  createdAt: Date;
  id: string;
  lastLogin: Date | null;
  playerName: string | null;
  preferences: JsonValue;
  updatedAt: Date;
};
