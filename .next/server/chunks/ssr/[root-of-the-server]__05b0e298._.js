module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/actions.ts – Server actions for auth (best practice: Centralize mutations – efficient, type-safe; push back: Avoid client auth for cookie sync in Next.js; scales for quests/leaderboards with RLS)
/* __next_internal_action_entry_do_not_use__ [{"407a38d049055e57702bf7faa677f55debfed4039b":"signInAction"},"",""] */ __turbopack_context__.s([
    "signInAction",
    ()=>signInAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>"); // SSR package (server-aware – auto-handles cookies via proxy; middleware refreshes post-redirect)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/headers.js [app-rsc] (ecmascript)"); // Next utility (dynamic read for session check – set ignored in actions, as middleware handles)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>"); // Server redirect (reliable – no client hacks; best for post-auth flow to dashboard quests)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://jlfzqgusjumvlcwlglhz.supabase.co"); // Logic: Required env (fail-fast if missing – matches middleware guard)
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZnpxZ3VzanVtdmxjd2xnbGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzA0OTcsImV4cCI6MjA3NDY0NjQ5N30.Lsh5WbxrNnYeYr2MxN4ExvhIQ3q-oU_EtLAdPfCUUBQ");
async function signInAction(formData) {
    const email = formData.get('email')?.toString() ?? ''; // Logic: Safe extraction (push back: Add zod here for prod validation – prevents invalid emails in rep onboarding; keeps it server-side for security)
    const password = formData.get('password')?.toString() ?? '';
    if (!email || !password) {
        return {
            error: 'Email and password are required'
        }; // Logic: Early validation return (client will display – no redirect/reload; UX-friendly for form feedback)
    }
    if (password.length < 6) {
        return {
            error: 'Password must be at least 6 characters'
        }; // Logic: Basic check (expand for strength in gamified app – e.g., tie to "security quest" badge)
    }
    const cookieStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(); // Logic: Next headers (dynamic – reads current request cookies for session check)
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(supabaseUrl, supabaseAnonKey, {
        cookies: {
            getAll: ()=>cookieStore.getAll(),
            setAll: (cookiesToSet)=>{
                try {
                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options)); // Logic: Attempts set (succeeds in components; ignored in actions via catch – middleware refreshes on redirect)
                } catch  {
                // The `set` method was called from a Server Action. Ignore – middleware will refresh session on next request.
                }
            }
        }
    });
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password
    }); // Logic: Server mutation (hashes/JWT auto – no custom logic; ties to Supabase users table for RLS on quests)
    if (error) {
        return {
            error: error.message
        }; // Logic: Return error (client handles display – e.g., "Invalid credentials"; best for debugging without reload spam)
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/dashboard'); // Logic: Success redirect (middleware now sees session – seamless to game HQ; change to '/hq' or dynamic based on rep level if needed)
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signInAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signInAction, "407a38d049055e57702bf7faa677f55debfed4039b", null);
}),
"[project]/wraelen/wraelen-internal-boilerplate/.next-internal/server/app/auth/signin/page/actions.js { ACTIONS_MODULE0 => \"[project]/wraelen/wraelen-internal-boilerplate/src/app/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/app/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/wraelen/wraelen-internal-boilerplate/.next-internal/server/app/auth/signin/page/actions.js { ACTIONS_MODULE0 => \"[project]/wraelen/wraelen-internal-boilerplate/src/app/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "407a38d049055e57702bf7faa677f55debfed4039b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signInAction"],
    "40d92fdaace826a4b14baf5b30cd6ab04e268791d4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f2e$next$2d$internal$2f$server$2f$app$2f$auth$2f$signin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/wraelen/wraelen-internal-boilerplate/.next-internal/server/app/auth/signin/page/actions.js { ACTIONS_MODULE0 => "[project]/wraelen/wraelen-internal-boilerplate/src/app/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/app/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx <module evaluation>", "default");
}),
"[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx", "default");
}),
"[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$app$2f$auth$2f$signin$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$app$2f$auth$2f$signin$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$app$2f$auth$2f$signin$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/app/auth/signin/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05b0e298._.js.map