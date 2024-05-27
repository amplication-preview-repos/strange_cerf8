import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StoneSpikeServiceBase } from "./base/stoneSpike.service.base";

@Injectable()
export class StoneSpikeService extends StoneSpikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
