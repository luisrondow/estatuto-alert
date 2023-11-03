import useDarkMode from "~/hooks/useDarkMode";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export const Header = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="flex justify-end w-screen h-16 pt-4 px-8">
      <button
        className="w-12 rounded-lg flex items-center justify-center hover:bg-gray-300 transition dark:hover:bg-gray-700 dark:text-gray-300"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <RiSunLine size={24} /> : <RiMoonLine size={24} />}
      </button>
    </div>
  )
}