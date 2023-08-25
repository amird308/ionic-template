import { Preferences } from '@capacitor/preferences';


export interface IStorage {
    get: (key: string) => Promise<string | null>;
    set: (key: string, value: string) => Promise<void>;
    remove: (key: string) => void;
    getKeys: () => Promise<{ keys: string[] }>;
    clear: () => Promise<void>;
  }

class storage {
    static set(key: string, value: any) {
        Preferences.set({ key, value });
    }
    static get(key: string) {
        return Preferences?.get?.({ key }); 
    }
    static remove(key: string) {
        Preferences.remove({ key });
    }
    static clear() {
        Preferences.clear();
    }
    static keys() {
        return Preferences.keys();
    }
}

export default storage;