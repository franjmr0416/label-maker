import { InputHTMLAttributes } from 'react'

interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type: string
}
const FormControl = ({ label, name, type, ...rest }: FormControlProps) => {
  return (
    <div className='flex flex-col gap-1 lg:w-64'>
      <label htmlFor={name} className='font-primary font-semibold text-sm'>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        {...rest}
        className='border border-ctm-medium-gray shadow-md rounded-lg p-1 active:accent-ctm-primary'
      />
    </div>
  )
}

export default FormControl
