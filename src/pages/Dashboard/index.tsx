import Nav from "../../components/Nav";
import Inbox from "../../components/MessageBox";
import Message from "../../components/Message";
import DetailsInbox from "../../components/LeadDetails";
import { Container } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Nav />
      <Inbox />
      <Message />
      <DetailsInbox />
    </Container>
  );
}
