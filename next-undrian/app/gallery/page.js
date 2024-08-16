import Gallery from "@/components/Gallery";

async function getGalleryData() {
    try {
        const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
        const response = await fetch(`${origin}/api/getGalleryData`, {method: "GET"});
        return await response.json();
    } catch(e) {
        return null
    }
    // return data
}

export default async function GalleryPage() {
    const galleryData = await getGalleryData()
    if (galleryData == null) {
        return (
            <h1>UH OH.... :(</h1>
        )
    }
    return (
        <div>
            {/*<div style={{aspectRatio:"1", maxHeight: "100vh", maxWidth: "100vw", margin: "0 auto"}}>*/}
            <Gallery galleryData={galleryData}/>
            {/*</div>*/}
        </div>
    );
}
