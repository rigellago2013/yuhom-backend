import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { HdmfDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime';

@Injectable()
export class HdmfService {
    constructor(private prisma: PrismaService) {}

    async findHdmfs(
      limit : number,
      offset : number
    ) {
      let hdmf = await this.prisma.hdmf.findMany({
        take: +limit,
        skip: +offset,
        orderBy: {
          updatedAt: 'desc',
        },
      });
      return hdmf;
    }
  
    async createHdmf(hdmfDto: HdmfDto) : Promise<any> {
        try {
          const hdmf = await this.prisma.hdmf.create({
            data: {
              ...hdmfDto,
              rtn : hdmfDto.rtn,
              housingAccountNumber : hdmfDto.housingAccountNumber,
              lastName : hdmfDto.lastName,
              firstName : hdmfDto.firstName,
              nameExtension: hdmfDto.nameExtension,
              middleName: hdmfDto.middleName,
              citizenship : hdmfDto.citizenship,
              dateOfBirth : hdmfDto.dateOfBirth,
              placeOfBirth : hdmfDto.placeOfBirth,
              maritalStatus : hdmfDto.maritalStatus,
              sex : hdmfDto.sex,
              positionAndDepartment : hdmfDto.positionAndDepartment,
              businessTelNo :hdmfDto.businessTelNo,
              pagibigMidRtn : hdmfDto.pagibigMidRtn,
              tin : hdmfDto.tin,
              employer : hdmfDto.employer,
              yearsInEmployment : hdmfDto.yearsInEmployment,
              employerBusinessAddress : hdmfDto.employerBusinessAddress,
              grossMonthlyIncome : hdmfDto.grossMonthlyIncome,
              educationalAttainment : hdmfDto.educationalAttainment,
              houseNo : hdmfDto.houseNo,
              street : hdmfDto.street,
              brgy : hdmfDto.brgy,
              city : hdmfDto.city,
              residentialStatus : hdmfDto.residentialStatus,
              yearsOfStay : hdmfDto.yearsOfStay,
              province: hdmfDto.province,
              spouseRtn : hdmfDto.spouseRtn,
              spouseHousingAccountNumber : hdmfDto.spouseHousingAccountNumber,
              spouseLastName : hdmfDto.spouseLastName,
              spouseFirstName : hdmfDto.spouseFirstName,
              spouseNameExtension : hdmfDto.spouseNameExtension,
              spouseMiddleName : hdmfDto.middleName,
              spouseCitizenship : hdmfDto.spouseCitizenship,
              spouseDateOfBirth : hdmfDto.dateOfBirth,
              spousePlaceOfBirth : hdmfDto.spousePlaceOfBirth,
              spouseMaritalStatus : hdmfDto.spouseMaritalStatus,
              spouseSex : hdmfDto.spouseSex,
              spousePositionAndDepartment : hdmfDto.spousePositionAndDepartment,
              spouseBusinessTelNo : hdmfDto.spouseBusinessTelNo,
              spousePagibigMidRtn : hdmfDto.spousePagibigMidRtn,
              spouseTin : hdmfDto.spouseTin,
              spouseEmployer : hdmfDto.spouseEmployer,
              spouseYearsInEmployment : hdmfDto.spouseYearsInEmployment,
              spouseEmployerBusinessAddress : hdmfDto.spouseEmployerBusinessAddress,
              spouseGrossMonthlyIncome : hdmfDto.grossMonthlyIncome,
            },
          });
          return hdmf;
        } catch (error) {

          console.error(error)
          if (error instanceof PrismaClientValidationError) {
            throw new BadRequestException('Bad request.');
          }
        }
      }

      async findHdmf(id: string) : Promise<any> {
        const hdmf = await this.prisma.hdmf.findUnique({
          where: {
            id: id,
          }
        });
        if (hdmf === null) throw new NotFoundException('Hdmf not found.');
        return hdmf;
      }

      async updateArticle(id: string, hdmfDto: HdmfDto) {
        try {
          let updatedAt = new Date();
          const hdmf = await this.prisma.hdmf.update({
            where: {
              id: id,
            },
            data: {
              ...hdmfDto,
              rtn : hdmfDto.rtn,
              housingAccountNumber : hdmfDto.housingAccountNumber,
              lastName : hdmfDto.lastName,
              firstName : hdmfDto.firstName,
              nameExtension: hdmfDto.nameExtension,
              middleName: hdmfDto.middleName,
              citizenship : hdmfDto.citizenship,
              dateOfBirth : hdmfDto.dateOfBirth,
              placeOfBirth : hdmfDto.placeOfBirth,
              maritalStatus : hdmfDto.maritalStatus,
              sex : hdmfDto.sex,
              positionAndDepartment : hdmfDto.positionAndDepartment,
              businessTelNo :hdmfDto.businessTelNo,
              pagibigMidRtn : hdmfDto.pagibigMidRtn,
              tin : hdmfDto.tin,
              employer : hdmfDto.employer,
              yearsInEmployment : hdmfDto.yearsInEmployment,
              employerBusinessAddress : hdmfDto.employerBusinessAddress,
              grossMonthlyIncome : hdmfDto.grossMonthlyIncome,
              educationalAttainment : hdmfDto.educationalAttainment,
              houseNo : hdmfDto.houseNo,
              street : hdmfDto.street,
              brgy : hdmfDto.brgy,
              city : hdmfDto.city,
              residentialStatus : hdmfDto.residentialStatus,
              yearsOfStay : hdmfDto.yearsOfStay,
              province: hdmfDto.province,
              spouseRtn : hdmfDto.spouseRtn,
              spouseHousingAccountNumber : hdmfDto.spouseHousingAccountNumber,
              spouseLastName : hdmfDto.spouseLastName,
              spouseFirstName : hdmfDto.spouseFirstName,
              spouseNameExtension : hdmfDto.spouseNameExtension,
              spouseMiddleName : hdmfDto.middleName,
              spouseCitizenship : hdmfDto.spouseCitizenship,
              spouseDateOfBirth : hdmfDto.dateOfBirth,
              spousePlaceOfBirth : hdmfDto.spousePlaceOfBirth,
              spouseMaritalStatus : hdmfDto.spouseMaritalStatus,
              spouseSex : hdmfDto.spouseSex,
              spousePositionAndDepartment : hdmfDto.spousePositionAndDepartment,
              spouseBusinessTelNo : hdmfDto.spouseBusinessTelNo,
              spousePagibigMidRtn : hdmfDto.spousePagibigMidRtn,
              spouseTin : hdmfDto.spouseTin,
              spouseEmployer : hdmfDto.spouseEmployer,
              spouseYearsInEmployment : hdmfDto.spouseYearsInEmployment,
              spouseEmployerBusinessAddress : hdmfDto.spouseEmployerBusinessAddress,
              spouseGrossMonthlyIncome : hdmfDto.grossMonthlyIncome,
              updatedAt : updatedAt
            },
          });
          return hdmf;
        } catch (error) {
          if (error instanceof PrismaClientKnownRequestError)
            if (error.code === 'P2025')
              throw new NotFoundException('Hdmf not found.');
        }
      }

      async deleteArticle(id: string) {
        const article = await this.prisma.hdmf.findUnique({
          where: { id: id },
        });
        if (!article) throw new NotFoundException('Hdmf not found');
        await this.prisma.hdmf.delete({
          where: {
            id: id,
          },
        });
        return;
      }
}
