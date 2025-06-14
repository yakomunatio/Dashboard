 
 import { DataGrid } from "@mui/x-data-grid";
 import { Box } from "@mui/material";
 import {rows, columns} from "./Data";
 
 
 
 
 
 
 const Invoices = ()=>{
    return(
        <Box sx={{ height: "600", width: "98%", mx: "auto" }}>
              <DataGrid 
              checkboxSelection
              showToolbar
              rows={rows} 
              columns={columns}
        
              
              />
            </Box>
    );
}

export default Invoices;