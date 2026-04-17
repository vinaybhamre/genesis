import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import { ReactNode, createContext, useEffect, useState } from "react";
import { View, useColorScheme as useRNColorScheme } from "react-native";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("system");

  const systemTheme = useRNColorScheme();
  const { setColorScheme } = useNativeWindColorScheme();

  const resolvedTheme = theme === "system" ? (systemTheme ?? "light") : theme;

  useEffect(() => {
    setColorScheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      <View className="flex-1">{children}</View>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
