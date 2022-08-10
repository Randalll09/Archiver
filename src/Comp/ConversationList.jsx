import React from 'react';
import Conversation from './Conversation';
import converseData from '../data/dmArchive.json';

const ConversationList = () => {
  let converseDataArray = [];
  // converseDataArray.push(
  //   ConverseData.map((value) => value.dmConversation.messages)
  // );
  for (let i = converseData.length - 1; i >= 0; i--) {
    converseDataArray.push(converseData[i]);
  }
  // let reversedConverseDataArray = converseDataArray.reverse();
  console.log(converseDataArray);
  let converse = converseData[0].dmConversation.messages;
  console.log(converse);

  return (
    <div style={{ backgroundColor: '#b5b5b5' }}>
      {converseDataArray.map((value) => {
        let ogArr = value.dmConversation.messages;
        let tempArr = [];
        for (let i = ogArr.length - 1; i >= 0; i--) {
          tempArr.push(ogArr[i]);
        }
        console.log(tempArr);
        return tempArr.map((value) => (
          <Conversation
            text={value.messageCreate.text}
            person={value.messageCreate.senderId}
            key={value.messageCreate.id}
          />
        ));
      })}
      {/* {converse.map((value) => (
        <Conversation
          text={value.messageCreate.text}
          person={value.messageCreate.senderId}
          key={value.messageCreate.id}
        />
      ))} */}
    </div>
  );
};

export default ConversationList;
