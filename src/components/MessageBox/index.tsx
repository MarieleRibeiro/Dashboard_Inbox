import styled from 'styled-components'
import { FiSearch, FiPlus } from 'react-icons/fi'
import avatar001 from "../../downloads/avatar001.png"
import avatar002 from "../../downloads/avatar002.png"
import avatar003 from "../../downloads/avatar003.png"
import avatar004 from "../../downloads/avatar004.png"
import avatar005 from "../../downloads/avatar005.png"



export const Container = styled.div`
max-width: 318px;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
border-right: 1px solid rgba(126, 144, 166, 0.1);
`
export const SearchBoxes = styled.div`
  max-width: 255px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  input{ 
    padding: 10px;
    outline: none;
    font-size: 14px;
    ::placeholder {
      line-height: 16px;
      color: ${props => props.theme.colors.gray};
      font-size: 14px;
    }
  }
`
export const Label = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
button { 
  background: none;
  outline: none;
  color: ${props => props.theme.colors.gray};
  font-size: 18px;
}
`
export const Button = styled.button`
    width: 100%;
    margin-top: 30px;
    background: ${props => props.theme.colors.green};
    border-radius: 4px;
    padding: 12px 90px;
    color: ${props => props.theme.colors.white};
    font-size: 14px;
    font-weight: 500;
    display: flex;
    align-items: center;  
`
export const BoxMessage = styled.div`
margin-top: 32px;
`
export const Content = styled.div`
max-width: 294px;
width: 100%;
margin-bottom: 25px;
padding: 15px;
background: ${props => props.theme.colors.blue100};
p {
  font-size: 13px;
  color: ${props => props.theme.colors.gray}
}
:nth-child(3) {
  margin-bottom: 52px;
}
:nth-child(6) {
  border-bottom: 1px solid rgba(126, 144, 166, 0.1);
}
`

export const Span = styled.div`
 color: ${props => props.theme.colors.gray};
 margin: 0 0 15px 29px;
 font-size: 10px;
`


export const Message = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Strong = styled.strong`
width: 100%;
display: flex;
align-items: center;
img {
  margin-right: 10px;
}
`
export const Small = styled.small`
 font-size: 12px;
 width: 100%;
 display: flex;
 justify-content: flex-end;
`
export const HtMsg = styled.div`
padding: 2px 5px;
background: ${props => props.theme.colors.blue200};
font-size: 10px;
color: ${props => props.theme.colors.blue};
margin-left: 8px;
border-radius: 2px;
`
export const TitleMsg = styled.div`
margin: 15px 0 3px 0;
font-weight: 500;
font-size: 13px;
color: ${props => props.theme.colors.blue300};
`


export default function Inbox() {
  return (

    <Container>
      <SearchBoxes>
        <Label>
          <input type="text" placeholder="Search Inbox" />
          <button type="submit"><FiSearch />
          </button>
        </Label>
        <Button >
          <FiPlus size="18" color="#ffffff" />
          Compose
        </Button>
      </SearchBoxes>

      <BoxMessage>
        <Span>PINNED</Span>
        <Content >
          <Message >
            <Strong>
              <img src={avatar001} alt="foto" /> Ham Chuwon
            </Strong>
            <Small>Today
            </Small>
            <HtMsg>2</HtMsg>
          </Message>

          <TitleMsg>
            Please review and sing the last Bin...
          </TitleMsg>
          <p>Hello John, I would really like to see some examples of the previous</p>
        </Content>

        <Content>
          <Message >
            <Strong><img src={avatar002} alt="foto" />  Heas </Strong>
            <Small>Yesterday</Small> <HtMsg>2</HtMsg>
          </Message>

          <TitleMsg>
            Some content
          </TitleMsg>
          <p>Hello John, I would really like to see some examples of the previous</p>
        </Content>

        <Span>SEEN</Span>

        <Content>
          <Message >
            <Strong><img src={avatar003} alt="foto" /> Ham Chuwon </Strong>
            <Small>Today</Small> <HtMsg>2</HtMsg>
          </Message>

          <TitleMsg>
            Please review and sing the last Bin...
          </TitleMsg>
          <p>Hello John, I would really like to see some examples of the previous</p>
        </Content>

        <Content>
          <Message >
            <Strong><img src={avatar004} alt="foto" /> Ham Chuwon </Strong>
            <Small>Feb 23</Small> <HtMsg>3</HtMsg>
          </Message>

          <TitleMsg>
            Please review and sing the last Bin...
          </TitleMsg>
          <p>Hello John, I would really like to see some examples of the previous</p>
        </Content>


        <Content>
          <Message >
            <Strong><img src={avatar005} alt="foto" /> Ham Chuwon </Strong>
            <Small>Feb 22</Small> <HtMsg>3</HtMsg>
          </Message>

          <TitleMsg>
            Please review and sing the last Bin...
          </TitleMsg>
          <p>Hello John, I would really like to see some examples of the previous</p>
        </Content>

      </BoxMessage>
    </Container>


  )
}