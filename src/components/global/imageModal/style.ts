'use client'
import styled from '@emotion/styled'

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: 'absolute';
  top: '50%';
  left: '50%';
  transform: 'translate(-50%, -50%)';
  width: 500px;
  border: '2px solid #000';
  flex-direction: column;
  background: #000;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`