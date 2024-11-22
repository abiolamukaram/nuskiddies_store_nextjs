
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)'])

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req)) auth().protect()
//     // eslint-disable-next-line @typescript-eslint/no-unused-expressions
//     // publicRoutes: ["/api/:path*"]
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/forum(.*)']);

export default clerkMiddleware(async (auth, req) => {
  try {
    if (isProtectedRoute(req)) await auth.protect(); // Using await in case of async operation
    publicRoutes: ["/api/:path*"]
  } catch (error) {
    console.error("Authorization error:", error);
    throw error; // This will allow Clerk to handle it, or customize it as needed
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};


// middleware.js
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher(['/api/protected(.*)']); // Adjusted to API paths only

// export default clerkMiddleware(async (auth, req) => {
//   try {
//     if (isProtectedRoute(req)) {
//       await auth.protect(); // This protects only the API or server-side routes
//     }
//   } catch (error) {
//     console.error("Authorization error:", error);
//     throw error;
//   }
// });

// export const config = {
//   matcher: [
//     '/api/protected/(.*)', // Restrict to specific API routes if needed
//   ],
// };
