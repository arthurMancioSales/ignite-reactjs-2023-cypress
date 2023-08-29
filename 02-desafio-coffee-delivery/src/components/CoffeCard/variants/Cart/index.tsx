import { useContext, useState } from 'react'
import { Trash } from 'phosphor-react'

import { Counter } from '../../Counter'
import { Wrapper, Info, Price, RemoveButton } from './styles'
import { Coffee } from '../../../../coffees'
import { CartContext } from '../../../../contexts/CartContext'

interface CartProps {
  coffee: Coffee
}

export function Cart({ coffee }: CartProps) {
  const {
    cart,
    removeCoffeeFromCart,
    decrementCoffeToCart,
    incrementCoffeeToCart,
  } = useContext(CartContext)
  const [quantity, setQuantity] = useState(
    cart?.find((item) => item.id === coffee.id)?.quantity ?? 0,
  )

  function handleQuantityChange(newQuantity: number) {
    if (newQuantity === 0) {
      removeCoffeeFromCart(coffee.id)
      return
    }

    if (newQuantity < 0) return

    if (newQuantity < quantity) decrementCoffeToCart(coffee.id)
    else if (newQuantity > quantity) incrementCoffeeToCart(coffee.id)

    setQuantity(newQuantity)
  }

  return (
    <Wrapper>
      <Info>
        <img src={`/public/coffees/${coffee.image}`} alt={coffee.name} />
        <div id="details">
          <span id="name">{coffee.name}</span>
          <div id="actions">
            <Counter
              quantity={quantity ?? 0}
              onQuantityChange={handleQuantityChange}
            />
            <RemoveButton
              type="button"
              onClick={() => removeCoffeeFromCart(coffee.id)}
            >
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </div>
      </Info>
      <Price>
        R$ {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </Price>
    </Wrapper>
  )
}
