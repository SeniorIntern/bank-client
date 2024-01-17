import { Button, Text } from "@radix-ui/themes"

const Payment = () => {
  return (
    <section className="flex flex-col gap-4">
      <div className="py-2">
        <Text className="font-bold text-[1.5rem]">Payments and Transfers</Text>
      </div>
      <hr />
      <div className="flex flex-col gap-2 bg-[var(--secondary-black)] p-2 rounded-md">
        <Text>Send money from</Text>
        <div className="w-5/6 border-t-[4px] border-[var(--primary-blue)] rounded-md bg-[var(--primary-gray)] p-2">
          <div className="flex justify-between">
            <p>ACCOUNT <span className="blue-text">CLASSIC</span></p>
            <p>NUMBER <span className="blue-text">0879869</span></p>
          </div>
          <Text className="text-[2rem] font-bold">￡7,230.11</Text>
        </div>

        <Text>To</Text>
        <Button className="w-fit">Pay someone {'>'}</Button>
        <hr />
        <div className="flex items-center gap-12 justify-end">
          <Text>Cancel</Text>
          <Button>Continue</Button>
        </div>
      </div>
    </section>
  )
}

export default Payment
