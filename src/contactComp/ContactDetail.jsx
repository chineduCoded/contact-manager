import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import img from './assets/avatar-1.png'

const Container = styled.div`
  padding: 10px;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`
const ContentHolder = styled.div`
  width: min(350px, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
`

const ImageHolder = styled.div`
  width: 100%;
  height: 350px;
  margin-bottom: 30px;
  border: 1px solid lightgray;
  border-radius: 10px 10px 0 0;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ContentWrapper = styled.div`
  width: 100%;
  padding: 0px 10px;
  // margin-bottom: 15px;
`

const CardName = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
`

const CardEmail = styled.div`
  margin-bottom: 5px;
  color: gray;
`

const CardPhone = styled.div`
  margin-bottom: 15px;
  color: gray;
`

const Button = styled(Link)`
  padding: 10px 60px;
  border-radius: 5px;
  outline: none;
  border: none;
  background: teal;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: bold;
`

export const ContactDetail = () => {
  const location = useLocation()
  const { name, email, phone } = location.state.contact
  return (
    <Container>
      <Wrapper>
        <ContentHolder>
          <ImageHolder>
            <Image src={img} />
          </ImageHolder>
          <ContentWrapper>
            <CardName>{name}</CardName>
            <CardEmail>{email}</CardEmail>
            <CardPhone>{phone}</CardPhone>
          </ContentWrapper>
          <Button to="/">Back to Contact List</Button>
        </ContentHolder>
      </Wrapper>
    </Container>
  )
}
