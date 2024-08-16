import Gallery from "@/components/Gallery";

async function getGalleryData() {
    const response = await fetch('http://localhost:3000/api/getGalleryData', {method: "GET"});
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
