import { WorldConfigWhereInput } from "./WorldConfigWhereInput";
import { WorldConfigOrderByInput } from "./WorldConfigOrderByInput";

export type WorldConfigFindManyArgs = {
  where?: WorldConfigWhereInput;
  orderBy?: Array<WorldConfigOrderByInput>;
  skip?: number;
  take?: number;
};
