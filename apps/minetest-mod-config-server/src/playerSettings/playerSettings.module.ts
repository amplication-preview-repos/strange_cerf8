import { Module } from "@nestjs/common";
import { PlayerSettingsModuleBase } from "./base/playerSettings.module.base";
import { PlayerSettingsService } from "./playerSettings.service";
import { PlayerSettingsController } from "./playerSettings.controller";
import { PlayerSettingsResolver } from "./playerSettings.resolver";

@Module({
  imports: [PlayerSettingsModuleBase],
  controllers: [PlayerSettingsController],
  providers: [PlayerSettingsService, PlayerSettingsResolver],
  exports: [PlayerSettingsService],
})
export class PlayerSettingsModule {}
