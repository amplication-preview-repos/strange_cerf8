import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WorldConfigWhereInput = {
  creationDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  worldName?: StringNullableFilter;
};
