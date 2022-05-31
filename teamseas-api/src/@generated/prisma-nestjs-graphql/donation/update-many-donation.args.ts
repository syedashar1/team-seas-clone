import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationUpdateManyMutationInput } from './donation-update-many-mutation.input';
import { DonationWhereInput } from './donation-where.input';

@ArgsType()
export class UpdateManyDonationArgs {

    @Field(() => DonationUpdateManyMutationInput, {nullable:false})
    data!: DonationUpdateManyMutationInput;

    @Field(() => DonationWhereInput, {nullable:true})
    where?: DonationWhereInput;
}
