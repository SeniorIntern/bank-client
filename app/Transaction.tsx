import { Button, Table, Text } from '@radix-ui/themes'
import usePayment from './hooks/usePayment'
import { formatedDate } from './helpers/formatedDate'

const Transaction = ({ userId }: { userId: string }) => {
  const { payments, error, isLoading } = usePayment(userId)
  if (isLoading) return <div>Loading...</div>

  return (
    <section className="flex flex-col gap-4">
      <div className="py-2">
        <Text className="font-bold text-[1.5rem]">Recent Transaction(s)</Text>
      </div>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Transaction Number</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Amount</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            payments.map(payment => (
              <Table.Row key={payment._id}>
                <Table.Cell>{payment.target}</Table.Cell>
                <Table.Cell>{formatedDate(payment.date)}</Table.Cell>
                <Table.Cell>{payment._id}</Table.Cell>
                <Table.Cell
                  className={payment.entry === 'IN' ? 'text-green-400' : 'text-red-600'}
                >
                  {payment.entry === 'IN' ? '+' : '-'} £{payment.amount}
                </Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
      </Table.Root>
    </section>
  )
}

export default Transaction
