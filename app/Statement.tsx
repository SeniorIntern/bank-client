import { Button, Table, Text } from "@radix-ui/themes"
import Link from "next/link"

const Statement = () => {
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
        <Button>Download PDFs</Button>
      </div>
      <hr />

      <div className="">
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Account number</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>IN (￡)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>OUT (￡)</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Balance</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <p>12 Jan 2024</p>
                <span className="blue-text">Nirmal Khand Khawas</span>
              </Table.Cell>
              <Table.Cell>12133</Table.Cell>
              <Table.Cell>12.00</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>22300.00</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <p>02 Jan 2024</p>
                <span className="blue-text">Nirmal Khand Khawas</span>
              </Table.Cell>
              <Table.Cell>23443</Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>30.00</Table.Cell>
              <Table.Cell>22300.00</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </section>
  )
}

export default Statement
