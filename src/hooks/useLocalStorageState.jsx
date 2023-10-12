import { useState } from "react";
import { useEffect } from "react";

const useLocalStorageState = (initialValue, key) => {
  const [value, setValue] = useState(() => {
    const storeValue = localStorage.getItem(key);
    return storeValue ? JSON.parse(storeValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorageState;
