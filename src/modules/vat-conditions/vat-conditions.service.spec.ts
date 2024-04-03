import { Test, TestingModule } from '@nestjs/testing';
import { VatConditionsService } from './vat-conditions.service';

describe('VatConditionsService', () => {
  let service: VatConditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VatConditionsService],
    }).compile();

    service = module.get<VatConditionsService>(VatConditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
