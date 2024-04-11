import { ReactNode } from "react"

function PageWrapper({children}:{children: ReactNode}) {
  return (
    <div className='flex flex-col pt-2 px-4 space-y-4 bg-zinc-100 flex-grow pb-2'>
        {children}
    </div>
  )
}

export default PageWrapper