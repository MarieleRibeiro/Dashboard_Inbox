import avatar006 from "../../downloads/avatar006.png"
import { FiPaperclip, FiFileText, FiStar, FiCornerUpLeft, FiMoreHorizontal } from 'react-icons/fi'
import {
  Container, Content, Header, Description, Wrapper,
  Strong, Small, DetailsMessage, Details
} from "./styles"



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
              <button><FiStar /> </button>
              <button><FiCornerUpLeft />  </button>
              <button><FiMoreHorizontal />  </button>
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
            <a href="/"><FiPaperclip /> <span>1 Attachment</span></a>
            <a href="/"> <FiFileText />  <span>Billing Agreement.pdf</span> </a>
          </Details>

        </Description>


      </Content>
    </Container>
  )
}


