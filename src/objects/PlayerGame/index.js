import React from 'react'
import styled from 'styled-components'
import playerX from '../../img/X.png'
import playerO from '../../img/Circle.png'

const Image = styled.img.attrs(props => ({
  src: props.img === 'x' ? playerX : playerO,
  alt: `Image of player ${props.img.toUpperCase()}`,
  disabled: props.disabled
}))``

const Button = styled.button`
  flex-basis: 100%;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s linear;

  &:hover {
    ${props => props.disabled ? '' : 'background-color: var(--color-second);'}
  }
`


const PlayerGame = ({ player, disabled }) => (
  <Button disabled={disabled}>
    {player && <Image img={player} />}
  </Button>
)



export default PlayerGame
