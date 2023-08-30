import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 2.375rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;

    svg {
      color: ${(props) => props.theme.purple};

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }
`
