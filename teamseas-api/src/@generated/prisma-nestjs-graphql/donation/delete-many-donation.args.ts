import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereInput } from './donation-where.input';

@ArgsType()
export class DeleteManyDonationArgs {

    @Field(() => DonationWhereInput, {nullable:true})
    where?: DonationWhereInput;
}
