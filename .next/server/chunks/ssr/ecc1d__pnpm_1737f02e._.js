module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+functions-js@2.5.0/node_modules/@supabase/functions-js/dist/module/helper.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFetch",
    ()=>resolveFetch
]);
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === 'undefined') {
        _fetch = (...args)=>__turbopack_context__.A("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)").then(({ default: fetch1 })=>fetch1(...args));
    } else {
        _fetch = fetch;
    }
    return (...args)=>_fetch(...args);
}; //# sourceMappingURL=helper.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+functions-js@2.5.0/node_modules/@supabase/functions-js/dist/module/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError
]);
class FunctionsError extends Error {
    constructor(message, name = 'FunctionsError', context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+functions-js@2.5.0/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionsClient",
    ()=>FunctionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+functions-js@2.5.0/node_modules/@supabase/functions-js/dist/module/helper.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+functions-js@2.5.0/node_modules/@supabase/functions-js/dist/module/types.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
class FunctionsClient {
    constructor(url, { headers = {}, customFetch, region = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionRegion"].Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveFetch"])(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     */ invoke(functionName, options = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const { headers, method, body: functionArgs, signal } = options;
                let _headers = {};
                let { region } = options;
                if (!region) {
                    region = this.region;
                }
                // Add region as query parameter using URL API
                const url = new URL(`${this.url}/${functionName}`);
                if (region && region !== 'any') {
                    _headers['x-region'] = region;
                    url.searchParams.set('forceFunctionRegion', region);
                }
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                    if (typeof Blob !== 'undefined' && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers['Content-Type'] = 'application/octet-stream';
                        body = functionArgs;
                    } else if (typeof functionArgs === 'string') {
                        // plain string
                        _headers['Content-Type'] = 'text/plain';
                        body = functionArgs;
                    } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                        // don't set content-type headers
                        // Request will automatically add the right boundary value
                        body = functionArgs;
                    } else {
                        // default, assume this is JSON
                        _headers['Content-Type'] = 'application/json';
                        body = JSON.stringify(functionArgs);
                    }
                }
                const response = yield this.fetch(url.toString(), {
                    method: method || 'POST',
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body,
                    signal
                }).catch((fetchError)=>{
                    if (fetchError.name === 'AbortError') {
                        throw fetchError;
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionsFetchError"](fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionsRelayError"](response);
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionsHttpError"](response);
                }
                let responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                let data;
                if (responseType === 'application/json') {
                    data = yield response.json();
                } else if (responseType === 'application/octet-stream') {
                    data = yield response.blob();
                } else if (responseType === 'text/event-stream') {
                    data = response;
                } else if (responseType === 'multipart/form-data') {
                    data = yield response.formData();
                } else {
                    // default to text
                    data = yield response.text();
                }
                return {
                    data,
                    error: null,
                    response
                };
            } catch (error) {
                if (error instanceof Error && error.name === 'AbortError') {
                    return {
                        data: null,
                        error: new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionsFetchError"](error)
                    };
                }
                return {
                    data: null,
                    error,
                    response: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionsHttpError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionsRelayError"] ? error.context : undefined
                };
            }
        });
    }
} //# sourceMappingURL=FunctionsClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var conversions = {};
module.exports = conversions;
function sign(x) {
    return x < 0 ? -1 : 1;
}
function evenRound(x) {
    // Round x to the nearest integer, choosing the even integer if it lies halfway between two.
    if (x % 1 === 0.5 && (x & 1) === 0) {
        return Math.floor(x);
    } else {
        return Math.round(x);
    }
}
function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
        --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength) : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength ? Math.pow(2, typeOpts.moduloBitLength - 1) : Math.pow(2, bitLength - 1);
    return function(V, opts) {
        if (!opts) opts = {};
        let x = +V;
        if (opts.enforceRange) {
            if (!Number.isFinite(x)) {
                throw new TypeError("Argument is not a finite number");
            }
            x = sign(x) * Math.floor(Math.abs(x));
            if (x < lowerBound || x > upperBound) {
                throw new TypeError("Argument is not in byte range");
            }
            return x;
        }
        if (!isNaN(x) && opts.clamp) {
            x = evenRound(x);
            if (x < lowerBound) x = lowerBound;
            if (x > upperBound) x = upperBound;
            return x;
        }
        if (!Number.isFinite(x) || x === 0) {
            return 0;
        }
        x = sign(x) * Math.floor(Math.abs(x));
        x = x % moduloVal;
        if (!typeOpts.unsigned && x >= moduloBound) {
            return x - moduloVal;
        } else if (typeOpts.unsigned) {
            if (x < 0) {
                x += moduloVal;
            } else if (x === -0) {
                return 0;
            }
        }
        return x;
    };
}
conversions["void"] = function() {
    return undefined;
};
conversions["boolean"] = function(val) {
    return !!val;
};
conversions["byte"] = createNumberConversion(8, {
    unsigned: false
});
conversions["octet"] = createNumberConversion(8, {
    unsigned: true
});
conversions["short"] = createNumberConversion(16, {
    unsigned: false
});
conversions["unsigned short"] = createNumberConversion(16, {
    unsigned: true
});
conversions["long"] = createNumberConversion(32, {
    unsigned: false
});
conversions["unsigned long"] = createNumberConversion(32, {
    unsigned: true
});
conversions["long long"] = createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64
});
conversions["unsigned long long"] = createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64
});
conversions["double"] = function(V) {
    const x = +V;
    if (!Number.isFinite(x)) {
        throw new TypeError("Argument is not a finite floating-point value");
    }
    return x;
};
conversions["unrestricted double"] = function(V) {
    const x = +V;
    if (isNaN(x)) {
        throw new TypeError("Argument is NaN");
    }
    return x;
};
// not quite valid, but good enough for JS
conversions["float"] = conversions["double"];
conversions["unrestricted float"] = conversions["unrestricted double"];
conversions["DOMString"] = function(V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) {
        return "";
    }
    return String(V);
};
conversions["ByteString"] = function(V, opts) {
    const x = String(V);
    let c = undefined;
    for(let i = 0; (c = x.codePointAt(i)) !== undefined; ++i){
        if (c > 255) {
            throw new TypeError("Argument is not a valid bytestring");
        }
    }
    return x;
};
conversions["USVString"] = function(V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for(let i = 0; i < n; ++i){
        const c = S.charCodeAt(i);
        if (c < 0xD800 || c > 0xDFFF) {
            U.push(String.fromCodePoint(c));
        } else if (0xDC00 <= c && c <= 0xDFFF) {
            U.push(String.fromCodePoint(0xFFFD));
        } else {
            if (i === n - 1) {
                U.push(String.fromCodePoint(0xFFFD));
            } else {
                const d = S.charCodeAt(i + 1);
                if (0xDC00 <= d && d <= 0xDFFF) {
                    const a = c & 0x3FF;
                    const b = d & 0x3FF;
                    U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
                    ++i;
                } else {
                    U.push(String.fromCodePoint(0xFFFD));
                }
            }
        }
    }
    return U.join('');
};
conversions["Date"] = function(V, opts) {
    if (!(V instanceof Date)) {
        throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
        return undefined;
    }
    return V;
};
conversions["RegExp"] = function(V, opts) {
    if (!(V instanceof RegExp)) {
        V = new RegExp(V);
    }
    return V;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports.mixin = function mixin(target, source) {
    const keys = Object.getOwnPropertyNames(source);
    for(let i = 0; i < keys.length; ++i){
        Object.defineProperty(target, keys[i], Object.getOwnPropertyDescriptor(source, keys[i]));
    }
};
module.exports.wrapperSymbol = Symbol("wrapper");
module.exports.implSymbol = Symbol("impl");
module.exports.wrapperForImpl = function(impl) {
    return impl[module.exports.wrapperSymbol];
};
module.exports.implForWrapper = function(wrapper) {
    return wrapper[module.exports.implSymbol];
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const punycode = __turbopack_context__.r("[externals]/punycode [external] (punycode, cjs)");
const tr46 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/tr46@0.0.3/node_modules/tr46/index.js [app-rsc] (ecmascript)");
const specialSchemes = {
    ftp: 21,
    file: null,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
const failure = Symbol("failure");
function countSymbols(str) {
    return punycode.ucs2.decode(str).length;
}
function at(input, idx) {
    const c = input[idx];
    return isNaN(c) ? undefined : String.fromCodePoint(c);
}
function isASCIIDigit(c) {
    return c >= 0x30 && c <= 0x39;
}
function isASCIIAlpha(c) {
    return c >= 0x41 && c <= 0x5A || c >= 0x61 && c <= 0x7A;
}
function isASCIIAlphanumeric(c) {
    return isASCIIAlpha(c) || isASCIIDigit(c);
}
function isASCIIHex(c) {
    return isASCIIDigit(c) || c >= 0x41 && c <= 0x46 || c >= 0x61 && c <= 0x66;
}
function isSingleDot(buffer) {
    return buffer === "." || buffer.toLowerCase() === "%2e";
}
function isDoubleDot(buffer) {
    buffer = buffer.toLowerCase();
    return buffer === ".." || buffer === "%2e." || buffer === ".%2e" || buffer === "%2e%2e";
}
function isWindowsDriveLetterCodePoints(cp1, cp2) {
    return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
}
function isWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && (string[1] === ":" || string[1] === "|");
}
function isNormalizedWindowsDriveLetterString(string) {
    return string.length === 2 && isASCIIAlpha(string.codePointAt(0)) && string[1] === ":";
}
function containsForbiddenHostCodePoint(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function containsForbiddenHostCodePointExcludingPercent(string) {
    return string.search(/\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/) !== -1;
}
function isSpecialScheme(scheme) {
    return specialSchemes[scheme] !== undefined;
}
function isSpecial(url) {
    return isSpecialScheme(url.scheme);
}
function defaultPort(scheme) {
    return specialSchemes[scheme];
}
function percentEncode(c) {
    let hex = c.toString(16).toUpperCase();
    if (hex.length === 1) {
        hex = "0" + hex;
    }
    return "%" + hex;
}
function utf8PercentEncode(c) {
    const buf = new Buffer(c);
    let str = "";
    for(let i = 0; i < buf.length; ++i){
        str += percentEncode(buf[i]);
    }
    return str;
}
function utf8PercentDecode(str) {
    const input = new Buffer(str);
    const output = [];
    for(let i = 0; i < input.length; ++i){
        if (input[i] !== 37) {
            output.push(input[i]);
        } else if (input[i] === 37 && isASCIIHex(input[i + 1]) && isASCIIHex(input[i + 2])) {
            output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
            i += 2;
        } else {
            output.push(input[i]);
        }
    }
    return new Buffer(output).toString();
}
function isC0ControlPercentEncode(c) {
    return c <= 0x1F || c > 0x7E;
}
const extraPathPercentEncodeSet = new Set([
    32,
    34,
    35,
    60,
    62,
    63,
    96,
    123,
    125
]);
function isPathPercentEncode(c) {
    return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
}
const extraUserinfoPercentEncodeSet = new Set([
    47,
    58,
    59,
    61,
    64,
    91,
    92,
    93,
    94,
    124
]);
function isUserinfoPercentEncode(c) {
    return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
}
function percentEncodeChar(c, encodeSetPredicate) {
    const cStr = String.fromCodePoint(c);
    if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
    }
    return cStr;
}
function parseIPv4Number(input) {
    let R = 10;
    if (input.length >= 2 && input.charAt(0) === "0" && input.charAt(1).toLowerCase() === "x") {
        input = input.substring(2);
        R = 16;
    } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
    }
    if (input === "") {
        return 0;
    }
    const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
    if (regex.test(input)) {
        return failure;
    }
    return parseInt(input, R);
}
function parseIPv4(input) {
    const parts = input.split(".");
    if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
            parts.pop();
        }
    }
    if (parts.length > 4) {
        return input;
    }
    const numbers = [];
    for (const part of parts){
        if (part === "") {
            return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
            return input;
        }
        numbers.push(n);
    }
    for(let i = 0; i < numbers.length - 1; ++i){
        if (numbers[i] > 255) {
            return failure;
        }
    }
    if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
    }
    let ipv4 = numbers.pop();
    let counter = 0;
    for (const n of numbers){
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
    }
    return ipv4;
}
function serializeIPv4(address) {
    let output = "";
    let n = address;
    for(let i = 1; i <= 4; ++i){
        output = String(n % 256) + output;
        if (i !== 4) {
            output = "." + output;
        }
        n = Math.floor(n / 256);
    }
    return output;
}
function parseIPv6(input) {
    const address = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    let pieceIndex = 0;
    let compress = null;
    let pointer = 0;
    input = punycode.ucs2.decode(input);
    if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
            return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
    }
    while(pointer < input.length){
        if (pieceIndex === 8) {
            return failure;
        }
        if (input[pointer] === 58) {
            if (compress !== null) {
                return failure;
            }
            ++pointer;
            ++pieceIndex;
            compress = pieceIndex;
            continue;
        }
        let value = 0;
        let length = 0;
        while(length < 4 && isASCIIHex(input[pointer])){
            value = value * 0x10 + parseInt(at(input, pointer), 16);
            ++pointer;
            ++length;
        }
        if (input[pointer] === 46) {
            if (length === 0) {
                return failure;
            }
            pointer -= length;
            if (pieceIndex > 6) {
                return failure;
            }
            let numbersSeen = 0;
            while(input[pointer] !== undefined){
                let ipv4Piece = null;
                if (numbersSeen > 0) {
                    if (input[pointer] === 46 && numbersSeen < 4) {
                        ++pointer;
                    } else {
                        return failure;
                    }
                }
                if (!isASCIIDigit(input[pointer])) {
                    return failure;
                }
                while(isASCIIDigit(input[pointer])){
                    const number = parseInt(at(input, pointer));
                    if (ipv4Piece === null) {
                        ipv4Piece = number;
                    } else if (ipv4Piece === 0) {
                        return failure;
                    } else {
                        ipv4Piece = ipv4Piece * 10 + number;
                    }
                    if (ipv4Piece > 255) {
                        return failure;
                    }
                    ++pointer;
                }
                address[pieceIndex] = address[pieceIndex] * 0x100 + ipv4Piece;
                ++numbersSeen;
                if (numbersSeen === 2 || numbersSeen === 4) {
                    ++pieceIndex;
                }
            }
            if (numbersSeen !== 4) {
                return failure;
            }
            break;
        } else if (input[pointer] === 58) {
            ++pointer;
            if (input[pointer] === undefined) {
                return failure;
            }
        } else if (input[pointer] !== undefined) {
            return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
    }
    if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while(pieceIndex !== 0 && swaps > 0){
            const temp = address[compress + swaps - 1];
            address[compress + swaps - 1] = address[pieceIndex];
            address[pieceIndex] = temp;
            --pieceIndex;
            --swaps;
        }
    } else if (compress === null && pieceIndex !== 8) {
        return failure;
    }
    return address;
}
function serializeIPv6(address) {
    let output = "";
    const seqResult = findLongestZeroSequence(address);
    const compress = seqResult.idx;
    let ignore0 = false;
    for(let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex){
        if (ignore0 && address[pieceIndex] === 0) {
            continue;
        } else if (ignore0) {
            ignore0 = false;
        }
        if (compress === pieceIndex) {
            const separator = pieceIndex === 0 ? "::" : ":";
            output += separator;
            ignore0 = true;
            continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
            output += ":";
        }
    }
    return output;
}
function parseHost(input, isSpecialArg) {
    if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
            return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
    }
    if (!isSpecialArg) {
        return parseOpaqueHost(input);
    }
    const domain = utf8PercentDecode(input);
    const asciiDomain = tr46.toASCII(domain, false, tr46.PROCESSING_OPTIONS.NONTRANSITIONAL, false);
    if (asciiDomain === null) {
        return failure;
    }
    if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
    }
    const ipv4Host = parseIPv4(asciiDomain);
    if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
    }
    return asciiDomain;
}
function parseOpaqueHost(input) {
    if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
    }
    let output = "";
    const decoded = punycode.ucs2.decode(input);
    for(let i = 0; i < decoded.length; ++i){
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
    }
    return output;
}
function findLongestZeroSequence(arr) {
    let maxIdx = null;
    let maxLen = 1; // only find elements > 1
    let currStart = null;
    let currLen = 0;
    for(let i = 0; i < arr.length; ++i){
        if (arr[i] !== 0) {
            if (currLen > maxLen) {
                maxIdx = currStart;
                maxLen = currLen;
            }
            currStart = null;
            currLen = 0;
        } else {
            if (currStart === null) {
                currStart = i;
            }
            ++currLen;
        }
    }
    // if trailing zeros
    if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
    }
    return {
        idx: maxIdx,
        len: maxLen
    };
}
function serializeHost(host) {
    if (typeof host === "number") {
        return serializeIPv4(host);
    }
    // IPv6 serializer
    if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
    }
    return host;
}
function trimControlChars(url) {
    return url.replace(/^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g, "");
}
function trimTabAndNewline(url) {
    return url.replace(/\u0009|\u000A|\u000D/g, "");
}
function shortenPath(url) {
    const path = url.path;
    if (path.length === 0) {
        return;
    }
    if (url.scheme === "file" && path.length === 1 && isNormalizedWindowsDriveLetter(path[0])) {
        return;
    }
    path.pop();
}
function includesCredentials(url) {
    return url.username !== "" || url.password !== "";
}
function cannotHaveAUsernamePasswordPort(url) {
    return url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file";
}
function isNormalizedWindowsDriveLetter(string) {
    return /^[A-Za-z]:$/.test(string);
}
function URLStateMachine(input, base, encodingOverride, url, stateOverride) {
    this.pointer = 0;
    this.input = input;
    this.base = base || null;
    this.encodingOverride = encodingOverride || "utf-8";
    this.stateOverride = stateOverride;
    this.url = url;
    this.failure = false;
    this.parseError = false;
    if (!this.url) {
        this.url = {
            scheme: "",
            username: "",
            password: "",
            host: null,
            port: null,
            path: [],
            query: null,
            fragment: null,
            cannotBeABaseURL: false
        };
        const res = trimControlChars(this.input);
        if (res !== this.input) {
            this.parseError = true;
        }
        this.input = res;
    }
    const res = trimTabAndNewline(this.input);
    if (res !== this.input) {
        this.parseError = true;
    }
    this.input = res;
    this.state = stateOverride || "scheme start";
    this.buffer = "";
    this.atFlag = false;
    this.arrFlag = false;
    this.passwordTokenSeenFlag = false;
    this.input = punycode.ucs2.decode(this.input);
    for(; this.pointer <= this.input.length; ++this.pointer){
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? undefined : String.fromCodePoint(c);
        // exec state machine
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
            break; // terminate algorithm
        } else if (ret === failure) {
            this.failure = true;
            break;
        }
    }
}
URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(c, cStr) {
    if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
    } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
    if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
    } else if (c === 58) {
        if (this.stateOverride) {
            if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
                return false;
            }
            if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
                return false;
            }
            if ((includesCredentials(this.url) || this.url.port !== null) && this.buffer === "file") {
                return false;
            }
            if (this.url.scheme === "file" && (this.url.host === "" || this.url.host === null)) {
                return false;
            }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
            return false;
        }
        if (this.url.scheme === "file") {
            if (this.input[this.pointer + 1] !== 47 || this.input[this.pointer + 2] !== 47) {
                this.parseError = true;
            }
            this.state = "file";
        } else if (isSpecial(this.url) && this.base !== null && this.base.scheme === this.url.scheme) {
            this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
            this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
            this.state = "path or authority";
            ++this.pointer;
        } else {
            this.url.cannotBeABaseURL = true;
            this.url.path.push("");
            this.state = "cannot-be-a-base-URL path";
        }
    } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
    if (this.base === null || this.base.cannotBeABaseURL && c !== 35) {
        return failure;
    } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
    } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
    } else {
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special relative or authority"] = function parseSpecialRelativeOrAuthority(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "relative";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse path or authority"] = function parsePathOrAuthority(c) {
    if (c === 47) {
        this.state = "authority";
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
    this.url.scheme = this.base.scheme;
    if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
    } else if (c === 47) {
        this.state = "relative slash";
    } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
    } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse relative slash"] = function parseRelativeSlash(c) {
    if (isSpecial(this.url) && (c === 47 || c === 92)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "special authority ignore slashes";
    } else if (c === 47) {
        this.state = "authority";
    } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority slashes"] = function parseSpecialAuthoritySlashes(c) {
    if (c === 47 && this.input[this.pointer + 1] === 47) {
        this.state = "special authority ignore slashes";
        ++this.pointer;
    } else {
        this.parseError = true;
        this.state = "special authority ignore slashes";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse special authority ignore slashes"] = function parseSpecialAuthorityIgnoreSlashes(c) {
    if (c !== 47 && c !== 92) {
        this.state = "authority";
        --this.pointer;
    } else {
        this.parseError = true;
    }
    return true;
};
URLStateMachine.prototype["parse authority"] = function parseAuthority(c, cStr) {
    if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
            this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        // careful, this is based on buffer and has its own pointer (this.pointer != pointer) and inner chars
        const len = countSymbols(this.buffer);
        for(let pointer = 0; pointer < len; ++pointer){
            const codePoint = this.buffer.codePointAt(pointer);
            if (codePoint === 58 && !this.passwordTokenSeenFlag) {
                this.passwordTokenSeenFlag = true;
                continue;
            }
            const encodedCodePoints = percentEncodeChar(codePoint, isUserinfoPercentEncode);
            if (this.passwordTokenSeenFlag) {
                this.url.password += encodedCodePoints;
            } else {
                this.url.username += encodedCodePoints;
            }
        }
        this.buffer = "";
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        if (this.atFlag && this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype["parse host"] = function parseHostName(c, cStr) {
    if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
    } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
            this.parseError = true;
            return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
            return false;
        }
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
            this.parseError = true;
            return failure;
        } else if (this.stateOverride && this.buffer === "" && (includesCredentials(this.url) || this.url.port !== null)) {
            this.parseError = true;
            return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
            return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
            return false;
        }
    } else {
        if (c === 91) {
            this.arrFlag = true;
        } else if (c === 93) {
            this.arrFlag = false;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
    if (isASCIIDigit(c)) {
        this.buffer += cStr;
    } else if (isNaN(c) || c === 47 || c === 63 || c === 35 || isSpecial(this.url) && c === 92 || this.stateOverride) {
        if (this.buffer !== "") {
            const port = parseInt(this.buffer);
            if (port > Math.pow(2, 16) - 1) {
                this.parseError = true;
                return failure;
            }
            this.url.port = port === defaultPort(this.url.scheme) ? null : port;
            this.buffer = "";
        }
        if (this.stateOverride) {
            return false;
        }
        this.state = "path start";
        --this.pointer;
    } else {
        this.parseError = true;
        return failure;
    }
    return true;
};
const fileOtherwiseCodePoints = new Set([
    47,
    92,
    63,
    35
]);
URLStateMachine.prototype["parse file"] = function parseFile(c) {
    this.url.scheme = "file";
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file slash";
    } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
        } else if (c === 63) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = "";
            this.state = "query";
        } else if (c === 35) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            this.url.query = this.base.query;
            this.url.fragment = "";
            this.state = "fragment";
        } else {
            if (this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) || this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
            !fileOtherwiseCodePoints.has(this.input[this.pointer + 2])) {
                this.url.host = this.base.host;
                this.url.path = this.base.path.slice();
                shortenPath(this.url);
            } else {
                this.parseError = true;
            }
            this.state = "path";
            --this.pointer;
        }
    } else {
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
    if (c === 47 || c === 92) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "file host";
    } else {
        if (this.base !== null && this.base.scheme === "file") {
            if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
                this.url.path.push(this.base.path[0]);
            } else {
                this.url.host = this.base.host;
            }
        }
        this.state = "path";
        --this.pointer;
    }
    return true;
};
URLStateMachine.prototype["parse file host"] = function parseFileHost(c, cStr) {
    if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
            this.parseError = true;
            this.state = "path";
        } else if (this.buffer === "") {
            this.url.host = "";
            if (this.stateOverride) {
                return false;
            }
            this.state = "path start";
        } else {
            let host = parseHost(this.buffer, isSpecial(this.url));
            if (host === failure) {
                return failure;
            }
            if (host === "localhost") {
                host = "";
            }
            this.url.host = host;
            if (this.stateOverride) {
                return false;
            }
            this.buffer = "";
            this.state = "path start";
        }
    } else {
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
    if (isSpecial(this.url)) {
        if (c === 92) {
            this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
            --this.pointer;
        }
    } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else if (c !== undefined) {
        this.state = "path";
        if (c !== 47) {
            --this.pointer;
        }
    }
    return true;
};
URLStateMachine.prototype["parse path"] = function parsePath(c) {
    if (isNaN(c) || c === 47 || isSpecial(this.url) && c === 92 || !this.stateOverride && (c === 63 || c === 35)) {
        if (isSpecial(this.url) && c === 92) {
            this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
            shortenPath(this.url);
            if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
                this.url.path.push("");
            }
        } else if (isSingleDot(this.buffer) && c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
            if (this.url.scheme === "file" && this.url.path.length === 0 && isWindowsDriveLetterString(this.buffer)) {
                if (this.url.host !== "" && this.url.host !== null) {
                    this.parseError = true;
                    this.url.host = "";
                }
                this.buffer = this.buffer[0] + ":";
            }
            this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (this.url.scheme === "file" && (c === undefined || c === 63 || c === 35)) {
            while(this.url.path.length > 1 && this.url.path[0] === ""){
                this.parseError = true;
                this.url.path.shift();
            }
        }
        if (c === 63) {
            this.url.query = "";
            this.state = "query";
        }
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
    }
    return true;
};
URLStateMachine.prototype["parse cannot-be-a-base-URL path"] = function parseCannotBeABaseURLPath(c) {
    if (c === 63) {
        this.url.query = "";
        this.state = "query";
    } else if (c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
    } else {
        // TODO: Add: not a URL code point
        if (!isNaN(c) && c !== 37) {
            this.parseError = true;
        }
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        if (!isNaN(c)) {
            this.url.path[0] = this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
        }
    }
    return true;
};
URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
    if (isNaN(c) || !this.stateOverride && c === 35) {
        if (!isSpecial(this.url) || this.url.scheme === "ws" || this.url.scheme === "wss") {
            this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer); // TODO: Use encoding override instead
        for(let i = 0; i < buffer.length; ++i){
            if (buffer[i] < 0x21 || buffer[i] > 0x7E || buffer[i] === 0x22 || buffer[i] === 0x23 || buffer[i] === 0x3C || buffer[i] === 0x3E) {
                this.url.query += percentEncode(buffer[i]);
            } else {
                this.url.query += String.fromCodePoint(buffer[i]);
            }
        }
        this.buffer = "";
        if (c === 35) {
            this.url.fragment = "";
            this.state = "fragment";
        }
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.buffer += cStr;
    }
    return true;
};
URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
    if (isNaN(c)) {} else if (c === 0x0) {
        this.parseError = true;
    } else {
        // TODO: If c is not a URL code point and not "%", parse error.
        if (c === 37 && (!isASCIIHex(this.input[this.pointer + 1]) || !isASCIIHex(this.input[this.pointer + 2]))) {
            this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
    }
    return true;
};
function serializeURL(url, excludeFragment) {
    let output = url.scheme + ":";
    if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
            output += url.username;
            if (url.password !== "") {
                output += ":" + url.password;
            }
            output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
            output += ":" + url.port;
        }
    } else if (url.host === null && url.scheme === "file") {
        output += "//";
    }
    if (url.cannotBeABaseURL) {
        output += url.path[0];
    } else {
        for (const string of url.path){
            output += "/" + string;
        }
    }
    if (url.query !== null) {
        output += "?" + url.query;
    }
    if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
    }
    return output;
}
function serializeOrigin(tuple) {
    let result = tuple.scheme + "://";
    result += serializeHost(tuple.host);
    if (tuple.port !== null) {
        result += ":" + tuple.port;
    }
    return result;
}
module.exports.serializeURL = serializeURL;
module.exports.serializeURLOrigin = function(url) {
    // https://url.spec.whatwg.org/#concept-url-origin
    switch(url.scheme){
        case "blob":
            try {
                return module.exports.serializeURLOrigin(module.exports.parseURL(url.path[0]));
            } catch (e) {
                // serializing an opaque origin returns "null"
                return "null";
            }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
            return serializeOrigin({
                scheme: url.scheme,
                host: url.host,
                port: url.port
            });
        case "file":
            // spec says "exercise to the reader", chrome says "file://"
            return "file://";
        default:
            // serializing an opaque origin returns "null"
            return "null";
    }
};
module.exports.basicURLParse = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    const usm = new URLStateMachine(input, options.baseURL, options.encodingOverride, options.url, options.stateOverride);
    if (usm.failure) {
        return "failure";
    }
    return usm.url;
};
module.exports.setTheUsername = function(url, username) {
    url.username = "";
    const decoded = punycode.ucs2.decode(username);
    for(let i = 0; i < decoded.length; ++i){
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.setThePassword = function(url, password) {
    url.password = "";
    const decoded = punycode.ucs2.decode(password);
    for(let i = 0; i < decoded.length; ++i){
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
    }
};
module.exports.serializeHost = serializeHost;
module.exports.cannotHaveAUsernamePasswordPort = cannotHaveAUsernamePasswordPort;
module.exports.serializeInteger = function(integer) {
    return String(integer);
};
module.exports.parseURL = function(input, options) {
    if (options === undefined) {
        options = {};
    }
    // We don't handle blobs, so this just delegates:
    return module.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride
    });
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const usm = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)");
exports.implementation = class URLImpl {
    constructor(constructorArgs){
        const url = constructorArgs[0];
        const base = constructorArgs[1];
        let parsedBase = null;
        if (base !== undefined) {
            parsedBase = usm.basicURLParse(base);
            if (parsedBase === "failure") {
                throw new TypeError("Invalid base URL");
            }
        }
        const parsedURL = usm.basicURLParse(url, {
            baseURL: parsedBase
        });
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    // TODO: query stuff
    }
    get href() {
        return usm.serializeURL(this._url);
    }
    set href(v) {
        const parsedURL = usm.basicURLParse(v);
        if (parsedURL === "failure") {
            throw new TypeError("Invalid URL");
        }
        this._url = parsedURL;
    }
    get origin() {
        return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
        return this._url.scheme + ":";
    }
    set protocol(v) {
        usm.basicURLParse(v + ":", {
            url: this._url,
            stateOverride: "scheme start"
        });
    }
    get username() {
        return this._url.username;
    }
    set username(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setTheUsername(this._url, v);
    }
    get password() {
        return this._url.password;
    }
    set password(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        usm.setThePassword(this._url, v);
    }
    get host() {
        const url = this._url;
        if (url.host === null) {
            return "";
        }
        if (url.port === null) {
            return usm.serializeHost(url.host);
        }
        return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
    }
    set host(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "host"
        });
    }
    get hostname() {
        if (this._url.host === null) {
            return "";
        }
        return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "hostname"
        });
    }
    get port() {
        if (this._url.port === null) {
            return "";
        }
        return usm.serializeInteger(this._url.port);
    }
    set port(v) {
        if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
            return;
        }
        if (v === "") {
            this._url.port = null;
        } else {
            usm.basicURLParse(v, {
                url: this._url,
                stateOverride: "port"
            });
        }
    }
    get pathname() {
        if (this._url.cannotBeABaseURL) {
            return this._url.path[0];
        }
        if (this._url.path.length === 0) {
            return "";
        }
        return "/" + this._url.path.join("/");
    }
    set pathname(v) {
        if (this._url.cannotBeABaseURL) {
            return;
        }
        this._url.path = [];
        usm.basicURLParse(v, {
            url: this._url,
            stateOverride: "path start"
        });
    }
    get search() {
        if (this._url.query === null || this._url.query === "") {
            return "";
        }
        return "?" + this._url.query;
    }
    set search(v) {
        // TODO: query stuff
        const url = this._url;
        if (v === "") {
            url.query = null;
            return;
        }
        const input = v[0] === "?" ? v.substring(1) : v;
        url.query = "";
        usm.basicURLParse(input, {
            url,
            stateOverride: "query"
        });
    }
    get hash() {
        if (this._url.fragment === null || this._url.fragment === "") {
            return "";
        }
        return "#" + this._url.fragment;
    }
    set hash(v) {
        if (v === "") {
            this._url.fragment = null;
            return;
        }
        const input = v[0] === "#" ? v.substring(1) : v;
        this._url.fragment = "";
        usm.basicURLParse(input, {
            url: this._url,
            stateOverride: "fragment"
        });
    }
    toJSON() {
        return this.href;
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const conversions = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/webidl-conversions@3.0.1/node_modules/webidl-conversions/lib/index.js [app-rsc] (ecmascript)");
const utils = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/utils.js [app-rsc] (ecmascript)");
const Impl = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL-impl.js [app-rsc] (ecmascript)");
const impl = utils.implSymbol;
function URL(url) {
    if (!this || this[impl] || !(this instanceof URL)) {
        throw new TypeError("Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function.");
    }
    if (arguments.length < 1) {
        throw new TypeError("Failed to construct 'URL': 1 argument required, but only " + arguments.length + " present.");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 2; ++i){
        args[i] = arguments[i];
    }
    args[0] = conversions["USVString"](args[0]);
    if (args[1] !== undefined) {
        args[1] = conversions["USVString"](args[1]);
    }
    module.exports.setup(this, args);
}
URL.prototype.toJSON = function toJSON() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    const args = [];
    for(let i = 0; i < arguments.length && i < 0; ++i){
        args[i] = arguments[i];
    }
    return this[impl].toJSON.apply(this[impl], args);
};
Object.defineProperty(URL.prototype, "href", {
    get () {
        return this[impl].href;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
    },
    enumerable: true,
    configurable: true
});
URL.prototype.toString = function() {
    if (!this || !module.exports.is(this)) {
        throw new TypeError("Illegal invocation");
    }
    return this.href;
};
Object.defineProperty(URL.prototype, "origin", {
    get () {
        return this[impl].origin;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "protocol", {
    get () {
        return this[impl].protocol;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "username", {
    get () {
        return this[impl].username;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "password", {
    get () {
        return this[impl].password;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "host", {
    get () {
        return this[impl].host;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hostname", {
    get () {
        return this[impl].hostname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "port", {
    get () {
        return this[impl].port;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "pathname", {
    get () {
        return this[impl].pathname;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "search", {
    get () {
        return this[impl].search;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
    },
    enumerable: true,
    configurable: true
});
Object.defineProperty(URL.prototype, "hash", {
    get () {
        return this[impl].hash;
    },
    set (V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
    },
    enumerable: true,
    configurable: true
});
module.exports = {
    is (obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
    },
    create (constructorArgs, privateData) {
        let obj = Object.create(URL.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
    },
    setup (obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils.wrapperSymbol] = obj;
    },
    interface: URL,
    expose: {
        Window: {
            URL: URL
        },
        Worker: {
            URL: URL
        }
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.URL = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/URL.js [app-rsc] (ecmascript)").interface;
exports.serializeURL = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURL;
exports.serializeURLOrigin = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeURLOrigin;
exports.basicURLParse = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").basicURLParse;
exports.setTheUsername = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setTheUsername;
exports.setThePassword = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").setThePassword;
exports.serializeHost = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeHost;
exports.serializeInteger = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").serializeInteger;
exports.parseURL = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/url-state-machine.js [app-rsc] (ecmascript)").parseURL;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, '__esModule', {
    value: true
});
function _interopDefault(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}
var Stream = _interopDefault(__turbopack_context__.r("[externals]/stream [external] (stream, cjs)"));
var http = _interopDefault(__turbopack_context__.r("[externals]/http [external] (http, cjs)"));
var Url = _interopDefault(__turbopack_context__.r("[externals]/url [external] (url, cjs)"));
var whatwgUrl = _interopDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-url@5.0.0/node_modules/whatwg-url/lib/public-api.js [app-rsc] (ecmascript)"));
var https = _interopDefault(__turbopack_context__.r("[externals]/https [external] (https, cjs)"));
var zlib = _interopDefault(__turbopack_context__.r("[externals]/zlib [external] (zlib, cjs)"));
// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js
// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;
const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');
class Blob {
    constructor(){
        this[TYPE] = '';
        const blobParts = arguments[0];
        const options = arguments[1];
        const buffers = [];
        let size = 0;
        if (blobParts) {
            const a = blobParts;
            const length = Number(a.length);
            for(let i = 0; i < length; i++){
                const element = a[i];
                let buffer;
                if (element instanceof Buffer) {
                    buffer = element;
                } else if (ArrayBuffer.isView(element)) {
                    buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
                } else if (element instanceof ArrayBuffer) {
                    buffer = Buffer.from(element);
                } else if (element instanceof Blob) {
                    buffer = element[BUFFER];
                } else {
                    buffer = Buffer.from(typeof element === 'string' ? element : String(element));
                }
                size += buffer.length;
                buffers.push(buffer);
            }
        }
        this[BUFFER] = Buffer.concat(buffers);
        let type = options && options.type !== undefined && String(options.type).toLowerCase();
        if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type;
        }
    }
    get size() {
        return this[BUFFER].length;
    }
    get type() {
        return this[TYPE];
    }
    text() {
        return Promise.resolve(this[BUFFER].toString());
    }
    arrayBuffer() {
        const buf = this[BUFFER];
        const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        return Promise.resolve(ab);
    }
    stream() {
        const readable = new Readable();
        readable._read = function() {};
        readable.push(this[BUFFER]);
        readable.push(null);
        return readable;
    }
    toString() {
        return '[object Blob]';
    }
    slice() {
        const size = this.size;
        const start = arguments[0];
        const end = arguments[1];
        let relativeStart, relativeEnd;
        if (start === undefined) {
            relativeStart = 0;
        } else if (start < 0) {
            relativeStart = Math.max(size + start, 0);
        } else {
            relativeStart = Math.min(start, size);
        }
        if (end === undefined) {
            relativeEnd = size;
        } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0);
        } else {
            relativeEnd = Math.min(end, size);
        }
        const span = Math.max(relativeEnd - relativeStart, 0);
        const buffer = this[BUFFER];
        const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
        const blob = new Blob([], {
            type: arguments[2]
        });
        blob[BUFFER] = slicedBuffer;
        return blob;
    }
}
Object.defineProperties(Blob.prototype, {
    size: {
        enumerable: true
    },
    type: {
        enumerable: true
    },
    slice: {
        enumerable: true
    }
});
Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
    value: 'Blob',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */ /**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */ function FetchError(message, type, systemError) {
    Error.call(this, message);
    this.message = message;
    this.type = type;
    // when err.type is `system`, err.code contains system error code
    if (systemError) {
        this.code = this.errno = systemError.code;
    }
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';
let convert;
const INTERNALS = Symbol('Body internals');
// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;
/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ function Body(body) {
    var _this = this;
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref$size = _ref.size;
    let size = _ref$size === undefined ? 0 : _ref$size;
    var _ref$timeout = _ref.timeout;
    let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;
    if (body == null) {
        // body is undefined or null
        body = null;
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        body = Buffer.from(body.toString());
    } else if (isBlob(body)) ;
    else if (Buffer.isBuffer(body)) ;
    else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof Stream) ;
    else {
        // none of the above
        // coerce to string then buffer
        body = Buffer.from(String(body));
    }
    this[INTERNALS] = {
        body,
        disturbed: false,
        error: null
    };
    this.size = size;
    this.timeout = timeout;
    if (body instanceof Stream) {
        body.on('error', function(err) {
            const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
            _this[INTERNALS].error = error;
        });
    }
}
Body.prototype = {
    get body () {
        return this[INTERNALS].body;
    },
    get bodyUsed () {
        return this[INTERNALS].disturbed;
    },
    /**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */ arrayBuffer () {
        return consumeBody.call(this).then(function(buf) {
            return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
        });
    },
    /**
  * Return raw response as Blob
  *
  * @return Promise
  */ blob () {
        let ct = this.headers && this.headers.get('content-type') || '';
        return consumeBody.call(this).then(function(buf) {
            return Object.assign(// Prevent copying
            new Blob([], {
                type: ct.toLowerCase()
            }), {
                [BUFFER]: buf
            });
        });
    },
    /**
  * Decode response as json
  *
  * @return  Promise
  */ json () {
        var _this2 = this;
        return consumeBody.call(this).then(function(buffer) {
            try {
                return JSON.parse(buffer.toString());
            } catch (err) {
                return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
            }
        });
    },
    /**
  * Decode response as text
  *
  * @return  Promise
  */ text () {
        return consumeBody.call(this).then(function(buffer) {
            return buffer.toString();
        });
    },
    /**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */ buffer () {
        return consumeBody.call(this);
    },
    /**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */ textConverted () {
        var _this3 = this;
        return consumeBody.call(this).then(function(buffer) {
            return convertBody(buffer, _this3.headers);
        });
    }
};
// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
    body: {
        enumerable: true
    },
    bodyUsed: {
        enumerable: true
    },
    arrayBuffer: {
        enumerable: true
    },
    blob: {
        enumerable: true
    },
    json: {
        enumerable: true
    },
    text: {
        enumerable: true
    }
});
Body.mixIn = function(proto) {
    for (const name of Object.getOwnPropertyNames(Body.prototype)){
        // istanbul ignore else: future proof
        if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
            Object.defineProperty(proto, name, desc);
        }
    }
};
/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */ function consumeBody() {
    var _this4 = this;
    if (this[INTERNALS].disturbed) {
        return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
    }
    this[INTERNALS].disturbed = true;
    if (this[INTERNALS].error) {
        return Body.Promise.reject(this[INTERNALS].error);
    }
    let body = this.body;
    // body is null
    if (body === null) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is blob
    if (isBlob(body)) {
        body = body.stream();
    }
    // body is buffer
    if (Buffer.isBuffer(body)) {
        return Body.Promise.resolve(body);
    }
    // istanbul ignore if: should never happen
    if (!(body instanceof Stream)) {
        return Body.Promise.resolve(Buffer.alloc(0));
    }
    // body is stream
    // get ready to actually consume the body
    let accum = [];
    let accumBytes = 0;
    let abort = false;
    return new Body.Promise(function(resolve, reject) {
        let resTimeout;
        // allow timeout on slow response body
        if (_this4.timeout) {
            resTimeout = setTimeout(function() {
                abort = true;
                reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
            }, _this4.timeout);
        }
        // handle stream errors
        body.on('error', function(err) {
            if (err.name === 'AbortError') {
                // if the request was aborted, reject with this Error
                abort = true;
                reject(err);
            } else {
                // other errors, such as incorrect content-encoding
                reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
        body.on('data', function(chunk) {
            if (abort || chunk === null) {
                return;
            }
            if (_this4.size && accumBytes + chunk.length > _this4.size) {
                abort = true;
                reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
                return;
            }
            accumBytes += chunk.length;
            accum.push(chunk);
        });
        body.on('end', function() {
            if (abort) {
                return;
            }
            clearTimeout(resTimeout);
            try {
                resolve(Buffer.concat(accum, accumBytes));
            } catch (err) {
                // handle streams that have accumulated too much data (issue #414)
                reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
            }
        });
    });
}
/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */ function convertBody(buffer, headers) {
    {
        throw new Error('The package `encoding` must be installed to use the textConverted() function');
    }
    const ct = headers.get('content-type');
    let charset = 'utf-8';
    let res, str;
    // header
    if (ct) {
        res = /charset=([^;]*)/i.exec(ct);
    }
    // no charset in content type, peek at response body for at most 1024 bytes
    str = buffer.slice(0, 1024).toString();
    // html5
    if (!res && str) {
        res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
    }
    // html4
    if (!res && str) {
        res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
        if (!res) {
            res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
            if (res) {
                res.pop(); // drop last quote
            }
        }
        if (res) {
            res = /charset=(.*)/i.exec(res.pop());
        }
    }
    // xml
    if (!res && str) {
        res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
    }
    // found charset
    if (res) {
        charset = res.pop();
        // prevent decode issues when sites use incorrect encoding
        // ref: https://hsivonen.fi/encoding-menu/
        if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030';
        }
    }
    // turn raw buffers into a single utf-8 buffer
    return convert(buffer, 'UTF-8', charset).toString();
}
/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */ function isURLSearchParams(obj) {
    // Duck-typing as a necessary condition.
    if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
        return false;
    }
    // Brand-checking and more duck-typing as optional condition.
    return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}
/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */ function isBlob(obj) {
    return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}
/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */ function clone(instance) {
    let p1, p2;
    let body = instance.body;
    // don't allow cloning a used body
    if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used');
    }
    // check that body is a stream and not form-data object
    // note: we can't clone the form-data object without having it as a dependency
    if (body instanceof Stream && typeof body.getBoundary !== 'function') {
        // tee instance body
        p1 = new PassThrough();
        p2 = new PassThrough();
        body.pipe(p1);
        body.pipe(p2);
        // set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1;
        body = p2;
    }
    return body;
}
/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */ function extractContentType(body) {
    if (body === null) {
        // body is null
        return null;
    } else if (typeof body === 'string') {
        // body is string
        return 'text/plain;charset=UTF-8';
    } else if (isURLSearchParams(body)) {
        // body is a URLSearchParams
        return 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (isBlob(body)) {
        // body is blob
        return body.type || null;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return null;
    } else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
        // body is ArrayBuffer
        return null;
    } else if (ArrayBuffer.isView(body)) {
        // body is ArrayBufferView
        return null;
    } else if (typeof body.getBoundary === 'function') {
        // detect form data input from form-data module
        return `multipart/form-data;boundary=${body.getBoundary()}`;
    } else if (body instanceof Stream) {
        // body is stream
        // can't really do much about this
        return null;
    } else {
        // Body constructor defaults other things to string
        return 'text/plain;charset=UTF-8';
    }
}
/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */ function getTotalBytes(instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        return 0;
    } else if (isBlob(body)) {
        return body.size;
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        return body.length;
    } else if (body && typeof body.getLengthSync === 'function') {
        // detect form data input from form-data module
        if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
        body.hasKnownLength && body.hasKnownLength()) {
            // 2.x
            return body.getLengthSync();
        }
        return null;
    } else {
        // body is stream
        return null;
    }
}
/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */ function writeToStream(dest, instance) {
    const body = instance.body;
    if (body === null) {
        // body is null
        dest.end();
    } else if (isBlob(body)) {
        body.stream().pipe(dest);
    } else if (Buffer.isBuffer(body)) {
        // body is buffer
        dest.write(body);
        dest.end();
    } else {
        // body is stream
        body.pipe(dest);
    }
}
// expose Promise
Body.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */ const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
    name = `${name}`;
    if (invalidTokenRegex.test(name) || name === '') {
        throw new TypeError(`${name} is not a legal HTTP header name`);
    }
}
function validateValue(value) {
    value = `${value}`;
    if (invalidHeaderCharRegex.test(value)) {
        throw new TypeError(`${value} is not a legal HTTP header value`);
    }
}
/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */ function find(map, name) {
    name = name.toLowerCase();
    for(const key in map){
        if (key.toLowerCase() === name) {
            return key;
        }
    }
    return undefined;
}
const MAP = Symbol('map');
class Headers {
    /**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */ constructor(){
        let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
        this[MAP] = Object.create(null);
        if (init instanceof Headers) {
            const rawHeaders = init.raw();
            const headerNames = Object.keys(rawHeaders);
            for (const headerName of headerNames){
                for (const value of rawHeaders[headerName]){
                    this.append(headerName, value);
                }
            }
            return;
        }
        // We don't worry about converting prop to ByteString here as append()
        // will handle it.
        if (init == null) ;
        else if (typeof init === 'object') {
            const method = init[Symbol.iterator];
            if (method != null) {
                if (typeof method !== 'function') {
                    throw new TypeError('Header pairs must be iterable');
                }
                // sequence<sequence<ByteString>>
                // Note: per spec we have to first exhaust the lists then process them
                const pairs = [];
                for (const pair of init){
                    if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
                        throw new TypeError('Each header pair must be iterable');
                    }
                    pairs.push(Array.from(pair));
                }
                for (const pair of pairs){
                    if (pair.length !== 2) {
                        throw new TypeError('Each header pair must be a name/value tuple');
                    }
                    this.append(pair[0], pair[1]);
                }
            } else {
                // record<ByteString, ByteString>
                for (const key of Object.keys(init)){
                    const value = init[key];
                    this.append(key, value);
                }
            }
        } else {
            throw new TypeError('Provided initializer must be an object');
        }
    }
    /**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */ get(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key === undefined) {
            return null;
        }
        return this[MAP][key].join(', ');
    }
    /**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */ forEach(callback) {
        let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
        let pairs = getHeaders(this);
        let i = 0;
        while(i < pairs.length){
            var _pairs$i = pairs[i];
            const name = _pairs$i[0], value = _pairs$i[1];
            callback.call(thisArg, value, name, this);
            pairs = getHeaders(this);
            i++;
        }
    }
    /**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ set(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        this[MAP][key !== undefined ? key : name] = [
            value
        ];
    }
    /**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */ append(name, value) {
        name = `${name}`;
        value = `${value}`;
        validateName(name);
        validateValue(value);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            this[MAP][key].push(value);
        } else {
            this[MAP][name] = [
                value
            ];
        }
    }
    /**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */ has(name) {
        name = `${name}`;
        validateName(name);
        return find(this[MAP], name) !== undefined;
    }
    /**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */ delete(name) {
        name = `${name}`;
        validateName(name);
        const key = find(this[MAP], name);
        if (key !== undefined) {
            delete this[MAP][key];
        }
    }
    /**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */ raw() {
        return this[MAP];
    }
    /**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */ keys() {
        return createHeadersIterator(this, 'key');
    }
    /**
  * Get an iterator on values.
  *
  * @return  Iterator
  */ values() {
        return createHeadersIterator(this, 'value');
    }
    /**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */ [Symbol.iterator]() {
        return createHeadersIterator(this, 'key+value');
    }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
    value: 'Headers',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Headers.prototype, {
    get: {
        enumerable: true
    },
    forEach: {
        enumerable: true
    },
    set: {
        enumerable: true
    },
    append: {
        enumerable: true
    },
    has: {
        enumerable: true
    },
    delete: {
        enumerable: true
    },
    keys: {
        enumerable: true
    },
    values: {
        enumerable: true
    },
    entries: {
        enumerable: true
    }
});
function getHeaders(headers) {
    let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';
    const keys = Object.keys(headers[MAP]).sort();
    return keys.map(kind === 'key' ? function(k) {
        return k.toLowerCase();
    } : kind === 'value' ? function(k) {
        return headers[MAP][k].join(', ');
    } : function(k) {
        return [
            k.toLowerCase(),
            headers[MAP][k].join(', ')
        ];
    });
}
const INTERNAL = Symbol('internal');
function createHeadersIterator(target, kind) {
    const iterator = Object.create(HeadersIteratorPrototype);
    iterator[INTERNAL] = {
        target,
        kind,
        index: 0
    };
    return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf({
    next () {
        // istanbul ignore if
        if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
            throw new TypeError('Value of `this` is not a HeadersIterator');
        }
        var _INTERNAL = this[INTERNAL];
        const target = _INTERNAL.target, kind = _INTERNAL.kind, index = _INTERNAL.index;
        const values = getHeaders(target, kind);
        const len = values.length;
        if (index >= len) {
            return {
                value: undefined,
                done: true
            };
        }
        this[INTERNAL].index = index + 1;
        return {
            value: values[index],
            done: false
        };
    }
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
    value: 'HeadersIterator',
    writable: false,
    enumerable: false,
    configurable: true
});
/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */ function exportNodeCompatibleHeaders(headers) {
    const obj = Object.assign({
        __proto__: null
    }, headers[MAP]);
    // http.request() only supports string as Host header. This hack makes
    // specifying custom Host header possible.
    const hostHeaderKey = find(headers[MAP], 'Host');
    if (hostHeaderKey !== undefined) {
        obj[hostHeaderKey] = obj[hostHeaderKey][0];
    }
    return obj;
}
/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */ function createHeadersLenient(obj) {
    const headers = new Headers();
    for (const name of Object.keys(obj)){
        if (invalidTokenRegex.test(name)) {
            continue;
        }
        if (Array.isArray(obj[name])) {
            for (const val of obj[name]){
                if (invalidHeaderCharRegex.test(val)) {
                    continue;
                }
                if (headers[MAP][name] === undefined) {
                    headers[MAP][name] = [
                        val
                    ];
                } else {
                    headers[MAP][name].push(val);
                }
            }
        } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [
                obj[name]
            ];
        }
    }
    return headers;
}
const INTERNALS$1 = Symbol('Response internals');
// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;
/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */ class Response {
    constructor(){
        let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Body.call(this, body, opts);
        const status = opts.status || 200;
        const headers = new Headers(opts.headers);
        if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter
        };
    }
    get url() {
        return this[INTERNALS$1].url || '';
    }
    get status() {
        return this[INTERNALS$1].status;
    }
    /**
  * Convenience property representing if the request ended normally
  */ get ok() {
        return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
    }
    get redirected() {
        return this[INTERNALS$1].counter > 0;
    }
    get statusText() {
        return this[INTERNALS$1].statusText;
    }
    get headers() {
        return this[INTERNALS$1].headers;
    }
    /**
  * Clone this response
  *
  * @return  Response
  */ clone() {
        return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
        });
    }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
    url: {
        enumerable: true
    },
    status: {
        enumerable: true
    },
    ok: {
        enumerable: true
    },
    redirected: {
        enumerable: true
    },
    statusText: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    clone: {
        enumerable: true
    }
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
    value: 'Response',
    writable: false,
    enumerable: false,
    configurable: true
});
const INTERNALS$2 = Symbol('Request internals');
const URL = Url.URL || whatwgUrl.URL;
// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;
/**
 * Wrapper around `new URL` to handle arbitrary URLs
 *
 * @param  {string} urlStr
 * @return {void}
 */ function parseURL(urlStr) {
    /*
 	Check whether the URL is absolute or not
 		Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
 	Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
 */ if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
        urlStr = new URL(urlStr).toString();
    }
    // Fallback to old implementation for arbitrary URLs
    return parse_url(urlStr);
}
const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;
/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */ function isRequest(input) {
    return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}
function isAbortSignal(signal) {
    const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
    return !!(proto && proto.constructor.name === 'AbortSignal');
}
/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */ class Request {
    constructor(input){
        let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let parsedURL;
        // normalize input
        if (!isRequest(input)) {
            if (input && input.href) {
                // in order to support Node.js' Url objects; though WHATWG's URL objects
                // will fall into this branch also (since their `toString()` will return
                // `href` property anyway)
                parsedURL = parseURL(input.href);
            } else {
                // coerce input to a string before attempting to parse
                parsedURL = parseURL(`${input}`);
            }
            input = {};
        } else {
            parsedURL = parseURL(input.url);
        }
        let method = init.method || input.method || 'GET';
        method = method.toUpperCase();
        if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body');
        }
        let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;
        Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
        });
        const headers = new Headers(init.headers || input.headers || {});
        if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody);
            if (contentType) {
                headers.append('Content-Type', contentType);
            }
        }
        let signal = isRequest(input) ? input.signal : null;
        if ('signal' in init) signal = init.signal;
        if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError('Expected signal to be an instanceof AbortSignal');
        }
        this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal
        };
        // node-fetch-only options
        this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
        this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
        this.counter = init.counter || input.counter || 0;
        this.agent = init.agent || input.agent;
    }
    get method() {
        return this[INTERNALS$2].method;
    }
    get url() {
        return format_url(this[INTERNALS$2].parsedURL);
    }
    get headers() {
        return this[INTERNALS$2].headers;
    }
    get redirect() {
        return this[INTERNALS$2].redirect;
    }
    get signal() {
        return this[INTERNALS$2].signal;
    }
    /**
  * Clone this request
  *
  * @return  Request
  */ clone() {
        return new Request(this);
    }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
    value: 'Request',
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties(Request.prototype, {
    method: {
        enumerable: true
    },
    url: {
        enumerable: true
    },
    headers: {
        enumerable: true
    },
    redirect: {
        enumerable: true
    },
    clone: {
        enumerable: true
    },
    signal: {
        enumerable: true
    }
});
/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */ function getNodeRequestOptions(request) {
    const parsedURL = request[INTERNALS$2].parsedURL;
    const headers = new Headers(request[INTERNALS$2].headers);
    // fetch step 1.3
    if (!headers.has('Accept')) {
        headers.set('Accept', '*/*');
    }
    // Basic fetch
    if (!parsedURL.protocol || !parsedURL.hostname) {
        throw new TypeError('Only absolute URLs are supported');
    }
    if (!/^https?:$/.test(parsedURL.protocol)) {
        throw new TypeError('Only HTTP(S) protocols are supported');
    }
    if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
        throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
    }
    // HTTP-network-or-cache fetch steps 2.4-2.7
    let contentLengthValue = null;
    if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
        contentLengthValue = '0';
    }
    if (request.body != null) {
        const totalBytes = getTotalBytes(request);
        if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes);
        }
    }
    if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue);
    }
    // HTTP-network-or-cache fetch step 2.11
    if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
    }
    // HTTP-network-or-cache fetch step 2.15
    if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate');
    }
    let agent = request.agent;
    if (typeof agent === 'function') {
        agent = agent(parsedURL);
    }
    if (!headers.has('Connection') && !agent) {
        headers.set('Connection', 'close');
    }
    // HTTP-network fetch step 4.2
    // chunked encoding is handled by Node.js
    return Object.assign({}, parsedURL, {
        method: request.method,
        headers: exportNodeCompatibleHeaders(headers),
        agent
    });
}
/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */ /**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */ function AbortError(message) {
    Error.call(this, message);
    this.type = 'aborted';
    this.message = message;
    // hide custom error implementation details from end-users
    Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';
const URL$1 = Url.URL || whatwgUrl.URL;
// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const isDomainOrSubdomain = function isDomainOrSubdomain(destination, original) {
    const orig = new URL$1(original).hostname;
    const dest = new URL$1(destination).hostname;
    return orig === dest || orig[orig.length - dest.length - 1] === '.' && orig.endsWith(dest);
};
/**
 * isSameProtocol reports whether the two provided URLs use the same protocol.
 *
 * Both domains must already be in canonical form.
 * @param {string|URL} original
 * @param {string|URL} destination
 */ const isSameProtocol = function isSameProtocol(destination, original) {
    const orig = new URL$1(original).protocol;
    const dest = new URL$1(destination).protocol;
    return orig === dest;
};
/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */ function fetch(url, opts) {
    // allow custom promise
    if (!fetch.Promise) {
        throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
    }
    Body.Promise = fetch.Promise;
    // wrap http.request into fetch
    return new fetch.Promise(function(resolve, reject) {
        // build request object
        const request = new Request(url, opts);
        const options = getNodeRequestOptions(request);
        const send = (options.protocol === 'https:' ? https : http).request;
        const signal = request.signal;
        let response = null;
        const abort = function abort() {
            let error = new AbortError('The user aborted a request.');
            reject(error);
            if (request.body && request.body instanceof Stream.Readable) {
                destroyStream(request.body, error);
            }
            if (!response || !response.body) return;
            response.body.emit('error', error);
        };
        if (signal && signal.aborted) {
            abort();
            return;
        }
        const abortAndFinalize = function abortAndFinalize() {
            abort();
            finalize();
        };
        // send request
        const req = send(options);
        let reqTimeout;
        if (signal) {
            signal.addEventListener('abort', abortAndFinalize);
        }
        function finalize() {
            req.abort();
            if (signal) signal.removeEventListener('abort', abortAndFinalize);
            clearTimeout(reqTimeout);
        }
        if (request.timeout) {
            req.once('socket', function(socket) {
                reqTimeout = setTimeout(function() {
                    reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
                    finalize();
                }, request.timeout);
            });
        }
        req.on('error', function(err) {
            reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
            if (response && response.body) {
                destroyStream(response.body, err);
            }
            finalize();
        });
        fixResponseChunkedTransferBadEnding(req, function(err) {
            if (signal && signal.aborted) {
                return;
            }
            if (response && response.body) {
                destroyStream(response.body, err);
            }
        });
        /* c8 ignore next 18 */ if (parseInt(process.version.substring(1)) < 14) {
            // Before Node.js 14, pipeline() does not fully support async iterators and does not always
            // properly handle when the socket close/end events are out of order.
            req.on('socket', function(s) {
                s.addListener('close', function(hadError) {
                    // if a data listener is still present we didn't end cleanly
                    const hasDataListener = s.listenerCount('data') > 0;
                    // if end happened before close but the socket didn't emit an error, do it now
                    if (response && hasDataListener && !hadError && !(signal && signal.aborted)) {
                        const err = new Error('Premature close');
                        err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                        response.body.emit('error', err);
                    }
                });
            });
        }
        req.on('response', function(res) {
            clearTimeout(reqTimeout);
            const headers = createHeadersLenient(res.headers);
            // HTTP fetch step 5
            if (fetch.isRedirect(res.statusCode)) {
                // HTTP fetch step 5.2
                const location = headers.get('Location');
                // HTTP fetch step 5.3
                let locationURL = null;
                try {
                    locationURL = location === null ? null : new URL$1(location, request.url).toString();
                } catch (err) {
                    // error here can only be invalid URL in Location: header
                    // do not throw when options.redirect == manual
                    // let the user extract the errorneous redirect URL
                    if (request.redirect !== 'manual') {
                        reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
                        finalize();
                        return;
                    }
                }
                // HTTP fetch step 5.5
                switch(request.redirect){
                    case 'error':
                        reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
                        finalize();
                        return;
                    case 'manual':
                        // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                        if (locationURL !== null) {
                            // handle corrupted header
                            try {
                                headers.set('Location', locationURL);
                            } catch (err) {
                                // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                                reject(err);
                            }
                        }
                        break;
                    case 'follow':
                        // HTTP-redirect fetch step 2
                        if (locationURL === null) {
                            break;
                        }
                        // HTTP-redirect fetch step 5
                        if (request.counter >= request.follow) {
                            reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 6 (counter increment)
                        // Create a new Request object.
                        const requestOpts = {
                            headers: new Headers(request.headers),
                            follow: request.follow,
                            counter: request.counter + 1,
                            agent: request.agent,
                            compress: request.compress,
                            method: request.method,
                            body: request.body,
                            signal: request.signal,
                            timeout: request.timeout,
                            size: request.size
                        };
                        if (!isDomainOrSubdomain(request.url, locationURL) || !isSameProtocol(request.url, locationURL)) {
                            for (const name of [
                                'authorization',
                                'www-authenticate',
                                'cookie',
                                'cookie2'
                            ]){
                                requestOpts.headers.delete(name);
                            }
                        }
                        // HTTP-redirect fetch step 9
                        if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
                            reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
                            finalize();
                            return;
                        }
                        // HTTP-redirect fetch step 11
                        if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
                            requestOpts.method = 'GET';
                            requestOpts.body = undefined;
                            requestOpts.headers.delete('content-length');
                        }
                        // HTTP-redirect fetch step 15
                        resolve(fetch(new Request(locationURL, requestOpts)));
                        finalize();
                        return;
                }
            }
            // prepare response
            res.once('end', function() {
                if (signal) signal.removeEventListener('abort', abortAndFinalize);
            });
            let body = res.pipe(new PassThrough$1());
            const response_options = {
                url: request.url,
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: headers,
                size: request.size,
                timeout: request.timeout,
                counter: request.counter
            };
            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding');
            // HTTP-network fetch step 12.1.1.4: handle content codings
            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
                flush: zlib.Z_SYNC_FLUSH,
                finishFlush: zlib.Z_SYNC_FLUSH
            };
            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
                body = body.pipe(zlib.createGunzip(zlibOptions));
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
                // handle the infamous raw deflate response from old servers
                // a hack for old IIS and Apache servers
                const raw = res.pipe(new PassThrough$1());
                raw.once('data', function(chunk) {
                    // see http://stackoverflow.com/questions/37519828
                    if ((chunk[0] & 0x0F) === 0x08) {
                        body = body.pipe(zlib.createInflate());
                    } else {
                        body = body.pipe(zlib.createInflateRaw());
                    }
                    response = new Response(body, response_options);
                    resolve(response);
                });
                raw.on('end', function() {
                    // some old IIS servers return zero-length OK deflate responses, so 'data' is never emitted.
                    if (!response) {
                        response = new Response(body, response_options);
                        resolve(response);
                    }
                });
                return;
            }
            // for br
            if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
                body = body.pipe(zlib.createBrotliDecompress());
                response = new Response(body, response_options);
                resolve(response);
                return;
            }
            // otherwise, use response as-is
            response = new Response(body, response_options);
            resolve(response);
        });
        writeToStream(req, request);
    });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
    let socket;
    request.on('socket', function(s) {
        socket = s;
    });
    request.on('response', function(response) {
        const headers = response.headers;
        if (headers['transfer-encoding'] === 'chunked' && !headers['content-length']) {
            response.once('close', function(hadError) {
                // tests for socket presence, as in some situations the
                // the 'socket' event is not triggered for the request
                // (happens in deno), avoids `TypeError`
                // if a data listener is still present we didn't end cleanly
                const hasDataListener = socket && socket.listenerCount('data') > 0;
                if (hasDataListener && !hadError) {
                    const err = new Error('Premature close');
                    err.code = 'ERR_STREAM_PREMATURE_CLOSE';
                    errorCallback(err);
                }
            });
        }
    });
}
function destroyStream(stream, err) {
    if (stream.destroy) {
        stream.destroy(err);
    } else {
        // node < 8
        stream.emit('error', err);
        stream.end();
    }
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */ fetch.isRedirect = function(code) {
    return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};
// expose Promise
fetch.Promise = /*TURBOPACK member replacement*/ __turbopack_context__.g.Promise;
module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Error format
 *
 * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
 */ class PostgrestError extends Error {
    constructor(context){
        super(context.message);
        this.name = 'PostgrestError';
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError; //# sourceMappingURL=PostgrestError.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
// @ts-ignore
const node_fetch_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)"));
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)"));
class PostgrestBuilder {
    constructor(builder){
        var _a, _b;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_a = builder.shouldThrowOnError) !== null && _a !== void 0 ? _a : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_b = builder.isMaybeSingle) !== null && _b !== void 0 ? _b : false;
        if (builder.fetch) {
            this.fetch = builder.fetch;
        } else if (typeof fetch === 'undefined') {
            this.fetch = node_fetch_1.default;
        } else {
            this.fetch = fetch;
        }
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Set an HTTP header for the request.
     */ setHeader(name, value) {
        this.headers = new Headers(this.headers);
        this.headers.set(name, value);
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) {
        // skip
        } else if ([
            'GET',
            'HEAD'
        ].includes(this.method)) {
            this.headers.set('Accept-Profile', this.schema);
        } else {
            this.headers.set('Content-Profile', this.schema);
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers.set('Content-Type', 'application/json');
        }
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c, _d;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== 'HEAD') {
                    const body = await res.text();
                    if (body === '') {
                    // Prefer: return=minimal
                    } else if (this.headers.get('Accept') === 'text/csv') {
                        data = body;
                    } else if (this.headers.get('Accept') && ((_a = this.headers.get('Accept')) === null || _a === void 0 ? void 0 : _a.includes('application/vnd.pgrst.plan+text'))) {
                        data = body;
                    } else {
                        data = JSON.parse(body);
                    }
                }
                const countHeader = (_b = this.headers.get('Prefer')) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                const contentRange = (_c = res.headers.get('content-range')) === null || _c === void 0 ? void 0 : _c.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: 'PGRST116',
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned'
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = 'Not Acceptable';
                    } else if (data.length === 1) {
                        data = data[0];
                    } else {
                        data = null;
                    }
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = 'OK';
                    }
                } catch (_e) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === '') {
                        status = 204;
                        statusText = 'No Content';
                    } else {
                        error = {
                            message: body
                        };
                    }
                }
                if (error && this.isMaybeSingle && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes('0 rows'))) {
                    error = null;
                    status = 200;
                    statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                    throw new PostgrestError_1.default(error);
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError)=>{
                var _a, _b, _c;
                return {
                    error: {
                        message: `${(_a = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _a !== void 0 ? _a : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                        details: `${(_b = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _b !== void 0 ? _b : ''}`,
                        hint: '',
                        code: `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.code) !== null && _c !== void 0 ? _c : ''}`
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ''
                };
            });
        }
        return res.then(onfulfilled, onrejected);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        /* istanbul ignore next */ return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */ overrideTypes() {
        return this;
    }
}
exports.default = PostgrestBuilder; //# sourceMappingURL=PostgrestBuilder.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)"));
class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        this.headers.append('Prefer', 'return=representation');
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === 'undefined' ? 'offset' : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === 'GET') {
            this.headers.set('Accept', 'application/json');
        } else {
            this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        }
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers.set('Accept', 'text/csv');
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers.set('Accept', 'application/geo+json');
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text' } = {}) {
        var _a;
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null
        ].filter(Boolean).join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers.get('Accept')) !== null && _a !== void 0 ? _a : 'application/json';
        this.headers.set('Accept', `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
        if (format === 'json') {
            return this;
        } else {
            return this;
        }
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        this.headers.append('Prefer', 'tx=rollback');
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */ maxAffected(value) {
        this.headers.append('Prefer', 'handling=strict');
        this.headers.append('Prefer', `max-affected=${value}`);
        return this;
    }
}
exports.default = PostgrestTransformBuilder; //# sourceMappingURL=PostgrestTransformBuilder.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)"));
class PostgrestFilterBuilder extends PostgrestTransformBuilder_1.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && new RegExp('[,()]').test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(',');
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(column, `cs.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `cd.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `ov.${value}`);
        } else {
            // array
            this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        } else if (type === 'phrase') {
            typePart = 'ph';
        } else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : 'or';
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder; //# sourceMappingURL=PostgrestFilterBuilder.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)"));
class PostgrestQueryBuilder {
    constructor(url, { headers = {}, schema, fetch: fetch1 }){
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, { head = false, count } = {}) {
        const method = head ? 'HEAD' : 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', `missing=default`);
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPSERT on the table or view. Depending on the column(s) passed
     * to `onConflict`, `.upsert()` allows you to perform the equivalent of
     * `.insert()` if a row with the corresponding `onConflict` columns doesn't
     * exist, or if it does exist, perform an alternative action depending on
     * `ignoreDuplicates`.
     *
     * By default, upserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to upsert with. Pass an object to upsert a
     * single row or an array to upsert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
     * duplicate rows are determined. Two rows are duplicates if all the
     * `onConflict` columns are equal.
     *
     * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
     * `false`, duplicate rows are merged with existing rows.
     *
     * @param options.count - Count algorithm to use to count upserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. This only applies when
     * inserting new rows, not when merging with existing rows under
     * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
     */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        this.headers.append('Prefer', `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`);
        if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', 'missing=default');
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        var _a;
        const method = 'PATCH';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        var _a;
        const method = 'DELETE';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestQueryBuilder; //# sourceMappingURL=PostgrestQueryBuilder.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)"));
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)"));
/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */ class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     */ constructor(url, { headers = {}, schema, fetch: fetch1 } = {}){
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        const url = new URL(`${this.url}/${relation}`);
        return new PostgrestQueryBuilder_1.default(url, {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        var _a;
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head || get) {
            method = head ? 'HEAD' : 'GET';
            Object.entries(args)// params with undefined value needs to be filtered out, otherwise it'll
            // show up as `?param=undefined`
            .filter(([_, value])=>value !== undefined)// array values need special syntax
            .map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(',')}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = 'POST';
            body = args;
        }
        const headers = new Headers(this.headers);
        if (count) {
            headers.set('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestClient; //# sourceMappingURL=PostgrestClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostgrestError = exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
// Always update wrapper.mjs when updating this file.
const PostgrestClient_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-rsc] (ecmascript)"));
exports.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-rsc] (ecmascript)"));
exports.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-rsc] (ecmascript)"));
exports.PostgrestError = PostgrestError_1.default;
exports.default = {
    PostgrestClient: PostgrestClient_1.default,
    PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
    PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
    PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
    PostgrestBuilder: PostgrestBuilder_1.default,
    PostgrestError: PostgrestError_1.default
}; //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgrestBuilder",
    ()=>PostgrestBuilder,
    "PostgrestClient",
    ()=>PostgrestClient,
    "PostgrestError",
    ()=>PostgrestError,
    "PostgrestFilterBuilder",
    ()=>PostgrestFilterBuilder,
    "PostgrestQueryBuilder",
    ()=>PostgrestQueryBuilder,
    "PostgrestTransformBuilder",
    ()=>PostgrestTransformBuilder,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-rsc] (ecmascript)");
;
const { PostgrestClient, PostgrestQueryBuilder, PostgrestFilterBuilder, PostgrestTransformBuilder, PostgrestBuilder, PostgrestError } = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
;
const __TURBOPACK__default__export__ = {
    PostgrestClient,
    PostgrestQueryBuilder,
    PostgrestFilterBuilder,
    PostgrestTransformBuilder,
    PostgrestBuilder,
    PostgrestError
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WebSocketFactory",
    ()=>WebSocketFactory,
    "default",
    ()=>__TURBOPACK__default__export__
]);
class WebSocketFactory {
    static detectEnvironment() {
        var _a;
        if (typeof WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: WebSocket
            };
        }
        if (typeof globalThis !== 'undefined' && typeof globalThis.WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: globalThis.WebSocket
            };
        }
        if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket !== 'undefined') {
            return {
                type: 'native',
                constructor: /*TURBOPACK member replacement*/ __turbopack_context__.g.WebSocket
            };
        }
        if (typeof globalThis !== 'undefined' && typeof globalThis.WebSocketPair !== 'undefined' && typeof globalThis.WebSocket === 'undefined') {
            return {
                type: 'cloudflare',
                error: 'Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.',
                workaround: 'Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.'
            };
        }
        if (typeof globalThis !== 'undefined' && globalThis.EdgeRuntime || typeof navigator !== 'undefined' && ((_a = navigator.userAgent) === null || _a === void 0 ? void 0 : _a.includes('Vercel-Edge'))) {
            return {
                type: 'unsupported',
                error: 'Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.',
                workaround: 'Use serverless functions or a different deployment target for WebSocket functionality.'
            };
        }
        if (typeof process !== 'undefined') {
            // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
            const processVersions = process['versions'];
            if (processVersions && processVersions['node']) {
                // Remove 'v' prefix if present and parse the major version
                const versionString = processVersions['node'];
                const nodeVersion = parseInt(versionString.replace(/^v/, '').split('.')[0]);
                // Node.js 22+ should have native WebSocket
                if (nodeVersion >= 22) {
                    // Check if native WebSocket is available (should be in Node.js 22+)
                    if (typeof globalThis.WebSocket !== 'undefined') {
                        return {
                            type: 'native',
                            constructor: globalThis.WebSocket
                        };
                    }
                    // If not available, user needs to provide it
                    return {
                        type: 'unsupported',
                        error: `Node.js ${nodeVersion} detected but native WebSocket not found.`,
                        workaround: 'Provide a WebSocket implementation via the transport option.'
                    };
                }
                // Node.js < 22 doesn't have native WebSocket
                return {
                    type: 'unsupported',
                    error: `Node.js ${nodeVersion} detected without native WebSocket support.`,
                    workaround: 'For Node.js < 22, install "ws" package and provide it via the transport option:\n' + 'import ws from "ws"\n' + 'new RealtimeClient(url, { transport: ws })'
                };
            }
        }
        return {
            type: 'unsupported',
            error: 'Unknown JavaScript runtime without WebSocket support.',
            workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
        };
    }
    static getWebSocketConstructor() {
        const env = this.detectEnvironment();
        if (env.constructor) {
            return env.constructor;
        }
        let errorMessage = env.error || 'WebSocket not supported in this environment.';
        if (env.workaround) {
            errorMessage += `\n\nSuggested solution: ${env.workaround}`;
        }
        throw new Error(errorMessage);
    }
    static createWebSocket(url, protocols) {
        const WS = this.getWebSocketConstructor();
        return new WS(url, protocols);
    }
    static isWebSocketSupported() {
        try {
            const env = this.detectEnvironment();
            return env.type === 'native' || env.type === 'ws';
        } catch (_a) {
            return false;
        }
    }
}
const __TURBOPACK__default__export__ = WebSocketFactory;
 //# sourceMappingURL=websocket-factory.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.15.5'; //# sourceMappingURL=version.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHANNEL_EVENTS",
    ()=>CHANNEL_EVENTS,
    "CHANNEL_STATES",
    ()=>CHANNEL_STATES,
    "CONNECTION_STATE",
    ()=>CONNECTION_STATE,
    "DEFAULT_TIMEOUT",
    ()=>DEFAULT_TIMEOUT,
    "DEFAULT_VERSION",
    ()=>DEFAULT_VERSION,
    "MAX_PUSH_BUFFER_SIZE",
    ()=>MAX_PUSH_BUFFER_SIZE,
    "SOCKET_STATES",
    ()=>SOCKET_STATES,
    "TRANSPORTS",
    ()=>TRANSPORTS,
    "VERSION",
    ()=>VERSION,
    "VSN",
    ()=>VSN,
    "WS_CLOSE_NORMAL",
    ()=>WS_CLOSE_NORMAL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/version.js [app-rsc] (ecmascript)");
;
const DEFAULT_VERSION = `realtime-js/${__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"]}`;
const VSN = '1.0.0';
const VERSION = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"];
const DEFAULT_TIMEOUT = 10000;
const WS_CLOSE_NORMAL = 1000;
const MAX_PUSH_BUFFER_SIZE = 100;
var SOCKET_STATES;
(function(SOCKET_STATES) {
    SOCKET_STATES[SOCKET_STATES["connecting"] = 0] = "connecting";
    SOCKET_STATES[SOCKET_STATES["open"] = 1] = "open";
    SOCKET_STATES[SOCKET_STATES["closing"] = 2] = "closing";
    SOCKET_STATES[SOCKET_STATES["closed"] = 3] = "closed";
})(SOCKET_STATES || (SOCKET_STATES = {}));
var CHANNEL_STATES;
(function(CHANNEL_STATES) {
    CHANNEL_STATES["closed"] = "closed";
    CHANNEL_STATES["errored"] = "errored";
    CHANNEL_STATES["joined"] = "joined";
    CHANNEL_STATES["joining"] = "joining";
    CHANNEL_STATES["leaving"] = "leaving";
})(CHANNEL_STATES || (CHANNEL_STATES = {}));
var CHANNEL_EVENTS;
(function(CHANNEL_EVENTS) {
    CHANNEL_EVENTS["close"] = "phx_close";
    CHANNEL_EVENTS["error"] = "phx_error";
    CHANNEL_EVENTS["join"] = "phx_join";
    CHANNEL_EVENTS["reply"] = "phx_reply";
    CHANNEL_EVENTS["leave"] = "phx_leave";
    CHANNEL_EVENTS["access_token"] = "access_token";
})(CHANNEL_EVENTS || (CHANNEL_EVENTS = {}));
var TRANSPORTS;
(function(TRANSPORTS) {
    TRANSPORTS["websocket"] = "websocket";
})(TRANSPORTS || (TRANSPORTS = {}));
var CONNECTION_STATE;
(function(CONNECTION_STATE) {
    CONNECTION_STATE["Connecting"] = "connecting";
    CONNECTION_STATE["Open"] = "open";
    CONNECTION_STATE["Closing"] = "closing";
    CONNECTION_STATE["Closed"] = "closed";
})(CONNECTION_STATE || (CONNECTION_STATE = {})); //# sourceMappingURL=constants.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file draws heavily from https://github.com/phoenixframework/phoenix/commit/cf098e9cf7a44ee6479d31d911a97d3c7430c6fe
// License: https://github.com/phoenixframework/phoenix/blob/master/LICENSE.md
__turbopack_context__.s([
    "default",
    ()=>Serializer
]);
class Serializer {
    constructor(){
        this.HEADER_LENGTH = 1;
    }
    decode(rawPayload, callback) {
        if (rawPayload.constructor === ArrayBuffer) {
            return callback(this._binaryDecode(rawPayload));
        }
        if (typeof rawPayload === 'string') {
            return callback(JSON.parse(rawPayload));
        }
        return callback({});
    }
    _binaryDecode(buffer) {
        const view = new DataView(buffer);
        const decoder = new TextDecoder();
        return this._decodeBroadcast(buffer, view, decoder);
    }
    _decodeBroadcast(buffer, view, decoder) {
        const topicSize = view.getUint8(1);
        const eventSize = view.getUint8(2);
        let offset = this.HEADER_LENGTH + 2;
        const topic = decoder.decode(buffer.slice(offset, offset + topicSize));
        offset = offset + topicSize;
        const event = decoder.decode(buffer.slice(offset, offset + eventSize));
        offset = offset + eventSize;
        const data = JSON.parse(decoder.decode(buffer.slice(offset, buffer.byteLength)));
        return {
            ref: null,
            topic: topic,
            event: event,
            payload: data
        };
    }
} //# sourceMappingURL=serializer.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Creates a timer that accepts a `timerCalc` function to perform calculated timeout retries, such as exponential backoff.
 *
 * @example
 *    let reconnectTimer = new Timer(() => this.connect(), function(tries){
 *      return [1000, 5000, 10000][tries - 1] || 10000
 *    })
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 *    reconnectTimer.scheduleTimeout() // fires after 5000
 *    reconnectTimer.reset()
 *    reconnectTimer.scheduleTimeout() // fires after 1000
 */ __turbopack_context__.s([
    "default",
    ()=>Timer
]);
class Timer {
    constructor(callback, timerCalc){
        this.callback = callback;
        this.timerCalc = timerCalc;
        this.timer = undefined;
        this.tries = 0;
        this.callback = callback;
        this.timerCalc = timerCalc;
    }
    reset() {
        this.tries = 0;
        clearTimeout(this.timer);
        this.timer = undefined;
    }
    // Cancels any previous scheduleTimeout and schedules callback
    scheduleTimeout() {
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.tries = this.tries + 1;
            this.callback();
        }, this.timerCalc(this.tries + 1));
    }
} //# sourceMappingURL=timer.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helpers to convert the change Payload into native JS types.
 */ // Adapted from epgsql (src/epgsql_binary.erl), this module licensed under
// 3-clause BSD found here: https://raw.githubusercontent.com/epgsql/epgsql/devel/LICENSE
__turbopack_context__.s([
    "PostgresTypes",
    ()=>PostgresTypes,
    "convertCell",
    ()=>convertCell,
    "convertChangeData",
    ()=>convertChangeData,
    "convertColumn",
    ()=>convertColumn,
    "httpEndpointURL",
    ()=>httpEndpointURL,
    "toArray",
    ()=>toArray,
    "toBoolean",
    ()=>toBoolean,
    "toJson",
    ()=>toJson,
    "toNumber",
    ()=>toNumber,
    "toTimestampString",
    ()=>toTimestampString
]);
var PostgresTypes;
(function(PostgresTypes) {
    PostgresTypes["abstime"] = "abstime";
    PostgresTypes["bool"] = "bool";
    PostgresTypes["date"] = "date";
    PostgresTypes["daterange"] = "daterange";
    PostgresTypes["float4"] = "float4";
    PostgresTypes["float8"] = "float8";
    PostgresTypes["int2"] = "int2";
    PostgresTypes["int4"] = "int4";
    PostgresTypes["int4range"] = "int4range";
    PostgresTypes["int8"] = "int8";
    PostgresTypes["int8range"] = "int8range";
    PostgresTypes["json"] = "json";
    PostgresTypes["jsonb"] = "jsonb";
    PostgresTypes["money"] = "money";
    PostgresTypes["numeric"] = "numeric";
    PostgresTypes["oid"] = "oid";
    PostgresTypes["reltime"] = "reltime";
    PostgresTypes["text"] = "text";
    PostgresTypes["time"] = "time";
    PostgresTypes["timestamp"] = "timestamp";
    PostgresTypes["timestamptz"] = "timestamptz";
    PostgresTypes["timetz"] = "timetz";
    PostgresTypes["tsrange"] = "tsrange";
    PostgresTypes["tstzrange"] = "tstzrange";
})(PostgresTypes || (PostgresTypes = {}));
const convertChangeData = (columns, record, options = {})=>{
    var _a;
    const skipTypes = (_a = options.skipTypes) !== null && _a !== void 0 ? _a : [];
    return Object.keys(record).reduce((acc, rec_key)=>{
        acc[rec_key] = convertColumn(rec_key, columns, record, skipTypes);
        return acc;
    }, {});
};
const convertColumn = (columnName, columns, record, skipTypes)=>{
    const column = columns.find((x)=>x.name === columnName);
    const colType = column === null || column === void 0 ? void 0 : column.type;
    const value = record[columnName];
    if (colType && !skipTypes.includes(colType)) {
        return convertCell(colType, value);
    }
    return noop(value);
};
const convertCell = (type, value)=>{
    // if data type is an array
    if (type.charAt(0) === '_') {
        const dataType = type.slice(1, type.length);
        return toArray(value, dataType);
    }
    // If not null, convert to correct type.
    switch(type){
        case PostgresTypes.bool:
            return toBoolean(value);
        case PostgresTypes.float4:
        case PostgresTypes.float8:
        case PostgresTypes.int2:
        case PostgresTypes.int4:
        case PostgresTypes.int8:
        case PostgresTypes.numeric:
        case PostgresTypes.oid:
            return toNumber(value);
        case PostgresTypes.json:
        case PostgresTypes.jsonb:
            return toJson(value);
        case PostgresTypes.timestamp:
            return toTimestampString(value); // Format to be consistent with PostgREST
        case PostgresTypes.abstime:
        case PostgresTypes.date:
        case PostgresTypes.daterange:
        case PostgresTypes.int4range:
        case PostgresTypes.int8range:
        case PostgresTypes.money:
        case PostgresTypes.reltime:
        case PostgresTypes.text:
        case PostgresTypes.time:
        case PostgresTypes.timestamptz:
        case PostgresTypes.timetz:
        case PostgresTypes.tsrange:
        case PostgresTypes.tstzrange:
            return noop(value);
        default:
            // Return the value for remaining types
            return noop(value);
    }
};
const noop = (value)=>{
    return value;
};
const toBoolean = (value)=>{
    switch(value){
        case 't':
            return true;
        case 'f':
            return false;
        default:
            return value;
    }
};
const toNumber = (value)=>{
    if (typeof value === 'string') {
        const parsedValue = parseFloat(value);
        if (!Number.isNaN(parsedValue)) {
            return parsedValue;
        }
    }
    return value;
};
const toJson = (value)=>{
    if (typeof value === 'string') {
        try {
            return JSON.parse(value);
        } catch (error) {
            console.log(`JSON parse error: ${error}`);
            return value;
        }
    }
    return value;
};
const toArray = (value, type)=>{
    if (typeof value !== 'string') {
        return value;
    }
    const lastIdx = value.length - 1;
    const closeBrace = value[lastIdx];
    const openBrace = value[0];
    // Confirm value is a Postgres array by checking curly brackets
    if (openBrace === '{' && closeBrace === '}') {
        let arr;
        const valTrim = value.slice(1, lastIdx);
        // TODO: find a better solution to separate Postgres array data
        try {
            arr = JSON.parse('[' + valTrim + ']');
        } catch (_) {
            // WARNING: splitting on comma does not cover all edge cases
            arr = valTrim ? valTrim.split(',') : [];
        }
        return arr.map((val)=>convertCell(type, val));
    }
    return value;
};
const toTimestampString = (value)=>{
    if (typeof value === 'string') {
        return value.replace(' ', 'T');
    }
    return value;
};
const httpEndpointURL = (socketUrl)=>{
    let url = socketUrl;
    url = url.replace(/^ws/i, 'http');
    url = url.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, '');
    return url.replace(/\/+$/, '') + '/api/broadcast';
}; //# sourceMappingURL=transformers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Push
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)");
;
class Push {
    /**
     * Initializes the Push
     *
     * @param channel The Channel
     * @param event The event, for example `"phx_join"`
     * @param payload The payload, for example `{user_id: 123}`
     * @param timeout The push timeout in milliseconds
     */ constructor(channel, event, payload = {}, timeout = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"]){
        this.channel = channel;
        this.event = event;
        this.payload = payload;
        this.timeout = timeout;
        this.sent = false;
        this.timeoutTimer = undefined;
        this.ref = '';
        this.receivedResp = null;
        this.recHooks = [];
        this.refEvent = null;
    }
    resend(timeout) {
        this.timeout = timeout;
        this._cancelRefEvent();
        this.ref = '';
        this.refEvent = null;
        this.receivedResp = null;
        this.sent = false;
        this.send();
    }
    send() {
        if (this._hasReceived('timeout')) {
            return;
        }
        this.startTimeout();
        this.sent = true;
        this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef()
        });
    }
    updatePayload(payload) {
        this.payload = Object.assign(Object.assign({}, this.payload), payload);
    }
    receive(status, callback) {
        var _a;
        if (this._hasReceived(status)) {
            callback((_a = this.receivedResp) === null || _a === void 0 ? void 0 : _a.response);
        }
        this.recHooks.push({
            status,
            callback
        });
        return this;
    }
    startTimeout() {
        if (this.timeoutTimer) {
            return;
        }
        this.ref = this.channel.socket._makeRef();
        this.refEvent = this.channel._replyEventName(this.ref);
        const callback = (payload)=>{
            this._cancelRefEvent();
            this._cancelTimeout();
            this.receivedResp = payload;
            this._matchReceive(payload);
        };
        this.channel._on(this.refEvent, {}, callback);
        this.timeoutTimer = setTimeout(()=>{
            this.trigger('timeout', {});
        }, this.timeout);
    }
    trigger(status, response) {
        if (this.refEvent) this.channel._trigger(this.refEvent, {
            status,
            response
        });
    }
    destroy() {
        this._cancelRefEvent();
        this._cancelTimeout();
    }
    _cancelRefEvent() {
        if (!this.refEvent) {
            return;
        }
        this.channel._off(this.refEvent, {});
    }
    _cancelTimeout() {
        clearTimeout(this.timeoutTimer);
        this.timeoutTimer = undefined;
    }
    _matchReceive({ status, response }) {
        this.recHooks.filter((h)=>h.status === status).forEach((h)=>h.callback(response));
    }
    _hasReceived(status) {
        return this.receivedResp && this.receivedResp.status === status;
    }
} //# sourceMappingURL=push.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  This file draws heavily from https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/assets/js/phoenix/presence.js
  License: https://github.com/phoenixframework/phoenix/blob/d344ec0a732ab4ee204215b31de69cf4be72e3bf/LICENSE.md
*/ __turbopack_context__.s([
    "REALTIME_PRESENCE_LISTEN_EVENTS",
    ()=>REALTIME_PRESENCE_LISTEN_EVENTS,
    "default",
    ()=>RealtimePresence
]);
var REALTIME_PRESENCE_LISTEN_EVENTS;
(function(REALTIME_PRESENCE_LISTEN_EVENTS) {
    REALTIME_PRESENCE_LISTEN_EVENTS["SYNC"] = "sync";
    REALTIME_PRESENCE_LISTEN_EVENTS["JOIN"] = "join";
    REALTIME_PRESENCE_LISTEN_EVENTS["LEAVE"] = "leave";
})(REALTIME_PRESENCE_LISTEN_EVENTS || (REALTIME_PRESENCE_LISTEN_EVENTS = {}));
class RealtimePresence {
    /**
     * Initializes the Presence.
     *
     * @param channel - The RealtimeChannel
     * @param opts - The options,
     *        for example `{events: {state: 'state', diff: 'diff'}}`
     */ constructor(channel, opts){
        this.channel = channel;
        this.state = {};
        this.pendingDiffs = [];
        this.joinRef = null;
        this.enabled = false;
        this.caller = {
            onJoin: ()=>{},
            onLeave: ()=>{},
            onSync: ()=>{}
        };
        const events = (opts === null || opts === void 0 ? void 0 : opts.events) || {
            state: 'presence_state',
            diff: 'presence_diff'
        };
        this.channel._on(events.state, {}, (newState)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            this.joinRef = this.channel._joinRef();
            this.state = RealtimePresence.syncState(this.state, newState, onJoin, onLeave);
            this.pendingDiffs.forEach((diff)=>{
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
            });
            this.pendingDiffs = [];
            onSync();
        });
        this.channel._on(events.diff, {}, (diff)=>{
            const { onJoin, onLeave, onSync } = this.caller;
            if (this.inPendingSyncState()) {
                this.pendingDiffs.push(diff);
            } else {
                this.state = RealtimePresence.syncDiff(this.state, diff, onJoin, onLeave);
                onSync();
            }
        });
        this.onJoin((key, currentPresences, newPresences)=>{
            this.channel._trigger('presence', {
                event: 'join',
                key,
                currentPresences,
                newPresences
            });
        });
        this.onLeave((key, currentPresences, leftPresences)=>{
            this.channel._trigger('presence', {
                event: 'leave',
                key,
                currentPresences,
                leftPresences
            });
        });
        this.onSync(()=>{
            this.channel._trigger('presence', {
                event: 'sync'
            });
        });
    }
    /**
     * Used to sync the list of presences on the server with the
     * client's state.
     *
     * An optional `onJoin` and `onLeave` callback can be provided to
     * react to changes in the client's local presences across
     * disconnects and reconnects with the server.
     *
     * @internal
     */ static syncState(currentState, newState, onJoin, onLeave) {
        const state = this.cloneDeep(currentState);
        const transformedState = this.transformState(newState);
        const joins = {};
        const leaves = {};
        this.map(state, (key, presences)=>{
            if (!transformedState[key]) {
                leaves[key] = presences;
            }
        });
        this.map(transformedState, (key, newPresences)=>{
            const currentPresences = state[key];
            if (currentPresences) {
                const newPresenceRefs = newPresences.map((m)=>m.presence_ref);
                const curPresenceRefs = currentPresences.map((m)=>m.presence_ref);
                const joinedPresences = newPresences.filter((m)=>curPresenceRefs.indexOf(m.presence_ref) < 0);
                const leftPresences = currentPresences.filter((m)=>newPresenceRefs.indexOf(m.presence_ref) < 0);
                if (joinedPresences.length > 0) {
                    joins[key] = joinedPresences;
                }
                if (leftPresences.length > 0) {
                    leaves[key] = leftPresences;
                }
            } else {
                joins[key] = newPresences;
            }
        });
        return this.syncDiff(state, {
            joins,
            leaves
        }, onJoin, onLeave);
    }
    /**
     * Used to sync a diff of presence join and leave events from the
     * server, as they happen.
     *
     * Like `syncState`, `syncDiff` accepts optional `onJoin` and
     * `onLeave` callbacks to react to a user joining or leaving from a
     * device.
     *
     * @internal
     */ static syncDiff(state, diff, onJoin, onLeave) {
        const { joins, leaves } = {
            joins: this.transformState(diff.joins),
            leaves: this.transformState(diff.leaves)
        };
        if (!onJoin) {
            onJoin = ()=>{};
        }
        if (!onLeave) {
            onLeave = ()=>{};
        }
        this.map(joins, (key, newPresences)=>{
            var _a;
            const currentPresences = (_a = state[key]) !== null && _a !== void 0 ? _a : [];
            state[key] = this.cloneDeep(newPresences);
            if (currentPresences.length > 0) {
                const joinedPresenceRefs = state[key].map((m)=>m.presence_ref);
                const curPresences = currentPresences.filter((m)=>joinedPresenceRefs.indexOf(m.presence_ref) < 0);
                state[key].unshift(...curPresences);
            }
            onJoin(key, currentPresences, newPresences);
        });
        this.map(leaves, (key, leftPresences)=>{
            let currentPresences = state[key];
            if (!currentPresences) return;
            const presenceRefsToRemove = leftPresences.map((m)=>m.presence_ref);
            currentPresences = currentPresences.filter((m)=>presenceRefsToRemove.indexOf(m.presence_ref) < 0);
            state[key] = currentPresences;
            onLeave(key, currentPresences, leftPresences);
            if (currentPresences.length === 0) delete state[key];
        });
        return state;
    }
    /** @internal */ static map(obj, func) {
        return Object.getOwnPropertyNames(obj).map((key)=>func(key, obj[key]));
    }
    /**
     * Remove 'metas' key
     * Change 'phx_ref' to 'presence_ref'
     * Remove 'phx_ref' and 'phx_ref_prev'
     *
     * @example
     * // returns {
     *  abc123: [
     *    { presence_ref: '2', user_id: 1 },
     *    { presence_ref: '3', user_id: 2 }
     *  ]
     * }
     * RealtimePresence.transformState({
     *  abc123: {
     *    metas: [
     *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
     *      { phx_ref: '3', user_id: 2 }
     *    ]
     *  }
     * })
     *
     * @internal
     */ static transformState(state) {
        state = this.cloneDeep(state);
        return Object.getOwnPropertyNames(state).reduce((newState, key)=>{
            const presences = state[key];
            if ('metas' in presences) {
                newState[key] = presences.metas.map((presence)=>{
                    presence['presence_ref'] = presence['phx_ref'];
                    delete presence['phx_ref'];
                    delete presence['phx_ref_prev'];
                    return presence;
                });
            } else {
                newState[key] = presences;
            }
            return newState;
        }, {});
    }
    /** @internal */ static cloneDeep(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    /** @internal */ onJoin(callback) {
        this.caller.onJoin = callback;
    }
    /** @internal */ onLeave(callback) {
        this.caller.onLeave = callback;
    }
    /** @internal */ onSync(callback) {
        this.caller.onSync = callback;
    }
    /** @internal */ inPendingSyncState() {
        return !this.joinRef || this.joinRef !== this.channel._joinRef();
    }
} //# sourceMappingURL=RealtimePresence.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REALTIME_CHANNEL_STATES",
    ()=>REALTIME_CHANNEL_STATES,
    "REALTIME_LISTEN_TYPES",
    ()=>REALTIME_LISTEN_TYPES,
    "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
    ()=>REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,
    "REALTIME_SUBSCRIBE_STATES",
    ()=>REALTIME_SUBSCRIBE_STATES,
    "default",
    ()=>RealtimeChannel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/push.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
var REALTIME_POSTGRES_CHANGES_LISTEN_EVENT;
(function(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT) {
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["ALL"] = "*";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["INSERT"] = "INSERT";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["UPDATE"] = "UPDATE";
    REALTIME_POSTGRES_CHANGES_LISTEN_EVENT["DELETE"] = "DELETE";
})(REALTIME_POSTGRES_CHANGES_LISTEN_EVENT || (REALTIME_POSTGRES_CHANGES_LISTEN_EVENT = {}));
var REALTIME_LISTEN_TYPES;
(function(REALTIME_LISTEN_TYPES) {
    REALTIME_LISTEN_TYPES["BROADCAST"] = "broadcast";
    REALTIME_LISTEN_TYPES["PRESENCE"] = "presence";
    REALTIME_LISTEN_TYPES["POSTGRES_CHANGES"] = "postgres_changes";
    REALTIME_LISTEN_TYPES["SYSTEM"] = "system";
})(REALTIME_LISTEN_TYPES || (REALTIME_LISTEN_TYPES = {}));
var REALTIME_SUBSCRIBE_STATES;
(function(REALTIME_SUBSCRIBE_STATES) {
    REALTIME_SUBSCRIBE_STATES["SUBSCRIBED"] = "SUBSCRIBED";
    REALTIME_SUBSCRIBE_STATES["TIMED_OUT"] = "TIMED_OUT";
    REALTIME_SUBSCRIBE_STATES["CLOSED"] = "CLOSED";
    REALTIME_SUBSCRIBE_STATES["CHANNEL_ERROR"] = "CHANNEL_ERROR";
})(REALTIME_SUBSCRIBE_STATES || (REALTIME_SUBSCRIBE_STATES = {}));
const REALTIME_CHANNEL_STATES = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"];
class RealtimeChannel {
    constructor(/** Topic name can be any string. */ topic, params = {
        config: {}
    }, socket){
        this.topic = topic;
        this.params = params;
        this.socket = socket;
        this.bindings = {};
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
        this.joinedOnce = false;
        this.pushBuffer = [];
        this.subTopic = topic.replace(/^realtime:/i, '');
        this.params.config = Object.assign({
            broadcast: {
                ack: false,
                self: false
            },
            presence: {
                key: '',
                enabled: false
            },
            private: false
        }, params.config);
        this.timeout = this.socket.timeout;
        this.joinPush = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].join, this.params, this.timeout);
        this.rejoinTimer = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](()=>this._rejoinUntilConnected(), this.socket.reconnectAfterMs);
        this.joinPush.receive('ok', ()=>{
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined;
            this.rejoinTimer.reset();
            this.pushBuffer.forEach((pushEvent)=>pushEvent.send());
            this.pushBuffer = [];
        });
        this._onClose(()=>{
            this.rejoinTimer.reset();
            this.socket.log('channel', `close ${this.topic} ${this._joinRef()}`);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
            this.socket._remove(this);
        });
        this._onError((reason)=>{
            if (this._isLeaving() || this._isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('timeout', ()=>{
            if (!this._isJoining()) {
                return;
            }
            this.socket.log('channel', `timeout ${this.topic}`, this.joinPush.timeout);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this.joinPush.receive('error', (reason)=>{
            if (this._isLeaving() || this._isClosed()) {
                return;
            }
            this.socket.log('channel', `error ${this.topic}`, reason);
            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
            this.rejoinTimer.scheduleTimeout();
        });
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].reply, {}, (payload, ref)=>{
            this._trigger(this._replyEventName(ref), payload);
        });
        this.presence = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this);
        this.broadcastEndpointURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["httpEndpointURL"])(this.socket.endPoint);
        this.private = this.params.config.private || false;
    }
    /** Subscribe registers your client with the server */ subscribe(callback, timeout = this.timeout) {
        var _a, _b, _c;
        if (!this.socket.isConnected()) {
            this.socket.connect();
        }
        if (this.state == __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed) {
            const { config: { broadcast, presence, private: isPrivate } } = this.params;
            const postgres_changes = (_b = (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.map((r)=>r.filter)) !== null && _b !== void 0 ? _b : [];
            const presence_enabled = !!this.bindings[REALTIME_LISTEN_TYPES.PRESENCE] && this.bindings[REALTIME_LISTEN_TYPES.PRESENCE].length > 0 || ((_c = this.params.config.presence) === null || _c === void 0 ? void 0 : _c.enabled) === true;
            const accessTokenPayload = {};
            const config = {
                broadcast,
                presence: Object.assign(Object.assign({}, presence), {
                    enabled: presence_enabled
                }),
                postgres_changes,
                private: isPrivate
            };
            if (this.socket.accessTokenValue) {
                accessTokenPayload.access_token = this.socket.accessTokenValue;
            }
            this._onError((e)=>callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, e));
            this._onClose(()=>callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CLOSED));
            this.updateJoinPayload(Object.assign({
                config
            }, accessTokenPayload));
            this.joinedOnce = true;
            this._rejoin(timeout);
            this.joinPush.receive('ok', async ({ postgres_changes })=>{
                var _a;
                this.socket.setAuth();
                if (postgres_changes === undefined) {
                    callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                } else {
                    const clientPostgresBindings = this.bindings.postgres_changes;
                    const bindingsLen = (_a = clientPostgresBindings === null || clientPostgresBindings === void 0 ? void 0 : clientPostgresBindings.length) !== null && _a !== void 0 ? _a : 0;
                    const newPostgresBindings = [];
                    for(let i = 0; i < bindingsLen; i++){
                        const clientPostgresBinding = clientPostgresBindings[i];
                        const { filter: { event, schema, table, filter } } = clientPostgresBinding;
                        const serverPostgresFilter = postgres_changes && postgres_changes[i];
                        if (serverPostgresFilter && serverPostgresFilter.event === event && serverPostgresFilter.schema === schema && serverPostgresFilter.table === table && serverPostgresFilter.filter === filter) {
                            newPostgresBindings.push(Object.assign(Object.assign({}, clientPostgresBinding), {
                                id: serverPostgresFilter.id
                            }));
                        } else {
                            this.unsubscribe();
                            this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
                            callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error('mismatch between server and client bindings for postgres changes'));
                            return;
                        }
                    }
                    this.bindings.postgres_changes = newPostgresBindings;
                    callback && callback(REALTIME_SUBSCRIBE_STATES.SUBSCRIBED);
                    return;
                }
            }).receive('error', (error)=>{
                this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].errored;
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(error).join(', ') || 'error')));
                return;
            }).receive('timeout', ()=>{
                callback === null || callback === void 0 ? void 0 : callback(REALTIME_SUBSCRIBE_STATES.TIMED_OUT);
                return;
            });
        }
        return this;
    }
    presenceState() {
        return this.presence.state;
    }
    async track(payload, opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'track',
            payload
        }, opts.timeout || this.timeout);
    }
    async untrack(opts = {}) {
        return await this.send({
            type: 'presence',
            event: 'untrack'
        }, opts);
    }
    on(type, filter, callback) {
        if (this.state === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined && type === REALTIME_LISTEN_TYPES.PRESENCE) {
            this.socket.log('channel', `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`);
            this.unsubscribe().then(()=>this.subscribe());
        }
        return this._on(type, filter, callback);
    }
    /**
     * Sends a message into the channel.
     *
     * @param args Arguments to send to channel
     * @param args.type The type of event to send
     * @param args.event The name of the event being sent
     * @param args.payload Payload to be sent
     * @param opts Options to be used during the send process
     */ async send(args, opts = {}) {
        var _a, _b;
        if (!this._canPush() && args.type === 'broadcast') {
            const { event, payload: endpoint_payload } = args;
            const authorization = this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : '';
            const options = {
                method: 'POST',
                headers: {
                    Authorization: authorization,
                    apikey: this.socket.apiKey ? this.socket.apiKey : '',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            topic: this.subTopic,
                            event,
                            payload: endpoint_payload,
                            private: this.private
                        }
                    ]
                })
            };
            try {
                const response = await this._fetchWithTimeout(this.broadcastEndpointURL, options, (_a = opts.timeout) !== null && _a !== void 0 ? _a : this.timeout);
                await ((_b = response.body) === null || _b === void 0 ? void 0 : _b.cancel());
                return response.ok ? 'ok' : 'error';
            } catch (error) {
                if (error.name === 'AbortError') {
                    return 'timed out';
                } else {
                    return 'error';
                }
            }
        } else {
            return new Promise((resolve)=>{
                var _a, _b, _c;
                const push = this._push(args.type, args, opts.timeout || this.timeout);
                if (args.type === 'broadcast' && !((_c = (_b = (_a = this.params) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.broadcast) === null || _c === void 0 ? void 0 : _c.ack)) {
                    resolve('ok');
                }
                push.receive('ok', ()=>resolve('ok'));
                push.receive('error', ()=>resolve('error'));
                push.receive('timeout', ()=>resolve('timed out'));
            });
        }
    }
    updateJoinPayload(payload) {
        this.joinPush.updatePayload(payload);
    }
    /**
     * Leaves the channel.
     *
     * Unsubscribes from server events, and instructs channel to terminate on server.
     * Triggers onClose() hooks.
     *
     * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
     * channel.unsubscribe().receive("ok", () => alert("left!") )
     */ unsubscribe(timeout = this.timeout) {
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].leaving;
        const onClose = ()=>{
            this.socket.log('channel', `leave ${this.topic}`);
            this._trigger(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].close, 'leave', this._joinRef());
        };
        this.joinPush.destroy();
        let leavePush = null;
        return new Promise((resolve)=>{
            leavePush = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].leave, {}, timeout);
            leavePush.receive('ok', ()=>{
                onClose();
                resolve('ok');
            }).receive('timeout', ()=>{
                onClose();
                resolve('timed out');
            }).receive('error', ()=>{
                resolve('error');
            });
            leavePush.send();
            if (!this._canPush()) {
                leavePush.trigger('ok', {});
            }
        }).finally(()=>{
            leavePush === null || leavePush === void 0 ? void 0 : leavePush.destroy();
        });
    }
    /**
     * Teardown the channel.
     *
     * Destroys and stops related timers.
     */ teardown() {
        this.pushBuffer.forEach((push)=>push.destroy());
        this.pushBuffer = [];
        this.rejoinTimer.reset();
        this.joinPush.destroy();
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
        this.bindings = {};
    }
    /** @internal */ async _fetchWithTimeout(url, options, timeout) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), timeout);
        const response = await this.socket.fetch(url, Object.assign(Object.assign({}, options), {
            signal: controller.signal
        }));
        clearTimeout(id);
        return response;
    }
    /** @internal */ _push(event, payload, timeout = this.timeout) {
        if (!this.joinedOnce) {
            throw `tried to push '${event}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
        }
        let pushEvent = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$push$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this, event, payload, timeout);
        if (this._canPush()) {
            pushEvent.send();
        } else {
            this._addToPushBuffer(pushEvent);
        }
        return pushEvent;
    }
    /** @internal */ _addToPushBuffer(pushEvent) {
        pushEvent.startTimeout();
        this.pushBuffer.push(pushEvent);
        // Enforce buffer size limit
        if (this.pushBuffer.length > __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MAX_PUSH_BUFFER_SIZE"]) {
            const removedPush = this.pushBuffer.shift();
            if (removedPush) {
                removedPush.destroy();
                this.socket.log('channel', `discarded push due to buffer overflow: ${removedPush.event}`, removedPush.payload);
            }
        }
    }
    /**
     * Overridable message hook
     *
     * Receives all events for specialized message handling before dispatching to the channel callbacks.
     * Must return the payload, modified or unmodified.
     *
     * @internal
     */ _onMessage(_event, payload, _ref) {
        return payload;
    }
    /** @internal */ _isMember(topic) {
        return this.topic === topic;
    }
    /** @internal */ _joinRef() {
        return this.joinPush.ref;
    }
    /** @internal */ _trigger(type, payload, ref) {
        var _a, _b;
        const typeLower = type.toLocaleLowerCase();
        const { close, error, leave, join } = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"];
        const events = [
            close,
            error,
            leave,
            join
        ];
        if (ref && events.indexOf(typeLower) >= 0 && ref !== this._joinRef()) {
            return;
        }
        let handledPayload = this._onMessage(typeLower, payload, ref);
        if (payload && !handledPayload) {
            throw 'channel onMessage callbacks must return the payload, modified or unmodified';
        }
        if ([
            'insert',
            'update',
            'delete'
        ].includes(typeLower)) {
            (_a = this.bindings.postgres_changes) === null || _a === void 0 ? void 0 : _a.filter((bind)=>{
                var _a, _b, _c;
                return ((_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event) === '*' || ((_c = (_b = bind.filter) === null || _b === void 0 ? void 0 : _b.event) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase()) === typeLower;
            }).map((bind)=>bind.callback(handledPayload, ref));
        } else {
            (_b = this.bindings[typeLower]) === null || _b === void 0 ? void 0 : _b.filter((bind)=>{
                var _a, _b, _c, _d, _e, _f;
                if ([
                    'broadcast',
                    'presence',
                    'postgres_changes'
                ].includes(typeLower)) {
                    if ('id' in bind) {
                        const bindId = bind.id;
                        const bindEvent = (_a = bind.filter) === null || _a === void 0 ? void 0 : _a.event;
                        return bindId && ((_b = payload.ids) === null || _b === void 0 ? void 0 : _b.includes(bindId)) && (bindEvent === '*' || (bindEvent === null || bindEvent === void 0 ? void 0 : bindEvent.toLocaleLowerCase()) === ((_c = payload.data) === null || _c === void 0 ? void 0 : _c.type.toLocaleLowerCase()));
                    } else {
                        const bindEvent = (_e = (_d = bind === null || bind === void 0 ? void 0 : bind.filter) === null || _d === void 0 ? void 0 : _d.event) === null || _e === void 0 ? void 0 : _e.toLocaleLowerCase();
                        return bindEvent === '*' || bindEvent === ((_f = payload === null || payload === void 0 ? void 0 : payload.event) === null || _f === void 0 ? void 0 : _f.toLocaleLowerCase());
                    }
                } else {
                    return bind.type.toLocaleLowerCase() === typeLower;
                }
            }).map((bind)=>{
                if (typeof handledPayload === 'object' && 'ids' in handledPayload) {
                    const postgresChanges = handledPayload.data;
                    const { schema, table, commit_timestamp, type, errors } = postgresChanges;
                    const enrichedPayload = {
                        schema: schema,
                        table: table,
                        commit_timestamp: commit_timestamp,
                        eventType: type,
                        new: {},
                        old: {},
                        errors: errors
                    };
                    handledPayload = Object.assign(Object.assign({}, enrichedPayload), this._getPayloadRecords(postgresChanges));
                }
                bind.callback(handledPayload, ref);
            });
        }
    }
    /** @internal */ _isClosed() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].closed;
    }
    /** @internal */ _isJoined() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joined;
    }
    /** @internal */ _isJoining() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joining;
    }
    /** @internal */ _isLeaving() {
        return this.state === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].leaving;
    }
    /** @internal */ _replyEventName(ref) {
        return `chan_reply_${ref}`;
    }
    /** @internal */ _on(type, filter, callback) {
        const typeLower = type.toLocaleLowerCase();
        const binding = {
            type: typeLower,
            filter: filter,
            callback: callback
        };
        if (this.bindings[typeLower]) {
            this.bindings[typeLower].push(binding);
        } else {
            this.bindings[typeLower] = [
                binding
            ];
        }
        return this;
    }
    /** @internal */ _off(type, filter) {
        const typeLower = type.toLocaleLowerCase();
        if (this.bindings[typeLower]) {
            this.bindings[typeLower] = this.bindings[typeLower].filter((bind)=>{
                var _a;
                return !(((_a = bind.type) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === typeLower && RealtimeChannel.isEqual(bind.filter, filter));
            });
        }
        return this;
    }
    /** @internal */ static isEqual(obj1, obj2) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for(const k in obj1){
            if (obj1[k] !== obj2[k]) {
                return false;
            }
        }
        return true;
    }
    /** @internal */ _rejoinUntilConnected() {
        this.rejoinTimer.scheduleTimeout();
        if (this.socket.isConnected()) {
            this._rejoin();
        }
    }
    /**
     * Registers a callback that will be executed when the channel closes.
     *
     * @internal
     */ _onClose(callback) {
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].close, {}, callback);
    }
    /**
     * Registers a callback that will be executed when the channel encounteres an error.
     *
     * @internal
     */ _onError(callback) {
        this._on(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].error, {}, (reason)=>callback(reason));
    }
    /**
     * Returns `true` if the socket is connected and the channel has been joined.
     *
     * @internal
     */ _canPush() {
        return this.socket.isConnected() && this._isJoined();
    }
    /** @internal */ _rejoin(timeout = this.timeout) {
        if (this._isLeaving()) {
            return;
        }
        this.socket._leaveOpenTopic(this.topic);
        this.state = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_STATES"].joining;
        this.joinPush.resend(timeout);
    }
    /** @internal */ _getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {}
        };
        if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
            records.new = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertChangeData"](payload.columns, payload.record);
        }
        if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
            records.old = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["convertChangeData"](payload.columns, payload.old_record);
        }
        return records;
    }
} //# sourceMappingURL=RealtimeChannel.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RealtimeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/serializer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/timer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/transformers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const noop = ()=>{};
// Connection-related constants
const CONNECTION_TIMEOUTS = {
    HEARTBEAT_INTERVAL: 25000,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100
};
const RECONNECT_INTERVALS = [
    1000,
    2000,
    5000,
    10000
];
const DEFAULT_RECONNECT_FALLBACK = 10000;
const WORKER_SCRIPT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class RealtimeClient {
    /**
     * Initializes the Socket.
     *
     * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
     * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
     * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
     * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
     * @param options.params The optional params to pass when connecting.
     * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
     * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
     * @param options.heartbeatCallback The optional function to handle heartbeat status.
     * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
     * @param options.logLevel Sets the log level for Realtime
     * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
     * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
     * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
     * @param options.worker Use Web Worker to set a side flow. Defaults to false.
     * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
     */ constructor(endPoint, options){
        var _a;
        this.accessTokenValue = null;
        this.apiKey = null;
        this.channels = new Array();
        this.endPoint = '';
        this.httpEndpoint = '';
        /** @deprecated headers cannot be set on websocket connections */ this.headers = {};
        this.params = {};
        this.timeout = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"];
        this.transport = null;
        this.heartbeatIntervalMs = CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
        this.heartbeatTimer = undefined;
        this.pendingHeartbeatRef = null;
        this.heartbeatCallback = noop;
        this.ref = 0;
        this.reconnectTimer = null;
        this.logger = noop;
        this.conn = null;
        this.sendBuffer = [];
        this.serializer = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$serializer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
        this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: []
        };
        this.accessToken = null;
        this._connectionState = 'disconnected';
        this._wasManualDisconnect = false;
        this._authPromise = null;
        /**
         * Use either custom fetch, if provided, or default fetch to make HTTP requests
         *
         * @internal
         */ this._resolveFetch = (customFetch)=>{
            let _fetch;
            if (customFetch) {
                _fetch = customFetch;
            } else if (typeof fetch === 'undefined') {
                // Node.js environment without native fetch
                _fetch = (...args)=>__turbopack_context__.A("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)").then(({ default: fetch1 })=>fetch1(...args)).catch((error)=>{
                        throw new Error(`Failed to load @supabase/node-fetch: ${error.message}. ` + `This is required for HTTP requests in Node.js environments without native fetch.`);
                    });
            } else {
                _fetch = fetch;
            }
            return (...args)=>_fetch(...args);
        };
        // Validate required parameters
        if (!((_a = options === null || options === void 0 ? void 0 : options.params) === null || _a === void 0 ? void 0 : _a.apikey)) {
            throw new Error('API key is required to connect to Realtime');
        }
        this.apiKey = options.params.apikey;
        // Initialize endpoint URLs
        this.endPoint = `${endPoint}/${__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TRANSPORTS"].websocket}`;
        this.httpEndpoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$transformers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["httpEndpointURL"])(endPoint);
        this._initializeOptions(options);
        this._setupReconnectionTimer();
        this.fetch = this._resolveFetch(options === null || options === void 0 ? void 0 : options.fetch);
    }
    /**
     * Connects the socket, unless already connected.
     */ connect() {
        // Skip if already connecting, disconnecting, or connected
        if (this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected()) {
            return;
        }
        this._setConnectionState('connecting');
        this._setAuthSafely('connect');
        // Establish WebSocket connection
        if (this.transport) {
            // Use custom transport if provided
            this.conn = new this.transport(this.endpointURL());
        } else {
            // Try to use native WebSocket
            try {
                this.conn = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createWebSocket(this.endpointURL());
            } catch (error) {
                this._setConnectionState('disconnected');
                const errorMessage = error.message;
                // Provide helpful error message based on environment
                if (errorMessage.includes('Node.js')) {
                    throw new Error(`${errorMessage}\n\n` + 'To use Realtime in Node.js, you need to provide a WebSocket implementation:\n\n' + 'Option 1: Use Node.js 22+ which has native WebSocket support\n' + 'Option 2: Install and provide the "ws" package:\n\n' + '  npm install ws\n\n' + '  import ws from "ws"\n' + '  const client = new RealtimeClient(url, {\n' + '    ...options,\n' + '    transport: ws\n' + '  })');
                }
                throw new Error(`WebSocket not available: ${errorMessage}`);
            }
        }
        this._setupConnectionHandlers();
    }
    /**
     * Returns the URL of the websocket.
     * @returns string The URL of the websocket.
     */ endpointURL() {
        return this._appendParams(this.endPoint, Object.assign({}, this.params, {
            vsn: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VSN"]
        }));
    }
    /**
     * Disconnects the socket.
     *
     * @param code A numeric status code to send on disconnect.
     * @param reason A custom reason for the disconnect.
     */ disconnect(code, reason) {
        if (this.isDisconnecting()) {
            return;
        }
        this._setConnectionState('disconnecting', true);
        if (this.conn) {
            // Setup fallback timer to prevent hanging in disconnecting state
            const fallbackTimer = setTimeout(()=>{
                this._setConnectionState('disconnected');
            }, 100);
            this.conn.onclose = ()=>{
                clearTimeout(fallbackTimer);
                this._setConnectionState('disconnected');
            };
            // Close the WebSocket connection
            if (code) {
                this.conn.close(code, reason !== null && reason !== void 0 ? reason : '');
            } else {
                this.conn.close();
            }
            this._teardownConnection();
        } else {
            this._setConnectionState('disconnected');
        }
    }
    /**
     * Returns all created channels
     */ getChannels() {
        return this.channels;
    }
    /**
     * Unsubscribes and removes a single channel
     * @param channel A RealtimeChannel instance
     */ async removeChannel(channel) {
        const status = await channel.unsubscribe();
        if (this.channels.length === 0) {
            this.disconnect();
        }
        return status;
    }
    /**
     * Unsubscribes and removes all channels
     */ async removeAllChannels() {
        const values_1 = await Promise.all(this.channels.map((channel)=>channel.unsubscribe()));
        this.channels = [];
        this.disconnect();
        return values_1;
    }
    /**
     * Logs the message.
     *
     * For customized logging, `this.logger` can be overridden.
     */ log(kind, msg, data) {
        this.logger(kind, msg, data);
    }
    /**
     * Returns the current state of the socket.
     */ connectionState() {
        switch(this.conn && this.conn.readyState){
            case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SOCKET_STATES"].connecting:
                return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Connecting;
            case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SOCKET_STATES"].open:
                return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Open;
            case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SOCKET_STATES"].closing:
                return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Closing;
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Closed;
        }
    }
    /**
     * Returns `true` is the connection is open.
     */ isConnected() {
        return this.connectionState() === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONNECTION_STATE"].Open;
    }
    /**
     * Returns `true` if the connection is currently connecting.
     */ isConnecting() {
        return this._connectionState === 'connecting';
    }
    /**
     * Returns `true` if the connection is currently disconnecting.
     */ isDisconnecting() {
        return this._connectionState === 'disconnecting';
    }
    channel(topic, params = {
        config: {}
    }) {
        const realtimeTopic = `realtime:${topic}`;
        const exists = this.getChannels().find((c)=>c.topic === realtimeTopic);
        if (!exists) {
            const chan = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](`realtime:${topic}`, params, this);
            this.channels.push(chan);
            return chan;
        } else {
            return exists;
        }
    }
    /**
     * Push out a message if the socket is connected.
     *
     * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
     */ push(data) {
        const { topic, event, payload, ref } = data;
        const callback = ()=>{
            this.encode(data, (result)=>{
                var _a;
                (_a = this.conn) === null || _a === void 0 ? void 0 : _a.send(result);
            });
        };
        this.log('push', `${topic} ${event} (${ref})`, payload);
        if (this.isConnected()) {
            callback();
        } else {
            this.sendBuffer.push(callback);
        }
    }
    /**
     * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
     *
     * If param is null it will use the `accessToken` callback function or the token set on the client.
     *
     * On callback used, it will set the value of the token internal to the client.
     *
     * @param token A JWT string to override the token set on the client.
     */ async setAuth(token = null) {
        this._authPromise = this._performAuth(token);
        try {
            await this._authPromise;
        } finally{
            this._authPromise = null;
        }
    }
    /**
     * Sends a heartbeat message if the socket is connected.
     */ async sendHeartbeat() {
        var _a;
        if (!this.isConnected()) {
            try {
                this.heartbeatCallback('disconnected');
            } catch (e) {
                this.log('error', 'error in heartbeat callback', e);
            }
            return;
        }
        // Handle heartbeat timeout and force reconnection if needed
        if (this.pendingHeartbeatRef) {
            this.pendingHeartbeatRef = null;
            this.log('transport', 'heartbeat timeout. Attempting to re-establish connection');
            try {
                this.heartbeatCallback('timeout');
            } catch (e) {
                this.log('error', 'error in heartbeat callback', e);
            }
            // Force reconnection after heartbeat timeout
            this._wasManualDisconnect = false;
            (_a = this.conn) === null || _a === void 0 ? void 0 : _a.close(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WS_CLOSE_NORMAL"], 'heartbeat timeout');
            setTimeout(()=>{
                var _a;
                if (!this.isConnected()) {
                    (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
                }
            }, CONNECTION_TIMEOUTS.HEARTBEAT_TIMEOUT_FALLBACK);
            return;
        }
        // Send heartbeat message to server
        this.pendingHeartbeatRef = this._makeRef();
        this.push({
            topic: 'phoenix',
            event: 'heartbeat',
            payload: {},
            ref: this.pendingHeartbeatRef
        });
        try {
            this.heartbeatCallback('sent');
        } catch (e) {
            this.log('error', 'error in heartbeat callback', e);
        }
        this._setAuthSafely('heartbeat');
    }
    onHeartbeat(callback) {
        this.heartbeatCallback = callback;
    }
    /**
     * Flushes send buffer
     */ flushSendBuffer() {
        if (this.isConnected() && this.sendBuffer.length > 0) {
            this.sendBuffer.forEach((callback)=>callback());
            this.sendBuffer = [];
        }
    }
    /**
     * Return the next message ref, accounting for overflows
     *
     * @internal
     */ _makeRef() {
        let newRef = this.ref + 1;
        if (newRef === this.ref) {
            this.ref = 0;
        } else {
            this.ref = newRef;
        }
        return this.ref.toString();
    }
    /**
     * Unsubscribe from channels with the specified topic.
     *
     * @internal
     */ _leaveOpenTopic(topic) {
        let dupChannel = this.channels.find((c)=>c.topic === topic && (c._isJoined() || c._isJoining()));
        if (dupChannel) {
            this.log('transport', `leaving duplicate topic "${topic}"`);
            dupChannel.unsubscribe();
        }
    }
    /**
     * Removes a subscription from the socket.
     *
     * @param channel An open subscription.
     *
     * @internal
     */ _remove(channel) {
        this.channels = this.channels.filter((c)=>c.topic !== channel.topic);
    }
    /** @internal */ _onConnMessage(rawMessage) {
        this.decode(rawMessage.data, (msg)=>{
            // Handle heartbeat responses
            if (msg.topic === 'phoenix' && msg.event === 'phx_reply') {
                try {
                    this.heartbeatCallback(msg.payload.status === 'ok' ? 'ok' : 'error');
                } catch (e) {
                    this.log('error', 'error in heartbeat callback', e);
                }
            }
            // Handle pending heartbeat reference cleanup
            if (msg.ref && msg.ref === this.pendingHeartbeatRef) {
                this.pendingHeartbeatRef = null;
            }
            // Log incoming message
            const { topic, event, payload, ref } = msg;
            const refString = ref ? `(${ref})` : '';
            const status = payload.status || '';
            this.log('receive', `${status} ${topic} ${event} ${refString}`.trim(), payload);
            // Route message to appropriate channels
            this.channels.filter((channel)=>channel._isMember(topic)).forEach((channel)=>channel._trigger(event, payload, ref));
            this._triggerStateCallbacks('message', msg);
        });
    }
    /**
     * Clear specific timer
     * @internal
     */ _clearTimer(timer) {
        var _a;
        if (timer === 'heartbeat' && this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer);
            this.heartbeatTimer = undefined;
        } else if (timer === 'reconnect') {
            (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.reset();
        }
    }
    /**
     * Clear all timers
     * @internal
     */ _clearAllTimers() {
        this._clearTimer('heartbeat');
        this._clearTimer('reconnect');
    }
    /**
     * Setup connection handlers for WebSocket events
     * @internal
     */ _setupConnectionHandlers() {
        if (!this.conn) return;
        // Set binary type if supported (browsers and most WebSocket implementations)
        if ('binaryType' in this.conn) {
            ;
            this.conn.binaryType = 'arraybuffer';
        }
        this.conn.onopen = ()=>this._onConnOpen();
        this.conn.onerror = (error)=>this._onConnError(error);
        this.conn.onmessage = (event)=>this._onConnMessage(event);
        this.conn.onclose = (event)=>this._onConnClose(event);
    }
    /**
     * Teardown connection and cleanup resources
     * @internal
     */ _teardownConnection() {
        if (this.conn) {
            this.conn.onopen = null;
            this.conn.onerror = null;
            this.conn.onmessage = null;
            this.conn.onclose = null;
            this.conn = null;
        }
        this._clearAllTimers();
        this.channels.forEach((channel)=>channel.teardown());
    }
    /** @internal */ _onConnOpen() {
        this._setConnectionState('connected');
        this.log('transport', `connected to ${this.endpointURL()}`);
        this.flushSendBuffer();
        this._clearTimer('reconnect');
        if (!this.worker) {
            this._startHeartbeat();
        } else {
            if (!this.workerRef) {
                this._startWorkerHeartbeat();
            }
        }
        this._triggerStateCallbacks('open');
    }
    /** @internal */ _startHeartbeat() {
        this.heartbeatTimer && clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = setInterval(()=>this.sendHeartbeat(), this.heartbeatIntervalMs);
    }
    /** @internal */ _startWorkerHeartbeat() {
        if (this.workerUrl) {
            this.log('worker', `starting worker for from ${this.workerUrl}`);
        } else {
            this.log('worker', `starting default worker`);
        }
        const objectUrl = this._workerObjectUrl(this.workerUrl);
        this.workerRef = new Worker(objectUrl);
        this.workerRef.onerror = (error)=>{
            this.log('worker', 'worker error', error.message);
            this.workerRef.terminate();
        };
        this.workerRef.onmessage = (event)=>{
            if (event.data.event === 'keepAlive') {
                this.sendHeartbeat();
            }
        };
        this.workerRef.postMessage({
            event: 'start',
            interval: this.heartbeatIntervalMs
        });
    }
    /** @internal */ _onConnClose(event) {
        var _a;
        this._setConnectionState('disconnected');
        this.log('transport', 'close', event);
        this._triggerChanError();
        this._clearTimer('heartbeat');
        // Only schedule reconnection if it wasn't a manual disconnect
        if (!this._wasManualDisconnect) {
            (_a = this.reconnectTimer) === null || _a === void 0 ? void 0 : _a.scheduleTimeout();
        }
        this._triggerStateCallbacks('close', event);
    }
    /** @internal */ _onConnError(error) {
        this._setConnectionState('disconnected');
        this.log('transport', `${error}`);
        this._triggerChanError();
        this._triggerStateCallbacks('error', error);
    }
    /** @internal */ _triggerChanError() {
        this.channels.forEach((channel)=>channel._trigger(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].error));
    }
    /** @internal */ _appendParams(url, params) {
        if (Object.keys(params).length === 0) {
            return url;
        }
        const prefix = url.match(/\?/) ? '&' : '?';
        const query = new URLSearchParams(params);
        return `${url}${prefix}${query}`;
    }
    _workerObjectUrl(url) {
        let result_url;
        if (url) {
            result_url = url;
        } else {
            const blob = new Blob([
                WORKER_SCRIPT
            ], {
                type: 'application/javascript'
            });
            result_url = URL.createObjectURL(blob);
        }
        return result_url;
    }
    /**
     * Set connection state with proper state management
     * @internal
     */ _setConnectionState(state, manual = false) {
        this._connectionState = state;
        if (state === 'connecting') {
            this._wasManualDisconnect = false;
        } else if (state === 'disconnecting') {
            this._wasManualDisconnect = manual;
        }
    }
    /**
     * Perform the actual auth operation
     * @internal
     */ async _performAuth(token = null) {
        let tokenToSend;
        if (token) {
            tokenToSend = token;
        } else if (this.accessToken) {
            // Always call the accessToken callback to get fresh token
            tokenToSend = await this.accessToken();
        } else {
            tokenToSend = this.accessTokenValue;
        }
        if (this.accessTokenValue != tokenToSend) {
            this.accessTokenValue = tokenToSend;
            this.channels.forEach((channel)=>{
                const payload = {
                    access_token: tokenToSend,
                    version: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_VERSION"]
                };
                tokenToSend && channel.updateJoinPayload(payload);
                if (channel.joinedOnce && channel._isJoined()) {
                    channel._push(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CHANNEL_EVENTS"].access_token, {
                        access_token: tokenToSend
                    });
                }
            });
        }
    }
    /**
     * Wait for any in-flight auth operations to complete
     * @internal
     */ async _waitForAuthIfNeeded() {
        if (this._authPromise) {
            await this._authPromise;
        }
    }
    /**
     * Safely call setAuth with standardized error handling
     * @internal
     */ _setAuthSafely(context = 'general') {
        this.setAuth().catch((e)=>{
            this.log('error', `error setting auth in ${context}`, e);
        });
    }
    /**
     * Trigger state change callbacks with proper error handling
     * @internal
     */ _triggerStateCallbacks(event, data) {
        try {
            this.stateChangeCallbacks[event].forEach((callback)=>{
                try {
                    callback(data);
                } catch (e) {
                    this.log('error', `error in ${event} callback`, e);
                }
            });
        } catch (e) {
            this.log('error', `error triggering ${event} callbacks`, e);
        }
    }
    /**
     * Setup reconnection timer with proper configuration
     * @internal
     */ _setupReconnectionTimer() {
        this.reconnectTimer = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$timer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](async ()=>{
            setTimeout(async ()=>{
                await this._waitForAuthIfNeeded();
                if (!this.isConnected()) {
                    this.connect();
                }
            }, CONNECTION_TIMEOUTS.RECONNECT_DELAY);
        }, this.reconnectAfterMs);
    }
    /**
     * Initialize client options with defaults
     * @internal
     */ _initializeOptions(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        // Set defaults
        this.transport = (_a = options === null || options === void 0 ? void 0 : options.transport) !== null && _a !== void 0 ? _a : null;
        this.timeout = (_b = options === null || options === void 0 ? void 0 : options.timeout) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_TIMEOUT"];
        this.heartbeatIntervalMs = (_c = options === null || options === void 0 ? void 0 : options.heartbeatIntervalMs) !== null && _c !== void 0 ? _c : CONNECTION_TIMEOUTS.HEARTBEAT_INTERVAL;
        this.worker = (_d = options === null || options === void 0 ? void 0 : options.worker) !== null && _d !== void 0 ? _d : false;
        this.accessToken = (_e = options === null || options === void 0 ? void 0 : options.accessToken) !== null && _e !== void 0 ? _e : null;
        this.heartbeatCallback = (_f = options === null || options === void 0 ? void 0 : options.heartbeatCallback) !== null && _f !== void 0 ? _f : noop;
        // Handle special cases
        if (options === null || options === void 0 ? void 0 : options.params) this.params = options.params;
        if (options === null || options === void 0 ? void 0 : options.logger) this.logger = options.logger;
        if ((options === null || options === void 0 ? void 0 : options.logLevel) || (options === null || options === void 0 ? void 0 : options.log_level)) {
            this.logLevel = options.logLevel || options.log_level;
            this.params = Object.assign(Object.assign({}, this.params), {
                log_level: this.logLevel
            });
        }
        // Set up functions with defaults
        this.reconnectAfterMs = (_g = options === null || options === void 0 ? void 0 : options.reconnectAfterMs) !== null && _g !== void 0 ? _g : (tries)=>{
            return RECONNECT_INTERVALS[tries - 1] || DEFAULT_RECONNECT_FALLBACK;
        };
        this.encode = (_h = options === null || options === void 0 ? void 0 : options.encode) !== null && _h !== void 0 ? _h : (payload, callback)=>{
            return callback(JSON.stringify(payload));
        };
        this.decode = (_j = options === null || options === void 0 ? void 0 : options.decode) !== null && _j !== void 0 ? _j : this.serializer.decode.bind(this.serializer);
        // Handle worker setup
        if (this.worker) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            this.workerUrl = options === null || options === void 0 ? void 0 : options.workerUrl;
        }
    }
} //# sourceMappingURL=RealtimeClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeChannel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeChannel.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimePresence$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimePresence.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$lib$2f$websocket$2d$factory$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/lib/websocket-factory.js [app-rsc] (ecmascript)");
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript) <export default as RealtimeClient>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RealtimeClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageApiError",
    ()=>StorageApiError,
    "StorageError",
    ()=>StorageError,
    "StorageUnknownError",
    ()=>StorageUnknownError,
    "isStorageError",
    ()=>isStorageError
]);
class StorageError extends Error {
    constructor(message){
        super(message);
        this.__isStorageError = true;
        this.name = 'StorageError';
    }
}
function isStorageError(error) {
    return typeof error === 'object' && error !== null && '__isStorageError' in error;
}
class StorageApiError extends StorageError {
    constructor(message, status, statusCode){
        super(message);
        this.name = 'StorageApiError';
        this.status = status;
        this.statusCode = statusCode;
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            statusCode: this.statusCode
        };
    }
}
class StorageUnknownError extends StorageError {
    constructor(message, originalError){
        super(message);
        this.name = 'StorageUnknownError';
        this.originalError = originalError;
    }
} //# sourceMappingURL=errors.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPlainObject",
    ()=>isPlainObject,
    "recursiveToCamel",
    ()=>recursiveToCamel,
    "resolveFetch",
    ()=>resolveFetch,
    "resolveResponse",
    ()=>resolveResponse
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === 'undefined') {
        _fetch = (...args)=>__turbopack_context__.A("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)").then(({ default: fetch1 })=>fetch1(...args));
    } else {
        _fetch = fetch;
    }
    return (...args)=>_fetch(...args);
};
const resolveResponse = ()=>__awaiter(void 0, void 0, void 0, function*() {
        if (typeof Response === 'undefined') {
            // @ts-ignore
            return (yield __turbopack_context__.A("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript, async loader)")).Response;
        }
        return Response;
    });
const recursiveToCamel = (item)=>{
    if (Array.isArray(item)) {
        return item.map((el)=>recursiveToCamel(el));
    } else if (typeof item === 'function' || item !== Object(item)) {
        return item;
    }
    const result = {};
    Object.entries(item).forEach(([key, value])=>{
        const newKey = key.replace(/([-_][a-z])/gi, (c)=>c.toUpperCase().replace(/[-_]/g, ''));
        result[newKey] = recursiveToCamel(value);
    });
    return result;
};
const isPlainObject = (value)=>{
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in value) && !(Symbol.iterator in value);
}; //# sourceMappingURL=helpers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "get",
    ()=>get,
    "head",
    ()=>head,
    "post",
    ()=>post,
    "put",
    ()=>put,
    "remove",
    ()=>remove
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
const _getErrorMessage = (err)=>err.msg || err.message || err.error_description || err.error || JSON.stringify(err);
const handleError = (error, reject, options)=>__awaiter(void 0, void 0, void 0, function*() {
        const Res = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveResponse"])();
        if (error instanceof Res && !(options === null || options === void 0 ? void 0 : options.noResolveJson)) {
            error.json().then((err)=>{
                const status = error.status || 500;
                const statusCode = (err === null || err === void 0 ? void 0 : err.statusCode) || status + '';
                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageApiError"](_getErrorMessage(err), status, statusCode));
            }).catch((err)=>{
                reject(new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageUnknownError"](_getErrorMessage(err), err));
            });
        } else {
            reject(new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageUnknownError"](_getErrorMessage(error), error));
        }
    });
const _getRequestParams = (method, options, parameters, body)=>{
    const params = {
        method,
        headers: (options === null || options === void 0 ? void 0 : options.headers) || {}
    };
    if (method === 'GET' || !body) {
        return params;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(body)) {
        params.headers = Object.assign({
            'Content-Type': 'application/json'
        }, options === null || options === void 0 ? void 0 : options.headers);
        params.body = JSON.stringify(body);
    } else {
        params.body = body;
    }
    if (options === null || options === void 0 ? void 0 : options.duplex) {
        params.duplex = options.duplex;
    }
    return Object.assign(Object.assign({}, params), parameters);
};
function _handleRequest(fetcher, method, url, options, parameters, body) {
    return __awaiter(this, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            fetcher(url, _getRequestParams(method, options, parameters, body)).then((result)=>{
                if (!result.ok) throw result;
                if (options === null || options === void 0 ? void 0 : options.noResolveJson) return result;
                return result.json();
            }).then((data)=>resolve(data)).catch((error)=>handleError(error, reject, options));
        });
    });
}
function get(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'GET', url, options, parameters);
    });
}
function post(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'POST', url, options, parameters, body);
    });
}
function put(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'PUT', url, options, parameters, body);
    });
}
function head(fetcher, url, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'HEAD', url, Object.assign(Object.assign({}, options), {
            noResolveJson: true
        }), parameters);
    });
}
function remove(fetcher, url, body, options, parameters) {
    return __awaiter(this, void 0, void 0, function*() {
        return _handleRequest(fetcher, 'DELETE', url, options, parameters, body);
    });
} //# sourceMappingURL=fetch.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/StreamDownloadBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StreamDownloadBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
class StreamDownloadBuilder {
    constructor(downloadFn, shouldThrowOnError){
        this.downloadFn = downloadFn;
        this.shouldThrowOnError = shouldThrowOnError;
    }
    then(onfulfilled, onrejected) {
        return this.execute().then(onfulfilled, onrejected);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const result = yield this.downloadFn();
                return {
                    data: result.body,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
} //# sourceMappingURL=StreamDownloadBuilder.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/BlobDownloadBuilder.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlobDownloadBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StreamDownloadBuilder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/StreamDownloadBuilder.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
class BlobDownloadBuilder {
    constructor(downloadFn, shouldThrowOnError){
        this.downloadFn = downloadFn;
        this.shouldThrowOnError = shouldThrowOnError;
    }
    asStream() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StreamDownloadBuilder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this.downloadFn, this.shouldThrowOnError);
    }
    then(onfulfilled, onrejected) {
        return this.execute().then(onfulfilled, onrejected);
    }
    execute() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const result = yield this.downloadFn();
                return {
                    data: yield result.blob(),
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
} //# sourceMappingURL=BlobDownloadBuilder.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StorageFileApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$BlobDownloadBuilder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/BlobDownloadBuilder.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
const DEFAULT_SEARCH_OPTIONS = {
    limit: 100,
    offset: 0,
    sortBy: {
        column: 'name',
        order: 'asc'
    }
};
const DEFAULT_FILE_OPTIONS = {
    cacheControl: '3600',
    contentType: 'text/plain;charset=UTF-8',
    upsert: false
};
class StorageFileApi {
    constructor(url, headers = {}, bucketId, fetch){
        this.shouldThrowOnError = false;
        this.url = url;
        this.headers = headers;
        this.bucketId = bucketId;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveFetch"])(fetch);
    }
    /**
     * Enable throwing errors instead of returning them.
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
     *
     * @param method HTTP method.
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadOrUpdate(method, path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let body;
                const options = Object.assign(Object.assign({}, DEFAULT_FILE_OPTIONS), fileOptions);
                let headers = Object.assign(Object.assign({}, this.headers), method === 'POST' && {
                    'x-upsert': String(options.upsert)
                });
                const metadata = options.metadata;
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append('cacheControl', options.cacheControl);
                    if (metadata) {
                        body.append('metadata', this.encodeMetadata(metadata));
                    }
                    body.append('', fileBody);
                } else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append('cacheControl', options.cacheControl);
                    if (metadata) {
                        body.append('metadata', this.encodeMetadata(metadata));
                    }
                } else {
                    body = fileBody;
                    headers['cache-control'] = `max-age=${options.cacheControl}`;
                    headers['content-type'] = options.contentType;
                    if (metadata) {
                        headers['x-metadata'] = this.toBase64(this.encodeMetadata(metadata));
                    }
                }
                if (fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.headers) {
                    headers = Object.assign(Object.assign({}, headers), fileOptions.headers);
                }
                const cleanPath = this._removeEmptyFolders(path);
                const _path = this._getFinalPath(cleanPath);
                const data = yield (method == 'PUT' ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["put"] : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/${_path}`, body, Object.assign({
                    headers
                }, (options === null || options === void 0 ? void 0 : options.duplex) ? {
                    duplex: options.duplex
                } : {}));
                return {
                    data: {
                        path: cleanPath,
                        id: data.Id,
                        fullPath: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Uploads a file to an existing bucket.
     *
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param fileBody The body of the file to be stored in the bucket.
     */ upload(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate('POST', path, fileBody, fileOptions);
        });
    }
    /**
     * Upload a file with a token generated from `createSignedUploadUrl`.
     * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
     * @param token The token generated from `createSignedUploadUrl`
     * @param fileBody The body of the file to be stored in the bucket.
     */ uploadToSignedUrl(path, token, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            const cleanPath = this._removeEmptyFolders(path);
            const _path = this._getFinalPath(cleanPath);
            const url = new URL(this.url + `/object/upload/sign/${_path}`);
            url.searchParams.set('token', token);
            try {
                let body;
                const options = Object.assign({
                    upsert: DEFAULT_FILE_OPTIONS.upsert
                }, fileOptions);
                const headers = Object.assign(Object.assign({}, this.headers), {
                    'x-upsert': String(options.upsert)
                });
                if (typeof Blob !== 'undefined' && fileBody instanceof Blob) {
                    body = new FormData();
                    body.append('cacheControl', options.cacheControl);
                    body.append('', fileBody);
                } else if (typeof FormData !== 'undefined' && fileBody instanceof FormData) {
                    body = fileBody;
                    body.append('cacheControl', options.cacheControl);
                } else {
                    body = fileBody;
                    headers['cache-control'] = `max-age=${options.cacheControl}`;
                    headers['content-type'] = options.contentType;
                }
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["put"])(this.fetch, url.toString(), body, {
                    headers
                });
                return {
                    data: {
                        path: cleanPath,
                        fullPath: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a signed upload URL.
     * Signed upload URLs can be used to upload files to the bucket without further authentication.
     * They are valid for 2 hours.
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
     */ createSignedUploadUrl(path, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                const headers = Object.assign({}, this.headers);
                if (options === null || options === void 0 ? void 0 : options.upsert) {
                    headers['x-upsert'] = 'true';
                }
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/upload/sign/${_path}`, {}, {
                    headers
                });
                const url = new URL(this.url + data.url);
                const token = url.searchParams.get('token');
                if (!token) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageError"]('No token returned by API');
                }
                return {
                    data: {
                        signedUrl: url.toString(),
                        path,
                        token
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Replaces an existing file at the specified path with a new one.
     *
     * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
     * @param fileBody The body of the file to be stored in the bucket.
     */ update(path, fileBody, fileOptions) {
        return __awaiter(this, void 0, void 0, function*() {
            return this.uploadOrUpdate('PUT', path, fileBody, fileOptions);
        });
    }
    /**
     * Moves an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
     * @param options The destination options.
     */ move(fromPath, toPath, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/move`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Copies an existing file to a new path in the same bucket.
     *
     * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
     * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
     * @param options The destination options.
     */ copy(fromPath, toPath, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/copy`, {
                    bucketId: this.bucketId,
                    sourceKey: fromPath,
                    destinationKey: toPath,
                    destinationBucket: options === null || options === void 0 ? void 0 : options.destinationBucket
                }, {
                    headers: this.headers
                });
                return {
                    data: {
                        path: data.Key
                    },
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param path The file path, including the current file name. For example `folder/image.png`.
     * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ createSignedUrl(path, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                let _path = this._getFinalPath(path);
                let data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/sign/${_path}`, Object.assign({
                    expiresIn
                }, (options === null || options === void 0 ? void 0 : options.transform) ? {
                    transform: options.transform
                } : {}), {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? '' : options.download}` : '';
                const signedUrl = encodeURI(`${this.url}${data.signedURL}${downloadQueryParam}`);
                data = {
                    signedUrl
                };
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
     *
     * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
     * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
     * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     */ createSignedUrls(paths, expiresIn, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/sign/${this.bucketId}`, {
                    expiresIn,
                    paths
                }, {
                    headers: this.headers
                });
                const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `&download=${options.download === true ? '' : options.download}` : '';
                return {
                    data: data.map((datum)=>Object.assign(Object.assign({}, datum), {
                            signedUrl: datum.signedURL ? encodeURI(`${this.url}${datum.signedURL}${downloadQueryParam}`) : null
                        })),
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
     *
     * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
     * @param options.transform Transform the asset before serving it to the client.
     */ download(path, options) {
        const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
        const renderPath = wantsTransformation ? 'render/image/authenticated' : 'object';
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        const queryString = transformationQuery ? `?${transformationQuery}` : '';
        const _path = this._getFinalPath(path);
        const downloadFn = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/${renderPath}/${_path}${queryString}`, {
                headers: this.headers,
                noResolveJson: true
            });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$BlobDownloadBuilder$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](downloadFn, this.shouldThrowOnError);
    }
    /**
     * Retrieves the details of an existing file.
     * @param path
     */ info(path) {
        return __awaiter(this, void 0, void 0, function*() {
            const _path = this._getFinalPath(path);
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/object/info/${_path}`, {
                    headers: this.headers
                });
                return {
                    data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recursiveToCamel"])(data),
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Checks the existence of a file.
     * @param path
     */ exists(path) {
        return __awaiter(this, void 0, void 0, function*() {
            const _path = this._getFinalPath(path);
            try {
                yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["head"])(this.fetch, `${this.url}/object/${_path}`, {
                    headers: this.headers
                });
                return {
                    data: true,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error) && error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageUnknownError"]) {
                    const originalError = error.originalError;
                    if ([
                        400,
                        404
                    ].includes(originalError === null || originalError === void 0 ? void 0 : originalError.status)) {
                        return {
                            data: false,
                            error
                        };
                    }
                }
                throw error;
            }
        });
    }
    /**
     * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
     * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
     *
     * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
     * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
     * @param options.transform Transform the asset before serving it to the client.
     */ getPublicUrl(path, options) {
        const _path = this._getFinalPath(path);
        const _queryString = [];
        const downloadQueryParam = (options === null || options === void 0 ? void 0 : options.download) ? `download=${options.download === true ? '' : options.download}` : '';
        if (downloadQueryParam !== '') {
            _queryString.push(downloadQueryParam);
        }
        const wantsTransformation = typeof (options === null || options === void 0 ? void 0 : options.transform) !== 'undefined';
        const renderPath = wantsTransformation ? 'render/image' : 'object';
        const transformationQuery = this.transformOptsToQueryString((options === null || options === void 0 ? void 0 : options.transform) || {});
        if (transformationQuery !== '') {
            _queryString.push(transformationQuery);
        }
        let queryString = _queryString.join('&');
        if (queryString !== '') {
            queryString = `?${queryString}`;
        }
        return {
            data: {
                publicUrl: encodeURI(`${this.url}/${renderPath}/public/${_path}${queryString}`)
            }
        };
    }
    /**
     * Deletes files within the same bucket
     *
     * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
     */ remove(paths) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["remove"])(this.fetch, `${this.url}/object/${this.bucketId}`, {
                    prefixes: paths
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Get file metadata
     * @param id the file id to retrieve metadata
     */ // async getMetadata(
    //   id: string
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Update file metadata
     * @param id the file id to update metadata
     * @param meta the new file metadata
     */ // async updateMetadata(
    //   id: string,
    //   meta: Metadata
    // ): Promise<
    //   | {
    //       data: Metadata
    //       error: null
    //     }
    //   | {
    //       data: null
    //       error: StorageError
    //     }
    // > {
    //   try {
    //     const data = await post(
    //       this.fetch,
    //       `${this.url}/metadata/${id}`,
    //       { ...meta },
    //       { headers: this.headers }
    //     )
    //     return { data, error: null }
    //   } catch (error) {
    //     if (isStorageError(error)) {
    //       return { data: null, error }
    //     }
    //     throw error
    //   }
    // }
    /**
     * Lists all the files and folders within a path of the bucket.
     * @param path The folder path.
     * @param options Search options including limit (defaults to 100), offset, sortBy, and search
     */ list(path, options, parameters) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign(Object.assign(Object.assign({}, DEFAULT_SEARCH_OPTIONS), options), {
                    prefix: path || ''
                });
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/list/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * @experimental this method signature might change in the future
     * @param options search options
     * @param parameters
     */ listV2(options, parameters) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const body = Object.assign({}, options);
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, body, {
                    headers: this.headers
                }, parameters);
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    encodeMetadata(metadata) {
        return JSON.stringify(metadata);
    }
    toBase64(data) {
        if (typeof Buffer !== 'undefined') {
            return Buffer.from(data).toString('base64');
        }
        return btoa(data);
    }
    _getFinalPath(path) {
        return `${this.bucketId}/${path.replace(/^\/+/, '')}`;
    }
    _removeEmptyFolders(path) {
        return path.replace(/^\/|\/$/g, '').replace(/\/+/g, '/');
    }
    transformOptsToQueryString(transform) {
        const params = [];
        if (transform.width) {
            params.push(`width=${transform.width}`);
        }
        if (transform.height) {
            params.push(`height=${transform.height}`);
        }
        if (transform.resize) {
            params.push(`resize=${transform.resize}`);
        }
        if (transform.format) {
            params.push(`format=${transform.format}`);
        }
        if (transform.quality) {
            params.push(`quality=${transform.quality}`);
        }
        return params.join('&');
    }
} //# sourceMappingURL=StorageFileApi.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/version.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// generated by genversion
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.12.2'; //# sourceMappingURL=version.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_HEADERS",
    ()=>DEFAULT_HEADERS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/version.js [app-rsc] (ecmascript)");
;
const DEFAULT_HEADERS = {
    'X-Client-Info': `storage-js/${__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"]}`
}; //# sourceMappingURL=constants.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StorageBucketApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/errors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
class StorageBucketApi {
    constructor(url, headers = {}, fetch, opts){
        this.shouldThrowOnError = false;
        const baseUrl = new URL(url);
        // if legacy uri is used, replace with new storage host (disables request buffering to allow > 50GB uploads)
        // "project-ref.supabase.co" becomes "project-ref.storage.supabase.co"
        if (opts === null || opts === void 0 ? void 0 : opts.useNewHostname) {
            const isSupabaseHost = /supabase\.(co|in|red)$/.test(baseUrl.hostname);
            if (isSupabaseHost && !baseUrl.hostname.includes('storage.supabase.')) {
                baseUrl.hostname = baseUrl.hostname.replace('supabase.', 'storage.supabase.');
            }
        }
        this.url = baseUrl.href;
        this.headers = Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_HEADERS"]), headers);
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveFetch"])(fetch);
    }
    /**
     * Enable throwing errors instead of returning them.
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Retrieves the details of all Storage buckets within an existing project.
     */ listBuckets() {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */ getBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["get"])(this.fetch, `${this.url}/bucket/${id}`, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     * @returns newly created bucket id
     * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
     *   - default bucket type is `STANDARD`
     */ createBucket(id, options = {
        public: false
    }) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/bucket`, {
                    id,
                    name: id,
                    type: options.type,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Updates a Storage bucket
     *
     * @param id A unique identifier for the bucket you are updating.
     * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
     * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
     * The global file size limit takes precedence over this value.
     * The default value is null, which doesn't set a per bucket file size limit.
     * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
     * The default value is null, which allows files with all mime types to be uploaded.
     * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
     */ updateBucket(id, options) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["put"])(this.fetch, `${this.url}/bucket/${id}`, {
                    id,
                    name: id,
                    public: options.public,
                    file_size_limit: options.fileSizeLimit,
                    allowed_mime_types: options.allowedMimeTypes
                }, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */ emptyBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["post"])(this.fetch, `${this.url}/bucket/${id}/empty`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */ deleteBucket(id) {
        return __awaiter(this, void 0, void 0, function*() {
            try {
                const data = yield (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["remove"])(this.fetch, `${this.url}/bucket/${id}`, {}, {
                    headers: this.headers
                });
                return {
                    data,
                    error: null
                };
            } catch (error) {
                if (this.shouldThrowOnError) {
                    throw error;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$lib$2f$errors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isStorageError"])(error)) {
                    return {
                        data: null,
                        error
                    };
                }
                throw error;
            }
        });
    }
} //# sourceMappingURL=StorageBucketApi.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageClient",
    ()=>StorageClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageFileApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/StorageFileApi.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageBucketApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/packages/StorageBucketApi.js [app-rsc] (ecmascript)");
;
;
class StorageClient extends __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageBucketApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] {
    constructor(url, headers = {}, fetch, opts){
        super(url, headers, fetch, opts);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */ from(id) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$packages$2f$StorageFileApi$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](this.url, this.headers, id, this.fetch);
    }
} //# sourceMappingURL=StorageClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.58.0'; //# sourceMappingURL=version.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AUTH_OPTIONS",
    ()=>DEFAULT_AUTH_OPTIONS,
    "DEFAULT_DB_OPTIONS",
    ()=>DEFAULT_DB_OPTIONS,
    "DEFAULT_GLOBAL_OPTIONS",
    ()=>DEFAULT_GLOBAL_OPTIONS,
    "DEFAULT_HEADERS",
    ()=>DEFAULT_HEADERS,
    "DEFAULT_REALTIME_OPTIONS",
    ()=>DEFAULT_REALTIME_OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-rsc] (ecmascript)");
;
let JS_ENV = '';
// @ts-ignore
if (typeof Deno !== 'undefined') {
    JS_ENV = 'deno';
} else if (typeof document !== 'undefined') {
    JS_ENV = 'web';
} else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    JS_ENV = 'react-native';
} else {
    JS_ENV = 'node';
}
const DEFAULT_HEADERS = {
    'X-Client-Info': `supabase-js-${JS_ENV}/${__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["version"]}`
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
const DEFAULT_DB_OPTIONS = {
    schema: 'public'
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit'
};
const DEFAULT_REALTIME_OPTIONS = {}; //# sourceMappingURL=constants.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "resolveFetch",
    ()=>resolveFetch,
    "resolveHeadersConstructor",
    ()=>resolveHeadersConstructor
]);
// @ts-ignore
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+node-fetch@2.6.15/node_modules/@supabase/node-fetch/lib/index.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const resolveFetch = (customFetch)=>{
    let _fetch;
    if (customFetch) {
        _fetch = customFetch;
    } else if (typeof fetch === 'undefined') {
        _fetch = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    } else {
        _fetch = fetch;
    }
    return (...args)=>_fetch(...args);
};
const resolveHeadersConstructor = ()=>{
    if (typeof Headers === 'undefined') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$node$2d$fetch$40$2$2e$6$2e$15$2f$node_modules$2f40$supabase$2f$node$2d$fetch$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Headers"];
    }
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = resolveFetch(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return (input, init)=>__awaiter(void 0, void 0, void 0, function*() {
            var _a;
            const accessToken = (_a = yield getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
            let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
            if (!headers.has('apikey')) {
                headers.set('apikey', supabaseKey);
            }
            if (!headers.has('Authorization')) {
                headers.set('Authorization', `Bearer ${accessToken}`);
            }
            return fetch1(input, Object.assign(Object.assign({}, init), {
                headers
            }));
        });
}; //# sourceMappingURL=fetch.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySettingDefaults",
    ()=>applySettingDefaults,
    "ensureTrailingSlash",
    ()=>ensureTrailingSlash,
    "isBrowser",
    ()=>isBrowser,
    "uuid",
    ()=>uuid,
    "validateSupabaseUrl",
    ()=>validateSupabaseUrl
]);
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function ensureTrailingSlash(url) {
    return url.endsWith('/') ? url : url + '/';
}
const isBrowser = ()=>"undefined" !== 'undefined';
function applySettingDefaults(options, defaults) {
    var _a, _b;
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    const result = {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions), {
            headers: Object.assign(Object.assign({}, (_a = DEFAULT_GLOBAL_OPTIONS === null || DEFAULT_GLOBAL_OPTIONS === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS.headers) !== null && _a !== void 0 ? _a : {}), (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _b !== void 0 ? _b : {})
        }),
        accessToken: ()=>__awaiter(this, void 0, void 0, function*() {
                return '';
            })
    };
    if (options.accessToken) {
        result.accessToken = options.accessToken;
    } else {
        // hack around Required<>
        delete result.accessToken;
    }
    return result;
}
function validateSupabaseUrl(supabaseUrl) {
    const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) {
        throw new Error('supabaseUrl is required.');
    }
    if (!trimmedUrl.match(/^https?:\/\//i)) {
        throw new Error('Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.');
    }
    try {
        return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_a) {
        throw Error('Invalid supabaseUrl: Provided URL is malformed.');
    }
} //# sourceMappingURL=helpers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseAuthClient",
    ()=>SupabaseAuthClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$72$2e$0$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+auth-js@2.72.0/node_modules/@supabase/auth-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$72$2e$0$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+auth-js@2.72.0/node_modules/@supabase/auth-js/dist/module/AuthClient.js [app-rsc] (ecmascript) <export default as AuthClient>");
;
class SupabaseAuthClient extends __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$72$2e$0$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__["AuthClient"] {
    constructor(options){
        super(options);
    }
} //# sourceMappingURL=SupabaseAuthClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+functions-js@2.5.0/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-rsc] (ecmascript) <export default as RealtimeClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+storage-js@2.12.2/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-rsc] (ecmascript)");
var __awaiter = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
;
;
;
;
;
;
;
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.storage Options passed along to the storage-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validateSupabaseUrl"])(supabaseUrl);
        if (!supabaseKey) throw new Error('supabaseKey is required.');
        this.realtimeUrl = new URL('realtime/v1', baseUrl);
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace('http', 'ws');
        this.authUrl = new URL('auth/v1', baseUrl);
        this.storageUrl = new URL('storage/v1', baseUrl);
        this.functionsUrl = new URL('functions/v1', baseUrl);
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${baseUrl.hostname.split('.')[0]}-auth-token`;
        const DEFAULTS = {
            db: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_DB_OPTIONS"],
            realtime: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_REALTIME_OPTIONS"],
            auth: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_OPTIONS"]), {
                storageKey: defaultStorageKey
            }),
            global: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_GLOBAL_OPTIONS"]
        };
        const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applySettingDefaults"])(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : '';
        this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
        if (!settings.accessToken) {
            this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: (_, prop)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
                }
            });
        }
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchWithAuth"])(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, settings.realtime));
        this.rest = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PostgrestClient"](new URL('rest/v1', baseUrl).href, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch
        });
        this.storage = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$storage$2d$js$40$2$2e$12$2e$2$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StorageClient"](this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
        if (!settings.accessToken) {
            this._listenForAuthEvents();
        }
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$functions$2d$js$40$2$2e$5$2e$0$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FunctionsClient"](this.functionsUrl.href, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options = {}) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    _getAccessToken() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function*() {
            if (this.accessToken) {
                return yield this.accessToken();
            }
            const { data } = yield this.auth.getSession();
            return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
        });
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SupabaseAuthClient"]({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            userStorage,
            flowType,
            lock,
            debug,
            fetch,
            // auth checks if there is a custom authorizaiton header using this flag
            // so it knows whether to return an error when getUser is called with no session
            hasCustomAuthorizationHeader: Object.keys(this.headers).some((key)=>key.toLowerCase() === 'authorization')
        });
    }
    _initRealtimeClient(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__["RealtimeClient"](this.realtimeUrl.href, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        let data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, 'CLIENT', session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') && this.changedAccessToken !== token) {
            this.changedAccessToken = token;
            this.realtime.setAuth(token);
        } else if (event === 'SIGNED_OUT') {
            this.realtime.setAuth();
            if (source == 'STORAGE') this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
} //# sourceMappingURL=SupabaseClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$auth$2d$js$40$2$2e$72$2e$0$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+auth-js@2.72.0/node_modules/@supabase/auth-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$postgrest$2d$js$40$1$2e$21$2e$4$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+postgrest-js@1.21.4/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$realtime$2d$js$40$2$2e$15$2e$5$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+realtime-js@2.15.5/node_modules/@supabase/realtime-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"](supabaseUrl, supabaseKey, options);
};
// Check for Node.js <= 18 deprecation
function shouldShowDeprecationWarning() {
    // Skip in browser environments
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Skip if process is not available (e.g., Edge Runtime)
    if (typeof process === 'undefined') {
        return false;
    }
    // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
    const processVersion = process['version'];
    if (processVersion === undefined || processVersion === null) {
        return false;
    }
    const versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) {
        return false;
    }
    const majorVersion = parseInt(versionMatch[1], 10);
    return majorVersion <= 18;
}
if (shouldShowDeprecationWarning()) {
    console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. ` + `Please upgrade to Node.js 20 or later. ` + `For more information, visit: https://github.com/orgs/supabase/discussions/37217`);
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/version.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
const VERSION = '0.7.0'; //# sourceMappingURL=version.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser,
    "parse",
    ()=>parse,
    "parseCookieHeader",
    ()=>parseCookieHeader,
    "serialize",
    ()=>serialize,
    "serializeCookieHeader",
    ()=>serializeCookieHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js [app-rsc] (ecmascript)");
;
const parse = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"];
const serialize = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serialize"];
function parseCookieHeader(header) {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(header);
    return Object.keys(parsed ?? {}).map((name)=>({
            name,
            value: parsed[name]
        }));
}
function serializeCookieHeader(name, value, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serialize"])(name, value, options);
}
function isBrowser() {
    return "undefined" !== "undefined" && typeof window.document !== "undefined";
} //# sourceMappingURL=helpers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_COOKIE_OPTIONS",
    ()=>DEFAULT_COOKIE_OPTIONS
]);
const DEFAULT_COOKIE_OPTIONS = {
    path: "/",
    sameSite: "lax",
    httpOnly: false,
    // https://developer.chrome.com/blog/cookie-max-age-expires
    // https://httpwg.org/http-extensions/draft-ietf-httpbis-rfc6265bis.html#name-cookie-lifetime-limits
    maxAge: 400 * 24 * 60 * 60
}; //# sourceMappingURL=constants.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_CHUNK_SIZE",
    ()=>MAX_CHUNK_SIZE,
    "combineChunks",
    ()=>combineChunks,
    "createChunks",
    ()=>createChunks,
    "deleteChunks",
    ()=>deleteChunks,
    "isChunkLike",
    ()=>isChunkLike
]);
const MAX_CHUNK_SIZE = 3180;
const CHUNK_LIKE_REGEX = /^(.*)[.](0|[1-9][0-9]*)$/;
function isChunkLike(cookieName, key) {
    if (cookieName === key) {
        return true;
    }
    const chunkLike = cookieName.match(CHUNK_LIKE_REGEX);
    if (chunkLike && chunkLike[1] === key) {
        return true;
    }
    return false;
}
function createChunks(key, value, chunkSize) {
    const resolvedChunkSize = chunkSize ?? MAX_CHUNK_SIZE;
    let encodedValue = encodeURIComponent(value);
    if (encodedValue.length <= resolvedChunkSize) {
        return [
            {
                name: key,
                value
            }
        ];
    }
    const chunks = [];
    while(encodedValue.length > 0){
        let encodedChunkHead = encodedValue.slice(0, resolvedChunkSize);
        const lastEscapePos = encodedChunkHead.lastIndexOf("%");
        // Check if the last escaped character is truncated.
        if (lastEscapePos > resolvedChunkSize - 3) {
            // If so, reslice the string to exclude the whole escape sequence.
            // We only reduce the size of the string as the chunk must
            // be smaller than the chunk size.
            encodedChunkHead = encodedChunkHead.slice(0, lastEscapePos);
        }
        let valueHead = "";
        // Check if the chunk was split along a valid unicode boundary.
        while(encodedChunkHead.length > 0){
            try {
                // Try to decode the chunk back and see if it is valid.
                // Stop when the chunk is valid.
                valueHead = decodeURIComponent(encodedChunkHead);
                break;
            } catch (error) {
                if (error instanceof URIError && encodedChunkHead.at(-3) === "%" && encodedChunkHead.length > 3) {
                    encodedChunkHead = encodedChunkHead.slice(0, encodedChunkHead.length - 3);
                } else {
                    throw error;
                }
            }
        }
        chunks.push(valueHead);
        encodedValue = encodedValue.slice(encodedChunkHead.length);
    }
    return chunks.map((value, i)=>({
            name: `${key}.${i}`,
            value
        }));
}
async function combineChunks(key, retrieveChunk) {
    const value = await retrieveChunk(key);
    if (value) {
        return value;
    }
    let values = [];
    for(let i = 0;; i++){
        const chunkName = `${key}.${i}`;
        const chunk = await retrieveChunk(chunkName);
        if (!chunk) {
            break;
        }
        values.push(chunk);
    }
    if (values.length > 0) {
        return values.join("");
    }
    return null;
}
async function deleteChunks(key, retrieveChunk, removeChunk) {
    const value = await retrieveChunk(key);
    if (value) {
        await removeChunk(key);
    }
    for(let i = 0;; i++){
        const chunkName = `${key}.${i}`;
        const chunk = await retrieveChunk(chunkName);
        if (!chunk) {
            break;
        }
        await removeChunk(chunkName);
    }
} //# sourceMappingURL=chunker.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Avoid modifying this file. It's part of
 * https://github.com/supabase-community/base64url-js.  Submit all fixes on
 * that repo!
 */ /**
 * An array of characters that encode 6 bits into a Base64-URL alphabet
 * character.
 */ __turbopack_context__.s([
    "codepointToUTF8",
    ()=>codepointToUTF8,
    "stringFromBase64URL",
    ()=>stringFromBase64URL,
    "stringFromUTF8",
    ()=>stringFromUTF8,
    "stringToBase64URL",
    ()=>stringToBase64URL,
    "stringToUTF8",
    ()=>stringToUTF8
]);
const TO_BASE64URL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split("");
/**
 * An array of characters that can appear in a Base64-URL encoded string but
 * should be ignored.
 */ const IGNORE_BASE64URL = " \t\n\r=".split("");
/**
 * An array of 128 numbers that map a Base64-URL character to 6 bits, or if -2
 * used to skip the character, or if -1 used to error out.
 */ const FROM_BASE64URL = (()=>{
    const charMap = new Array(128);
    for(let i = 0; i < charMap.length; i += 1){
        charMap[i] = -1;
    }
    for(let i = 0; i < IGNORE_BASE64URL.length; i += 1){
        charMap[IGNORE_BASE64URL[i].charCodeAt(0)] = -2;
    }
    for(let i = 0; i < TO_BASE64URL.length; i += 1){
        charMap[TO_BASE64URL[i].charCodeAt(0)] = i;
    }
    return charMap;
})();
function stringToBase64URL(str) {
    const base64 = [];
    let queue = 0;
    let queuedBits = 0;
    const emitter = (byte)=>{
        queue = queue << 8 | byte;
        queuedBits += 8;
        while(queuedBits >= 6){
            const pos = queue >> queuedBits - 6 & 63;
            base64.push(TO_BASE64URL[pos]);
            queuedBits -= 6;
        }
    };
    stringToUTF8(str, emitter);
    if (queuedBits > 0) {
        queue = queue << 6 - queuedBits;
        queuedBits = 6;
        while(queuedBits >= 6){
            const pos = queue >> queuedBits - 6 & 63;
            base64.push(TO_BASE64URL[pos]);
            queuedBits -= 6;
        }
    }
    return base64.join("");
}
function stringFromBase64URL(str) {
    const conv = [];
    const emit = (codepoint)=>{
        conv.push(String.fromCodePoint(codepoint));
    };
    const state = {
        utf8seq: 0,
        codepoint: 0
    };
    let queue = 0;
    let queuedBits = 0;
    for(let i = 0; i < str.length; i += 1){
        const codepoint = str.charCodeAt(i);
        const bits = FROM_BASE64URL[codepoint];
        if (bits > -1) {
            // valid Base64-URL character
            queue = queue << 6 | bits;
            queuedBits += 6;
            while(queuedBits >= 8){
                stringFromUTF8(queue >> queuedBits - 8 & 0xff, state, emit);
                queuedBits -= 8;
            }
        } else if (bits === -2) {
            continue;
        } else {
            throw new Error(`Invalid Base64-URL character "${str.at(i)}" at position ${i}`);
        }
    }
    return conv.join("");
}
function codepointToUTF8(codepoint, emit) {
    if (codepoint <= 0x7f) {
        emit(codepoint);
        return;
    } else if (codepoint <= 0x7ff) {
        emit(0xc0 | codepoint >> 6);
        emit(0x80 | codepoint & 0x3f);
        return;
    } else if (codepoint <= 0xffff) {
        emit(0xe0 | codepoint >> 12);
        emit(0x80 | codepoint >> 6 & 0x3f);
        emit(0x80 | codepoint & 0x3f);
        return;
    } else if (codepoint <= 0x10ffff) {
        emit(0xf0 | codepoint >> 18);
        emit(0x80 | codepoint >> 12 & 0x3f);
        emit(0x80 | codepoint >> 6 & 0x3f);
        emit(0x80 | codepoint & 0x3f);
        return;
    }
    throw new Error(`Unrecognized Unicode codepoint: ${codepoint.toString(16)}`);
}
function stringToUTF8(str, emit) {
    for(let i = 0; i < str.length; i += 1){
        let codepoint = str.charCodeAt(i);
        if (codepoint > 0xd7ff && codepoint <= 0xdbff) {
            // most UTF-16 codepoints are Unicode codepoints, except values in this
            // range where the next UTF-16 codepoint needs to be combined with the
            // current one to get the Unicode codepoint
            const highSurrogate = (codepoint - 0xd800) * 0x400 & 0xffff;
            const lowSurrogate = str.charCodeAt(i + 1) - 0xdc00 & 0xffff;
            codepoint = (lowSurrogate | highSurrogate) + 0x10000;
            i += 1;
        }
        codepointToUTF8(codepoint, emit);
    }
}
function stringFromUTF8(byte, state, emit) {
    if (state.utf8seq === 0) {
        if (byte <= 0x7f) {
            emit(byte);
            return;
        }
        // count the number of 1 leading bits until you reach 0
        for(let leadingBit = 1; leadingBit < 6; leadingBit += 1){
            if ((byte >> 7 - leadingBit & 1) === 0) {
                state.utf8seq = leadingBit;
                break;
            }
        }
        if (state.utf8seq === 2) {
            state.codepoint = byte & 31;
        } else if (state.utf8seq === 3) {
            state.codepoint = byte & 15;
        } else if (state.utf8seq === 4) {
            state.codepoint = byte & 7;
        } else {
            throw new Error("Invalid UTF-8 sequence");
        }
        state.utf8seq -= 1;
    } else if (state.utf8seq > 0) {
        if (byte <= 0x7f) {
            throw new Error("Invalid UTF-8 sequence");
        }
        state.codepoint = state.codepoint << 6 | byte & 63;
        state.utf8seq -= 1;
        if (state.utf8seq === 0) {
            emit(state.codepoint);
        }
    }
} //# sourceMappingURL=base64url.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-rsc] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/cookies.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyServerStorage",
    ()=>applyServerStorage,
    "createStorageFromOptions",
    ()=>createStorageFromOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/chunker.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/base64url.js [app-rsc] (ecmascript)");
;
;
const BASE64_PREFIX = "base64-";
function createStorageFromOptions(options, isServerClient) {
    const cookies = options.cookies ?? null;
    const cookieEncoding = options.cookieEncoding;
    const setItems = {};
    const removedItems = {};
    let getAll;
    let setAll;
    if (cookies) {
        if ("get" in cookies) {
            // Just get is not enough, because the client needs to see what cookies
            // are already set and unset them if necessary. To attempt to fix this
            // behavior for most use cases, we pass "hints" which is the keys of the
            // storage items. They are then converted to their corresponding cookie
            // chunk names and are fetched with get. Only 5 chunks are fetched, which
            // should be enough for the majority of use cases, but does not solve
            // those with very large sessions.
            const getWithHints = async (keyHints)=>{
                // optimistically find the first 5 potential chunks for the specified key
                const chunkNames = keyHints.flatMap((keyHint)=>[
                        keyHint,
                        ...Array.from({
                            length: 5
                        }).map((_, i)=>`${keyHint}.${i}`)
                    ]);
                const chunks = [];
                for(let i = 0; i < chunkNames.length; i += 1){
                    const value = await cookies.get(chunkNames[i]);
                    if (!value && typeof value !== "string") {
                        continue;
                    }
                    chunks.push({
                        name: chunkNames[i],
                        value
                    });
                }
                // TODO: detect and log stale chunks error
                return chunks;
            };
            getAll = async (keyHints)=>await getWithHints(keyHints);
            if ("set" in cookies && "remove" in cookies) {
                setAll = async (setCookies)=>{
                    for(let i = 0; i < setCookies.length; i += 1){
                        const { name, value, options } = setCookies[i];
                        if (value) {
                            await cookies.set(name, value, options);
                        } else {
                            await cookies.remove(name, options);
                        }
                    }
                };
            } else if (isServerClient) {
                setAll = async ()=>{
                    console.warn("@supabase/ssr: createServerClient was configured without set and remove cookie methods, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness. Consider switching to the getAll and setAll cookie methods instead of get, set and remove which are deprecated and can be difficult to use correctly.");
                };
            } else {
                throw new Error("@supabase/ssr: createBrowserClient requires configuring a getAll and setAll cookie method (deprecated: alternatively both get, set and remove can be used)");
            }
        } else if ("getAll" in cookies) {
            getAll = async ()=>await cookies.getAll();
            if ("setAll" in cookies) {
                setAll = cookies.setAll;
            } else if (isServerClient) {
                setAll = async ()=>{
                    console.warn("@supabase/ssr: createServerClient was configured without the setAll cookie method, but the client needs to set cookies. This can lead to issues such as random logouts, early session termination or increased token refresh requests. If in NextJS, check your middleware.ts file, route handlers and server actions for correctness.");
                };
            } else {
                throw new Error("@supabase/ssr: createBrowserClient requires configuring both getAll and setAll cookie methods (deprecated: alternatively both get, set and remove can be used)");
            }
        } else {
            // neither get nor getAll is present on cookies, only will occur if pure JavaScript is used, but cookies is an object
            throw new Error(`@supabase/ssr: ${isServerClient ? "createServerClient" : "createBrowserClient"} requires configuring getAll and setAll cookie methods (deprecated: alternatively use get, set and remove).${(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBrowser"])() ? " As this is called in a browser runtime, consider removing the cookies option object to use the document.cookie API automatically." : ""}`);
        }
    } else if (!isServerClient && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        // The environment is browser, so use the document.cookie API to implement getAll and setAll.
        const noHintGetAll = ()=>{
            const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(document.cookie);
            return Object.keys(parsed).map((name)=>({
                    name,
                    value: parsed[name] ?? ""
                }));
        };
        getAll = ()=>noHintGetAll();
        setAll = (setCookies)=>{
            setCookies.forEach(({ name, value, options })=>{
                document.cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cookie$40$1$2e$0$2e$2$2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serialize"])(name, value, options);
            });
        };
    } else if (isServerClient) {
        throw new Error("@supabase/ssr: createServerClient must be initialized with cookie options that specify getAll and setAll functions (deprecated, not recommended: alternatively use get, set and remove)");
    } else {
        // getting cookies when there's no window but we're in browser mode can be OK, because the developer probably is not using auth functions
        getAll = ()=>{
            return [];
        };
        // this is NOT OK because the developer is using auth functions that require setting some state, so that must error out
        setAll = ()=>{
            throw new Error("@supabase/ssr: createBrowserClient in non-browser runtimes (including Next.js pre-rendering mode) was not initialized cookie options that specify getAll and setAll functions (deprecated: alternatively use get, set and remove), but they were needed");
        };
    }
    if (!isServerClient) {
        // This is the storage client to be used in browsers. It only
        // works on the cookies abstraction, unlike the server client
        // which only uses cookies to read the initial state. When an
        // item is set, cookies are both cleared and set to values so
        // that stale chunks are not left remaining.
        return {
            getAll,
            setAll,
            setItems,
            removedItems,
            storage: {
                isServer: false,
                getItem: async (key)=>{
                    const allCookies = await getAll([
                        key
                    ]);
                    const chunkedCookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineChunks"])(key, async (chunkName)=>{
                        const cookie = allCookies?.find(({ name })=>name === chunkName) || null;
                        if (!cookie) {
                            return null;
                        }
                        return cookie.value;
                    });
                    if (!chunkedCookie) {
                        return null;
                    }
                    let decoded = chunkedCookie;
                    if (chunkedCookie.startsWith(BASE64_PREFIX)) {
                        decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringFromBase64URL"])(chunkedCookie.substring(BASE64_PREFIX.length));
                    }
                    return decoded;
                },
                setItem: async (key, value)=>{
                    const allCookies = await getAll([
                        key
                    ]);
                    const cookieNames = allCookies?.map(({ name })=>name) || [];
                    const removeCookies = new Set(cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isChunkLike"])(name, key)));
                    let encoded = value;
                    if (cookieEncoding === "base64url") {
                        encoded = BASE64_PREFIX + (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringToBase64URL"])(value);
                    }
                    const setCookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createChunks"])(key, encoded);
                    setCookies.forEach(({ name })=>{
                        removeCookies.delete(name);
                    });
                    const removeCookieOptions = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
                        ...options?.cookieOptions,
                        maxAge: 0
                    };
                    const setCookieOptions = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
                        ...options?.cookieOptions,
                        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"].maxAge
                    };
                    // the NextJS cookieStore API can get confused if the `name` from
                    // options.cookieOptions leaks
                    delete removeCookieOptions.name;
                    delete setCookieOptions.name;
                    const allToSet = [
                        ...[
                            ...removeCookies
                        ].map((name)=>({
                                name,
                                value: "",
                                options: removeCookieOptions
                            })),
                        ...setCookies.map(({ name, value })=>({
                                name,
                                value,
                                options: setCookieOptions
                            }))
                    ];
                    if (allToSet.length > 0) {
                        await setAll(allToSet);
                    }
                },
                removeItem: async (key)=>{
                    const allCookies = await getAll([
                        key
                    ]);
                    const cookieNames = allCookies?.map(({ name })=>name) || [];
                    const removeCookies = cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isChunkLike"])(name, key));
                    const removeCookieOptions = {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
                        ...options?.cookieOptions,
                        maxAge: 0
                    };
                    // the NextJS cookieStore API can get confused if the `name` from
                    // options.cookieOptions leaks
                    delete removeCookieOptions.name;
                    if (removeCookies.length > 0) {
                        await setAll(removeCookies.map((name)=>({
                                name,
                                value: "",
                                options: removeCookieOptions
                            })));
                    }
                }
            }
        };
    }
    // This is the server client. It only uses getAll to read the initial
    // state. Any subsequent changes to the items is persisted in the
    // setItems and removedItems objects. createServerClient *must* use
    // getAll, setAll and the values in setItems and removedItems to
    // persist the changes *at once* when appropriate (usually only when
    // the TOKEN_REFRESHED, USER_UPDATED or SIGNED_OUT events are fired by
    // the Supabase Auth client).
    return {
        getAll,
        setAll,
        setItems,
        removedItems,
        storage: {
            // to signal to the libraries that these cookies are
            // coming from a server environment and their value
            // should not be trusted
            isServer: true,
            getItem: async (key)=>{
                if (typeof setItems[key] === "string") {
                    return setItems[key];
                }
                if (removedItems[key]) {
                    return null;
                }
                const allCookies = await getAll([
                    key
                ]);
                const chunkedCookie = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineChunks"])(key, async (chunkName)=>{
                    const cookie = allCookies?.find(({ name })=>name === chunkName) || null;
                    if (!cookie) {
                        return null;
                    }
                    return cookie.value;
                });
                if (!chunkedCookie) {
                    return null;
                }
                let decoded = chunkedCookie;
                if (typeof chunkedCookie === "string" && chunkedCookie.startsWith(BASE64_PREFIX)) {
                    decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringFromBase64URL"])(chunkedCookie.substring(BASE64_PREFIX.length));
                }
                return decoded;
            },
            setItem: async (key, value)=>{
                // We don't have an `onAuthStateChange` event that can let us know that
                // the PKCE code verifier is being set. Therefore, if we see it being
                // set, we need to apply the storage (call `setAll` so the cookie is
                // set properly).
                if (key.endsWith("-code-verifier")) {
                    await applyServerStorage({
                        getAll,
                        setAll,
                        // pretend only that the code verifier was set
                        setItems: {
                            [key]: value
                        },
                        // pretend that nothing was removed
                        removedItems: {}
                    }, {
                        cookieOptions: options?.cookieOptions ?? null,
                        cookieEncoding
                    });
                }
                setItems[key] = value;
                delete removedItems[key];
            },
            removeItem: async (key)=>{
                // Intentionally not applying the storage when the key is the PKCE code
                // verifier, as usually right after it's removed other items are set,
                // so application of the storage will be handled by the
                // `onAuthStateChange` callback that follows removal -- usually as part
                // of the `exchangeCodeForSession` call.
                delete setItems[key];
                removedItems[key] = true;
            }
        }
    };
}
async function applyServerStorage({ getAll, setAll, setItems, removedItems }, options) {
    const cookieEncoding = options.cookieEncoding;
    const cookieOptions = options.cookieOptions ?? null;
    const allCookies = await getAll([
        ...setItems ? Object.keys(setItems) : [],
        ...removedItems ? Object.keys(removedItems) : []
    ]);
    const cookieNames = allCookies?.map(({ name })=>name) || [];
    const removeCookies = Object.keys(removedItems).flatMap((itemName)=>{
        return cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isChunkLike"])(name, itemName));
    });
    const setCookies = Object.keys(setItems).flatMap((itemName)=>{
        const removeExistingCookiesForItem = new Set(cookieNames.filter((name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isChunkLike"])(name, itemName)));
        let encoded = setItems[itemName];
        if (cookieEncoding === "base64url") {
            encoded = BASE64_PREFIX + (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$base64url$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringToBase64URL"])(encoded);
        }
        const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$chunker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createChunks"])(itemName, encoded);
        chunks.forEach((chunk)=>{
            removeExistingCookiesForItem.delete(chunk.name);
        });
        removeCookies.push(...removeExistingCookiesForItem);
        return chunks;
    });
    const removeCookieOptions = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
        ...cookieOptions,
        maxAge: 0
    };
    const setCookieOptions = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"],
        ...cookieOptions,
        maxAge: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_COOKIE_OPTIONS"].maxAge
    };
    // the NextJS cookieStore API can get confused if the `name` from
    // options.cookieOptions leaks
    delete removeCookieOptions.name;
    delete setCookieOptions.name;
    await setAll([
        ...removeCookies.map((name)=>({
                name,
                value: "",
                options: removeCookieOptions
            })),
        ...setCookies.map(({ name, value })=>({
                name,
                value,
                options: setCookieOptions
            }))
    ]);
} //# sourceMappingURL=cookies.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserClient",
    ()=>createBrowserClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/version.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/cookies.js [app-rsc] (ecmascript)");
;
;
;
;
let cachedBrowserClient;
function createBrowserClient(supabaseUrl, supabaseKey, options) {
    // singleton client is created only if isSingleton is set to true, or if isSingleton is not defined and we detect a browser
    const shouldUseSingleton = options?.isSingleton === true || (!options || !("isSingleton" in options)) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBrowser"])();
    if (shouldUseSingleton && cachedBrowserClient) {
        return cachedBrowserClient;
    }
    if (!supabaseUrl || !supabaseKey) {
        throw new Error(`@supabase/ssr: Your project's URL and API key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api`);
    }
    const { storage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStorageFromOptions"])({
        ...options,
        cookieEncoding: options?.cookieEncoding ?? "base64url"
    }, false);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey, {
        // TODO: resolve type error
        ...options,
        global: {
            ...options?.global,
            headers: {
                ...options?.global?.headers,
                "X-Client-Info": `supabase-ssr/${__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VERSION"]} createBrowserClient`
            }
        },
        auth: {
            ...options?.auth,
            ...options?.cookieOptions?.name ? {
                storageKey: options.cookieOptions.name
            } : null,
            flowType: "pkce",
            autoRefreshToken: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBrowser"])(),
            detectSessionInUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBrowser"])(),
            persistSession: true,
            storage
        }
    });
    if (shouldUseSingleton) {
        cachedBrowserClient = client;
    }
    return client;
} //# sourceMappingURL=createBrowserClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerClient",
    ()=>createServerClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+supabase-js@2.58.0/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/version.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/cookies.js [app-rsc] (ecmascript)");
;
;
;
function createServerClient(supabaseUrl, supabaseKey, options) {
    if (!supabaseUrl || !supabaseKey) {
        throw new Error(`Your project's URL and Key are required to create a Supabase client!\n\nCheck your Supabase project's API settings to find these values\n\nhttps://supabase.com/dashboard/project/_/settings/api`);
    }
    const { storage, getAll, setAll, setItems, removedItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createStorageFromOptions"])({
        ...options,
        cookieEncoding: options?.cookieEncoding ?? "base64url"
    }, true);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey, {
        // TODO: resolve type error
        ...options,
        global: {
            ...options?.global,
            headers: {
                ...options?.global?.headers,
                "X-Client-Info": `supabase-ssr/${__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VERSION"]} createServerClient`
            }
        },
        auth: {
            ...options?.cookieOptions?.name ? {
                storageKey: options.cookieOptions.name
            } : null,
            ...options?.auth,
            flowType: "pkce",
            autoRefreshToken: false,
            detectSessionInUrl: false,
            persistSession: true,
            storage
        }
    });
    client.auth.onAuthStateChange(async (event)=>{
        // The SIGNED_IN event is fired very often, but we don't need to
        // apply the storage each time it fires, only if there are changes
        // that need to be set -- which is if setItems / removeItems have
        // data.
        const hasStorageChanges = Object.keys(setItems).length > 0 || Object.keys(removedItems).length > 0;
        if (hasStorageChanges && (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "USER_UPDATED" || event === "PASSWORD_RECOVERY" || event === "SIGNED_OUT" || event === "MFA_CHALLENGE_VERIFIED")) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyServerStorage"])({
                getAll,
                setAll,
                setItems,
                removedItems
            }, {
                cookieOptions: options?.cookieOptions ?? null,
                cookieEncoding: options?.cookieEncoding ?? "base64url"
            });
        }
    });
    return client;
} //# sourceMappingURL=createServerClient.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/types.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

//# sourceMappingURL=types.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$supabase$2b$ssr$40$0$2e$7$2e$0_$40$supabase$2b$supabase$2d$js$40$2$2e$58$2e$0$2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@supabase+ssr@0.7.0_@supabase+supabase-js@2.58.0/node_modules/@supabase/ssr/dist/module/utils/index.js [app-rsc] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cookie@1.0.2/node_modules/cookie/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.parse = parse;
exports.serialize = serialize;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */ const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */ const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */ const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */ const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (()=>{
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */ function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2) return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) break; // No more cookie pairs.
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        // only assign once
        if (obj[key] === undefined) {
            let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            let valEndIdx = endIndex(str, endIdx, valStartIdx);
            const value = dec(str.slice(valStartIdx, valEndIdx));
            obj[key] = value;
        }
        index = endIdx + 1;
    }while (index < len)
    return obj;
}
function startIndex(str, index, max) {
    do {
        const code = str.charCodeAt(index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index;
    }while (++index < max)
    return max;
}
function endIndex(str, index, min) {
    while(index > min){
        const code = str.charCodeAt(--index);
        if (code !== 0x20 /*   */  && code !== 0x09 /* \t */ ) return index + 1;
    }
    return min;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 */ function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options) return str;
    if (options.maxAge !== undefined) {
        if (!Number.isInteger(options.maxAge)) {
            throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
            throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
    }
    if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
            throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
    }
    if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
            throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
        str += "; HttpOnly";
    }
    if (options.secure) {
        str += "; Secure";
    }
    if (options.partitioned) {
        str += "; Partitioned";
    }
    if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : undefined;
        switch(priority){
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
    }
    if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch(sameSite){
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */ function decode(str) {
    if (str.indexOf("%") === -1) return str;
    try {
        return decodeURIComponent(str);
    } catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */ function isDate(val) {
    return __toString.call(val) === "[object Date]";
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/delayed-stream@1.0.0/node_modules/delayed-stream/lib/delayed_stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
module.exports = DelayedStream;
function DelayedStream() {
    this.source = null;
    this.dataSize = 0;
    this.maxDataSize = 1024 * 1024;
    this.pauseStream = true;
    this._maxDataSizeExceeded = false;
    this._released = false;
    this._bufferedEvents = [];
}
util.inherits(DelayedStream, Stream);
DelayedStream.create = function(source, options) {
    var delayedStream = new this();
    options = options || {};
    for(var option in options){
        delayedStream[option] = options[option];
    }
    delayedStream.source = source;
    var realEmit = source.emit;
    source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
    };
    source.on('error', function() {});
    if (delayedStream.pauseStream) {
        source.pause();
    }
    return delayedStream;
};
Object.defineProperty(DelayedStream.prototype, 'readable', {
    configurable: true,
    enumerable: true,
    get: function() {
        return this.source.readable;
    }
});
DelayedStream.prototype.setEncoding = function() {
    return this.source.setEncoding.apply(this.source, arguments);
};
DelayedStream.prototype.resume = function() {
    if (!this._released) {
        this.release();
    }
    this.source.resume();
};
DelayedStream.prototype.pause = function() {
    this.source.pause();
};
DelayedStream.prototype.release = function() {
    this._released = true;
    this._bufferedEvents.forEach((function(args) {
        this.emit.apply(this, args);
    }).bind(this));
    this._bufferedEvents = [];
};
DelayedStream.prototype.pipe = function() {
    var r = Stream.prototype.pipe.apply(this, arguments);
    this.resume();
    return r;
};
DelayedStream.prototype._handleEmit = function(args) {
    if (this._released) {
        this.emit.apply(this, args);
        return;
    }
    if (args[0] === 'data') {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
    }
    this._bufferedEvents.push(args);
};
DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
    if (this._maxDataSizeExceeded) {
        return;
    }
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    this._maxDataSizeExceeded = true;
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this.emit('error', new Error(message));
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/combined-stream@1.0.8/node_modules/combined-stream/lib/combined_stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/delayed-stream@1.0.0/node_modules/delayed-stream/lib/delayed_stream.js [app-rsc] (ecmascript)");
module.exports = CombinedStream;
function CombinedStream() {
    this.writable = false;
    this.readable = true;
    this.dataSize = 0;
    this.maxDataSize = 2 * 1024 * 1024;
    this.pauseStreams = true;
    this._released = false;
    this._streams = [];
    this._currentStream = null;
    this._insideLoop = false;
    this._pendingNext = false;
}
util.inherits(CombinedStream, Stream);
CombinedStream.create = function(options) {
    var combinedStream = new this();
    options = options || {};
    for(var option in options){
        combinedStream[option] = options[option];
    }
    return combinedStream;
};
CombinedStream.isStreamLike = function(stream) {
    return typeof stream !== 'function' && typeof stream !== 'string' && typeof stream !== 'boolean' && typeof stream !== 'number' && !Buffer.isBuffer(stream);
};
CombinedStream.prototype.append = function(stream) {
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        if (!(stream instanceof DelayedStream)) {
            var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
            });
            stream.on('data', this._checkDataSize.bind(this));
            stream = newStream;
        }
        this._handleErrors(stream);
        if (this.pauseStreams) {
            stream.pause();
        }
    }
    this._streams.push(stream);
    return this;
};
CombinedStream.prototype.pipe = function(dest, options) {
    Stream.prototype.pipe.call(this, dest, options);
    this.resume();
    return dest;
};
CombinedStream.prototype._getNext = function() {
    this._currentStream = null;
    if (this._insideLoop) {
        this._pendingNext = true;
        return; // defer call
    }
    this._insideLoop = true;
    try {
        do {
            this._pendingNext = false;
            this._realGetNext();
        }while (this._pendingNext)
    } finally{
        this._insideLoop = false;
    }
};
CombinedStream.prototype._realGetNext = function() {
    var stream = this._streams.shift();
    if (typeof stream == 'undefined') {
        this.end();
        return;
    }
    if (typeof stream !== 'function') {
        this._pipeNext(stream);
        return;
    }
    var getStream = stream;
    getStream((function(stream) {
        var isStreamLike = CombinedStream.isStreamLike(stream);
        if (isStreamLike) {
            stream.on('data', this._checkDataSize.bind(this));
            this._handleErrors(stream);
        }
        this._pipeNext(stream);
    }).bind(this));
};
CombinedStream.prototype._pipeNext = function(stream) {
    this._currentStream = stream;
    var isStreamLike = CombinedStream.isStreamLike(stream);
    if (isStreamLike) {
        stream.on('end', this._getNext.bind(this));
        stream.pipe(this, {
            end: false
        });
        return;
    }
    var value = stream;
    this.write(value);
    this._getNext();
};
CombinedStream.prototype._handleErrors = function(stream) {
    var self = this;
    stream.on('error', function(err) {
        self._emitError(err);
    });
};
CombinedStream.prototype.write = function(data) {
    this.emit('data', data);
};
CombinedStream.prototype.pause = function() {
    if (!this.pauseStreams) {
        return;
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == 'function') this._currentStream.pause();
    this.emit('pause');
};
CombinedStream.prototype.resume = function() {
    if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
    }
    if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == 'function') this._currentStream.resume();
    this.emit('resume');
};
CombinedStream.prototype.end = function() {
    this._reset();
    this.emit('end');
};
CombinedStream.prototype.destroy = function() {
    this._reset();
    this.emit('close');
};
CombinedStream.prototype._reset = function() {
    this.writable = false;
    this._streams = [];
    this._currentStream = null;
};
CombinedStream.prototype._checkDataSize = function() {
    this._updateDataSize();
    if (this.dataSize <= this.maxDataSize) {
        return;
    }
    var message = 'DelayedStream#maxDataSize of ' + this.maxDataSize + ' bytes exceeded.';
    this._emitError(new Error(message));
};
CombinedStream.prototype._updateDataSize = function() {
    this.dataSize = 0;
    var self = this;
    this._streams.forEach(function(stream) {
        if (!stream.dataSize) {
            return;
        }
        self.dataSize += stream.dataSize;
    });
    if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
    }
};
CombinedStream.prototype._emitError = function(err) {
    this._reset();
    this.emit('error', err);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/mime-types@2.1.35/node_modules/mime-types/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/mime-db@1.52.0/node_modules/mime-db/index.js [app-rsc] (ecmascript)");
var extname = __turbopack_context__.r("[externals]/path [external] (path, cjs)").extname;
/**
 * Module variables.
 * @private
 */ var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
var TEXT_TYPE_REGEXP = /^text\//i;
/**
 * Module exports.
 * @public
 */ exports.charset = charset;
exports.charsets = {
    lookup: charset
};
exports.contentType = contentType;
exports.extension = extension;
exports.extensions = Object.create(null);
exports.lookup = lookup;
exports.types = Object.create(null);
// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types);
/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function charset(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    var mime = match && db[match[1].toLowerCase()];
    if (mime && mime.charset) {
        return mime.charset;
    }
    // default text/* to utf-8
    if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return 'UTF-8';
    }
    return false;
}
/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */ function contentType(str) {
    // TODO: should this even be in this module?
    if (!str || typeof str !== 'string') {
        return false;
    }
    var mime = str.indexOf('/') === -1 ? exports.lookup(str) : str;
    if (!mime) {
        return false;
    }
    // TODO: use content-type or other module
    if (mime.indexOf('charset') === -1) {
        var charset = exports.charset(mime);
        if (charset) mime += '; charset=' + charset.toLowerCase();
    }
    return mime;
}
/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */ function extension(type) {
    if (!type || typeof type !== 'string') {
        return false;
    }
    // TODO: use media-typer
    var match = EXTRACT_TYPE_REGEXP.exec(type);
    // get extensions
    var exts = match && exports.extensions[match[1].toLowerCase()];
    if (!exts || !exts.length) {
        return false;
    }
    return exts[0];
}
/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */ function lookup(path) {
    if (!path || typeof path !== 'string') {
        return false;
    }
    // get the extension ("ext" or ".ext" or full path)
    var extension = extname('x.' + path).toLowerCase().substr(1);
    if (!extension) {
        return false;
    }
    return exports.types[extension] || false;
}
/**
 * Populate the extensions and types maps.
 * @private
 */ function populateMaps(extensions, types) {
    // source preference (least -> most)
    var preference = [
        'nginx',
        'apache',
        undefined,
        'iana'
    ];
    Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
            return;
        }
        // mime -> extensions
        extensions[type] = exts;
        // extension -> mime
        for(var i = 0; i < exts.length; i++){
            var extension = exts[i];
            if (types[extension]) {
                var from = preference.indexOf(db[types[extension]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension] !== 'application/octet-stream' && (from > to || from === to && types[extension].substr(0, 12) === 'application/')) {
                    continue;
                }
            }
            // set the extension -> mime
            types[extension] = type;
        }
    });
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/defer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = defer;
/**
 * Runs provided function on next iteration of the event loop
 *
 * @param {function} fn - function to run
 */ function defer(fn) {
    var nextTick = typeof setImmediate == 'function' ? setImmediate : typeof process == 'object' && typeof process.nextTick == 'function' ? process.nextTick : null;
    if (nextTick) {
        nextTick(fn);
    } else {
        setTimeout(fn, 0);
    }
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/async.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/defer.js [app-rsc] (ecmascript)");
// API
module.exports = async;
/**
 * Runs provided callback asynchronously
 * even if callback itself is not
 *
 * @param   {function} callback - callback to invoke
 * @returns {function} - augmented callback
 */ function async(callback) {
    var isAsync = false;
    // check if async happened
    defer(function() {
        isAsync = true;
    });
    return function async_callback(err, result) {
        if (isAsync) {
            callback(err, result);
        } else {
            defer(function nextTick_callback() {
                callback(err, result);
            });
        }
    };
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/abort.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = abort;
/**
 * Aborts leftover active jobs
 *
 * @param {object} state - current state object
 */ function abort(state) {
    Object.keys(state.jobs).forEach(clean.bind(state));
    // reset leftover jobs
    state.jobs = {};
}
/**
 * Cleans up leftover job by invoking abort function for the provided job id
 *
 * @this  state
 * @param {string|number} key - job id to abort
 */ function clean(key) {
    if (typeof this.jobs[key] == 'function') {
        this.jobs[key]();
    }
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/iterate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/async.js [app-rsc] (ecmascript)"), abort = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/abort.js [app-rsc] (ecmascript)");
// API
module.exports = iterate;
/**
 * Iterates over each job object
 *
 * @param {array|object} list - array or object (named list) to iterate over
 * @param {function} iterator - iterator to run
 * @param {object} state - current job status
 * @param {function} callback - invoked when all elements processed
 */ function iterate(list, iterator, state, callback) {
    // store current index
    var key = state['keyedList'] ? state['keyedList'][state.index] : state.index;
    state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        // don't repeat yourself
        // skip secondary callbacks
        if (!(key in state.jobs)) {
            return;
        }
        // clean up jobs
        delete state.jobs[key];
        if (error) {
            // don't process rest of the results
            // stop still active jobs
            // and reset the list
            abort(state);
        } else {
            state.results[key] = output;
        }
        // return salvaged results
        callback(error, state.results);
    });
}
/**
 * Runs iterator over provided job element
 *
 * @param   {function} iterator - iterator to invoke
 * @param   {string|number} key - key/index of the element in the list of jobs
 * @param   {mixed} item - job description
 * @param   {function} callback - invoked after iterator is done with the job
 * @returns {function|mixed} - job abort function or something else
 */ function runJob(iterator, key, item, callback) {
    var aborter;
    // allow shortcut if iterator expects only two arguments
    if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
    } else {
        aborter = iterator(item, key, async(callback));
    }
    return aborter;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/state.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// API
module.exports = state;
/**
 * Creates initial state object
 * for iteration over list
 *
 * @param   {array|object} list - list to iterate over
 * @param   {function|null} sortMethod - function to use for keys sort,
 *                                     or `null` to keep them as is
 * @returns {object} - initial state object
 */ function state(list, sortMethod) {
    var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
    };
    if (sortMethod) {
        // sort array keys based on it's values
        // sort object's keys just on own merit
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
            return sortMethod(list[a], list[b]);
        });
    }
    return initState;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/terminator.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/abort.js [app-rsc] (ecmascript)"), async = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/async.js [app-rsc] (ecmascript)");
// API
module.exports = terminator;
/**
 * Terminates jobs in the attached state context
 *
 * @this  AsyncKitState#
 * @param {function} callback - final callback to invoke after termination
 */ function terminator(callback) {
    if (!Object.keys(this.jobs).length) {
        return;
    }
    // fast forward iteration index
    this.index = this.size;
    // abort jobs
    abort(this);
    // send back results we have so far
    async(callback)(null, this.results);
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/parallel.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/iterate.js [app-rsc] (ecmascript)"), initState = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/state.js [app-rsc] (ecmascript)"), terminator = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/terminator.js [app-rsc] (ecmascript)");
// Public API
module.exports = parallel;
/**
 * Runs iterator over provided array elements in parallel
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function parallel(list, iterator, callback) {
    var state = initState(list);
    while(state.index < (state['keyedList'] || list).length){
        iterate(list, iterator, state, function(error, result) {
            if (error) {
                callback(error, result);
                return;
            }
            // looks like it's the last one
            if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
            }
        });
        state.index++;
    }
    return terminator.bind(state, callback);
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serialOrdered.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/iterate.js [app-rsc] (ecmascript)"), initState = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/state.js [app-rsc] (ecmascript)"), terminator = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/terminator.js [app-rsc] (ecmascript)");
// Public API
module.exports = serialOrdered;
// sorting helpers
module.exports.ascending = ascending;
module.exports.descending = descending;
/**
 * Runs iterator over provided sorted array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} sortMethod - custom sort function
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serialOrdered(list, iterator, sortMethod, callback) {
    var state = initState(list, sortMethod);
    iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
            callback(error, result);
            return;
        }
        state.index++;
        // are we there yet?
        if (state.index < (state['keyedList'] || list).length) {
            iterate(list, iterator, state, iteratorHandler);
            return;
        }
        // done here
        callback(null, state.results);
    });
    return terminator.bind(state, callback);
}
/*
 * -- Sort methods
 */ /**
 * sort helper to sort array elements in ascending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
/**
 * sort helper to sort array elements in descending order
 *
 * @param   {mixed} a - an item to compare
 * @param   {mixed} b - an item to compare
 * @returns {number} - comparison result
 */ function descending(a, b) {
    return -1 * ascending(a, b);
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serial.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serialOrdered.js [app-rsc] (ecmascript)");
// Public API
module.exports = serial;
/**
 * Runs iterator over provided array elements in series
 *
 * @param   {array|object} list - array or object (named list) to iterate over
 * @param   {function} iterator - iterator to run
 * @param   {function} callback - invoked when all elements processed
 * @returns {function} - jobs terminator
 */ function serial(list, iterator, callback) {
    return serialOrdered(list, iterator, null, callback);
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/parallel.js [app-rsc] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serial.js [app-rsc] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serialOrdered.js [app-rsc] (ecmascript)")
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-rsc] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-rsc] (ecmascript)");
if ($gOPD) {
    try {
        $gOPD([], 'length');
    } catch (e) {
        // IE 8 has a broken gOPD
        $gOPD = null;
    }
}
module.exports = $gOPD;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
    try {
        $defineProperty({}, 'a', {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = false;
    }
}
module.exports = $defineProperty;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
        return false;
    }
    if (typeof Symbol.iterator === 'symbol') {
        return true;
    }
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') {
        return false;
    }
    if (typeof Symbol !== 'function') {
        return false;
    }
    if (typeof origSymbol('foo') !== 'symbol') {
        return false;
    }
    if (typeof Symbol('bar') !== 'symbol') {
        return false;
    }
    return hasSymbolSham();
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') {
        throw new TypeError('getProto: not an object');
    }
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1){
        arr[i] = a[i];
    }
    for(var j = 0; j < b.length; j += 1){
        arr[j + a.length] = b[j];
    }
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1){
        arr[j] = arrLike[i];
    }
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs[i] = '$' + i;
    }
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-rsc] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/reflectApply.js [app-rsc] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/actualApply.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/index.js [app-rsc] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
        throw e;
    }
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-intrinsic@1.2.7/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js [app-rsc] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-rsc] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-rsc] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-rsc] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-rsc] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-rsc] (ecmascript)");
var abs = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-rsc] (ecmascript)");
var floor = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-rsc] (ecmascript)");
var max = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-rsc] (ecmascript)");
var min = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-rsc] (ecmascript)");
var pow = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-rsc] (ecmascript)");
var round = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-rsc] (ecmascript)");
var sign = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-rsc] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-rsc] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-rsc] (ecmascript)");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-rsc] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-rsc] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-rsc] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-rsc] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionApply.js [app-rsc] (ecmascript)");
var $call = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-rsc] (ecmascript)");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS['%Error.prototype%'] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') {
        value = getEvalledConstructor('async function () {}');
    } else if (name === '%GeneratorFunction%') {
        value = getEvalledConstructor('function* () {}');
    } else if (name === '%AsyncGeneratorFunction%') {
        value = getEvalledConstructor('async function* () {}');
    } else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-rsc] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    } else if (last === '%' && first !== '%') {
        throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) {
        throw new $TypeError('intrinsic name must be a non-empty string');
    }
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
        }
        if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-rsc] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-set-tostringtag@2.1.0/node_modules/es-set-tostringtag/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-intrinsic@1.2.7/node_modules/get-intrinsic/index.js [app-rsc] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-rsc] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-rsc] (ecmascript)");
var toStringTag = hasToStringTag ? Symbol.toStringTag : null;
/** @type {import('.')} */ module.exports = function setToStringTag(object, value) {
    var overrideIfSet = arguments.length > 2 && !!arguments[2] && arguments[2].force;
    var nonConfigurable = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
    if (typeof overrideIfSet !== 'undefined' && typeof overrideIfSet !== 'boolean' || typeof nonConfigurable !== 'undefined' && typeof nonConfigurable !== 'boolean') {
        throw new $TypeError('if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans');
    }
    if (toStringTag && (overrideIfSet || !hasOwn(object, toStringTag))) {
        if ($defineProperty) {
            $defineProperty(object, toStringTag, {
                configurable: !nonConfigurable,
                enumerable: false,
                value: value,
                writable: false
            });
        } else {
            object[toStringTag] = value; // eslint-disable-line no-param-reassign
        }
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/form-data@4.0.4/node_modules/form-data/lib/populate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/form-data@4.0.4/node_modules/form-data/lib/form_data.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/combined-stream@1.0.8/node_modules/combined-stream/lib/combined_stream.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/mime-types@2.1.35/node_modules/mime-types/index.js [app-rsc] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/index.js [app-rsc] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-set-tostringtag@2.1.0/node_modules/es-set-tostringtag/index.js [app-rsc] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-rsc] (ecmascript)");
var populate = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/form-data@4.0.4/node_modules/form-data/lib/populate.js [app-rsc] (ecmascript)");
/**
 * Create readable "multipart/form-data" streams.
 * Can be used to submit forms
 * and file uploads to other web applications.
 *
 * @constructor
 * @param {object} options - Properties to be added/overriden for FormData and CombinedStream
 */ function FormData(options) {
    if (!(this instanceof FormData)) {
        return new FormData(options);
    }
    this._overheadLength = 0;
    this._valueLength = 0;
    this._valuesToMeasure = [];
    CombinedStream.call(this);
    options = options || {}; // eslint-disable-line no-param-reassign
    for(var option in options){
        this[option] = options[option];
    }
}
// make it a Stream
util.inherits(FormData, CombinedStream);
FormData.LINE_BREAK = '\r\n';
FormData.DEFAULT_CONTENT_TYPE = 'application/octet-stream';
FormData.prototype.append = function(field, value, options) {
    options = options || {}; // eslint-disable-line no-param-reassign
    // allow filename as single option
    if (typeof options === 'string') {
        options = {
            filename: options
        }; // eslint-disable-line no-param-reassign
    }
    var append = CombinedStream.prototype.append.bind(this);
    // all that streamy business can't handle numbers
    if (typeof value === 'number' || value == null) {
        value = String(value); // eslint-disable-line no-param-reassign
    }
    // https://github.com/felixge/node-form-data/issues/38
    if (Array.isArray(value)) {
        /*
     * Please convert your array into string
     * the way web server expects it
     */ this._error(new Error('Arrays are not supported.'));
        return;
    }
    var header = this._multiPartHeader(field, value, options);
    var footer = this._multiPartFooter();
    append(header);
    append(value);
    append(footer);
    // pass along options.knownLength
    this._trackLength(header, value, options);
};
FormData.prototype._trackLength = function(header, value, options) {
    var valueLength = 0;
    /*
   * used w/ getLengthSync(), when length is known.
   * e.g. for streaming directly from a remote server,
   * w/ a known file a size, and not wanting to wait for
   * incoming file to finish to get its size.
   */ if (options.knownLength != null) {
        valueLength += Number(options.knownLength);
    } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
    } else if (typeof value === 'string') {
        valueLength = Buffer.byteLength(value);
    }
    this._valueLength += valueLength;
    // @check why add CRLF? does this account for custom/multiple CRLFs?
    this._overheadLength += Buffer.byteLength(header) + FormData.LINE_BREAK.length;
    // empty or either doesn't have path or not an http response or not a stream
    if (!value || !value.path && !(value.readable && hasOwn(value, 'httpVersion')) && !(value instanceof Stream)) {
        return;
    }
    // no need to bother with the length
    if (!options.knownLength) {
        this._valuesToMeasure.push(value);
    }
};
FormData.prototype._lengthRetriever = function(value, callback) {
    if (hasOwn(value, 'fd')) {
        // take read range into a account
        // `end` = Infinity –> read file till the end
        //
        // TODO: Looks like there is bug in Node fs.createReadStream
        // it doesn't respect `end` options without `start` options
        // Fix it when node fixes it.
        // https://github.com/joyent/node/issues/7819
        if (value.end != undefined && value.end != Infinity && value.start != undefined) {
            // when end specified
            // no need to calculate range
            // inclusive, starts with 0
            callback(null, value.end + 1 - (value.start ? value.start : 0)); // eslint-disable-line callback-return
        // not that fast snoopy
        } else {
            // still need to fetch file size from fs
            fs.stat(value.path, function(err, stat) {
                if (err) {
                    callback(err);
                    return;
                }
                // update final size based on the range options
                var fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
            });
        }
    // or http response
    } else if (hasOwn(value, 'httpVersion')) {
        callback(null, Number(value.headers['content-length'])); // eslint-disable-line callback-return
    // or request stream http://github.com/mikeal/request
    } else if (hasOwn(value, 'httpModule')) {
        // wait till response come back
        value.on('response', function(response) {
            value.pause();
            callback(null, Number(response.headers['content-length']));
        });
        value.resume();
    // something else
    } else {
        callback('Unknown stream'); // eslint-disable-line callback-return
    }
};
FormData.prototype._multiPartHeader = function(field, value, options) {
    /*
   * custom header specified (as string)?
   * it becomes responsible for boundary
   * (e.g. to handle extra CRLFs on .NET servers)
   */ if (typeof options.header === 'string') {
        return options.header;
    }
    var contentDisposition = this._getContentDisposition(value, options);
    var contentType = this._getContentType(value, options);
    var contents = '';
    var headers = {
        // add custom disposition as third element or keep it two elements if not
        'Content-Disposition': [
            'form-data',
            'name="' + field + '"'
        ].concat(contentDisposition || []),
        // if no content type. allow it to be empty array
        'Content-Type': [].concat(contentType || [])
    };
    // allow custom headers.
    if (typeof options.header === 'object') {
        populate(headers, options.header);
    }
    var header;
    for(var prop in headers){
        if (hasOwn(headers, prop)) {
            header = headers[prop];
            // skip nullish headers.
            if (header == null) {
                continue; // eslint-disable-line no-restricted-syntax, no-continue
            }
            // convert all headers to arrays.
            if (!Array.isArray(header)) {
                header = [
                    header
                ];
            }
            // add non-empty headers.
            if (header.length) {
                contents += prop + ': ' + header.join('; ') + FormData.LINE_BREAK;
            }
        }
    }
    return '--' + this.getBoundary() + FormData.LINE_BREAK + contents + FormData.LINE_BREAK;
};
FormData.prototype._getContentDisposition = function(value, options) {
    var filename;
    if (typeof options.filepath === 'string') {
        // custom filepath for relative paths
        filename = path.normalize(options.filepath).replace(/\\/g, '/');
    } else if (options.filename || value && (value.name || value.path)) {
        /*
     * custom filename take precedence
     * formidable and the browser add a name property
     * fs- and request- streams have path property
     */ filename = path.basename(options.filename || value && (value.name || value.path));
    } else if (value && value.readable && hasOwn(value, 'httpVersion')) {
        // or try http response
        filename = path.basename(value.client._httpMessage.path || '');
    }
    if (filename) {
        return 'filename="' + filename + '"';
    }
};
FormData.prototype._getContentType = function(value, options) {
    // use custom content-type above all
    var contentType = options.contentType;
    // or try `name` from formidable, browser
    if (!contentType && value && value.name) {
        contentType = mime.lookup(value.name);
    }
    // or try `path` from fs-, request- streams
    if (!contentType && value && value.path) {
        contentType = mime.lookup(value.path);
    }
    // or if it's http-reponse
    if (!contentType && value && value.readable && hasOwn(value, 'httpVersion')) {
        contentType = value.headers['content-type'];
    }
    // or guess it from the filepath or filename
    if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
    }
    // fallback to the default content type if `value` is not simple value
    if (!contentType && value && typeof value === 'object') {
        contentType = FormData.DEFAULT_CONTENT_TYPE;
    }
    return contentType;
};
FormData.prototype._multiPartFooter = function() {
    return (function(next) {
        var footer = FormData.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
            footer += this._lastBoundary();
        }
        next(footer);
    }).bind(this);
};
FormData.prototype._lastBoundary = function() {
    return '--' + this.getBoundary() + '--' + FormData.LINE_BREAK;
};
FormData.prototype.getHeaders = function(userHeaders) {
    var header;
    var formHeaders = {
        'content-type': 'multipart/form-data; boundary=' + this.getBoundary()
    };
    for(header in userHeaders){
        if (hasOwn(userHeaders, header)) {
            formHeaders[header.toLowerCase()] = userHeaders[header];
        }
    }
    return formHeaders;
};
FormData.prototype.setBoundary = function(boundary) {
    if (typeof boundary !== 'string') {
        throw new TypeError('FormData boundary must be a string');
    }
    this._boundary = boundary;
};
FormData.prototype.getBoundary = function() {
    if (!this._boundary) {
        this._generateBoundary();
    }
    return this._boundary;
};
FormData.prototype.getBuffer = function() {
    var dataBuffer = new Buffer.alloc(0); // eslint-disable-line new-cap
    var boundary = this.getBoundary();
    // Create the form content. Add Line breaks to the end of data.
    for(var i = 0, len = this._streams.length; i < len; i++){
        if (typeof this._streams[i] !== 'function') {
            // Add content to the buffer.
            if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    this._streams[i]
                ]);
            } else {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(this._streams[i])
                ]);
            }
            // Add break after content.
            if (typeof this._streams[i] !== 'string' || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([
                    dataBuffer,
                    Buffer.from(FormData.LINE_BREAK)
                ]);
            }
        }
    }
    // Add the footer and return the Buffer object.
    return Buffer.concat([
        dataBuffer,
        Buffer.from(this._lastBoundary())
    ]);
};
FormData.prototype._generateBoundary = function() {
    // This generates a 50 character boundary similar to those used by Firefox.
    // They are optimized for boyer-moore parsing.
    this._boundary = '--------------------------' + crypto.randomBytes(12).toString('hex');
};
// Note: getLengthSync DOESN'T calculate streams length
// As workaround one can calculate file size manually and add it as knownLength option
FormData.prototype.getLengthSync = function() {
    var knownLength = this._overheadLength + this._valueLength;
    // Don't get confused, there are 3 "internal" streams for each keyval pair so it basically checks if there is any value added to the form
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    // https://github.com/form-data/form-data/issues/40
    if (!this.hasKnownLength()) {
        /*
     * Some async length retrievers are present
     * therefore synchronous length calculation is false.
     * Please use getLength(callback) to get proper length
     */ this._error(new Error('Cannot calculate proper length in synchronous way.'));
    }
    return knownLength;
};
// Public API to check if length of added values is known
// https://github.com/form-data/form-data/issues/196
// https://github.com/form-data/form-data/issues/262
FormData.prototype.hasKnownLength = function() {
    var hasKnownLength = true;
    if (this._valuesToMeasure.length) {
        hasKnownLength = false;
    }
    return hasKnownLength;
};
FormData.prototype.getLength = function(cb) {
    var knownLength = this._overheadLength + this._valueLength;
    if (this._streams.length) {
        knownLength += this._lastBoundary().length;
    }
    if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
    }
    asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
            cb(err);
            return;
        }
        values.forEach(function(length) {
            knownLength += length;
        });
        cb(null, knownLength);
    });
};
FormData.prototype.submit = function(params, cb) {
    var request;
    var options;
    var defaults = {
        method: 'post'
    };
    // parse provided url if it's string or treat it as options object
    if (typeof params === 'string') {
        params = parseUrl(params); // eslint-disable-line no-param-reassign
        /* eslint sort-keys: 0 */ options = populate({
            port: params.port,
            path: params.pathname,
            host: params.hostname,
            protocol: params.protocol
        }, defaults);
    } else {
        options = populate(params, defaults);
        // if no port provided use default one
        if (!options.port) {
            options.port = options.protocol === 'https:' ? 443 : 80;
        }
    }
    // put that good code in getHeaders to some use
    options.headers = this.getHeaders(params.headers);
    // https if specified, fallback to http in any other case
    if (options.protocol === 'https:') {
        request = https.request(options);
    } else {
        request = http.request(options);
    }
    // get content length and fire away
    this.getLength((function(err, length) {
        if (err && err !== 'Unknown stream') {
            this._error(err);
            return;
        }
        // add content length
        if (length) {
            request.setHeader('Content-Length', length);
        }
        this.pipe(request);
        if (cb) {
            var onResponse;
            var callback = function(error, responce) {
                request.removeListener('error', callback);
                request.removeListener('response', onResponse);
                return cb.call(this, error, responce); // eslint-disable-line no-invalid-this
            };
            onResponse = callback.bind(this, null);
            request.on('error', callback);
            request.on('response', onResponse);
        }
    }).bind(this));
    return request;
};
FormData.prototype._error = function(err) {
    if (!this.error) {
        this.error = err;
        this.pause();
        this.emit('error', err);
    }
};
FormData.prototype.toString = function() {
    return '[object FormData]';
};
setToStringTag(FormData, 'FormData');
// Public API
module.exports = FormData;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/proxy-from-env@1.1.0/node_modules/proxy-from-env/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var DEFAULT_PORTS = {
    ftp: 21,
    gopher: 70,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
};
var stringEndsWith = String.prototype.endsWith || function(s) {
    return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
};
/**
 * @param {string|object} url - The URL, or the result from url.parse.
 * @return {string} The URL of the proxy that should handle the request to the
 *  given URL. If no proxy is set, this will be an empty string.
 */ function getProxyForUrl(url) {
    var parsedUrl = typeof url === 'string' ? parseUrl(url) : url || {};
    var proto = parsedUrl.protocol;
    var hostname = parsedUrl.host;
    var port = parsedUrl.port;
    if (typeof hostname !== 'string' || !hostname || typeof proto !== 'string') {
        return ''; // Don't proxy URLs without a valid scheme or host.
    }
    proto = proto.split(':', 1)[0];
    // Stripping ports in this way instead of using parsedUrl.hostname to make
    // sure that the brackets around IPv6 addresses are kept.
    hostname = hostname.replace(/:\d*$/, '');
    port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
    if (!shouldProxy(hostname, port)) {
        return ''; // Don't proxy URLs that match NO_PROXY.
    }
    var proxy = getEnv('npm_config_' + proto + '_proxy') || getEnv(proto + '_proxy') || getEnv('npm_config_proxy') || getEnv('all_proxy');
    if (proxy && proxy.indexOf('://') === -1) {
        // Missing scheme in proxy, default to the requested URL's scheme.
        proxy = proto + '://' + proxy;
    }
    return proxy;
}
/**
 * Determines whether a given URL should be proxied.
 *
 * @param {string} hostname - The host name of the URL.
 * @param {number} port - The effective port of the URL.
 * @returns {boolean} Whether the given URL should be proxied.
 * @private
 */ function shouldProxy(hostname, port) {
    var NO_PROXY = (getEnv('npm_config_no_proxy') || getEnv('no_proxy')).toLowerCase();
    if (!NO_PROXY) {
        return true; // Always proxy if NO_PROXY is not set.
    }
    if (NO_PROXY === '*') {
        return false; // Never proxy if wildcard is set.
    }
    return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
            return true; // Skip zero-length hosts.
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
            return true; // Skip if ports don't match.
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
            // No wildcards, so stop proxying if there is an exact match.
            return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === '*') {
            // Remove leading wildcard.
            parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        // Stop proxying if the hostname ends with the no_proxy host.
        return !stringEndsWith.call(hostname, parsedProxyHostname);
    });
}
/**
 * Get the value for an environment variable.
 *
 * @param {string} key - The name of the environment variable.
 * @return {string} The value of the environment variable.
 * @private
 */ function getEnv(key) {
    return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || '';
}
exports.getProxyForUrl = getProxyForUrl;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */ function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-rsc] (ecmascript)");
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key)=>{
        createDebug[key] = env[key];
    });
    /**
	* The currently active debug mode names, and names to skip.
	*/ createDebug.names = [];
    createDebug.skips = [];
    /**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/ createDebug.formatters = {};
    /**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/ function selectColor(namespace) {
        let hash = 0;
        for(let i = 0; i < namespace.length; i++){
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    /**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/ function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
            // Disabled?
            if (!debug.enabled) {
                return;
            }
            const self = debug;
            // Set `diff` timestamp
            const curr = Number(new Date());
            const ms = curr - (prevTime || curr);
            self.diff = ms;
            self.prev = prevTime;
            self.curr = curr;
            prevTime = curr;
            args[0] = createDebug.coerce(args[0]);
            if (typeof args[0] !== 'string') {
                // Anything else let's inspect with %O
                args.unshift('%O');
            }
            // Apply any `formatters` transformations
            let index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format)=>{
                // If we encounter an escaped % then don't increase the array index
                if (match === '%%') {
                    return '%';
                }
                index++;
                const formatter = createDebug.formatters[format];
                if (typeof formatter === 'function') {
                    const val = args[index];
                    match = formatter.call(self, val);
                    // Now we need to remove `args[index]` since it's inlined in the `format`
                    args.splice(index, 1);
                    index--;
                }
                return match;
            });
            // Apply env-specific formatting (colors, etc.)
            createDebug.formatArgs.call(self, args);
            const logFn = self.log || createDebug.log;
            logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.
        Object.defineProperty(debug, 'enabled', {
            enumerable: true,
            configurable: false,
            get: ()=>{
                if (enableOverride !== null) {
                    return enableOverride;
                }
                if (namespacesCache !== createDebug.namespaces) {
                    namespacesCache = createDebug.namespaces;
                    enabledCache = createDebug.enabled(namespace);
                }
                return enabledCache;
            },
            set: (v)=>{
                enableOverride = v;
            }
        });
        // Env-specific initialization logic for debug instances
        if (typeof createDebug.init === 'function') {
            createDebug.init(debug);
        }
        return debug;
    }
    function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
    }
    /**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/ function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === 'string' ? namespaces : '').trim().replace(' ', ',').split(',').filter(Boolean);
        for (const ns of split){
            if (ns[0] === '-') {
                createDebug.skips.push(ns.slice(1));
            } else {
                createDebug.names.push(ns);
            }
        }
    }
    /**
	 * Checks if the given string matches a namespace template, honoring
	 * asterisks as wildcards.
	 *
	 * @param {String} search
	 * @param {String} template
	 * @return {Boolean}
	 */ function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while(searchIndex < search.length){
            if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === '*')) {
                // Match character or proceed with wildcard
                if (template[templateIndex] === '*') {
                    starIndex = templateIndex;
                    matchIndex = searchIndex;
                    templateIndex++; // Skip the '*'
                } else {
                    searchIndex++;
                    templateIndex++;
                }
            } else if (starIndex !== -1) {
                // Backtrack to the last '*' and try to match more characters
                templateIndex = starIndex + 1;
                matchIndex++;
                searchIndex = matchIndex;
            } else {
                return false; // No match
            }
        }
        // Handle trailing '*' in template
        while(templateIndex < template.length && template[templateIndex] === '*'){
            templateIndex++;
        }
        return templateIndex === template.length;
    }
    /**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/ function disable() {
        const namespaces = [
            ...createDebug.names,
            ...createDebug.skips.map((namespace)=>'-' + namespace)
        ].join(',');
        createDebug.enable('');
        return namespaces;
    }
    /**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/ function enabled(name) {
        for (const skip of createDebug.skips){
            if (matchesTemplate(name, skip)) {
                return false;
            }
        }
        for (const ns of createDebug.names){
            if (matchesTemplate(name, ns)) {
                return true;
            }
        }
        return false;
    }
    /**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/ function coerce(val) {
        if (val instanceof Error) {
            return val.stack || val.message;
        }
        return val;
    }
    /**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/ function destroy() {
        console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    }
    createDebug.enable(createDebug.load());
    return createDebug;
}
module.exports = setup;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/node.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Module dependencies.
 */ const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
/**
 * This is the Node.js implementation of `debug()`.
 */ exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(()=>{}, 'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
/**
 * Colors.
 */ exports.colors = [
    6,
    2,
    3,
    4,
    5,
    1
];
try {
    // Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    // eslint-disable-next-line import/no-extraneous-dependencies
    const supportsColor = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-rsc] (ecmascript)");
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
            20,
            21,
            26,
            27,
            32,
            33,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            56,
            57,
            62,
            63,
            68,
            69,
            74,
            75,
            76,
            77,
            78,
            79,
            80,
            81,
            92,
            93,
            98,
            99,
            112,
            113,
            128,
            129,
            134,
            135,
            148,
            149,
            160,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171,
            172,
            173,
            178,
            179,
            184,
            185,
            196,
            197,
            198,
            199,
            200,
            201,
            202,
            203,
            204,
            205,
            206,
            207,
            208,
            209,
            214,
            215,
            220,
            221
        ];
    }
} catch (error) {
// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}
/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */ exports.inspectOpts = Object.keys(process.env).filter((key)=>{
    return /^debug_/i.test(key);
}).reduce((obj, key)=>{
    // Camel-case
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k)=>{
        return k.toUpperCase();
    });
    // Coerce string value into JS value
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
    } else if (val === 'null') {
        val = null;
    } else {
        val = Number(val);
    }
    obj[prop] = val;
    return obj;
}, {});
/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */ function useColors() {
    return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
}
/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
        const c = this.color;
        const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
        const prefix = `  ${colorCode};1m${name} \u001B[0m`;
        args[0] = prefix + args[0].split('\n').join('\n' + prefix);
        args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    } else {
        args[0] = getDate() + name + ' ' + args[0];
    }
}
function getDate() {
    if (exports.inspectOpts.hideDate) {
        return '';
    }
    return new Date().toISOString() + ' ';
}
/**
 * Invokes `util.formatWithOptions()` with the specified arguments and writes to stderr.
 */ function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + '\n');
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    if (namespaces) {
        process.env.DEBUG = namespaces;
    } else {
        // If you set a process.env field to null or undefined, it gets cast to the
        // string 'null' or 'undefined'. Just delete instead.
        delete process.env.DEBUG;
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    return process.env.DEBUG;
}
/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */ function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for(let i = 0; i < keys.length; i++){
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
}
module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js [app-rsc] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %o to `util.inspect()`, all on a single line.
 */ formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split('\n').map((str)=>str.trim()).join(' ');
};
/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */ formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/* eslint-env browser */ /**
 * This is the web browser implementation of `debug()`.
 */ exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (()=>{
    let warned = false;
    return ()=>{
        if (!warned) {
            warned = true;
            console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
        }
    };
})();
/**
 * Colors.
 */ exports.colors = [
    '#0000CC',
    '#0000FF',
    '#0033CC',
    '#0033FF',
    '#0066CC',
    '#0066FF',
    '#0099CC',
    '#0099FF',
    '#00CC00',
    '#00CC33',
    '#00CC66',
    '#00CC99',
    '#00CCCC',
    '#00CCFF',
    '#3300CC',
    '#3300FF',
    '#3333CC',
    '#3333FF',
    '#3366CC',
    '#3366FF',
    '#3399CC',
    '#3399FF',
    '#33CC00',
    '#33CC33',
    '#33CC66',
    '#33CC99',
    '#33CCCC',
    '#33CCFF',
    '#6600CC',
    '#6600FF',
    '#6633CC',
    '#6633FF',
    '#66CC00',
    '#66CC33',
    '#9900CC',
    '#9900FF',
    '#9933CC',
    '#9933FF',
    '#99CC00',
    '#99CC33',
    '#CC0000',
    '#CC0033',
    '#CC0066',
    '#CC0099',
    '#CC00CC',
    '#CC00FF',
    '#CC3300',
    '#CC3333',
    '#CC3366',
    '#CC3399',
    '#CC33CC',
    '#CC33FF',
    '#CC6600',
    '#CC6633',
    '#CC9900',
    '#CC9933',
    '#CCCC00',
    '#CCCC33',
    '#FF0000',
    '#FF0033',
    '#FF0066',
    '#FF0099',
    '#FF00CC',
    '#FF00FF',
    '#FF3300',
    '#FF3333',
    '#FF3366',
    '#FF3399',
    '#FF33CC',
    '#FF33FF',
    '#FF6600',
    '#FF6633',
    '#FF9900',
    '#FF9933',
    '#FFCC00',
    '#FFCC33'
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ // eslint-disable-next-line complexity
function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Internet Explorer and Edge do not support colors.
    if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
    }
    let m;
    // Is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    // eslint-disable-next-line no-return-assign
    return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== 'undefined' && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);
    if (!this.useColors) {
        return;
    }
    const c = 'color: ' + this.color;
    args.splice(1, 0, c, 'color: inherit');
    // The final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match)=>{
        if (match === '%%') {
            return;
        }
        index++;
        if (match === '%c') {
            // We only are interested in the *last* %c
            // (the user may have provided their own)
            lastC = index;
        }
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */ exports.log = console.debug || console.log || (()=>{});
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (namespaces) {
            exports.storage.setItem('debug', namespaces);
        } else {
            exports.storage.removeItem('debug');
        }
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    let r;
    try {
        r = exports.storage.getItem('debug');
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== 'undefined' && 'env' in process) {
        r = process.env.DEBUG;
    }
    return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
        // The Browser also has localStorage in the global context.
        return localStorage;
    } catch (error) {
    // Swallow
    // XXX (@Qix-) should we be logging these?
    }
}
module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js [app-rsc] (ecmascript)")(exports);
const { formatters } = module.exports;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (error) {
        return '[UnexpectedJSONParseError]: ' + error.message;
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js [app-rsc] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/node.js [app-rsc] (ecmascript)");
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-rsc] (ecmascript)");
const { env } = process;
let forceColor;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false') || hasFlag('color=never')) {
    forceColor = 0;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
    forceColor = 1;
}
if ('FORCE_COLOR' in env) {
    if (env.FORCE_COLOR === 'true') {
        forceColor = 1;
    } else if (env.FORCE_COLOR === 'false') {
        forceColor = 0;
    } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
}
function translateLevel(level) {
    if (level === 0) {
        return false;
    }
    return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
    };
}
function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
        return 0;
    }
    if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
        return 3;
    }
    if (hasFlag('color=256')) {
        return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === undefined) {
        return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === 'dumb') {
        return min;
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if ('CI' in env) {
        if ([
            'TRAVIS',
            'CIRCLECI',
            'APPVEYOR',
            'GITLAB_CI',
            'GITHUB_ACTIONS',
            'BUILDKITE'
        ].some((sign)=>sign in env) || env.CI_NAME === 'codeship') {
            return 1;
        }
        return min;
    }
    if ('TEAMCITY_VERSION' in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === 'truecolor') {
        return 3;
    }
    if ('TERM_PROGRAM' in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
        switch(env.TERM_PROGRAM){
            case 'iTerm.app':
                return version >= 3 ? 3 : 2;
            case 'Apple_Terminal':
                return 2;
        }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
    }
    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
    }
    if ('COLORTERM' in env) {
        return 1;
    }
    return min;
}
function getSupportLevel(stream) {
    const level = supportsColor(stream, stream && stream.isTTY);
    return translateLevel(level);
}
module.exports = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/follow-redirects@1.15.9/node_modules/follow-redirects/debug.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/index.js [app-rsc] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/follow-redirects@1.15.9/node_modules/follow-redirects/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/follow-redirects@1.15.9/node_modules/follow-redirects/debug.js [app-rsc] (ecmascript)");
// Preventive platform detection
// istanbul ignore next
(function detectUnsupportedEnvironment() {
    var looksLikeNode = typeof process !== "undefined";
    var looksLikeBrowser = "undefined" !== "undefined" && typeof document !== "undefined";
    var looksLikeV8 = isFunction(Error.captureStackTrace);
    if (!looksLikeNode && (looksLikeBrowser || !looksLikeV8)) {
        console.warn("The follow-redirects package should be excluded from browser builds.");
    }
})();
// Whether to use the native URL object or the legacy url module
var useNativeURL = false;
try {
    assert(new URL(""));
} catch (error) {
    useNativeURL = error.code === "ERR_INVALID_URL";
}
// URL fields to preserve in copy operations
var preservedUrlFields = [
    "auth",
    "host",
    "hostname",
    "href",
    "path",
    "pathname",
    "port",
    "protocol",
    "query",
    "search",
    "hash"
];
// Create handlers that pass events from native requests
var events = [
    "abort",
    "aborted",
    "connect",
    "error",
    "socket",
    "timeout"
];
var eventHandlers = Object.create(null);
events.forEach(function(event) {
    eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
    };
});
// Error types with codes
var InvalidUrlError = createErrorType("ERR_INVALID_URL", "Invalid URL", TypeError);
var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded", RedirectionError);
var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
// istanbul ignore next
var destroy = Writable.prototype.destroy || noop;
// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
    // Initialize the request
    Writable.call(this);
    this._sanitizeOptions(options);
    this._options = options;
    this._ended = false;
    this._ending = false;
    this._redirectCount = 0;
    this._redirects = [];
    this._requestBodyLength = 0;
    this._requestBodyBuffers = [];
    // Attach a callback if passed
    if (responseCallback) {
        this.on("response", responseCallback);
    }
    // React to responses of native requests
    var self = this;
    this._onNativeResponse = function(response) {
        try {
            self._processResponse(response);
        } catch (cause) {
            self.emit("error", cause instanceof RedirectionError ? cause : new RedirectionError({
                cause: cause
            }));
        }
    };
    // Perform the first request
    this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);
RedirectableRequest.prototype.abort = function() {
    destroyRequest(this._currentRequest);
    this._currentRequest.abort();
    this.emit("abort");
};
RedirectableRequest.prototype.destroy = function(error) {
    destroyRequest(this._currentRequest, error);
    destroy.call(this, error);
    return this;
};
// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function(data, encoding, callback) {
    // Writing is not allowed if end has been called
    if (this._ending) {
        throw new WriteAfterEndError();
    }
    // Validate input and shift parameters if necessary
    if (!isString(data) && !isBuffer(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
    }
    if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Ignore empty buffers, since writing them doesn't invoke the callback
    // https://github.com/nodejs/node/issues/22066
    if (data.length === 0) {
        if (callback) {
            callback();
        }
        return;
    }
    // Only write when we don't exceed the maximum body length
    if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({
            data: data,
            encoding: encoding
        });
        this._currentRequest.write(data, encoding, callback);
    } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
    }
};
// Ends the current native request
RedirectableRequest.prototype.end = function(data, encoding, callback) {
    // Shift parameters if necessary
    if (isFunction(data)) {
        callback = data;
        data = encoding = null;
    } else if (isFunction(encoding)) {
        callback = encoding;
        encoding = null;
    }
    // Write data if needed and end
    if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
    } else {
        var self = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
            self._ended = true;
            currentRequest.end(null, null, callback);
        });
        this._ending = true;
    }
};
// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function(name, value) {
    this._options.headers[name] = value;
    this._currentRequest.setHeader(name, value);
};
// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function(name) {
    delete this._options.headers[name];
    this._currentRequest.removeHeader(name);
};
// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
    var self = this;
    // Destroys the socket on timeout
    function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
    }
    // Sets up a timer to trigger a timeout event
    function startTimer(socket) {
        if (self._timeout) {
            clearTimeout(self._timeout);
        }
        self._timeout = setTimeout(function() {
            self.emit("timeout");
            clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
    }
    // Stops a timeout from triggering
    function clearTimer() {
        // Clear the timeout
        if (self._timeout) {
            clearTimeout(self._timeout);
            self._timeout = null;
        }
        // Clean up all attached listeners
        self.removeListener("abort", clearTimer);
        self.removeListener("error", clearTimer);
        self.removeListener("response", clearTimer);
        self.removeListener("close", clearTimer);
        if (callback) {
            self.removeListener("timeout", callback);
        }
        if (!self.socket) {
            self._currentRequest.removeListener("socket", startTimer);
        }
    }
    // Attach callback if passed
    if (callback) {
        this.on("timeout", callback);
    }
    // Start the timer if or when the socket is opened
    if (this.socket) {
        startTimer(this.socket);
    } else {
        this._currentRequest.once("socket", startTimer);
    }
    // Clean up on events
    this.on("socket", destroyOnTimeout);
    this.on("abort", clearTimer);
    this.on("error", clearTimer);
    this.on("response", clearTimer);
    this.on("close", clearTimer);
    return this;
};
// Proxy all other public ClientRequest methods
[
    "flushHeaders",
    "getHeader",
    "setNoDelay",
    "setSocketKeepAlive"
].forEach(function(method) {
    RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
    };
});
// Proxy all public ClientRequest properties
[
    "aborted",
    "connection",
    "socket"
].forEach(function(property) {
    Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
            return this._currentRequest[property];
        }
    });
});
RedirectableRequest.prototype._sanitizeOptions = function(options) {
    // Ensure headers are always present
    if (!options.headers) {
        options.headers = {};
    }
    // Since http.request treats host as an alias of hostname,
    // but the url module interprets host as hostname plus port,
    // eliminate the host property to avoid confusion.
    if (options.host) {
        // Use hostname if set, because it has precedence
        if (!options.hostname) {
            options.hostname = options.host;
        }
        delete options.host;
    }
    // Complete the URL object when necessary
    if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
            options.pathname = options.path;
        } else {
            options.pathname = options.path.substring(0, searchPos);
            options.search = options.path.substring(searchPos);
        }
    }
};
// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function() {
    // Load the native protocol
    var protocol = this._options.protocol;
    var nativeProtocol = this._options.nativeProtocols[protocol];
    if (!nativeProtocol) {
        throw new TypeError("Unsupported protocol " + protocol);
    }
    // If specified, use the agent corresponding to the protocol
    // (HTTP and HTTPS use different types of agents)
    if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
    }
    // Create the native request and set up its event handlers
    var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
    request._redirectable = this;
    for (var event of events){
        request.on(event, eventHandlers[event]);
    }
    // RFC7230§5.3.1: When making a request directly to an origin server, […]
    // a client MUST send only the absolute path […] as the request-target.
    this._currentUrl = /^\//.test(this._options.path) ? url.format(this._options) : // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path;
    // End a redirected request
    // (The first request must be ended explicitly with RedirectableRequest#end)
    if (this._isRedirect) {
        // Write the request entity and end
        var i = 0;
        var self = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
            // Only write if this request has not been redirected yet
            // istanbul ignore else
            if (request === self._currentRequest) {
                // Report any write errors
                // istanbul ignore if
                if (error) {
                    self.emit("error", error);
                } else if (i < buffers.length) {
                    var buffer = buffers[i++];
                    // istanbul ignore else
                    if (!request.finished) {
                        request.write(buffer.data, buffer.encoding, writeNext);
                    }
                } else if (self._ended) {
                    request.end();
                }
            }
        })();
    }
};
// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function(response) {
    // Store the redirected response
    var statusCode = response.statusCode;
    if (this._options.trackRedirects) {
        this._redirects.push({
            url: this._currentUrl,
            headers: response.headers,
            statusCode: statusCode
        });
    }
    // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    // that further action needs to be taken by the user agent in order to
    // fulfill the request. If a Location header field is provided,
    // the user agent MAY automatically redirect its request to the URI
    // referenced by the Location field value,
    // even if the specific status code is not understood.
    // If the response is not a redirect; return it as-is
    var location = response.headers.location;
    if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        // Clean up
        this._requestBodyBuffers = [];
        return;
    }
    // The response is a redirect, so abort the current request
    destroyRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();
    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
        throw new TooManyRedirectsError();
    }
    // Store the request headers if applicable
    var requestHeaders;
    var beforeRedirect = this._options.beforeRedirect;
    if (beforeRedirect) {
        requestHeaders = Object.assign({
            // The Host header was set by nativeProtocol.request
            Host: response.req.getHeader("host")
        }, this._options.headers);
    }
    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    var method = this._options.method;
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    // the server is redirecting the user agent to a different resource […]
    // A user agent can perform a retrieval request targeting that URI
    // (a GET or HEAD request if using HTTP) […]
    statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        // Drop a possible entity and headers related to it
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
    }
    // Drop the Host header, as the redirect might lead to a different host
    var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
    // If the redirect is relative, carry over the host of the last request
    var currentUrlParts = parseUrl(this._currentUrl);
    var currentHost = currentHostHeader || currentUrlParts.host;
    var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, {
        host: currentHost
    }));
    // Create the redirected request
    var redirectUrl = resolveUrl(location, currentUrl);
    debug("redirecting to", redirectUrl.href);
    this._isRedirect = true;
    spreadUrlObject(redirectUrl, this._options);
    // Drop confidential headers when redirecting to a less secure protocol
    // or to a different domain that is not a superdomain
    if (redirectUrl.protocol !== currentUrlParts.protocol && redirectUrl.protocol !== "https:" || redirectUrl.host !== currentHost && !isSubdomain(redirectUrl.host, currentHost)) {
        removeMatchingHeaders(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers);
    }
    // Evaluate the beforeRedirect callback
    if (isFunction(beforeRedirect)) {
        var responseDetails = {
            headers: response.headers,
            statusCode: statusCode
        };
        var requestDetails = {
            url: currentUrl,
            method: method,
            headers: requestHeaders
        };
        beforeRedirect(this._options, responseDetails, requestDetails);
        this._sanitizeOptions(this._options);
    }
    // Perform the redirected request
    this._performRequest();
};
// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
    // Default settings
    var exports = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
    };
    // Wrap each protocol
    var nativeProtocols = {};
    Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);
        // Executes a request, following redirects
        function request(input, options, callback) {
            // Parse parameters, ensuring that input is an object
            if (isURL(input)) {
                input = spreadUrlObject(input);
            } else if (isString(input)) {
                input = spreadUrlObject(parseUrl(input));
            } else {
                callback = options;
                options = validateUrl(input);
                input = {
                    protocol: protocol
                };
            }
            if (isFunction(options)) {
                callback = options;
                options = null;
            }
            // Set defaults
            options = Object.assign({
                maxRedirects: exports.maxRedirects,
                maxBodyLength: exports.maxBodyLength
            }, input, options);
            options.nativeProtocols = nativeProtocols;
            if (!isString(options.host) && !isString(options.hostname)) {
                options.hostname = "::1";
            }
            assert.equal(options.protocol, protocol, "protocol mismatch");
            debug("options", options);
            return new RedirectableRequest(options, callback);
        }
        // Executes a GET request, following redirects
        function get(input, options, callback) {
            var wrappedRequest = wrappedProtocol.request(input, options, callback);
            wrappedRequest.end();
            return wrappedRequest;
        }
        // Expose the properties on the wrapped protocol
        Object.defineProperties(wrappedProtocol, {
            request: {
                value: request,
                configurable: true,
                enumerable: true,
                writable: true
            },
            get: {
                value: get,
                configurable: true,
                enumerable: true,
                writable: true
            }
        });
    });
    return exports;
}
function noop() {}
function parseUrl(input) {
    var parsed;
    // istanbul ignore else
    if (useNativeURL) {
        parsed = new URL(input);
    } else {
        // Ensure the URL is valid and absolute
        parsed = validateUrl(url.parse(input));
        if (!isString(parsed.protocol)) {
            throw new InvalidUrlError({
                input
            });
        }
    }
    return parsed;
}
function resolveUrl(relative, base) {
    // istanbul ignore next
    return useNativeURL ? new URL(relative, base) : parseUrl(url.resolve(base, relative));
}
function validateUrl(input) {
    if (/^\[/.test(input.hostname) && !/^\[[:0-9a-f]+\]$/i.test(input.hostname)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    if (/^\[/.test(input.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(input.host)) {
        throw new InvalidUrlError({
            input: input.href || input
        });
    }
    return input;
}
function spreadUrlObject(urlObject, target) {
    var spread = target || {};
    for (var key of preservedUrlFields){
        spread[key] = urlObject[key];
    }
    // Fix IPv6 hostname
    if (spread.hostname.startsWith("[")) {
        spread.hostname = spread.hostname.slice(1, -1);
    }
    // Ensure port is a number
    if (spread.port !== "") {
        spread.port = Number(spread.port);
    }
    // Concatenate path
    spread.path = spread.search ? spread.pathname + spread.search : spread.pathname;
    return spread;
}
function removeMatchingHeaders(regex, headers) {
    var lastValue;
    for(var header in headers){
        if (regex.test(header)) {
            lastValue = headers[header];
            delete headers[header];
        }
    }
    return lastValue === null || typeof lastValue === "undefined" ? undefined : String(lastValue).trim();
}
function createErrorType(code, message, baseClass) {
    // Create constructor
    function CustomError(properties) {
        // istanbul ignore else
        if (isFunction(Error.captureStackTrace)) {
            Error.captureStackTrace(this, this.constructor);
        }
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
    }
    // Attach constructor and set default properties
    CustomError.prototype = new (baseClass || Error)();
    Object.defineProperties(CustomError.prototype, {
        constructor: {
            value: CustomError,
            enumerable: false
        },
        name: {
            value: "Error [" + code + "]",
            enumerable: false
        }
    });
    return CustomError;
}
function destroyRequest(request, error) {
    for (var event of events){
        request.removeListener(event, eventHandlers[event]);
    }
    request.on("error", noop);
    request.destroy(error);
}
function isSubdomain(subdomain, domain) {
    assert(isString(subdomain) && isString(domain));
    var dot = subdomain.length - domain.length - 1;
    return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
}
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isFunction(value) {
    return typeof value === "function";
}
function isBuffer(value) {
    return typeof value === "object" && "length" in value;
}
function isURL(value) {
    return URL && value instanceof URL;
}
// Exports
module.exports = wrap({
    http: http,
    https: https
});
module.exports.wrap = wrap;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Types of elements found in htmlparser2's DOM */ __turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "Directive",
    ()=>Directive,
    "Doctype",
    ()=>Doctype,
    "ElementType",
    ()=>ElementType,
    "Root",
    ()=>Root,
    "Script",
    ()=>Script,
    "Style",
    ()=>Style,
    "Tag",
    ()=>Tag,
    "Text",
    ()=>Text,
    "isTag",
    ()=>isTag
]);
var ElementType;
(function(ElementType) {
    /** Type for the root element of a document */ ElementType["Root"] = "root";
    /** Type for Text */ ElementType["Text"] = "text";
    /** Type for <? ... ?> */ ElementType["Directive"] = "directive";
    /** Type for <!-- ... --> */ ElementType["Comment"] = "comment";
    /** Type for <script> tags */ ElementType["Script"] = "script";
    /** Type for <style> tags */ ElementType["Style"] = "style";
    /** Type for Any tag */ ElementType["Tag"] = "tag";
    /** Type for <![CDATA[ ... ]]> */ ElementType["CDATA"] = "cdata";
    /** Type for <!doctype ...> */ ElementType["Doctype"] = "doctype";
})(ElementType || (ElementType = {}));
function isTag(elem) {
    return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
const Root = ElementType.Root;
const Text = ElementType.Text;
const Directive = ElementType.Directive;
const Comment = ElementType.Comment;
const Script = ElementType.Script;
const Style = ElementType.Style;
const Tag = ElementType.Tag;
const CDATA = ElementType.CDATA;
const Doctype = ElementType.Doctype;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript) <export * as ElementType>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CDATA",
    ()=>CDATA,
    "Comment",
    ()=>Comment,
    "DataNode",
    ()=>DataNode,
    "Document",
    ()=>Document,
    "Element",
    ()=>Element,
    "Node",
    ()=>Node,
    "NodeWithChildren",
    ()=>NodeWithChildren,
    "ProcessingInstruction",
    ()=>ProcessingInstruction,
    "Text",
    ()=>Text,
    "cloneNode",
    ()=>cloneNode,
    "hasChildren",
    ()=>hasChildren,
    "isCDATA",
    ()=>isCDATA,
    "isComment",
    ()=>isComment,
    "isDirective",
    ()=>isDirective,
    "isDocument",
    ()=>isDocument,
    "isTag",
    ()=>isTag,
    "isText",
    ()=>isText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
;
class Node {
    constructor(){
        /** Parent of the node */ this.parent = null;
        /** Previous sibling */ this.prev = null;
        /** Next sibling */ this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */ this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */ this.endIndex = null;
    }
    // Read-write aliases for properties
    /**
     * Same as {@link parent}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get parentNode() {
        return this.parent;
    }
    set parentNode(parent) {
        this.parent = parent;
    }
    /**
     * Same as {@link prev}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get previousSibling() {
        return this.prev;
    }
    set previousSibling(prev) {
        this.prev = prev;
    }
    /**
     * Same as {@link next}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nextSibling() {
        return this.next;
    }
    set nextSibling(next) {
        this.next = next;
    }
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */ cloneNode(recursive = false) {
        return cloneNode(this, recursive);
    }
}
class DataNode extends Node {
    /**
     * @param data The content of the data node
     */ constructor(data){
        super();
        this.data = data;
    }
    /**
     * Same as {@link data}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get nodeValue() {
        return this.data;
    }
    set nodeValue(data) {
        this.data = data;
    }
}
class Text extends DataNode {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Text;
    }
    get nodeType() {
        return 3;
    }
}
class Comment extends DataNode {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Comment;
    }
    get nodeType() {
        return 8;
    }
}
class ProcessingInstruction extends DataNode {
    constructor(name, data){
        super(data);
        this.name = name;
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Directive;
    }
    get nodeType() {
        return 1;
    }
}
class NodeWithChildren extends Node {
    /**
     * @param children Children of the node. Only certain node types can have children.
     */ constructor(children){
        super();
        this.children = children;
    }
    // Aliases
    /** First child of the node. */ get firstChild() {
        var _a;
        return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
    }
    /** Last child of the node. */ get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
    }
    /**
     * Same as {@link children}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get childNodes() {
        return this.children;
    }
    set childNodes(children) {
        this.children = children;
    }
}
class CDATA extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
    }
    get nodeType() {
        return 4;
    }
}
class Document extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Root;
    }
    get nodeType() {
        return 9;
    }
}
class Element extends NodeWithChildren {
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */ constructor(name, attribs, children = [], type = name === "script" ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Script : name === "style" ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Style : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Tag){
        super(children);
        this.name = name;
        this.attribs = attribs;
        this.type = type;
    }
    get nodeType() {
        return 1;
    }
    // DOM Level 1 aliases
    /**
     * Same as {@link name}.
     * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
     */ get tagName() {
        return this.name;
    }
    set tagName(name) {
        this.name = name;
    }
    get attributes() {
        return Object.keys(this.attribs).map((name)=>{
            var _a, _b;
            return {
                name,
                value: this.attribs[name],
                namespace: (_a = this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
            };
        });
    }
}
function isTag(node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node);
}
function isCDATA(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
}
function isText(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Text;
}
function isComment(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Comment;
}
function isDirective(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Directive;
}
function isDocument(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Root;
}
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
function cloneNode(node, recursive = false) {
    let result;
    if (isText(node)) {
        result = new Text(node.data);
    } else if (isComment(node)) {
        result = new Comment(node.data);
    } else if (isTag(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Element(node.name, {
            ...node.attribs
        }, children);
        children.forEach((child)=>child.parent = clone);
        if (node.namespace != null) {
            clone.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone["x-attribsNamespace"] = {
                ...node["x-attribsNamespace"]
            };
        }
        if (node["x-attribsPrefix"]) {
            clone["x-attribsPrefix"] = {
                ...node["x-attribsPrefix"]
            };
        }
        result = clone;
    } else if (isCDATA(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new CDATA(children);
        children.forEach((child)=>child.parent = clone);
        result = clone;
    } else if (isDocument(node)) {
        const children = recursive ? cloneChildren(node.children) : [];
        const clone = new Document(children);
        children.forEach((child)=>child.parent = clone);
        if (node["x-mode"]) {
            clone["x-mode"] = node["x-mode"];
        }
        result = clone;
    } else if (isDirective(node)) {
        const instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    } else {
        throw new Error(`Not implemented yet: ${node.type}`);
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
function cloneChildren(childs) {
    const children = childs.map((child)=>cloneNode(child, true));
    for(let i = 1; i < children.length; i++){
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomHandler",
    ()=>DomHandler,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
;
;
// Default options
const defaultOpts = {
    withStartIndices: false,
    withEndIndices: false,
    xmlMode: false
};
class DomHandler {
    /**
     * @param callback Called once parsing has completed.
     * @param options Settings for the handler.
     * @param elementCB Callback whenever a tag is closed.
     */ constructor(callback, options, elementCB){
        /** The elements of the DOM */ this.dom = [];
        /** The root element for the DOM */ this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"](this.dom);
        /** Indicated whether parsing has been completed. */ this.done = false;
        /** Stack of open tags. */ this.tagStack = [
            this.root
        ];
        /** A data node that is still being written to. */ this.lastNode = null;
        /** Reference to the parser instance. Used for location information. */ this.parser = null;
        // Make it possible to skip arguments, for backwards-compatibility
        if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
        }
        if (typeof callback === "object") {
            options = callback;
            callback = undefined;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    onparserinit(parser) {
        this.parser = parser;
    }
    // Resets the handler back to starting state
    onreset() {
        this.dom = [];
        this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"](this.dom);
        this.done = false;
        this.tagStack = [
            this.root
        ];
        this.lastNode = null;
        this.parser = null;
    }
    // Signals the handler that parsing is done
    onend() {
        if (this.done) return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
    }
    onerror(error) {
        this.handleCallback(error);
    }
    onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB) this.elementCB(elem);
    }
    onopentag(name, attribs) {
        const type = this.options.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Tag : undefined;
        const element = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Element"](name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"](data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Comment"](data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"]("");
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CDATA"]([
            text
        ]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
    }
    oncdataend() {
        this.lastNode = null;
    }
    onprocessinginstruction(name, data) {
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProcessingInstruction"](name, data);
        this.addNode(node);
    }
    handleCallback(error) {
        if (typeof this.callback === "function") {
            this.callback(error, this.dom);
        } else if (error) {
            throw error;
        }
    }
    addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
    }
}
const __TURBOPACK__default__export__ = DomHandler;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/foreignNames.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeNames",
    ()=>attributeNames,
    "elementNames",
    ()=>elementNames
]);
const elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));
const attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
].map((val)=>[
        val.toLowerCase(),
        val
    ]));
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Module dependencies
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "render",
    ()=>render
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@4.5.0/node_modules/entities/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@4.5.0/node_modules/entities/lib/esm/escape.js [app-rsc] (ecmascript)");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/foreignNames.js [app-rsc] (ecmascript)");
;
;
;
const unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript"
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */ function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes) return;
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeXML"] : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeAttribute"];
    return Object.keys(attributes).map((key)=>{
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */ key = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["attributeNames"].get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return `${key}="${encode(value)}"`;
    }).join(" ");
}
/**
 * Self-enclosing tags
 */ const singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
function render(node, options = {}) {
    const nodes = "length" in node ? node : [
        node
    ];
    let output = "";
    for(let i = 0; i < nodes.length; i++){
        output += renderNode(nodes[i], options);
    }
    return output;
}
const __TURBOPACK__default__export__ = render;
function renderNode(node, options) {
    switch(node.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Root"]:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Doctype"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Directive"]:
            return renderDirective(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Comment"]:
            return renderComment(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CDATA"]:
            return renderCdata(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Script"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Style"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"]:
            return renderTag(node, options);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"]:
            return renderText(node, options);
    }
}
const foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title"
]);
const foreignElements = new Set([
    "svg",
    "math"
]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */ elem.name = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["elementNames"].get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */ if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = {
                ...opts,
                xmlMode: false
            };
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = {
            ...opts,
            xmlMode: "foreign"
        };
    }
    let tag = `<${elem.name}`;
    const attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += ` ${attribs}`;
    }
    if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode) tag += " ";
        tag += "/>";
    } else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += `</${elem.name}>`;
        }
    }
    return tag;
}
function renderDirective(elem) {
    return `<${elem.data}>`;
}
function renderText(elem, opts) {
    var _a;
    let data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encodeXML"])(data) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeText"])(data);
    }
    return data;
}
function renderCdata(elem) {
    return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
    return `<!--${elem.data}-->`;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getInnerHTML",
    ()=>getInnerHTML,
    "getOuterHTML",
    ()=>getOuterHTML,
    "getText",
    ()=>getText,
    "innerText",
    ()=>innerText,
    "textContent",
    ()=>textContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
;
;
;
function getOuterHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(node, options);
}
function getInnerHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) ? node.children.map((node)=>getOuterHTML(node, options)).join("") : "";
}
function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node)) return node.name === "br" ? "\n" : getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCDATA"])(node)) return getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isComment"])(node)) {
        return textContent(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ElementType"].Tag || (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCDATA"])(node))) {
        return innerText(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
} //# sourceMappingURL=stringify.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/traversal.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAttributeValue",
    ()=>getAttributeValue,
    "getChildren",
    ()=>getChildren,
    "getName",
    ()=>getName,
    "getParent",
    ()=>getParent,
    "getSiblings",
    ()=>getSiblings,
    "hasAttrib",
    ()=>hasAttrib,
    "nextElementSibling",
    ()=>nextElementSibling,
    "prevElementSibling",
    ()=>prevElementSibling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
function getChildren(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(elem) ? elem.children : [];
}
function getParent(elem) {
    return elem.parent || null;
}
function getSiblings(elem) {
    const parent = getParent(elem);
    if (parent != null) return getChildren(parent);
    const siblings = [
        elem
    ];
    let { prev, next } = elem;
    while(prev != null){
        siblings.unshift(prev);
        ({ prev } = prev);
    }
    while(next != null){
        siblings.push(next);
        ({ next } = next);
    }
    return siblings;
}
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
function hasAttrib(elem, name) {
    return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
}
function getName(elem) {
    return elem.name;
}
function nextElementSibling(elem) {
    let { next } = elem;
    while(next !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(next))({ next } = next);
    return next;
}
function prevElementSibling(elem) {
    let { prev } = elem;
    while(prev !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(prev))({ prev } = prev);
    return prev;
} //# sourceMappingURL=traversal.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/manipulation.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */ __turbopack_context__.s([
    "append",
    ()=>append,
    "appendChild",
    ()=>appendChild,
    "prepend",
    ()=>prepend,
    "prependChild",
    ()=>prependChild,
    "removeElement",
    ()=>removeElement,
    "replaceElement",
    ()=>replaceElement
]);
function removeElement(elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;
    if (elem.parent) {
        const childs = elem.parent.children;
        const childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
            childs.splice(childsIndex, 1);
        }
    }
    elem.next = null;
    elem.prev = null;
    elem.parent = null;
}
function replaceElement(elem, replacement) {
    const prev = replacement.prev = elem.prev;
    if (prev) {
        prev.next = replacement;
    }
    const next = replacement.next = elem.next;
    if (next) {
        next.prev = replacement;
    }
    const parent = replacement.parent = elem.parent;
    if (parent) {
        const childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
function appendChild(parent, child) {
    removeElement(child);
    child.next = null;
    child.parent = parent;
    if (parent.children.push(child) > 1) {
        const sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    } else {
        child.prev = null;
    }
}
function append(elem, next) {
    removeElement(next);
    const { parent } = elem;
    const currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            const childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    } else if (parent) {
        parent.children.push(next);
    }
}
function prependChild(parent, child) {
    removeElement(child);
    child.parent = parent;
    child.prev = null;
    if (parent.children.unshift(child) !== 1) {
        const sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
    } else {
        child.next = null;
    }
}
function prepend(elem, prev) {
    removeElement(prev);
    const { parent } = elem;
    if (parent) {
        const childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
} //# sourceMappingURL=manipulation.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "existsOne",
    ()=>existsOne,
    "filter",
    ()=>filter,
    "find",
    ()=>find,
    "findAll",
    ()=>findAll,
    "findOne",
    ()=>findOne,
    "findOneChild",
    ()=>findOneChild
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
function filter(test, node, recurse = true, limit = Infinity) {
    return find(test, Array.isArray(node) ? node : [
        node
    ], recurse, limit);
}
function find(test, nodes, recurse, limit) {
    const result = [];
    /** Stack of the arrays we are looking at. */ const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    /** Stack of the indices within the arrays. */ const indexStack = [
        0
    ];
    for(;;){
        // First, check if the current array has any more elements to look at.
        if (indexStack[0] >= nodeStack[0].length) {
            // If we have no more arrays to look at, we are done.
            if (indexStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0) return result;
        }
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(elem) && elem.children.length > 0) {
            /*
             * Add the children to the stack. We are depth-first, so this is
             * the next array we look at.
             */ indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
}
function findOneChild(test, nodes) {
    return nodes.find(test);
}
function findOne(test, nodes, recurse = true) {
    const searchedNodes = Array.isArray(nodes) ? nodes : [
        nodes
    ];
    for(let i = 0; i < searchedNodes.length; i++){
        const node = searchedNodes[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node)) {
            return node;
        }
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && node.children.length > 0) {
            const found = findOne(test, node.children, true);
            if (found) return found;
        }
    }
    return null;
}
function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [
        nodes
    ]).some((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(node) && existsOne(test, node.children));
}
function findAll(test, nodes) {
    const result = [];
    const nodeStack = [
        Array.isArray(nodes) ? nodes : [
            nodes
        ]
    ];
    const indexStack = [
        0
    ];
    for(;;){
        if (indexStack[0] >= nodeStack[0].length) {
            if (nodeStack.length === 1) {
                return result;
            }
            // Otherwise, remove the current array from the stack.
            nodeStack.shift();
            indexStack.shift();
            continue;
        }
        const elem = nodeStack[0][indexStack[0]++];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && test(elem)) result.push(elem);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
} //# sourceMappingURL=querying.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getElementById",
    ()=>getElementById,
    "getElements",
    ()=>getElements,
    "getElementsByClassName",
    ()=>getElementsByClassName,
    "getElementsByTagName",
    ()=>getElementsByTagName,
    "getElementsByTagType",
    ()=>getElementsByTagType,
    "testElement",
    ()=>testElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)");
;
;
/**
 * A map of functions to check nodes against.
 */ const Checks = {
    tag_name (name) {
        if (typeof name === "function") {
            return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && name(elem.name);
        } else if (name === "*") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"];
        }
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.name === name;
    },
    tag_type (type) {
        if (typeof type === "function") {
            return (elem)=>type(elem.type);
        }
        return (elem)=>elem.type === type;
    },
    tag_contains (data) {
        if (typeof data === "function") {
            return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(elem) && data(elem.data);
        }
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(elem) && elem.data === data;
    }
};
/**
 * Returns a function to check whether a node has an attribute with a particular
 * value.
 *
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */ function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && value(elem.attribs[attrib]);
    }
    return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.attribs[attrib] === value;
}
/**
 * Returns a function that returns `true` if either of the input functions
 * returns `true` for a node.
 *
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */ function combineFuncs(a, b) {
    return (elem)=>a(elem) || b(elem);
}
/**
 * Returns a function that executes all checks in `options` and returns `true`
 * if any of them match a node.
 *
 * @param options An object describing nodes to look for.
 * @returns A function that executes all checks in `options` and returns `true`
 *   if any of them match a node.
 */ function compileTest(options) {
    const funcs = Object.keys(options).map((key)=>{
        const value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node) {
    const test = compileTest(options);
    return test ? test(node) : true;
}
function getElements(options, nodes, recurse, limit = Infinity) {
    const test = compileTest(options);
    return test ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOne"])(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(getAttribCheck("class", className), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_type"](type), nodes, recurse, limit);
} //# sourceMappingURL=legacy.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentPosition",
    ()=>DocumentPosition,
    "compareDocumentPosition",
    ()=>compareDocumentPosition,
    "removeSubsets",
    ()=>removeSubsets,
    "uniqueSort",
    ()=>uniqueSort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
function removeSubsets(nodes) {
    let idx = nodes.length;
    /*
     * Check if each node (or one of its ancestors) is already contained in the
     * array.
     */ while(--idx >= 0){
        const node = nodes[idx];
        /*
         * Remove the node if it is not unique.
         * We are going through the array from the end, so we only
         * have to check nodes that preceed the node under consideration in the array.
         */ if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
        }
        for(let ancestor = node.parent; ancestor; ancestor = ancestor.parent){
            if (nodes.includes(ancestor)) {
                nodes.splice(idx, 1);
                break;
            }
        }
    }
    return nodes;
}
var DocumentPosition;
(function(DocumentPosition) {
    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
})(DocumentPosition || (DocumentPosition = {}));
function compareDocumentPosition(nodeA, nodeB) {
    const aParents = [];
    const bParents = [];
    if (nodeA === nodeB) {
        return 0;
    }
    let current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"])(nodeB) ? nodeB : nodeB.parent;
    while(current){
        bParents.unshift(current);
        current = current.parent;
    }
    const maxIdx = Math.min(aParents.length, bParents.length);
    let idx = 0;
    while(idx < maxIdx && aParents[idx] === bParents[idx]){
        idx++;
    }
    if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
    }
    const sharedParent = aParents[idx - 1];
    const siblings = sharedParent.children;
    const aSibling = aParents[idx];
    const bSibling = bParents[idx];
    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
    }
    if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
    }
    return DocumentPosition.PRECEDING;
}
function uniqueSort(nodes) {
    nodes = nodes.filter((node, i, arr)=>!arr.includes(node, i + 1));
    nodes.sort((a, b)=>{
        const relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
            return -1;
        } else if (relative & DocumentPosition.FOLLOWING) {
            return 1;
        }
        return 0;
    });
    return nodes;
} //# sourceMappingURL=helpers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeed",
    ()=>getFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)");
;
;
function getFeed(doc) {
    const feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getAtomFeed(feedRoot) {
    var _a;
    const childs = feedRoot.children;
    const feed = {
        type: "atom",
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])("entry", childs).map((item)=>{
            var _a;
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            const href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            const description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            const pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        })
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    const href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    const updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */ function getRssFeed(feedRoot) {
    var _a, _b;
    const childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    const feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])("item", feedRoot.children).map((item)=>{
            const { children } = item;
            const entry = {
                media: getMediaElements(children)
            };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            const pubDate = fetch("pubDate", children) || fetch("dc:date", children);
            if (pubDate) entry.pubDate = new Date(pubDate);
            return entry;
        })
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    const updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
const MEDIA_KEYS_STRING = [
    "url",
    "type",
    "lang"
];
const MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width"
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */ function getMediaElements(where) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])("media:content", where).map((elem)=>{
        const { attribs } = elem;
        const media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"]
        };
        for (const attrib of MEDIA_KEYS_STRING){
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (const attrib of MEDIA_KEYS_INT){
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */ function getOneElement(tagName, node) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textContent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */ function addConditionally(obj, prop, tagName, where, recurse = false) {
    const val = fetch(tagName, where, recurse);
    if (val) obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */ function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
} //# sourceMappingURL=feeds.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/traversal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/manipulation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)");
/** @deprecated Use these methods from `domhandler` directly. */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentPosition"],
    "append",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["append"],
    "appendChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["appendChild"],
    "compareDocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compareDocumentPosition"],
    "existsOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["existsOne"],
    "filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filter"],
    "find",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["find"],
    "findAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findAll"],
    "findOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOne"],
    "findOneChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneChild"],
    "getAttributeValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAttributeValue"],
    "getChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getChildren"],
    "getElementById",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementById"],
    "getElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElements"],
    "getElementsByClassName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByClassName"],
    "getElementsByTagName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagName"],
    "getElementsByTagType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getElementsByTagType"],
    "getFeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeed"],
    "getInnerHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInnerHTML"],
    "getName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getName"],
    "getOuterHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOuterHTML"],
    "getParent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getParent"],
    "getSiblings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiblings"],
    "getText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getText"],
    "hasAttrib",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAttrib"],
    "hasChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasChildren"],
    "innerText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["innerText"],
    "isCDATA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCDATA"],
    "isComment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isComment"],
    "isDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDocument"],
    "isTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"],
    "isText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"],
    "nextElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["nextElementSibling"],
    "prepend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prepend"],
    "prependChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prependChild"],
    "prevElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prevElementSibling"],
    "removeElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeElement"],
    "removeSubsets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeSubsets"],
    "replaceElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceElement"],
    "testElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["testElement"],
    "textContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textContent"],
    "uniqueSort",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["uniqueSort"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/traversal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/manipulation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteType",
    ()=>QuoteType,
    "default",
    ()=>Tokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/decode.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/generated/decode-data-html.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/generated/decode-data-xml.js [app-rsc] (ecmascript)");
;
var CharCodes;
(function(CharCodes) {
    CharCodes[CharCodes["Tab"] = 9] = "Tab";
    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
    CharCodes[CharCodes["Space"] = 32] = "Space";
    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
    CharCodes[CharCodes["Number"] = 35] = "Number";
    CharCodes[CharCodes["Amp"] = 38] = "Amp";
    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
    CharCodes[CharCodes["Dash"] = 45] = "Dash";
    CharCodes[CharCodes["Slash"] = 47] = "Slash";
    CharCodes[CharCodes["Zero"] = 48] = "Zero";
    CharCodes[CharCodes["Nine"] = 57] = "Nine";
    CharCodes[CharCodes["Semi"] = 59] = "Semi";
    CharCodes[CharCodes["Lt"] = 60] = "Lt";
    CharCodes[CharCodes["Eq"] = 61] = "Eq";
    CharCodes[CharCodes["Gt"] = 62] = "Gt";
    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
})(CharCodes || (CharCodes = {}));
/** All the states the tokenizer can be in. */ var State;
(function(State) {
    State[State["Text"] = 1] = "Text";
    State[State["BeforeTagName"] = 2] = "BeforeTagName";
    State[State["InTagName"] = 3] = "InTagName";
    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
    State[State["InClosingTagName"] = 6] = "InClosingTagName";
    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
    // Attributes
    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
    State[State["InAttributeName"] = 9] = "InAttributeName";
    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
    // Declarations
    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
    State[State["InDeclaration"] = 16] = "InDeclaration";
    // Processing instructions
    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
    // Comments & CDATA
    State[State["BeforeComment"] = 18] = "BeforeComment";
    State[State["CDATASequence"] = 19] = "CDATASequence";
    State[State["InSpecialComment"] = 20] = "InSpecialComment";
    State[State["InCommentLike"] = 21] = "InCommentLike";
    // Special tags
    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
    State[State["BeforeSpecialT"] = 23] = "BeforeSpecialT";
    State[State["SpecialStartSequence"] = 24] = "SpecialStartSequence";
    State[State["InSpecialTag"] = 25] = "InSpecialTag";
    State[State["InEntity"] = 26] = "InEntity";
})(State || (State = {}));
function isWhitespace(c) {
    return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
}
function isEndOfTagSection(c) {
    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
}
function isASCIIAlpha(c) {
    return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
}
var QuoteType;
(function(QuoteType) {
    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
    QuoteType[QuoteType["Single"] = 2] = "Single";
    QuoteType[QuoteType["Double"] = 3] = "Double";
})(QuoteType || (QuoteType = {}));
/**
 * Sequences used to match longer strings.
 *
 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
 * sequences with an increased offset.
 */ const Sequences = {
    Cdata: new Uint8Array([
        0x43,
        0x44,
        0x41,
        0x54,
        0x41,
        0x5b
    ]),
    CdataEnd: new Uint8Array([
        0x5d,
        0x5d,
        0x3e
    ]),
    CommentEnd: new Uint8Array([
        0x2d,
        0x2d,
        0x3e
    ]),
    ScriptEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x63,
        0x72,
        0x69,
        0x70,
        0x74
    ]),
    StyleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x73,
        0x74,
        0x79,
        0x6c,
        0x65
    ]),
    TitleEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x74,
        0x69,
        0x74,
        0x6c,
        0x65
    ]),
    TextareaEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x74,
        0x65,
        0x78,
        0x74,
        0x61,
        0x72,
        0x65,
        0x61
    ]),
    XmpEnd: new Uint8Array([
        0x3c,
        0x2f,
        0x78,
        0x6d,
        0x70
    ])
};
class Tokenizer {
    constructor({ xmlMode = false, decodeEntities = true }, cbs){
        this.cbs = cbs;
        /** The current state the tokenizer is in. */ this.state = State.Text;
        /** The read buffer. */ this.buffer = "";
        /** The beginning of the section that is currently being read. */ this.sectionStart = 0;
        /** The index within the buffer that we are currently looking at. */ this.index = 0;
        /** The start of the last entity. */ this.entityStart = 0;
        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */ this.baseState = State.Text;
        /** For special parsing behavior inside of script and style tags. */ this.isSpecial = false;
        /** Indicates whether the tokenizer has been paused. */ this.running = true;
        /** The offset of the current buffer. */ this.offset = 0;
        this.currentSequence = undefined;
        this.sequenceIndex = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityDecoder"](xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["xmlDecodeTree"] : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["htmlDecodeTree"], (cp, consumed)=>this.emitCodePoint(cp, consumed));
    }
    reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = undefined;
        this.running = true;
        this.offset = 0;
    }
    write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
    }
    end() {
        if (this.running) this.finish();
    }
    pause() {
        this.running = false;
    }
    resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
            this.parse();
        }
    }
    stateText(c) {
        if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
            if (this.index > this.sectionStart) {
                this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateSpecialStartSequence(c) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd ? isEndOfTagSection(c) : (c | 0x20) === this.currentSequence[this.sequenceIndex];
        if (!isMatch) {
            this.isSpecial = false;
        } else if (!isEnd) {
            this.sequenceIndex++;
            return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c);
    }
    /** Look for an end tag. For <title> tags, also decode entities. */ stateInSpecialTag(c) {
        if (this.sequenceIndex === this.currentSequence.length) {
            if (c === CharCodes.Gt || isWhitespace(c)) {
                const endOfText = this.index - this.currentSequence.length;
                if (this.sectionStart < endOfText) {
                    // Spoof the index so that reported locations match up.
                    const actualIndex = this.index;
                    this.index = endOfText;
                    this.cbs.ontext(this.sectionStart, endOfText);
                    this.index = actualIndex;
                }
                this.isSpecial = false;
                this.sectionStart = endOfText + 2; // Skip over the `</`
                this.stateInClosingTagName(c);
                return; // We are done; skip the rest of the function.
            }
            this.sequenceIndex = 0;
        }
        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
        } else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
                // We have to parse entities in <title> tags.
                if (this.decodeEntities && c === CharCodes.Amp) {
                    this.startEntity();
                }
            } else if (this.fastForwardTo(CharCodes.Lt)) {
                // Outside of <title> tags, we can fast-forward.
                this.sequenceIndex = 1;
            }
        } else {
            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
            this.sequenceIndex = Number(c === CharCodes.Lt);
        }
    }
    stateCDATASequence(c) {
        if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
                this.state = State.InCommentLike;
                this.currentSequence = Sequences.CdataEnd;
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
            }
        } else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c); // Reconsume the character
        }
    }
    /**
     * When we wait for one specific character, we can speed things up
     * by skipping through the buffer until we find it.
     *
     * @returns Whether the character was found.
     */ fastForwardTo(c) {
        while(++this.index < this.buffer.length + this.offset){
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
                return true;
            }
        }
        /*
         * We increment the index at the end of the `parse` loop,
         * so set it to `buffer.length - 1` here.
         *
         * TODO: Refactor `parse` to increment index before calling states.
         */ this.index = this.buffer.length + this.offset - 1;
        return false;
    }
    /**
     * Comments and CDATA end with `-->` and `]]>`.
     *
     * Their common qualities are:
     * - Their end sequences have a distinct character they start with.
     * - That character is then repeated, so we have to check multiple repeats.
     * - All characters but the start character of the sequence can be skipped.
     */ stateInCommentLike(c) {
        if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
                if (this.currentSequence === Sequences.CdataEnd) {
                    this.cbs.oncdata(this.sectionStart, this.index, 2);
                } else {
                    this.cbs.oncomment(this.sectionStart, this.index, 2);
                }
                this.sequenceIndex = 0;
                this.sectionStart = this.index + 1;
                this.state = State.Text;
            }
        } else if (this.sequenceIndex === 0) {
            // Fast-forward to the first character of the sequence
            if (this.fastForwardTo(this.currentSequence[0])) {
                this.sequenceIndex = 1;
            }
        } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            // Allow long sequences, eg. --->, ]]]>
            this.sequenceIndex = 0;
        }
    }
    /**
     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
     *
     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
     * We allow anything that wouldn't end the tag.
     */ isTagStartChar(c) {
        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
    }
    startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
    }
    stateBeforeTagName(c) {
        if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
        } else if (this.isTagStartChar(c)) {
            const lower = c | 0x20;
            this.sectionStart = this.index;
            if (this.xmlMode) {
                this.state = State.InTagName;
            } else if (lower === Sequences.ScriptEnd[2]) {
                this.state = State.BeforeSpecialS;
            } else if (lower === Sequences.TitleEnd[2] || lower === Sequences.XmpEnd[2]) {
                this.state = State.BeforeSpecialT;
            } else {
                this.state = State.InTagName;
            }
        } else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
        } else {
            this.state = State.Text;
            this.stateText(c);
        }
    }
    stateInTagName(c) {
        if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateBeforeClosingTagName(c) {
        if (isWhitespace(c)) {
        // Ignore
        } else if (c === CharCodes.Gt) {
            this.state = State.Text;
        } else {
            this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
            this.sectionStart = this.index;
        }
    }
    stateInClosingTagName(c) {
        if (c === CharCodes.Gt || isWhitespace(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
        }
    }
    stateAfterClosingTagName(c) {
        // Skip everything until ">"
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeAttributeName(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
                this.state = State.InSpecialTag;
                this.sequenceIndex = 0;
            } else {
                this.state = State.Text;
            }
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
        } else if (!isWhitespace(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateInSelfClosingTag(c) {
        if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false; // Reset special state, in case of self-closing special tags
        } else if (!isWhitespace(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        }
    }
    stateInAttributeName(c) {
        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = this.index;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        }
    }
    stateAfterAttributeName(c) {
        if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
        } else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (!isWhitespace(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
        }
    }
    stateBeforeAttributeValue(c) {
        if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
        } else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
        } else if (!isWhitespace(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c); // Reconsume token
        }
    }
    handleInAttributeValue(c, quote) {
        if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
            this.state = State.BeforeAttributeName;
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateInAttributeValueDoubleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
    }
    stateInAttributeValueSingleQuotes(c) {
        this.handleInAttributeValue(c, CharCodes.SingleQuote);
    }
    stateInAttributeValueNoQuotes(c) {
        if (isWhitespace(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
        } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
        }
    }
    stateBeforeDeclaration(c) {
        if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
        } else {
            this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
        }
    }
    stateInDeclaration(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateInProcessingInstruction(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeComment(c) {
        if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            // Allow short comments (eg. <!-->)
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
        } else {
            this.state = State.InDeclaration;
        }
    }
    stateInSpecialComment(c) {
        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
        }
    }
    stateBeforeSpecialS(c) {
        const lower = c | 0x20;
        if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
        } else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
        } else {
            this.state = State.InTagName;
            this.stateInTagName(c); // Consume the token again
        }
    }
    stateBeforeSpecialT(c) {
        const lower = c | 0x20;
        switch(lower){
            case Sequences.TitleEnd[3]:
                {
                    this.startSpecial(Sequences.TitleEnd, 4);
                    break;
                }
            case Sequences.TextareaEnd[3]:
                {
                    this.startSpecial(Sequences.TextareaEnd, 4);
                    break;
                }
            case Sequences.XmpEnd[3]:
                {
                    this.startSpecial(Sequences.XmpEnd, 4);
                    break;
                }
            default:
                {
                    this.state = State.InTagName;
                    this.stateInTagName(c); // Consume the token again
                }
        }
    }
    startEntity() {
        this.baseState = this.state;
        this.state = State.InEntity;
        this.entityStart = this.index;
        this.entityDecoder.startEntity(this.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Legacy : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Attribute);
    }
    stateInEntity() {
        const length = this.entityDecoder.write(this.buffer, this.index - this.offset);
        // If `length` is positive, we are done with the entity.
        if (length >= 0) {
            this.state = this.baseState;
            if (length === 0) {
                this.index = this.entityStart;
            }
        } else {
            // Mark buffer as consumed.
            this.index = this.offset + this.buffer.length - 1;
        }
    }
    /**
     * Remove data that has already been consumed from the buffer.
     */ cleanup() {
        // If we are inside of text or attributes, emit what we already have.
        if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
                this.cbs.ontext(this.sectionStart, this.index);
                this.sectionStart = this.index;
            } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
                this.cbs.onattribdata(this.sectionStart, this.index);
                this.sectionStart = this.index;
            }
        }
    }
    shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
    }
    /**
     * Iterates through the buffer, calling the function corresponding to the current state.
     *
     * States that are more likely to be hit are higher up, as a performance improvement.
     */ parse() {
        while(this.shouldContinue()){
            const c = this.buffer.charCodeAt(this.index - this.offset);
            switch(this.state){
                case State.Text:
                    {
                        this.stateText(c);
                        break;
                    }
                case State.SpecialStartSequence:
                    {
                        this.stateSpecialStartSequence(c);
                        break;
                    }
                case State.InSpecialTag:
                    {
                        this.stateInSpecialTag(c);
                        break;
                    }
                case State.CDATASequence:
                    {
                        this.stateCDATASequence(c);
                        break;
                    }
                case State.InAttributeValueDq:
                    {
                        this.stateInAttributeValueDoubleQuotes(c);
                        break;
                    }
                case State.InAttributeName:
                    {
                        this.stateInAttributeName(c);
                        break;
                    }
                case State.InCommentLike:
                    {
                        this.stateInCommentLike(c);
                        break;
                    }
                case State.InSpecialComment:
                    {
                        this.stateInSpecialComment(c);
                        break;
                    }
                case State.BeforeAttributeName:
                    {
                        this.stateBeforeAttributeName(c);
                        break;
                    }
                case State.InTagName:
                    {
                        this.stateInTagName(c);
                        break;
                    }
                case State.InClosingTagName:
                    {
                        this.stateInClosingTagName(c);
                        break;
                    }
                case State.BeforeTagName:
                    {
                        this.stateBeforeTagName(c);
                        break;
                    }
                case State.AfterAttributeName:
                    {
                        this.stateAfterAttributeName(c);
                        break;
                    }
                case State.InAttributeValueSq:
                    {
                        this.stateInAttributeValueSingleQuotes(c);
                        break;
                    }
                case State.BeforeAttributeValue:
                    {
                        this.stateBeforeAttributeValue(c);
                        break;
                    }
                case State.BeforeClosingTagName:
                    {
                        this.stateBeforeClosingTagName(c);
                        break;
                    }
                case State.AfterClosingTagName:
                    {
                        this.stateAfterClosingTagName(c);
                        break;
                    }
                case State.BeforeSpecialS:
                    {
                        this.stateBeforeSpecialS(c);
                        break;
                    }
                case State.BeforeSpecialT:
                    {
                        this.stateBeforeSpecialT(c);
                        break;
                    }
                case State.InAttributeValueNq:
                    {
                        this.stateInAttributeValueNoQuotes(c);
                        break;
                    }
                case State.InSelfClosingTag:
                    {
                        this.stateInSelfClosingTag(c);
                        break;
                    }
                case State.InDeclaration:
                    {
                        this.stateInDeclaration(c);
                        break;
                    }
                case State.BeforeDeclaration:
                    {
                        this.stateBeforeDeclaration(c);
                        break;
                    }
                case State.BeforeComment:
                    {
                        this.stateBeforeComment(c);
                        break;
                    }
                case State.InProcessingInstruction:
                    {
                        this.stateInProcessingInstruction(c);
                        break;
                    }
                case State.InEntity:
                    {
                        this.stateInEntity();
                        break;
                    }
            }
            this.index++;
        }
        this.cleanup();
    }
    finish() {
        if (this.state === State.InEntity) {
            this.entityDecoder.end();
            this.state = this.baseState;
        }
        this.handleTrailingData();
        this.cbs.onend();
    }
    /** Handle any trailing data. */ handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        // If there is no remaining data, we are done.
        if (this.sectionStart >= endIndex) {
            return;
        }
        if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, endIndex, 0);
            } else {
                this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
        } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
        /*
             * If we are currently in an opening or closing tag, us not calling the
             * respective callback signals that the tag should be ignored.
             */ } else {
            this.cbs.ontext(this.sectionStart, endIndex);
        }
    }
    emitCodePoint(cp, consumed) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
            if (this.sectionStart < this.entityStart) {
                this.cbs.onattribdata(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.onattribentity(cp);
        } else {
            if (this.sectionStart < this.entityStart) {
                this.cbs.ontext(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.ontextentity(cp, this.sectionStart);
        }
    }
} //# sourceMappingURL=Tokenizer.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parser",
    ()=>Parser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/decode.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/decode-codepoint.js [app-rsc] (ecmascript)");
;
;
const formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea"
]);
const pTag = new Set([
    "p"
]);
const tableSectionTags = new Set([
    "thead",
    "tbody"
]);
const ddtTags = new Set([
    "dd",
    "dt"
]);
const rtpTags = new Set([
    "rt",
    "rp"
]);
const openImpliesClose = new Map([
    [
        "tr",
        new Set([
            "tr",
            "th",
            "td"
        ])
    ],
    [
        "th",
        new Set([
            "th"
        ])
    ],
    [
        "td",
        new Set([
            "thead",
            "th",
            "td"
        ])
    ],
    [
        "body",
        new Set([
            "head",
            "link",
            "script"
        ])
    ],
    [
        "li",
        new Set([
            "li"
        ])
    ],
    [
        "p",
        pTag
    ],
    [
        "h1",
        pTag
    ],
    [
        "h2",
        pTag
    ],
    [
        "h3",
        pTag
    ],
    [
        "h4",
        pTag
    ],
    [
        "h5",
        pTag
    ],
    [
        "h6",
        pTag
    ],
    [
        "select",
        formTags
    ],
    [
        "input",
        formTags
    ],
    [
        "output",
        formTags
    ],
    [
        "button",
        formTags
    ],
    [
        "datalist",
        formTags
    ],
    [
        "textarea",
        formTags
    ],
    [
        "option",
        new Set([
            "option"
        ])
    ],
    [
        "optgroup",
        new Set([
            "optgroup",
            "option"
        ])
    ],
    [
        "dd",
        ddtTags
    ],
    [
        "dt",
        ddtTags
    ],
    [
        "address",
        pTag
    ],
    [
        "article",
        pTag
    ],
    [
        "aside",
        pTag
    ],
    [
        "blockquote",
        pTag
    ],
    [
        "details",
        pTag
    ],
    [
        "div",
        pTag
    ],
    [
        "dl",
        pTag
    ],
    [
        "fieldset",
        pTag
    ],
    [
        "figcaption",
        pTag
    ],
    [
        "figure",
        pTag
    ],
    [
        "footer",
        pTag
    ],
    [
        "form",
        pTag
    ],
    [
        "header",
        pTag
    ],
    [
        "hr",
        pTag
    ],
    [
        "main",
        pTag
    ],
    [
        "nav",
        pTag
    ],
    [
        "ol",
        pTag
    ],
    [
        "pre",
        pTag
    ],
    [
        "section",
        pTag
    ],
    [
        "table",
        pTag
    ],
    [
        "ul",
        pTag
    ],
    [
        "rt",
        rtpTags
    ],
    [
        "rp",
        rtpTags
    ],
    [
        "tbody",
        tableSectionTags
    ],
    [
        "tfoot",
        tableSectionTags
    ]
]);
const voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]);
const foreignContextElements = new Set([
    "math",
    "svg"
]);
const htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title"
]);
const reNameEnd = /\s|\//;
class Parser {
    constructor(cbs, options = {}){
        var _a, _b, _c, _d, _e, _f;
        this.options = options;
        /** The start index of the last event. */ this.startIndex = 0;
        /** The end index of the last event. */ this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */ this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */ this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */ this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.htmlMode = !this.options.xmlMode;
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : this.htmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
        this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== void 0 ? _c : !this.htmlMode;
        this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(this.options, this);
        this.foreignContext = [
            !this.htmlMode
        ];
        (_f = (_e = this.cbs).onparserinit) === null || _f === void 0 ? void 0 : _f.call(_e, this);
    }
    // Tokenizer event handlers
    /** @internal */ ontext(start, endIndex) {
        var _a, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    }
    /** @internal */ ontextentity(cp, endIndex) {
        var _a, _b;
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromCodePoint"])(cp));
        this.startIndex = endIndex;
    }
    /**
     * Checks if the current tag is a void element. Override this if you want
     * to specify your own additional void elements.
     */ isVoidElement(name) {
        return this.htmlMode && voidElements.has(name);
    }
    /** @internal */ onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    }
    emitOpenTag(name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        const impliesClose = this.htmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while(this.stack.length > 0 && impliesClose.has(this.stack[0])){
                const element = this.stack.shift();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.unshift(name);
            if (this.htmlMode) {
                if (foreignContextElements.has(name)) {
                    this.foreignContext.unshift(true);
                } else if (htmlIntegrationElements.has(name)) {
                    this.foreignContext.unshift(false);
                }
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag) this.attribs = {};
    }
    endOpenTag(isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    }
    /** @internal */ onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onclosetag(start, endIndex) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.endIndex = endIndex;
        let name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (this.htmlMode && (foreignContextElements.has(name) || htmlIntegrationElements.has(name))) {
            this.foreignContext.shift();
        }
        if (!this.isVoidElement(name)) {
            const pos = this.stack.indexOf(name);
            if (pos !== -1) {
                for(let index = 0; index <= pos; index++){
                    const element = this.stack.shift();
                    // We know the stack has sufficient elements.
                    (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, index !== pos);
                }
            } else if (this.htmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        } else if (this.htmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, "br");
            (_f = (_e = this.cbs).onopentag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", {}, true);
            (_h = (_g = this.cbs).onclosetag) === null || _h === void 0 ? void 0 : _h.call(_g, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.recognizeSelfClosing || this.foreignContext[0]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        } else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    }
    closeCurrentTag(isOpenImplied) {
        var _a, _b;
        const name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[0] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.shift();
        }
    }
    /** @internal */ onattribname(start, endIndex) {
        this.startIndex = start;
        const name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
    }
    /** @internal */ onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    }
    /** @internal */ onattribentity(cp) {
        this.attribvalue += (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromCodePoint"])(cp);
    }
    /** @internal */ onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuoteType"].Double ? '"' : quote === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuoteType"].Single ? "'" : quote === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QuoteType"].NoValue ? undefined : null);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    }
    getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    }
    /** @internal */ ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`!${name}`, `!${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            const name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction(`?${name}`, `?${value}`);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ oncomment(start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ oncdata(start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (!this.htmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        } else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    }
    /** @internal */ onend() {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for(let index = 0; index < this.stack.length; index++){
                this.cbs.onclosetag(this.stack[index], true);
            }
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */ reset() {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.foreignContext.length = 0;
        this.foreignContext.unshift(!this.htmlMode);
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    }
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */ parseComplete(data) {
        this.reset();
        this.end(data);
    }
    getSlice(start, end) {
        while(start - this.bufferOffset >= this.buffers[0].length){
            this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while(end - this.bufferOffset > this.buffers[0].length){
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
    }
    shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    }
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */ write(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    }
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */ end(chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
        }
        if (chunk) this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    }
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */ pause() {
        this.tokenizer.pause();
    }
    /**
     * Resumes parsing after `pause` was called.
     */ resume() {
        this.tokenizer.resume();
        while(this.tokenizer.running && this.writeIndex < this.buffers.length){
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended) this.tokenizer.end();
    }
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */ parseChunk(chunk) {
        this.write(chunk);
    }
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */ done(chunk) {
        this.end(chunk);
    }
} //# sourceMappingURL=Parser.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDocumentStream",
    ()=>createDocumentStream,
    "createDomStream",
    ()=>createDomStream,
    "parseDOM",
    ()=>parseDOM,
    "parseDocument",
    ()=>parseDocument,
    "parseFeed",
    ()=>parseFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Parser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-rsc] (ecmascript)");
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-rsc] (ecmascript)");
;
;
;
;
function parseDocument(data, options) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"](undefined, options);
    new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](handler, options).end(data);
    return handler.root;
}
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
function createDocumentStream(callback, options, elementCallback) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"]((error)=>callback(error, handler.root), options, elementCallback);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](handler, options);
}
function createDomStream(callback, options, elementCallback) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"](callback, options, elementCallback);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](handler, options);
}
;
;
;
;
const parseFeedDefaultOptions = {
    xmlMode: true
};
function parseFeed(feed, options = parseFeedDefaultOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFeed"])(parseDOM(feed, options));
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttributeAction",
    ()=>AttributeAction,
    "IgnoreCaseMode",
    ()=>IgnoreCaseMode,
    "SelectorType",
    ()=>SelectorType
]);
var SelectorType;
(function(SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false
};
var AttributeAction;
(function(AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTraversal",
    ()=>isTraversal,
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
;
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [
        126 /* Tilde */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Element
    ],
    [
        94 /* Circumflex */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Start
    ],
    [
        36 /* Dollar */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].End
    ],
    [
        42 /* Asterisk */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Any
    ],
    [
        33 /* ExclamationMark */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Not
    ],
    [
        124 /* Pipe */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Hyphen
    ]
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context"
]);
function isTraversal(selector) {
    switch(selector.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Child:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set([
    "contains",
    "icontains"
]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xd800, high & 0x3ff | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */  || c === 34 /* DoubleQuote */ ;
}
function isWhitespace(c) {
    return c === 32 /* Space */  || c === 9 /* Tab */  || c === 10 /* NewLine */  || c === 12 /* FormFeed */  || c === 13 /* CarriageReturn */ ;
}
function parse(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while(selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))){
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for(; counter > 0 && selectorIndex < selector.length; selectorIndex++){
            if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  && !isEscaped(selectorIndex)) {
                counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 /* RightParenthesis */  && !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while(selector.charCodeAt(--pos) === 92 /* BackSlash */ )slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({
            type
        });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */ function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while(selectorIndex < selector.length){
        const firstChar = selector.charCodeAt(selectorIndex);
        switch(firstChar){
            // Whitespace
            case 32 /* Space */ :
            case 9 /* Tab */ :
            case 10 /* NewLine */ :
            case 12 /* FormFeed */ :
            case 13 /* CarriageReturn */ :
                {
                    if (tokens.length === 0 || tokens[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                        ensureNotTraversal();
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
                        });
                    }
                    stripWhitespace(1);
                    break;
                }
            // Traversals
            case 62 /* GreaterThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Child);
                    stripWhitespace(1);
                    break;
                }
            case 60 /* LessThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Parent);
                    stripWhitespace(1);
                    break;
                }
            case 126 /* Tilde */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling);
                    stripWhitespace(1);
                    break;
                }
            case 43 /* Plus */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent);
                    stripWhitespace(1);
                    break;
                }
            // Special attribute selectors: .class, #id
            case 46 /* Period */ :
                {
                    addSpecialAttribute("class", __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Element);
                    break;
                }
            case 35 /* Hash */ :
                {
                    addSpecialAttribute("id", __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals);
                    break;
                }
            case 91 /* LeftSquareBracket */ :
                {
                    stripWhitespace(1);
                    // Determine attribute name and namespace
                    let name;
                    let namespace = null;
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ ) {
                        // Equivalent to no namespace
                        name = getName(1);
                    } else if (selector.startsWith("*|", selectorIndex)) {
                        namespace = "*";
                        name = getName(2);
                    } else {
                        name = getName(0);
                        if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            namespace = name;
                            name = getName(1);
                        }
                    }
                    stripWhitespace(0);
                    // Determine comparison operation
                    let action = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Exists;
                    const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                    if (possibleAction) {
                        action = possibleAction;
                        if (selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            throw new Error("Expected `=`");
                        }
                        stripWhitespace(2);
                    } else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */ ) {
                        action = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals;
                        stripWhitespace(1);
                    }
                    // Determine value
                    let value = "";
                    let ignoreCase = null;
                    if (action !== "exists") {
                        if (isQuote(selector.charCodeAt(selectorIndex))) {
                            const quote = selector.charCodeAt(selectorIndex);
                            let sectionEnd = selectorIndex + 1;
                            while(sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))){
                                sectionEnd += 1;
                            }
                            if (selector.charCodeAt(sectionEnd) !== quote) {
                                throw new Error("Attribute value didn't end");
                            }
                            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                            selectorIndex = sectionEnd + 1;
                        } else {
                            const valueStart = selectorIndex;
                            while(selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */  || isEscaped(selectorIndex))){
                                selectorIndex += 1;
                            }
                            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                        }
                        stripWhitespace(0);
                        // See if we have a force ignore flag
                        const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                        // If the forceIgnore flag is set (either `i` or `s`), use that value
                        if (forceIgnore === 115 /* LowerS */ ) {
                            ignoreCase = false;
                            stripWhitespace(1);
                        } else if (forceIgnore === 105 /* LowerI */ ) {
                            ignoreCase = true;
                            stripWhitespace(1);
                        }
                    }
                    if (selector.charCodeAt(selectorIndex) !== 93 /* RightSquareBracket */ ) {
                        throw new Error("Attribute selector didn't terminate");
                    }
                    selectorIndex += 1;
                    const attributeSelector = {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
                        name,
                        action,
                        value,
                        namespace,
                        ignoreCase
                    };
                    tokens.push(attributeSelector);
                    break;
                }
            case 58 /* Colon */ :
                {
                    if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */ ) {
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement,
                            name: getName(2).toLowerCase(),
                            data: selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */  ? readValueWithParenthesis() : null
                        });
                        continue;
                    }
                    const name = getName(1).toLowerCase();
                    let data = null;
                    if (selector.charCodeAt(selectorIndex) === 40 /* LeftParenthesis */ ) {
                        if (unpackPseudos.has(name)) {
                            if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                                throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                            }
                            data = [];
                            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                            if (selector.charCodeAt(selectorIndex) !== 41 /* RightParenthesis */ ) {
                                throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                            }
                            selectorIndex += 1;
                        } else {
                            data = readValueWithParenthesis();
                            if (stripQuotesFromPseudos.has(name)) {
                                const quot = data.charCodeAt(0);
                                if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                                    data = data.slice(1, -1);
                                }
                            }
                            data = unescapeCSS(data);
                        }
                    }
                    tokens.push({
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
                        name,
                        data
                    });
                    break;
                }
            case 44 /* Comma */ :
                {
                    finalizeSubselector();
                    tokens = [];
                    stripWhitespace(1);
                    break;
                }
            default:
                {
                    if (selector.startsWith("/*", selectorIndex)) {
                        const endIndex = selector.indexOf("*/", selectorIndex + 2);
                        if (endIndex < 0) {
                            throw new Error("Comment was not terminated");
                        }
                        selectorIndex = endIndex + 2;
                        // Remove leading whitespace
                        if (tokens.length === 0) {
                            stripWhitespace(0);
                        }
                        break;
                    }
                    let namespace = null;
                    let name;
                    if (firstChar === 42 /* Asterisk */ ) {
                        selectorIndex += 1;
                        name = "*";
                    } else if (firstChar === 124 /* Pipe */ ) {
                        name = "";
                        if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */ ) {
                            addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator);
                            stripWhitespace(2);
                            break;
                        }
                    } else if (reName.test(selector.slice(selectorIndex))) {
                        name = getName(0);
                    } else {
                        break loop;
                    }
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */  && selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */ ) {
                        namespace = name;
                        if (selector.charCodeAt(selectorIndex + 1) === 42 /* Asterisk */ ) {
                            name = "*";
                            selectorIndex += 2;
                        } else {
                            name = getName(1);
                        }
                    }
                    tokens.push(name === "*" ? {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
                        namespace
                    } : {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
                        name,
                        namespace
                    });
                }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    trueFunc: function trueFunc() {
        return true;
    },
    falseFunc: function falseFunc() {
        return false;
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/sort.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sortByProcedure,
    "isTraversal",
    ()=>isTraversal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
;
const procedure = new Map([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
        50
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
        30
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
        1
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
        0
    ]
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
const attributes = new Map([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Exists,
        10
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals,
        8
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Not,
        7
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Start,
        6
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].End,
        6
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Any,
        5
    ]
]);
function sortByProcedure(arr) {
    const procs = arr.map(getProcedure);
    for(let i = 1; i < arr.length; i++){
        const procNew = procs[i];
        if (procNew < 0) continue;
        for(let j = i - 1; j >= 0 && procNew < procs[j]; j--){
            const token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
function getProcedure(token) {
    var _a, _b;
    let proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
    if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AttributeAction"].Equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */ proc >>= 1;
        }
    } else if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo) {
        if (!token.data) {
            proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        } else if (Array.isArray(token.data)) {
            // Eg. :matches, :not
            proc = Math.min(...token.data.map((d)=>Math.min(...d.map(getProcedure))));
            // If we have traversals, try to avoid executing this selector
            if (proc < 0) {
                proc = 0;
            }
        } else {
            proc = 2;
        }
    }
    return proc;
} //# sourceMappingURL=sort.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/attributes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeRules",
    ()=>attributeRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
;
/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */ const reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */ const caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink"
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
const attributeRules = {
    equals (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
        }
        return (elem)=>adapter.getAttributeValue(elem, name) === value && next(elem);
    },
    hyphen (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return function hyphen(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
    },
    element (next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (/\s/.test(value)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        const regex = new RegExp(`(?:^|\\s)${escapeRegex(value)}(?:$|\\s)`, shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            const attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
    },
    exists (next, { name }, { adapter }) {
        return (elem)=>adapter.hasAttrib(elem, name) && next(elem);
    },
    start (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = value.length;
        if (len === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
        };
    },
    end (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        const len = -value.length;
        if (len === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                var _a;
                return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
        };
    },
    any (next, data, options) {
        const { adapter } = options;
        const { name, value } = data;
        if (value === "") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            const regex = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                const attr = adapter.getAttributeValue(elem, name);
                return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
            };
        }
        return (elem)=>{
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
        };
    },
    not (next, data, options) {
        const { adapter } = options;
        const { name } = data;
        let { value } = data;
        if (value === "") {
            return (elem)=>!!adapter.getAttributeValue(elem, name) && next(elem);
        } else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return (elem)=>{
                const attr = adapter.getAttributeValue(elem, name);
                return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
        }
        return (elem)=>adapter.getAttributeValue(elem, name) !== value && next(elem);
    }
}; //# sourceMappingURL=attributes.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/filters.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filters",
    ()=>filters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
;
;
function getChildFunc(next, adapter) {
    return (elem)=>{
        const parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
    };
}
const filters = {
    contains (next, text, { adapter }) {
        return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
        };
    },
    icontains (next, text, { adapter }) {
        const itext = text.toLowerCase();
        return function icontains(elem) {
            return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
        };
    },
    // Location specific methods
    "nth-child" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = 0; i < siblings.length; i++){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-child" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = siblings.length - 1; i >= 0; i--){
                if (equals(elem, siblings[i])) break;
                if (adapter.isTag(siblings[i])) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-of-type" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = 0; i < siblings.length; i++){
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    "nth-last-of-type" (next, rule, { adapter, equals }) {
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
            const siblings = adapter.getSiblings(elem);
            let pos = 0;
            for(let i = siblings.length - 1; i >= 0; i--){
                const currentSibling = siblings[i];
                if (equals(elem, currentSibling)) break;
                if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                    pos++;
                }
            }
            return func(pos) && next(elem);
        };
    },
    // TODO determine the actual root element
    root (next, _rule, { adapter }) {
        return (elem)=>{
            const parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
    },
    scope (next, rule, options, context) {
        const { equals } = options;
        if (!context || context.length === 0) {
            // Equivalent to :root
            return filters["root"](next, rule, options);
        }
        if (context.length === 1) {
            // NOTE: can't be unpacked, as :has uses this for side-effects
            return (elem)=>equals(context[0], elem) && next(elem);
        }
        return (elem)=>context.includes(elem) && next(elem);
    },
    hover: dynamicStatePseudo("isHovered"),
    visited: dynamicStatePseudo("isVisited"),
    active: dynamicStatePseudo("isActive")
};
/**
 * Dynamic state pseudos. These depend on optional Adapter methods.
 *
 * @param name The name of the adapter method to call.
 * @returns Pseudo for the `filters` object.
 */ function dynamicStatePseudo(name) {
    return function dynamicPseudo(next, _rule, { adapter }) {
        const func = adapter[name];
        if (typeof func !== "function") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
} //# sourceMappingURL=filters.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// While filters are precompiled, pseudos get called when they are needed
__turbopack_context__.s([
    "pseudos",
    ()=>pseudos,
    "verifyPseudoArgs",
    ()=>verifyPseudoArgs
]);
const pseudos = {
    empty (elem, { adapter }) {
        return !adapter.getChildren(elem).some((elem)=>// FIXME: `getText` call is potentially expensive.
            adapter.isTag(elem) || adapter.getText(elem) !== "");
    },
    "first-child" (elem, { adapter, equals }) {
        if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
        }
        const firstChild = adapter.getSiblings(elem).find((elem)=>adapter.isTag(elem));
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        for(let i = siblings.length - 1; i >= 0; i--){
            if (equals(elem, siblings[i])) return true;
            if (adapter.isTag(siblings[i])) break;
        }
        return false;
    },
    "first-of-type" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for(let i = 0; i < siblings.length; i++){
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type" (elem, { adapter, equals }) {
        const siblings = adapter.getSiblings(elem);
        const elemName = adapter.getName(elem);
        for(let i = siblings.length - 1; i >= 0; i--){
            const currentSibling = siblings[i];
            if (equals(elem, currentSibling)) return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type" (elem, { adapter, equals }) {
        const elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every((sibling)=>equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName);
    },
    "only-child" (elem, { adapter, equals }) {
        return adapter.getSiblings(elem).every((sibling)=>equals(elem, sibling) || !adapter.isTag(sibling));
    }
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) {
            throw new Error(`Pseudo-class :${name} requires an argument`);
        }
    } else if (func.length === argIndex) {
        throw new Error(`Pseudo-class :${name} doesn't have any arguments`);
    }
} //# sourceMappingURL=pseudos.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Aliases are pseudos that are expressed as selectors.
 */ __turbopack_context__.s([
    "aliases",
    ()=>aliases
]);
const aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: `:is(
        :is(button, input, select, textarea, optgroup, option)[disabled],
        optgroup[disabled] > option,
        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)
    )`,
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])"
}; //# sourceMappingURL=aliases.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLACEHOLDER_ELEMENT",
    ()=>PLACEHOLDER_ELEMENT,
    "ensureIsTag",
    ()=>ensureIsTag,
    "getNextSiblings",
    ()=>getNextSiblings,
    "subselects",
    ()=>subselects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/sort.js [app-rsc] (ecmascript)");
;
;
const PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
    return (elem)=>adapter.isTag(elem) && next(elem);
}
function getNextSiblings(elem, adapter) {
    const siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1) return [];
    const elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1) return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
}
function copyOptions(options) {
    // Not copied: context, rootFunc
    return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
    };
}
const is = (next, token, options, context, compileToken)=>{
    const func = compileToken(token, copyOptions(options), context);
    return func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc ? next : func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc : (elem)=>func(elem) && next(elem);
};
const subselects = {
    is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */ matches: is,
    where: is,
    not (next, token, options, context, compileToken) {
        const func = compileToken(token, copyOptions(options), context);
        return func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc ? next : func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc : (elem)=>!func(elem) && next(elem);
    },
    has (next, subselect, options, _context, compileToken) {
        const { adapter } = options;
        const opts = copyOptions(options);
        opts.relativeSelector = true;
        const context = subselect.some((s)=>s.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])) ? [
            PLACEHOLDER_ELEMENT
        ] : undefined;
        const compiled = compileToken(subselect, opts, context);
        if (compiled === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
        const hasElement = ensureIsTag(compiled, adapter);
        // If `compiled` is `trueFunc`, we can skip this.
        if (context && compiled !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) {
            /*
             * `shouldTestNextSiblings` will only be true if the query starts with
             * a traversal (sibling or adjacent). That means we will always have a context.
             */ const { shouldTestNextSiblings = false } = compiled;
            return (elem)=>{
                if (!next(elem)) return false;
                context[0] = elem;
                const childs = adapter.getChildren(elem);
                const nextElements = shouldTestNextSiblings ? [
                    ...childs,
                    ...getNextSiblings(elem, adapter)
                ] : childs;
                return adapter.existsOne(hasElement, nextElements);
            };
        }
        return (elem)=>next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
    }
}; //# sourceMappingURL=subselects.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compilePseudoSelector",
    ()=>compilePseudoSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/filters.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$aliases$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function compilePseudoSelector(next, selector, options, context, compileToken) {
    var _a;
    const { name, data } = selector;
    if (Array.isArray(data)) {
        if (!(name in __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subselects"])) {
            throw new Error(`Unknown pseudo-class :${name}(${data})`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subselects"][name](next, data, options, context, compileToken);
    }
    const userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$aliases$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aliases"][name];
    if (typeof stringPseudo === "string") {
        if (data != null) {
            throw new Error(`Pseudo ${name} doesn't have any arguments`);
        }
        // The alias has to be parsed here, to make sure options are respected.
        const alias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(stringPseudo);
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subselects"]["is"](next, alias, options, context, compileToken);
    }
    if (typeof userPseudo === "function") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPseudoArgs"])(userPseudo, name, data, 1);
        return (elem)=>userPseudo(elem, data) && next(elem);
    }
    if (name in __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filters"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filters"][name](next, data, options, context);
    }
    if (name in __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pseudos"]) {
        const pseudo = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pseudos"][name];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPseudoArgs"])(pseudo, name, data, 2);
        return (elem)=>pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/general.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compileGeneralSelector",
    ()=>compileGeneralSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$attributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/attributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
;
;
;
function getElementParent(node, adapter) {
    const parent = adapter.getParent(node);
    if (parent && adapter.isTag(parent)) {
        return parent;
    }
    return null;
}
function compileGeneralSelector(next, selector, options, context, compileToken) {
    const { adapter, equals } = options;
    switch(selector.type){
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement:
            {
                throw new Error("Pseudo-elements are not supported by css-select");
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            {
                throw new Error("Column combinators are not yet supported by css-select");
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Attribute:
            {
                if (selector.namespace != null) {
                    throw new Error("Namespaced attributes are not yet supported by css-select");
                }
                if (!options.xmlMode || options.lowerCaseAttributeNames) {
                    selector.name = selector.name.toLowerCase();
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$attributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["attributeRules"][selector.action](next, selector, options);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo:
            {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compilePseudoSelector"])(next, selector, options, context, compileToken);
            }
        // Tags
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Tag:
            {
                if (selector.namespace != null) {
                    throw new Error("Namespaced tag names are not yet supported by css-select");
                }
                let { name } = selector;
                if (!options.xmlMode || options.lowerCaseTags) {
                    name = name.toLowerCase();
                }
                return function tag(elem) {
                    return adapter.getName(elem) === name && next(elem);
                };
            }
        // Traversal
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
            {
                if (options.cacheResults === false || typeof WeakSet === "undefined") {
                    return function descendant(elem) {
                        let current = elem;
                        while(current = getElementParent(current, adapter)){
                            if (next(current)) {
                                return true;
                            }
                        }
                        return false;
                    };
                }
                // @ts-expect-error `ElementNode` is not extending object
                const isFalseCache = new WeakSet();
                return function cachedDescendant(elem) {
                    let current = elem;
                    while(current = getElementParent(current, adapter)){
                        if (!isFalseCache.has(current)) {
                            if (adapter.isTag(current) && next(current)) {
                                return true;
                            }
                            isFalseCache.add(current);
                        }
                    }
                    return false;
                };
            }
        case "_flexibleDescendant":
            {
                // Include element itself, only used while querying an array
                return function flexibleDescendant(elem) {
                    let current = elem;
                    do {
                        if (next(current)) return true;
                    }while (current = getElementParent(current, adapter))
                    return false;
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
            {
                return function parent(elem) {
                    return adapter.getChildren(elem).some((elem)=>adapter.isTag(elem) && next(elem));
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Child:
            {
                return function child(elem) {
                    const parent = adapter.getParent(elem);
                    return parent != null && adapter.isTag(parent) && next(parent);
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
            {
                return function sibling(elem) {
                    const siblings = adapter.getSiblings(elem);
                    for(let i = 0; i < siblings.length; i++){
                        const currentSibling = siblings[i];
                        if (equals(elem, currentSibling)) break;
                        if (adapter.isTag(currentSibling) && next(currentSibling)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
            {
                if (adapter.prevElementSibling) {
                    return function adjacent(elem) {
                        const previous = adapter.prevElementSibling(elem);
                        return previous != null && next(previous);
                    };
                }
                return function adjacent(elem) {
                    const siblings = adapter.getSiblings(elem);
                    let lastElement;
                    for(let i = 0; i < siblings.length; i++){
                        const currentSibling = siblings[i];
                        if (equals(elem, currentSibling)) break;
                        if (adapter.isTag(currentSibling)) {
                            lastElement = currentSibling;
                        }
                    }
                    return !!lastElement && next(lastElement);
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal:
            {
                if (selector.namespace != null && selector.namespace !== "*") {
                    throw new Error("Namespaced universal selectors are not yet supported by css-select");
                }
                return next;
            }
    }
} //# sourceMappingURL=general.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/compile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile,
    "compileToken",
    ()=>compileToken,
    "compileUnsafe",
    ()=>compileUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/sort.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$general$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/general.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)");
;
;
;
;
;
function compile(selector, options, context) {
    const next = compileUnsafe(selector, options, context);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureIsTag"])(next, options.adapter);
}
function compileUnsafe(selector, options, context) {
    const token = typeof selector === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector) : selector;
    return compileToken(token, options, context);
}
function includesScopePseudo(t) {
    return t.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data)=>data.some(includesScopePseudo)));
}
const DESCENDANT_TOKEN = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
};
const FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant"
};
const SCOPE_TOKEN = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
    name: "scope",
    data: null
};
/*
 * CSS 4 Spec (Draft): 3.4.1. Absolutizing a Relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */ function absolutize(token, { adapter }, context) {
    // TODO Use better check if the context is a document
    const hasContext = !!(context === null || context === void 0 ? void 0 : context.every((e)=>{
        const parent = adapter.isTag(e) && adapter.getParent(e);
        return e === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PLACEHOLDER_ELEMENT"] || parent && adapter.isTag(parent);
    }));
    for (const t of token){
        if (t.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])(t[0]) && t[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
        // Don't continue in else branch
        } else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        } else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [
        context
    ]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    } else if (token.some((t)=>t.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])(t[0]))) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let shouldTestNextSiblings = false;
    const query = token.map((rules)=>{
        if (rules.length >= 2) {
            const [first, second] = rules;
            if (first.type !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo || first.name !== "scope") {
            // Ignore
            } else if (isArrayContext && second.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            } else if (second.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent || second.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    }).reduce(reduceRules, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce((previous, rule)=>previous === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$general$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileGeneralSelector"])(previous, rule, options, context, compileToken), (_a = options.rootFunc) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc);
}
function reduceRules(a, b) {
    if (b === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || a === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) {
        return a;
    }
    if (a === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || b === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
} //# sourceMappingURL=compile.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_compileToken",
    ()=>_compileToken,
    "_compileUnsafe",
    ()=>_compileUnsafe,
    "compile",
    ()=>compile,
    "default",
    ()=>__TURBOPACK__default__export__,
    "is",
    ()=>is,
    "prepareContext",
    ()=>prepareContext,
    "selectAll",
    ()=>selectAll,
    "selectOne",
    ()=>selectOne
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/compile.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-rsc] (ecmascript)");
// Export filters, pseudos and aliases to allow users to supply their own.
/** @deprecated Use the `pseudos` option instead. */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-rsc] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
const defaultEquals = (a, b)=>a === b;
const defaultOptions = {
    adapter: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__,
    equals: defaultEquals
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */ // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    const opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__;
    // @ts-expect-error `equals` does not exist on `Options`
    (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
    return opts;
}
function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
        const opts = convertOptionFormats(options);
        return func(selector, opts, context);
    };
}
const compile = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"]);
const _compileUnsafe = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileUnsafe"]);
const _compileToken = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileToken"]);
function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
        const opts = convertOptionFormats(options);
        if (typeof query !== "function") {
            query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compileUnsafe"])(query, opts, elements);
        }
        const filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
    };
}
function prepareContext(elems, adapter, shouldTestNextSiblings = false) {
    /*
     * Add siblings if the query requires them.
     * See https://github.com/fb55/css-select/pull/43#issuecomment-225414692
     */ if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
    }
    return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
}
function appendNextSiblings(elem, adapter) {
    // Order matters because jQuery seems to check the children before the siblings
    const elems = Array.isArray(elem) ? elem.slice(0) : [
        elem
    ];
    const elemsLength = elems.length;
    for(let i = 0; i < elemsLength; i++){
        const nextSiblings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextSiblings"])(elems[i], adapter);
        elems.push(...nextSiblings);
    }
    return elems;
}
const selectAll = getSelectorFunc((query, elems, options)=>query === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems));
const selectOne = getSelectorFunc((query, elems, options)=>query === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems));
function is(elem, query, options) {
    const opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(query, opts))(elem);
}
const __TURBOPACK__default__export__ = selectAll;
;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
__turbopack_context__.s([
    "parse",
    ()=>parse
]);
const whitespace = new Set([
    9,
    10,
    12,
    13,
    32
]);
const ZERO = "0".charCodeAt(0);
const NINE = "9".charCodeAt(0);
function parse(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [
            2,
            0
        ];
    } else if (formula === "odd") {
        return [
            2,
            1
        ];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    let idx = 0;
    let a = 0;
    let sign = readSign();
    let number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        } else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error(`n-th rule couldn't be parsed ('${formula}')`);
    }
    return [
        a,
        sign * number
    ];
    //TURBOPACK unreachable
    ;
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        const start = idx;
        let value = 0;
        while(idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE){
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while(idx < formula.length && whitespace.has(formula.charCodeAt(idx))){
            idx++;
        }
    }
} //# sourceMappingURL=parse.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/compile.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile,
    "generate",
    ()=>generate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
;
function compile(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    const b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */ if (b < 0 && a <= 0) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1) return (index)=>index <= b;
    if (a === 0) return (index)=>index === b;
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1) return b < 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trueFunc : (index)=>index >= b;
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */ const absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    const bMod = (b % absA + absA) % absA;
    return a > 1 ? (index)=>index >= b && index % absA === bMod : (index)=>index <= b && index % absA === bMod;
}
function generate(parsed) {
    const a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    let b = parsed[1] - 1;
    let n = 0;
    // Make sure to always return an increasing sequence
    if (a < 0) {
        const aPos = -a;
        // Get `b mod a`
        const minValue = (b % aPos + aPos) % aPos;
        return ()=>{
            const val = minValue + aPos * n++;
            return val > b ? null : val;
        };
    }
    if (a === 0) return b < 0 ? ()=>null : ()=>n++ === 0 ? b : null;
    if (b < 0) {
        b += a * Math.ceil(-b / a);
    }
    return ()=>a * n++ + b;
} //# sourceMappingURL=compile.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nthCheck,
    "sequence",
    ()=>sequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/compile.js [app-rsc] (ecmascript)");
;
;
;
function nthCheck(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(formula));
}
function sequence(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(formula));
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/positionals.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterNames",
    ()=>filterNames,
    "getLimit",
    ()=>getLimit,
    "isFilter",
    ()=>isFilter
]);
const filterNames = new Set([
    "first",
    "last",
    "eq",
    "gt",
    "nth",
    "lt",
    "even",
    "odd"
]);
function isFilter(s) {
    if (s.type !== "pseudo") return false;
    if (filterNames.has(s.name)) return true;
    if (s.name === "not" && Array.isArray(s.data)) {
        // Only consider `:not` with embedded filters
        return s.data.some((s)=>s.some(isFilter));
    }
    return false;
}
function getLimit(filter, data, partLimit) {
    const num = data != null ? parseInt(data, 10) : NaN;
    switch(filter){
        case "first":
            return 1;
        case "nth":
        case "eq":
            return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
        case "lt":
            return isFinite(num) ? num >= 0 ? Math.min(num, partLimit) : Infinity : 0;
        case "gt":
            return isFinite(num) ? Infinity : 0;
        case "odd":
            return 2 * partLimit;
        case "even":
            return 2 * partLimit - 1;
        case "last":
        case "not":
            return Infinity;
    }
} //# sourceMappingURL=positionals.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/helpers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDocumentRoot",
    ()=>getDocumentRoot,
    "groupSelectors",
    ()=>groupSelectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/positionals.js [app-rsc] (ecmascript)");
;
function getDocumentRoot(node) {
    while(node.parent)node = node.parent;
    return node;
}
function groupSelectors(selectors) {
    const filteredSelectors = [];
    const plainSelectors = [];
    for (const selector of selectors){
        if (selector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilter"])) {
            filteredSelectors.push(selector);
        } else {
            plainSelectors.push(selector);
        }
    }
    return [
        plainSelectors,
        filteredSelectors
    ];
} //# sourceMappingURL=helpers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filter",
    ()=>filter,
    "is",
    ()=>is,
    "select",
    ()=>select,
    "some",
    ()=>some
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/helpers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/positionals.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const UNIVERSAL_SELECTOR = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
    namespace: null
};
const SCOPE_PSEUDO = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
    name: "scope",
    data: null
};
function is(element, selector, options = {}) {
    return some([
        element
    ], selector, options);
}
function some(elements, selector, options = {}) {
    if (typeof selector === "function") return elements.some(selector);
    const [plain, filtered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupSelectors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector));
    return plain.length > 0 && elements.some((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(plain, options)) || filtered.some((sel)=>filterBySelector(sel, elements, options).length > 0);
}
function filterByPosition(filter, elems, data, options) {
    const num = typeof data === "string" ? parseInt(data, 10) : NaN;
    switch(filter){
        case "first":
        case "lt":
            // Already done in `getLimit`
            return elems;
        case "last":
            return elems.length > 0 ? [
                elems[elems.length - 1]
            ] : elems;
        case "nth":
        case "eq":
            return isFinite(num) && Math.abs(num) < elems.length ? [
                num < 0 ? elems[elems.length + num] : elems[num]
            ] : [];
        case "gt":
            return isFinite(num) ? elems.slice(num + 1) : [];
        case "even":
            return elems.filter((_, i)=>i % 2 === 0);
        case "odd":
            return elems.filter((_, i)=>i % 2 === 1);
        case "not":
            {
                const filtered = new Set(filterParsed(data, elems, options));
                return elems.filter((e)=>!filtered.has(e));
            }
    }
}
function filter(selector, elements, options = {}) {
    return filterParsed((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector), elements, options);
}
/**
 * Filter a set of elements by a selector.
 *
 * Will return elements in the original order.
 *
 * @param selector Selector to filter by.
 * @param elements Elements to filter.
 * @param options Options for selector.
 */ function filterParsed(selector, elements, options) {
    if (elements.length === 0) return [];
    const [plainSelectors, filteredSelectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupSelectors"])(selector);
    let found;
    if (plainSelectors.length) {
        const filtered = filterElements(elements, plainSelectors, options);
        // If there are no filters, just return
        if (filteredSelectors.length === 0) {
            return filtered;
        }
        // Otherwise, we have to do some filtering
        if (filtered.length) {
            found = new Set(filtered);
        }
    }
    for(let i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++){
        const filteredSelector = filteredSelectors[i];
        const missing = found ? elements.filter((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag(e) && !found.has(e)) : elements;
        if (missing.length === 0) break;
        const filtered = filterBySelector(filteredSelector, elements, options);
        if (filtered.length) {
            if (!found) {
                /*
                 * If we haven't found anything before the last selector,
                 * just return what we found now.
                 */ if (i === filteredSelectors.length - 1) {
                    return filtered;
                }
                found = new Set(filtered);
            } else {
                filtered.forEach((el)=>found.add(el));
            }
        }
    }
    return typeof found !== "undefined" ? found.size === elements.length ? elements : elements.filter((el)=>found.has(el)) : [];
}
function filterBySelector(selector, elements, options) {
    var _a;
    if (selector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])) {
        /*
         * Get root node, run selector with the scope
         * set to all of our nodes.
         */ const root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentRoot"])(elements[0]);
        const opts = {
            ...options,
            context: elements,
            relativeSelector: false
        };
        selector.push(SCOPE_PSEUDO);
        return findFilterElements(root, selector, opts, true, elements.length);
    }
    // Performance optimization: If we don't have to traverse, just filter set.
    return findFilterElements(elements, selector, options, false, elements.length);
}
function select(selector, root, options = {}, limit = Infinity) {
    if (typeof selector === "function") {
        return find(root, selector);
    }
    const [plain, filtered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupSelectors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parse"])(selector));
    const results = filtered.map((sel)=>findFilterElements(root, sel, options, true, limit));
    // Plain selectors can be queried in a single go
    if (plain.length) {
        results.push(findElements(root, plain, options, limit));
    }
    if (results.length === 0) {
        return [];
    }
    // If there was only a single selector, just return the result
    if (results.length === 1) {
        return results[0];
    }
    // Sort results, filtering for duplicates
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.uniqueSort(results.reduce((a, b)=>[
            ...a,
            ...b
        ]));
}
/**
 *
 * @param root Element(s) to search from.
 * @param selector Selector to look for.
 * @param options Options for querying.
 * @param queryForSelector Query multiple levels deep for the initial selector, even if it doesn't contain a traversal.
 */ function findFilterElements(root, selector, options, queryForSelector, totalLimit) {
    const filterIndex = selector.findIndex(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilter"]);
    const sub = selector.slice(0, filterIndex);
    const filter = selector[filterIndex];
    // If we are at the end of the selector, we can limit the number of elements to retrieve.
    const partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
    /*
     * Set the number of elements to retrieve.
     * Eg. for :first, we only have to get a single element.
     */ const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLimit"])(filter.name, filter.data, partLimit);
    if (limit === 0) return [];
    /*
     * Skip `findElements` call if our selector starts with a positional
     * pseudo.
     */ const elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.getChildren(root).filter(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag) : sub.length === 0 ? (Array.isArray(root) ? root : [
        root
    ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag) : queryForSelector || sub.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"]) ? findElements(root, [
        sub
    ], options, limit) : filterElements(root, [
        sub
    ], options);
    const elems = elemsNoLimit.slice(0, limit);
    let result = filterByPosition(filter.name, elems, filter.data, options);
    if (result.length === 0 || selector.length === filterIndex + 1) {
        return result;
    }
    const remainingSelector = selector.slice(filterIndex + 1);
    const remainingHasTraversal = remainingSelector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"]);
    if (remainingHasTraversal) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTraversal"])(remainingSelector[0])) {
            const { type } = remainingSelector[0];
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Sibling || type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent) {
                // If we have a sibling traversal, we need to also look at the siblings.
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareContext"])(result, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, true);
            }
            // Avoid a traversal-first selector error.
            remainingSelector.unshift(UNIVERSAL_SELECTOR);
        }
        options = {
            ...options,
            // Avoid absolutizing the selector
            relativeSelector: false,
            /*
             * Add a custom root func, to make sure traversals don't match elements
             * that aren't a part of the considered tree.
             */ rootFunc: (el)=>result.includes(el)
        };
    } else if (options.rootFunc && options.rootFunc !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trueFunc"]) {
        options = {
            ...options,
            rootFunc: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trueFunc"]
        };
    }
    /*
     * If we have another filter, recursively call `findFilterElements`,
     * with the `recursive` flag disabled. We only have to look for more
     * elements when we see a traversal.
     *
     * Otherwise,
     */ return remainingSelector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFilter"]) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? findElements(result, [
        remainingSelector
    ], options, totalLimit) : filterElements(result, [
        remainingSelector
    ], options);
}
function findElements(root, sel, options, limit) {
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(sel, options, root);
    return find(root, query, limit);
}
function find(root, query, limit = Infinity) {
    const elems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareContext"])(root, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__, query.shouldTestNextSiblings);
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.find((node)=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag(node) && query(node), elems, true, limit);
}
function filterElements(elements, sel, options) {
    const els = (Array.isArray(elements) ? elements : [
        elements
    ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.isTag);
    if (els.length === 0) return els;
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(sel, options);
    return query === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trueFunc"] ? els : els.filter(query);
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5-htmlparser2-tree-adapter@7.1.0/node_modules/parse5-htmlparser2-tree-adapter/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "serializeDoctypeContent",
    ()=>serializeDoctypeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/common/html.js [app-rsc] (ecmascript) <export * as html>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-rsc] (ecmascript)");
;
;
function enquoteDoctypeId(id) {
    const quote = id.includes('"') ? "'" : '"';
    return quote + id + quote;
}
function serializeDoctypeContent(name, publicId, systemId) {
    let str = '!DOCTYPE ';
    if (name) {
        str += name;
    }
    if (publicId) {
        str += ` PUBLIC ${enquoteDoctypeId(publicId)}`;
    } else if (systemId) {
        str += ' SYSTEM';
    }
    if (systemId) {
        str += ` ${enquoteDoctypeId(systemId)}`;
    }
    return str;
}
const adapter = {
    // Re-exports from domhandler
    isCommentNode: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isComment"],
    isElementNode: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTag"],
    isTextNode: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"],
    //Node construction
    createDocument () {
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"]([]);
        node['x-mode'] = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html$3e$__["html"].DOCUMENT_MODE.NO_QUIRKS;
        return node;
    },
    createDocumentFragment () {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Document"]([]);
    },
    createElement (tagName, namespaceURI, attrs) {
        const attribs = Object.create(null);
        const attribsNamespace = Object.create(null);
        const attribsPrefix = Object.create(null);
        for(let i = 0; i < attrs.length; i++){
            const attrName = attrs[i].name;
            attribs[attrName] = attrs[i].value;
            attribsNamespace[attrName] = attrs[i].namespace;
            attribsPrefix[attrName] = attrs[i].prefix;
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Element"](tagName, attribs, []);
        node.namespace = namespaceURI;
        node['x-attribsNamespace'] = attribsNamespace;
        node['x-attribsPrefix'] = attribsPrefix;
        return node;
    },
    createCommentNode (data) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Comment"](data);
    },
    createTextNode (value) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Text"](value);
    },
    //Tree mutation
    appendChild (parentNode, newNode) {
        const prev = parentNode.children[parentNode.children.length - 1];
        if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
        }
        parentNode.children.push(newNode);
        newNode.parent = parentNode;
    },
    insertBefore (parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.children.indexOf(referenceNode);
        const { prev } = referenceNode;
        if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
        }
        referenceNode.prev = newNode;
        newNode.next = referenceNode;
        parentNode.children.splice(insertionIdx, 0, newNode);
        newNode.parent = parentNode;
    },
    setTemplateContent (templateElement, contentElement) {
        adapter.appendChild(templateElement, contentElement);
    },
    getTemplateContent (templateElement) {
        return templateElement.children[0];
    },
    setDocumentType (document, name, publicId, systemId) {
        const data = serializeDoctypeContent(name, publicId, systemId);
        let doctypeNode = document.children.find((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirective"])(node) && node.name === '!doctype');
        if (doctypeNode) {
            doctypeNode.data = data !== null && data !== void 0 ? data : null;
        } else {
            doctypeNode = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProcessingInstruction"]('!doctype', data);
            adapter.appendChild(document, doctypeNode);
        }
        doctypeNode['x-name'] = name;
        doctypeNode['x-publicId'] = publicId;
        doctypeNode['x-systemId'] = systemId;
    },
    setDocumentMode (document, mode) {
        document['x-mode'] = mode;
    },
    getDocumentMode (document) {
        return document['x-mode'];
    },
    detachNode (node) {
        if (node.parent) {
            const idx = node.parent.children.indexOf(node);
            const { prev, next } = node;
            node.prev = null;
            node.next = null;
            if (prev) {
                prev.next = next;
            }
            if (next) {
                next.prev = prev;
            }
            node.parent.children.splice(idx, 1);
            node.parent = null;
        }
    },
    insertText (parentNode, text) {
        const lastChild = parentNode.children[parentNode.children.length - 1];
        if (lastChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(lastChild)) {
            lastChild.data += text;
        } else {
            adapter.appendChild(parentNode, adapter.createTextNode(text));
        }
    },
    insertTextBefore (parentNode, text, referenceNode) {
        const prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
        if (prevNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isText"])(prevNode)) {
            prevNode.data += text;
        } else {
            adapter.insertBefore(parentNode, adapter.createTextNode(text), referenceNode);
        }
    },
    adoptAttributes (recipient, attrs) {
        for(let i = 0; i < attrs.length; i++){
            const attrName = attrs[i].name;
            if (recipient.attribs[attrName] === undefined) {
                recipient.attribs[attrName] = attrs[i].value;
                recipient['x-attribsNamespace'][attrName] = attrs[i].namespace;
                recipient['x-attribsPrefix'][attrName] = attrs[i].prefix;
            }
        }
    },
    //Tree traversing
    getFirstChild (node) {
        return node.children[0];
    },
    getChildNodes (node) {
        return node.children;
    },
    getParentNode (node) {
        return node.parent;
    },
    getAttrList (element) {
        return element.attributes;
    },
    //Node data
    getTagName (element) {
        return element.name;
    },
    getNamespaceURI (element) {
        return element.namespace;
    },
    getTextNodeContent (textNode) {
        return textNode.data;
    },
    getCommentNodeContent (commentNode) {
        return commentNode.data;
    },
    getDocumentTypeNodeName (doctypeNode) {
        var _a;
        return (_a = doctypeNode['x-name']) !== null && _a !== void 0 ? _a : '';
    },
    getDocumentTypeNodePublicId (doctypeNode) {
        var _a;
        return (_a = doctypeNode['x-publicId']) !== null && _a !== void 0 ? _a : '';
    },
    getDocumentTypeNodeSystemId (doctypeNode) {
        var _a;
        return (_a = doctypeNode['x-systemId']) !== null && _a !== void 0 ? _a : '';
    },
    //Node types
    isDocumentTypeNode (node) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDirective"])(node) && node.name === '!doctype';
    },
    // Source code location
    setNodeSourceCodeLocation (node, location) {
        if (location) {
            node.startIndex = location.startOffset;
            node.endIndex = location.endOffset;
        }
        node.sourceCodeLocation = location;
    },
    getNodeSourceCodeLocation (node) {
        return node.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation (node, endLocation) {
        if (endLocation.endOffset != null) node.endIndex = endLocation.endOffset;
        node.sourceCodeLocation = {
            ...node.sourceCodeLocation,
            ...endLocation
        };
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5-parser-stream@7.1.2/node_modules/parse5-parser-stream/dist/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParserStream",
    ()=>ParserStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/parser/index.js [app-rsc] (ecmascript)");
;
;
class ParserStream extends __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["Writable"] {
    static getFragmentStream(fragmentContext, options) {
        const parser = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"].getFragmentParser(fragmentContext, options);
        const stream = new ParserStream(options, parser);
        return stream;
    }
    /** The resulting document node. */ get document() {
        return this.parser.document;
    }
    getFragment() {
        return this.parser.getFragment();
    }
    /**
     * @param options Parsing options.
     */ constructor(options, parser = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Parser"](options)){
        super({
            decodeStrings: false
        });
        this.parser = parser;
        this.lastChunkWritten = false;
        this.writeCallback = undefined;
        this.pendingHtmlInsertions = [];
        const resume = ()=>{
            for(let i = this.pendingHtmlInsertions.length - 1; i >= 0; i--){
                this.parser.tokenizer.insertHtmlAtCurrentPos(this.pendingHtmlInsertions[i]);
            }
            this.pendingHtmlInsertions.length = 0;
            //NOTE: keep parsing if we don't wait for the next input chunk
            this.parser.tokenizer.resume(this.writeCallback);
        };
        const documentWrite = (html)=>{
            if (!this.parser.stopped) {
                this.pendingHtmlInsertions.push(html);
            }
        };
        const scriptHandler = (scriptElement)=>{
            if (this.listenerCount('script') > 0) {
                this.parser.tokenizer.pause();
                this.emit('script', scriptElement, documentWrite, resume);
            }
        };
        this.parser.scriptHandler = scriptHandler;
    }
    //WritableStream implementation
    _write(chunk, _encoding, callback) {
        if (typeof chunk !== 'string') {
            throw new TypeError('Parser can work only with string streams.');
        }
        this.writeCallback = callback;
        this.parser.tokenizer.write(chunk, this.lastChunkWritten, this.writeCallback);
    }
    // TODO [engine:node@>=16]: Due to issues with Node < 16, we are overriding `end` instead of `_final`.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    end(chunk, encoding, callback) {
        this.lastChunkWritten = true;
        super.end(chunk || '', encoding, callback);
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/safer-buffer@2.1.2/node_modules/safer-buffer/safer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
var safer = {};
var key;
for(key in buffer){
    if (!buffer.hasOwnProperty(key)) continue;
    if (key === 'SlowBuffer' || key === 'Buffer') continue;
    safer[key] = buffer[key];
}
var Safer = safer.Buffer = {};
for(key in Buffer){
    if (!Buffer.hasOwnProperty(key)) continue;
    if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue;
    Safer[key] = Buffer[key];
}
safer.Buffer.prototype = Buffer.prototype;
if (!Safer.from || Safer.from === Uint8Array.from) {
    Safer.from = function(value, encodingOrOffset, length) {
        if (typeof value === 'number') {
            throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value);
        }
        if (value && typeof value.length === 'undefined') {
            throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value);
        }
        return Buffer(value, encodingOrOffset, length);
    };
}
if (!Safer.alloc) {
    Safer.alloc = function(size, fill, encoding) {
        if (typeof size !== 'number') {
            throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size);
        }
        if (size < 0 || size >= 2 * (1 << 30)) {
            throw new RangeError('The value "' + size + '" is invalid for option "size"');
        }
        var buf = Buffer(size);
        if (!fill || fill.length === 0) {
            buf.fill(0);
        } else if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
        return buf;
    };
}
if (!safer.kStringMaxLength) {
    try {
        safer.kStringMaxLength = process.binding('buffer').kStringMaxLength;
    } catch (e) {
    // we can't determine kStringMaxLength in environments where process.binding
    // is unsupported, so let's not set it
    }
}
if (!safer.constants) {
    safer.constants = {
        MAX_LENGTH: safer.kMaxLength
    };
    if (safer.kStringMaxLength) {
        safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
    }
}
module.exports = safer;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/supported-names.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("[\"UTF-8\",\"IBM866\",\"ISO-8859-2\",\"ISO-8859-3\",\"ISO-8859-4\",\"ISO-8859-5\",\"ISO-8859-6\",\"ISO-8859-7\",\"ISO-8859-8\",\"ISO-8859-10\",\"ISO-8859-13\",\"ISO-8859-14\",\"ISO-8859-15\",\"ISO-8859-16\",\"KOI8-R\",\"KOI8-U\",\"macintosh\",\"windows-874\",\"windows-1250\",\"windows-1251\",\"windows-1252\",\"windows-1253\",\"windows-1254\",\"windows-1255\",\"windows-1256\",\"windows-1257\",\"windows-1258\",\"GBK\",\"gb18030\",\"Big5\",\"EUC-JP\",\"Shift_JIS\",\"EUC-KR\",\"UTF-16BE\",\"UTF-16LE\",\"x-user-defined\"]"));}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/labels-to-names.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"866\":\"IBM866\",\"unicode-1-1-utf-8\":\"UTF-8\",\"unicode11utf8\":\"UTF-8\",\"unicode20utf8\":\"UTF-8\",\"utf-8\":\"UTF-8\",\"utf8\":\"UTF-8\",\"x-unicode20utf8\":\"UTF-8\",\"cp866\":\"IBM866\",\"csibm866\":\"IBM866\",\"ibm866\":\"IBM866\",\"csisolatin2\":\"ISO-8859-2\",\"iso-8859-2\":\"ISO-8859-2\",\"iso-ir-101\":\"ISO-8859-2\",\"iso8859-2\":\"ISO-8859-2\",\"iso88592\":\"ISO-8859-2\",\"iso_8859-2\":\"ISO-8859-2\",\"iso_8859-2:1987\":\"ISO-8859-2\",\"l2\":\"ISO-8859-2\",\"latin2\":\"ISO-8859-2\",\"csisolatin3\":\"ISO-8859-3\",\"iso-8859-3\":\"ISO-8859-3\",\"iso-ir-109\":\"ISO-8859-3\",\"iso8859-3\":\"ISO-8859-3\",\"iso88593\":\"ISO-8859-3\",\"iso_8859-3\":\"ISO-8859-3\",\"iso_8859-3:1988\":\"ISO-8859-3\",\"l3\":\"ISO-8859-3\",\"latin3\":\"ISO-8859-3\",\"csisolatin4\":\"ISO-8859-4\",\"iso-8859-4\":\"ISO-8859-4\",\"iso-ir-110\":\"ISO-8859-4\",\"iso8859-4\":\"ISO-8859-4\",\"iso88594\":\"ISO-8859-4\",\"iso_8859-4\":\"ISO-8859-4\",\"iso_8859-4:1988\":\"ISO-8859-4\",\"l4\":\"ISO-8859-4\",\"latin4\":\"ISO-8859-4\",\"csisolatincyrillic\":\"ISO-8859-5\",\"cyrillic\":\"ISO-8859-5\",\"iso-8859-5\":\"ISO-8859-5\",\"iso-ir-144\":\"ISO-8859-5\",\"iso8859-5\":\"ISO-8859-5\",\"iso88595\":\"ISO-8859-5\",\"iso_8859-5\":\"ISO-8859-5\",\"iso_8859-5:1988\":\"ISO-8859-5\",\"arabic\":\"ISO-8859-6\",\"asmo-708\":\"ISO-8859-6\",\"csiso88596e\":\"ISO-8859-6\",\"csiso88596i\":\"ISO-8859-6\",\"csisolatinarabic\":\"ISO-8859-6\",\"ecma-114\":\"ISO-8859-6\",\"iso-8859-6\":\"ISO-8859-6\",\"iso-8859-6-e\":\"ISO-8859-6\",\"iso-8859-6-i\":\"ISO-8859-6\",\"iso-ir-127\":\"ISO-8859-6\",\"iso8859-6\":\"ISO-8859-6\",\"iso88596\":\"ISO-8859-6\",\"iso_8859-6\":\"ISO-8859-6\",\"iso_8859-6:1987\":\"ISO-8859-6\",\"csisolatingreek\":\"ISO-8859-7\",\"ecma-118\":\"ISO-8859-7\",\"elot_928\":\"ISO-8859-7\",\"greek\":\"ISO-8859-7\",\"greek8\":\"ISO-8859-7\",\"iso-8859-7\":\"ISO-8859-7\",\"iso-ir-126\":\"ISO-8859-7\",\"iso8859-7\":\"ISO-8859-7\",\"iso88597\":\"ISO-8859-7\",\"iso_8859-7\":\"ISO-8859-7\",\"iso_8859-7:1987\":\"ISO-8859-7\",\"sun_eu_greek\":\"ISO-8859-7\",\"csiso88598e\":\"ISO-8859-8\",\"csisolatinhebrew\":\"ISO-8859-8\",\"hebrew\":\"ISO-8859-8\",\"iso-8859-8\":\"ISO-8859-8\",\"iso-8859-8-e\":\"ISO-8859-8\",\"iso-ir-138\":\"ISO-8859-8\",\"iso8859-8\":\"ISO-8859-8\",\"iso88598\":\"ISO-8859-8\",\"iso_8859-8\":\"ISO-8859-8\",\"iso_8859-8:1988\":\"ISO-8859-8\",\"visual\":\"ISO-8859-8\",\"csisolatin6\":\"ISO-8859-10\",\"iso-8859-10\":\"ISO-8859-10\",\"iso-ir-157\":\"ISO-8859-10\",\"iso8859-10\":\"ISO-8859-10\",\"iso885910\":\"ISO-8859-10\",\"l6\":\"ISO-8859-10\",\"latin6\":\"ISO-8859-10\",\"iso-8859-13\":\"ISO-8859-13\",\"iso8859-13\":\"ISO-8859-13\",\"iso885913\":\"ISO-8859-13\",\"iso-8859-14\":\"ISO-8859-14\",\"iso8859-14\":\"ISO-8859-14\",\"iso885914\":\"ISO-8859-14\",\"csisolatin9\":\"ISO-8859-15\",\"iso-8859-15\":\"ISO-8859-15\",\"iso8859-15\":\"ISO-8859-15\",\"iso885915\":\"ISO-8859-15\",\"iso_8859-15\":\"ISO-8859-15\",\"l9\":\"ISO-8859-15\",\"iso-8859-16\":\"ISO-8859-16\",\"cskoi8r\":\"KOI8-R\",\"koi\":\"KOI8-R\",\"koi8\":\"KOI8-R\",\"koi8-r\":\"KOI8-R\",\"koi8_r\":\"KOI8-R\",\"koi8-ru\":\"KOI8-U\",\"koi8-u\":\"KOI8-U\",\"csmacintosh\":\"macintosh\",\"mac\":\"macintosh\",\"macintosh\":\"macintosh\",\"x-mac-roman\":\"macintosh\",\"dos-874\":\"windows-874\",\"iso-8859-11\":\"windows-874\",\"iso8859-11\":\"windows-874\",\"iso885911\":\"windows-874\",\"tis-620\":\"windows-874\",\"windows-874\":\"windows-874\",\"cp1250\":\"windows-1250\",\"windows-1250\":\"windows-1250\",\"x-cp1250\":\"windows-1250\",\"cp1251\":\"windows-1251\",\"windows-1251\":\"windows-1251\",\"x-cp1251\":\"windows-1251\",\"ansi_x3.4-1968\":\"windows-1252\",\"ascii\":\"windows-1252\",\"cp1252\":\"windows-1252\",\"cp819\":\"windows-1252\",\"csisolatin1\":\"windows-1252\",\"ibm819\":\"windows-1252\",\"iso-8859-1\":\"windows-1252\",\"iso-ir-100\":\"windows-1252\",\"iso8859-1\":\"windows-1252\",\"iso88591\":\"windows-1252\",\"iso_8859-1\":\"windows-1252\",\"iso_8859-1:1987\":\"windows-1252\",\"l1\":\"windows-1252\",\"latin1\":\"windows-1252\",\"us-ascii\":\"windows-1252\",\"windows-1252\":\"windows-1252\",\"x-cp1252\":\"windows-1252\",\"cp1253\":\"windows-1253\",\"windows-1253\":\"windows-1253\",\"x-cp1253\":\"windows-1253\",\"cp1254\":\"windows-1254\",\"csisolatin5\":\"windows-1254\",\"iso-8859-9\":\"windows-1254\",\"iso-ir-148\":\"windows-1254\",\"iso8859-9\":\"windows-1254\",\"iso88599\":\"windows-1254\",\"iso_8859-9\":\"windows-1254\",\"iso_8859-9:1989\":\"windows-1254\",\"l5\":\"windows-1254\",\"latin5\":\"windows-1254\",\"windows-1254\":\"windows-1254\",\"x-cp1254\":\"windows-1254\",\"cp1255\":\"windows-1255\",\"windows-1255\":\"windows-1255\",\"x-cp1255\":\"windows-1255\",\"cp1256\":\"windows-1256\",\"windows-1256\":\"windows-1256\",\"x-cp1256\":\"windows-1256\",\"cp1257\":\"windows-1257\",\"windows-1257\":\"windows-1257\",\"x-cp1257\":\"windows-1257\",\"cp1258\":\"windows-1258\",\"windows-1258\":\"windows-1258\",\"x-cp1258\":\"windows-1258\",\"chinese\":\"GBK\",\"csgb2312\":\"GBK\",\"csiso58gb231280\":\"GBK\",\"gb2312\":\"GBK\",\"gb_2312\":\"GBK\",\"gb_2312-80\":\"GBK\",\"gbk\":\"GBK\",\"iso-ir-58\":\"GBK\",\"x-gbk\":\"GBK\",\"gb18030\":\"gb18030\",\"big5\":\"Big5\",\"big5-hkscs\":\"Big5\",\"cn-big5\":\"Big5\",\"csbig5\":\"Big5\",\"x-x-big5\":\"Big5\",\"cseucpkdfmtjapanese\":\"EUC-JP\",\"euc-jp\":\"EUC-JP\",\"x-euc-jp\":\"EUC-JP\",\"csshiftjis\":\"Shift_JIS\",\"ms932\":\"Shift_JIS\",\"ms_kanji\":\"Shift_JIS\",\"shift-jis\":\"Shift_JIS\",\"shift_jis\":\"Shift_JIS\",\"sjis\":\"Shift_JIS\",\"windows-31j\":\"Shift_JIS\",\"x-sjis\":\"Shift_JIS\",\"cseuckr\":\"EUC-KR\",\"csksc56011987\":\"EUC-KR\",\"euc-kr\":\"EUC-KR\",\"iso-ir-149\":\"EUC-KR\",\"korean\":\"EUC-KR\",\"ks_c_5601-1987\":\"EUC-KR\",\"ks_c_5601-1989\":\"EUC-KR\",\"ksc5601\":\"EUC-KR\",\"ksc_5601\":\"EUC-KR\",\"windows-949\":\"EUC-KR\",\"unicodefffe\":\"UTF-16BE\",\"utf-16be\":\"UTF-16BE\",\"csunicode\":\"UTF-16LE\",\"iso-10646-ucs-2\":\"UTF-16LE\",\"ucs-2\":\"UTF-16LE\",\"unicode\":\"UTF-16LE\",\"unicodefeff\":\"UTF-16LE\",\"utf-16\":\"UTF-16LE\",\"utf-16le\":\"UTF-16LE\",\"x-user-defined\":\"x-user-defined\"}"));}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/whatwg-encoding.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const iconvLite = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/iconv-lite@0.6.3/node_modules/iconv-lite/lib/index.js [app-rsc] (ecmascript)");
const supportedNames = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/supported-names.json (json)");
const labelsToNames = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/labels-to-names.json (json)");
const supportedNamesSet = new Set(supportedNames);
// https://encoding.spec.whatwg.org/#concept-encoding-get
exports.labelToName = (label)=>{
    label = String(label).trim().toLowerCase();
    return labelsToNames[label] || null;
};
// https://encoding.spec.whatwg.org/#decode
exports.decode = (uint8Array, fallbackEncodingName)=>{
    let encoding = fallbackEncodingName;
    if (!exports.isSupported(encoding)) {
        throw new RangeError(`"${encoding}" is not a supported encoding name`);
    }
    const bomEncoding = exports.getBOMEncoding(uint8Array);
    if (bomEncoding !== null) {
        encoding = bomEncoding;
    // iconv-lite will strip BOMs for us, so no need to do the extra byte removal that the spec does.
    // Note that we won't end up in the x-user-defined case when there's a bomEncoding.
    }
    if (encoding === "x-user-defined") {
        // https://encoding.spec.whatwg.org/#x-user-defined-decoder
        let result = "";
        for (const byte of uint8Array){
            if (byte <= 0x7F) {
                result += String.fromCodePoint(byte);
            } else {
                result += String.fromCodePoint(0xF780 + byte - 0x80);
            }
        }
        return result;
    }
    return iconvLite.decode(uint8Array, encoding);
};
// https://github.com/whatwg/html/issues/1910#issuecomment-254017369
exports.getBOMEncoding = (uint8Array)=>{
    if (uint8Array[0] === 0xFE && uint8Array[1] === 0xFF) {
        return "UTF-16BE";
    } else if (uint8Array[0] === 0xFF && uint8Array[1] === 0xFE) {
        return "UTF-16LE";
    } else if (uint8Array[0] === 0xEF && uint8Array[1] === 0xBB && uint8Array[2] === 0xBF) {
        return "UTF-8";
    }
    return null;
};
exports.isSupported = (name)=>{
    return supportedNamesSet.has(String(name));
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/encoding-sniffer@0.2.1/node_modules/encoding-sniffer/dist/esm/sniffer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResultType",
    ()=>ResultType,
    "STRINGS",
    ()=>STRINGS,
    "Sniffer",
    ()=>Sniffer,
    "getEncoding",
    ()=>getEncoding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$whatwg$2d$encoding$40$3$2e$1$2e$1$2f$node_modules$2f$whatwg$2d$encoding$2f$lib$2f$whatwg$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/whatwg-encoding.js [app-rsc] (ecmascript)");
;
// https://html.spec.whatwg.org/multipage/syntax.html#prescan-a-byte-stream-to-determine-its-encoding
var State;
(function(State) {
    // Before anything starts; can be any of BOM, UTF-16 XML declarations or meta tags
    State[State["Begin"] = 0] = "Begin";
    // Inside of a BOM
    State[State["BOM16BE"] = 1] = "BOM16BE";
    State[State["BOM16LE"] = 2] = "BOM16LE";
    State[State["BOM8"] = 3] = "BOM8";
    // XML prefix
    State[State["UTF16LE_XML_PREFIX"] = 4] = "UTF16LE_XML_PREFIX";
    State[State["BeginLT"] = 5] = "BeginLT";
    State[State["UTF16BE_XML_PREFIX"] = 6] = "UTF16BE_XML_PREFIX";
    // Waiting for opening `<`
    State[State["BeforeTag"] = 7] = "BeforeTag";
    // After the opening `<`
    State[State["BeforeTagName"] = 8] = "BeforeTagName";
    // After `</`
    State[State["BeforeCloseTagName"] = 9] = "BeforeCloseTagName";
    // Beginning of a comment
    State[State["CommentStart"] = 10] = "CommentStart";
    // End of a comment
    State[State["CommentEnd"] = 11] = "CommentEnd";
    // A tag name that could be `meta`
    State[State["TagNameMeta"] = 12] = "TagNameMeta";
    // A tag name that is not `meta`
    State[State["TagNameOther"] = 13] = "TagNameOther";
    // XML declaration
    State[State["XMLDeclaration"] = 14] = "XMLDeclaration";
    State[State["XMLDeclarationBeforeEncoding"] = 15] = "XMLDeclarationBeforeEncoding";
    State[State["XMLDeclarationAfterEncoding"] = 16] = "XMLDeclarationAfterEncoding";
    State[State["XMLDeclarationBeforeValue"] = 17] = "XMLDeclarationBeforeValue";
    State[State["XMLDeclarationValue"] = 18] = "XMLDeclarationValue";
    // Anything that looks like a tag, but doesn't fit in the above categories
    State[State["WeirdTag"] = 19] = "WeirdTag";
    State[State["BeforeAttribute"] = 20] = "BeforeAttribute";
    /*
     * Attributes in meta tag — we compare them to our set here, and back out
     * We care about four attributes: http-equiv, content-type, content, charset
     */ State[State["MetaAttribHttpEquiv"] = 21] = "MetaAttribHttpEquiv";
    // The value has to be `content-type`
    State[State["MetaAttribHttpEquivValue"] = 22] = "MetaAttribHttpEquivValue";
    State[State["MetaAttribC"] = 23] = "MetaAttribC";
    State[State["MetaAttribContent"] = 24] = "MetaAttribContent";
    State[State["MetaAttribCharset"] = 25] = "MetaAttribCharset";
    // Waiting for whitespace
    State[State["MetaAttribAfterName"] = 26] = "MetaAttribAfterName";
    State[State["MetaContentValueQuotedBeforeEncoding"] = 27] = "MetaContentValueQuotedBeforeEncoding";
    State[State["MetaContentValueQuotedAfterEncoding"] = 28] = "MetaContentValueQuotedAfterEncoding";
    State[State["MetaContentValueQuotedBeforeValue"] = 29] = "MetaContentValueQuotedBeforeValue";
    State[State["MetaContentValueQuotedValueQuoted"] = 30] = "MetaContentValueQuotedValueQuoted";
    State[State["MetaContentValueQuotedValueUnquoted"] = 31] = "MetaContentValueQuotedValueUnquoted";
    State[State["MetaContentValueUnquotedBeforeEncoding"] = 32] = "MetaContentValueUnquotedBeforeEncoding";
    State[State["MetaContentValueUnquotedBeforeValue"] = 33] = "MetaContentValueUnquotedBeforeValue";
    State[State["MetaContentValueUnquotedValueQuoted"] = 34] = "MetaContentValueUnquotedValueQuoted";
    State[State["MetaContentValueUnquotedValueUnquoted"] = 35] = "MetaContentValueUnquotedValueUnquoted";
    State[State["AnyAttribName"] = 36] = "AnyAttribName";
    // After the name of an attribute, before the equals sign
    State[State["AfterAttributeName"] = 37] = "AfterAttributeName";
    // After `=`
    State[State["BeforeAttributeValue"] = 38] = "BeforeAttributeValue";
    State[State["AttributeValueQuoted"] = 39] = "AttributeValueQuoted";
    State[State["AttributeValueUnquoted"] = 40] = "AttributeValueUnquoted";
})(State || (State = {}));
var ResultType;
(function(ResultType) {
    // Byte order mark
    ResultType[ResultType["BOM"] = 0] = "BOM";
    // User- or transport layer-defined
    ResultType[ResultType["PASSED"] = 1] = "PASSED";
    // XML prefixes
    ResultType[ResultType["XML_PREFIX"] = 2] = "XML_PREFIX";
    // Meta tag
    ResultType[ResultType["META_TAG"] = 3] = "META_TAG";
    // XML encoding
    ResultType[ResultType["XML_ENCODING"] = 4] = "XML_ENCODING";
    // Default
    ResultType[ResultType["DEFAULT"] = 5] = "DEFAULT";
})(ResultType || (ResultType = {}));
var AttribType;
(function(AttribType) {
    AttribType[AttribType["None"] = 0] = "None";
    AttribType[AttribType["HttpEquiv"] = 1] = "HttpEquiv";
    AttribType[AttribType["Content"] = 2] = "Content";
    AttribType[AttribType["Charset"] = 3] = "Charset";
})(AttribType || (AttribType = {}));
var Chars;
(function(Chars) {
    Chars[Chars["NIL"] = 0] = "NIL";
    Chars[Chars["TAB"] = 9] = "TAB";
    Chars[Chars["LF"] = 10] = "LF";
    Chars[Chars["CR"] = 13] = "CR";
    Chars[Chars["SPACE"] = 32] = "SPACE";
    Chars[Chars["EXCLAMATION"] = 33] = "EXCLAMATION";
    Chars[Chars["DQUOTE"] = 34] = "DQUOTE";
    Chars[Chars["SQUOTE"] = 39] = "SQUOTE";
    Chars[Chars["DASH"] = 45] = "DASH";
    Chars[Chars["SLASH"] = 47] = "SLASH";
    Chars[Chars["SEMICOLON"] = 59] = "SEMICOLON";
    Chars[Chars["LT"] = 60] = "LT";
    Chars[Chars["EQUALS"] = 61] = "EQUALS";
    Chars[Chars["GT"] = 62] = "GT";
    Chars[Chars["QUESTION"] = 63] = "QUESTION";
    Chars[Chars["UpperA"] = 65] = "UpperA";
    Chars[Chars["UpperZ"] = 90] = "UpperZ";
    Chars[Chars["LowerA"] = 97] = "LowerA";
    Chars[Chars["LowerZ"] = 122] = "LowerZ";
})(Chars || (Chars = {}));
const SPACE_CHARACTERS = new Set([
    Chars.SPACE,
    Chars.LF,
    Chars.CR,
    Chars.TAB
]);
const END_OF_UNQUOTED_ATTRIBUTE_VALUE = new Set([
    Chars.SPACE,
    Chars.LF,
    Chars.CR,
    Chars.TAB,
    Chars.GT
]);
function toUint8Array(str) {
    const arr = new Uint8Array(str.length);
    for(let i = 0; i < str.length; i++){
        arr[i] = str.charCodeAt(i);
    }
    return arr;
}
const STRINGS = {
    UTF8_BOM: new Uint8Array([
        0xef,
        0xbb,
        0xbf
    ]),
    UTF16LE_BOM: new Uint8Array([
        0xff,
        0xfe
    ]),
    UTF16BE_BOM: new Uint8Array([
        0xfe,
        0xff
    ]),
    UTF16LE_XML_PREFIX: new Uint8Array([
        0x3c,
        0x0,
        0x3f,
        0x0,
        0x78,
        0x0
    ]),
    UTF16BE_XML_PREFIX: new Uint8Array([
        0x0,
        0x3c,
        0x0,
        0x3f,
        0x0,
        0x78
    ]),
    XML_DECLARATION: toUint8Array("<?xml"),
    ENCODING: toUint8Array("encoding"),
    META: toUint8Array("meta"),
    HTTP_EQUIV: toUint8Array("http-equiv"),
    CONTENT: toUint8Array("content"),
    CONTENT_TYPE: toUint8Array("content-type"),
    CHARSET: toUint8Array("charset"),
    COMMENT_START: toUint8Array("<!--"),
    COMMENT_END: toUint8Array("-->")
};
function isAsciiAlpha(c) {
    return c >= Chars.UpperA && c <= Chars.UpperZ || c >= Chars.LowerA && c <= Chars.LowerZ;
}
function isQuote(c) {
    return c === Chars.DQUOTE || c === Chars.SQUOTE;
}
class Sniffer {
    setResult(label, type) {
        if (this.resultType === ResultType.DEFAULT || this.resultType > type) {
            const encoding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$whatwg$2d$encoding$40$3$2e$1$2e$1$2f$node_modules$2f$whatwg$2d$encoding$2f$lib$2f$whatwg$2d$encoding$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["labelToName"])(label);
            if (encoding) {
                this.encoding = // Check if we are in a meta tag and the encoding is `x-user-defined`
                type === ResultType.META_TAG && encoding === "x-user-defined" ? "windows-1252" : (type === ResultType.META_TAG || type === ResultType.XML_ENCODING) && (encoding === "UTF-16LE" || encoding === "UTF-16BE") ? "UTF-8" : encoding;
                this.resultType = type;
            }
        }
    }
    constructor({ maxBytes = 1024, userEncoding, transportLayerEncodingLabel, defaultEncoding } = {}){
        /** The offset of the previous buffers. */ this.offset = 0;
        this.state = State.Begin;
        this.sectionIndex = 0;
        this.attribType = AttribType.None;
        /**
         * Indicates if the `http-equiv` is `content-type`.
         *
         * Initially `null`, a boolean when a value is found.
         */ this.gotPragma = null;
        this.needsPragma = null;
        this.inMetaTag = false;
        this.encoding = "windows-1252";
        this.resultType = ResultType.DEFAULT;
        this.quoteCharacter = 0;
        this.attributeValue = [];
        this.maxBytes = maxBytes;
        if (userEncoding) {
            this.setResult(userEncoding, ResultType.PASSED);
        }
        if (transportLayerEncodingLabel) {
            this.setResult(transportLayerEncodingLabel, ResultType.PASSED);
        }
        if (defaultEncoding) {
            this.setResult(defaultEncoding, ResultType.DEFAULT);
        }
    }
    stateBegin(c) {
        switch(c){
            case STRINGS.UTF16BE_BOM[0]:
                {
                    this.state = State.BOM16BE;
                    break;
                }
            case STRINGS.UTF16LE_BOM[0]:
                {
                    this.state = State.BOM16LE;
                    break;
                }
            case STRINGS.UTF8_BOM[0]:
                {
                    this.sectionIndex = 1;
                    this.state = State.BOM8;
                    break;
                }
            case Chars.NIL:
                {
                    this.state = State.UTF16BE_XML_PREFIX;
                    this.sectionIndex = 1;
                    break;
                }
            case Chars.LT:
                {
                    this.state = State.BeginLT;
                    break;
                }
            default:
                {
                    this.state = State.BeforeTag;
                }
        }
    }
    stateBeginLT(c) {
        if (c === Chars.NIL) {
            this.state = State.UTF16LE_XML_PREFIX;
            this.sectionIndex = 2;
        } else if (c === Chars.QUESTION) {
            this.state = State.XMLDeclaration;
            this.sectionIndex = 2;
        } else {
            this.state = State.BeforeTagName;
            this.stateBeforeTagName(c);
        }
    }
    stateUTF16BE_XML_PREFIX(c) {
        // Advance position in the section
        if (this.advanceSection(STRINGS.UTF16BE_XML_PREFIX, c)) {
            if (this.sectionIndex === STRINGS.UTF16BE_XML_PREFIX.length) {
                // We have the whole prefix
                this.setResult("utf-16be", ResultType.XML_PREFIX);
            }
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateUTF16LE_XML_PREFIX(c) {
        // Advance position in the section
        if (this.advanceSection(STRINGS.UTF16LE_XML_PREFIX, c)) {
            if (this.sectionIndex === STRINGS.UTF16LE_XML_PREFIX.length) {
                // We have the whole prefix
                this.setResult("utf-16le", ResultType.XML_PREFIX);
            }
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateBOM16LE(c) {
        if (c === STRINGS.UTF16LE_BOM[1]) {
            this.setResult("utf-16le", ResultType.BOM);
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateBOM16BE(c) {
        if (c === STRINGS.UTF16BE_BOM[1]) {
            this.setResult("utf-16be", ResultType.BOM);
        } else {
            this.state = State.BeforeTag;
            this.stateBeforeTag(c);
        }
    }
    stateBOM8(c) {
        if (this.advanceSection(STRINGS.UTF8_BOM, c) && this.sectionIndex === STRINGS.UTF8_BOM.length) {
            this.setResult("utf-8", ResultType.BOM);
        }
    }
    stateBeforeTag(c) {
        if (c === Chars.LT) {
            this.state = State.BeforeTagName;
            this.inMetaTag = false;
        }
    }
    /**
     * We have seen a `<`, and now have to figure out what to do.
     *
     * Options:
     *  - `<meta`
     *  - Any other tag
     *  - A closing tag
     *  - `<!--`
     *  - An XML declaration
     *
     */ stateBeforeTagName(c) {
        if (isAsciiAlpha(c)) {
            if ((c | 0x20) === STRINGS.META[0]) {
                this.sectionIndex = 1;
                this.state = State.TagNameMeta;
            } else {
                this.state = State.TagNameOther;
            }
        } else switch(c){
            case Chars.SLASH:
                {
                    this.state = State.BeforeCloseTagName;
                    break;
                }
            case Chars.EXCLAMATION:
                {
                    this.state = State.CommentStart;
                    this.sectionIndex = 2;
                    break;
                }
            case Chars.QUESTION:
                {
                    this.state = State.WeirdTag;
                    break;
                }
            default:
                {
                    this.state = State.BeforeTag;
                    this.stateBeforeTag(c);
                }
        }
    }
    stateBeforeCloseTagName(c) {
        this.state = isAsciiAlpha(c) ? State.TagNameOther : State.WeirdTag;
    }
    stateCommentStart(c) {
        if (this.advanceSection(STRINGS.COMMENT_START, c)) {
            if (this.sectionIndex === STRINGS.COMMENT_START.length) {
                this.state = State.CommentEnd;
                // The -- of the comment start can be part of the end.
                this.sectionIndex = 2;
            }
        } else {
            this.state = State.WeirdTag;
            this.stateWeirdTag(c);
        }
    }
    stateCommentEnd(c) {
        if (this.advanceSection(STRINGS.COMMENT_END, c)) {
            if (this.sectionIndex === STRINGS.COMMENT_END.length) {
                this.state = State.BeforeTag;
            }
        } else if (c === Chars.DASH) {
            /*
             * If we are here, we know we expected a `>` above.
             * Set this to 2, to support many dashes before the closing `>`.
             */ this.sectionIndex = 2;
        }
    }
    /**
     * Any section starting with `<!`, `<?`, `</`, without being a closing tag or comment.
     */ stateWeirdTag(c) {
        if (c === Chars.GT) {
            this.state = State.BeforeTag;
        }
    }
    /**
     * Advances the section, ignoring upper/lower case.
     *
     * Make sure the section has left-over characters before calling.
     *
     * @returns `false` if we did not match the section.
     */ advanceSectionIC(section, c) {
        return this.advanceSection(section, c | 0x20);
    }
    /**
     * Advances the section.
     *
     * Make sure the section has left-over characters before calling.
     *
     * @returns `false` if we did not match the section.
     */ advanceSection(section, c) {
        if (section[this.sectionIndex] === c) {
            this.sectionIndex++;
            return true;
        }
        this.sectionIndex = 0;
        return false;
    }
    stateTagNameMeta(c) {
        if (this.sectionIndex < STRINGS.META.length) {
            if (this.advanceSectionIC(STRINGS.META, c)) {
                return;
            }
        } else if (SPACE_CHARACTERS.has(c)) {
            this.inMetaTag = true;
            this.gotPragma = null;
            this.needsPragma = null;
            this.state = State.BeforeAttribute;
            return;
        }
        this.state = State.TagNameOther;
        // Reconsume in case there is a `>`.
        this.stateTagNameOther(c);
    }
    stateTagNameOther(c) {
        if (SPACE_CHARACTERS.has(c)) {
            this.state = State.BeforeAttribute;
        } else if (c === Chars.GT) {
            this.state = State.BeforeTag;
        }
    }
    stateBeforeAttribute(c) {
        if (SPACE_CHARACTERS.has(c)) return;
        if (this.inMetaTag) {
            const lower = c | 0x20;
            if (lower === STRINGS.HTTP_EQUIV[0]) {
                this.sectionIndex = 1;
                this.state = State.MetaAttribHttpEquiv;
                return;
            } else if (lower === STRINGS.CHARSET[0]) {
                this.sectionIndex = 1;
                this.state = State.MetaAttribC;
                return;
            }
        }
        this.state = c === Chars.SLASH || c === Chars.GT ? State.BeforeTag : State.AnyAttribName;
    }
    handleMetaAttrib(c, section, type) {
        if (this.advanceSectionIC(section, c)) {
            if (this.sectionIndex === section.length) {
                this.attribType = type;
                this.state = State.MetaAttribAfterName;
            }
        } else {
            this.state = State.AnyAttribName;
            this.stateAnyAttribName(c);
        }
    }
    stateMetaAttribHttpEquiv(c) {
        this.handleMetaAttrib(c, STRINGS.HTTP_EQUIV, AttribType.HttpEquiv);
    }
    stateMetaAttribC(c) {
        const lower = c | 0x20;
        if (lower === STRINGS.CHARSET[1]) {
            this.sectionIndex = 2;
            this.state = State.MetaAttribCharset;
        } else if (lower === STRINGS.CONTENT[1]) {
            this.sectionIndex = 2;
            this.state = State.MetaAttribContent;
        } else {
            this.state = State.AnyAttribName;
            this.stateAnyAttribName(c);
        }
    }
    stateMetaAttribCharset(c) {
        this.handleMetaAttrib(c, STRINGS.CHARSET, AttribType.Charset);
    }
    stateMetaAttribContent(c) {
        this.handleMetaAttrib(c, STRINGS.CONTENT, AttribType.Content);
    }
    stateMetaAttribAfterName(c) {
        if (SPACE_CHARACTERS.has(c) || c === Chars.EQUALS) {
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
        } else {
            this.state = State.AnyAttribName;
            this.stateAnyAttribName(c);
        }
    }
    stateAnyAttribName(c) {
        if (SPACE_CHARACTERS.has(c)) {
            this.attribType = AttribType.None;
            this.state = State.AfterAttributeName;
        } else if (c === Chars.SLASH || c === Chars.GT) {
            this.state = State.BeforeTag;
        } else if (c === Chars.EQUALS) {
            this.state = State.BeforeAttributeValue;
        }
    }
    stateAfterAttributeName(c) {
        if (SPACE_CHARACTERS.has(c)) return;
        if (c === Chars.EQUALS) {
            this.state = State.BeforeAttributeValue;
        } else {
            this.state = State.BeforeAttribute;
            this.stateBeforeAttribute(c);
        }
    }
    stateBeforeAttributeValue(c) {
        if (SPACE_CHARACTERS.has(c)) return;
        this.attributeValue.length = 0;
        this.sectionIndex = 0;
        if (isQuote(c)) {
            this.quoteCharacter = c;
            this.state = this.attribType === AttribType.Content ? State.MetaContentValueQuotedBeforeEncoding : this.attribType === AttribType.HttpEquiv ? State.MetaAttribHttpEquivValue : State.AttributeValueQuoted;
        } else if (this.attribType === AttribType.Content) {
            this.state = State.MetaContentValueUnquotedBeforeEncoding;
            this.stateMetaContentValueUnquotedBeforeEncoding(c);
        } else if (this.attribType === AttribType.HttpEquiv) {
            // We use `quoteCharacter = 0` to signify that the value is unquoted.
            this.quoteCharacter = 0;
            this.sectionIndex = 0;
            this.state = State.MetaAttribHttpEquivValue;
            this.stateMetaAttribHttpEquivValue(c);
        } else {
            this.state = State.AttributeValueUnquoted;
            this.stateAttributeValueUnquoted(c);
        }
    }
    // The value has to be `content-type`
    stateMetaAttribHttpEquivValue(c) {
        if (this.sectionIndex === STRINGS.CONTENT_TYPE.length) {
            if (this.quoteCharacter === 0 ? END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c) : c === this.quoteCharacter) {
                if (this.needsPragma !== null) {
                    this.setResult(this.needsPragma, ResultType.META_TAG);
                } else if (this.gotPragma === null) {
                    this.gotPragma = true;
                }
                this.state = State.BeforeAttribute;
                return;
            }
        } else if (this.advanceSectionIC(STRINGS.CONTENT_TYPE, c)) {
            return;
        }
        this.gotPragma = false;
        if (this.quoteCharacter === 0) {
            this.state = State.AttributeValueUnquoted;
            this.stateAttributeValueUnquoted(c);
        } else {
            this.state = State.AttributeValueQuoted;
            this.stateAttributeValueQuoted(c);
        }
    }
    handleMetaContentValue() {
        if (this.attributeValue.length === 0) return;
        const encoding = String.fromCharCode(...this.attributeValue);
        if (this.gotPragma) {
            this.setResult(encoding, ResultType.META_TAG);
        } else if (this.needsPragma === null) {
            // Don't override a previous result.
            this.needsPragma = encoding;
        }
        this.attributeValue.length = 0;
    }
    handleAttributeValue() {
        if (this.attribType === AttribType.Charset) {
            this.setResult(String.fromCharCode(...this.attributeValue), ResultType.META_TAG);
        }
    }
    stateAttributeValueUnquoted(c) {
        if (SPACE_CHARACTERS.has(c)) {
            this.handleAttributeValue();
            this.state = State.BeforeAttribute;
        } else if (c === Chars.SLASH || c === Chars.GT) {
            this.handleAttributeValue();
            this.state = State.BeforeTag;
        } else if (this.attribType === AttribType.Charset) {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    findMetaContentEncoding(c) {
        if (this.advanceSectionIC(STRINGS.CHARSET, c)) {
            if (this.sectionIndex === STRINGS.CHARSET.length) {
                return true;
            }
        } else {
            // If we encountered another `c`, assume we started over.
            this.sectionIndex = Number(c === STRINGS.CHARSET[0]);
        }
        return false;
    }
    stateMetaContentValueUnquotedBeforeEncoding(c) {
        if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c)) {
            this.stateAttributeValueUnquoted(c);
        } else if (this.sectionIndex === STRINGS.CHARSET.length) {
            if (c === Chars.EQUALS) {
                this.state = State.MetaContentValueUnquotedBeforeValue;
            }
        } else {
            this.findMetaContentEncoding(c);
        }
    }
    stateMetaContentValueUnquotedBeforeValue(c) {
        if (isQuote(c)) {
            this.quoteCharacter = c;
            this.state = State.MetaContentValueUnquotedValueQuoted;
        } else if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c)) {
            // Can't have spaces here, as it would no longer be part of the attribute value.
            this.stateAttributeValueUnquoted(c);
        } else {
            this.state = State.MetaContentValueUnquotedValueUnquoted;
            this.stateMetaContentValueUnquotedValueUnquoted(c);
        }
    }
    stateMetaContentValueUnquotedValueQuoted(c) {
        if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c)) {
            // Quotes weren't matched, so we're done.
            this.stateAttributeValueUnquoted(c);
        } else if (c === this.quoteCharacter) {
            this.handleMetaContentValue();
            this.state = State.AttributeValueUnquoted;
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueUnquotedValueUnquoted(c) {
        if (END_OF_UNQUOTED_ATTRIBUTE_VALUE.has(c) || c === Chars.SEMICOLON) {
            this.handleMetaContentValue();
            this.state = State.AttributeValueUnquoted;
            this.stateAttributeValueUnquoted(c);
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueQuotedValueUnquoted(c) {
        if (isQuote(c) || SPACE_CHARACTERS.has(c) || c === Chars.SEMICOLON) {
            this.handleMetaContentValue();
            // We are done with the value, but might not be at the end of the attribute
            this.state = State.AttributeValueQuoted;
            this.stateAttributeValueQuoted(c);
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueQuotedValueQuoted(c) {
        if (isQuote(c)) {
            // We have reached the end of our value.
            if (c !== this.quoteCharacter) {
                // Only handle the value if inner quotes were matched.
                this.handleMetaContentValue();
            }
            this.state = State.AttributeValueQuoted;
            this.stateAttributeValueQuoted(c);
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    stateMetaContentValueQuotedBeforeEncoding(c) {
        if (c === this.quoteCharacter) {
            this.stateAttributeValueQuoted(c);
        } else if (this.findMetaContentEncoding(c)) {
            this.state = State.MetaContentValueQuotedAfterEncoding;
        }
    }
    stateMetaContentValueQuotedAfterEncoding(c) {
        if (c === Chars.EQUALS) {
            this.state = State.MetaContentValueQuotedBeforeValue;
        } else if (!SPACE_CHARACTERS.has(c)) {
            // Look for the next encoding
            this.state = State.MetaContentValueQuotedBeforeEncoding;
            this.stateMetaContentValueQuotedBeforeEncoding(c);
        }
    }
    stateMetaContentValueQuotedBeforeValue(c) {
        if (c === this.quoteCharacter) {
            this.stateAttributeValueQuoted(c);
        } else if (isQuote(c)) {
            this.state = State.MetaContentValueQuotedValueQuoted;
        } else if (!SPACE_CHARACTERS.has(c)) {
            this.state = State.MetaContentValueQuotedValueUnquoted;
            this.stateMetaContentValueQuotedValueUnquoted(c);
        }
    }
    stateAttributeValueQuoted(c) {
        if (c === this.quoteCharacter) {
            this.handleAttributeValue();
            this.state = State.BeforeAttribute;
        } else if (this.attribType === AttribType.Charset) {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    // Read STRINGS.XML_DECLARATION
    stateXMLDeclaration(c) {
        if (this.advanceSection(STRINGS.XML_DECLARATION, c)) {
            if (this.sectionIndex === STRINGS.XML_DECLARATION.length) {
                this.sectionIndex = 0;
                this.state = State.XMLDeclarationBeforeEncoding;
            }
        } else {
            this.state = State.WeirdTag;
        }
    }
    stateXMLDeclarationBeforeEncoding(c) {
        if (this.advanceSection(STRINGS.ENCODING, c)) {
            if (this.sectionIndex === STRINGS.ENCODING.length) {
                this.state = State.XMLDeclarationAfterEncoding;
            }
        } else if (c === Chars.GT) {
            this.state = State.BeforeTag;
        } else {
            // If we encountered another `c`, assume we started over.
            this.sectionIndex = Number(c === STRINGS.ENCODING[0]);
        }
    }
    stateXMLDeclarationAfterEncoding(c) {
        if (c === Chars.EQUALS) {
            this.state = State.XMLDeclarationBeforeValue;
        } else if (c > Chars.SPACE) {
            this.state = State.WeirdTag;
            this.stateWeirdTag(c);
        }
    }
    stateXMLDeclarationBeforeValue(c) {
        if (isQuote(c)) {
            this.attributeValue.length = 0;
            this.state = State.XMLDeclarationValue;
        } else if (c > Chars.SPACE) {
            this.state = State.WeirdTag;
            this.stateWeirdTag(c);
        }
    }
    stateXMLDeclarationValue(c) {
        if (isQuote(c)) {
            this.setResult(String.fromCharCode(...this.attributeValue), ResultType.XML_ENCODING);
            this.state = State.WeirdTag;
        } else if (c === Chars.GT) {
            this.state = State.BeforeTag;
        } else if (c <= Chars.SPACE) {
            this.state = State.WeirdTag;
        } else {
            this.attributeValue.push(c | (c >= 0x41 && c <= 0x5a ? 0x20 : 0));
        }
    }
    write(buffer) {
        let index = 0;
        for(; index < buffer.length && this.offset + index < this.maxBytes; index++){
            const c = buffer[index];
            switch(this.state){
                case State.Begin:
                    {
                        this.stateBegin(c);
                        break;
                    }
                case State.BOM16BE:
                    {
                        this.stateBOM16BE(c);
                        break;
                    }
                case State.BOM16LE:
                    {
                        this.stateBOM16LE(c);
                        break;
                    }
                case State.BOM8:
                    {
                        this.stateBOM8(c);
                        break;
                    }
                case State.UTF16LE_XML_PREFIX:
                    {
                        this.stateUTF16LE_XML_PREFIX(c);
                        break;
                    }
                case State.BeginLT:
                    {
                        this.stateBeginLT(c);
                        break;
                    }
                case State.UTF16BE_XML_PREFIX:
                    {
                        this.stateUTF16BE_XML_PREFIX(c);
                        break;
                    }
                case State.BeforeTag:
                    {
                        // Optimization: Skip all characters until we find a `<`
                        const idx = buffer.indexOf(Chars.LT, index);
                        if (idx === -1) {
                            // We are done with this buffer. Stay in the state and try on the next one.
                            index = buffer.length;
                        } else {
                            index = idx;
                            this.stateBeforeTag(Chars.LT);
                        }
                        break;
                    }
                case State.BeforeTagName:
                    {
                        this.stateBeforeTagName(c);
                        break;
                    }
                case State.BeforeCloseTagName:
                    {
                        this.stateBeforeCloseTagName(c);
                        break;
                    }
                case State.CommentStart:
                    {
                        this.stateCommentStart(c);
                        break;
                    }
                case State.CommentEnd:
                    {
                        this.stateCommentEnd(c);
                        break;
                    }
                case State.TagNameMeta:
                    {
                        this.stateTagNameMeta(c);
                        break;
                    }
                case State.TagNameOther:
                    {
                        this.stateTagNameOther(c);
                        break;
                    }
                case State.XMLDeclaration:
                    {
                        this.stateXMLDeclaration(c);
                        break;
                    }
                case State.XMLDeclarationBeforeEncoding:
                    {
                        this.stateXMLDeclarationBeforeEncoding(c);
                        break;
                    }
                case State.XMLDeclarationAfterEncoding:
                    {
                        this.stateXMLDeclarationAfterEncoding(c);
                        break;
                    }
                case State.XMLDeclarationBeforeValue:
                    {
                        this.stateXMLDeclarationBeforeValue(c);
                        break;
                    }
                case State.XMLDeclarationValue:
                    {
                        this.stateXMLDeclarationValue(c);
                        break;
                    }
                case State.WeirdTag:
                    {
                        this.stateWeirdTag(c);
                        break;
                    }
                case State.BeforeAttribute:
                    {
                        this.stateBeforeAttribute(c);
                        break;
                    }
                case State.MetaAttribHttpEquiv:
                    {
                        this.stateMetaAttribHttpEquiv(c);
                        break;
                    }
                case State.MetaAttribHttpEquivValue:
                    {
                        this.stateMetaAttribHttpEquivValue(c);
                        break;
                    }
                case State.MetaAttribC:
                    {
                        this.stateMetaAttribC(c);
                        break;
                    }
                case State.MetaAttribContent:
                    {
                        this.stateMetaAttribContent(c);
                        break;
                    }
                case State.MetaAttribCharset:
                    {
                        this.stateMetaAttribCharset(c);
                        break;
                    }
                case State.MetaAttribAfterName:
                    {
                        this.stateMetaAttribAfterName(c);
                        break;
                    }
                case State.MetaContentValueQuotedBeforeEncoding:
                    {
                        this.stateMetaContentValueQuotedBeforeEncoding(c);
                        break;
                    }
                case State.MetaContentValueQuotedAfterEncoding:
                    {
                        this.stateMetaContentValueQuotedAfterEncoding(c);
                        break;
                    }
                case State.MetaContentValueQuotedBeforeValue:
                    {
                        this.stateMetaContentValueQuotedBeforeValue(c);
                        break;
                    }
                case State.MetaContentValueQuotedValueQuoted:
                    {
                        this.stateMetaContentValueQuotedValueQuoted(c);
                        break;
                    }
                case State.MetaContentValueQuotedValueUnquoted:
                    {
                        this.stateMetaContentValueQuotedValueUnquoted(c);
                        break;
                    }
                case State.MetaContentValueUnquotedBeforeEncoding:
                    {
                        this.stateMetaContentValueUnquotedBeforeEncoding(c);
                        break;
                    }
                case State.MetaContentValueUnquotedBeforeValue:
                    {
                        this.stateMetaContentValueUnquotedBeforeValue(c);
                        break;
                    }
                case State.MetaContentValueUnquotedValueQuoted:
                    {
                        this.stateMetaContentValueUnquotedValueQuoted(c);
                        break;
                    }
                case State.MetaContentValueUnquotedValueUnquoted:
                    {
                        this.stateMetaContentValueUnquotedValueUnquoted(c);
                        break;
                    }
                case State.AnyAttribName:
                    {
                        this.stateAnyAttribName(c);
                        break;
                    }
                case State.AfterAttributeName:
                    {
                        this.stateAfterAttributeName(c);
                        break;
                    }
                case State.BeforeAttributeValue:
                    {
                        this.stateBeforeAttributeValue(c);
                        break;
                    }
                case State.AttributeValueQuoted:
                    {
                        this.stateAttributeValueQuoted(c);
                        break;
                    }
                case State.AttributeValueUnquoted:
                    {
                        this.stateAttributeValueUnquoted(c);
                        break;
                    }
            }
        }
        this.offset += index;
    }
}
function getEncoding(buffer, options) {
    const sniffer = new Sniffer(options);
    sniffer.write(buffer);
    return sniffer.encoding;
} //# sourceMappingURL=sniffer.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/encoding-sniffer@0.2.1/node_modules/encoding-sniffer/dist/esm/index.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecodeStream",
    ()=>DecodeStream,
    "decodeBuffer",
    ()=>decodeBuffer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$iconv$2d$lite$40$0$2e$6$2e$3$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/iconv-lite@0.6.3/node_modules/iconv-lite/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$encoding$2d$sniffer$40$0$2e$2$2e$1$2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/encoding-sniffer@0.2.1/node_modules/encoding-sniffer/dist/esm/sniffer.js [app-rsc] (ecmascript)");
;
;
;
function decodeBuffer(buffer, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$iconv$2d$lite$40$0$2e$6$2e$3$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].decode(buffer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$encoding$2d$sniffer$40$0$2e$2$2e$1$2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getEncoding"])(buffer, options));
}
class DecodeStream extends __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["Transform"] {
    constructor(options){
        var _a;
        super({
            decodeStrings: false,
            encoding: "utf-8"
        });
        this.buffers = [];
        /** The iconv decode stream. If it is set, we have read more than `options.maxBytes` bytes. */ this.iconv = null;
        this.readBytes = 0;
        this.sniffer = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$encoding$2d$sniffer$40$0$2e$2$2e$1$2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Sniffer"](options);
        this.maxBytes = (_a = options === null || options === void 0 ? void 0 : options.maxBytes) !== null && _a !== void 0 ? _a : 1024;
    }
    _transform(chunk, _encoding, callback) {
        if (this.readBytes < this.maxBytes) {
            this.sniffer.write(chunk);
            this.readBytes += chunk.length;
            if (this.readBytes < this.maxBytes) {
                this.buffers.push(chunk);
                callback();
                return;
            }
        }
        this.getIconvStream().write(chunk, callback);
    }
    getIconvStream() {
        if (this.iconv) {
            return this.iconv;
        }
        const stream = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$iconv$2d$lite$40$0$2e$6$2e$3$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].decodeStream(this.sniffer.encoding);
        stream.on("data", (chunk)=>this.push(chunk, "utf-8"));
        stream.on("end", ()=>this.push(null));
        this.iconv = stream;
        for (const buffer of this.buffers){
            stream.write(buffer);
        }
        this.buffers.length = 0;
        return stream;
    }
    _flush(callback) {
        this.getIconvStream().end(callback);
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

exports.removeLeadingAndTrailingHTTPWhitespace = (string)=>{
    return string.replace(/^[ \t\n\r]+/u, "").replace(/[ \t\n\r]+$/u, "");
};
exports.removeTrailingHTTPWhitespace = (string)=>{
    return string.replace(/[ \t\n\r]+$/u, "");
};
exports.isHTTPWhitespaceChar = (char)=>{
    return char === " " || char === "\t" || char === "\n" || char === "\r";
};
exports.solelyContainsHTTPTokenCodePoints = (string)=>{
    return /^[-!#$%&'*+.^_`|~A-Za-z0-9]*$/u.test(string);
};
exports.soleyContainsHTTPQuotedStringTokenCodePoints = (string)=>{
    return /^[\t\u0020-\u007E\u0080-\u00FF]*$/u.test(string);
};
exports.asciiLowercase = (string)=>{
    return string.replace(/[A-Z]/ug, (l)=>l.toLowerCase());
};
// This variant only implements it with the extract-value flag set.
exports.collectAnHTTPQuotedString = (input, position)=>{
    let value = "";
    position++;
    while(true){
        while(position < input.length && input[position] !== "\"" && input[position] !== "\\"){
            value += input[position];
            ++position;
        }
        if (position >= input.length) {
            break;
        }
        const quoteOrBackslash = input[position];
        ++position;
        if (quoteOrBackslash === "\\") {
            if (position >= input.length) {
                value += "\\";
                break;
            }
            value += input[position];
            ++position;
        } else {
            break;
        }
    }
    return [
        value,
        position
    ];
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type-parameters.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { asciiLowercase, solelyContainsHTTPTokenCodePoints, soleyContainsHTTPQuotedStringTokenCodePoints } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = class MIMETypeParameters {
    constructor(map){
        this._map = map;
    }
    get size() {
        return this._map.size;
    }
    get(name) {
        name = asciiLowercase(String(name));
        return this._map.get(name);
    }
    has(name) {
        name = asciiLowercase(String(name));
        return this._map.has(name);
    }
    set(name, value) {
        name = asciiLowercase(String(name));
        value = String(value);
        if (!solelyContainsHTTPTokenCodePoints(name)) {
            throw new Error(`Invalid MIME type parameter name "${name}": only HTTP token code points are valid.`);
        }
        if (!soleyContainsHTTPQuotedStringTokenCodePoints(value)) {
            throw new Error(`Invalid MIME type parameter value "${value}": only HTTP quoted-string token code points are ` + `valid.`);
        }
        return this._map.set(name, value);
    }
    clear() {
        this._map.clear();
    }
    delete(name) {
        name = asciiLowercase(String(name));
        return this._map.delete(name);
    }
    forEach(callbackFn, thisArg) {
        this._map.forEach(callbackFn, thisArg);
    }
    keys() {
        return this._map.keys();
    }
    values() {
        return this._map.values();
    }
    entries() {
        return this._map.entries();
    }
    [Symbol.iterator]() {
        return this._map[Symbol.iterator]();
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/parser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { removeLeadingAndTrailingHTTPWhitespace, removeTrailingHTTPWhitespace, isHTTPWhitespaceChar, solelyContainsHTTPTokenCodePoints, soleyContainsHTTPQuotedStringTokenCodePoints, asciiLowercase, collectAnHTTPQuotedString } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = (input)=>{
    input = removeLeadingAndTrailingHTTPWhitespace(input);
    let position = 0;
    let type = "";
    while(position < input.length && input[position] !== "/"){
        type += input[position];
        ++position;
    }
    if (type.length === 0 || !solelyContainsHTTPTokenCodePoints(type)) {
        return null;
    }
    if (position >= input.length) {
        return null;
    }
    // Skips past "/"
    ++position;
    let subtype = "";
    while(position < input.length && input[position] !== ";"){
        subtype += input[position];
        ++position;
    }
    subtype = removeTrailingHTTPWhitespace(subtype);
    if (subtype.length === 0 || !solelyContainsHTTPTokenCodePoints(subtype)) {
        return null;
    }
    const mimeType = {
        type: asciiLowercase(type),
        subtype: asciiLowercase(subtype),
        parameters: new Map()
    };
    while(position < input.length){
        // Skip past ";"
        ++position;
        while(isHTTPWhitespaceChar(input[position])){
            ++position;
        }
        let parameterName = "";
        while(position < input.length && input[position] !== ";" && input[position] !== "="){
            parameterName += input[position];
            ++position;
        }
        parameterName = asciiLowercase(parameterName);
        if (position < input.length) {
            if (input[position] === ";") {
                continue;
            }
            // Skip past "="
            ++position;
        }
        let parameterValue = null;
        if (input[position] === "\"") {
            [parameterValue, position] = collectAnHTTPQuotedString(input, position);
            while(position < input.length && input[position] !== ";"){
                ++position;
            }
        } else {
            parameterValue = "";
            while(position < input.length && input[position] !== ";"){
                parameterValue += input[position];
                ++position;
            }
            parameterValue = removeTrailingHTTPWhitespace(parameterValue);
            if (parameterValue === "") {
                continue;
            }
        }
        if (parameterName.length > 0 && solelyContainsHTTPTokenCodePoints(parameterName) && soleyContainsHTTPQuotedStringTokenCodePoints(parameterValue) && !mimeType.parameters.has(parameterName)) {
            mimeType.parameters.set(parameterName, parameterValue);
        }
    }
    return mimeType;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/serializer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { solelyContainsHTTPTokenCodePoints } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = (mimeType)=>{
    let serialization = `${mimeType.type}/${mimeType.subtype}`;
    if (mimeType.parameters.size === 0) {
        return serialization;
    }
    for (let [name, value] of mimeType.parameters){
        serialization += ";";
        serialization += name;
        serialization += "=";
        if (!solelyContainsHTTPTokenCodePoints(value) || value.length === 0) {
            value = value.replace(/(["\\])/ug, "\\$1");
            value = `"${value}"`;
        }
        serialization += value;
    }
    return serialization;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MIMETypeParameters = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type-parameters.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/parser.js [app-rsc] (ecmascript)");
const serialize = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/serializer.js [app-rsc] (ecmascript)");
const { asciiLowercase, solelyContainsHTTPTokenCodePoints } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-rsc] (ecmascript)");
module.exports = class MIMEType {
    constructor(string){
        string = String(string);
        const result = parse(string);
        if (result === null) {
            throw new Error(`Could not parse MIME type string "${string}"`);
        }
        this._type = result.type;
        this._subtype = result.subtype;
        this._parameters = new MIMETypeParameters(result.parameters);
    }
    static parse(string) {
        try {
            return new this(string);
        } catch (e) {
            return null;
        }
    }
    get essence() {
        return `${this.type}/${this.subtype}`;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
            throw new Error("Invalid type: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
            throw new Error(`Invalid type ${value}: must contain only HTTP token code points`);
        }
        this._type = value;
    }
    get subtype() {
        return this._subtype;
    }
    set subtype(value) {
        value = asciiLowercase(String(value));
        if (value.length === 0) {
            throw new Error("Invalid subtype: must be a non-empty string");
        }
        if (!solelyContainsHTTPTokenCodePoints(value)) {
            throw new Error(`Invalid subtype ${value}: must contain only HTTP token code points`);
        }
        this._subtype = value;
    }
    get parameters() {
        return this._parameters;
    }
    toString() {
        // The serialize function works on both "MIME type records" (i.e. the results of parse) and on this class, since
        // this class's interface is identical.
        return serialize(this);
    }
    isJavaScript({ prohibitParameters = false } = {}) {
        switch(this._type){
            case "text":
                {
                    switch(this._subtype){
                        case "ecmascript":
                        case "javascript":
                        case "javascript1.0":
                        case "javascript1.1":
                        case "javascript1.2":
                        case "javascript1.3":
                        case "javascript1.4":
                        case "javascript1.5":
                        case "jscript":
                        case "livescript":
                        case "x-ecmascript":
                        case "x-javascript":
                            {
                                return !prohibitParameters || this._parameters.size === 0;
                            }
                        default:
                            {
                                return false;
                            }
                    }
                }
            case "application":
                {
                    switch(this._subtype){
                        case "ecmascript":
                        case "javascript":
                        case "x-ecmascript":
                        case "x-javascript":
                            {
                                return !prohibitParameters || this._parameters.size === 0;
                            }
                        default:
                            {
                                return false;
                            }
                    }
                }
            default:
                {
                    return false;
                }
        }
    }
    isXML() {
        return this._subtype === "xml" && (this._type === "text" || this._type === "application") || this._subtype.endsWith("+xml");
    }
    isHTML() {
        return this._subtype === "html" && this._type === "text";
    }
};
}),
];

//# sourceMappingURL=ecc1d__pnpm_1737f02e._.js.map