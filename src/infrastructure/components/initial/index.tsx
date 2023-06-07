import { useEffect } from "react";
import useTheme from "@hooks/useTheme";

const Initial = () => {
    const theme = useTheme();
    useEffect(()=> {
        theme.setDefaultTheme();
    },[]);

    return null;
}

export default Initial;