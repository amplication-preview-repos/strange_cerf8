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
import { WorldConfigWhereUniqueInput } from "./WorldConfigWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteWorldConfigArgs {
  @ApiProperty({
    required: true,
    type: () => WorldConfigWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorldConfigWhereUniqueInput)
  @Field(() => WorldConfigWhereUniqueInput, { nullable: false })
  where!: WorldConfigWhereUniqueInput;
}

export { DeleteWorldConfigArgs as DeleteWorldConfigArgs };
