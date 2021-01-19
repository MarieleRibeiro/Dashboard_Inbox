import styled from 'styled-components'
import avatar008 from "../../downloads/avatar008.png"
import { FiArrowUp, FiMoreHorizontal, FiChevronRight, FiAlignLeft } from 'react-icons/fi'
import avatar007 from "../../downloads/avatar007.png"

export const Container = styled.div`
max-width: 346px;
width: 100%;
background: rgba(240, 249, 255, 0.5);
padding: 31px 0 0 35px;
`
export const Wrapper = styled.div`
max-width: 277px;
width: 100%;
`
export const Header = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Span = styled.div`
font-size: 12px;
color: ${props => props.theme.colors.yellow};
background: ${props => props.theme.colors.yellow100};
border-radius: 3px;
padding: 3px 8px;

`
export const Info = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 44px 0 50px 0;
p {
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
}
`
export const Section = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 38px;
h2 {
  font-weight: bold;
  font-size: 18px;
  color: ${props => props.theme.colors.blue400}
}
`
export const RightSize = styled.div`
margin-right: 76px;
`
export const HeightPrice = styled.div``
export const SectionTime = styled.div`
width: 100%;
display: flex;
align-items: center;
padding: 27px 0 27px 0;
border-top: 1px solid rgba(126, 144, 166, 0.1);
`
export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
max-width: 28px;
width: 100%;
height: 28px;
background: ${props => props.theme.colors.blue200};
svg {
  color: ${props => props.theme.colors.blue};
}
`
export const InfoDate = styled.div`
width: 100%;
margin: 0 45px 0 10px;
h3 {
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.colors.blue400}
}
`
export const Icons = styled.div`
display: flex;
svg:last-child {
  margin-left: 15px;
}
`
export const ButtonDown = styled.button`
transform: rotate(180deg);
display: flex;
align-items: center;
justify-content: center;
max-width: 28px;
width: 100%;
height: 28px;
background: ${props => props.theme.colors.blue200};
svg {
  color: ${props => props.theme.colors.blue};
}
`
export const Details = styled.div`
display: flex;
align-items: center;
padding: 53px 0 13px 0;
border-top: 1px solid rgba(126, 144, 166, 0.1);
border-bottom: 1px solid rgba(126, 144, 166, 0.1);
small {
  margin-left: 12px;
  font-size: 14px;
}
`
export const FooterDetails = styled.div`
margin-top: 18px;
`
export const Description = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin-bottom: 18px;
span {
  display: flex;
  align-items: center;
}
p {
  color: ${props => props.theme.colors.blue};
  font-size: 14px;
}
h3 {
  font-size: 14px;
  color: ${props => props.theme.colors.blue400};
  margin-left: 12px;
}
`

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