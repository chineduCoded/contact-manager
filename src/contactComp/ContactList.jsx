import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CardContact } from './CardContact'

const Container = styled.div``
const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`
const ContentWrapper = styled.div`
  width: min(500px, 100%);
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
  }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Button = styled(Link)`
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px 22px;
  background: teal;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
`

const SearchWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid lightgray;
  border-radius: 5px;

  span {
    display: flex;
    align-items: centter;
    margin-right: 5px;
    color: #000;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
`
const Input = styled.input`
  width: 100%;
  height: 100%;
  outliine: none;
  border: none;
  padding: 5px;
  font-size: 17px;
  color: gray;

  &:focus {
    outline: none;
  }

  ::placeholder {
    font-size: 18px;
  }

  ::-webkit-search-cancel-button {
    cursor: pointer;
  }
`

export const ContactList = ({
  contacts,
  getContactId,
  term,
  searchKeyword,
}) => {
  const inputEl = useRef('')

  const deleteContactHandler = (id) => {
    getContactId(id)
  }

  const getSearchTerm = () => {
    searchKeyword(inputEl.current.value)
  }

  const renderContactList = contacts.map((contact) => {
    return (
      <CardContact
        key={contact.id}
        contact={contact}
        clickHandler={deleteContactHandler}
      />
    )
  })

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <Header>
            <h2>Contact list</h2>
            <Button to="/add">Add Contact</Button>
          </Header>
          <SearchWrapper>
            <span>
              <BsSearch />
            </span>
            <Input
              ref={inputEl}
              type="search"
              placeholder="Search Contacts"
              value={term}
              onChange={getSearchTerm}
            />
          </SearchWrapper>
          {renderContactList.length > 0 ? (
            renderContactList
          ) : (
            <h2>No Contacts available</h2>
          )}
        </ContentWrapper>
      </Wrapper>
    </Container>
  )
}
