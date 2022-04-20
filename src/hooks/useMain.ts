import React from 'react'

const useMain = () => {
    const handelDarkMode = () => {
        localStorage.setItem('darkMode', "true");
    }
    return {
        handelDarkMode
    }
}

export default useMain