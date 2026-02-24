import React from "react";


const ProfilePic = ({imageUrl}) => {
    return(
        <div className="profile-container">
            <div className="image-wrapper">
                {imageUrl ? (
                    <img
                    src={imageUrl} 
                    alt="Perfil"
                    className="profile-img"
                    />
                ) : (
                    <div className="placeholder-icon">👤</div>
                )}
            </div>
        </div>
    );
};

export default ProfilePic;