

class TicketGenerator:
    def __init__(self, data_client):
        self.data_client = data_client

    def generator_tickets(self):
        for object_data in self.data_client.iterrows():
            nome = object_data[1]['name']
            governmentId = object_data[1]['governmentId']
            debamount = object_data[1]['debtAmount']
            debtDueDate = object_data[1]['debtDueDate']
            debtId = object_data[1]['debtId']

            boleto = {
                "Nome": nome,
                "Valor": debamount,
                "Data Vencimento": debtDueDate,
                "ID do Débito": debtId,
                'governmentId': governmentId
            }
            return boleto
