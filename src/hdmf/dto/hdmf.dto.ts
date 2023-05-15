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

    @ApiProperty()
    @IsString()
    houseNo : string;

    @ApiProperty()
    @IsString()
    street : string;

    @ApiProperty()
    @IsString()
    brgy : string;

    @ApiProperty()
    @IsString()
    city : string;

    @ApiProperty()
    @IsString()
    residentialStatus : string;
    
    @ApiProperty()
    @IsNumber()
    yearsOfStay : number;

    @ApiProperty()
    @IsString()
    province : string;
    
    @ApiProperty()
    @IsNotEmpty()
    spouseRtn : string;

    @ApiProperty()
    @IsNumber()
    spouseHousingAccountNumber : number;

    @ApiProperty()
    @IsString()
    spouseLastName : string;

    @ApiProperty()
    @IsString()
    spouseFirstName : string;

    @ApiProperty()
    @IsString()
    spouseNameExtension : string;

    @ApiProperty()
    @IsString()
    spouseMiddleName : string;

    @ApiProperty()
    @IsString()
    spouseCitizenship : string;

    @ApiProperty()
    @IsDate()
    spouseDateOfBirth : Date;

    @ApiProperty()
    @IsString()
    spousePlaceOfBirth : string;

    @ApiProperty()
    @IsString()
    spouseMaritalStatus : string;

    @ApiProperty()
    @IsString()
    spouseSex : string;

    @ApiProperty()
    @IsString()
    spousePositionAndDepartment : string;

    @ApiProperty()
    @IsString()
    spouseBusinessTelNo : string;

    @ApiProperty()
    @IsString()
    spousePagibigMidRtn : string;

    @ApiProperty()
    @IsNumber()
    spouseTin : number;

    @ApiProperty()
    @IsString()
    spouseEmployer : string;

    @ApiProperty()
    @IsNumber()
    spouseYearsInEmployment : number;

    @ApiProperty()
    @IsString()
    spouseEmployerBusinessAddress : string;

    @ApiProperty()
    @IsNumber()
    spouseGrossMonthlyIncome : number;

    @ApiProperty()
    @IsString()
    spouseEducationalAttainment : string;
}
