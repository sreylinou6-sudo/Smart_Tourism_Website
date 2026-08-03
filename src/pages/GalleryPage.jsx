import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";            

function GalleryPage({ language = 'en' }) {
    useEffect(() => {
        document.title = language === 'kh' ? 'ទេសចរណ៍ឆ្លាត | រូបថត' : 'Smart Tourism | Gallery Page';
    }, [language]);
    return (
        <div className="gallery-page">
            <Gallery language={language} />
        </div>
    );
}
export default GalleryPage;