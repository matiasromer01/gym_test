import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GiWeightLiftingUp } from "react-icons/gi";
import ProfilePic from "./ProfilePic.jsx";
import styles from "./ASide.module.css";

const ASidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleMenuClick = (path) => {
        navigate(path);
    };

    const isActive = (path) => {
        if (path === "/progress" || path === "/") {
            return (
                location.pathname === "/progress" || location.pathname.startsWith("/progress-/")
            );
        }
        return location.pathname === path;
    };

    return (
        <div className={styles.asidebar}>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Progress</span>
                    <GiWeightLiftingUp size={24} color={isActive("/progress") ? "#381090" : "#a05c5c"} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Progress</span>
                    <GiWeightLiftingUp size={24} color={isActive("/progress") ? "#381090" : "#a05c5c"} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Progress</span>
                    <GiWeightLiftingUp size={24} color={isActive("/progress") ? "#381090" : "#a05c5c"} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Progress</span>
                    <GiWeightLiftingUp size={24} color={isActive("/progress") ? "#381090" : "#a05c5c"} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Progress</span>
                    <GiWeightLiftingUp size={24} color={isActive("/progress") ? "#381090" : "#a05c5c"} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Progress</span>
                    <GiWeightLiftingUp size={24} color={isActive("/progress") ? "#381090" : "#a05c5c"} />
                </span>
            </button>
            <div className={styles.profileContainer}>
                <ProfilePic imageUrl="https://via.placeholder.com/150" />
                <h3>Nombre</h3>
            </div>
        </div>
    );
};

export default ASidebar;
