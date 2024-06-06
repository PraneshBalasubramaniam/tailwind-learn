import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useSetThemeInClass = (isEnabled: boolean) => {
  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [isEnabled]);
};

const useDarkMode = () => {
  const [isEnabled, setEnabled] = useLocalStorage('dark-theme', false);

  useSetThemeInClass(isEnabled);

  return [isEnabled, setEnabled] as const;
};

export default useDarkMode;
