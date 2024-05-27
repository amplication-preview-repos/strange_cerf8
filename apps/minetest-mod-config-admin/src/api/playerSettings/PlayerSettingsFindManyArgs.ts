import { PlayerSettingsWhereInput } from "./PlayerSettingsWhereInput";
import { PlayerSettingsOrderByInput } from "./PlayerSettingsOrderByInput";

export type PlayerSettingsFindManyArgs = {
  where?: PlayerSettingsWhereInput;
  orderBy?: Array<PlayerSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
