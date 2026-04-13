import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GiWeightLiftingUp } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { GiStairsGoal } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";

import ProfilePic from "./ProfilePic.jsx";
import styles from "./ASide.module.css";

const ASidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = React.useState("Name");
    const [editing, setEditing] = React.useState(false);

    // load from localStorage on mount
    React.useEffect(() => {
        const stored = localStorage.getItem("asideName");
        if (stored) setName(stored);
    }, []);

    const handleMenuClick = (path) => {
        // save name when navigating away (or whenever another action occurs)
        localStorage.setItem("asideName", name);
        setEditing(false);
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
                    <span className={styles.menuText}>Dashboard</span>
                    <MdOutlineSpaceDashboard size={24} color={isActive("/progress") } />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Rutina</span>
                    <CgGym size={24} color={isActive("/progress")} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Historial</span>
                    <GiStairsGoal size={24} color={isActive("/progress")} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Nutrición</span>
                    <GiMeal size={24} color={isActive("/progress")} />
                </span>
            </button>
            <button
                className={styles.menuItem}
                onClick={() => handleMenuClick("/progress")}
                title="Progress"
            >
                <span>
                    <span className={styles.menuText}>Objetivos</span>
                    <GiWeightLiftingUp size={24} color={isActive("/progress") } />
                </span>
            </button>

            <div className={styles.profileContainer}>
    <ProfilePic imageUrl="https://via.placeholder.com/150" />
    
    <div className="inputGroup">
        <input 
            class="input" 
            name="text" type="text" 
            placeholder="Name"
            className={styles.nameInput} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
                localStorage.setItem("asideName", name);
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    e.target.blur(); // Quita el foco al presionar Enter
                }
            }}
        />
    </div>
</div>
        </div>
    );
};

export default ASidebar;
