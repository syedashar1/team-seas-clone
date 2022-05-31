import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DonationCountAggregate } from './donation-count-aggregate.output';
import { DonationAvgAggregate } from './donation-avg-aggregate.output';
import { DonationSumAggregate } from './donation-sum-aggregate.output';
import { DonationMinAggregate } from './donation-min-aggregate.output';
import { DonationMaxAggregate } from './donation-max-aggregate.output';

@ObjectType()
export class DonationGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    mobile?: string;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => String, {nullable:true})
    team?: string;

    @Field(() => Boolean, {nullable:true})
    anonymous?: boolean;

    @Field(() => DonationCountAggregate, {nullable:true})
    _count?: DonationCountAggregate;

    @Field(() => DonationAvgAggregate, {nullable:true})
    _avg?: DonationAvgAggregate;

    @Field(() => DonationSumAggregate, {nullable:true})
    _sum?: DonationSumAggregate;

    @Field(() => DonationMinAggregate, {nullable:true})
    _min?: DonationMinAggregate;

    @Field(() => DonationMaxAggregate, {nullable:true})
    _max?: DonationMaxAggregate;
}
