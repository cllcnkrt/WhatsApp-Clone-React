import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useParams } from 'react-router';
import db from '../../firebase';

function Chat() {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFileIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__reciever'}`}>
          <span className="chat__name">Celal can kurt</span>
          Hey Guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
