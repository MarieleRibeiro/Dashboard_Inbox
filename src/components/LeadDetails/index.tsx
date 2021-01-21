import avatar008 from "../../downloads/avatar008.png";
import { FiArrowUp, FiMoreHorizontal, FiChevronRight, FiAlignLeft } from 'react-icons/fi';
import avatar007 from "../../downloads/avatar007.png";
import {
  Container, Wrapper, Header, Span, Info, Section, RightSize, HeightPrice,
  SectionTime, Button, InfoDate, ButtonDown, Icons, Details, FooterDetails, Description,
} from "./styles";

export default function DetailsInbox() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <small>Lead Details</small>
          <Span>Pending signature</Span>
        </Header>
        <Info>
          <img src={avatar008} alt="foto" />
          <h1>Ham Chuwn</h1>
          <p>#224- Airpark Industrial</p>
        </Info>
        <Section>
          <RightSize>
            <h2>420 CF</h2>
            <small>Move Size</small>
          </RightSize>
          <HeightPrice>
            <h2>$ 4,090</h2>
            <small>Move Price</small>
          </HeightPrice>
        </Section>

        <SectionTime>
          <Button><FiArrowUp /></Button>
          <InfoDate>
            <h3>03/06/18</h3>
            <small>123 apt 2, New York </small>
          </InfoDate>
          <Icons>
            <FiMoreHorizontal />
            <FiChevronRight />
          </Icons>
        </SectionTime>

        <SectionTime>
          <ButtonDown><FiArrowUp /></ButtonDown>
          <InfoDate>
            <h3>03/06/18</h3>
            <small>123 apt 2, New York </small>
          </InfoDate>
          <Icons>
            <FiMoreHorizontal />
            <FiChevronRight />
          </Icons>
        </SectionTime>

        <Details>
          <FiAlignLeft /> <small>Details</small>
        </Details>

        <FooterDetails>
          <Description>
            <small>Company</small>
            <p>East Coast Movers</p>
          </Description>

          <Description>
            <small>Assigned to</small>
            <span>
              <img src={avatar007} alt="foto" />
              <h3>Ariana Barros</h3>
            </ span>
          </Description>

        </FooterDetails>
      </Wrapper>
    </Container>
  )
}