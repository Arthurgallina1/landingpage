import styled from 'styled-components'
import media from 'styled-media-query'

export const LogoWrapper = styled.img`
  width: 12rem;

  ${media.greaterThan('medium')`
    width: 8.5rem;
  `}
`
