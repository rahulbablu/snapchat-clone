import {
  AttachFile,
  Close,
  Create,
  Crop,
  MusicNote,
  Note,
  Send,
  TextFields,
  Timer,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import "./Preview.css";

import { v4 as uuid } from "uuid";
import { db, storage } from "./firebase";
import firebase from "firebase";

const Preview = () => {
  const cameraImage = useSelector(selectCameraImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      navigate("/");
    }
  }, [cameraImage, navigate]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  const sendPost = () => {
    const id = uuid;
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImage, "data_url");

    uploadTask.on("state_changed", null, (error) => {
      console.log(error);
    }, () => {
        storage.ref('posts').child(id).getDownloadURL().then((url) => {
            db.collection('posts').add({
                imageUrl: url,
                username: 'Rahul',
                read: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
            navigate('/chats');
        })
    });
  };
    
  return (
    <div className="preview">
      <Close onClick={closePreview} className="preview__close" />
      <div className="preview__toolbarRight">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer />
      </div>
      <img src={cameraImage} alt="" />
      <div className="preview__footer" onClick={sendPost}>
        <h2>Send Now</h2>
        <Send fontSize="small" className="preview__sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
