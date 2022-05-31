import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationCreateInput } from './donation-create.input';

@ArgsType()
export class CreateOneDonationArgs {

    @Field(() => DonationCreateInput, {nullable:false})
    data!: DonationCreateInput;
}
