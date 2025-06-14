import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import { rows } from "./Data";

const Team = () => {
  const theme = useTheme();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "name",
      headerName: "Name",
      align: "center",
      headerAlign: "center",
    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "age",
      headerName: "Age",
      align: "center",
      headerAlign: "center",
    },

    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "100px",
              textAlign: "center",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "10px",
              justifySelf: "center",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                  ? theme.palette.secondary.dark
                  : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlinedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            )}

            {access === "Manager" && (
              <SecurityOutlinedIcon fontSize="small" sx={{ color: "white" }} />
            )}

            {access === "User" && (
              <LockOutlinedIcon fontSize="small" sx={{ color: "white" }} />
            )}
            <Typography sx={{ fontSize: "14px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: "600", width: "98%", mx: "auto" }}>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Team;
