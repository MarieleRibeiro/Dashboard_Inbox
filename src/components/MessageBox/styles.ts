import styled from "styled-components";
export const Container = styled.div`
  max-width: 318px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border-right: 1px solid rgba(126, 144, 166, 0.1);
`;
export const SearchBoxes = styled.div`
  max-width: 255px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  input {
    padding: 10px;
    outline: none;
    font-size: 14px;
    ::placeholder {
      line-height: 16px;
      color: ${(props) => props.theme.colors.gray};
      font-size: 14px;
    }
  }
`;
export const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    background: none;
    outline: none;
    color: ${(props) => props.theme.colors.gray};
    font-size: 18px;
  }
`;
export const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  background: ${(props) => props.theme.colors.green};
  border-radius: 4px;
  padding: 12px 90px;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;
export const BoxMessage = styled.div`
  margin-top: 32px;
  overflow-y: scroll;
`;
export const Content = styled.div`
  max-width: 294px;
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  cursor: pointer;
  p {
    font-size: 13px;
    color: ${(props) => props.theme.colors.gray};
  }
  :nth-child(3) {
    margin-bottom: 52px;
  }
  :nth-child(6) {
    border-bottom: 1px solid rgba(126, 144, 166, 0.1);
  }
  :hover{
    background: ${(props) => props.theme.colors.blue100};
  }
`;


export const Span = styled.div`
  color: ${(props) => props.theme.colors.gray};
  margin: 0 0 15px 29px;
  font-size: 10px;
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Strong = styled.strong`
  width: 100%;
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
`;
export const Small = styled.small`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
export const HistoryMsg = styled.div`
  padding: 2px 5px;
  background: ${(props) => props.theme.colors.blue200};
  font-size: 10px;
  color: ${(props) => props.theme.colors.blue};
  margin-left: 8px;
  border-radius: 2px;
`;
export const TitleMsg = styled.div`
  margin: 15px 0 3px 0;
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => props.theme.colors.blue300};
`;
