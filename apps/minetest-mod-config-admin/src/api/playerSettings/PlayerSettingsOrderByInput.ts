import { SortOrder } from "../../util/SortOrder";

export type PlayerSettingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastLogin?: SortOrder;
  playerName?: SortOrder;
  preferences?: SortOrder;
  updatedAt?: SortOrder;
};
