import { useContext, useEffect } from 'react'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { Wrapper, Header, OrderInfo, Section } from './styles'
import DeliveryImage from '../../assets/delivery.png'
import { Badge } from '../../components/Badge'
import { DeliveryContext } from '../../contexts/DeliveryContext'
import { PaymentMethodsLabels } from '../../reducers/delivery/reducer'

export function Success() {
  const navigate = useNavigate()
  const { deliveryAddress: address, paymentMethod } =
    useContext(DeliveryContext)

  useEffect(() => {
    if (!address || !paymentMethod) {
      navigate('/')
    }
  }, [address, navigate, paymentMethod])

  return (
    <Wrapper>
      <Header>
        <h2 data-confirmed-order-title>Uhu! Pedido confirmado</h2>
        <p className="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
      </Header>
      <Section>
        <div id="firstColumn">
          <OrderInfo>
            <Badge.Container>
              <Badge.Icon color="purple">
                <MapPin weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>
                  Entrega em{' '}
                  <strong
                    data-delivery-address
                  >{`${address?.street}, ${address?.number} ${address?.complement}`}</strong>
                </p>
                <p
                  data-delivery-reference
                >{`${address?.neighborhood} - ${address?.city}, ${address?.uf}`}</p>
              </Badge.Infos>
            </Badge.Container>
            <Badge.Container>
              <Badge.Icon color="yellow">
                <Timer weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>Previsão de entrega</p>
                <p>
                  <strong>20 min - 30 min</strong>
                </p>
              </Badge.Infos>
            </Badge.Container>
            <Badge.Container>
              <Badge.Icon color="yellow-dark">
                <CurrencyDollar weight="fill" size={16} />
              </Badge.Icon>
              <Badge.Infos>
                <p>Pagamento na entrega</p>
                <p>
                  <strong data-delivery-payment>
                    {!!paymentMethod && PaymentMethodsLabels[paymentMethod]}
                  </strong>
                </p>
              </Badge.Infos>
            </Badge.Container>
          </OrderInfo>
        </div>
        <div>
          <img src={DeliveryImage} alt="Homem em uma moto" />
        </div>
      </Section>
    </Wrapper>
  )
}
