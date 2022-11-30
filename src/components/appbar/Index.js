import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import Mobile from "./Mobile";
import desktop from "./desktop";

 const Appbar=()=>{
    let theme=useTheme();
    let mathes=useMediaQuery(theme.breakpoints.down('md'));
    return(
        <>
{mathes ? <Mobile /> : <desktop />}
        </>
    )
}
export default Appbar;