import { ReactNode } from 'react'

interface FormGroupProps {
  title: string
  children: ReactNode
}
const FormGroup = ({ title, children }: FormGroupProps) => {
  return (
    <div>
      <h3 className='font-bold text-lg text-ctm-dark-gray'>{title}</h3>
      <hr className='border-2 rounded-full border-ctm-medium-gray' />
      <div className='flex gap-4 py-4'>{children}</div>
    </div>
  )
}

export default FormGroup
