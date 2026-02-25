import React, { useState, useRef } from "react";
import "./ProfilePic.css";
import { IoCameraOutline } from "react-icons/io5";


const ProfilePic = ({ imageUrl }) => {
    const [uploadedImage, setUploadedImage] = useState(imageUrl);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="profile-container">
            <div
                className="image-wrapper"
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            >
                {uploadedImage ? (
                    <img
                        src={uploadedImage}
                        alt=""
                        className="profile-img"
                    />
                ) : (
                    <div className="placeholder-icon">👤</div>
                )}
                <div className="overlay-hover">
                    <div className="camera-icon">
                        <IoCameraOutline size={28} color="white" />
                    </div>
                </div>
            </div>
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default ProfilePic;