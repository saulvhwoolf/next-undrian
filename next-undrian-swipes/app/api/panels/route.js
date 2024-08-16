import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const direction = searchParams.get('direction');
    const currentId = searchParams.get('currentId');

    const jsonPath = path.join(process.cwd(), 'data', 'panels.json');
    const jsonData = await fs.readFile(jsonPath, 'utf-8');
    const allPanels = JSON.parse(jsonData);

    let centerIndex = allPanels.findIndex(panel => panel.id === currentId);
    if (centerIndex === -1) centerIndex = 0;

    const getAdjacentPanel = (offset) => {
        const index = (centerIndex + offset + allPanels.length) % allPanels.length;
        return allPanels[index];
    };

    if (direction) {
        switch (direction) {
            case 'right':
                centerIndex = (centerIndex + 1) % allPanels.length;
                break;
            case 'left':
                centerIndex = (centerIndex - 1 + allPanels.length) % allPanels.length;
                break;
            case 'up':
                centerIndex = (centerIndex - 2 + allPanels.length) % allPanels.length;
                break;
            case 'down':
                centerIndex = (centerIndex + 2) % allPanels.length;
                break;
        }
    }

    const response = {
        center: allPanels[centerIndex],
        top: getAdjacentPanel(-2),
        bottom: getAdjacentPanel(2),
        left: getAdjacentPanel(-1),
        right: getAdjacentPanel(1),
    };

    return NextResponse.json(response);
}
