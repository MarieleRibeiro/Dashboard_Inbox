import Nav from "../../components/Nav";
import Inbox from "../../components/MessageBox";
import styled from 'styled-components'


export const Container = styled.div`
display: flex;
`

export default function Dashboard() {
  return (
    <Container>
      <Nav />
      <Inbox />
    </Container>
  )
}