import storage, { IStorage } from '@helpers/storage';
import { useCallback } from 'react';


export function useStorage(): IStorage {
  const get = useCallback(async (key: string) => {
    const v = await storage.get(key);
    if (v) {
      return v.value;
    }
    return null;
  }, []);

  const set = useCallback(async (key: string, value: string) => {
    return storage.set(key, value);
  }, []);

  const remove = useCallback((key: string) => {
    return storage.remove(key);
  }, []);

  const getKeys = useCallback(() => {
    return storage.keys();
  }, []);

  const clear = useCallback(() => {
    return Preferences.clear();
  }, []);

  return { get, set, remove, getKeys, clear };
}