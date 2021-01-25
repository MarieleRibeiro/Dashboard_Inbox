import styled from "styled-components";

export const Container = styled.div`
  max-width: 110px;
  max-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    flex-direction: column;
    display: flex;
    
  }
  svg:hover{
    color: ${(props) => props.theme.colors.blue};
  }
 
`;
export const Logo = styled.div`
  position: relative;
  margin: 22px 0 42px 0;
`;
export const Logo02 = styled.div`
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.colors.blue200};
  border-radius: 4px;
`;
export const Logo01 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 3px;
  transform: rotate(45deg);
  top: 0;
  z-index: -1;
`;
export const Avatar = styled.div`
  position: relative;
  margin-bottom: 30px;
`;
export const IconsCenter = styled.div`
  a {
    margin-bottom: 39.5px;
  }
`;
export const Icons = styled.div`
    
  a {
    margin-bottom: 22px;
  }
  a:last-child {
    background-color: ${(props) => props.theme.colors.green};
    border-radius: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    color: #fff;
  }
 ul {
   align-items: center;
 }
 
`;
export const Ball = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 21px;
  background: ${(props) => props.theme.colors.yellow};
`;
export const NavigationMenu = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
 align-items: center;
`;
