import * as graphql from "@nestjs/graphql";
import { WaterLayerResolverBase } from "./base/waterLayer.resolver.base";
import { WaterLayer } from "./base/WaterLayer";
import { WaterLayerService } from "./waterLayer.service";

@graphql.Resolver(() => WaterLayer)
export class WaterLayerResolver extends WaterLayerResolverBase {
  constructor(protected readonly service: WaterLayerService) {
    super(service);
  }
}
