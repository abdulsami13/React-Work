import { Box, Checkbox, Typography } from "@mui/material";
import * as React from 'react';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'; 
import DynamicTable from "../../../BaseComponent/DynamicTable";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function AllStaff(){
    let cols = [
        {
          displayName: "Student Name",
          key: "StudentName",
        },
        {
          displayName: "Father Name",
          key: "FatherName",
        //   searchAble: true,
        },
        {
          displayName: "Course",
          key: "Course",
        //   searchAble: true,
        },
    
      ];


    const  value=[
        {StudentName:"sami",FatherName:"azeem",Course:"javascript"},
        {StudentName:"sami",FatherName:"azeem",Course:"javascript"},
        {StudentName:"sami",FatherName:"azeem",Course:"javascript"}
        

      ]
    

    return(
<Box>


<DynamicTable cols={cols} title="Comments" datasource={value}/>


</Box>
    )
}