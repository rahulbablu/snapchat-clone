import { ChatBubble, RadioButtonChecked, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Chats.css";
import { auth, db } from "./firebase";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/appSlice";
import { useNavigate } from "react-router-dom";
import { resetCameraImage } from "./features/cameraSlice";

const Chats = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const takeSnap = () => {
    dispatch(resetCameraImage());
    navigate("/");
  };

  return (
    <div className="chats">
      <div className="chats__header">
        <Avatar
          src={user.profilePic}
          onClick={() => auth.signOut()}
          className="chats__avatar"
        />
        <div className="chats___search">
          <Search className="chats__searchIcon" />
          <input className="chats__input" placeholder="Friends" type="text" />
        </div>
        <ChatBubble className="chats__chatIcon" />
      </div>

      <div className="chats__posts">
        {posts.map(
          ({
            id,
            data: { profilePic, username, timestamp, imageUrl, read },
          }) => (
            <Chat
              key={id}
              id={id}
              username={username}
              timestamp={timestamp}
              imageUrl={imageUrl}
              read={read}
              profilePic={profilePic}
            />
          )
        )}
      </div>
      <RadioButtonChecked
        className="chats__takePicIcon"
        onClick={takeSnap}
        fontSize="large"
      />
    </div>
  );
};

export default Chats;
