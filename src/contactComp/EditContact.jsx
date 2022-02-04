import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div``
const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`
const ContentWrapper = styled.div`
  width: 500px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
  }
`

const Form = styled.form``

const Input = styled.input`
  padding: 10px;
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  font-weight: bold;

  ::placeholder {
    font-size: 18px;
  }
`

const Button = styled.button`
  width: 100%;
  padding: 15px 0;
  background: teal;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
`

export const EditContact = ({ updateContactHandler }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { id, name, email, phone } = location.state.contact
  //   console.log(contact)
  const [user, setUser] = useState({
    id,
    name,
    email,
    phone,
  })

  const handleChange = (e) => {
    e.persist()
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    if (user.name === '' || user.email === '' || user.phone === '') {
      alert('All the fields are mandatory!')
      return
    }
    setUser({
      name: '',
      email: '',
      phone: '',
    })
    updateContactHandler(user)
    navigate('/')
  }
  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <h2>Edit Contact</h2>
          <Form onSubmit={handleUpdate}>
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                value={user.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone number"
                value={user.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <Button type="submit">Update Contact</Button>
          </Form>
        </ContentWrapper>
      </Wrapper>
    </Container>
  )
}
