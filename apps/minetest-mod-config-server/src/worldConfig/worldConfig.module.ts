import { Module } from "@nestjs/common";
import { WorldConfigModuleBase } from "./base/worldConfig.module.base";
import { WorldConfigService } from "./worldConfig.service";
import { WorldConfigController } from "./worldConfig.controller";
import { WorldConfigResolver } from "./worldConfig.resolver";

@Module({
  imports: [WorldConfigModuleBase],
  controllers: [WorldConfigController],
  providers: [WorldConfigService, WorldConfigResolver],
  exports: [WorldConfigService],
})
export class WorldConfigModule {}
