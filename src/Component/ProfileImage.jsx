import React, { useRef, useState, useContext } from "react";
import {Theme} from "./Theme";


export default function ProfileImage() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const { theme } = useContext(Theme);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className={`profile-container ${theme}`}>
      
      <h2 style={{ color: theme === "light" ? "red" : "#ff6b6b" }}>
  My Profile
</h2>

      <div className="image-section" onClick={handleImageClick}>
        {image ? (
          <img src={image} alt="Profile" />
        ) : (
          <p> Upload Image</p>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        hidden
        accept="image/*"
      />

      <button onClick={handleImageClick} className="upload-btn">
        Click To Upload Image
      </button>
    </div>
  );
}