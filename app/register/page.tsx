'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@radix-ui/themes'
import { CSSProperties } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import PageContainer from '../PageContainer'
import Image from 'next/image'
import HumanSitting from '../HumanSitting.png'

const registerData = z.object({
  username: z.string().min(3, { message: "Username is required" }).max(120),
  email: z.string().email(),
  password: z.string().min(3, { message: "Password is required" })
})

type FormData = z.infer<typeof registerData>

const page = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(registerData) })
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  }

  const formInputStyle: CSSProperties = {
    width: '100%',
    color: 'white',
    padding: '4px 10px',
    borderRadius: '0.5rem',
    background: '#222222',
    margin: '0.5rem 0'
  }

  return (
    <PageContainer>
      <div className='flex'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-2/5 flex flex-col gap-8 justify-between'
        >
          <div>
            <label className='block'>Name</label>
            <input {...register('username')} placeholder='Enter your name' style={formInputStyle} />
            <span className='text-red-600 text-[0.8rem]'>{errors.username && errors.username.message}</span>
          </div>

          <div>
            <label className='block'>Email</label>
            <input {...register('email')} placeholder='Enter your email' style={formInputStyle} />
            <span className='text-red-600 text-[0.8rem]'>{errors.email && errors.email.message}</span>
          </div>

          <div>
            <label className='block'>Password</label>
            <input {...register('password')} placeholder='Enter your password' style={formInputStyle} />
            <span className='text-red-600 text-[0.8rem]'>{errors.password && errors.password.message}</span>
          </div>

          <Button type='submit' className='w-full'>Register</Button>
        </form>

        <article className='w-2/5'>
          <Image
            src={HumanSitting}
            alt='Human sitting'
            width={80}
            height={80}
            className='h-full w-auto object-contain relative left-20'
          />
        </article>
      </div>
    </PageContainer>
  )
}

export default page
