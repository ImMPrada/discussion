import React from 'react';
import { ProfileBox, ATimeAgoLabel } from '../../atoms';

const MessageHeader = () => {

  return(
    <>
      <ProfileBox />
      <ATimeAgoLabel label="lorem ipsum"/>
    </>
  )
}

export default MessageHeader;
