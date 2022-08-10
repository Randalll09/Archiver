import styled from 'styled-components';

const StyledConversation = styled.div`
  width: 100%;
  position: relative;
  padding: 0 10px;
  &::after {
    display: block;
    clear: both;
    content: '';
  }
  > div {
    float: ${(props) => props.person.float};
    margin: 10px 0;
    > img {
      width: 42px;
      height: 42px;
      border-radius: 100%;
      display: block;
      float: ${(props) => props.person.float};
      background-color: ${(props) => props.person.bgColor};
      object-fit: cover;
    }
    > div {
      float: ${(props) => props.person.float};
      margin: 0 10px;

      width: 250px;
      /* border-radius: ${(props) =>
        props.person.float === 'left'
          ? `0 16px 16px 16px`
          : `16px 0 16px 16px`}; */
      border-radius: 10px;
      min-height: 50px;
      padding: 16px 16px;
      background-color: ${(props) => props.person.bgColor};
      p {
        /* text-align: ${(props) => props.person.float}; */
        /* word-break: keep-all; */
        font-size: 14px;
        font-weight: var(--medium);
        line-height: 20px;
        color: ${(props) => props.person.color};
      }
    }
  }
`;

export default StyledConversation;
