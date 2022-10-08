import React from 'react'

const PageContentWrapper = ({ className, children }) => {
    return (
        <main className={`flex-1 dark:bg-gray-700 pb-10 ${className}`}>
            {children}
        </main>
    )
}

export default PageContentWrapper