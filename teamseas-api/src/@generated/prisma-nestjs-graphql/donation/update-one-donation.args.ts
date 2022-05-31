import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationUpdateInput } from './donation-update.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';

@ArgsType()
export class UpdateOneDonationArgs {

    @Field(() => DonationUpdateInput, {nullable:false})
    data!: DonationUpdateInput;

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;
}
