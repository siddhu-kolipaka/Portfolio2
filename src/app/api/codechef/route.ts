import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch("https://www.codechef.com/users/kolipakasiddhu", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch from CodeChef" }, { status: res.status });
    }

    const html = await res.text();

    // 1. Extract rating
    const ratingMatch = html.match(/class='rating'>(\d+)/i) || html.match(/class="rating">(\d+)/i);
    const highestMatch = html.match(/Highest Rating\s*(\d+)/i);
    const solvedMatch = html.match(/Total Problems Solved:\s*(\d+)/i);

    let rating = 1539;
    let maxRating = 1613;
    let solved = 159;

    if (ratingMatch) {
      rating = parseInt(ratingMatch[1], 10);
    }
    if (highestMatch) {
      maxRating = parseInt(highestMatch[1], 10);
    }
    if (solvedMatch) {
      solved = parseInt(solvedMatch[1], 10);
    }

    // 3. Determine stars and division
    let starsNum = 1;
    if (rating >= 1400 && rating < 1600) starsNum = 2;
    else if (rating >= 1600 && rating < 1800) starsNum = 3;
    else if (rating >= 1800 && rating < 2000) starsNum = 4;
    else if (rating >= 2000 && rating < 2200) starsNum = 5;
    else if (rating >= 2200 && rating < 2500) starsNum = 6;
    else if (rating >= 2500) starsNum = 7;

    const stars = `${starsNum}★ Coder`;
    const division = rating >= 1600 ? "Div 2" : "Div 3";

    let maxStarsNum = 1;
    if (maxRating >= 1400 && maxRating < 1600) maxStarsNum = 2;
    else if (maxRating >= 1600 && maxRating < 1800) maxStarsNum = 3;
    else if (maxRating >= 1800 && maxRating < 2000) maxStarsNum = 4;
    else if (maxRating >= 2000 && maxRating < 2200) maxStarsNum = 5;
    else if (maxRating >= 2200 && maxRating < 2500) maxStarsNum = 6;
    else if (maxRating >= 2500) maxStarsNum = 7;

    const maxStars = `${maxStarsNum}★ Coder`;

    return NextResponse.json({
      rating,
      maxRating,
      stars,
      maxStars,
      solved,
      division,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
