/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorldConfigWhereInput } from "./WorldConfigWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorldConfigListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorldConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => WorldConfigWhereInput)
  @IsOptional()
  @Field(() => WorldConfigWhereInput, {
    nullable: true,
  })
  every?: WorldConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorldConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => WorldConfigWhereInput)
  @IsOptional()
  @Field(() => WorldConfigWhereInput, {
    nullable: true,
  })
  some?: WorldConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorldConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => WorldConfigWhereInput)
  @IsOptional()
  @Field(() => WorldConfigWhereInput, {
    nullable: true,
  })
  none?: WorldConfigWhereInput;
}
export { WorldConfigListRelationFilter as WorldConfigListRelationFilter };
