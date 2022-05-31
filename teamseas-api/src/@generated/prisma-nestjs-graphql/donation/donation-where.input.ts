import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';

@InputType()
export class DonationWhereInput {

    @Field(() => [DonationWhereInput], {nullable:true})
    AND?: Array<DonationWhereInput>;

    @Field(() => [DonationWhereInput], {nullable:true})
    OR?: Array<DonationWhereInput>;

    @Field(() => [DonationWhereInput], {nullable:true})
    NOT?: Array<DonationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    displayName?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    mobile?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    message?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    team?: StringNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    anonymous?: BoolNullableFilter;
}
