import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "_data");
const FILE_PATH = path.join(DATA_DIR, "views.json");

function readData() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(FILE_PATH)) {
      const initialData = { views: 0, uniqueViews: 0, uniqueIds: [] as string[] };
      fs.writeFileSync(FILE_PATH, JSON.stringify(initialData, null, 2));
      return initialData;
    }
    const content = fs.readFileSync(FILE_PATH, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error("Error reading view count data:", err);
    return { views: 0, uniqueViews: 0, uniqueIds: [] as string[] };
  }
}

function writeData(data: { views: number; uniqueViews: number; uniqueIds: string[] }) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing view count data:", err);
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const clientId = url.searchParams.get("clientId");

  const data = readData();

  // Increment total views
  data.views += 1;

  if (clientId) {
    // If it's a unique client id that we haven't seen yet
    if (!data.uniqueIds.includes(clientId)) {
      data.uniqueIds.push(clientId);
      data.uniqueViews += 1;
    }
  }

  writeData(data);

  return NextResponse.json({
    views: data.views,
    uniqueViews: data.uniqueViews,
  });
}
