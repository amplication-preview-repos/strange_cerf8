import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WaterLayerServiceBase } from "./base/waterLayer.service.base";

@Injectable()
export class WaterLayerService extends WaterLayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
