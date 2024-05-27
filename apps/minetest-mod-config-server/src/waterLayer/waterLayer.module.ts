import { Module } from "@nestjs/common";
import { WaterLayerModuleBase } from "./base/waterLayer.module.base";
import { WaterLayerService } from "./waterLayer.service";
import { WaterLayerController } from "./waterLayer.controller";
import { WaterLayerResolver } from "./waterLayer.resolver";

@Module({
  imports: [WaterLayerModuleBase],
  controllers: [WaterLayerController],
  providers: [WaterLayerService, WaterLayerResolver],
  exports: [WaterLayerService],
})
export class WaterLayerModule {}
