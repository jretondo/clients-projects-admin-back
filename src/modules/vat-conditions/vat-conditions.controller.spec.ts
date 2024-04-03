import { Test, TestingModule } from '@nestjs/testing';
import { VatConditionsController } from './vat-conditions.controller';

describe('VatConditionsController', () => {
  let controller: VatConditionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VatConditionsController],
    }).compile();

    controller = module.get<VatConditionsController>(VatConditionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
