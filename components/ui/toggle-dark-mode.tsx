"use client"
import {Button} from '@/components/ui/index'
import {useThemeStore} from '@/features/app/store'

function ToggleDarkMode() {
    const { isDarkMode, toggleDarkMode } = useThemeStore();

    return (
        <>
            <Button onClick={toggleDarkMode} >
                {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
            </Button>
        </>
    )
}

export default ToggleDarkMode