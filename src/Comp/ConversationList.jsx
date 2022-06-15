import React from 'react';
import Conversation from './Conversation';
import ConverseData from '../data/output.json';

const ConversationList = () => {
  let converse = ConverseData[0].dmConversation.messages;
  console.log(converse);

  return (
    <div style={{ backgroundColor: '#b5b5b5' }}>
      {converse.map((value) => (
        <Conversation
          text={value.messageCreate.text}
          person={value.messageCreate.senderId}
          key={value.messageCreate.id}
        />
      ))}
    </div>
  );
};

export default ConversationList;
