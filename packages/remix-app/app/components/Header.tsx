import useDarkMode from '~/hooks/useDarkMode';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';

export const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="flex h-16 w-screen justify-end px-8 pt-4">
      <button
        className="flex w-12 items-center justify-center rounded-lg transition hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-700"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
      </button>
    </div>
  );
};
