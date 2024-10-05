export const isDarkColorScheme = () => {
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const setColorScheme = (theme: string) => {
    const body = document.querySelector('.app-body') as HTMLElement
    
    if(theme === 'dark'){
        body.classList.remove('app-light');
        body.classList.add('app-dark');
    }
    else{
        body.classList.remove('app-dark');
        body.classList.add('app-light');
    }
}

export const savedColorScheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !storedTheme ? 
        'dark' : 
        storedTheme;

    return theme
}

export const changeColorScheme = () => {
    const localStorage = window.localStorage
    const storedTheme = localStorage.getItem('theme');
    let theme = 'light'

    if(storedTheme){
        theme = storedTheme === 'light' ? 'dark' : 'light'
    }

    localStorage.setItem('theme', theme)

    return theme
}