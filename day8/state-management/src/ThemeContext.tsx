import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider = ({ children }: { children: React.ReactNode })=> {
     const [theme, setTheme] = useState<Theme>('light');

     const toggleTheme = useCallback(() => setTheme((prev: string) => prev ==='light'? 'dark': 'light'),[]);

     useEffect(()=> {
      // document.body.className = `theme-${theme}`;
      document.body.className = theme;
     },[theme])

     const value = useMemo(()=> {
      console.log('[ThemeContext] value recreated');
      return({theme, toggleTheme})
    }, [theme,toggleTheme])

     console.log("ExpensiveComponent rendered"); // 
    return (
        <ThemeContext.Provider value = {value}>
         {/* <ThemeContext.Provider value = {{theme, toggleTheme}}> */}
             {children}
        </ThemeContext.Provider>
    )
}


export const useThemeContext = ()=> {
   const context = useContext(ThemeContext);
   if(!context){
    throw new Error('useThemeContext must be used within a ThemeProvider');
   }
   return context;
   
}