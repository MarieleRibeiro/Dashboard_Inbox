import { FiPieChart, FiZap, FiCheckCircle, FiCalendar, FiClipboard, FiUsers, FiActivity, FiInbox } from 'react-icons/fi'
import Avatar01 from "../../downloads/avatar01.png"
import { Container, Logo, Logo01, Logo02, Icons, IconsCenter, Avatar, Ball } from "./styles"

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