import { WorldConfig as TWorldConfig } from "../api/worldConfig/WorldConfig";

export const WORLDCONFIG_TITLE_FIELD = "worldName";

export const WorldConfigTitle = (record: TWorldConfig): string => {
  return record.worldName?.toString() || String(record.id);
};
