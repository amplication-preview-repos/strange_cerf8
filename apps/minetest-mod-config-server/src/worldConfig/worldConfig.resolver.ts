import * as graphql from "@nestjs/graphql";
import { WorldConfigResolverBase } from "./base/worldConfig.resolver.base";
import { WorldConfig } from "./base/WorldConfig";
import { WorldConfigService } from "./worldConfig.service";

@graphql.Resolver(() => WorldConfig)
export class WorldConfigResolver extends WorldConfigResolverBase {
  constructor(protected readonly service: WorldConfigService) {
    super(service);
  }
}
