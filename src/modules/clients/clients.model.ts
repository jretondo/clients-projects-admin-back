import { BelongsTo, Column, Model, Table } from 'sequelize-typescript';
import { IClient } from '../../common/interfaces/database';
import { CLIENTS } from '../../common/enums/database';
import { VatConditionModel } from '../vat-conditions/vat-conditions.model';

@Table({
    tableName: CLIENTS.TABLE_NAME,
    name: {
        singular: CLIENTS.NAME.SINGULAR,
        plural: CLIENTS.NAME.PLURAL,
    },
    timestamps: true
})
export class ClientModel extends Model<ClientModel> implements IClient {
    @Column({
        field: CLIENTS.COLUMNS.ID,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    client_id: number;

    @Column({
        field: CLIENTS.COLUMNS.NAME,
        allowNull: false,
    })
    client_name: string;

    @Column({
        field: CLIENTS.COLUMNS.DOCUMENT_NUMBER,
        allowNull: false,
    })
    client_document_number: string;

    @Column({
        field: CLIENTS.COLUMNS.PHONE,
        allowNull: true,
    })
    client_phone: string;

    @Column({
        field: CLIENTS.COLUMNS.EMAIL,
        allowNull: false,
    })
    client_email: string;

    @Column({
        field: CLIENTS.COLUMNS.ADDRESS,
        allowNull: false,
    })
    client_address: string;

    @Column({
        field: CLIENTS.COLUMNS.CITY,
        allowNull: false,
    })
    client_city: string;

    @Column({
        field: CLIENTS.COLUMNS.VAT_CONDITION_ID,
        allowNull: false,
    })
    vat_condition_id: number;

    @BelongsTo(() => VatConditionModel)
    vatCondition: VatConditionModel;
}