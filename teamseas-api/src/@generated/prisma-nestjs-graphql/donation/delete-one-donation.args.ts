import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';

@ArgsType()
export class DeleteOneDonationArgs {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;
}
