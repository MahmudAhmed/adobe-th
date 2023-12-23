'use client'
import styled from '@emotion/styled'

export const RatingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: 10px auto;

  > :first-child {
    margin-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {

      margin-right: 10px;
      cursor: pointer;
    }
  }

  > :last-child {
    font-size: 12px;
  }


`