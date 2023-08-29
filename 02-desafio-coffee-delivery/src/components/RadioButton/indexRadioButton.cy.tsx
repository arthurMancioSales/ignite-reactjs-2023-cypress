import { CreditCard } from 'phosphor-react'
import { RadioButton } from './index'
import { PaymentMethods } from '../../reducers/delivery/reducer'
import { TestWrapper } from '../TestWrapper'

describe('<RadioButton />', () => {
  it('mount', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')

    cy.mount(
      <TestWrapper>
        <RadioButton
          label={PaymentMethods.CREDIT_CARD}
          name="payment"
          htmlFor="creditCard"
          icon={<CreditCard size={16} weight="regular" />}
          onChange={onChangeSpy}
        />
      </TestWrapper>,
    )
  })

  it('clicking the label selects it', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')

    cy.mount(
      <TestWrapper>
        <RadioButton
          label={PaymentMethods.CREDIT_CARD}
          name="payment"
          htmlFor="creditCard"
          icon={<CreditCard size={16} weight="regular" />}
          onChange={onChangeSpy}
        />
      </TestWrapper>,
    )

    cy.get('[data-payment-type=creditCard]').click()
    cy.get('@onChangeSpy').should('have.been.calledOnce')
  })
})
