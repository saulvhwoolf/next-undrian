import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'public/data');

export function getPortfolioData() {
    const fullPath = path.join(dataDirectory, 'portfolio_data.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
}

export function getAllArtworkIds() {
    const data = getPortfolioData();
    return data.pieces.map(piece => ({
        params: { id: piece.id }
    }));
}

export function getArtworkData(id) {
    const data = getPortfolioData();
    return data.pieces.find(piece => piece.id === id);
}

export function getSeriesData(name) {
    const data = getPortfolioData();
    return data.series.find(series => series.name === name);
}

export function getArtworksForSeries(name) {
    const data = getPortfolioData();
    return data.pieces.filter(piece => piece.series === name);
}

export function getNextAndPreviousArtwork(currentId) {
    const data = getPortfolioData();
    const allPieces = data.pieces;
    const currentIndex = allPieces.findIndex(piece => piece.id === currentId);
    const currentArtwork = allPieces[currentIndex];

    let nextIndex = (currentIndex + 1) % allPieces.length;
    let prevIndex = (currentIndex - 1 + allPieces.length) % allPieces.length;

    // If next artwork is in a different series, find the first of that series
    if (allPieces[nextIndex].series !== currentArtwork.series) {
        nextIndex = allPieces.findIndex(piece => piece.series === allPieces[nextIndex].series);
    }

    // If previous artwork is in a different series, find the last of that series
    if (allPieces[prevIndex].series !== currentArtwork.series) {
        prevIndex = allPieces.findLastIndex(piece => piece.series === allPieces[prevIndex].series);
    }

    return {
        next: {
            id: allPieces[nextIndex].id,
            name: allPieces[nextIndex].name,
            series: allPieces[nextIndex].series
        },
        previous: {
            id: allPieces[prevIndex].id,
            name: allPieces[prevIndex].name,
            series: allPieces[prevIndex].series
        },
        currentSeries: currentArtwork.series
    };
}

export function getAllArtworksForTimeline() {
    const data = getPortfolioData();
    return data.pieces.sort((a, b) => {
        return new Date(b.date.year, b.date.month || 0, 1) -
            new Date(a.date.year, a.date.month || 0, 1);
    });
}

export function getAllSeries() {
    const data = getPortfolioData();
    return data.series;
}

export function getSeriesPreviewImage(seriesName) {
    const data = getPortfolioData();
    const seriesPiece = data.pieces.find(piece => piece.series === seriesName);
    return seriesPiece ? seriesPiece.previewImage : null;
}
