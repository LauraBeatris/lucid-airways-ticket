import * as Dialog from '@radix-ui/react-dialog'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'

import { TicketIcon } from 'components/Icons'

import { CountrySelect, Input, Label } from './Form'

function DialogTrigger () {
  return (
    <div className='mt-4 flex justify-center'>
      <Dialog.Trigger
        className='bg-ocean focus:border-white focus:border-1 text-white font-semibold p-2 rounded-lg flex flex-row justify-center items-center px-4'
      >
        <div className='relative mr-2'>
          <TicketIcon className='fill-white' />
        </div>

        Click to guarantee your ticket
      </Dialog.Trigger>
    </div>
  )
}

type FormValues = {
  name: string;
};

export function GuaranteeTicketDialog () {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    mode: 'all'
  })

  // TODO - Validate country name as well
  const isValid = !errors.name

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (!isValid) return

    // TODO - Call API with data
    // eslint-disable-next-line no-console
    console.log({ data })
  }

  return (
    <Dialog.Root>
      <DialogTrigger />

      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/75' />
        <Dialog.Content className='bg-white px-6 md:px-6 py-6 md:py-10 rounded max-w-md w-full fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
          <Dialog.Title className='text-xl font-medium font-bookmania-black text-indigo-800'>Ticket Details</Dialog.Title>
          <Dialog.Description className='text-gray-600'>Enter the data for your Lucid Airways journey.</Dialog.Description>
          <Dialog.Close className='absolute top-6 right-6 hover:brightness-75'>
            <Image src='/images/icons/close.svg' width={24} height={24} alt='Close Icon' />
          </Dialog.Close>

          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <fieldset className='flex gap-4 items-center mb-2 mt-2'>
              <Label
                text='Name'
                htmlFor='name'
              />
              <Input
                id='name'
                placeholder='Your name'
                {...register('name', { required: true })}
              />

            </fieldset>

            <fieldset className='flex gap-4 items-center mb-2 mt-2'>
              <Label
                text='Country'
                htmlFor='country'
              />
              <CountrySelect />
            </fieldset>
            <div className='flex w-full mt-5 justify-between'>
              <p className='text-red-400'>{errors.name?.type === 'required' && 'First name is required'}</p>

              <button
                type='submit'
                disabled={!isValid}
                className='disabled:brightness-50 disabled:cursor-not-allowed inline-flex items-center rounded-md h-8 px-3 leading-none bg-indigo-800 text-indigo-100'
              >
                Ready to fly
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
