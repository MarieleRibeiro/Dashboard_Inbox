import styled from 'styled-components'
import avatar006 from "../../downloads/avatar006.png"
import { FiPaperclip, FiFileText, FiStar, FiCornerUpLeft, FiMoreHorizontal } from 'react-icons/fi'
import React from 'react'

export const Container = styled.div`
width: 100%;
padding: 48px 60px 0 60px;
`
export const Header = styled.header`
max-width: 343px;
width: 100%;
margin-bottom: 59px;
`
export const Content = styled.div`
width: 100%;
`
export const Wrapper = styled.div`
width: 100%;
display: flex;
margin: 25px 0 50px 0;
img { 
  width: 30px;
  height: 30px;
  margin-right: 14px;
}
`
export const Description = styled.div`
max-width: 546px;
width: 100%;
border-top: 1px solid rgba(126, 144, 166, 0.1);
border-bottom: 1px solid rgba(126, 144, 166, 0.1);
`
export const Strong = styled.strong`
width: 100%;
display: flex;
flex-direction: column;
`
export const Small = styled.small``
export const DetailsMessage = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
button { 
background: none;
}
button:nth-child(3){
  margin: 0 13px 0 13px;
}
span {
margin-right: 15px;
}
`
export const Details = styled.div`
max-width: 544px;
width: 100%;
display: flex;
flex-direction: column;
margin: 58px 0 84px 0;
a:last-child{
  background: #F0F9FF;
  border-radius: 3px;
  padding: 10px 0 ;
  margin-top: 8.5px;
}

svg {
  margin: 0 14px 0 9px;
}
a {
  display: flex;
  align-items: center;
}
`

export default function Message() {
  return (
    <Container>
      <Content>
        <Header>
          <h1>Please review and sign the binding agreement</h1>
        </Header>
        <Description>
          <Wrapper>
            <img src={avatar006} alt="foto" />
            <Strong>
              Ariana Barros
          <Small>arianabarros@ecwcmovers.com </Small>
            </Strong>

            <DetailsMessage>
              <span>Today, 2:45pm</span>
              <button><FiStar size="18" /> </button>
              <button><FiCornerUpLeft size="18" />  </button>
              <button><FiMoreHorizontal size="18" />  </button>
            </DetailsMessage>

          </Wrapper>

          <p> I am sending you the lates binding agreements as agreed. You can take a look at our
          preliminary offer for your move by clicking this Link.<br />
          I was thinking something related to this </p> <br />
          <p> I am sending you the lates binding agreements as agreed. You can take a look at our
          preliminary offer for your move by clicking this Link.</p> <br />
          <p> have a nice day, <br />
          Ariana  Barros</p>
          <br />

          <Details>
            <a href="/"><FiPaperclip size="18" /> <span>1 Attachment</span></a>
            <a href="/"> <FiFileText size="18" />  <span>Billing Agreement.pdf</span> </a>
          </Details>

        </Description>


      </Content>
    </Container>
  )
}


