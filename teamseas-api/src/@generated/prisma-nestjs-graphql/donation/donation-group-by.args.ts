import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationWhereInput } from './donation-where.input';
import { DonationOrderByWithAggregationInput } from './donation-order-by-with-aggregation.input';
import { DonationScalarFieldEnum } from './donation-scalar-field.enum';
import { DonationScalarWhereWithAggregatesInput } from './donation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DonationCountAggregateInput } from './donation-count-aggregate.input';
import { DonationAvgAggregateInput } from './donation-avg-aggregate.input';
import { DonationSumAggregateInput } from './donation-sum-aggregate.input';
import { DonationMinAggregateInput } from './donation-min-aggregate.input';
import { DonationMaxAggregateInput } from './donation-max-aggregate.input';

@ArgsType()
export class DonationGroupByArgs {

    @Field(() => DonationWhereInput, {nullable:true})
    where?: DonationWhereInput;

    @Field(() => [DonationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DonationOrderByWithAggregationInput>;

    @Field(() => [DonationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DonationScalarFieldEnum>;

    @Field(() => DonationScalarWhereWithAggregatesInput, {nullable:true})
    having?: DonationScalarWhereWithAggregatesInput;

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
