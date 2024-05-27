import { WaterLayer as TWaterLayer } from "../api/waterLayer/WaterLayer";

export const WATERLAYER_TITLE_FIELD = "id";

export const WaterLayerTitle = (record: TWaterLayer): string => {
  return record.id?.toString() || String(record.id);
};
