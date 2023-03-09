import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const UserInfo = ({ name, profilePicture, email }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "180px",
          alignItems: "center",
        }}
      >
        <Avatar src={profilePicture} />
        <div style={{ paddingLeft: "10px" }}>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="caption">{email}</Typography>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
