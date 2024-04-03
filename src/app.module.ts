import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelize } from './config/index';
import { ClientsController } from './modules/clients/clients.controller';
import { ProjectsController } from './modules/projects/projects.controller';
import { BudgetsController } from './modules/budgets/budgets.controller';
import { InvoicesController } from './modules/invoices/invoices.controller';
import { PaymentsController } from './modules/payments/payments.controller';
import { ProjectTypesController } from './modules/project-types/project-types.controller';
import { StatesController } from './modules/states/states.controller';
import { BudgetTypesController } from './modules/budget-types/budget-types.controller';
import { ClientsService } from './modules/clients/clients.service';
import { ProjectsService } from './modules/projects/projects.service';
import { BudgetsService } from './modules/budgets/budgets.service';
import { InvoicesService } from './modules/invoices/invoices.service';
import { PaymentsService } from './modules/payments/payments.service';
import { ProjectTypesService } from './modules/project-types/project-types.service';
import { StatesService } from './modules/states/states.service';
import { BudgetTypesService } from './modules/budget-types/budget-types.service';
import { VatConditionsController } from './modules/vat-conditions/vat-conditions.controller';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...sequelize,
      autoLoadModels: true,
    }),
  ],
  controllers: [
    ClientsController,
    ProjectsController,
    BudgetsController,
    InvoicesController,
    PaymentsController,
    ProjectTypesController,
    StatesController,
    BudgetTypesController,
    VatConditionsController
  ],
  providers: [
    ClientsService,
    ProjectsService,
    BudgetsService,
    InvoicesService,
    PaymentsService,
    ProjectTypesService,
    StatesService,
    BudgetTypesService
  ],
})
export class AppModule { }
