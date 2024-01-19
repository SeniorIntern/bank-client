'use client'
import { Button, Dialog, Flex, Text } from "@radix-ui/themes"
import usePayment from './hooks/usePayment'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from 'react-hook-form'
import { apiClient } from "./services/api-client"
import toast, { Toaster } from "react-hot-toast"

const Payment = ({ userId }: { userId: string }) => {
  const { payments, error, isLoading } = usePayment(userId)
  if (isLoading) return <div>Loading...</div>

  const paymentData = z.object({
    account: z.string().min(24, { message: "Account number should be 24 characters long." }).max(24, { message: "Account number should be 24 characters long." }),


    amount: z.number({ invalid_type_error: "Amount is required" }).min(20, { message: "Minimum transaction amount is ￡ 20" }).max(2000, { message: "Maximum transaction limit is ￡2000" })
  })

  type FormData = z.infer<typeof paymentData>

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(paymentData) })

  const onSubmit = async (data: FieldValues) => {
    apiClient.post('/payments', {
      sender: userId,
      receiver: data.account,
      amount: data.amount
    }).then(data => {
      toast.success('Payment Sucessful')
    }).catch((err) => toast.error(err.response?.data))
  }

  return (
    <section className="flex flex-col gap-4">
      <Toaster />
      <div className="py-2">
        <Text className="font-bold text-[1.5rem]">Payments and Transfers</Text>
      </div>
      <hr />
      <div className="flex flex-col gap-2 bg-[var(--secondary-black)] p-2 rounded-md">
        {/*
        <Text>Send money from</Text>
        <div className="w-5/6 border-t-[4px] border-[var(--primary-blue)] rounded-md bg-[var(--primary-gray)] p-2">
          <div className="flex justify-between">
            <p>ACCOUNT <span className="blue-text">CLASSIC</span></p>
            <p>NUMBER <span className="blue-text">0879869</span></p>
          </div>
          <Text className="text-[2rem] font-bold">￡7,230.11</Text>
        </div>
        */}

        <Text>To</Text>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button className="w-fit">Pay someone {'>'}</Button>
          </Dialog.Trigger>

          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Payee details</Dialog.Title>
            <form
              className="flex flex-col gap-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label>Payee Name</label>
                <input
                  className="text-black w-full p-1 border-black border-[1px] rounded-md"
                  placeholder="e.g. Jane smith or Acne Ltd."
                />
              </div>

              <div>
                <label>Account Number</label>
                <input
                  {...register('account')}
                  className="text-black w-full p-1 border-black border-[1px] rounded-md"
                  placeholder="Enter Account number"
                />
                <span className="text-red-600 font-[0.8rem]">{errors.account && errors.account.message}</span>
              </div>

              <div>
                <label>Amount(￡)</label>
                <input
                  {...register('amount', { valueAsNumber: true })}
                  type="number"
                  defaultValue={0}
                  className="text-black w-full p-1 border-black border-[1px] rounded-md"
                  placeholder="￡0.0"
                />
                <span className="text-red-600 font-[0.8rem]">{errors.amount && errors.amount.message}</span>
              </div>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Button type="submit">Continue</Button>
              </Flex>
            </form>

          </Dialog.Content>
        </Dialog.Root>
        <hr />
      </div>
    </section>
  )
}

export default Payment
