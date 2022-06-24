import Image from 'next/image'
import clsx from 'clsx'

type LayoutProps = {
  children: JSX.Element,
  headerClassName?: string;
  headerContent?: JSX.Element
}

export function Layout ({ children, headerClassName, headerContent }: LayoutProps) {
  return (
    <div className='h-screen w-screen bg-repeat-y bg-clouds bg-100% px-5 pt-6'>
      <header className={clsx('flex w-full justify-center items-center', headerClassName)}>
        <div className='flex flex-col justify-center items-center'>
          <div className='relative h-24 w-32'>
            <Image src='/images/logo.png' layout='fill' alt='Tate McRae Logo' />
          </div>

          <h1 className='font-bookmania-black text-3xl text-center max-w-xs'>
            lucid airways now boarding to tate's birthday
          </h1>
        </div>

        {headerContent}
      </header>

      <main className='min-h-main-content'>
        {children}
      </main>
    </div>
  )
}
