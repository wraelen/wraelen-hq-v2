(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/actions.ts (continued) – Add extraction here – best practice: Centralize mutations for scalability; push back: API-first for compliance/TOS, scrape fallback with anti-bot headers – handles single/batch links, merges via Prisma upsert
__turbopack_context__.s([
    "extractDataAction",
    ()=>extractDataAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$16$2e$2_prisma$40$6$2e$16$2e$2_typescript$40$5$2e$8$2e$3_$5f$typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@prisma+client@6.16.2_prisma@6.16.2_typescript@5.8.3__typescript@5.8.3/node_modules/@prisma/client/index-browser.js [app-client] (ecmascript)"); // Your DB client (async-safe in actions)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$12$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/axios@1.12.2/node_modules/axios/lib/axios.js [app-client] (ecmascript)"); // API/fetch (lightweight – no fetch polyfill needed)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$40$1$2e$1$2e$2$2f$node_modules$2f$cheerio$2f$dist$2f$browser$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio@1.1.2/node_modules/cheerio/dist/browser/index.js [app-client] (ecmascript) <locals>"); // HTML parse (fast/static – better than Puppeteer for Zillow; handles fallback)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$40$1$2e$1$2e$2$2f$node_modules$2f$cheerio$2f$dist$2f$browser$2f$load$2d$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio@1.1.2/node_modules/cheerio/dist/browser/load-parse.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/headers.js [app-client] (ecmascript)"); // For cookie store (secure for sessions – server-only)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/zod@4.1.11/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>"); // Validation (type-safe inputs – prevents junk data in DB; no-brainer for prod)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/compiled/crypto-browserify/index.js [app-client] (ecmascript)"); // Built-in hash (no extra deps – for address_hash dedup)
;
;
;
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$prisma$2b$client$40$6$2e$16$2e$2_prisma$40$6$2e$16$2e$2_typescript$40$5$2e$8$2e$3_$5f$typescript$40$5$2e$8$2e$3$2f$node_modules$2f40$prisma$2f$client$2f$index$2d$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrismaClient"](); // Global instance (efficient in Next.js actions – auto-closes)
const extractSchema = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    links: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'zillow',
        'propstream',
        'both'
    ]).default('zillow')
}); // Logic: Zod schema (validates formData – quick errors without DB hits)
async function extractDataAction(formData) {
    var _formData_get, _formData_get1;
    var _formData_get_toString, _formData_get_toString1;
    const validated = extractSchema.safeParse({
        links: (_formData_get_toString = (_formData_get = formData.get('links')) === null || _formData_get === void 0 ? void 0 : _formData_get.toString()) !== null && _formData_get_toString !== void 0 ? _formData_get_toString : '',
        source: (_formData_get_toString1 = (_formData_get1 = formData.get('source')) === null || _formData_get1 === void 0 ? void 0 : _formData_get1.toString()) !== null && _formData_get_toString1 !== void 0 ? _formData_get_toString1 : 'zillow'
    }); // Logic: Safe parse (returns { success, data } or { error } – client displays errors)
    if (!validated.success) {
        return {
            error: validated.error.format()
        }; // Logic: Return zod errors (e.g., "Links required" – no redirect)
    }
    const { links, source } = validated.data;
    const linkArray = links.split(',').map((l)=>l.trim()).filter(Boolean); // Logic: Batch parse (handle "url1, url2" – scalable to 10-20 max for rates)
    const results = []; // Aggregate for response (e.g., [{ leadId, success: true }])
    for (const link of linkArray){
        try {
            const extracted = await extractFromLink(link, source); // Helper below (API/scrape merge)
            const address = extracted.address || ''; // Normalize (fallback to empty – validation later)
            if (!address) throw new Error('No address extracted');
            const addressHash = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$crypto$2d$browserify$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createHash('sha256').update(address.toLowerCase()).digest('hex'); // Logic: Dedup hash (case-insensitive – prevents "123 Main" vs "123 main" dups)
            var _extracted_city, _extracted_state, _extracted_zip_code, _extracted_property_type, _extracted_bedrooms, _extracted_bathrooms, _extracted_square_feet, _extracted_lot_size, _extracted_year_built, _extracted_zestimate, _extracted_avm, _extracted_tax_assessed_value, _extracted_distress_signals, _extracted_owner_occupied, _extracted_metadata;
            // Upsert properties (merge extracted data – no-brainer for updates from re-extracts)
            const property = await prisma.properties.upsert({
                where: {
                    address_hash: addressHash
                },
                update: {
                    // Logic: Selective merge (overwrite non-null extracted fields – preserves manual edits if needed)
                    city: (_extracted_city = extracted.city) !== null && _extracted_city !== void 0 ? _extracted_city : undefined,
                    state: (_extracted_state = extracted.state) !== null && _extracted_state !== void 0 ? _extracted_state : undefined,
                    zip_code: (_extracted_zip_code = extracted.zip_code) !== null && _extracted_zip_code !== void 0 ? _extracted_zip_code : undefined,
                    property_type: (_extracted_property_type = extracted.property_type) !== null && _extracted_property_type !== void 0 ? _extracted_property_type : undefined,
                    bedrooms: (_extracted_bedrooms = extracted.bedrooms) !== null && _extracted_bedrooms !== void 0 ? _extracted_bedrooms : undefined,
                    bathrooms: (_extracted_bathrooms = extracted.bathrooms) !== null && _extracted_bathrooms !== void 0 ? _extracted_bathrooms : undefined,
                    square_feet: (_extracted_square_feet = extracted.square_feet) !== null && _extracted_square_feet !== void 0 ? _extracted_square_feet : undefined,
                    lot_size: (_extracted_lot_size = extracted.lot_size) !== null && _extracted_lot_size !== void 0 ? _extracted_lot_size : undefined,
                    year_built: (_extracted_year_built = extracted.year_built) !== null && _extracted_year_built !== void 0 ? _extracted_year_built : undefined,
                    zestimate: (_extracted_zestimate = extracted.zestimate) !== null && _extracted_zestimate !== void 0 ? _extracted_zestimate : undefined,
                    avm: (_extracted_avm = extracted.avm) !== null && _extracted_avm !== void 0 ? _extracted_avm : undefined,
                    tax_assessed_value: (_extracted_tax_assessed_value = extracted.tax_assessed_value) !== null && _extracted_tax_assessed_value !== void 0 ? _extracted_tax_assessed_value : undefined,
                    distress_signals: (_extracted_distress_signals = extracted.distress_signals) !== null && _extracted_distress_signals !== void 0 ? _extracted_distress_signals : undefined,
                    owner_occupied: (_extracted_owner_occupied = extracted.owner_occupied) !== null && _extracted_owner_occupied !== void 0 ? _extracted_owner_occupied : undefined,
                    metadata: (_extracted_metadata = extracted.metadata) !== null && _extracted_metadata !== void 0 ? _extracted_metadata : undefined
                },
                create: {
                    address,
                    city: extracted.city || '',
                    state: extracted.state || '',
                    zip_code: extracted.zip_code || '',
                    property_type: extracted.property_type || 'other',
                    bedrooms: extracted.bedrooms,
                    bathrooms: extracted.bathrooms,
                    square_feet: extracted.square_feet,
                    lot_size: extracted.lot_size,
                    year_built: extracted.year_built,
                    zestimate: extracted.zestimate,
                    avm: extracted.avm,
                    tax_assessed_value: extracted.tax_assessed_value,
                    distress_signals: extracted.distress_signals,
                    owner_occupied: extracted.owner_occupied,
                    metadata: extracted.metadata,
                    address_hash: addressHash
                }
            });
            // Create lead (link to property – assign to current user via session; award base points)
            const cookieStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookies"])(); // Logic: Reuse your Supabase client setup for session fetch (consistent with signInAction)
            const supabase = createServerClient(("TURBOPACK compile-time value", "https://jlfzqgusjumvlcwlglhz.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsZnpxZ3VzanVtdmxjd2xnbGh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwNzA0OTcsImV4cCI6MjA3NDY0NjQ5N30.Lsh5WbxrNnYeYr2MxN4ExvhIQ3q-oU_EtLAdPfCUUBQ"), {
                cookies: {
                    getAll: ()=>cookieStore.getAll(),
                    setAll: (cookiesToSet)=>{
                        try {
                            cookiesToSet.forEach((param)=>{
                                let { name, value, options } = param;
                                return cookieStore.set(name, value, options);
                            });
                        } catch (e) {
                        // Ignore set in action
                        }
                    }
                }
            });
            const { data: { user } } = await supabase.auth.getUser(); // Logic: Switch to getUser() (secure – verifies with server, fixes warning; returns user or null)
            if (!(user === null || user === void 0 ? void 0 : user.id)) {
                return {
                    error: 'No active user – login required for assignment'
                }; // Logic: Guard (push back: Or default to admin UUID for testing)
            }
            const lead = await prisma.leads.create({
                data: {
                    properties_id: property.id,
                    lead_type: extracted.lead_type || 'owner',
                    first_name: extracted.first_name,
                    last_name: extracted.last_name,
                    phone: extracted.phone,
                    source: extracted.source || source,
                    metadata: {
                        original_link: link,
                        extracted_data: extracted
                    },
                    assigned_to: user.id,
                    points_earned: 10
                }
            });
            results.push({
                leadId: lead.id,
                success: true
            }); // For client display (e.g., "Imported lead X")
        } catch (error) {
            results.push({
                link,
                success: false,
                error: error.message
            }); // Per-link feedback
        }
    }
    return {
        results
    }; // Logic: Return array (client loops to show success/errors – no full redirect for batch UX)
}
// Helper: Extract from single link (logic: Source switch → API or scrape → normalize output – expandable for Propstream)
async function extractFromLink(link, source) {
    let data = {
        source,
        metadata: {
            link
        }
    }; // Base output (json-friendly)
    if (source === 'zillow' || source === 'both') {
        const zillowKey = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ZILLOW_API_KEY;
        if (zillowKey) {
            // Logic: API preferred (compliance – use RapidAPI Zillow endpoint; 403 fix: Ensure key/subscription active; example for 'zillow-com1' API – adjust per your RapidAPI choice)
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$12$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("https://zillow-com1.p.rapidapi.com/property", {
                    params: {
                        property_url: link
                    },
                    headers: {
                        'x-rapidapi-key': zillowKey,
                        'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
                    }
                });
                data = {
                    ...data,
                    ...response.data
                }; // Merge (e.g., { address, zestimate, bedrooms, ... })
                data.source = 'zillow_api'; // Track for points (bonus for API vs scrape)
            } catch (err) {
                console.error('API error:', err); // Log for debug (terminal shows 403 if key invalid/host wrong)
            } // Fallback to scrape on error
        }
        if (!data.address) {
            const { data: html } = await __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$12$2e$2$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(link, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                    'Accept-Language': 'en-US,en;q=0.9',
                    'Referer': 'https://www.zillow.com/',
                    'Upgrade-Insecure-Requests': '1',
                    'Sec-Fetch-Site': 'same-origin',
                    'Sec-Fetch-Mode': 'navigate',
                    'Sec-Fetch-User': '?1',
                    'Sec-Fetch-Dest': 'document'
                }
            }); // Anti-bot headers (mimic browser – fixes some 403; if persists, use proxy service dep like zenrows)
            const $ = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$40$1$2e$1$2e$2$2f$node_modules$2f$cheerio$2f$dist$2f$browser$2f$load$2d$parse$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["load"](html);
            // Parse selectors (customize per Zillow page – inspect element for stability; e.g., for homedetails page)
            data.address = $('[data-testid="hdp-address"]').text().trim() || '';
            data.zestimate = $('.zestimate-value').text().replace(/[^0-9]/g, '') || null; // Clean $ (parseInt later)
            data.bedrooms = parseInt($('[data-testid="bed-bath-item"]:first').text()) || null;
            // ... Add more: bathrooms, square_feet, etc. (expand as needed – test with real links)
            data.metadata.scrape_time = new Date().toISOString(); // Audit
        }
    }
    if (source === 'propstream' || source === 'both') {
        // Logic: No public API (stub for CSV upload – push back: Implement file input in form if needed; contact Propstream for integration)
        // For now: Assume manual/link parse if possible (e.g., if link is Propstream export URL – rare)
        data.avm = 0; // Mock (replace with real if API unlocked)
        data.distress_signals = {
            pre_foreclosure: false
        }; // Mock
    }
    return data; // Normalized (e.g., { address: '123 Main', zestimate: 450000, ... })
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/extract/page.tsx – Extraction form (client-side for interactivity; binds server action – best hybrid for Next.js; protected via middleware)
__turbopack_context__.s([
    "default",
    ()=>ExtractPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0_$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.63.0_react@19.1.0_/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/react-hook-form@7.63.0_react@19.1.0/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)"); // Dep not added yet? pnpm add react-hook-form @hookform/resolvers/zod (for zod integration)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/zod@4.1.11/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>"); // Shared schema (client validation duplicates server for speed – prevents bad submits)
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/src/lib/actions.ts [app-client] (ecmascript)"); // Imported action
;
var _s = __turbopack_context__.k.signature();
'use client'; // Logic: Client (hooks for state/form – no SSR overhead; push back: Full server if no batch UX needed)
;
;
;
;
;
const extractSchema = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    links: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Enter at least one link'),
    source: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'zillow',
        'propstream',
        'both'
    ])
}); // Type: Infer for form
function ExtractPage() {
    _s();
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Post-submit feedback (success/errors)
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0_$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(extractSchema),
        defaultValues: {
            source: 'zillow'
        }
    });
    const onSubmit = async (data)=>{
        setError(null);
        setResults([]);
        const formData = new FormData(); // Logic: Native for action (though useForm has data – adaptable)
        formData.append('links', data.links);
        formData.append('source', data.source);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$src$2f$lib$2f$actions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractDataAction"])(formData); // Call action
        if (result.error) {
            setError('Validation failed: ' + JSON.stringify(result.error)); // Display zod
        } else {
            setResults(result.results || []); // Show batch outcomes (e.g., "Lead X imported")
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center bg-black text-green-400 font-mono",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit(onSubmit),
            className: "p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80 w-96",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl mb-6 text-center",
                    children: "Extract Leads Quest"
                }, void 0, false, {
                    fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    ...register('links'),
                    placeholder: "Enter Zillow/Propstream links (comma-separated for batch)",
                    className: "w-full mb-4 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300"
                }, void 0, false, {
                    fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                errors.links && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 mb-4",
                    children: errors.links.message
                }, void 0, false, {
                    fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                    lineNumber: 48,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    ...register('source'),
                    className: "w-full mb-6 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "zillow",
                            children: "Zillow"
                        }, void 0, false, {
                            fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "propstream",
                            children: "Propstream"
                        }, void 0, false, {
                            fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "both",
                            children: "Both"
                        }, void 0, false, {
                            fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isSubmitting,
                    className: "w-full p-2 bg-green-500 text-black hover:bg-green-600",
                    children: isSubmitting ? 'Extracting...' : 'Start Extraction'
                }, void 0, false, {
                    fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 mt-4",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                    lineNumber: 57,
                    columnNumber: 19
                }, this),
                results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-4",
                    children: results.map((res, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: res.success ? 'text-green-400' : 'text-red-500',
                            children: res.success ? "Lead ".concat(res.leadId, " imported!") : "Error on link: ".concat(res.error)
                        }, i, false, {
                            fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/wraelen/wraelen-internal-boilerplate/src/app/extract/page.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ExtractPage, "wV1rdCpKBhheiAr+Ml5kuBYT8P4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ExtractPage;
var _c;
__turbopack_context__.k.register(_c, "ExtractPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=wraelen_wraelen-internal-boilerplate_src_ea66f791._.js.map