import Gallery from "@/components/Gallery";

async function getGalleryData() {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
    const response = await fetch(`${origin}/api/getGalleryData`, {method: "GET"});
    const data = await response.json();

    return data
}

export default async function GalleryPage() {
    const galleryData = await getGalleryData()

    return (
        <div>
            {/*<div style={{aspectRatio:"1", maxHeight: "100vh", maxWidth: "100vw", margin: "0 auto"}}>*/}
            <Gallery galleryData={galleryData}/>
            {/*</div>*/}
        </div>
    );
}
