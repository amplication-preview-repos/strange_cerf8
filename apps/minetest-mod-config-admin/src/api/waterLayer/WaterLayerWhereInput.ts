import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WaterLayerWhereInput = {
  depth?: IntNullableFilter;
  id?: StringFilter;
  salinity?: IntNullableFilter;
};
