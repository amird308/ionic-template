import { useEffect } from "react";
import useTheme from "@hooks/useTheme";

const Initial = () => {
    const theme = useTheme();
    useEffect(()=> {
        theme.setDefaultTheme();
        // SplashScreen.show({
        //     showDuration: 3000,
        //     autoHide: true
        //   });
    },[]);

    return null;
}

export default Initial;