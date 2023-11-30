import { IconMoon, IconSun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md shadow-black/5 dark:bg-darkBlue dark:text-white transition-colors">
      <h1 className="font-bold">Where in the world?</h1>
      <button
        onClick={handleToggleTheme}
        className="flex items-center gap-1 font-semibold"
      >
        {isDark ? <IconSun /> : <IconMoon size={20} />}
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};
export default Header;
