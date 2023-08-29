import { Badge } from '.'
import { TestWrapper } from '../TestWrapper'
import { ShoppingCart } from 'phosphor-react'

describe('<Badge>', () => {
  it('mounts', () => {
    cy.mount(
      <TestWrapper>
        <Badge.Container>
          <Badge.Icon color="yellow-dark">
            <ShoppingCart weight="fill" size={16} />
          </Badge.Icon>
          <Badge.Infos>
            <p>Compra simples e segura</p>
          </Badge.Infos>
        </Badge.Container>
      </TestWrapper>,
    )
  })
})
