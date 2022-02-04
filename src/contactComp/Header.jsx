import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 70px;
  background: #fff;
  border-bottom: 2px solid lightgray;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <h1>Contact Manager</h1>
      </Wrapper>
    </Container>
  )
}
