
import styled from 'styled-components'
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