import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StoneSpikeService } from "./stoneSpike.service";
import { StoneSpikeControllerBase } from "./base/stoneSpike.controller.base";

@swagger.ApiTags("stoneSpikes")
@common.Controller("stoneSpikes")
export class StoneSpikeController extends StoneSpikeControllerBase {
  constructor(protected readonly service: StoneSpikeService) {
    super(service);
  }
}
