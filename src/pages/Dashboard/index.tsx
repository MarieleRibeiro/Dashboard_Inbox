import Nav from "../../components/Nav";
import Inbox from "../../components/MessageBox";
import styled from 'styled-components'
import Message from "../../components/Message";
import DetailsInbox from "../../components/LeadDetails";


export const Container = styled.div`
display: flex;
`

export default function Dashboard() {
  return (
    <Container>
      <Nav />
      <Inbox />
      <Message />
      <DetailsInbox />
    </Container>
  )
}