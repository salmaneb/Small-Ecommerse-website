import { createTheme } from "@mui/material/styles";

export const colors={
    primary:'#5f2c3e',
    white:'#fff',
    black:'#000'
};
const theme=createTheme({
palette:{
    primary:{
        main:colors.primary
    },
    white:{
        main:colors.white
    },
    black:{
        main:colors.black
    }
},
components:{
    MuiButton:{
        defaultProps:{
            disableFocusRipple:true,
            disableElevation:true,

        }
    }
}
});
export default theme;