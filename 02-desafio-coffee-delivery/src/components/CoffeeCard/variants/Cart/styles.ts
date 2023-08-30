import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  align-items: flex-start;

  background: ${(props) => props.theme['base-card']};
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
    flex-shrink: 0;
  }

  #details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    #name {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    #actions {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const Price = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme['base-text']};
  font-weight: 700;
`

export const RemoveButton = styled.button`
  display: flex;
  height: 2.3rem;
  padding: 0rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  border: none;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    font-size: 0.75rem;
    line-height: 160%;
  }
`
