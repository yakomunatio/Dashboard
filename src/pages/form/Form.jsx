import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log("helow world");

    handleClick();
  };

  //alert code ========================
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  //================================

  const [member, setMember] = useState("");

  const handleChange = (event) => {
    setMember(event.target.value);
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        <TextField
          error={errors.firstName}
          helperText={errors.firstName ? "This field is required" : null}
          {...register("firstName", { required: true, minLength: 5 })}
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
        <TextField
          error={errors.lastName}
          helperText={errors.lastName ? "This field is required" : null}
          {...register("lastName", { required: true, minLength: 5 })}
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
        />
      </Box>

      <TextField
        error={errors.email}
        helperText={errors.email ? "This field is required" : null}
        {...register("email", { required: true, minLength: 5 })}
        id="filled-basic"
        label="Email"
        variant="filled"
      />
      <TextField
        error={errors.contactNumber}
        helperText={errors.contactNumber ? "This field is required" : null}
        {...register("contactNumber", { required: true, minLength: 5 })}
        id="filled-basic"
        label="Contact Number"
        variant="filled"
      />
      <TextField
        error={errors.address1}
        helperText={errors.address1 ? "This field is required" : null}
        {...register("address1", { required: true, minLength: 5 })}
        id="filled-basic"
        label="Address 1"
        variant="filled"
      />
      <TextField id="filled-basic" label="Address 2" variant="filled" />

      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Role</InputLabel>
        <Select
          error={errors.role}
          {...register("role", { required: true })}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={member}
          onChange={handleChange}
          defaultValue="User"
        >
          <MenuItem value={"admin"}>Admin</MenuItem>
          <MenuItem value={"manager"}>Manager</MenuItem>
          <MenuItem value={"User"}>User</MenuItem>
        </Select>
      </FormControl>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create New Member
        </Button>

        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }} open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            variant="standard"
            sx={{ width: "100%" }}
          >
            Account created successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
