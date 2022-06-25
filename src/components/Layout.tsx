import Image from 'next/image'
import clsx from 'clsx'

type LayoutProps = {
  children: JSX.Element,
  headerText: string;
  headerContent?: JSX.Element
  headerClassName?: string;
}

export function Layout ({
  children,
  headerText,
  headerContent,
  headerClassName
}: LayoutProps) {
  return (
    <div className='h-screen w-screen bg-repeat-y bg-clouds bg-100% px-5  flex flex-col justify-center'>
      <header className={clsx('mt-auto flex w-full justify-center items-center container-md mx-auto', headerClassName)}>
        <div className='flex flex-col justify-center items-center'>
          <div className='relative h-24 w-32'>
            <Image src='/images/logo.png' layout='fill' alt='Tate McRae Logo' />
          </div>

          <h1 className='font-bookmania-black text-3xl text-center max-w-xs'>
            {headerText}
          </h1>
        </div>

        {headerContent}
      </header>

      <main className='container-sm mx-auto'>
        {children}
      </main>

      <footer className='mt-auto pb-10 text-center font-bookmania-black'>
        <p>
          website developed by {' '}
          <a
            rel='noopener noreferrer'
            href='https://www.instagram.com/lauriebeatris/'
            target='_blank'
            className='underline text-ocean'
          >
            @lauriebeatris
          </a>
        </p>
      </footer>
    </div>
  )
}
