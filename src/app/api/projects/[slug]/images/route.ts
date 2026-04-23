import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

const ALLOWED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const directory = join(process.cwd(), "public", "projects", slug);

  try {
    const files = readdirSync(directory);
    const images = files
      .filter((file) => {
        const ext = file.slice(file.lastIndexOf(".")).toLowerCase();
        return ALLOWED_EXTENSIONS.has(ext);
      })
      .map((file) => `/projects/${slug}/${file}`);

    return NextResponse.json({ images });
  } catch {
    return NextResponse.json({ images: [] });
  }
}