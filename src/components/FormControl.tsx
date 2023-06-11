import { Fragment, InputHTMLAttributes } from 'react'

interface FormControlProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type: string
}
const FormControl = ({ label, name, type, ...rest }: FormControlProps) => {
  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} {...rest} />
    </Fragment>
  )
}

export default FormControl
