import { createContext, useState } from "react";

export const BreadcrumbsContext = createContext();

export const BreadcrumbsProvider = ({ children }) => {
    const [breadcrumbs, setBreadcrumbs] = useState('');
    return (
        <BreadcrumbsContext.Provider value={{ breadcrumbs, setBreadcrumbs }}>
            {children}
        </BreadcrumbsContext.Provider>
    );
};
