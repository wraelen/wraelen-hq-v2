(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__8978dbac._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/middleware.ts - Production auth with proper rate limiting
__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/createServerClient.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
;
;
// Simple in-memory cache (resets on server restart - fine for dev)
const authCache = new Map();
const CACHE_TTL = 10000; // 10 seconds cache
const MAX_CACHE_SIZE = 1000; // Prevent memory leaks
async function middleware(req) {
    // Skip middleware for static assets and auth pages
    const { pathname } = req.nextUrl;
    if (pathname.startsWith('/_next') || pathname.startsWith('/api/health') || pathname.startsWith('/auth') || pathname.includes('.') // Static files
    ) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Env guard
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    // Create Supabase client
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://jlfzqgusjumvlcwlglhz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZnpxZ3VzanVtdmxjd2xnbGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzA0OTcsImV4cCI6MjA3NDY0NjQ5N30.Lsh5WbxrNnYeYr2MxN4ExvhIQ3q-oU_EtLAdPfCUUBQ"), {
        cookies: {
            getAll: ()=>req.cookies.getAll(),
            setAll: (cookiesToSet)=>{
                cookiesToSet.forEach(({ name, value, options })=>{
                    response.cookies.set(name, value, options);
                });
            }
        }
    });
    // Check cache first (reduces Supabase calls)
    const accessToken = req.cookies.get('sb-access-token')?.value;
    const cacheKey = accessToken || 'anonymous';
    const cached = authCache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
        // Use cached result
        if (!cached.user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/auth/signin', req.url));
        }
        return response;
    }
    // Fetch fresh auth state
    try {
        const { data: { user }, error } = await supabase.auth.getUser();
        // Update cache (with size limit)
        if (authCache.size > MAX_CACHE_SIZE) {
            authCache.clear(); // Simple eviction
        }
        authCache.set(cacheKey, {
            user,
            timestamp: Date.now()
        });
        // Redirect unauthenticated users
        if (!user || error) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/auth/signin', req.url));
        }
    } catch (error) {
        console.error('Middleware auth error:', error);
        // On error, redirect to signin (safer than allowing through)
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/auth/signin', req.url));
    }
    return response;
}
const config = {
    matcher: [
        /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - auth pages
     */ '/((?!_next/static|_next/image|favicon.ico|.*\\..*|auth).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__8978dbac._.js.map