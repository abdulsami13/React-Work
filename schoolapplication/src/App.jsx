import { createTheme, ThemeProvider } from "@mui/material";
import Routers from "./Config/routers";
import { amber } from "@mui/material/colors";


export default function App(){

    const [isOnline,setisOnline]= useState(navigator.onLine)

const handeleOnline = ()=> setisOnline(true)
const handeleOffline = ()=> setisOnline(false)

useEffect(() => {
    
window.addEventListener("online",handeleOnline)
window.addEventListener("offline",handeleOffline)

}, []);
const theme = createTheme({
    palette: {
        primary: {
            main: '#19C1B6',
        },
        secondary: {
            main: amber[600],
            dark: amber[700]
        },
        tertiary:{
            main:"#FE6788",
        }
    },
    typography: {
        fontFamily: [
            'Poppins',
            'Arial',
            'sans-serif',
        ].join(','),
    },
})


    return(
        <div>

            <ThemeProvider theme={theme}>



<Routers/>
            </ThemeProvider>

        </div>
    )
}