import React, { useState, useRef } from "react";
import styles from "./ProfilePic.module.css";
import { IoCameraOutline, IoPersonOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";



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
        <div className={styles['profile-container']}>
            <div
                className={styles['image-wrapper']}
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            >
                {uploadedImage ? (
                    <img
                        src={uploadedImage}
                        alt=""
                        className={styles['profile-img']}
                    />
                ) : (
                    <div className={styles['placeholder-icon']}>
                        <CgProfile size={60} color="rgba(255, 255, 255, 0.6)" />
                    </div>
                )}
                <div className={styles['overlay-hover']}>
                    <div className={styles['camera-icon']}>
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