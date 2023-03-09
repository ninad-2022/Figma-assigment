import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import routes from "../../routes/admin/AdminRoutes";
const SidebarMenu = ({ open }) => {
  return (
    <>
      <List>
        {Array.isArray(routes) &&
          routes.map(({ path, label, icon }, index) => (
            <ListItem
              key={path + "-" + index}
              disablePadding
              sx={{ display: "block" }}
            >
              <NavLink
                end
                to={path}
                style={({ isActive }) => ({
                  color: isActive ? "#000" : "#777",
                  textDecoration: "none",
                })}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default SidebarMenu;
