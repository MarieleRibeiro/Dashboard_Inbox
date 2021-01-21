import { FiSearch, FiPlus } from "react-icons/fi";
import {
  Container,
  SearchBoxes,
  Label,
  Button,
  BoxMessage,
  Span,
  Content,
  Message,
  Strong,
  Small,
  HistoryMsg,
  TitleMsg,
} from "./styles";

import avatar001 from "../../downloads/avatar001.png";
import avatar002 from "../../downloads/avatar002.png";
import avatar003 from "../../downloads/avatar003.png";
import avatar004 from "../../downloads/avatar004.png";
import avatar005 from "../../downloads/avatar005.png";

const inbox = [
  {
    image: "",
    name: "Ham Chuwon",
    date: "Today",
    history: 2,
    title: " Please review and sing the last Bin...",
    description:
      "Hello John, I would really like to see some examples of the previous",
  },
];

export default function Inbox() {
  return (
    <Container>
      <SearchBoxes>
        <Label>
          <input type="text" placeholder="Search Inbox" />
          <button type="submit">
            <FiSearch />
          </button>
        </Label>
        <Button>
          <FiPlus size="18" color="#ffffff" />
          Compose
        </Button>
      </SearchBoxes>

      <BoxMessage>
        <Span>PINNED</Span>

        {inbox.map((message) => (
          <Content>
            <Message>
              <Strong>
                <img src={avatar001} alt="foto" /> {message.name}
              </Strong>

              <Small>{message.date}</Small>

              <HistoryMsg>{message.history}</HistoryMsg>
            </Message>

            <TitleMsg> {message.title} </TitleMsg>
            <p>{message.description}</p>
          </Content>
        ))}
        <Content>
          <Message>
            <Strong>
              <img src={avatar002} alt="foto" /> Heas{" "}
            </Strong>
            <Small>Yesterday</Small> <HistoryMsg>2</HistoryMsg>
          </Message>

          <TitleMsg>Some content</TitleMsg>
          <p>
            Hello John, I would really like to see some examples of the previous
          </p>
        </Content>

        <Span>SEEN</Span>

        <Content>
          <Message>
            <Strong>
              <img src={avatar003} alt="foto" /> Ham Chuwon{" "}
            </Strong>
            <Small>Today</Small> <HistoryMsg>2</HistoryMsg>
          </Message>

          <TitleMsg>Please review and sing the last Bin...</TitleMsg>
          <p>
            Hello John, I would really like to see some examples of the previous
          </p>
        </Content>

        <Content>
          <Message>
            <Strong>
              <img src={avatar004} alt="foto" /> Ham Chuwon{" "}
            </Strong>
            <Small>Feb 23</Small> <HistoryMsg>3</HistoryMsg>
          </Message>

          <TitleMsg>Please review and sing the last Bin...</TitleMsg>
          <p>
            Hello John, I would really like to see some examples of the previous
          </p>
        </Content>

        <Content>
          <Message>
            <Strong>
              <img src={avatar005} alt="foto" /> Ham Chuwon{" "}
            </Strong>
            <Small>Feb 22</Small> <HistoryMsg>3</HistoryMsg>
          </Message>

          <TitleMsg>Please review and sing the last Bin...</TitleMsg>
          <p>
            Hello John, I would really like to see some examples of the previous
          </p>
        </Content>
      </BoxMessage>
    </Container>
  );
}
