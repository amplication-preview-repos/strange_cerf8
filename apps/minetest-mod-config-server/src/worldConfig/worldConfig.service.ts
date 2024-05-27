import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorldConfigServiceBase } from "./base/worldConfig.service.base";

@Injectable()
export class WorldConfigService extends WorldConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
