import LOCAL_STORAGE_KEYS from "@constants/local-storage-keys";
import storage from "@helpers/storage";
import themes from "@infrastructure/entities/themes";

const useTheme = () => {
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

    const setDefaultTheme = async () => {
        const storedTheme = await storage.get(LOCAL_STORAGE_KEYS.THEME);
        console.log(storedTheme);
        if(storedTheme && storedTheme.value === themes.dark){
            toggleTheme(themes.dark);
        } else if(storedTheme?.value === themes.light) {
            toggleTheme(themes.light);
        } else {
            const _theme = prefersDark.matches ? themes.dark : themes.light;
            toggleTheme(_theme, false);
        }
    }

    return {
        setDefaultTheme,
        toggleTheme,
    }

}
export default useTheme;