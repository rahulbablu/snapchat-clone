import { Close } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import './Preview.css';

const Preview = () => {

    const cameraImage = useSelector(selectCameraImage);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if(!cameraImage){     
            navigate('/');
        }
    }, [cameraImage, navigate]);

    const closePreview = () => {
        dispatch(resetCameraImage());
    }

  return (
    <div className='preview'>
        <Close onClick={closePreview} className='preview__close' />
        <img src={cameraImage} alt='' />
    </div>
  )
}

export default Preview