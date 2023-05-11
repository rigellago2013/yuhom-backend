import { IsNumber, IsNotEmpty, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HdmfDto {
    
    @ApiProperty()
    @IsNotEmpty()
    rtn : string;

    @ApiProperty()
    @IsNumber()
    housingAccountNumber : number;

    @ApiProperty()
    @IsString()
    lastName : string;

    @ApiProperty()
    @IsString()
    firstName : string;

    @ApiProperty()
    @IsString()
    nameExtension : string;

    @ApiProperty()
    @IsString()
    middleName : string;

    @ApiProperty()
    @IsString()
    citizenship : string;

    @ApiProperty()
    @IsDate()
    dateOfBirth : Date;

    @ApiProperty()
    @IsString()
    placeOfBirth : string;

    @ApiProperty()
    @IsString()
    maritalStatus : string;

    @ApiProperty()
    @IsString()
    sex : string;

    @ApiProperty()
    @IsString()
    positionAndDepartment : string;

    @ApiProperty()
    @IsString()
    businessTelNo : string;

    @ApiProperty()
    @IsString()
    pagibigMidRtn : string;

    @ApiProperty()
    @IsNumber()
    tin : number;

    @ApiProperty()
    @IsString()
    employer : string;

    @ApiProperty()
    @IsNumber()
    yearsInEmployment : number;

    @ApiProperty()
    @IsString()
    employerBusinessAddress : string;

    @ApiProperty()
    @IsNumber()
    grossMonthlyIncome : number;

    @ApiProperty()
    @IsString()
    educationalAttainment : string;
}
