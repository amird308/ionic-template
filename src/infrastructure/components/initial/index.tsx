import { useEffect } from "react";
import useTheme from "@hooks/theme";
import useLanguage from "@hooks/language";

const Initial = () => {
    const theme = useTheme();
    const language = useLanguage();
    useEffect(()=> {
        theme.iniTheme();
        language.initLanguage();
        // SplashScreen.show({
        //     showDuration: 3000,
        //     autoHide: true
        //   });
    },[]);

    return null;
}

export default Initial;