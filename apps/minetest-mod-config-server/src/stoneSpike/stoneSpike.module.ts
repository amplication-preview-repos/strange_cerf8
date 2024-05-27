import { Module } from "@nestjs/common";
import { StoneSpikeModuleBase } from "./base/stoneSpike.module.base";
import { StoneSpikeService } from "./stoneSpike.service";
import { StoneSpikeController } from "./stoneSpike.controller";
import { StoneSpikeResolver } from "./stoneSpike.resolver";

@Module({
  imports: [StoneSpikeModuleBase],
  controllers: [StoneSpikeController],
  providers: [StoneSpikeService, StoneSpikeResolver],
  exports: [StoneSpikeService],
})
export class StoneSpikeModule {}
