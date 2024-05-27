import { StoneSpike as TStoneSpike } from "../api/stoneSpike/StoneSpike";

export const STONESPIKE_TITLE_FIELD = "material";

export const StoneSpikeTitle = (record: TStoneSpike): string => {
  return record.material?.toString() || String(record.id);
};
