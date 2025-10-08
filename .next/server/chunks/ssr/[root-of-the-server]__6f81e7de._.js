module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/punycode [external] (punycode, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}),
"[project]/src/lib/supabaseServer.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/supabaseServer.ts – Async Supabase server client helper (best practice: Wrap for Next 15 async cookies – fixes sync-dynamic-apis warnings; centralized for reuse in actions/layout; added autoRefresh false to avoid sets in components)
__turbopack_context__.s([
    "createSupabaseServerClient",
    ()=>createSupabaseServerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function createSupabaseServerClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(); // Logic: Await dynamic cookies (Next 15 requirement – avoids sync errors)
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://jlfzqgusjumvlcwlglhz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZnpxZ3VzanVtdmxjd2xnbGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzA0OTcsImV4cCI6MjA3NDY0NjQ5N30.Lsh5WbxrNnYeYr2MxN4ExvhIQ3q-oU_EtLAdPfCUUBQ"), {
        auth: {
            autoRefreshToken: false,
            persistSession: false
        },
        cookies: {
            get (name) {
                return cookieStore.get(name)?.value; // Logic: Sync get after await (safe)
            },
            set (name, value, options) {
                try {
                    cookieStore.set({
                        name,
                        value,
                        ...options
                    }); // Logic: No await needed (set is sync)
                } catch (error) {
                // The `set` method was called from a Server Action. Ignore – middleware will refresh session on next request.
                // Logic: No logging here (expected noise in Next.js 15+ with Supabase SSR during token refresh attempts; the try-catch safely ignores it per docs – unblocks cleanly without clutter; push back: If debugging needed, add console.warn only in dev via process.env.NODE_ENV)
                }
            },
            remove (name, options) {
                try {
                    cookieStore.set({
                        name,
                        value: '',
                        ...options
                    }); // Logic: Remove via empty set
                } catch (error) {
                // Ignored as above
                }
            }
        }
    });
}
}),
"[project]/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/actions.ts – Updated with async Supabase (align with layout fix; keeps Propstream CSV ready – test upload post-restart; fixed notes type by disabling dynamicTyping and explicit conversions – best practice: Treat CSV as strings to avoid surprises, manually Number() numerics for safety/scalability in imports/quests)
/* __next_internal_action_entry_do_not_use__ [{"00315b03f56c36afe12dfeb5c652abd33bef4e3415":"signOutAction","40466bc412b189907900eb342e636f8842c72e0114":"pollImportStatus","406fe66154764a470bd2e6892cbf6564e8ba792062":"importDataAction","4079d682f668d9e609513a443751f3f25df63679e8":"dialLeadAction","40c51dafa413642fae5ba42f7a583d85c55e72290c":"signInAction","40de287e4a19bf59e275536cc07c5d930ec2748f64":"enrichLeadRealtor"},"",""] */ __turbopack_context__.s([
    "dialLeadAction",
    ()=>dialLeadAction,
    "enrichLeadRealtor",
    ()=>enrichLeadRealtor,
    "importDataAction",
    ()=>importDataAction,
    "pollImportStatus",
    ()=>pollImportStatus,
    "signInAction",
    ()=>signInAction,
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)"); // Your DB client (async-safe in actions)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>"); // Server redirect (reliable – no client hacks; best for post-auth flow to dashboard quests)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$5$2e$3$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/papaparse@5.5.3/node_modules/papaparse/papaparse.js [app-rsc] (ecmascript)"); // Logic: CSV parser (handles headers, errors – best for Propstream exports)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$twilio$40$5$2e$10$2e$2$2f$node_modules$2f$twilio$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/index.js [app-rsc] (ecmascript)"); // Logic: Twilio SDK for outbound calls (inexpensive, reliable integration)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.1.11/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>"); // Validation (type-safe inputs – prevents junk data in DB; no-brainer for prod)
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)"); // Built-in hash (no extra deps – for address_hash dedup)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseServer.ts [app-rsc] (ecmascript)"); // Use async helper (fixes warnings in actions too)
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"](); // Global instance (efficient in Next.js actions – auto-closes; push back: Cache in lib/prisma.ts for hot reloads if issues)
const twilioClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$twilio$40$5$2e$10$2e$2$2f$node_modules$2f$twilio$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); // Logic: Init Twilio (guard env in prod)
const importSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    source: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal('propstream')
}); // Logic: Zod for form (file handled separately)
async function signInAction(formData) {
    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    // ... (add your validation/error returns here; e.g., zod schema for email/password)
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])(); // Logic: Async client (Next 15 safe)
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) {
        return {
            error: error.message
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard'); // Logic: Post-login to HQ (quests await!)
}
async function signOutAction() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])(); // Logic: Async client (consistent fix)
    await supabase.auth.signOut(); // Logic: Clears session (middleware will redirect unauthed requests)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/auth/signin'); // Logic: Post-signout flow (back to login – update to '/' if public landing needed)
}
async function importDataAction(formData) {
    const validated = importSchema.safeParse({
        source: formData.get('source')?.toString() ?? 'propstream'
    });
    if (!validated.success) {
        return {
            error: validated.error.format()
        };
    }
    const file = formData.get('file'); // Logic: Get uploaded CSV (from dropzone/form)
    if (!file) {
        return {
            error: 'No file uploaded'
        };
    }
    const enrichRealtors = formData.get('enrichRealtors') === 'true'; // New: Optional flag from checkbox (default false)
    // Parse CSV (papaparse – async, handles large files stream-like)
    const csvText = await file.text();
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$papaparse$40$5$2e$5$2e$3$2f$node_modules$2f$papaparse$2f$papaparse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].parse(csvText, {
        header: true,
        skipEmptyLines: true,
        dynamicTyping: false
    }); // Fix: Disable dynamicTyping (all fields as strings – avoids number surprises like notes:1 as Int; explicit Number() below for numerics)
    if (parsed.errors.length > 0) {
        return {
            error: `CSV parse errors: ${parsed.errors.map((e)=>e.message).join('; ')}`
        }; // Logic: Early feedback (e.g., malformed rows)
    }
    const rows = parsed.data; // Logic: Typed rows (Propstream columns like 'Property Address', 'AVM', etc.)
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])(); // Logic: Hoist session fetch (efficiency – avoids per-row calls)
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user.id) {
        return {
            error: 'No session – login required'
        };
    }
    const results = await Promise.allSettled(rows.map(async (row, index)=>{
        try {
            // Map Propstream columns to schema (flexible – handle variants/missing; added equity/mortgage for creative financing)
            const propertyTypeMap = {
                'single family': 'single_family',
                'multi family': 'multi_family',
                'condo': 'condo',
                'townhouse': 'townhouse',
                'land': 'land',
                'commercial': 'commercial',
                'duplex (2 units, any combination)': 'multi_family'
            };
            const address = row['Address']?.trim() || null; // Logic: Trim (now strings)
            const city = row['City']?.trim() || null;
            const state = row['State']?.toUpperCase() || null; // Standardize to uppercase (e.g., 'FL' → 'FL')
            const zip_code = row['Zip']?.trim() || null; // Keep as string for leading zeros
            if (!address || !city || !state || !zip_code) {
                throw new Error('Missing required address fields');
            }
            const address_hash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(`${address}${city}${state}${zip_code}`.toLowerCase()).digest('hex'); // Logic: Normalized hash for dedup (lowercase for consistency)
            const propertyData = {
                address,
                city,
                state,
                zip_code,
                property_type: propertyTypeMap[row['Property Type']?.toLowerCase() || ''] || 'other',
                bedrooms: Number(row['Bedrooms']) || null,
                bathrooms: Number(row['Total Bathrooms']) || null,
                square_feet: Number(row['Building Sqft']) || null,
                year_built: Number(row['Effective Year Built']) || null,
                avm: Number(row['Est. Value']) || null,
                owner_occupied: row['Owner Occupied']?.toLowerCase() === 'yes' ? true : row['Owner Occupied']?.toLowerCase() === 'no' ? false : null,
                distress_signals: row['Foreclosure Factor'] ? {
                    foreclosure: row['Foreclosure Factor']
                } : null,
                notes: row['Marketing Lists'] || null,
                equity: Number(row['Est. Equity']) || null,
                remaining_balance: Number(row['Est. Remaining balance of Open Loans']) || null,
                loan_to_value: Number(row['Est. Loan-to-Value']) || null,
                open_loans: Number(row['Total Open Loans']) || null,
                metadata: {}
            };
            // Upsert property (dedup on hash – merge data)
            const property = await prisma.properties.upsert({
                where: {
                    address_hash
                },
                update: propertyData,
                create: {
                    ...propertyData,
                    address_hash
                }
            });
            // Parse owner names (split first/last if combined; for owner leads)
            const owner1First = row['Owner 1 First Name']?.trim() || null;
            const owner1Last = row['Owner 1 Last Name']?.trim() || null;
            const phone = row['Owner 1 Phone']?.trim() || null; // Assuming CSV has phone; add if present
            const email = row['Owner 1 Email']?.trim() || null; // Add if CSV has email
            const leadData = {
                properties_id: property.id,
                lead_type: 'owner',
                first_name: owner1First,
                last_name: owner1Last,
                phone,
                email,
                status: 'new',
                source: 'propstream_import',
                assigned_to: session.user.id,
                points_earned: 1,
                notes: row['Notes'] || null,
                metadata: {
                    imported_at: new Date(),
                    county: row['County'] || null
                }
            };
            // Create lead (no unique – allow multiples per property if needed; pushback: Add unique constraint if 1:1 desired)
            const lead = await prisma.leads.create({
                data: leadData
            });
            // New: Optional auto-enrich (gate with env to avoid bulk costs; pushback: Serial for simplicity, but if slow, add batch/queue later with Upstash)
            if (enrichRealtors && process.env.ENABLE_AUTO_ENRICH === 'true') {
                await enrichLeadRealtor(lead.id); // Call existing (handles errors internally – log, don't fail import)
            }
            return {
                success: true,
                row: index + 1,
                leadId: lead.id
            }; // For results list
        } catch (error) {
            console.error(`Import error for row ${index + 1}:`, error);
            return {
                success: false,
                row: index + 1,
                error: error.message
            };
        }
    }));
    // Filter fulfilled/rejected for summary (UX: Show counts in results)
    const successful = results.filter((r)=>r.status === 'fulfilled' && r.value.success).length;
    const failed = results.length - successful;
    // New: Trigger quests (after all imports – use transaction for atomic points/quests; best practice to prevent races)
    if (successful > 0) {
        await prisma.$transaction(async (tx)=>{
            // Get profile (by user_id from session)
            const profile = await tx.profile.findUnique({
                where: {
                    user_id: session.user.id
                }
            });
            if (!profile) throw new Error('Profile not found');
            // Increment points (1 per successful lead; ties to leads.points_earned but aggregates to profile)
            await tx.profile.update({
                where: {
                    user_id: session.user.id
                },
                data: {
                    points: {
                        increment: successful
                    }
                }
            });
            // Get active quests (for this user – check incomplete)
            const quests = await tx.quest.findMany({
                where: {
                    active: true
                }
            });
            for (const quest of quests){
                // Check if already completed (unique constraint prevents dupes)
                const existingCompletion = await tx.quest_completions.findUnique({
                    where: {
                        quest_id_profile_id: {
                            quest_id: quest.id,
                            profile_id: profile.id
                        }
                    }
                });
                if (existingCompletion) continue;
                // Parse criteria and check (basic for min_imports; expand for other types like min_calls)
                const criteria = quest.criteria;
                if (criteria?.min_imports) {
                    // Count total imports for user (ever; for one_time – adjust for daily/weekly with date filters)
                    const totalImports = await tx.leads.count({
                        where: {
                            assigned_to: profile.id,
                            source: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["LeadSource"].propstream_import
                        }
                    });
                    if (totalImports >= criteria.min_imports) {
                        // Complete quest (award extra points)
                        await tx.quest_completions.create({
                            data: {
                                quest_id: quest.id,
                                profile_id: profile.id,
                                evidence: {
                                    total_imports: totalImports,
                                    awarded_points: quest.points
                                }
                            }
                        });
                        await tx.profile.update({
                            where: {
                                id: profile.id
                            },
                            data: {
                                points: {
                                    increment: quest.points
                                }
                            }
                        });
                    // Optional: Unlock badge if requirements met (e.g., check badges.requirements – add similar loop if needed)
                    }
                }
            // Expand: Add cases for other criteria (e.g., if (criteria.min_calls) { count calls... })
            }
        });
    }
    if (failed === results.length) {
        return {
            error: 'All rows failed – check CSV format/console logs'
        };
    }
    return {
        success: true,
        results,
        summary: {
            successful,
            failed
        }
    }; // Logic: Return array for display (no jobId yet; pushback: For long-running, add Upstash/edge func + return jobId for poll)
}
async function pollImportStatus(jobId) {
    // Stub logic: Simulate progress (e.g., from memory or DB; here, random increment for testing)
    // In real, query prisma.import_jobs.findUnique({ where: { id: jobId } }) for { progress, results, error }
    const simulatedProgress = Math.min(100, Math.random() * 20 + (await new Promise((r)=>setTimeout(r, 500)) || 0)); // Fake delay/increment
    if (simulatedProgress >= 100) {
        return {
            progress: 100,
            results: [],
            error: null
        }; // Replace with real results
    }
    return {
        progress: simulatedProgress,
        results: [],
        error: null
    };
}
async function dialLeadAction(leadId) {
    try {
        const lead = await prisma.leads.findUnique({
            where: {
                id: leadId
            },
            include: {
                properties: true
            }
        });
        if (!lead?.phone) {
            throw new Error('No phone for lead');
        }
        const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])(); // Logic: Async client
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user.id || lead.assigned_to !== session.user.id) {
            throw new Error('Unauthorized or mismatched assignment');
        }
        // Twilio outbound (phone-to-phone; expand to browser via Voice SDK if web calls needed)
        const call = await twilioClient.calls.create({
            to: lead.phone,
            from: process.env.TWILIO_PHONE_NUMBER,
            url: 'http://your-domain.com/api/twiml',
            statusCallback: 'http://your-domain.com/api/call-status',
            statusCallbackEvent: [
                'initiated',
                'ringing',
                'answered',
                'completed'
            ]
        });
        // Log call (for metrics/quests – expand with webhook for duration/points)
        await prisma.calls.create({
            data: {
                leads_id: lead.id,
                caller_id: session.user.id,
                call_sid: call.sid,
                status: 'initiated',
                metadata: {
                    address: lead.properties.address
                }
            }
        });
        return {
            success: true,
            callId: call.sid
        };
    } catch (error) {
        console.error('Dial error:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
async function enrichLeadRealtor(leadId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])(); // Logic: Async client
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user.id) {
        return {
            error: 'No session'
        };
    }
    const lead = await prisma.leads.findUnique({
        where: {
            id: leadId
        },
        include: {
            properties: true
        }
    });
    if (!lead || lead.assigned_to !== session.user.id) {
        return {
            error: 'Unauthorized or lead not found'
        };
    }
    const fullAddress = `${lead.properties.address}, ${lead.properties.city}, ${lead.properties.state} ${lead.properties.zip_code}`; // New: Full query for better API accuracy (fixes partial address issues)
    console.log(`Enriching lead ${leadId} with query: ${fullAddress}`); // New: Log the input query for verification
    try {
        const response = await fetch('https://realtor-com4.p.rapidapi.com/properties/v1/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                'x-rapidapi-host': 'realtor-com4.p.rapidapi.com'
            },
            body: JSON.stringify({
                location: fullAddress,
                limit: 1
            })
        });
        console.log(`API response status: ${response.status}`); // New: Log status (e.g., 200 ok, 404 no match, 401 bad key)
        if (!response.ok) {
            console.log(`API error details: ${await response.text()}`); // New: Log error body if not ok (e.g., rate limit or invalid params)
            return {
                error: `API error: ${response.status}`
            };
        }
        const data = await response.json();
        console.log('Raw API response data:', JSON.stringify(data, null, 2)); // New: Log full response (inspect structure for agents)
        const realtor = data.properties?.[0]?.listing_agent || {}; // New: Alternate parsing (common in Realtor APIs; fallback to {} if no match – adjust if logs show different path, e.g., data.agents?.[0])
        console.log('Parsed realtor:', realtor); // New: Log what we're extracting (e.g., empty if no match)
        await prisma.leads.update({
            where: {
                id: leadId
            },
            data: {
                realtor_first_name: realtor.first_name || null,
                realtor_last_name: realtor.last_name || null,
                realtor_phone: realtor.phone || null,
                metadata: {
                    ...typeof lead.metadata === 'object' && lead.metadata !== null ? lead.metadata : {},
                    enriched_at: new Date(),
                    api_source: 'realtor-com'
                }
            }
        });
        return {
            success: true,
            realtor
        };
    } catch (error) {
        console.error('Enrich error:', error);
        return {
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signInAction,
    signOutAction,
    importDataAction,
    pollImportStatus,
    dialLeadAction,
    enrichLeadRealtor
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signInAction, "40c51dafa413642fae5ba42f7a583d85c55e72290c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOutAction, "00315b03f56c36afe12dfeb5c652abd33bef4e3415", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(importDataAction, "406fe66154764a470bd2e6892cbf6564e8ba792062", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(pollImportStatus, "40466bc412b189907900eb342e636f8842c72e0114", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(dialLeadAction, "4079d682f668d9e609513a443751f3f25df63679e8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(enrichLeadRealtor, "40de287e4a19bf59e275536cc07c5d930ec2748f64", null);
}),
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/prisma.ts – Prisma singleton (best practice: Avoids new instances per request – reduces latency/overhead for quest updates; push back: Raw imports risk exhaustion on Supabase as reps grow)
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
let prisma;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if (!globalThis.prisma) {
        globalThis.prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"](); // Dev: Global persists across HMR (hot reload – no reconnections on code changes)
    }
    prisma = globalThis.prisma;
}
const __TURBOPACK__default__export__ = prisma;
 // Logic: Export for server use (type-safe, e.g., prisma.profile.findUnique autocompletes points/role)
}),
"[project]/src/components/ui/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Sidebar() from the server but Sidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "Sidebar");
const SidebarContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarContent() from the server but SidebarContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarContent");
const SidebarFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarFooter() from the server but SidebarFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarFooter");
const SidebarGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroup() from the server but SidebarGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarGroup");
const SidebarGroupAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupAction() from the server but SidebarGroupAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarGroupAction");
const SidebarGroupContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupContent() from the server but SidebarGroupContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarGroupContent");
const SidebarGroupLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupLabel() from the server but SidebarGroupLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarGroupLabel");
const SidebarHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarHeader() from the server but SidebarHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarHeader");
const SidebarInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInput() from the server but SidebarInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarInput");
const SidebarInset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInset() from the server but SidebarInset is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarInset");
const SidebarMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenu() from the server but SidebarMenu is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenu");
const SidebarMenuAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuAction() from the server but SidebarMenuAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuAction");
const SidebarMenuBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuBadge() from the server but SidebarMenuBadge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuBadge");
const SidebarMenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuButton() from the server but SidebarMenuButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuButton");
const SidebarMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuItem() from the server but SidebarMenuItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuItem");
const SidebarMenuSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSkeleton() from the server but SidebarMenuSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSkeleton");
const SidebarMenuSub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSub() from the server but SidebarMenuSub is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSub");
const SidebarMenuSubButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubButton() from the server but SidebarMenuSubButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSubButton");
const SidebarMenuSubItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubItem() from the server but SidebarMenuSubItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSubItem");
const SidebarProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarProvider() from the server but SidebarProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarProvider");
const SidebarRail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarRail() from the server but SidebarRail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarRail");
const SidebarSeparator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarSeparator() from the server but SidebarSeparator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarSeparator");
const SidebarTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarTrigger() from the server but SidebarTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "SidebarTrigger");
const useSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSidebar() from the server but useSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx <module evaluation>", "useSidebar");
}),
"[project]/src/components/ui/sidebar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Sidebar() from the server but Sidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "Sidebar");
const SidebarContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarContent() from the server but SidebarContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarContent");
const SidebarFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarFooter() from the server but SidebarFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarFooter");
const SidebarGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroup() from the server but SidebarGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarGroup");
const SidebarGroupAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupAction() from the server but SidebarGroupAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarGroupAction");
const SidebarGroupContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupContent() from the server but SidebarGroupContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarGroupContent");
const SidebarGroupLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupLabel() from the server but SidebarGroupLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarGroupLabel");
const SidebarHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarHeader() from the server but SidebarHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarHeader");
const SidebarInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInput() from the server but SidebarInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarInput");
const SidebarInset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInset() from the server but SidebarInset is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarInset");
const SidebarMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenu() from the server but SidebarMenu is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenu");
const SidebarMenuAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuAction() from the server but SidebarMenuAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuAction");
const SidebarMenuBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuBadge() from the server but SidebarMenuBadge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuBadge");
const SidebarMenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuButton() from the server but SidebarMenuButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuButton");
const SidebarMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuItem() from the server but SidebarMenuItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuItem");
const SidebarMenuSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSkeleton() from the server but SidebarMenuSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuSkeleton");
const SidebarMenuSub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSub() from the server but SidebarMenuSub is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuSub");
const SidebarMenuSubButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubButton() from the server but SidebarMenuSubButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuSubButton");
const SidebarMenuSubItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubItem() from the server but SidebarMenuSubItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarMenuSubItem");
const SidebarProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarProvider() from the server but SidebarProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarProvider");
const SidebarRail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarRail() from the server but SidebarRail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarRail");
const SidebarSeparator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarSeparator() from the server but SidebarSeparator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarSeparator");
const SidebarTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarTrigger() from the server but SidebarTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "SidebarTrigger");
const useSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSidebar() from the server but useSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/sidebar.tsx", "useSidebar");
}),
"[project]/src/components/ui/sidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP – updated for async Supabase) 
// Logic: Integrated Shadcn Sidebar (fixed left nav – always visible on desktop; rounded/shadowed container for app-like feel). Kept session/header; content wrapped in <SidebarProvider> (flex sibling). Menu structure per spec (mains + Data submenu). Icons via Lucide (Heroicons equiv). No removals – additive for navigation. 
// Fix: Wrapped sidebar + main in <SidebarProvider> (context for useSidebar hook – fixes "must be used within SidebarProvider" error; best practice per Shadcn docs). No other changes. 
// Update: Refactored to match Shadcn demo style – used nav items array for reusability (best practice; easy to add icons/submenus/roles), added SidebarInset for main (auto-handles padding/collapse), extracted header to DashboardHeader component (with search/user for demo match). Added stroke="currentColor" to icons (fixes visibility in custom themes). 
// Fix for runtime error: Reformatted asChild usages to have no whitespace/newlines around the child element (prevents text nodes, ensuring single React element child for Radix Slot – common fix per docs/forums; no-brainer to avoid "React.Children.only" error without changing structure). 
__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/award.js [app-rsc] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/building.js [app-rsc] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/database.js [app-rsc] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/house.js [app-rsc] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-rsc] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/settings.js [app-rsc] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-rsc] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.544.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/actions.ts [app-rsc] (ecmascript)"); // Import server action (bound for form) 
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)"); // Shared singleton 
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseServer.ts [app-rsc] (ecmascript)"); // Import async helper (fixes warnings) 
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sidebar.tsx [app-rsc] (ecmascript)"); // Added Sub components for non-accordion submenus if needed 
(()=>{
    const e = new Error("Cannot find module '@/components/uioDashboardHeader'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
// New: Nav items array (best practice for demo-style – reusable, easy to map with icons/sub; your menu preserved) 
const navItems = [
    {
        title: 'Home',
        href: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        title: 'Extract',
        href: "/extract",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        title: 'Dialer',
        href: "/dialer",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
    },
    {
        title: 'Achievement Gallery',
        href: "/achievements",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
    },
    {
        title: 'Shop',
        href: "/shop",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"]
    },
    {
        title: 'Data',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"],
        subItems: [
            {
                title: 'Leads',
                href: "/data/leads",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
            },
            {
                title: 'Properties',
                href: "/data/properties",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"]
            },
            {
                title: 'Call Metrics',
                href: "/data/calls",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"]
            }
        ]
    },
    {
        title: 'Settings',
        href: "/settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$544$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
async function RootLayout({ children }) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSupabaseServerClient"])();
    const { data: { user } } = await supabase.auth.getUser();
    // Fetch profile for gamification (role/points – plain data only) 
    let role = 'guest';
    let xp = 0;
    if (user?.id) {
        const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].profile.findUnique({
            where: {
                id: user.id
            }
        });
        role = profile?.role || 'rep';
        xp = profile?.points || 0;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "antialiased font-mono bg-background text-foreground dark",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarProvider"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sidebar"], {
                        variant: "sidebar",
                        collapsible: "none",
                        className: "fixed left-0 top-0 h-full w-64 bg-card shadow-md border-r",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                                className: "h-16 flex items-center px-4 border-b",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-6 rounded bg-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/layout.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Wraelen HQ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/layout.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                                            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                                    children: item.subItems ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Accordion, {
                                                        type: "single",
                                                        collapsible: true,
                                                        defaultValue: item.title,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionItem, {
                                                            value: item.title,
                                                            className: "border-none",
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionTrigger, {
                                                                    className: "py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                            className: "h-4 w-4 mr-2 stroke-current"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/layout.tsx",
                                                                            lineNumber: 63,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        " ",
                                                                        item.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/layout.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AccordionContent, {
                                                                    className: "p-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarMenuSub"], {
                                                                        children: item.subItems.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarMenuSubItem"], {
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarMenuSubButton"], {
                                                                                    asChild: true,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                                                                            href: sub.href,
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(sub.icon, {
                                                                                                    className: "h-4 w-4 mr-2 stroke-current"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/layout.tsx",
                                                                                                    lineNumber: 71,
                                                                                                    columnNumber: 63
                                                                                                }, this),
                                                                                                sub.title
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/layout.tsx",
                                                                                            lineNumber: 71,
                                                                                            columnNumber: 41
                                                                                        }, this),
                                                                                        " "
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/layout.tsx",
                                                                                    lineNumber: 70,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            }, sub.title, false, {
                                                                                fileName: "[project]/src/app/layout.tsx",
                                                                                lineNumber: 69,
                                                                                columnNumber: 37
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/layout.tsx",
                                                                        lineNumber: 67,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/layout.tsx",
                                                                    lineNumber: 66,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/layout.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/layout.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 27
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                                        asChild: true,
                                                        className: "py-2 text-sm",
                                                        children: [
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Link, {
                                                                href: item.href,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                        className: "h-4 w-4 mr-2 stroke-current"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/layout.tsx",
                                                                        lineNumber: 81,
                                                                        columnNumber: 52
                                                                    }, this),
                                                                    item.title
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/layout.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 29
                                                            }, this),
                                                            " "
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/layout.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 27
                                                    }, this)
                                                }, item.title, false, {
                                                    fileName: "[project]/src/app/layout.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/layout.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/layout.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                                className: "p-4 border-t",
                                children: [
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOutAction"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                                            variant: "ghost",
                                            type: "submit",
                                            className: "w-full justify-start",
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/layout.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col min-h-screen",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardHeader, {
                                role: role,
                                xp: xp
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                className: "flex flex-1 flex-col p-4 lg:p-6 bg-background",
                                children: [
                                    " ",
                                    children
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6f81e7de._.js.map