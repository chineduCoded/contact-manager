import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`

export const LogIn = () => {
  return (
    <Container>
      <Wrapper>
        <h1>You have to login to access content of the contact list</h1>
      </Wrapper>
    </Container>
  )
}
