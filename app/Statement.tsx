import { Table, Text } from "@radix-ui/themes"
import Link from "next/link"
import usePayment from './hooks/usePayment'
import { formatedDate } from "./helpers/formatedDate";

const Statement = ({ userId }: { userId: string }) => {
  const { payments, isLoading } = usePayment(userId)
  if (isLoading) return <div>Loading...</div>

  return (
    <section className="flex flex-col gap-4">
      <div className="py-2">
        <Text className="font-bold text-[1.5rem]">Statement</Text>
      </div>
      <hr />
      <div className="flex gap-4 justify-end">
        <Link href='/' className="bg-[var(--primary-blue)] px-6 py-1 rounded-md">
          Nov
        </Link>
        <Link href='/' className="bg-[var(--primary-blue)] px-6 py-1 rounded-md">
          Dec
        </Link>
        <Link href='/' className="bg-[var(--primary-blue)] px-6 py-1 rounded-md">
          Jan
        </Link>
      </div>
      <hr />
      <div className="flex justify-between">
        <Text className="font-bold">January 2024</Text>
        <Link href={'/downloadStatement'}>
          Download PDFs
        </Link>
      </div>
      <hr />

      <div>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Account number</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>IN (￡)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>OUT (￡)</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {payments.map(payment => (
              <Table.Row key={payment._id}>
                <Table.Cell>
                  <p>{payment.target}</p>
                  <span className="blue-text">{formatedDate(payment.date)}</span>
                </Table.Cell>
                <Table.Cell>{payment.party._id}</Table.Cell>
                <Table.Cell>{payment.entry === 'IN' && payment.amount}</Table.Cell>
                <Table.Cell>{payment.entry === 'OUT' && payment.amount}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </section>
  )
}

export default Statement
