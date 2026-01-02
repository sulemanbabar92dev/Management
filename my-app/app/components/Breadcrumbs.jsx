"use client";
export default function Breadcrumbs({ BreadcrumbsData }) {
    return (
        <div>
            {BreadcrumbsData && (
                <h3 className="p-3 font-semibold text-gray-600 cursor-pointer" > App / {BreadcrumbsData} </h3>
            )}
        </div>
    );
}