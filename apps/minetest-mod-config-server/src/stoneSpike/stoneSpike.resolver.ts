import * as graphql from "@nestjs/graphql";
import { StoneSpikeResolverBase } from "./base/stoneSpike.resolver.base";
import { StoneSpike } from "./base/StoneSpike";
import { StoneSpikeService } from "./stoneSpike.service";

@graphql.Resolver(() => StoneSpike)
export class StoneSpikeResolver extends StoneSpikeResolverBase {
  constructor(protected readonly service: StoneSpikeService) {
    super(service);
  }
}
