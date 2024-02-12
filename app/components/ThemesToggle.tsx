  'use client'


  import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
  import { Button } from "@radix-ui/themes";
  import { useTheme } from "next-themes";

  const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                <SunIcon
                    className="h-[1.2rem] w-[1.2rem] transition-all"
                    style={{ transform: theme === 'dark' ? 'rotate(-90deg) scale(0)' : 'rotate(0deg) scale(1)' }}
                />
                <MoonIcon
                    className="absolute h-[1.2rem] w-[1.2rem] transition-all"
                    style={{ transform: theme === 'dark' ? 'rotate(0deg) scale(1)' : 'rotate(90deg) scale(0)' }}
                />
            </Button>
        </div>
    );
}

export default ThemeToggle;
