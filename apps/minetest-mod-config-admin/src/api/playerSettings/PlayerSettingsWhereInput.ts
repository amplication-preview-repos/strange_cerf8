import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PlayerSettingsWhereInput = {
  id?: StringFilter;
  lastLogin?: DateTimeNullableFilter;
  playerName?: StringNullableFilter;
  preferences?: JsonFilter;
};
