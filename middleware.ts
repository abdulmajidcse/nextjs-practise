import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const nextUrlPathName = request.nextUrl.pathname;

  if (
    nextUrlPathName.startsWith("/register") ||
    nextUrlPathName.startsWith("/login")
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

// export const config = {
//   matcher: ["/register", "/login"],
// };
