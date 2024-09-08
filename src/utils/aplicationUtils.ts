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