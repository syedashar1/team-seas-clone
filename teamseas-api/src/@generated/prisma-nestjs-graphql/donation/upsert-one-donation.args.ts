import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationCreateInput } from './donation-create.input';
import { DonationUpdateInput } from './donation-update.input';

@ArgsType()
export class UpsertOneDonationArgs {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationCreateInput, {nullable:false})
    create!: DonationCreateInput;

    @Field(() => DonationUpdateInput, {nullable:false})
    update!: DonationUpdateInput;
}
