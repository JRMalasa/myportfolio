import React from 'react'
import { useTheme } from 'next-themes';
const theme = () => {
    const { theme } = useTheme();
    const Textcolorclass = theme === 'dark' ? 'text-white' : 'text-black';
  
}

export default theme