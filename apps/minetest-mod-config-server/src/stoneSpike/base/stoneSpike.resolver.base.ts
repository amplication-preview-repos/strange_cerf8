/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { StoneSpike } from "./StoneSpike";
import { StoneSpikeCountArgs } from "./StoneSpikeCountArgs";
import { StoneSpikeFindManyArgs } from "./StoneSpikeFindManyArgs";
import { StoneSpikeFindUniqueArgs } from "./StoneSpikeFindUniqueArgs";
import { CreateStoneSpikeArgs } from "./CreateStoneSpikeArgs";
import { UpdateStoneSpikeArgs } from "./UpdateStoneSpikeArgs";
import { DeleteStoneSpikeArgs } from "./DeleteStoneSpikeArgs";
import { StoneSpikeService } from "../stoneSpike.service";
@graphql.Resolver(() => StoneSpike)
export class StoneSpikeResolverBase {
  constructor(protected readonly service: StoneSpikeService) {}

  async _stoneSpikesMeta(
    @graphql.Args() args: StoneSpikeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StoneSpike])
  async stoneSpikes(
    @graphql.Args() args: StoneSpikeFindManyArgs
  ): Promise<StoneSpike[]> {
    return this.service.stoneSpikes(args);
  }

  @graphql.Query(() => StoneSpike, { nullable: true })
  async stoneSpike(
    @graphql.Args() args: StoneSpikeFindUniqueArgs
  ): Promise<StoneSpike | null> {
    const result = await this.service.stoneSpike(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StoneSpike)
  async createStoneSpike(
    @graphql.Args() args: CreateStoneSpikeArgs
  ): Promise<StoneSpike> {
    return await this.service.createStoneSpike({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => StoneSpike)
  async updateStoneSpike(
    @graphql.Args() args: UpdateStoneSpikeArgs
  ): Promise<StoneSpike | null> {
    try {
      return await this.service.updateStoneSpike({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => StoneSpike)
  async deleteStoneSpike(
    @graphql.Args() args: DeleteStoneSpikeArgs
  ): Promise<StoneSpike | null> {
    try {
      return await this.service.deleteStoneSpike(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
