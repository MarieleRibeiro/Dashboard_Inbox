import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
padding: 48px 60px 0 60px;
`
export const Header = styled.header`
max-width: 343px;
width: 100%;
margin-bottom: 59px;
`
export const Content = styled.div`
width: 100%;
`
export const Wrapper = styled.div`
width: 100%;
display: flex;
margin: 25px 0 50px 0;
img { 
  width: 30px;
  height: 30px;
  margin-right: 14px;
}
`
export const Description = styled.div`
max-width: 546px;
width: 100%;
border-top: 1px solid rgba(126, 144, 166, 0.1);
border-bottom: 1px solid rgba(126, 144, 166, 0.1);
`
export const Strong = styled.strong`
width: 100%;
display: flex;
flex-direction: column;
`
export const Small = styled.small``
export const DetailsMessage = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
button { 
background: none;
}
button:nth-child(3){
  margin: 0 13px 0 13px;
}
span {
margin-right: 15px;
}
`
export const Details = styled.div`
max-width: 544px;
width: 100%;
display: flex;
flex-direction: column;
margin: 79px 0 84px 0;
a:last-child{
  background: #F0F9FF;
  border-radius: 3px;
  padding: 10px 0 ;
  margin-top: 8.5px;
}

svg {
  margin: 0 14px 0 9px;
}
a {
  display: flex;
  align-items: center;
}
`