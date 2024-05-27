import * as graphql from "@nestjs/graphql";
import { PlayerSettingsResolverBase } from "./base/playerSettings.resolver.base";
import { PlayerSettings } from "./base/PlayerSettings";
import { PlayerSettingsService } from "./playerSettings.service";

@graphql.Resolver(() => PlayerSettings)
export class PlayerSettingsResolver extends PlayerSettingsResolverBase {
  constructor(protected readonly service: PlayerSettingsService) {
    super(service);
  }
}
