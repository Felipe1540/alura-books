import Input from "../Input"
import styled from "styled-components"
import { useState } from "react"
import { books } from './searchData'


const SearchContainer = styled.section`
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`
const Title = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`
const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`


function Search() {
  const [booksSearched, setBooksSearched] = useState([])  

  return(
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input placeholder="Escreva sua próxima leitura" 
             onBlur={event => {
              const typedText = event.target.value
              const searchResult = books.filter( book => book.nome.includes(typedText))
              setBooksSearched(searchResult)
             }}
      />
      { booksSearched.map( book => (
        <div>
          <p>{book.nome}</p>
          <img src={book.src}/>
        </div>
      ) ) }
    </SearchContainer>
  )
}

export default Search