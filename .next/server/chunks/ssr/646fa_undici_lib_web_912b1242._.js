module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const corsSafeListedMethods = [
    'GET',
    'HEAD',
    'POST'
];
const corsSafeListedMethodsSet = new Set(corsSafeListedMethods);
const nullBodyStatus = [
    101,
    204,
    205,
    304
];
const redirectStatus = [
    301,
    302,
    303,
    307,
    308
];
const redirectStatusSet = new Set(redirectStatus);
/**
 * @see https://fetch.spec.whatwg.org/#block-bad-port
 */ const badPorts = [
    '1',
    '7',
    '9',
    '11',
    '13',
    '15',
    '17',
    '19',
    '20',
    '21',
    '22',
    '23',
    '25',
    '37',
    '42',
    '43',
    '53',
    '69',
    '77',
    '79',
    '87',
    '95',
    '101',
    '102',
    '103',
    '104',
    '109',
    '110',
    '111',
    '113',
    '115',
    '117',
    '119',
    '123',
    '135',
    '137',
    '139',
    '143',
    '161',
    '179',
    '389',
    '427',
    '465',
    '512',
    '513',
    '514',
    '515',
    '526',
    '530',
    '531',
    '532',
    '540',
    '548',
    '554',
    '556',
    '563',
    '587',
    '601',
    '636',
    '989',
    '990',
    '993',
    '995',
    '1719',
    '1720',
    '1723',
    '2049',
    '3659',
    '4045',
    '4190',
    '5060',
    '5061',
    '6000',
    '6566',
    '6665',
    '6666',
    '6667',
    '6668',
    '6669',
    '6679',
    '6697',
    '10080'
];
const badPortsSet = new Set(badPorts);
/**
 * @see https://w3c.github.io/webappsec-referrer-policy/#referrer-policy-header
 */ const referrerPolicyTokens = [
    'no-referrer',
    'no-referrer-when-downgrade',
    'same-origin',
    'origin',
    'strict-origin',
    'origin-when-cross-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url'
];
/**
 * @see https://w3c.github.io/webappsec-referrer-policy/#referrer-policies
 */ const referrerPolicy = [
    '',
    ...referrerPolicyTokens
];
const referrerPolicyTokensSet = new Set(referrerPolicyTokens);
const requestRedirect = [
    'follow',
    'manual',
    'error'
];
const safeMethods = [
    'GET',
    'HEAD',
    'OPTIONS',
    'TRACE'
];
const safeMethodsSet = new Set(safeMethods);
const requestMode = [
    'navigate',
    'same-origin',
    'no-cors',
    'cors'
];
const requestCredentials = [
    'omit',
    'same-origin',
    'include'
];
const requestCache = [
    'default',
    'no-store',
    'reload',
    'no-cache',
    'force-cache',
    'only-if-cached'
];
/**
 * @see https://fetch.spec.whatwg.org/#request-body-header-name
 */ const requestBodyHeader = [
    'content-encoding',
    'content-language',
    'content-location',
    'content-type',
    // See https://github.com/nodejs/undici/issues/2021
    // 'Content-Length' is a forbidden header name, which is typically
    // removed in the Headers implementation. However, undici doesn't
    // filter out headers, so we add it here.
    'content-length'
];
/**
 * @see https://fetch.spec.whatwg.org/#enumdef-requestduplex
 */ const requestDuplex = [
    'half'
];
/**
 * @see http://fetch.spec.whatwg.org/#forbidden-method
 */ const forbiddenMethods = [
    'CONNECT',
    'TRACE',
    'TRACK'
];
const forbiddenMethodsSet = new Set(forbiddenMethods);
const subresource = [
    'audio',
    'audioworklet',
    'font',
    'image',
    'manifest',
    'paintworklet',
    'script',
    'style',
    'track',
    'video',
    'xslt',
    ''
];
const subresourceSet = new Set(subresource);
module.exports = {
    subresource,
    forbiddenMethods,
    requestBodyHeader,
    referrerPolicy,
    requestRedirect,
    requestMode,
    requestCredentials,
    requestCache,
    redirectStatus,
    corsSafeListedMethods,
    nullBodyStatus,
    safeMethods,
    badPorts,
    requestDuplex,
    subresourceSet,
    badPortsSet,
    redirectStatusSet,
    corsSafeListedMethodsSet,
    safeMethodsSet,
    forbiddenMethodsSet,
    referrerPolicyTokens: referrerPolicyTokensSet
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/global.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// In case of breaking changes, increase the version
// number to avoid conflicts.
const globalOrigin = Symbol.for('undici.globalOrigin.1');
function getGlobalOrigin() {
    return globalThis[globalOrigin];
}
function setGlobalOrigin(newOrigin) {
    if (newOrigin === undefined) {
        Object.defineProperty(globalThis, globalOrigin, {
            value: undefined,
            writable: true,
            enumerable: false,
            configurable: false
        });
        return;
    }
    const parsedURL = new URL(newOrigin);
    if (parsedURL.protocol !== 'http:' && parsedURL.protocol !== 'https:') {
        throw new TypeError(`Only http & https urls are allowed, received ${parsedURL.protocol}`);
    }
    Object.defineProperty(globalThis, globalOrigin, {
        value: parsedURL,
        writable: true,
        enumerable: false,
        configurable: false
    });
}
module.exports = {
    getGlobalOrigin,
    setGlobalOrigin
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const encoder = new TextEncoder();
/**
 * @see https://mimesniff.spec.whatwg.org/#http-token-code-point
 */ const HTTP_TOKEN_CODEPOINTS = /^[!#$%&'*+\-.^_|~A-Za-z0-9]+$/;
const HTTP_WHITESPACE_REGEX = /[\u000A\u000D\u0009\u0020]/ // eslint-disable-line
;
const ASCII_WHITESPACE_REPLACE_REGEX = /[\u0009\u000A\u000C\u000D\u0020]/g // eslint-disable-line
;
/**
 * @see https://mimesniff.spec.whatwg.org/#http-quoted-string-token-code-point
 */ const HTTP_QUOTED_STRING_TOKENS = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/ // eslint-disable-line
;
// https://fetch.spec.whatwg.org/#data-url-processor
/** @param {URL} dataURL */ function dataURLProcessor(dataURL) {
    // 1. Assert: dataURL’s scheme is "data".
    assert(dataURL.protocol === 'data:');
    // 2. Let input be the result of running the URL
    // serializer on dataURL with exclude fragment
    // set to true.
    let input = URLSerializer(dataURL, true);
    // 3. Remove the leading "data:" string from input.
    input = input.slice(5);
    // 4. Let position point at the start of input.
    const position = {
        position: 0
    };
    // 5. Let mimeType be the result of collecting a
    // sequence of code points that are not equal
    // to U+002C (,), given position.
    let mimeType = collectASequenceOfCodePointsFast(',', input, position);
    // 6. Strip leading and trailing ASCII whitespace
    // from mimeType.
    // Undici implementation note: we need to store the
    // length because if the mimetype has spaces removed,
    // the wrong amount will be sliced from the input in
    // step #9
    const mimeTypeLength = mimeType.length;
    mimeType = removeASCIIWhitespace(mimeType, true, true);
    // 7. If position is past the end of input, then
    // return failure
    if (position.position >= input.length) {
        return 'failure';
    }
    // 8. Advance position by 1.
    position.position++;
    // 9. Let encodedBody be the remainder of input.
    const encodedBody = input.slice(mimeTypeLength + 1);
    // 10. Let body be the percent-decoding of encodedBody.
    let body = stringPercentDecode(encodedBody);
    // 11. If mimeType ends with U+003B (;), followed by
    // zero or more U+0020 SPACE, followed by an ASCII
    // case-insensitive match for "base64", then:
    if (/;(\u0020){0,}base64$/i.test(mimeType)) {
        // 1. Let stringBody be the isomorphic decode of body.
        const stringBody = isomorphicDecode(body);
        // 2. Set body to the forgiving-base64 decode of
        // stringBody.
        body = forgivingBase64(stringBody);
        // 3. If body is failure, then return failure.
        if (body === 'failure') {
            return 'failure';
        }
        // 4. Remove the last 6 code points from mimeType.
        mimeType = mimeType.slice(0, -6);
        // 5. Remove trailing U+0020 SPACE code points from mimeType,
        // if any.
        mimeType = mimeType.replace(/(\u0020)+$/, '');
        // 6. Remove the last U+003B (;) code point from mimeType.
        mimeType = mimeType.slice(0, -1);
    }
    // 12. If mimeType starts with U+003B (;), then prepend
    // "text/plain" to mimeType.
    if (mimeType.startsWith(';')) {
        mimeType = 'text/plain' + mimeType;
    }
    // 13. Let mimeTypeRecord be the result of parsing
    // mimeType.
    let mimeTypeRecord = parseMIMEType(mimeType);
    // 14. If mimeTypeRecord is failure, then set
    // mimeTypeRecord to text/plain;charset=US-ASCII.
    if (mimeTypeRecord === 'failure') {
        mimeTypeRecord = parseMIMEType('text/plain;charset=US-ASCII');
    }
    // 15. Return a new data: URL struct whose MIME
    // type is mimeTypeRecord and body is body.
    // https://fetch.spec.whatwg.org/#data-url-struct
    return {
        mimeType: mimeTypeRecord,
        body
    };
}
// https://url.spec.whatwg.org/#concept-url-serializer
/**
 * @param {URL} url
 * @param {boolean} excludeFragment
 */ function URLSerializer(url, excludeFragment = false) {
    if (!excludeFragment) {
        return url.href;
    }
    const href = url.href;
    const hashLength = url.hash.length;
    const serialized = hashLength === 0 ? href : href.substring(0, href.length - hashLength);
    if (!hashLength && href.endsWith('#')) {
        return serialized.slice(0, -1);
    }
    return serialized;
}
// https://infra.spec.whatwg.org/#collect-a-sequence-of-code-points
/**
 * @param {(char: string) => boolean} condition
 * @param {string} input
 * @param {{ position: number }} position
 */ function collectASequenceOfCodePoints(condition, input, position) {
    // 1. Let result be the empty string.
    let result = '';
    // 2. While position doesn’t point past the end of input and the
    // code point at position within input meets the condition condition:
    while(position.position < input.length && condition(input[position.position])){
        // 1. Append that code point to the end of result.
        result += input[position.position];
        // 2. Advance position by 1.
        position.position++;
    }
    // 3. Return result.
    return result;
}
/**
 * A faster collectASequenceOfCodePoints that only works when comparing a single character.
 * @param {string} char
 * @param {string} input
 * @param {{ position: number }} position
 */ function collectASequenceOfCodePointsFast(char, input, position) {
    const idx = input.indexOf(char, position.position);
    const start = position.position;
    if (idx === -1) {
        position.position = input.length;
        return input.slice(start);
    }
    position.position = idx;
    return input.slice(start, position.position);
}
// https://url.spec.whatwg.org/#string-percent-decode
/** @param {string} input */ function stringPercentDecode(input) {
    // 1. Let bytes be the UTF-8 encoding of input.
    const bytes = encoder.encode(input);
    // 2. Return the percent-decoding of bytes.
    return percentDecode(bytes);
}
/**
 * @param {number} byte
 */ function isHexCharByte(byte) {
    // 0-9 A-F a-f
    return byte >= 0x30 && byte <= 0x39 || byte >= 0x41 && byte <= 0x46 || byte >= 0x61 && byte <= 0x66;
}
/**
 * @param {number} byte
 */ function hexByteToNumber(byte) {
    return(// 0-9
    byte >= 0x30 && byte <= 0x39 ? byte - 48 : (byte & 0xDF) - 55);
}
// https://url.spec.whatwg.org/#percent-decode
/** @param {Uint8Array} input */ function percentDecode(input) {
    const length = input.length;
    // 1. Let output be an empty byte sequence.
    /** @type {Uint8Array} */ const output = new Uint8Array(length);
    let j = 0;
    // 2. For each byte byte in input:
    for(let i = 0; i < length; ++i){
        const byte = input[i];
        // 1. If byte is not 0x25 (%), then append byte to output.
        if (byte !== 0x25) {
            output[j++] = byte;
        // 2. Otherwise, if byte is 0x25 (%) and the next two bytes
        // after byte in input are not in the ranges
        // 0x30 (0) to 0x39 (9), 0x41 (A) to 0x46 (F),
        // and 0x61 (a) to 0x66 (f), all inclusive, append byte
        // to output.
        } else if (byte === 0x25 && !(isHexCharByte(input[i + 1]) && isHexCharByte(input[i + 2]))) {
            output[j++] = 0x25;
        // 3. Otherwise:
        } else {
            // 1. Let bytePoint be the two bytes after byte in input,
            // decoded, and then interpreted as hexadecimal number.
            // 2. Append a byte whose value is bytePoint to output.
            output[j++] = hexByteToNumber(input[i + 1]) << 4 | hexByteToNumber(input[i + 2]);
            // 3. Skip the next two bytes in input.
            i += 2;
        }
    }
    // 3. Return output.
    return length === j ? output : output.subarray(0, j);
}
// https://mimesniff.spec.whatwg.org/#parse-a-mime-type
/** @param {string} input */ function parseMIMEType(input) {
    // 1. Remove any leading and trailing HTTP whitespace
    // from input.
    input = removeHTTPWhitespace(input, true, true);
    // 2. Let position be a position variable for input,
    // initially pointing at the start of input.
    const position = {
        position: 0
    };
    // 3. Let type be the result of collecting a sequence
    // of code points that are not U+002F (/) from
    // input, given position.
    const type = collectASequenceOfCodePointsFast('/', input, position);
    // 4. If type is the empty string or does not solely
    // contain HTTP token code points, then return failure.
    // https://mimesniff.spec.whatwg.org/#http-token-code-point
    if (type.length === 0 || !HTTP_TOKEN_CODEPOINTS.test(type)) {
        return 'failure';
    }
    // 5. If position is past the end of input, then return
    // failure
    if (position.position >= input.length) {
        return 'failure';
    }
    // 6. Advance position by 1. (This skips past U+002F (/).)
    position.position++;
    // 7. Let subtype be the result of collecting a sequence of
    // code points that are not U+003B (;) from input, given
    // position.
    let subtype = collectASequenceOfCodePointsFast(';', input, position);
    // 8. Remove any trailing HTTP whitespace from subtype.
    subtype = removeHTTPWhitespace(subtype, false, true);
    // 9. If subtype is the empty string or does not solely
    // contain HTTP token code points, then return failure.
    if (subtype.length === 0 || !HTTP_TOKEN_CODEPOINTS.test(subtype)) {
        return 'failure';
    }
    const typeLowercase = type.toLowerCase();
    const subtypeLowercase = subtype.toLowerCase();
    // 10. Let mimeType be a new MIME type record whose type
    // is type, in ASCII lowercase, and subtype is subtype,
    // in ASCII lowercase.
    // https://mimesniff.spec.whatwg.org/#mime-type
    const mimeType = {
        type: typeLowercase,
        subtype: subtypeLowercase,
        /** @type {Map<string, string>} */ parameters: new Map(),
        // https://mimesniff.spec.whatwg.org/#mime-type-essence
        essence: `${typeLowercase}/${subtypeLowercase}`
    };
    // 11. While position is not past the end of input:
    while(position.position < input.length){
        // 1. Advance position by 1. (This skips past U+003B (;).)
        position.position++;
        // 2. Collect a sequence of code points that are HTTP
        // whitespace from input given position.
        collectASequenceOfCodePoints(// https://fetch.spec.whatwg.org/#http-whitespace
        (char)=>HTTP_WHITESPACE_REGEX.test(char), input, position);
        // 3. Let parameterName be the result of collecting a
        // sequence of code points that are not U+003B (;)
        // or U+003D (=) from input, given position.
        let parameterName = collectASequenceOfCodePoints((char)=>char !== ';' && char !== '=', input, position);
        // 4. Set parameterName to parameterName, in ASCII
        // lowercase.
        parameterName = parameterName.toLowerCase();
        // 5. If position is not past the end of input, then:
        if (position.position < input.length) {
            // 1. If the code point at position within input is
            // U+003B (;), then continue.
            if (input[position.position] === ';') {
                continue;
            }
            // 2. Advance position by 1. (This skips past U+003D (=).)
            position.position++;
        }
        // 6. If position is past the end of input, then break.
        if (position.position >= input.length) {
            break;
        }
        // 7. Let parameterValue be null.
        let parameterValue = null;
        // 8. If the code point at position within input is
        // U+0022 ("), then:
        if (input[position.position] === '"') {
            // 1. Set parameterValue to the result of collecting
            // an HTTP quoted string from input, given position
            // and the extract-value flag.
            parameterValue = collectAnHTTPQuotedString(input, position, true);
            // 2. Collect a sequence of code points that are not
            // U+003B (;) from input, given position.
            collectASequenceOfCodePointsFast(';', input, position);
        // 9. Otherwise:
        } else {
            // 1. Set parameterValue to the result of collecting
            // a sequence of code points that are not U+003B (;)
            // from input, given position.
            parameterValue = collectASequenceOfCodePointsFast(';', input, position);
            // 2. Remove any trailing HTTP whitespace from parameterValue.
            parameterValue = removeHTTPWhitespace(parameterValue, false, true);
            // 3. If parameterValue is the empty string, then continue.
            if (parameterValue.length === 0) {
                continue;
            }
        }
        // 10. If all of the following are true
        // - parameterName is not the empty string
        // - parameterName solely contains HTTP token code points
        // - parameterValue solely contains HTTP quoted-string token code points
        // - mimeType’s parameters[parameterName] does not exist
        // then set mimeType’s parameters[parameterName] to parameterValue.
        if (parameterName.length !== 0 && HTTP_TOKEN_CODEPOINTS.test(parameterName) && (parameterValue.length === 0 || HTTP_QUOTED_STRING_TOKENS.test(parameterValue)) && !mimeType.parameters.has(parameterName)) {
            mimeType.parameters.set(parameterName, parameterValue);
        }
    }
    // 12. Return mimeType.
    return mimeType;
}
// https://infra.spec.whatwg.org/#forgiving-base64-decode
/** @param {string} data */ function forgivingBase64(data) {
    // 1. Remove all ASCII whitespace from data.
    data = data.replace(ASCII_WHITESPACE_REPLACE_REGEX, '');
    let dataLength = data.length;
    // 2. If data’s code point length divides by 4 leaving
    // no remainder, then:
    if (dataLength % 4 === 0) {
        // 1. If data ends with one or two U+003D (=) code points,
        // then remove them from data.
        if (data.charCodeAt(dataLength - 1) === 0x003D) {
            --dataLength;
            if (data.charCodeAt(dataLength - 1) === 0x003D) {
                --dataLength;
            }
        }
    }
    // 3. If data’s code point length divides by 4 leaving
    // a remainder of 1, then return failure.
    if (dataLength % 4 === 1) {
        return 'failure';
    }
    // 4. If data contains a code point that is not one of
    //  U+002B (+)
    //  U+002F (/)
    //  ASCII alphanumeric
    // then return failure.
    if (/[^+/0-9A-Za-z]/.test(data.length === dataLength ? data : data.substring(0, dataLength))) {
        return 'failure';
    }
    const buffer = Buffer.from(data, 'base64');
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
}
// https://fetch.spec.whatwg.org/#collect-an-http-quoted-string
// tests: https://fetch.spec.whatwg.org/#example-http-quoted-string
/**
 * @param {string} input
 * @param {{ position: number }} position
 * @param {boolean} [extractValue=false]
 */ function collectAnHTTPQuotedString(input, position, extractValue = false) {
    // 1. Let positionStart be position.
    const positionStart = position.position;
    // 2. Let value be the empty string.
    let value = '';
    // 3. Assert: the code point at position within input
    // is U+0022 (").
    assert(input[position.position] === '"');
    // 4. Advance position by 1.
    position.position++;
    // 5. While true:
    while(true){
        // 1. Append the result of collecting a sequence of code points
        // that are not U+0022 (") or U+005C (\) from input, given
        // position, to value.
        value += collectASequenceOfCodePoints((char)=>char !== '"' && char !== '\\', input, position);
        // 2. If position is past the end of input, then break.
        if (position.position >= input.length) {
            break;
        }
        // 3. Let quoteOrBackslash be the code point at position within
        // input.
        const quoteOrBackslash = input[position.position];
        // 4. Advance position by 1.
        position.position++;
        // 5. If quoteOrBackslash is U+005C (\), then:
        if (quoteOrBackslash === '\\') {
            // 1. If position is past the end of input, then append
            // U+005C (\) to value and break.
            if (position.position >= input.length) {
                value += '\\';
                break;
            }
            // 2. Append the code point at position within input to value.
            value += input[position.position];
            // 3. Advance position by 1.
            position.position++;
        // 6. Otherwise:
        } else {
            // 1. Assert: quoteOrBackslash is U+0022 (").
            assert(quoteOrBackslash === '"');
            break;
        }
    }
    // 6. If the extract-value flag is set, then return value.
    if (extractValue) {
        return value;
    }
    // 7. Return the code points from positionStart to position,
    // inclusive, within input.
    return input.slice(positionStart, position.position);
}
/**
 * @see https://mimesniff.spec.whatwg.org/#serialize-a-mime-type
 */ function serializeAMimeType(mimeType) {
    assert(mimeType !== 'failure');
    const { parameters, essence } = mimeType;
    // 1. Let serialization be the concatenation of mimeType’s
    //    type, U+002F (/), and mimeType’s subtype.
    let serialization = essence;
    // 2. For each name → value of mimeType’s parameters:
    for (let [name, value] of parameters.entries()){
        // 1. Append U+003B (;) to serialization.
        serialization += ';';
        // 2. Append name to serialization.
        serialization += name;
        // 3. Append U+003D (=) to serialization.
        serialization += '=';
        // 4. If value does not solely contain HTTP token code
        //    points or value is the empty string, then:
        if (!HTTP_TOKEN_CODEPOINTS.test(value)) {
            // 1. Precede each occurrence of U+0022 (") or
            //    U+005C (\) in value with U+005C (\).
            value = value.replace(/(\\|")/g, '\\$1');
            // 2. Prepend U+0022 (") to value.
            value = '"' + value;
            // 3. Append U+0022 (") to value.
            value += '"';
        }
        // 5. Append value to serialization.
        serialization += value;
    }
    // 3. Return serialization.
    return serialization;
}
/**
 * @see https://fetch.spec.whatwg.org/#http-whitespace
 * @param {number} char
 */ function isHTTPWhiteSpace(char) {
    // "\r\n\t "
    return char === 0x00d || char === 0x00a || char === 0x009 || char === 0x020;
}
/**
 * @see https://fetch.spec.whatwg.org/#http-whitespace
 * @param {string} str
 * @param {boolean} [leading=true]
 * @param {boolean} [trailing=true]
 */ function removeHTTPWhitespace(str, leading = true, trailing = true) {
    return removeChars(str, leading, trailing, isHTTPWhiteSpace);
}
/**
 * @see https://infra.spec.whatwg.org/#ascii-whitespace
 * @param {number} char
 */ function isASCIIWhitespace(char) {
    // "\r\n\t\f "
    return char === 0x00d || char === 0x00a || char === 0x009 || char === 0x00c || char === 0x020;
}
/**
 * @see https://infra.spec.whatwg.org/#strip-leading-and-trailing-ascii-whitespace
 * @param {string} str
 * @param {boolean} [leading=true]
 * @param {boolean} [trailing=true]
 */ function removeASCIIWhitespace(str, leading = true, trailing = true) {
    return removeChars(str, leading, trailing, isASCIIWhitespace);
}
/**
 * @param {string} str
 * @param {boolean} leading
 * @param {boolean} trailing
 * @param {(charCode: number) => boolean} predicate
 * @returns
 */ function removeChars(str, leading, trailing, predicate) {
    let lead = 0;
    let trail = str.length - 1;
    if (leading) {
        while(lead < str.length && predicate(str.charCodeAt(lead)))lead++;
    }
    if (trailing) {
        while(trail > 0 && predicate(str.charCodeAt(trail)))trail--;
    }
    return lead === 0 && trail === str.length - 1 ? str : str.slice(lead, trail + 1);
}
/**
 * @see https://infra.spec.whatwg.org/#isomorphic-decode
 * @param {Uint8Array} input
 * @returns {string}
 */ function isomorphicDecode(input) {
    // 1. To isomorphic decode a byte sequence input, return a string whose code point
    //    length is equal to input’s length and whose code points have the same values
    //    as the values of input’s bytes, in the same order.
    const length = input.length;
    if ((2 << 15) - 1 > length) {
        return String.fromCharCode.apply(null, input);
    }
    let result = '';
    let i = 0;
    let addition = (2 << 15) - 1;
    while(i < length){
        if (i + addition > length) {
            addition = length - i;
        }
        result += String.fromCharCode.apply(null, input.subarray(i, i += addition));
    }
    return result;
}
/**
 * @see https://mimesniff.spec.whatwg.org/#minimize-a-supported-mime-type
 * @param {Exclude<ReturnType<typeof parseMIMEType>, 'failure'>} mimeType
 */ function minimizeSupportedMimeType(mimeType) {
    switch(mimeType.essence){
        case 'application/ecmascript':
        case 'application/javascript':
        case 'application/x-ecmascript':
        case 'application/x-javascript':
        case 'text/ecmascript':
        case 'text/javascript':
        case 'text/javascript1.0':
        case 'text/javascript1.1':
        case 'text/javascript1.2':
        case 'text/javascript1.3':
        case 'text/javascript1.4':
        case 'text/javascript1.5':
        case 'text/jscript':
        case 'text/livescript':
        case 'text/x-ecmascript':
        case 'text/x-javascript':
            // 1. If mimeType is a JavaScript MIME type, then return "text/javascript".
            return 'text/javascript';
        case 'application/json':
        case 'text/json':
            // 2. If mimeType is a JSON MIME type, then return "application/json".
            return 'application/json';
        case 'image/svg+xml':
            // 3. If mimeType’s essence is "image/svg+xml", then return "image/svg+xml".
            return 'image/svg+xml';
        case 'text/xml':
        case 'application/xml':
            // 4. If mimeType is an XML MIME type, then return "application/xml".
            return 'application/xml';
    }
    // 2. If mimeType is a JSON MIME type, then return "application/json".
    if (mimeType.subtype.endsWith('+json')) {
        return 'application/json';
    }
    // 4. If mimeType is an XML MIME type, then return "application/xml".
    if (mimeType.subtype.endsWith('+xml')) {
        return 'application/xml';
    }
    // 5. If mimeType is supported by the user agent, then return mimeType’s essence.
    // Technically, node doesn't support any mimetypes.
    // 6. Return the empty string.
    return '';
}
module.exports = {
    dataURLProcessor,
    URLSerializer,
    collectASequenceOfCodePoints,
    collectASequenceOfCodePointsFast,
    stringPercentDecode,
    parseMIMEType,
    collectAnHTTPQuotedString,
    serializeAMimeType,
    removeChars,
    removeHTTPWhitespace,
    minimizeSupportedMimeType,
    HTTP_TOKEN_CODEPOINTS,
    isomorphicDecode
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { types, inspect } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const { markAsUncloneable } = __turbopack_context__.r("[externals]/node:worker_threads [external] (node:worker_threads, cjs)");
const UNDEFINED = 1;
const BOOLEAN = 2;
const STRING = 3;
const SYMBOL = 4;
const NUMBER = 5;
const BIGINT = 6;
const NULL = 7;
const OBJECT = 8 // function and object
;
const FunctionPrototypeSymbolHasInstance = Function.call.bind(Function.prototype[Symbol.hasInstance]);
/** @type {import('../../../types/webidl').Webidl} */ const webidl = {
    converters: {},
    util: {},
    errors: {},
    is: {}
};
/**
 * @description Instantiate an error.
 *
 * @param {Object} opts
 * @param {string} opts.header
 * @param {string} opts.message
 * @returns {TypeError}
 */ webidl.errors.exception = function(message) {
    return new TypeError(`${message.header}: ${message.message}`);
};
/**
 * @description Instantiate an error when conversion from one type to another has failed.
 *
 * @param {Object} opts
 * @param {string} opts.prefix
 * @param {string} opts.argument
 * @param {string[]} opts.types
 * @returns {TypeError}
 */ webidl.errors.conversionFailed = function(opts) {
    const plural = opts.types.length === 1 ? '' : ' one of';
    const message = `${opts.argument} could not be converted to` + `${plural}: ${opts.types.join(', ')}.`;
    return webidl.errors.exception({
        header: opts.prefix,
        message
    });
};
/**
 * @description Instantiate an error when an invalid argument is provided
 *
 * @param {Object} context
 * @param {string} context.prefix
 * @param {string} context.value
 * @param {string} context.type
 * @returns {TypeError}
 */ webidl.errors.invalidArgument = function(context) {
    return webidl.errors.exception({
        header: context.prefix,
        message: `"${context.value}" is an invalid ${context.type}.`
    });
};
// https://webidl.spec.whatwg.org/#implements
webidl.brandCheck = function(V, I) {
    if (!FunctionPrototypeSymbolHasInstance(I, V)) {
        const err = new TypeError('Illegal invocation');
        err.code = 'ERR_INVALID_THIS'; // node compat.
        throw err;
    }
};
webidl.brandCheckMultiple = function(List) {
    const prototypes = List.map((c)=>webidl.util.MakeTypeAssertion(c));
    return (V)=>{
        if (prototypes.every((typeCheck)=>!typeCheck(V))) {
            const err = new TypeError('Illegal invocation');
            err.code = 'ERR_INVALID_THIS'; // node compat.
            throw err;
        }
    };
};
webidl.argumentLengthCheck = function({ length }, min, ctx) {
    if (length < min) {
        throw webidl.errors.exception({
            message: `${min} argument${min !== 1 ? 's' : ''} required, ` + `but${length ? ' only' : ''} ${length} found.`,
            header: ctx
        });
    }
};
webidl.illegalConstructor = function() {
    throw webidl.errors.exception({
        header: 'TypeError',
        message: 'Illegal constructor'
    });
};
webidl.util.MakeTypeAssertion = function(I) {
    return (O)=>FunctionPrototypeSymbolHasInstance(I, O);
};
// https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values
webidl.util.Type = function(V) {
    switch(typeof V){
        case 'undefined':
            return UNDEFINED;
        case 'boolean':
            return BOOLEAN;
        case 'string':
            return STRING;
        case 'symbol':
            return SYMBOL;
        case 'number':
            return NUMBER;
        case 'bigint':
            return BIGINT;
        case 'function':
        case 'object':
            {
                if (V === null) {
                    return NULL;
                }
                return OBJECT;
            }
    }
};
webidl.util.Types = {
    UNDEFINED,
    BOOLEAN,
    STRING,
    SYMBOL,
    NUMBER,
    BIGINT,
    NULL,
    OBJECT
};
webidl.util.TypeValueToString = function(o) {
    switch(webidl.util.Type(o)){
        case UNDEFINED:
            return 'Undefined';
        case BOOLEAN:
            return 'Boolean';
        case STRING:
            return 'String';
        case SYMBOL:
            return 'Symbol';
        case NUMBER:
            return 'Number';
        case BIGINT:
            return 'BigInt';
        case NULL:
            return 'Null';
        case OBJECT:
            return 'Object';
    }
};
webidl.util.markAsUncloneable = markAsUncloneable || (()=>{});
// https://webidl.spec.whatwg.org/#abstract-opdef-converttoint
webidl.util.ConvertToInt = function(V, bitLength, signedness, flags) {
    let upperBound;
    let lowerBound;
    // 1. If bitLength is 64, then:
    if (bitLength === 64) {
        // 1. Let upperBound be 2^53 − 1.
        upperBound = Math.pow(2, 53) - 1;
        // 2. If signedness is "unsigned", then let lowerBound be 0.
        if (signedness === 'unsigned') {
            lowerBound = 0;
        } else {
            // 3. Otherwise let lowerBound be −2^53 + 1.
            lowerBound = Math.pow(-2, 53) + 1;
        }
    } else if (signedness === 'unsigned') {
        // 2. Otherwise, if signedness is "unsigned", then:
        // 1. Let lowerBound be 0.
        lowerBound = 0;
        // 2. Let upperBound be 2^bitLength − 1.
        upperBound = Math.pow(2, bitLength) - 1;
    } else {
        // 3. Otherwise:
        // 1. Let lowerBound be -2^bitLength − 1.
        lowerBound = Math.pow(-2, bitLength) - 1;
        // 2. Let upperBound be 2^bitLength − 1 − 1.
        upperBound = Math.pow(2, bitLength - 1) - 1;
    }
    // 4. Let x be ? ToNumber(V).
    let x = Number(V);
    // 5. If x is −0, then set x to +0.
    if (x === 0) {
        x = 0;
    }
    // 6. If the conversion is to an IDL type associated
    //    with the [EnforceRange] extended attribute, then:
    if (webidl.util.HasFlag(flags, webidl.attributes.EnforceRange)) {
        // 1. If x is NaN, +∞, or −∞, then throw a TypeError.
        if (Number.isNaN(x) || x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY) {
            throw webidl.errors.exception({
                header: 'Integer conversion',
                message: `Could not convert ${webidl.util.Stringify(V)} to an integer.`
            });
        }
        // 2. Set x to IntegerPart(x).
        x = webidl.util.IntegerPart(x);
        // 3. If x < lowerBound or x > upperBound, then
        //    throw a TypeError.
        if (x < lowerBound || x > upperBound) {
            throw webidl.errors.exception({
                header: 'Integer conversion',
                message: `Value must be between ${lowerBound}-${upperBound}, got ${x}.`
            });
        }
        // 4. Return x.
        return x;
    }
    // 7. If x is not NaN and the conversion is to an IDL
    //    type associated with the [Clamp] extended
    //    attribute, then:
    if (!Number.isNaN(x) && webidl.util.HasFlag(flags, webidl.attributes.Clamp)) {
        // 1. Set x to min(max(x, lowerBound), upperBound).
        x = Math.min(Math.max(x, lowerBound), upperBound);
        // 2. Round x to the nearest integer, choosing the
        //    even integer if it lies halfway between two,
        //    and choosing +0 rather than −0.
        if (Math.floor(x) % 2 === 0) {
            x = Math.floor(x);
        } else {
            x = Math.ceil(x);
        }
        // 3. Return x.
        return x;
    }
    // 8. If x is NaN, +0, +∞, or −∞, then return +0.
    if (Number.isNaN(x) || x === 0 && Object.is(0, x) || x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY) {
        return 0;
    }
    // 9. Set x to IntegerPart(x).
    x = webidl.util.IntegerPart(x);
    // 10. Set x to x modulo 2^bitLength.
    x = x % Math.pow(2, bitLength);
    // 11. If signedness is "signed" and x ≥ 2^bitLength − 1,
    //    then return x − 2^bitLength.
    if (signedness === 'signed' && x >= Math.pow(2, bitLength) - 1) {
        return x - Math.pow(2, bitLength);
    }
    // 12. Otherwise, return x.
    return x;
};
// https://webidl.spec.whatwg.org/#abstract-opdef-integerpart
webidl.util.IntegerPart = function(n) {
    // 1. Let r be floor(abs(n)).
    const r = Math.floor(Math.abs(n));
    // 2. If n < 0, then return -1 × r.
    if (n < 0) {
        return -1 * r;
    }
    // 3. Otherwise, return r.
    return r;
};
webidl.util.Stringify = function(V) {
    const type = webidl.util.Type(V);
    switch(type){
        case SYMBOL:
            return `Symbol(${V.description})`;
        case OBJECT:
            return inspect(V);
        case STRING:
            return `"${V}"`;
        case BIGINT:
            return `${V}n`;
        default:
            return `${V}`;
    }
};
webidl.util.IsResizableArrayBuffer = function(V) {
    if (types.isArrayBuffer(V)) {
        return V.resizable;
    }
    if (types.isSharedArrayBuffer(V)) {
        return V.growable;
    }
    throw webidl.errors.exception({
        header: 'IsResizableArrayBuffer',
        message: `"${webidl.util.Stringify(V)}" is not an array buffer.`
    });
};
webidl.util.HasFlag = function(flags, attributes) {
    return typeof flags === 'number' && (flags & attributes) === attributes;
};
// https://webidl.spec.whatwg.org/#es-sequence
webidl.sequenceConverter = function(converter) {
    return (V, prefix, argument, Iterable)=>{
        // 1. If Type(V) is not Object, throw a TypeError.
        if (webidl.util.Type(V) !== OBJECT) {
            throw webidl.errors.exception({
                header: prefix,
                message: `${argument} (${webidl.util.Stringify(V)}) is not iterable.`
            });
        }
        // 2. Let method be ? GetMethod(V, @@iterator).
        /** @type {Generator} */ const method = typeof Iterable === 'function' ? Iterable() : V?.[Symbol.iterator]?.();
        const seq = [];
        let index = 0;
        // 3. If method is undefined, throw a TypeError.
        if (method === undefined || typeof method.next !== 'function') {
            throw webidl.errors.exception({
                header: prefix,
                message: `${argument} is not iterable.`
            });
        }
        // https://webidl.spec.whatwg.org/#create-sequence-from-iterable
        while(true){
            const { done, value } = method.next();
            if (done) {
                break;
            }
            seq.push(converter(value, prefix, `${argument}[${index++}]`));
        }
        return seq;
    };
};
// https://webidl.spec.whatwg.org/#es-to-record
webidl.recordConverter = function(keyConverter, valueConverter) {
    return (O, prefix, argument)=>{
        // 1. If Type(O) is not Object, throw a TypeError.
        if (webidl.util.Type(O) !== OBJECT) {
            throw webidl.errors.exception({
                header: prefix,
                message: `${argument} ("${webidl.util.TypeValueToString(O)}") is not an Object.`
            });
        }
        // 2. Let result be a new empty instance of record<K, V>.
        const result = {};
        if (!types.isProxy(O)) {
            // 1. Let desc be ? O.[[GetOwnProperty]](key).
            const keys = [
                ...Object.getOwnPropertyNames(O),
                ...Object.getOwnPropertySymbols(O)
            ];
            for (const key of keys){
                const keyName = webidl.util.Stringify(key);
                // 1. Let typedKey be key converted to an IDL value of type K.
                const typedKey = keyConverter(key, prefix, `Key ${keyName} in ${argument}`);
                // 2. Let value be ? Get(O, key).
                // 3. Let typedValue be value converted to an IDL value of type V.
                const typedValue = valueConverter(O[key], prefix, `${argument}[${keyName}]`);
                // 4. Set result[typedKey] to typedValue.
                result[typedKey] = typedValue;
            }
            // 5. Return result.
            return result;
        }
        // 3. Let keys be ? O.[[OwnPropertyKeys]]().
        const keys = Reflect.ownKeys(O);
        // 4. For each key of keys.
        for (const key of keys){
            // 1. Let desc be ? O.[[GetOwnProperty]](key).
            const desc = Reflect.getOwnPropertyDescriptor(O, key);
            // 2. If desc is not undefined and desc.[[Enumerable]] is true:
            if (desc?.enumerable) {
                // 1. Let typedKey be key converted to an IDL value of type K.
                const typedKey = keyConverter(key, prefix, argument);
                // 2. Let value be ? Get(O, key).
                // 3. Let typedValue be value converted to an IDL value of type V.
                const typedValue = valueConverter(O[key], prefix, argument);
                // 4. Set result[typedKey] to typedValue.
                result[typedKey] = typedValue;
            }
        }
        // 5. Return result.
        return result;
    };
};
webidl.interfaceConverter = function(TypeCheck, name) {
    return (V, prefix, argument)=>{
        if (!TypeCheck(V)) {
            throw webidl.errors.exception({
                header: prefix,
                message: `Expected ${argument} ("${webidl.util.Stringify(V)}") to be an instance of ${name}.`
            });
        }
        return V;
    };
};
webidl.dictionaryConverter = function(converters) {
    return (dictionary, prefix, argument)=>{
        const dict = {};
        if (dictionary != null && webidl.util.Type(dictionary) !== OBJECT) {
            throw webidl.errors.exception({
                header: prefix,
                message: `Expected ${dictionary} to be one of: Null, Undefined, Object.`
            });
        }
        for (const options of converters){
            const { key, defaultValue, required, converter } = options;
            if (required === true) {
                if (dictionary == null || !Object.hasOwn(dictionary, key)) {
                    throw webidl.errors.exception({
                        header: prefix,
                        message: `Missing required key "${key}".`
                    });
                }
            }
            let value = dictionary?.[key];
            const hasDefault = defaultValue !== undefined;
            // Only use defaultValue if value is undefined and
            // a defaultValue options was provided.
            if (hasDefault && value === undefined) {
                value = defaultValue();
            }
            // A key can be optional and have no default value.
            // When this happens, do not perform a conversion,
            // and do not assign the key a value.
            if (required || hasDefault || value !== undefined) {
                value = converter(value, prefix, `${argument}.${key}`);
                if (options.allowedValues && !options.allowedValues.includes(value)) {
                    throw webidl.errors.exception({
                        header: prefix,
                        message: `${value} is not an accepted type. Expected one of ${options.allowedValues.join(', ')}.`
                    });
                }
                dict[key] = value;
            }
        }
        return dict;
    };
};
webidl.nullableConverter = function(converter) {
    return (V, prefix, argument)=>{
        if (V === null) {
            return V;
        }
        return converter(V, prefix, argument);
    };
};
/**
 * @param {*} value
 * @returns {boolean}
 */ webidl.is.USVString = function(value) {
    return typeof value === 'string' && value.isWellFormed();
};
webidl.is.ReadableStream = webidl.util.MakeTypeAssertion(ReadableStream);
webidl.is.Blob = webidl.util.MakeTypeAssertion(Blob);
webidl.is.URLSearchParams = webidl.util.MakeTypeAssertion(URLSearchParams);
webidl.is.File = webidl.util.MakeTypeAssertion(File);
webidl.is.URL = webidl.util.MakeTypeAssertion(URL);
webidl.is.AbortSignal = webidl.util.MakeTypeAssertion(AbortSignal);
webidl.is.MessagePort = webidl.util.MakeTypeAssertion(MessagePort);
webidl.is.BufferSource = function(V) {
    return types.isArrayBuffer(V) || ArrayBuffer.isView(V) && types.isArrayBuffer(V.buffer);
};
// https://webidl.spec.whatwg.org/#es-DOMString
webidl.converters.DOMString = function(V, prefix, argument, flags) {
    // 1. If V is null and the conversion is to an IDL type
    //    associated with the [LegacyNullToEmptyString]
    //    extended attribute, then return the DOMString value
    //    that represents the empty string.
    if (V === null && webidl.util.HasFlag(flags, webidl.attributes.LegacyNullToEmptyString)) {
        return '';
    }
    // 2. Let x be ? ToString(V).
    if (typeof V === 'symbol') {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} is a symbol, which cannot be converted to a DOMString.`
        });
    }
    // 3. Return the IDL DOMString value that represents the
    //    same sequence of code units as the one the
    //    ECMAScript String value x represents.
    return String(V);
};
// https://webidl.spec.whatwg.org/#es-ByteString
webidl.converters.ByteString = function(V, prefix, argument) {
    // 1. Let x be ? ToString(V).
    if (typeof V === 'symbol') {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} is a symbol, which cannot be converted to a ByteString.`
        });
    }
    const x = String(V);
    // 2. If the value of any element of x is greater than
    //    255, then throw a TypeError.
    for(let index = 0; index < x.length; index++){
        if (x.charCodeAt(index) > 255) {
            throw new TypeError('Cannot convert argument to a ByteString because the character at ' + `index ${index} has a value of ${x.charCodeAt(index)} which is greater than 255.`);
        }
    }
    // 3. Return an IDL ByteString value whose length is the
    //    length of x, and where the value of each element is
    //    the value of the corresponding element of x.
    return x;
};
/**
 * @param {unknown} value
 * @returns {string}
 * @see https://webidl.spec.whatwg.org/#es-USVString
 */ webidl.converters.USVString = function(value) {
    // TODO: rewrite this so we can control the errors thrown
    if (typeof value === 'string') {
        return value.toWellFormed();
    }
    return `${value}`.toWellFormed();
};
// https://webidl.spec.whatwg.org/#es-boolean
webidl.converters.boolean = function(V) {
    // 1. Let x be the result of computing ToBoolean(V).
    // https://262.ecma-international.org/10.0/index.html#table-10
    const x = Boolean(V);
    // 2. Return the IDL boolean value that is the one that represents
    //    the same truth value as the ECMAScript Boolean value x.
    return x;
};
// https://webidl.spec.whatwg.org/#es-any
webidl.converters.any = function(V) {
    return V;
};
// https://webidl.spec.whatwg.org/#es-long-long
webidl.converters['long long'] = function(V, prefix, argument) {
    // 1. Let x be ? ConvertToInt(V, 64, "signed").
    const x = webidl.util.ConvertToInt(V, 64, 'signed', 0, prefix, argument);
    // 2. Return the IDL long long value that represents
    //    the same numeric value as x.
    return x;
};
// https://webidl.spec.whatwg.org/#es-unsigned-long-long
webidl.converters['unsigned long long'] = function(V, prefix, argument) {
    // 1. Let x be ? ConvertToInt(V, 64, "unsigned").
    const x = webidl.util.ConvertToInt(V, 64, 'unsigned', 0, prefix, argument);
    // 2. Return the IDL unsigned long long value that
    //    represents the same numeric value as x.
    return x;
};
// https://webidl.spec.whatwg.org/#es-unsigned-long
webidl.converters['unsigned long'] = function(V, prefix, argument) {
    // 1. Let x be ? ConvertToInt(V, 32, "unsigned").
    const x = webidl.util.ConvertToInt(V, 32, 'unsigned', 0, prefix, argument);
    // 2. Return the IDL unsigned long value that
    //    represents the same numeric value as x.
    return x;
};
// https://webidl.spec.whatwg.org/#es-unsigned-short
webidl.converters['unsigned short'] = function(V, prefix, argument, flags) {
    // 1. Let x be ? ConvertToInt(V, 16, "unsigned").
    const x = webidl.util.ConvertToInt(V, 16, 'unsigned', flags, prefix, argument);
    // 2. Return the IDL unsigned short value that represents
    //    the same numeric value as x.
    return x;
};
// https://webidl.spec.whatwg.org/#idl-ArrayBuffer
webidl.converters.ArrayBuffer = function(V, prefix, argument, flags) {
    // 1. If V is not an Object, or V does not have an
    //    [[ArrayBufferData]] internal slot, then throw a
    //    TypeError.
    // 2. If IsSharedArrayBuffer(V) is true, then throw a
    //    TypeError.
    // see: https://tc39.es/ecma262/#sec-properties-of-the-arraybuffer-instances
    if (webidl.util.Type(V) !== OBJECT || !types.isArrayBuffer(V)) {
        throw webidl.errors.conversionFailed({
            prefix,
            argument: `${argument} ("${webidl.util.Stringify(V)}")`,
            types: [
                'ArrayBuffer'
            ]
        });
    }
    // 3. If the conversion is not to an IDL type associated
    //    with the [AllowResizable] extended attribute, and
    //    IsResizableArrayBuffer(V) is true, then throw a
    //    TypeError.
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowResizable) && webidl.util.IsResizableArrayBuffer(V)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a resizable ArrayBuffer.`
        });
    }
    // 4. Return the IDL ArrayBuffer value that is a
    //    reference to the same object as V.
    return V;
};
// https://webidl.spec.whatwg.org/#idl-SharedArrayBuffer
webidl.converters.SharedArrayBuffer = function(V, prefix, argument, flags) {
    // 1. If V is not an Object, or V does not have an
    //    [[ArrayBufferData]] internal slot, then throw a
    //    TypeError.
    // 2. If IsSharedArrayBuffer(V) is false, then throw a
    //    TypeError.
    // see: https://tc39.es/ecma262/#sec-properties-of-the-sharedarraybuffer-instances
    if (webidl.util.Type(V) !== OBJECT || !types.isSharedArrayBuffer(V)) {
        throw webidl.errors.conversionFailed({
            prefix,
            argument: `${argument} ("${webidl.util.Stringify(V)}")`,
            types: [
                'SharedArrayBuffer'
            ]
        });
    }
    // 3. If the conversion is not to an IDL type associated
    //    with the [AllowResizable] extended attribute, and
    //    IsResizableArrayBuffer(V) is true, then throw a
    //    TypeError.
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowResizable) && webidl.util.IsResizableArrayBuffer(V)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a resizable SharedArrayBuffer.`
        });
    }
    // 4. Return the IDL SharedArrayBuffer value that is a
    //    reference to the same object as V.
    return V;
};
// https://webidl.spec.whatwg.org/#dfn-typed-array-type
webidl.converters.TypedArray = function(V, T, prefix, argument, flags) {
    // 1. Let T be the IDL type V is being converted to.
    // 2. If Type(V) is not Object, or V does not have a
    //    [[TypedArrayName]] internal slot with a value
    //    equal to T’s name, then throw a TypeError.
    if (webidl.util.Type(V) !== OBJECT || !types.isTypedArray(V) || V.constructor.name !== T.name) {
        throw webidl.errors.conversionFailed({
            prefix,
            argument: `${argument} ("${webidl.util.Stringify(V)}")`,
            types: [
                T.name
            ]
        });
    }
    // 3. If the conversion is not to an IDL type associated
    //    with the [AllowShared] extended attribute, and
    //    IsSharedArrayBuffer(V.[[ViewedArrayBuffer]]) is
    //    true, then throw a TypeError.
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowShared) && types.isSharedArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a view on a shared array buffer.`
        });
    }
    // 4. If the conversion is not to an IDL type associated
    //    with the [AllowResizable] extended attribute, and
    //    IsResizableArrayBuffer(V.[[ViewedArrayBuffer]]) is
    //    true, then throw a TypeError.
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowResizable) && webidl.util.IsResizableArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a view on a resizable array buffer.`
        });
    }
    // 5. Return the IDL value of type T that is a reference
    //    to the same object as V.
    return V;
};
// https://webidl.spec.whatwg.org/#idl-DataView
webidl.converters.DataView = function(V, prefix, argument, flags) {
    // 1. If Type(V) is not Object, or V does not have a
    //    [[DataView]] internal slot, then throw a TypeError.
    if (webidl.util.Type(V) !== OBJECT || !types.isDataView(V)) {
        throw webidl.errors.conversionFailed({
            prefix,
            argument: `${argument} ("${webidl.util.Stringify(V)}")`,
            types: [
                'DataView'
            ]
        });
    }
    // 2. If the conversion is not to an IDL type associated
    //    with the [AllowShared] extended attribute, and
    //    IsSharedArrayBuffer(V.[[ViewedArrayBuffer]]) is true,
    //    then throw a TypeError.
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowShared) && types.isSharedArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a view on a shared array buffer.`
        });
    }
    // 3. If the conversion is not to an IDL type associated
    //    with the [AllowResizable] extended attribute, and
    //    IsResizableArrayBuffer(V.[[ViewedArrayBuffer]]) is
    //    true, then throw a TypeError.
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowResizable) && webidl.util.IsResizableArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a view on a resizable array buffer.`
        });
    }
    // 4. Return the IDL DataView value that is a reference
    //    to the same object as V.
    return V;
};
// https://webidl.spec.whatwg.org/#ArrayBufferView
webidl.converters.ArrayBufferView = function(V, prefix, argument, flags) {
    if (webidl.util.Type(V) !== OBJECT || !types.isArrayBufferView(V)) {
        throw webidl.errors.conversionFailed({
            prefix,
            argument: `${argument} ("${webidl.util.Stringify(V)}")`,
            types: [
                'ArrayBufferView'
            ]
        });
    }
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowShared) && types.isSharedArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a view on a shared array buffer.`
        });
    }
    if (!webidl.util.HasFlag(flags, webidl.attributes.AllowResizable) && webidl.util.IsResizableArrayBuffer(V.buffer)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a view on a resizable array buffer.`
        });
    }
    return V;
};
// https://webidl.spec.whatwg.org/#BufferSource
webidl.converters.BufferSource = function(V, prefix, argument, flags) {
    if (types.isArrayBuffer(V)) {
        return webidl.converters.ArrayBuffer(V, prefix, argument, flags);
    }
    if (types.isArrayBufferView(V)) {
        flags &= ~webidl.attributes.AllowShared;
        return webidl.converters.ArrayBufferView(V, prefix, argument, flags);
    }
    // Make this explicit for easier debugging
    if (types.isSharedArrayBuffer(V)) {
        throw webidl.errors.exception({
            header: prefix,
            message: `${argument} cannot be a SharedArrayBuffer.`
        });
    }
    throw webidl.errors.conversionFailed({
        prefix,
        argument: `${argument} ("${webidl.util.Stringify(V)}")`,
        types: [
            'ArrayBuffer',
            'ArrayBufferView'
        ]
    });
};
// https://webidl.spec.whatwg.org/#AllowSharedBufferSource
webidl.converters.AllowSharedBufferSource = function(V, prefix, argument, flags) {
    if (types.isArrayBuffer(V)) {
        return webidl.converters.ArrayBuffer(V, prefix, argument, flags);
    }
    if (types.isSharedArrayBuffer(V)) {
        return webidl.converters.SharedArrayBuffer(V, prefix, argument, flags);
    }
    if (types.isArrayBufferView(V)) {
        flags |= webidl.attributes.AllowShared;
        return webidl.converters.ArrayBufferView(V, prefix, argument, flags);
    }
    throw webidl.errors.conversionFailed({
        prefix,
        argument: `${argument} ("${webidl.util.Stringify(V)}")`,
        types: [
            'ArrayBuffer',
            'SharedArrayBuffer',
            'ArrayBufferView'
        ]
    });
};
webidl.converters['sequence<ByteString>'] = webidl.sequenceConverter(webidl.converters.ByteString);
webidl.converters['sequence<sequence<ByteString>>'] = webidl.sequenceConverter(webidl.converters['sequence<ByteString>']);
webidl.converters['record<ByteString, ByteString>'] = webidl.recordConverter(webidl.converters.ByteString, webidl.converters.ByteString);
webidl.converters.Blob = webidl.interfaceConverter(webidl.is.Blob, 'Blob');
webidl.converters.AbortSignal = webidl.interfaceConverter(webidl.is.AbortSignal, 'AbortSignal');
/**
 * [LegacyTreatNonObjectAsNull]
 * callback EventHandlerNonNull = any (Event event);
 * typedef EventHandlerNonNull? EventHandler;
 * @param {*} V
 */ webidl.converters.EventHandlerNonNull = function(V) {
    if (webidl.util.Type(V) !== OBJECT) {
        return null;
    }
    // [I]f the value is not an object, it will be converted to null, and if the value is not callable,
    // it will be converted to a callback function value that does nothing when called.
    if (typeof V === 'function') {
        return V;
    }
    return ()=>{};
};
webidl.attributes = {
    Clamp: 1 << 0,
    EnforceRange: 1 << 1,
    AllowShared: 1 << 2,
    AllowResizable: 1 << 3,
    LegacyNullToEmptyString: 1 << 4
};
module.exports = {
    webidl
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Transform } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const zlib = __turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)");
const { redirectStatusSet, referrerPolicyTokens, badPortsSet } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/constants.js [app-rsc] (ecmascript)");
const { getGlobalOrigin } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/global.js [app-rsc] (ecmascript)");
const { collectASequenceOfCodePoints, collectAnHTTPQuotedString, removeChars, parseMIMEType } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { performance } = __turbopack_context__.r("[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)");
const { ReadableStreamFrom, isValidHTTPToken, normalizedMethodRecordsBase } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { isUint8Array } = __turbopack_context__.r("[externals]/node:util/types [external] (node:util/types, cjs)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
function responseURL(response) {
    // https://fetch.spec.whatwg.org/#responses
    // A response has an associated URL. It is a pointer to the last URL
    // in response’s URL list and null if response’s URL list is empty.
    const urlList = response.urlList;
    const length = urlList.length;
    return length === 0 ? null : urlList[length - 1].toString();
}
// https://fetch.spec.whatwg.org/#concept-response-location-url
function responseLocationURL(response, requestFragment) {
    // 1. If response’s status is not a redirect status, then return null.
    if (!redirectStatusSet.has(response.status)) {
        return null;
    }
    // 2. Let location be the result of extracting header list values given
    // `Location` and response’s header list.
    let location = response.headersList.get('location', true);
    // 3. If location is a header value, then set location to the result of
    //    parsing location with response’s URL.
    if (location !== null && isValidHeaderValue(location)) {
        if (!isValidEncodedURL(location)) {
            // Some websites respond location header in UTF-8 form without encoding them as ASCII
            // and major browsers redirect them to correctly UTF-8 encoded addresses.
            // Here, we handle that behavior in the same way.
            location = normalizeBinaryStringToUtf8(location);
        }
        location = new URL(location, responseURL(response));
    }
    // 4. If location is a URL whose fragment is null, then set location’s
    // fragment to requestFragment.
    if (location && !location.hash) {
        location.hash = requestFragment;
    }
    // 5. Return location.
    return location;
}
/**
 * @see https://www.rfc-editor.org/rfc/rfc1738#section-2.2
 * @param {string} url
 * @returns {boolean}
 */ function isValidEncodedURL(url) {
    for(let i = 0; i < url.length; ++i){
        const code = url.charCodeAt(i);
        if (code > 0x7E || // Non-US-ASCII + DEL
        code < 0x20 // Control characters NUL - US
        ) {
            return false;
        }
    }
    return true;
}
/**
 * If string contains non-ASCII characters, assumes it's UTF-8 encoded and decodes it.
 * Since UTF-8 is a superset of ASCII, this will work for ASCII strings as well.
 * @param {string} value
 * @returns {string}
 */ function normalizeBinaryStringToUtf8(value) {
    return Buffer.from(value, 'binary').toString('utf8');
}
/** @returns {URL} */ function requestCurrentURL(request) {
    return request.urlList[request.urlList.length - 1];
}
function requestBadPort(request) {
    // 1. Let url be request’s current URL.
    const url = requestCurrentURL(request);
    // 2. If url’s scheme is an HTTP(S) scheme and url’s port is a bad port,
    // then return blocked.
    if (urlIsHttpHttpsScheme(url) && badPortsSet.has(url.port)) {
        return 'blocked';
    }
    // 3. Return allowed.
    return 'allowed';
}
function isErrorLike(object) {
    return object instanceof Error || object?.constructor?.name === 'Error' || object?.constructor?.name === 'DOMException';
}
// Check whether |statusText| is a ByteString and
// matches the Reason-Phrase token production.
// RFC 2616: https://tools.ietf.org/html/rfc2616
// RFC 7230: https://tools.ietf.org/html/rfc7230
// "reason-phrase = *( HTAB / SP / VCHAR / obs-text )"
// https://github.com/chromium/chromium/blob/94.0.4604.1/third_party/blink/renderer/core/fetch/response.cc#L116
function isValidReasonPhrase(statusText) {
    for(let i = 0; i < statusText.length; ++i){
        const c = statusText.charCodeAt(i);
        if (!(c === 0x09 || c >= 0x20 && c <= 0x7e || c >= 0x80 && c <= 0xff) // obs-text
        ) {
            return false;
        }
    }
    return true;
}
/**
 * @see https://fetch.spec.whatwg.org/#header-name
 * @param {string} potentialValue
 */ const isValidHeaderName = isValidHTTPToken;
/**
 * @see https://fetch.spec.whatwg.org/#header-value
 * @param {string} potentialValue
 */ function isValidHeaderValue(potentialValue) {
    // - Has no leading or trailing HTTP tab or space bytes.
    // - Contains no 0x00 (NUL) or HTTP newline bytes.
    return (potentialValue[0] === '\t' || potentialValue[0] === ' ' || potentialValue[potentialValue.length - 1] === '\t' || potentialValue[potentialValue.length - 1] === ' ' || potentialValue.includes('\n') || potentialValue.includes('\r') || potentialValue.includes('\0')) === false;
}
/**
 * Parse a referrer policy from a Referrer-Policy header
 * @see https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header
 */ function parseReferrerPolicy(actualResponse) {
    // 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy` and response’s header list.
    const policyHeader = (actualResponse.headersList.get('referrer-policy', true) ?? '').split(',');
    // 2. Let policy be the empty string.
    let policy = '';
    // 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty string, then set policy to token.
    // Note: As the referrer-policy can contain multiple policies
    // separated by comma, we need to loop through all of them
    // and pick the first valid one.
    // Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#specify_a_fallback_policy
    if (policyHeader.length) {
        // The right-most policy takes precedence.
        // The left-most policy is the fallback.
        for(let i = policyHeader.length; i !== 0; i--){
            const token = policyHeader[i - 1].trim();
            if (referrerPolicyTokens.has(token)) {
                policy = token;
                break;
            }
        }
    }
    // 4. Return policy.
    return policy;
}
/**
 * Given a request request and a response actualResponse, this algorithm
 * updates request’s referrer policy according to the Referrer-Policy
 * header (if any) in actualResponse.
 * @see https://w3c.github.io/webappsec-referrer-policy/#set-requests-referrer-policy-on-redirect
 * @param {import('./request').Request} request
 * @param {import('./response').Response} actualResponse
 */ function setRequestReferrerPolicyOnRedirect(request, actualResponse) {
    // 1. Let policy be the result of executing § 8.1 Parse a referrer policy
    // from a Referrer-Policy header on actualResponse.
    const policy = parseReferrerPolicy(actualResponse);
    // 2. If policy is not the empty string, then set request’s referrer policy to policy.
    if (policy !== '') {
        request.referrerPolicy = policy;
    }
}
// https://fetch.spec.whatwg.org/#cross-origin-resource-policy-check
function crossOriginResourcePolicyCheck() {
    // TODO
    return 'allowed';
}
// https://fetch.spec.whatwg.org/#concept-cors-check
function corsCheck() {
    // TODO
    return 'success';
}
// https://fetch.spec.whatwg.org/#concept-tao-check
function TAOCheck() {
    // TODO
    return 'success';
}
function appendFetchMetadata(httpRequest) {
    //  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-dest-header
    //  TODO
    //  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-mode-header
    //  1. Assert: r’s url is a potentially trustworthy URL.
    //  TODO
    //  2. Let header be a Structured Header whose value is a token.
    let header = null;
    //  3. Set header’s value to r’s mode.
    header = httpRequest.mode;
    //  4. Set a structured field value `Sec-Fetch-Mode`/header in r’s header list.
    httpRequest.headersList.set('sec-fetch-mode', header, true);
//  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-site-header
//  TODO
//  https://w3c.github.io/webappsec-fetch-metadata/#sec-fetch-user-header
//  TODO
}
// https://fetch.spec.whatwg.org/#append-a-request-origin-header
function appendRequestOriginHeader(request) {
    // 1. Let serializedOrigin be the result of byte-serializing a request origin
    //    with request.
    // TODO: implement "byte-serializing a request origin"
    let serializedOrigin = request.origin;
    // - "'client' is changed to an origin during fetching."
    //   This doesn't happen in undici (in most cases) because undici, by default,
    //   has no concept of origin.
    // - request.origin can also be set to request.client.origin (client being
    //   an environment settings object), which is undefined without using
    //   setGlobalOrigin.
    if (serializedOrigin === 'client' || serializedOrigin === undefined) {
        return;
    }
    // 2. If request’s response tainting is "cors" or request’s mode is "websocket",
    //    then append (`Origin`, serializedOrigin) to request’s header list.
    // 3. Otherwise, if request’s method is neither `GET` nor `HEAD`, then:
    if (request.responseTainting === 'cors' || request.mode === 'websocket') {
        request.headersList.append('origin', serializedOrigin, true);
    } else if (request.method !== 'GET' && request.method !== 'HEAD') {
        // 1. Switch on request’s referrer policy:
        switch(request.referrerPolicy){
            case 'no-referrer':
                // Set serializedOrigin to `null`.
                serializedOrigin = null;
                break;
            case 'no-referrer-when-downgrade':
            case 'strict-origin':
            case 'strict-origin-when-cross-origin':
                // If request’s origin is a tuple origin, its scheme is "https", and
                // request’s current URL’s scheme is not "https", then set
                // serializedOrigin to `null`.
                if (request.origin && urlHasHttpsScheme(request.origin) && !urlHasHttpsScheme(requestCurrentURL(request))) {
                    serializedOrigin = null;
                }
                break;
            case 'same-origin':
                // If request’s origin is not same origin with request’s current URL’s
                // origin, then set serializedOrigin to `null`.
                if (!sameOrigin(request, requestCurrentURL(request))) {
                    serializedOrigin = null;
                }
                break;
            default:
        }
        // 2. Append (`Origin`, serializedOrigin) to request’s header list.
        request.headersList.append('origin', serializedOrigin, true);
    }
}
// https://w3c.github.io/hr-time/#dfn-coarsen-time
function coarsenTime(timestamp, crossOriginIsolatedCapability) {
    // TODO
    return timestamp;
}
// https://fetch.spec.whatwg.org/#clamp-and-coarsen-connection-timing-info
function clampAndCoarsenConnectionTimingInfo(connectionTimingInfo, defaultStartTime, crossOriginIsolatedCapability) {
    if (!connectionTimingInfo?.startTime || connectionTimingInfo.startTime < defaultStartTime) {
        return {
            domainLookupStartTime: defaultStartTime,
            domainLookupEndTime: defaultStartTime,
            connectionStartTime: defaultStartTime,
            connectionEndTime: defaultStartTime,
            secureConnectionStartTime: defaultStartTime,
            ALPNNegotiatedProtocol: connectionTimingInfo?.ALPNNegotiatedProtocol
        };
    }
    return {
        domainLookupStartTime: coarsenTime(connectionTimingInfo.domainLookupStartTime, crossOriginIsolatedCapability),
        domainLookupEndTime: coarsenTime(connectionTimingInfo.domainLookupEndTime, crossOriginIsolatedCapability),
        connectionStartTime: coarsenTime(connectionTimingInfo.connectionStartTime, crossOriginIsolatedCapability),
        connectionEndTime: coarsenTime(connectionTimingInfo.connectionEndTime, crossOriginIsolatedCapability),
        secureConnectionStartTime: coarsenTime(connectionTimingInfo.secureConnectionStartTime, crossOriginIsolatedCapability),
        ALPNNegotiatedProtocol: connectionTimingInfo.ALPNNegotiatedProtocol
    };
}
// https://w3c.github.io/hr-time/#dfn-coarsened-shared-current-time
function coarsenedSharedCurrentTime(crossOriginIsolatedCapability) {
    return coarsenTime(performance.now(), crossOriginIsolatedCapability);
}
// https://fetch.spec.whatwg.org/#create-an-opaque-timing-info
function createOpaqueTimingInfo(timingInfo) {
    return {
        startTime: timingInfo.startTime ?? 0,
        redirectStartTime: 0,
        redirectEndTime: 0,
        postRedirectStartTime: timingInfo.startTime ?? 0,
        finalServiceWorkerStartTime: 0,
        finalNetworkResponseStartTime: 0,
        finalNetworkRequestStartTime: 0,
        endTime: 0,
        encodedBodySize: 0,
        decodedBodySize: 0,
        finalConnectionTimingInfo: null
    };
}
// https://html.spec.whatwg.org/multipage/origin.html#policy-container
function makePolicyContainer() {
    // Note: the fetch spec doesn't make use of embedder policy or CSP list
    return {
        referrerPolicy: 'strict-origin-when-cross-origin'
    };
}
// https://html.spec.whatwg.org/multipage/origin.html#clone-a-policy-container
function clonePolicyContainer(policyContainer) {
    return {
        referrerPolicy: policyContainer.referrerPolicy
    };
}
/**
 * Determine request’s Referrer
 *
 * @see https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer
 */ function determineRequestsReferrer(request) {
    // Given a request request, we can determine the correct referrer information
    // to send by examining its referrer policy as detailed in the following
    // steps, which return either no referrer or a URL:
    // 1. Let policy be request's referrer policy.
    const policy = request.referrerPolicy;
    // Note: policy cannot (shouldn't) be null or an empty string.
    assert(policy);
    // 2. Let environment be request’s client.
    let referrerSource = null;
    // 3. Switch on request’s referrer:
    // "client"
    if (request.referrer === 'client') {
        // Note: node isn't a browser and doesn't implement document/iframes,
        // so we bypass this step and replace it with our own.
        const globalOrigin = getGlobalOrigin();
        if (!globalOrigin || globalOrigin.origin === 'null') {
            return 'no-referrer';
        }
        // Note: we need to clone it as it's mutated
        referrerSource = new URL(globalOrigin);
    // a URL
    } else if (webidl.is.URL(request.referrer)) {
        // Let referrerSource be request’s referrer.
        referrerSource = request.referrer;
    }
    // 4. Let request’s referrerURL be the result of stripping referrerSource for
    //    use as a referrer.
    let referrerURL = stripURLForReferrer(referrerSource);
    // 5. Let referrerOrigin be the result of stripping referrerSource for use as
    //    a referrer, with the origin-only flag set to true.
    const referrerOrigin = stripURLForReferrer(referrerSource, true);
    // 6. If the result of serializing referrerURL is a string whose length is
    //    greater than 4096, set referrerURL to referrerOrigin.
    if (referrerURL.toString().length > 4096) {
        referrerURL = referrerOrigin;
    }
    // 7. The user agent MAY alter referrerURL or referrerOrigin at this point
    // to enforce arbitrary policy considerations in the interests of minimizing
    // data leakage. For example, the user agent could strip the URL down to an
    // origin, modify its host, replace it with an empty string, etc.
    // 8. Execute the switch statements corresponding to the value of policy:
    switch(policy){
        case 'no-referrer':
            // Return no referrer
            return 'no-referrer';
        case 'origin':
            // Return referrerOrigin
            if (referrerOrigin != null) {
                return referrerOrigin;
            }
            return stripURLForReferrer(referrerSource, true);
        case 'unsafe-url':
            // Return referrerURL.
            return referrerURL;
        case 'strict-origin':
            {
                const currentURL = requestCurrentURL(request);
                // 1. If referrerURL is a potentially trustworthy URL and request’s
                //    current URL is not a potentially trustworthy URL, then return no
                //    referrer.
                if (isURLPotentiallyTrustworthy(referrerURL) && !isURLPotentiallyTrustworthy(currentURL)) {
                    return 'no-referrer';
                }
                // 2. Return referrerOrigin
                return referrerOrigin;
            }
        case 'strict-origin-when-cross-origin':
            {
                const currentURL = requestCurrentURL(request);
                // 1. If the origin of referrerURL and the origin of request’s current
                //    URL are the same, then return referrerURL.
                if (sameOrigin(referrerURL, currentURL)) {
                    return referrerURL;
                }
                // 2. If referrerURL is a potentially trustworthy URL and request’s
                //    current URL is not a potentially trustworthy URL, then return no
                //    referrer.
                if (isURLPotentiallyTrustworthy(referrerURL) && !isURLPotentiallyTrustworthy(currentURL)) {
                    return 'no-referrer';
                }
                // 3. Return referrerOrigin.
                return referrerOrigin;
            }
        case 'same-origin':
            // 1. If the origin of referrerURL and the origin of request’s current
            // URL are the same, then return referrerURL.
            if (sameOrigin(request, referrerURL)) {
                return referrerURL;
            }
            // 2. Return no referrer.
            return 'no-referrer';
        case 'origin-when-cross-origin':
            // 1. If the origin of referrerURL and the origin of request’s current
            // URL are the same, then return referrerURL.
            if (sameOrigin(request, referrerURL)) {
                return referrerURL;
            }
            // 2. Return referrerOrigin.
            return referrerOrigin;
        case 'no-referrer-when-downgrade':
            {
                const currentURL = requestCurrentURL(request);
                // 1. If referrerURL is a potentially trustworthy URL and request’s
                //    current URL is not a potentially trustworthy URL, then return no
                //    referrer.
                if (isURLPotentiallyTrustworthy(referrerURL) && !isURLPotentiallyTrustworthy(currentURL)) {
                    return 'no-referrer';
                }
                // 2. Return referrerURL.
                return referrerURL;
            }
    }
}
/**
 * Certain portions of URLs must not be included when sending a URL as the
 * value of a `Referer` header: a URLs fragment, username, and password
 * components must be stripped from the URL before it’s sent out. This
 * algorithm accepts a origin-only flag, which defaults to false. If set to
 * true, the algorithm will additionally remove the URL’s path and query
 * components, leaving only the scheme, host, and port.
 *
 * @see https://w3c.github.io/webappsec-referrer-policy/#strip-url
 * @param {URL} url
 * @param {boolean} [originOnly=false]
 */ function stripURLForReferrer(url, originOnly = false) {
    // 1. Assert: url is a URL.
    assert(webidl.is.URL(url));
    // Note: Create a new URL instance to avoid mutating the original URL.
    url = new URL(url);
    // 2. If url’s scheme is a local scheme, then return no referrer.
    if (urlIsLocal(url)) {
        return 'no-referrer';
    }
    // 3. Set url’s username to the empty string.
    url.username = '';
    // 4. Set url’s password to the empty string.
    url.password = '';
    // 5. Set url’s fragment to null.
    url.hash = '';
    // 6. If the origin-only flag is true, then:
    if (originOnly === true) {
        // 1. Set url’s path to « the empty string ».
        url.pathname = '';
        // 2. Set url’s query to null.
        url.search = '';
    }
    // 7. Return url.
    return url;
}
const isPotentialleTrustworthyIPv4 = RegExp.prototype.test.bind(/^127\.(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)\.){2}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/);
const isPotentiallyTrustworthyIPv6 = RegExp.prototype.test.bind(/^(?:(?:0{1,4}:){7}|(?:0{1,4}:){1,6}:|::)0{0,3}1$/);
/**
 * Check if host matches one of the CIDR notations 127.0.0.0/8 or ::1/128.
 *
 * @param {string} origin
 * @returns {boolean}
 */ function isOriginIPPotentiallyTrustworthy(origin) {
    // IPv6
    if (origin.includes(':')) {
        // Remove brackets from IPv6 addresses
        if (origin[0] === '[' && origin[origin.length - 1] === ']') {
            origin = origin.slice(1, -1);
        }
        return isPotentiallyTrustworthyIPv6(origin);
    }
    // IPv4
    return isPotentialleTrustworthyIPv4(origin);
}
/**
 * A potentially trustworthy origin is one which a user agent can generally
 * trust as delivering data securely.
 *
 * Return value `true` means `Potentially Trustworthy`.
 * Return value `false` means `Not Trustworthy`.
 *
 * @see https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy
 * @param {string} origin
 * @returns {boolean}
 */ function isOriginPotentiallyTrustworthy(origin) {
    // 1. If origin is an opaque origin, return "Not Trustworthy".
    if (origin == null || origin === 'null') {
        return false;
    }
    // 2. Assert: origin is a tuple origin.
    origin = new URL(origin);
    // 3. If origin’s scheme is either "https" or "wss",
    //    return "Potentially Trustworthy".
    if (origin.protocol === 'https:' || origin.protocol === 'wss:') {
        return true;
    }
    // 4. If origin’s host matches one of the CIDR notations 127.0.0.0/8 or
    // ::1/128 [RFC4632], return "Potentially Trustworthy".
    if (isOriginIPPotentiallyTrustworthy(origin.hostname)) {
        return true;
    }
    // 5. If the user agent conforms to the name resolution rules in
    //    [let-localhost-be-localhost] and one of the following is true:
    //    origin’s host is "localhost" or "localhost."
    if (origin.hostname === 'localhost' || origin.hostname === 'localhost.') {
        return true;
    }
    //    origin’s host ends with ".localhost" or ".localhost."
    if (origin.hostname.endsWith('.localhost') || origin.hostname.endsWith('.localhost.')) {
        return true;
    }
    // 6. If origin’s scheme is "file", return "Potentially Trustworthy".
    if (origin.protocol === 'file:') {
        return true;
    }
    // 7. If origin’s scheme component is one which the user agent considers to
    // be authenticated, return "Potentially Trustworthy".
    // 8. If origin has been configured as a trustworthy origin, return
    //    "Potentially Trustworthy".
    // 9. Return "Not Trustworthy".
    return false;
}
/**
 * A potentially trustworthy URL is one which either inherits context from its
 * creator (about:blank, about:srcdoc, data) or one whose origin is a
 * potentially trustworthy origin.
 *
 * Return value `true` means `Potentially Trustworthy`.
 * Return value `false` means `Not Trustworthy`.
 *
 * @see https://www.w3.org/TR/secure-contexts/#is-url-trustworthy
 * @param {URL} url
 * @returns {boolean}
 */ function isURLPotentiallyTrustworthy(url) {
    // Given a URL record (url), the following algorithm returns "Potentially
    // Trustworthy" or "Not Trustworthy" as appropriate:
    if (!webidl.is.URL(url)) {
        return false;
    }
    // 1. If url is "about:blank" or "about:srcdoc",
    //    return "Potentially Trustworthy".
    if (url.href === 'about:blank' || url.href === 'about:srcdoc') {
        return true;
    }
    // 2. If url’s scheme is "data", return "Potentially Trustworthy".
    if (url.protocol === 'data:') return true;
    // Note: The origin of blob: URLs is the origin of the context in which they
    // were created. Therefore, blobs created in a trustworthy origin will
    // themselves be potentially trustworthy.
    if (url.protocol === 'blob:') return true;
    // 3. Return the result of executing § 3.1 Is origin potentially trustworthy?
    // on url’s origin.
    return isOriginPotentiallyTrustworthy(url.origin);
}
// https://w3c.github.io/webappsec-upgrade-insecure-requests/#upgrade-request
function tryUpgradeRequestToAPotentiallyTrustworthyURL(request) {
// TODO
}
/**
 * @link {https://html.spec.whatwg.org/multipage/origin.html#same-origin}
 * @param {URL} A
 * @param {URL} B
 */ function sameOrigin(A, B) {
    // 1. If A and B are the same opaque origin, then return true.
    if (A.origin === B.origin && A.origin === 'null') {
        return true;
    }
    // 2. If A and B are both tuple origins and their schemes,
    //    hosts, and port are identical, then return true.
    if (A.protocol === B.protocol && A.hostname === B.hostname && A.port === B.port) {
        return true;
    }
    // 3. Return false.
    return false;
}
function isAborted(fetchParams) {
    return fetchParams.controller.state === 'aborted';
}
function isCancelled(fetchParams) {
    return fetchParams.controller.state === 'aborted' || fetchParams.controller.state === 'terminated';
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-method-normalize
 * @param {string} method
 */ function normalizeMethod(method) {
    return normalizedMethodRecordsBase[method.toLowerCase()] ?? method;
}
// https://infra.spec.whatwg.org/#serialize-a-javascript-value-to-a-json-string
function serializeJavascriptValueToJSONString(value) {
    // 1. Let result be ? Call(%JSON.stringify%, undefined, « value »).
    const result = JSON.stringify(value);
    // 2. If result is undefined, then throw a TypeError.
    if (result === undefined) {
        throw new TypeError('Value is not JSON serializable');
    }
    // 3. Assert: result is a string.
    assert(typeof result === 'string');
    // 4. Return result.
    return result;
}
// https://tc39.es/ecma262/#sec-%25iteratorprototype%25-object
const esIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
/**
 * @see https://webidl.spec.whatwg.org/#dfn-iterator-prototype-object
 * @param {string} name name of the instance
 * @param {((target: any) => any)} kInternalIterator
 * @param {string | number} [keyIndex]
 * @param {string | number} [valueIndex]
 */ function createIterator(name, kInternalIterator, keyIndex = 0, valueIndex = 1) {
    class FastIterableIterator {
        /** @type {any} */ #target;
        /** @type {'key' | 'value' | 'key+value'} */ #kind;
        /** @type {number} */ #index;
        /**
     * @see https://webidl.spec.whatwg.org/#dfn-default-iterator-object
     * @param {unknown} target
     * @param {'key' | 'value' | 'key+value'} kind
     */ constructor(target, kind){
            this.#target = target;
            this.#kind = kind;
            this.#index = 0;
        }
        next() {
            // 1. Let interface be the interface for which the iterator prototype object exists.
            // 2. Let thisValue be the this value.
            // 3. Let object be ? ToObject(thisValue).
            // 4. If object is a platform object, then perform a security
            //    check, passing:
            // 5. If object is not a default iterator object for interface,
            //    then throw a TypeError.
            if (typeof this !== 'object' || this === null || !(#target in this)) {
                throw new TypeError(`'next' called on an object that does not implement interface ${name} Iterator.`);
            }
            // 6. Let index be object’s index.
            // 7. Let kind be object’s kind.
            // 8. Let values be object’s target's value pairs to iterate over.
            const index = this.#index;
            const values = kInternalIterator(this.#target);
            // 9. Let len be the length of values.
            const len = values.length;
            // 10. If index is greater than or equal to len, then return
            //     CreateIterResultObject(undefined, true).
            if (index >= len) {
                return {
                    value: undefined,
                    done: true
                };
            }
            // 11. Let pair be the entry in values at index index.
            const { [keyIndex]: key, [valueIndex]: value } = values[index];
            // 12. Set object’s index to index + 1.
            this.#index = index + 1;
            // 13. Return the iterator result for pair and kind.
            // https://webidl.spec.whatwg.org/#iterator-result
            // 1. Let result be a value determined by the value of kind:
            let result;
            switch(this.#kind){
                case 'key':
                    // 1. Let idlKey be pair’s key.
                    // 2. Let key be the result of converting idlKey to an
                    //    ECMAScript value.
                    // 3. result is key.
                    result = key;
                    break;
                case 'value':
                    // 1. Let idlValue be pair’s value.
                    // 2. Let value be the result of converting idlValue to
                    //    an ECMAScript value.
                    // 3. result is value.
                    result = value;
                    break;
                case 'key+value':
                    // 1. Let idlKey be pair’s key.
                    // 2. Let idlValue be pair’s value.
                    // 3. Let key be the result of converting idlKey to an
                    //    ECMAScript value.
                    // 4. Let value be the result of converting idlValue to
                    //    an ECMAScript value.
                    // 5. Let array be ! ArrayCreate(2).
                    // 6. Call ! CreateDataProperty(array, "0", key).
                    // 7. Call ! CreateDataProperty(array, "1", value).
                    // 8. result is array.
                    result = [
                        key,
                        value
                    ];
                    break;
            }
            // 2. Return CreateIterResultObject(result, false).
            return {
                value: result,
                done: false
            };
        }
    }
    // https://webidl.spec.whatwg.org/#dfn-iterator-prototype-object
    // @ts-ignore
    delete FastIterableIterator.prototype.constructor;
    Object.setPrototypeOf(FastIterableIterator.prototype, esIteratorPrototype);
    Object.defineProperties(FastIterableIterator.prototype, {
        [Symbol.toStringTag]: {
            writable: false,
            enumerable: false,
            configurable: true,
            value: `${name} Iterator`
        },
        next: {
            writable: true,
            enumerable: true,
            configurable: true
        }
    });
    /**
   * @param {unknown} target
   * @param {'key' | 'value' | 'key+value'} kind
   * @returns {IterableIterator<any>}
   */ return function(target, kind) {
        return new FastIterableIterator(target, kind);
    };
}
/**
 * @see https://webidl.spec.whatwg.org/#dfn-iterator-prototype-object
 * @param {string} name name of the instance
 * @param {any} object class
 * @param {(target: any) => any} kInternalIterator
 * @param {string | number} [keyIndex]
 * @param {string | number} [valueIndex]
 */ function iteratorMixin(name, object, kInternalIterator, keyIndex = 0, valueIndex = 1) {
    const makeIterator = createIterator(name, kInternalIterator, keyIndex, valueIndex);
    const properties = {
        keys: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function keys() {
                webidl.brandCheck(this, object);
                return makeIterator(this, 'key');
            }
        },
        values: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function values() {
                webidl.brandCheck(this, object);
                return makeIterator(this, 'value');
            }
        },
        entries: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function entries() {
                webidl.brandCheck(this, object);
                return makeIterator(this, 'key+value');
            }
        },
        forEach: {
            writable: true,
            enumerable: true,
            configurable: true,
            value: function forEach(callbackfn, thisArg = globalThis) {
                webidl.brandCheck(this, object);
                webidl.argumentLengthCheck(arguments, 1, `${name}.forEach`);
                if (typeof callbackfn !== 'function') {
                    throw new TypeError(`Failed to execute 'forEach' on '${name}': parameter 1 is not of type 'Function'.`);
                }
                for (const { 0: key, 1: value } of makeIterator(this, 'key+value')){
                    callbackfn.call(thisArg, value, key, this);
                }
            }
        }
    };
    return Object.defineProperties(object.prototype, {
        ...properties,
        [Symbol.iterator]: {
            writable: true,
            enumerable: false,
            configurable: true,
            value: properties.entries.value
        }
    });
}
/**
 * @param {import('./body').ExtractBodyResult} body
 * @param {(bytes: Uint8Array) => void} processBody
 * @param {(error: Error) => void} processBodyError
 * @returns {void}
 *
 * @see https://fetch.spec.whatwg.org/#body-fully-read
 */ function fullyReadBody(body, processBody, processBodyError) {
    // 1. If taskDestination is null, then set taskDestination to
    //    the result of starting a new parallel queue.
    // 2. Let successSteps given a byte sequence bytes be to queue a
    //    fetch task to run processBody given bytes, with taskDestination.
    const successSteps = processBody;
    // 3. Let errorSteps be to queue a fetch task to run processBodyError,
    //    with taskDestination.
    const errorSteps = processBodyError;
    try {
        // 4. Let reader be the result of getting a reader for body’s stream.
        //    If that threw an exception, then run errorSteps with that
        //    exception and return.
        const reader = body.stream.getReader();
        // 5. Read all bytes from reader, given successSteps and errorSteps.
        readAllBytes(reader, successSteps, errorSteps);
    } catch (e) {
        errorSteps(e);
    }
}
/**
 * @param {ReadableStreamController<Uint8Array>} controller
 */ function readableStreamClose(controller) {
    try {
        controller.close();
        controller.byobRequest?.respond(0);
    } catch (err) {
        // TODO: add comment explaining why this error occurs.
        if (!err.message.includes('Controller is already closed') && !err.message.includes('ReadableStream is already closed')) {
            throw err;
        }
    }
}
const invalidIsomorphicEncodeValueRegex = /[^\x00-\xFF]/ // eslint-disable-line
;
/**
 * @see https://infra.spec.whatwg.org/#isomorphic-encode
 * @param {string} input
 */ function isomorphicEncode(input) {
    // 1. Assert: input contains no code points greater than U+00FF.
    assert(!invalidIsomorphicEncodeValueRegex.test(input));
    // 2. Return a byte sequence whose length is equal to input’s code
    //    point length and whose bytes have the same values as the
    //    values of input’s code points, in the same order
    return input;
}
/**
 * @see https://streams.spec.whatwg.org/#readablestreamdefaultreader-read-all-bytes
 * @see https://streams.spec.whatwg.org/#read-loop
 * @param {ReadableStream<Uint8Array<ArrayBuffer>>} reader
 * @param {(bytes: Uint8Array) => void} successSteps
 * @param {(error: Error) => void} failureSteps
 * @returns {Promise<void>}
 */ async function readAllBytes(reader, successSteps, failureSteps) {
    try {
        const bytes = [];
        let byteLength = 0;
        do {
            const { done, value: chunk } = await reader.read();
            if (done) {
                // 1. Call successSteps with bytes.
                successSteps(Buffer.concat(bytes, byteLength));
                return;
            }
            // 1. If chunk is not a Uint8Array object, call failureSteps
            //    with a TypeError and abort these steps.
            if (!isUint8Array(chunk)) {
                failureSteps(new TypeError('Received non-Uint8Array chunk'));
                return;
            }
            // 2. Append the bytes represented by chunk to bytes.
            bytes.push(chunk);
            byteLength += chunk.length;
        // 3. Read-loop given reader, bytes, successSteps, and failureSteps.
        }while (true)
    } catch (e) {
        // 1. Call failureSteps with e.
        failureSteps(e);
    }
}
/**
 * @see https://fetch.spec.whatwg.org/#is-local
 * @param {URL} url
 * @returns {boolean}
 */ function urlIsLocal(url) {
    assert('protocol' in url); // ensure it's a url object
    const protocol = url.protocol;
    // A URL is local if its scheme is a local scheme.
    // A local scheme is "about", "blob", or "data".
    return protocol === 'about:' || protocol === 'blob:' || protocol === 'data:';
}
/**
 * @param {string|URL} url
 * @returns {boolean}
 */ function urlHasHttpsScheme(url) {
    return typeof url === 'string' && url[5] === ':' && url[0] === 'h' && url[1] === 't' && url[2] === 't' && url[3] === 'p' && url[4] === 's' || url.protocol === 'https:';
}
/**
 * @see https://fetch.spec.whatwg.org/#http-scheme
 * @param {URL} url
 */ function urlIsHttpHttpsScheme(url) {
    assert('protocol' in url); // ensure it's a url object
    const protocol = url.protocol;
    return protocol === 'http:' || protocol === 'https:';
}
/**
 * @typedef {Object} RangeHeaderValue
 * @property {number|null} rangeStartValue
 * @property {number|null} rangeEndValue
 */ /**
 * @see https://fetch.spec.whatwg.org/#simple-range-header-value
 * @param {string} value
 * @param {boolean} allowWhitespace
 * @return {RangeHeaderValue|'failure'}
 */ function simpleRangeHeaderValue(value, allowWhitespace) {
    // 1. Let data be the isomorphic decoding of value.
    // Note: isomorphic decoding takes a sequence of bytes (ie. a Uint8Array) and turns it into a string,
    // nothing more. We obviously don't need to do that if value is a string already.
    const data = value;
    // 2. If data does not start with "bytes", then return failure.
    if (!data.startsWith('bytes')) {
        return 'failure';
    }
    // 3. Let position be a position variable for data, initially pointing at the 5th code point of data.
    const position = {
        position: 5
    };
    // 4. If allowWhitespace is true, collect a sequence of code points that are HTTP tab or space,
    //    from data given position.
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === '\t' || char === ' ', data, position);
    }
    // 5. If the code point at position within data is not U+003D (=), then return failure.
    if (data.charCodeAt(position.position) !== 0x3D) {
        return 'failure';
    }
    // 6. Advance position by 1.
    position.position++;
    // 7. If allowWhitespace is true, collect a sequence of code points that are HTTP tab or space, from
    //    data given position.
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === '\t' || char === ' ', data, position);
    }
    // 8. Let rangeStart be the result of collecting a sequence of code points that are ASCII digits,
    //    from data given position.
    const rangeStart = collectASequenceOfCodePoints((char)=>{
        const code = char.charCodeAt(0);
        return code >= 0x30 && code <= 0x39;
    }, data, position);
    // 9. Let rangeStartValue be rangeStart, interpreted as decimal number, if rangeStart is not the
    //    empty string; otherwise null.
    const rangeStartValue = rangeStart.length ? Number(rangeStart) : null;
    // 10. If allowWhitespace is true, collect a sequence of code points that are HTTP tab or space,
    //     from data given position.
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === '\t' || char === ' ', data, position);
    }
    // 11. If the code point at position within data is not U+002D (-), then return failure.
    if (data.charCodeAt(position.position) !== 0x2D) {
        return 'failure';
    }
    // 12. Advance position by 1.
    position.position++;
    // 13. If allowWhitespace is true, collect a sequence of code points that are HTTP tab
    //     or space, from data given position.
    // Note from Khafra: its the same step as in #8 again lol
    if (allowWhitespace) {
        collectASequenceOfCodePoints((char)=>char === '\t' || char === ' ', data, position);
    }
    // 14. Let rangeEnd be the result of collecting a sequence of code points that are
    //     ASCII digits, from data given position.
    // Note from Khafra: you wouldn't guess it, but this is also the same step as #8
    const rangeEnd = collectASequenceOfCodePoints((char)=>{
        const code = char.charCodeAt(0);
        return code >= 0x30 && code <= 0x39;
    }, data, position);
    // 15. Let rangeEndValue be rangeEnd, interpreted as decimal number, if rangeEnd
    //     is not the empty string; otherwise null.
    // Note from Khafra: THE SAME STEP, AGAIN!!!
    // Note: why interpret as a decimal if we only collect ascii digits?
    const rangeEndValue = rangeEnd.length ? Number(rangeEnd) : null;
    // 16. If position is not past the end of data, then return failure.
    if (position.position < data.length) {
        return 'failure';
    }
    // 17. If rangeEndValue and rangeStartValue are null, then return failure.
    if (rangeEndValue === null && rangeStartValue === null) {
        return 'failure';
    }
    // 18. If rangeStartValue and rangeEndValue are numbers, and rangeStartValue is
    //     greater than rangeEndValue, then return failure.
    // Note: ... when can they not be numbers?
    if (rangeStartValue > rangeEndValue) {
        return 'failure';
    }
    // 19. Return (rangeStartValue, rangeEndValue).
    return {
        rangeStartValue,
        rangeEndValue
    };
}
/**
 * @see https://fetch.spec.whatwg.org/#build-a-content-range
 * @param {number} rangeStart
 * @param {number} rangeEnd
 * @param {number} fullLength
 */ function buildContentRange(rangeStart, rangeEnd, fullLength) {
    // 1. Let contentRange be `bytes `.
    let contentRange = 'bytes ';
    // 2. Append rangeStart, serialized and isomorphic encoded, to contentRange.
    contentRange += isomorphicEncode(`${rangeStart}`);
    // 3. Append 0x2D (-) to contentRange.
    contentRange += '-';
    // 4. Append rangeEnd, serialized and isomorphic encoded to contentRange.
    contentRange += isomorphicEncode(`${rangeEnd}`);
    // 5. Append 0x2F (/) to contentRange.
    contentRange += '/';
    // 6. Append fullLength, serialized and isomorphic encoded to contentRange.
    contentRange += isomorphicEncode(`${fullLength}`);
    // 7. Return contentRange.
    return contentRange;
}
// A Stream, which pipes the response to zlib.createInflate() or
// zlib.createInflateRaw() depending on the first byte of the Buffer.
// If the lower byte of the first byte is 0x08, then the stream is
// interpreted as a zlib stream, otherwise it's interpreted as a
// raw deflate stream.
class InflateStream extends Transform {
    #zlibOptions;
    /** @param {zlib.ZlibOptions} [zlibOptions] */ constructor(zlibOptions){
        super();
        this.#zlibOptions = zlibOptions;
    }
    _transform(chunk, encoding, callback) {
        if (!this._inflateStream) {
            if (chunk.length === 0) {
                callback();
                return;
            }
            this._inflateStream = (chunk[0] & 0x0F) === 0x08 ? zlib.createInflate(this.#zlibOptions) : zlib.createInflateRaw(this.#zlibOptions);
            this._inflateStream.on('data', this.push.bind(this));
            this._inflateStream.on('end', ()=>this.push(null));
            this._inflateStream.on('error', (err)=>this.destroy(err));
        }
        this._inflateStream.write(chunk, encoding, callback);
    }
    _final(callback) {
        if (this._inflateStream) {
            this._inflateStream.end();
            this._inflateStream = null;
        }
        callback();
    }
}
/**
 * @param {zlib.ZlibOptions} [zlibOptions]
 * @returns {InflateStream}
 */ function createInflate(zlibOptions) {
    return new InflateStream(zlibOptions);
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-header-extract-mime-type
 * @param {import('./headers').HeadersList} headers
 */ function extractMimeType(headers) {
    // 1. Let charset be null.
    let charset = null;
    // 2. Let essence be null.
    let essence = null;
    // 3. Let mimeType be null.
    let mimeType = null;
    // 4. Let values be the result of getting, decoding, and splitting `Content-Type` from headers.
    const values = getDecodeSplit('content-type', headers);
    // 5. If values is null, then return failure.
    if (values === null) {
        return 'failure';
    }
    // 6. For each value of values:
    for (const value of values){
        // 6.1. Let temporaryMimeType be the result of parsing value.
        const temporaryMimeType = parseMIMEType(value);
        // 6.2. If temporaryMimeType is failure or its essence is "*/*", then continue.
        if (temporaryMimeType === 'failure' || temporaryMimeType.essence === '*/*') {
            continue;
        }
        // 6.3. Set mimeType to temporaryMimeType.
        mimeType = temporaryMimeType;
        // 6.4. If mimeType’s essence is not essence, then:
        if (mimeType.essence !== essence) {
            // 6.4.1. Set charset to null.
            charset = null;
            // 6.4.2. If mimeType’s parameters["charset"] exists, then set charset to
            //        mimeType’s parameters["charset"].
            if (mimeType.parameters.has('charset')) {
                charset = mimeType.parameters.get('charset');
            }
            // 6.4.3. Set essence to mimeType’s essence.
            essence = mimeType.essence;
        } else if (!mimeType.parameters.has('charset') && charset !== null) {
            // 6.5. Otherwise, if mimeType’s parameters["charset"] does not exist, and
            //      charset is non-null, set mimeType’s parameters["charset"] to charset.
            mimeType.parameters.set('charset', charset);
        }
    }
    // 7. If mimeType is null, then return failure.
    if (mimeType == null) {
        return 'failure';
    }
    // 8. Return mimeType.
    return mimeType;
}
/**
 * @see https://fetch.spec.whatwg.org/#header-value-get-decode-and-split
 * @param {string|null} value
 */ function gettingDecodingSplitting(value) {
    // 1. Let input be the result of isomorphic decoding value.
    const input = value;
    // 2. Let position be a position variable for input, initially pointing at the start of input.
    const position = {
        position: 0
    };
    // 3. Let values be a list of strings, initially empty.
    const values = [];
    // 4. Let temporaryValue be the empty string.
    let temporaryValue = '';
    // 5. While position is not past the end of input:
    while(position.position < input.length){
        // 5.1. Append the result of collecting a sequence of code points that are not U+0022 (")
        //      or U+002C (,) from input, given position, to temporaryValue.
        temporaryValue += collectASequenceOfCodePoints((char)=>char !== '"' && char !== ',', input, position);
        // 5.2. If position is not past the end of input, then:
        if (position.position < input.length) {
            // 5.2.1. If the code point at position within input is U+0022 ("), then:
            if (input.charCodeAt(position.position) === 0x22) {
                // 5.2.1.1. Append the result of collecting an HTTP quoted string from input, given position, to temporaryValue.
                temporaryValue += collectAnHTTPQuotedString(input, position);
                // 5.2.1.2. If position is not past the end of input, then continue.
                if (position.position < input.length) {
                    continue;
                }
            } else {
                // 5.2.2. Otherwise:
                // 5.2.2.1. Assert: the code point at position within input is U+002C (,).
                assert(input.charCodeAt(position.position) === 0x2C);
                // 5.2.2.2. Advance position by 1.
                position.position++;
            }
        }
        // 5.3. Remove all HTTP tab or space from the start and end of temporaryValue.
        temporaryValue = removeChars(temporaryValue, true, true, (char)=>char === 0x9 || char === 0x20);
        // 5.4. Append temporaryValue to values.
        values.push(temporaryValue);
        // 5.6. Set temporaryValue to the empty string.
        temporaryValue = '';
    }
    // 6. Return values.
    return values;
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-header-list-get-decode-split
 * @param {string} name lowercase header name
 * @param {import('./headers').HeadersList} list
 */ function getDecodeSplit(name, list) {
    // 1. Let value be the result of getting name from list.
    const value = list.get(name, true);
    // 2. If value is null, then return null.
    if (value === null) {
        return null;
    }
    // 3. Return the result of getting, decoding, and splitting value.
    return gettingDecodingSplitting(value);
}
const textDecoder = new TextDecoder();
/**
 * @see https://encoding.spec.whatwg.org/#utf-8-decode
 * @param {Buffer} buffer
 */ function utf8DecodeBytes(buffer) {
    if (buffer.length === 0) {
        return '';
    }
    // 1. Let buffer be the result of peeking three bytes from
    //    ioQueue, converted to a byte sequence.
    // 2. If buffer is 0xEF 0xBB 0xBF, then read three
    //    bytes from ioQueue. (Do nothing with those bytes.)
    if (buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
        buffer = buffer.subarray(3);
    }
    // 3. Process a queue with an instance of UTF-8’s
    //    decoder, ioQueue, output, and "replacement".
    const output = textDecoder.decode(buffer);
    // 4. Return output.
    return output;
}
class EnvironmentSettingsObjectBase {
    get baseUrl() {
        return getGlobalOrigin();
    }
    get origin() {
        return this.baseUrl?.origin;
    }
    policyContainer = makePolicyContainer();
}
class EnvironmentSettingsObject {
    settingsObject = new EnvironmentSettingsObjectBase();
}
const environmentSettingsObject = new EnvironmentSettingsObject();
module.exports = {
    isAborted,
    isCancelled,
    isValidEncodedURL,
    ReadableStreamFrom,
    tryUpgradeRequestToAPotentiallyTrustworthyURL,
    clampAndCoarsenConnectionTimingInfo,
    coarsenedSharedCurrentTime,
    determineRequestsReferrer,
    makePolicyContainer,
    clonePolicyContainer,
    appendFetchMetadata,
    appendRequestOriginHeader,
    TAOCheck,
    corsCheck,
    crossOriginResourcePolicyCheck,
    createOpaqueTimingInfo,
    setRequestReferrerPolicyOnRedirect,
    isValidHTTPToken,
    requestBadPort,
    requestCurrentURL,
    responseURL,
    responseLocationURL,
    isURLPotentiallyTrustworthy,
    isValidReasonPhrase,
    sameOrigin,
    normalizeMethod,
    serializeJavascriptValueToJSONString,
    iteratorMixin,
    createIterator,
    isValidHeaderName,
    isValidHeaderValue,
    isErrorLike,
    fullyReadBody,
    readableStreamClose,
    isomorphicEncode,
    urlIsLocal,
    urlHasHttpsScheme,
    urlIsHttpHttpsScheme,
    readAllBytes,
    simpleRangeHeaderValue,
    buildContentRange,
    createInflate,
    extractMimeType,
    getDecodeSplit,
    utf8DecodeBytes,
    environmentSettingsObject,
    isOriginIPPotentiallyTrustworthy
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/formdata.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { iteratorMixin } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const nodeUtil = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
// https://xhr.spec.whatwg.org/#formdata
class FormData {
    #state = [];
    constructor(form = undefined){
        webidl.util.markAsUncloneable(this);
        if (form !== undefined) {
            throw webidl.errors.conversionFailed({
                prefix: 'FormData constructor',
                argument: 'Argument 1',
                types: [
                    'undefined'
                ]
            });
        }
    }
    append(name, value, filename = undefined) {
        webidl.brandCheck(this, FormData);
        const prefix = 'FormData.append';
        webidl.argumentLengthCheck(arguments, 2, prefix);
        name = webidl.converters.USVString(name);
        if (arguments.length === 3 || webidl.is.Blob(value)) {
            value = webidl.converters.Blob(value, prefix, 'value');
            if (filename !== undefined) {
                filename = webidl.converters.USVString(filename);
            }
        } else {
            value = webidl.converters.USVString(value);
        }
        // 1. Let value be value if given; otherwise blobValue.
        // 2. Let entry be the result of creating an entry with
        // name, value, and filename if given.
        const entry = makeEntry(name, value, filename);
        // 3. Append entry to this’s entry list.
        this.#state.push(entry);
    }
    delete(name) {
        webidl.brandCheck(this, FormData);
        const prefix = 'FormData.delete';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name = webidl.converters.USVString(name);
        // The delete(name) method steps are to remove all entries whose name
        // is name from this’s entry list.
        this.#state = this.#state.filter((entry)=>entry.name !== name);
    }
    get(name) {
        webidl.brandCheck(this, FormData);
        const prefix = 'FormData.get';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name = webidl.converters.USVString(name);
        // 1. If there is no entry whose name is name in this’s entry list,
        // then return null.
        const idx = this.#state.findIndex((entry)=>entry.name === name);
        if (idx === -1) {
            return null;
        }
        // 2. Return the value of the first entry whose name is name from
        // this’s entry list.
        return this.#state[idx].value;
    }
    getAll(name) {
        webidl.brandCheck(this, FormData);
        const prefix = 'FormData.getAll';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name = webidl.converters.USVString(name);
        // 1. If there is no entry whose name is name in this’s entry list,
        // then return the empty list.
        // 2. Return the values of all entries whose name is name, in order,
        // from this’s entry list.
        return this.#state.filter((entry)=>entry.name === name).map((entry)=>entry.value);
    }
    has(name) {
        webidl.brandCheck(this, FormData);
        const prefix = 'FormData.has';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        name = webidl.converters.USVString(name);
        // The has(name) method steps are to return true if there is an entry
        // whose name is name in this’s entry list; otherwise false.
        return this.#state.findIndex((entry)=>entry.name === name) !== -1;
    }
    set(name, value, filename = undefined) {
        webidl.brandCheck(this, FormData);
        const prefix = 'FormData.set';
        webidl.argumentLengthCheck(arguments, 2, prefix);
        name = webidl.converters.USVString(name);
        if (arguments.length === 3 || webidl.is.Blob(value)) {
            value = webidl.converters.Blob(value, prefix, 'value');
            if (filename !== undefined) {
                filename = webidl.converters.USVString(filename);
            }
        } else {
            value = webidl.converters.USVString(value);
        }
        // The set(name, value) and set(name, blobValue, filename) method steps
        // are:
        // 1. Let value be value if given; otherwise blobValue.
        // 2. Let entry be the result of creating an entry with name, value, and
        // filename if given.
        const entry = makeEntry(name, value, filename);
        // 3. If there are entries in this’s entry list whose name is name, then
        // replace the first such entry with entry and remove the others.
        const idx = this.#state.findIndex((entry)=>entry.name === name);
        if (idx !== -1) {
            this.#state = [
                ...this.#state.slice(0, idx),
                entry,
                ...this.#state.slice(idx + 1).filter((entry)=>entry.name !== name)
            ];
        } else {
            // 4. Otherwise, append entry to this’s entry list.
            this.#state.push(entry);
        }
    }
    [nodeUtil.inspect.custom](depth, options) {
        const state = this.#state.reduce((a, b)=>{
            if (a[b.name]) {
                if (Array.isArray(a[b.name])) {
                    a[b.name].push(b.value);
                } else {
                    a[b.name] = [
                        a[b.name],
                        b.value
                    ];
                }
            } else {
                a[b.name] = b.value;
            }
            return a;
        }, {
            __proto__: null
        });
        options.depth ??= depth;
        options.colors ??= true;
        const output = nodeUtil.formatWithOptions(options, state);
        // remove [Object null prototype]
        return `FormData ${output.slice(output.indexOf(']') + 2)}`;
    }
    /**
   * @param {FormData} formData
   */ static getFormDataState(formData) {
        return formData.#state;
    }
    /**
   * @param {FormData} formData
   * @param {any[]} newState
   */ static setFormDataState(formData, newState) {
        formData.#state = newState;
    }
}
const { getFormDataState, setFormDataState } = FormData;
Reflect.deleteProperty(FormData, 'getFormDataState');
Reflect.deleteProperty(FormData, 'setFormDataState');
iteratorMixin('FormData', FormData, getFormDataState, 'name', 'value');
Object.defineProperties(FormData.prototype, {
    append: kEnumerableProperty,
    delete: kEnumerableProperty,
    get: kEnumerableProperty,
    getAll: kEnumerableProperty,
    has: kEnumerableProperty,
    set: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'FormData',
        configurable: true
    }
});
/**
 * @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#create-an-entry
 * @param {string} name
 * @param {string|Blob} value
 * @param {?string} filename
 * @returns
 */ function makeEntry(name, value, filename) {
    // 1. Set name to the result of converting name into a scalar value string.
    // Note: This operation was done by the webidl converter USVString.
    // 2. If value is a string, then set value to the result of converting
    //    value into a scalar value string.
    if (typeof value === 'string') {
    // Note: This operation was done by the webidl converter USVString.
    } else {
        // 3. Otherwise:
        // 1. If value is not a File object, then set value to a new File object,
        //    representing the same bytes, whose name attribute value is "blob"
        if (!webidl.is.File(value)) {
            value = new File([
                value
            ], 'blob', {
                type: value.type
            });
        }
        // 2. If filename is given, then set value to a new File object,
        //    representing the same bytes, whose name attribute is filename.
        if (filename !== undefined) {
            /** @type {FilePropertyBag} */ const options = {
                type: value.type,
                lastModified: value.lastModified
            };
            value = new File([
                value
            ], filename, options);
        }
    }
    // 4. Return an entry whose name is name and whose value is value.
    return {
        name,
        value
    };
}
webidl.is.FormData = webidl.util.MakeTypeAssertion(FormData);
module.exports = {
    FormData,
    makeEntry,
    setFormDataState
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/formdata-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { bufferToLowerCasedHeaderName } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { utf8DecodeBytes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { HTTP_TOKEN_CODEPOINTS, isomorphicDecode } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { makeEntry } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/formdata.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const formDataNameBuffer = Buffer.from('form-data; name="');
const filenameBuffer = Buffer.from('filename');
const dd = Buffer.from('--');
const ddcrlf = Buffer.from('--\r\n');
/**
 * @param {string} chars
 */ function isAsciiString(chars) {
    for(let i = 0; i < chars.length; ++i){
        if ((chars.charCodeAt(i) & ~0x7F) !== 0) {
            return false;
        }
    }
    return true;
}
/**
 * @see https://andreubotella.github.io/multipart-form-data/#multipart-form-data-boundary
 * @param {string} boundary
 */ function validateBoundary(boundary) {
    const length = boundary.length;
    // - its length is greater or equal to 27 and lesser or equal to 70, and
    if (length < 27 || length > 70) {
        return false;
    }
    // - it is composed by bytes in the ranges 0x30 to 0x39, 0x41 to 0x5A, or
    //   0x61 to 0x7A, inclusive (ASCII alphanumeric), or which are 0x27 ('),
    //   0x2D (-) or 0x5F (_).
    for(let i = 0; i < length; ++i){
        const cp = boundary.charCodeAt(i);
        if (!(cp >= 0x30 && cp <= 0x39 || cp >= 0x41 && cp <= 0x5a || cp >= 0x61 && cp <= 0x7a || cp === 0x27 || cp === 0x2d || cp === 0x5f)) {
            return false;
        }
    }
    return true;
}
/**
 * @see https://andreubotella.github.io/multipart-form-data/#multipart-form-data-parser
 * @param {Buffer} input
 * @param {ReturnType<import('./data-url')['parseMIMEType']>} mimeType
 */ function multipartFormDataParser(input, mimeType) {
    // 1. Assert: mimeType’s essence is "multipart/form-data".
    assert(mimeType !== 'failure' && mimeType.essence === 'multipart/form-data');
    const boundaryString = mimeType.parameters.get('boundary');
    // 2. If mimeType’s parameters["boundary"] does not exist, return failure.
    //    Otherwise, let boundary be the result of UTF-8 decoding mimeType’s
    //    parameters["boundary"].
    if (boundaryString === undefined) {
        throw parsingError('missing boundary in content-type header');
    }
    const boundary = Buffer.from(`--${boundaryString}`, 'utf8');
    // 3. Let entry list be an empty entry list.
    const entryList = [];
    // 4. Let position be a pointer to a byte in input, initially pointing at
    //    the first byte.
    const position = {
        position: 0
    };
    // Note: undici addition, allows leading and trailing CRLFs.
    while(input[position.position] === 0x0d && input[position.position + 1] === 0x0a){
        position.position += 2;
    }
    let trailing = input.length;
    while(input[trailing - 1] === 0x0a && input[trailing - 2] === 0x0d){
        trailing -= 2;
    }
    if (trailing !== input.length) {
        input = input.subarray(0, trailing);
    }
    // 5. While true:
    while(true){
        // 5.1. If position points to a sequence of bytes starting with 0x2D 0x2D
        //      (`--`) followed by boundary, advance position by 2 + the length of
        //      boundary. Otherwise, return failure.
        // Note: boundary is padded with 2 dashes already, no need to add 2.
        if (input.subarray(position.position, position.position + boundary.length).equals(boundary)) {
            position.position += boundary.length;
        } else {
            throw parsingError('expected a value starting with -- and the boundary');
        }
        // 5.2. If position points to the sequence of bytes 0x2D 0x2D 0x0D 0x0A
        //      (`--` followed by CR LF) followed by the end of input, return entry list.
        // Note: a body does NOT need to end with CRLF. It can end with --.
        if (position.position === input.length - 2 && bufferStartsWith(input, dd, position) || position.position === input.length - 4 && bufferStartsWith(input, ddcrlf, position)) {
            return entryList;
        }
        // 5.3. If position does not point to a sequence of bytes starting with 0x0D
        //      0x0A (CR LF), return failure.
        if (input[position.position] !== 0x0d || input[position.position + 1] !== 0x0a) {
            throw parsingError('expected CRLF');
        }
        // 5.4. Advance position by 2. (This skips past the newline.)
        position.position += 2;
        // 5.5. Let name, filename and contentType be the result of parsing
        //      multipart/form-data headers on input and position, if the result
        //      is not failure. Otherwise, return failure.
        const result = parseMultipartFormDataHeaders(input, position);
        let { name, filename, contentType, encoding } = result;
        // 5.6. Advance position by 2. (This skips past the empty line that marks
        //      the end of the headers.)
        position.position += 2;
        // 5.7. Let body be the empty byte sequence.
        let body;
        // 5.8. Body loop: While position is not past the end of input:
        // TODO: the steps here are completely wrong
        {
            const boundaryIndex = input.indexOf(boundary.subarray(2), position.position);
            if (boundaryIndex === -1) {
                throw parsingError('expected boundary after body');
            }
            body = input.subarray(position.position, boundaryIndex - 4);
            position.position += body.length;
            // Note: position must be advanced by the body's length before being
            // decoded, otherwise the parsing will fail.
            if (encoding === 'base64') {
                body = Buffer.from(body.toString(), 'base64');
            }
        }
        // 5.9. If position does not point to a sequence of bytes starting with
        //      0x0D 0x0A (CR LF), return failure. Otherwise, advance position by 2.
        if (input[position.position] !== 0x0d || input[position.position + 1] !== 0x0a) {
            throw parsingError('expected CRLF');
        } else {
            position.position += 2;
        }
        // 5.10. If filename is not null:
        let value;
        if (filename !== null) {
            // 5.10.1. If contentType is null, set contentType to "text/plain".
            contentType ??= 'text/plain';
            // 5.10.2. If contentType is not an ASCII string, set contentType to the empty string.
            // Note: `buffer.isAscii` can be used at zero-cost, but converting a string to a buffer is a high overhead.
            // Content-Type is a relatively small string, so it is faster to use `String#charCodeAt`.
            if (!isAsciiString(contentType)) {
                contentType = '';
            }
            // 5.10.3. Let value be a new File object with name filename, type contentType, and body body.
            value = new File([
                body
            ], filename, {
                type: contentType
            });
        } else {
            // 5.11. Otherwise:
            // 5.11.1. Let value be the UTF-8 decoding without BOM of body.
            value = utf8DecodeBytes(Buffer.from(body));
        }
        // 5.12. Assert: name is a scalar value string and value is either a scalar value string or a File object.
        assert(webidl.is.USVString(name));
        assert(typeof value === 'string' && webidl.is.USVString(value) || webidl.is.File(value));
        // 5.13. Create an entry with name and value, and append it to entry list.
        entryList.push(makeEntry(name, value, filename));
    }
}
/**
 * @see https://andreubotella.github.io/multipart-form-data/#parse-multipart-form-data-headers
 * @param {Buffer} input
 * @param {{ position: number }} position
 */ function parseMultipartFormDataHeaders(input, position) {
    // 1. Let name, filename and contentType be null.
    let name = null;
    let filename = null;
    let contentType = null;
    let encoding = null;
    // 2. While true:
    while(true){
        // 2.1. If position points to a sequence of bytes starting with 0x0D 0x0A (CR LF):
        if (input[position.position] === 0x0d && input[position.position + 1] === 0x0a) {
            // 2.1.1. If name is null, return failure.
            if (name === null) {
                throw parsingError('header name is null');
            }
            // 2.1.2. Return name, filename and contentType.
            return {
                name,
                filename,
                contentType,
                encoding
            };
        }
        // 2.2. Let header name be the result of collecting a sequence of bytes that are
        //      not 0x0A (LF), 0x0D (CR) or 0x3A (:), given position.
        let headerName = collectASequenceOfBytes((char)=>char !== 0x0a && char !== 0x0d && char !== 0x3a, input, position);
        // 2.3. Remove any HTTP tab or space bytes from the start or end of header name.
        headerName = removeChars(headerName, true, true, (char)=>char === 0x9 || char === 0x20);
        // 2.4. If header name does not match the field-name token production, return failure.
        if (!HTTP_TOKEN_CODEPOINTS.test(headerName.toString())) {
            throw parsingError('header name does not match the field-name token production');
        }
        // 2.5. If the byte at position is not 0x3A (:), return failure.
        if (input[position.position] !== 0x3a) {
            throw parsingError('expected :');
        }
        // 2.6. Advance position by 1.
        position.position++;
        // 2.7. Collect a sequence of bytes that are HTTP tab or space bytes given position.
        //      (Do nothing with those bytes.)
        collectASequenceOfBytes((char)=>char === 0x20 || char === 0x09, input, position);
        // 2.8. Byte-lowercase header name and switch on the result:
        switch(bufferToLowerCasedHeaderName(headerName)){
            case 'content-disposition':
                {
                    // 1. Set name and filename to null.
                    name = filename = null;
                    // 2. If position does not point to a sequence of bytes starting with
                    //    `form-data; name="`, return failure.
                    if (!bufferStartsWith(input, formDataNameBuffer, position)) {
                        throw parsingError('expected form-data; name=" for content-disposition header');
                    }
                    // 3. Advance position so it points at the byte after the next 0x22 (")
                    //    byte (the one in the sequence of bytes matched above).
                    position.position += 17;
                    // 4. Set name to the result of parsing a multipart/form-data name given
                    //    input and position, if the result is not failure. Otherwise, return
                    //    failure.
                    name = parseMultipartFormDataName(input, position);
                    // 5. If position points to a sequence of bytes starting with `; filename="`:
                    if (input[position.position] === 0x3b /* ; */  && input[position.position + 1] === 0x20 /* ' ' */ ) {
                        const at = {
                            position: position.position + 2
                        };
                        if (bufferStartsWith(input, filenameBuffer, at)) {
                            if (input[at.position + 8] === 0x2a /* '*' */ ) {
                                at.position += 10; // skip past filename*=
                                // Remove leading http tab and spaces. See RFC for examples.
                                // https://datatracker.ietf.org/doc/html/rfc6266#section-5
                                collectASequenceOfBytes((char)=>char === 0x20 || char === 0x09, input, at);
                                const headerValue = collectASequenceOfBytes((char)=>char !== 0x20 && char !== 0x0d && char !== 0x0a, input, at);
                                if (headerValue[0] !== 0x75 && headerValue[0] !== 0x55 || headerValue[1] !== 0x74 && headerValue[1] !== 0x54 || headerValue[2] !== 0x66 && headerValue[2] !== 0x46 || // f or F
                                headerValue[3] !== 0x2d || // -
                                headerValue[4] !== 0x38 // 8
                                ) {
                                    throw parsingError('unknown encoding, expected utf-8\'\'');
                                }
                                // skip utf-8''
                                filename = decodeURIComponent(new TextDecoder().decode(headerValue.subarray(7)));
                                position.position = at.position;
                            } else {
                                // 1. Advance position so it points at the byte after the next 0x22 (") byte
                                //    (the one in the sequence of bytes matched above).
                                position.position += 11;
                                // Remove leading http tab and spaces. See RFC for examples.
                                // https://datatracker.ietf.org/doc/html/rfc6266#section-5
                                collectASequenceOfBytes((char)=>char === 0x20 || char === 0x09, input, position);
                                position.position++; // skip past " after removing whitespace
                                // 2. Set filename to the result of parsing a multipart/form-data name given
                                //    input and position, if the result is not failure. Otherwise, return failure.
                                filename = parseMultipartFormDataName(input, position);
                            }
                        }
                    }
                    break;
                }
            case 'content-type':
                {
                    // 1. Let header value be the result of collecting a sequence of bytes that are
                    //    not 0x0A (LF) or 0x0D (CR), given position.
                    let headerValue = collectASequenceOfBytes((char)=>char !== 0x0a && char !== 0x0d, input, position);
                    // 2. Remove any HTTP tab or space bytes from the end of header value.
                    headerValue = removeChars(headerValue, false, true, (char)=>char === 0x9 || char === 0x20);
                    // 3. Set contentType to the isomorphic decoding of header value.
                    contentType = isomorphicDecode(headerValue);
                    break;
                }
            case 'content-transfer-encoding':
                {
                    let headerValue = collectASequenceOfBytes((char)=>char !== 0x0a && char !== 0x0d, input, position);
                    headerValue = removeChars(headerValue, false, true, (char)=>char === 0x9 || char === 0x20);
                    encoding = isomorphicDecode(headerValue);
                    break;
                }
            default:
                {
                    // Collect a sequence of bytes that are not 0x0A (LF) or 0x0D (CR), given position.
                    // (Do nothing with those bytes.)
                    collectASequenceOfBytes((char)=>char !== 0x0a && char !== 0x0d, input, position);
                }
        }
        // 2.9. If position does not point to a sequence of bytes starting with 0x0D 0x0A
        //      (CR LF), return failure. Otherwise, advance position by 2 (past the newline).
        if (input[position.position] !== 0x0d && input[position.position + 1] !== 0x0a) {
            throw parsingError('expected CRLF');
        } else {
            position.position += 2;
        }
    }
}
/**
 * @see https://andreubotella.github.io/multipart-form-data/#parse-a-multipart-form-data-name
 * @param {Buffer} input
 * @param {{ position: number }} position
 */ function parseMultipartFormDataName(input, position) {
    // 1. Assert: The byte at (position - 1) is 0x22 (").
    assert(input[position.position - 1] === 0x22);
    // 2. Let name be the result of collecting a sequence of bytes that are not 0x0A (LF), 0x0D (CR) or 0x22 ("), given position.
    /** @type {string | Buffer} */ let name = collectASequenceOfBytes((char)=>char !== 0x0a && char !== 0x0d && char !== 0x22, input, position);
    // 3. If the byte at position is not 0x22 ("), return failure. Otherwise, advance position by 1.
    if (input[position.position] !== 0x22) {
        throw parsingError('expected "');
    } else {
        position.position++;
    }
    // 4. Replace any occurrence of the following subsequences in name with the given byte:
    // - `%0A`: 0x0A (LF)
    // - `%0D`: 0x0D (CR)
    // - `%22`: 0x22 (")
    name = new TextDecoder().decode(name).replace(/%0A/ig, '\n').replace(/%0D/ig, '\r').replace(/%22/g, '"');
    // 5. Return the UTF-8 decoding without BOM of name.
    return name;
}
/**
 * @param {(char: number) => boolean} condition
 * @param {Buffer} input
 * @param {{ position: number }} position
 */ function collectASequenceOfBytes(condition, input, position) {
    let start = position.position;
    while(start < input.length && condition(input[start])){
        ++start;
    }
    return input.subarray(position.position, position.position = start);
}
/**
 * @param {Buffer} buf
 * @param {boolean} leading
 * @param {boolean} trailing
 * @param {(charCode: number) => boolean} predicate
 * @returns {Buffer}
 */ function removeChars(buf, leading, trailing, predicate) {
    let lead = 0;
    let trail = buf.length - 1;
    if (leading) {
        while(lead < buf.length && predicate(buf[lead]))lead++;
    }
    if (trailing) {
        while(trail > 0 && predicate(buf[trail]))trail--;
    }
    return lead === 0 && trail === buf.length - 1 ? buf : buf.subarray(lead, trail + 1);
}
/**
 * Checks if {@param buffer} starts with {@param start}
 * @param {Buffer} buffer
 * @param {Buffer} start
 * @param {{ position: number }} position
 */ function bufferStartsWith(buffer, start, position) {
    if (buffer.length < start.length) {
        return false;
    }
    for(let i = 0; i < start.length; i++){
        if (start[i] !== buffer[position.position + i]) {
            return false;
        }
    }
    return true;
}
function parsingError(cause) {
    return new TypeError('Failed to parse body as FormData.', {
        cause: new TypeError(cause)
    });
}
module.exports = {
    multipartFormDataParser,
    validateBoundary
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/body.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { ReadableStreamFrom, readableStreamClose, fullyReadBody, extractMimeType, utf8DecodeBytes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { FormData, setFormDataState } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/formdata.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { isErrored, isDisturbed } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { isArrayBuffer } = __turbopack_context__.r("[externals]/node:util/types [external] (node:util/types, cjs)");
const { serializeAMimeType } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { multipartFormDataParser } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/formdata-parser.js [app-rsc] (ecmascript)");
const { createDeferredPromise } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/promise.js [app-rsc] (ecmascript)");
let random;
try {
    const crypto = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
    random = (max)=>crypto.randomInt(0, max);
} catch  {
    random = (max)=>Math.floor(Math.random() * max);
}
const textEncoder = new TextEncoder();
function noop() {}
const streamRegistry = new FinalizationRegistry((weakRef)=>{
    const stream = weakRef.deref();
    if (stream && !stream.locked && !isDisturbed(stream) && !isErrored(stream)) {
        stream.cancel('Response object has been garbage collected').catch(noop);
    }
});
/**
 * Extract a body with type from a byte sequence or BodyInit object
 *
 * @param {import('../../../types').BodyInit} object - The BodyInit object to extract from
 * @param {boolean} [keepalive=false] - If true, indicates that the body
 * @returns {[{stream: ReadableStream, source: any, length: number | null}, string | null]} - Returns a tuple containing the body and its type
 *
 * @see https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 */ function extractBody(object, keepalive = false) {
    // 1. Let stream be null.
    let stream = null;
    // 2. If object is a ReadableStream object, then set stream to object.
    if (webidl.is.ReadableStream(object)) {
        stream = object;
    } else if (webidl.is.Blob(object)) {
        // 3. Otherwise, if object is a Blob object, set stream to the
        //    result of running object’s get stream.
        stream = object.stream();
    } else {
        // 4. Otherwise, set stream to a new ReadableStream object, and set
        //    up stream with byte reading support.
        stream = new ReadableStream({
            pull (controller) {
                const buffer = typeof source === 'string' ? textEncoder.encode(source) : source;
                if (buffer.byteLength) {
                    controller.enqueue(buffer);
                }
                queueMicrotask(()=>readableStreamClose(controller));
            },
            start () {},
            type: 'bytes'
        });
    }
    // 5. Assert: stream is a ReadableStream object.
    assert(webidl.is.ReadableStream(stream));
    // 6. Let action be null.
    let action = null;
    // 7. Let source be null.
    let source = null;
    // 8. Let length be null.
    let length = null;
    // 9. Let type be null.
    let type = null;
    // 10. Switch on object:
    if (typeof object === 'string') {
        // Set source to the UTF-8 encoding of object.
        // Note: setting source to a Uint8Array here breaks some mocking assumptions.
        source = object;
        // Set type to `text/plain;charset=UTF-8`.
        type = 'text/plain;charset=UTF-8';
    } else if (webidl.is.URLSearchParams(object)) {
        // URLSearchParams
        // spec says to run application/x-www-form-urlencoded on body.list
        // this is implemented in Node.js as apart of an URLSearchParams instance toString method
        // See: https://github.com/nodejs/node/blob/e46c680bf2b211bbd52cf959ca17ee98c7f657f5/lib/internal/url.js#L490
        // and https://github.com/nodejs/node/blob/e46c680bf2b211bbd52cf959ca17ee98c7f657f5/lib/internal/url.js#L1100
        // Set source to the result of running the application/x-www-form-urlencoded serializer with object’s list.
        source = object.toString();
        // Set type to `application/x-www-form-urlencoded;charset=UTF-8`.
        type = 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (webidl.is.BufferSource(object)) {
        source = isArrayBuffer(object) ? new Uint8Array(object.slice()) : new Uint8Array(object.buffer.slice(object.byteOffset, object.byteOffset + object.byteLength));
    } else if (webidl.is.FormData(object)) {
        const boundary = `----formdata-undici-0${`${random(1e11)}`.padStart(11, '0')}`;
        const prefix = `--${boundary}\r\nContent-Disposition: form-data`;
        /*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */ const formdataEscape = (str)=>str.replace(/\n/g, '%0A').replace(/\r/g, '%0D').replace(/"/g, '%22');
        const normalizeLinefeeds = (value)=>value.replace(/\r?\n|\r/g, '\r\n');
        // Set action to this step: run the multipart/form-data
        // encoding algorithm, with object’s entry list and UTF-8.
        // - This ensures that the body is immutable and can't be changed afterwords
        // - That the content-length is calculated in advance.
        // - And that all parts are pre-encoded and ready to be sent.
        const blobParts = [];
        const rn = new Uint8Array([
            13,
            10
        ]) // '\r\n'
        ;
        length = 0;
        let hasUnknownSizeValue = false;
        for (const [name, value] of object){
            if (typeof value === 'string') {
                const chunk = textEncoder.encode(prefix + `; name="${formdataEscape(normalizeLinefeeds(name))}"` + `\r\n\r\n${normalizeLinefeeds(value)}\r\n`);
                blobParts.push(chunk);
                length += chunk.byteLength;
            } else {
                const chunk = textEncoder.encode(`${prefix}; name="${formdataEscape(normalizeLinefeeds(name))}"` + (value.name ? `; filename="${formdataEscape(value.name)}"` : '') + '\r\n' + `Content-Type: ${value.type || 'application/octet-stream'}\r\n\r\n`);
                blobParts.push(chunk, value, rn);
                if (typeof value.size === 'number') {
                    length += chunk.byteLength + value.size + rn.byteLength;
                } else {
                    hasUnknownSizeValue = true;
                }
            }
        }
        // CRLF is appended to the body to function with legacy servers and match other implementations.
        // https://github.com/curl/curl/blob/3434c6b46e682452973972e8313613dfa58cd690/lib/mime.c#L1029-L1030
        // https://github.com/form-data/form-data/issues/63
        const chunk = textEncoder.encode(`--${boundary}--\r\n`);
        blobParts.push(chunk);
        length += chunk.byteLength;
        if (hasUnknownSizeValue) {
            length = null;
        }
        // Set source to object.
        source = object;
        action = async function*() {
            for (const part of blobParts){
                if (part.stream) {
                    yield* part.stream();
                } else {
                    yield part;
                }
            }
        };
        // Set type to `multipart/form-data; boundary=`,
        // followed by the multipart/form-data boundary string generated
        // by the multipart/form-data encoding algorithm.
        type = `multipart/form-data; boundary=${boundary}`;
    } else if (webidl.is.Blob(object)) {
        // Blob
        // Set source to object.
        source = object;
        // Set length to object’s size.
        length = object.size;
        // If object’s type attribute is not the empty byte sequence, set
        // type to its value.
        if (object.type) {
            type = object.type;
        }
    } else if (typeof object[Symbol.asyncIterator] === 'function') {
        // If keepalive is true, then throw a TypeError.
        if (keepalive) {
            throw new TypeError('keepalive');
        }
        // If object is disturbed or locked, then throw a TypeError.
        if (util.isDisturbed(object) || object.locked) {
            throw new TypeError('Response body object should not be disturbed or locked');
        }
        stream = webidl.is.ReadableStream(object) ? object : ReadableStreamFrom(object);
    }
    // 11. If source is a byte sequence, then set action to a
    // step that returns source and length to source’s length.
    if (typeof source === 'string' || util.isBuffer(source)) {
        length = Buffer.byteLength(source);
    }
    // 12. If action is non-null, then run these steps in in parallel:
    if (action != null) {
        // Run action.
        let iterator;
        stream = new ReadableStream({
            async start () {
                iterator = action(object)[Symbol.asyncIterator]();
            },
            async pull (controller) {
                const { value, done } = await iterator.next();
                if (done) {
                    // When running action is done, close stream.
                    queueMicrotask(()=>{
                        controller.close();
                        controller.byobRequest?.respond(0);
                    });
                } else {
                    // Whenever one or more bytes are available and stream is not errored,
                    // enqueue a Uint8Array wrapping an ArrayBuffer containing the available
                    // bytes into stream.
                    if (!isErrored(stream)) {
                        const buffer = new Uint8Array(value);
                        if (buffer.byteLength) {
                            controller.enqueue(buffer);
                        }
                    }
                }
                return controller.desiredSize > 0;
            },
            async cancel (reason) {
                await iterator.return();
            },
            type: 'bytes'
        });
    }
    // 13. Let body be a body whose stream is stream, source is source,
    // and length is length.
    const body = {
        stream,
        source,
        length
    };
    // 14. Return (body, type).
    return [
        body,
        type
    ];
}
/**
 * @typedef {object} ExtractBodyResult
 * @property {ReadableStream<Uint8Array<ArrayBuffer>>} stream - The ReadableStream containing the body data
 * @property {any} source - The original source of the body data
 * @property {number | null} length - The length of the body data, or null
 */ /**
 * Safely extract a body with type from a byte sequence or BodyInit object.
 *
 * @param {import('../../../types').BodyInit} object - The BodyInit object to extract from
 * @param {boolean} [keepalive=false] - If true, indicates that the body
 * @returns {[ExtractBodyResult, string | null]} - Returns a tuple containing the body and its type
 *
 * @see https://fetch.spec.whatwg.org/#bodyinit-safely-extract
 */ function safelyExtractBody(object, keepalive = false) {
    // To safely extract a body and a `Content-Type` value from
    // a byte sequence or BodyInit object object, run these steps:
    // 1. If object is a ReadableStream object, then:
    if (webidl.is.ReadableStream(object)) {
        // Assert: object is neither disturbed nor locked.
        assert(!util.isDisturbed(object), 'The body has already been consumed.');
        assert(!object.locked, 'The stream is locked.');
    }
    // 2. Return the results of extracting object.
    return extractBody(object, keepalive);
}
function cloneBody(body) {
    // To clone a body body, run these steps:
    // https://fetch.spec.whatwg.org/#concept-body-clone
    // 1. Let « out1, out2 » be the result of teeing body’s stream.
    const { 0: out1, 1: out2 } = body.stream.tee();
    // 2. Set body’s stream to out1.
    body.stream = out1;
    // 3. Return a body whose stream is out2 and other members are copied from body.
    return {
        stream: out2,
        length: body.length,
        source: body.source
    };
}
function bodyMixinMethods(instance, getInternalState) {
    const methods = {
        blob () {
            // The blob() method steps are to return the result of
            // running consume body with this and the following step
            // given a byte sequence bytes: return a Blob whose
            // contents are bytes and whose type attribute is this’s
            // MIME type.
            return consumeBody(this, (bytes)=>{
                let mimeType = bodyMimeType(getInternalState(this));
                if (mimeType === null) {
                    mimeType = '';
                } else if (mimeType) {
                    mimeType = serializeAMimeType(mimeType);
                }
                // Return a Blob whose contents are bytes and type attribute
                // is mimeType.
                return new Blob([
                    bytes
                ], {
                    type: mimeType
                });
            }, instance, getInternalState);
        },
        arrayBuffer () {
            // The arrayBuffer() method steps are to return the result
            // of running consume body with this and the following step
            // given a byte sequence bytes: return a new ArrayBuffer
            // whose contents are bytes.
            return consumeBody(this, (bytes)=>{
                return new Uint8Array(bytes).buffer;
            }, instance, getInternalState);
        },
        text () {
            // The text() method steps are to return the result of running
            // consume body with this and UTF-8 decode.
            return consumeBody(this, utf8DecodeBytes, instance, getInternalState);
        },
        json () {
            // The json() method steps are to return the result of running
            // consume body with this and parse JSON from bytes.
            return consumeBody(this, parseJSONFromBytes, instance, getInternalState);
        },
        formData () {
            // The formData() method steps are to return the result of running
            // consume body with this and the following step given a byte sequence bytes:
            return consumeBody(this, (value)=>{
                // 1. Let mimeType be the result of get the MIME type with this.
                const mimeType = bodyMimeType(getInternalState(this));
                // 2. If mimeType is non-null, then switch on mimeType’s essence and run
                //    the corresponding steps:
                if (mimeType !== null) {
                    switch(mimeType.essence){
                        case 'multipart/form-data':
                            {
                                // 1. ... [long step]
                                // 2. If that fails for some reason, then throw a TypeError.
                                const parsed = multipartFormDataParser(value, mimeType);
                                // 3. Return a new FormData object, appending each entry,
                                //    resulting from the parsing operation, to its entry list.
                                const fd = new FormData();
                                setFormDataState(fd, parsed);
                                return fd;
                            }
                        case 'application/x-www-form-urlencoded':
                            {
                                // 1. Let entries be the result of parsing bytes.
                                const entries = new URLSearchParams(value.toString());
                                // 2. If entries is failure, then throw a TypeError.
                                // 3. Return a new FormData object whose entry list is entries.
                                const fd = new FormData();
                                for (const [name, value] of entries){
                                    fd.append(name, value);
                                }
                                return fd;
                            }
                    }
                }
                // 3. Throw a TypeError.
                throw new TypeError('Content-Type was not one of "multipart/form-data" or "application/x-www-form-urlencoded".');
            }, instance, getInternalState);
        },
        bytes () {
            // The bytes() method steps are to return the result of running consume body
            // with this and the following step given a byte sequence bytes: return the
            // result of creating a Uint8Array from bytes in this’s relevant realm.
            return consumeBody(this, (bytes)=>{
                return new Uint8Array(bytes);
            }, instance, getInternalState);
        }
    };
    return methods;
}
function mixinBody(prototype, getInternalState) {
    Object.assign(prototype.prototype, bodyMixinMethods(prototype, getInternalState));
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-body-consume-body
 * @param {any} object internal state
 * @param {(value: unknown) => unknown} convertBytesToJSValue
 * @param {any} instance
 * @param {(target: any) => any} getInternalState
 */ function consumeBody(object, convertBytesToJSValue, instance, getInternalState) {
    try {
        webidl.brandCheck(object, instance);
    } catch (e) {
        return Promise.reject(e);
    }
    const state = getInternalState(object);
    // 1. If object is unusable, then return a promise rejected
    //    with a TypeError.
    if (bodyUnusable(state)) {
        return Promise.reject(new TypeError('Body is unusable: Body has already been read'));
    }
    if (state.aborted) {
        return Promise.reject(new DOMException('The operation was aborted.', 'AbortError'));
    }
    // 2. Let promise be a new promise.
    const promise = createDeferredPromise();
    // 3. Let errorSteps given error be to reject promise with error.
    const errorSteps = promise.reject;
    // 4. Let successSteps given a byte sequence data be to resolve
    //    promise with the result of running convertBytesToJSValue
    //    with data. If that threw an exception, then run errorSteps
    //    with that exception.
    const successSteps = (data)=>{
        try {
            promise.resolve(convertBytesToJSValue(data));
        } catch (e) {
            errorSteps(e);
        }
    };
    // 5. If object’s body is null, then run successSteps with an
    //    empty byte sequence.
    if (state.body == null) {
        successSteps(Buffer.allocUnsafe(0));
        return promise.promise;
    }
    // 6. Otherwise, fully read object’s body given successSteps,
    //    errorSteps, and object’s relevant global object.
    fullyReadBody(state.body, successSteps, errorSteps);
    // 7. Return promise.
    return promise.promise;
}
/**
 * @see https://fetch.spec.whatwg.org/#body-unusable
 * @param {any} object internal state
 */ function bodyUnusable(object) {
    const body = object.body;
    // An object including the Body interface mixin is
    // said to be unusable if its body is non-null and
    // its body’s stream is disturbed or locked.
    return body != null && (body.stream.locked || util.isDisturbed(body.stream));
}
/**
 * @see https://infra.spec.whatwg.org/#parse-json-bytes-to-a-javascript-value
 * @param {Uint8Array} bytes
 */ function parseJSONFromBytes(bytes) {
    return JSON.parse(utf8DecodeBytes(bytes));
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-body-mime-type
 * @param {any} requestOrResponse internal state
 */ function bodyMimeType(requestOrResponse) {
    // 1. Let headers be null.
    // 2. If requestOrResponse is a Request object, then set headers to requestOrResponse’s request’s header list.
    // 3. Otherwise, set headers to requestOrResponse’s response’s header list.
    /** @type {import('./headers').HeadersList} */ const headers = requestOrResponse.headersList;
    // 4. Let mimeType be the result of extracting a MIME type from headers.
    const mimeType = extractMimeType(headers);
    // 5. If mimeType is failure, then return null.
    if (mimeType === 'failure') {
        return null;
    }
    // 6. Return mimeType.
    return mimeType;
}
module.exports = {
    extractBody,
    safelyExtractBody,
    cloneBody,
    mixinBody,
    streamRegistry,
    bodyUnusable
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// https://github.com/Ethan-Arrowood/undici-fetch
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { iteratorMixin, isValidHeaderName, isValidHeaderValue } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const util = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
/**
 * @param {number} code
 * @returns {code is (0x0a | 0x0d | 0x09 | 0x20)}
 */ function isHTTPWhiteSpaceCharCode(code) {
    return code === 0x0a || code === 0x0d || code === 0x09 || code === 0x20;
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-header-value-normalize
 * @param {string} potentialValue
 * @returns {string}
 */ function headerValueNormalize(potentialValue) {
    //  To normalize a byte sequence potentialValue, remove
    //  any leading and trailing HTTP whitespace bytes from
    //  potentialValue.
    let i = 0;
    let j = potentialValue.length;
    while(j > i && isHTTPWhiteSpaceCharCode(potentialValue.charCodeAt(j - 1)))--j;
    while(j > i && isHTTPWhiteSpaceCharCode(potentialValue.charCodeAt(i)))++i;
    return i === 0 && j === potentialValue.length ? potentialValue : potentialValue.substring(i, j);
}
/**
 * @param {Headers} headers
 * @param {Array|Object} object
 */ function fill(headers, object) {
    // To fill a Headers object headers with a given object object, run these steps:
    // 1. If object is a sequence, then for each header in object:
    // Note: webidl conversion to array has already been done.
    if (Array.isArray(object)) {
        for(let i = 0; i < object.length; ++i){
            const header = object[i];
            // 1. If header does not contain exactly two items, then throw a TypeError.
            if (header.length !== 2) {
                throw webidl.errors.exception({
                    header: 'Headers constructor',
                    message: `expected name/value pair to be length 2, found ${header.length}.`
                });
            }
            // 2. Append (header’s first item, header’s second item) to headers.
            appendHeader(headers, header[0], header[1]);
        }
    } else if (typeof object === 'object' && object !== null) {
        // Note: null should throw
        // 2. Otherwise, object is a record, then for each key → value in object,
        //    append (key, value) to headers
        const keys = Object.keys(object);
        for(let i = 0; i < keys.length; ++i){
            appendHeader(headers, keys[i], object[keys[i]]);
        }
    } else {
        throw webidl.errors.conversionFailed({
            prefix: 'Headers constructor',
            argument: 'Argument 1',
            types: [
                'sequence<sequence<ByteString>>',
                'record<ByteString, ByteString>'
            ]
        });
    }
}
/**
 * @see https://fetch.spec.whatwg.org/#concept-headers-append
 * @param {Headers} headers
 * @param {string} name
 * @param {string} value
 */ function appendHeader(headers, name, value) {
    // 1. Normalize value.
    value = headerValueNormalize(value);
    // 2. If name is not a header name or value is not a
    //    header value, then throw a TypeError.
    if (!isValidHeaderName(name)) {
        throw webidl.errors.invalidArgument({
            prefix: 'Headers.append',
            value: name,
            type: 'header name'
        });
    } else if (!isValidHeaderValue(value)) {
        throw webidl.errors.invalidArgument({
            prefix: 'Headers.append',
            value,
            type: 'header value'
        });
    }
    // 3. If headers’s guard is "immutable", then throw a TypeError.
    // 4. Otherwise, if headers’s guard is "request" and name is a
    //    forbidden header name, return.
    // 5. Otherwise, if headers’s guard is "request-no-cors":
    //    TODO
    // Note: undici does not implement forbidden header names
    if (getHeadersGuard(headers) === 'immutable') {
        throw new TypeError('immutable');
    }
    // 6. Otherwise, if headers’s guard is "response" and name is a
    //    forbidden response-header name, return.
    // 7. Append (name, value) to headers’s header list.
    return getHeadersList(headers).append(name, value, false);
// 8. If headers’s guard is "request-no-cors", then remove
//    privileged no-CORS request headers from headers
}
// https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
/**
 * @param {Headers} target
 */ function headersListSortAndCombine(target) {
    const headersList = getHeadersList(target);
    if (!headersList) {
        return [];
    }
    if (headersList.sortedMap) {
        return headersList.sortedMap;
    }
    // 1. Let headers be an empty list of headers with the key being the name
    //    and value the value.
    const headers = [];
    // 2. Let names be the result of convert header names to a sorted-lowercase
    //    set with all the names of the headers in list.
    const names = headersList.toSortedArray();
    const cookies = headersList.cookies;
    // fast-path
    if (cookies === null || cookies.length === 1) {
        // Note: The non-null assertion of value has already been done by `HeadersList#toSortedArray`
        return headersList.sortedMap = names;
    }
    // 3. For each name of names:
    for(let i = 0; i < names.length; ++i){
        const { 0: name, 1: value } = names[i];
        // 1. If name is `set-cookie`, then:
        if (name === 'set-cookie') {
            // 1. Let values be a list of all values of headers in list whose name
            //    is a byte-case-insensitive match for name, in order.
            // 2. For each value of values:
            // 1. Append (name, value) to headers.
            for(let j = 0; j < cookies.length; ++j){
                headers.push([
                    name,
                    cookies[j]
                ]);
            }
        } else {
            // 2. Otherwise:
            // 1. Let value be the result of getting name from list.
            // 2. Assert: value is non-null.
            // Note: This operation was done by `HeadersList#toSortedArray`.
            // 3. Append (name, value) to headers.
            headers.push([
                name,
                value
            ]);
        }
    }
    // 4. Return headers.
    return headersList.sortedMap = headers;
}
function compareHeaderName(a, b) {
    return a[0] < b[0] ? -1 : 1;
}
class HeadersList {
    /** @type {[string, string][]|null} */ cookies = null;
    sortedMap;
    headersMap;
    constructor(init){
        if (init instanceof HeadersList) {
            this.headersMap = new Map(init.headersMap);
            this.sortedMap = init.sortedMap;
            this.cookies = init.cookies === null ? null : [
                ...init.cookies
            ];
        } else {
            this.headersMap = new Map(init);
            this.sortedMap = null;
        }
    }
    /**
   * @see https://fetch.spec.whatwg.org/#header-list-contains
   * @param {string} name
   * @param {boolean} isLowerCase
   */ contains(name, isLowerCase) {
        // A header list list contains a header name name if list
        // contains a header whose name is a byte-case-insensitive
        // match for name.
        return this.headersMap.has(isLowerCase ? name : name.toLowerCase());
    }
    clear() {
        this.headersMap.clear();
        this.sortedMap = null;
        this.cookies = null;
    }
    /**
   * @see https://fetch.spec.whatwg.org/#concept-header-list-append
   * @param {string} name
   * @param {string} value
   * @param {boolean} isLowerCase
   */ append(name, value, isLowerCase) {
        this.sortedMap = null;
        // 1. If list contains name, then set name to the first such
        //    header’s name.
        const lowercaseName = isLowerCase ? name : name.toLowerCase();
        const exists = this.headersMap.get(lowercaseName);
        // 2. Append (name, value) to list.
        if (exists) {
            const delimiter = lowercaseName === 'cookie' ? '; ' : ', ';
            this.headersMap.set(lowercaseName, {
                name: exists.name,
                value: `${exists.value}${delimiter}${value}`
            });
        } else {
            this.headersMap.set(lowercaseName, {
                name,
                value
            });
        }
        if (lowercaseName === 'set-cookie') {
            (this.cookies ??= []).push(value);
        }
    }
    /**
   * @see https://fetch.spec.whatwg.org/#concept-header-list-set
   * @param {string} name
   * @param {string} value
   * @param {boolean} isLowerCase
   */ set(name, value, isLowerCase) {
        this.sortedMap = null;
        const lowercaseName = isLowerCase ? name : name.toLowerCase();
        if (lowercaseName === 'set-cookie') {
            this.cookies = [
                value
            ];
        }
        // 1. If list contains name, then set the value of
        //    the first such header to value and remove the
        //    others.
        // 2. Otherwise, append header (name, value) to list.
        this.headersMap.set(lowercaseName, {
            name,
            value
        });
    }
    /**
   * @see https://fetch.spec.whatwg.org/#concept-header-list-delete
   * @param {string} name
   * @param {boolean} isLowerCase
   */ delete(name, isLowerCase) {
        this.sortedMap = null;
        if (!isLowerCase) name = name.toLowerCase();
        if (name === 'set-cookie') {
            this.cookies = null;
        }
        this.headersMap.delete(name);
    }
    /**
   * @see https://fetch.spec.whatwg.org/#concept-header-list-get
   * @param {string} name
   * @param {boolean} isLowerCase
   * @returns {string | null}
   */ get(name, isLowerCase) {
        // 1. If list does not contain name, then return null.
        // 2. Return the values of all headers in list whose name
        //    is a byte-case-insensitive match for name,
        //    separated from each other by 0x2C 0x20, in order.
        return this.headersMap.get(isLowerCase ? name : name.toLowerCase())?.value ?? null;
    }
    *[Symbol.iterator]() {
        // use the lowercased name
        for (const { 0: name, 1: { value } } of this.headersMap){
            yield [
                name,
                value
            ];
        }
    }
    get entries() {
        const headers = {};
        if (this.headersMap.size !== 0) {
            for (const { name, value } of this.headersMap.values()){
                headers[name] = value;
            }
        }
        return headers;
    }
    rawValues() {
        return this.headersMap.values();
    }
    get entriesList() {
        const headers = [];
        if (this.headersMap.size !== 0) {
            for (const { 0: lowerName, 1: { name, value } } of this.headersMap){
                if (lowerName === 'set-cookie') {
                    for (const cookie of this.cookies){
                        headers.push([
                            name,
                            cookie
                        ]);
                    }
                } else {
                    headers.push([
                        name,
                        value
                    ]);
                }
            }
        }
        return headers;
    }
    // https://fetch.spec.whatwg.org/#convert-header-names-to-a-sorted-lowercase-set
    toSortedArray() {
        const size = this.headersMap.size;
        const array = new Array(size);
        // In most cases, you will use the fast-path.
        // fast-path: Use binary insertion sort for small arrays.
        if (size <= 32) {
            if (size === 0) {
                // If empty, it is an empty array. To avoid the first index assignment.
                return array;
            }
            // Improve performance by unrolling loop and avoiding double-loop.
            // Double-loop-less version of the binary insertion sort.
            const iterator = this.headersMap[Symbol.iterator]();
            const firstValue = iterator.next().value;
            // set [name, value] to first index.
            array[0] = [
                firstValue[0],
                firstValue[1].value
            ];
            // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
            // 3.2.2. Assert: value is non-null.
            assert(firstValue[1].value !== null);
            for(let i = 1, j = 0, right = 0, left = 0, pivot = 0, x, value; i < size; ++i){
                // get next value
                value = iterator.next().value;
                // set [name, value] to current index.
                x = array[i] = [
                    value[0],
                    value[1].value
                ];
                // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
                // 3.2.2. Assert: value is non-null.
                assert(x[1] !== null);
                left = 0;
                right = i;
                // binary search
                while(left < right){
                    // middle index
                    pivot = left + (right - left >> 1);
                    // compare header name
                    if (array[pivot][0] <= x[0]) {
                        left = pivot + 1;
                    } else {
                        right = pivot;
                    }
                }
                if (i !== pivot) {
                    j = i;
                    while(j > left){
                        array[j] = array[--j];
                    }
                    array[left] = x;
                }
            }
            /* c8 ignore next 4 */ if (!iterator.next().done) {
                // This is for debugging and will never be called.
                throw new TypeError('Unreachable');
            }
            return array;
        } else {
            // This case would be a rare occurrence.
            // slow-path: fallback
            let i = 0;
            for (const { 0: name, 1: { value } } of this.headersMap){
                array[i++] = [
                    name,
                    value
                ];
                // https://fetch.spec.whatwg.org/#concept-header-list-sort-and-combine
                // 3.2.2. Assert: value is non-null.
                assert(value !== null);
            }
            return array.sort(compareHeaderName);
        }
    }
}
// https://fetch.spec.whatwg.org/#headers-class
class Headers {
    #guard;
    /**
   * @type {HeadersList}
   */ #headersList;
    /**
   * @param {HeadersInit|Symbol} [init]
   * @returns
   */ constructor(init = undefined){
        webidl.util.markAsUncloneable(this);
        if (init === kConstruct) {
            return;
        }
        this.#headersList = new HeadersList();
        // The new Headers(init) constructor steps are:
        // 1. Set this’s guard to "none".
        this.#guard = 'none';
        // 2. If init is given, then fill this with init.
        if (init !== undefined) {
            init = webidl.converters.HeadersInit(init, 'Headers constructor', 'init');
            fill(this, init);
        }
    }
    // https://fetch.spec.whatwg.org/#dom-headers-append
    append(name, value) {
        webidl.brandCheck(this, Headers);
        webidl.argumentLengthCheck(arguments, 2, 'Headers.append');
        const prefix = 'Headers.append';
        name = webidl.converters.ByteString(name, prefix, 'name');
        value = webidl.converters.ByteString(value, prefix, 'value');
        return appendHeader(this, name, value);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-delete
    delete(name) {
        webidl.brandCheck(this, Headers);
        webidl.argumentLengthCheck(arguments, 1, 'Headers.delete');
        const prefix = 'Headers.delete';
        name = webidl.converters.ByteString(name, prefix, 'name');
        // 1. If name is not a header name, then throw a TypeError.
        if (!isValidHeaderName(name)) {
            throw webidl.errors.invalidArgument({
                prefix: 'Headers.delete',
                value: name,
                type: 'header name'
            });
        }
        // 2. If this’s guard is "immutable", then throw a TypeError.
        // 3. Otherwise, if this’s guard is "request" and name is a
        //    forbidden header name, return.
        // 4. Otherwise, if this’s guard is "request-no-cors", name
        //    is not a no-CORS-safelisted request-header name, and
        //    name is not a privileged no-CORS request-header name,
        //    return.
        // 5. Otherwise, if this’s guard is "response" and name is
        //    a forbidden response-header name, return.
        // Note: undici does not implement forbidden header names
        if (this.#guard === 'immutable') {
            throw new TypeError('immutable');
        }
        // 6. If this’s header list does not contain name, then
        //    return.
        if (!this.#headersList.contains(name, false)) {
            return;
        }
        // 7. Delete name from this’s header list.
        // 8. If this’s guard is "request-no-cors", then remove
        //    privileged no-CORS request headers from this.
        this.#headersList.delete(name, false);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-get
    get(name) {
        webidl.brandCheck(this, Headers);
        webidl.argumentLengthCheck(arguments, 1, 'Headers.get');
        const prefix = 'Headers.get';
        name = webidl.converters.ByteString(name, prefix, 'name');
        // 1. If name is not a header name, then throw a TypeError.
        if (!isValidHeaderName(name)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value: name,
                type: 'header name'
            });
        }
        // 2. Return the result of getting name from this’s header
        //    list.
        return this.#headersList.get(name, false);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-has
    has(name) {
        webidl.brandCheck(this, Headers);
        webidl.argumentLengthCheck(arguments, 1, 'Headers.has');
        const prefix = 'Headers.has';
        name = webidl.converters.ByteString(name, prefix, 'name');
        // 1. If name is not a header name, then throw a TypeError.
        if (!isValidHeaderName(name)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value: name,
                type: 'header name'
            });
        }
        // 2. Return true if this’s header list contains name;
        //    otherwise false.
        return this.#headersList.contains(name, false);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-set
    set(name, value) {
        webidl.brandCheck(this, Headers);
        webidl.argumentLengthCheck(arguments, 2, 'Headers.set');
        const prefix = 'Headers.set';
        name = webidl.converters.ByteString(name, prefix, 'name');
        value = webidl.converters.ByteString(value, prefix, 'value');
        // 1. Normalize value.
        value = headerValueNormalize(value);
        // 2. If name is not a header name or value is not a
        //    header value, then throw a TypeError.
        if (!isValidHeaderName(name)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value: name,
                type: 'header name'
            });
        } else if (!isValidHeaderValue(value)) {
            throw webidl.errors.invalidArgument({
                prefix,
                value,
                type: 'header value'
            });
        }
        // 3. If this’s guard is "immutable", then throw a TypeError.
        // 4. Otherwise, if this’s guard is "request" and name is a
        //    forbidden header name, return.
        // 5. Otherwise, if this’s guard is "request-no-cors" and
        //    name/value is not a no-CORS-safelisted request-header,
        //    return.
        // 6. Otherwise, if this’s guard is "response" and name is a
        //    forbidden response-header name, return.
        // Note: undici does not implement forbidden header names
        if (this.#guard === 'immutable') {
            throw new TypeError('immutable');
        }
        // 7. Set (name, value) in this’s header list.
        // 8. If this’s guard is "request-no-cors", then remove
        //    privileged no-CORS request headers from this
        this.#headersList.set(name, value, false);
    }
    // https://fetch.spec.whatwg.org/#dom-headers-getsetcookie
    getSetCookie() {
        webidl.brandCheck(this, Headers);
        // 1. If this’s header list does not contain `Set-Cookie`, then return « ».
        // 2. Return the values of all headers in this’s header list whose name is
        //    a byte-case-insensitive match for `Set-Cookie`, in order.
        const list = this.#headersList.cookies;
        if (list) {
            return [
                ...list
            ];
        }
        return [];
    }
    [util.inspect.custom](depth, options) {
        options.depth ??= depth;
        return `Headers ${util.formatWithOptions(options, this.#headersList.entries)}`;
    }
    static getHeadersGuard(o) {
        return o.#guard;
    }
    static setHeadersGuard(o, guard) {
        o.#guard = guard;
    }
    /**
   * @param {Headers} o
   */ static getHeadersList(o) {
        return o.#headersList;
    }
    /**
   * @param {Headers} target
   * @param {HeadersList} list
   */ static setHeadersList(target, list) {
        target.#headersList = list;
    }
}
const { getHeadersGuard, setHeadersGuard, getHeadersList, setHeadersList } = Headers;
Reflect.deleteProperty(Headers, 'getHeadersGuard');
Reflect.deleteProperty(Headers, 'setHeadersGuard');
Reflect.deleteProperty(Headers, 'getHeadersList');
Reflect.deleteProperty(Headers, 'setHeadersList');
iteratorMixin('Headers', Headers, headersListSortAndCombine, 0, 1);
Object.defineProperties(Headers.prototype, {
    append: kEnumerableProperty,
    delete: kEnumerableProperty,
    get: kEnumerableProperty,
    has: kEnumerableProperty,
    set: kEnumerableProperty,
    getSetCookie: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'Headers',
        configurable: true
    },
    [util.inspect.custom]: {
        enumerable: false
    }
});
webidl.converters.HeadersInit = function(V, prefix, argument) {
    if (webidl.util.Type(V) === webidl.util.Types.OBJECT) {
        const iterator = Reflect.get(V, Symbol.iterator);
        // A work-around to ensure we send the properly-cased Headers when V is a Headers object.
        // Read https://github.com/nodejs/undici/pull/3159#issuecomment-2075537226 before touching, please.
        if (!util.types.isProxy(V) && iterator === Headers.prototype.entries) {
            try {
                return getHeadersList(V).entriesList;
            } catch  {
            // fall-through
            }
        }
        if (typeof iterator === 'function') {
            return webidl.converters['sequence<sequence<ByteString>>'](V, prefix, argument, iterator.bind(V));
        }
        return webidl.converters['record<ByteString, ByteString>'](V, prefix, argument);
    }
    throw webidl.errors.conversionFailed({
        prefix: 'Headers constructor',
        argument: 'Argument 1',
        types: [
            'sequence<sequence<ByteString>>',
            'record<ByteString, ByteString>'
        ]
    });
};
module.exports = {
    fill,
    // for test.
    compareHeaderName,
    Headers,
    HeadersList,
    getHeadersGuard,
    setHeadersGuard,
    setHeadersList,
    getHeadersList
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/response.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Headers, HeadersList, fill, getHeadersGuard, setHeadersGuard, setHeadersList } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/headers.js [app-rsc] (ecmascript)");
const { extractBody, cloneBody, mixinBody, streamRegistry, bodyUnusable } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/body.js [app-rsc] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const nodeUtil = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const { kEnumerableProperty } = util;
const { isValidReasonPhrase, isCancelled, isAborted, serializeJavascriptValueToJSONString, isErrorLike, isomorphicEncode, environmentSettingsObject: relevantRealm } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { redirectStatusSet, nullBodyStatus } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/constants.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { URLSerializer } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const textEncoder = new TextEncoder('utf-8');
// https://fetch.spec.whatwg.org/#response-class
class Response {
    /** @type {Headers} */ #headers;
    #state;
    // Creates network error Response.
    static error() {
        // The static error() method steps are to return the result of creating a
        // Response object, given a new network error, "immutable", and this’s
        // relevant Realm.
        const responseObject = fromInnerResponse(makeNetworkError(), 'immutable');
        return responseObject;
    }
    // https://fetch.spec.whatwg.org/#dom-response-json
    static json(data, init = undefined) {
        webidl.argumentLengthCheck(arguments, 1, 'Response.json');
        if (init !== null) {
            init = webidl.converters.ResponseInit(init);
        }
        // 1. Let bytes the result of running serialize a JavaScript value to JSON bytes on data.
        const bytes = textEncoder.encode(serializeJavascriptValueToJSONString(data));
        // 2. Let body be the result of extracting bytes.
        const body = extractBody(bytes);
        // 3. Let responseObject be the result of creating a Response object, given a new response,
        //    "response", and this’s relevant Realm.
        const responseObject = fromInnerResponse(makeResponse({}), 'response');
        // 4. Perform initialize a response given responseObject, init, and (body, "application/json").
        initializeResponse(responseObject, init, {
            body: body[0],
            type: 'application/json'
        });
        // 5. Return responseObject.
        return responseObject;
    }
    // Creates a redirect Response that redirects to url with status status.
    static redirect(url, status = 302) {
        webidl.argumentLengthCheck(arguments, 1, 'Response.redirect');
        url = webidl.converters.USVString(url);
        status = webidl.converters['unsigned short'](status);
        // 1. Let parsedURL be the result of parsing url with current settings
        // object’s API base URL.
        // 2. If parsedURL is failure, then throw a TypeError.
        // TODO: base-URL?
        let parsedURL;
        try {
            parsedURL = new URL(url, relevantRealm.settingsObject.baseUrl);
        } catch (err) {
            throw new TypeError(`Failed to parse URL from ${url}`, {
                cause: err
            });
        }
        // 3. If status is not a redirect status, then throw a RangeError.
        if (!redirectStatusSet.has(status)) {
            throw new RangeError(`Invalid status code ${status}`);
        }
        // 4. Let responseObject be the result of creating a Response object,
        // given a new response, "immutable", and this’s relevant Realm.
        const responseObject = fromInnerResponse(makeResponse({}), 'immutable');
        // 5. Set responseObject’s response’s status to status.
        responseObject.#state.status = status;
        // 6. Let value be parsedURL, serialized and isomorphic encoded.
        const value = isomorphicEncode(URLSerializer(parsedURL));
        // 7. Append `Location`/value to responseObject’s response’s header list.
        responseObject.#state.headersList.append('location', value, true);
        // 8. Return responseObject.
        return responseObject;
    }
    // https://fetch.spec.whatwg.org/#dom-response
    constructor(body = null, init = undefined){
        webidl.util.markAsUncloneable(this);
        if (body === kConstruct) {
            return;
        }
        if (body !== null) {
            body = webidl.converters.BodyInit(body, 'Response', 'body');
        }
        init = webidl.converters.ResponseInit(init);
        // 1. Set this’s response to a new response.
        this.#state = makeResponse({});
        // 2. Set this’s headers to a new Headers object with this’s relevant
        // Realm, whose header list is this’s response’s header list and guard
        // is "response".
        this.#headers = new Headers(kConstruct);
        setHeadersGuard(this.#headers, 'response');
        setHeadersList(this.#headers, this.#state.headersList);
        // 3. Let bodyWithType be null.
        let bodyWithType = null;
        // 4. If body is non-null, then set bodyWithType to the result of extracting body.
        if (body != null) {
            const [extractedBody, type] = extractBody(body);
            bodyWithType = {
                body: extractedBody,
                type
            };
        }
        // 5. Perform initialize a response given this, init, and bodyWithType.
        initializeResponse(this, init, bodyWithType);
    }
    // Returns response’s type, e.g., "cors".
    get type() {
        webidl.brandCheck(this, Response);
        // The type getter steps are to return this’s response’s type.
        return this.#state.type;
    }
    // Returns response’s URL, if it has one; otherwise the empty string.
    get url() {
        webidl.brandCheck(this, Response);
        const urlList = this.#state.urlList;
        // The url getter steps are to return the empty string if this’s
        // response’s URL is null; otherwise this’s response’s URL,
        // serialized with exclude fragment set to true.
        const url = urlList[urlList.length - 1] ?? null;
        if (url === null) {
            return '';
        }
        return URLSerializer(url, true);
    }
    // Returns whether response was obtained through a redirect.
    get redirected() {
        webidl.brandCheck(this, Response);
        // The redirected getter steps are to return true if this’s response’s URL
        // list has more than one item; otherwise false.
        return this.#state.urlList.length > 1;
    }
    // Returns response’s status.
    get status() {
        webidl.brandCheck(this, Response);
        // The status getter steps are to return this’s response’s status.
        return this.#state.status;
    }
    // Returns whether response’s status is an ok status.
    get ok() {
        webidl.brandCheck(this, Response);
        // The ok getter steps are to return true if this’s response’s status is an
        // ok status; otherwise false.
        return this.#state.status >= 200 && this.#state.status <= 299;
    }
    // Returns response’s status message.
    get statusText() {
        webidl.brandCheck(this, Response);
        // The statusText getter steps are to return this’s response’s status
        // message.
        return this.#state.statusText;
    }
    // Returns response’s headers as Headers.
    get headers() {
        webidl.brandCheck(this, Response);
        // The headers getter steps are to return this’s headers.
        return this.#headers;
    }
    get body() {
        webidl.brandCheck(this, Response);
        return this.#state.body ? this.#state.body.stream : null;
    }
    get bodyUsed() {
        webidl.brandCheck(this, Response);
        return !!this.#state.body && util.isDisturbed(this.#state.body.stream);
    }
    // Returns a clone of response.
    clone() {
        webidl.brandCheck(this, Response);
        // 1. If this is unusable, then throw a TypeError.
        if (bodyUnusable(this.#state)) {
            throw webidl.errors.exception({
                header: 'Response.clone',
                message: 'Body has already been consumed.'
            });
        }
        // 2. Let clonedResponse be the result of cloning this’s response.
        const clonedResponse = cloneResponse(this.#state);
        // Note: To re-register because of a new stream.
        if (this.#state.body?.stream) {
            streamRegistry.register(this, new WeakRef(this.#state.body.stream));
        }
        // 3. Return the result of creating a Response object, given
        // clonedResponse, this’s headers’s guard, and this’s relevant Realm.
        return fromInnerResponse(clonedResponse, getHeadersGuard(this.#headers));
    }
    [nodeUtil.inspect.custom](depth, options) {
        if (options.depth === null) {
            options.depth = 2;
        }
        options.colors ??= true;
        const properties = {
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            body: this.body,
            bodyUsed: this.bodyUsed,
            ok: this.ok,
            redirected: this.redirected,
            type: this.type,
            url: this.url
        };
        return `Response ${nodeUtil.formatWithOptions(options, properties)}`;
    }
    /**
   * @param {Response} response
   */ static getResponseHeaders(response) {
        return response.#headers;
    }
    /**
   * @param {Response} response
   * @param {Headers} newHeaders
   */ static setResponseHeaders(response, newHeaders) {
        response.#headers = newHeaders;
    }
    /**
   * @param {Response} response
   */ static getResponseState(response) {
        return response.#state;
    }
    /**
   * @param {Response} response
   * @param {any} newState
   */ static setResponseState(response, newState) {
        response.#state = newState;
    }
}
const { getResponseHeaders, setResponseHeaders, getResponseState, setResponseState } = Response;
Reflect.deleteProperty(Response, 'getResponseHeaders');
Reflect.deleteProperty(Response, 'setResponseHeaders');
Reflect.deleteProperty(Response, 'getResponseState');
Reflect.deleteProperty(Response, 'setResponseState');
mixinBody(Response, getResponseState);
Object.defineProperties(Response.prototype, {
    type: kEnumerableProperty,
    url: kEnumerableProperty,
    status: kEnumerableProperty,
    ok: kEnumerableProperty,
    redirected: kEnumerableProperty,
    statusText: kEnumerableProperty,
    headers: kEnumerableProperty,
    clone: kEnumerableProperty,
    body: kEnumerableProperty,
    bodyUsed: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'Response',
        configurable: true
    }
});
Object.defineProperties(Response, {
    json: kEnumerableProperty,
    redirect: kEnumerableProperty,
    error: kEnumerableProperty
});
// https://fetch.spec.whatwg.org/#concept-response-clone
function cloneResponse(response) {
    // To clone a response response, run these steps:
    // 1. If response is a filtered response, then return a new identical
    // filtered response whose internal response is a clone of response’s
    // internal response.
    if (response.internalResponse) {
        return filterResponse(cloneResponse(response.internalResponse), response.type);
    }
    // 2. Let newResponse be a copy of response, except for its body.
    const newResponse = makeResponse({
        ...response,
        body: null
    });
    // 3. If response’s body is non-null, then set newResponse’s body to the
    // result of cloning response’s body.
    if (response.body != null) {
        newResponse.body = cloneBody(response.body);
    }
    // 4. Return newResponse.
    return newResponse;
}
function makeResponse(init) {
    return {
        aborted: false,
        rangeRequested: false,
        timingAllowPassed: false,
        requestIncludesCredentials: false,
        type: 'default',
        status: 200,
        timingInfo: null,
        cacheState: '',
        statusText: '',
        ...init,
        headersList: init?.headersList ? new HeadersList(init?.headersList) : new HeadersList(),
        urlList: init?.urlList ? [
            ...init.urlList
        ] : []
    };
}
function makeNetworkError(reason) {
    const isError = isErrorLike(reason);
    return makeResponse({
        type: 'error',
        status: 0,
        error: isError ? reason : new Error(reason ? String(reason) : reason),
        aborted: reason && reason.name === 'AbortError'
    });
}
// @see https://fetch.spec.whatwg.org/#concept-network-error
function isNetworkError(response) {
    return(// A network error is a response whose type is "error",
    response.type === 'error' && // status is 0
    response.status === 0);
}
function makeFilteredResponse(response, state) {
    state = {
        internalResponse: response,
        ...state
    };
    return new Proxy(response, {
        get (target, p) {
            return p in state ? state[p] : target[p];
        },
        set (target, p, value) {
            assert(!(p in state));
            target[p] = value;
            return true;
        }
    });
}
// https://fetch.spec.whatwg.org/#concept-filtered-response
function filterResponse(response, type) {
    // Set response to the following filtered response with response as its
    // internal response, depending on request’s response tainting:
    if (type === 'basic') {
        // A basic filtered response is a filtered response whose type is "basic"
        // and header list excludes any headers in internal response’s header list
        // whose name is a forbidden response-header name.
        // Note: undici does not implement forbidden response-header names
        return makeFilteredResponse(response, {
            type: 'basic',
            headersList: response.headersList
        });
    } else if (type === 'cors') {
        // A CORS filtered response is a filtered response whose type is "cors"
        // and header list excludes any headers in internal response’s header
        // list whose name is not a CORS-safelisted response-header name, given
        // internal response’s CORS-exposed header-name list.
        // Note: undici does not implement CORS-safelisted response-header names
        return makeFilteredResponse(response, {
            type: 'cors',
            headersList: response.headersList
        });
    } else if (type === 'opaque') {
        // An opaque filtered response is a filtered response whose type is
        // "opaque", URL list is the empty list, status is 0, status message
        // is the empty byte sequence, header list is empty, and body is null.
        return makeFilteredResponse(response, {
            type: 'opaque',
            urlList: Object.freeze([]),
            status: 0,
            statusText: '',
            body: null
        });
    } else if (type === 'opaqueredirect') {
        // An opaque-redirect filtered response is a filtered response whose type
        // is "opaqueredirect", status is 0, status message is the empty byte
        // sequence, header list is empty, and body is null.
        return makeFilteredResponse(response, {
            type: 'opaqueredirect',
            status: 0,
            statusText: '',
            headersList: [],
            body: null
        });
    } else {
        assert(false);
    }
}
// https://fetch.spec.whatwg.org/#appropriate-network-error
function makeAppropriateNetworkError(fetchParams, err = null) {
    // 1. Assert: fetchParams is canceled.
    assert(isCancelled(fetchParams));
    // 2. Return an aborted network error if fetchParams is aborted;
    // otherwise return a network error.
    return isAborted(fetchParams) ? makeNetworkError(Object.assign(new DOMException('The operation was aborted.', 'AbortError'), {
        cause: err
    })) : makeNetworkError(Object.assign(new DOMException('Request was cancelled.'), {
        cause: err
    }));
}
// https://whatpr.org/fetch/1392.html#initialize-a-response
function initializeResponse(response, init, body) {
    // 1. If init["status"] is not in the range 200 to 599, inclusive, then
    //    throw a RangeError.
    if (init.status !== null && (init.status < 200 || init.status > 599)) {
        throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    }
    // 2. If init["statusText"] does not match the reason-phrase token production,
    //    then throw a TypeError.
    if ('statusText' in init && init.statusText != null) {
        // See, https://datatracker.ietf.org/doc/html/rfc7230#section-3.1.2:
        //   reason-phrase  = *( HTAB / SP / VCHAR / obs-text )
        if (!isValidReasonPhrase(String(init.statusText))) {
            throw new TypeError('Invalid statusText');
        }
    }
    // 3. Set response’s response’s status to init["status"].
    if ('status' in init && init.status != null) {
        getResponseState(response).status = init.status;
    }
    // 4. Set response’s response’s status message to init["statusText"].
    if ('statusText' in init && init.statusText != null) {
        getResponseState(response).statusText = init.statusText;
    }
    // 5. If init["headers"] exists, then fill response’s headers with init["headers"].
    if ('headers' in init && init.headers != null) {
        fill(getResponseHeaders(response), init.headers);
    }
    // 6. If body was given, then:
    if (body) {
        // 1. If response's status is a null body status, then throw a TypeError.
        if (nullBodyStatus.includes(response.status)) {
            throw webidl.errors.exception({
                header: 'Response constructor',
                message: `Invalid response status code ${response.status}`
            });
        }
        // 2. Set response's body to body's body.
        getResponseState(response).body = body.body;
        // 3. If body's type is non-null and response's header list does not contain
        //    `Content-Type`, then append (`Content-Type`, body's type) to response's header list.
        if (body.type != null && !getResponseState(response).headersList.contains('content-type', true)) {
            getResponseState(response).headersList.append('content-type', body.type, true);
        }
    }
}
/**
 * @see https://fetch.spec.whatwg.org/#response-create
 * @param {any} innerResponse
 * @param {'request' | 'immutable' | 'request-no-cors' | 'response' | 'none'} guard
 * @returns {Response}
 */ function fromInnerResponse(innerResponse, guard) {
    const response = new Response(kConstruct);
    setResponseState(response, innerResponse);
    const headers = new Headers(kConstruct);
    setResponseHeaders(response, headers);
    setHeadersList(headers, innerResponse.headersList);
    setHeadersGuard(headers, guard);
    if (innerResponse.body?.stream) {
        // If the target (response) is reclaimed, the cleanup callback may be called at some point with
        // the held value provided for it (innerResponse.body.stream). The held value can be any value:
        // a primitive or an object, even undefined. If the held value is an object, the registry keeps
        // a strong reference to it (so it can pass it to the cleanup callback later). Reworded from
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
        streamRegistry.register(response, new WeakRef(innerResponse.body.stream));
    }
    return response;
}
// https://fetch.spec.whatwg.org/#typedefdef-xmlhttprequestbodyinit
webidl.converters.XMLHttpRequestBodyInit = function(V, prefix, name) {
    if (typeof V === 'string') {
        return webidl.converters.USVString(V, prefix, name);
    }
    if (webidl.is.Blob(V)) {
        return V;
    }
    if (webidl.is.BufferSource(V)) {
        return V;
    }
    if (webidl.is.FormData(V)) {
        return V;
    }
    if (webidl.is.URLSearchParams(V)) {
        return V;
    }
    return webidl.converters.DOMString(V, prefix, name);
};
// https://fetch.spec.whatwg.org/#bodyinit
webidl.converters.BodyInit = function(V, prefix, argument) {
    if (webidl.is.ReadableStream(V)) {
        return V;
    }
    // Note: the spec doesn't include async iterables,
    // this is an undici extension.
    if (V?.[Symbol.asyncIterator]) {
        return V;
    }
    return webidl.converters.XMLHttpRequestBodyInit(V, prefix, argument);
};
webidl.converters.ResponseInit = webidl.dictionaryConverter([
    {
        key: 'status',
        converter: webidl.converters['unsigned short'],
        defaultValue: ()=>200
    },
    {
        key: 'statusText',
        converter: webidl.converters.ByteString,
        defaultValue: ()=>''
    },
    {
        key: 'headers',
        converter: webidl.converters.HeadersInit
    }
]);
webidl.is.Response = webidl.util.MakeTypeAssertion(Response);
module.exports = {
    isNetworkError,
    makeNetworkError,
    makeResponse,
    makeAppropriateNetworkError,
    filterResponse,
    Response,
    cloneResponse,
    fromInnerResponse,
    getResponseState
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/request.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* globals AbortController */ const { extractBody, mixinBody, cloneBody, bodyUnusable } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/body.js [app-rsc] (ecmascript)");
const { Headers, fill: fillHeaders, HeadersList, setHeadersGuard, getHeadersGuard, setHeadersList, getHeadersList } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/headers.js [app-rsc] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const nodeUtil = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const { isValidHTTPToken, sameOrigin, environmentSettingsObject } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { forbiddenMethodsSet, corsSafeListedMethodsSet, referrerPolicy, requestRedirect, requestMode, requestCredentials, requestCache, requestDuplex } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/constants.js [app-rsc] (ecmascript)");
const { kEnumerableProperty, normalizedMethodRecordsBase, normalizedMethodRecords } = util;
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { URLSerializer } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { getMaxListeners, setMaxListeners, defaultMaxListeners } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const kAbortController = Symbol('abortController');
const requestFinalizer = new FinalizationRegistry(({ signal, abort })=>{
    signal.removeEventListener('abort', abort);
});
const dependentControllerMap = new WeakMap();
let abortSignalHasEventHandlerLeakWarning;
try {
    abortSignalHasEventHandlerLeakWarning = getMaxListeners(new AbortController().signal) > 0;
} catch  {
    abortSignalHasEventHandlerLeakWarning = false;
}
function buildAbort(acRef) {
    return abort;
    //TURBOPACK unreachable
    ;
    function abort() {
        const ac = acRef.deref();
        if (ac !== undefined) {
            // Currently, there is a problem with FinalizationRegistry.
            // https://github.com/nodejs/node/issues/49344
            // https://github.com/nodejs/node/issues/47748
            // In the case of abort, the first step is to unregister from it.
            // If the controller can refer to it, it is still registered.
            // It will be removed in the future.
            requestFinalizer.unregister(abort);
            // Unsubscribe a listener.
            // FinalizationRegistry will no longer be called, so this must be done.
            this.removeEventListener('abort', abort);
            ac.abort(this.reason);
            const controllerList = dependentControllerMap.get(ac.signal);
            if (controllerList !== undefined) {
                if (controllerList.size !== 0) {
                    for (const ref of controllerList){
                        const ctrl = ref.deref();
                        if (ctrl !== undefined) {
                            ctrl.abort(this.reason);
                        }
                    }
                    controllerList.clear();
                }
                dependentControllerMap.delete(ac.signal);
            }
        }
    }
}
let patchMethodWarning = false;
// https://fetch.spec.whatwg.org/#request-class
class Request {
    /** @type {AbortSignal} */ #signal;
    /** @type {import('../../dispatcher/dispatcher')} */ #dispatcher;
    /** @type {Headers} */ #headers;
    #state;
    // https://fetch.spec.whatwg.org/#dom-request
    constructor(input, init = undefined){
        webidl.util.markAsUncloneable(this);
        if (input === kConstruct) {
            return;
        }
        const prefix = 'Request constructor';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        input = webidl.converters.RequestInfo(input);
        init = webidl.converters.RequestInit(init);
        // 1. Let request be null.
        let request = null;
        // 2. Let fallbackMode be null.
        let fallbackMode = null;
        // 3. Let baseURL be this’s relevant settings object’s API base URL.
        const baseUrl = environmentSettingsObject.settingsObject.baseUrl;
        // 4. Let signal be null.
        let signal = null;
        // 5. If input is a string, then:
        if (typeof input === 'string') {
            this.#dispatcher = init.dispatcher;
            // 1. Let parsedURL be the result of parsing input with baseURL.
            // 2. If parsedURL is failure, then throw a TypeError.
            let parsedURL;
            try {
                parsedURL = new URL(input, baseUrl);
            } catch (err) {
                throw new TypeError('Failed to parse URL from ' + input, {
                    cause: err
                });
            }
            // 3. If parsedURL includes credentials, then throw a TypeError.
            if (parsedURL.username || parsedURL.password) {
                throw new TypeError('Request cannot be constructed from a URL that includes credentials: ' + input);
            }
            // 4. Set request to a new request whose URL is parsedURL.
            request = makeRequest({
                urlList: [
                    parsedURL
                ]
            });
            // 5. Set fallbackMode to "cors".
            fallbackMode = 'cors';
        } else {
            // 6. Otherwise:
            // 7. Assert: input is a Request object.
            assert(webidl.is.Request(input));
            // 8. Set request to input’s request.
            request = input.#state;
            // 9. Set signal to input’s signal.
            signal = input.#signal;
            this.#dispatcher = init.dispatcher || input.#dispatcher;
        }
        // 7. Let origin be this’s relevant settings object’s origin.
        const origin = environmentSettingsObject.settingsObject.origin;
        // 8. Let window be "client".
        let window = 'client';
        // 9. If request’s window is an environment settings object and its origin
        // is same origin with origin, then set window to request’s window.
        if (request.window?.constructor?.name === 'EnvironmentSettingsObject' && sameOrigin(request.window, origin)) {
            window = request.window;
        }
        // 10. If init["window"] exists and is non-null, then throw a TypeError.
        if (init.window != null) {
            throw new TypeError(`'window' option '${window}' must be null`);
        }
        // 11. If init["window"] exists, then set window to "no-window".
        if ('window' in init) {
            window = 'no-window';
        }
        // 12. Set request to a new request with the following properties:
        request = makeRequest({
            // URL request’s URL.
            // undici implementation note: this is set as the first item in request's urlList in makeRequest
            // method request’s method.
            method: request.method,
            // header list A copy of request’s header list.
            // undici implementation note: headersList is cloned in makeRequest
            headersList: request.headersList,
            // unsafe-request flag Set.
            unsafeRequest: request.unsafeRequest,
            // client This’s relevant settings object.
            client: environmentSettingsObject.settingsObject,
            // window window.
            window,
            // priority request’s priority.
            priority: request.priority,
            // origin request’s origin. The propagation of the origin is only significant for navigation requests
            // being handled by a service worker. In this scenario a request can have an origin that is different
            // from the current client.
            origin: request.origin,
            // referrer request’s referrer.
            referrer: request.referrer,
            // referrer policy request’s referrer policy.
            referrerPolicy: request.referrerPolicy,
            // mode request’s mode.
            mode: request.mode,
            // credentials mode request’s credentials mode.
            credentials: request.credentials,
            // cache mode request’s cache mode.
            cache: request.cache,
            // redirect mode request’s redirect mode.
            redirect: request.redirect,
            // integrity metadata request’s integrity metadata.
            integrity: request.integrity,
            // keepalive request’s keepalive.
            keepalive: request.keepalive,
            // reload-navigation flag request’s reload-navigation flag.
            reloadNavigation: request.reloadNavigation,
            // history-navigation flag request’s history-navigation flag.
            historyNavigation: request.historyNavigation,
            // URL list A clone of request’s URL list.
            urlList: [
                ...request.urlList
            ]
        });
        const initHasKey = Object.keys(init).length !== 0;
        // 13. If init is not empty, then:
        if (initHasKey) {
            // 1. If request’s mode is "navigate", then set it to "same-origin".
            if (request.mode === 'navigate') {
                request.mode = 'same-origin';
            }
            // 2. Unset request’s reload-navigation flag.
            request.reloadNavigation = false;
            // 3. Unset request’s history-navigation flag.
            request.historyNavigation = false;
            // 4. Set request’s origin to "client".
            request.origin = 'client';
            // 5. Set request’s referrer to "client"
            request.referrer = 'client';
            // 6. Set request’s referrer policy to the empty string.
            request.referrerPolicy = '';
            // 7. Set request’s URL to request’s current URL.
            request.url = request.urlList[request.urlList.length - 1];
            // 8. Set request’s URL list to « request’s URL ».
            request.urlList = [
                request.url
            ];
        }
        // 14. If init["referrer"] exists, then:
        if (init.referrer !== undefined) {
            // 1. Let referrer be init["referrer"].
            const referrer = init.referrer;
            // 2. If referrer is the empty string, then set request’s referrer to "no-referrer".
            if (referrer === '') {
                request.referrer = 'no-referrer';
            } else {
                // 1. Let parsedReferrer be the result of parsing referrer with
                // baseURL.
                // 2. If parsedReferrer is failure, then throw a TypeError.
                let parsedReferrer;
                try {
                    parsedReferrer = new URL(referrer, baseUrl);
                } catch (err) {
                    throw new TypeError(`Referrer "${referrer}" is not a valid URL.`, {
                        cause: err
                    });
                }
                // 3. If one of the following is true
                // - parsedReferrer’s scheme is "about" and path is the string "client"
                // - parsedReferrer’s origin is not same origin with origin
                // then set request’s referrer to "client".
                if (parsedReferrer.protocol === 'about:' && parsedReferrer.hostname === 'client' || origin && !sameOrigin(parsedReferrer, environmentSettingsObject.settingsObject.baseUrl)) {
                    request.referrer = 'client';
                } else {
                    // 4. Otherwise, set request’s referrer to parsedReferrer.
                    request.referrer = parsedReferrer;
                }
            }
        }
        // 15. If init["referrerPolicy"] exists, then set request’s referrer policy
        // to it.
        if (init.referrerPolicy !== undefined) {
            request.referrerPolicy = init.referrerPolicy;
        }
        // 16. Let mode be init["mode"] if it exists, and fallbackMode otherwise.
        let mode;
        if (init.mode !== undefined) {
            mode = init.mode;
        } else {
            mode = fallbackMode;
        }
        // 17. If mode is "navigate", then throw a TypeError.
        if (mode === 'navigate') {
            throw webidl.errors.exception({
                header: 'Request constructor',
                message: 'invalid request mode navigate.'
            });
        }
        // 18. If mode is non-null, set request’s mode to mode.
        if (mode != null) {
            request.mode = mode;
        }
        // 19. If init["credentials"] exists, then set request’s credentials mode
        // to it.
        if (init.credentials !== undefined) {
            request.credentials = init.credentials;
        }
        // 18. If init["cache"] exists, then set request’s cache mode to it.
        if (init.cache !== undefined) {
            request.cache = init.cache;
        }
        // 21. If request’s cache mode is "only-if-cached" and request’s mode is
        // not "same-origin", then throw a TypeError.
        if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') {
            throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
        }
        // 22. If init["redirect"] exists, then set request’s redirect mode to it.
        if (init.redirect !== undefined) {
            request.redirect = init.redirect;
        }
        // 23. If init["integrity"] exists, then set request’s integrity metadata to it.
        if (init.integrity != null) {
            request.integrity = String(init.integrity);
        }
        // 24. If init["keepalive"] exists, then set request’s keepalive to it.
        if (init.keepalive !== undefined) {
            request.keepalive = Boolean(init.keepalive);
        }
        // 25. If init["method"] exists, then:
        if (init.method !== undefined) {
            // 1. Let method be init["method"].
            let method = init.method;
            const mayBeNormalized = normalizedMethodRecords[method];
            if (mayBeNormalized !== undefined) {
                // Note: Bypass validation DELETE, GET, HEAD, OPTIONS, POST, PUT, PATCH and these lowercase ones
                request.method = mayBeNormalized;
            } else {
                // 2. If method is not a method or method is a forbidden method, then
                // throw a TypeError.
                if (!isValidHTTPToken(method)) {
                    throw new TypeError(`'${method}' is not a valid HTTP method.`);
                }
                const upperCase = method.toUpperCase();
                if (forbiddenMethodsSet.has(upperCase)) {
                    throw new TypeError(`'${method}' HTTP method is unsupported.`);
                }
                // 3. Normalize method.
                // https://fetch.spec.whatwg.org/#concept-method-normalize
                // Note: must be in uppercase
                method = normalizedMethodRecordsBase[upperCase] ?? method;
                // 4. Set request’s method to method.
                request.method = method;
            }
            if (!patchMethodWarning && request.method === 'patch') {
                process.emitWarning('Using `patch` is highly likely to result in a `405 Method Not Allowed`. `PATCH` is much more likely to succeed.', {
                    code: 'UNDICI-FETCH-patch'
                });
                patchMethodWarning = true;
            }
        }
        // 26. If init["signal"] exists, then set signal to it.
        if (init.signal !== undefined) {
            signal = init.signal;
        }
        // 27. Set this’s request to request.
        this.#state = request;
        // 28. Set this’s signal to a new AbortSignal object with this’s relevant
        // Realm.
        // TODO: could this be simplified with AbortSignal.any
        // (https://dom.spec.whatwg.org/#dom-abortsignal-any)
        const ac = new AbortController();
        this.#signal = ac.signal;
        // 29. If signal is not null, then make this’s signal follow signal.
        if (signal != null) {
            if (signal.aborted) {
                ac.abort(signal.reason);
            } else {
                // Keep a strong ref to ac while request object
                // is alive. This is needed to prevent AbortController
                // from being prematurely garbage collected.
                // See, https://github.com/nodejs/undici/issues/1926.
                this[kAbortController] = ac;
                const acRef = new WeakRef(ac);
                const abort = buildAbort(acRef);
                // If the max amount of listeners is equal to the default, increase it
                if (abortSignalHasEventHandlerLeakWarning && getMaxListeners(signal) === defaultMaxListeners) {
                    setMaxListeners(1500, signal);
                }
                util.addAbortListener(signal, abort);
                // The third argument must be a registry key to be unregistered.
                // Without it, you cannot unregister.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry
                // abort is used as the unregister key. (because it is unique)
                requestFinalizer.register(ac, {
                    signal,
                    abort
                }, abort);
            }
        }
        // 30. Set this’s headers to a new Headers object with this’s relevant
        // Realm, whose header list is request’s header list and guard is
        // "request".
        this.#headers = new Headers(kConstruct);
        setHeadersList(this.#headers, request.headersList);
        setHeadersGuard(this.#headers, 'request');
        // 31. If this’s request’s mode is "no-cors", then:
        if (mode === 'no-cors') {
            // 1. If this’s request’s method is not a CORS-safelisted method,
            // then throw a TypeError.
            if (!corsSafeListedMethodsSet.has(request.method)) {
                throw new TypeError(`'${request.method} is unsupported in no-cors mode.`);
            }
            // 2. Set this’s headers’s guard to "request-no-cors".
            setHeadersGuard(this.#headers, 'request-no-cors');
        }
        // 32. If init is not empty, then:
        if (initHasKey) {
            /** @type {HeadersList} */ const headersList = getHeadersList(this.#headers);
            // 1. Let headers be a copy of this’s headers and its associated header
            // list.
            // 2. If init["headers"] exists, then set headers to init["headers"].
            const headers = init.headers !== undefined ? init.headers : new HeadersList(headersList);
            // 3. Empty this’s headers’s header list.
            headersList.clear();
            // 4. If headers is a Headers object, then for each header in its header
            // list, append header’s name/header’s value to this’s headers.
            if (headers instanceof HeadersList) {
                for (const { name, value } of headers.rawValues()){
                    headersList.append(name, value, false);
                }
                // Note: Copy the `set-cookie` meta-data.
                headersList.cookies = headers.cookies;
            } else {
                // 5. Otherwise, fill this’s headers with headers.
                fillHeaders(this.#headers, headers);
            }
        }
        // 33. Let inputBody be input’s request’s body if input is a Request
        // object; otherwise null.
        const inputBody = webidl.is.Request(input) ? input.#state.body : null;
        // 34. If either init["body"] exists and is non-null or inputBody is
        // non-null, and request’s method is `GET` or `HEAD`, then throw a
        // TypeError.
        if ((init.body != null || inputBody != null) && (request.method === 'GET' || request.method === 'HEAD')) {
            throw new TypeError('Request with GET/HEAD method cannot have body.');
        }
        // 35. Let initBody be null.
        let initBody = null;
        // 36. If init["body"] exists and is non-null, then:
        if (init.body != null) {
            // 1. Let Content-Type be null.
            // 2. Set initBody and Content-Type to the result of extracting
            // init["body"], with keepalive set to request’s keepalive.
            const [extractedBody, contentType] = extractBody(init.body, request.keepalive);
            initBody = extractedBody;
            // 3, If Content-Type is non-null and this’s headers’s header list does
            // not contain `Content-Type`, then append `Content-Type`/Content-Type to
            // this’s headers.
            if (contentType && !getHeadersList(this.#headers).contains('content-type', true)) {
                this.#headers.append('content-type', contentType, true);
            }
        }
        // 37. Let inputOrInitBody be initBody if it is non-null; otherwise
        // inputBody.
        const inputOrInitBody = initBody ?? inputBody;
        // 38. If inputOrInitBody is non-null and inputOrInitBody’s source is
        // null, then:
        if (inputOrInitBody != null && inputOrInitBody.source == null) {
            // 1. If initBody is non-null and init["duplex"] does not exist,
            //    then throw a TypeError.
            if (initBody != null && init.duplex == null) {
                throw new TypeError('RequestInit: duplex option is required when sending a body.');
            }
            // 2. If this’s request’s mode is neither "same-origin" nor "cors",
            // then throw a TypeError.
            if (request.mode !== 'same-origin' && request.mode !== 'cors') {
                throw new TypeError('If request is made from ReadableStream, mode should be "same-origin" or "cors"');
            }
            // 3. Set this’s request’s use-CORS-preflight flag.
            request.useCORSPreflightFlag = true;
        }
        // 39. Let finalBody be inputOrInitBody.
        let finalBody = inputOrInitBody;
        // 40. If initBody is null and inputBody is non-null, then:
        if (initBody == null && inputBody != null) {
            // 1. If input is unusable, then throw a TypeError.
            if (bodyUnusable(input.#state)) {
                throw new TypeError('Cannot construct a Request with a Request object that has already been used.');
            }
            // 2. Set finalBody to the result of creating a proxy for inputBody.
            // https://streams.spec.whatwg.org/#readablestream-create-a-proxy
            const identityTransform = new TransformStream();
            inputBody.stream.pipeThrough(identityTransform);
            finalBody = {
                source: inputBody.source,
                length: inputBody.length,
                stream: identityTransform.readable
            };
        }
        // 41. Set this’s request’s body to finalBody.
        this.#state.body = finalBody;
    }
    // Returns request’s HTTP method, which is "GET" by default.
    get method() {
        webidl.brandCheck(this, Request);
        // The method getter steps are to return this’s request’s method.
        return this.#state.method;
    }
    // Returns the URL of request as a string.
    get url() {
        webidl.brandCheck(this, Request);
        // The url getter steps are to return this’s request’s URL, serialized.
        return URLSerializer(this.#state.url);
    }
    // Returns a Headers object consisting of the headers associated with request.
    // Note that headers added in the network layer by the user agent will not
    // be accounted for in this object, e.g., the "Host" header.
    get headers() {
        webidl.brandCheck(this, Request);
        // The headers getter steps are to return this’s headers.
        return this.#headers;
    }
    // Returns the kind of resource requested by request, e.g., "document"
    // or "script".
    get destination() {
        webidl.brandCheck(this, Request);
        // The destination getter are to return this’s request’s destination.
        return this.#state.destination;
    }
    // Returns the referrer of request. Its value can be a same-origin URL if
    // explicitly set in init, the empty string to indicate no referrer, and
    // "about:client" when defaulting to the global’s default. This is used
    // during fetching to determine the value of the `Referer` header of the
    // request being made.
    get referrer() {
        webidl.brandCheck(this, Request);
        // 1. If this’s request’s referrer is "no-referrer", then return the
        // empty string.
        if (this.#state.referrer === 'no-referrer') {
            return '';
        }
        // 2. If this’s request’s referrer is "client", then return
        // "about:client".
        if (this.#state.referrer === 'client') {
            return 'about:client';
        }
        // Return this’s request’s referrer, serialized.
        return this.#state.referrer.toString();
    }
    // Returns the referrer policy associated with request.
    // This is used during fetching to compute the value of the request’s
    // referrer.
    get referrerPolicy() {
        webidl.brandCheck(this, Request);
        // The referrerPolicy getter steps are to return this’s request’s referrer policy.
        return this.#state.referrerPolicy;
    }
    // Returns the mode associated with request, which is a string indicating
    // whether the request will use CORS, or will be restricted to same-origin
    // URLs.
    get mode() {
        webidl.brandCheck(this, Request);
        // The mode getter steps are to return this’s request’s mode.
        return this.#state.mode;
    }
    // Returns the credentials mode associated with request,
    // which is a string indicating whether credentials will be sent with the
    // request always, never, or only when sent to a same-origin URL.
    get credentials() {
        webidl.brandCheck(this, Request);
        // The credentials getter steps are to return this’s request’s credentials mode.
        return this.#state.credentials;
    }
    // Returns the cache mode associated with request,
    // which is a string indicating how the request will
    // interact with the browser’s cache when fetching.
    get cache() {
        webidl.brandCheck(this, Request);
        // The cache getter steps are to return this’s request’s cache mode.
        return this.#state.cache;
    }
    // Returns the redirect mode associated with request,
    // which is a string indicating how redirects for the
    // request will be handled during fetching. A request
    // will follow redirects by default.
    get redirect() {
        webidl.brandCheck(this, Request);
        // The redirect getter steps are to return this’s request’s redirect mode.
        return this.#state.redirect;
    }
    // Returns request’s subresource integrity metadata, which is a
    // cryptographic hash of the resource being fetched. Its value
    // consists of multiple hashes separated by whitespace. [SRI]
    get integrity() {
        webidl.brandCheck(this, Request);
        // The integrity getter steps are to return this’s request’s integrity
        // metadata.
        return this.#state.integrity;
    }
    // Returns a boolean indicating whether or not request can outlive the
    // global in which it was created.
    get keepalive() {
        webidl.brandCheck(this, Request);
        // The keepalive getter steps are to return this’s request’s keepalive.
        return this.#state.keepalive;
    }
    // Returns a boolean indicating whether or not request is for a reload
    // navigation.
    get isReloadNavigation() {
        webidl.brandCheck(this, Request);
        // The isReloadNavigation getter steps are to return true if this’s
        // request’s reload-navigation flag is set; otherwise false.
        return this.#state.reloadNavigation;
    }
    // Returns a boolean indicating whether or not request is for a history
    // navigation (a.k.a. back-forward navigation).
    get isHistoryNavigation() {
        webidl.brandCheck(this, Request);
        // The isHistoryNavigation getter steps are to return true if this’s request’s
        // history-navigation flag is set; otherwise false.
        return this.#state.historyNavigation;
    }
    // Returns the signal associated with request, which is an AbortSignal
    // object indicating whether or not request has been aborted, and its
    // abort event handler.
    get signal() {
        webidl.brandCheck(this, Request);
        // The signal getter steps are to return this’s signal.
        return this.#signal;
    }
    get body() {
        webidl.brandCheck(this, Request);
        return this.#state.body ? this.#state.body.stream : null;
    }
    get bodyUsed() {
        webidl.brandCheck(this, Request);
        return !!this.#state.body && util.isDisturbed(this.#state.body.stream);
    }
    get duplex() {
        webidl.brandCheck(this, Request);
        return 'half';
    }
    // Returns a clone of request.
    clone() {
        webidl.brandCheck(this, Request);
        // 1. If this is unusable, then throw a TypeError.
        if (bodyUnusable(this.#state)) {
            throw new TypeError('unusable');
        }
        // 2. Let clonedRequest be the result of cloning this’s request.
        const clonedRequest = cloneRequest(this.#state);
        // 3. Let clonedRequestObject be the result of creating a Request object,
        // given clonedRequest, this’s headers’s guard, and this’s relevant Realm.
        // 4. Make clonedRequestObject’s signal follow this’s signal.
        const ac = new AbortController();
        if (this.signal.aborted) {
            ac.abort(this.signal.reason);
        } else {
            let list = dependentControllerMap.get(this.signal);
            if (list === undefined) {
                list = new Set();
                dependentControllerMap.set(this.signal, list);
            }
            const acRef = new WeakRef(ac);
            list.add(acRef);
            util.addAbortListener(ac.signal, buildAbort(acRef));
        }
        // 4. Return clonedRequestObject.
        return fromInnerRequest(clonedRequest, this.#dispatcher, ac.signal, getHeadersGuard(this.#headers));
    }
    [nodeUtil.inspect.custom](depth, options) {
        if (options.depth === null) {
            options.depth = 2;
        }
        options.colors ??= true;
        const properties = {
            method: this.method,
            url: this.url,
            headers: this.headers,
            destination: this.destination,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            mode: this.mode,
            credentials: this.credentials,
            cache: this.cache,
            redirect: this.redirect,
            integrity: this.integrity,
            keepalive: this.keepalive,
            isReloadNavigation: this.isReloadNavigation,
            isHistoryNavigation: this.isHistoryNavigation,
            signal: this.signal
        };
        return `Request ${nodeUtil.formatWithOptions(options, properties)}`;
    }
    /**
   * @param {Request} request
   * @param {AbortSignal} newSignal
   */ static setRequestSignal(request, newSignal) {
        request.#signal = newSignal;
        return request;
    }
    /**
   * @param {Request} request
   */ static getRequestDispatcher(request) {
        return request.#dispatcher;
    }
    /**
   * @param {Request} request
   * @param {import('../../dispatcher/dispatcher')} newDispatcher
   */ static setRequestDispatcher(request, newDispatcher) {
        request.#dispatcher = newDispatcher;
    }
    /**
   * @param {Request} request
   * @param {Headers} newHeaders
   */ static setRequestHeaders(request, newHeaders) {
        request.#headers = newHeaders;
    }
    /**
   * @param {Request} request
   */ static getRequestState(request) {
        return request.#state;
    }
    /**
   * @param {Request} request
   * @param {any} newState
   */ static setRequestState(request, newState) {
        request.#state = newState;
    }
}
const { setRequestSignal, getRequestDispatcher, setRequestDispatcher, setRequestHeaders, getRequestState, setRequestState } = Request;
Reflect.deleteProperty(Request, 'setRequestSignal');
Reflect.deleteProperty(Request, 'getRequestDispatcher');
Reflect.deleteProperty(Request, 'setRequestDispatcher');
Reflect.deleteProperty(Request, 'setRequestHeaders');
Reflect.deleteProperty(Request, 'getRequestState');
Reflect.deleteProperty(Request, 'setRequestState');
mixinBody(Request, getRequestState);
// https://fetch.spec.whatwg.org/#requests
function makeRequest(init) {
    return {
        method: init.method ?? 'GET',
        localURLsOnly: init.localURLsOnly ?? false,
        unsafeRequest: init.unsafeRequest ?? false,
        body: init.body ?? null,
        client: init.client ?? null,
        reservedClient: init.reservedClient ?? null,
        replacesClientId: init.replacesClientId ?? '',
        window: init.window ?? 'client',
        keepalive: init.keepalive ?? false,
        serviceWorkers: init.serviceWorkers ?? 'all',
        initiator: init.initiator ?? '',
        destination: init.destination ?? '',
        priority: init.priority ?? null,
        origin: init.origin ?? 'client',
        policyContainer: init.policyContainer ?? 'client',
        referrer: init.referrer ?? 'client',
        referrerPolicy: init.referrerPolicy ?? '',
        mode: init.mode ?? 'no-cors',
        useCORSPreflightFlag: init.useCORSPreflightFlag ?? false,
        credentials: init.credentials ?? 'same-origin',
        useCredentials: init.useCredentials ?? false,
        cache: init.cache ?? 'default',
        redirect: init.redirect ?? 'follow',
        integrity: init.integrity ?? '',
        cryptoGraphicsNonceMetadata: init.cryptoGraphicsNonceMetadata ?? '',
        parserMetadata: init.parserMetadata ?? '',
        reloadNavigation: init.reloadNavigation ?? false,
        historyNavigation: init.historyNavigation ?? false,
        userActivation: init.userActivation ?? false,
        taintedOrigin: init.taintedOrigin ?? false,
        redirectCount: init.redirectCount ?? 0,
        responseTainting: init.responseTainting ?? 'basic',
        preventNoCacheCacheControlHeaderModification: init.preventNoCacheCacheControlHeaderModification ?? false,
        done: init.done ?? false,
        timingAllowFailed: init.timingAllowFailed ?? false,
        urlList: init.urlList,
        url: init.urlList[0],
        headersList: init.headersList ? new HeadersList(init.headersList) : new HeadersList()
    };
}
// https://fetch.spec.whatwg.org/#concept-request-clone
function cloneRequest(request) {
    // To clone a request request, run these steps:
    // 1. Let newRequest be a copy of request, except for its body.
    const newRequest = makeRequest({
        ...request,
        body: null
    });
    // 2. If request’s body is non-null, set newRequest’s body to the
    // result of cloning request’s body.
    if (request.body != null) {
        newRequest.body = cloneBody(request.body);
    }
    // 3. Return newRequest.
    return newRequest;
}
/**
 * @see https://fetch.spec.whatwg.org/#request-create
 * @param {any} innerRequest
 * @param {import('../../dispatcher/agent')} dispatcher
 * @param {AbortSignal} signal
 * @param {'request' | 'immutable' | 'request-no-cors' | 'response' | 'none'} guard
 * @returns {Request}
 */ function fromInnerRequest(innerRequest, dispatcher, signal, guard) {
    const request = new Request(kConstruct);
    setRequestState(request, innerRequest);
    setRequestDispatcher(request, dispatcher);
    setRequestSignal(request, signal);
    const headers = new Headers(kConstruct);
    setRequestHeaders(request, headers);
    setHeadersList(headers, innerRequest.headersList);
    setHeadersGuard(headers, guard);
    return request;
}
Object.defineProperties(Request.prototype, {
    method: kEnumerableProperty,
    url: kEnumerableProperty,
    headers: kEnumerableProperty,
    redirect: kEnumerableProperty,
    clone: kEnumerableProperty,
    signal: kEnumerableProperty,
    duplex: kEnumerableProperty,
    destination: kEnumerableProperty,
    body: kEnumerableProperty,
    bodyUsed: kEnumerableProperty,
    isHistoryNavigation: kEnumerableProperty,
    isReloadNavigation: kEnumerableProperty,
    keepalive: kEnumerableProperty,
    integrity: kEnumerableProperty,
    cache: kEnumerableProperty,
    credentials: kEnumerableProperty,
    attribute: kEnumerableProperty,
    referrerPolicy: kEnumerableProperty,
    referrer: kEnumerableProperty,
    mode: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'Request',
        configurable: true
    }
});
webidl.is.Request = webidl.util.MakeTypeAssertion(Request);
/**
 * @param {*} V
 * @returns {import('../../../types/fetch').Request|string}
 *
 * @see https://fetch.spec.whatwg.org/#requestinfo
 */ webidl.converters.RequestInfo = function(V) {
    if (typeof V === 'string') {
        return webidl.converters.USVString(V);
    }
    if (webidl.is.Request(V)) {
        return V;
    }
    return webidl.converters.USVString(V);
};
/**
 * @param {*} V
 * @returns {import('../../../types/fetch').RequestInit}
 * @see https://fetch.spec.whatwg.org/#requestinit
 */ webidl.converters.RequestInit = webidl.dictionaryConverter([
    {
        key: 'method',
        converter: webidl.converters.ByteString
    },
    {
        key: 'headers',
        converter: webidl.converters.HeadersInit
    },
    {
        key: 'body',
        converter: webidl.nullableConverter(webidl.converters.BodyInit)
    },
    {
        key: 'referrer',
        converter: webidl.converters.USVString
    },
    {
        key: 'referrerPolicy',
        converter: webidl.converters.DOMString,
        // https://w3c.github.io/webappsec-referrer-policy/#referrer-policy
        allowedValues: referrerPolicy
    },
    {
        key: 'mode',
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#concept-request-mode
        allowedValues: requestMode
    },
    {
        key: 'credentials',
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestcredentials
        allowedValues: requestCredentials
    },
    {
        key: 'cache',
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestcache
        allowedValues: requestCache
    },
    {
        key: 'redirect',
        converter: webidl.converters.DOMString,
        // https://fetch.spec.whatwg.org/#requestredirect
        allowedValues: requestRedirect
    },
    {
        key: 'integrity',
        converter: webidl.converters.DOMString
    },
    {
        key: 'keepalive',
        converter: webidl.converters.boolean
    },
    {
        key: 'signal',
        converter: webidl.nullableConverter((signal)=>webidl.converters.AbortSignal(signal, 'RequestInit', 'signal'))
    },
    {
        key: 'window',
        converter: webidl.converters.any
    },
    {
        key: 'duplex',
        converter: webidl.converters.DOMString,
        allowedValues: requestDuplex
    },
    {
        key: 'dispatcher',
        converter: webidl.converters.any
    }
]);
module.exports = {
    Request,
    makeRequest,
    fromInnerRequest,
    cloneRequest,
    getRequestDispatcher,
    getRequestState
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/subresource-integrity/subresource-integrity.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
/**
 * @typedef {object} Metadata
 * @property {SRIHashAlgorithm} alg - The algorithm used for the hash.
 * @property {string} val - The base64-encoded hash value.
 */ /**
 * @typedef {Metadata[]} MetadataList
 */ /**
 * @typedef {('sha256' | 'sha384' | 'sha512')} SRIHashAlgorithm
 */ /**
 * @type {Map<SRIHashAlgorithm, number>}
 *
 * The valid SRI hash algorithm token set is the ordered set « "sha256",
 * "sha384", "sha512" » (corresponding to SHA-256, SHA-384, and SHA-512
 * respectively). The ordering of this set is meaningful, with stronger
 * algorithms appearing later in the set.
 *
 * @see https://w3c.github.io/webappsec-subresource-integrity/#valid-sri-hash-algorithm-token-set
 */ const validSRIHashAlgorithmTokenSet = new Map([
    [
        'sha256',
        0
    ],
    [
        'sha384',
        1
    ],
    [
        'sha512',
        2
    ]
]);
// https://nodejs.org/api/crypto.html#determining-if-crypto-support-is-unavailable
/** @type {import('crypto')} */ let crypto;
try {
    crypto = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
    const cryptoHashes = crypto.getHashes();
    // If no hashes are available, we cannot support SRI.
    if (cryptoHashes.length === 0) {
        validSRIHashAlgorithmTokenSet.clear();
    }
    for (const algorithm of validSRIHashAlgorithmTokenSet.keys()){
        // If the algorithm is not supported, remove it from the list.
        if (cryptoHashes.includes(algorithm) === false) {
            validSRIHashAlgorithmTokenSet.delete(algorithm);
        }
    }
/* c8 ignore next 4 */ } catch  {
    // If crypto is not available, we cannot support SRI.
    validSRIHashAlgorithmTokenSet.clear();
}
/**
 * @typedef GetSRIHashAlgorithmIndex
 * @type {(algorithm: SRIHashAlgorithm) => number}
 * @param {SRIHashAlgorithm} algorithm
 * @returns {number} The index of the algorithm in the valid SRI hash algorithm
 * token set.
 */ const getSRIHashAlgorithmIndex = Map.prototype.get.bind(validSRIHashAlgorithmTokenSet);
/**
 * @typedef IsValidSRIHashAlgorithm
 * @type {(algorithm: string) => algorithm is SRIHashAlgorithm}
 * @param {*} algorithm
 * @returns {algorithm is SRIHashAlgorithm}
 */ const isValidSRIHashAlgorithm = Map.prototype.has.bind(validSRIHashAlgorithmTokenSet);
/**
 * @param {Uint8Array} bytes
 * @param {string} metadataList
 * @returns {boolean}
 *
 * @see https://w3c.github.io/webappsec-subresource-integrity/#does-response-match-metadatalist
 */ const bytesMatch = crypto === undefined || validSRIHashAlgorithmTokenSet.size === 0 ? ()=>true : (bytes, metadataList)=>{
    // 1. Let parsedMetadata be the result of parsing metadataList.
    const parsedMetadata = parseMetadata(metadataList);
    // 2. If parsedMetadata is empty set, return true.
    if (parsedMetadata.length === 0) {
        return true;
    }
    // 3. Let metadata be the result of getting the strongest
    //    metadata from parsedMetadata.
    const metadata = getStrongestMetadata(parsedMetadata);
    // 4. For each item in metadata:
    for (const item of metadata){
        // 1. Let algorithm be the item["alg"].
        const algorithm = item.alg;
        // 2. Let expectedValue be the item["val"].
        const expectedValue = item.val;
        // See https://github.com/web-platform-tests/wpt/commit/e4c5cc7a5e48093220528dfdd1c4012dc3837a0e
        // "be liberal with padding". This is annoying, and it's not even in the spec.
        // 3. Let actualValue be the result of applying algorithm to bytes .
        const actualValue = applyAlgorithmToBytes(algorithm, bytes);
        // 4. If actualValue is a case-sensitive match for expectedValue,
        //    return true.
        if (caseSensitiveMatch(actualValue, expectedValue)) {
            return true;
        }
    }
    // 5. Return false.
    return false;
};
/**
 * @param {MetadataList} metadataList
 * @returns {MetadataList} The strongest hash algorithm from the metadata list.
 */ function getStrongestMetadata(metadataList) {
    // 1. Let result be the empty set and strongest be the empty string.
    const result = [];
    /** @type {Metadata|null} */ let strongest = null;
    // 2. For each item in set:
    for (const item of metadataList){
        // 1. Assert: item["alg"] is a valid SRI hash algorithm token.
        assert(isValidSRIHashAlgorithm(item.alg), 'Invalid SRI hash algorithm token');
        // 2. If result is the empty set, then:
        if (result.length === 0) {
            // 1. Append item to result.
            result.push(item);
            // 2. Set strongest to item.
            strongest = item;
            continue;
        }
        // 3. Let currentAlgorithm be strongest["alg"], and currentAlgorithmIndex be
        // the index of currentAlgorithm in the valid SRI hash algorithm token set.
        const currentAlgorithm = /** @type {Metadata} */ strongest.alg;
        const currentAlgorithmIndex = getSRIHashAlgorithmIndex(currentAlgorithm);
        // 4. Let newAlgorithm be the item["alg"], and newAlgorithmIndex be the
        // index of newAlgorithm in the valid SRI hash algorithm token set.
        const newAlgorithm = item.alg;
        const newAlgorithmIndex = getSRIHashAlgorithmIndex(newAlgorithm);
        // 5. If newAlgorithmIndex is less than currentAlgorithmIndex, then continue.
        if (newAlgorithmIndex < currentAlgorithmIndex) {
            continue;
        // 6. Otherwise, if newAlgorithmIndex is greater than
        // currentAlgorithmIndex:
        } else if (newAlgorithmIndex > currentAlgorithmIndex) {
            // 1. Set strongest to item.
            strongest = item;
            // 2. Set result to « item ».
            result[0] = item;
            result.length = 1;
        // 7. Otherwise, newAlgorithmIndex and currentAlgorithmIndex are the same
        // value. Append item to result.
        } else {
            result.push(item);
        }
    }
    // 3. Return result.
    return result;
}
/**
 * @param {string} metadata
 * @returns {MetadataList}
 *
 * @see https://w3c.github.io/webappsec-subresource-integrity/#parse-metadata
 */ function parseMetadata(metadata) {
    // 1. Let result be the empty set.
    /** @type {MetadataList} */ const result = [];
    // 2. For each item returned by splitting metadata on spaces:
    for (const item of metadata.split(' ')){
        // 1. Let expression-and-options be the result of splitting item on U+003F (?).
        const expressionAndOptions = item.split('?', 1);
        // 2. Let algorithm-expression be expression-and-options[0].
        const algorithmExpression = expressionAndOptions[0];
        // 3. Let base64-value be the empty string.
        let base64Value = '';
        // 4. Let algorithm-and-value be the result of splitting algorithm-expression on U+002D (-).
        const algorithmAndValue = [
            algorithmExpression.slice(0, 6),
            algorithmExpression.slice(7)
        ];
        // 5. Let algorithm be algorithm-and-value[0].
        const algorithm = algorithmAndValue[0];
        // 6. If algorithm is not a valid SRI hash algorithm token, then continue.
        if (!isValidSRIHashAlgorithm(algorithm)) {
            continue;
        }
        // 7. If algorithm-and-value[1] exists, set base64-value to
        // algorithm-and-value[1].
        if (algorithmAndValue[1]) {
            base64Value = algorithmAndValue[1];
        }
        // 8. Let metadata be the ordered map
        // «["alg" → algorithm, "val" → base64-value]».
        const metadata = {
            alg: algorithm,
            val: base64Value
        };
        // 9. Append metadata to result.
        result.push(metadata);
    }
    // 3. Return result.
    return result;
}
/**
 * Applies the specified hash algorithm to the given bytes
 *
 * @typedef {(algorithm: SRIHashAlgorithm, bytes: Uint8Array) => string} ApplyAlgorithmToBytes
 * @param {SRIHashAlgorithm} algorithm
 * @param {Uint8Array} bytes
 * @returns {string}
 */ const applyAlgorithmToBytes = (algorithm, bytes)=>{
    return crypto.hash(algorithm, bytes, 'base64');
};
/**
 * Compares two base64 strings, allowing for base64url
 * in the second string.
 *
 * @param {string} actualValue base64 encoded string
 * @param {string} expectedValue base64 or base64url encoded string
 * @returns {boolean}
 */ function caseSensitiveMatch(actualValue, expectedValue) {
    // Ignore padding characters from the end of the strings by
    // decreasing the length by 1 or 2 if the last characters are `=`.
    let actualValueLength = actualValue.length;
    if (actualValueLength !== 0 && actualValue[actualValueLength - 1] === '=') {
        actualValueLength -= 1;
    }
    if (actualValueLength !== 0 && actualValue[actualValueLength - 1] === '=') {
        actualValueLength -= 1;
    }
    let expectedValueLength = expectedValue.length;
    if (expectedValueLength !== 0 && expectedValue[expectedValueLength - 1] === '=') {
        expectedValueLength -= 1;
    }
    if (expectedValueLength !== 0 && expectedValue[expectedValueLength - 1] === '=') {
        expectedValueLength -= 1;
    }
    if (actualValueLength !== expectedValueLength) {
        return false;
    }
    for(let i = 0; i < actualValueLength; ++i){
        if (actualValue[i] === expectedValue[i] || actualValue[i] === '+' && expectedValue[i] === '-' || actualValue[i] === '/' && expectedValue[i] === '_') {
            continue;
        }
        return false;
    }
    return true;
}
module.exports = {
    applyAlgorithmToBytes,
    bytesMatch,
    caseSensitiveMatch,
    isValidSRIHashAlgorithm,
    getStrongestMetadata,
    parseMetadata
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// https://github.com/Ethan-Arrowood/undici-fetch
const { makeNetworkError, makeAppropriateNetworkError, filterResponse, makeResponse, fromInnerResponse, getResponseState } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/response.js [app-rsc] (ecmascript)");
const { HeadersList } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/headers.js [app-rsc] (ecmascript)");
const { Request, cloneRequest, getRequestDispatcher, getRequestState } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/request.js [app-rsc] (ecmascript)");
const zlib = __turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)");
const { makePolicyContainer, clonePolicyContainer, requestBadPort, TAOCheck, appendRequestOriginHeader, responseLocationURL, requestCurrentURL, setRequestReferrerPolicyOnRedirect, tryUpgradeRequestToAPotentiallyTrustworthyURL, createOpaqueTimingInfo, appendFetchMetadata, corsCheck, crossOriginResourcePolicyCheck, determineRequestsReferrer, coarsenedSharedCurrentTime, sameOrigin, isCancelled, isAborted, isErrorLike, fullyReadBody, readableStreamClose, isomorphicEncode, urlIsLocal, urlIsHttpHttpsScheme, urlHasHttpsScheme, clampAndCoarsenConnectionTimingInfo, simpleRangeHeaderValue, buildContentRange, createInflate, extractMimeType } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { safelyExtractBody, extractBody } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/body.js [app-rsc] (ecmascript)");
const { redirectStatusSet, nullBodyStatus, safeMethodsSet, requestBodyHeader, subresourceSet } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/constants.js [app-rsc] (ecmascript)");
const EE = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { Readable, pipeline, finished, isErrored, isReadable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { addAbortListener, bufferToLowerCasedHeaderName } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { dataURLProcessor, serializeAMimeType, minimizeSupportedMimeType } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { getGlobalDispatcher } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/global.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { STATUS_CODES } = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const { bytesMatch } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/subresource-integrity/subresource-integrity.js [app-rsc] (ecmascript)");
const { createDeferredPromise } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/promise.js [app-rsc] (ecmascript)");
const hasZstd = typeof zlib.createZstdDecompress === 'function';
const GET_OR_HEAD = [
    'GET',
    'HEAD'
];
const defaultUserAgent = typeof __UNDICI_IS_NODE__ !== 'undefined' || typeof esbuildDetection !== 'undefined' ? 'node' : 'undici';
/** @type {import('buffer').resolveObjectURL} */ let resolveObjectURL;
class Fetch extends EE {
    constructor(dispatcher){
        super();
        this.dispatcher = dispatcher;
        this.connection = null;
        this.dump = false;
        this.state = 'ongoing';
    }
    terminate(reason) {
        if (this.state !== 'ongoing') {
            return;
        }
        this.state = 'terminated';
        this.connection?.destroy(reason);
        this.emit('terminated', reason);
    }
    // https://fetch.spec.whatwg.org/#fetch-controller-abort
    abort(error) {
        if (this.state !== 'ongoing') {
            return;
        }
        // 1. Set controller’s state to "aborted".
        this.state = 'aborted';
        // 2. Let fallbackError be an "AbortError" DOMException.
        // 3. Set error to fallbackError if it is not given.
        if (!error) {
            error = new DOMException('The operation was aborted.', 'AbortError');
        }
        // 4. Let serializedError be StructuredSerialize(error).
        //    If that threw an exception, catch it, and let
        //    serializedError be StructuredSerialize(fallbackError).
        // 5. Set controller’s serialized abort reason to serializedError.
        this.serializedAbortReason = error;
        this.connection?.destroy(error);
        this.emit('terminated', error);
    }
}
function handleFetchDone(response) {
    finalizeAndReportTiming(response, 'fetch');
}
// https://fetch.spec.whatwg.org/#fetch-method
function fetch(input, init = undefined) {
    webidl.argumentLengthCheck(arguments, 1, 'globalThis.fetch');
    // 1. Let p be a new promise.
    let p = createDeferredPromise();
    // 2. Let requestObject be the result of invoking the initial value of
    // Request as constructor with input and init as arguments. If this throws
    // an exception, reject p with it and return p.
    let requestObject;
    try {
        requestObject = new Request(input, init);
    } catch (e) {
        p.reject(e);
        return p.promise;
    }
    // 3. Let request be requestObject’s request.
    const request = getRequestState(requestObject);
    // 4. If requestObject’s signal’s aborted flag is set, then:
    if (requestObject.signal.aborted) {
        // 1. Abort the fetch() call with p, request, null, and
        //    requestObject’s signal’s abort reason.
        abortFetch(p, request, null, requestObject.signal.reason);
        // 2. Return p.
        return p.promise;
    }
    // 5. Let globalObject be request’s client’s global object.
    const globalObject = request.client.globalObject;
    // 6. If globalObject is a ServiceWorkerGlobalScope object, then set
    // request’s service-workers mode to "none".
    if (globalObject?.constructor?.name === 'ServiceWorkerGlobalScope') {
        request.serviceWorkers = 'none';
    }
    // 7. Let responseObject be null.
    let responseObject = null;
    // 8. Let relevantRealm be this’s relevant Realm.
    // 9. Let locallyAborted be false.
    let locallyAborted = false;
    // 10. Let controller be null.
    let controller = null;
    // 11. Add the following abort steps to requestObject’s signal:
    addAbortListener(requestObject.signal, ()=>{
        // 1. Set locallyAborted to true.
        locallyAborted = true;
        // 2. Assert: controller is non-null.
        assert(controller != null);
        // 3. Abort controller with requestObject’s signal’s abort reason.
        controller.abort(requestObject.signal.reason);
        const realResponse = responseObject?.deref();
        // 4. Abort the fetch() call with p, request, responseObject,
        //    and requestObject’s signal’s abort reason.
        abortFetch(p, request, realResponse, requestObject.signal.reason);
    });
    // 12. Let handleFetchDone given response response be to finalize and
    // report timing with response, globalObject, and "fetch".
    // see function handleFetchDone
    // 13. Set controller to the result of calling fetch given request,
    // with processResponseEndOfBody set to handleFetchDone, and processResponse
    // given response being these substeps:
    const processResponse = (response)=>{
        // 1. If locallyAborted is true, terminate these substeps.
        if (locallyAborted) {
            return;
        }
        // 2. If response’s aborted flag is set, then:
        if (response.aborted) {
            // 1. Let deserializedError be the result of deserialize a serialized
            //    abort reason given controller’s serialized abort reason and
            //    relevantRealm.
            // 2. Abort the fetch() call with p, request, responseObject, and
            //    deserializedError.
            abortFetch(p, request, responseObject, controller.serializedAbortReason);
            return;
        }
        // 3. If response is a network error, then reject p with a TypeError
        // and terminate these substeps.
        if (response.type === 'error') {
            p.reject(new TypeError('fetch failed', {
                cause: response.error
            }));
            return;
        }
        // 4. Set responseObject to the result of creating a Response object,
        // given response, "immutable", and relevantRealm.
        responseObject = new WeakRef(fromInnerResponse(response, 'immutable'));
        // 5. Resolve p with responseObject.
        p.resolve(responseObject.deref());
        p = null;
    };
    controller = fetching({
        request,
        processResponseEndOfBody: handleFetchDone,
        processResponse,
        dispatcher: getRequestDispatcher(requestObject) // undici
    });
    // 14. Return p.
    return p.promise;
}
// https://fetch.spec.whatwg.org/#finalize-and-report-timing
function finalizeAndReportTiming(response, initiatorType = 'other') {
    // 1. If response is an aborted network error, then return.
    if (response.type === 'error' && response.aborted) {
        return;
    }
    // 2. If response’s URL list is null or empty, then return.
    if (!response.urlList?.length) {
        return;
    }
    // 3. Let originalURL be response’s URL list[0].
    const originalURL = response.urlList[0];
    // 4. Let timingInfo be response’s timing info.
    let timingInfo = response.timingInfo;
    // 5. Let cacheState be response’s cache state.
    let cacheState = response.cacheState;
    // 6. If originalURL’s scheme is not an HTTP(S) scheme, then return.
    if (!urlIsHttpHttpsScheme(originalURL)) {
        return;
    }
    // 7. If timingInfo is null, then return.
    if (timingInfo === null) {
        return;
    }
    // 8. If response’s timing allow passed flag is not set, then:
    if (!response.timingAllowPassed) {
        //  1. Set timingInfo to a the result of creating an opaque timing info for timingInfo.
        timingInfo = createOpaqueTimingInfo({
            startTime: timingInfo.startTime
        });
        //  2. Set cacheState to the empty string.
        cacheState = '';
    }
    // 9. Set timingInfo’s end time to the coarsened shared current time
    // given global’s relevant settings object’s cross-origin isolated
    // capability.
    // TODO: given global’s relevant settings object’s cross-origin isolated
    // capability?
    timingInfo.endTime = coarsenedSharedCurrentTime();
    // 10. Set response’s timing info to timingInfo.
    response.timingInfo = timingInfo;
    // 11. Mark resource timing for timingInfo, originalURL, initiatorType,
    // global, and cacheState.
    markResourceTiming(timingInfo, originalURL.href, initiatorType, globalThis, cacheState, '', response.status);
}
// https://w3c.github.io/resource-timing/#dfn-mark-resource-timing
const markResourceTiming = performance.markResourceTiming;
// https://fetch.spec.whatwg.org/#abort-fetch
function abortFetch(p, request, responseObject, error) {
    // 1. Reject promise with error.
    if (p) {
        // We might have already resolved the promise at this stage
        p.reject(error);
    }
    // 2. If request’s body is not null and is readable, then cancel request’s
    // body with error.
    if (request.body?.stream != null && isReadable(request.body.stream)) {
        request.body.stream.cancel(error).catch((err)=>{
            if (err.code === 'ERR_INVALID_STATE') {
                // Node bug?
                return;
            }
            throw err;
        });
    }
    // 3. If responseObject is null, then return.
    if (responseObject == null) {
        return;
    }
    // 4. Let response be responseObject’s response.
    const response = getResponseState(responseObject);
    // 5. If response’s body is not null and is readable, then error response’s
    // body with error.
    if (response.body?.stream != null && isReadable(response.body.stream)) {
        response.body.stream.cancel(error).catch((err)=>{
            if (err.code === 'ERR_INVALID_STATE') {
                // Node bug?
                return;
            }
            throw err;
        });
    }
}
// https://fetch.spec.whatwg.org/#fetching
function fetching({ request, processRequestBodyChunkLength, processRequestEndOfBody, processResponse, processResponseEndOfBody, processResponseConsumeBody, useParallelQueue = false, dispatcher = getGlobalDispatcher() // undici
 }) {
    // Ensure that the dispatcher is set accordingly
    assert(dispatcher);
    // 1. Let taskDestination be null.
    let taskDestination = null;
    // 2. Let crossOriginIsolatedCapability be false.
    let crossOriginIsolatedCapability = false;
    // 3. If request’s client is non-null, then:
    if (request.client != null) {
        // 1. Set taskDestination to request’s client’s global object.
        taskDestination = request.client.globalObject;
        // 2. Set crossOriginIsolatedCapability to request’s client’s cross-origin
        // isolated capability.
        crossOriginIsolatedCapability = request.client.crossOriginIsolatedCapability;
    }
    // 4. If useParallelQueue is true, then set taskDestination to the result of
    // starting a new parallel queue.
    // TODO
    // 5. Let timingInfo be a new fetch timing info whose start time and
    // post-redirect start time are the coarsened shared current time given
    // crossOriginIsolatedCapability.
    const currentTime = coarsenedSharedCurrentTime(crossOriginIsolatedCapability);
    const timingInfo = createOpaqueTimingInfo({
        startTime: currentTime
    });
    // 6. Let fetchParams be a new fetch params whose
    // request is request,
    // timing info is timingInfo,
    // process request body chunk length is processRequestBodyChunkLength,
    // process request end-of-body is processRequestEndOfBody,
    // process response is processResponse,
    // process response consume body is processResponseConsumeBody,
    // process response end-of-body is processResponseEndOfBody,
    // task destination is taskDestination,
    // and cross-origin isolated capability is crossOriginIsolatedCapability.
    const fetchParams = {
        controller: new Fetch(dispatcher),
        request,
        timingInfo,
        processRequestBodyChunkLength,
        processRequestEndOfBody,
        processResponse,
        processResponseConsumeBody,
        processResponseEndOfBody,
        taskDestination,
        crossOriginIsolatedCapability
    };
    // 7. If request’s body is a byte sequence, then set request’s body to
    //    request’s body as a body.
    // NOTE: Since fetching is only called from fetch, body should already be
    // extracted.
    assert(!request.body || request.body.stream);
    // 8. If request’s window is "client", then set request’s window to request’s
    // client, if request’s client’s global object is a Window object; otherwise
    // "no-window".
    if (request.window === 'client') {
        // TODO: What if request.client is null?
        request.window = request.client?.globalObject?.constructor?.name === 'Window' ? request.client : 'no-window';
    }
    // 9. If request’s origin is "client", then set request’s origin to request’s
    // client’s origin.
    if (request.origin === 'client') {
        request.origin = request.client.origin;
    }
    // 10. If all of the following conditions are true:
    // TODO
    // 11. If request’s policy container is "client", then:
    if (request.policyContainer === 'client') {
        // 1. If request’s client is non-null, then set request’s policy
        // container to a clone of request’s client’s policy container. [HTML]
        if (request.client != null) {
            request.policyContainer = clonePolicyContainer(request.client.policyContainer);
        } else {
            // 2. Otherwise, set request’s policy container to a new policy
            // container.
            request.policyContainer = makePolicyContainer();
        }
    }
    // 12. If request’s header list does not contain `Accept`, then:
    if (!request.headersList.contains('accept', true)) {
        // 1. Let value be `*/*`.
        const value = '*/*';
        // 2. A user agent should set value to the first matching statement, if
        // any, switching on request’s destination:
        // "document"
        // "frame"
        // "iframe"
        // `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`
        // "image"
        // `image/png,image/svg+xml,image/*;q=0.8,*/*;q=0.5`
        // "style"
        // `text/css,*/*;q=0.1`
        // TODO
        // 3. Append `Accept`/value to request’s header list.
        request.headersList.append('accept', value, true);
    }
    // 13. If request’s header list does not contain `Accept-Language`, then
    // user agents should append `Accept-Language`/an appropriate value to
    // request’s header list.
    if (!request.headersList.contains('accept-language', true)) {
        request.headersList.append('accept-language', '*', true);
    }
    // 14. If request’s priority is null, then use request’s initiator and
    // destination appropriately in setting request’s priority to a
    // user-agent-defined object.
    if (request.priority === null) {
    // TODO
    }
    // 15. If request is a subresource request, then:
    if (subresourceSet.has(request.destination)) {
    // TODO
    }
    // 16. Run main fetch given fetchParams.
    mainFetch(fetchParams, false);
    // 17. Return fetchParam's controller
    return fetchParams.controller;
}
// https://fetch.spec.whatwg.org/#concept-main-fetch
async function mainFetch(fetchParams, recursive) {
    try {
        // 1. Let request be fetchParams’s request.
        const request = fetchParams.request;
        // 2. Let response be null.
        let response = null;
        // 3. If request’s local-URLs-only flag is set and request’s current URL is
        // not local, then set response to a network error.
        if (request.localURLsOnly && !urlIsLocal(requestCurrentURL(request))) {
            response = makeNetworkError('local URLs only');
        }
        // 4. Run report Content Security Policy violations for request.
        // TODO
        // 5. Upgrade request to a potentially trustworthy URL, if appropriate.
        tryUpgradeRequestToAPotentiallyTrustworthyURL(request);
        // 6. If should request be blocked due to a bad port, should fetching request
        // be blocked as mixed content, or should request be blocked by Content
        // Security Policy returns blocked, then set response to a network error.
        if (requestBadPort(request) === 'blocked') {
            response = makeNetworkError('bad port');
        }
        // TODO: should fetching request be blocked as mixed content?
        // TODO: should request be blocked by Content Security Policy?
        // 7. If request’s referrer policy is the empty string, then set request’s
        // referrer policy to request’s policy container’s referrer policy.
        if (request.referrerPolicy === '') {
            request.referrerPolicy = request.policyContainer.referrerPolicy;
        }
        // 8. If request’s referrer is not "no-referrer", then set request’s
        // referrer to the result of invoking determine request’s referrer.
        if (request.referrer !== 'no-referrer') {
            request.referrer = determineRequestsReferrer(request);
        }
        // 9. Set request’s current URL’s scheme to "https" if all of the following
        // conditions are true:
        // - request’s current URL’s scheme is "http"
        // - request’s current URL’s host is a domain
        // - Matching request’s current URL’s host per Known HSTS Host Domain Name
        //   Matching results in either a superdomain match with an asserted
        //   includeSubDomains directive or a congruent match (with or without an
        //   asserted includeSubDomains directive). [HSTS]
        // TODO
        // 10. If recursive is false, then run the remaining steps in parallel.
        // TODO
        // 11. If response is null, then set response to the result of running
        // the steps corresponding to the first matching statement:
        if (response === null) {
            const currentURL = requestCurrentURL(request);
            if (// - request’s current URL’s origin is same origin with request’s origin,
            //   and request’s response tainting is "basic"
            sameOrigin(currentURL, request.url) && request.responseTainting === 'basic' || currentURL.protocol === 'data:' || request.mode === 'navigate' || request.mode === 'websocket') {
                // 1. Set request’s response tainting to "basic".
                request.responseTainting = 'basic';
                // 2. Return the result of running scheme fetch given fetchParams.
                response = await schemeFetch(fetchParams);
            // request’s mode is "same-origin"
            } else if (request.mode === 'same-origin') {
                // 1. Return a network error.
                response = makeNetworkError('request mode cannot be "same-origin"');
            // request’s mode is "no-cors"
            } else if (request.mode === 'no-cors') {
                // 1. If request’s redirect mode is not "follow", then return a network
                // error.
                if (request.redirect !== 'follow') {
                    response = makeNetworkError('redirect mode cannot be "follow" for "no-cors" request');
                } else {
                    // 2. Set request’s response tainting to "opaque".
                    request.responseTainting = 'opaque';
                    // 3. Return the result of running scheme fetch given fetchParams.
                    response = await schemeFetch(fetchParams);
                }
            // request’s current URL’s scheme is not an HTTP(S) scheme
            } else if (!urlIsHttpHttpsScheme(requestCurrentURL(request))) {
                // Return a network error.
                response = makeNetworkError('URL scheme must be a HTTP(S) scheme');
            // - request’s use-CORS-preflight flag is set
            // - request’s unsafe-request flag is set and either request’s method is
            //   not a CORS-safelisted method or CORS-unsafe request-header names with
            //   request’s header list is not empty
            //    1. Set request’s response tainting to "cors".
            //    2. Let corsWithPreflightResponse be the result of running HTTP fetch
            //    given fetchParams and true.
            //    3. If corsWithPreflightResponse is a network error, then clear cache
            //    entries using request.
            //    4. Return corsWithPreflightResponse.
            // TODO
            // Otherwise
            } else {
                //    1. Set request’s response tainting to "cors".
                request.responseTainting = 'cors';
                //    2. Return the result of running HTTP fetch given fetchParams.
                response = await httpFetch(fetchParams);
            }
        }
        // 12. If recursive is true, then return response.
        if (recursive) {
            return response;
        }
        // 13. If response is not a network error and response is not a filtered
        // response, then:
        if (response.status !== 0 && !response.internalResponse) {
            // If request’s response tainting is "cors", then:
            if (request.responseTainting === 'cors') {
            // 1. Let headerNames be the result of extracting header list values
            // given `Access-Control-Expose-Headers` and response’s header list.
            // TODO
            // 2. If request’s credentials mode is not "include" and headerNames
            // contains `*`, then set response’s CORS-exposed header-name list to
            // all unique header names in response’s header list.
            // TODO
            // 3. Otherwise, if headerNames is not null or failure, then set
            // response’s CORS-exposed header-name list to headerNames.
            // TODO
            }
            // Set response to the following filtered response with response as its
            // internal response, depending on request’s response tainting:
            if (request.responseTainting === 'basic') {
                response = filterResponse(response, 'basic');
            } else if (request.responseTainting === 'cors') {
                response = filterResponse(response, 'cors');
            } else if (request.responseTainting === 'opaque') {
                response = filterResponse(response, 'opaque');
            } else {
                assert(false);
            }
        }
        // 14. Let internalResponse be response, if response is a network error,
        // and response’s internal response otherwise.
        let internalResponse = response.status === 0 ? response : response.internalResponse;
        // 15. If internalResponse’s URL list is empty, then set it to a clone of
        // request’s URL list.
        if (internalResponse.urlList.length === 0) {
            internalResponse.urlList.push(...request.urlList);
        }
        // 16. If request’s timing allow failed flag is unset, then set
        // internalResponse’s timing allow passed flag.
        if (!request.timingAllowFailed) {
            response.timingAllowPassed = true;
        }
        // 17. If response is not a network error and any of the following returns
        // blocked
        // - should internalResponse to request be blocked as mixed content
        // - should internalResponse to request be blocked by Content Security Policy
        // - should internalResponse to request be blocked due to its MIME type
        // - should internalResponse to request be blocked due to nosniff
        // TODO
        // 18. If response’s type is "opaque", internalResponse’s status is 206,
        // internalResponse’s range-requested flag is set, and request’s header
        // list does not contain `Range`, then set response and internalResponse
        // to a network error.
        if (response.type === 'opaque' && internalResponse.status === 206 && internalResponse.rangeRequested && !request.headers.contains('range', true)) {
            response = internalResponse = makeNetworkError();
        }
        // 19. If response is not a network error and either request’s method is
        // `HEAD` or `CONNECT`, or internalResponse’s status is a null body status,
        // set internalResponse’s body to null and disregard any enqueuing toward
        // it (if any).
        if (response.status !== 0 && (request.method === 'HEAD' || request.method === 'CONNECT' || nullBodyStatus.includes(internalResponse.status))) {
            internalResponse.body = null;
            fetchParams.controller.dump = true;
        }
        // 20. If request’s integrity metadata is not the empty string, then:
        if (request.integrity) {
            // 1. Let processBodyError be this step: run fetch finale given fetchParams
            // and a network error.
            const processBodyError = (reason)=>fetchFinale(fetchParams, makeNetworkError(reason));
            // 2. If request’s response tainting is "opaque", or response’s body is null,
            // then run processBodyError and abort these steps.
            if (request.responseTainting === 'opaque' || response.body == null) {
                processBodyError(response.error);
                return;
            }
            // 3. Let processBody given bytes be these steps:
            const processBody = (bytes)=>{
                // 1. If bytes do not match request’s integrity metadata,
                // then run processBodyError and abort these steps. [SRI]
                if (!bytesMatch(bytes, request.integrity)) {
                    processBodyError('integrity mismatch');
                    return;
                }
                // 2. Set response’s body to bytes as a body.
                response.body = safelyExtractBody(bytes)[0];
                // 3. Run fetch finale given fetchParams and response.
                fetchFinale(fetchParams, response);
            };
            // 4. Fully read response’s body given processBody and processBodyError.
            fullyReadBody(response.body, processBody, processBodyError);
        } else {
            // 21. Otherwise, run fetch finale given fetchParams and response.
            fetchFinale(fetchParams, response);
        }
    } catch (err) {
        fetchParams.controller.terminate(err);
    }
}
// https://fetch.spec.whatwg.org/#concept-scheme-fetch
// given a fetch params fetchParams
function schemeFetch(fetchParams) {
    // Note: since the connection is destroyed on redirect, which sets fetchParams to a
    // cancelled state, we do not want this condition to trigger *unless* there have been
    // no redirects. See https://github.com/nodejs/undici/issues/1776
    // 1. If fetchParams is canceled, then return the appropriate network error for fetchParams.
    if (isCancelled(fetchParams) && fetchParams.request.redirectCount === 0) {
        return Promise.resolve(makeAppropriateNetworkError(fetchParams));
    }
    // 2. Let request be fetchParams’s request.
    const { request } = fetchParams;
    const { protocol: scheme } = requestCurrentURL(request);
    // 3. Switch on request’s current URL’s scheme and run the associated steps:
    switch(scheme){
        case 'about:':
            {
                // If request’s current URL’s path is the string "blank", then return a new response
                // whose status message is `OK`, header list is « (`Content-Type`, `text/html;charset=utf-8`) »,
                // and body is the empty byte sequence as a body.
                // Otherwise, return a network error.
                return Promise.resolve(makeNetworkError('about scheme is not supported'));
            }
        case 'blob:':
            {
                if (!resolveObjectURL) {
                    resolveObjectURL = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)").resolveObjectURL;
                }
                // 1. Let blobURLEntry be request’s current URL’s blob URL entry.
                const blobURLEntry = requestCurrentURL(request);
                // https://github.com/web-platform-tests/wpt/blob/7b0ebaccc62b566a1965396e5be7bb2bc06f841f/FileAPI/url/resources/fetch-tests.js#L52-L56
                // Buffer.resolveObjectURL does not ignore URL queries.
                if (blobURLEntry.search.length !== 0) {
                    return Promise.resolve(makeNetworkError('NetworkError when attempting to fetch resource.'));
                }
                const blob = resolveObjectURL(blobURLEntry.toString());
                // 2. If request’s method is not `GET`, blobURLEntry is null, or blobURLEntry’s
                //    object is not a Blob object, then return a network error.
                if (request.method !== 'GET' || !webidl.is.Blob(blob)) {
                    return Promise.resolve(makeNetworkError('invalid method'));
                }
                // 3. Let blob be blobURLEntry’s object.
                // Note: done above
                // 4. Let response be a new response.
                const response = makeResponse();
                // 5. Let fullLength be blob’s size.
                const fullLength = blob.size;
                // 6. Let serializedFullLength be fullLength, serialized and isomorphic encoded.
                const serializedFullLength = isomorphicEncode(`${fullLength}`);
                // 7. Let type be blob’s type.
                const type = blob.type;
                // 8. If request’s header list does not contain `Range`:
                // 9. Otherwise:
                if (!request.headersList.contains('range', true)) {
                    // 1. Let bodyWithType be the result of safely extracting blob.
                    // Note: in the FileAPI a blob "object" is a Blob *or* a MediaSource.
                    // In node, this can only ever be a Blob. Therefore we can safely
                    // use extractBody directly.
                    const bodyWithType = extractBody(blob);
                    // 2. Set response’s status message to `OK`.
                    response.statusText = 'OK';
                    // 3. Set response’s body to bodyWithType’s body.
                    response.body = bodyWithType[0];
                    // 4. Set response’s header list to « (`Content-Length`, serializedFullLength), (`Content-Type`, type) ».
                    response.headersList.set('content-length', serializedFullLength, true);
                    response.headersList.set('content-type', type, true);
                } else {
                    // 1. Set response’s range-requested flag.
                    response.rangeRequested = true;
                    // 2. Let rangeHeader be the result of getting `Range` from request’s header list.
                    const rangeHeader = request.headersList.get('range', true);
                    // 3. Let rangeValue be the result of parsing a single range header value given rangeHeader and true.
                    const rangeValue = simpleRangeHeaderValue(rangeHeader, true);
                    // 4. If rangeValue is failure, then return a network error.
                    if (rangeValue === 'failure') {
                        return Promise.resolve(makeNetworkError('failed to fetch the data URL'));
                    }
                    // 5. Let (rangeStart, rangeEnd) be rangeValue.
                    let { rangeStartValue: rangeStart, rangeEndValue: rangeEnd } = rangeValue;
                    // 6. If rangeStart is null:
                    // 7. Otherwise:
                    if (rangeStart === null) {
                        // 1. Set rangeStart to fullLength − rangeEnd.
                        rangeStart = fullLength - rangeEnd;
                        // 2. Set rangeEnd to rangeStart + rangeEnd − 1.
                        rangeEnd = rangeStart + rangeEnd - 1;
                    } else {
                        // 1. If rangeStart is greater than or equal to fullLength, then return a network error.
                        if (rangeStart >= fullLength) {
                            return Promise.resolve(makeNetworkError('Range start is greater than the blob\'s size.'));
                        }
                        // 2. If rangeEnd is null or rangeEnd is greater than or equal to fullLength, then set
                        //    rangeEnd to fullLength − 1.
                        if (rangeEnd === null || rangeEnd >= fullLength) {
                            rangeEnd = fullLength - 1;
                        }
                    }
                    // 8. Let slicedBlob be the result of invoking slice blob given blob, rangeStart,
                    //    rangeEnd + 1, and type.
                    const slicedBlob = blob.slice(rangeStart, rangeEnd, type);
                    // 9. Let slicedBodyWithType be the result of safely extracting slicedBlob.
                    // Note: same reason as mentioned above as to why we use extractBody
                    const slicedBodyWithType = extractBody(slicedBlob);
                    // 10. Set response’s body to slicedBodyWithType’s body.
                    response.body = slicedBodyWithType[0];
                    // 11. Let serializedSlicedLength be slicedBlob’s size, serialized and isomorphic encoded.
                    const serializedSlicedLength = isomorphicEncode(`${slicedBlob.size}`);
                    // 12. Let contentRange be the result of invoking build a content range given rangeStart,
                    //     rangeEnd, and fullLength.
                    const contentRange = buildContentRange(rangeStart, rangeEnd, fullLength);
                    // 13. Set response’s status to 206.
                    response.status = 206;
                    // 14. Set response’s status message to `Partial Content`.
                    response.statusText = 'Partial Content';
                    // 15. Set response’s header list to « (`Content-Length`, serializedSlicedLength),
                    //     (`Content-Type`, type), (`Content-Range`, contentRange) ».
                    response.headersList.set('content-length', serializedSlicedLength, true);
                    response.headersList.set('content-type', type, true);
                    response.headersList.set('content-range', contentRange, true);
                }
                // 10. Return response.
                return Promise.resolve(response);
            }
        case 'data:':
            {
                // 1. Let dataURLStruct be the result of running the
                //    data: URL processor on request’s current URL.
                const currentURL = requestCurrentURL(request);
                const dataURLStruct = dataURLProcessor(currentURL);
                // 2. If dataURLStruct is failure, then return a
                //    network error.
                if (dataURLStruct === 'failure') {
                    return Promise.resolve(makeNetworkError('failed to fetch the data URL'));
                }
                // 3. Let mimeType be dataURLStruct’s MIME type, serialized.
                const mimeType = serializeAMimeType(dataURLStruct.mimeType);
                // 4. Return a response whose status message is `OK`,
                //    header list is « (`Content-Type`, mimeType) »,
                //    and body is dataURLStruct’s body as a body.
                return Promise.resolve(makeResponse({
                    statusText: 'OK',
                    headersList: [
                        [
                            'content-type',
                            {
                                name: 'Content-Type',
                                value: mimeType
                            }
                        ]
                    ],
                    body: safelyExtractBody(dataURLStruct.body)[0]
                }));
            }
        case 'file:':
            {
                // For now, unfortunate as it is, file URLs are left as an exercise for the reader.
                // When in doubt, return a network error.
                return Promise.resolve(makeNetworkError('not implemented... yet...'));
            }
        case 'http:':
        case 'https:':
            {
                // Return the result of running HTTP fetch given fetchParams.
                return httpFetch(fetchParams).catch((err)=>makeNetworkError(err));
            }
        default:
            {
                return Promise.resolve(makeNetworkError('unknown scheme'));
            }
    }
}
// https://fetch.spec.whatwg.org/#finalize-response
function finalizeResponse(fetchParams, response) {
    // 1. Set fetchParams’s request’s done flag.
    fetchParams.request.done = true;
    // 2, If fetchParams’s process response done is not null, then queue a fetch
    // task to run fetchParams’s process response done given response, with
    // fetchParams’s task destination.
    if (fetchParams.processResponseDone != null) {
        queueMicrotask(()=>fetchParams.processResponseDone(response));
    }
}
// https://fetch.spec.whatwg.org/#fetch-finale
function fetchFinale(fetchParams, response) {
    // 1. Let timingInfo be fetchParams’s timing info.
    let timingInfo = fetchParams.timingInfo;
    // 2. If response is not a network error and fetchParams’s request’s client is a secure context,
    //    then set timingInfo’s server-timing headers to the result of getting, decoding, and splitting
    //    `Server-Timing` from response’s internal response’s header list.
    // TODO
    // 3. Let processResponseEndOfBody be the following steps:
    const processResponseEndOfBody = ()=>{
        // 1. Let unsafeEndTime be the unsafe shared current time.
        const unsafeEndTime = Date.now() // ?
        ;
        // 2. If fetchParams’s request’s destination is "document", then set fetchParams’s controller’s
        //    full timing info to fetchParams’s timing info.
        if (fetchParams.request.destination === 'document') {
            fetchParams.controller.fullTimingInfo = timingInfo;
        }
        // 3. Set fetchParams’s controller’s report timing steps to the following steps given a global object global:
        fetchParams.controller.reportTimingSteps = ()=>{
            // 1. If fetchParams’s request’s URL’s scheme is not an HTTP(S) scheme, then return.
            if (!urlIsHttpHttpsScheme(fetchParams.request.url)) {
                return;
            }
            // 2. Set timingInfo’s end time to the relative high resolution time given unsafeEndTime and global.
            timingInfo.endTime = unsafeEndTime;
            // 3. Let cacheState be response’s cache state.
            let cacheState = response.cacheState;
            // 4. Let bodyInfo be response’s body info.
            const bodyInfo = response.bodyInfo;
            // 5. If response’s timing allow passed flag is not set, then set timingInfo to the result of creating an
            //    opaque timing info for timingInfo and set cacheState to the empty string.
            if (!response.timingAllowPassed) {
                timingInfo = createOpaqueTimingInfo(timingInfo);
                cacheState = '';
            }
            // 6. Let responseStatus be 0.
            let responseStatus = 0;
            // 7. If fetchParams’s request’s mode is not "navigate" or response’s has-cross-origin-redirects is false:
            if (fetchParams.request.mode !== 'navigator' || !response.hasCrossOriginRedirects) {
                // 1. Set responseStatus to response’s status.
                responseStatus = response.status;
                // 2. Let mimeType be the result of extracting a MIME type from response’s header list.
                const mimeType = extractMimeType(response.headersList);
                // 3. If mimeType is not failure, then set bodyInfo’s content type to the result of minimizing a supported MIME type given mimeType.
                if (mimeType !== 'failure') {
                    bodyInfo.contentType = minimizeSupportedMimeType(mimeType);
                }
            }
            // 8. If fetchParams’s request’s initiator type is non-null, then mark resource timing given timingInfo,
            //    fetchParams’s request’s URL, fetchParams’s request’s initiator type, global, cacheState, bodyInfo,
            //    and responseStatus.
            if (fetchParams.request.initiatorType != null) {
                markResourceTiming(timingInfo, fetchParams.request.url.href, fetchParams.request.initiatorType, globalThis, cacheState, bodyInfo, responseStatus);
            }
        };
        // 4. Let processResponseEndOfBodyTask be the following steps:
        const processResponseEndOfBodyTask = ()=>{
            // 1. Set fetchParams’s request’s done flag.
            fetchParams.request.done = true;
            // 2. If fetchParams’s process response end-of-body is non-null, then run fetchParams’s process
            //    response end-of-body given response.
            if (fetchParams.processResponseEndOfBody != null) {
                queueMicrotask(()=>fetchParams.processResponseEndOfBody(response));
            }
            // 3. If fetchParams’s request’s initiator type is non-null and fetchParams’s request’s client’s
            //    global object is fetchParams’s task destination, then run fetchParams’s controller’s report
            //    timing steps given fetchParams’s request’s client’s global object.
            if (fetchParams.request.initiatorType != null) {
                fetchParams.controller.reportTimingSteps();
            }
        };
        // 5. Queue a fetch task to run processResponseEndOfBodyTask with fetchParams’s task destination
        queueMicrotask(()=>processResponseEndOfBodyTask());
    };
    // 4. If fetchParams’s process response is non-null, then queue a fetch task to run fetchParams’s
    //    process response given response, with fetchParams’s task destination.
    if (fetchParams.processResponse != null) {
        queueMicrotask(()=>{
            fetchParams.processResponse(response);
            fetchParams.processResponse = null;
        });
    }
    // 5. Let internalResponse be response, if response is a network error; otherwise response’s internal response.
    const internalResponse = response.type === 'error' ? response : response.internalResponse ?? response;
    // 6. If internalResponse’s body is null, then run processResponseEndOfBody.
    // 7. Otherwise:
    if (internalResponse.body == null) {
        processResponseEndOfBody();
    } else {
        // mcollina: all the following steps of the specs are skipped.
        // The internal transform stream is not needed.
        // See https://github.com/nodejs/undici/pull/3093#issuecomment-2050198541
        // 1. Let transformStream be a new TransformStream.
        // 2. Let identityTransformAlgorithm be an algorithm which, given chunk, enqueues chunk in transformStream.
        // 3. Set up transformStream with transformAlgorithm set to identityTransformAlgorithm and flushAlgorithm
        //    set to processResponseEndOfBody.
        // 4. Set internalResponse’s body’s stream to the result of internalResponse’s body’s stream piped through transformStream.
        finished(internalResponse.body.stream, ()=>{
            processResponseEndOfBody();
        });
    }
}
// https://fetch.spec.whatwg.org/#http-fetch
async function httpFetch(fetchParams) {
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let response be null.
    let response = null;
    // 3. Let actualResponse be null.
    let actualResponse = null;
    // 4. Let timingInfo be fetchParams’s timing info.
    const timingInfo = fetchParams.timingInfo;
    // 5. If request’s service-workers mode is "all", then:
    if (request.serviceWorkers === 'all') {
    // TODO
    }
    // 6. If response is null, then:
    if (response === null) {
        // 1. If makeCORSPreflight is true and one of these conditions is true:
        // TODO
        // 2. If request’s redirect mode is "follow", then set request’s
        // service-workers mode to "none".
        if (request.redirect === 'follow') {
            request.serviceWorkers = 'none';
        }
        // 3. Set response and actualResponse to the result of running
        // HTTP-network-or-cache fetch given fetchParams.
        actualResponse = response = await httpNetworkOrCacheFetch(fetchParams);
        // 4. If request’s response tainting is "cors" and a CORS check
        // for request and response returns failure, then return a network error.
        if (request.responseTainting === 'cors' && corsCheck(request, response) === 'failure') {
            return makeNetworkError('cors failure');
        }
        // 5. If the TAO check for request and response returns failure, then set
        // request’s timing allow failed flag.
        if (TAOCheck(request, response) === 'failure') {
            request.timingAllowFailed = true;
        }
    }
    // 7. If either request’s response tainting or response’s type
    // is "opaque", and the cross-origin resource policy check with
    // request’s origin, request’s client, request’s destination,
    // and actualResponse returns blocked, then return a network error.
    if ((request.responseTainting === 'opaque' || response.type === 'opaque') && crossOriginResourcePolicyCheck(request.origin, request.client, request.destination, actualResponse) === 'blocked') {
        return makeNetworkError('blocked');
    }
    // 8. If actualResponse’s status is a redirect status, then:
    if (redirectStatusSet.has(actualResponse.status)) {
        // 1. If actualResponse’s status is not 303, request’s body is not null,
        // and the connection uses HTTP/2, then user agents may, and are even
        // encouraged to, transmit an RST_STREAM frame.
        // See, https://github.com/whatwg/fetch/issues/1288
        if (request.redirect !== 'manual') {
            fetchParams.controller.connection.destroy(undefined, false);
        }
        // 2. Switch on request’s redirect mode:
        if (request.redirect === 'error') {
            // Set response to a network error.
            response = makeNetworkError('unexpected redirect');
        } else if (request.redirect === 'manual') {
            // Set response to an opaque-redirect filtered response whose internal
            // response is actualResponse.
            // NOTE(spec): On the web this would return an `opaqueredirect` response,
            // but that doesn't make sense server side.
            // See https://github.com/nodejs/undici/issues/1193.
            response = actualResponse;
        } else if (request.redirect === 'follow') {
            // Set response to the result of running HTTP-redirect fetch given
            // fetchParams and response.
            response = await httpRedirectFetch(fetchParams, response);
        } else {
            assert(false);
        }
    }
    // 9. Set response’s timing info to timingInfo.
    response.timingInfo = timingInfo;
    // 10. Return response.
    return response;
}
// https://fetch.spec.whatwg.org/#http-redirect-fetch
function httpRedirectFetch(fetchParams, response) {
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let actualResponse be response, if response is not a filtered response,
    // and response’s internal response otherwise.
    const actualResponse = response.internalResponse ? response.internalResponse : response;
    // 3. Let locationURL be actualResponse’s location URL given request’s current
    // URL’s fragment.
    let locationURL;
    try {
        locationURL = responseLocationURL(actualResponse, requestCurrentURL(request).hash);
        // 4. If locationURL is null, then return response.
        if (locationURL == null) {
            return response;
        }
    } catch (err) {
        // 5. If locationURL is failure, then return a network error.
        return Promise.resolve(makeNetworkError(err));
    }
    // 6. If locationURL’s scheme is not an HTTP(S) scheme, then return a network
    // error.
    if (!urlIsHttpHttpsScheme(locationURL)) {
        return Promise.resolve(makeNetworkError('URL scheme must be a HTTP(S) scheme'));
    }
    // 7. If request’s redirect count is 20, then return a network error.
    if (request.redirectCount === 20) {
        return Promise.resolve(makeNetworkError('redirect count exceeded'));
    }
    // 8. Increase request’s redirect count by 1.
    request.redirectCount += 1;
    // 9. If request’s mode is "cors", locationURL includes credentials, and
    // request’s origin is not same origin with locationURL’s origin, then return
    //  a network error.
    if (request.mode === 'cors' && (locationURL.username || locationURL.password) && !sameOrigin(request, locationURL)) {
        return Promise.resolve(makeNetworkError('cross origin not allowed for request mode "cors"'));
    }
    // 10. If request’s response tainting is "cors" and locationURL includes
    // credentials, then return a network error.
    if (request.responseTainting === 'cors' && (locationURL.username || locationURL.password)) {
        return Promise.resolve(makeNetworkError('URL cannot contain credentials for request mode "cors"'));
    }
    // 11. If actualResponse’s status is not 303, request’s body is non-null,
    // and request’s body’s source is null, then return a network error.
    if (actualResponse.status !== 303 && request.body != null && request.body.source == null) {
        return Promise.resolve(makeNetworkError());
    }
    // 12. If one of the following is true
    // - actualResponse’s status is 301 or 302 and request’s method is `POST`
    // - actualResponse’s status is 303 and request’s method is not `GET` or `HEAD`
    if ([
        301,
        302
    ].includes(actualResponse.status) && request.method === 'POST' || actualResponse.status === 303 && !GET_OR_HEAD.includes(request.method)) {
        // then:
        // 1. Set request’s method to `GET` and request’s body to null.
        request.method = 'GET';
        request.body = null;
        // 2. For each headerName of request-body-header name, delete headerName from
        // request’s header list.
        for (const headerName of requestBodyHeader){
            request.headersList.delete(headerName);
        }
    }
    // 13. If request’s current URL’s origin is not same origin with locationURL’s
    //     origin, then for each headerName of CORS non-wildcard request-header name,
    //     delete headerName from request’s header list.
    if (!sameOrigin(requestCurrentURL(request), locationURL)) {
        // https://fetch.spec.whatwg.org/#cors-non-wildcard-request-header-name
        request.headersList.delete('authorization', true);
        // https://fetch.spec.whatwg.org/#authentication-entries
        request.headersList.delete('proxy-authorization', true);
        // "Cookie" and "Host" are forbidden request-headers, which undici doesn't implement.
        request.headersList.delete('cookie', true);
        request.headersList.delete('host', true);
    }
    // 14. If request’s body is non-null, then set request’s body to the first return
    // value of safely extracting request’s body’s source.
    if (request.body != null) {
        assert(request.body.source != null);
        request.body = safelyExtractBody(request.body.source)[0];
    }
    // 15. Let timingInfo be fetchParams’s timing info.
    const timingInfo = fetchParams.timingInfo;
    // 16. Set timingInfo’s redirect end time and post-redirect start time to the
    // coarsened shared current time given fetchParams’s cross-origin isolated
    // capability.
    timingInfo.redirectEndTime = timingInfo.postRedirectStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
    // 17. If timingInfo’s redirect start time is 0, then set timingInfo’s
    //  redirect start time to timingInfo’s start time.
    if (timingInfo.redirectStartTime === 0) {
        timingInfo.redirectStartTime = timingInfo.startTime;
    }
    // 18. Append locationURL to request’s URL list.
    request.urlList.push(locationURL);
    // 19. Invoke set request’s referrer policy on redirect on request and
    // actualResponse.
    setRequestReferrerPolicyOnRedirect(request, actualResponse);
    // 20. Return the result of running main fetch given fetchParams and true.
    return mainFetch(fetchParams, true);
}
// https://fetch.spec.whatwg.org/#http-network-or-cache-fetch
async function httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch = false, isNewConnectionFetch = false) {
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let httpFetchParams be null.
    let httpFetchParams = null;
    // 3. Let httpRequest be null.
    let httpRequest = null;
    // 4. Let response be null.
    let response = null;
    // 5. Let storedResponse be null.
    // TODO: cache
    // 6. Let httpCache be null.
    const httpCache = null;
    // 7. Let the revalidatingFlag be unset.
    const revalidatingFlag = false;
    // 8. Run these steps, but abort when the ongoing fetch is terminated:
    //    1. If request’s window is "no-window" and request’s redirect mode is
    //    "error", then set httpFetchParams to fetchParams and httpRequest to
    //    request.
    if (request.window === 'no-window' && request.redirect === 'error') {
        httpFetchParams = fetchParams;
        httpRequest = request;
    } else {
        // Otherwise:
        // 1. Set httpRequest to a clone of request.
        httpRequest = cloneRequest(request);
        // 2. Set httpFetchParams to a copy of fetchParams.
        httpFetchParams = {
            ...fetchParams
        };
        // 3. Set httpFetchParams’s request to httpRequest.
        httpFetchParams.request = httpRequest;
    }
    //    3. Let includeCredentials be true if one of
    const includeCredentials = request.credentials === 'include' || request.credentials === 'same-origin' && request.responseTainting === 'basic';
    //    4. Let contentLength be httpRequest’s body’s length, if httpRequest’s
    //    body is non-null; otherwise null.
    const contentLength = httpRequest.body ? httpRequest.body.length : null;
    //    5. Let contentLengthHeaderValue be null.
    let contentLengthHeaderValue = null;
    //    6. If httpRequest’s body is null and httpRequest’s method is `POST` or
    //    `PUT`, then set contentLengthHeaderValue to `0`.
    if (httpRequest.body == null && [
        'POST',
        'PUT'
    ].includes(httpRequest.method)) {
        contentLengthHeaderValue = '0';
    }
    //    7. If contentLength is non-null, then set contentLengthHeaderValue to
    //    contentLength, serialized and isomorphic encoded.
    if (contentLength != null) {
        contentLengthHeaderValue = isomorphicEncode(`${contentLength}`);
    }
    //    8. If contentLengthHeaderValue is non-null, then append
    //    `Content-Length`/contentLengthHeaderValue to httpRequest’s header
    //    list.
    if (contentLengthHeaderValue != null) {
        httpRequest.headersList.append('content-length', contentLengthHeaderValue, true);
    }
    //    9. If contentLengthHeaderValue is non-null, then append (`Content-Length`,
    //    contentLengthHeaderValue) to httpRequest’s header list.
    //    10. If contentLength is non-null and httpRequest’s keepalive is true,
    //    then:
    if (contentLength != null && httpRequest.keepalive) {
    // NOTE: keepalive is a noop outside of browser context.
    }
    //    11. If httpRequest’s referrer is a URL, then append
    //    `Referer`/httpRequest’s referrer, serialized and isomorphic encoded,
    //     to httpRequest’s header list.
    if (webidl.is.URL(httpRequest.referrer)) {
        httpRequest.headersList.append('referer', isomorphicEncode(httpRequest.referrer.href), true);
    }
    //    12. Append a request `Origin` header for httpRequest.
    appendRequestOriginHeader(httpRequest);
    //    13. Append the Fetch metadata headers for httpRequest. [FETCH-METADATA]
    appendFetchMetadata(httpRequest);
    //    14. If httpRequest’s header list does not contain `User-Agent`, then
    //    user agents should append `User-Agent`/default `User-Agent` value to
    //    httpRequest’s header list.
    if (!httpRequest.headersList.contains('user-agent', true)) {
        httpRequest.headersList.append('user-agent', defaultUserAgent, true);
    }
    //    15. If httpRequest’s cache mode is "default" and httpRequest’s header
    //    list contains `If-Modified-Since`, `If-None-Match`,
    //    `If-Unmodified-Since`, `If-Match`, or `If-Range`, then set
    //    httpRequest’s cache mode to "no-store".
    if (httpRequest.cache === 'default' && (httpRequest.headersList.contains('if-modified-since', true) || httpRequest.headersList.contains('if-none-match', true) || httpRequest.headersList.contains('if-unmodified-since', true) || httpRequest.headersList.contains('if-match', true) || httpRequest.headersList.contains('if-range', true))) {
        httpRequest.cache = 'no-store';
    }
    //    16. If httpRequest’s cache mode is "no-cache", httpRequest’s prevent
    //    no-cache cache-control header modification flag is unset, and
    //    httpRequest’s header list does not contain `Cache-Control`, then append
    //    `Cache-Control`/`max-age=0` to httpRequest’s header list.
    if (httpRequest.cache === 'no-cache' && !httpRequest.preventNoCacheCacheControlHeaderModification && !httpRequest.headersList.contains('cache-control', true)) {
        httpRequest.headersList.append('cache-control', 'max-age=0', true);
    }
    //    17. If httpRequest’s cache mode is "no-store" or "reload", then:
    if (httpRequest.cache === 'no-store' || httpRequest.cache === 'reload') {
        // 1. If httpRequest’s header list does not contain `Pragma`, then append
        // `Pragma`/`no-cache` to httpRequest’s header list.
        if (!httpRequest.headersList.contains('pragma', true)) {
            httpRequest.headersList.append('pragma', 'no-cache', true);
        }
        // 2. If httpRequest’s header list does not contain `Cache-Control`,
        // then append `Cache-Control`/`no-cache` to httpRequest’s header list.
        if (!httpRequest.headersList.contains('cache-control', true)) {
            httpRequest.headersList.append('cache-control', 'no-cache', true);
        }
    }
    //    18. If httpRequest’s header list contains `Range`, then append
    //    `Accept-Encoding`/`identity` to httpRequest’s header list.
    if (httpRequest.headersList.contains('range', true)) {
        httpRequest.headersList.append('accept-encoding', 'identity', true);
    }
    //    19. Modify httpRequest’s header list per HTTP. Do not append a given
    //    header if httpRequest’s header list contains that header’s name.
    //    TODO: https://github.com/whatwg/fetch/issues/1285#issuecomment-896560129
    if (!httpRequest.headersList.contains('accept-encoding', true)) {
        if (urlHasHttpsScheme(requestCurrentURL(httpRequest))) {
            httpRequest.headersList.append('accept-encoding', 'br, gzip, deflate', true);
        } else {
            httpRequest.headersList.append('accept-encoding', 'gzip, deflate', true);
        }
    }
    httpRequest.headersList.delete('host', true);
    //    20. If includeCredentials is true, then:
    if (includeCredentials) {
    // 1. If the user agent is not configured to block cookies for httpRequest
    // (see section 7 of [COOKIES]), then:
    // TODO: credentials
    // 2. If httpRequest’s header list does not contain `Authorization`, then:
    // TODO: credentials
    }
    //    21. If there’s a proxy-authentication entry, use it as appropriate.
    //    TODO: proxy-authentication
    //    22. Set httpCache to the result of determining the HTTP cache
    //    partition, given httpRequest.
    //    TODO: cache
    //    23. If httpCache is null, then set httpRequest’s cache mode to
    //    "no-store".
    if (httpCache == null) {
        httpRequest.cache = 'no-store';
    }
    //    24. If httpRequest’s cache mode is neither "no-store" nor "reload",
    //    then:
    if (httpRequest.cache !== 'no-store' && httpRequest.cache !== 'reload') {
    // TODO: cache
    }
    // 9. If aborted, then return the appropriate network error for fetchParams.
    // TODO
    // 10. If response is null, then:
    if (response == null) {
        // 1. If httpRequest’s cache mode is "only-if-cached", then return a
        // network error.
        if (httpRequest.cache === 'only-if-cached') {
            return makeNetworkError('only if cached');
        }
        // 2. Let forwardResponse be the result of running HTTP-network fetch
        // given httpFetchParams, includeCredentials, and isNewConnectionFetch.
        const forwardResponse = await httpNetworkFetch(httpFetchParams, includeCredentials, isNewConnectionFetch);
        // 3. If httpRequest’s method is unsafe and forwardResponse’s status is
        // in the range 200 to 399, inclusive, invalidate appropriate stored
        // responses in httpCache, as per the "Invalidation" chapter of HTTP
        // Caching, and set storedResponse to null. [HTTP-CACHING]
        if (!safeMethodsSet.has(httpRequest.method) && forwardResponse.status >= 200 && forwardResponse.status <= 399) {
        // TODO: cache
        }
        // 4. If the revalidatingFlag is set and forwardResponse’s status is 304,
        // then:
        if (revalidatingFlag && forwardResponse.status === 304) {
        // TODO: cache
        }
        // 5. If response is null, then:
        if (response == null) {
            // 1. Set response to forwardResponse.
            response = forwardResponse;
        // 2. Store httpRequest and forwardResponse in httpCache, as per the
        // "Storing Responses in Caches" chapter of HTTP Caching. [HTTP-CACHING]
        // TODO: cache
        }
    }
    // 11. Set response’s URL list to a clone of httpRequest’s URL list.
    response.urlList = [
        ...httpRequest.urlList
    ];
    // 12. If httpRequest’s header list contains `Range`, then set response’s
    // range-requested flag.
    if (httpRequest.headersList.contains('range', true)) {
        response.rangeRequested = true;
    }
    // 13. Set response’s request-includes-credentials to includeCredentials.
    response.requestIncludesCredentials = includeCredentials;
    // 14. If response’s status is 401, httpRequest’s response tainting is not
    // "cors", includeCredentials is true, and request’s window is an environment
    // settings object, then:
    // TODO
    // 15. If response’s status is 407, then:
    if (response.status === 407) {
        // 1. If request’s window is "no-window", then return a network error.
        if (request.window === 'no-window') {
            return makeNetworkError();
        }
        // 2. ???
        // 3. If fetchParams is canceled, then return the appropriate network error for fetchParams.
        if (isCancelled(fetchParams)) {
            return makeAppropriateNetworkError(fetchParams);
        }
        // 4. Prompt the end user as appropriate in request’s window and store
        // the result as a proxy-authentication entry. [HTTP-AUTH]
        // TODO: Invoke some kind of callback?
        // 5. Set response to the result of running HTTP-network-or-cache fetch given
        // fetchParams.
        // TODO
        return makeNetworkError('proxy authentication required');
    }
    // 16. If all of the following are true
    if (// response’s status is 421
    response.status === 421 && // isNewConnectionFetch is false
    !isNewConnectionFetch && // request’s body is null, or request’s body is non-null and request’s body’s source is non-null
    (request.body == null || request.body.source != null)) {
        // then:
        // 1. If fetchParams is canceled, then return the appropriate network error for fetchParams.
        if (isCancelled(fetchParams)) {
            return makeAppropriateNetworkError(fetchParams);
        }
        // 2. Set response to the result of running HTTP-network-or-cache
        // fetch given fetchParams, isAuthenticationFetch, and true.
        // TODO (spec): The spec doesn't specify this but we need to cancel
        // the active response before we can start a new one.
        // https://github.com/whatwg/fetch/issues/1293
        fetchParams.controller.connection.destroy();
        response = await httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch, true);
    }
    // 17. If isAuthenticationFetch is true, then create an authentication entry
    if (isAuthenticationFetch) {
    // TODO
    }
    // 18. Return response.
    return response;
}
// https://fetch.spec.whatwg.org/#http-network-fetch
async function httpNetworkFetch(fetchParams, includeCredentials = false, forceNewConnection = false) {
    assert(!fetchParams.controller.connection || fetchParams.controller.connection.destroyed);
    fetchParams.controller.connection = {
        abort: null,
        destroyed: false,
        destroy (err, abort = true) {
            if (!this.destroyed) {
                this.destroyed = true;
                if (abort) {
                    this.abort?.(err ?? new DOMException('The operation was aborted.', 'AbortError'));
                }
            }
        }
    };
    // 1. Let request be fetchParams’s request.
    const request = fetchParams.request;
    // 2. Let response be null.
    let response = null;
    // 3. Let timingInfo be fetchParams’s timing info.
    const timingInfo = fetchParams.timingInfo;
    // 4. Let httpCache be the result of determining the HTTP cache partition,
    // given request.
    // TODO: cache
    const httpCache = null;
    // 5. If httpCache is null, then set request’s cache mode to "no-store".
    if (httpCache == null) {
        request.cache = 'no-store';
    }
    // 6. Let networkPartitionKey be the result of determining the network
    // partition key given request.
    // TODO
    // 7. Let newConnection be "yes" if forceNewConnection is true; otherwise
    // "no".
    const newConnection = forceNewConnection ? 'yes' : 'no' // eslint-disable-line no-unused-vars
    ;
    // 8. Switch on request’s mode:
    if (request.mode === 'websocket') {
    // Let connection be the result of obtaining a WebSocket connection,
    // given request’s current URL.
    // TODO
    } else {
    // Let connection be the result of obtaining a connection, given
    // networkPartitionKey, request’s current URL’s origin,
    // includeCredentials, and forceNewConnection.
    // TODO
    }
    // 9. Run these steps, but abort when the ongoing fetch is terminated:
    //    1. If connection is failure, then return a network error.
    //    2. Set timingInfo’s final connection timing info to the result of
    //    calling clamp and coarsen connection timing info with connection’s
    //    timing info, timingInfo’s post-redirect start time, and fetchParams’s
    //    cross-origin isolated capability.
    //    3. If connection is not an HTTP/2 connection, request’s body is non-null,
    //    and request’s body’s source is null, then append (`Transfer-Encoding`,
    //    `chunked`) to request’s header list.
    //    4. Set timingInfo’s final network-request start time to the coarsened
    //    shared current time given fetchParams’s cross-origin isolated
    //    capability.
    //    5. Set response to the result of making an HTTP request over connection
    //    using request with the following caveats:
    //        - Follow the relevant requirements from HTTP. [HTTP] [HTTP-SEMANTICS]
    //        [HTTP-COND] [HTTP-CACHING] [HTTP-AUTH]
    //        - If request’s body is non-null, and request’s body’s source is null,
    //        then the user agent may have a buffer of up to 64 kibibytes and store
    //        a part of request’s body in that buffer. If the user agent reads from
    //        request’s body beyond that buffer’s size and the user agent needs to
    //        resend request, then instead return a network error.
    //        - Set timingInfo’s final network-response start time to the coarsened
    //        shared current time given fetchParams’s cross-origin isolated capability,
    //        immediately after the user agent’s HTTP parser receives the first byte
    //        of the response (e.g., frame header bytes for HTTP/2 or response status
    //        line for HTTP/1.x).
    //        - Wait until all the headers are transmitted.
    //        - Any responses whose status is in the range 100 to 199, inclusive,
    //        and is not 101, are to be ignored, except for the purposes of setting
    //        timingInfo’s final network-response start time above.
    //    - If request’s header list contains `Transfer-Encoding`/`chunked` and
    //    response is transferred via HTTP/1.0 or older, then return a network
    //    error.
    //    - If the HTTP request results in a TLS client certificate dialog, then:
    //        1. If request’s window is an environment settings object, make the
    //        dialog available in request’s window.
    //        2. Otherwise, return a network error.
    // To transmit request’s body body, run these steps:
    let requestBody = null;
    // 1. If body is null and fetchParams’s process request end-of-body is
    // non-null, then queue a fetch task given fetchParams’s process request
    // end-of-body and fetchParams’s task destination.
    if (request.body == null && fetchParams.processRequestEndOfBody) {
        queueMicrotask(()=>fetchParams.processRequestEndOfBody());
    } else if (request.body != null) {
        // 2. Otherwise, if body is non-null:
        //    1. Let processBodyChunk given bytes be these steps:
        const processBodyChunk = async function*(bytes) {
            // 1. If the ongoing fetch is terminated, then abort these steps.
            if (isCancelled(fetchParams)) {
                return;
            }
            // 2. Run this step in parallel: transmit bytes.
            yield bytes;
            // 3. If fetchParams’s process request body is non-null, then run
            // fetchParams’s process request body given bytes’s length.
            fetchParams.processRequestBodyChunkLength?.(bytes.byteLength);
        };
        // 2. Let processEndOfBody be these steps:
        const processEndOfBody = ()=>{
            // 1. If fetchParams is canceled, then abort these steps.
            if (isCancelled(fetchParams)) {
                return;
            }
            // 2. If fetchParams’s process request end-of-body is non-null,
            // then run fetchParams’s process request end-of-body.
            if (fetchParams.processRequestEndOfBody) {
                fetchParams.processRequestEndOfBody();
            }
        };
        // 3. Let processBodyError given e be these steps:
        const processBodyError = (e)=>{
            // 1. If fetchParams is canceled, then abort these steps.
            if (isCancelled(fetchParams)) {
                return;
            }
            // 2. If e is an "AbortError" DOMException, then abort fetchParams’s controller.
            if (e.name === 'AbortError') {
                fetchParams.controller.abort();
            } else {
                fetchParams.controller.terminate(e);
            }
        };
        // 4. Incrementally read request’s body given processBodyChunk, processEndOfBody,
        // processBodyError, and fetchParams’s task destination.
        requestBody = async function*() {
            try {
                for await (const bytes of request.body.stream){
                    yield* processBodyChunk(bytes);
                }
                processEndOfBody();
            } catch (err) {
                processBodyError(err);
            }
        }();
    }
    try {
        // socket is only provided for websockets
        const { body, status, statusText, headersList, socket } = await dispatch({
            body: requestBody
        });
        if (socket) {
            response = makeResponse({
                status,
                statusText,
                headersList,
                socket
            });
        } else {
            const iterator = body[Symbol.asyncIterator]();
            fetchParams.controller.next = ()=>iterator.next();
            response = makeResponse({
                status,
                statusText,
                headersList
            });
        }
    } catch (err) {
        // 10. If aborted, then:
        if (err.name === 'AbortError') {
            // 1. If connection uses HTTP/2, then transmit an RST_STREAM frame.
            fetchParams.controller.connection.destroy();
            // 2. Return the appropriate network error for fetchParams.
            return makeAppropriateNetworkError(fetchParams, err);
        }
        return makeNetworkError(err);
    }
    // 11. Let pullAlgorithm be an action that resumes the ongoing fetch
    // if it is suspended.
    const pullAlgorithm = ()=>{
        return fetchParams.controller.resume();
    };
    // 12. Let cancelAlgorithm be an algorithm that aborts fetchParams’s
    // controller with reason, given reason.
    const cancelAlgorithm = (reason)=>{
        // If the aborted fetch was already terminated, then we do not
        // need to do anything.
        if (!isCancelled(fetchParams)) {
            fetchParams.controller.abort(reason);
        }
    };
    // 13. Let highWaterMark be a non-negative, non-NaN number, chosen by
    // the user agent.
    // TODO
    // 14. Let sizeAlgorithm be an algorithm that accepts a chunk object
    // and returns a non-negative, non-NaN, non-infinite number, chosen by the user agent.
    // TODO
    // 15. Let stream be a new ReadableStream.
    // 16. Set up stream with byte reading support with pullAlgorithm set to pullAlgorithm,
    //     cancelAlgorithm set to cancelAlgorithm.
    const stream = new ReadableStream({
        start (controller) {
            fetchParams.controller.controller = controller;
        },
        pull: pullAlgorithm,
        cancel: cancelAlgorithm,
        type: 'bytes'
    });
    // 17. Run these steps, but abort when the ongoing fetch is terminated:
    //    1. Set response’s body to a new body whose stream is stream.
    response.body = {
        stream,
        source: null,
        length: null
    };
    //    2. If response is not a network error and request’s cache mode is
    //    not "no-store", then update response in httpCache for request.
    //    TODO
    //    3. If includeCredentials is true and the user agent is not configured
    //    to block cookies for request (see section 7 of [COOKIES]), then run the
    //    "set-cookie-string" parsing algorithm (see section 5.2 of [COOKIES]) on
    //    the value of each header whose name is a byte-case-insensitive match for
    //    `Set-Cookie` in response’s header list, if any, and request’s current URL.
    //    TODO
    // 18. If aborted, then:
    // TODO
    // 19. Run these steps in parallel:
    //    1. Run these steps, but abort when fetchParams is canceled:
    if (!fetchParams.controller.resume) {
        fetchParams.controller.on('terminated', onAborted);
    }
    fetchParams.controller.resume = async ()=>{
        // 1. While true
        while(true){
            // 1-3. See onData...
            // 4. Set bytes to the result of handling content codings given
            // codings and bytes.
            let bytes;
            let isFailure;
            try {
                const { done, value } = await fetchParams.controller.next();
                if (isAborted(fetchParams)) {
                    break;
                }
                bytes = done ? undefined : value;
            } catch (err) {
                if (fetchParams.controller.ended && !timingInfo.encodedBodySize) {
                    // zlib doesn't like empty streams.
                    bytes = undefined;
                } else {
                    bytes = err;
                    // err may be propagated from the result of calling readablestream.cancel,
                    // which might not be an error. https://github.com/nodejs/undici/issues/2009
                    isFailure = true;
                }
            }
            if (bytes === undefined) {
                // 2. Otherwise, if the bytes transmission for response’s message
                // body is done normally and stream is readable, then close
                // stream, finalize response for fetchParams and response, and
                // abort these in-parallel steps.
                readableStreamClose(fetchParams.controller.controller);
                finalizeResponse(fetchParams, response);
                return;
            }
            // 5. Increase timingInfo’s decoded body size by bytes’s length.
            timingInfo.decodedBodySize += bytes?.byteLength ?? 0;
            // 6. If bytes is failure, then terminate fetchParams’s controller.
            if (isFailure) {
                fetchParams.controller.terminate(bytes);
                return;
            }
            // 7. Enqueue a Uint8Array wrapping an ArrayBuffer containing bytes
            // into stream.
            const buffer = new Uint8Array(bytes);
            if (buffer.byteLength) {
                fetchParams.controller.controller.enqueue(buffer);
            }
            // 8. If stream is errored, then terminate the ongoing fetch.
            if (isErrored(stream)) {
                fetchParams.controller.terminate();
                return;
            }
            // 9. If stream doesn’t need more data ask the user agent to suspend
            // the ongoing fetch.
            if (fetchParams.controller.controller.desiredSize <= 0) {
                return;
            }
        }
    };
    //    2. If aborted, then:
    function onAborted(reason) {
        // 2. If fetchParams is aborted, then:
        if (isAborted(fetchParams)) {
            // 1. Set response’s aborted flag.
            response.aborted = true;
            // 2. If stream is readable, then error stream with the result of
            //    deserialize a serialized abort reason given fetchParams’s
            //    controller’s serialized abort reason and an
            //    implementation-defined realm.
            if (isReadable(stream)) {
                fetchParams.controller.controller.error(fetchParams.controller.serializedAbortReason);
            }
        } else {
            // 3. Otherwise, if stream is readable, error stream with a TypeError.
            if (isReadable(stream)) {
                fetchParams.controller.controller.error(new TypeError('terminated', {
                    cause: isErrorLike(reason) ? reason : undefined
                }));
            }
        }
        // 4. If connection uses HTTP/2, then transmit an RST_STREAM frame.
        // 5. Otherwise, the user agent should close connection unless it would be bad for performance to do so.
        fetchParams.controller.connection.destroy();
    }
    // 20. Return response.
    return response;
    //TURBOPACK unreachable
    ;
    function dispatch({ body }) {
        const url = requestCurrentURL(request);
        /** @type {import('../../..').Agent} */ const agent = fetchParams.controller.dispatcher;
        return new Promise((resolve, reject)=>agent.dispatch({
                path: url.pathname + url.search,
                origin: url.origin,
                method: request.method,
                body: agent.isMockActive ? request.body && (request.body.source || request.body.stream) : body,
                headers: request.headersList.entries,
                maxRedirections: 0,
                upgrade: request.mode === 'websocket' ? 'websocket' : undefined
            }, {
                body: null,
                abort: null,
                onConnect (abort) {
                    // TODO (fix): Do we need connection here?
                    const { connection } = fetchParams.controller;
                    // Set timingInfo’s final connection timing info to the result of calling clamp and coarsen
                    // connection timing info with connection’s timing info, timingInfo’s post-redirect start
                    // time, and fetchParams’s cross-origin isolated capability.
                    // TODO: implement connection timing
                    timingInfo.finalConnectionTimingInfo = clampAndCoarsenConnectionTimingInfo(undefined, timingInfo.postRedirectStartTime, fetchParams.crossOriginIsolatedCapability);
                    if (connection.destroyed) {
                        abort(new DOMException('The operation was aborted.', 'AbortError'));
                    } else {
                        fetchParams.controller.on('terminated', abort);
                        this.abort = connection.abort = abort;
                    }
                    // Set timingInfo’s final network-request start time to the coarsened shared current time given
                    // fetchParams’s cross-origin isolated capability.
                    timingInfo.finalNetworkRequestStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
                },
                onResponseStarted () {
                    // Set timingInfo’s final network-response start time to the coarsened shared current
                    // time given fetchParams’s cross-origin isolated capability, immediately after the
                    // user agent’s HTTP parser receives the first byte of the response (e.g., frame header
                    // bytes for HTTP/2 or response status line for HTTP/1.x).
                    timingInfo.finalNetworkResponseStartTime = coarsenedSharedCurrentTime(fetchParams.crossOriginIsolatedCapability);
                },
                onHeaders (status, rawHeaders, resume, statusText) {
                    if (status < 200) {
                        return false;
                    }
                    const headersList = new HeadersList();
                    for(let i = 0; i < rawHeaders.length; i += 2){
                        headersList.append(bufferToLowerCasedHeaderName(rawHeaders[i]), rawHeaders[i + 1].toString('latin1'), true);
                    }
                    const location = headersList.get('location', true);
                    this.body = new Readable({
                        read: resume
                    });
                    const willFollow = location && request.redirect === 'follow' && redirectStatusSet.has(status);
                    const decoders = [];
                    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding
                    if (request.method !== 'HEAD' && request.method !== 'CONNECT' && !nullBodyStatus.includes(status) && !willFollow) {
                        // https://www.rfc-editor.org/rfc/rfc7231#section-3.1.2.1
                        const contentEncoding = headersList.get('content-encoding', true);
                        // "All content-coding values are case-insensitive..."
                        /** @type {string[]} */ const codings = contentEncoding ? contentEncoding.toLowerCase().split(',') : [];
                        for(let i = codings.length - 1; i >= 0; --i){
                            const coding = codings[i].trim();
                            // https://www.rfc-editor.org/rfc/rfc9112.html#section-7.2
                            if (coding === 'x-gzip' || coding === 'gzip') {
                                decoders.push(zlib.createGunzip({
                                    // Be less strict when decoding compressed responses, since sometimes
                                    // servers send slightly invalid responses that are still accepted
                                    // by common browsers.
                                    // Always using Z_SYNC_FLUSH is what cURL does.
                                    flush: zlib.constants.Z_SYNC_FLUSH,
                                    finishFlush: zlib.constants.Z_SYNC_FLUSH
                                }));
                            } else if (coding === 'deflate') {
                                decoders.push(createInflate({
                                    flush: zlib.constants.Z_SYNC_FLUSH,
                                    finishFlush: zlib.constants.Z_SYNC_FLUSH
                                }));
                            } else if (coding === 'br') {
                                decoders.push(zlib.createBrotliDecompress({
                                    flush: zlib.constants.BROTLI_OPERATION_FLUSH,
                                    finishFlush: zlib.constants.BROTLI_OPERATION_FLUSH
                                }));
                            } else if (coding === 'zstd' && hasZstd) {
                                // Node.js v23.8.0+ and v22.15.0+ supports Zstandard
                                decoders.push(zlib.createZstdDecompress({
                                    flush: zlib.constants.ZSTD_e_continue,
                                    finishFlush: zlib.constants.ZSTD_e_end
                                }));
                            } else {
                                decoders.length = 0;
                                break;
                            }
                        }
                    }
                    const onError = this.onError.bind(this);
                    resolve({
                        status,
                        statusText,
                        headersList,
                        body: decoders.length ? pipeline(this.body, ...decoders, (err)=>{
                            if (err) {
                                this.onError(err);
                            }
                        }).on('error', onError) : this.body.on('error', onError)
                    });
                    return true;
                },
                onData (chunk) {
                    if (fetchParams.controller.dump) {
                        return;
                    }
                    // 1. If one or more bytes have been transmitted from response’s
                    // message body, then:
                    //  1. Let bytes be the transmitted bytes.
                    const bytes = chunk;
                    //  2. Let codings be the result of extracting header list values
                    //  given `Content-Encoding` and response’s header list.
                    //  See pullAlgorithm.
                    //  3. Increase timingInfo’s encoded body size by bytes’s length.
                    timingInfo.encodedBodySize += bytes.byteLength;
                    //  4. See pullAlgorithm...
                    return this.body.push(bytes);
                },
                onComplete () {
                    if (this.abort) {
                        fetchParams.controller.off('terminated', this.abort);
                    }
                    fetchParams.controller.ended = true;
                    this.body.push(null);
                },
                onError (error) {
                    if (this.abort) {
                        fetchParams.controller.off('terminated', this.abort);
                    }
                    this.body?.destroy(error);
                    fetchParams.controller.terminate(error);
                    reject(error);
                },
                onUpgrade (status, rawHeaders, socket) {
                    if (status !== 101) {
                        return;
                    }
                    const headersList = new HeadersList();
                    for(let i = 0; i < rawHeaders.length; i += 2){
                        headersList.append(bufferToLowerCasedHeaderName(rawHeaders[i]), rawHeaders[i + 1].toString('latin1'), true);
                    }
                    resolve({
                        status,
                        statusText: STATUS_CODES[status],
                        headersList,
                        socket
                    });
                    return true;
                }
            }));
    }
}
module.exports = {
    fetch,
    Fetch,
    fetching,
    finalizeAndReportTiming
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cache/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { URLSerializer } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { isValidHeaderName } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
/**
 * @see https://url.spec.whatwg.org/#concept-url-equals
 * @param {URL} A
 * @param {URL} B
 * @param {boolean | undefined} excludeFragment
 * @returns {boolean}
 */ function urlEquals(A, B, excludeFragment = false) {
    const serializedA = URLSerializer(A, excludeFragment);
    const serializedB = URLSerializer(B, excludeFragment);
    return serializedA === serializedB;
}
/**
 * @see https://github.com/chromium/chromium/blob/694d20d134cb553d8d89e5500b9148012b1ba299/content/browser/cache_storage/cache_storage_cache.cc#L260-L262
 * @param {string} header
 */ function getFieldValues(header) {
    assert(header !== null);
    const values = [];
    for (let value of header.split(',')){
        value = value.trim();
        if (isValidHeaderName(value)) {
            values.push(value);
        }
    }
    return values;
}
module.exports = {
    urlEquals,
    getFieldValues
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cache/cache.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const { urlEquals, getFieldValues } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cache/util.js [app-rsc] (ecmascript)");
const { kEnumerableProperty, isDisturbed } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { cloneResponse, fromInnerResponse, getResponseState } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/response.js [app-rsc] (ecmascript)");
const { Request, fromInnerRequest, getRequestState } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/request.js [app-rsc] (ecmascript)");
const { fetching } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/index.js [app-rsc] (ecmascript)");
const { urlIsHttpHttpsScheme, readAllBytes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { createDeferredPromise } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/promise.js [app-rsc] (ecmascript)");
/**
 * @see https://w3c.github.io/ServiceWorker/#dfn-cache-batch-operation
 * @typedef {Object} CacheBatchOperation
 * @property {'delete' | 'put'} type
 * @property {any} request
 * @property {any} response
 * @property {import('../../../types/cache').CacheQueryOptions} options
 */ /**
 * @see https://w3c.github.io/ServiceWorker/#dfn-request-response-list
 * @typedef {[any, any][]} requestResponseList
 */ class Cache {
    /**
   * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-request-response-list
   * @type {requestResponseList}
   */ #relevantRequestResponseList;
    constructor(){
        if (arguments[0] !== kConstruct) {
            webidl.illegalConstructor();
        }
        webidl.util.markAsUncloneable(this);
        this.#relevantRequestResponseList = arguments[1];
    }
    async match(request, options = {}) {
        webidl.brandCheck(this, Cache);
        const prefix = 'Cache.match';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        request = webidl.converters.RequestInfo(request);
        options = webidl.converters.CacheQueryOptions(options, prefix, 'options');
        const p = this.#internalMatchAll(request, options, 1);
        if (p.length === 0) {
            return;
        }
        return p[0];
    }
    async matchAll(request = undefined, options = {}) {
        webidl.brandCheck(this, Cache);
        const prefix = 'Cache.matchAll';
        if (request !== undefined) request = webidl.converters.RequestInfo(request);
        options = webidl.converters.CacheQueryOptions(options, prefix, 'options');
        return this.#internalMatchAll(request, options);
    }
    async add(request) {
        webidl.brandCheck(this, Cache);
        const prefix = 'Cache.add';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        request = webidl.converters.RequestInfo(request);
        // 1.
        const requests = [
            request
        ];
        // 2.
        const responseArrayPromise = this.addAll(requests);
        // 3.
        return await responseArrayPromise;
    }
    async addAll(requests) {
        webidl.brandCheck(this, Cache);
        const prefix = 'Cache.addAll';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        // 1.
        const responsePromises = [];
        // 2.
        const requestList = [];
        // 3.
        for (let request of requests){
            if (request === undefined) {
                throw webidl.errors.conversionFailed({
                    prefix,
                    argument: 'Argument 1',
                    types: [
                        'undefined is not allowed'
                    ]
                });
            }
            request = webidl.converters.RequestInfo(request);
            if (typeof request === 'string') {
                continue;
            }
            // 3.1
            const r = getRequestState(request);
            // 3.2
            if (!urlIsHttpHttpsScheme(r.url) || r.method !== 'GET') {
                throw webidl.errors.exception({
                    header: prefix,
                    message: 'Expected http/s scheme when method is not GET.'
                });
            }
        }
        // 4.
        /** @type {ReturnType<typeof fetching>[]} */ const fetchControllers = [];
        // 5.
        for (const request of requests){
            // 5.1
            const r = getRequestState(new Request(request));
            // 5.2
            if (!urlIsHttpHttpsScheme(r.url)) {
                throw webidl.errors.exception({
                    header: prefix,
                    message: 'Expected http/s scheme.'
                });
            }
            // 5.4
            r.initiator = 'fetch';
            r.destination = 'subresource';
            // 5.5
            requestList.push(r);
            // 5.6
            const responsePromise = createDeferredPromise();
            // 5.7
            fetchControllers.push(fetching({
                request: r,
                processResponse (response) {
                    // 1.
                    if (response.type === 'error' || response.status === 206 || response.status < 200 || response.status > 299) {
                        responsePromise.reject(webidl.errors.exception({
                            header: 'Cache.addAll',
                            message: 'Received an invalid status code or the request failed.'
                        }));
                    } else if (response.headersList.contains('vary')) {
                        // 2.1
                        const fieldValues = getFieldValues(response.headersList.get('vary'));
                        // 2.2
                        for (const fieldValue of fieldValues){
                            // 2.2.1
                            if (fieldValue === '*') {
                                responsePromise.reject(webidl.errors.exception({
                                    header: 'Cache.addAll',
                                    message: 'invalid vary field value'
                                }));
                                for (const controller of fetchControllers){
                                    controller.abort();
                                }
                                return;
                            }
                        }
                    }
                },
                processResponseEndOfBody (response) {
                    // 1.
                    if (response.aborted) {
                        responsePromise.reject(new DOMException('aborted', 'AbortError'));
                        return;
                    }
                    // 2.
                    responsePromise.resolve(response);
                }
            }));
            // 5.8
            responsePromises.push(responsePromise.promise);
        }
        // 6.
        const p = Promise.all(responsePromises);
        // 7.
        const responses = await p;
        // 7.1
        const operations = [];
        // 7.2
        let index = 0;
        // 7.3
        for (const response of responses){
            // 7.3.1
            /** @type {CacheBatchOperation} */ const operation = {
                type: 'put',
                request: requestList[index],
                response
            };
            operations.push(operation); // 7.3.5
            index++; // 7.3.6
        }
        // 7.5
        const cacheJobPromise = createDeferredPromise();
        // 7.6.1
        let errorData = null;
        // 7.6.2
        try {
            this.#batchCacheOperations(operations);
        } catch (e) {
            errorData = e;
        }
        // 7.6.3
        queueMicrotask(()=>{
            // 7.6.3.1
            if (errorData === null) {
                cacheJobPromise.resolve(undefined);
            } else {
                // 7.6.3.2
                cacheJobPromise.reject(errorData);
            }
        });
        // 7.7
        return cacheJobPromise.promise;
    }
    async put(request, response) {
        webidl.brandCheck(this, Cache);
        const prefix = 'Cache.put';
        webidl.argumentLengthCheck(arguments, 2, prefix);
        request = webidl.converters.RequestInfo(request);
        response = webidl.converters.Response(response, prefix, 'response');
        // 1.
        let innerRequest = null;
        // 2.
        if (webidl.is.Request(request)) {
            innerRequest = getRequestState(request);
        } else {
            innerRequest = getRequestState(new Request(request));
        }
        // 4.
        if (!urlIsHttpHttpsScheme(innerRequest.url) || innerRequest.method !== 'GET') {
            throw webidl.errors.exception({
                header: prefix,
                message: 'Expected an http/s scheme when method is not GET'
            });
        }
        // 5.
        const innerResponse = getResponseState(response);
        // 6.
        if (innerResponse.status === 206) {
            throw webidl.errors.exception({
                header: prefix,
                message: 'Got 206 status'
            });
        }
        // 7.
        if (innerResponse.headersList.contains('vary')) {
            // 7.1.
            const fieldValues = getFieldValues(innerResponse.headersList.get('vary'));
            // 7.2.
            for (const fieldValue of fieldValues){
                // 7.2.1
                if (fieldValue === '*') {
                    throw webidl.errors.exception({
                        header: prefix,
                        message: 'Got * vary field value'
                    });
                }
            }
        }
        // 8.
        if (innerResponse.body && (isDisturbed(innerResponse.body.stream) || innerResponse.body.stream.locked)) {
            throw webidl.errors.exception({
                header: prefix,
                message: 'Response body is locked or disturbed'
            });
        }
        // 9.
        const clonedResponse = cloneResponse(innerResponse);
        // 10.
        const bodyReadPromise = createDeferredPromise();
        // 11.
        if (innerResponse.body != null) {
            // 11.1
            const stream = innerResponse.body.stream;
            // 11.2
            const reader = stream.getReader();
            // 11.3
            readAllBytes(reader, bodyReadPromise.resolve, bodyReadPromise.reject);
        } else {
            bodyReadPromise.resolve(undefined);
        }
        // 12.
        /** @type {CacheBatchOperation[]} */ const operations = [];
        // 13.
        /** @type {CacheBatchOperation} */ const operation = {
            type: 'put',
            request: innerRequest,
            response: clonedResponse // 16.
        };
        // 17.
        operations.push(operation);
        // 19.
        const bytes = await bodyReadPromise.promise;
        if (clonedResponse.body != null) {
            clonedResponse.body.source = bytes;
        }
        // 19.1
        const cacheJobPromise = createDeferredPromise();
        // 19.2.1
        let errorData = null;
        // 19.2.2
        try {
            this.#batchCacheOperations(operations);
        } catch (e) {
            errorData = e;
        }
        // 19.2.3
        queueMicrotask(()=>{
            // 19.2.3.1
            if (errorData === null) {
                cacheJobPromise.resolve();
            } else {
                cacheJobPromise.reject(errorData);
            }
        });
        return cacheJobPromise.promise;
    }
    async delete(request, options = {}) {
        webidl.brandCheck(this, Cache);
        const prefix = 'Cache.delete';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        request = webidl.converters.RequestInfo(request);
        options = webidl.converters.CacheQueryOptions(options, prefix, 'options');
        /**
     * @type {Request}
     */ let r = null;
        if (webidl.is.Request(request)) {
            r = getRequestState(request);
            if (r.method !== 'GET' && !options.ignoreMethod) {
                return false;
            }
        } else {
            assert(typeof request === 'string');
            r = getRequestState(new Request(request));
        }
        /** @type {CacheBatchOperation[]} */ const operations = [];
        /** @type {CacheBatchOperation} */ const operation = {
            type: 'delete',
            request: r,
            options
        };
        operations.push(operation);
        const cacheJobPromise = createDeferredPromise();
        let errorData = null;
        let requestResponses;
        try {
            requestResponses = this.#batchCacheOperations(operations);
        } catch (e) {
            errorData = e;
        }
        queueMicrotask(()=>{
            if (errorData === null) {
                cacheJobPromise.resolve(!!requestResponses?.length);
            } else {
                cacheJobPromise.reject(errorData);
            }
        });
        return cacheJobPromise.promise;
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#dom-cache-keys
   * @param {any} request
   * @param {import('../../../types/cache').CacheQueryOptions} options
   * @returns {Promise<readonly Request[]>}
   */ async keys(request = undefined, options = {}) {
        webidl.brandCheck(this, Cache);
        const prefix = 'Cache.keys';
        if (request !== undefined) request = webidl.converters.RequestInfo(request);
        options = webidl.converters.CacheQueryOptions(options, prefix, 'options');
        // 1.
        let r = null;
        // 2.
        if (request !== undefined) {
            // 2.1
            if (webidl.is.Request(request)) {
                // 2.1.1
                r = getRequestState(request);
                // 2.1.2
                if (r.method !== 'GET' && !options.ignoreMethod) {
                    return [];
                }
            } else if (typeof request === 'string') {
                r = getRequestState(new Request(request));
            }
        }
        // 4.
        const promise = createDeferredPromise();
        // 5.
        // 5.1
        const requests = [];
        // 5.2
        if (request === undefined) {
            // 5.2.1
            for (const requestResponse of this.#relevantRequestResponseList){
                // 5.2.1.1
                requests.push(requestResponse[0]);
            }
        } else {
            // 5.3.1
            const requestResponses = this.#queryCache(r, options);
            // 5.3.2
            for (const requestResponse of requestResponses){
                // 5.3.2.1
                requests.push(requestResponse[0]);
            }
        }
        // 5.4
        queueMicrotask(()=>{
            // 5.4.1
            const requestList = [];
            // 5.4.2
            for (const request of requests){
                const requestObject = fromInnerRequest(request, undefined, new AbortController().signal, 'immutable');
                // 5.4.2.1
                requestList.push(requestObject);
            }
            // 5.4.3
            promise.resolve(Object.freeze(requestList));
        });
        return promise.promise;
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#batch-cache-operations-algorithm
   * @param {CacheBatchOperation[]} operations
   * @returns {requestResponseList}
   */ #batchCacheOperations(operations) {
        // 1.
        const cache = this.#relevantRequestResponseList;
        // 2.
        const backupCache = [
            ...cache
        ];
        // 3.
        const addedItems = [];
        // 4.1
        const resultList = [];
        try {
            // 4.2
            for (const operation of operations){
                // 4.2.1
                if (operation.type !== 'delete' && operation.type !== 'put') {
                    throw webidl.errors.exception({
                        header: 'Cache.#batchCacheOperations',
                        message: 'operation type does not match "delete" or "put"'
                    });
                }
                // 4.2.2
                if (operation.type === 'delete' && operation.response != null) {
                    throw webidl.errors.exception({
                        header: 'Cache.#batchCacheOperations',
                        message: 'delete operation should not have an associated response'
                    });
                }
                // 4.2.3
                if (this.#queryCache(operation.request, operation.options, addedItems).length) {
                    throw new DOMException('???', 'InvalidStateError');
                }
                // 4.2.4
                let requestResponses;
                // 4.2.5
                if (operation.type === 'delete') {
                    // 4.2.5.1
                    requestResponses = this.#queryCache(operation.request, operation.options);
                    // TODO: the spec is wrong, this is needed to pass WPTs
                    if (requestResponses.length === 0) {
                        return [];
                    }
                    // 4.2.5.2
                    for (const requestResponse of requestResponses){
                        const idx = cache.indexOf(requestResponse);
                        assert(idx !== -1);
                        // 4.2.5.2.1
                        cache.splice(idx, 1);
                    }
                } else if (operation.type === 'put') {
                    // 4.2.6.1
                    if (operation.response == null) {
                        throw webidl.errors.exception({
                            header: 'Cache.#batchCacheOperations',
                            message: 'put operation should have an associated response'
                        });
                    }
                    // 4.2.6.2
                    const r = operation.request;
                    // 4.2.6.3
                    if (!urlIsHttpHttpsScheme(r.url)) {
                        throw webidl.errors.exception({
                            header: 'Cache.#batchCacheOperations',
                            message: 'expected http or https scheme'
                        });
                    }
                    // 4.2.6.4
                    if (r.method !== 'GET') {
                        throw webidl.errors.exception({
                            header: 'Cache.#batchCacheOperations',
                            message: 'not get method'
                        });
                    }
                    // 4.2.6.5
                    if (operation.options != null) {
                        throw webidl.errors.exception({
                            header: 'Cache.#batchCacheOperations',
                            message: 'options must not be defined'
                        });
                    }
                    // 4.2.6.6
                    requestResponses = this.#queryCache(operation.request);
                    // 4.2.6.7
                    for (const requestResponse of requestResponses){
                        const idx = cache.indexOf(requestResponse);
                        assert(idx !== -1);
                        // 4.2.6.7.1
                        cache.splice(idx, 1);
                    }
                    // 4.2.6.8
                    cache.push([
                        operation.request,
                        operation.response
                    ]);
                    // 4.2.6.10
                    addedItems.push([
                        operation.request,
                        operation.response
                    ]);
                }
                // 4.2.7
                resultList.push([
                    operation.request,
                    operation.response
                ]);
            }
            // 4.3
            return resultList;
        } catch (e) {
            // 5.1
            this.#relevantRequestResponseList.length = 0;
            // 5.2
            this.#relevantRequestResponseList = backupCache;
            // 5.3
            throw e;
        }
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#query-cache
   * @param {any} requestQuery
   * @param {import('../../../types/cache').CacheQueryOptions} options
   * @param {requestResponseList} targetStorage
   * @returns {requestResponseList}
   */ #queryCache(requestQuery, options, targetStorage) {
        /** @type {requestResponseList} */ const resultList = [];
        const storage = targetStorage ?? this.#relevantRequestResponseList;
        for (const requestResponse of storage){
            const [cachedRequest, cachedResponse] = requestResponse;
            if (this.#requestMatchesCachedItem(requestQuery, cachedRequest, cachedResponse, options)) {
                resultList.push(requestResponse);
            }
        }
        return resultList;
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#request-matches-cached-item-algorithm
   * @param {any} requestQuery
   * @param {any} request
   * @param {any | null} response
   * @param {import('../../../types/cache').CacheQueryOptions | undefined} options
   * @returns {boolean}
   */ #requestMatchesCachedItem(requestQuery, request, response = null, options) {
        // if (options?.ignoreMethod === false && request.method === 'GET') {
        //   return false
        // }
        const queryURL = new URL(requestQuery.url);
        const cachedURL = new URL(request.url);
        if (options?.ignoreSearch) {
            cachedURL.search = '';
            queryURL.search = '';
        }
        if (!urlEquals(queryURL, cachedURL, true)) {
            return false;
        }
        if (response == null || options?.ignoreVary || !response.headersList.contains('vary')) {
            return true;
        }
        const fieldValues = getFieldValues(response.headersList.get('vary'));
        for (const fieldValue of fieldValues){
            if (fieldValue === '*') {
                return false;
            }
            const requestValue = request.headersList.get(fieldValue);
            const queryValue = requestQuery.headersList.get(fieldValue);
            // If one has the header and the other doesn't, or one has
            // a different value than the other, return false
            if (requestValue !== queryValue) {
                return false;
            }
        }
        return true;
    }
    #internalMatchAll(request, options, maxResponses = Infinity) {
        // 1.
        let r = null;
        // 2.
        if (request !== undefined) {
            if (webidl.is.Request(request)) {
                // 2.1.1
                r = getRequestState(request);
                // 2.1.2
                if (r.method !== 'GET' && !options.ignoreMethod) {
                    return [];
                }
            } else if (typeof request === 'string') {
                // 2.2.1
                r = getRequestState(new Request(request));
            }
        }
        // 5.
        // 5.1
        const responses = [];
        // 5.2
        if (request === undefined) {
            // 5.2.1
            for (const requestResponse of this.#relevantRequestResponseList){
                responses.push(requestResponse[1]);
            }
        } else {
            // 5.3.1
            const requestResponses = this.#queryCache(r, options);
            // 5.3.2
            for (const requestResponse of requestResponses){
                responses.push(requestResponse[1]);
            }
        }
        // 5.4
        // We don't implement CORs so we don't need to loop over the responses, yay!
        // 5.5.1
        const responseList = [];
        // 5.5.2
        for (const response of responses){
            // 5.5.2.1
            const responseObject = fromInnerResponse(response, 'immutable');
            responseList.push(responseObject.clone());
            if (responseList.length >= maxResponses) {
                break;
            }
        }
        // 6.
        return Object.freeze(responseList);
    }
}
Object.defineProperties(Cache.prototype, {
    [Symbol.toStringTag]: {
        value: 'Cache',
        configurable: true
    },
    match: kEnumerableProperty,
    matchAll: kEnumerableProperty,
    add: kEnumerableProperty,
    addAll: kEnumerableProperty,
    put: kEnumerableProperty,
    delete: kEnumerableProperty,
    keys: kEnumerableProperty
});
const cacheQueryOptionConverters = [
    {
        key: 'ignoreSearch',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    },
    {
        key: 'ignoreMethod',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    },
    {
        key: 'ignoreVary',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    }
];
webidl.converters.CacheQueryOptions = webidl.dictionaryConverter(cacheQueryOptionConverters);
webidl.converters.MultiCacheQueryOptions = webidl.dictionaryConverter([
    ...cacheQueryOptionConverters,
    {
        key: 'cacheName',
        converter: webidl.converters.DOMString
    }
]);
webidl.converters.Response = webidl.interfaceConverter(webidl.is.Response, 'Response');
webidl.converters['sequence<RequestInfo>'] = webidl.sequenceConverter(webidl.converters.RequestInfo);
module.exports = {
    Cache
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cache/cachestorage.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Cache } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cache/cache.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
class CacheStorage {
    /**
   * @see https://w3c.github.io/ServiceWorker/#dfn-relevant-name-to-cache-map
   * @type {Map<string, import('./cache').requestResponseList}
   */ #caches = new Map();
    constructor(){
        if (arguments[0] !== kConstruct) {
            webidl.illegalConstructor();
        }
        webidl.util.markAsUncloneable(this);
    }
    async match(request, options = {}) {
        webidl.brandCheck(this, CacheStorage);
        webidl.argumentLengthCheck(arguments, 1, 'CacheStorage.match');
        request = webidl.converters.RequestInfo(request);
        options = webidl.converters.MultiCacheQueryOptions(options);
        // 1.
        if (options.cacheName != null) {
            // 1.1.1.1
            if (this.#caches.has(options.cacheName)) {
                // 1.1.1.1.1
                const cacheList = this.#caches.get(options.cacheName);
                const cache = new Cache(kConstruct, cacheList);
                return await cache.match(request, options);
            }
        } else {
            // 2.2
            for (const cacheList of this.#caches.values()){
                const cache = new Cache(kConstruct, cacheList);
                // 2.2.1.2
                const response = await cache.match(request, options);
                if (response !== undefined) {
                    return response;
                }
            }
        }
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-has
   * @param {string} cacheName
   * @returns {Promise<boolean>}
   */ async has(cacheName) {
        webidl.brandCheck(this, CacheStorage);
        const prefix = 'CacheStorage.has';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        cacheName = webidl.converters.DOMString(cacheName, prefix, 'cacheName');
        // 2.1.1
        // 2.2
        return this.#caches.has(cacheName);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#dom-cachestorage-open
   * @param {string} cacheName
   * @returns {Promise<Cache>}
   */ async open(cacheName) {
        webidl.brandCheck(this, CacheStorage);
        const prefix = 'CacheStorage.open';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        cacheName = webidl.converters.DOMString(cacheName, prefix, 'cacheName');
        // 2.1
        if (this.#caches.has(cacheName)) {
            // await caches.open('v1') !== await caches.open('v1')
            // 2.1.1
            const cache = this.#caches.get(cacheName);
            // 2.1.1.1
            return new Cache(kConstruct, cache);
        }
        // 2.2
        const cache = [];
        // 2.3
        this.#caches.set(cacheName, cache);
        // 2.4
        return new Cache(kConstruct, cache);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-delete
   * @param {string} cacheName
   * @returns {Promise<boolean>}
   */ async delete(cacheName) {
        webidl.brandCheck(this, CacheStorage);
        const prefix = 'CacheStorage.delete';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        cacheName = webidl.converters.DOMString(cacheName, prefix, 'cacheName');
        return this.#caches.delete(cacheName);
    }
    /**
   * @see https://w3c.github.io/ServiceWorker/#cache-storage-keys
   * @returns {Promise<string[]>}
   */ async keys() {
        webidl.brandCheck(this, CacheStorage);
        // 2.1
        const keys = this.#caches.keys();
        // 2.2
        return [
            ...keys
        ];
    }
}
Object.defineProperties(CacheStorage.prototype, {
    [Symbol.toStringTag]: {
        value: 'CacheStorage',
        configurable: true
    },
    match: kEnumerableProperty,
    has: kEnumerableProperty,
    open: kEnumerableProperty,
    delete: kEnumerableProperty,
    keys: kEnumerableProperty
});
module.exports = {
    CacheStorage
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// https://wicg.github.io/cookie-store/#cookie-maximum-attribute-value-size
const maxAttributeValueSize = 1024;
// https://wicg.github.io/cookie-store/#cookie-maximum-name-value-pair-size
const maxNameValuePairSize = 4096;
module.exports = {
    maxAttributeValueSize,
    maxNameValuePairSize
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @param {string} value
 * @returns {boolean}
 */ function isCTLExcludingHtab(value) {
    for(let i = 0; i < value.length; ++i){
        const code = value.charCodeAt(i);
        if (code >= 0x00 && code <= 0x08 || code >= 0x0A && code <= 0x1F || code === 0x7F) {
            return true;
        }
    }
    return false;
}
/**
 CHAR           = <any US-ASCII character (octets 0 - 127)>
 token          = 1*<any CHAR except CTLs or separators>
 separators     = "(" | ")" | "<" | ">" | "@"
                | "," | ";" | ":" | "\" | <">
                | "/" | "[" | "]" | "?" | "="
                | "{" | "}" | SP | HT
 * @param {string} name
 */ function validateCookieName(name) {
    for(let i = 0; i < name.length; ++i){
        const code = name.charCodeAt(i);
        if (code < 0x21 || // exclude CTLs (0-31), SP and HT
        code > 0x7E || // exclude non-ascii and DEL
        code === 0x22 || // "
        code === 0x28 || // (
        code === 0x29 || // )
        code === 0x3C || // <
        code === 0x3E || // >
        code === 0x40 || // @
        code === 0x2C || // ,
        code === 0x3B || // ;
        code === 0x3A || // :
        code === 0x5C || // \
        code === 0x2F || // /
        code === 0x5B || // [
        code === 0x5D || // ]
        code === 0x3F || // ?
        code === 0x3D || // =
        code === 0x7B || // {
        code === 0x7D // }
        ) {
            throw new Error('Invalid cookie name');
        }
    }
}
/**
 cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
                       ; US-ASCII characters excluding CTLs,
                       ; whitespace DQUOTE, comma, semicolon,
                       ; and backslash
 * @param {string} value
 */ function validateCookieValue(value) {
    let len = value.length;
    let i = 0;
    // if the value is wrapped in DQUOTE
    if (value[0] === '"') {
        if (len === 1 || value[len - 1] !== '"') {
            throw new Error('Invalid cookie value');
        }
        --len;
        ++i;
    }
    while(i < len){
        const code = value.charCodeAt(i++);
        if (code < 0x21 || // exclude CTLs (0-31)
        code > 0x7E || // non-ascii and DEL (127)
        code === 0x22 || // "
        code === 0x2C || // ,
        code === 0x3B || // ;
        code === 0x5C // \
        ) {
            throw new Error('Invalid cookie value');
        }
    }
}
/**
 * path-value        = <any CHAR except CTLs or ";">
 * @param {string} path
 */ function validateCookiePath(path) {
    for(let i = 0; i < path.length; ++i){
        const code = path.charCodeAt(i);
        if (code < 0x20 || // exclude CTLs (0-31)
        code === 0x7F || // DEL
        code === 0x3B // ;
        ) {
            throw new Error('Invalid cookie path');
        }
    }
}
/**
 * I have no idea why these values aren't allowed to be honest,
 * but Deno tests these. - Khafra
 * @param {string} domain
 */ function validateCookieDomain(domain) {
    if (domain.startsWith('-') || domain.endsWith('.') || domain.endsWith('-')) {
        throw new Error('Invalid cookie domain');
    }
}
const IMFDays = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];
const IMFMonths = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const IMFPaddedNumbers = Array(61).fill(0).map((_, i)=>i.toString().padStart(2, '0'));
/**
 * @see https://www.rfc-editor.org/rfc/rfc7231#section-7.1.1.1
 * @param {number|Date} date
  IMF-fixdate  = day-name "," SP date1 SP time-of-day SP GMT
  ; fixed length/zone/capitalization subset of the format
  ; see Section 3.3 of [RFC5322]

  day-name     = %x4D.6F.6E ; "Mon", case-sensitive
              / %x54.75.65 ; "Tue", case-sensitive
              / %x57.65.64 ; "Wed", case-sensitive
              / %x54.68.75 ; "Thu", case-sensitive
              / %x46.72.69 ; "Fri", case-sensitive
              / %x53.61.74 ; "Sat", case-sensitive
              / %x53.75.6E ; "Sun", case-sensitive
  date1        = day SP month SP year
                  ; e.g., 02 Jun 1982

  day          = 2DIGIT
  month        = %x4A.61.6E ; "Jan", case-sensitive
              / %x46.65.62 ; "Feb", case-sensitive
              / %x4D.61.72 ; "Mar", case-sensitive
              / %x41.70.72 ; "Apr", case-sensitive
              / %x4D.61.79 ; "May", case-sensitive
              / %x4A.75.6E ; "Jun", case-sensitive
              / %x4A.75.6C ; "Jul", case-sensitive
              / %x41.75.67 ; "Aug", case-sensitive
              / %x53.65.70 ; "Sep", case-sensitive
              / %x4F.63.74 ; "Oct", case-sensitive
              / %x4E.6F.76 ; "Nov", case-sensitive
              / %x44.65.63 ; "Dec", case-sensitive
  year         = 4DIGIT

  GMT          = %x47.4D.54 ; "GMT", case-sensitive

  time-of-day  = hour ":" minute ":" second
              ; 00:00:00 - 23:59:60 (leap second)

  hour         = 2DIGIT
  minute       = 2DIGIT
  second       = 2DIGIT
 */ function toIMFDate(date) {
    if (typeof date === 'number') {
        date = new Date(date);
    }
    return `${IMFDays[date.getUTCDay()]}, ${IMFPaddedNumbers[date.getUTCDate()]} ${IMFMonths[date.getUTCMonth()]} ${date.getUTCFullYear()} ${IMFPaddedNumbers[date.getUTCHours()]}:${IMFPaddedNumbers[date.getUTCMinutes()]}:${IMFPaddedNumbers[date.getUTCSeconds()]} GMT`;
}
/**
 max-age-av        = "Max-Age=" non-zero-digit *DIGIT
                       ; In practice, both expires-av and max-age-av
                       ; are limited to dates representable by the
                       ; user agent.
 * @param {number} maxAge
 */ function validateCookieMaxAge(maxAge) {
    if (maxAge < 0) {
        throw new Error('Invalid cookie max-age');
    }
}
/**
 * @see https://www.rfc-editor.org/rfc/rfc6265#section-4.1.1
 * @param {import('./index').Cookie} cookie
 */ function stringify(cookie) {
    if (cookie.name.length === 0) {
        return null;
    }
    validateCookieName(cookie.name);
    validateCookieValue(cookie.value);
    const out = [
        `${cookie.name}=${cookie.value}`
    ];
    // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-prefixes-00#section-3.1
    // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-prefixes-00#section-3.2
    if (cookie.name.startsWith('__Secure-')) {
        cookie.secure = true;
    }
    if (cookie.name.startsWith('__Host-')) {
        cookie.secure = true;
        cookie.domain = null;
        cookie.path = '/';
    }
    if (cookie.secure) {
        out.push('Secure');
    }
    if (cookie.httpOnly) {
        out.push('HttpOnly');
    }
    if (typeof cookie.maxAge === 'number') {
        validateCookieMaxAge(cookie.maxAge);
        out.push(`Max-Age=${cookie.maxAge}`);
    }
    if (cookie.domain) {
        validateCookieDomain(cookie.domain);
        out.push(`Domain=${cookie.domain}`);
    }
    if (cookie.path) {
        validateCookiePath(cookie.path);
        out.push(`Path=${cookie.path}`);
    }
    if (cookie.expires && cookie.expires.toString() !== 'Invalid Date') {
        out.push(`Expires=${toIMFDate(cookie.expires)}`);
    }
    if (cookie.sameSite) {
        out.push(`SameSite=${cookie.sameSite}`);
    }
    for (const part of cookie.unparsed){
        if (!part.includes('=')) {
            throw new Error('Invalid unparsed');
        }
        const [key, ...value] = part.split('=');
        out.push(`${key.trim()}=${value.join('=')}`);
    }
    return out.join('; ');
}
module.exports = {
    isCTLExcludingHtab,
    validateCookieName,
    validateCookiePath,
    validateCookieValue,
    toIMFDate,
    stringify
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/parse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { maxNameValuePairSize, maxAttributeValueSize } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/constants.js [app-rsc] (ecmascript)");
const { isCTLExcludingHtab } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/util.js [app-rsc] (ecmascript)");
const { collectASequenceOfCodePointsFast } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { unescape: qsUnescape } = __turbopack_context__.r("[externals]/node:querystring [external] (node:querystring, cjs)");
/**
 * @description Parses the field-value attributes of a set-cookie header string.
 * @see https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4
 * @param {string} header
 * @returns {import('./index').Cookie|null} if the header is invalid, null will be returned
 */ function parseSetCookie(header) {
    // 1. If the set-cookie-string contains a %x00-08 / %x0A-1F / %x7F
    //    character (CTL characters excluding HTAB): Abort these steps and
    //    ignore the set-cookie-string entirely.
    if (isCTLExcludingHtab(header)) {
        return null;
    }
    let nameValuePair = '';
    let unparsedAttributes = '';
    let name = '';
    let value = '';
    // 2. If the set-cookie-string contains a %x3B (";") character:
    if (header.includes(';')) {
        // 1. The name-value-pair string consists of the characters up to,
        //    but not including, the first %x3B (";"), and the unparsed-
        //    attributes consist of the remainder of the set-cookie-string
        //    (including the %x3B (";") in question).
        const position = {
            position: 0
        };
        nameValuePair = collectASequenceOfCodePointsFast(';', header, position);
        unparsedAttributes = header.slice(position.position);
    } else {
        // Otherwise:
        // 1. The name-value-pair string consists of all the characters
        //    contained in the set-cookie-string, and the unparsed-
        //    attributes is the empty string.
        nameValuePair = header;
    }
    // 3. If the name-value-pair string lacks a %x3D ("=") character, then
    //    the name string is empty, and the value string is the value of
    //    name-value-pair.
    if (!nameValuePair.includes('=')) {
        value = nameValuePair;
    } else {
        //    Otherwise, the name string consists of the characters up to, but
        //    not including, the first %x3D ("=") character, and the (possibly
        //    empty) value string consists of the characters after the first
        //    %x3D ("=") character.
        const position = {
            position: 0
        };
        name = collectASequenceOfCodePointsFast('=', nameValuePair, position);
        value = nameValuePair.slice(position.position + 1);
    }
    // 4. Remove any leading or trailing WSP characters from the name
    //    string and the value string.
    name = name.trim();
    value = value.trim();
    // 5. If the sum of the lengths of the name string and the value string
    //    is more than 4096 octets, abort these steps and ignore the set-
    //    cookie-string entirely.
    if (name.length + value.length > maxNameValuePairSize) {
        return null;
    }
    // 6. The cookie-name is the name string, and the cookie-value is the
    //    value string.
    // https://datatracker.ietf.org/doc/html/rfc6265
    // To maximize compatibility with user agents, servers that wish to
    // store arbitrary data in a cookie-value SHOULD encode that data, for
    // example, using Base64 [RFC4648].
    return {
        name,
        value: qsUnescape(value),
        ...parseUnparsedAttributes(unparsedAttributes)
    };
}
/**
 * Parses the remaining attributes of a set-cookie header
 * @see https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4
 * @param {string} unparsedAttributes
 * @param {Object.<string, unknown>} [cookieAttributeList={}]
 */ function parseUnparsedAttributes(unparsedAttributes, cookieAttributeList = {}) {
    // 1. If the unparsed-attributes string is empty, skip the rest of
    //    these steps.
    if (unparsedAttributes.length === 0) {
        return cookieAttributeList;
    }
    // 2. Discard the first character of the unparsed-attributes (which
    //    will be a %x3B (";") character).
    assert(unparsedAttributes[0] === ';');
    unparsedAttributes = unparsedAttributes.slice(1);
    let cookieAv = '';
    // 3. If the remaining unparsed-attributes contains a %x3B (";")
    //    character:
    if (unparsedAttributes.includes(';')) {
        // 1. Consume the characters of the unparsed-attributes up to, but
        //    not including, the first %x3B (";") character.
        cookieAv = collectASequenceOfCodePointsFast(';', unparsedAttributes, {
            position: 0
        });
        unparsedAttributes = unparsedAttributes.slice(cookieAv.length);
    } else {
        // Otherwise:
        // 1. Consume the remainder of the unparsed-attributes.
        cookieAv = unparsedAttributes;
        unparsedAttributes = '';
    }
    // Let the cookie-av string be the characters consumed in this step.
    let attributeName = '';
    let attributeValue = '';
    // 4. If the cookie-av string contains a %x3D ("=") character:
    if (cookieAv.includes('=')) {
        // 1. The (possibly empty) attribute-name string consists of the
        //    characters up to, but not including, the first %x3D ("=")
        //    character, and the (possibly empty) attribute-value string
        //    consists of the characters after the first %x3D ("=")
        //    character.
        const position = {
            position: 0
        };
        attributeName = collectASequenceOfCodePointsFast('=', cookieAv, position);
        attributeValue = cookieAv.slice(position.position + 1);
    } else {
        // Otherwise:
        // 1. The attribute-name string consists of the entire cookie-av
        //    string, and the attribute-value string is empty.
        attributeName = cookieAv;
    }
    // 5. Remove any leading or trailing WSP characters from the attribute-
    //    name string and the attribute-value string.
    attributeName = attributeName.trim();
    attributeValue = attributeValue.trim();
    // 6. If the attribute-value is longer than 1024 octets, ignore the
    //    cookie-av string and return to Step 1 of this algorithm.
    if (attributeValue.length > maxAttributeValueSize) {
        return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
    }
    // 7. Process the attribute-name and attribute-value according to the
    //    requirements in the following subsections.  (Notice that
    //    attributes with unrecognized attribute-names are ignored.)
    const attributeNameLowercase = attributeName.toLowerCase();
    // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4.1
    // If the attribute-name case-insensitively matches the string
    // "Expires", the user agent MUST process the cookie-av as follows.
    if (attributeNameLowercase === 'expires') {
        // 1. Let the expiry-time be the result of parsing the attribute-value
        //    as cookie-date (see Section 5.1.1).
        const expiryTime = new Date(attributeValue);
        // 2. If the attribute-value failed to parse as a cookie date, ignore
        //    the cookie-av.
        cookieAttributeList.expires = expiryTime;
    } else if (attributeNameLowercase === 'max-age') {
        // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4.2
        // If the attribute-name case-insensitively matches the string "Max-
        // Age", the user agent MUST process the cookie-av as follows.
        // 1. If the first character of the attribute-value is not a DIGIT or a
        //    "-" character, ignore the cookie-av.
        const charCode = attributeValue.charCodeAt(0);
        if ((charCode < 48 || charCode > 57) && attributeValue[0] !== '-') {
            return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
        }
        // 2. If the remainder of attribute-value contains a non-DIGIT
        //    character, ignore the cookie-av.
        if (!/^\d+$/.test(attributeValue)) {
            return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
        }
        // 3. Let delta-seconds be the attribute-value converted to an integer.
        const deltaSeconds = Number(attributeValue);
        // 4. Let cookie-age-limit be the maximum age of the cookie (which
        //    SHOULD be 400 days or less, see Section 4.1.2.2).
        // 5. Set delta-seconds to the smaller of its present value and cookie-
        //    age-limit.
        // deltaSeconds = Math.min(deltaSeconds * 1000, maxExpiresMs)
        // 6. If delta-seconds is less than or equal to zero (0), let expiry-
        //    time be the earliest representable date and time.  Otherwise, let
        //    the expiry-time be the current date and time plus delta-seconds
        //    seconds.
        // const expiryTime = deltaSeconds <= 0 ? Date.now() : Date.now() + deltaSeconds
        // 7. Append an attribute to the cookie-attribute-list with an
        //    attribute-name of Max-Age and an attribute-value of expiry-time.
        cookieAttributeList.maxAge = deltaSeconds;
    } else if (attributeNameLowercase === 'domain') {
        // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4.3
        // If the attribute-name case-insensitively matches the string "Domain",
        // the user agent MUST process the cookie-av as follows.
        // 1. Let cookie-domain be the attribute-value.
        let cookieDomain = attributeValue;
        // 2. If cookie-domain starts with %x2E ("."), let cookie-domain be
        //    cookie-domain without its leading %x2E (".").
        if (cookieDomain[0] === '.') {
            cookieDomain = cookieDomain.slice(1);
        }
        // 3. Convert the cookie-domain to lower case.
        cookieDomain = cookieDomain.toLowerCase();
        // 4. Append an attribute to the cookie-attribute-list with an
        //    attribute-name of Domain and an attribute-value of cookie-domain.
        cookieAttributeList.domain = cookieDomain;
    } else if (attributeNameLowercase === 'path') {
        // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4.4
        // If the attribute-name case-insensitively matches the string "Path",
        // the user agent MUST process the cookie-av as follows.
        // 1. If the attribute-value is empty or if the first character of the
        //    attribute-value is not %x2F ("/"):
        let cookiePath = '';
        if (attributeValue.length === 0 || attributeValue[0] !== '/') {
            // 1. Let cookie-path be the default-path.
            cookiePath = '/';
        } else {
            // Otherwise:
            // 1. Let cookie-path be the attribute-value.
            cookiePath = attributeValue;
        }
        // 2. Append an attribute to the cookie-attribute-list with an
        //    attribute-name of Path and an attribute-value of cookie-path.
        cookieAttributeList.path = cookiePath;
    } else if (attributeNameLowercase === 'secure') {
        // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4.5
        // If the attribute-name case-insensitively matches the string "Secure",
        // the user agent MUST append an attribute to the cookie-attribute-list
        // with an attribute-name of Secure and an empty attribute-value.
        cookieAttributeList.secure = true;
    } else if (attributeNameLowercase === 'httponly') {
        // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4.6
        // If the attribute-name case-insensitively matches the string
        // "HttpOnly", the user agent MUST append an attribute to the cookie-
        // attribute-list with an attribute-name of HttpOnly and an empty
        // attribute-value.
        cookieAttributeList.httpOnly = true;
    } else if (attributeNameLowercase === 'samesite') {
        // https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-rfc6265bis#section-5.4.7
        // If the attribute-name case-insensitively matches the string
        // "SameSite", the user agent MUST process the cookie-av as follows:
        // 1. Let enforcement be "Default".
        let enforcement = 'Default';
        const attributeValueLowercase = attributeValue.toLowerCase();
        // 2. If cookie-av's attribute-value is a case-insensitive match for
        //    "None", set enforcement to "None".
        if (attributeValueLowercase.includes('none')) {
            enforcement = 'None';
        }
        // 3. If cookie-av's attribute-value is a case-insensitive match for
        //    "Strict", set enforcement to "Strict".
        if (attributeValueLowercase.includes('strict')) {
            enforcement = 'Strict';
        }
        // 4. If cookie-av's attribute-value is a case-insensitive match for
        //    "Lax", set enforcement to "Lax".
        if (attributeValueLowercase.includes('lax')) {
            enforcement = 'Lax';
        }
        // 5. Append an attribute to the cookie-attribute-list with an
        //    attribute-name of "SameSite" and an attribute-value of
        //    enforcement.
        cookieAttributeList.sameSite = enforcement;
    } else {
        cookieAttributeList.unparsed ??= [];
        cookieAttributeList.unparsed.push(`${attributeName}=${attributeValue}`);
    }
    // 8. Return to Step 1 of this algorithm.
    return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
}
module.exports = {
    parseSetCookie,
    parseUnparsedAttributes
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { parseSetCookie } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/parse.js [app-rsc] (ecmascript)");
const { stringify } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/util.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { Headers } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/headers.js [app-rsc] (ecmascript)");
const brandChecks = webidl.brandCheckMultiple([
    Headers,
    globalThis.Headers
].filter(Boolean));
/**
 * @typedef {Object} Cookie
 * @property {string} name
 * @property {string} value
 * @property {Date|number} [expires]
 * @property {number} [maxAge]
 * @property {string} [domain]
 * @property {string} [path]
 * @property {boolean} [secure]
 * @property {boolean} [httpOnly]
 * @property {'Strict'|'Lax'|'None'} [sameSite]
 * @property {string[]} [unparsed]
 */ /**
 * @param {Headers} headers
 * @returns {Record<string, string>}
 */ function getCookies(headers) {
    webidl.argumentLengthCheck(arguments, 1, 'getCookies');
    brandChecks(headers);
    const cookie = headers.get('cookie');
    /** @type {Record<string, string>} */ const out = {};
    if (!cookie) {
        return out;
    }
    for (const piece of cookie.split(';')){
        const [name, ...value] = piece.split('=');
        out[name.trim()] = value.join('=');
    }
    return out;
}
/**
 * @param {Headers} headers
 * @param {string} name
 * @param {{ path?: string, domain?: string }|undefined} attributes
 * @returns {void}
 */ function deleteCookie(headers, name, attributes) {
    brandChecks(headers);
    const prefix = 'deleteCookie';
    webidl.argumentLengthCheck(arguments, 2, prefix);
    name = webidl.converters.DOMString(name, prefix, 'name');
    attributes = webidl.converters.DeleteCookieAttributes(attributes);
    // Matches behavior of
    // https://github.com/denoland/deno_std/blob/63827b16330b82489a04614027c33b7904e08be5/http/cookie.ts#L278
    setCookie(headers, {
        name,
        value: '',
        expires: new Date(0),
        ...attributes
    });
}
/**
 * @param {Headers} headers
 * @returns {Cookie[]}
 */ function getSetCookies(headers) {
    webidl.argumentLengthCheck(arguments, 1, 'getSetCookies');
    brandChecks(headers);
    const cookies = headers.getSetCookie();
    if (!cookies) {
        return [];
    }
    return cookies.map((pair)=>parseSetCookie(pair));
}
/**
 * Parses a cookie string
 * @param {string} cookie
 */ function parseCookie(cookie) {
    cookie = webidl.converters.DOMString(cookie);
    return parseSetCookie(cookie);
}
/**
 * @param {Headers} headers
 * @param {Cookie} cookie
 * @returns {void}
 */ function setCookie(headers, cookie) {
    webidl.argumentLengthCheck(arguments, 2, 'setCookie');
    brandChecks(headers);
    cookie = webidl.converters.Cookie(cookie);
    const str = stringify(cookie);
    if (str) {
        headers.append('set-cookie', str, true);
    }
}
webidl.converters.DeleteCookieAttributes = webidl.dictionaryConverter([
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: 'path',
        defaultValue: ()=>null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: 'domain',
        defaultValue: ()=>null
    }
]);
webidl.converters.Cookie = webidl.dictionaryConverter([
    {
        converter: webidl.converters.DOMString,
        key: 'name'
    },
    {
        converter: webidl.converters.DOMString,
        key: 'value'
    },
    {
        converter: webidl.nullableConverter((value)=>{
            if (typeof value === 'number') {
                return webidl.converters['unsigned long long'](value);
            }
            return new Date(value);
        }),
        key: 'expires',
        defaultValue: ()=>null
    },
    {
        converter: webidl.nullableConverter(webidl.converters['long long']),
        key: 'maxAge',
        defaultValue: ()=>null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: 'domain',
        defaultValue: ()=>null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.DOMString),
        key: 'path',
        defaultValue: ()=>null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.boolean),
        key: 'secure',
        defaultValue: ()=>null
    },
    {
        converter: webidl.nullableConverter(webidl.converters.boolean),
        key: 'httpOnly',
        defaultValue: ()=>null
    },
    {
        converter: webidl.converters.USVString,
        key: 'sameSite',
        allowedValues: [
            'Strict',
            'Lax',
            'None'
        ]
    },
    {
        converter: webidl.sequenceConverter(webidl.converters.DOMString),
        key: 'unparsed',
        defaultValue: ()=>[]
    }
]);
module.exports = {
    getCookies,
    deleteCookie,
    getSetCookies,
    setCookie,
    parseCookie
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/events.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
/**
 * @see https://html.spec.whatwg.org/multipage/comms.html#messageevent
 */ class MessageEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict = {}){
        if (type === kConstruct) {
            super(arguments[1], arguments[2]);
            webidl.util.markAsUncloneable(this);
            return;
        }
        const prefix = 'MessageEvent constructor';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        type = webidl.converters.DOMString(type, prefix, 'type');
        eventInitDict = webidl.converters.MessageEventInit(eventInitDict, prefix, 'eventInitDict');
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
        webidl.util.markAsUncloneable(this);
    }
    get data() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.data;
    }
    get origin() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.origin;
    }
    get lastEventId() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.lastEventId;
    }
    get source() {
        webidl.brandCheck(this, MessageEvent);
        return this.#eventInit.source;
    }
    get ports() {
        webidl.brandCheck(this, MessageEvent);
        if (!Object.isFrozen(this.#eventInit.ports)) {
            Object.freeze(this.#eventInit.ports);
        }
        return this.#eventInit.ports;
    }
    initMessageEvent(type, bubbles = false, cancelable = false, data = null, origin = '', lastEventId = '', source = null, ports = []) {
        webidl.brandCheck(this, MessageEvent);
        webidl.argumentLengthCheck(arguments, 1, 'MessageEvent.initMessageEvent');
        return new MessageEvent(type, {
            bubbles,
            cancelable,
            data,
            origin,
            lastEventId,
            source,
            ports
        });
    }
    static createFastMessageEvent(type, init) {
        const messageEvent = new MessageEvent(kConstruct, type, init);
        messageEvent.#eventInit = init;
        messageEvent.#eventInit.data ??= null;
        messageEvent.#eventInit.origin ??= '';
        messageEvent.#eventInit.lastEventId ??= '';
        messageEvent.#eventInit.source ??= null;
        messageEvent.#eventInit.ports ??= [];
        return messageEvent;
    }
}
const { createFastMessageEvent } = MessageEvent;
delete MessageEvent.createFastMessageEvent;
/**
 * @see https://websockets.spec.whatwg.org/#the-closeevent-interface
 */ class CloseEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict = {}){
        const prefix = 'CloseEvent constructor';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        type = webidl.converters.DOMString(type, prefix, 'type');
        eventInitDict = webidl.converters.CloseEventInit(eventInitDict);
        super(type, eventInitDict);
        this.#eventInit = eventInitDict;
        webidl.util.markAsUncloneable(this);
    }
    get wasClean() {
        webidl.brandCheck(this, CloseEvent);
        return this.#eventInit.wasClean;
    }
    get code() {
        webidl.brandCheck(this, CloseEvent);
        return this.#eventInit.code;
    }
    get reason() {
        webidl.brandCheck(this, CloseEvent);
        return this.#eventInit.reason;
    }
}
// https://html.spec.whatwg.org/multipage/webappapis.html#the-errorevent-interface
class ErrorEvent extends Event {
    #eventInit;
    constructor(type, eventInitDict){
        const prefix = 'ErrorEvent constructor';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        super(type, eventInitDict);
        webidl.util.markAsUncloneable(this);
        type = webidl.converters.DOMString(type, prefix, 'type');
        eventInitDict = webidl.converters.ErrorEventInit(eventInitDict ?? {});
        this.#eventInit = eventInitDict;
    }
    get message() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.message;
    }
    get filename() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.filename;
    }
    get lineno() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.lineno;
    }
    get colno() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.colno;
    }
    get error() {
        webidl.brandCheck(this, ErrorEvent);
        return this.#eventInit.error;
    }
}
Object.defineProperties(MessageEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'MessageEvent',
        configurable: true
    },
    data: kEnumerableProperty,
    origin: kEnumerableProperty,
    lastEventId: kEnumerableProperty,
    source: kEnumerableProperty,
    ports: kEnumerableProperty,
    initMessageEvent: kEnumerableProperty
});
Object.defineProperties(CloseEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'CloseEvent',
        configurable: true
    },
    reason: kEnumerableProperty,
    code: kEnumerableProperty,
    wasClean: kEnumerableProperty
});
Object.defineProperties(ErrorEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'ErrorEvent',
        configurable: true
    },
    message: kEnumerableProperty,
    filename: kEnumerableProperty,
    lineno: kEnumerableProperty,
    colno: kEnumerableProperty,
    error: kEnumerableProperty
});
webidl.converters.MessagePort = webidl.interfaceConverter(webidl.is.MessagePort, 'MessagePort');
webidl.converters['sequence<MessagePort>'] = webidl.sequenceConverter(webidl.converters.MessagePort);
const eventInit = [
    {
        key: 'bubbles',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    },
    {
        key: 'cancelable',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    },
    {
        key: 'composed',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    }
];
webidl.converters.MessageEventInit = webidl.dictionaryConverter([
    ...eventInit,
    {
        key: 'data',
        converter: webidl.converters.any,
        defaultValue: ()=>null
    },
    {
        key: 'origin',
        converter: webidl.converters.USVString,
        defaultValue: ()=>''
    },
    {
        key: 'lastEventId',
        converter: webidl.converters.DOMString,
        defaultValue: ()=>''
    },
    {
        key: 'source',
        // Node doesn't implement WindowProxy or ServiceWorker, so the only
        // valid value for source is a MessagePort.
        converter: webidl.nullableConverter(webidl.converters.MessagePort),
        defaultValue: ()=>null
    },
    {
        key: 'ports',
        converter: webidl.converters['sequence<MessagePort>'],
        defaultValue: ()=>[]
    }
]);
webidl.converters.CloseEventInit = webidl.dictionaryConverter([
    ...eventInit,
    {
        key: 'wasClean',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    },
    {
        key: 'code',
        converter: webidl.converters['unsigned short'],
        defaultValue: ()=>0
    },
    {
        key: 'reason',
        converter: webidl.converters.USVString,
        defaultValue: ()=>''
    }
]);
webidl.converters.ErrorEventInit = webidl.dictionaryConverter([
    ...eventInit,
    {
        key: 'message',
        converter: webidl.converters.DOMString,
        defaultValue: ()=>''
    },
    {
        key: 'filename',
        converter: webidl.converters.USVString,
        defaultValue: ()=>''
    },
    {
        key: 'lineno',
        converter: webidl.converters['unsigned long'],
        defaultValue: ()=>0
    },
    {
        key: 'colno',
        converter: webidl.converters['unsigned long'],
        defaultValue: ()=>0
    },
    {
        key: 'error',
        converter: webidl.converters.any
    }
]);
module.exports = {
    MessageEvent,
    CloseEvent,
    ErrorEvent,
    createFastMessageEvent
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This is a Globally Unique Identifier unique used to validate that the
 * endpoint accepts websocket connections.
 * @see https://www.rfc-editor.org/rfc/rfc6455.html#section-1.3
 * @type {'258EAFA5-E914-47DA-95CA-C5AB0DC85B11'}
 */ const uid = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
/**
 * @type {PropertyDescriptor}
 */ const staticPropertyDescriptors = {
    enumerable: true,
    writable: false,
    configurable: false
};
/**
 * The states of the WebSocket connection.
 *
 * @readonly
 * @enum
 * @property {0} CONNECTING
 * @property {1} OPEN
 * @property {2} CLOSING
 * @property {3} CLOSED
 */ const states = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
};
/**
 * @readonly
 * @enum
 * @property {0} NOT_SENT
 * @property {1} PROCESSING
 * @property {2} SENT
 */ const sentCloseFrameState = {
    SENT: 1,
    RECEIVED: 2
};
/**
 * The WebSocket opcodes.
 *
 * @readonly
 * @enum
 * @property {0x0} CONTINUATION
 * @property {0x1} TEXT
 * @property {0x2} BINARY
 * @property {0x8} CLOSE
 * @property {0x9} PING
 * @property {0xA} PONG
 * @see https://datatracker.ietf.org/doc/html/rfc6455#section-5.2
 */ const opcodes = {
    CONTINUATION: 0x0,
    TEXT: 0x1,
    BINARY: 0x2,
    CLOSE: 0x8,
    PING: 0x9,
    PONG: 0xA
};
/**
 * The maximum value for an unsigned 16-bit integer.
 *
 * @type {65535} 2 ** 16 - 1
 */ const maxUnsigned16Bit = 65535;
/**
 * The states of the parser.
 *
 * @readonly
 * @enum
 * @property {0} INFO
 * @property {2} PAYLOADLENGTH_16
 * @property {3} PAYLOADLENGTH_64
 * @property {4} READ_DATA
 */ const parserStates = {
    INFO: 0,
    PAYLOADLENGTH_16: 2,
    PAYLOADLENGTH_64: 3,
    READ_DATA: 4
};
/**
 * An empty buffer.
 *
 * @type {Buffer}
 */ const emptyBuffer = Buffer.allocUnsafe(0);
/**
 * @readonly
 * @property {1} text
 * @property {2} typedArray
 * @property {3} arrayBuffer
 * @property {4} blob
 */ const sendHints = {
    text: 1,
    typedArray: 2,
    arrayBuffer: 3,
    blob: 4
};
module.exports = {
    uid,
    sentCloseFrameState,
    staticPropertyDescriptors,
    states,
    opcodes,
    maxUnsigned16Bit,
    parserStates,
    emptyBuffer,
    sendHints
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { states, opcodes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)");
const { isUtf8 } = __turbopack_context__.r("[externals]/node:buffer [external] (node:buffer, cjs)");
const { collectASequenceOfCodePointsFast, removeHTTPWhitespace } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
/**
 * @param {number} readyState
 * @returns {boolean}
 */ function isConnecting(readyState) {
    // If the WebSocket connection is not yet established, and the connection
    // is not yet closed, then the WebSocket connection is in the CONNECTING state.
    return readyState === states.CONNECTING;
}
/**
 * @param {number} readyState
 * @returns {boolean}
 */ function isEstablished(readyState) {
    // If the server's response is validated as provided for above, it is
    // said that _The WebSocket Connection is Established_ and that the
    // WebSocket Connection is in the OPEN state.
    return readyState === states.OPEN;
}
/**
 * @param {number} readyState
 * @returns {boolean}
 */ function isClosing(readyState) {
    // Upon either sending or receiving a Close control frame, it is said
    // that _The WebSocket Closing Handshake is Started_ and that the
    // WebSocket connection is in the CLOSING state.
    return readyState === states.CLOSING;
}
/**
 * @param {number} readyState
 * @returns {boolean}
 */ function isClosed(readyState) {
    return readyState === states.CLOSED;
}
/**
 * @see https://dom.spec.whatwg.org/#concept-event-fire
 * @param {string} e
 * @param {EventTarget} target
 * @param {(...args: ConstructorParameters<typeof Event>) => Event} eventFactory
 * @param {EventInit | undefined} eventInitDict
 * @returns {void}
 */ function fireEvent(e, target, eventFactory = (type, init)=>new Event(type, init), eventInitDict = {}) {
    // 1. If eventConstructor is not given, then let eventConstructor be Event.
    // 2. Let event be the result of creating an event given eventConstructor,
    //    in the relevant realm of target.
    // 3. Initialize event’s type attribute to e.
    const event = eventFactory(e, eventInitDict);
    // 4. Initialize any other IDL attributes of event as described in the
    //    invocation of this algorithm.
    // 5. Return the result of dispatching event at target, with legacy target
    //    override flag set if set.
    target.dispatchEvent(event);
}
/**
 * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
 * @param {import('./websocket').Handler} handler
 * @param {number} type Opcode
 * @param {Buffer} data application data
 * @returns {void}
 */ function websocketMessageReceived(handler, type, data) {
    handler.onMessage(type, data);
}
/**
 * @param {Buffer} buffer
 * @returns {ArrayBuffer}
 */ function toArrayBuffer(buffer) {
    if (buffer.byteLength === buffer.buffer.byteLength) {
        return buffer.buffer;
    }
    return new Uint8Array(buffer).buffer;
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455
 * @see https://datatracker.ietf.org/doc/html/rfc2616
 * @see https://bugs.chromium.org/p/chromium/issues/detail?id=398407
 * @param {string} protocol
 * @returns {boolean}
 */ function isValidSubprotocol(protocol) {
    // If present, this value indicates one
    // or more comma-separated subprotocol the client wishes to speak,
    // ordered by preference.  The elements that comprise this value
    // MUST be non-empty strings with characters in the range U+0021 to
    // U+007E not including separator characters as defined in
    // [RFC2616] and MUST all be unique strings.
    if (protocol.length === 0) {
        return false;
    }
    for(let i = 0; i < protocol.length; ++i){
        const code = protocol.charCodeAt(i);
        if (code < 0x21 || // CTL, contains SP (0x20) and HT (0x09)
        code > 0x7E || code === 0x22 || // "
        code === 0x28 || // (
        code === 0x29 || // )
        code === 0x2C || // ,
        code === 0x2F || // /
        code === 0x3A || // :
        code === 0x3B || // ;
        code === 0x3C || // <
        code === 0x3D || // =
        code === 0x3E || // >
        code === 0x3F || // ?
        code === 0x40 || // @
        code === 0x5B || // [
        code === 0x5C || // \
        code === 0x5D || // ]
        code === 0x7B || // {
        code === 0x7D // }
        ) {
            return false;
        }
    }
    return true;
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455#section-7-4
 * @param {number} code
 * @returns {boolean}
 */ function isValidStatusCode(code) {
    if (code >= 1000 && code < 1015) {
        return code !== 1004 && // reserved
        code !== 1005 && // "MUST NOT be set as a status code"
        code !== 1006 // "MUST NOT be set as a status code"
        ;
    }
    return code >= 3000 && code <= 4999;
}
/**
 * @see https://datatracker.ietf.org/doc/html/rfc6455#section-5.5
 * @param {number} opcode
 * @returns {boolean}
 */ function isControlFrame(opcode) {
    return opcode === opcodes.CLOSE || opcode === opcodes.PING || opcode === opcodes.PONG;
}
/**
 * @param {number} opcode
 * @returns {boolean}
 */ function isContinuationFrame(opcode) {
    return opcode === opcodes.CONTINUATION;
}
/**
 * @param {number} opcode
 * @returns {boolean}
 */ function isTextBinaryFrame(opcode) {
    return opcode === opcodes.TEXT || opcode === opcodes.BINARY;
}
/**
 *
 * @param {number} opcode
 * @returns {boolean}
 */ function isValidOpcode(opcode) {
    return isTextBinaryFrame(opcode) || isContinuationFrame(opcode) || isControlFrame(opcode);
}
/**
 * Parses a Sec-WebSocket-Extensions header value.
 * @param {string} extensions
 * @returns {Map<string, string>}
 */ // TODO(@Uzlopak, @KhafraDev): make compliant https://datatracker.ietf.org/doc/html/rfc6455#section-9.1
function parseExtensions(extensions) {
    const position = {
        position: 0
    };
    const extensionList = new Map();
    while(position.position < extensions.length){
        const pair = collectASequenceOfCodePointsFast(';', extensions, position);
        const [name, value = ''] = pair.split('=', 2);
        extensionList.set(removeHTTPWhitespace(name, true, false), removeHTTPWhitespace(value, false, true));
        position.position++;
    }
    return extensionList;
}
/**
 * @see https://www.rfc-editor.org/rfc/rfc7692#section-7.1.2.2
 * @description "client-max-window-bits = 1*DIGIT"
 * @param {string} value
 * @returns {boolean}
 */ function isValidClientWindowBits(value) {
    for(let i = 0; i < value.length; i++){
        const byte = value.charCodeAt(i);
        if (byte < 0x30 || byte > 0x39) {
            return false;
        }
    }
    return true;
}
/**
 * @see https://whatpr.org/websockets/48/7b748d3...d5570f3.html#get-a-url-record
 * @param {string} url
 * @param {string} [baseURL]
 */ function getURLRecord(url, baseURL) {
    // 1. Let urlRecord be the result of applying the URL parser to url with baseURL .
    // 2. If urlRecord is failure, then throw a " SyntaxError " DOMException .
    let urlRecord;
    try {
        urlRecord = new URL(url, baseURL);
    } catch (e) {
        throw new DOMException(e, 'SyntaxError');
    }
    // 3. If urlRecord ’s scheme is " http ", then set urlRecord ’s scheme to " ws ".
    // 4. Otherwise, if urlRecord ’s scheme is " https ", set urlRecord ’s scheme to " wss ".
    if (urlRecord.protocol === 'http:') {
        urlRecord.protocol = 'ws:';
    } else if (urlRecord.protocol === 'https:') {
        urlRecord.protocol = 'wss:';
    }
    // 5. If urlRecord ’s scheme is not " ws " or " wss ", then throw a " SyntaxError " DOMException .
    if (urlRecord.protocol !== 'ws:' && urlRecord.protocol !== 'wss:') {
        throw new DOMException('expected a ws: or wss: url', 'SyntaxError');
    }
    // If urlRecord ’s fragment is non-null, then throw a " SyntaxError " DOMException .
    if (urlRecord.hash.length || urlRecord.href.endsWith('#')) {
        throw new DOMException('hash', 'SyntaxError');
    }
    // Return urlRecord .
    return urlRecord;
}
// https://whatpr.org/websockets/48.html#validate-close-code-and-reason
function validateCloseCodeAndReason(code, reason) {
    // 1. If code is not null, but is neither an integer equal to
    //    1000 nor an integer in the range 3000 to 4999, inclusive,
    //    throw an "InvalidAccessError" DOMException.
    if (code !== null) {
        if (code !== 1000 && (code < 3000 || code > 4999)) {
            throw new DOMException('invalid code', 'InvalidAccessError');
        }
    }
    // 2. If reason is not null, then:
    if (reason !== null) {
        // 2.1. Let reasonBytes be the result of UTF-8 encoding reason.
        // 2.2. If reasonBytes is longer than 123 bytes, then throw a
        //      "SyntaxError" DOMException.
        const reasonBytesLength = Buffer.byteLength(reason);
        if (reasonBytesLength > 123) {
            throw new DOMException(`Reason must be less than 123 bytes; received ${reasonBytesLength}`, 'SyntaxError');
        }
    }
}
/**
 * Converts a Buffer to utf-8, even on platforms without icu.
 * @type {(buffer: Buffer) => string}
 */ const utf8Decode = (()=>{
    if (typeof process.versions.icu === 'string') {
        const fatalDecoder = new TextDecoder('utf-8', {
            fatal: true
        });
        return fatalDecoder.decode.bind(fatalDecoder);
    }
    return function(buffer) {
        if (isUtf8(buffer)) {
            return buffer.toString('utf-8');
        }
        throw new TypeError('Invalid utf-8 received.');
    };
})();
module.exports = {
    isConnecting,
    isEstablished,
    isClosing,
    isClosed,
    fireEvent,
    isValidSubprotocol,
    isValidStatusCode,
    websocketMessageReceived,
    utf8Decode,
    isControlFrame,
    isContinuationFrame,
    isTextBinaryFrame,
    isValidOpcode,
    parseExtensions,
    isValidClientWindowBits,
    toArrayBuffer,
    getURLRecord,
    validateCloseCodeAndReason
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/frame.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { maxUnsigned16Bit, opcodes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)");
const BUFFER_SIZE = 8 * 1024;
/** @type {import('crypto')} */ let crypto;
let buffer = null;
let bufIdx = BUFFER_SIZE;
try {
    crypto = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
/* c8 ignore next 3 */ } catch  {
    crypto = {
        // not full compatibility, but minimum.
        randomFillSync: function randomFillSync(buffer, _offset, _size) {
            for(let i = 0; i < buffer.length; ++i){
                buffer[i] = Math.random() * 255 | 0;
            }
            return buffer;
        }
    };
}
function generateMask() {
    if (bufIdx === BUFFER_SIZE) {
        bufIdx = 0;
        crypto.randomFillSync(buffer ??= Buffer.allocUnsafeSlow(BUFFER_SIZE), 0, BUFFER_SIZE);
    }
    return [
        buffer[bufIdx++],
        buffer[bufIdx++],
        buffer[bufIdx++],
        buffer[bufIdx++]
    ];
}
class WebsocketFrameSend {
    /**
   * @param {Buffer|undefined} data
   */ constructor(data){
        this.frameData = data;
    }
    createFrame(opcode) {
        const frameData = this.frameData;
        const maskKey = generateMask();
        const bodyLength = frameData?.byteLength ?? 0;
        /** @type {number} */ let payloadLength = bodyLength // 0-125
        ;
        let offset = 6;
        if (bodyLength > maxUnsigned16Bit) {
            offset += 8; // payload length is next 8 bytes
            payloadLength = 127;
        } else if (bodyLength > 125) {
            offset += 2; // payload length is next 2 bytes
            payloadLength = 126;
        }
        const buffer = Buffer.allocUnsafe(bodyLength + offset);
        // Clear first 2 bytes, everything else is overwritten
        buffer[0] = buffer[1] = 0;
        buffer[0] |= 0x80; // FIN
        buffer[0] = (buffer[0] & 0xF0) + opcode; // opcode
        /*! ws. MIT License. Einar Otto Stangvik <einaros@gmail.com> */ buffer[offset - 4] = maskKey[0];
        buffer[offset - 3] = maskKey[1];
        buffer[offset - 2] = maskKey[2];
        buffer[offset - 1] = maskKey[3];
        buffer[1] = payloadLength;
        if (payloadLength === 126) {
            buffer.writeUInt16BE(bodyLength, 2);
        } else if (payloadLength === 127) {
            // Clear extended payload length
            buffer[2] = buffer[3] = 0;
            buffer.writeUIntBE(bodyLength, 4, 6);
        }
        buffer[1] |= 0x80; // MASK
        // mask body
        for(let i = 0; i < bodyLength; ++i){
            buffer[offset + i] = frameData[i] ^ maskKey[i & 3];
        }
        return buffer;
    }
    /**
   * @param {Uint8Array} buffer
   */ static createFastTextFrame(buffer) {
        const maskKey = generateMask();
        const bodyLength = buffer.length;
        // mask body
        for(let i = 0; i < bodyLength; ++i){
            buffer[i] ^= maskKey[i & 3];
        }
        let payloadLength = bodyLength;
        let offset = 6;
        if (bodyLength > maxUnsigned16Bit) {
            offset += 8; // payload length is next 8 bytes
            payloadLength = 127;
        } else if (bodyLength > 125) {
            offset += 2; // payload length is next 2 bytes
            payloadLength = 126;
        }
        const head = Buffer.allocUnsafeSlow(offset);
        head[0] = 0x80 /* FIN */  | opcodes.TEXT; /* opcode TEXT */ 
        head[1] = payloadLength | 0x80; /* MASK */ 
        head[offset - 4] = maskKey[0];
        head[offset - 3] = maskKey[1];
        head[offset - 2] = maskKey[2];
        head[offset - 1] = maskKey[3];
        if (payloadLength === 126) {
            head.writeUInt16BE(bodyLength, 2);
        } else if (payloadLength === 127) {
            head[2] = head[3] = 0;
            head.writeUIntBE(bodyLength, 4, 6);
        }
        return [
            head,
            buffer
        ];
    }
}
module.exports = {
    WebsocketFrameSend,
    generateMask
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/connection.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { uid, states, sentCloseFrameState, emptyBuffer, opcodes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)");
const { parseExtensions, isClosed, isClosing, isEstablished, validateCloseCodeAndReason } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/util.js [app-rsc] (ecmascript)");
const { makeRequest } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/request.js [app-rsc] (ecmascript)");
const { fetching } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/index.js [app-rsc] (ecmascript)");
const { Headers, getHeadersList } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/headers.js [app-rsc] (ecmascript)");
const { getDecodeSplit } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { WebsocketFrameSend } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/frame.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
/** @type {import('crypto')} */ let crypto;
try {
    crypto = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
/* c8 ignore next 3 */ } catch  {}
/**
 * @see https://websockets.spec.whatwg.org/#concept-websocket-establish
 * @param {URL} url
 * @param {string|string[]} protocols
 * @param {import('./websocket').Handler} handler
 * @param {Partial<import('../../../types/websocket').WebSocketInit>} options
 */ function establishWebSocketConnection(url, protocols, client, handler, options) {
    // 1. Let requestURL be a copy of url, with its scheme set to "http", if url’s
    //    scheme is "ws", and to "https" otherwise.
    const requestURL = url;
    requestURL.protocol = url.protocol === 'ws:' ? 'http:' : 'https:';
    // 2. Let request be a new request, whose URL is requestURL, client is client,
    //    service-workers mode is "none", referrer is "no-referrer", mode is
    //    "websocket", credentials mode is "include", cache mode is "no-store" ,
    //    and redirect mode is "error".
    const request = makeRequest({
        urlList: [
            requestURL
        ],
        client,
        serviceWorkers: 'none',
        referrer: 'no-referrer',
        mode: 'websocket',
        credentials: 'include',
        cache: 'no-store',
        redirect: 'error'
    });
    // Note: undici extension, allow setting custom headers.
    if (options.headers) {
        const headersList = getHeadersList(new Headers(options.headers));
        request.headersList = headersList;
    }
    // 3. Append (`Upgrade`, `websocket`) to request’s header list.
    // 4. Append (`Connection`, `Upgrade`) to request’s header list.
    // Note: both of these are handled by undici currently.
    // https://github.com/nodejs/undici/blob/68c269c4144c446f3f1220951338daef4a6b5ec4/lib/client.js#L1397
    // 5. Let keyValue be a nonce consisting of a randomly selected
    //    16-byte value that has been forgiving-base64-encoded and
    //    isomorphic encoded.
    const keyValue = crypto.randomBytes(16).toString('base64');
    // 6. Append (`Sec-WebSocket-Key`, keyValue) to request’s
    //    header list.
    request.headersList.append('sec-websocket-key', keyValue, true);
    // 7. Append (`Sec-WebSocket-Version`, `13`) to request’s
    //    header list.
    request.headersList.append('sec-websocket-version', '13', true);
    // 8. For each protocol in protocols, combine
    //    (`Sec-WebSocket-Protocol`, protocol) in request’s header
    //    list.
    for (const protocol of protocols){
        request.headersList.append('sec-websocket-protocol', protocol, true);
    }
    // 9. Let permessageDeflate be a user-agent defined
    //    "permessage-deflate" extension header value.
    // https://github.com/mozilla/gecko-dev/blob/ce78234f5e653a5d3916813ff990f053510227bc/netwerk/protocol/websocket/WebSocketChannel.cpp#L2673
    const permessageDeflate = 'permessage-deflate; client_max_window_bits';
    // 10. Append (`Sec-WebSocket-Extensions`, permessageDeflate) to
    //     request’s header list.
    request.headersList.append('sec-websocket-extensions', permessageDeflate, true);
    // 11. Fetch request with useParallelQueue set to true, and
    //     processResponse given response being these steps:
    const controller = fetching({
        request,
        useParallelQueue: true,
        dispatcher: options.dispatcher,
        processResponse (response) {
            if (response.type === 'error') {
                // If the WebSocket connection could not be established, it is also said
                // that _The WebSocket Connection is Closed_, but not _cleanly_.
                handler.readyState = states.CLOSED;
            }
            // 1. If response is a network error or its status is not 101,
            //    fail the WebSocket connection.
            if (response.type === 'error' || response.status !== 101) {
                failWebsocketConnection(handler, 1002, 'Received network error or non-101 status code.', response.error);
                return;
            }
            // 2. If protocols is not the empty list and extracting header
            //    list values given `Sec-WebSocket-Protocol` and response’s
            //    header list results in null, failure, or the empty byte
            //    sequence, then fail the WebSocket connection.
            if (protocols.length !== 0 && !response.headersList.get('Sec-WebSocket-Protocol')) {
                failWebsocketConnection(handler, 1002, 'Server did not respond with sent protocols.');
                return;
            }
            // 3. Follow the requirements stated step 2 to step 6, inclusive,
            //    of the last set of steps in section 4.1 of The WebSocket
            //    Protocol to validate response. This either results in fail
            //    the WebSocket connection or the WebSocket connection is
            //    established.
            // 2. If the response lacks an |Upgrade| header field or the |Upgrade|
            //    header field contains a value that is not an ASCII case-
            //    insensitive match for the value "websocket", the client MUST
            //    _Fail the WebSocket Connection_.
            if (response.headersList.get('Upgrade')?.toLowerCase() !== 'websocket') {
                failWebsocketConnection(handler, 1002, 'Server did not set Upgrade header to "websocket".');
                return;
            }
            // 3. If the response lacks a |Connection| header field or the
            //    |Connection| header field doesn't contain a token that is an
            //    ASCII case-insensitive match for the value "Upgrade", the client
            //    MUST _Fail the WebSocket Connection_.
            if (response.headersList.get('Connection')?.toLowerCase() !== 'upgrade') {
                failWebsocketConnection(handler, 1002, 'Server did not set Connection header to "upgrade".');
                return;
            }
            // 4. If the response lacks a |Sec-WebSocket-Accept| header field or
            //    the |Sec-WebSocket-Accept| contains a value other than the
            //    base64-encoded SHA-1 of the concatenation of the |Sec-WebSocket-
            //    Key| (as a string, not base64-decoded) with the string "258EAFA5-
            //    E914-47DA-95CA-C5AB0DC85B11" but ignoring any leading and
            //    trailing whitespace, the client MUST _Fail the WebSocket
            //    Connection_.
            const secWSAccept = response.headersList.get('Sec-WebSocket-Accept');
            const digest = crypto.createHash('sha1').update(keyValue + uid).digest('base64');
            if (secWSAccept !== digest) {
                failWebsocketConnection(handler, 1002, 'Incorrect hash received in Sec-WebSocket-Accept header.');
                return;
            }
            // 5. If the response includes a |Sec-WebSocket-Extensions| header
            //    field and this header field indicates the use of an extension
            //    that was not present in the client's handshake (the server has
            //    indicated an extension not requested by the client), the client
            //    MUST _Fail the WebSocket Connection_.  (The parsing of this
            //    header field to determine which extensions are requested is
            //    discussed in Section 9.1.)
            const secExtension = response.headersList.get('Sec-WebSocket-Extensions');
            let extensions;
            if (secExtension !== null) {
                extensions = parseExtensions(secExtension);
                if (!extensions.has('permessage-deflate')) {
                    failWebsocketConnection(handler, 1002, 'Sec-WebSocket-Extensions header does not match.');
                    return;
                }
            }
            // 6. If the response includes a |Sec-WebSocket-Protocol| header field
            //    and this header field indicates the use of a subprotocol that was
            //    not present in the client's handshake (the server has indicated a
            //    subprotocol not requested by the client), the client MUST _Fail
            //    the WebSocket Connection_.
            const secProtocol = response.headersList.get('Sec-WebSocket-Protocol');
            if (secProtocol !== null) {
                const requestProtocols = getDecodeSplit('sec-websocket-protocol', request.headersList);
                // The client can request that the server use a specific subprotocol by
                // including the |Sec-WebSocket-Protocol| field in its handshake.  If it
                // is specified, the server needs to include the same field and one of
                // the selected subprotocol values in its response for the connection to
                // be established.
                if (!requestProtocols.includes(secProtocol)) {
                    failWebsocketConnection(handler, 1002, 'Protocol was not set in the opening handshake.');
                    return;
                }
            }
            response.socket.on('data', handler.onSocketData);
            response.socket.on('close', handler.onSocketClose);
            response.socket.on('error', handler.onSocketError);
            handler.wasEverConnected = true;
            handler.onConnectionEstablished(response, extensions);
        }
    });
    return controller;
}
/**
 * @see https://whatpr.org/websockets/48.html#close-the-websocket
 * @param {import('./websocket').Handler} object
 * @param {number} [code=null]
 * @param {string} [reason='']
 */ function closeWebSocketConnection(object, code, reason, validate = false) {
    // 1. If code was not supplied, let code be null.
    code ??= null;
    // 2. If reason was not supplied, let reason be the empty string.
    reason ??= '';
    // 3. Validate close code and reason with code and reason.
    if (validate) validateCloseCodeAndReason(code, reason);
    // 4. Run the first matching steps from the following list:
    //     - If object’s ready state is CLOSING (2) or CLOSED (3)
    //     - If the WebSocket connection is not yet established [WSP]
    //     - If the WebSocket closing handshake has not yet been started [WSP]
    //     - Otherwise
    if (isClosed(object.readyState) || isClosing(object.readyState)) {
    // Do nothing.
    } else if (!isEstablished(object.readyState)) {
        // Fail the WebSocket connection and set object’s ready state to CLOSING (2). [WSP]
        failWebsocketConnection(object);
        object.readyState = states.CLOSING;
    } else if (!object.closeState.has(sentCloseFrameState.SENT) && !object.closeState.has(sentCloseFrameState.RECEIVED)) {
        // Upon either sending or receiving a Close control frame, it is said
        // that _The WebSocket Closing Handshake is Started_ and that the
        // WebSocket connection is in the CLOSING state.
        const frame = new WebsocketFrameSend();
        // If neither code nor reason is present, the WebSocket Close
        // message must not have a body.
        // If code is present, then the status code to use in the
        // WebSocket Close message must be the integer given by code.
        // If code is null and reason is the empty string, the WebSocket Close frame must not have a body.
        // If reason is non-empty but code is null, then set code to 1000 ("Normal Closure").
        if (reason.length !== 0 && code === null) {
            code = 1000;
        }
        // If code is set, then the status code to use in the WebSocket Close frame must be the integer given by code.
        assert(code === null || Number.isInteger(code));
        if (code === null && reason.length === 0) {
            frame.frameData = emptyBuffer;
        } else if (code !== null && reason === null) {
            frame.frameData = Buffer.allocUnsafe(2);
            frame.frameData.writeUInt16BE(code, 0);
        } else if (code !== null && reason !== null) {
            // If reason is also present, then reasonBytes must be
            // provided in the Close message after the status code.
            frame.frameData = Buffer.allocUnsafe(2 + Buffer.byteLength(reason));
            frame.frameData.writeUInt16BE(code, 0);
            // the body MAY contain UTF-8-encoded data with value /reason/
            frame.frameData.write(reason, 2, 'utf-8');
        } else {
            frame.frameData = emptyBuffer;
        }
        object.socket.write(frame.createFrame(opcodes.CLOSE));
        object.closeState.add(sentCloseFrameState.SENT);
        // Upon either sending or receiving a Close control frame, it is said
        // that _The WebSocket Closing Handshake is Started_ and that the
        // WebSocket connection is in the CLOSING state.
        object.readyState = states.CLOSING;
    } else {
        // Set object’s ready state to CLOSING (2).
        object.readyState = states.CLOSING;
    }
}
/**
 * @param {import('./websocket').Handler} handler
 * @param {number} code
 * @param {string|undefined} reason
 * @param {unknown} cause
 * @returns {void}
 */ function failWebsocketConnection(handler, code, reason, cause) {
    // If _The WebSocket Connection is Established_ prior to the point where
    // the endpoint is required to _Fail the WebSocket Connection_, the
    // endpoint SHOULD send a Close frame with an appropriate status code
    // (Section 7.4) before proceeding to _Close the WebSocket Connection_.
    if (isEstablished(handler.readyState)) {
        closeWebSocketConnection(handler, code, reason, false);
    }
    handler.controller.abort();
    if (!handler.socket) {
        // If the connection was not established, we must still emit an 'error' and 'close' events
        handler.onSocketClose();
    } else if (handler.socket.destroyed === false) {
        handler.socket.destroy();
    }
}
module.exports = {
    establishWebSocketConnection,
    failWebsocketConnection,
    closeWebSocketConnection
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/permessage-deflate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createInflateRaw, Z_DEFAULT_WINDOWBITS } = __turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)");
const { isValidClientWindowBits } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/util.js [app-rsc] (ecmascript)");
const tail = Buffer.from([
    0x00,
    0x00,
    0xff,
    0xff
]);
const kBuffer = Symbol('kBuffer');
const kLength = Symbol('kLength');
class PerMessageDeflate {
    /** @type {import('node:zlib').InflateRaw} */ #inflate;
    #options = {};
    constructor(extensions){
        this.#options.serverNoContextTakeover = extensions.has('server_no_context_takeover');
        this.#options.serverMaxWindowBits = extensions.get('server_max_window_bits');
    }
    decompress(chunk, fin, callback) {
        // An endpoint uses the following algorithm to decompress a message.
        // 1.  Append 4 octets of 0x00 0x00 0xff 0xff to the tail end of the
        //     payload of the message.
        // 2.  Decompress the resulting data using DEFLATE.
        if (!this.#inflate) {
            let windowBits = Z_DEFAULT_WINDOWBITS;
            if (this.#options.serverMaxWindowBits) {
                if (!isValidClientWindowBits(this.#options.serverMaxWindowBits)) {
                    callback(new Error('Invalid server_max_window_bits'));
                    return;
                }
                windowBits = Number.parseInt(this.#options.serverMaxWindowBits);
            }
            this.#inflate = createInflateRaw({
                windowBits
            });
            this.#inflate[kBuffer] = [];
            this.#inflate[kLength] = 0;
            this.#inflate.on('data', (data)=>{
                this.#inflate[kBuffer].push(data);
                this.#inflate[kLength] += data.length;
            });
            this.#inflate.on('error', (err)=>{
                this.#inflate = null;
                callback(err);
            });
        }
        this.#inflate.write(chunk);
        if (fin) {
            this.#inflate.write(tail);
        }
        this.#inflate.flush(()=>{
            const full = Buffer.concat(this.#inflate[kBuffer], this.#inflate[kLength]);
            this.#inflate[kBuffer].length = 0;
            this.#inflate[kLength] = 0;
            callback(null, full);
        });
    }
}
module.exports = {
    PerMessageDeflate
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/receiver.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { parserStates, opcodes, states, emptyBuffer, sentCloseFrameState } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)");
const { isValidStatusCode, isValidOpcode, websocketMessageReceived, utf8Decode, isControlFrame, isTextBinaryFrame, isContinuationFrame } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/util.js [app-rsc] (ecmascript)");
const { failWebsocketConnection } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/connection.js [app-rsc] (ecmascript)");
const { WebsocketFrameSend } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/frame.js [app-rsc] (ecmascript)");
const { PerMessageDeflate } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/permessage-deflate.js [app-rsc] (ecmascript)");
// This code was influenced by ws released under the MIT license.
// Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
// Copyright (c) 2013 Arnout Kazemier and contributors
// Copyright (c) 2016 Luigi Pinca and contributors
class ByteParser extends Writable {
    #buffers = [];
    #fragmentsBytes = 0;
    #byteOffset = 0;
    #loop = false;
    #state = parserStates.INFO;
    #info = {};
    #fragments = [];
    /** @type {Map<string, PerMessageDeflate>} */ #extensions;
    /** @type {import('./websocket').Handler} */ #handler;
    constructor(handler, extensions){
        super();
        this.#handler = handler;
        this.#extensions = extensions == null ? new Map() : extensions;
        if (this.#extensions.has('permessage-deflate')) {
            this.#extensions.set('permessage-deflate', new PerMessageDeflate(extensions));
        }
    }
    /**
   * @param {Buffer} chunk
   * @param {() => void} callback
   */ _write(chunk, _, callback) {
        this.#buffers.push(chunk);
        this.#byteOffset += chunk.length;
        this.#loop = true;
        this.run(callback);
    }
    /**
   * Runs whenever a new chunk is received.
   * Callback is called whenever there are no more chunks buffering,
   * or not enough bytes are buffered to parse.
   */ run(callback) {
        while(this.#loop){
            if (this.#state === parserStates.INFO) {
                // If there aren't enough bytes to parse the payload length, etc.
                if (this.#byteOffset < 2) {
                    return callback();
                }
                const buffer = this.consume(2);
                const fin = (buffer[0] & 0x80) !== 0;
                const opcode = buffer[0] & 0x0F;
                const masked = (buffer[1] & 0x80) === 0x80;
                const fragmented = !fin && opcode !== opcodes.CONTINUATION;
                const payloadLength = buffer[1] & 0x7F;
                const rsv1 = buffer[0] & 0x40;
                const rsv2 = buffer[0] & 0x20;
                const rsv3 = buffer[0] & 0x10;
                if (!isValidOpcode(opcode)) {
                    failWebsocketConnection(this.#handler, 1002, 'Invalid opcode received');
                    return callback();
                }
                if (masked) {
                    failWebsocketConnection(this.#handler, 1002, 'Frame cannot be masked');
                    return callback();
                }
                // MUST be 0 unless an extension is negotiated that defines meanings
                // for non-zero values.  If a nonzero value is received and none of
                // the negotiated extensions defines the meaning of such a nonzero
                // value, the receiving endpoint MUST _Fail the WebSocket
                // Connection_.
                // This document allocates the RSV1 bit of the WebSocket header for
                // PMCEs and calls the bit the "Per-Message Compressed" bit.  On a
                // WebSocket connection where a PMCE is in use, this bit indicates
                // whether a message is compressed or not.
                if (rsv1 !== 0 && !this.#extensions.has('permessage-deflate')) {
                    failWebsocketConnection(this.#handler, 1002, 'Expected RSV1 to be clear.');
                    return;
                }
                if (rsv2 !== 0 || rsv3 !== 0) {
                    failWebsocketConnection(this.#handler, 1002, 'RSV1, RSV2, RSV3 must be clear');
                    return;
                }
                if (fragmented && !isTextBinaryFrame(opcode)) {
                    // Only text and binary frames can be fragmented
                    failWebsocketConnection(this.#handler, 1002, 'Invalid frame type was fragmented.');
                    return;
                }
                // If we are already parsing a text/binary frame and do not receive either
                // a continuation frame or close frame, fail the connection.
                if (isTextBinaryFrame(opcode) && this.#fragments.length > 0) {
                    failWebsocketConnection(this.#handler, 1002, 'Expected continuation frame');
                    return;
                }
                if (this.#info.fragmented && fragmented) {
                    // A fragmented frame can't be fragmented itself
                    failWebsocketConnection(this.#handler, 1002, 'Fragmented frame exceeded 125 bytes.');
                    return;
                }
                // "All control frames MUST have a payload length of 125 bytes or less
                // and MUST NOT be fragmented."
                if ((payloadLength > 125 || fragmented) && isControlFrame(opcode)) {
                    failWebsocketConnection(this.#handler, 1002, 'Control frame either too large or fragmented');
                    return;
                }
                if (isContinuationFrame(opcode) && this.#fragments.length === 0 && !this.#info.compressed) {
                    failWebsocketConnection(this.#handler, 1002, 'Unexpected continuation frame');
                    return;
                }
                if (payloadLength <= 125) {
                    this.#info.payloadLength = payloadLength;
                    this.#state = parserStates.READ_DATA;
                } else if (payloadLength === 126) {
                    this.#state = parserStates.PAYLOADLENGTH_16;
                } else if (payloadLength === 127) {
                    this.#state = parserStates.PAYLOADLENGTH_64;
                }
                if (isTextBinaryFrame(opcode)) {
                    this.#info.binaryType = opcode;
                    this.#info.compressed = rsv1 !== 0;
                }
                this.#info.opcode = opcode;
                this.#info.masked = masked;
                this.#info.fin = fin;
                this.#info.fragmented = fragmented;
            } else if (this.#state === parserStates.PAYLOADLENGTH_16) {
                if (this.#byteOffset < 2) {
                    return callback();
                }
                const buffer = this.consume(2);
                this.#info.payloadLength = buffer.readUInt16BE(0);
                this.#state = parserStates.READ_DATA;
            } else if (this.#state === parserStates.PAYLOADLENGTH_64) {
                if (this.#byteOffset < 8) {
                    return callback();
                }
                const buffer = this.consume(8);
                const upper = buffer.readUInt32BE(0);
                // 2^31 is the maximum bytes an arraybuffer can contain
                // on 32-bit systems. Although, on 64-bit systems, this is
                // 2^53-1 bytes.
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length
                // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/common/globals.h;drc=1946212ac0100668f14eb9e2843bdd846e510a1e;bpv=1;bpt=1;l=1275
                // https://source.chromium.org/chromium/chromium/src/+/main:v8/src/objects/js-array-buffer.h;l=34;drc=1946212ac0100668f14eb9e2843bdd846e510a1e
                if (upper > 2 ** 31 - 1) {
                    failWebsocketConnection(this.#handler, 1009, 'Received payload length > 2^31 bytes.');
                    return;
                }
                const lower = buffer.readUInt32BE(4);
                this.#info.payloadLength = (upper << 8) + lower;
                this.#state = parserStates.READ_DATA;
            } else if (this.#state === parserStates.READ_DATA) {
                if (this.#byteOffset < this.#info.payloadLength) {
                    return callback();
                }
                const body = this.consume(this.#info.payloadLength);
                if (isControlFrame(this.#info.opcode)) {
                    this.#loop = this.parseControlFrame(body);
                    this.#state = parserStates.INFO;
                } else {
                    if (!this.#info.compressed) {
                        this.writeFragments(body);
                        // If the frame is not fragmented, a message has been received.
                        // If the frame is fragmented, it will terminate with a fin bit set
                        // and an opcode of 0 (continuation), therefore we handle that when
                        // parsing continuation frames, not here.
                        if (!this.#info.fragmented && this.#info.fin) {
                            websocketMessageReceived(this.#handler, this.#info.binaryType, this.consumeFragments());
                        }
                        this.#state = parserStates.INFO;
                    } else {
                        this.#extensions.get('permessage-deflate').decompress(body, this.#info.fin, (error, data)=>{
                            if (error) {
                                failWebsocketConnection(this.#handler, 1007, error.message);
                                return;
                            }
                            this.writeFragments(data);
                            if (!this.#info.fin) {
                                this.#state = parserStates.INFO;
                                this.#loop = true;
                                this.run(callback);
                                return;
                            }
                            websocketMessageReceived(this.#handler, this.#info.binaryType, this.consumeFragments());
                            this.#loop = true;
                            this.#state = parserStates.INFO;
                            this.run(callback);
                        });
                        this.#loop = false;
                        break;
                    }
                }
            }
        }
    }
    /**
   * Take n bytes from the buffered Buffers
   * @param {number} n
   * @returns {Buffer}
   */ consume(n) {
        if (n > this.#byteOffset) {
            throw new Error('Called consume() before buffers satiated.');
        } else if (n === 0) {
            return emptyBuffer;
        }
        this.#byteOffset -= n;
        const first = this.#buffers[0];
        if (first.length > n) {
            // replace with remaining buffer
            this.#buffers[0] = first.subarray(n, first.length);
            return first.subarray(0, n);
        } else if (first.length === n) {
            // prefect match
            return this.#buffers.shift();
        } else {
            let offset = 0;
            // If Buffer.allocUnsafe is used, extra copies will be made because the offset is non-zero.
            const buffer = Buffer.allocUnsafeSlow(n);
            while(offset !== n){
                const next = this.#buffers[0];
                const length = next.length;
                if (length + offset === n) {
                    buffer.set(this.#buffers.shift(), offset);
                    break;
                } else if (length + offset > n) {
                    buffer.set(next.subarray(0, n - offset), offset);
                    this.#buffers[0] = next.subarray(n - offset);
                    break;
                } else {
                    buffer.set(this.#buffers.shift(), offset);
                    offset += length;
                }
            }
            return buffer;
        }
    }
    writeFragments(fragment) {
        this.#fragmentsBytes += fragment.length;
        this.#fragments.push(fragment);
    }
    consumeFragments() {
        const fragments = this.#fragments;
        if (fragments.length === 1) {
            // single fragment
            this.#fragmentsBytes = 0;
            return fragments.shift();
        }
        let offset = 0;
        // If Buffer.allocUnsafe is used, extra copies will be made because the offset is non-zero.
        const output = Buffer.allocUnsafeSlow(this.#fragmentsBytes);
        for(let i = 0; i < fragments.length; ++i){
            const buffer = fragments[i];
            output.set(buffer, offset);
            offset += buffer.length;
        }
        this.#fragments = [];
        this.#fragmentsBytes = 0;
        return output;
    }
    parseCloseBody(data) {
        assert(data.length !== 1);
        // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.5
        /** @type {number|undefined} */ let code;
        if (data.length >= 2) {
            // _The WebSocket Connection Close Code_ is
            // defined as the status code (Section 7.4) contained in the first Close
            // control frame received by the application
            code = data.readUInt16BE(0);
        }
        if (code !== undefined && !isValidStatusCode(code)) {
            return {
                code: 1002,
                reason: 'Invalid status code',
                error: true
            };
        }
        // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.6
        /** @type {Buffer} */ let reason = data.subarray(2);
        // Remove BOM
        if (reason[0] === 0xEF && reason[1] === 0xBB && reason[2] === 0xBF) {
            reason = reason.subarray(3);
        }
        try {
            reason = utf8Decode(reason);
        } catch  {
            return {
                code: 1007,
                reason: 'Invalid UTF-8',
                error: true
            };
        }
        return {
            code,
            reason,
            error: false
        };
    }
    /**
   * Parses control frames.
   * @param {Buffer} body
   */ parseControlFrame(body) {
        const { opcode, payloadLength } = this.#info;
        if (opcode === opcodes.CLOSE) {
            if (payloadLength === 1) {
                failWebsocketConnection(this.#handler, 1002, 'Received close frame with a 1-byte body.');
                return false;
            }
            this.#info.closeInfo = this.parseCloseBody(body);
            if (this.#info.closeInfo.error) {
                const { code, reason } = this.#info.closeInfo;
                failWebsocketConnection(this.#handler, code, reason);
                return false;
            }
            // Upon receiving such a frame, the other peer sends a
            // Close frame in response, if it hasn't already sent one.
            if (!this.#handler.closeState.has(sentCloseFrameState.SENT) && !this.#handler.closeState.has(sentCloseFrameState.RECEIVED)) {
                // If an endpoint receives a Close frame and did not previously send a
                // Close frame, the endpoint MUST send a Close frame in response.  (When
                // sending a Close frame in response, the endpoint typically echos the
                // status code it received.)
                let body = emptyBuffer;
                if (this.#info.closeInfo.code) {
                    body = Buffer.allocUnsafe(2);
                    body.writeUInt16BE(this.#info.closeInfo.code, 0);
                }
                const closeFrame = new WebsocketFrameSend(body);
                this.#handler.socket.write(closeFrame.createFrame(opcodes.CLOSE));
                this.#handler.closeState.add(sentCloseFrameState.SENT);
            }
            // Upon either sending or receiving a Close control frame, it is said
            // that _The WebSocket Closing Handshake is Started_ and that the
            // WebSocket connection is in the CLOSING state.
            this.#handler.readyState = states.CLOSING;
            this.#handler.closeState.add(sentCloseFrameState.RECEIVED);
            return false;
        } else if (opcode === opcodes.PING) {
            // Upon receipt of a Ping frame, an endpoint MUST send a Pong frame in
            // response, unless it already received a Close frame.
            // A Pong frame sent in response to a Ping frame must have identical
            // "Application data"
            if (!this.#handler.closeState.has(sentCloseFrameState.RECEIVED)) {
                const frame = new WebsocketFrameSend(body);
                this.#handler.socket.write(frame.createFrame(opcodes.PONG));
                this.#handler.onPing(body);
            }
        } else if (opcode === opcodes.PONG) {
            // A Pong frame MAY be sent unsolicited.  This serves as a
            // unidirectional heartbeat.  A response to an unsolicited Pong frame is
            // not expected.
            this.#handler.onPong(body);
        }
        return true;
    }
    get closingInfo() {
        return this.#info.closeInfo;
    }
}
module.exports = {
    ByteParser
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/sender.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { WebsocketFrameSend } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/frame.js [app-rsc] (ecmascript)");
const { opcodes, sendHints } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)");
const FixedQueue = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/fixed-queue.js [app-rsc] (ecmascript)");
/**
 * @typedef {object} SendQueueNode
 * @property {Promise<void> | null} promise
 * @property {((...args: any[]) => any)} callback
 * @property {Buffer | null} frame
 */ class SendQueue {
    /**
   * @type {FixedQueue}
   */ #queue = new FixedQueue();
    /**
   * @type {boolean}
   */ #running = false;
    /** @type {import('node:net').Socket} */ #socket;
    constructor(socket){
        this.#socket = socket;
    }
    add(item, cb, hint) {
        if (hint !== sendHints.blob) {
            if (!this.#running) {
                // TODO(@tsctx): support fast-path for string on running
                if (hint === sendHints.text) {
                    // special fast-path for string
                    const { 0: head, 1: body } = WebsocketFrameSend.createFastTextFrame(item);
                    this.#socket.cork();
                    this.#socket.write(head);
                    this.#socket.write(body, cb);
                    this.#socket.uncork();
                } else {
                    // direct writing
                    this.#socket.write(createFrame(item, hint), cb);
                }
            } else {
                /** @type {SendQueueNode} */ const node = {
                    promise: null,
                    callback: cb,
                    frame: createFrame(item, hint)
                };
                this.#queue.push(node);
            }
            return;
        }
        /** @type {SendQueueNode} */ const node = {
            promise: item.arrayBuffer().then((ab)=>{
                node.promise = null;
                node.frame = createFrame(ab, hint);
            }),
            callback: cb,
            frame: null
        };
        this.#queue.push(node);
        if (!this.#running) {
            this.#run();
        }
    }
    async #run() {
        this.#running = true;
        const queue = this.#queue;
        while(!queue.isEmpty()){
            const node = queue.shift();
            // wait pending promise
            if (node.promise !== null) {
                await node.promise;
            }
            // write
            this.#socket.write(node.frame, node.callback);
            // cleanup
            node.callback = node.frame = null;
        }
        this.#running = false;
    }
}
function createFrame(data, hint) {
    return new WebsocketFrameSend(toBuffer(data, hint)).createFrame(hint === sendHints.text ? opcodes.TEXT : opcodes.BINARY);
}
function toBuffer(data, hint) {
    switch(hint){
        case sendHints.text:
        case sendHints.typedArray:
            return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        case sendHints.arrayBuffer:
        case sendHints.blob:
            return new Uint8Array(data);
    }
}
module.exports = {
    SendQueue
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/websocket.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isArrayBuffer } = __turbopack_context__.r("[externals]/node:util/types [external] (node:util/types, cjs)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { URLSerializer } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { environmentSettingsObject } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { staticPropertyDescriptors, states, sentCloseFrameState, sendHints, opcodes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)");
const { isConnecting, isEstablished, isClosing, isClosed, isValidSubprotocol, fireEvent, utf8Decode, toArrayBuffer, getURLRecord } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/util.js [app-rsc] (ecmascript)");
const { establishWebSocketConnection, closeWebSocketConnection, failWebsocketConnection } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/connection.js [app-rsc] (ecmascript)");
const { ByteParser } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/receiver.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { getGlobalDispatcher } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/global.js [app-rsc] (ecmascript)");
const { ErrorEvent, CloseEvent, createFastMessageEvent } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/events.js [app-rsc] (ecmascript)");
const { SendQueue } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/sender.js [app-rsc] (ecmascript)");
const { WebsocketFrameSend } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/frame.js [app-rsc] (ecmascript)");
const { channels } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/diagnostics.js [app-rsc] (ecmascript)");
/**
 * @typedef {object} Handler
 * @property {(response: any, extensions?: string[]) => void} onConnectionEstablished
 * @property {(opcode: number, data: Buffer) => void} onMessage
 * @property {(error: Error) => void} onParserError
 * @property {() => void} onParserDrain
 * @property {(chunk: Buffer) => void} onSocketData
 * @property {(err: Error) => void} onSocketError
 * @property {() => void} onSocketClose
 * @property {(body: Buffer) => void} onPing
 * @property {(body: Buffer) => void} onPong
 *
 * @property {number} readyState
 * @property {import('stream').Duplex} socket
 * @property {Set<number>} closeState
 * @property {import('../fetch/index').Fetch} controller
 * @property {boolean} [wasEverConnected=false]
 */ // https://websockets.spec.whatwg.org/#interface-definition
class WebSocket extends EventTarget {
    #events = {
        open: null,
        error: null,
        close: null,
        message: null
    };
    #bufferedAmount = 0;
    #protocol = '';
    #extensions = '';
    /** @type {SendQueue} */ #sendQueue;
    /** @type {Handler} */ #handler = {
        onConnectionEstablished: (response, extensions)=>this.#onConnectionEstablished(response, extensions),
        onMessage: (opcode, data)=>this.#onMessage(opcode, data),
        onParserError: (err)=>failWebsocketConnection(this.#handler, null, err.message),
        onParserDrain: ()=>this.#onParserDrain(),
        onSocketData: (chunk)=>{
            if (!this.#parser.write(chunk)) {
                this.#handler.socket.pause();
            }
        },
        onSocketError: (err)=>{
            this.#handler.readyState = states.CLOSING;
            if (channels.socketError.hasSubscribers) {
                channels.socketError.publish(err);
            }
            this.#handler.socket.destroy();
        },
        onSocketClose: ()=>this.#onSocketClose(),
        onPing: (body)=>{
            if (channels.ping.hasSubscribers) {
                channels.ping.publish({
                    payload: body,
                    websocket: this
                });
            }
        },
        onPong: (body)=>{
            if (channels.pong.hasSubscribers) {
                channels.pong.publish({
                    payload: body,
                    websocket: this
                });
            }
        },
        readyState: states.CONNECTING,
        socket: null,
        closeState: new Set(),
        controller: null,
        wasEverConnected: false
    };
    #url;
    #binaryType;
    /** @type {import('./receiver').ByteParser} */ #parser;
    /**
   * @param {string} url
   * @param {string|string[]} protocols
   */ constructor(url, protocols = []){
        super();
        webidl.util.markAsUncloneable(this);
        const prefix = 'WebSocket constructor';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        const options = webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'](protocols, prefix, 'options');
        url = webidl.converters.USVString(url);
        protocols = options.protocols;
        // 1. Let baseURL be this's relevant settings object's API base URL.
        const baseURL = environmentSettingsObject.settingsObject.baseUrl;
        // 2. Let urlRecord be the result of getting a URL record given url and baseURL.
        const urlRecord = getURLRecord(url, baseURL);
        // 3. If protocols is a string, set protocols to a sequence consisting
        //    of just that string.
        if (typeof protocols === 'string') {
            protocols = [
                protocols
            ];
        }
        // 4. If any of the values in protocols occur more than once or otherwise
        //    fail to match the requirements for elements that comprise the value
        //    of `Sec-WebSocket-Protocol` fields as defined by The WebSocket
        //    protocol, then throw a "SyntaxError" DOMException.
        if (protocols.length !== new Set(protocols.map((p)=>p.toLowerCase())).size) {
            throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        }
        if (protocols.length > 0 && !protocols.every((p)=>isValidSubprotocol(p))) {
            throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        }
        // 5. Set this's url to urlRecord.
        this.#url = new URL(urlRecord.href);
        // 6. Let client be this's relevant settings object.
        const client = environmentSettingsObject.settingsObject;
        // 7. Run this step in parallel:
        // 7.1. Establish a WebSocket connection given urlRecord, protocols,
        //      and client.
        this.#handler.controller = establishWebSocketConnection(urlRecord, protocols, client, this.#handler, options);
        // Each WebSocket object has an associated ready state, which is a
        // number representing the state of the connection. Initially it must
        // be CONNECTING (0).
        this.#handler.readyState = WebSocket.CONNECTING;
        // The extensions attribute must initially return the empty string.
        // The protocol attribute must initially return the empty string.
        // Each WebSocket object has an associated binary type, which is a
        // BinaryType. Initially it must be "blob".
        this.#binaryType = 'blob';
    }
    /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-close
   * @param {number|undefined} code
   * @param {string|undefined} reason
   */ close(code = undefined, reason = undefined) {
        webidl.brandCheck(this, WebSocket);
        const prefix = 'WebSocket.close';
        if (code !== undefined) {
            code = webidl.converters['unsigned short'](code, prefix, 'code', webidl.attributes.Clamp);
        }
        if (reason !== undefined) {
            reason = webidl.converters.USVString(reason);
        }
        // 1. If code is the special value "missing", then set code to null.
        code ??= null;
        // 2. If reason is the special value "missing", then set reason to the empty string.
        reason ??= '';
        // 3. Close the WebSocket with this, code, and reason.
        closeWebSocketConnection(this.#handler, code, reason, true);
    }
    /**
   * @see https://websockets.spec.whatwg.org/#dom-websocket-send
   * @param {NodeJS.TypedArray|ArrayBuffer|Blob|string} data
   */ send(data) {
        webidl.brandCheck(this, WebSocket);
        const prefix = 'WebSocket.send';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        data = webidl.converters.WebSocketSendData(data, prefix, 'data');
        // 1. If this's ready state is CONNECTING, then throw an
        //    "InvalidStateError" DOMException.
        if (isConnecting(this.#handler.readyState)) {
            throw new DOMException('Sent before connected.', 'InvalidStateError');
        }
        // 2. Run the appropriate set of steps from the following list:
        // https://datatracker.ietf.org/doc/html/rfc6455#section-6.1
        // https://datatracker.ietf.org/doc/html/rfc6455#section-5.2
        if (!isEstablished(this.#handler.readyState) || isClosing(this.#handler.readyState)) {
            return;
        }
        // If data is a string
        if (typeof data === 'string') {
            // If the WebSocket connection is established and the WebSocket
            // closing handshake has not yet started, then the user agent
            // must send a WebSocket Message comprised of the data argument
            // using a text frame opcode; if the data cannot be sent, e.g.
            // because it would need to be buffered but the buffer is full,
            // the user agent must flag the WebSocket as full and then close
            // the WebSocket connection. Any invocation of this method with a
            // string argument that does not throw an exception must increase
            // the bufferedAmount attribute by the number of bytes needed to
            // express the argument as UTF-8.
            const buffer = Buffer.from(data);
            this.#bufferedAmount += buffer.byteLength;
            this.#sendQueue.add(buffer, ()=>{
                this.#bufferedAmount -= buffer.byteLength;
            }, sendHints.text);
        } else if (isArrayBuffer(data)) {
            // If the WebSocket connection is established, and the WebSocket
            // closing handshake has not yet started, then the user agent must
            // send a WebSocket Message comprised of data using a binary frame
            // opcode; if the data cannot be sent, e.g. because it would need
            // to be buffered but the buffer is full, the user agent must flag
            // the WebSocket as full and then close the WebSocket connection.
            // The data to be sent is the data stored in the buffer described
            // by the ArrayBuffer object. Any invocation of this method with an
            // ArrayBuffer argument that does not throw an exception must
            // increase the bufferedAmount attribute by the length of the
            // ArrayBuffer in bytes.
            this.#bufferedAmount += data.byteLength;
            this.#sendQueue.add(data, ()=>{
                this.#bufferedAmount -= data.byteLength;
            }, sendHints.arrayBuffer);
        } else if (ArrayBuffer.isView(data)) {
            // If the WebSocket connection is established, and the WebSocket
            // closing handshake has not yet started, then the user agent must
            // send a WebSocket Message comprised of data using a binary frame
            // opcode; if the data cannot be sent, e.g. because it would need to
            // be buffered but the buffer is full, the user agent must flag the
            // WebSocket as full and then close the WebSocket connection. The
            // data to be sent is the data stored in the section of the buffer
            // described by the ArrayBuffer object that data references. Any
            // invocation of this method with this kind of argument that does
            // not throw an exception must increase the bufferedAmount attribute
            // by the length of data’s buffer in bytes.
            this.#bufferedAmount += data.byteLength;
            this.#sendQueue.add(data, ()=>{
                this.#bufferedAmount -= data.byteLength;
            }, sendHints.typedArray);
        } else if (webidl.is.Blob(data)) {
            // If the WebSocket connection is established, and the WebSocket
            // closing handshake has not yet started, then the user agent must
            // send a WebSocket Message comprised of data using a binary frame
            // opcode; if the data cannot be sent, e.g. because it would need to
            // be buffered but the buffer is full, the user agent must flag the
            // WebSocket as full and then close the WebSocket connection. The data
            // to be sent is the raw data represented by the Blob object. Any
            // invocation of this method with a Blob argument that does not throw
            // an exception must increase the bufferedAmount attribute by the size
            // of the Blob object’s raw data, in bytes.
            this.#bufferedAmount += data.size;
            this.#sendQueue.add(data, ()=>{
                this.#bufferedAmount -= data.size;
            }, sendHints.blob);
        }
    }
    get readyState() {
        webidl.brandCheck(this, WebSocket);
        // The readyState getter steps are to return this's ready state.
        return this.#handler.readyState;
    }
    get bufferedAmount() {
        webidl.brandCheck(this, WebSocket);
        return this.#bufferedAmount;
    }
    get url() {
        webidl.brandCheck(this, WebSocket);
        // The url getter steps are to return this's url, serialized.
        return URLSerializer(this.#url);
    }
    get extensions() {
        webidl.brandCheck(this, WebSocket);
        return this.#extensions;
    }
    get protocol() {
        webidl.brandCheck(this, WebSocket);
        return this.#protocol;
    }
    get onopen() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.open;
    }
    set onopen(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.open) {
            this.removeEventListener('open', this.#events.open);
        }
        const listener = webidl.converters.EventHandlerNonNull(fn);
        if (listener !== null) {
            this.addEventListener('open', listener);
            this.#events.open = fn;
        } else {
            this.#events.open = null;
        }
    }
    get onerror() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.error;
    }
    set onerror(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.error) {
            this.removeEventListener('error', this.#events.error);
        }
        const listener = webidl.converters.EventHandlerNonNull(fn);
        if (listener !== null) {
            this.addEventListener('error', listener);
            this.#events.error = fn;
        } else {
            this.#events.error = null;
        }
    }
    get onclose() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.close;
    }
    set onclose(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.close) {
            this.removeEventListener('close', this.#events.close);
        }
        const listener = webidl.converters.EventHandlerNonNull(fn);
        if (listener !== null) {
            this.addEventListener('close', listener);
            this.#events.close = fn;
        } else {
            this.#events.close = null;
        }
    }
    get onmessage() {
        webidl.brandCheck(this, WebSocket);
        return this.#events.message;
    }
    set onmessage(fn) {
        webidl.brandCheck(this, WebSocket);
        if (this.#events.message) {
            this.removeEventListener('message', this.#events.message);
        }
        const listener = webidl.converters.EventHandlerNonNull(fn);
        if (listener !== null) {
            this.addEventListener('message', listener);
            this.#events.message = fn;
        } else {
            this.#events.message = null;
        }
    }
    get binaryType() {
        webidl.brandCheck(this, WebSocket);
        return this.#binaryType;
    }
    set binaryType(type) {
        webidl.brandCheck(this, WebSocket);
        if (type !== 'blob' && type !== 'arraybuffer') {
            this.#binaryType = 'blob';
        } else {
            this.#binaryType = type;
        }
    }
    /**
   * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
   */ #onConnectionEstablished(response, parsedExtensions) {
        // processResponse is called when the "response’s header list has been received and initialized."
        // once this happens, the connection is open
        this.#handler.socket = response.socket;
        const parser = new ByteParser(this.#handler, parsedExtensions);
        parser.on('drain', ()=>this.#handler.onParserDrain());
        parser.on('error', (err)=>this.#handler.onParserError(err));
        this.#parser = parser;
        this.#sendQueue = new SendQueue(response.socket);
        // 1. Change the ready state to OPEN (1).
        this.#handler.readyState = states.OPEN;
        // 2. Change the extensions attribute’s value to the extensions in use, if
        //    it is not the null value.
        // https://datatracker.ietf.org/doc/html/rfc6455#section-9.1
        const extensions = response.headersList.get('sec-websocket-extensions');
        if (extensions !== null) {
            this.#extensions = extensions;
        }
        // 3. Change the protocol attribute’s value to the subprotocol in use, if
        //    it is not the null value.
        // https://datatracker.ietf.org/doc/html/rfc6455#section-1.9
        const protocol = response.headersList.get('sec-websocket-protocol');
        if (protocol !== null) {
            this.#protocol = protocol;
        }
        // 4. Fire an event named open at the WebSocket object.
        fireEvent('open', this);
        if (channels.open.hasSubscribers) {
            // Convert headers to a plain object for the event
            const headers = response.headersList.entries;
            channels.open.publish({
                address: response.socket.address(),
                protocol: this.#protocol,
                extensions: this.#extensions,
                websocket: this,
                handshakeResponse: {
                    status: response.status,
                    statusText: response.statusText,
                    headers
                }
            });
        }
    }
    #onMessage(type, data) {
        // 1. If ready state is not OPEN (1), then return.
        if (this.#handler.readyState !== states.OPEN) {
            return;
        }
        // 2. Let dataForEvent be determined by switching on type and binary type:
        let dataForEvent;
        if (type === opcodes.TEXT) {
            // -> type indicates that the data is Text
            //      a new DOMString containing data
            try {
                dataForEvent = utf8Decode(data);
            } catch  {
                failWebsocketConnection(this.#handler, 1007, 'Received invalid UTF-8 in text frame.');
                return;
            }
        } else if (type === opcodes.BINARY) {
            if (this.#binaryType === 'blob') {
                // -> type indicates that the data is Binary and binary type is "blob"
                //      a new Blob object, created in the relevant Realm of the WebSocket
                //      object, that represents data as its raw data
                dataForEvent = new Blob([
                    data
                ]);
            } else {
                // -> type indicates that the data is Binary and binary type is "arraybuffer"
                //      a new ArrayBuffer object, created in the relevant Realm of the
                //      WebSocket object, whose contents are data
                dataForEvent = toArrayBuffer(data);
            }
        }
        // 3. Fire an event named message at the WebSocket object, using MessageEvent,
        //    with the origin attribute initialized to the serialization of the WebSocket
        //    object’s url's origin, and the data attribute initialized to dataForEvent.
        fireEvent('message', this, createFastMessageEvent, {
            origin: this.#url.origin,
            data: dataForEvent
        });
    }
    #onParserDrain() {
        this.#handler.socket.resume();
    }
    /**
   * @see https://websockets.spec.whatwg.org/#feedback-from-the-protocol
   * @see https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.4
   */ #onSocketClose() {
        // If the TCP connection was closed after the
        // WebSocket closing handshake was completed, the WebSocket connection
        // is said to have been closed _cleanly_.
        const wasClean = this.#handler.closeState.has(sentCloseFrameState.SENT) && this.#handler.closeState.has(sentCloseFrameState.RECEIVED);
        let code = 1005;
        let reason = '';
        const result = this.#parser?.closingInfo;
        if (result && !result.error) {
            code = result.code ?? 1005;
            reason = result.reason;
        }
        // 1. Change the ready state to CLOSED (3).
        this.#handler.readyState = states.CLOSED;
        // 2. If the user agent was required to fail the WebSocket
        //    connection, or if the WebSocket connection was closed
        //    after being flagged as full, fire an event named error
        //    at the WebSocket object.
        if (!this.#handler.closeState.has(sentCloseFrameState.RECEIVED)) {
            // If _The WebSocket
            // Connection is Closed_ and no Close control frame was received by the
            // endpoint (such as could occur if the underlying transport connection
            // is lost), _The WebSocket Connection Close Code_ is considered to be
            // 1006.
            code = 1006;
            fireEvent('error', this, (type, init)=>new ErrorEvent(type, init), {
                error: new TypeError(reason)
            });
        }
        // 3. Fire an event named close at the WebSocket object,
        //    using CloseEvent, with the wasClean attribute
        //    initialized to true if the connection closed cleanly
        //    and false otherwise, the code attribute initialized to
        //    the WebSocket connection close code, and the reason
        //    attribute initialized to the result of applying UTF-8
        //    decode without BOM to the WebSocket connection close
        //    reason.
        // TODO: process.nextTick
        fireEvent('close', this, (type, init)=>new CloseEvent(type, init), {
            wasClean,
            code,
            reason
        });
        if (channels.close.hasSubscribers) {
            channels.close.publish({
                websocket: this,
                code,
                reason
            });
        }
    }
    /**
   * @param {WebSocket} ws
   * @param {Buffer|undefined} buffer
   */ static ping(ws, buffer) {
        if (Buffer.isBuffer(buffer)) {
            if (buffer.length > 125) {
                throw new TypeError('A PING frame cannot have a body larger than 125 bytes.');
            }
        } else if (buffer !== undefined) {
            throw new TypeError('Expected buffer payload');
        }
        // An endpoint MAY send a Ping frame any time after the connection is
        // established and before the connection is closed.
        const readyState = ws.#handler.readyState;
        if (isEstablished(readyState) && !isClosing(readyState) && !isClosed(readyState)) {
            const frame = new WebsocketFrameSend(buffer);
            ws.#handler.socket.write(frame.createFrame(opcodes.PING));
        }
    }
}
const { ping } = WebSocket;
Reflect.deleteProperty(WebSocket, 'ping');
// https://websockets.spec.whatwg.org/#dom-websocket-connecting
WebSocket.CONNECTING = WebSocket.prototype.CONNECTING = states.CONNECTING;
// https://websockets.spec.whatwg.org/#dom-websocket-open
WebSocket.OPEN = WebSocket.prototype.OPEN = states.OPEN;
// https://websockets.spec.whatwg.org/#dom-websocket-closing
WebSocket.CLOSING = WebSocket.prototype.CLOSING = states.CLOSING;
// https://websockets.spec.whatwg.org/#dom-websocket-closed
WebSocket.CLOSED = WebSocket.prototype.CLOSED = states.CLOSED;
Object.defineProperties(WebSocket.prototype, {
    CONNECTING: staticPropertyDescriptors,
    OPEN: staticPropertyDescriptors,
    CLOSING: staticPropertyDescriptors,
    CLOSED: staticPropertyDescriptors,
    url: kEnumerableProperty,
    readyState: kEnumerableProperty,
    bufferedAmount: kEnumerableProperty,
    onopen: kEnumerableProperty,
    onerror: kEnumerableProperty,
    onclose: kEnumerableProperty,
    close: kEnumerableProperty,
    onmessage: kEnumerableProperty,
    binaryType: kEnumerableProperty,
    send: kEnumerableProperty,
    extensions: kEnumerableProperty,
    protocol: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'WebSocket',
        writable: false,
        enumerable: false,
        configurable: true
    }
});
Object.defineProperties(WebSocket, {
    CONNECTING: staticPropertyDescriptors,
    OPEN: staticPropertyDescriptors,
    CLOSING: staticPropertyDescriptors,
    CLOSED: staticPropertyDescriptors
});
webidl.converters['sequence<DOMString>'] = webidl.sequenceConverter(webidl.converters.DOMString);
webidl.converters['DOMString or sequence<DOMString>'] = function(V, prefix, argument) {
    if (webidl.util.Type(V) === webidl.util.Types.OBJECT && Symbol.iterator in V) {
        return webidl.converters['sequence<DOMString>'](V);
    }
    return webidl.converters.DOMString(V, prefix, argument);
};
// This implements the proposal made in https://github.com/whatwg/websockets/issues/42
webidl.converters.WebSocketInit = webidl.dictionaryConverter([
    {
        key: 'protocols',
        converter: webidl.converters['DOMString or sequence<DOMString>'],
        defaultValue: ()=>[]
    },
    {
        key: 'dispatcher',
        converter: webidl.converters.any,
        defaultValue: ()=>getGlobalDispatcher()
    },
    {
        key: 'headers',
        converter: webidl.nullableConverter(webidl.converters.HeadersInit)
    }
]);
webidl.converters['DOMString or sequence<DOMString> or WebSocketInit'] = function(V) {
    if (webidl.util.Type(V) === webidl.util.Types.OBJECT && !(Symbol.iterator in V)) {
        return webidl.converters.WebSocketInit(V);
    }
    return {
        protocols: webidl.converters['DOMString or sequence<DOMString>'](V)
    };
};
webidl.converters.WebSocketSendData = function(V) {
    if (webidl.util.Type(V) === webidl.util.Types.OBJECT) {
        if (webidl.is.Blob(V)) {
            return V;
        }
        if (webidl.is.BufferSource(V)) {
            return V;
        }
    }
    return webidl.converters.USVString(V);
};
module.exports = {
    WebSocket,
    ping
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/stream/websocketerror.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { validateCloseCodeAndReason } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/util.js [app-rsc] (ecmascript)");
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
function createInheritableDOMException() {
    // https://github.com/nodejs/node/issues/59677
    class Test extends DOMException {
        get reason() {
            return '';
        }
    }
    if (new Test().reason !== undefined) {
        return DOMException;
    }
    return new Proxy(DOMException, {
        construct (target, args, newTarget) {
            const instance = Reflect.construct(target, args, target);
            Object.setPrototypeOf(instance, newTarget.prototype);
            return instance;
        }
    });
}
class WebSocketError extends createInheritableDOMException() {
    #closeCode;
    #reason;
    constructor(message = '', init = undefined){
        message = webidl.converters.DOMString(message, 'WebSocketError', 'message');
        // 1. Set this 's name to " WebSocketError ".
        // 2. Set this 's message to message .
        super(message, 'WebSocketError');
        if (init === kConstruct) {
            return;
        } else if (init !== null) {
            init = webidl.converters.WebSocketCloseInfo(init);
        }
        // 3. Let code be init [" closeCode "] if it exists , or null otherwise.
        let code = init.closeCode ?? null;
        // 4. Let reason be init [" reason "] if it exists , or the empty string otherwise.
        const reason = init.reason ?? '';
        // 5. Validate close code and reason with code and reason .
        validateCloseCodeAndReason(code, reason);
        // 6. If reason is non-empty, but code is not set, then set code to 1000 ("Normal Closure").
        if (reason.length !== 0 && code === null) {
            code = 1000;
        }
        // 7. Set this 's closeCode to code .
        this.#closeCode = code;
        // 8. Set this 's reason to reason .
        this.#reason = reason;
    }
    get closeCode() {
        return this.#closeCode;
    }
    get reason() {
        return this.#reason;
    }
    /**
   * @param {string} message
   * @param {number|null} code
   * @param {string} reason
   */ static createUnvalidatedWebSocketError(message, code, reason) {
        const error = new WebSocketError(message, kConstruct);
        error.#closeCode = code;
        error.#reason = reason;
        return error;
    }
}
const { createUnvalidatedWebSocketError } = WebSocketError;
delete WebSocketError.createUnvalidatedWebSocketError;
Object.defineProperties(WebSocketError.prototype, {
    closeCode: kEnumerableProperty,
    reason: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'WebSocketError',
        writable: false,
        enumerable: false,
        configurable: true
    }
});
webidl.is.WebSocketError = webidl.util.MakeTypeAssertion(WebSocketError);
module.exports = {
    WebSocketError,
    createUnvalidatedWebSocketError
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/stream/websocketstream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createDeferredPromise } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/promise.js [app-rsc] (ecmascript)");
const { environmentSettingsObject } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { states, opcodes, sentCloseFrameState } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/constants.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { getURLRecord, isValidSubprotocol, isEstablished, utf8Decode } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/util.js [app-rsc] (ecmascript)");
const { establishWebSocketConnection, failWebsocketConnection, closeWebSocketConnection } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/connection.js [app-rsc] (ecmascript)");
const { channels } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/diagnostics.js [app-rsc] (ecmascript)");
const { WebsocketFrameSend } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/frame.js [app-rsc] (ecmascript)");
const { ByteParser } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/receiver.js [app-rsc] (ecmascript)");
const { WebSocketError, createUnvalidatedWebSocketError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/stream/websocketerror.js [app-rsc] (ecmascript)");
const { utf8DecodeBytes } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
let emittedExperimentalWarning = false;
class WebSocketStream {
    // Each WebSocketStream object has an associated url , which is a URL record .
    /** @type {URL} */ #url;
    // Each WebSocketStream object has an associated opened promise , which is a promise.
    /** @type {import('../../../util/promise').DeferredPromise} */ #openedPromise;
    // Each WebSocketStream object has an associated closed promise , which is a promise.
    /** @type {import('../../../util/promise').DeferredPromise} */ #closedPromise;
    // Each WebSocketStream object has an associated readable stream , which is a ReadableStream .
    /** @type {ReadableStream} */ #readableStream;
    /** @type {ReadableStreamDefaultController} */ #readableStreamController;
    // Each WebSocketStream object has an associated writable stream , which is a WritableStream .
    /** @type {WritableStream} */ #writableStream;
    // Each WebSocketStream object has an associated boolean handshake aborted , which is initially false.
    #handshakeAborted = false;
    /** @type {import('../websocket').Handler} */ #handler = {
        // https://whatpr.org/websockets/48/7b748d3...d5570f3.html#feedback-to-websocket-stream-from-the-protocol
        onConnectionEstablished: (response, extensions)=>this.#onConnectionEstablished(response, extensions),
        onMessage: (opcode, data)=>this.#onMessage(opcode, data),
        onParserError: (err)=>failWebsocketConnection(this.#handler, null, err.message),
        onParserDrain: ()=>this.#handler.socket.resume(),
        onSocketData: (chunk)=>{
            if (!this.#parser.write(chunk)) {
                this.#handler.socket.pause();
            }
        },
        onSocketError: (err)=>{
            this.#handler.readyState = states.CLOSING;
            if (channels.socketError.hasSubscribers) {
                channels.socketError.publish(err);
            }
            this.#handler.socket.destroy();
        },
        onSocketClose: ()=>this.#onSocketClose(),
        onPing: ()=>{},
        onPong: ()=>{},
        readyState: states.CONNECTING,
        socket: null,
        closeState: new Set(),
        controller: null,
        wasEverConnected: false
    };
    /** @type {import('../receiver').ByteParser} */ #parser;
    constructor(url, options = undefined){
        if (!emittedExperimentalWarning) {
            process.emitWarning('WebSocketStream is experimental! Expect it to change at any time.', {
                code: 'UNDICI-WSS'
            });
            emittedExperimentalWarning = true;
        }
        webidl.argumentLengthCheck(arguments, 1, 'WebSocket');
        url = webidl.converters.USVString(url);
        if (options !== null) {
            options = webidl.converters.WebSocketStreamOptions(options);
        }
        // 1. Let baseURL be this 's relevant settings object 's API base URL .
        const baseURL = environmentSettingsObject.settingsObject.baseUrl;
        // 2. Let urlRecord be the result of getting a URL record given url and baseURL .
        const urlRecord = getURLRecord(url, baseURL);
        // 3. Let protocols be options [" protocols "] if it exists , otherwise an empty sequence.
        const protocols = options.protocols;
        // 4. If any of the values in protocols occur more than once or otherwise fail to match the requirements for elements that comprise the value of ` Sec-WebSocket-Protocol ` fields as defined by The WebSocket Protocol , then throw a " SyntaxError " DOMException . [WSP]
        if (protocols.length !== new Set(protocols.map((p)=>p.toLowerCase())).size) {
            throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        }
        if (protocols.length > 0 && !protocols.every((p)=>isValidSubprotocol(p))) {
            throw new DOMException('Invalid Sec-WebSocket-Protocol value', 'SyntaxError');
        }
        // 5. Set this 's url to urlRecord .
        this.#url = urlRecord.toString();
        // 6. Set this 's opened promise and closed promise to new promises.
        this.#openedPromise = createDeferredPromise();
        this.#closedPromise = createDeferredPromise();
        // 7. Apply backpressure to the WebSocket.
        // TODO
        // 8.  If options [" signal "] exists ,
        if (options.signal != null) {
            // 8.1. Let signal be options [" signal "].
            const signal = options.signal;
            // 8.2. If signal is aborted , then reject this 's opened promise and closed promise with signal ’s abort reason
            //      and return.
            if (signal.aborted) {
                this.#openedPromise.reject(signal.reason);
                this.#closedPromise.reject(signal.reason);
                return;
            }
            // 8.3. Add the following abort steps to signal :
            signal.addEventListener('abort', ()=>{
                // 8.3.1. If the WebSocket connection is not yet established : [WSP]
                if (!isEstablished(this.#handler.readyState)) {
                    // 8.3.1.1. Fail the WebSocket connection .
                    failWebsocketConnection(this.#handler);
                    // Set this 's ready state to CLOSING .
                    this.#handler.readyState = states.CLOSING;
                    // Reject this 's opened promise and closed promise with signal ’s abort reason .
                    this.#openedPromise.reject(signal.reason);
                    this.#closedPromise.reject(signal.reason);
                    // Set this 's handshake aborted to true.
                    this.#handshakeAborted = true;
                }
            }, {
                once: true
            });
        }
        // 9.  Let client be this 's relevant settings object .
        const client = environmentSettingsObject.settingsObject;
        // 10. Run this step in parallel :
        // 10.1. Establish a WebSocket connection given urlRecord , protocols , and client . [FETCH]
        this.#handler.controller = establishWebSocketConnection(urlRecord, protocols, client, this.#handler, options);
    }
    // The url getter steps are to return this 's url , serialized .
    get url() {
        return this.#url.toString();
    }
    // The opened getter steps are to return this 's opened promise .
    get opened() {
        return this.#openedPromise.promise;
    }
    // The closed getter steps are to return this 's closed promise .
    get closed() {
        return this.#closedPromise.promise;
    }
    // The close( closeInfo ) method steps are:
    close(closeInfo = undefined) {
        if (closeInfo !== null) {
            closeInfo = webidl.converters.WebSocketCloseInfo(closeInfo);
        }
        // 1. Let code be closeInfo [" closeCode "] if present, or null otherwise.
        const code = closeInfo.closeCode ?? null;
        // 2. Let reason be closeInfo [" reason "].
        const reason = closeInfo.reason;
        // 3. Close the WebSocket with this , code , and reason .
        closeWebSocketConnection(this.#handler, code, reason, true);
    }
    #write(chunk) {
        // See /websockets/stream/tentative/write.any.html
        chunk = webidl.converters.WebSocketStreamWrite(chunk);
        // 1. Let promise be a new promise created in stream ’s relevant realm .
        const promise = createDeferredPromise();
        // 2. Let data be null.
        let data = null;
        // 3. Let opcode be null.
        let opcode = null;
        // 4. If chunk is a BufferSource ,
        if (webidl.is.BufferSource(chunk)) {
            // 4.1. Set data to a copy of the bytes given chunk .
            data = new Uint8Array(ArrayBuffer.isView(chunk) ? new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength) : chunk.slice());
            // 4.2. Set opcode to a binary frame opcode.
            opcode = opcodes.BINARY;
        } else {
            // 5. Otherwise,
            // 5.1. Let string be the result of converting chunk to an IDL USVString .
            //    If this throws an exception, return a promise rejected with the exception.
            let string;
            try {
                string = webidl.converters.DOMString(chunk);
            } catch (e) {
                promise.reject(e);
                return promise.promise;
            }
            // 5.2. Set data to the result of UTF-8 encoding string .
            data = new TextEncoder().encode(string);
            // 5.3. Set opcode to a text frame opcode.
            opcode = opcodes.TEXT;
        }
        // 6. In parallel,
        // 6.1. Wait until there is sufficient buffer space in stream to send the message.
        // 6.2. If the closing handshake has not yet started , Send a WebSocket Message to stream comprised of data using opcode .
        if (!this.#handler.closeState.has(sentCloseFrameState.SENT) && !this.#handler.closeState.has(sentCloseFrameState.RECEIVED)) {
            const frame = new WebsocketFrameSend(data);
            this.#handler.socket.write(frame.createFrame(opcode), ()=>{
                promise.resolve(undefined);
            });
        }
        // 6.3. Queue a global task on the WebSocket task source given stream ’s relevant global object to resolve promise with undefined.
        return promise.promise;
    }
    /** @type {import('../websocket').Handler['onConnectionEstablished']} */ #onConnectionEstablished(response, parsedExtensions) {
        this.#handler.socket = response.socket;
        const parser = new ByteParser(this.#handler, parsedExtensions);
        parser.on('drain', ()=>this.#handler.onParserDrain());
        parser.on('error', (err)=>this.#handler.onParserError(err));
        this.#parser = parser;
        // 1. Change stream ’s ready state to OPEN (1).
        this.#handler.readyState = states.OPEN;
        // 2. Set stream ’s was ever connected to true.
        // This is done in the opening handshake.
        // 3. Let extensions be the extensions in use .
        const extensions = parsedExtensions ?? '';
        // 4. Let protocol be the subprotocol in use .
        const protocol = response.headersList.get('sec-websocket-protocol') ?? '';
        // 5. Let pullAlgorithm be an action that pulls bytes from stream .
        // 6. Let cancelAlgorithm be an action that cancels stream with reason , given reason .
        // 7. Let readable be a new ReadableStream .
        // 8. Set up readable with pullAlgorithm and cancelAlgorithm .
        const readable = new ReadableStream({
            start: (controller)=>{
                this.#readableStreamController = controller;
            },
            pull (controller) {
                let chunk;
                while(controller.desiredSize > 0 && (chunk = response.socket.read()) !== null){
                    controller.enqueue(chunk);
                }
            },
            cancel: (reason)=>this.#cancel(reason)
        });
        // 9. Let writeAlgorithm be an action that writes chunk to stream , given chunk .
        // 10. Let closeAlgorithm be an action that closes stream .
        // 11. Let abortAlgorithm be an action that aborts stream with reason , given reason .
        // 12. Let writable be a new WritableStream .
        // 13. Set up writable with writeAlgorithm , closeAlgorithm , and abortAlgorithm .
        const writable = new WritableStream({
            write: (chunk)=>this.#write(chunk),
            close: ()=>closeWebSocketConnection(this.#handler, null, null),
            abort: (reason)=>this.#closeUsingReason(reason)
        });
        // Set stream ’s readable stream to readable .
        this.#readableStream = readable;
        // Set stream ’s writable stream to writable .
        this.#writableStream = writable;
        // Resolve stream ’s opened promise with WebSocketOpenInfo «[ " extensions " → extensions , " protocol " → protocol , " readable " → readable , " writable " → writable ]».
        this.#openedPromise.resolve({
            extensions,
            protocol,
            readable,
            writable
        });
    }
    /** @type {import('../websocket').Handler['onMessage']} */ #onMessage(type, data) {
        // 1. If stream’s ready state is not OPEN (1), then return.
        if (this.#handler.readyState !== states.OPEN) {
            return;
        }
        // 2. Let chunk be determined by switching on type:
        //      - type indicates that the data is Text
        //          a new DOMString containing data
        //      - type indicates that the data is Binary
        //          a new Uint8Array object, created in the relevant Realm of the
        //          WebSocketStream object, whose contents are data
        let chunk;
        if (type === opcodes.TEXT) {
            try {
                chunk = utf8Decode(data);
            } catch  {
                failWebsocketConnection(this.#handler, 'Received invalid UTF-8 in text frame.');
                return;
            }
        } else if (type === opcodes.BINARY) {
            chunk = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        }
        // 3. Enqueue chunk into stream’s readable stream.
        this.#readableStreamController.enqueue(chunk);
    // 4. Apply backpressure to the WebSocket.
    }
    /** @type {import('../websocket').Handler['onSocketClose']} */ #onSocketClose() {
        const wasClean = this.#handler.closeState.has(sentCloseFrameState.SENT) && this.#handler.closeState.has(sentCloseFrameState.RECEIVED);
        // 1. Change the ready state to CLOSED (3).
        this.#handler.readyState = states.CLOSED;
        // 2. If stream ’s handshake aborted is true, then return.
        if (this.#handshakeAborted) {
            return;
        }
        // 3. If stream ’s was ever connected is false, then reject stream ’s opened promise with a new WebSocketError.
        if (!this.#handler.wasEverConnected) {
            this.#openedPromise.reject(new WebSocketError('Socket never opened'));
        }
        const result = this.#parser.closingInfo;
        // 4. Let code be the WebSocket connection close code .
        // https://datatracker.ietf.org/doc/html/rfc6455#section-7.1.5
        // If this Close control frame contains no status code, _The WebSocket
        // Connection Close Code_ is considered to be 1005. If _The WebSocket
        // Connection is Closed_ and no Close control frame was received by the
        // endpoint (such as could occur if the underlying transport connection
        // is lost), _The WebSocket Connection Close Code_ is considered to be
        // 1006.
        let code = result?.code ?? 1005;
        if (!this.#handler.closeState.has(sentCloseFrameState.SENT) && !this.#handler.closeState.has(sentCloseFrameState.RECEIVED)) {
            code = 1006;
        }
        // 5. Let reason be the result of applying UTF-8 decode without BOM to the WebSocket connection close reason .
        const reason = result?.reason == null ? '' : utf8DecodeBytes(Buffer.from(result.reason));
        // 6. If the connection was closed cleanly ,
        if (wasClean) {
            // 6.1. Close stream ’s readable stream .
            this.#readableStreamController.close();
            // 6.2. Error stream ’s writable stream with an " InvalidStateError " DOMException indicating that a closed WebSocketStream cannot be written to.
            if (!this.#writableStream.locked) {
                this.#writableStream.abort(new DOMException('A closed WebSocketStream cannot be written to', 'InvalidStateError'));
            }
            // 6.3. Resolve stream ’s closed promise with WebSocketCloseInfo «[ " closeCode " → code , " reason " → reason ]».
            this.#closedPromise.resolve({
                closeCode: code,
                reason
            });
        } else {
            // 7. Otherwise,
            // 7.1. Let error be a new WebSocketError whose closeCode is code and reason is reason .
            const error = createUnvalidatedWebSocketError('unclean close', code, reason);
            // 7.2. Error stream ’s readable stream with error .
            this.#readableStreamController.error(error);
            // 7.3. Error stream ’s writable stream with error .
            this.#writableStream.abort(error);
            // 7.4. Reject stream ’s closed promise with error .
            this.#closedPromise.reject(error);
        }
    }
    #closeUsingReason(reason) {
        // 1. Let code be null.
        let code = null;
        // 2. Let reasonString be the empty string.
        let reasonString = '';
        // 3. If reason implements WebSocketError ,
        if (webidl.is.WebSocketError(reason)) {
            // 3.1. Set code to reason ’s closeCode .
            code = reason.closeCode;
            // 3.2. Set reasonString to reason ’s reason .
            reasonString = reason.reason;
        }
        // 4. Close the WebSocket with stream , code , and reasonString . If this throws an exception,
        //    discard code and reasonString and close the WebSocket with stream .
        closeWebSocketConnection(this.#handler, code, reasonString);
    }
    //  To cancel a WebSocketStream stream given reason , close using reason giving stream and reason .
    #cancel(reason) {
        this.#closeUsingReason(reason);
    }
}
Object.defineProperties(WebSocketStream.prototype, {
    url: kEnumerableProperty,
    opened: kEnumerableProperty,
    closed: kEnumerableProperty,
    close: kEnumerableProperty,
    [Symbol.toStringTag]: {
        value: 'WebSocketStream',
        writable: false,
        enumerable: false,
        configurable: true
    }
});
webidl.converters.WebSocketStreamOptions = webidl.dictionaryConverter([
    {
        key: 'protocols',
        converter: webidl.sequenceConverter(webidl.converters.USVString),
        defaultValue: ()=>[]
    },
    {
        key: 'signal',
        converter: webidl.nullableConverter(webidl.converters.AbortSignal),
        defaultValue: ()=>null
    }
]);
webidl.converters.WebSocketCloseInfo = webidl.dictionaryConverter([
    {
        key: 'closeCode',
        converter: (V)=>webidl.converters['unsigned short'](V, webidl.attributes.EnforceRange)
    },
    {
        key: 'reason',
        converter: webidl.converters.USVString,
        defaultValue: ()=>''
    }
]);
webidl.converters.WebSocketStreamWrite = function(V) {
    if (typeof V === 'string') {
        return webidl.converters.USVString(V);
    }
    return webidl.converters.BufferSource(V);
};
module.exports = {
    WebSocketStream
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/eventsource/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Checks if the given value is a valid LastEventId.
 * @param {string} value
 * @returns {boolean}
 */ function isValidLastEventId(value) {
    // LastEventId should not contain U+0000 NULL
    return value.indexOf('\u0000') === -1;
}
/**
 * Checks if the given value is a base 10 digit.
 * @param {string} value
 * @returns {boolean}
 */ function isASCIINumber(value) {
    if (value.length === 0) return false;
    for(let i = 0; i < value.length; i++){
        if (value.charCodeAt(i) < 0x30 || value.charCodeAt(i) > 0x39) return false;
    }
    return true;
}
module.exports = {
    isValidLastEventId,
    isASCIINumber
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/eventsource/eventsource-stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Transform } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { isASCIINumber, isValidLastEventId } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/eventsource/util.js [app-rsc] (ecmascript)");
/**
 * @type {number[]} BOM
 */ const BOM = [
    0xEF,
    0xBB,
    0xBF
];
/**
 * @type {10} LF
 */ const LF = 0x0A;
/**
 * @type {13} CR
 */ const CR = 0x0D;
/**
 * @type {58} COLON
 */ const COLON = 0x3A;
/**
 * @type {32} SPACE
 */ const SPACE = 0x20;
/**
 * @typedef {object} EventSourceStreamEvent
 * @type {object}
 * @property {string} [event] The event type.
 * @property {string} [data] The data of the message.
 * @property {string} [id] A unique ID for the event.
 * @property {string} [retry] The reconnection time, in milliseconds.
 */ /**
 * @typedef eventSourceSettings
 * @type {object}
 * @property {string} [lastEventId] The last event ID received from the server.
 * @property {string} [origin] The origin of the event source.
 * @property {number} [reconnectionTime] The reconnection time, in milliseconds.
 */ class EventSourceStream extends Transform {
    /**
   * @type {eventSourceSettings}
   */ state;
    /**
   * Leading byte-order-mark check.
   * @type {boolean}
   */ checkBOM = true;
    /**
   * @type {boolean}
   */ crlfCheck = false;
    /**
   * @type {boolean}
   */ eventEndCheck = false;
    /**
   * @type {Buffer|null}
   */ buffer = null;
    pos = 0;
    event = {
        data: undefined,
        event: undefined,
        id: undefined,
        retry: undefined
    };
    /**
   * @param {object} options
   * @param {boolean} [options.readableObjectMode]
   * @param {eventSourceSettings} [options.eventSourceSettings]
   * @param {(chunk: any, encoding?: BufferEncoding | undefined) => boolean} [options.push]
   */ constructor(options = {}){
        // Enable object mode as EventSourceStream emits objects of shape
        // EventSourceStreamEvent
        options.readableObjectMode = true;
        super(options);
        this.state = options.eventSourceSettings || {};
        if (options.push) {
            this.push = options.push;
        }
    }
    /**
   * @param {Buffer} chunk
   * @param {string} _encoding
   * @param {Function} callback
   * @returns {void}
   */ _transform(chunk, _encoding, callback) {
        if (chunk.length === 0) {
            callback();
            return;
        }
        // Cache the chunk in the buffer, as the data might not be complete while
        // processing it
        // TODO: Investigate if there is a more performant way to handle
        // incoming chunks
        // see: https://github.com/nodejs/undici/issues/2630
        if (this.buffer) {
            this.buffer = Buffer.concat([
                this.buffer,
                chunk
            ]);
        } else {
            this.buffer = chunk;
        }
        // Strip leading byte-order-mark if we opened the stream and started
        // the processing of the incoming data
        if (this.checkBOM) {
            switch(this.buffer.length){
                case 1:
                    // Check if the first byte is the same as the first byte of the BOM
                    if (this.buffer[0] === BOM[0]) {
                        // If it is, we need to wait for more data
                        callback();
                        return;
                    }
                    // Set the checkBOM flag to false as we don't need to check for the
                    // BOM anymore
                    this.checkBOM = false;
                    // The buffer only contains one byte so we need to wait for more data
                    callback();
                    return;
                case 2:
                    // Check if the first two bytes are the same as the first two bytes
                    // of the BOM
                    if (this.buffer[0] === BOM[0] && this.buffer[1] === BOM[1]) {
                        // If it is, we need to wait for more data, because the third byte
                        // is needed to determine if it is the BOM or not
                        callback();
                        return;
                    }
                    // Set the checkBOM flag to false as we don't need to check for the
                    // BOM anymore
                    this.checkBOM = false;
                    break;
                case 3:
                    // Check if the first three bytes are the same as the first three
                    // bytes of the BOM
                    if (this.buffer[0] === BOM[0] && this.buffer[1] === BOM[1] && this.buffer[2] === BOM[2]) {
                        // If it is, we can drop the buffered data, as it is only the BOM
                        this.buffer = Buffer.alloc(0);
                        // Set the checkBOM flag to false as we don't need to check for the
                        // BOM anymore
                        this.checkBOM = false;
                        // Await more data
                        callback();
                        return;
                    }
                    // If it is not the BOM, we can start processing the data
                    this.checkBOM = false;
                    break;
                default:
                    // The buffer is longer than 3 bytes, so we can drop the BOM if it is
                    // present
                    if (this.buffer[0] === BOM[0] && this.buffer[1] === BOM[1] && this.buffer[2] === BOM[2]) {
                        // Remove the BOM from the buffer
                        this.buffer = this.buffer.subarray(3);
                    }
                    // Set the checkBOM flag to false as we don't need to check for the
                    this.checkBOM = false;
                    break;
            }
        }
        while(this.pos < this.buffer.length){
            // If the previous line ended with an end-of-line, we need to check
            // if the next character is also an end-of-line.
            if (this.eventEndCheck) {
                // If the the current character is an end-of-line, then the event
                // is finished and we can process it
                // If the previous line ended with a carriage return, we need to
                // check if the current character is a line feed and remove it
                // from the buffer.
                if (this.crlfCheck) {
                    // If the current character is a line feed, we can remove it
                    // from the buffer and reset the crlfCheck flag
                    if (this.buffer[this.pos] === LF) {
                        this.buffer = this.buffer.subarray(this.pos + 1);
                        this.pos = 0;
                        this.crlfCheck = false;
                        continue;
                    }
                    this.crlfCheck = false;
                }
                if (this.buffer[this.pos] === LF || this.buffer[this.pos] === CR) {
                    // If the current character is a carriage return, we need to
                    // set the crlfCheck flag to true, as we need to check if the
                    // next character is a line feed so we can remove it from the
                    // buffer
                    if (this.buffer[this.pos] === CR) {
                        this.crlfCheck = true;
                    }
                    this.buffer = this.buffer.subarray(this.pos + 1);
                    this.pos = 0;
                    if (this.event.data !== undefined || this.event.event || this.event.id !== undefined || this.event.retry) {
                        this.processEvent(this.event);
                    }
                    this.clearEvent();
                    continue;
                }
                // If the current character is not an end-of-line, then the event
                // is not finished and we have to reset the eventEndCheck flag
                this.eventEndCheck = false;
                continue;
            }
            // If the current character is an end-of-line, we can process the
            // line
            if (this.buffer[this.pos] === LF || this.buffer[this.pos] === CR) {
                // If the current character is a carriage return, we need to
                // set the crlfCheck flag to true, as we need to check if the
                // next character is a line feed
                if (this.buffer[this.pos] === CR) {
                    this.crlfCheck = true;
                }
                // In any case, we can process the line as we reached an
                // end-of-line character
                this.parseLine(this.buffer.subarray(0, this.pos), this.event);
                // Remove the processed line from the buffer
                this.buffer = this.buffer.subarray(this.pos + 1);
                // Reset the position as we removed the processed line from the buffer
                this.pos = 0;
                // A line was processed and this could be the end of the event. We need
                // to check if the next line is empty to determine if the event is
                // finished.
                this.eventEndCheck = true;
                continue;
            }
            this.pos++;
        }
        callback();
    }
    /**
   * @param {Buffer} line
   * @param {EventSourceStreamEvent} event
   */ parseLine(line, event) {
        // If the line is empty (a blank line)
        // Dispatch the event, as defined below.
        // This will be handled in the _transform method
        if (line.length === 0) {
            return;
        }
        // If the line starts with a U+003A COLON character (:)
        // Ignore the line.
        const colonPosition = line.indexOf(COLON);
        if (colonPosition === 0) {
            return;
        }
        let field = '';
        let value = '';
        // If the line contains a U+003A COLON character (:)
        if (colonPosition !== -1) {
            // Collect the characters on the line before the first U+003A COLON
            // character (:), and let field be that string.
            // TODO: Investigate if there is a more performant way to extract the
            // field
            // see: https://github.com/nodejs/undici/issues/2630
            field = line.subarray(0, colonPosition).toString('utf8');
            // Collect the characters on the line after the first U+003A COLON
            // character (:), and let value be that string.
            // If value starts with a U+0020 SPACE character, remove it from value.
            let valueStart = colonPosition + 1;
            if (line[valueStart] === SPACE) {
                ++valueStart;
            }
            // TODO: Investigate if there is a more performant way to extract the
            // value
            // see: https://github.com/nodejs/undici/issues/2630
            value = line.subarray(valueStart).toString('utf8');
        // Otherwise, the string is not empty but does not contain a U+003A COLON
        // character (:)
        } else {
            // Process the field using the steps described below, using the whole
            // line as the field name, and the empty string as the field value.
            field = line.toString('utf8');
            value = '';
        }
        // Modify the event with the field name and value. The value is also
        // decoded as UTF-8
        switch(field){
            case 'data':
                if (event[field] === undefined) {
                    event[field] = value;
                } else {
                    event[field] += `\n${value}`;
                }
                break;
            case 'retry':
                if (isASCIINumber(value)) {
                    event[field] = value;
                }
                break;
            case 'id':
                if (isValidLastEventId(value)) {
                    event[field] = value;
                }
                break;
            case 'event':
                if (value.length > 0) {
                    event[field] = value;
                }
                break;
        }
    }
    /**
   * @param {EventSourceStreamEvent} event
   */ processEvent(event) {
        if (event.retry && isASCIINumber(event.retry)) {
            this.state.reconnectionTime = parseInt(event.retry, 10);
        }
        if (event.id !== undefined && isValidLastEventId(event.id)) {
            this.state.lastEventId = event.id;
        }
        // only dispatch event, when data is provided
        if (event.data !== undefined) {
            this.push({
                type: event.event || 'message',
                options: {
                    data: event.data,
                    lastEventId: this.state.lastEventId,
                    origin: this.state.origin
                }
            });
        }
    }
    clearEvent() {
        this.event = {
            data: undefined,
            event: undefined,
            id: undefined,
            retry: undefined
        };
    }
}
module.exports = {
    EventSourceStream
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/eventsource/eventsource.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { pipeline } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { fetching } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/index.js [app-rsc] (ecmascript)");
const { makeRequest } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/request.js [app-rsc] (ecmascript)");
const { webidl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/webidl/index.js [app-rsc] (ecmascript)");
const { EventSourceStream } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/eventsource/eventsource-stream.js [app-rsc] (ecmascript)");
const { parseMIMEType } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-rsc] (ecmascript)");
const { createFastMessageEvent } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/events.js [app-rsc] (ecmascript)");
const { isNetworkError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/response.js [app-rsc] (ecmascript)");
const { kEnumerableProperty } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { environmentSettingsObject } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/util.js [app-rsc] (ecmascript)");
let experimentalWarned = false;
/**
 * A reconnection time, in milliseconds. This must initially be an implementation-defined value,
 * probably in the region of a few seconds.
 *
 * In Comparison:
 * - Chrome uses 3000ms.
 * - Deno uses 5000ms.
 *
 * @type {3000}
 */ const defaultReconnectionTime = 3000;
/**
 * The readyState attribute represents the state of the connection.
 * @typedef ReadyState
 * @type {0|1|2}
 * @readonly
 * @see https://html.spec.whatwg.org/multipage/server-sent-events.html#dom-eventsource-readystate-dev
 */ /**
 * The connection has not yet been established, or it was closed and the user
 * agent is reconnecting.
 * @type {0}
 */ const CONNECTING = 0;
/**
 * The user agent has an open connection and is dispatching events as it
 * receives them.
 * @type {1}
 */ const OPEN = 1;
/**
 * The connection is not open, and the user agent is not trying to reconnect.
 * @type {2}
 */ const CLOSED = 2;
/**
 * Requests for the element will have their mode set to "cors" and their credentials mode set to "same-origin".
 * @type {'anonymous'}
 */ const ANONYMOUS = 'anonymous';
/**
 * Requests for the element will have their mode set to "cors" and their credentials mode set to "include".
 * @type {'use-credentials'}
 */ const USE_CREDENTIALS = 'use-credentials';
/**
 * The EventSource interface is used to receive server-sent events. It
 * connects to a server over HTTP and receives events in text/event-stream
 * format without closing the connection.
 * @extends {EventTarget}
 * @see https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events
 * @api public
 */ class EventSource extends EventTarget {
    #events = {
        open: null,
        error: null,
        message: null
    };
    #url;
    #withCredentials = false;
    /**
   * @type {ReadyState}
   */ #readyState = CONNECTING;
    #request = null;
    #controller = null;
    #dispatcher;
    /**
   * @type {import('./eventsource-stream').eventSourceSettings}
   */ #state;
    /**
   * Creates a new EventSource object.
   * @param {string} url
   * @param {EventSourceInit} [eventSourceInitDict={}]
   * @see https://html.spec.whatwg.org/multipage/server-sent-events.html#the-eventsource-interface
   */ constructor(url, eventSourceInitDict = {}){
        // 1. Let ev be a new EventSource object.
        super();
        webidl.util.markAsUncloneable(this);
        const prefix = 'EventSource constructor';
        webidl.argumentLengthCheck(arguments, 1, prefix);
        if (!experimentalWarned) {
            experimentalWarned = true;
            process.emitWarning('EventSource is experimental, expect them to change at any time.', {
                code: 'UNDICI-ES'
            });
        }
        url = webidl.converters.USVString(url);
        eventSourceInitDict = webidl.converters.EventSourceInitDict(eventSourceInitDict, prefix, 'eventSourceInitDict');
        this.#dispatcher = eventSourceInitDict.node.dispatcher || eventSourceInitDict.dispatcher;
        this.#state = {
            lastEventId: '',
            reconnectionTime: eventSourceInitDict.node.reconnectionTime
        };
        // 2. Let settings be ev's relevant settings object.
        // https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object
        const settings = environmentSettingsObject;
        let urlRecord;
        try {
            // 3. Let urlRecord be the result of encoding-parsing a URL given url, relative to settings.
            urlRecord = new URL(url, settings.settingsObject.baseUrl);
            this.#state.origin = urlRecord.origin;
        } catch (e) {
            // 4. If urlRecord is failure, then throw a "SyntaxError" DOMException.
            throw new DOMException(e, 'SyntaxError');
        }
        // 5. Set ev's url to urlRecord.
        this.#url = urlRecord.href;
        // 6. Let corsAttributeState be Anonymous.
        let corsAttributeState = ANONYMOUS;
        // 7. If the value of eventSourceInitDict's withCredentials member is true,
        // then set corsAttributeState to Use Credentials and set ev's
        // withCredentials attribute to true.
        if (eventSourceInitDict.withCredentials === true) {
            corsAttributeState = USE_CREDENTIALS;
            this.#withCredentials = true;
        }
        // 8. Let request be the result of creating a potential-CORS request given
        // urlRecord, the empty string, and corsAttributeState.
        const initRequest = {
            redirect: 'follow',
            keepalive: true,
            // @see https://html.spec.whatwg.org/multipage/urls-and-fetching.html#cors-settings-attributes
            mode: 'cors',
            credentials: corsAttributeState === 'anonymous' ? 'same-origin' : 'omit',
            referrer: 'no-referrer'
        };
        // 9. Set request's client to settings.
        initRequest.client = environmentSettingsObject.settingsObject;
        // 10. User agents may set (`Accept`, `text/event-stream`) in request's header list.
        initRequest.headersList = [
            [
                'accept',
                {
                    name: 'accept',
                    value: 'text/event-stream'
                }
            ]
        ];
        // 11. Set request's cache mode to "no-store".
        initRequest.cache = 'no-store';
        // 12. Set request's initiator type to "other".
        initRequest.initiator = 'other';
        initRequest.urlList = [
            new URL(this.#url)
        ];
        // 13. Set ev's request to request.
        this.#request = makeRequest(initRequest);
        this.#connect();
    }
    /**
   * Returns the state of this EventSource object's connection. It can have the
   * values described below.
   * @returns {ReadyState}
   * @readonly
   */ get readyState() {
        return this.#readyState;
    }
    /**
   * Returns the URL providing the event stream.
   * @readonly
   * @returns {string}
   */ get url() {
        return this.#url;
    }
    /**
   * Returns a boolean indicating whether the EventSource object was
   * instantiated with CORS credentials set (true), or not (false, the default).
   */ get withCredentials() {
        return this.#withCredentials;
    }
    #connect() {
        if (this.#readyState === CLOSED) return;
        this.#readyState = CONNECTING;
        const fetchParams = {
            request: this.#request,
            dispatcher: this.#dispatcher
        };
        // 14. Let processEventSourceEndOfBody given response res be the following step: if res is not a network error, then reestablish the connection.
        const processEventSourceEndOfBody = (response)=>{
            if (!isNetworkError(response)) {
                return this.#reconnect();
            }
        };
        // 15. Fetch request, with processResponseEndOfBody set to processEventSourceEndOfBody...
        fetchParams.processResponseEndOfBody = processEventSourceEndOfBody;
        // and processResponse set to the following steps given response res:
        fetchParams.processResponse = (response)=>{
            // 1. If res is an aborted network error, then fail the connection.
            if (isNetworkError(response)) {
                // 1. When a user agent is to fail the connection, the user agent
                // must queue a task which, if the readyState attribute is set to a
                // value other than CLOSED, sets the readyState attribute to CLOSED
                // and fires an event named error at the EventSource object. Once the
                // user agent has failed the connection, it does not attempt to
                // reconnect.
                if (response.aborted) {
                    this.close();
                    this.dispatchEvent(new Event('error'));
                    return;
                // 2. Otherwise, if res is a network error, then reestablish the
                // connection, unless the user agent knows that to be futile, in
                // which case the user agent may fail the connection.
                } else {
                    this.#reconnect();
                    return;
                }
            }
            // 3. Otherwise, if res's status is not 200, or if res's `Content-Type`
            // is not `text/event-stream`, then fail the connection.
            const contentType = response.headersList.get('content-type', true);
            const mimeType = contentType !== null ? parseMIMEType(contentType) : 'failure';
            const contentTypeValid = mimeType !== 'failure' && mimeType.essence === 'text/event-stream';
            if (response.status !== 200 || contentTypeValid === false) {
                this.close();
                this.dispatchEvent(new Event('error'));
                return;
            }
            // 4. Otherwise, announce the connection and interpret res's body
            // line by line.
            // When a user agent is to announce the connection, the user agent
            // must queue a task which, if the readyState attribute is set to a
            // value other than CLOSED, sets the readyState attribute to OPEN
            // and fires an event named open at the EventSource object.
            // @see https://html.spec.whatwg.org/multipage/server-sent-events.html#sse-processing-model
            this.#readyState = OPEN;
            this.dispatchEvent(new Event('open'));
            // If redirected to a different origin, set the origin to the new origin.
            this.#state.origin = response.urlList[response.urlList.length - 1].origin;
            const eventSourceStream = new EventSourceStream({
                eventSourceSettings: this.#state,
                push: (event)=>{
                    this.dispatchEvent(createFastMessageEvent(event.type, event.options));
                }
            });
            pipeline(response.body.stream, eventSourceStream, (error)=>{
                if (error?.aborted === false) {
                    this.close();
                    this.dispatchEvent(new Event('error'));
                }
            });
        };
        this.#controller = fetching(fetchParams);
    }
    /**
   * @see https://html.spec.whatwg.org/multipage/server-sent-events.html#sse-processing-model
   * @returns {void}
   */ #reconnect() {
        // When a user agent is to reestablish the connection, the user agent must
        // run the following steps. These steps are run in parallel, not as part of
        // a task. (The tasks that it queues, of course, are run like normal tasks
        // and not themselves in parallel.)
        // 1. Queue a task to run the following steps:
        //   1. If the readyState attribute is set to CLOSED, abort the task.
        if (this.#readyState === CLOSED) return;
        //   2. Set the readyState attribute to CONNECTING.
        this.#readyState = CONNECTING;
        //   3. Fire an event named error at the EventSource object.
        this.dispatchEvent(new Event('error'));
        // 2. Wait a delay equal to the reconnection time of the event source.
        setTimeout(()=>{
            // 5. Queue a task to run the following steps:
            //   1. If the EventSource object's readyState attribute is not set to
            //      CONNECTING, then return.
            if (this.#readyState !== CONNECTING) return;
            //   2. Let request be the EventSource object's request.
            //   3. If the EventSource object's last event ID string is not the empty
            //      string, then:
            //      1. Let lastEventIDValue be the EventSource object's last event ID
            //         string, encoded as UTF-8.
            //      2. Set (`Last-Event-ID`, lastEventIDValue) in request's header
            //         list.
            if (this.#state.lastEventId.length) {
                this.#request.headersList.set('last-event-id', this.#state.lastEventId, true);
            }
            //   4. Fetch request and process the response obtained in this fashion, if any, as described earlier in this section.
            this.#connect();
        }, this.#state.reconnectionTime)?.unref();
    }
    /**
   * Closes the connection, if any, and sets the readyState attribute to
   * CLOSED.
   */ close() {
        webidl.brandCheck(this, EventSource);
        if (this.#readyState === CLOSED) return;
        this.#readyState = CLOSED;
        this.#controller.abort();
        this.#request = null;
    }
    get onopen() {
        return this.#events.open;
    }
    set onopen(fn) {
        if (this.#events.open) {
            this.removeEventListener('open', this.#events.open);
        }
        const listener = webidl.converters.EventHandlerNonNull(fn);
        if (listener !== null) {
            this.addEventListener('open', listener);
            this.#events.open = fn;
        } else {
            this.#events.open = null;
        }
    }
    get onmessage() {
        return this.#events.message;
    }
    set onmessage(fn) {
        if (this.#events.message) {
            this.removeEventListener('message', this.#events.message);
        }
        const listener = webidl.converters.EventHandlerNonNull(fn);
        if (listener !== null) {
            this.addEventListener('message', listener);
            this.#events.message = fn;
        } else {
            this.#events.message = null;
        }
    }
    get onerror() {
        return this.#events.error;
    }
    set onerror(fn) {
        if (this.#events.error) {
            this.removeEventListener('error', this.#events.error);
        }
        const listener = webidl.converters.EventHandlerNonNull(fn);
        if (listener !== null) {
            this.addEventListener('error', listener);
            this.#events.error = fn;
        } else {
            this.#events.error = null;
        }
    }
}
const constantsPropertyDescriptors = {
    CONNECTING: {
        __proto__: null,
        configurable: false,
        enumerable: true,
        value: CONNECTING,
        writable: false
    },
    OPEN: {
        __proto__: null,
        configurable: false,
        enumerable: true,
        value: OPEN,
        writable: false
    },
    CLOSED: {
        __proto__: null,
        configurable: false,
        enumerable: true,
        value: CLOSED,
        writable: false
    }
};
Object.defineProperties(EventSource, constantsPropertyDescriptors);
Object.defineProperties(EventSource.prototype, constantsPropertyDescriptors);
Object.defineProperties(EventSource.prototype, {
    close: kEnumerableProperty,
    onerror: kEnumerableProperty,
    onmessage: kEnumerableProperty,
    onopen: kEnumerableProperty,
    readyState: kEnumerableProperty,
    url: kEnumerableProperty,
    withCredentials: kEnumerableProperty
});
webidl.converters.EventSourceInitDict = webidl.dictionaryConverter([
    {
        key: 'withCredentials',
        converter: webidl.converters.boolean,
        defaultValue: ()=>false
    },
    {
        key: 'dispatcher',
        converter: webidl.converters.any
    },
    {
        key: 'node',
        converter: webidl.dictionaryConverter([
            {
                key: 'reconnectionTime',
                converter: webidl.converters['unsigned long'],
                defaultValue: ()=>defaultReconnectionTime
            },
            {
                key: 'dispatcher',
                converter: webidl.converters.any
            }
        ]),
        defaultValue: ()=>({})
    }
]);
module.exports = {
    EventSource,
    defaultReconnectionTime
};
}),
];

//# sourceMappingURL=646fa_undici_lib_web_912b1242._.js.map