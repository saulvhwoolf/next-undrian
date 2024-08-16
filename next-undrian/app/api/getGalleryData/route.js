import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        // Define the path to your JSON file
        const dataDirectory = path.join(process.cwd(), 'public/data');
        const filePath = path.join(dataDirectory, 'portfolio_data.json');

        // Read the file
        const fileContents = await fs.promises.readFile(filePath, 'utf8');

        // Parse the JSON data
        const data = JSON.parse(fileContents);

        // console.log(data)

        // Return the data as a JSON response
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error reading gallery data:', error);
        return NextResponse.json({ error: 'Failed to load gallery data' }, { status: 500 });
    }
}
