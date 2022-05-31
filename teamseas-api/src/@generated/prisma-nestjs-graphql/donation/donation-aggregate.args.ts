import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereInput } from './donation-where.input';
import { DonationOrderByWithRelationInput } from './donation-order-by-with-relation.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DonationCountAggregateInput } from './donation-count-aggregate.input';
import { DonationAvgAggregateInput } from './donation-avg-aggregate.input';
import { DonationSumAggregateInput } from './donation-sum-aggregate.input';
import { DonationMinAggregateInput } from './donation-min-aggregate.input';
import { DonationMaxAggregateInput } from './donation-max-aggregate.input';

@ArgsType()
export class DonationAggregateArgs {

    @Field(() => DonationWhereInput, {nullable:true})
    where?: DonationWhereInput;

    @Field(() => [DonationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DonationOrderByWithRelationInput>;

    @Field(() => DonationWhereUniqueInput, {nullable:true})
    cursor?: DonationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DonationCountAggregateInput, {nullable:true})
    _count?: DonationCountAggregateInput;

    @Field(() => DonationAvgAggregateInput, {nullable:true})
    _avg?: DonationAvgAggregateInput;

    @Field(() => DonationSumAggregateInput, {nullable:true})
    _sum?: DonationSumAggregateInput;

    @Field(() => DonationMinAggregateInput, {nullable:true})
    _min?: DonationMinAggregateInput;

    @Field(() => DonationMaxAggregateInput, {nullable:true})
    _max?: DonationMaxAggregateInput;
}
