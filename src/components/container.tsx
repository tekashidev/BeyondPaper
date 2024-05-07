import React, { ReactNode } from 'react'

function Container({children} : {children : ReactNode}) {
  return (
    <div className='flex flex-row max-w-[1440px] mx-auto h-[calc(100dvh-80px)]'>
      {children}
    </div>
  )
}

export default Container
