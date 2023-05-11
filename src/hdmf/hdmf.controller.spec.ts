import { Test, TestingModule } from '@nestjs/testing';
import { HdmfController } from './hdmf.controller';

describe('HdmfController', () => {
  let controller: HdmfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HdmfController],
    }).compile();

    controller = module.get<HdmfController>(HdmfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
