import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlayerSettingsService } from "./playerSettings.service";
import { PlayerSettingsControllerBase } from "./base/playerSettings.controller.base";

@swagger.ApiTags("playerSettings")
@common.Controller("playerSettings")
export class PlayerSettingsController extends PlayerSettingsControllerBase {
  constructor(protected readonly service: PlayerSettingsService) {
    super(service);
  }
}
