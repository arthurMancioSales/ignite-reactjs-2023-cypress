import { styled } from 'styled-components'

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  flex-shrink: 0;

  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    margin-top: calc(0px - 1.3rem);
    margin-bottom: 0.75rem;
  }
`

export const Tags = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1rem 1.25rem 2rem 1.25rem;
  gap: 0.5rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
  }
`

export const Footer = styled.div`
  display: flex;
  width: 13rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  span {
    font-size: 0.875rem;

    strong {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    #cartButton {
      display: flex;
      padding: 0.5rem;
      justify-content: center;
      align-items: center;
      border-radius: 6px;
      background-color: ${(props) => props.theme['purple-dark']};
      border: none;

      svg {
        color: ${(props) => props.theme.white};
      }

      &:hover {
        background-color: ${(props) => props.theme.purple};
      }
    }
  }
`
