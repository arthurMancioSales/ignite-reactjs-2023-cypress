import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import Cup from '../../assets/cup.png'
import { Wrapper, CoffeeList, Items, Title } from './styles'
import { CoffeeCard } from '../../components/CoffeeCard'
import { Badge } from '../../components/Badge'

import { coffees } from '../../coffees'

export function Home() {
  return (
    <>
      <Wrapper>
        <div>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Title>
          <Items>
            <Badge.Container>
              <Badge.Icon color="yellow-dark">
                <ShoppingCart weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>Compra simples e segura</p>
              </Badge.Infos>
            </Badge.Container>
            <Badge.Container>
              <Badge.Icon color="black">
                <Package weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>Embalagem mantém o café intacto</p>
              </Badge.Infos>
            </Badge.Container>
            <Badge.Container>
              <Badge.Icon color="yellow">
                <Timer weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>Entrega rápida e rastreada</p>
              </Badge.Infos>
            </Badge.Container>
            <Badge.Container>
              <Badge.Icon color="purple">
                <Coffee weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>O café chega fresquinho até você</p>
              </Badge.Infos>
            </Badge.Container>
          </Items>
        </div>
        <div id="image">
          <img src={Cup} alt="Copo de café" />
        </div>
      </Wrapper>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <ul>
          {coffees.map((coffee) => (
            <CoffeeCard.Catalog key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </CoffeeList>
    </>
  )
}
