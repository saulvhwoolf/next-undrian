'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

const SeriesPanelContents = ({data}) => {
    return <>
        <div className="imageGrid">
            <h1>
                {data.name}
            </h1>
            <img src={data.previewImages[0]} alt={`${data.name} preview image 1`}/>
            <img src={data.previewImages[1]} alt={`${data.name} preview image 1`}/>
            <img src={data.previewImages[2]} alt={`${data.name} preview image 1`}/>
            <img src={data.previewImages[3]} alt={`${data.name} preview image 1`}/>
        </div>
    </>
}
const ArtworkPanelContents = ({data}) => {
    return <>
        <div className="artworkPreview">
            <h1>
                {data.name} <i>({data.date.year})</i>
            </h1>
            <img src={data.previewImage} alt={`${data.name} preview image`}/>

        </div>
    </>
}

const ArtworkDetailsPanelContents = ({data}) => {
    return <>
        <div className="artworkDetails">

            <h1>Artwork details</h1>
            <div className="imageRow">
                {data.images.map((image) => {
                    return <img src={image} alt="the thing"/>
                })}
            </div>
            <p>{data.body}</p>
        </div>
    </>
}


const DraggablePanel = ({ children, onDragEnd, threshold = 100 }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [translation, setTranslation] = useState({ x: 0, y: 0 });
    const panelRef = useRef(null);

    const handleMouseDown = useCallback((e) => {
        setIsDragging(true);
        setStartPos({ x: e.clientX, y: e.clientY });
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isDragging) return;

        const newTranslation = {
            x: e.clientX - startPos.x,
            y: e.clientY - startPos.y,
        };

        setTranslation(newTranslation);

        // Check if drag distance exceeds threshold in any direction
        if (Math.abs(newTranslation.x) > threshold) {
            handleDragEnd(newTranslation.x > 0 ? 'left' : 'right');
        } else if (Math.abs(newTranslation.y) > threshold) {
            handleDragEnd(newTranslation.y > 0 ? 'up' : 'down');
        }
    }, [isDragging, startPos, threshold]);

    const handleMouseUp = useCallback(() => {
        if (isDragging) {
            setIsDragging(false);
            setTranslation({ x: 0, y: 0 });
        }
    }, [isDragging]);

    const handleDragEnd = useCallback((direction) => {
        setIsDragging(false);
        setTranslation({ x: 0, y: 0 });
        onDragEnd(direction);
    }, [onDragEnd]);

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    return (
        <div
            ref={panelRef}
            className="draggable-panel"
            style={{
                cursor: isDragging ? 'grabbing' : 'grab',
                transform: `translate(${translation.x}px, ${translation.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                userSelect: 'none',
            }}
            onMouseDown={handleMouseDown}
        >
            {children}
        </div>
    );
};

const Panel = ({ data, opacity, type, name, location, left, right, up, down, setCurrent}) => {

    const directions = {left, right, up, down}
    console.log(data)
    const details = type === "series" ? <SeriesPanelContents data={data}/> :
        type === "artwork" ? <ArtworkPanelContents data={data}/> : <ArtworkDetailsPanelContents data={data}/>

    const handleDragEnd = (direction) => {
        console.log(`Panel was dragged ${direction}`);
        // Add your logic here
        if (directions[direction] !== null && directions[direction][1] !== null) {
            setCurrent(directions[direction])
        }
    };

    return (
        <div className="panel" style={{left:`${100 * location[0]}%`, top:`${100 * location[1]}%`, opacity:`${opacity}%`}}>
            <DraggablePanel onDragEnd={handleDragEnd} threshold={100}>
                <div className="panelContents" >

                    {details}


                    {/*<br/>*/}
                    <div>
                        <button className="up" onClick={()=>{setCurrent(up)}} disabled={up == null || up[1] == null}>
                            UP
                        </button>
                        <br/>
                        <button className="left" onClick={()=>{setCurrent(left)}} disabled={left == null || left[1] == null}>
                            LEFT
                        </button>
                        <button className="right" onClick={()=>{setCurrent(right)}} disabled={right == null || right[1] == null}>
                            RIGHT
                        </button>
                        <br/>
                        <button className="down" onClick={()=>{setCurrent(down)}} disabled={down == null || down[1] == null}>
                            DOWN
                        </button>
                    </div>
                </div>
            </DraggablePanel>

        </div>
    )
}

const Gallery = () => {
    const [galleryData, setGalleryData] = useState(null);
    const [current, setCurrent] = useState(null)
    const [currentPanels, setCurrentPanels] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/getGalleryData');
            const data = await response.json();
            setGalleryData(data);
            const panelData = []


            data.pieces.map((piece, index) => {
                panelData.push({
                    data: piece,
                    type: "artwork",
                    artworkId : piece.artworkId,
                    seriesId : piece.seriesId,
                    self : ["artwork", piece.seriesId, piece.artworkId],
                    up: ["artwork", piece.seriesId, piece.lastArtworkId],
                    down: ["artwork", piece.seriesId, piece.nextArtworkId],
                    left: ["series", piece.seriesId, piece.seriesId],
                    right: ["artwork details", piece.seriesId, piece.artworkId],
                })
                panelData.push({
                    data: piece,
                    type: "artwork details",
                    artworkId : piece.artworkId,
                    seriesId : piece.seriesId,
                    self : ["artwork details",  piece.seriesId, piece.artworkId],
                    up: null,
                    down: null,
                    left: ["artwork", piece.seriesId, piece.artworkId],
                    right: null,

                })
            })
            data.series.map((series, index) => {
                console.log(series.lastSeriesId)
                console.log(series.nextSeriesId)

                panelData.push({
                    data: series,
                    type: "series",
                    artworkId : series.firstArtworkId,
                    seriesId : series.seriesId,
                    self : ["series", series.seriesId, series.firstArtworkId],
                    up: data.series[series.lastSeriesId] != null ? ["series", series.lastSeriesId, data.series[series.lastSeriesId].firstArtworkId] : null,
                    down: data.series[series.nextSeriesId] != null ? ["series", series.nextSeriesId, data.series[series.nextSeriesId].firstArtworkId] : null,
                    right: ["artwork", series.seriesId, series.firstArtworkId],
                    left: null
                })
            })


            setCurrentPanels(panelData)
            setCurrent(panelData[0].self)
        };
        fetchData();
    }, []);


    if (!galleryData) return <div>Loading...</div>;

    // const seriesIndex = current[0] === "series" ? current.data
    const artworkIndex = 0


    return (
        <div className="container" style={{height: "80vh"}}>
            <div className="gallery">
                <div className="container">
                    {currentPanels.map((paneldata, index) => {
                        var location = [0, 0]
                        const order = ["series", "artwork", "artwork details"]
                        // console.log(current)
                        const xDif = order.indexOf(paneldata.type) - order.indexOf(current[0])
                        const yDif = paneldata.type === "series" ?
                            paneldata.seriesId - current[1]
                            :
                            paneldata.artworkId - current[2]

                        // const opacity = paneldata.type === "series" || paneldata.seriesId === current.seriesId ? 100 : 25
                        // const opacity = 100
                        const isFocused = (current[0] === "series" && paneldata.type === "series" && paneldata.seriesId === current[1])
                            || (current[0] === "artwork" && paneldata.type === "artwork" && paneldata.artworkId === current[2])
                            || (current[0] === "artwork details" && paneldata.type === "artwork details" && paneldata.artworkId === current[2])

                        const opacity = isFocused ? 100 : 0

                        location = [xDif, yDif]

                        return <Panel key={paneldata.data.name + "_" + index}
                                      type={paneldata.type}
                                      data={paneldata.data} opacity={opacity}
                                      name={paneldata.type + ":" + paneldata.data.name}
                                      left={paneldata.left} right={paneldata.right}
                                      up={paneldata.up} down={paneldata.down}
                                      location={location} setCurrent={setCurrent}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
