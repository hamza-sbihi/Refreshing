import { createContext, useContext, useEffect, useState} from "react";


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const[isDarkMode, setIsDarkMode] = useState(false);

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme');

        if(savedTheme === 'dark') {
            setIsDarkMode(true);
        }
    },[]);

    const toggleTheme = () =>{
        setIsDarkMode((oldState)=>{
            const newState = !oldState;
            localStorage.setItem('theme',newState? 'dark' : 'light');
            return newState;
        });
    };
    return (
        <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );

};

export const useTheme = () => useContext(ThemeContext);