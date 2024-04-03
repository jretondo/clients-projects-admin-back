import { Test, TestingModule } from '@nestjs/testing';
import { BudgetTypesController } from './budget-types.controller';

describe('BudgetTypesController', () => {
  let controller: BudgetTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BudgetTypesController],
    }).compile();

    controller = module.get<BudgetTypesController>(BudgetTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
