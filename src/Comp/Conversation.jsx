import React, { useEffect, useState } from 'react';
import StyledConversation from './Styles/StyledConversation';

const Conversation = ({
  profImg = 'https://www.fillmurray.com/640/360',
  text,
  person,
}) => {
  //TODO change ProfImg by number
  const [sender, setSender] = useState(null);
  const tsuki = {
    float: 'left',
    color: '#efefef',
    bgColor: '#3a3a3a',
    profImg: './img/tsuki01.jpg',
  };
  const koi = {
    float: 'right',
    color: '#3a3a3a',
    profImg: '../img/koito01.jpg',
    bgColor: '#efefef',
  };
  const getSender = () => {
    person == '1524384991475802112' ? setSender(tsuki) : setSender(koi);
  };
  useEffect(() => {
    getSender();
  }, []);
  return (
    <>
      {sender ? (
        <StyledConversation person={sender}>
          <div>
            <img src={sender.profImg} />
            <div>
              <p>{text}</p>
            </div>
          </div>
        </StyledConversation>
      ) : null}
    </>
  );
};

export default Conversation;
