import React from 'react'
import styled from 'styled-components'
import img from './assets/avatar.png'
import { BsTrash } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CardWrapper = styled.div`
  display: flex;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
`
const CardContent = styled.div`
  width: 450px;
  // margin-bottom: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-bottom: 5px;
  color: gray;
`

const CloseButton = styled.div`
  span {
    font-weight: bold;
    cursor: pointer;
    padding: 3px;
    color: red;
    font-size: 25px;
    border-radius: 3px;
  }
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 5px;
`

const Contact = styled(Link)`
  text-decoration: none;
  color: #000;
`

export const CardContact = ({ contact, clickHandler }) => {
  const { id, name, email, phone } = contact
  return (
    <CardWrapper>
      <Image src={img} />
      <CardContent>
        <Contact to={`contact/${id}`} state={{ contact: contact }}>
          <CardName>{name}</CardName>
          <CardEmail>{email}</CardEmail>
          <CardPhone>{phone}</CardPhone>
        </Contact>
        <CloseButton>
          <Link to="edit" state={{ contact: contact }}>
            <span style={{ color: 'teal', textDecoration: 'none' }}>
              <FaEdit />
            </span>
          </Link>
          <span onClick={() => clickHandler(id)}>
            <BsTrash />
          </span>
        </CloseButton>
      </CardContent>
    </CardWrapper>
  )
}
