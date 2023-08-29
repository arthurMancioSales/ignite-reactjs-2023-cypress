import { useState, useContext } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { toast } from 'react-toastify'

import { Wrapper, Details, Footer, Tags } from './styles'
import { Counter } from '../../Counter'
import { Coffee } from '../../../../coffees'
import { CartContext } from '../../../../contexts/CartContext'

interface CatalogProps {
  coffee: Coffee
}

export function Catalog({ coffee }: CatalogProps) {
  const [quantity, setQuantity] = useState(0)
  const { addCoffeeToCart } = useContext(CartContext)

  function handleQuantityChange(quantity: number) {
    setQuantity(quantity)
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart(coffee.id, quantity)
    setQuantity(0)

    toast.success(`Café adicionado ao carrinho!`)
  }

  return (
    <Wrapper>
      <img src={`/public/coffees/${coffee.image}`} alt={coffee.name} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Details>
        <h4>{coffee.name}</h4>
        <p>{coffee.description}</p>
      </Details>

      <Footer>
        <span>
          R${' '}
          <strong>
            {coffee.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
          </strong>
        </span>
        <div className="actions">
          <Counter
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
          <button
            type="button"
            id="cartButton"
            disabled={!quantity}
            onClick={handleAddCoffeeToCart}
            data-cart
          >
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </Footer>
    </Wrapper>
  )
}
