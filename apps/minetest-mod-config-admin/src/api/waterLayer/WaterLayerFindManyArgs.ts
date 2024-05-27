import { WaterLayerWhereInput } from "./WaterLayerWhereInput";
import { WaterLayerOrderByInput } from "./WaterLayerOrderByInput";

export type WaterLayerFindManyArgs = {
  where?: WaterLayerWhereInput;
  orderBy?: Array<WaterLayerOrderByInput>;
  skip?: number;
  take?: number;
};
