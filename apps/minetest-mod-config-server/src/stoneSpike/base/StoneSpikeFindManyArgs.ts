/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StoneSpikeWhereInput } from "./StoneSpikeWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StoneSpikeOrderByInput } from "./StoneSpikeOrderByInput";

@ArgsType()
class StoneSpikeFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StoneSpikeWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StoneSpikeWhereInput, { nullable: true })
  @Type(() => StoneSpikeWhereInput)
  where?: StoneSpikeWhereInput;

  @ApiProperty({
    required: false,
    type: [StoneSpikeOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StoneSpikeOrderByInput], { nullable: true })
  @Type(() => StoneSpikeOrderByInput)
  orderBy?: Array<StoneSpikeOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StoneSpikeFindManyArgs as StoneSpikeFindManyArgs };