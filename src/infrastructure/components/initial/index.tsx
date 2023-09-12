import { useEffect, useState } from "react";
import useTheme from "@hooks/theme";
import useLanguage from "@hooks/language";
import { useGetProfileQuery } from "@services/profile";

const Initial = (props: {children: React.ReactNode}) => {
    const { data } = useGetProfileQuery(undefined, {})
    const [status, setStatus] = useState("loading");
    
    const theme = useTheme();
    const language = useLanguage();
    useEffect(()=> {
        (async()=> {
            await theme.iniTheme();
            await language.initLanguage();
            setStatus("done");
            // SplashScreen.show({
            //     showDuration: 3000,
            //     autoHide: true
            //   });
        })()
    },[]);

    return (
        <>
            {status === "done" && props.children}
        </>
    )
}

export default Initial;