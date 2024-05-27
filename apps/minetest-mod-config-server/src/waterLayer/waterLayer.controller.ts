import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WaterLayerService } from "./waterLayer.service";
import { WaterLayerControllerBase } from "./base/waterLayer.controller.base";

@swagger.ApiTags("waterLayers")
@common.Controller("waterLayers")
export class WaterLayerController extends WaterLayerControllerBase {
  constructor(protected readonly service: WaterLayerService) {
    super(service);
  }
}
