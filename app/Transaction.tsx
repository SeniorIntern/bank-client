import { Button, Table, Text } from '@radix-ui/themes'

const Transaction = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="py-2">
        <Text className="font-bold text-[1.5rem]">Recent Transaction</Text>
      </div>

      <div className='flex gap-4'>
        <Button>All</Button>
        <Button>Deposit</Button>
        <Button>Withdrawn</Button>
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
          <Table.Row>
            <Table.Cell>DEF 'A' Branch</Table.Cell>
            <Table.Cell>17 Jan 2024</Table.Cell>
            <Table.Cell>#AB0000223</Table.Cell>
            <Table.Cell className='text-green-400'>+ £120.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ashok Helium</Table.Cell>
            <Table.Cell>23 Dec 2023</Table.Cell>
            <Table.Cell>#AB0000224</Table.Cell>
            <Table.Cell className='text-red-600'>- £10.00</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </section>
  )
}

export default Transaction
