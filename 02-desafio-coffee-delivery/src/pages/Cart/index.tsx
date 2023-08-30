import React, { useState, useContext } from 'react'
import { CurrencyDollar, MapPin, CreditCard, Bank, Money } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import {
  Wrapper,
  Divider,
  FormOrder,
  Results,
  SelectedCoffees,
  SubmitButton,
} from './styles'
import { RadioButton } from '../../components/RadioButton'
import { CoffeeCard } from '../../components/CoffeeCard'
import { CartContext } from '../../contexts/CartContext'
import { DeliveryContext } from '../../contexts/DeliveryContext'
import { PaymentMethods } from '../../reducers/delivery/reducer'

export function Cart() {
  const navigate = useNavigate()
  const { cart, getCoffeeById, resetCart } = useContext(CartContext)
  const { setDeliveryAddress, changePaymentMethod, paymentMethod } =
    useContext(DeliveryContext)

  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [neighborhood, setNeighborhood] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const deliveryFee = 3.5
  const coffeeTotal = cart.reduce((acc, coffee) => {
    const coffeeData = getCoffeeById(coffee.id)
    if (!coffeeData) return acc

    return acc + coffeeData.price * coffee.quantity
  }, 0)
  const total = coffeeTotal + deliveryFee

  const handlePaymentChange = (value: PaymentMethods) => {
    changePaymentMethod(value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const address = {
      cep,
      street,
      number,
      complement,
      neighborhood,
      city,
      uf,
    }

    setDeliveryAddress(address)
    changePaymentMethod(paymentMethod as PaymentMethods)
    resetCart()
    navigate('/success')
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <FormOrder>
        <h5>Complete seu pedido</h5>
        <div id="first-section" className="form-section">
          <header>
            <MapPin size={22} />
            <div>
              <p className="section-title">Endereço de Entrega</p>
              <p className="section-subtitle">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>
          <div id="form">
            <div className="form-row">
              <input
                className="col-2"
                type="text"
                placeholder="CEP"
                value={cep}
                onChange={(event) => setCep(event.target.value)}
                required
                data-input-cep
              />
            </div>
            <div className="form-row">
              <input
                className="col-6"
                type="text"
                placeholder="Rua"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
                required
                data-input-street
              />
            </div>
            <div className="form-row">
              <input
                className="col-2"
                type="text"
                placeholder="Número"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
                required
                data-input-number
              />
              <input
                className="col-4"
                type="text"
                placeholder="Complemento (opcional)"
                value={complement}
                onChange={(event) => setComplement(event.target.value)}
                data-input-complement
              />
            </div>
            <div className="form-row">
              <input
                className="col-2"
                type="text"
                placeholder="Bairro"
                value={neighborhood}
                onChange={(event) => setNeighborhood(event.target.value)}
                required
                data-input-neighborhood
              />
              <input
                className="col-3"
                type="text"
                placeholder="Cidade"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                required
                data-input-city
              />
              <select
                className="col-1"
                value={uf}
                onChange={(event) => setUf(event.target.value)}
                required
                data-input-uf
              >
                <option value="">UF</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AM">AM</option>
                <option value="AP">AP</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MG">MG</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="PR">PR</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="RS">RS</option>
                <option value="SC">SC</option>
                <option value="SE">SE</option>
                <option value="SP">SP</option>
                <option value="TO">TO</option>
              </select>
            </div>
          </div>
        </div>
        <div id="second-section" className="form-section">
          <header>
            <CurrencyDollar size={22} />
            <div>
              <p className="section-title">Pagamento</p>
              <p className="section-subtitle">
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </header>
          <div id="payment">
            <RadioButton
              label={PaymentMethods.CREDIT_CARD}
              name="payment"
              htmlFor="creditCard"
              icon={<CreditCard size={16} weight="regular" />}
              selected={paymentMethod}
              onChange={handlePaymentChange}
            />
            <RadioButton
              label={PaymentMethods.DEBIT_CARD}
              name="payment"
              htmlFor="debitCard"
              icon={<Bank size={16} weight="regular" />}
              selected={paymentMethod}
              onChange={handlePaymentChange}
            />
            <RadioButton
              label={PaymentMethods.CASH}
              name="payment"
              htmlFor="money"
              icon={<Money size={16} weight="regular" />}
              selected={paymentMethod}
              onChange={handlePaymentChange}
            />
          </div>
        </div>
      </FormOrder>
      <SelectedCoffees>
        <h5>Cafés selecionados</h5>

        <div id="coffeeList">
          {cart.map((coffee) => {
            const coffeeData = getCoffeeById(coffee.id)
            return coffeeData ? (
              <React.Fragment key={coffee.id}>
                <CoffeeCard.Cart key={coffee.id} coffee={coffeeData} />
                <Divider />
              </React.Fragment>
            ) : (
              <></>
            )
          })}
          <Results>
            <p>
              <span className="label">Total de itens</span>
              <span>
                {coffeeTotal.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </p>
            <p>
              <span className="label">Entrega</span>
              {cart.length ? (
                <span>
                  {deliveryFee.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </span>
              ) : (
                <span>R$ 0,00</span>
              )}
            </p>
            <p className="total">
              <span className="label">Total</span>
              <span className="value">
                {cart.length ? (
                  total.toLocaleString('pr-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                ) : (
                  <span>R$ 0,00</span>
                )}
              </span>
            </p>
          </Results>

          <SubmitButton type="submit" disabled={!cart.length} data-submit-order>
            Confirmar Pedido
          </SubmitButton>
        </div>
      </SelectedCoffees>
    </Wrapper>
  )
}
