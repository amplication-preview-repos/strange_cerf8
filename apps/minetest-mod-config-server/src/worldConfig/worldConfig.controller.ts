import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorldConfigService } from "./worldConfig.service";
import { WorldConfigControllerBase } from "./base/worldConfig.controller.base";

@swagger.ApiTags("worldConfigs")
@common.Controller("worldConfigs")
export class WorldConfigController extends WorldConfigControllerBase {
  constructor(protected readonly service: WorldConfigService) {
    super(service);
  }
}
