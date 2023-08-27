import LOCAL_STORAGE_KEYS from "@constants/local-storage-keys";
import themes from "@infrastructure/entities/themes";
import { useStorage } from "./storage";

const useTheme = () => {
    const storage = useStorage();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const toggleTheme = (value?: themes, cash: boolean = true) => {
        if(value === themes.dark){
            document.body.classList.add('dark');
        }
        else if(value === themes.light){
            document.body.classList.remove('dark');
        }
        else {
            document.body.classList.toggle('dark');
        }
        if(cash){
            const theme = document.body.classList.contains('dark') ? themes.dark : themes.light;
            storage.set(LOCAL_STORAGE_KEYS.THEME, theme);
        }
    }

    const iniTheme = async () => {
        const storedTheme = (await storage.get(LOCAL_STORAGE_KEYS.THEME));
        console.log(storedTheme);
        if(storedTheme && storedTheme === themes.dark){
            toggleTheme(themes.dark);
        } else if(storedTheme && storedTheme === themes.light) {
            toggleTheme(themes.light);
        } else {
            const _theme = prefersDark.matches ? themes.dark : themes.light;
            toggleTheme(_theme, false);
        }
    }

    return {
        iniTheme,
        toggleTheme,
    }

}
export default useTheme;