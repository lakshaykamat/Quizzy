import { NextResponse } from "next/server";

const allowedOrigins =
  (process.env.NODE_ENV as string) === "production"
    ? [
        "https://quiz-web-app-virid.vercel.app",
        "quiz-web-app-virid.vercel.app",
        "https://www.quiz-web-app-virid.vercel.app",
        "http://localhost:3000",
        "http://localhost:3000/api/",
      ]
    : ["http://localhost:3000"];

export async function middleware(request: Request) {
  const origin = request.headers.get("origin");
  if (false) {
    return new NextResponse("Bad request", {
      status: 400,
      statusText: "Bad request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
