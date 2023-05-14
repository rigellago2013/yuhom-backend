import {
  Body,
  Controller,
  Get,
  Put,
  UseGuards,
  Post,
  Param,
  Delete,
  Query,
  HttpCode,
  HttpStatus,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtGuard } from 'src/common/guard';
import { ApiSecurity, ApiTags, ApiBody, ApiParam } from '@nestjs/swagger';
import { HdmfService } from './hdmf.service';
import { AllowAny } from 'src/common/decorator';
import { HdmfDto } from './dto';

@Controller('hdmf')
@ApiTags('Hdmf')
export class HdmfController {
  constructor(private hdmfService: HdmfService) {}

  @Get()
  @UseGuards(JwtGuard)
  @AllowAny()
  async getAllforms(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ) {
    const hdmf = await this.hdmfService.findHdmfs(limit, offset);
    return {
      hdmf: hdmf,
      formsCount: hdmf.length,
    };
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  async getHdmf(@Param('id') id: string) {
    const hdmf = await this.hdmfService.findHdmf(id);
    if (!hdmf) {
      throw new NotFoundException(`Hdmf with ${id} does not exist.`);
    }
    return hdmf;
  }

  @Post('register')
  async createHdmf(@Body() hdmfDto: HdmfDto) {
    let hdmf = await this.hdmfService.createHdmf(hdmfDto);
    if (!hdmf) {
      throw new InternalServerErrorException(`Error on creating hdmf.`);
    }
    return hdmf;
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  async updateArticle(@Param('id') id: string, @Body() hdmfDto: HdmfDto) {
    let hdmf = await this.hdmfService.updateArticle(id, hdmfDto);
    if (!hdmf) {
      throw new BadRequestException(`Error on update hdmf.`);
    }
    return hdmf;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtGuard)
  @Delete(':id')
  deleteArticle(@Param('id') id: string) {
    return this.hdmfService.deleteArticle(id);
  }
}
