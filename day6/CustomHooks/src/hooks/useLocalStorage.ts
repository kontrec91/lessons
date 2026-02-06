import { useEffect, useState } from "react";

const useLocalStorage = (key: string, value: string) => {
  const [name, setName] = useState(() => {
    const prevValue = localStorage.getItem(key);
    return prevValue || value;
  });

  useEffect(() => {
    console.log(`[useLocalStorage] Сохраняю в localStorage:`, { key, name });
    localStorage.setItem(key, name);
  }, [key, name]);

  return [name, setName] as const;
};

export default useLocalStorage;
