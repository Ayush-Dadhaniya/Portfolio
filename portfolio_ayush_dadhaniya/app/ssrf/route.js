
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  let result = "No url provided";
  if (url) {
    try {
      const response = await fetch(url, { method: "GET" });
      result = await response.text();
    } catch (err) {
      result = `Error fetching url: ${err.message}`;
    }
  }
  return new NextResponse(result, { status: 200 });
}