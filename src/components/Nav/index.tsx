import styled from 'styled-components'
import { FiPieChart, FiZap, FiCheckCircle, FiCalendar, FiClipboard, FiUsers, FiActivity, FiInbox } from 'react-icons/fi'
import Avatar01 from "../../downloads/avatar01.png"
export const Container = styled.div`
max-width: 110px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
ul { 
flex-direction: column;
display: flex;
}
a { 
  font-size: 18px;
  color: ${props => props.theme.colors.gray};
}

`
export const Logo = styled.div`
position: relative;
margin: 22px 0 42px 0;
`
export const Logo02 = styled.div`
width: 20px;
height: 20px;
background: ${props => props.theme.colors.blue200};
border-radius: 4px;
`
export const Logo01 = styled.div`
position: absolute;
width: 20px;
height: 20px;
background: ${props => props.theme.colors.blue};
border-radius: 3px;
transform: rotate(45deg);
top: 0;
z-index: -1;
`
export const Avatar = styled.div`
position: relative;
margin-bottom: 30px;
`
export const IconsCenter = styled.div`
a {
  margin-bottom: 39.5px;
}
`
export const Icons = styled.div`
margin-top: 369px;
a {
  margin-bottom: 22px;
}
a:last-child {
   background-color: ${props => props.theme.colors.green};
   color: ${props => props.theme.colors.white};
   border-radius: 100%;
   padding: 8px;
   display: flex;
   align-items: center;
  }
  ul {
    align-items: center;
  }

`
export const Ball = styled.div`
position: absolute;
width: 8px;
height: 8px;
border-radius: 50%;
margin-left: 21px;
background: ${props => props.theme.colors.yellow};
`

export default function Nav() {
  return (
    <Container>
      <Logo>
        <Logo01 />
        <Logo02 />
      </Logo>
      <IconsCenter>
        <ul>
          <a href="/"><FiPieChart /></a>
          <a href="/"><FiZap /></a>
          <a href="/"><FiCheckCircle /></a>
          <a href="/"><FiCalendar /></a>
          <a href="/"><FiClipboard /></a>
          <a href="/"><FiUsers /></a>
        </ul>
      </IconsCenter>
      <Icons>
        <ul>
          <a href="/">< FiActivity /></a>
          <a href="/">< FiInbox /></a>
        </ul>
      </Icons>
      <Avatar>
        <Ball />
        <img src={Avatar01} alt="foto" />
      </Avatar>
    </Container>
  )
}