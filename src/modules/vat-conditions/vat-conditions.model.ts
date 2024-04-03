import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { IVatCondition } from '../../common/interfaces/database';
import { VAT_CONDITIONS } from '../../common/enums/database';
import { ClientModel } from '../clients/clients.model';

@Table({
    tableName: VAT_CONDITIONS.TABLE_NAME,
    name: {
        singular: VAT_CONDITIONS.NAME.SINGULAR,
        plural: VAT_CONDITIONS.NAME.PLURAL,
    },
    timestamps: true
})
export class VatConditionModel extends Model<VatConditionModel> implements IVatCondition {
    @Column({
        field: VAT_CONDITIONS.COLUMNS.ID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    vat_condition_id: number;

    @Column({
        field: VAT_CONDITIONS.COLUMNS.DESCRIPTION,
        allowNull: false,
    })
    vat_condition_description: string;

    @HasMany(() => ClientModel)
    clients: ClientModel[];
}