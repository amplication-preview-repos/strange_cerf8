import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlayerSettingsServiceBase } from "./base/playerSettings.service.base";

@Injectable()
export class PlayerSettingsService extends PlayerSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
