import { useStorage } from "./storage";
import { useTranslation } from "react-i18next";
import LOCAL_STORAGE_KEYS from "@constants/local-storage-keys";

const useLanguage = () => {
    const storage = useStorage();
    const { i18n } = useTranslation();
    const initLanguage = async () => {
        const cacheLag = await storage.get(LOCAL_STORAGE_KEYS.LANGUAGE);
        if(cacheLag){
            i18n.changeLanguage(cacheLag);
            document.body.dir = i18n.dir(cacheLag);
        } else {
            const defaultLanguage = i18n.language;
            document.body.dir = i18n.dir(defaultLanguage);
        }
    };
    const changeLanguage = (lag: string) => {
        storage.set(LOCAL_STORAGE_KEYS.LANGUAGE, lag);
        i18n.changeLanguage(lag);
        document.body.dir = i18n.dir(lag);
    }
    
    return {
        initLanguage,
        changeLanguage
    }

}
export default useLanguage;