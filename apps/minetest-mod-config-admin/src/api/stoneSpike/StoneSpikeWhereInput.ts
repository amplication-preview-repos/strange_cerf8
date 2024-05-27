import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StoneSpikeWhereInput = {
  height?: IntNullableFilter;
  id?: StringFilter;
  material?: StringNullableFilter;
  width?: IntNullableFilter;
};
