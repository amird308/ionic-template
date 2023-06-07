import LOCAL_STORAGE_KEYS from "@constants/local-storage-keys";
import storageLocal from "@helpers/storage-local";
import themes from "@infrastructure/entities/themes";

const useTheme = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const toggleTheme = (value?: boolean, cash: boolean = true) => {
        if(value === true){
            document.body.classList.add('dark');
        }
        else if(value === false){
            document.body.classList.remove('dark');
        }
        else {
            document.body.classList.toggle('dark');
        }
        if(cash){
            const theme = document.body.classList.contains('dark') ? themes.dark : themes.light;
            storageLocal.set(LOCAL_STORAGE_KEYS.THEME, theme);
        }
    }

    const setDefaultTheme = () => {
        const storedTheme = storageLocal.get(LOCAL_STORAGE_KEYS.THEME);
        if(storedTheme === themes.dark){
            toggleTheme(true);
        } else if(storedTheme === themes.light) {
            toggleTheme(false);
        } else {
            toggleTheme(prefersDark.matches, false);
        }
    }

    return {
        setDefaultTheme,
        toggleTheme,
    }

}
export default useTheme;