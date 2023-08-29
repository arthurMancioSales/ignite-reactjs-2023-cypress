import {
  PaymentMethods,
  PaymentMethodsLabels,
} from '../../reducers/delivery/reducer'
import { Wrapper } from './styles'

interface RadioButtonProps {
  label: PaymentMethods
  name: string
  htmlFor: string
  icon: React.ReactNode
  selected?: PaymentMethods
  onChange: (value: PaymentMethods) => void
}

export function RadioButton({
  label,
  name,
  htmlFor,
  icon,
  selected,
  onChange,
}: RadioButtonProps) {
  const isChecked = selected === label

  function handleChange() {
    onChange(label)
  }

  return (
    <Wrapper checked={isChecked} htmlFor={htmlFor}>
      <input
        type="radio"
        name={name}
        id={htmlFor}
        checked={isChecked}
        onChange={handleChange}
        required
        data-payment-type={htmlFor}
      />
      {icon}
      <span>{PaymentMethodsLabels[label]}</span>
    </Wrapper>
  )
}
