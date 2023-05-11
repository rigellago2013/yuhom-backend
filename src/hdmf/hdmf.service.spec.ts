import { Test, TestingModule } from '@nestjs/testing';
import { HdmfService } from './hdmf.service';

describe('HdmfService', () => {
  let service: HdmfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HdmfService],
    }).compile();

    service = module.get<HdmfService>(HdmfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
