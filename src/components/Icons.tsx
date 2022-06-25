type IconProps = {
  className?: string;
 }

export function TicketIcon (props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fillRule='evenodd'
      clipRule='evenodd'
      {...props}
    >
      <path d='M13.777 19.49l-.466 1.739L.742 17.851A1 1 0 010 16.886l.035-.26L2.882 6.001a1 1 0 011.224-.707c2.381.638 7.892 2.12 12.571 3.371l-.473 1.768.965.262.474-1.772 5.613 1.501c.446.12.741.524.741.966l-.034.259-2.847 10.61c-.12.446-.525.741-.966.741l-.26-.034-5.613-1.478.465-1.736-.965-.262zm5.665 1.301l.259-.966-2.716-.717-.259.966 2.716.717zm-5.406-2.267l.965.261.444-1.658-.965-.262-.444 1.659zm-8.907-4.783l2.594-1.037-2.384-2.386.822-.328 4.03 1.727 2.055-.822c.542-.22 1.399-.081 1.563.329l.028.215c-.034.403-.481.917-.932 1.101l-2.057.822-1.727 4.029-.823.329.083-3.372-2.594 1.038-.614 1.199-.575.23-.044-1.89-1.271-1.399.575-.231 1.271.446zm15.349 3.186l.259-.966-2.717-.717-.259.966 2.717.717zm-5.739-1.028l.965.262.503-1.876-.965-.261-.503 1.875zm6.257-.904l.259-.966-2.717-.717-.259.966 2.717.717zm-5.495-1.937l.964.261.445-1.659-.965-.261-.444 1.659zm6.012.005l.259-.966-2.717-.716-.258.965 2.716.717zM7.43 4.382l12.528-3.348.259-.034a1 1 0 01.966.741l1.833 6.828L7.43 4.382z' />
    </svg>
  )
}

export function ChevronDownIcon (props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      clipRule='evenodd'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fillRule='nonzero'
        d='M16.843 10.211A.75.75 0 0016.251 9H7.75a.75.75 0 00-.591 1.212l4.258 5.498a.746.746 0 001.183-.001zm-7.564.289h5.446l-2.718 3.522z'
      />
    </svg>
  )
}

export function ChevronUpIcon (props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      clipRule='evenodd'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fillRule='nonzero'
        d='M16.843 13.789A.75.75 0 0116.251 15H7.75a.75.75 0 01-.591-1.212l4.258-5.498a.746.746 0 011.183.001zM9.279 13.5h5.446l-2.718-3.522z'
      />
    </svg>
  )
}

export function CheckIcon (props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      clipRule='evenodd'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fillRule='nonzero'
        d='M2.25 12.321l7.27 6.491a.749.749 0 001.058-.059l11.23-12.501a.748.748 0 10-1.116-1.001L9.961 17.196 3.25 11.202a.748.748 0 10-1 1.119'
      />
    </svg>
  )
}
