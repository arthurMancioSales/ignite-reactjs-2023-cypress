import { Wrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface CounterProps {
  quantity: number
  onQuantityChange: (quantity: number) => void
}

export function Counter({ quantity, onQuantityChange }: CounterProps) {
  return (
    <Wrapper>
      <button
        type="button"
        onClick={() => onQuantityChange(quantity > 0 ? quantity - 1 : 0)}
        data-counter="decrement"
      >
        <Minus size={15} />
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        onClick={() => onQuantityChange(quantity + 1)}
        data-counter="increment"
      >
        <Plus size={15} />
      </button>
    </Wrapper>
  )
}
