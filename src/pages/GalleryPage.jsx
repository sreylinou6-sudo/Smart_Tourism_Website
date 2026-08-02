import React, { useEffect, useState } from "react";

function GalleryPage() {
    useEffect(() => {
        document.title = "Smart Tourism | Gallery Page";
    }, []);
    return (
        <div className="gallery-page">
            <h1>Gallery Page</h1>
            <p>Welcome to the gallery page of Smart Tourism!</p>
        </div>
    );
}
export default GalleryPage;