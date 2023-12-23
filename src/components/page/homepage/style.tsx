'use client'
import styled from '@emotion/styled'

export const HomepageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 900px;
  margin: auto;
  
  > * {
    padding: 10px;

    > * {
      margin-bottom: 24px;
    }
  }

  @media screen and (max-width: 781px) {
    height: 100%;
  }
  
`

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`