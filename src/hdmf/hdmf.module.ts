import { Module } from '@nestjs/common';
import { HdmfController } from './hdmf.controller';
import { HdmfService } from './hdmf.service';

@Module({
  controllers: [HdmfController],
  providers: [HdmfService]
})
export class HdmfModule {}
