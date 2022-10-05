import {createTheme} from "@mui/material"
import { lightBlue, lightGreen } from "@mui/material/colors"

export const theme = createTheme({
    // breakpoints:{
    //     up:{
    //         sm:"600px"
    //     },
        
    // }
   mode:{
    lightmode:{
        color:"black",
        bg:"white"
    },
    darkmode:{
        color:"white",
        bg:"black"
    }
   }
})