export interface IClient {
    client_id: number;
    client_name: string;
    client_document_number: string;
    client_phone: string;
    client_email: string;
    client_address: string;
    client_city: string;
    vat_condition_id: number;
    vatCondition?: IVatCondition;
}

export interface IVatCondition {
    vat_condition_id: number;
    vat_condition_description: string;
    clients?: IClient[];
}