module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    kClose: Symbol('close'),
    kDestroy: Symbol('destroy'),
    kDispatch: Symbol('dispatch'),
    kUrl: Symbol('url'),
    kWriting: Symbol('writing'),
    kResuming: Symbol('resuming'),
    kQueue: Symbol('queue'),
    kConnect: Symbol('connect'),
    kConnecting: Symbol('connecting'),
    kKeepAliveDefaultTimeout: Symbol('default keep alive timeout'),
    kKeepAliveMaxTimeout: Symbol('max keep alive timeout'),
    kKeepAliveTimeoutThreshold: Symbol('keep alive timeout threshold'),
    kKeepAliveTimeoutValue: Symbol('keep alive timeout'),
    kKeepAlive: Symbol('keep alive'),
    kHeadersTimeout: Symbol('headers timeout'),
    kBodyTimeout: Symbol('body timeout'),
    kServerName: Symbol('server name'),
    kLocalAddress: Symbol('local address'),
    kHost: Symbol('host'),
    kNoRef: Symbol('no ref'),
    kBodyUsed: Symbol('used'),
    kBody: Symbol('abstracted request body'),
    kRunning: Symbol('running'),
    kBlocking: Symbol('blocking'),
    kPending: Symbol('pending'),
    kSize: Symbol('size'),
    kBusy: Symbol('busy'),
    kQueued: Symbol('queued'),
    kFree: Symbol('free'),
    kConnected: Symbol('connected'),
    kClosed: Symbol('closed'),
    kNeedDrain: Symbol('need drain'),
    kReset: Symbol('reset'),
    kDestroyed: Symbol.for('nodejs.stream.destroyed'),
    kResume: Symbol('resume'),
    kOnError: Symbol('on error'),
    kMaxHeadersSize: Symbol('max headers size'),
    kRunningIdx: Symbol('running index'),
    kPendingIdx: Symbol('pending index'),
    kError: Symbol('error'),
    kClients: Symbol('clients'),
    kClient: Symbol('client'),
    kParser: Symbol('parser'),
    kOnDestroyed: Symbol('destroy callbacks'),
    kPipelining: Symbol('pipelining'),
    kSocket: Symbol('socket'),
    kHostHeader: Symbol('host header'),
    kConnector: Symbol('connector'),
    kStrictContentLength: Symbol('strict content length'),
    kMaxRedirections: Symbol('maxRedirections'),
    kMaxRequests: Symbol('maxRequestsPerClient'),
    kProxy: Symbol('proxy agent options'),
    kCounter: Symbol('socket request counter'),
    kMaxResponseSize: Symbol('max response size'),
    kHTTP2Session: Symbol('http2Session'),
    kHTTP2SessionState: Symbol('http2Session state'),
    kRetryHandlerDefaultRetry: Symbol('retry agent default retry'),
    kConstruct: Symbol('constructable'),
    kListeners: Symbol('listeners'),
    kHTTPContext: Symbol('http context'),
    kMaxConcurrentStreams: Symbol('max concurrent streams'),
    kNoProxyAgent: Symbol('no proxy agent'),
    kHttpProxyAgent: Symbol('http proxy agent'),
    kHttpsProxyAgent: Symbol('https proxy agent')
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const kUndiciError = Symbol.for('undici.error.UND_ERR');
class UndiciError extends Error {
    constructor(message, options){
        super(message, options);
        this.name = 'UndiciError';
        this.code = 'UND_ERR';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kUndiciError] === true;
    }
    get [kUndiciError]() {
        return true;
    }
}
const kConnectTimeoutError = Symbol.for('undici.error.UND_ERR_CONNECT_TIMEOUT');
class ConnectTimeoutError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'ConnectTimeoutError';
        this.message = message || 'Connect Timeout Error';
        this.code = 'UND_ERR_CONNECT_TIMEOUT';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kConnectTimeoutError] === true;
    }
    get [kConnectTimeoutError]() {
        return true;
    }
}
const kHeadersTimeoutError = Symbol.for('undici.error.UND_ERR_HEADERS_TIMEOUT');
class HeadersTimeoutError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'HeadersTimeoutError';
        this.message = message || 'Headers Timeout Error';
        this.code = 'UND_ERR_HEADERS_TIMEOUT';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kHeadersTimeoutError] === true;
    }
    get [kHeadersTimeoutError]() {
        return true;
    }
}
const kHeadersOverflowError = Symbol.for('undici.error.UND_ERR_HEADERS_OVERFLOW');
class HeadersOverflowError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'HeadersOverflowError';
        this.message = message || 'Headers Overflow Error';
        this.code = 'UND_ERR_HEADERS_OVERFLOW';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kHeadersOverflowError] === true;
    }
    get [kHeadersOverflowError]() {
        return true;
    }
}
const kBodyTimeoutError = Symbol.for('undici.error.UND_ERR_BODY_TIMEOUT');
class BodyTimeoutError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'BodyTimeoutError';
        this.message = message || 'Body Timeout Error';
        this.code = 'UND_ERR_BODY_TIMEOUT';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kBodyTimeoutError] === true;
    }
    get [kBodyTimeoutError]() {
        return true;
    }
}
const kInvalidArgumentError = Symbol.for('undici.error.UND_ERR_INVALID_ARG');
class InvalidArgumentError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'InvalidArgumentError';
        this.message = message || 'Invalid Argument Error';
        this.code = 'UND_ERR_INVALID_ARG';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kInvalidArgumentError] === true;
    }
    get [kInvalidArgumentError]() {
        return true;
    }
}
const kInvalidReturnValueError = Symbol.for('undici.error.UND_ERR_INVALID_RETURN_VALUE');
class InvalidReturnValueError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'InvalidReturnValueError';
        this.message = message || 'Invalid Return Value Error';
        this.code = 'UND_ERR_INVALID_RETURN_VALUE';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kInvalidReturnValueError] === true;
    }
    get [kInvalidReturnValueError]() {
        return true;
    }
}
const kAbortError = Symbol.for('undici.error.UND_ERR_ABORT');
class AbortError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'AbortError';
        this.message = message || 'The operation was aborted';
        this.code = 'UND_ERR_ABORT';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kAbortError] === true;
    }
    get [kAbortError]() {
        return true;
    }
}
const kRequestAbortedError = Symbol.for('undici.error.UND_ERR_ABORTED');
class RequestAbortedError extends AbortError {
    constructor(message){
        super(message);
        this.name = 'AbortError';
        this.message = message || 'Request aborted';
        this.code = 'UND_ERR_ABORTED';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kRequestAbortedError] === true;
    }
    get [kRequestAbortedError]() {
        return true;
    }
}
const kInformationalError = Symbol.for('undici.error.UND_ERR_INFO');
class InformationalError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'InformationalError';
        this.message = message || 'Request information';
        this.code = 'UND_ERR_INFO';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kInformationalError] === true;
    }
    get [kInformationalError]() {
        return true;
    }
}
const kRequestContentLengthMismatchError = Symbol.for('undici.error.UND_ERR_REQ_CONTENT_LENGTH_MISMATCH');
class RequestContentLengthMismatchError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'RequestContentLengthMismatchError';
        this.message = message || 'Request body length does not match content-length header';
        this.code = 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kRequestContentLengthMismatchError] === true;
    }
    get [kRequestContentLengthMismatchError]() {
        return true;
    }
}
const kResponseContentLengthMismatchError = Symbol.for('undici.error.UND_ERR_RES_CONTENT_LENGTH_MISMATCH');
class ResponseContentLengthMismatchError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'ResponseContentLengthMismatchError';
        this.message = message || 'Response body length does not match content-length header';
        this.code = 'UND_ERR_RES_CONTENT_LENGTH_MISMATCH';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kResponseContentLengthMismatchError] === true;
    }
    get [kResponseContentLengthMismatchError]() {
        return true;
    }
}
const kClientDestroyedError = Symbol.for('undici.error.UND_ERR_DESTROYED');
class ClientDestroyedError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'ClientDestroyedError';
        this.message = message || 'The client is destroyed';
        this.code = 'UND_ERR_DESTROYED';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kClientDestroyedError] === true;
    }
    get [kClientDestroyedError]() {
        return true;
    }
}
const kClientClosedError = Symbol.for('undici.error.UND_ERR_CLOSED');
class ClientClosedError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'ClientClosedError';
        this.message = message || 'The client is closed';
        this.code = 'UND_ERR_CLOSED';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kClientClosedError] === true;
    }
    get [kClientClosedError]() {
        return true;
    }
}
const kSocketError = Symbol.for('undici.error.UND_ERR_SOCKET');
class SocketError extends UndiciError {
    constructor(message, socket){
        super(message);
        this.name = 'SocketError';
        this.message = message || 'Socket error';
        this.code = 'UND_ERR_SOCKET';
        this.socket = socket;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kSocketError] === true;
    }
    get [kSocketError]() {
        return true;
    }
}
const kNotSupportedError = Symbol.for('undici.error.UND_ERR_NOT_SUPPORTED');
class NotSupportedError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'NotSupportedError';
        this.message = message || 'Not supported error';
        this.code = 'UND_ERR_NOT_SUPPORTED';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kNotSupportedError] === true;
    }
    get [kNotSupportedError]() {
        return true;
    }
}
const kBalancedPoolMissingUpstreamError = Symbol.for('undici.error.UND_ERR_BPL_MISSING_UPSTREAM');
class BalancedPoolMissingUpstreamError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'MissingUpstreamError';
        this.message = message || 'No upstream has been added to the BalancedPool';
        this.code = 'UND_ERR_BPL_MISSING_UPSTREAM';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kBalancedPoolMissingUpstreamError] === true;
    }
    get [kBalancedPoolMissingUpstreamError]() {
        return true;
    }
}
const kHTTPParserError = Symbol.for('undici.error.UND_ERR_HTTP_PARSER');
class HTTPParserError extends Error {
    constructor(message, code, data){
        super(message);
        this.name = 'HTTPParserError';
        this.code = code ? `HPE_${code}` : undefined;
        this.data = data ? data.toString() : undefined;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kHTTPParserError] === true;
    }
    get [kHTTPParserError]() {
        return true;
    }
}
const kResponseExceededMaxSizeError = Symbol.for('undici.error.UND_ERR_RES_EXCEEDED_MAX_SIZE');
class ResponseExceededMaxSizeError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'ResponseExceededMaxSizeError';
        this.message = message || 'Response content exceeded max size';
        this.code = 'UND_ERR_RES_EXCEEDED_MAX_SIZE';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kResponseExceededMaxSizeError] === true;
    }
    get [kResponseExceededMaxSizeError]() {
        return true;
    }
}
const kRequestRetryError = Symbol.for('undici.error.UND_ERR_REQ_RETRY');
class RequestRetryError extends UndiciError {
    constructor(message, code, { headers, data }){
        super(message);
        this.name = 'RequestRetryError';
        this.message = message || 'Request retry error';
        this.code = 'UND_ERR_REQ_RETRY';
        this.statusCode = code;
        this.data = data;
        this.headers = headers;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kRequestRetryError] === true;
    }
    get [kRequestRetryError]() {
        return true;
    }
}
const kResponseError = Symbol.for('undici.error.UND_ERR_RESPONSE');
class ResponseError extends UndiciError {
    constructor(message, code, { headers, body }){
        super(message);
        this.name = 'ResponseError';
        this.message = message || 'Response error';
        this.code = 'UND_ERR_RESPONSE';
        this.statusCode = code;
        this.body = body;
        this.headers = headers;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kResponseError] === true;
    }
    get [kResponseError]() {
        return true;
    }
}
const kSecureProxyConnectionError = Symbol.for('undici.error.UND_ERR_PRX_TLS');
class SecureProxyConnectionError extends UndiciError {
    constructor(cause, message, options = {}){
        super(message, {
            cause,
            ...options
        });
        this.name = 'SecureProxyConnectionError';
        this.message = message || 'Secure Proxy Connection failed';
        this.code = 'UND_ERR_PRX_TLS';
        this.cause = cause;
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kSecureProxyConnectionError] === true;
    }
    get [kSecureProxyConnectionError]() {
        return true;
    }
}
const kMaxOriginsReachedError = Symbol.for('undici.error.UND_ERR_MAX_ORIGINS_REACHED');
class MaxOriginsReachedError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'MaxOriginsReachedError';
        this.message = message || 'Maximum allowed origins reached';
        this.code = 'UND_ERR_MAX_ORIGINS_REACHED';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kMaxOriginsReachedError] === true;
    }
    get [kMaxOriginsReachedError]() {
        return true;
    }
}
module.exports = {
    AbortError,
    HTTPParserError,
    UndiciError,
    HeadersTimeoutError,
    HeadersOverflowError,
    BodyTimeoutError,
    RequestContentLengthMismatchError,
    ConnectTimeoutError,
    InvalidArgumentError,
    InvalidReturnValueError,
    RequestAbortedError,
    ClientDestroyedError,
    ClientClosedError,
    InformationalError,
    SocketError,
    NotSupportedError,
    ResponseContentLengthMismatchError,
    BalancedPoolMissingUpstreamError,
    ResponseExceededMaxSizeError,
    RequestRetryError,
    ResponseError,
    SecureProxyConnectionError,
    MaxOriginsReachedError
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @see https://developer.mozilla.org/docs/Web/HTTP/Headers
 */ const wellknownHeaderNames = [
    'Accept',
    'Accept-Encoding',
    'Accept-Language',
    'Accept-Ranges',
    'Access-Control-Allow-Credentials',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods',
    'Access-Control-Allow-Origin',
    'Access-Control-Expose-Headers',
    'Access-Control-Max-Age',
    'Access-Control-Request-Headers',
    'Access-Control-Request-Method',
    'Age',
    'Allow',
    'Alt-Svc',
    'Alt-Used',
    'Authorization',
    'Cache-Control',
    'Clear-Site-Data',
    'Connection',
    'Content-Disposition',
    'Content-Encoding',
    'Content-Language',
    'Content-Length',
    'Content-Location',
    'Content-Range',
    'Content-Security-Policy',
    'Content-Security-Policy-Report-Only',
    'Content-Type',
    'Cookie',
    'Cross-Origin-Embedder-Policy',
    'Cross-Origin-Opener-Policy',
    'Cross-Origin-Resource-Policy',
    'Date',
    'Device-Memory',
    'Downlink',
    'ECT',
    'ETag',
    'Expect',
    'Expect-CT',
    'Expires',
    'Forwarded',
    'From',
    'Host',
    'If-Match',
    'If-Modified-Since',
    'If-None-Match',
    'If-Range',
    'If-Unmodified-Since',
    'Keep-Alive',
    'Last-Modified',
    'Link',
    'Location',
    'Max-Forwards',
    'Origin',
    'Permissions-Policy',
    'Pragma',
    'Proxy-Authenticate',
    'Proxy-Authorization',
    'RTT',
    'Range',
    'Referer',
    'Referrer-Policy',
    'Refresh',
    'Retry-After',
    'Sec-WebSocket-Accept',
    'Sec-WebSocket-Extensions',
    'Sec-WebSocket-Key',
    'Sec-WebSocket-Protocol',
    'Sec-WebSocket-Version',
    'Server',
    'Server-Timing',
    'Service-Worker-Allowed',
    'Service-Worker-Navigation-Preload',
    'Set-Cookie',
    'SourceMap',
    'Strict-Transport-Security',
    'Supports-Loading-Mode',
    'TE',
    'Timing-Allow-Origin',
    'Trailer',
    'Transfer-Encoding',
    'Upgrade',
    'Upgrade-Insecure-Requests',
    'User-Agent',
    'Vary',
    'Via',
    'WWW-Authenticate',
    'X-Content-Type-Options',
    'X-DNS-Prefetch-Control',
    'X-Frame-Options',
    'X-Permitted-Cross-Domain-Policies',
    'X-Powered-By',
    'X-Requested-With',
    'X-XSS-Protection'
];
/** @type {Record<typeof wellknownHeaderNames[number]|Lowercase<typeof wellknownHeaderNames[number]>, string>} */ const headerNameLowerCasedRecord = {};
// Note: object prototypes should not be able to be referenced. e.g. `Object#hasOwnProperty`.
Object.setPrototypeOf(headerNameLowerCasedRecord, null);
/**
 * @type {Record<Lowercase<typeof wellknownHeaderNames[number]>, Buffer>}
 */ const wellknownHeaderNameBuffers = {};
// Note: object prototypes should not be able to be referenced. e.g. `Object#hasOwnProperty`.
Object.setPrototypeOf(wellknownHeaderNameBuffers, null);
/**
 * @param {string} header Lowercased header
 * @returns {Buffer}
 */ function getHeaderNameAsBuffer(header) {
    let buffer = wellknownHeaderNameBuffers[header];
    if (buffer === undefined) {
        buffer = Buffer.from(header);
    }
    return buffer;
}
for(let i = 0; i < wellknownHeaderNames.length; ++i){
    const key = wellknownHeaderNames[i];
    const lowerCasedKey = key.toLowerCase();
    headerNameLowerCasedRecord[key] = headerNameLowerCasedRecord[lowerCasedKey] = lowerCasedKey;
}
module.exports = {
    wellknownHeaderNames,
    headerNameLowerCasedRecord,
    getHeaderNameAsBuffer
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/tree.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { wellknownHeaderNames, headerNameLowerCasedRecord } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/constants.js [app-rsc] (ecmascript)");
class TstNode {
    /** @type {any} */ value = null;
    /** @type {null | TstNode} */ left = null;
    /** @type {null | TstNode} */ middle = null;
    /** @type {null | TstNode} */ right = null;
    /** @type {number} */ code;
    /**
   * @param {string} key
   * @param {any} value
   * @param {number} index
   */ constructor(key, value, index){
        if (index === undefined || index >= key.length) {
            throw new TypeError('Unreachable');
        }
        const code = this.code = key.charCodeAt(index);
        // check code is ascii string
        if (code > 0x7F) {
            throw new TypeError('key must be ascii string');
        }
        if (key.length !== ++index) {
            this.middle = new TstNode(key, value, index);
        } else {
            this.value = value;
        }
    }
    /**
   * @param {string} key
   * @param {any} value
   * @returns {void}
   */ add(key, value) {
        const length = key.length;
        if (length === 0) {
            throw new TypeError('Unreachable');
        }
        let index = 0;
        /**
     * @type {TstNode}
     */ let node = this;
        while(true){
            const code = key.charCodeAt(index);
            // check code is ascii string
            if (code > 0x7F) {
                throw new TypeError('key must be ascii string');
            }
            if (node.code === code) {
                if (length === ++index) {
                    node.value = value;
                    break;
                } else if (node.middle !== null) {
                    node = node.middle;
                } else {
                    node.middle = new TstNode(key, value, index);
                    break;
                }
            } else if (node.code < code) {
                if (node.left !== null) {
                    node = node.left;
                } else {
                    node.left = new TstNode(key, value, index);
                    break;
                }
            } else if (node.right !== null) {
                node = node.right;
            } else {
                node.right = new TstNode(key, value, index);
                break;
            }
        }
    }
    /**
   * @param {Uint8Array} key
   * @returns {TstNode | null}
   */ search(key) {
        const keylength = key.length;
        let index = 0;
        /**
     * @type {TstNode|null}
     */ let node = this;
        while(node !== null && index < keylength){
            let code = key[index];
            // A-Z
            // First check if it is bigger than 0x5a.
            // Lowercase letters have higher char codes than uppercase ones.
            // Also we assume that headers will mostly contain lowercase characters.
            if (code <= 0x5a && code >= 0x41) {
                // Lowercase for uppercase.
                code |= 32;
            }
            while(node !== null){
                if (code === node.code) {
                    if (keylength === ++index) {
                        // Returns Node since it is the last key.
                        return node;
                    }
                    node = node.middle;
                    break;
                }
                node = node.code < code ? node.left : node.right;
            }
        }
        return null;
    }
}
class TernarySearchTree {
    /** @type {TstNode | null} */ node = null;
    /**
   * @param {string} key
   * @param {any} value
   * @returns {void}
   * */ insert(key, value) {
        if (this.node === null) {
            this.node = new TstNode(key, value, 0);
        } else {
            this.node.add(key, value);
        }
    }
    /**
   * @param {Uint8Array} key
   * @returns {any}
   */ lookup(key) {
        return this.node?.search(key)?.value ?? null;
    }
}
const tree = new TernarySearchTree();
for(let i = 0; i < wellknownHeaderNames.length; ++i){
    const key = headerNameLowerCasedRecord[wellknownHeaderNames[i]];
    tree.insert(key, key);
}
module.exports = {
    TernarySearchTree,
    tree
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { kDestroyed, kBodyUsed, kListeners, kBody } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const { IncomingMessage } = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const stream = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const net = __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
const { stringify } = __turbopack_context__.r("[externals]/node:querystring [external] (node:querystring, cjs)");
const { EventEmitter: EE } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const timers = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/timers.js [app-rsc] (ecmascript)");
const { InvalidArgumentError, ConnectTimeoutError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const { headerNameLowerCasedRecord } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/constants.js [app-rsc] (ecmascript)");
const { tree } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/tree.js [app-rsc] (ecmascript)");
const [nodeMajor, nodeMinor] = process.versions.node.split('.', 2).map((v)=>Number(v));
class BodyAsyncIterable {
    constructor(body){
        this[kBody] = body;
        this[kBodyUsed] = false;
    }
    async *[Symbol.asyncIterator]() {
        assert(!this[kBodyUsed], 'disturbed');
        this[kBodyUsed] = true;
        yield* this[kBody];
    }
}
function noop() {}
/**
 * @param {*} body
 * @returns {*}
 */ function wrapRequestBody(body) {
    if (isStream(body)) {
        // TODO (fix): Provide some way for the user to cache the file to e.g. /tmp
        // so that it can be dispatched again?
        // TODO (fix): Do we need 100-expect support to provide a way to do this properly?
        if (bodyLength(body) === 0) {
            body.on('data', function() {
                assert(false);
            });
        }
        if (typeof body.readableDidRead !== 'boolean') {
            body[kBodyUsed] = false;
            EE.prototype.on.call(body, 'data', function() {
                this[kBodyUsed] = true;
            });
        }
        return body;
    } else if (body && typeof body.pipeTo === 'function') {
        // TODO (fix): We can't access ReadableStream internal state
        // to determine whether or not it has been disturbed. This is just
        // a workaround.
        return new BodyAsyncIterable(body);
    } else if (body && typeof body !== 'string' && !ArrayBuffer.isView(body) && isIterable(body)) {
        // TODO: Should we allow re-using iterable if !this.opts.idempotent
        // or through some other flag?
        return new BodyAsyncIterable(body);
    } else {
        return body;
    }
}
/**
 * @param {*} obj
 * @returns {obj is import('node:stream').Stream}
 */ function isStream(obj) {
    return obj && typeof obj === 'object' && typeof obj.pipe === 'function' && typeof obj.on === 'function';
}
/**
 * @param {*} object
 * @returns {object is Blob}
 * based on https://github.com/node-fetch/fetch-blob/blob/8ab587d34080de94140b54f07168451e7d0b655e/index.js#L229-L241 (MIT License)
 */ function isBlobLike(object) {
    if (object === null) {
        return false;
    } else if (object instanceof Blob) {
        return true;
    } else if (typeof object !== 'object') {
        return false;
    } else {
        const sTag = object[Symbol.toStringTag];
        return (sTag === 'Blob' || sTag === 'File') && ('stream' in object && typeof object.stream === 'function' || 'arrayBuffer' in object && typeof object.arrayBuffer === 'function');
    }
}
/**
 * @param {string} url The path to check for query strings or fragments.
 * @returns {boolean} Returns true if the path contains a query string or fragment.
 */ function pathHasQueryOrFragment(url) {
    return url.includes('?') || url.includes('#');
}
/**
 * @param {string} url The URL to add the query params to
 * @param {import('node:querystring').ParsedUrlQueryInput} queryParams The object to serialize into a URL query string
 * @returns {string} The URL with the query params added
 */ function serializePathWithQuery(url, queryParams) {
    if (pathHasQueryOrFragment(url)) {
        throw new Error('Query params cannot be passed when url already contains "?" or "#".');
    }
    const stringified = stringify(queryParams);
    if (stringified) {
        url += '?' + stringified;
    }
    return url;
}
/**
 * @param {number|string|undefined} port
 * @returns {boolean}
 */ function isValidPort(port) {
    const value = parseInt(port, 10);
    return value === Number(port) && value >= 0 && value <= 65535;
}
/**
 * Check if the value is a valid http or https prefixed string.
 *
 * @param {string} value
 * @returns {boolean}
 */ function isHttpOrHttpsPrefixed(value) {
    return value != null && value[0] === 'h' && value[1] === 't' && value[2] === 't' && value[3] === 'p' && (value[4] === ':' || value[4] === 's' && value[5] === ':');
}
/**
 * @param {string|URL|Record<string,string>} url
 * @returns {URL}
 */ function parseURL(url) {
    if (typeof url === 'string') {
        /**
     * @type {URL}
     */ url = new URL(url);
        if (!isHttpOrHttpsPrefixed(url.origin || url.protocol)) {
            throw new InvalidArgumentError('Invalid URL protocol: the URL must start with `http:` or `https:`.');
        }
        return url;
    }
    if (!url || typeof url !== 'object') {
        throw new InvalidArgumentError('Invalid URL: The URL argument must be a non-null object.');
    }
    if (!(url instanceof URL)) {
        if (url.port != null && url.port !== '' && isValidPort(url.port) === false) {
            throw new InvalidArgumentError('Invalid URL: port must be a valid integer or a string representation of an integer.');
        }
        if (url.path != null && typeof url.path !== 'string') {
            throw new InvalidArgumentError('Invalid URL path: the path must be a string or null/undefined.');
        }
        if (url.pathname != null && typeof url.pathname !== 'string') {
            throw new InvalidArgumentError('Invalid URL pathname: the pathname must be a string or null/undefined.');
        }
        if (url.hostname != null && typeof url.hostname !== 'string') {
            throw new InvalidArgumentError('Invalid URL hostname: the hostname must be a string or null/undefined.');
        }
        if (url.origin != null && typeof url.origin !== 'string') {
            throw new InvalidArgumentError('Invalid URL origin: the origin must be a string or null/undefined.');
        }
        if (!isHttpOrHttpsPrefixed(url.origin || url.protocol)) {
            throw new InvalidArgumentError('Invalid URL protocol: the URL must start with `http:` or `https:`.');
        }
        const port = url.port != null ? url.port : url.protocol === 'https:' ? 443 : 80;
        let origin = url.origin != null ? url.origin : `${url.protocol || ''}//${url.hostname || ''}:${port}`;
        let path = url.path != null ? url.path : `${url.pathname || ''}${url.search || ''}`;
        if (origin[origin.length - 1] === '/') {
            origin = origin.slice(0, origin.length - 1);
        }
        if (path && path[0] !== '/') {
            path = `/${path}`;
        }
        // new URL(path, origin) is unsafe when `path` contains an absolute URL
        // From https://developer.mozilla.org/en-US/docs/Web/API/URL/URL:
        // If first parameter is a relative URL, second param is required, and will be used as the base URL.
        // If first parameter is an absolute URL, a given second param will be ignored.
        return new URL(`${origin}${path}`);
    }
    if (!isHttpOrHttpsPrefixed(url.origin || url.protocol)) {
        throw new InvalidArgumentError('Invalid URL protocol: the URL must start with `http:` or `https:`.');
    }
    return url;
}
/**
 * @param {string|URL|Record<string, string>} url
 * @returns {URL}
 */ function parseOrigin(url) {
    url = parseURL(url);
    if (url.pathname !== '/' || url.search || url.hash) {
        throw new InvalidArgumentError('invalid url');
    }
    return url;
}
/**
 * @param {string} host
 * @returns {string}
 */ function getHostname(host) {
    if (host[0] === '[') {
        const idx = host.indexOf(']');
        assert(idx !== -1);
        return host.substring(1, idx);
    }
    const idx = host.indexOf(':');
    if (idx === -1) return host;
    return host.substring(0, idx);
}
/**
 * IP addresses are not valid server names per RFC6066
 * Currently, the only server names supported are DNS hostnames
 * @param {string|null} host
 * @returns {string|null}
 */ function getServerName(host) {
    if (!host) {
        return null;
    }
    assert(typeof host === 'string');
    const servername = getHostname(host);
    if (net.isIP(servername)) {
        return '';
    }
    return servername;
}
/**
 * @function
 * @template T
 * @param {T} obj
 * @returns {T}
 */ function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * @param {*} obj
 * @returns {obj is AsyncIterable}
 */ function isAsyncIterable(obj) {
    return !!(obj != null && typeof obj[Symbol.asyncIterator] === 'function');
}
/**
 * @param {*} obj
 * @returns {obj is Iterable}
 */ function isIterable(obj) {
    return !!(obj != null && (typeof obj[Symbol.iterator] === 'function' || typeof obj[Symbol.asyncIterator] === 'function'));
}
/**
 * @param {Blob|Buffer|import ('stream').Stream} body
 * @returns {number|null}
 */ function bodyLength(body) {
    if (body == null) {
        return 0;
    } else if (isStream(body)) {
        const state = body._readableState;
        return state && state.objectMode === false && state.ended === true && Number.isFinite(state.length) ? state.length : null;
    } else if (isBlobLike(body)) {
        return body.size != null ? body.size : null;
    } else if (isBuffer(body)) {
        return body.byteLength;
    }
    return null;
}
/**
 * @param {import ('stream').Stream} body
 * @returns {boolean}
 */ function isDestroyed(body) {
    return body && !!(body.destroyed || body[kDestroyed] || stream.isDestroyed?.(body));
}
/**
 * @param {import ('stream').Stream} stream
 * @param {Error} [err]
 * @returns {void}
 */ function destroy(stream, err) {
    if (stream == null || !isStream(stream) || isDestroyed(stream)) {
        return;
    }
    if (typeof stream.destroy === 'function') {
        if (Object.getPrototypeOf(stream).constructor === IncomingMessage) {
            // See: https://github.com/nodejs/node/pull/38505/files
            stream.socket = null;
        }
        stream.destroy(err);
    } else if (err) {
        queueMicrotask(()=>{
            stream.emit('error', err);
        });
    }
    if (stream.destroyed !== true) {
        stream[kDestroyed] = true;
    }
}
const KEEPALIVE_TIMEOUT_EXPR = /timeout=(\d+)/;
/**
 * @param {string} val
 * @returns {number | null}
 */ function parseKeepAliveTimeout(val) {
    const m = val.match(KEEPALIVE_TIMEOUT_EXPR);
    return m ? parseInt(m[1], 10) * 1000 : null;
}
/**
 * Retrieves a header name and returns its lowercase value.
 * @param {string | Buffer} value Header name
 * @returns {string}
 */ function headerNameToString(value) {
    return typeof value === 'string' ? headerNameLowerCasedRecord[value] ?? value.toLowerCase() : tree.lookup(value) ?? value.toString('latin1').toLowerCase();
}
/**
 * Receive the buffer as a string and return its lowercase value.
 * @param {Buffer} value Header name
 * @returns {string}
 */ function bufferToLowerCasedHeaderName(value) {
    return tree.lookup(value) ?? value.toString('latin1').toLowerCase();
}
/**
 * @param {(Buffer | string)[]} headers
 * @param {Record<string, string | string[]>} [obj]
 * @returns {Record<string, string | string[]>}
 */ function parseHeaders(headers, obj) {
    if (obj === undefined) obj = {};
    for(let i = 0; i < headers.length; i += 2){
        const key = headerNameToString(headers[i]);
        let val = obj[key];
        if (val) {
            if (typeof val === 'string') {
                val = [
                    val
                ];
                obj[key] = val;
            }
            val.push(headers[i + 1].toString('utf8'));
        } else {
            const headersValue = headers[i + 1];
            if (typeof headersValue === 'string') {
                obj[key] = headersValue;
            } else {
                obj[key] = Array.isArray(headersValue) ? headersValue.map((x)=>x.toString('utf8')) : headersValue.toString('utf8');
            }
        }
    }
    // See https://github.com/nodejs/node/pull/46528
    if ('content-length' in obj && 'content-disposition' in obj) {
        obj['content-disposition'] = Buffer.from(obj['content-disposition']).toString('latin1');
    }
    return obj;
}
/**
 * @param {Buffer[]} headers
 * @returns {string[]}
 */ function parseRawHeaders(headers) {
    const headersLength = headers.length;
    /**
   * @type {string[]}
   */ const ret = new Array(headersLength);
    let hasContentLength = false;
    let contentDispositionIdx = -1;
    let key;
    let val;
    let kLen = 0;
    for(let n = 0; n < headersLength; n += 2){
        key = headers[n];
        val = headers[n + 1];
        typeof key !== 'string' && (key = key.toString());
        typeof val !== 'string' && (val = val.toString('utf8'));
        kLen = key.length;
        if (kLen === 14 && key[7] === '-' && (key === 'content-length' || key.toLowerCase() === 'content-length')) {
            hasContentLength = true;
        } else if (kLen === 19 && key[7] === '-' && (key === 'content-disposition' || key.toLowerCase() === 'content-disposition')) {
            contentDispositionIdx = n + 1;
        }
        ret[n] = key;
        ret[n + 1] = val;
    }
    // See https://github.com/nodejs/node/pull/46528
    if (hasContentLength && contentDispositionIdx !== -1) {
        ret[contentDispositionIdx] = Buffer.from(ret[contentDispositionIdx]).toString('latin1');
    }
    return ret;
}
/**
 * @param {string[]} headers
 * @param {Buffer[]} headers
 */ function encodeRawHeaders(headers) {
    if (!Array.isArray(headers)) {
        throw new TypeError('expected headers to be an array');
    }
    return headers.map((x)=>Buffer.from(x));
}
/**
 * @param {*} buffer
 * @returns {buffer is Buffer}
 */ function isBuffer(buffer) {
    // See, https://github.com/mcollina/undici/pull/319
    return buffer instanceof Uint8Array || Buffer.isBuffer(buffer);
}
/**
 * Asserts that the handler object is a request handler.
 *
 * @param {object} handler
 * @param {string} method
 * @param {string} [upgrade]
 * @returns {asserts handler is import('../api/api-request').RequestHandler}
 */ function assertRequestHandler(handler, method, upgrade) {
    if (!handler || typeof handler !== 'object') {
        throw new InvalidArgumentError('handler must be an object');
    }
    if (typeof handler.onRequestStart === 'function') {
        // TODO (fix): More checks...
        return;
    }
    if (typeof handler.onConnect !== 'function') {
        throw new InvalidArgumentError('invalid onConnect method');
    }
    if (typeof handler.onError !== 'function') {
        throw new InvalidArgumentError('invalid onError method');
    }
    if (typeof handler.onBodySent !== 'function' && handler.onBodySent !== undefined) {
        throw new InvalidArgumentError('invalid onBodySent method');
    }
    if (upgrade || method === 'CONNECT') {
        if (typeof handler.onUpgrade !== 'function') {
            throw new InvalidArgumentError('invalid onUpgrade method');
        }
    } else {
        if (typeof handler.onHeaders !== 'function') {
            throw new InvalidArgumentError('invalid onHeaders method');
        }
        if (typeof handler.onData !== 'function') {
            throw new InvalidArgumentError('invalid onData method');
        }
        if (typeof handler.onComplete !== 'function') {
            throw new InvalidArgumentError('invalid onComplete method');
        }
    }
}
/**
 * A body is disturbed if it has been read from and it cannot be re-used without
 * losing state or data.
 * @param {import('node:stream').Readable} body
 * @returns {boolean}
 */ function isDisturbed(body) {
    // TODO (fix): Why is body[kBodyUsed] needed?
    return !!(body && (stream.isDisturbed(body) || body[kBodyUsed]));
}
/**
 * @typedef {object} SocketInfo
 * @property {string} [localAddress]
 * @property {number} [localPort]
 * @property {string} [remoteAddress]
 * @property {number} [remotePort]
 * @property {string} [remoteFamily]
 * @property {number} [timeout]
 * @property {number} bytesWritten
 * @property {number} bytesRead
 */ /**
 * @param {import('net').Socket} socket
 * @returns {SocketInfo}
 */ function getSocketInfo(socket) {
    return {
        localAddress: socket.localAddress,
        localPort: socket.localPort,
        remoteAddress: socket.remoteAddress,
        remotePort: socket.remotePort,
        remoteFamily: socket.remoteFamily,
        timeout: socket.timeout,
        bytesWritten: socket.bytesWritten,
        bytesRead: socket.bytesRead
    };
}
/**
 * @param {Iterable} iterable
 * @returns {ReadableStream}
 */ function ReadableStreamFrom(iterable) {
    // We cannot use ReadableStream.from here because it does not return a byte stream.
    let iterator;
    return new ReadableStream({
        start () {
            iterator = iterable[Symbol.asyncIterator]();
        },
        pull (controller) {
            return iterator.next().then(({ done, value })=>{
                if (done) {
                    queueMicrotask(()=>{
                        controller.close();
                        controller.byobRequest?.respond(0);
                    });
                } else {
                    const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
                    if (buf.byteLength) {
                        controller.enqueue(new Uint8Array(buf));
                    } else {
                        return this.pull(controller);
                    }
                }
            });
        },
        cancel () {
            return iterator.return();
        },
        type: 'bytes'
    });
}
/**
 * The object should be a FormData instance and contains all the required
 * methods.
 * @param {*} object
 * @returns {object is FormData}
 */ function isFormDataLike(object) {
    return object && typeof object === 'object' && typeof object.append === 'function' && typeof object.delete === 'function' && typeof object.get === 'function' && typeof object.getAll === 'function' && typeof object.has === 'function' && typeof object.set === 'function' && object[Symbol.toStringTag] === 'FormData';
}
function addAbortListener(signal, listener) {
    if ('addEventListener' in signal) {
        signal.addEventListener('abort', listener, {
            once: true
        });
        return ()=>signal.removeEventListener('abort', listener);
    }
    signal.once('abort', listener);
    return ()=>signal.removeListener('abort', listener);
}
/**
 * @see https://tools.ietf.org/html/rfc7230#section-3.2.6
 * @param {number} c
 * @returns {boolean}
 */ function isTokenCharCode(c) {
    switch(c){
        case 0x22:
        case 0x28:
        case 0x29:
        case 0x2c:
        case 0x2f:
        case 0x3a:
        case 0x3b:
        case 0x3c:
        case 0x3d:
        case 0x3e:
        case 0x3f:
        case 0x40:
        case 0x5b:
        case 0x5c:
        case 0x5d:
        case 0x7b:
        case 0x7d:
            // DQUOTE and "(),/:;<=>?@[\]{}"
            return false;
        default:
            // VCHAR %x21-7E
            return c >= 0x21 && c <= 0x7e;
    }
}
/**
 * @param {string} characters
 * @returns {boolean}
 */ function isValidHTTPToken(characters) {
    if (characters.length === 0) {
        return false;
    }
    for(let i = 0; i < characters.length; ++i){
        if (!isTokenCharCode(characters.charCodeAt(i))) {
            return false;
        }
    }
    return true;
}
// headerCharRegex have been lifted from
// https://github.com/nodejs/node/blob/main/lib/_http_common.js
/**
 * Matches if val contains an invalid field-vchar
 *  field-value    = *( field-content / obs-fold )
 *  field-content  = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 *  field-vchar    = VCHAR / obs-text
 */ const headerCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
/**
 * @param {string} characters
 * @returns {boolean}
 */ function isValidHeaderValue(characters) {
    return !headerCharRegex.test(characters);
}
const rangeHeaderRegex = /^bytes (\d+)-(\d+)\/(\d+)?$/;
/**
 * @typedef {object} RangeHeader
 * @property {number} start
 * @property {number | null} end
 * @property {number | null} size
 */ /**
 * Parse accordingly to RFC 9110
 * @see https://www.rfc-editor.org/rfc/rfc9110#field.content-range
 * @param {string} [range]
 * @returns {RangeHeader|null}
 */ function parseRangeHeader(range) {
    if (range == null || range === '') return {
        start: 0,
        end: null,
        size: null
    };
    const m = range ? range.match(rangeHeaderRegex) : null;
    return m ? {
        start: parseInt(m[1]),
        end: m[2] ? parseInt(m[2]) : null,
        size: m[3] ? parseInt(m[3]) : null
    } : null;
}
/**
 * @template {import("events").EventEmitter} T
 * @param {T} obj
 * @param {string} name
 * @param {(...args: any[]) => void} listener
 * @returns {T}
 */ function addListener(obj, name, listener) {
    const listeners = obj[kListeners] ??= [];
    listeners.push([
        name,
        listener
    ]);
    obj.on(name, listener);
    return obj;
}
/**
 * @template {import("events").EventEmitter} T
 * @param {T} obj
 * @returns {T}
 */ function removeAllListeners(obj) {
    if (obj[kListeners] != null) {
        for (const [name, listener] of obj[kListeners]){
            obj.removeListener(name, listener);
        }
        obj[kListeners] = null;
    }
    return obj;
}
/**
 * @param {import ('../dispatcher/client')} client
 * @param {import ('../core/request')} request
 * @param {Error} err
 */ function errorRequest(client, request, err) {
    try {
        request.onError(err);
        assert(request.aborted);
    } catch (err) {
        client.emit('error', err);
    }
}
/**
 * @param {WeakRef<net.Socket>} socketWeakRef
 * @param {object} opts
 * @param {number} opts.timeout
 * @param {string} opts.hostname
 * @param {number} opts.port
 * @returns {() => void}
 */ const setupConnectTimeout = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (socketWeakRef, opts)=>{
    if (!opts.timeout) {
        return noop;
    }
    let s1 = null;
    const fastTimer = timers.setFastTimeout(()=>{
        // setImmediate is added to make sure that we prioritize socket error events over timeouts
        s1 = setImmediate(()=>{
            onConnectTimeout(socketWeakRef.deref(), opts);
        });
    }, opts.timeout);
    return ()=>{
        timers.clearFastTimeout(fastTimer);
        clearImmediate(s1);
    };
};
/**
 * @param {net.Socket} socket
 * @param {object} opts
 * @param {number} opts.timeout
 * @param {string} opts.hostname
 * @param {number} opts.port
 */ function onConnectTimeout(socket, opts) {
    // The socket could be already garbage collected
    if (socket == null) {
        return;
    }
    let message = 'Connect Timeout Error';
    if (Array.isArray(socket.autoSelectFamilyAttemptedAddresses)) {
        message += ` (attempted addresses: ${socket.autoSelectFamilyAttemptedAddresses.join(', ')},`;
    } else {
        message += ` (attempted address: ${opts.hostname}:${opts.port},`;
    }
    message += ` timeout: ${opts.timeout}ms)`;
    destroy(socket, new ConnectTimeoutError(message));
}
/**
 * @param {string} urlString
 * @returns {string}
 */ function getProtocolFromUrlString(urlString) {
    if (urlString[0] === 'h' && urlString[1] === 't' && urlString[2] === 't' && urlString[3] === 'p') {
        switch(urlString[4]){
            case ':':
                return 'http:';
            case 's':
                if (urlString[5] === ':') {
                    return 'https:';
                }
        }
    }
    // fallback if none of the usual suspects
    return urlString.slice(0, urlString.indexOf(':') + 1);
}
const kEnumerableProperty = Object.create(null);
kEnumerableProperty.enumerable = true;
const normalizedMethodRecordsBase = {
    delete: 'DELETE',
    DELETE: 'DELETE',
    get: 'GET',
    GET: 'GET',
    head: 'HEAD',
    HEAD: 'HEAD',
    options: 'OPTIONS',
    OPTIONS: 'OPTIONS',
    post: 'POST',
    POST: 'POST',
    put: 'PUT',
    PUT: 'PUT'
};
const normalizedMethodRecords = {
    ...normalizedMethodRecordsBase,
    patch: 'patch',
    PATCH: 'PATCH'
};
// Note: object prototypes should not be able to be referenced. e.g. `Object#hasOwnProperty`.
Object.setPrototypeOf(normalizedMethodRecordsBase, null);
Object.setPrototypeOf(normalizedMethodRecords, null);
module.exports = {
    kEnumerableProperty,
    isDisturbed,
    isBlobLike,
    parseOrigin,
    parseURL,
    getServerName,
    isStream,
    isIterable,
    isAsyncIterable,
    isDestroyed,
    headerNameToString,
    bufferToLowerCasedHeaderName,
    addListener,
    removeAllListeners,
    errorRequest,
    parseRawHeaders,
    encodeRawHeaders,
    parseHeaders,
    parseKeepAliveTimeout,
    destroy,
    bodyLength,
    deepClone,
    ReadableStreamFrom,
    isBuffer,
    assertRequestHandler,
    getSocketInfo,
    isFormDataLike,
    pathHasQueryOrFragment,
    serializePathWithQuery,
    addAbortListener,
    isValidHTTPToken,
    isValidHeaderValue,
    isTokenCharCode,
    parseRangeHeader,
    normalizedMethodRecordsBase,
    normalizedMethodRecords,
    isValidPort,
    isHttpOrHttpsPrefixed,
    nodeMajor,
    nodeMinor,
    safeHTTPMethods: Object.freeze([
        'GET',
        'HEAD',
        'OPTIONS',
        'TRACE'
    ]),
    wrapRequestBody,
    setupConnectTimeout,
    getProtocolFromUrlString
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/diagnostics.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const diagnosticsChannel = __turbopack_context__.r("[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)");
const util = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const undiciDebugLog = util.debuglog('undici');
const fetchDebuglog = util.debuglog('fetch');
const websocketDebuglog = util.debuglog('websocket');
const channels = {
    // Client
    beforeConnect: diagnosticsChannel.channel('undici:client:beforeConnect'),
    connected: diagnosticsChannel.channel('undici:client:connected'),
    connectError: diagnosticsChannel.channel('undici:client:connectError'),
    sendHeaders: diagnosticsChannel.channel('undici:client:sendHeaders'),
    // Request
    create: diagnosticsChannel.channel('undici:request:create'),
    bodySent: diagnosticsChannel.channel('undici:request:bodySent'),
    bodyChunkSent: diagnosticsChannel.channel('undici:request:bodyChunkSent'),
    bodyChunkReceived: diagnosticsChannel.channel('undici:request:bodyChunkReceived'),
    headers: diagnosticsChannel.channel('undici:request:headers'),
    trailers: diagnosticsChannel.channel('undici:request:trailers'),
    error: diagnosticsChannel.channel('undici:request:error'),
    // WebSocket
    open: diagnosticsChannel.channel('undici:websocket:open'),
    close: diagnosticsChannel.channel('undici:websocket:close'),
    socketError: diagnosticsChannel.channel('undici:websocket:socket_error'),
    ping: diagnosticsChannel.channel('undici:websocket:ping'),
    pong: diagnosticsChannel.channel('undici:websocket:pong')
};
let isTrackingClientEvents = false;
function trackClientEvents(debugLog = undiciDebugLog) {
    if (isTrackingClientEvents) {
        return;
    }
    isTrackingClientEvents = true;
    diagnosticsChannel.subscribe('undici:client:beforeConnect', (evt)=>{
        const { connectParams: { version, protocol, port, host } } = evt;
        debugLog('connecting to %s%s using %s%s', host, port ? `:${port}` : '', protocol, version);
    });
    diagnosticsChannel.subscribe('undici:client:connected', (evt)=>{
        const { connectParams: { version, protocol, port, host } } = evt;
        debugLog('connected to %s%s using %s%s', host, port ? `:${port}` : '', protocol, version);
    });
    diagnosticsChannel.subscribe('undici:client:connectError', (evt)=>{
        const { connectParams: { version, protocol, port, host }, error } = evt;
        debugLog('connection to %s%s using %s%s errored - %s', host, port ? `:${port}` : '', protocol, version, error.message);
    });
    diagnosticsChannel.subscribe('undici:client:sendHeaders', (evt)=>{
        const { request: { method, path, origin } } = evt;
        debugLog('sending request to %s %s%s', method, origin, path);
    });
}
let isTrackingRequestEvents = false;
function trackRequestEvents(debugLog = undiciDebugLog) {
    if (isTrackingRequestEvents) {
        return;
    }
    isTrackingRequestEvents = true;
    diagnosticsChannel.subscribe('undici:request:headers', (evt)=>{
        const { request: { method, path, origin }, response: { statusCode } } = evt;
        debugLog('received response to %s %s%s - HTTP %d', method, origin, path, statusCode);
    });
    diagnosticsChannel.subscribe('undici:request:trailers', (evt)=>{
        const { request: { method, path, origin } } = evt;
        debugLog('trailers received from %s %s%s', method, origin, path);
    });
    diagnosticsChannel.subscribe('undici:request:error', (evt)=>{
        const { request: { method, path, origin }, error } = evt;
        debugLog('request to %s %s%s errored - %s', method, origin, path, error.message);
    });
}
let isTrackingWebSocketEvents = false;
function trackWebSocketEvents(debugLog = websocketDebuglog) {
    if (isTrackingWebSocketEvents) {
        return;
    }
    isTrackingWebSocketEvents = true;
    diagnosticsChannel.subscribe('undici:websocket:open', (evt)=>{
        const { address: { address, port } } = evt;
        debugLog('connection opened %s%s', address, port ? `:${port}` : '');
    });
    diagnosticsChannel.subscribe('undici:websocket:close', (evt)=>{
        const { websocket, code, reason } = evt;
        debugLog('closed connection to %s - %s %s', websocket.url, code, reason);
    });
    diagnosticsChannel.subscribe('undici:websocket:socket_error', (err)=>{
        debugLog('connection errored - %s', err.message);
    });
    diagnosticsChannel.subscribe('undici:websocket:ping', (evt)=>{
        debugLog('ping received');
    });
    diagnosticsChannel.subscribe('undici:websocket:pong', (evt)=>{
        debugLog('pong received');
    });
}
if (undiciDebugLog.enabled || fetchDebuglog.enabled) {
    trackClientEvents(fetchDebuglog.enabled ? fetchDebuglog : undiciDebugLog);
    trackRequestEvents(fetchDebuglog.enabled ? fetchDebuglog : undiciDebugLog);
}
if (websocketDebuglog.enabled) {
    trackClientEvents(undiciDebugLog.enabled ? undiciDebugLog : websocketDebuglog);
    trackWebSocketEvents(websocketDebuglog);
}
module.exports = {
    channels
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/request.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { InvalidArgumentError, NotSupportedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { isValidHTTPToken, isValidHeaderValue, isStream, destroy, isBuffer, isFormDataLike, isIterable, isBlobLike, serializePathWithQuery, assertRequestHandler, getServerName, normalizedMethodRecords, getProtocolFromUrlString } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { channels } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/diagnostics.js [app-rsc] (ecmascript)");
const { headerNameLowerCasedRecord } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/constants.js [app-rsc] (ecmascript)");
// Verifies that a given path is valid does not contain control chars \x00 to \x20
const invalidPathRegex = /[^\u0021-\u00ff]/;
const kHandler = Symbol('handler');
class Request {
    constructor(origin, { path, method, body, headers, query, idempotent, blocking, upgrade, headersTimeout, bodyTimeout, reset, expectContinue, servername, throwOnError, maxRedirections }, handler){
        if (typeof path !== 'string') {
            throw new InvalidArgumentError('path must be a string');
        } else if (path[0] !== '/' && !(path.startsWith('http://') || path.startsWith('https://')) && method !== 'CONNECT') {
            throw new InvalidArgumentError('path must be an absolute URL or start with a slash');
        } else if (invalidPathRegex.test(path)) {
            throw new InvalidArgumentError('invalid request path');
        }
        if (typeof method !== 'string') {
            throw new InvalidArgumentError('method must be a string');
        } else if (normalizedMethodRecords[method] === undefined && !isValidHTTPToken(method)) {
            throw new InvalidArgumentError('invalid request method');
        }
        if (upgrade && typeof upgrade !== 'string') {
            throw new InvalidArgumentError('upgrade must be a string');
        }
        if (headersTimeout != null && (!Number.isFinite(headersTimeout) || headersTimeout < 0)) {
            throw new InvalidArgumentError('invalid headersTimeout');
        }
        if (bodyTimeout != null && (!Number.isFinite(bodyTimeout) || bodyTimeout < 0)) {
            throw new InvalidArgumentError('invalid bodyTimeout');
        }
        if (reset != null && typeof reset !== 'boolean') {
            throw new InvalidArgumentError('invalid reset');
        }
        if (expectContinue != null && typeof expectContinue !== 'boolean') {
            throw new InvalidArgumentError('invalid expectContinue');
        }
        if (throwOnError != null) {
            throw new InvalidArgumentError('invalid throwOnError');
        }
        if (maxRedirections != null && maxRedirections !== 0) {
            throw new InvalidArgumentError('maxRedirections is not supported, use the redirect interceptor');
        }
        this.headersTimeout = headersTimeout;
        this.bodyTimeout = bodyTimeout;
        this.method = method;
        this.abort = null;
        if (body == null) {
            this.body = null;
        } else if (isStream(body)) {
            this.body = body;
            const rState = this.body._readableState;
            if (!rState || !rState.autoDestroy) {
                this.endHandler = function autoDestroy() {
                    destroy(this);
                };
                this.body.on('end', this.endHandler);
            }
            this.errorHandler = (err)=>{
                if (this.abort) {
                    this.abort(err);
                } else {
                    this.error = err;
                }
            };
            this.body.on('error', this.errorHandler);
        } else if (isBuffer(body)) {
            this.body = body.byteLength ? body : null;
        } else if (ArrayBuffer.isView(body)) {
            this.body = body.buffer.byteLength ? Buffer.from(body.buffer, body.byteOffset, body.byteLength) : null;
        } else if (body instanceof ArrayBuffer) {
            this.body = body.byteLength ? Buffer.from(body) : null;
        } else if (typeof body === 'string') {
            this.body = body.length ? Buffer.from(body) : null;
        } else if (isFormDataLike(body) || isIterable(body) || isBlobLike(body)) {
            this.body = body;
        } else {
            throw new InvalidArgumentError('body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable');
        }
        this.completed = false;
        this.aborted = false;
        this.upgrade = upgrade || null;
        this.path = query ? serializePathWithQuery(path, query) : path;
        // TODO: shall we maybe standardize it to an URL object?
        this.origin = origin;
        this.protocol = getProtocolFromUrlString(origin);
        this.idempotent = idempotent == null ? method === 'HEAD' || method === 'GET' : idempotent;
        this.blocking = blocking ?? this.method !== 'HEAD';
        this.reset = reset == null ? null : reset;
        this.host = null;
        this.contentLength = null;
        this.contentType = null;
        this.headers = [];
        // Only for H2
        this.expectContinue = expectContinue != null ? expectContinue : false;
        if (Array.isArray(headers)) {
            if (headers.length % 2 !== 0) {
                throw new InvalidArgumentError('headers array must be even');
            }
            for(let i = 0; i < headers.length; i += 2){
                processHeader(this, headers[i], headers[i + 1]);
            }
        } else if (headers && typeof headers === 'object') {
            if (headers[Symbol.iterator]) {
                for (const header of headers){
                    if (!Array.isArray(header) || header.length !== 2) {
                        throw new InvalidArgumentError('headers must be in key-value pair format');
                    }
                    processHeader(this, header[0], header[1]);
                }
            } else {
                const keys = Object.keys(headers);
                for(let i = 0; i < keys.length; ++i){
                    processHeader(this, keys[i], headers[keys[i]]);
                }
            }
        } else if (headers != null) {
            throw new InvalidArgumentError('headers must be an object or an array');
        }
        assertRequestHandler(handler, method, upgrade);
        this.servername = servername || getServerName(this.host) || null;
        this[kHandler] = handler;
        if (channels.create.hasSubscribers) {
            channels.create.publish({
                request: this
            });
        }
    }
    onBodySent(chunk) {
        if (channels.bodyChunkSent.hasSubscribers) {
            channels.bodyChunkSent.publish({
                request: this,
                chunk
            });
        }
        if (this[kHandler].onBodySent) {
            try {
                return this[kHandler].onBodySent(chunk);
            } catch (err) {
                this.abort(err);
            }
        }
    }
    onRequestSent() {
        if (channels.bodySent.hasSubscribers) {
            channels.bodySent.publish({
                request: this
            });
        }
        if (this[kHandler].onRequestSent) {
            try {
                return this[kHandler].onRequestSent();
            } catch (err) {
                this.abort(err);
            }
        }
    }
    onConnect(abort) {
        assert(!this.aborted);
        assert(!this.completed);
        if (this.error) {
            abort(this.error);
        } else {
            this.abort = abort;
            return this[kHandler].onConnect(abort);
        }
    }
    onResponseStarted() {
        return this[kHandler].onResponseStarted?.();
    }
    onHeaders(statusCode, headers, resume, statusText) {
        assert(!this.aborted);
        assert(!this.completed);
        if (channels.headers.hasSubscribers) {
            channels.headers.publish({
                request: this,
                response: {
                    statusCode,
                    headers,
                    statusText
                }
            });
        }
        try {
            return this[kHandler].onHeaders(statusCode, headers, resume, statusText);
        } catch (err) {
            this.abort(err);
        }
    }
    onData(chunk) {
        assert(!this.aborted);
        assert(!this.completed);
        if (channels.bodyChunkReceived.hasSubscribers) {
            channels.bodyChunkReceived.publish({
                request: this,
                chunk
            });
        }
        try {
            return this[kHandler].onData(chunk);
        } catch (err) {
            this.abort(err);
            return false;
        }
    }
    onUpgrade(statusCode, headers, socket) {
        assert(!this.aborted);
        assert(!this.completed);
        return this[kHandler].onUpgrade(statusCode, headers, socket);
    }
    onComplete(trailers) {
        this.onFinally();
        assert(!this.aborted);
        assert(!this.completed);
        this.completed = true;
        if (channels.trailers.hasSubscribers) {
            channels.trailers.publish({
                request: this,
                trailers
            });
        }
        try {
            return this[kHandler].onComplete(trailers);
        } catch (err) {
            // TODO (fix): This might be a bad idea?
            this.onError(err);
        }
    }
    onError(error) {
        this.onFinally();
        if (channels.error.hasSubscribers) {
            channels.error.publish({
                request: this,
                error
            });
        }
        if (this.aborted) {
            return;
        }
        this.aborted = true;
        return this[kHandler].onError(error);
    }
    onFinally() {
        if (this.errorHandler) {
            this.body.off('error', this.errorHandler);
            this.errorHandler = null;
        }
        if (this.endHandler) {
            this.body.off('end', this.endHandler);
            this.endHandler = null;
        }
    }
    addHeader(key, value) {
        processHeader(this, key, value);
        return this;
    }
}
function processHeader(request, key, val) {
    if (val && typeof val === 'object' && !Array.isArray(val)) {
        throw new InvalidArgumentError(`invalid ${key} header`);
    } else if (val === undefined) {
        return;
    }
    let headerName = headerNameLowerCasedRecord[key];
    if (headerName === undefined) {
        headerName = key.toLowerCase();
        if (headerNameLowerCasedRecord[headerName] === undefined && !isValidHTTPToken(headerName)) {
            throw new InvalidArgumentError('invalid header key');
        }
    }
    if (Array.isArray(val)) {
        const arr = [];
        for(let i = 0; i < val.length; i++){
            if (typeof val[i] === 'string') {
                if (!isValidHeaderValue(val[i])) {
                    throw new InvalidArgumentError(`invalid ${key} header`);
                }
                arr.push(val[i]);
            } else if (val[i] === null) {
                arr.push('');
            } else if (typeof val[i] === 'object') {
                throw new InvalidArgumentError(`invalid ${key} header`);
            } else {
                arr.push(`${val[i]}`);
            }
        }
        val = arr;
    } else if (typeof val === 'string') {
        if (!isValidHeaderValue(val)) {
            throw new InvalidArgumentError(`invalid ${key} header`);
        }
    } else if (val === null) {
        val = '';
    } else {
        val = `${val}`;
    }
    if (request.host === null && headerName === 'host') {
        if (typeof val !== 'string') {
            throw new InvalidArgumentError('invalid host header');
        }
        // Consumed by Client
        request.host = val;
    } else if (request.contentLength === null && headerName === 'content-length') {
        request.contentLength = parseInt(val, 10);
        if (!Number.isFinite(request.contentLength)) {
            throw new InvalidArgumentError('invalid content-length header');
        }
    } else if (request.contentType === null && headerName === 'content-type') {
        request.contentType = val;
        request.headers.push(key, val);
    } else if (headerName === 'transfer-encoding' || headerName === 'keep-alive' || headerName === 'upgrade') {
        throw new InvalidArgumentError(`invalid ${headerName} header`);
    } else if (headerName === 'connection') {
        const value = typeof val === 'string' ? val.toLowerCase() : null;
        if (value !== 'close' && value !== 'keep-alive') {
            throw new InvalidArgumentError('invalid connection header');
        }
        if (value === 'close') {
            request.reset = true;
        }
    } else if (headerName === 'expect') {
        throw new NotSupportedError('expect header not supported');
    } else {
        request.headers.push(key, val);
    }
}
module.exports = Request;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/connect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const net = __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
let tls // include tls conditionally since it is not always available
;
// TODO: session re-use does not wait for the first
// connection to resolve the session and might therefore
// resolve the same servername multiple times even when
// re-use is enabled.
const SessionCache = class WeakSessionCache {
    constructor(maxCachedSessions){
        this._maxCachedSessions = maxCachedSessions;
        this._sessionCache = new Map();
        this._sessionRegistry = new FinalizationRegistry((key)=>{
            if (this._sessionCache.size < this._maxCachedSessions) {
                return;
            }
            const ref = this._sessionCache.get(key);
            if (ref !== undefined && ref.deref() === undefined) {
                this._sessionCache.delete(key);
            }
        });
    }
    get(sessionKey) {
        const ref = this._sessionCache.get(sessionKey);
        return ref ? ref.deref() : null;
    }
    set(sessionKey, session) {
        if (this._maxCachedSessions === 0) {
            return;
        }
        this._sessionCache.set(sessionKey, new WeakRef(session));
        this._sessionRegistry.register(session, sessionKey);
    }
};
function buildConnector({ allowH2, maxCachedSessions, socketPath, timeout, session: customSession, ...opts }) {
    if (maxCachedSessions != null && (!Number.isInteger(maxCachedSessions) || maxCachedSessions < 0)) {
        throw new InvalidArgumentError('maxCachedSessions must be a positive integer or zero');
    }
    const options = {
        path: socketPath,
        ...opts
    };
    const sessionCache = new SessionCache(maxCachedSessions == null ? 100 : maxCachedSessions);
    timeout = timeout == null ? 10e3 : timeout;
    allowH2 = allowH2 != null ? allowH2 : false;
    return function connect({ hostname, host, protocol, port, servername, localAddress, httpSocket }, callback) {
        let socket;
        if (protocol === 'https:') {
            if (!tls) {
                tls = __turbopack_context__.r("[externals]/node:tls [external] (node:tls, cjs)");
            }
            servername = servername || options.servername || util.getServerName(host) || null;
            const sessionKey = servername || hostname;
            assert(sessionKey);
            const session = customSession || sessionCache.get(sessionKey) || null;
            port = port || 443;
            socket = tls.connect({
                highWaterMark: 16384,
                ...options,
                servername,
                session,
                localAddress,
                ALPNProtocols: allowH2 ? [
                    'http/1.1',
                    'h2'
                ] : [
                    'http/1.1'
                ],
                socket: httpSocket,
                port,
                host: hostname
            });
            socket.on('session', function(session) {
                // TODO (fix): Can a session become invalid once established? Don't think so?
                sessionCache.set(sessionKey, session);
            });
        } else {
            assert(!httpSocket, 'httpSocket can only be sent on TLS update');
            port = port || 80;
            socket = net.connect({
                highWaterMark: 64 * 1024,
                ...options,
                localAddress,
                port,
                host: hostname
            });
        }
        // Set TCP keep alive options on the socket here instead of in connect() for the case of assigning the socket
        if (options.keepAlive == null || options.keepAlive) {
            const keepAliveInitialDelay = options.keepAliveInitialDelay === undefined ? 60e3 : options.keepAliveInitialDelay;
            socket.setKeepAlive(true, keepAliveInitialDelay);
        }
        const clearConnectTimeout = util.setupConnectTimeout(new WeakRef(socket), {
            timeout,
            hostname,
            port
        });
        socket.setNoDelay(true).once(protocol === 'https:' ? 'secureConnect' : 'connect', function() {
            queueMicrotask(clearConnectTimeout);
            if (callback) {
                const cb = callback;
                callback = null;
                cb(null, this);
            }
        }).on('error', function(err) {
            queueMicrotask(clearConnectTimeout);
            if (callback) {
                const cb = callback;
                callback = null;
                cb(err);
            }
        });
        return socket;
    };
}
module.exports = buildConnector;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/timers.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This module offers an optimized timer implementation designed for scenarios
 * where high precision is not critical.
 *
 * The timer achieves faster performance by using a low-resolution approach,
 * with an accuracy target of within 500ms. This makes it particularly useful
 * for timers with delays of 1 second or more, where exact timing is less
 * crucial.
 *
 * It's important to note that Node.js timers are inherently imprecise, as
 * delays can occur due to the event loop being blocked by other operations.
 * Consequently, timers may trigger later than their scheduled time.
 */ /**
 * The fastNow variable contains the internal fast timer clock value.
 *
 * @type {number}
 */ let fastNow = 0;
/**
 * RESOLUTION_MS represents the target resolution time in milliseconds.
 *
 * @type {number}
 * @default 1000
 */ const RESOLUTION_MS = 1e3;
/**
 * TICK_MS defines the desired interval in milliseconds between each tick.
 * The target value is set to half the resolution time, minus 1 ms, to account
 * for potential event loop overhead.
 *
 * @type {number}
 * @default 499
 */ const TICK_MS = (RESOLUTION_MS >> 1) - 1;
/**
 * fastNowTimeout is a Node.js timer used to manage and process
 * the FastTimers stored in the `fastTimers` array.
 *
 * @type {NodeJS.Timeout}
 */ let fastNowTimeout;
/**
 * The kFastTimer symbol is used to identify FastTimer instances.
 *
 * @type {Symbol}
 */ const kFastTimer = Symbol('kFastTimer');
/**
 * The fastTimers array contains all active FastTimers.
 *
 * @type {FastTimer[]}
 */ const fastTimers = [];
/**
 * These constants represent the various states of a FastTimer.
 */ /**
 * The `NOT_IN_LIST` constant indicates that the FastTimer is not included
 * in the `fastTimers` array. Timers with this status will not be processed
 * during the next tick by the `onTick` function.
 *
 * A FastTimer can be re-added to the `fastTimers` array by invoking the
 * `refresh` method on the FastTimer instance.
 *
 * @type {-2}
 */ const NOT_IN_LIST = -2;
/**
 * The `TO_BE_CLEARED` constant indicates that the FastTimer is scheduled
 * for removal from the `fastTimers` array. A FastTimer in this state will
 * be removed in the next tick by the `onTick` function and will no longer
 * be processed.
 *
 * This status is also set when the `clear` method is called on the FastTimer instance.
 *
 * @type {-1}
 */ const TO_BE_CLEARED = -1;
/**
 * The `PENDING` constant signifies that the FastTimer is awaiting processing
 * in the next tick by the `onTick` function. Timers with this status will have
 * their `_idleStart` value set and their status updated to `ACTIVE` in the next tick.
 *
 * @type {0}
 */ const PENDING = 0;
/**
 * The `ACTIVE` constant indicates that the FastTimer is active and waiting
 * for its timer to expire. During the next tick, the `onTick` function will
 * check if the timer has expired, and if so, it will execute the associated callback.
 *
 * @type {1}
 */ const ACTIVE = 1;
/**
 * The onTick function processes the fastTimers array.
 *
 * @returns {void}
 */ function onTick() {
    /**
   * Increment the fastNow value by the TICK_MS value, despite the actual time
   * that has passed since the last tick. This approach ensures independence
   * from the system clock and delays caused by a blocked event loop.
   *
   * @type {number}
   */ fastNow += TICK_MS;
    /**
   * The `idx` variable is used to iterate over the `fastTimers` array.
   * Expired timers are removed by replacing them with the last element in the array.
   * Consequently, `idx` is only incremented when the current element is not removed.
   *
   * @type {number}
   */ let idx = 0;
    /**
   * The len variable will contain the length of the fastTimers array
   * and will be decremented when a FastTimer should be removed from the
   * fastTimers array.
   *
   * @type {number}
   */ let len = fastTimers.length;
    while(idx < len){
        /**
     * @type {FastTimer}
     */ const timer = fastTimers[idx];
        // If the timer is in the ACTIVE state and the timer has expired, it will
        // be processed in the next tick.
        if (timer._state === PENDING) {
            // Set the _idleStart value to the fastNow value minus the TICK_MS value
            // to account for the time the timer was in the PENDING state.
            timer._idleStart = fastNow - TICK_MS;
            timer._state = ACTIVE;
        } else if (timer._state === ACTIVE && fastNow >= timer._idleStart + timer._idleTimeout) {
            timer._state = TO_BE_CLEARED;
            timer._idleStart = -1;
            timer._onTimeout(timer._timerArg);
        }
        if (timer._state === TO_BE_CLEARED) {
            timer._state = NOT_IN_LIST;
            // Move the last element to the current index and decrement len if it is
            // not the only element in the array.
            if (--len !== 0) {
                fastTimers[idx] = fastTimers[len];
            }
        } else {
            ++idx;
        }
    }
    // Set the length of the fastTimers array to the new length and thus
    // removing the excess FastTimers elements from the array.
    fastTimers.length = len;
    // If there are still active FastTimers in the array, refresh the Timer.
    // If there are no active FastTimers, the timer will be refreshed again
    // when a new FastTimer is instantiated.
    if (fastTimers.length !== 0) {
        refreshTimeout();
    }
}
function refreshTimeout() {
    // If the fastNowTimeout is already set and the Timer has the refresh()-
    // method available, call it to refresh the timer.
    // Some timer objects returned by setTimeout may not have a .refresh()
    // method (e.g. mocked timers in tests).
    if (fastNowTimeout?.refresh) {
        fastNowTimeout.refresh();
    // fastNowTimeout is not instantiated yet or refresh is not availabe,
    // create a new Timer.
    } else {
        clearTimeout(fastNowTimeout);
        fastNowTimeout = setTimeout(onTick, TICK_MS);
        // If the Timer has an unref method, call it to allow the process to exit,
        // if there are no other active handles. When using fake timers or mocked
        // environments (like Jest), .unref() may not be defined,
        fastNowTimeout?.unref();
    }
}
/**
 * The `FastTimer` class is a data structure designed to store and manage
 * timer information.
 */ class FastTimer {
    [kFastTimer] = true;
    /**
   * The state of the timer, which can be one of the following:
   * - NOT_IN_LIST (-2)
   * - TO_BE_CLEARED (-1)
   * - PENDING (0)
   * - ACTIVE (1)
   *
   * @type {-2|-1|0|1}
   * @private
   */ _state = NOT_IN_LIST;
    /**
   * The number of milliseconds to wait before calling the callback.
   *
   * @type {number}
   * @private
   */ _idleTimeout = -1;
    /**
   * The time in milliseconds when the timer was started. This value is used to
   * calculate when the timer should expire.
   *
   * @type {number}
   * @default -1
   * @private
   */ _idleStart = -1;
    /**
   * The function to be executed when the timer expires.
   * @type {Function}
   * @private
   */ _onTimeout;
    /**
   * The argument to be passed to the callback when the timer expires.
   *
   * @type {*}
   * @private
   */ _timerArg;
    /**
   * @constructor
   * @param {Function} callback A function to be executed after the timer
   * expires.
   * @param {number} delay The time, in milliseconds that the timer should wait
   * before the specified function or code is executed.
   * @param {*} arg
   */ constructor(callback, delay, arg){
        this._onTimeout = callback;
        this._idleTimeout = delay;
        this._timerArg = arg;
        this.refresh();
    }
    /**
   * Sets the timer's start time to the current time, and reschedules the timer
   * to call its callback at the previously specified duration adjusted to the
   * current time.
   * Using this on a timer that has already called its callback will reactivate
   * the timer.
   *
   * @returns {void}
   */ refresh() {
        // In the special case that the timer is not in the list of active timers,
        // add it back to the array to be processed in the next tick by the onTick
        // function.
        if (this._state === NOT_IN_LIST) {
            fastTimers.push(this);
        }
        // If the timer is the only active timer, refresh the fastNowTimeout for
        // better resolution.
        if (!fastNowTimeout || fastTimers.length === 1) {
            refreshTimeout();
        }
        // Setting the state to PENDING will cause the timer to be reset in the
        // next tick by the onTick function.
        this._state = PENDING;
    }
    /**
   * The `clear` method cancels the timer, preventing it from executing.
   *
   * @returns {void}
   * @private
   */ clear() {
        // Set the state to TO_BE_CLEARED to mark the timer for removal in the next
        // tick by the onTick function.
        this._state = TO_BE_CLEARED;
        // Reset the _idleStart value to -1 to indicate that the timer is no longer
        // active.
        this._idleStart = -1;
    }
}
/**
 * This module exports a setTimeout and clearTimeout function that can be
 * used as a drop-in replacement for the native functions.
 */ module.exports = {
    /**
   * The setTimeout() method sets a timer which executes a function once the
   * timer expires.
   * @param {Function} callback A function to be executed after the timer
   * expires.
   * @param {number} delay The time, in milliseconds that the timer should
   * wait before the specified function or code is executed.
   * @param {*} [arg] An optional argument to be passed to the callback function
   * when the timer expires.
   * @returns {NodeJS.Timeout|FastTimer}
   */ setTimeout (callback, delay, arg) {
        // If the delay is less than or equal to the RESOLUTION_MS value return a
        // native Node.js Timer instance.
        return delay <= RESOLUTION_MS ? setTimeout(callback, delay, arg) : new FastTimer(callback, delay, arg);
    },
    /**
   * The clearTimeout method cancels an instantiated Timer previously created
   * by calling setTimeout.
   *
   * @param {NodeJS.Timeout|FastTimer} timeout
   */ clearTimeout (timeout) {
        // If the timeout is a FastTimer, call its own clear method.
        if (timeout[kFastTimer]) {
            /**
       * @type {FastTimer}
       */ timeout.clear();
        // Otherwise it is an instance of a native NodeJS.Timeout, so call the
        // Node.js native clearTimeout function.
        } else {
            clearTimeout(timeout);
        }
    },
    /**
   * The setFastTimeout() method sets a fastTimer which executes a function once
   * the timer expires.
   * @param {Function} callback A function to be executed after the timer
   * expires.
   * @param {number} delay The time, in milliseconds that the timer should
   * wait before the specified function or code is executed.
   * @param {*} [arg] An optional argument to be passed to the callback function
   * when the timer expires.
   * @returns {FastTimer}
   */ setFastTimeout (callback, delay, arg) {
        return new FastTimer(callback, delay, arg);
    },
    /**
   * The clearTimeout method cancels an instantiated FastTimer previously
   * created by calling setFastTimeout.
   *
   * @param {FastTimer} timeout
   */ clearFastTimeout (timeout) {
        timeout.clear();
    },
    /**
   * The now method returns the value of the internal fast timer clock.
   *
   * @returns {number}
   */ now () {
        return fastNow;
    },
    /**
   * Trigger the onTick function to process the fastTimers array.
   * Exported for testing purposes only.
   * Marking as deprecated to discourage any use outside of testing.
   * @deprecated
   * @param {number} [delay=0] The delay in milliseconds to add to the now value.
   */ tick (delay = 0) {
        fastNow += delay - RESOLUTION_MS + 1;
        onTick();
        onTick();
    },
    /**
   * Reset FastTimers.
   * Exported for testing purposes only.
   * Marking as deprecated to discourage any use outside of testing.
   * @deprecated
   */ reset () {
        fastNow = 0;
        fastTimers.length = 0;
        clearTimeout(fastNowTimeout);
        fastNowTimeout = null;
    },
    /**
   * Exporting for testing purposes only.
   * Marking as deprecated to discourage any use outside of testing.
   * @deprecated
   */ kFastTimer
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/stats.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { kConnected, kPending, kRunning, kSize, kFree, kQueued } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
class ClientStats {
    constructor(client){
        this.connected = client[kConnected];
        this.pending = client[kPending];
        this.running = client[kRunning];
        this.size = client[kSize];
    }
}
class PoolStats {
    constructor(pool){
        this.connected = pool[kConnected];
        this.free = pool[kFree];
        this.pending = pool[kPending];
        this.queued = pool[kQueued];
        this.running = pool[kRunning];
        this.size = pool[kSize];
    }
}
module.exports = {
    ClientStats,
    PoolStats
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/promise.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @template {*} T
 * @typedef {Object} DeferredPromise
 * @property {Promise<T>} promise
 * @property {(value?: T) => void} resolve
 * @property {(reason?: any) => void} reject
 */ /**
 * @template {*} T
 * @returns {DeferredPromise<T>} An object containing a promise and its resolve/reject methods.
 */ function createDeferredPromise() {
    let res;
    let rej;
    const promise = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    return {
        promise,
        resolve: res,
        reject: rej
    };
}
module.exports = {
    createDeferredPromise
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/cache.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { safeHTTPMethods, pathHasQueryOrFragment } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { serializePathWithQuery } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
/**
 * @param {import('../../types/dispatcher.d.ts').default.DispatchOptions} opts
 */ function makeCacheKey(opts) {
    if (!opts.origin) {
        throw new Error('opts.origin is undefined');
    }
    let fullPath = opts.path || '/';
    if (opts.query && !pathHasQueryOrFragment(opts.path)) {
        fullPath = serializePathWithQuery(fullPath, opts.query);
    }
    return {
        origin: opts.origin.toString(),
        method: opts.method,
        path: fullPath,
        headers: opts.headers
    };
}
/**
 * @param {Record<string, string[] | string>}
 * @returns {Record<string, string[] | string>}
 */ function normalizeHeaders(opts) {
    let headers;
    if (opts.headers == null) {
        headers = {};
    } else if (typeof opts.headers[Symbol.iterator] === 'function') {
        headers = {};
        for (const x of opts.headers){
            if (!Array.isArray(x)) {
                throw new Error('opts.headers is not a valid header map');
            }
            const [key, val] = x;
            if (typeof key !== 'string' || typeof val !== 'string') {
                throw new Error('opts.headers is not a valid header map');
            }
            headers[key.toLowerCase()] = val;
        }
    } else if (typeof opts.headers === 'object') {
        headers = {};
        for (const key of Object.keys(opts.headers)){
            headers[key.toLowerCase()] = opts.headers[key];
        }
    } else {
        throw new Error('opts.headers is not an object');
    }
    return headers;
}
/**
 * @param {any} key
 */ function assertCacheKey(key) {
    if (typeof key !== 'object') {
        throw new TypeError(`expected key to be object, got ${typeof key}`);
    }
    for (const property of [
        'origin',
        'method',
        'path'
    ]){
        if (typeof key[property] !== 'string') {
            throw new TypeError(`expected key.${property} to be string, got ${typeof key[property]}`);
        }
    }
    if (key.headers !== undefined && typeof key.headers !== 'object') {
        throw new TypeError(`expected headers to be object, got ${typeof key}`);
    }
}
/**
 * @param {any} value
 */ function assertCacheValue(value) {
    if (typeof value !== 'object') {
        throw new TypeError(`expected value to be object, got ${typeof value}`);
    }
    for (const property of [
        'statusCode',
        'cachedAt',
        'staleAt',
        'deleteAt'
    ]){
        if (typeof value[property] !== 'number') {
            throw new TypeError(`expected value.${property} to be number, got ${typeof value[property]}`);
        }
    }
    if (typeof value.statusMessage !== 'string') {
        throw new TypeError(`expected value.statusMessage to be string, got ${typeof value.statusMessage}`);
    }
    if (value.headers != null && typeof value.headers !== 'object') {
        throw new TypeError(`expected value.rawHeaders to be object, got ${typeof value.headers}`);
    }
    if (value.vary !== undefined && typeof value.vary !== 'object') {
        throw new TypeError(`expected value.vary to be object, got ${typeof value.vary}`);
    }
    if (value.etag !== undefined && typeof value.etag !== 'string') {
        throw new TypeError(`expected value.etag to be string, got ${typeof value.etag}`);
    }
}
/**
 * @see https://www.rfc-editor.org/rfc/rfc9111.html#name-cache-control
 * @see https://www.iana.org/assignments/http-cache-directives/http-cache-directives.xhtml

 * @param {string | string[]} header
 * @returns {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives}
 */ function parseCacheControlHeader(header) {
    /**
   * @type {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives}
   */ const output = {};
    let directives;
    if (Array.isArray(header)) {
        directives = [];
        for (const directive of header){
            directives.push(...directive.split(','));
        }
    } else {
        directives = header.split(',');
    }
    for(let i = 0; i < directives.length; i++){
        const directive = directives[i].toLowerCase();
        const keyValueDelimiter = directive.indexOf('=');
        let key;
        let value;
        if (keyValueDelimiter !== -1) {
            key = directive.substring(0, keyValueDelimiter).trimStart();
            value = directive.substring(keyValueDelimiter + 1);
        } else {
            key = directive.trim();
        }
        switch(key){
            case 'min-fresh':
            case 'max-stale':
            case 'max-age':
            case 's-maxage':
            case 'stale-while-revalidate':
            case 'stale-if-error':
                {
                    if (value === undefined || value[0] === ' ') {
                        continue;
                    }
                    if (value.length >= 2 && value[0] === '"' && value[value.length - 1] === '"') {
                        value = value.substring(1, value.length - 1);
                    }
                    const parsedValue = parseInt(value, 10);
                    // eslint-disable-next-line no-self-compare
                    if (parsedValue !== parsedValue) {
                        continue;
                    }
                    if (key === 'max-age' && key in output && output[key] >= parsedValue) {
                        continue;
                    }
                    output[key] = parsedValue;
                    break;
                }
            case 'private':
            case 'no-cache':
                {
                    if (value) {
                        // The private and no-cache directives can be unqualified (aka just
                        //  `private` or `no-cache`) or qualified (w/ a value). When they're
                        //  qualified, it's a list of headers like `no-cache=header1`,
                        //  `no-cache="header1"`, or `no-cache="header1, header2"`
                        // If we're given multiple headers, the comma messes us up since
                        //  we split the full header by commas. So, let's loop through the
                        //  remaining parts in front of us until we find one that ends in a
                        //  quote. We can then just splice all of the parts in between the
                        //  starting quote and the ending quote out of the directives array
                        //  and continue parsing like normal.
                        // https://www.rfc-editor.org/rfc/rfc9111.html#name-no-cache-2
                        if (value[0] === '"') {
                            // Something like `no-cache="some-header"` OR `no-cache="some-header, another-header"`.
                            // Add the first header on and cut off the leading quote
                            const headers = [
                                value.substring(1)
                            ];
                            let foundEndingQuote = value[value.length - 1] === '"';
                            if (!foundEndingQuote) {
                                // Something like `no-cache="some-header, another-header"`
                                //  This can still be something invalid, e.g. `no-cache="some-header, ...`
                                for(let j = i + 1; j < directives.length; j++){
                                    const nextPart = directives[j];
                                    const nextPartLength = nextPart.length;
                                    headers.push(nextPart.trim());
                                    if (nextPartLength !== 0 && nextPart[nextPartLength - 1] === '"') {
                                        foundEndingQuote = true;
                                        break;
                                    }
                                }
                            }
                            if (foundEndingQuote) {
                                let lastHeader = headers[headers.length - 1];
                                if (lastHeader[lastHeader.length - 1] === '"') {
                                    lastHeader = lastHeader.substring(0, lastHeader.length - 1);
                                    headers[headers.length - 1] = lastHeader;
                                }
                                if (key in output) {
                                    output[key] = output[key].concat(headers);
                                } else {
                                    output[key] = headers;
                                }
                            }
                        } else {
                            // Something like `no-cache="some-header"`
                            if (key in output) {
                                output[key] = output[key].concat(value);
                            } else {
                                output[key] = [
                                    value
                                ];
                            }
                        }
                        break;
                    }
                }
            // eslint-disable-next-line no-fallthrough
            case 'public':
            case 'no-store':
            case 'must-revalidate':
            case 'proxy-revalidate':
            case 'immutable':
            case 'no-transform':
            case 'must-understand':
            case 'only-if-cached':
                if (value) {
                    continue;
                }
                output[key] = true;
                break;
            default:
                continue;
        }
    }
    return output;
}
/**
 * @param {string | string[]} varyHeader Vary header from the server
 * @param {Record<string, string | string[]>} headers Request headers
 * @returns {Record<string, string | string[]>}
 */ function parseVaryHeader(varyHeader, headers) {
    if (typeof varyHeader === 'string' && varyHeader.includes('*')) {
        return headers;
    }
    const output = {};
    const varyingHeaders = typeof varyHeader === 'string' ? varyHeader.split(',') : varyHeader;
    for (const header of varyingHeaders){
        const trimmedHeader = header.trim().toLowerCase();
        output[trimmedHeader] = headers[trimmedHeader] ?? null;
    }
    return output;
}
/**
 * Note: this deviates from the spec a little. Empty etags ("", W/"") are valid,
 *  however, including them in cached resposnes serves little to no purpose.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110.html#name-etag
 *
 * @param {string} etag
 * @returns {boolean}
 */ function isEtagUsable(etag) {
    if (etag.length <= 2) {
        // Shortest an etag can be is two chars (just ""). This is where we deviate
        //  from the spec requiring a min of 3 chars however
        return false;
    }
    if (etag[0] === '"' && etag[etag.length - 1] === '"') {
        // ETag: ""asd123"" or ETag: "W/"asd123"", kinda undefined behavior in the
        //  spec. Some servers will accept these while others don't.
        // ETag: "asd123"
        return !(etag[1] === '"' || etag.startsWith('"W/'));
    }
    if (etag.startsWith('W/"') && etag[etag.length - 1] === '"') {
        // ETag: W/"", also where we deviate from the spec & require a min of 3
        //  chars
        // ETag: for W/"", W/"asd123"
        return etag.length !== 4;
    }
    // Anything else
    return false;
}
/**
 * @param {unknown} store
 * @returns {asserts store is import('../../types/cache-interceptor.d.ts').default.CacheStore}
 */ function assertCacheStore(store, name = 'CacheStore') {
    if (typeof store !== 'object' || store === null) {
        throw new TypeError(`expected type of ${name} to be a CacheStore, got ${store === null ? 'null' : typeof store}`);
    }
    for (const fn of [
        'get',
        'createWriteStream',
        'delete'
    ]){
        if (typeof store[fn] !== 'function') {
            throw new TypeError(`${name} needs to have a \`${fn}()\` function`);
        }
    }
}
/**
 * @param {unknown} methods
 * @returns {asserts methods is import('../../types/cache-interceptor.d.ts').default.CacheMethods[]}
 */ function assertCacheMethods(methods, name = 'CacheMethods') {
    if (!Array.isArray(methods)) {
        throw new TypeError(`expected type of ${name} needs to be an array, got ${methods === null ? 'null' : typeof methods}`);
    }
    if (methods.length === 0) {
        throw new TypeError(`${name} needs to have at least one method`);
    }
    for (const method of methods){
        if (!safeHTTPMethods.includes(method)) {
            throw new TypeError(`element of ${name}-array needs to be one of following values: ${safeHTTPMethods.join(', ')}, got ${method}`);
        }
    }
}
module.exports = {
    makeCacheKey,
    normalizeHeaders,
    assertCacheKey,
    assertCacheValue,
    parseCacheControlHeader,
    parseVaryHeader,
    isEtagUsable,
    assertCacheMethods,
    assertCacheStore
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/date.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @see https://www.rfc-editor.org/rfc/rfc9110.html#name-date-time-formats
 *
 * @param {string} date
 * @returns {Date | undefined}
 */ function parseHttpDate(date) {
    // Sun, 06 Nov 1994 08:49:37 GMT    ; IMF-fixdate
    // Sun Nov  6 08:49:37 1994         ; ANSI C's asctime() format
    // Sunday, 06-Nov-94 08:49:37 GMT   ; obsolete RFC 850 format
    switch(date[3]){
        case ',':
            return parseImfDate(date);
        case ' ':
            return parseAscTimeDate(date);
        default:
            return parseRfc850Date(date);
    }
}
/**
 * @see https://httpwg.org/specs/rfc9110.html#preferred.date.format
 *
 * @param {string} date
 * @returns {Date | undefined}
 */ function parseImfDate(date) {
    if (date.length !== 29 || date[4] !== ' ' || date[7] !== ' ' || date[11] !== ' ' || date[16] !== ' ' || date[19] !== ':' || date[22] !== ':' || date[25] !== ' ' || date[26] !== 'G' || date[27] !== 'M' || date[28] !== 'T') {
        return undefined;
    }
    let weekday = -1;
    if (date[0] === 'S' && date[1] === 'u' && date[2] === 'n') {
        weekday = 0;
    } else if (date[0] === 'M' && date[1] === 'o' && date[2] === 'n') {
        weekday = 1;
    } else if (date[0] === 'T' && date[1] === 'u' && date[2] === 'e') {
        weekday = 2;
    } else if (date[0] === 'W' && date[1] === 'e' && date[2] === 'd') {
        weekday = 3;
    } else if (date[0] === 'T' && date[1] === 'h' && date[2] === 'u') {
        weekday = 4;
    } else if (date[0] === 'F' && date[1] === 'r' && date[2] === 'i') {
        weekday = 5;
    } else if (date[0] === 'S' && date[1] === 'a' && date[2] === 't') {
        weekday = 6;
    } else {
        return undefined // Not a valid day of the week
        ;
    }
    let day = 0;
    if (date[5] === '0') {
        // Single digit day, e.g. "Sun Nov 6 08:49:37 1994"
        const code = date.charCodeAt(6);
        if (code < 49 || code > 57) {
            return undefined // Not a digit
            ;
        }
        day = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(5);
        if (code1 < 49 || code1 > 51) {
            return undefined // Not a digit between 1 and 3
            ;
        }
        const code2 = date.charCodeAt(6);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        day = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let monthIdx = -1;
    if (date[8] === 'J' && date[9] === 'a' && date[10] === 'n') {
        monthIdx = 0; // Jan
    } else if (date[8] === 'F' && date[9] === 'e' && date[10] === 'b') {
        monthIdx = 1; // Feb
    } else if (date[8] === 'M' && date[9] === 'a') {
        if (date[10] === 'r') {
            monthIdx = 2; // Mar
        } else if (date[10] === 'y') {
            monthIdx = 4; // May
        } else {
            return undefined // Invalid month
            ;
        }
    } else if (date[8] === 'J') {
        if (date[9] === 'a' && date[10] === 'n') {
            monthIdx = 0; // Jan
        } else if (date[9] === 'u') {
            if (date[10] === 'n') {
                monthIdx = 5; // Jun
            } else if (date[10] === 'l') {
                monthIdx = 6; // Jul
            } else {
                return undefined // Invalid month
                ;
            }
        } else {
            return undefined // Invalid month
            ;
        }
    } else if (date[8] === 'A') {
        if (date[9] === 'p' && date[10] === 'r') {
            monthIdx = 3; // Apr
        } else if (date[9] === 'u' && date[10] === 'g') {
            monthIdx = 7; // Aug
        } else {
            return undefined // Invalid month
            ;
        }
    } else if (date[8] === 'S' && date[9] === 'e' && date[10] === 'p') {
        monthIdx = 8; // Sep
    } else if (date[8] === 'O' && date[9] === 'c' && date[10] === 't') {
        monthIdx = 9; // Oct
    } else if (date[8] === 'N' && date[9] === 'o' && date[10] === 'v') {
        monthIdx = 10; // Nov
    } else if (date[8] === 'D' && date[9] === 'e' && date[10] === 'c') {
        monthIdx = 11; // Dec
    } else {
        // Not a valid month
        return undefined;
    }
    const yearDigit1 = date.charCodeAt(12);
    if (yearDigit1 < 48 || yearDigit1 > 57) {
        return undefined // Not a digit
        ;
    }
    const yearDigit2 = date.charCodeAt(13);
    if (yearDigit2 < 48 || yearDigit2 > 57) {
        return undefined // Not a digit
        ;
    }
    const yearDigit3 = date.charCodeAt(14);
    if (yearDigit3 < 48 || yearDigit3 > 57) {
        return undefined // Not a digit
        ;
    }
    const yearDigit4 = date.charCodeAt(15);
    if (yearDigit4 < 48 || yearDigit4 > 57) {
        return undefined // Not a digit
        ;
    }
    const year = (yearDigit1 - 48) * 1000 + (yearDigit2 - 48) * 100 + (yearDigit3 - 48) * 10 + (yearDigit4 - 48);
    let hour = 0;
    if (date[17] === '0') {
        const code = date.charCodeAt(18);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        hour = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(17);
        if (code1 < 48 || code1 > 50) {
            return undefined // Not a digit between 0 and 2
            ;
        }
        const code2 = date.charCodeAt(18);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        if (code1 === 50 && code2 > 51) {
            return undefined // Hour cannot be greater than 23
            ;
        }
        hour = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let minute = 0;
    if (date[20] === '0') {
        const code = date.charCodeAt(21);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        minute = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(20);
        if (code1 < 48 || code1 > 53) {
            return undefined // Not a digit between 0 and 5
            ;
        }
        const code2 = date.charCodeAt(21);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        minute = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let second = 0;
    if (date[23] === '0') {
        const code = date.charCodeAt(24);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        second = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(23);
        if (code1 < 48 || code1 > 53) {
            return undefined // Not a digit between 0 and 5
            ;
        }
        const code2 = date.charCodeAt(24);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        second = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    const result = new Date(Date.UTC(year, monthIdx, day, hour, minute, second));
    return result.getUTCDay() === weekday ? result : undefined;
}
/**
 * @see https://httpwg.org/specs/rfc9110.html#obsolete.date.formats
 *
 * @param {string} date
 * @returns {Date | undefined}
 */ function parseAscTimeDate(date) {
    // This is assumed to be in UTC
    if (date.length !== 24 || date[7] !== ' ' || date[10] !== ' ' || date[19] !== ' ') {
        return undefined;
    }
    let weekday = -1;
    if (date[0] === 'S' && date[1] === 'u' && date[2] === 'n') {
        weekday = 0;
    } else if (date[0] === 'M' && date[1] === 'o' && date[2] === 'n') {
        weekday = 1;
    } else if (date[0] === 'T' && date[1] === 'u' && date[2] === 'e') {
        weekday = 2;
    } else if (date[0] === 'W' && date[1] === 'e' && date[2] === 'd') {
        weekday = 3;
    } else if (date[0] === 'T' && date[1] === 'h' && date[2] === 'u') {
        weekday = 4;
    } else if (date[0] === 'F' && date[1] === 'r' && date[2] === 'i') {
        weekday = 5;
    } else if (date[0] === 'S' && date[1] === 'a' && date[2] === 't') {
        weekday = 6;
    } else {
        return undefined // Not a valid day of the week
        ;
    }
    let monthIdx = -1;
    if (date[4] === 'J' && date[5] === 'a' && date[6] === 'n') {
        monthIdx = 0; // Jan
    } else if (date[4] === 'F' && date[5] === 'e' && date[6] === 'b') {
        monthIdx = 1; // Feb
    } else if (date[4] === 'M' && date[5] === 'a') {
        if (date[6] === 'r') {
            monthIdx = 2; // Mar
        } else if (date[6] === 'y') {
            monthIdx = 4; // May
        } else {
            return undefined // Invalid month
            ;
        }
    } else if (date[4] === 'J') {
        if (date[5] === 'a' && date[6] === 'n') {
            monthIdx = 0; // Jan
        } else if (date[5] === 'u') {
            if (date[6] === 'n') {
                monthIdx = 5; // Jun
            } else if (date[6] === 'l') {
                monthIdx = 6; // Jul
            } else {
                return undefined // Invalid month
                ;
            }
        } else {
            return undefined // Invalid month
            ;
        }
    } else if (date[4] === 'A') {
        if (date[5] === 'p' && date[6] === 'r') {
            monthIdx = 3; // Apr
        } else if (date[5] === 'u' && date[6] === 'g') {
            monthIdx = 7; // Aug
        } else {
            return undefined // Invalid month
            ;
        }
    } else if (date[4] === 'S' && date[5] === 'e' && date[6] === 'p') {
        monthIdx = 8; // Sep
    } else if (date[4] === 'O' && date[5] === 'c' && date[6] === 't') {
        monthIdx = 9; // Oct
    } else if (date[4] === 'N' && date[5] === 'o' && date[6] === 'v') {
        monthIdx = 10; // Nov
    } else if (date[4] === 'D' && date[5] === 'e' && date[6] === 'c') {
        monthIdx = 11; // Dec
    } else {
        // Not a valid month
        return undefined;
    }
    let day = 0;
    if (date[8] === ' ') {
        // Single digit day, e.g. "Sun Nov 6 08:49:37 1994"
        const code = date.charCodeAt(9);
        if (code < 49 || code > 57) {
            return undefined // Not a digit
            ;
        }
        day = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(8);
        if (code1 < 49 || code1 > 51) {
            return undefined // Not a digit between 1 and 3
            ;
        }
        const code2 = date.charCodeAt(9);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        day = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let hour = 0;
    if (date[11] === '0') {
        const code = date.charCodeAt(12);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        hour = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(11);
        if (code1 < 48 || code1 > 50) {
            return undefined // Not a digit between 0 and 2
            ;
        }
        const code2 = date.charCodeAt(12);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        if (code1 === 50 && code2 > 51) {
            return undefined // Hour cannot be greater than 23
            ;
        }
        hour = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let minute = 0;
    if (date[14] === '0') {
        const code = date.charCodeAt(15);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        minute = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(14);
        if (code1 < 48 || code1 > 53) {
            return undefined // Not a digit between 0 and 5
            ;
        }
        const code2 = date.charCodeAt(15);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        minute = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let second = 0;
    if (date[17] === '0') {
        const code = date.charCodeAt(18);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        second = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(17);
        if (code1 < 48 || code1 > 53) {
            return undefined // Not a digit between 0 and 5
            ;
        }
        const code2 = date.charCodeAt(18);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        second = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    const yearDigit1 = date.charCodeAt(20);
    if (yearDigit1 < 48 || yearDigit1 > 57) {
        return undefined // Not a digit
        ;
    }
    const yearDigit2 = date.charCodeAt(21);
    if (yearDigit2 < 48 || yearDigit2 > 57) {
        return undefined // Not a digit
        ;
    }
    const yearDigit3 = date.charCodeAt(22);
    if (yearDigit3 < 48 || yearDigit3 > 57) {
        return undefined // Not a digit
        ;
    }
    const yearDigit4 = date.charCodeAt(23);
    if (yearDigit4 < 48 || yearDigit4 > 57) {
        return undefined // Not a digit
        ;
    }
    const year = (yearDigit1 - 48) * 1000 + (yearDigit2 - 48) * 100 + (yearDigit3 - 48) * 10 + (yearDigit4 - 48);
    const result = new Date(Date.UTC(year, monthIdx, day, hour, minute, second));
    return result.getUTCDay() === weekday ? result : undefined;
}
/**
 * @see https://httpwg.org/specs/rfc9110.html#obsolete.date.formats
 *
 * @param {string} date
 * @returns {Date | undefined}
 */ function parseRfc850Date(date) {
    let commaIndex = -1;
    let weekday = -1;
    if (date[0] === 'S') {
        if (date[1] === 'u' && date[2] === 'n' && date[3] === 'd' && date[4] === 'a' && date[5] === 'y') {
            weekday = 0; // Sunday
            commaIndex = 6;
        } else if (date[1] === 'a' && date[2] === 't' && date[3] === 'u' && date[4] === 'r' && date[5] === 'd' && date[6] === 'a' && date[7] === 'y') {
            weekday = 6; // Saturday
            commaIndex = 8;
        }
    } else if (date[0] === 'M' && date[1] === 'o' && date[2] === 'n' && date[3] === 'd' && date[4] === 'a' && date[5] === 'y') {
        weekday = 1; // Monday
        commaIndex = 6;
    } else if (date[0] === 'T') {
        if (date[1] === 'u' && date[2] === 'e' && date[3] === 's' && date[4] === 'd' && date[5] === 'a' && date[6] === 'y') {
            weekday = 2; // Tuesday
            commaIndex = 7;
        } else if (date[1] === 'h' && date[2] === 'u' && date[3] === 'r' && date[4] === 's' && date[5] === 'd' && date[6] === 'a' && date[7] === 'y') {
            weekday = 4; // Thursday
            commaIndex = 8;
        }
    } else if (date[0] === 'W' && date[1] === 'e' && date[2] === 'd' && date[3] === 'n' && date[4] === 'e' && date[5] === 's' && date[6] === 'd' && date[7] === 'a' && date[8] === 'y') {
        weekday = 3; // Wednesday
        commaIndex = 9;
    } else if (date[0] === 'F' && date[1] === 'r' && date[2] === 'i' && date[3] === 'd' && date[4] === 'a' && date[5] === 'y') {
        weekday = 5; // Friday
        commaIndex = 6;
    } else {
        // Not a valid day name
        return undefined;
    }
    if (date[commaIndex] !== ',' || date.length - commaIndex - 1 !== 23 || date[commaIndex + 1] !== ' ' || date[commaIndex + 4] !== '-' || date[commaIndex + 8] !== '-' || date[commaIndex + 11] !== ' ' || date[commaIndex + 14] !== ':' || date[commaIndex + 17] !== ':' || date[commaIndex + 20] !== ' ' || date[commaIndex + 21] !== 'G' || date[commaIndex + 22] !== 'M' || date[commaIndex + 23] !== 'T') {
        return undefined;
    }
    let day = 0;
    if (date[commaIndex + 2] === '0') {
        // Single digit day, e.g. "Sun Nov 6 08:49:37 1994"
        const code = date.charCodeAt(commaIndex + 3);
        if (code < 49 || code > 57) {
            return undefined // Not a digit
            ;
        }
        day = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(commaIndex + 2);
        if (code1 < 49 || code1 > 51) {
            return undefined // Not a digit between 1 and 3
            ;
        }
        const code2 = date.charCodeAt(commaIndex + 3);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        day = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let monthIdx = -1;
    if (date[commaIndex + 5] === 'J' && date[commaIndex + 6] === 'a' && date[commaIndex + 7] === 'n') {
        monthIdx = 0; // Jan
    } else if (date[commaIndex + 5] === 'F' && date[commaIndex + 6] === 'e' && date[commaIndex + 7] === 'b') {
        monthIdx = 1; // Feb
    } else if (date[commaIndex + 5] === 'M' && date[commaIndex + 6] === 'a' && date[commaIndex + 7] === 'r') {
        monthIdx = 2; // Mar
    } else if (date[commaIndex + 5] === 'A' && date[commaIndex + 6] === 'p' && date[commaIndex + 7] === 'r') {
        monthIdx = 3; // Apr
    } else if (date[commaIndex + 5] === 'M' && date[commaIndex + 6] === 'a' && date[commaIndex + 7] === 'y') {
        monthIdx = 4; // May
    } else if (date[commaIndex + 5] === 'J' && date[commaIndex + 6] === 'u' && date[commaIndex + 7] === 'n') {
        monthIdx = 5; // Jun
    } else if (date[commaIndex + 5] === 'J' && date[commaIndex + 6] === 'u' && date[commaIndex + 7] === 'l') {
        monthIdx = 6; // Jul
    } else if (date[commaIndex + 5] === 'A' && date[commaIndex + 6] === 'u' && date[commaIndex + 7] === 'g') {
        monthIdx = 7; // Aug
    } else if (date[commaIndex + 5] === 'S' && date[commaIndex + 6] === 'e' && date[commaIndex + 7] === 'p') {
        monthIdx = 8; // Sep
    } else if (date[commaIndex + 5] === 'O' && date[commaIndex + 6] === 'c' && date[commaIndex + 7] === 't') {
        monthIdx = 9; // Oct
    } else if (date[commaIndex + 5] === 'N' && date[commaIndex + 6] === 'o' && date[commaIndex + 7] === 'v') {
        monthIdx = 10; // Nov
    } else if (date[commaIndex + 5] === 'D' && date[commaIndex + 6] === 'e' && date[commaIndex + 7] === 'c') {
        monthIdx = 11; // Dec
    } else {
        // Not a valid month
        return undefined;
    }
    const yearDigit1 = date.charCodeAt(commaIndex + 9);
    if (yearDigit1 < 48 || yearDigit1 > 57) {
        return undefined // Not a digit
        ;
    }
    const yearDigit2 = date.charCodeAt(commaIndex + 10);
    if (yearDigit2 < 48 || yearDigit2 > 57) {
        return undefined // Not a digit
        ;
    }
    let year = (yearDigit1 - 48) * 10 + (yearDigit2 - 48) // Convert ASCII codes to number
    ;
    // RFC 6265 states that the year is in the range 1970-2069.
    // @see https://datatracker.ietf.org/doc/html/rfc6265#section-5.1.1
    //
    // 3. If the year-value is greater than or equal to 70 and less than or
    //    equal to 99, increment the year-value by 1900.
    // 4. If the year-value is greater than or equal to 0 and less than or
    //    equal to 69, increment the year-value by 2000.
    year += year < 70 ? 2000 : 1900;
    let hour = 0;
    if (date[commaIndex + 12] === '0') {
        const code = date.charCodeAt(commaIndex + 13);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        hour = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(commaIndex + 12);
        if (code1 < 48 || code1 > 50) {
            return undefined // Not a digit between 0 and 2
            ;
        }
        const code2 = date.charCodeAt(commaIndex + 13);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        if (code1 === 50 && code2 > 51) {
            return undefined // Hour cannot be greater than 23
            ;
        }
        hour = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let minute = 0;
    if (date[commaIndex + 15] === '0') {
        const code = date.charCodeAt(commaIndex + 16);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        minute = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(commaIndex + 15);
        if (code1 < 48 || code1 > 53) {
            return undefined // Not a digit between 0 and 5
            ;
        }
        const code2 = date.charCodeAt(commaIndex + 16);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        minute = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    let second = 0;
    if (date[commaIndex + 18] === '0') {
        const code = date.charCodeAt(commaIndex + 19);
        if (code < 48 || code > 57) {
            return undefined // Not a digit
            ;
        }
        second = code - 48; // Convert ASCII code to number
    } else {
        const code1 = date.charCodeAt(commaIndex + 18);
        if (code1 < 48 || code1 > 53) {
            return undefined // Not a digit between 0 and 5
            ;
        }
        const code2 = date.charCodeAt(commaIndex + 19);
        if (code2 < 48 || code2 > 57) {
            return undefined // Not a digit
            ;
        }
        second = (code1 - 48) * 10 + (code2 - 48); // Convert ASCII codes to number
    }
    const result = new Date(Date.UTC(year, monthIdx, day, hour, minute, second));
    return result.getUTCDay() === weekday ? result : undefined;
}
module.exports = {
    parseHttpDate
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/wrap-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
module.exports = class WrapHandler {
    #handler;
    constructor(handler){
        this.#handler = handler;
    }
    static wrap(handler) {
        // TODO (fix): More checks...
        return handler.onRequestStart ? handler : new WrapHandler(handler);
    }
    // Unwrap Interface
    onConnect(abort, context) {
        return this.#handler.onConnect?.(abort, context);
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        return this.#handler.onHeaders?.(statusCode, rawHeaders, resume, statusMessage);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        return this.#handler.onUpgrade?.(statusCode, rawHeaders, socket);
    }
    onData(data) {
        return this.#handler.onData?.(data);
    }
    onComplete(trailers) {
        return this.#handler.onComplete?.(trailers);
    }
    onError(err) {
        if (!this.#handler.onError) {
            throw err;
        }
        return this.#handler.onError?.(err);
    }
    // Wrap Interface
    onRequestStart(controller, context) {
        this.#handler.onConnect?.((reason)=>controller.abort(reason), context);
    }
    onRequestUpgrade(controller, statusCode, headers, socket) {
        const rawHeaders = [];
        for (const [key, val] of Object.entries(headers)){
            rawHeaders.push(Buffer.from(key), Array.isArray(val) ? val.map((v)=>Buffer.from(v)) : Buffer.from(val));
        }
        this.#handler.onUpgrade?.(statusCode, rawHeaders, socket);
    }
    onResponseStart(controller, statusCode, headers, statusMessage) {
        const rawHeaders = [];
        for (const [key, val] of Object.entries(headers)){
            rawHeaders.push(Buffer.from(key), Array.isArray(val) ? val.map((v)=>Buffer.from(v)) : Buffer.from(val));
        }
        if (this.#handler.onHeaders?.(statusCode, rawHeaders, ()=>controller.resume(), statusMessage) === false) {
            controller.pause();
        }
    }
    onResponseData(controller, data) {
        if (this.#handler.onData?.(data) === false) {
            controller.pause();
        }
    }
    onResponseEnd(controller, trailers) {
        const rawTrailers = [];
        for (const [key, val] of Object.entries(trailers)){
            rawTrailers.push(Buffer.from(key), Array.isArray(val) ? val.map((v)=>Buffer.from(v)) : Buffer.from(val));
        }
        this.#handler.onComplete?.(rawTrailers);
    }
    onResponseError(controller, err) {
        if (!this.#handler.onError) {
            throw new InvalidArgumentError('invalid onError method');
        }
        this.#handler.onError?.(err);
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/unwrap-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { parseHeaders } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const kResume = Symbol('resume');
class UnwrapController {
    #paused = false;
    #reason = null;
    #aborted = false;
    #abort;
    [kResume] = null;
    constructor(abort){
        this.#abort = abort;
    }
    pause() {
        this.#paused = true;
    }
    resume() {
        if (this.#paused) {
            this.#paused = false;
            this[kResume]?.();
        }
    }
    abort(reason) {
        if (!this.#aborted) {
            this.#aborted = true;
            this.#reason = reason;
            this.#abort(reason);
        }
    }
    get aborted() {
        return this.#aborted;
    }
    get reason() {
        return this.#reason;
    }
    get paused() {
        return this.#paused;
    }
}
module.exports = class UnwrapHandler {
    #handler;
    #controller;
    constructor(handler){
        this.#handler = handler;
    }
    static unwrap(handler) {
        // TODO (fix): More checks...
        return !handler.onRequestStart ? handler : new UnwrapHandler(handler);
    }
    onConnect(abort, context) {
        this.#controller = new UnwrapController(abort);
        this.#handler.onRequestStart?.(this.#controller, context);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        this.#handler.onRequestUpgrade?.(this.#controller, statusCode, parseHeaders(rawHeaders), socket);
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        this.#controller[kResume] = resume;
        this.#handler.onResponseStart?.(this.#controller, statusCode, parseHeaders(rawHeaders), statusMessage);
        return !this.#controller.paused;
    }
    onData(data) {
        this.#handler.onResponseData?.(this.#controller, data);
        return !this.#controller.paused;
    }
    onComplete(rawTrailers) {
        this.#handler.onResponseEnd?.(this.#controller, parseHeaders(rawTrailers));
    }
    onError(err) {
        if (!this.#handler.onResponseError) {
            throw new InvalidArgumentError('invalid onError method');
        }
        this.#handler.onResponseError?.(this.#controller, err);
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/retry-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { kRetryHandlerDefaultRetry } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const { RequestRetryError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const WrapHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/wrap-handler.js [app-rsc] (ecmascript)");
const { isDisturbed, parseRangeHeader, wrapRequestBody } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
function calculateRetryAfterHeader(retryAfter) {
    const retryTime = new Date(retryAfter).getTime();
    return isNaN(retryTime) ? 0 : retryTime - Date.now();
}
class RetryHandler {
    constructor(opts, { dispatch, handler }){
        const { retryOptions, ...dispatchOpts } = opts;
        const { // Retry scoped
        retry: retryFn, maxRetries, maxTimeout, minTimeout, timeoutFactor, // Response scoped
        methods, errorCodes, retryAfter, statusCodes, throwOnError } = retryOptions ?? {};
        this.error = null;
        this.dispatch = dispatch;
        this.handler = WrapHandler.wrap(handler);
        this.opts = {
            ...dispatchOpts,
            body: wrapRequestBody(opts.body)
        };
        this.retryOpts = {
            throwOnError: throwOnError ?? true,
            retry: retryFn ?? RetryHandler[kRetryHandlerDefaultRetry],
            retryAfter: retryAfter ?? true,
            maxTimeout: maxTimeout ?? 30 * 1000,
            minTimeout: minTimeout ?? 500,
            timeoutFactor: timeoutFactor ?? 2,
            maxRetries: maxRetries ?? 5,
            // What errors we should retry
            methods: methods ?? [
                'GET',
                'HEAD',
                'OPTIONS',
                'PUT',
                'DELETE',
                'TRACE'
            ],
            // Indicates which errors to retry
            statusCodes: statusCodes ?? [
                500,
                502,
                503,
                504,
                429
            ],
            // List of errors to retry
            errorCodes: errorCodes ?? [
                'ECONNRESET',
                'ECONNREFUSED',
                'ENOTFOUND',
                'ENETDOWN',
                'ENETUNREACH',
                'EHOSTDOWN',
                'EHOSTUNREACH',
                'EPIPE',
                'UND_ERR_SOCKET'
            ]
        };
        this.retryCount = 0;
        this.retryCountCheckpoint = 0;
        this.headersSent = false;
        this.start = 0;
        this.end = null;
        this.etag = null;
    }
    onResponseStartWithRetry(controller, statusCode, headers, statusMessage, err) {
        if (this.retryOpts.throwOnError) {
            // Preserve old behavior for status codes that are not eligible for retry
            if (this.retryOpts.statusCodes.includes(statusCode) === false) {
                this.headersSent = true;
                this.handler.onResponseStart?.(controller, statusCode, headers, statusMessage);
            } else {
                this.error = err;
            }
            return;
        }
        if (isDisturbed(this.opts.body)) {
            this.headersSent = true;
            this.handler.onResponseStart?.(controller, statusCode, headers, statusMessage);
            return;
        }
        function shouldRetry(passedErr) {
            if (passedErr) {
                this.headersSent = true;
                this.headersSent = true;
                this.handler.onResponseStart?.(controller, statusCode, headers, statusMessage);
                controller.resume();
                return;
            }
            this.error = err;
            controller.resume();
        }
        controller.pause();
        this.retryOpts.retry(err, {
            state: {
                counter: this.retryCount
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, shouldRetry.bind(this));
    }
    onRequestStart(controller, context) {
        if (!this.headersSent) {
            this.handler.onRequestStart?.(controller, context);
        }
    }
    onRequestUpgrade(controller, statusCode, headers, socket) {
        this.handler.onRequestUpgrade?.(controller, statusCode, headers, socket);
    }
    static [kRetryHandlerDefaultRetry](err, { state, opts }, cb) {
        const { statusCode, code, headers } = err;
        const { method, retryOptions } = opts;
        const { maxRetries, minTimeout, maxTimeout, timeoutFactor, statusCodes, errorCodes, methods } = retryOptions;
        const { counter } = state;
        // Any code that is not a Undici's originated and allowed to retry
        if (code && code !== 'UND_ERR_REQ_RETRY' && !errorCodes.includes(code)) {
            cb(err);
            return;
        }
        // If a set of method are provided and the current method is not in the list
        if (Array.isArray(methods) && !methods.includes(method)) {
            cb(err);
            return;
        }
        // If a set of status code are provided and the current status code is not in the list
        if (statusCode != null && Array.isArray(statusCodes) && !statusCodes.includes(statusCode)) {
            cb(err);
            return;
        }
        // If we reached the max number of retries
        if (counter > maxRetries) {
            cb(err);
            return;
        }
        let retryAfterHeader = headers?.['retry-after'];
        if (retryAfterHeader) {
            retryAfterHeader = Number(retryAfterHeader);
            retryAfterHeader = Number.isNaN(retryAfterHeader) ? calculateRetryAfterHeader(headers['retry-after']) : retryAfterHeader * 1e3; // Retry-After is in seconds
        }
        const retryTimeout = retryAfterHeader > 0 ? Math.min(retryAfterHeader, maxTimeout) : Math.min(minTimeout * timeoutFactor ** (counter - 1), maxTimeout);
        setTimeout(()=>cb(null), retryTimeout);
    }
    onResponseStart(controller, statusCode, headers, statusMessage) {
        this.error = null;
        this.retryCount += 1;
        if (statusCode >= 300) {
            const err = new RequestRetryError('Request failed', statusCode, {
                headers,
                data: {
                    count: this.retryCount
                }
            });
            this.onResponseStartWithRetry(controller, statusCode, headers, statusMessage, err);
            return;
        }
        // Checkpoint for resume from where we left it
        if (this.headersSent) {
            // Only Partial Content 206 supposed to provide Content-Range,
            // any other status code that partially consumed the payload
            // should not be retried because it would result in downstream
            // wrongly concatenate multiple responses.
            if (statusCode !== 206 && (this.start > 0 || statusCode !== 200)) {
                throw new RequestRetryError('server does not support the range header and the payload was partially consumed', statusCode, {
                    headers,
                    data: {
                        count: this.retryCount
                    }
                });
            }
            const contentRange = parseRangeHeader(headers['content-range']);
            // If no content range
            if (!contentRange) {
                // We always throw here as we want to indicate that we entred unexpected path
                throw new RequestRetryError('Content-Range mismatch', statusCode, {
                    headers,
                    data: {
                        count: this.retryCount
                    }
                });
            }
            // Let's start with a weak etag check
            if (this.etag != null && this.etag !== headers.etag) {
                // We always throw here as we want to indicate that we entred unexpected path
                throw new RequestRetryError('ETag mismatch', statusCode, {
                    headers,
                    data: {
                        count: this.retryCount
                    }
                });
            }
            const { start, size, end = size ? size - 1 : null } = contentRange;
            assert(this.start === start, 'content-range mismatch');
            assert(this.end == null || this.end === end, 'content-range mismatch');
            return;
        }
        if (this.end == null) {
            if (statusCode === 206) {
                // First time we receive 206
                const range = parseRangeHeader(headers['content-range']);
                if (range == null) {
                    this.headersSent = true;
                    this.handler.onResponseStart?.(controller, statusCode, headers, statusMessage);
                    return;
                }
                const { start, size, end = size ? size - 1 : null } = range;
                assert(start != null && Number.isFinite(start), 'content-range mismatch');
                assert(end != null && Number.isFinite(end), 'invalid content-length');
                this.start = start;
                this.end = end;
            }
            // We make our best to checkpoint the body for further range headers
            if (this.end == null) {
                const contentLength = headers['content-length'];
                this.end = contentLength != null ? Number(contentLength) - 1 : null;
            }
            assert(Number.isFinite(this.start));
            assert(this.end == null || Number.isFinite(this.end), 'invalid content-length');
            this.resume = true;
            this.etag = headers.etag != null ? headers.etag : null;
            // Weak etags are not useful for comparison nor cache
            // for instance not safe to assume if the response is byte-per-byte
            // equal
            if (this.etag != null && this.etag[0] === 'W' && this.etag[1] === '/') {
                this.etag = null;
            }
            this.headersSent = true;
            this.handler.onResponseStart?.(controller, statusCode, headers, statusMessage);
        } else {
            throw new RequestRetryError('Request failed', statusCode, {
                headers,
                data: {
                    count: this.retryCount
                }
            });
        }
    }
    onResponseData(controller, chunk) {
        if (this.error) {
            return;
        }
        this.start += chunk.length;
        this.handler.onResponseData?.(controller, chunk);
    }
    onResponseEnd(controller, trailers) {
        if (this.error && this.retryOpts.throwOnError) {
            throw this.error;
        }
        if (!this.error) {
            this.retryCount = 0;
            return this.handler.onResponseEnd?.(controller, trailers);
        }
        this.retry(controller);
    }
    retry(controller) {
        if (this.start !== 0) {
            const headers = {
                range: `bytes=${this.start}-${this.end ?? ''}`
            };
            // Weak etag check - weak etags will make comparison algorithms never match
            if (this.etag != null) {
                headers['if-match'] = this.etag;
            }
            this.opts = {
                ...this.opts,
                headers: {
                    ...this.opts.headers,
                    ...headers
                }
            };
        }
        try {
            this.retryCountCheckpoint = this.retryCount;
            this.dispatch(this.opts, this);
        } catch (err) {
            this.handler.onResponseError?.(controller, err);
        }
    }
    onResponseError(controller, err) {
        if (controller?.aborted || isDisturbed(this.opts.body)) {
            this.handler.onResponseError?.(controller, err);
            return;
        }
        function shouldRetry(returnedErr) {
            if (!returnedErr) {
                this.retry(controller);
                return;
            }
            this.handler?.onResponseError?.(controller, returnedErr);
        }
        // We reconcile in case of a mix between network errors
        // and server error response
        if (this.retryCount - this.retryCountCheckpoint > 0) {
            // We count the difference between the last checkpoint and the current retry count
            this.retryCount = this.retryCountCheckpoint + (this.retryCount - this.retryCountCheckpoint);
        } else {
            this.retryCount += 1;
        }
        this.retryOpts.retry(err, {
            state: {
                counter: this.retryCount
            },
            opts: {
                retryOptions: this.retryOpts,
                ...this.opts
            }
        }, shouldRetry.bind(this));
    }
}
module.exports = RetryHandler;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/decorator-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const WrapHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/wrap-handler.js [app-rsc] (ecmascript)");
/**
 * @deprecated
 */ module.exports = class DecoratorHandler {
    #handler;
    #onCompleteCalled = false;
    #onErrorCalled = false;
    #onResponseStartCalled = false;
    constructor(handler){
        if (typeof handler !== 'object' || handler === null) {
            throw new TypeError('handler must be an object');
        }
        this.#handler = WrapHandler.wrap(handler);
    }
    onRequestStart(...args) {
        this.#handler.onRequestStart?.(...args);
    }
    onRequestUpgrade(...args) {
        assert(!this.#onCompleteCalled);
        assert(!this.#onErrorCalled);
        return this.#handler.onRequestUpgrade?.(...args);
    }
    onResponseStart(...args) {
        assert(!this.#onCompleteCalled);
        assert(!this.#onErrorCalled);
        assert(!this.#onResponseStartCalled);
        this.#onResponseStartCalled = true;
        return this.#handler.onResponseStart?.(...args);
    }
    onResponseData(...args) {
        assert(!this.#onCompleteCalled);
        assert(!this.#onErrorCalled);
        return this.#handler.onResponseData?.(...args);
    }
    onResponseEnd(...args) {
        assert(!this.#onCompleteCalled);
        assert(!this.#onErrorCalled);
        this.#onCompleteCalled = true;
        return this.#handler.onResponseEnd?.(...args);
    }
    onResponseError(...args) {
        this.#onErrorCalled = true;
        return this.#handler.onResponseError?.(...args);
    }
    /**
   * @deprecated
   */ onBodySent() {}
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/redirect-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { kBodyUsed } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const EE = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const redirectableStatusCodes = [
    300,
    301,
    302,
    303,
    307,
    308
];
const kBody = Symbol('body');
const noop = ()=>{};
class BodyAsyncIterable {
    constructor(body){
        this[kBody] = body;
        this[kBodyUsed] = false;
    }
    async *[Symbol.asyncIterator]() {
        assert(!this[kBodyUsed], 'disturbed');
        this[kBodyUsed] = true;
        yield* this[kBody];
    }
}
class RedirectHandler {
    static buildDispatch(dispatcher, maxRedirections) {
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
            throw new InvalidArgumentError('maxRedirections must be a positive number');
        }
        const dispatch = dispatcher.dispatch.bind(dispatcher);
        return (opts, originalHandler)=>dispatch(opts, new RedirectHandler(dispatch, maxRedirections, opts, originalHandler));
    }
    constructor(dispatch, maxRedirections, opts, handler){
        if (maxRedirections != null && (!Number.isInteger(maxRedirections) || maxRedirections < 0)) {
            throw new InvalidArgumentError('maxRedirections must be a positive number');
        }
        this.dispatch = dispatch;
        this.location = null;
        const { maxRedirections: _, ...cleanOpts } = opts;
        this.opts = cleanOpts; // opts must be a copy, exclude maxRedirections
        this.maxRedirections = maxRedirections;
        this.handler = handler;
        this.history = [];
        if (util.isStream(this.opts.body)) {
            // TODO (fix): Provide some way for the user to cache the file to e.g. /tmp
            // so that it can be dispatched again?
            // TODO (fix): Do we need 100-expect support to provide a way to do this properly?
            if (util.bodyLength(this.opts.body) === 0) {
                this.opts.body.on('data', function() {
                    assert(false);
                });
            }
            if (typeof this.opts.body.readableDidRead !== 'boolean') {
                this.opts.body[kBodyUsed] = false;
                EE.prototype.on.call(this.opts.body, 'data', function() {
                    this[kBodyUsed] = true;
                });
            }
        } else if (this.opts.body && typeof this.opts.body.pipeTo === 'function') {
            // TODO (fix): We can't access ReadableStream internal state
            // to determine whether or not it has been disturbed. This is just
            // a workaround.
            this.opts.body = new BodyAsyncIterable(this.opts.body);
        } else if (this.opts.body && typeof this.opts.body !== 'string' && !ArrayBuffer.isView(this.opts.body) && util.isIterable(this.opts.body) && !util.isFormDataLike(this.opts.body)) {
            // TODO: Should we allow re-using iterable if !this.opts.idempotent
            // or through some other flag?
            this.opts.body = new BodyAsyncIterable(this.opts.body);
        }
    }
    onRequestStart(controller, context) {
        this.handler.onRequestStart?.(controller, {
            ...context,
            history: this.history
        });
    }
    onRequestUpgrade(controller, statusCode, headers, socket) {
        this.handler.onRequestUpgrade?.(controller, statusCode, headers, socket);
    }
    onResponseStart(controller, statusCode, headers, statusMessage) {
        if (this.opts.throwOnMaxRedirect && this.history.length >= this.maxRedirections) {
            throw new Error('max redirects');
        }
        // https://tools.ietf.org/html/rfc7231#section-6.4.2
        // https://fetch.spec.whatwg.org/#http-redirect-fetch
        // In case of HTTP 301 or 302 with POST, change the method to GET
        if ((statusCode === 301 || statusCode === 302) && this.opts.method === 'POST') {
            this.opts.method = 'GET';
            if (util.isStream(this.opts.body)) {
                util.destroy(this.opts.body.on('error', noop));
            }
            this.opts.body = null;
        }
        // https://tools.ietf.org/html/rfc7231#section-6.4.4
        // In case of HTTP 303, always replace method to be either HEAD or GET
        if (statusCode === 303 && this.opts.method !== 'HEAD') {
            this.opts.method = 'GET';
            if (util.isStream(this.opts.body)) {
                util.destroy(this.opts.body.on('error', noop));
            }
            this.opts.body = null;
        }
        this.location = this.history.length >= this.maxRedirections || util.isDisturbed(this.opts.body) || redirectableStatusCodes.indexOf(statusCode) === -1 ? null : headers.location;
        if (this.opts.origin) {
            this.history.push(new URL(this.opts.path, this.opts.origin));
        }
        if (!this.location) {
            this.handler.onResponseStart?.(controller, statusCode, headers, statusMessage);
            return;
        }
        const { origin, pathname, search } = util.parseURL(new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin)));
        const path = search ? `${pathname}${search}` : pathname;
        // Check for redirect loops by seeing if we've already visited this URL in our history
        // This catches the case where Client/Pool try to handle cross-origin redirects but fail
        // and keep redirecting to the same URL in an infinite loop
        const redirectUrlString = `${origin}${path}`;
        for (const historyUrl of this.history){
            if (historyUrl.toString() === redirectUrlString) {
                throw new InvalidArgumentError(`Redirect loop detected. Cannot redirect to ${origin}. This typically happens when using a Client or Pool with cross-origin redirects. Use an Agent for cross-origin redirects.`);
            }
        }
        // Remove headers referring to the original URL.
        // By default it is Host only, unless it's a 303 (see below), which removes also all Content-* headers.
        // https://tools.ietf.org/html/rfc7231#section-6.4
        this.opts.headers = cleanRequestHeaders(this.opts.headers, statusCode === 303, this.opts.origin !== origin);
        this.opts.path = path;
        this.opts.origin = origin;
        this.opts.query = null;
    }
    onResponseData(controller, chunk) {
        if (this.location) {
        /*
        https://tools.ietf.org/html/rfc7231#section-6.4

        TLDR: undici always ignores 3xx response bodies.

        Redirection is used to serve the requested resource from another URL, so it assumes that
        no body is generated (and thus can be ignored). Even though generating a body is not prohibited.

        For status 301, 302, 303, 307 and 308 (the latter from RFC 7238), the specs mention that the body usually
        (which means it's optional and not mandated) contain just an hyperlink to the value of
        the Location response header, so the body can be ignored safely.

        For status 300, which is "Multiple Choices", the spec mentions both generating a Location
        response header AND a response body with the other possible location to follow.
        Since the spec explicitly chooses not to specify a format for such body and leave it to
        servers and browsers implementors, we ignore the body as there is no specified way to eventually parse it.
      */ } else {
            this.handler.onResponseData?.(controller, chunk);
        }
    }
    onResponseEnd(controller, trailers) {
        if (this.location) {
            /*
        https://tools.ietf.org/html/rfc7231#section-6.4

        TLDR: undici always ignores 3xx response trailers as they are not expected in case of redirections
        and neither are useful if present.

        See comment on onData method above for more detailed information.
      */ this.dispatch(this.opts, this);
        } else {
            this.handler.onResponseEnd(controller, trailers);
        }
    }
    onResponseError(controller, error) {
        this.handler.onResponseError?.(controller, error);
    }
}
// https://tools.ietf.org/html/rfc7231#section-6.4.4
function shouldRemoveHeader(header, removeContent, unknownOrigin) {
    if (header.length === 4) {
        return util.headerNameToString(header) === 'host';
    }
    if (removeContent && util.headerNameToString(header).startsWith('content-')) {
        return true;
    }
    if (unknownOrigin && (header.length === 13 || header.length === 6 || header.length === 19)) {
        const name = util.headerNameToString(header);
        return name === 'authorization' || name === 'cookie' || name === 'proxy-authorization';
    }
    return false;
}
// https://tools.ietf.org/html/rfc7231#section-6.4
function cleanRequestHeaders(headers, removeContent, unknownOrigin) {
    const ret = [];
    if (Array.isArray(headers)) {
        for(let i = 0; i < headers.length; i += 2){
            if (!shouldRemoveHeader(headers[i], removeContent, unknownOrigin)) {
                ret.push(headers[i], headers[i + 1]);
            }
        }
    } else if (headers && typeof headers === 'object') {
        const entries = typeof headers[Symbol.iterator] === 'function' ? headers : Object.entries(headers);
        for (const [key, value] of entries){
            if (!shouldRemoveHeader(key, removeContent, unknownOrigin)) {
                ret.push(key, value);
            }
        }
    } else {
        assert(headers == null, 'headers must be an object or an array');
    }
    return ret;
}
module.exports = RedirectHandler;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/cache-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { parseCacheControlHeader, parseVaryHeader, isEtagUsable } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/cache.js [app-rsc] (ecmascript)");
const { parseHttpDate } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/date.js [app-rsc] (ecmascript)");
function noop() {}
// Status codes that we can use some heuristics on to cache
const HEURISTICALLY_CACHEABLE_STATUS_CODES = [
    200,
    203,
    204,
    206,
    300,
    301,
    308,
    404,
    405,
    410,
    414,
    501
];
// Status codes which semantic is not handled by the cache
// https://datatracker.ietf.org/doc/html/rfc9111#section-3
// This list should not grow beyond 206 and 304 unless the RFC is updated
// by a newer one including more. Please introduce another list if
// implementing caching of responses with the 'must-understand' directive.
const NOT_UNDERSTOOD_STATUS_CODES = [
    206,
    304
];
const MAX_RESPONSE_AGE = 2147483647000;
/**
 * @typedef {import('../../types/dispatcher.d.ts').default.DispatchHandler} DispatchHandler
 *
 * @implements {DispatchHandler}
 */ class CacheHandler {
    /**
   * @type {import('../../types/cache-interceptor.d.ts').default.CacheKey}
   */ #cacheKey;
    /**
   * @type {import('../../types/cache-interceptor.d.ts').default.CacheHandlerOptions['type']}
   */ #cacheType;
    /**
   * @type {number | undefined}
   */ #cacheByDefault;
    /**
   * @type {import('../../types/cache-interceptor.d.ts').default.CacheStore}
   */ #store;
    /**
   * @type {import('../../types/dispatcher.d.ts').default.DispatchHandler}
   */ #handler;
    /**
   * @type {import('node:stream').Writable | undefined}
   */ #writeStream;
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheHandlerOptions} opts
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} cacheKey
   * @param {import('../../types/dispatcher.d.ts').default.DispatchHandler} handler
   */ constructor({ store, type, cacheByDefault }, cacheKey, handler){
        this.#store = store;
        this.#cacheType = type;
        this.#cacheByDefault = cacheByDefault;
        this.#cacheKey = cacheKey;
        this.#handler = handler;
    }
    onRequestStart(controller, context) {
        this.#writeStream?.destroy();
        this.#writeStream = undefined;
        this.#handler.onRequestStart?.(controller, context);
    }
    onRequestUpgrade(controller, statusCode, headers, socket) {
        this.#handler.onRequestUpgrade?.(controller, statusCode, headers, socket);
    }
    /**
   * @param {import('../../types/dispatcher.d.ts').default.DispatchController} controller
   * @param {number} statusCode
   * @param {import('../../types/header.d.ts').IncomingHttpHeaders} resHeaders
   * @param {string} statusMessage
   */ onResponseStart(controller, statusCode, resHeaders, statusMessage) {
        const downstreamOnHeaders = ()=>this.#handler.onResponseStart?.(controller, statusCode, resHeaders, statusMessage);
        if (!util.safeHTTPMethods.includes(this.#cacheKey.method) && statusCode >= 200 && statusCode <= 399) {
            // Successful response to an unsafe method, delete it from cache
            //  https://www.rfc-editor.org/rfc/rfc9111.html#name-invalidating-stored-response
            try {
                this.#store.delete(this.#cacheKey)?.catch?.(noop);
            } catch  {
            // Fail silently
            }
            return downstreamOnHeaders();
        }
        const cacheControlHeader = resHeaders['cache-control'];
        const heuristicallyCacheable = resHeaders['last-modified'] && HEURISTICALLY_CACHEABLE_STATUS_CODES.includes(statusCode);
        if (!cacheControlHeader && !resHeaders['expires'] && !heuristicallyCacheable && !this.#cacheByDefault) {
            // Don't have anything to tell us this response is cachable and we're not
            //  caching by default
            return downstreamOnHeaders();
        }
        const cacheControlDirectives = cacheControlHeader ? parseCacheControlHeader(cacheControlHeader) : {};
        if (!canCacheResponse(this.#cacheType, statusCode, resHeaders, cacheControlDirectives)) {
            return downstreamOnHeaders();
        }
        const now = Date.now();
        const resAge = resHeaders.age ? getAge(resHeaders.age) : undefined;
        if (resAge && resAge >= MAX_RESPONSE_AGE) {
            // Response considered stale
            return downstreamOnHeaders();
        }
        const resDate = typeof resHeaders.date === 'string' ? parseHttpDate(resHeaders.date) : undefined;
        const staleAt = determineStaleAt(this.#cacheType, now, resAge, resHeaders, resDate, cacheControlDirectives) ?? this.#cacheByDefault;
        if (staleAt === undefined || resAge && resAge > staleAt) {
            return downstreamOnHeaders();
        }
        const baseTime = resDate ? resDate.getTime() : now;
        const absoluteStaleAt = staleAt + baseTime;
        if (now >= absoluteStaleAt) {
            // Response is already stale
            return downstreamOnHeaders();
        }
        let varyDirectives;
        if (this.#cacheKey.headers && resHeaders.vary) {
            varyDirectives = parseVaryHeader(resHeaders.vary, this.#cacheKey.headers);
            if (!varyDirectives) {
                // Parse error
                return downstreamOnHeaders();
            }
        }
        const deleteAt = determineDeleteAt(baseTime, cacheControlDirectives, absoluteStaleAt);
        const strippedHeaders = stripNecessaryHeaders(resHeaders, cacheControlDirectives);
        /**
     * @type {import('../../types/cache-interceptor.d.ts').default.CacheValue}
     */ const value = {
            statusCode,
            statusMessage,
            headers: strippedHeaders,
            vary: varyDirectives,
            cacheControlDirectives,
            cachedAt: resAge ? now - resAge : now,
            staleAt: absoluteStaleAt,
            deleteAt
        };
        if (typeof resHeaders.etag === 'string' && isEtagUsable(resHeaders.etag)) {
            value.etag = resHeaders.etag;
        }
        this.#writeStream = this.#store.createWriteStream(this.#cacheKey, value);
        if (!this.#writeStream) {
            return downstreamOnHeaders();
        }
        const handler = this;
        this.#writeStream.on('drain', ()=>controller.resume()).on('error', function() {
            // TODO (fix): Make error somehow observable?
            handler.#writeStream = undefined;
            // Delete the value in case the cache store is holding onto state from
            //  the call to createWriteStream
            handler.#store.delete(handler.#cacheKey);
        }).on('close', function() {
            if (handler.#writeStream === this) {
                handler.#writeStream = undefined;
            }
            // TODO (fix): Should we resume even if was paused downstream?
            controller.resume();
        });
        return downstreamOnHeaders();
    }
    onResponseData(controller, chunk) {
        if (this.#writeStream?.write(chunk) === false) {
            controller.pause();
        }
        this.#handler.onResponseData?.(controller, chunk);
    }
    onResponseEnd(controller, trailers) {
        this.#writeStream?.end();
        this.#handler.onResponseEnd?.(controller, trailers);
    }
    onResponseError(controller, err) {
        this.#writeStream?.destroy(err);
        this.#writeStream = undefined;
        this.#handler.onResponseError?.(controller, err);
    }
}
/**
 * @see https://www.rfc-editor.org/rfc/rfc9111.html#name-storing-responses-to-authen
 *
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheOptions['type']} cacheType
 * @param {number} statusCode
 * @param {import('../../types/header.d.ts').IncomingHttpHeaders} resHeaders
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives} cacheControlDirectives
 */ function canCacheResponse(cacheType, statusCode, resHeaders, cacheControlDirectives) {
    // Status code must be final and understood.
    if (statusCode < 200 || NOT_UNDERSTOOD_STATUS_CODES.includes(statusCode)) {
        return false;
    }
    // Responses with neither status codes that are heuristically cacheable, nor "explicit enough" caching
    // directives, are not cacheable. "Explicit enough": see https://www.rfc-editor.org/rfc/rfc9111.html#section-3
    if (!HEURISTICALLY_CACHEABLE_STATUS_CODES.includes(statusCode) && !resHeaders['expires'] && !cacheControlDirectives.public && cacheControlDirectives['max-age'] === undefined && // RFC 9111: a private response directive, if the cache is not shared
    !(cacheControlDirectives.private && cacheType === 'private') && !(cacheControlDirectives['s-maxage'] !== undefined && cacheType === 'shared')) {
        return false;
    }
    if (cacheControlDirectives['no-store']) {
        return false;
    }
    if (cacheType === 'shared' && cacheControlDirectives.private === true) {
        return false;
    }
    // https://www.rfc-editor.org/rfc/rfc9111.html#section-4.1-5
    if (resHeaders.vary?.includes('*')) {
        return false;
    }
    // https://www.rfc-editor.org/rfc/rfc9111.html#name-storing-responses-to-authen
    if (resHeaders.authorization) {
        if (!cacheControlDirectives.public || typeof resHeaders.authorization !== 'string') {
            return false;
        }
        if (Array.isArray(cacheControlDirectives['no-cache']) && cacheControlDirectives['no-cache'].includes('authorization')) {
            return false;
        }
        if (Array.isArray(cacheControlDirectives['private']) && cacheControlDirectives['private'].includes('authorization')) {
            return false;
        }
    }
    return true;
}
/**
 * @param {string | string[]} ageHeader
 * @returns {number | undefined}
 */ function getAge(ageHeader) {
    const age = parseInt(Array.isArray(ageHeader) ? ageHeader[0] : ageHeader);
    return isNaN(age) ? undefined : age * 1000;
}
/**
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheOptions['type']} cacheType
 * @param {number} now
 * @param {number | undefined} age
 * @param {import('../../types/header.d.ts').IncomingHttpHeaders} resHeaders
 * @param {Date | undefined} responseDate
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives} cacheControlDirectives
 *
 * @returns {number | undefined} time that the value is stale at in seconds or undefined if it shouldn't be cached
 */ function determineStaleAt(cacheType, now, age, resHeaders, responseDate, cacheControlDirectives) {
    if (cacheType === 'shared') {
        // Prioritize s-maxage since we're a shared cache
        //  s-maxage > max-age > Expire
        //  https://www.rfc-editor.org/rfc/rfc9111.html#section-5.2.2.10-3
        const sMaxAge = cacheControlDirectives['s-maxage'];
        if (sMaxAge !== undefined) {
            return sMaxAge > 0 ? sMaxAge * 1000 : undefined;
        }
    }
    const maxAge = cacheControlDirectives['max-age'];
    if (maxAge !== undefined) {
        return maxAge > 0 ? maxAge * 1000 : undefined;
    }
    if (typeof resHeaders.expires === 'string') {
        // https://www.rfc-editor.org/rfc/rfc9111.html#section-5.3
        const expiresDate = parseHttpDate(resHeaders.expires);
        if (expiresDate) {
            if (now >= expiresDate.getTime()) {
                return undefined;
            }
            if (responseDate) {
                if (responseDate >= expiresDate) {
                    return undefined;
                }
                if (age !== undefined && age > expiresDate - responseDate) {
                    return undefined;
                }
            }
            return expiresDate.getTime() - now;
        }
    }
    if (typeof resHeaders['last-modified'] === 'string') {
        // https://www.rfc-editor.org/rfc/rfc9111.html#name-calculating-heuristic-fresh
        const lastModified = new Date(resHeaders['last-modified']);
        if (isValidDate(lastModified)) {
            if (lastModified.getTime() >= now) {
                return undefined;
            }
            const responseAge = now - lastModified.getTime();
            return responseAge * 0.1;
        }
    }
    if (cacheControlDirectives.immutable) {
        // https://www.rfc-editor.org/rfc/rfc8246.html#section-2.2
        return 31536000;
    }
    return undefined;
}
/**
 * @param {number} now
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives} cacheControlDirectives
 * @param {number} staleAt
 */ function determineDeleteAt(now, cacheControlDirectives, staleAt) {
    let staleWhileRevalidate = -Infinity;
    let staleIfError = -Infinity;
    let immutable = -Infinity;
    if (cacheControlDirectives['stale-while-revalidate']) {
        staleWhileRevalidate = staleAt + cacheControlDirectives['stale-while-revalidate'] * 1000;
    }
    if (cacheControlDirectives['stale-if-error']) {
        staleIfError = staleAt + cacheControlDirectives['stale-if-error'] * 1000;
    }
    if (staleWhileRevalidate === -Infinity && staleIfError === -Infinity) {
        immutable = now + 31536000000;
    }
    return Math.max(staleAt, staleWhileRevalidate, staleIfError, immutable);
}
/**
 * Strips headers required to be removed in cached responses
 * @param {import('../../types/header.d.ts').IncomingHttpHeaders} resHeaders
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives} cacheControlDirectives
 * @returns {Record<string, string | string []>}
 */ function stripNecessaryHeaders(resHeaders, cacheControlDirectives) {
    const headersToRemove = [
        'connection',
        'proxy-authenticate',
        'proxy-authentication-info',
        'proxy-authorization',
        'proxy-connection',
        'te',
        'transfer-encoding',
        'upgrade',
        // We'll add age back when serving it
        'age'
    ];
    if (resHeaders['connection']) {
        if (Array.isArray(resHeaders['connection'])) {
            // connection: a
            // connection: b
            headersToRemove.push(...resHeaders['connection'].map((header)=>header.trim()));
        } else {
            // connection: a, b
            headersToRemove.push(...resHeaders['connection'].split(',').map((header)=>header.trim()));
        }
    }
    if (Array.isArray(cacheControlDirectives['no-cache'])) {
        headersToRemove.push(...cacheControlDirectives['no-cache']);
    }
    if (Array.isArray(cacheControlDirectives['private'])) {
        headersToRemove.push(...cacheControlDirectives['private']);
    }
    let strippedHeaders;
    for (const headerName of headersToRemove){
        if (resHeaders[headerName]) {
            strippedHeaders ??= {
                ...resHeaders
            };
            delete strippedHeaders[headerName];
        }
    }
    return strippedHeaders ?? resHeaders;
}
/**
 * @param {Date} date
 * @returns {boolean}
 */ function isValidDate(date) {
    return date instanceof Date && Number.isFinite(date.valueOf());
}
module.exports = CacheHandler;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/cache-revalidation-handler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
/**
 * This takes care of revalidation requests we send to the origin. If we get
 *  a response indicating that what we have is cached (via a HTTP 304), we can
 *  continue using the cached value. Otherwise, we'll receive the new response
 *  here, which we then just pass on to the next handler (most likely a
 *  CacheHandler). Note that this assumes the proper headers were already
 *  included in the request to tell the origin that we want to revalidate the
 *  response (i.e. if-modified-since or if-none-match).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9111.html#name-validation
 *
 * @implements {import('../../types/dispatcher.d.ts').default.DispatchHandler}
 */ class CacheRevalidationHandler {
    #successful = false;
    /**
   * @type {((boolean, any) => void) | null}
   */ #callback;
    /**
   * @type {(import('../../types/dispatcher.d.ts').default.DispatchHandler)}
   */ #handler;
    #context;
    /**
   * @type {boolean}
   */ #allowErrorStatusCodes;
    /**
   * @param {(boolean) => void} callback Function to call if the cached value is valid
   * @param {import('../../types/dispatcher.d.ts').default.DispatchHandlers} handler
   * @param {boolean} allowErrorStatusCodes
   */ constructor(callback, handler, allowErrorStatusCodes){
        if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }
        this.#callback = callback;
        this.#handler = handler;
        this.#allowErrorStatusCodes = allowErrorStatusCodes;
    }
    onRequestStart(_, context) {
        this.#successful = false;
        this.#context = context;
    }
    onRequestUpgrade(controller, statusCode, headers, socket) {
        this.#handler.onRequestUpgrade?.(controller, statusCode, headers, socket);
    }
    onResponseStart(controller, statusCode, headers, statusMessage) {
        assert(this.#callback != null);
        // https://www.rfc-editor.org/rfc/rfc9111.html#name-handling-a-validation-respo
        // https://datatracker.ietf.org/doc/html/rfc5861#section-4
        this.#successful = statusCode === 304 || this.#allowErrorStatusCodes && statusCode >= 500 && statusCode <= 504;
        this.#callback(this.#successful, this.#context);
        this.#callback = null;
        if (this.#successful) {
            return true;
        }
        this.#handler.onRequestStart?.(controller, this.#context);
        this.#handler.onResponseStart?.(controller, statusCode, headers, statusMessage);
    }
    onResponseData(controller, chunk) {
        if (this.#successful) {
            return;
        }
        return this.#handler.onResponseData?.(controller, chunk);
    }
    onResponseEnd(controller, trailers) {
        if (this.#successful) {
            return;
        }
        this.#handler.onResponseEnd?.(controller, trailers);
    }
    onResponseError(controller, err) {
        if (this.#successful) {
            return;
        }
        if (this.#callback) {
            this.#callback(false);
            this.#callback = null;
        }
        if (typeof this.#handler.onResponseError === 'function') {
            this.#handler.onResponseError(controller, err);
        } else {
            throw err;
        }
    }
}
module.exports = CacheRevalidationHandler;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/readable.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { Readable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { RequestAbortedError, NotSupportedError, InvalidArgumentError, AbortError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { ReadableStreamFrom } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const kConsume = Symbol('kConsume');
const kReading = Symbol('kReading');
const kBody = Symbol('kBody');
const kAbort = Symbol('kAbort');
const kContentType = Symbol('kContentType');
const kContentLength = Symbol('kContentLength');
const kUsed = Symbol('kUsed');
const kBytesRead = Symbol('kBytesRead');
const noop = ()=>{};
/**
 * @class
 * @extends {Readable}
 * @see https://fetch.spec.whatwg.org/#body
 */ class BodyReadable extends Readable {
    /**
   * @param {object} opts
   * @param {(this: Readable, size: number) => void} opts.resume
   * @param {() => (void | null)} opts.abort
   * @param {string} [opts.contentType = '']
   * @param {number} [opts.contentLength]
   * @param {number} [opts.highWaterMark = 64 * 1024]
   */ constructor({ resume, abort, contentType = '', contentLength, highWaterMark = 64 * 1024 // Same as nodejs fs streams.
     }){
        super({
            autoDestroy: true,
            read: resume,
            highWaterMark
        });
        this._readableState.dataEmitted = false;
        this[kAbort] = abort;
        /** @type {Consume | null} */ this[kConsume] = null;
        /** @type {number} */ this[kBytesRead] = 0;
        /** @type {ReadableStream|null} */ this[kBody] = null;
        /** @type {boolean} */ this[kUsed] = false;
        /** @type {string} */ this[kContentType] = contentType;
        /** @type {number|null} */ this[kContentLength] = Number.isFinite(contentLength) ? contentLength : null;
        /**
     * Is stream being consumed through Readable API?
     * This is an optimization so that we avoid checking
     * for 'data' and 'readable' listeners in the hot path
     * inside push().
     *
     * @type {boolean}
     */ this[kReading] = false;
    }
    /**
   * @param {Error|null} err
   * @param {(error:(Error|null)) => void} callback
   * @returns {void}
   */ _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) {
            err = new RequestAbortedError();
        }
        if (err) {
            this[kAbort]();
        }
        // Workaround for Node "bug". If the stream is destroyed in same
        // tick as it is created, then a user who is waiting for a
        // promise (i.e micro tick) for installing an 'error' listener will
        // never get a chance and will always encounter an unhandled exception.
        if (!this[kUsed]) {
            setImmediate(callback, err);
        } else {
            callback(err);
        }
    }
    /**
   * @param {string|symbol} event
   * @param {(...args: any[]) => void} listener
   * @returns {this}
   */ on(event, listener) {
        if (event === 'data' || event === 'readable') {
            this[kReading] = true;
            this[kUsed] = true;
        }
        return super.on(event, listener);
    }
    /**
   * @param {string|symbol} event
   * @param {(...args: any[]) => void} listener
   * @returns {this}
   */ addListener(event, listener) {
        return this.on(event, listener);
    }
    /**
   * @param {string|symbol} event
   * @param {(...args: any[]) => void} listener
   * @returns {this}
   */ off(event, listener) {
        const ret = super.off(event, listener);
        if (event === 'data' || event === 'readable') {
            this[kReading] = this.listenerCount('data') > 0 || this.listenerCount('readable') > 0;
        }
        return ret;
    }
    /**
   * @param {string|symbol} event
   * @param {(...args: any[]) => void} listener
   * @returns {this}
   */ removeListener(event, listener) {
        return this.off(event, listener);
    }
    /**
   * @param {Buffer|null} chunk
   * @returns {boolean}
   */ push(chunk) {
        if (chunk) {
            this[kBytesRead] += chunk.length;
            if (this[kConsume]) {
                consumePush(this[kConsume], chunk);
                return this[kReading] ? super.push(chunk) : true;
            }
        }
        return super.push(chunk);
    }
    /**
   * Consumes and returns the body as a string.
   *
   * @see https://fetch.spec.whatwg.org/#dom-body-text
   * @returns {Promise<string>}
   */ text() {
        return consume(this, 'text');
    }
    /**
   * Consumes and returns the body as a JavaScript Object.
   *
   * @see https://fetch.spec.whatwg.org/#dom-body-json
   * @returns {Promise<unknown>}
   */ json() {
        return consume(this, 'json');
    }
    /**
   * Consumes and returns the body as a Blob
   *
   * @see https://fetch.spec.whatwg.org/#dom-body-blob
   * @returns {Promise<Blob>}
   */ blob() {
        return consume(this, 'blob');
    }
    /**
   * Consumes and returns the body as an Uint8Array.
   *
   * @see https://fetch.spec.whatwg.org/#dom-body-bytes
   * @returns {Promise<Uint8Array>}
   */ bytes() {
        return consume(this, 'bytes');
    }
    /**
   * Consumes and returns the body as an ArrayBuffer.
   *
   * @see https://fetch.spec.whatwg.org/#dom-body-arraybuffer
   * @returns {Promise<ArrayBuffer>}
   */ arrayBuffer() {
        return consume(this, 'arrayBuffer');
    }
    /**
   * Not implemented
   *
   * @see https://fetch.spec.whatwg.org/#dom-body-formdata
   * @throws {NotSupportedError}
   */ async formData() {
        // TODO: Implement.
        throw new NotSupportedError();
    }
    /**
   * Returns true if the body is not null and the body has been consumed.
   * Otherwise, returns false.
   *
   * @see https://fetch.spec.whatwg.org/#dom-body-bodyused
   * @readonly
   * @returns {boolean}
   */ get bodyUsed() {
        return util.isDisturbed(this);
    }
    /**
   * @see https://fetch.spec.whatwg.org/#dom-body-body
   * @readonly
   * @returns {ReadableStream}
   */ get body() {
        if (!this[kBody]) {
            this[kBody] = ReadableStreamFrom(this);
            if (this[kConsume]) {
                // TODO: Is this the best way to force a lock?
                this[kBody].getReader(); // Ensure stream is locked.
                assert(this[kBody].locked);
            }
        }
        return this[kBody];
    }
    /**
   * Dumps the response body by reading `limit` number of bytes.
   * @param {object} opts
   * @param {number} [opts.limit = 131072] Number of bytes to read.
   * @param {AbortSignal} [opts.signal] An AbortSignal to cancel the dump.
   * @returns {Promise<null>}
   */ dump(opts) {
        const signal = opts?.signal;
        if (signal != null && (typeof signal !== 'object' || !('aborted' in signal))) {
            return Promise.reject(new InvalidArgumentError('signal must be an AbortSignal'));
        }
        const limit = opts?.limit && Number.isFinite(opts.limit) ? opts.limit : 128 * 1024;
        if (signal?.aborted) {
            return Promise.reject(signal.reason ?? new AbortError());
        }
        if (this._readableState.closeEmitted) {
            return Promise.resolve(null);
        }
        return new Promise((resolve, reject)=>{
            if (this[kContentLength] && this[kContentLength] > limit || this[kBytesRead] > limit) {
                this.destroy(new AbortError());
            }
            if (signal) {
                const onAbort = ()=>{
                    this.destroy(signal.reason ?? new AbortError());
                };
                signal.addEventListener('abort', onAbort);
                this.on('close', function() {
                    signal.removeEventListener('abort', onAbort);
                    if (signal.aborted) {
                        reject(signal.reason ?? new AbortError());
                    } else {
                        resolve(null);
                    }
                });
            } else {
                this.on('close', resolve);
            }
            this.on('error', noop).on('data', ()=>{
                if (this[kBytesRead] > limit) {
                    this.destroy();
                }
            }).resume();
        });
    }
    /**
   * @param {BufferEncoding} encoding
   * @returns {this}
   */ setEncoding(encoding) {
        if (Buffer.isEncoding(encoding)) {
            this._readableState.encoding = encoding;
        }
        return this;
    }
}
/**
 * @see https://streams.spec.whatwg.org/#readablestream-locked
 * @param {BodyReadable} bodyReadable
 * @returns {boolean}
 */ function isLocked(bodyReadable) {
    // Consume is an implicit lock.
    return bodyReadable[kBody]?.locked === true || bodyReadable[kConsume] !== null;
}
/**
 * @see https://fetch.spec.whatwg.org/#body-unusable
 * @param {BodyReadable} bodyReadable
 * @returns {boolean}
 */ function isUnusable(bodyReadable) {
    return util.isDisturbed(bodyReadable) || isLocked(bodyReadable);
}
/**
 * @typedef {'text' | 'json' | 'blob' | 'bytes' | 'arrayBuffer'} ConsumeType
 */ /**
 * @template {ConsumeType} T
 * @typedef {T extends 'text' ? string :
 *           T extends 'json' ? unknown :
 *           T extends 'blob' ? Blob :
 *           T extends 'arrayBuffer' ? ArrayBuffer :
 *           T extends 'bytes' ? Uint8Array :
 *           never
 * } ConsumeReturnType
 */ /**
 * @typedef {object} Consume
 * @property {ConsumeType} type
 * @property {BodyReadable} stream
 * @property {((value?: any) => void)} resolve
 * @property {((err: Error) => void)} reject
 * @property {number} length
 * @property {Buffer[]} body
 */ /**
 * @template {ConsumeType} T
 * @param {BodyReadable} stream
 * @param {T} type
 * @returns {Promise<ConsumeReturnType<T>>}
 */ function consume(stream, type) {
    assert(!stream[kConsume]);
    return new Promise((resolve, reject)=>{
        if (isUnusable(stream)) {
            const rState = stream._readableState;
            if (rState.destroyed && rState.closeEmitted === false) {
                stream.on('error', reject).on('close', ()=>{
                    reject(new TypeError('unusable'));
                });
            } else {
                reject(rState.errored ?? new TypeError('unusable'));
            }
        } else {
            queueMicrotask(()=>{
                stream[kConsume] = {
                    type,
                    stream,
                    resolve,
                    reject,
                    length: 0,
                    body: []
                };
                stream.on('error', function(err) {
                    consumeFinish(this[kConsume], err);
                }).on('close', function() {
                    if (this[kConsume].body !== null) {
                        consumeFinish(this[kConsume], new RequestAbortedError());
                    }
                });
                consumeStart(stream[kConsume]);
            });
        }
    });
}
/**
 * @param {Consume} consume
 * @returns {void}
 */ function consumeStart(consume) {
    if (consume.body === null) {
        return;
    }
    const { _readableState: state } = consume.stream;
    if (state.bufferIndex) {
        const start = state.bufferIndex;
        const end = state.buffer.length;
        for(let n = start; n < end; n++){
            consumePush(consume, state.buffer[n]);
        }
    } else {
        for (const chunk of state.buffer){
            consumePush(consume, chunk);
        }
    }
    if (state.endEmitted) {
        consumeEnd(this[kConsume], this._readableState.encoding);
    } else {
        consume.stream.on('end', function() {
            consumeEnd(this[kConsume], this._readableState.encoding);
        });
    }
    consume.stream.resume();
    while(consume.stream.read() != null){
    // Loop
    }
}
/**
 * @param {Buffer[]} chunks
 * @param {number} length
 * @param {BufferEncoding} [encoding='utf8']
 * @returns {string}
 */ function chunksDecode(chunks, length, encoding) {
    if (chunks.length === 0 || length === 0) {
        return '';
    }
    const buffer = chunks.length === 1 ? chunks[0] : Buffer.concat(chunks, length);
    const bufferLength = buffer.length;
    // Skip BOM.
    const start = bufferLength > 2 && buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf ? 3 : 0;
    if (!encoding || encoding === 'utf8' || encoding === 'utf-8') {
        return buffer.utf8Slice(start, bufferLength);
    } else {
        return buffer.subarray(start, bufferLength).toString(encoding);
    }
}
/**
 * @param {Buffer[]} chunks
 * @param {number} length
 * @returns {Uint8Array}
 */ function chunksConcat(chunks, length) {
    if (chunks.length === 0 || length === 0) {
        return new Uint8Array(0);
    }
    if (chunks.length === 1) {
        // fast-path
        return new Uint8Array(chunks[0]);
    }
    const buffer = new Uint8Array(Buffer.allocUnsafeSlow(length).buffer);
    let offset = 0;
    for(let i = 0; i < chunks.length; ++i){
        const chunk = chunks[i];
        buffer.set(chunk, offset);
        offset += chunk.length;
    }
    return buffer;
}
/**
 * @param {Consume} consume
 * @param {BufferEncoding} encoding
 * @returns {void}
 */ function consumeEnd(consume, encoding) {
    const { type, body, resolve, stream, length } = consume;
    try {
        if (type === 'text') {
            resolve(chunksDecode(body, length, encoding));
        } else if (type === 'json') {
            resolve(JSON.parse(chunksDecode(body, length, encoding)));
        } else if (type === 'arrayBuffer') {
            resolve(chunksConcat(body, length).buffer);
        } else if (type === 'blob') {
            resolve(new Blob(body, {
                type: stream[kContentType]
            }));
        } else if (type === 'bytes') {
            resolve(chunksConcat(body, length));
        }
        consumeFinish(consume);
    } catch (err) {
        stream.destroy(err);
    }
}
/**
 * @param {Consume} consume
 * @param {Buffer} chunk
 * @returns {void}
 */ function consumePush(consume, chunk) {
    consume.length += chunk.length;
    consume.body.push(chunk);
}
/**
 * @param {Consume} consume
 * @param {Error} [err]
 * @returns {void}
 */ function consumeFinish(consume, err) {
    if (consume.body === null) {
        return;
    }
    if (err) {
        consume.reject(err);
    } else {
        consume.resolve();
    }
    // Reset the consume object to allow for garbage collection.
    consume.type = null;
    consume.stream = null;
    consume.resolve = null;
    consume.reject = null;
    consume.length = 0;
    consume.body = null;
}
module.exports = {
    Readable: BodyReadable,
    chunksDecode
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-request.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { AsyncResource } = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
const { Readable } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/readable.js [app-rsc] (ecmascript)");
const { InvalidArgumentError, RequestAbortedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
function noop() {}
class RequestHandler extends AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') {
            throw new InvalidArgumentError('invalid opts');
        }
        const { signal, method, opaque, body, onInfo, responseHeaders, highWaterMark } = opts;
        try {
            if (typeof callback !== 'function') {
                throw new InvalidArgumentError('invalid callback');
            }
            if (highWaterMark && (typeof highWaterMark !== 'number' || highWaterMark < 0)) {
                throw new InvalidArgumentError('invalid highWaterMark');
            }
            if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') {
                throw new InvalidArgumentError('signal must be an EventEmitter or EventTarget');
            }
            if (method === 'CONNECT') {
                throw new InvalidArgumentError('invalid method');
            }
            if (onInfo && typeof onInfo !== 'function') {
                throw new InvalidArgumentError('invalid onInfo callback');
            }
            super('UNDICI_REQUEST');
        } catch (err) {
            if (util.isStream(body)) {
                util.destroy(body.on('error', noop), err);
            }
            throw err;
        }
        this.method = method;
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.body = body;
        this.trailers = {};
        this.context = null;
        this.onInfo = onInfo || null;
        this.highWaterMark = highWaterMark;
        this.reason = null;
        this.removeAbortListener = null;
        if (signal?.aborted) {
            this.reason = signal.reason ?? new RequestAbortedError();
        } else if (signal) {
            this.removeAbortListener = util.addAbortListener(signal, ()=>{
                this.reason = signal.reason ?? new RequestAbortedError();
                if (this.res) {
                    util.destroy(this.res.on('error', noop), this.reason);
                } else if (this.abort) {
                    this.abort(this.reason);
                }
            });
        }
    }
    onConnect(abort, context) {
        if (this.reason) {
            abort(this.reason);
            return;
        }
        assert(this.callback);
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { callback, opaque, abort, context, responseHeaders, highWaterMark } = this;
        const headers = responseHeaders === 'raw' ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        if (statusCode < 200) {
            if (this.onInfo) {
                this.onInfo({
                    statusCode,
                    headers
                });
            }
            return;
        }
        const parsedHeaders = responseHeaders === 'raw' ? util.parseHeaders(rawHeaders) : headers;
        const contentType = parsedHeaders['content-type'];
        const contentLength = parsedHeaders['content-length'];
        const res = new Readable({
            resume,
            abort,
            contentType,
            contentLength: this.method !== 'HEAD' && contentLength ? Number(contentLength) : null,
            highWaterMark
        });
        if (this.removeAbortListener) {
            res.on('close', this.removeAbortListener);
            this.removeAbortListener = null;
        }
        this.callback = null;
        this.res = res;
        if (callback !== null) {
            try {
                this.runInAsyncScope(callback, null, null, {
                    statusCode,
                    headers,
                    trailers: this.trailers,
                    opaque,
                    body: res,
                    context
                });
            } catch (err) {
                // If the callback throws synchronously, we need to handle it
                // Remove reference to res to allow res being garbage collected
                this.res = null;
                // Destroy the response stream
                util.destroy(res.on('error', noop), err);
                // Use queueMicrotask to re-throw the error so it reaches uncaughtException
                queueMicrotask(()=>{
                    throw err;
                });
            }
        }
    }
    onData(chunk) {
        return this.res.push(chunk);
    }
    onComplete(trailers) {
        util.parseHeaders(trailers, this.trailers);
        this.res.push(null);
    }
    onError(err) {
        const { res, callback, body, opaque } = this;
        if (callback) {
            // TODO: Does this need queueMicrotask?
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque
                });
            });
        }
        if (res) {
            this.res = null;
            // Ensure all queued handlers are invoked before destroying res.
            queueMicrotask(()=>{
                util.destroy(res.on('error', noop), err);
            });
        }
        if (body) {
            this.body = null;
            if (util.isStream(body)) {
                body.on('error', noop);
                util.destroy(body, err);
            }
        }
        if (this.removeAbortListener) {
            this.removeAbortListener();
            this.removeAbortListener = null;
        }
    }
}
function request(opts, callback) {
    if (callback === undefined) {
        return new Promise((resolve, reject)=>{
            request.call(this, opts, (err, data)=>{
                return err ? reject(err) : resolve(data);
            });
        });
    }
    try {
        const handler = new RequestHandler(opts, callback);
        this.dispatch(opts, handler);
    } catch (err) {
        if (typeof callback !== 'function') {
            throw err;
        }
        const opaque = opts?.opaque;
        queueMicrotask(()=>callback(err, {
                opaque
            }));
    }
}
module.exports = request;
module.exports.RequestHandler = RequestHandler;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/abort-signal.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { addAbortListener } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { RequestAbortedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const kListener = Symbol('kListener');
const kSignal = Symbol('kSignal');
function abort(self) {
    if (self.abort) {
        self.abort(self[kSignal]?.reason);
    } else {
        self.reason = self[kSignal]?.reason ?? new RequestAbortedError();
    }
    removeSignal(self);
}
function addSignal(self, signal) {
    self.reason = null;
    self[kSignal] = null;
    self[kListener] = null;
    if (!signal) {
        return;
    }
    if (signal.aborted) {
        abort(self);
        return;
    }
    self[kSignal] = signal;
    self[kListener] = ()=>{
        abort(self);
    };
    addAbortListener(self[kSignal], self[kListener]);
}
function removeSignal(self) {
    if (!self[kSignal]) {
        return;
    }
    if ('removeEventListener' in self[kSignal]) {
        self[kSignal].removeEventListener('abort', self[kListener]);
    } else {
        self[kSignal].removeListener('abort', self[kListener]);
    }
    self[kSignal] = null;
    self[kListener] = null;
}
module.exports = {
    addSignal,
    removeSignal
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-stream.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { finished } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { AsyncResource } = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
const { InvalidArgumentError, InvalidReturnValueError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { addSignal, removeSignal } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/abort-signal.js [app-rsc] (ecmascript)");
function noop() {}
class StreamHandler extends AsyncResource {
    constructor(opts, factory, callback){
        if (!opts || typeof opts !== 'object') {
            throw new InvalidArgumentError('invalid opts');
        }
        const { signal, method, opaque, body, onInfo, responseHeaders } = opts;
        try {
            if (typeof callback !== 'function') {
                throw new InvalidArgumentError('invalid callback');
            }
            if (typeof factory !== 'function') {
                throw new InvalidArgumentError('invalid factory');
            }
            if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') {
                throw new InvalidArgumentError('signal must be an EventEmitter or EventTarget');
            }
            if (method === 'CONNECT') {
                throw new InvalidArgumentError('invalid method');
            }
            if (onInfo && typeof onInfo !== 'function') {
                throw new InvalidArgumentError('invalid onInfo callback');
            }
            super('UNDICI_STREAM');
        } catch (err) {
            if (util.isStream(body)) {
                util.destroy(body.on('error', noop), err);
            }
            throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.factory = factory;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.context = null;
        this.trailers = null;
        this.body = body;
        this.onInfo = onInfo || null;
        if (util.isStream(body)) {
            body.on('error', (err)=>{
                this.onError(err);
            });
        }
        addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (this.reason) {
            abort(this.reason);
            return;
        }
        assert(this.callback);
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume, statusMessage) {
        const { factory, opaque, context, responseHeaders } = this;
        const headers = responseHeaders === 'raw' ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        if (statusCode < 200) {
            if (this.onInfo) {
                this.onInfo({
                    statusCode,
                    headers
                });
            }
            return;
        }
        this.factory = null;
        if (factory === null) {
            return;
        }
        const res = this.runInAsyncScope(factory, null, {
            statusCode,
            headers,
            opaque,
            context
        });
        if (!res || typeof res.write !== 'function' || typeof res.end !== 'function' || typeof res.on !== 'function') {
            throw new InvalidReturnValueError('expected Writable');
        }
        // TODO: Avoid finished. It registers an unnecessary amount of listeners.
        finished(res, {
            readable: false
        }, (err)=>{
            const { callback, res, opaque, trailers, abort } = this;
            this.res = null;
            if (err || !res?.readable) {
                util.destroy(res, err);
            }
            this.callback = null;
            this.runInAsyncScope(callback, null, err || null, {
                opaque,
                trailers
            });
            if (err) {
                abort();
            }
        });
        res.on('drain', resume);
        this.res = res;
        const needDrain = res.writableNeedDrain !== undefined ? res.writableNeedDrain : res._writableState?.needDrain;
        return needDrain !== true;
    }
    onData(chunk) {
        const { res } = this;
        return res ? res.write(chunk) : true;
    }
    onComplete(trailers) {
        const { res } = this;
        removeSignal(this);
        if (!res) {
            return;
        }
        this.trailers = util.parseHeaders(trailers);
        res.end();
    }
    onError(err) {
        const { res, callback, opaque, body } = this;
        removeSignal(this);
        this.factory = null;
        if (res) {
            this.res = null;
            util.destroy(res, err);
        } else if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque
                });
            });
        }
        if (body) {
            this.body = null;
            util.destroy(body, err);
        }
    }
}
function stream(opts, factory, callback) {
    if (callback === undefined) {
        return new Promise((resolve, reject)=>{
            stream.call(this, opts, factory, (err, data)=>{
                return err ? reject(err) : resolve(data);
            });
        });
    }
    try {
        const handler = new StreamHandler(opts, factory, callback);
        this.dispatch(opts, handler);
    } catch (err) {
        if (typeof callback !== 'function') {
            throw err;
        }
        const opaque = opts?.opaque;
        queueMicrotask(()=>callback(err, {
                opaque
            }));
    }
}
module.exports = stream;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-pipeline.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Readable, Duplex, PassThrough } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { AsyncResource } = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
const { InvalidArgumentError, InvalidReturnValueError, RequestAbortedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { addSignal, removeSignal } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/abort-signal.js [app-rsc] (ecmascript)");
function noop() {}
const kResume = Symbol('resume');
class PipelineRequest extends Readable {
    constructor(){
        super({
            autoDestroy: true
        });
        this[kResume] = null;
    }
    _read() {
        const { [kResume]: resume } = this;
        if (resume) {
            this[kResume] = null;
            resume();
        }
    }
    _destroy(err, callback) {
        this._read();
        callback(err);
    }
}
class PipelineResponse extends Readable {
    constructor(resume){
        super({
            autoDestroy: true
        });
        this[kResume] = resume;
    }
    _read() {
        this[kResume]();
    }
    _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) {
            err = new RequestAbortedError();
        }
        callback(err);
    }
}
class PipelineHandler extends AsyncResource {
    constructor(opts, handler){
        if (!opts || typeof opts !== 'object') {
            throw new InvalidArgumentError('invalid opts');
        }
        if (typeof handler !== 'function') {
            throw new InvalidArgumentError('invalid handler');
        }
        const { signal, method, opaque, onInfo, responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') {
            throw new InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        }
        if (method === 'CONNECT') {
            throw new InvalidArgumentError('invalid method');
        }
        if (onInfo && typeof onInfo !== 'function') {
            throw new InvalidArgumentError('invalid onInfo callback');
        }
        super('UNDICI_PIPELINE');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.handler = handler;
        this.abort = null;
        this.context = null;
        this.onInfo = onInfo || null;
        this.req = new PipelineRequest().on('error', noop);
        this.ret = new Duplex({
            readableObjectMode: opts.objectMode,
            autoDestroy: true,
            read: ()=>{
                const { body } = this;
                if (body?.resume) {
                    body.resume();
                }
            },
            write: (chunk, encoding, callback)=>{
                const { req } = this;
                if (req.push(chunk, encoding) || req._readableState.destroyed) {
                    callback();
                } else {
                    req[kResume] = callback;
                }
            },
            destroy: (err, callback)=>{
                const { body, req, res, ret, abort } = this;
                if (!err && !ret._readableState.endEmitted) {
                    err = new RequestAbortedError();
                }
                if (abort && err) {
                    abort();
                }
                util.destroy(body, err);
                util.destroy(req, err);
                util.destroy(res, err);
                removeSignal(this);
                callback(err);
            }
        }).on('prefinish', ()=>{
            const { req } = this;
            // Node < 15 does not call _final in same tick.
            req.push(null);
        });
        this.res = null;
        addSignal(this, signal);
    }
    onConnect(abort, context) {
        const { res } = this;
        if (this.reason) {
            abort(this.reason);
            return;
        }
        assert(!res, 'pipeline cannot be retried');
        this.abort = abort;
        this.context = context;
    }
    onHeaders(statusCode, rawHeaders, resume) {
        const { opaque, handler, context } = this;
        if (statusCode < 200) {
            if (this.onInfo) {
                const headers = this.responseHeaders === 'raw' ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
                this.onInfo({
                    statusCode,
                    headers
                });
            }
            return;
        }
        this.res = new PipelineResponse(resume);
        let body;
        try {
            this.handler = null;
            const headers = this.responseHeaders === 'raw' ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
            body = this.runInAsyncScope(handler, null, {
                statusCode,
                headers,
                opaque,
                body: this.res,
                context
            });
        } catch (err) {
            this.res.on('error', noop);
            throw err;
        }
        if (!body || typeof body.on !== 'function') {
            throw new InvalidReturnValueError('expected Readable');
        }
        body.on('data', (chunk)=>{
            const { ret, body } = this;
            if (!ret.push(chunk) && body.pause) {
                body.pause();
            }
        }).on('error', (err)=>{
            const { ret } = this;
            util.destroy(ret, err);
        }).on('end', ()=>{
            const { ret } = this;
            ret.push(null);
        }).on('close', ()=>{
            const { ret } = this;
            if (!ret._readableState.ended) {
                util.destroy(ret, new RequestAbortedError());
            }
        });
        this.body = body;
    }
    onData(chunk) {
        const { res } = this;
        return res.push(chunk);
    }
    onComplete(trailers) {
        const { res } = this;
        res.push(null);
    }
    onError(err) {
        const { ret } = this;
        this.handler = null;
        util.destroy(ret, err);
    }
}
function pipeline(opts, handler) {
    try {
        const pipelineHandler = new PipelineHandler(opts, handler);
        this.dispatch({
            ...opts,
            body: pipelineHandler.req
        }, pipelineHandler);
        return pipelineHandler.ret;
    } catch (err) {
        return new PassThrough().destroy(err);
    }
}
module.exports = pipeline;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-upgrade.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { InvalidArgumentError, SocketError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const { AsyncResource } = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { addSignal, removeSignal } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/abort-signal.js [app-rsc] (ecmascript)");
class UpgradeHandler extends AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') {
            throw new InvalidArgumentError('invalid opts');
        }
        if (typeof callback !== 'function') {
            throw new InvalidArgumentError('invalid callback');
        }
        const { signal, opaque, responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') {
            throw new InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        }
        super('UNDICI_UPGRADE');
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.abort = null;
        this.context = null;
        addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (this.reason) {
            abort(this.reason);
            return;
        }
        assert(this.callback);
        this.abort = abort;
        this.context = null;
    }
    onHeaders() {
        throw new SocketError('bad upgrade', null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        assert(statusCode === 101);
        const { callback, opaque, context } = this;
        removeSignal(this);
        this.callback = null;
        const headers = this.responseHeaders === 'raw' ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
            headers,
            socket,
            opaque,
            context
        });
    }
    onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque
                });
            });
        }
    }
}
function upgrade(opts, callback) {
    if (callback === undefined) {
        return new Promise((resolve, reject)=>{
            upgrade.call(this, opts, (err, data)=>{
                return err ? reject(err) : resolve(data);
            });
        });
    }
    try {
        const upgradeHandler = new UpgradeHandler(opts, callback);
        const upgradeOpts = {
            ...opts,
            method: opts.method || 'GET',
            upgrade: opts.protocol || 'Websocket'
        };
        this.dispatch(upgradeOpts, upgradeHandler);
    } catch (err) {
        if (typeof callback !== 'function') {
            throw err;
        }
        const opaque = opts?.opaque;
        queueMicrotask(()=>callback(err, {
                opaque
            }));
    }
}
module.exports = upgrade;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-connect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { AsyncResource } = __turbopack_context__.r("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
const { InvalidArgumentError, SocketError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { addSignal, removeSignal } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/abort-signal.js [app-rsc] (ecmascript)");
class ConnectHandler extends AsyncResource {
    constructor(opts, callback){
        if (!opts || typeof opts !== 'object') {
            throw new InvalidArgumentError('invalid opts');
        }
        if (typeof callback !== 'function') {
            throw new InvalidArgumentError('invalid callback');
        }
        const { signal, opaque, responseHeaders } = opts;
        if (signal && typeof signal.on !== 'function' && typeof signal.addEventListener !== 'function') {
            throw new InvalidArgumentError('signal must be an EventEmitter or EventTarget');
        }
        super('UNDICI_CONNECT');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.callback = callback;
        this.abort = null;
        addSignal(this, signal);
    }
    onConnect(abort, context) {
        if (this.reason) {
            abort(this.reason);
            return;
        }
        assert(this.callback);
        this.abort = abort;
        this.context = context;
    }
    onHeaders() {
        throw new SocketError('bad connect', null);
    }
    onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context } = this;
        removeSignal(this);
        this.callback = null;
        let headers = rawHeaders;
        // Indicates is an HTTP2Session
        if (headers != null) {
            headers = this.responseHeaders === 'raw' ? util.parseRawHeaders(rawHeaders) : util.parseHeaders(rawHeaders);
        }
        this.runInAsyncScope(callback, null, null, {
            statusCode,
            headers,
            socket,
            opaque,
            context
        });
    }
    onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
            this.callback = null;
            queueMicrotask(()=>{
                this.runInAsyncScope(callback, null, err, {
                    opaque
                });
            });
        }
    }
}
function connect(opts, callback) {
    if (callback === undefined) {
        return new Promise((resolve, reject)=>{
            connect.call(this, opts, (err, data)=>{
                return err ? reject(err) : resolve(data);
            });
        });
    }
    try {
        const connectHandler = new ConnectHandler(opts, callback);
        const connectOptions = {
            ...opts,
            method: 'CONNECT'
        };
        this.dispatch(connectOptions, connectHandler);
    } catch (err) {
        if (typeof callback !== 'function') {
            throw err;
        }
        const opaque = opts?.opaque;
        queueMicrotask(()=>callback(err, {
                opaque
            }));
    }
}
module.exports = connect;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports.request = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-request.js [app-rsc] (ecmascript)");
module.exports.stream = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-stream.js [app-rsc] (ecmascript)");
module.exports.pipeline = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-pipeline.js [app-rsc] (ecmascript)");
module.exports.upgrade = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-upgrade.js [app-rsc] (ecmascript)");
module.exports.connect = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/api-connect.js [app-rsc] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-errors.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { UndiciError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const kMockNotMatchedError = Symbol.for('undici.error.UND_MOCK_ERR_MOCK_NOT_MATCHED');
/**
 * The request does not match any registered mock dispatches.
 */ class MockNotMatchedError extends UndiciError {
    constructor(message){
        super(message);
        this.name = 'MockNotMatchedError';
        this.message = message || 'The request does not match any registered mock dispatches';
        this.code = 'UND_MOCK_ERR_MOCK_NOT_MATCHED';
    }
    static [Symbol.hasInstance](instance) {
        return instance && instance[kMockNotMatchedError] === true;
    }
    get [kMockNotMatchedError]() {
        return true;
    }
}
module.exports = {
    MockNotMatchedError
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-symbols.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    kAgent: Symbol('agent'),
    kOptions: Symbol('options'),
    kFactory: Symbol('factory'),
    kDispatches: Symbol('dispatches'),
    kDispatchKey: Symbol('dispatch key'),
    kDefaultHeaders: Symbol('default headers'),
    kDefaultTrailers: Symbol('default trailers'),
    kContentLength: Symbol('content length'),
    kMockAgent: Symbol('mock agent'),
    kMockAgentSet: Symbol('mock agent set'),
    kMockAgentGet: Symbol('mock agent get'),
    kMockDispatch: Symbol('mock dispatch'),
    kClose: Symbol('close'),
    kOriginalClose: Symbol('original agent close'),
    kOriginalDispatch: Symbol('original dispatch'),
    kOrigin: Symbol('origin'),
    kIsMockActive: Symbol('is mock active'),
    kNetConnect: Symbol('net connect'),
    kGetNetConnect: Symbol('get net connect'),
    kConnected: Symbol('connected'),
    kIgnoreTrailingSlash: Symbol('ignore trailing slash'),
    kMockAgentMockCallHistoryInstance: Symbol('mock agent mock call history name'),
    kMockAgentRegisterCallHistory: Symbol('mock agent register mock call history'),
    kMockAgentAddCallHistoryLog: Symbol('mock agent add call history log'),
    kMockAgentIsCallHistoryEnabled: Symbol('mock agent is call history enabled'),
    kMockAgentAcceptsNonStandardSearchParameters: Symbol('mock agent accepts non standard search parameters'),
    kMockCallHistoryAddLog: Symbol('mock call history add log')
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { MockNotMatchedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-errors.js [app-rsc] (ecmascript)");
const { kDispatches, kMockAgent, kOriginalDispatch, kOrigin, kGetNetConnect } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-symbols.js [app-rsc] (ecmascript)");
const { serializePathWithQuery } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const { STATUS_CODES } = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const { types: { isPromise } } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
function matchValue(match, value) {
    if (typeof match === 'string') {
        return match === value;
    }
    if (match instanceof RegExp) {
        return match.test(value);
    }
    if (typeof match === 'function') {
        return match(value) === true;
    }
    return false;
}
function lowerCaseEntries(headers) {
    return Object.fromEntries(Object.entries(headers).map(([headerName, headerValue])=>{
        return [
            headerName.toLocaleLowerCase(),
            headerValue
        ];
    }));
}
/**
 * @param {import('../../index').Headers|string[]|Record<string, string>} headers
 * @param {string} key
 */ function getHeaderByName(headers, key) {
    if (Array.isArray(headers)) {
        for(let i = 0; i < headers.length; i += 2){
            if (headers[i].toLocaleLowerCase() === key.toLocaleLowerCase()) {
                return headers[i + 1];
            }
        }
        return undefined;
    } else if (typeof headers.get === 'function') {
        return headers.get(key);
    } else {
        return lowerCaseEntries(headers)[key.toLocaleLowerCase()];
    }
}
/** @param {string[]} headers */ function buildHeadersFromArray(headers) {
    const clone = headers.slice();
    const entries = [];
    for(let index = 0; index < clone.length; index += 2){
        entries.push([
            clone[index],
            clone[index + 1]
        ]);
    }
    return Object.fromEntries(entries);
}
function matchHeaders(mockDispatch, headers) {
    if (typeof mockDispatch.headers === 'function') {
        if (Array.isArray(headers)) {
            headers = buildHeadersFromArray(headers);
        }
        return mockDispatch.headers(headers ? lowerCaseEntries(headers) : {});
    }
    if (typeof mockDispatch.headers === 'undefined') {
        return true;
    }
    if (typeof headers !== 'object' || typeof mockDispatch.headers !== 'object') {
        return false;
    }
    for (const [matchHeaderName, matchHeaderValue] of Object.entries(mockDispatch.headers)){
        const headerValue = getHeaderByName(headers, matchHeaderName);
        if (!matchValue(matchHeaderValue, headerValue)) {
            return false;
        }
    }
    return true;
}
function normalizeSearchParams(query) {
    if (typeof query !== 'string') {
        return query;
    }
    const originalQp = new URLSearchParams(query);
    const normalizedQp = new URLSearchParams();
    for (let [key, value] of originalQp.entries()){
        key = key.replace('[]', '');
        const valueRepresentsString = /^(['"]).*\1$/.test(value);
        if (valueRepresentsString) {
            normalizedQp.append(key, value);
            continue;
        }
        if (value.includes(',')) {
            const values = value.split(',');
            for (const v of values){
                normalizedQp.append(key, v);
            }
            continue;
        }
        normalizedQp.append(key, value);
    }
    return normalizedQp;
}
function safeUrl(path) {
    if (typeof path !== 'string') {
        return path;
    }
    const pathSegments = path.split('?', 3);
    if (pathSegments.length !== 2) {
        return path;
    }
    const qp = new URLSearchParams(pathSegments.pop());
    qp.sort();
    return [
        ...pathSegments,
        qp.toString()
    ].join('?');
}
function matchKey(mockDispatch, { path, method, body, headers }) {
    const pathMatch = matchValue(mockDispatch.path, path);
    const methodMatch = matchValue(mockDispatch.method, method);
    const bodyMatch = typeof mockDispatch.body !== 'undefined' ? matchValue(mockDispatch.body, body) : true;
    const headersMatch = matchHeaders(mockDispatch, headers);
    return pathMatch && methodMatch && bodyMatch && headersMatch;
}
function getResponseData(data) {
    if (Buffer.isBuffer(data)) {
        return data;
    } else if (data instanceof Uint8Array) {
        return data;
    } else if (data instanceof ArrayBuffer) {
        return data;
    } else if (typeof data === 'object') {
        return JSON.stringify(data);
    } else if (data) {
        return data.toString();
    } else {
        return '';
    }
}
function getMockDispatch(mockDispatches, key) {
    const basePath = key.query ? serializePathWithQuery(key.path, key.query) : key.path;
    const resolvedPath = typeof basePath === 'string' ? safeUrl(basePath) : basePath;
    const resolvedPathWithoutTrailingSlash = removeTrailingSlash(resolvedPath);
    // Match path
    let matchedMockDispatches = mockDispatches.filter(({ consumed })=>!consumed).filter(({ path, ignoreTrailingSlash })=>{
        return ignoreTrailingSlash ? matchValue(removeTrailingSlash(safeUrl(path)), resolvedPathWithoutTrailingSlash) : matchValue(safeUrl(path), resolvedPath);
    });
    if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for path '${resolvedPath}'`);
    }
    // Match method
    matchedMockDispatches = matchedMockDispatches.filter(({ method })=>matchValue(method, key.method));
    if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for method '${key.method}' on path '${resolvedPath}'`);
    }
    // Match body
    matchedMockDispatches = matchedMockDispatches.filter(({ body })=>typeof body !== 'undefined' ? matchValue(body, key.body) : true);
    if (matchedMockDispatches.length === 0) {
        throw new MockNotMatchedError(`Mock dispatch not matched for body '${key.body}' on path '${resolvedPath}'`);
    }
    // Match headers
    matchedMockDispatches = matchedMockDispatches.filter((mockDispatch)=>matchHeaders(mockDispatch, key.headers));
    if (matchedMockDispatches.length === 0) {
        const headers = typeof key.headers === 'object' ? JSON.stringify(key.headers) : key.headers;
        throw new MockNotMatchedError(`Mock dispatch not matched for headers '${headers}' on path '${resolvedPath}'`);
    }
    return matchedMockDispatches[0];
}
function addMockDispatch(mockDispatches, key, data, opts) {
    const baseData = {
        timesInvoked: 0,
        times: 1,
        persist: false,
        consumed: false,
        ...opts
    };
    const replyData = typeof data === 'function' ? {
        callback: data
    } : {
        ...data
    };
    const newMockDispatch = {
        ...baseData,
        ...key,
        pending: true,
        data: {
            error: null,
            ...replyData
        }
    };
    mockDispatches.push(newMockDispatch);
    return newMockDispatch;
}
function deleteMockDispatch(mockDispatches, key) {
    const index = mockDispatches.findIndex((dispatch)=>{
        if (!dispatch.consumed) {
            return false;
        }
        return matchKey(dispatch, key);
    });
    if (index !== -1) {
        mockDispatches.splice(index, 1);
    }
}
/**
 * @param {string} path Path to remove trailing slash from
 */ function removeTrailingSlash(path) {
    while(path.endsWith('/')){
        path = path.slice(0, -1);
    }
    if (path.length === 0) {
        path = '/';
    }
    return path;
}
function buildKey(opts) {
    const { path, method, body, headers, query } = opts;
    return {
        path,
        method,
        body,
        headers,
        query
    };
}
function generateKeyValues(data) {
    const keys = Object.keys(data);
    const result = [];
    for(let i = 0; i < keys.length; ++i){
        const key = keys[i];
        const value = data[key];
        const name = Buffer.from(`${key}`);
        if (Array.isArray(value)) {
            for(let j = 0; j < value.length; ++j){
                result.push(name, Buffer.from(`${value[j]}`));
            }
        } else {
            result.push(name, Buffer.from(`${value}`));
        }
    }
    return result;
}
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @param {number} statusCode
 */ function getStatusText(statusCode) {
    return STATUS_CODES[statusCode] || 'unknown';
}
async function getResponse(body) {
    const buffers = [];
    for await (const data of body){
        buffers.push(data);
    }
    return Buffer.concat(buffers).toString('utf8');
}
/**
 * Mock dispatch function used to simulate undici dispatches
 */ function mockDispatch(opts, handler) {
    // Get mock dispatch from built key
    const key = buildKey(opts);
    const mockDispatch = getMockDispatch(this[kDispatches], key);
    mockDispatch.timesInvoked++;
    // Here's where we resolve a callback if a callback is present for the dispatch data.
    if (mockDispatch.data.callback) {
        mockDispatch.data = {
            ...mockDispatch.data,
            ...mockDispatch.data.callback(opts)
        };
    }
    // Parse mockDispatch data
    const { data: { statusCode, data, headers, trailers, error }, delay, persist } = mockDispatch;
    const { timesInvoked, times } = mockDispatch;
    // If it's used up and not persistent, mark as consumed
    mockDispatch.consumed = !persist && timesInvoked >= times;
    mockDispatch.pending = timesInvoked < times;
    // If specified, trigger dispatch error
    if (error !== null) {
        deleteMockDispatch(this[kDispatches], key);
        handler.onError(error);
        return true;
    }
    // Handle the request with a delay if necessary
    if (typeof delay === 'number' && delay > 0) {
        setTimeout(()=>{
            handleReply(this[kDispatches]);
        }, delay);
    } else {
        handleReply(this[kDispatches]);
    }
    function handleReply(mockDispatches, _data = data) {
        // fetch's HeadersList is a 1D string array
        const optsHeaders = Array.isArray(opts.headers) ? buildHeadersFromArray(opts.headers) : opts.headers;
        const body = typeof _data === 'function' ? _data({
            ...opts,
            headers: optsHeaders
        }) : _data;
        // util.types.isPromise is likely needed for jest.
        if (isPromise(body)) {
            // If handleReply is asynchronous, throwing an error
            // in the callback will reject the promise, rather than
            // synchronously throw the error, which breaks some tests.
            // Rather, we wait for the callback to resolve if it is a
            // promise, and then re-run handleReply with the new body.
            body.then((newData)=>handleReply(mockDispatches, newData));
            return;
        }
        const responseData = getResponseData(body);
        const responseHeaders = generateKeyValues(headers);
        const responseTrailers = generateKeyValues(trailers);
        handler.onConnect?.((err)=>handler.onError(err), null);
        handler.onHeaders?.(statusCode, responseHeaders, resume, getStatusText(statusCode));
        handler.onData?.(Buffer.from(responseData));
        handler.onComplete?.(responseTrailers);
        deleteMockDispatch(mockDispatches, key);
    }
    function resume() {}
    return true;
}
function buildMockDispatch() {
    const agent = this[kMockAgent];
    const origin = this[kOrigin];
    const originalDispatch = this[kOriginalDispatch];
    return function dispatch(opts, handler) {
        if (agent.isMockActive) {
            try {
                mockDispatch.call(this, opts, handler);
            } catch (error) {
                if (error.code === 'UND_MOCK_ERR_MOCK_NOT_MATCHED') {
                    const netConnect = agent[kGetNetConnect]();
                    if (netConnect === false) {
                        throw new MockNotMatchedError(`${error.message}: subsequent request to origin ${origin} was not allowed (net.connect disabled)`);
                    }
                    if (checkNetConnect(netConnect, origin)) {
                        originalDispatch.call(this, opts, handler);
                    } else {
                        throw new MockNotMatchedError(`${error.message}: subsequent request to origin ${origin} was not allowed (net.connect is not enabled for this origin)`);
                    }
                } else {
                    throw error;
                }
            }
        } else {
            originalDispatch.call(this, opts, handler);
        }
    };
}
function checkNetConnect(netConnect, origin) {
    const url = new URL(origin);
    if (netConnect === true) {
        return true;
    } else if (Array.isArray(netConnect) && netConnect.some((matcher)=>matchValue(matcher, url.host))) {
        return true;
    }
    return false;
}
function buildAndValidateMockOptions(opts) {
    const { agent, ...mockOptions } = opts;
    if ('enableCallHistory' in mockOptions && typeof mockOptions.enableCallHistory !== 'boolean') {
        throw new InvalidArgumentError('options.enableCallHistory must to be a boolean');
    }
    if ('acceptNonStandardSearchParameters' in mockOptions && typeof mockOptions.acceptNonStandardSearchParameters !== 'boolean') {
        throw new InvalidArgumentError('options.acceptNonStandardSearchParameters must to be a boolean');
    }
    if ('ignoreTrailingSlash' in mockOptions && typeof mockOptions.ignoreTrailingSlash !== 'boolean') {
        throw new InvalidArgumentError('options.ignoreTrailingSlash must to be a boolean');
    }
    return mockOptions;
}
module.exports = {
    getResponseData,
    getMockDispatch,
    addMockDispatch,
    deleteMockDispatch,
    buildKey,
    generateKeyValues,
    matchValue,
    getResponse,
    getStatusText,
    mockDispatch,
    buildMockDispatch,
    checkNetConnect,
    buildAndValidateMockOptions,
    getHeaderByName,
    buildHeadersFromArray,
    normalizeSearchParams
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-interceptor.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { getResponseData, buildKey, addMockDispatch } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-utils.js [app-rsc] (ecmascript)");
const { kDispatches, kDispatchKey, kDefaultHeaders, kDefaultTrailers, kContentLength, kMockDispatch, kIgnoreTrailingSlash } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-symbols.js [app-rsc] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const { serializePathWithQuery } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
/**
 * Defines the scope API for an interceptor reply
 */ class MockScope {
    constructor(mockDispatch){
        this[kMockDispatch] = mockDispatch;
    }
    /**
   * Delay a reply by a set amount in ms.
   */ delay(waitInMs) {
        if (typeof waitInMs !== 'number' || !Number.isInteger(waitInMs) || waitInMs <= 0) {
            throw new InvalidArgumentError('waitInMs must be a valid integer > 0');
        }
        this[kMockDispatch].delay = waitInMs;
        return this;
    }
    /**
   * For a defined reply, never mark as consumed.
   */ persist() {
        this[kMockDispatch].persist = true;
        return this;
    }
    /**
   * Allow one to define a reply for a set amount of matching requests.
   */ times(repeatTimes) {
        if (typeof repeatTimes !== 'number' || !Number.isInteger(repeatTimes) || repeatTimes <= 0) {
            throw new InvalidArgumentError('repeatTimes must be a valid integer > 0');
        }
        this[kMockDispatch].times = repeatTimes;
        return this;
    }
}
/**
 * Defines an interceptor for a Mock
 */ class MockInterceptor {
    constructor(opts, mockDispatches){
        if (typeof opts !== 'object') {
            throw new InvalidArgumentError('opts must be an object');
        }
        if (typeof opts.path === 'undefined') {
            throw new InvalidArgumentError('opts.path must be defined');
        }
        if (typeof opts.method === 'undefined') {
            opts.method = 'GET';
        }
        // See https://github.com/nodejs/undici/issues/1245
        // As per RFC 3986, clients are not supposed to send URI
        // fragments to servers when they retrieve a document,
        if (typeof opts.path === 'string') {
            if (opts.query) {
                opts.path = serializePathWithQuery(opts.path, opts.query);
            } else {
                // Matches https://github.com/nodejs/undici/blob/main/lib/web/fetch/index.js#L1811
                const parsedURL = new URL(opts.path, 'data://');
                opts.path = parsedURL.pathname + parsedURL.search;
            }
        }
        if (typeof opts.method === 'string') {
            opts.method = opts.method.toUpperCase();
        }
        this[kDispatchKey] = buildKey(opts);
        this[kDispatches] = mockDispatches;
        this[kIgnoreTrailingSlash] = opts.ignoreTrailingSlash ?? false;
        this[kDefaultHeaders] = {};
        this[kDefaultTrailers] = {};
        this[kContentLength] = false;
    }
    createMockScopeDispatchData({ statusCode, data, responseOptions }) {
        const responseData = getResponseData(data);
        const contentLength = this[kContentLength] ? {
            'content-length': responseData.length
        } : {};
        const headers = {
            ...this[kDefaultHeaders],
            ...contentLength,
            ...responseOptions.headers
        };
        const trailers = {
            ...this[kDefaultTrailers],
            ...responseOptions.trailers
        };
        return {
            statusCode,
            data,
            headers,
            trailers
        };
    }
    validateReplyParameters(replyParameters) {
        if (typeof replyParameters.statusCode === 'undefined') {
            throw new InvalidArgumentError('statusCode must be defined');
        }
        if (typeof replyParameters.responseOptions !== 'object' || replyParameters.responseOptions === null) {
            throw new InvalidArgumentError('responseOptions must be an object');
        }
    }
    /**
   * Mock an undici request with a defined reply.
   */ reply(replyOptionsCallbackOrStatusCode) {
        // Values of reply aren't available right now as they
        // can only be available when the reply callback is invoked.
        if (typeof replyOptionsCallbackOrStatusCode === 'function') {
            // We'll first wrap the provided callback in another function,
            // this function will properly resolve the data from the callback
            // when invoked.
            const wrappedDefaultsCallback = (opts)=>{
                // Our reply options callback contains the parameter for statusCode, data and options.
                const resolvedData = replyOptionsCallbackOrStatusCode(opts);
                // Check if it is in the right format
                if (typeof resolvedData !== 'object' || resolvedData === null) {
                    throw new InvalidArgumentError('reply options callback must return an object');
                }
                const replyParameters = {
                    data: '',
                    responseOptions: {},
                    ...resolvedData
                };
                this.validateReplyParameters(replyParameters);
                // Since the values can be obtained immediately we return them
                // from this higher order function that will be resolved later.
                return {
                    ...this.createMockScopeDispatchData(replyParameters)
                };
            };
            // Add usual dispatch data, but this time set the data parameter to function that will eventually provide data.
            const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], wrappedDefaultsCallback, {
                ignoreTrailingSlash: this[kIgnoreTrailingSlash]
            });
            return new MockScope(newMockDispatch);
        }
        // We can have either one or three parameters, if we get here,
        // we should have 1-3 parameters. So we spread the arguments of
        // this function to obtain the parameters, since replyData will always
        // just be the statusCode.
        const replyParameters = {
            statusCode: replyOptionsCallbackOrStatusCode,
            data: arguments[1] === undefined ? '' : arguments[1],
            responseOptions: arguments[2] === undefined ? {} : arguments[2]
        };
        this.validateReplyParameters(replyParameters);
        // Send in-already provided data like usual
        const dispatchData = this.createMockScopeDispatchData(replyParameters);
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], dispatchData, {
            ignoreTrailingSlash: this[kIgnoreTrailingSlash]
        });
        return new MockScope(newMockDispatch);
    }
    /**
   * Mock an undici request with a defined error.
   */ replyWithError(error) {
        if (typeof error === 'undefined') {
            throw new InvalidArgumentError('error must be defined');
        }
        const newMockDispatch = addMockDispatch(this[kDispatches], this[kDispatchKey], {
            error
        }, {
            ignoreTrailingSlash: this[kIgnoreTrailingSlash]
        });
        return new MockScope(newMockDispatch);
    }
    /**
   * Set default reply headers on the interceptor for subsequent replies
   */ defaultReplyHeaders(headers) {
        if (typeof headers === 'undefined') {
            throw new InvalidArgumentError('headers must be defined');
        }
        this[kDefaultHeaders] = headers;
        return this;
    }
    /**
   * Set default reply trailers on the interceptor for subsequent replies
   */ defaultReplyTrailers(trailers) {
        if (typeof trailers === 'undefined') {
            throw new InvalidArgumentError('trailers must be defined');
        }
        this[kDefaultTrailers] = trailers;
        return this;
    }
    /**
   * Set reply content length header for replies on the interceptor
   */ replyContentLength() {
        this[kContentLength] = true;
        return this;
    }
}
module.exports.MockInterceptor = MockInterceptor;
module.exports.MockScope = MockScope;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-client.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { promisify } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Client = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client.js [app-rsc] (ecmascript)");
const { buildMockDispatch } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-utils.js [app-rsc] (ecmascript)");
const { kDispatches, kMockAgent, kClose, kOriginalClose, kOrigin, kOriginalDispatch, kConnected, kIgnoreTrailingSlash } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-symbols.js [app-rsc] (ecmascript)");
const { MockInterceptor } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-interceptor.js [app-rsc] (ecmascript)");
const Symbols = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
/**
 * MockClient provides an API that extends the Client to influence the mockDispatches.
 */ class MockClient extends Client {
    constructor(origin, opts){
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== 'function') {
            throw new InvalidArgumentError('Argument opts.agent must implement Agent');
        }
        super(origin, opts);
        this[kMockAgent] = opts.agent;
        this[kOrigin] = origin;
        this[kIgnoreTrailingSlash] = opts.ignoreTrailingSlash ?? false;
        this[kDispatches] = [];
        this[kConnected] = 1;
        this[kOriginalDispatch] = this.dispatch;
        this[kOriginalClose] = this.close.bind(this);
        this.dispatch = buildMockDispatch.call(this);
        this.close = this[kClose];
    }
    get [Symbols.kConnected]() {
        return this[kConnected];
    }
    /**
   * Sets up the base interceptor for mocking replies from undici.
   */ intercept(opts) {
        return new MockInterceptor(opts && {
            ignoreTrailingSlash: this[kIgnoreTrailingSlash],
            ...opts
        }, this[kDispatches]);
    }
    cleanMocks() {
        this[kDispatches] = [];
    }
    async [kClose]() {
        await promisify(this[kOriginalClose])();
        this[kConnected] = 0;
        this[kMockAgent][Symbols.kClients].delete(this[kOrigin]);
    }
}
module.exports = MockClient;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-call-history.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { kMockCallHistoryAddLog } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-symbols.js [app-rsc] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
function handleFilterCallsWithOptions(criteria, options, handler, store) {
    switch(options.operator){
        case 'OR':
            store.push(...handler(criteria));
            return store;
        case 'AND':
            return handler.call({
                logs: store
            }, criteria);
        default:
            // guard -- should never happens because buildAndValidateFilterCallsOptions is called before
            throw new InvalidArgumentError('options.operator must to be a case insensitive string equal to \'OR\' or \'AND\'');
    }
}
function buildAndValidateFilterCallsOptions(options = {}) {
    const finalOptions = {};
    if ('operator' in options) {
        if (typeof options.operator !== 'string' || options.operator.toUpperCase() !== 'OR' && options.operator.toUpperCase() !== 'AND') {
            throw new InvalidArgumentError('options.operator must to be a case insensitive string equal to \'OR\' or \'AND\'');
        }
        return {
            ...finalOptions,
            operator: options.operator.toUpperCase()
        };
    }
    return finalOptions;
}
function makeFilterCalls(parameterName) {
    return (parameterValue)=>{
        if (typeof parameterValue === 'string' || parameterValue == null) {
            return this.logs.filter((log)=>{
                return log[parameterName] === parameterValue;
            });
        }
        if (parameterValue instanceof RegExp) {
            return this.logs.filter((log)=>{
                return parameterValue.test(log[parameterName]);
            });
        }
        throw new InvalidArgumentError(`${parameterName} parameter should be one of string, regexp, undefined or null`);
    };
}
function computeUrlWithMaybeSearchParameters(requestInit) {
    // path can contains query url parameters
    // or query can contains query url parameters
    try {
        const url = new URL(requestInit.path, requestInit.origin);
        // requestInit.path contains query url parameters
        // requestInit.query is then undefined
        if (url.search.length !== 0) {
            return url;
        }
        // requestInit.query can be populated here
        url.search = new URLSearchParams(requestInit.query).toString();
        return url;
    } catch (error) {
        throw new InvalidArgumentError('An error occurred when computing MockCallHistoryLog.url', {
            cause: error
        });
    }
}
class MockCallHistoryLog {
    constructor(requestInit = {}){
        this.body = requestInit.body;
        this.headers = requestInit.headers;
        this.method = requestInit.method;
        const url = computeUrlWithMaybeSearchParameters(requestInit);
        this.fullUrl = url.toString();
        this.origin = url.origin;
        this.path = url.pathname;
        this.searchParams = Object.fromEntries(url.searchParams);
        this.protocol = url.protocol;
        this.host = url.host;
        this.port = url.port;
        this.hash = url.hash;
    }
    toMap() {
        return new Map([
            [
                'protocol',
                this.protocol
            ],
            [
                'host',
                this.host
            ],
            [
                'port',
                this.port
            ],
            [
                'origin',
                this.origin
            ],
            [
                'path',
                this.path
            ],
            [
                'hash',
                this.hash
            ],
            [
                'searchParams',
                this.searchParams
            ],
            [
                'fullUrl',
                this.fullUrl
            ],
            [
                'method',
                this.method
            ],
            [
                'body',
                this.body
            ],
            [
                'headers',
                this.headers
            ]
        ]);
    }
    toString() {
        const options = {
            betweenKeyValueSeparator: '->',
            betweenPairSeparator: '|'
        };
        let result = '';
        this.toMap().forEach((value, key)=>{
            if (typeof value === 'string' || value === undefined || value === null) {
                result = `${result}${key}${options.betweenKeyValueSeparator}${value}${options.betweenPairSeparator}`;
            }
            if (typeof value === 'object' && value !== null || Array.isArray(value)) {
                result = `${result}${key}${options.betweenKeyValueSeparator}${JSON.stringify(value)}${options.betweenPairSeparator}`;
            }
        // maybe miss something for non Record / Array headers and searchParams here
        });
        // delete last betweenPairSeparator
        return result.slice(0, -1);
    }
}
class MockCallHistory {
    logs = [];
    calls() {
        return this.logs;
    }
    firstCall() {
        return this.logs.at(0);
    }
    lastCall() {
        return this.logs.at(-1);
    }
    nthCall(number) {
        if (typeof number !== 'number') {
            throw new InvalidArgumentError('nthCall must be called with a number');
        }
        if (!Number.isInteger(number)) {
            throw new InvalidArgumentError('nthCall must be called with an integer');
        }
        if (Math.sign(number) !== 1) {
            throw new InvalidArgumentError('nthCall must be called with a positive value. use firstCall or lastCall instead');
        }
        // non zero based index. this is more human readable
        return this.logs.at(number - 1);
    }
    filterCalls(criteria, options) {
        // perf
        if (this.logs.length === 0) {
            return this.logs;
        }
        if (typeof criteria === 'function') {
            return this.logs.filter(criteria);
        }
        if (criteria instanceof RegExp) {
            return this.logs.filter((log)=>{
                return criteria.test(log.toString());
            });
        }
        if (typeof criteria === 'object' && criteria !== null) {
            // no criteria - returning all logs
            if (Object.keys(criteria).length === 0) {
                return this.logs;
            }
            const finalOptions = {
                operator: 'OR',
                ...buildAndValidateFilterCallsOptions(options)
            };
            let maybeDuplicatedLogsFiltered = [];
            if ('protocol' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.protocol, finalOptions, this.filterCallsByProtocol, maybeDuplicatedLogsFiltered);
            }
            if ('host' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.host, finalOptions, this.filterCallsByHost, maybeDuplicatedLogsFiltered);
            }
            if ('port' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.port, finalOptions, this.filterCallsByPort, maybeDuplicatedLogsFiltered);
            }
            if ('origin' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.origin, finalOptions, this.filterCallsByOrigin, maybeDuplicatedLogsFiltered);
            }
            if ('path' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.path, finalOptions, this.filterCallsByPath, maybeDuplicatedLogsFiltered);
            }
            if ('hash' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.hash, finalOptions, this.filterCallsByHash, maybeDuplicatedLogsFiltered);
            }
            if ('fullUrl' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.fullUrl, finalOptions, this.filterCallsByFullUrl, maybeDuplicatedLogsFiltered);
            }
            if ('method' in criteria) {
                maybeDuplicatedLogsFiltered = handleFilterCallsWithOptions(criteria.method, finalOptions, this.filterCallsByMethod, maybeDuplicatedLogsFiltered);
            }
            const uniqLogsFiltered = [
                ...new Set(maybeDuplicatedLogsFiltered)
            ];
            return uniqLogsFiltered;
        }
        throw new InvalidArgumentError('criteria parameter should be one of function, regexp, or object');
    }
    filterCallsByProtocol = makeFilterCalls.call(this, 'protocol');
    filterCallsByHost = makeFilterCalls.call(this, 'host');
    filterCallsByPort = makeFilterCalls.call(this, 'port');
    filterCallsByOrigin = makeFilterCalls.call(this, 'origin');
    filterCallsByPath = makeFilterCalls.call(this, 'path');
    filterCallsByHash = makeFilterCalls.call(this, 'hash');
    filterCallsByFullUrl = makeFilterCalls.call(this, 'fullUrl');
    filterCallsByMethod = makeFilterCalls.call(this, 'method');
    clear() {
        this.logs = [];
    }
    [kMockCallHistoryAddLog](requestInit) {
        const log = new MockCallHistoryLog(requestInit);
        this.logs.push(log);
        return log;
    }
    *[Symbol.iterator]() {
        for (const log of this.calls()){
            yield log;
        }
    }
}
module.exports.MockCallHistory = MockCallHistory;
module.exports.MockCallHistoryLog = MockCallHistoryLog;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-pool.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { promisify } = __turbopack_context__.r("[externals]/node:util [external] (node:util, cjs)");
const Pool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool.js [app-rsc] (ecmascript)");
const { buildMockDispatch } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-utils.js [app-rsc] (ecmascript)");
const { kDispatches, kMockAgent, kClose, kOriginalClose, kOrigin, kOriginalDispatch, kConnected, kIgnoreTrailingSlash } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-symbols.js [app-rsc] (ecmascript)");
const { MockInterceptor } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-interceptor.js [app-rsc] (ecmascript)");
const Symbols = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
/**
 * MockPool provides an API that extends the Pool to influence the mockDispatches.
 */ class MockPool extends Pool {
    constructor(origin, opts){
        if (!opts || !opts.agent || typeof opts.agent.dispatch !== 'function') {
            throw new InvalidArgumentError('Argument opts.agent must implement Agent');
        }
        super(origin, opts);
        this[kMockAgent] = opts.agent;
        this[kOrigin] = origin;
        this[kIgnoreTrailingSlash] = opts.ignoreTrailingSlash ?? false;
        this[kDispatches] = [];
        this[kConnected] = 1;
        this[kOriginalDispatch] = this.dispatch;
        this[kOriginalClose] = this.close.bind(this);
        this.dispatch = buildMockDispatch.call(this);
        this.close = this[kClose];
    }
    get [Symbols.kConnected]() {
        return this[kConnected];
    }
    /**
   * Sets up the base interceptor for mocking replies from undici.
   */ intercept(opts) {
        return new MockInterceptor(opts && {
            ignoreTrailingSlash: this[kIgnoreTrailingSlash],
            ...opts
        }, this[kDispatches]);
    }
    cleanMocks() {
        this[kDispatches] = [];
    }
    async [kClose]() {
        await promisify(this[kOriginalClose])();
        this[kConnected] = 0;
        this[kMockAgent][Symbols.kClients].delete(this[kOrigin]);
    }
}
module.exports = MockPool;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/pending-interceptors-formatter.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Transform } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { Console } = __turbopack_context__.r("[externals]/node:console [external] (node:console, cjs)");
const PERSISTENT = process.versions.icu ? '✅' : 'Y ';
const NOT_PERSISTENT = process.versions.icu ? '❌' : 'N ';
/**
 * Gets the output of `console.table(…)` as a string.
 */ module.exports = class PendingInterceptorsFormatter {
    constructor({ disableColors } = {}){
        this.transform = new Transform({
            transform (chunk, _enc, cb) {
                cb(null, chunk);
            }
        });
        this.logger = new Console({
            stdout: this.transform,
            inspectOptions: {
                colors: !disableColors && !process.env.CI
            }
        });
    }
    format(pendingInterceptors) {
        const withPrettyHeaders = pendingInterceptors.map(({ method, path, data: { statusCode }, persist, times, timesInvoked, origin })=>({
                Method: method,
                Origin: origin,
                Path: path,
                'Status code': statusCode,
                Persistent: persist ? PERSISTENT : NOT_PERSISTENT,
                Invocations: timesInvoked,
                Remaining: persist ? Infinity : times - timesInvoked
            }));
        this.logger.table(withPrettyHeaders);
        return this.transform.read().toString();
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-agent.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { kClients } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-rsc] (ecmascript)");
const Agent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/agent.js [app-rsc] (ecmascript)");
const { kAgent, kMockAgentSet, kMockAgentGet, kDispatches, kIsMockActive, kNetConnect, kGetNetConnect, kOptions, kFactory, kMockAgentRegisterCallHistory, kMockAgentIsCallHistoryEnabled, kMockAgentAddCallHistoryLog, kMockAgentMockCallHistoryInstance, kMockAgentAcceptsNonStandardSearchParameters, kMockCallHistoryAddLog, kIgnoreTrailingSlash } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-symbols.js [app-rsc] (ecmascript)");
const MockClient = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-client.js [app-rsc] (ecmascript)");
const MockPool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-pool.js [app-rsc] (ecmascript)");
const { matchValue, normalizeSearchParams, buildAndValidateMockOptions } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-utils.js [app-rsc] (ecmascript)");
const { InvalidArgumentError, UndiciError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const Dispatcher = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher.js [app-rsc] (ecmascript)");
const PendingInterceptorsFormatter = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/pending-interceptors-formatter.js [app-rsc] (ecmascript)");
const { MockCallHistory } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-call-history.js [app-rsc] (ecmascript)");
class MockAgent extends Dispatcher {
    constructor(opts = {}){
        super(opts);
        const mockOptions = buildAndValidateMockOptions(opts);
        this[kNetConnect] = true;
        this[kIsMockActive] = true;
        this[kMockAgentIsCallHistoryEnabled] = mockOptions.enableCallHistory ?? false;
        this[kMockAgentAcceptsNonStandardSearchParameters] = mockOptions.acceptNonStandardSearchParameters ?? false;
        this[kIgnoreTrailingSlash] = mockOptions.ignoreTrailingSlash ?? false;
        // Instantiate Agent and encapsulate
        if (opts?.agent && typeof opts.agent.dispatch !== 'function') {
            throw new InvalidArgumentError('Argument opts.agent must implement Agent');
        }
        const agent = opts?.agent ? opts.agent : new Agent(opts);
        this[kAgent] = agent;
        this[kClients] = agent[kClients];
        this[kOptions] = mockOptions;
        if (this[kMockAgentIsCallHistoryEnabled]) {
            this[kMockAgentRegisterCallHistory]();
        }
    }
    get(origin) {
        const originKey = this[kIgnoreTrailingSlash] ? origin.replace(/\/$/, '') : origin;
        let dispatcher = this[kMockAgentGet](originKey);
        if (!dispatcher) {
            dispatcher = this[kFactory](originKey);
            this[kMockAgentSet](originKey, dispatcher);
        }
        return dispatcher;
    }
    dispatch(opts, handler) {
        // Call MockAgent.get to perform additional setup before dispatching as normal
        this.get(opts.origin);
        this[kMockAgentAddCallHistoryLog](opts);
        const acceptNonStandardSearchParameters = this[kMockAgentAcceptsNonStandardSearchParameters];
        const dispatchOpts = {
            ...opts
        };
        if (acceptNonStandardSearchParameters && dispatchOpts.path) {
            const [path, searchParams] = dispatchOpts.path.split('?');
            const normalizedSearchParams = normalizeSearchParams(searchParams, acceptNonStandardSearchParameters);
            dispatchOpts.path = `${path}?${normalizedSearchParams}`;
        }
        return this[kAgent].dispatch(dispatchOpts, handler);
    }
    async close() {
        this.clearCallHistory();
        await this[kAgent].close();
        this[kClients].clear();
    }
    deactivate() {
        this[kIsMockActive] = false;
    }
    activate() {
        this[kIsMockActive] = true;
    }
    enableNetConnect(matcher) {
        if (typeof matcher === 'string' || typeof matcher === 'function' || matcher instanceof RegExp) {
            if (Array.isArray(this[kNetConnect])) {
                this[kNetConnect].push(matcher);
            } else {
                this[kNetConnect] = [
                    matcher
                ];
            }
        } else if (typeof matcher === 'undefined') {
            this[kNetConnect] = true;
        } else {
            throw new InvalidArgumentError('Unsupported matcher. Must be one of String|Function|RegExp.');
        }
    }
    disableNetConnect() {
        this[kNetConnect] = false;
    }
    enableCallHistory() {
        this[kMockAgentIsCallHistoryEnabled] = true;
        return this;
    }
    disableCallHistory() {
        this[kMockAgentIsCallHistoryEnabled] = false;
        return this;
    }
    getCallHistory() {
        return this[kMockAgentMockCallHistoryInstance];
    }
    clearCallHistory() {
        if (this[kMockAgentMockCallHistoryInstance] !== undefined) {
            this[kMockAgentMockCallHistoryInstance].clear();
        }
    }
    // This is required to bypass issues caused by using global symbols - see:
    // https://github.com/nodejs/undici/issues/1447
    get isMockActive() {
        return this[kIsMockActive];
    }
    [kMockAgentRegisterCallHistory]() {
        if (this[kMockAgentMockCallHistoryInstance] === undefined) {
            this[kMockAgentMockCallHistoryInstance] = new MockCallHistory();
        }
    }
    [kMockAgentAddCallHistoryLog](opts) {
        if (this[kMockAgentIsCallHistoryEnabled]) {
            // additional setup when enableCallHistory class method is used after mockAgent instantiation
            this[kMockAgentRegisterCallHistory]();
            // add call history log on every call (intercepted or not)
            this[kMockAgentMockCallHistoryInstance][kMockCallHistoryAddLog](opts);
        }
    }
    [kMockAgentSet](origin, dispatcher) {
        this[kClients].set(origin, {
            count: 0,
            dispatcher
        });
    }
    [kFactory](origin) {
        const mockOptions = Object.assign({
            agent: this
        }, this[kOptions]);
        return this[kOptions] && this[kOptions].connections === 1 ? new MockClient(origin, mockOptions) : new MockPool(origin, mockOptions);
    }
    [kMockAgentGet](origin) {
        // First check if we can immediately find it
        const result = this[kClients].get(origin);
        if (result?.dispatcher) {
            return result.dispatcher;
        }
        // If the origin is not a string create a dummy parent pool and return to user
        if (typeof origin !== 'string') {
            const dispatcher = this[kFactory]('http://localhost:9999');
            this[kMockAgentSet](origin, dispatcher);
            return dispatcher;
        }
        // If we match, create a pool and assign the same dispatches
        for (const [keyMatcher, result] of Array.from(this[kClients])){
            if (result && typeof keyMatcher !== 'string' && matchValue(keyMatcher, origin)) {
                const dispatcher = this[kFactory](origin);
                this[kMockAgentSet](origin, dispatcher);
                dispatcher[kDispatches] = result.dispatcher[kDispatches];
                return dispatcher;
            }
        }
    }
    [kGetNetConnect]() {
        return this[kNetConnect];
    }
    pendingInterceptors() {
        const mockAgentClients = this[kClients];
        return Array.from(mockAgentClients.entries()).flatMap(([origin, result])=>result.dispatcher[kDispatches].map((dispatch)=>({
                    ...dispatch,
                    origin
                }))).filter(({ pending })=>pending);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter = new PendingInterceptorsFormatter() } = {}) {
        const pending = this.pendingInterceptors();
        if (pending.length === 0) {
            return;
        }
        throw new UndiciError(pending.length === 1 ? `1 interceptor is pending:\n\n${pendingInterceptorsFormatter.format(pending)}`.trim() : `${pending.length} interceptors are pending:\n\n${pendingInterceptorsFormatter.format(pending)}`.trim());
    }
}
module.exports = MockAgent;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/snapshot-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
/**
 * @typedef {Object} HeaderFilters
 * @property {Set<string>} ignore - Set of headers to ignore for matching
 * @property {Set<string>} exclude - Set of headers to exclude from matching
 * @property {Set<string>} match - Set of headers to match (empty means match
 */ /**
 * Creates cached header sets for performance
 *
 * @param {import('./snapshot-recorder').SnapshotRecorderMatchOptions} matchOptions - Matching options for headers
 * @returns {HeaderFilters} - Cached sets for ignore, exclude, and match headers
 */ function createHeaderFilters(matchOptions = {}) {
    const { ignoreHeaders = [], excludeHeaders = [], matchHeaders = [], caseSensitive = false } = matchOptions;
    return {
        ignore: new Set(ignoreHeaders.map((header)=>caseSensitive ? header : header.toLowerCase())),
        exclude: new Set(excludeHeaders.map((header)=>caseSensitive ? header : header.toLowerCase())),
        match: new Set(matchHeaders.map((header)=>caseSensitive ? header : header.toLowerCase()))
    };
}
let crypto;
try {
    crypto = __turbopack_context__.r("[externals]/node:crypto [external] (node:crypto, cjs)");
} catch  {}
/**
 * @callback HashIdFunction
 * @param {string} value - The value to hash
 * @returns {string} - The base64url encoded hash of the value
 */ /**
 * Generates a hash for a given value
 * @type {HashIdFunction}
 */ const hashId = crypto?.hash ? (value)=>crypto.hash('sha256', value, 'base64url') : (value)=>Buffer.from(value).toString('base64url');
/**
 * @typedef {(url: string) => boolean} IsUrlExcluded Checks if a URL matches any of the exclude patterns
 */ /** @typedef {{[key: Lowercase<string>]: string}} NormalizedHeaders */ /** @typedef {Array<string>} UndiciHeaders */ /** @typedef {Record<string, string|string[]>} Headers */ /**
 * @param {*} headers
 * @returns {headers is UndiciHeaders}
 */ function isUndiciHeaders(headers) {
    return Array.isArray(headers) && (headers.length & 1) === 0;
}
/**
 * Factory function to create a URL exclusion checker
 * @param {Array<string| RegExp>} [excludePatterns=[]] - Array of patterns to exclude
 * @returns {IsUrlExcluded} - A function that checks if a URL matches any of the exclude patterns
 */ function isUrlExcludedFactory(excludePatterns = []) {
    if (excludePatterns.length === 0) {
        return ()=>false;
    }
    return function isUrlExcluded(url) {
        let urlLowerCased;
        for (const pattern of excludePatterns){
            if (typeof pattern === 'string') {
                if (!urlLowerCased) {
                    // Convert URL to lowercase only once
                    urlLowerCased = url.toLowerCase();
                }
                // Simple string match (case-insensitive)
                if (urlLowerCased.includes(pattern.toLowerCase())) {
                    return true;
                }
            } else if (pattern instanceof RegExp) {
                // Regex pattern match
                if (pattern.test(url)) {
                    return true;
                }
            }
        }
        return false;
    };
}
/**
 * Normalizes headers for consistent comparison
 *
 * @param {Object|UndiciHeaders} headers - Headers to normalize
 * @returns {NormalizedHeaders} - Normalized headers as a lowercase object
 */ function normalizeHeaders(headers) {
    /** @type {NormalizedHeaders} */ const normalizedHeaders = {};
    if (!headers) return normalizedHeaders;
    // Handle array format (undici internal format: [name, value, name, value, ...])
    if (isUndiciHeaders(headers)) {
        for(let i = 0; i < headers.length; i += 2){
            const key = headers[i];
            const value = headers[i + 1];
            if (key && value !== undefined) {
                // Convert Buffers to strings if needed
                const keyStr = Buffer.isBuffer(key) ? key.toString() : key;
                const valueStr = Buffer.isBuffer(value) ? value.toString() : value;
                normalizedHeaders[keyStr.toLowerCase()] = valueStr;
            }
        }
        return normalizedHeaders;
    }
    // Handle object format
    if (headers && typeof headers === 'object') {
        for (const [key, value] of Object.entries(headers)){
            if (key && typeof key === 'string') {
                normalizedHeaders[key.toLowerCase()] = Array.isArray(value) ? value.join(', ') : String(value);
            }
        }
    }
    return normalizedHeaders;
}
const validSnapshotModes = [
    'record',
    'playback',
    'update'
];
/** @typedef {typeof validSnapshotModes[number]} SnapshotMode */ /**
 * @param {*} mode - The snapshot mode to validate
 * @returns {asserts mode is SnapshotMode}
 */ function validateSnapshotMode(mode) {
    if (!validSnapshotModes.includes(mode)) {
        throw new InvalidArgumentError(`Invalid snapshot mode: ${mode}. Must be one of: ${validSnapshotModes.join(', ')}`);
    }
}
module.exports = {
    createHeaderFilters,
    hashId,
    isUndiciHeaders,
    normalizeHeaders,
    isUrlExcludedFactory,
    validateSnapshotMode
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/snapshot-recorder.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { writeFile, readFile, mkdir } = __turbopack_context__.r("[externals]/node:fs/promises [external] (node:fs/promises, cjs)");
const { dirname, resolve } = __turbopack_context__.r("[externals]/node:path [external] (node:path, cjs)");
const { setTimeout, clearTimeout } = __turbopack_context__.r("[externals]/node:timers [external] (node:timers, cjs)");
const { InvalidArgumentError, UndiciError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const { hashId, isUrlExcludedFactory, normalizeHeaders, createHeaderFilters } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/snapshot-utils.js [app-rsc] (ecmascript)");
/**
 * @typedef {Object} SnapshotRequestOptions
 * @property {string} method - HTTP method (e.g. 'GET', 'POST', etc.)
 * @property {string} path - Request path
 * @property {string} origin - Request origin (base URL)
 * @property {import('./snapshot-utils').Headers|import('./snapshot-utils').UndiciHeaders} headers - Request headers
 * @property {import('./snapshot-utils').NormalizedHeaders} _normalizedHeaders - Request headers as a lowercase object
 * @property {string|Buffer} [body] - Request body (optional)
 */ /**
 * @typedef {Object} SnapshotEntryRequest
 * @property {string} method - HTTP method (e.g. 'GET', 'POST', etc.)
 * @property {string} url - Full URL of the request
 * @property {import('./snapshot-utils').NormalizedHeaders} headers - Normalized headers as a lowercase object
 * @property {string|Buffer} [body] - Request body (optional)
 */ /**
 * @typedef {Object} SnapshotEntryResponse
 * @property {number} statusCode - HTTP status code of the response
 * @property {import('./snapshot-utils').NormalizedHeaders} headers - Normalized response headers as a lowercase object
 * @property {string} body - Response body as a base64url encoded string
 * @property {Object} [trailers] - Optional response trailers
 */ /**
 * @typedef {Object} SnapshotEntry
 * @property {SnapshotEntryRequest} request - The request object
 * @property {Array<SnapshotEntryResponse>} responses - Array of response objects
 * @property {number} callCount - Number of times this snapshot has been called
 * @property {string} timestamp - ISO timestamp of when the snapshot was created
 */ /**
 * @typedef {Object} SnapshotRecorderMatchOptions
 * @property {Array<string>} [matchHeaders=[]] - Headers to match (empty array means match all headers)
 * @property {Array<string>} [ignoreHeaders=[]] - Headers to ignore for matching
 * @property {Array<string>} [excludeHeaders=[]] - Headers to exclude from matching
 * @property {boolean} [matchBody=true] - Whether to match request body
 * @property {boolean} [matchQuery=true] - Whether to match query properties
 * @property {boolean} [caseSensitive=false] - Whether header matching is case-sensitive
 */ /**
 * @typedef {Object} SnapshotRecorderOptions
 * @property {string} [snapshotPath] - Path to save/load snapshots
 * @property {import('./snapshot-utils').SnapshotMode} [mode='record'] - Mode: 'record' or 'playback'
 * @property {number} [maxSnapshots=Infinity] - Maximum number of snapshots to keep
 * @property {boolean} [autoFlush=false] - Whether to automatically flush snapshots to disk
 * @property {number} [flushInterval=30000] - Auto-flush interval in milliseconds (default: 30 seconds)
 * @property {Array<string|RegExp>} [excludeUrls=[]] - URLs to exclude from recording
 * @property {function} [shouldRecord=null] - Function to filter requests for recording
 * @property {function} [shouldPlayback=null] - Function to filter requests
 */ /**
 * @typedef {Object} SnapshotFormattedRequest
 * @property {string} method - HTTP method (e.g. 'GET', 'POST', etc.)
 * @property {string} url - Full URL of the request (with query parameters if matchQuery is true)
 * @property {import('./snapshot-utils').NormalizedHeaders} headers - Normalized headers as a lowercase object
 * @property {string} body - Request body (optional, only if matchBody is true)
 */ /**
 * @typedef {Object} SnapshotInfo
 * @property {string} hash - Hash key for the snapshot
 * @property {SnapshotEntryRequest} request - The request object
 * @property {number} responseCount - Number of responses recorded for this request
 * @property {number} callCount - Number of times this snapshot has been called
 * @property {string} timestamp - ISO timestamp of when the snapshot was created
 */ /**
 * Formats a request for consistent snapshot storage
 * Caches normalized headers to avoid repeated processing
 *
 * @param {SnapshotRequestOptions} opts - Request options
 * @param {import('./snapshot-utils').HeaderFilters} headerFilters - Cached header sets for performance
 * @param {SnapshotRecorderMatchOptions} [matchOptions] - Matching options for headers and body
 * @returns {SnapshotFormattedRequest} - Formatted request object
 */ function formatRequestKey(opts, headerFilters, matchOptions = {}) {
    const url = new URL(opts.path, opts.origin);
    // Cache normalized headers if not already done
    const normalized = opts._normalizedHeaders || normalizeHeaders(opts.headers);
    if (!opts._normalizedHeaders) {
        opts._normalizedHeaders = normalized;
    }
    return {
        method: opts.method || 'GET',
        url: matchOptions.matchQuery !== false ? url.toString() : `${url.origin}${url.pathname}`,
        headers: filterHeadersForMatching(normalized, headerFilters, matchOptions),
        body: matchOptions.matchBody !== false && opts.body ? String(opts.body) : ''
    };
}
/**
 * Filters headers based on matching configuration
 *
 * @param {import('./snapshot-utils').Headers} headers - Headers to filter
 * @param {import('./snapshot-utils').HeaderFilters} headerFilters - Cached sets for ignore, exclude, and match headers
 * @param {SnapshotRecorderMatchOptions} [matchOptions] - Matching options for headers
 */ function filterHeadersForMatching(headers, headerFilters, matchOptions = {}) {
    if (!headers || typeof headers !== 'object') return {};
    const { caseSensitive = false } = matchOptions;
    const filtered = {};
    const { ignore, exclude, match } = headerFilters;
    for (const [key, value] of Object.entries(headers)){
        const headerKey = caseSensitive ? key : key.toLowerCase();
        // Skip if in exclude list (for security)
        if (exclude.has(headerKey)) continue;
        // Skip if in ignore list (for matching)
        if (ignore.has(headerKey)) continue;
        // If matchHeaders is specified, only include those headers
        if (match.size !== 0) {
            if (!match.has(headerKey)) continue;
        }
        filtered[headerKey] = value;
    }
    return filtered;
}
/**
 * Filters headers for storage (only excludes sensitive headers)
 *
 * @param {import('./snapshot-utils').Headers} headers - Headers to filter
 * @param {import('./snapshot-utils').HeaderFilters} headerFilters - Cached sets for ignore, exclude, and match headers
 * @param {SnapshotRecorderMatchOptions} [matchOptions] - Matching options for headers
 */ function filterHeadersForStorage(headers, headerFilters, matchOptions = {}) {
    if (!headers || typeof headers !== 'object') return {};
    const { caseSensitive = false } = matchOptions;
    const filtered = {};
    const { exclude: excludeSet } = headerFilters;
    for (const [key, value] of Object.entries(headers)){
        const headerKey = caseSensitive ? key : key.toLowerCase();
        // Skip if in exclude list (for security)
        if (excludeSet.has(headerKey)) continue;
        filtered[headerKey] = value;
    }
    return filtered;
}
/**
 * Creates a hash key for request matching
 * Properly orders headers to avoid conflicts and uses crypto hashing when available
 *
 * @param {SnapshotFormattedRequest} formattedRequest - Request object
 * @returns {string} - Base64url encoded hash of the request
 */ function createRequestHash(formattedRequest) {
    const parts = [
        formattedRequest.method,
        formattedRequest.url
    ];
    // Process headers in a deterministic way to avoid conflicts
    if (formattedRequest.headers && typeof formattedRequest.headers === 'object') {
        const headerKeys = Object.keys(formattedRequest.headers).sort();
        for (const key of headerKeys){
            const values = Array.isArray(formattedRequest.headers[key]) ? formattedRequest.headers[key] : [
                formattedRequest.headers[key]
            ];
            // Add header name
            parts.push(key);
            // Add all values for this header, sorted for consistency
            for (const value of values.sort()){
                parts.push(String(value));
            }
        }
    }
    // Add body
    parts.push(formattedRequest.body);
    const content = parts.join('|');
    return hashId(content);
}
class SnapshotRecorder {
    /** @type {NodeJS.Timeout | null} */ #flushTimeout;
    /** @type {import('./snapshot-utils').IsUrlExcluded} */ #isUrlExcluded;
    /** @type {Map<string, SnapshotEntry>} */ #snapshots = new Map();
    /** @type {string|undefined} */ #snapshotPath;
    /** @type {number} */ #maxSnapshots = Infinity;
    /** @type {boolean} */ #autoFlush = false;
    /** @type {import('./snapshot-utils').HeaderFilters} */ #headerFilters;
    /**
   * Creates a new SnapshotRecorder instance
   * @param {SnapshotRecorderOptions&SnapshotRecorderMatchOptions} [options={}] - Configuration options for the recorder
   */ constructor(options = {}){
        this.#snapshotPath = options.snapshotPath;
        this.#maxSnapshots = options.maxSnapshots || Infinity;
        this.#autoFlush = options.autoFlush || false;
        this.flushInterval = options.flushInterval || 30000; // 30 seconds default
        this._flushTimer = null;
        // Matching configuration
        /** @type {Required<SnapshotRecorderMatchOptions>} */ this.matchOptions = {
            matchHeaders: options.matchHeaders || [],
            ignoreHeaders: options.ignoreHeaders || [],
            excludeHeaders: options.excludeHeaders || [],
            matchBody: options.matchBody !== false,
            matchQuery: options.matchQuery !== false,
            caseSensitive: options.caseSensitive || false
        };
        // Cache processed header sets to avoid recreating them on every request
        this.#headerFilters = createHeaderFilters(this.matchOptions);
        // Request filtering callbacks
        this.shouldRecord = options.shouldRecord || (()=>true); // function(requestOpts) -> boolean
        this.shouldPlayback = options.shouldPlayback || (()=>true); // function(requestOpts) -> boolean
        // URL pattern filtering
        this.#isUrlExcluded = isUrlExcludedFactory(options.excludeUrls); // Array of regex patterns or strings
        // Start auto-flush timer if enabled
        if (this.#autoFlush && this.#snapshotPath) {
            this.#startAutoFlush();
        }
    }
    /**
   * Records a request-response interaction
   * @param {SnapshotRequestOptions} requestOpts - Request options
   * @param {SnapshotEntryResponse} response - Response data to record
   * @return {Promise<void>} - Resolves when the recording is complete
   */ async record(requestOpts, response) {
        // Check if recording should be filtered out
        if (!this.shouldRecord(requestOpts)) {
            return; // Skip recording
        }
        // Check URL exclusion patterns
        const url = new URL(requestOpts.path, requestOpts.origin).toString();
        if (this.#isUrlExcluded(url)) {
            return; // Skip recording
        }
        const request = formatRequestKey(requestOpts, this.#headerFilters, this.matchOptions);
        const hash = createRequestHash(request);
        // Extract response data - always store body as base64
        const normalizedHeaders = normalizeHeaders(response.headers);
        /** @type {SnapshotEntryResponse} */ const responseData = {
            statusCode: response.statusCode,
            headers: filterHeadersForStorage(normalizedHeaders, this.#headerFilters, this.matchOptions),
            body: Buffer.isBuffer(response.body) ? response.body.toString('base64') : Buffer.from(String(response.body || '')).toString('base64'),
            trailers: response.trailers
        };
        // Remove oldest snapshot if we exceed maxSnapshots limit
        if (this.#snapshots.size >= this.#maxSnapshots && !this.#snapshots.has(hash)) {
            const oldestKey = this.#snapshots.keys().next().value;
            this.#snapshots.delete(oldestKey);
        }
        // Support sequential responses - if snapshot exists, add to responses array
        const existingSnapshot = this.#snapshots.get(hash);
        if (existingSnapshot && existingSnapshot.responses) {
            existingSnapshot.responses.push(responseData);
            existingSnapshot.timestamp = new Date().toISOString();
        } else {
            this.#snapshots.set(hash, {
                request,
                responses: [
                    responseData
                ],
                callCount: 0,
                timestamp: new Date().toISOString()
            });
        }
        // Auto-flush if enabled
        if (this.#autoFlush && this.#snapshotPath) {
            this.#scheduleFlush();
        }
    }
    /**
   * Finds a matching snapshot for the given request
   * Returns the appropriate response based on call count for sequential responses
   *
   * @param {SnapshotRequestOptions} requestOpts - Request options to match
   * @returns {SnapshotEntry&Record<'response', SnapshotEntryResponse>|undefined} - Matching snapshot response or undefined if not found
   */ findSnapshot(requestOpts) {
        // Check if playback should be filtered out
        if (!this.shouldPlayback(requestOpts)) {
            return undefined // Skip playback
            ;
        }
        // Check URL exclusion patterns
        const url = new URL(requestOpts.path, requestOpts.origin).toString();
        if (this.#isUrlExcluded(url)) {
            return undefined // Skip playback
            ;
        }
        const request = formatRequestKey(requestOpts, this.#headerFilters, this.matchOptions);
        const hash = createRequestHash(request);
        const snapshot = this.#snapshots.get(hash);
        if (!snapshot) return undefined;
        // Handle sequential responses
        const currentCallCount = snapshot.callCount || 0;
        const responseIndex = Math.min(currentCallCount, snapshot.responses.length - 1);
        snapshot.callCount = currentCallCount + 1;
        return {
            ...snapshot,
            response: snapshot.responses[responseIndex]
        };
    }
    /**
   * Loads snapshots from file
   * @param {string} [filePath] - Optional file path to load snapshots from
   * @return {Promise<void>} - Resolves when snapshots are loaded
   */ async loadSnapshots(filePath) {
        const path = filePath || this.#snapshotPath;
        if (!path) {
            throw new InvalidArgumentError('Snapshot path is required');
        }
        try {
            const data = await readFile(resolve(path), 'utf8');
            const parsed = JSON.parse(data);
            // Convert array format back to Map
            if (Array.isArray(parsed)) {
                this.#snapshots.clear();
                for (const { hash, snapshot } of parsed){
                    this.#snapshots.set(hash, snapshot);
                }
            } else {
                // Legacy object format
                this.#snapshots = new Map(Object.entries(parsed));
            }
        } catch (error) {
            if (error.code === 'ENOENT') {
                // File doesn't exist yet - that's ok for recording mode
                this.#snapshots.clear();
            } else {
                throw new UndiciError(`Failed to load snapshots from ${path}`, {
                    cause: error
                });
            }
        }
    }
    /**
   * Saves snapshots to file
   *
   * @param {string} [filePath] - Optional file path to save snapshots
   * @returns {Promise<void>} - Resolves when snapshots are saved
   */ async saveSnapshots(filePath) {
        const path = filePath || this.#snapshotPath;
        if (!path) {
            throw new InvalidArgumentError('Snapshot path is required');
        }
        const resolvedPath = resolve(path);
        // Ensure directory exists
        await mkdir(dirname(resolvedPath), {
            recursive: true
        });
        // Convert Map to serializable format
        const data = Array.from(this.#snapshots.entries()).map(([hash, snapshot])=>({
                hash,
                snapshot
            }));
        await writeFile(resolvedPath, JSON.stringify(data, null, 2), {
            flush: true
        });
    }
    /**
   * Clears all recorded snapshots
   * @returns {void}
   */ clear() {
        this.#snapshots.clear();
    }
    /**
   * Gets all recorded snapshots
   * @return {Array<SnapshotEntry>} - Array of all recorded snapshots
   */ getSnapshots() {
        return Array.from(this.#snapshots.values());
    }
    /**
   * Gets snapshot count
   * @return {number} - Number of recorded snapshots
   */ size() {
        return this.#snapshots.size;
    }
    /**
   * Resets call counts for all snapshots (useful for test cleanup)
   * @returns {void}
   */ resetCallCounts() {
        for (const snapshot of this.#snapshots.values()){
            snapshot.callCount = 0;
        }
    }
    /**
   * Deletes a specific snapshot by request options
   * @param {SnapshotRequestOptions} requestOpts - Request options to match
   * @returns {boolean} - True if snapshot was deleted, false if not found
   */ deleteSnapshot(requestOpts) {
        const request = formatRequestKey(requestOpts, this.#headerFilters, this.matchOptions);
        const hash = createRequestHash(request);
        return this.#snapshots.delete(hash);
    }
    /**
   * Gets information about a specific snapshot
   * @param {SnapshotRequestOptions} requestOpts - Request options to match
   * @returns {SnapshotInfo|null} - Snapshot information or null if not found
   */ getSnapshotInfo(requestOpts) {
        const request = formatRequestKey(requestOpts, this.#headerFilters, this.matchOptions);
        const hash = createRequestHash(request);
        const snapshot = this.#snapshots.get(hash);
        if (!snapshot) return null;
        return {
            hash,
            request: snapshot.request,
            responseCount: snapshot.responses ? snapshot.responses.length : snapshot.response ? 1 : 0,
            callCount: snapshot.callCount || 0,
            timestamp: snapshot.timestamp
        };
    }
    /**
   * Replaces all snapshots with new data (full replacement)
   * @param {Array<{hash: string; snapshot: SnapshotEntry}>|Record<string, SnapshotEntry>} snapshotData - New snapshot data to replace existing ones
   * @returns {void}
   */ replaceSnapshots(snapshotData) {
        this.#snapshots.clear();
        if (Array.isArray(snapshotData)) {
            for (const { hash, snapshot } of snapshotData){
                this.#snapshots.set(hash, snapshot);
            }
        } else if (snapshotData && typeof snapshotData === 'object') {
            // Legacy object format
            this.#snapshots = new Map(Object.entries(snapshotData));
        }
    }
    /**
   * Starts the auto-flush timer
   * @returns {void}
   */ #startAutoFlush() {
        return this.#scheduleFlush();
    }
    /**
   * Stops the auto-flush timer
   * @returns {void}
   */ #stopAutoFlush() {
        if (this.#flushTimeout) {
            clearTimeout(this.#flushTimeout);
            // Ensure any pending flush is completed
            this.saveSnapshots().catch(()=>{
            // Ignore flush errors
            });
            this.#flushTimeout = null;
        }
    }
    /**
   * Schedules a flush (debounced to avoid excessive writes)
   */ #scheduleFlush() {
        this.#flushTimeout = setTimeout(()=>{
            this.saveSnapshots().catch(()=>{
            // Ignore flush errors
            });
            if (this.#autoFlush) {
                this.#flushTimeout?.refresh();
            } else {
                this.#flushTimeout = null;
            }
        }, 1000); // 1 second debounce
    }
    /**
   * Cleanup method to stop timers
   * @returns {void}
   */ destroy() {
        this.#stopAutoFlush();
        if (this.#flushTimeout) {
            clearTimeout(this.#flushTimeout);
            this.#flushTimeout = null;
        }
    }
    /**
   * Async close method that saves all recordings and performs cleanup
   * @returns {Promise<void>}
   */ async close() {
        // Save any pending recordings if we have a snapshot path
        if (this.#snapshotPath && this.#snapshots.size !== 0) {
            await this.saveSnapshots();
        }
        // Perform cleanup
        this.destroy();
    }
}
module.exports = {
    SnapshotRecorder,
    formatRequestKey,
    createRequestHash,
    filterHeadersForMatching,
    filterHeadersForStorage,
    createHeaderFilters
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/snapshot-agent.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Agent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/agent.js [app-rsc] (ecmascript)");
const MockAgent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-agent.js [app-rsc] (ecmascript)");
const { SnapshotRecorder } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/snapshot-recorder.js [app-rsc] (ecmascript)");
const WrapHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/wrap-handler.js [app-rsc] (ecmascript)");
const { InvalidArgumentError, UndiciError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const { validateSnapshotMode } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/snapshot-utils.js [app-rsc] (ecmascript)");
const kSnapshotRecorder = Symbol('kSnapshotRecorder');
const kSnapshotMode = Symbol('kSnapshotMode');
const kSnapshotPath = Symbol('kSnapshotPath');
const kSnapshotLoaded = Symbol('kSnapshotLoaded');
const kRealAgent = Symbol('kRealAgent');
// Static flag to ensure warning is only emitted once per process
let warningEmitted = false;
class SnapshotAgent extends MockAgent {
    constructor(opts = {}){
        // Emit experimental warning only once
        if (!warningEmitted) {
            process.emitWarning('SnapshotAgent is experimental and subject to change', 'ExperimentalWarning');
            warningEmitted = true;
        }
        const { mode = 'record', snapshotPath = null, ...mockAgentOpts } = opts;
        super(mockAgentOpts);
        validateSnapshotMode(mode);
        // Validate snapshotPath is provided when required
        if ((mode === 'playback' || mode === 'update') && !snapshotPath) {
            throw new InvalidArgumentError(`snapshotPath is required when mode is '${mode}'`);
        }
        this[kSnapshotMode] = mode;
        this[kSnapshotPath] = snapshotPath;
        this[kSnapshotRecorder] = new SnapshotRecorder({
            snapshotPath: this[kSnapshotPath],
            mode: this[kSnapshotMode],
            maxSnapshots: opts.maxSnapshots,
            autoFlush: opts.autoFlush,
            flushInterval: opts.flushInterval,
            matchHeaders: opts.matchHeaders,
            ignoreHeaders: opts.ignoreHeaders,
            excludeHeaders: opts.excludeHeaders,
            matchBody: opts.matchBody,
            matchQuery: opts.matchQuery,
            caseSensitive: opts.caseSensitive,
            shouldRecord: opts.shouldRecord,
            shouldPlayback: opts.shouldPlayback,
            excludeUrls: opts.excludeUrls
        });
        this[kSnapshotLoaded] = false;
        // For recording/update mode, we need a real agent to make actual requests
        if (this[kSnapshotMode] === 'record' || this[kSnapshotMode] === 'update') {
            this[kRealAgent] = new Agent(opts);
        }
        // Auto-load snapshots in playback/update mode
        if ((this[kSnapshotMode] === 'playback' || this[kSnapshotMode] === 'update') && this[kSnapshotPath]) {
            this.loadSnapshots().catch(()=>{
            // Ignore load errors - file might not exist yet
            });
        }
    }
    dispatch(opts, handler) {
        handler = WrapHandler.wrap(handler);
        const mode = this[kSnapshotMode];
        if (mode === 'playback' || mode === 'update') {
            // Ensure snapshots are loaded
            if (!this[kSnapshotLoaded]) {
                // Need to load asynchronously, delegate to async version
                return this.#asyncDispatch(opts, handler);
            }
            // Try to find existing snapshot (synchronous)
            const snapshot = this[kSnapshotRecorder].findSnapshot(opts);
            if (snapshot) {
                // Use recorded response (synchronous)
                return this.#replaySnapshot(snapshot, handler);
            } else if (mode === 'update') {
                // Make real request and record it (async required)
                return this.#recordAndReplay(opts, handler);
            } else {
                // Playback mode but no snapshot found
                const error = new UndiciError(`No snapshot found for ${opts.method || 'GET'} ${opts.path}`);
                if (handler.onError) {
                    handler.onError(error);
                    return;
                }
                throw error;
            }
        } else if (mode === 'record') {
            // Record mode - make real request and save response (async required)
            return this.#recordAndReplay(opts, handler);
        }
    }
    /**
   * Async version of dispatch for when we need to load snapshots first
   */ async #asyncDispatch(opts, handler) {
        await this.loadSnapshots();
        return this.dispatch(opts, handler);
    }
    /**
   * Records a real request and replays the response
   */ #recordAndReplay(opts, handler) {
        const responseData = {
            statusCode: null,
            headers: {},
            trailers: {},
            body: []
        };
        const self = this // Capture 'this' context for use within nested handler callbacks
        ;
        const recordingHandler = {
            onRequestStart (controller, context) {
                return handler.onRequestStart(controller, {
                    ...context,
                    history: this.history
                });
            },
            onRequestUpgrade (controller, statusCode, headers, socket) {
                return handler.onRequestUpgrade(controller, statusCode, headers, socket);
            },
            onResponseStart (controller, statusCode, headers, statusMessage) {
                responseData.statusCode = statusCode;
                responseData.headers = headers;
                return handler.onResponseStart(controller, statusCode, headers, statusMessage);
            },
            onResponseData (controller, chunk) {
                responseData.body.push(chunk);
                return handler.onResponseData(controller, chunk);
            },
            onResponseEnd (controller, trailers) {
                responseData.trailers = trailers;
                // Record the interaction using captured 'self' context (fire and forget)
                const responseBody = Buffer.concat(responseData.body);
                self[kSnapshotRecorder].record(opts, {
                    statusCode: responseData.statusCode,
                    headers: responseData.headers,
                    body: responseBody,
                    trailers: responseData.trailers
                }).then(()=>{
                    handler.onResponseEnd(controller, trailers);
                }).catch((error)=>{
                    handler.onResponseError(controller, error);
                });
            }
        };
        // Use composed agent if available (includes interceptors), otherwise use real agent
        const agent = this[kRealAgent];
        return agent.dispatch(opts, recordingHandler);
    }
    /**
   * Replays a recorded response
   *
   * @param {Object} snapshot - The recorded snapshot to replay.
   * @param {Object} handler - The handler to call with the response data.
   * @returns {void}
   */ #replaySnapshot(snapshot, handler) {
        try {
            const { response } = snapshot;
            const controller = {
                pause () {},
                resume () {},
                abort (reason) {
                    this.aborted = true;
                    this.reason = reason;
                },
                aborted: false,
                paused: false
            };
            handler.onRequestStart(controller);
            handler.onResponseStart(controller, response.statusCode, response.headers);
            // Body is always stored as base64 string
            const body = Buffer.from(response.body, 'base64');
            handler.onResponseData(controller, body);
            handler.onResponseEnd(controller, response.trailers);
        } catch (error) {
            handler.onError?.(error);
        }
    }
    /**
   * Loads snapshots from file
   *
   * @param {string} [filePath] - Optional file path to load snapshots from.
   * @returns {Promise<void>} - Resolves when snapshots are loaded.
   */ async loadSnapshots(filePath) {
        await this[kSnapshotRecorder].loadSnapshots(filePath || this[kSnapshotPath]);
        this[kSnapshotLoaded] = true;
        // In playback mode, set up MockAgent interceptors for all snapshots
        if (this[kSnapshotMode] === 'playback') {
            this.#setupMockInterceptors();
        }
    }
    /**
   * Saves snapshots to file
   *
   * @param {string} [filePath] - Optional file path to save snapshots to.
   * @returns {Promise<void>} - Resolves when snapshots are saved.
   */ async saveSnapshots(filePath) {
        return this[kSnapshotRecorder].saveSnapshots(filePath || this[kSnapshotPath]);
    }
    /**
   * Sets up MockAgent interceptors based on recorded snapshots.
   *
   * This method creates MockAgent interceptors for each recorded snapshot,
   * allowing the SnapshotAgent to fall back to MockAgent's standard intercept
   * mechanism in playback mode. Each interceptor is configured to persist
   * (remain active for multiple requests) and responds with the recorded
   * response data.
   *
   * Called automatically when loading snapshots in playback mode.
   *
   * @returns {void}
   */ #setupMockInterceptors() {
        for (const snapshot of this[kSnapshotRecorder].getSnapshots()){
            const { request, responses, response } = snapshot;
            const url = new URL(request.url);
            const mockPool = this.get(url.origin);
            // Handle both new format (responses array) and legacy format (response object)
            const responseData = responses ? responses[0] : response;
            if (!responseData) continue;
            mockPool.intercept({
                path: url.pathname + url.search,
                method: request.method,
                headers: request.headers,
                body: request.body
            }).reply(responseData.statusCode, responseData.body, {
                headers: responseData.headers,
                trailers: responseData.trailers
            }).persist();
        }
    }
    /**
   * Gets the snapshot recorder
   * @return {SnapshotRecorder} - The snapshot recorder instance
   */ getRecorder() {
        return this[kSnapshotRecorder];
    }
    /**
   * Gets the current mode
   * @return {import('./snapshot-utils').SnapshotMode} - The current snapshot mode
   */ getMode() {
        return this[kSnapshotMode];
    }
    /**
   * Clears all snapshots
   * @returns {void}
   */ clearSnapshots() {
        this[kSnapshotRecorder].clear();
    }
    /**
   * Resets call counts for all snapshots (useful for test cleanup)
   * @returns {void}
   */ resetCallCounts() {
        this[kSnapshotRecorder].resetCallCounts();
    }
    /**
   * Deletes a specific snapshot by request options
   * @param {import('./snapshot-recorder').SnapshotRequestOptions} requestOpts - Request options to identify the snapshot
   * @return {Promise<boolean>} - Returns true if the snapshot was deleted, false if not found
   */ deleteSnapshot(requestOpts) {
        return this[kSnapshotRecorder].deleteSnapshot(requestOpts);
    }
    /**
   * Gets information about a specific snapshot
   * @returns {import('./snapshot-recorder').SnapshotInfo|null} - Snapshot information or null if not found
   */ getSnapshotInfo(requestOpts) {
        return this[kSnapshotRecorder].getSnapshotInfo(requestOpts);
    }
    /**
   * Replaces all snapshots with new data (full replacement)
   * @param {Array<{hash: string; snapshot: import('./snapshot-recorder').SnapshotEntryshotEntry}>|Record<string, import('./snapshot-recorder').SnapshotEntry>} snapshotData - New snapshot data to replace existing snapshots
   * @returns {void}
   */ replaceSnapshots(snapshotData) {
        this[kSnapshotRecorder].replaceSnapshots(snapshotData);
    }
    /**
   * Closes the agent, saving snapshots and cleaning up resources.
   *
   * @returns {Promise<void>}
   */ async close() {
        await this[kSnapshotRecorder].close();
        await this[kRealAgent]?.close();
        await super.close();
    }
}
module.exports = SnapshotAgent;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/global.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// We include a version number for the Dispatcher API. In case of breaking changes,
// this version number must be increased to avoid conflicts.
const globalDispatcher = Symbol.for('undici.globalDispatcher.1');
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const Agent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/agent.js [app-rsc] (ecmascript)");
if (getGlobalDispatcher() === undefined) {
    setGlobalDispatcher(new Agent());
}
function setGlobalDispatcher(agent) {
    if (!agent || typeof agent.dispatch !== 'function') {
        throw new InvalidArgumentError('Argument agent must implement Agent');
    }
    Object.defineProperty(globalThis, globalDispatcher, {
        value: agent,
        writable: true,
        enumerable: false,
        configurable: false
    });
}
function getGlobalDispatcher() {
    return globalThis[globalDispatcher];
}
// These are the globals that can be installed by undici.install().
// Not exported by index.js to avoid use outside of this module.
const installedExports = [
    'fetch',
    'Headers',
    'Response',
    'Request',
    'FormData',
    'WebSocket',
    'CloseEvent',
    'ErrorEvent',
    'MessageEvent',
    'EventSource'
];
module.exports = {
    setGlobalDispatcher,
    getGlobalDispatcher,
    installedExports
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/redirect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const RedirectHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/redirect-handler.js [app-rsc] (ecmascript)");
function createRedirectInterceptor({ maxRedirections: defaultMaxRedirections } = {}) {
    return (dispatch)=>{
        return function Intercept(opts, handler) {
            const { maxRedirections = defaultMaxRedirections, ...rest } = opts;
            if (maxRedirections == null || maxRedirections === 0) {
                return dispatch(opts, handler);
            }
            const dispatchOpts = {
                ...rest
            } // Stop sub dispatcher from also redirecting.
            ;
            const redirectHandler = new RedirectHandler(dispatch, maxRedirections, dispatchOpts, handler);
            return dispatch(dispatchOpts, redirectHandler);
        };
    };
}
module.exports = createRedirectInterceptor;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/response-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// const { parseHeaders } = require('../core/util')
const DecoratorHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/decorator-handler.js [app-rsc] (ecmascript)");
const { ResponseError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
class ResponseErrorHandler extends DecoratorHandler {
    #statusCode;
    #contentType;
    #decoder;
    #headers;
    #body;
    constructor(_opts, { handler }){
        super(handler);
    }
    #checkContentType(contentType) {
        return (this.#contentType ?? '').indexOf(contentType) === 0;
    }
    onRequestStart(controller, context) {
        this.#statusCode = 0;
        this.#contentType = null;
        this.#decoder = null;
        this.#headers = null;
        this.#body = '';
        return super.onRequestStart(controller, context);
    }
    onResponseStart(controller, statusCode, headers, statusMessage) {
        this.#statusCode = statusCode;
        this.#headers = headers;
        this.#contentType = headers['content-type'];
        if (this.#statusCode < 400) {
            return super.onResponseStart(controller, statusCode, headers, statusMessage);
        }
        if (this.#checkContentType('application/json') || this.#checkContentType('text/plain')) {
            this.#decoder = new TextDecoder('utf-8');
        }
    }
    onResponseData(controller, chunk) {
        if (this.#statusCode < 400) {
            return super.onResponseData(controller, chunk);
        }
        this.#body += this.#decoder?.decode(chunk, {
            stream: true
        }) ?? '';
    }
    onResponseEnd(controller, trailers) {
        if (this.#statusCode >= 400) {
            this.#body += this.#decoder?.decode(undefined, {
                stream: false
            }) ?? '';
            if (this.#checkContentType('application/json')) {
                try {
                    this.#body = JSON.parse(this.#body);
                } catch  {
                // Do nothing...
                }
            }
            let err;
            const stackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 0;
            try {
                err = new ResponseError('Response Error', this.#statusCode, {
                    body: this.#body,
                    headers: this.#headers
                });
            } finally{
                Error.stackTraceLimit = stackTraceLimit;
            }
            super.onResponseError(controller, err);
        } else {
            super.onResponseEnd(controller, trailers);
        }
    }
    onResponseError(controller, err) {
        super.onResponseError(controller, err);
    }
}
module.exports = ()=>{
    return (dispatch)=>{
        return function Intercept(opts, handler) {
            return dispatch(opts, new ResponseErrorHandler(opts, {
                handler
            }));
        };
    };
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/retry.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const RetryHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/retry-handler.js [app-rsc] (ecmascript)");
module.exports = (globalOpts)=>{
    return (dispatch)=>{
        return function retryInterceptor(opts, handler) {
            return dispatch(opts, new RetryHandler({
                ...opts,
                retryOptions: {
                    ...globalOpts,
                    ...opts.retryOptions
                }
            }, {
                handler,
                dispatch
            }));
        };
    };
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/dump.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { InvalidArgumentError, RequestAbortedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const DecoratorHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/decorator-handler.js [app-rsc] (ecmascript)");
class DumpHandler extends DecoratorHandler {
    #maxSize = 1024 * 1024;
    #dumped = false;
    #size = 0;
    #controller = null;
    aborted = false;
    reason = false;
    constructor({ maxSize, signal }, handler){
        if (maxSize != null && (!Number.isFinite(maxSize) || maxSize < 1)) {
            throw new InvalidArgumentError('maxSize must be a number greater than 0');
        }
        super(handler);
        this.#maxSize = maxSize ?? this.#maxSize;
    // this.#handler = handler
    }
    #abort(reason) {
        this.aborted = true;
        this.reason = reason;
    }
    onRequestStart(controller, context) {
        controller.abort = this.#abort.bind(this);
        this.#controller = controller;
        return super.onRequestStart(controller, context);
    }
    onResponseStart(controller, statusCode, headers, statusMessage) {
        const contentLength = headers['content-length'];
        if (contentLength != null && contentLength > this.#maxSize) {
            throw new RequestAbortedError(`Response size (${contentLength}) larger than maxSize (${this.#maxSize})`);
        }
        if (this.aborted === true) {
            return true;
        }
        return super.onResponseStart(controller, statusCode, headers, statusMessage);
    }
    onResponseError(controller, err) {
        if (this.#dumped) {
            return;
        }
        // On network errors before connect, controller will be null
        err = this.#controller?.reason ?? err;
        super.onResponseError(controller, err);
    }
    onResponseData(controller, chunk) {
        this.#size = this.#size + chunk.length;
        if (this.#size >= this.#maxSize) {
            this.#dumped = true;
            if (this.aborted === true) {
                super.onResponseError(controller, this.reason);
            } else {
                super.onResponseEnd(controller, {});
            }
        }
        return true;
    }
    onResponseEnd(controller, trailers) {
        if (this.#dumped) {
            return;
        }
        if (this.#controller.aborted === true) {
            super.onResponseError(controller, this.reason);
            return;
        }
        super.onResponseEnd(controller, trailers);
    }
}
function createDumpInterceptor({ maxSize: defaultMaxSize } = {
    maxSize: 1024 * 1024
}) {
    return (dispatch)=>{
        return function Intercept(opts, handler) {
            const { dumpMaxSize = defaultMaxSize } = opts;
            const dumpHandler = new DumpHandler({
                maxSize: dumpMaxSize,
                signal: opts.signal
            }, handler);
            return dispatch(opts, dumpHandler);
        };
    };
}
module.exports = createDumpInterceptor;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/dns.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { isIP } = __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
const { lookup } = __turbopack_context__.r("[externals]/node:dns [external] (node:dns, cjs)");
const DecoratorHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/decorator-handler.js [app-rsc] (ecmascript)");
const { InvalidArgumentError, InformationalError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
const maxInt = Math.pow(2, 31) - 1;
class DNSInstance {
    #maxTTL = 0;
    #maxItems = 0;
    #records = new Map();
    dualStack = true;
    affinity = null;
    lookup = null;
    pick = null;
    constructor(opts){
        this.#maxTTL = opts.maxTTL;
        this.#maxItems = opts.maxItems;
        this.dualStack = opts.dualStack;
        this.affinity = opts.affinity;
        this.lookup = opts.lookup ?? this.#defaultLookup;
        this.pick = opts.pick ?? this.#defaultPick;
    }
    get full() {
        return this.#records.size === this.#maxItems;
    }
    runLookup(origin, opts, cb) {
        const ips = this.#records.get(origin.hostname);
        // If full, we just return the origin
        if (ips == null && this.full) {
            cb(null, origin);
            return;
        }
        const newOpts = {
            affinity: this.affinity,
            dualStack: this.dualStack,
            lookup: this.lookup,
            pick: this.pick,
            ...opts.dns,
            maxTTL: this.#maxTTL,
            maxItems: this.#maxItems
        };
        // If no IPs we lookup
        if (ips == null) {
            this.lookup(origin, newOpts, (err, addresses)=>{
                if (err || addresses == null || addresses.length === 0) {
                    cb(err ?? new InformationalError('No DNS entries found'));
                    return;
                }
                this.setRecords(origin, addresses);
                const records = this.#records.get(origin.hostname);
                const ip = this.pick(origin, records, newOpts.affinity);
                let port;
                if (typeof ip.port === 'number') {
                    port = `:${ip.port}`;
                } else if (origin.port !== '') {
                    port = `:${origin.port}`;
                } else {
                    port = '';
                }
                cb(null, new URL(`${origin.protocol}//${ip.family === 6 ? `[${ip.address}]` : ip.address}${port}`));
            });
        } else {
            // If there's IPs we pick
            const ip = this.pick(origin, ips, newOpts.affinity);
            // If no IPs we lookup - deleting old records
            if (ip == null) {
                this.#records.delete(origin.hostname);
                this.runLookup(origin, opts, cb);
                return;
            }
            let port;
            if (typeof ip.port === 'number') {
                port = `:${ip.port}`;
            } else if (origin.port !== '') {
                port = `:${origin.port}`;
            } else {
                port = '';
            }
            cb(null, new URL(`${origin.protocol}//${ip.family === 6 ? `[${ip.address}]` : ip.address}${port}`));
        }
    }
    #defaultLookup(origin, opts, cb) {
        lookup(origin.hostname, {
            all: true,
            family: this.dualStack === false ? this.affinity : 0,
            order: 'ipv4first'
        }, (err, addresses)=>{
            if (err) {
                return cb(err);
            }
            const results = new Map();
            for (const addr of addresses){
                // On linux we found duplicates, we attempt to remove them with
                // the latest record
                results.set(`${addr.address}:${addr.family}`, addr);
            }
            cb(null, results.values());
        });
    }
    #defaultPick(origin, hostnameRecords, affinity) {
        let ip = null;
        const { records, offset } = hostnameRecords;
        let family;
        if (this.dualStack) {
            if (affinity == null) {
                // Balance between ip families
                if (offset == null || offset === maxInt) {
                    hostnameRecords.offset = 0;
                    affinity = 4;
                } else {
                    hostnameRecords.offset++;
                    affinity = (hostnameRecords.offset & 1) === 1 ? 6 : 4;
                }
            }
            if (records[affinity] != null && records[affinity].ips.length > 0) {
                family = records[affinity];
            } else {
                family = records[affinity === 4 ? 6 : 4];
            }
        } else {
            family = records[affinity];
        }
        // If no IPs we return null
        if (family == null || family.ips.length === 0) {
            return ip;
        }
        if (family.offset == null || family.offset === maxInt) {
            family.offset = 0;
        } else {
            family.offset++;
        }
        const position = family.offset % family.ips.length;
        ip = family.ips[position] ?? null;
        if (ip == null) {
            return ip;
        }
        if (Date.now() - ip.timestamp > ip.ttl) {
            // We delete expired records
            // It is possible that they have different TTL, so we manage them individually
            family.ips.splice(position, 1);
            return this.pick(origin, hostnameRecords, affinity);
        }
        return ip;
    }
    pickFamily(origin, ipFamily) {
        const records = this.#records.get(origin.hostname)?.records;
        if (!records) {
            return null;
        }
        const family = records[ipFamily];
        if (!family) {
            return null;
        }
        if (family.offset == null || family.offset === maxInt) {
            family.offset = 0;
        } else {
            family.offset++;
        }
        const position = family.offset % family.ips.length;
        const ip = family.ips[position] ?? null;
        if (ip == null) {
            return ip;
        }
        if (Date.now() - ip.timestamp > ip.ttl) {
            // We delete expired records
            // It is possible that they have different TTL, so we manage them individually
            family.ips.splice(position, 1);
        }
        return ip;
    }
    setRecords(origin, addresses) {
        const timestamp = Date.now();
        const records = {
            records: {
                4: null,
                6: null
            }
        };
        for (const record of addresses){
            record.timestamp = timestamp;
            if (typeof record.ttl === 'number') {
                // The record TTL is expected to be in ms
                record.ttl = Math.min(record.ttl, this.#maxTTL);
            } else {
                record.ttl = this.#maxTTL;
            }
            const familyRecords = records.records[record.family] ?? {
                ips: []
            };
            familyRecords.ips.push(record);
            records.records[record.family] = familyRecords;
        }
        this.#records.set(origin.hostname, records);
    }
    deleteRecords(origin) {
        this.#records.delete(origin.hostname);
    }
    getHandler(meta, opts) {
        return new DNSDispatchHandler(this, meta, opts);
    }
}
class DNSDispatchHandler extends DecoratorHandler {
    #state = null;
    #opts = null;
    #dispatch = null;
    #origin = null;
    #controller = null;
    #newOrigin = null;
    #firstTry = true;
    constructor(state, { origin, handler, dispatch, newOrigin }, opts){
        super(handler);
        this.#origin = origin;
        this.#newOrigin = newOrigin;
        this.#opts = {
            ...opts
        };
        this.#state = state;
        this.#dispatch = dispatch;
    }
    onResponseError(controller, err) {
        switch(err.code){
            case 'ETIMEDOUT':
            case 'ECONNREFUSED':
                {
                    if (this.#state.dualStack) {
                        if (!this.#firstTry) {
                            super.onResponseError(controller, err);
                            return;
                        }
                        this.#firstTry = false;
                        // Pick an ip address from the other family
                        const otherFamily = this.#newOrigin.hostname[0] === '[' ? 4 : 6;
                        const ip = this.#state.pickFamily(this.#origin, otherFamily);
                        if (ip == null) {
                            super.onResponseError(controller, err);
                            return;
                        }
                        let port;
                        if (typeof ip.port === 'number') {
                            port = `:${ip.port}`;
                        } else if (this.#origin.port !== '') {
                            port = `:${this.#origin.port}`;
                        } else {
                            port = '';
                        }
                        const dispatchOpts = {
                            ...this.#opts,
                            origin: `${this.#origin.protocol}//${ip.family === 6 ? `[${ip.address}]` : ip.address}${port}`
                        };
                        this.#dispatch(dispatchOpts, this);
                        return;
                    }
                    // if dual-stack disabled, we error out
                    super.onResponseError(controller, err);
                    break;
                }
            case 'ENOTFOUND':
                this.#state.deleteRecords(this.#origin);
                super.onResponseError(controller, err);
                break;
            default:
                super.onResponseError(controller, err);
                break;
        }
    }
}
module.exports = (interceptorOpts)=>{
    if (interceptorOpts?.maxTTL != null && (typeof interceptorOpts?.maxTTL !== 'number' || interceptorOpts?.maxTTL < 0)) {
        throw new InvalidArgumentError('Invalid maxTTL. Must be a positive number');
    }
    if (interceptorOpts?.maxItems != null && (typeof interceptorOpts?.maxItems !== 'number' || interceptorOpts?.maxItems < 1)) {
        throw new InvalidArgumentError('Invalid maxItems. Must be a positive number and greater than zero');
    }
    if (interceptorOpts?.affinity != null && interceptorOpts?.affinity !== 4 && interceptorOpts?.affinity !== 6) {
        throw new InvalidArgumentError('Invalid affinity. Must be either 4 or 6');
    }
    if (interceptorOpts?.dualStack != null && typeof interceptorOpts?.dualStack !== 'boolean') {
        throw new InvalidArgumentError('Invalid dualStack. Must be a boolean');
    }
    if (interceptorOpts?.lookup != null && typeof interceptorOpts?.lookup !== 'function') {
        throw new InvalidArgumentError('Invalid lookup. Must be a function');
    }
    if (interceptorOpts?.pick != null && typeof interceptorOpts?.pick !== 'function') {
        throw new InvalidArgumentError('Invalid pick. Must be a function');
    }
    const dualStack = interceptorOpts?.dualStack ?? true;
    let affinity;
    if (dualStack) {
        affinity = interceptorOpts?.affinity ?? null;
    } else {
        affinity = interceptorOpts?.affinity ?? 4;
    }
    const opts = {
        maxTTL: interceptorOpts?.maxTTL ?? 10e3,
        lookup: interceptorOpts?.lookup ?? null,
        pick: interceptorOpts?.pick ?? null,
        dualStack,
        affinity,
        maxItems: interceptorOpts?.maxItems ?? Infinity
    };
    const instance = new DNSInstance(opts);
    return (dispatch)=>{
        return function dnsInterceptor(origDispatchOpts, handler) {
            const origin = origDispatchOpts.origin.constructor === URL ? origDispatchOpts.origin : new URL(origDispatchOpts.origin);
            if (isIP(origin.hostname) !== 0) {
                return dispatch(origDispatchOpts, handler);
            }
            instance.runLookup(origin, origDispatchOpts, (err, newOrigin)=>{
                if (err) {
                    return handler.onResponseError(null, err);
                }
                const dispatchOpts = {
                    ...origDispatchOpts,
                    servername: origin.hostname,
                    origin: newOrigin.origin,
                    headers: {
                        host: origin.host,
                        ...origDispatchOpts.headers
                    }
                };
                dispatch(dispatchOpts, instance.getHandler({
                    origin,
                    dispatch,
                    handler,
                    newOrigin
                }, origDispatchOpts));
            });
            return true;
        };
    };
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/cache.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { Readable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-rsc] (ecmascript)");
const CacheHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/cache-handler.js [app-rsc] (ecmascript)");
const MemoryCacheStore = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/cache/memory-cache-store.js [app-rsc] (ecmascript)");
const CacheRevalidationHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/cache-revalidation-handler.js [app-rsc] (ecmascript)");
const { assertCacheStore, assertCacheMethods, makeCacheKey, normalizeHeaders, parseCacheControlHeader } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/cache.js [app-rsc] (ecmascript)");
const { AbortError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-rsc] (ecmascript)");
/**
 * @typedef {(options: import('../../types/dispatcher.d.ts').default.DispatchOptions, handler: import('../../types/dispatcher.d.ts').default.DispatchHandler) => void} DispatchFn
 */ /**
 * @param {import('../../types/cache-interceptor.d.ts').default.GetResult} result
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives | undefined} cacheControlDirectives
 * @returns {boolean}
 */ function needsRevalidation(result, cacheControlDirectives) {
    if (cacheControlDirectives?.['no-cache']) {
        // Always revalidate requests with the no-cache request directive
        return true;
    }
    if (result.cacheControlDirectives?.['no-cache'] && !Array.isArray(result.cacheControlDirectives['no-cache'])) {
        // Always revalidate requests with unqualified no-cache response directive
        return true;
    }
    const now = Date.now();
    if (now > result.staleAt) {
        // Response is stale
        if (cacheControlDirectives?.['max-stale']) {
            // There's a threshold where we can serve stale responses, let's see if
            //  we're in it
            // https://www.rfc-editor.org/rfc/rfc9111.html#name-max-stale
            const gracePeriod = result.staleAt + cacheControlDirectives['max-stale'] * 1000;
            return now > gracePeriod;
        }
        return true;
    }
    if (cacheControlDirectives?.['min-fresh']) {
        // https://www.rfc-editor.org/rfc/rfc9111.html#section-5.2.1.3
        // At this point, staleAt is always > now
        const timeLeftTillStale = result.staleAt - now;
        const threshold = cacheControlDirectives['min-fresh'] * 1000;
        return timeLeftTillStale <= threshold;
    }
    return false;
}
/**
 * Check if we're within the stale-while-revalidate window for a stale response
 * @param {import('../../types/cache-interceptor.d.ts').default.GetResult} result
 * @returns {boolean}
 */ function withinStaleWhileRevalidateWindow(result) {
    const staleWhileRevalidate = result.cacheControlDirectives?.['stale-while-revalidate'];
    if (!staleWhileRevalidate) {
        return false;
    }
    const now = Date.now();
    const staleWhileRevalidateExpiry = result.staleAt + staleWhileRevalidate * 1000;
    return now <= staleWhileRevalidateExpiry;
}
/**
 * @param {DispatchFn} dispatch
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheHandlerOptions} globalOpts
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} cacheKey
 * @param {import('../../types/dispatcher.d.ts').default.DispatchHandler} handler
 * @param {import('../../types/dispatcher.d.ts').default.RequestOptions} opts
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives | undefined} reqCacheControl
 */ function handleUncachedResponse(dispatch, globalOpts, cacheKey, handler, opts, reqCacheControl) {
    if (reqCacheControl?.['only-if-cached']) {
        let aborted = false;
        try {
            if (typeof handler.onConnect === 'function') {
                handler.onConnect(()=>{
                    aborted = true;
                });
                if (aborted) {
                    return;
                }
            }
            if (typeof handler.onHeaders === 'function') {
                handler.onHeaders(504, [], ()=>{}, 'Gateway Timeout');
                if (aborted) {
                    return;
                }
            }
            if (typeof handler.onComplete === 'function') {
                handler.onComplete([]);
            }
        } catch (err) {
            if (typeof handler.onError === 'function') {
                handler.onError(err);
            }
        }
        return true;
    }
    return dispatch(opts, new CacheHandler(globalOpts, cacheKey, handler));
}
/**
 * @param {import('../../types/dispatcher.d.ts').default.DispatchHandler} handler
 * @param {import('../../types/dispatcher.d.ts').default.RequestOptions} opts
 * @param {import('../../types/cache-interceptor.d.ts').default.GetResult} result
 * @param {number} age
 * @param {any} context
 * @param {boolean} isStale
 */ function sendCachedValue(handler, opts, result, age, context, isStale) {
    // TODO (perf): Readable.from path can be optimized...
    const stream = util.isStream(result.body) ? result.body : Readable.from(result.body ?? []);
    assert(!stream.destroyed, 'stream should not be destroyed');
    assert(!stream.readableDidRead, 'stream should not be readableDidRead');
    const controller = {
        resume () {
            stream.resume();
        },
        pause () {
            stream.pause();
        },
        get paused () {
            return stream.isPaused();
        },
        get aborted () {
            return stream.destroyed;
        },
        get reason () {
            return stream.errored;
        },
        abort (reason) {
            stream.destroy(reason ?? new AbortError());
        }
    };
    stream.on('error', function(err) {
        if (!this.readableEnded) {
            if (typeof handler.onResponseError === 'function') {
                handler.onResponseError(controller, err);
            } else {
                throw err;
            }
        }
    }).on('close', function() {
        if (!this.errored) {
            handler.onResponseEnd?.(controller, {});
        }
    });
    handler.onRequestStart?.(controller, context);
    if (stream.destroyed) {
        return;
    }
    // Add the age header
    // https://www.rfc-editor.org/rfc/rfc9111.html#name-age
    const headers = {
        ...result.headers,
        age: String(age)
    };
    if (isStale) {
        // Add warning header
        //  https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Warning
        headers.warning = '110 - "response is stale"';
    }
    handler.onResponseStart?.(controller, result.statusCode, headers, result.statusMessage);
    if (opts.method === 'HEAD') {
        stream.destroy();
    } else {
        stream.on('data', function(chunk) {
            handler.onResponseData?.(controller, chunk);
        });
    }
}
/**
 * @param {DispatchFn} dispatch
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheHandlerOptions} globalOpts
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} cacheKey
 * @param {import('../../types/dispatcher.d.ts').default.DispatchHandler} handler
 * @param {import('../../types/dispatcher.d.ts').default.RequestOptions} opts
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheControlDirectives | undefined} reqCacheControl
 * @param {import('../../types/cache-interceptor.d.ts').default.GetResult | undefined} result
 */ function handleResult(dispatch, globalOpts, cacheKey, handler, opts, reqCacheControl, result) {
    if (!result) {
        return handleUncachedResponse(dispatch, globalOpts, cacheKey, handler, opts, reqCacheControl);
    }
    const now = Date.now();
    if (now > result.deleteAt) {
        // Response is expired, cache store shouldn't have given this to us
        return dispatch(opts, new CacheHandler(globalOpts, cacheKey, handler));
    }
    const age = Math.round((now - result.cachedAt) / 1000);
    if (reqCacheControl?.['max-age'] && age >= reqCacheControl['max-age']) {
        // Response is considered expired for this specific request
        //  https://www.rfc-editor.org/rfc/rfc9111.html#section-5.2.1.1
        return dispatch(opts, handler);
    }
    // Check if the response is stale
    if (needsRevalidation(result, reqCacheControl)) {
        if (util.isStream(opts.body) && util.bodyLength(opts.body) !== 0) {
            // If body is a stream we can't revalidate...
            // TODO (fix): This could be less strict...
            return dispatch(opts, new CacheHandler(globalOpts, cacheKey, handler));
        }
        // RFC 5861: If we're within stale-while-revalidate window, serve stale immediately
        // and revalidate in background
        if (withinStaleWhileRevalidateWindow(result)) {
            // Serve stale response immediately
            sendCachedValue(handler, opts, result, age, null, true);
            // Start background revalidation (fire-and-forget)
            queueMicrotask(()=>{
                let headers = {
                    ...opts.headers,
                    'if-modified-since': new Date(result.cachedAt).toUTCString()
                };
                if (result.etag) {
                    headers['if-none-match'] = result.etag;
                }
                if (result.vary) {
                    headers = {
                        ...headers,
                        ...result.vary
                    };
                }
                // Background revalidation - update cache if we get new data
                dispatch({
                    ...opts,
                    headers
                }, new CacheHandler(globalOpts, cacheKey, {
                    // Silent handler that just updates the cache
                    onRequestStart () {},
                    onRequestUpgrade () {},
                    onResponseStart () {},
                    onResponseData () {},
                    onResponseEnd () {},
                    onResponseError () {}
                }));
            });
            return true;
        }
        let withinStaleIfErrorThreshold = false;
        const staleIfErrorExpiry = result.cacheControlDirectives['stale-if-error'] ?? reqCacheControl?.['stale-if-error'];
        if (staleIfErrorExpiry) {
            withinStaleIfErrorThreshold = now < result.staleAt + staleIfErrorExpiry * 1000;
        }
        let headers = {
            ...opts.headers,
            'if-modified-since': new Date(result.cachedAt).toUTCString()
        };
        if (result.etag) {
            headers['if-none-match'] = result.etag;
        }
        if (result.vary) {
            headers = {
                ...headers,
                ...result.vary
            };
        }
        // We need to revalidate the response
        return dispatch({
            ...opts,
            headers
        }, new CacheRevalidationHandler((success, context)=>{
            if (success) {
                sendCachedValue(handler, opts, result, age, context, true);
            } else if (util.isStream(result.body)) {
                result.body.on('error', ()=>{}).destroy();
            }
        }, new CacheHandler(globalOpts, cacheKey, handler), withinStaleIfErrorThreshold));
    }
    // Dump request body.
    if (util.isStream(opts.body)) {
        opts.body.on('error', ()=>{}).destroy();
    }
    sendCachedValue(handler, opts, result, age, null, false);
}
/**
 * @param {import('../../types/cache-interceptor.d.ts').default.CacheOptions} [opts]
 * @returns {import('../../types/dispatcher.d.ts').default.DispatcherComposeInterceptor}
 */ module.exports = (opts = {})=>{
    const { store = new MemoryCacheStore(), methods = [
        'GET'
    ], cacheByDefault = undefined, type = 'shared' } = opts;
    if (typeof opts !== 'object' || opts === null) {
        throw new TypeError(`expected type of opts to be an Object, got ${opts === null ? 'null' : typeof opts}`);
    }
    assertCacheStore(store, 'opts.store');
    assertCacheMethods(methods, 'opts.methods');
    if (typeof cacheByDefault !== 'undefined' && typeof cacheByDefault !== 'number') {
        throw new TypeError(`expected opts.cacheByDefault to be number or undefined, got ${typeof cacheByDefault}`);
    }
    if (typeof type !== 'undefined' && type !== 'shared' && type !== 'private') {
        throw new TypeError(`expected opts.type to be shared, private, or undefined, got ${typeof type}`);
    }
    const globalOpts = {
        store,
        methods,
        cacheByDefault,
        type
    };
    const safeMethodsToNotCache = util.safeHTTPMethods.filter((method)=>methods.includes(method) === false);
    return (dispatch)=>{
        return (opts, handler)=>{
            if (!opts.origin || safeMethodsToNotCache.includes(opts.method)) {
                // Not a method we want to cache or we don't have the origin, skip
                return dispatch(opts, handler);
            }
            opts = {
                ...opts,
                headers: normalizeHeaders(opts)
            };
            const reqCacheControl = opts.headers?.['cache-control'] ? parseCacheControlHeader(opts.headers['cache-control']) : undefined;
            if (reqCacheControl?.['no-store']) {
                return dispatch(opts, handler);
            }
            /**
       * @type {import('../../types/cache-interceptor.d.ts').default.CacheKey}
       */ const cacheKey = makeCacheKey(opts);
            const result = store.get(cacheKey);
            if (result && typeof result.then === 'function') {
                result.then((result)=>{
                    handleResult(dispatch, globalOpts, cacheKey, handler, opts, reqCacheControl, result);
                });
            } else {
                handleResult(dispatch, globalOpts, cacheKey, handler, opts, reqCacheControl, result);
            }
            return true;
        };
    };
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/decompress.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { createInflate, createGunzip, createBrotliDecompress, createZstdDecompress } = __turbopack_context__.r("[externals]/node:zlib [external] (node:zlib, cjs)");
const { pipeline } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const DecoratorHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/decorator-handler.js [app-rsc] (ecmascript)");
/** @typedef {import('node:stream').Transform} Transform */ /** @typedef {import('node:stream').Transform} Controller */ /** @typedef {Transform&import('node:zlib').Zlib} DecompressorStream */ /** @type {Record<string, () => DecompressorStream>} */ const supportedEncodings = {
    gzip: createGunzip,
    'x-gzip': createGunzip,
    br: createBrotliDecompress,
    deflate: createInflate,
    compress: createInflate,
    'x-compress': createInflate,
    ...createZstdDecompress ? {
        zstd: createZstdDecompress
    } : {}
};
const defaultSkipStatusCodes = [
    204,
    304
];
let warningEmitted = false;
/**
 * @typedef {Object} DecompressHandlerOptions
 * @property {number[]|Readonly<number[]>} [skipStatusCodes=[204, 304]] - List of status codes to skip decompression for
 * @property {boolean} [skipErrorResponses] - Whether to skip decompression for error responses (status codes >= 400)
 */ class DecompressHandler extends DecoratorHandler {
    /** @type {Transform[]} */ #decompressors = [];
    /** @type {NodeJS.WritableStream&NodeJS.ReadableStream|null} */ #pipelineStream;
    /** @type {Readonly<number[]>} */ #skipStatusCodes;
    /** @type {boolean} */ #skipErrorResponses;
    constructor(handler, { skipStatusCodes = defaultSkipStatusCodes, skipErrorResponses = true } = {}){
        super(handler);
        this.#skipStatusCodes = skipStatusCodes;
        this.#skipErrorResponses = skipErrorResponses;
    }
    /**
   * Determines if decompression should be skipped based on encoding and status code
   * @param {string} contentEncoding - Content-Encoding header value
   * @param {number} statusCode - HTTP status code of the response
   * @returns {boolean} - True if decompression should be skipped
   */ #shouldSkipDecompression(contentEncoding, statusCode) {
        if (!contentEncoding || statusCode < 200) return true;
        if (this.#skipStatusCodes.includes(statusCode)) return true;
        if (this.#skipErrorResponses && statusCode >= 400) return true;
        return false;
    }
    /**
   * Creates a chain of decompressors for multiple content encodings
   *
   * @param {string} encodings - Comma-separated list of content encodings
   * @returns {Array<DecompressorStream>} - Array of decompressor streams
   */ #createDecompressionChain(encodings) {
        const parts = encodings.split(',');
        /** @type {DecompressorStream[]} */ const decompressors = [];
        for(let i = parts.length - 1; i >= 0; i--){
            const encoding = parts[i].trim();
            if (!encoding) continue;
            if (!supportedEncodings[encoding]) {
                decompressors.length = 0; // Clear if unsupported encoding
                return decompressors // Unsupported encoding
                ;
            }
            decompressors.push(supportedEncodings[encoding]());
        }
        return decompressors;
    }
    /**
   * Sets up event handlers for a decompressor stream using readable events
   * @param {DecompressorStream} decompressor - The decompressor stream
   * @param {Controller} controller - The controller to coordinate with
   * @returns {void}
   */ #setupDecompressorEvents(decompressor, controller) {
        decompressor.on('readable', ()=>{
            let chunk;
            while((chunk = decompressor.read()) !== null){
                const result = super.onResponseData(controller, chunk);
                if (result === false) {
                    break;
                }
            }
        });
        decompressor.on('error', (error)=>{
            super.onResponseError(controller, error);
        });
    }
    /**
   * Sets up event handling for a single decompressor
   * @param {Controller} controller - The controller to handle events
   * @returns {void}
   */ #setupSingleDecompressor(controller) {
        const decompressor = this.#decompressors[0];
        this.#setupDecompressorEvents(decompressor, controller);
        decompressor.on('end', ()=>{
            super.onResponseEnd(controller, {});
        });
    }
    /**
   * Sets up event handling for multiple chained decompressors using pipeline
   * @param {Controller} controller - The controller to handle events
   * @returns {void}
   */ #setupMultipleDecompressors(controller) {
        const lastDecompressor = this.#decompressors[this.#decompressors.length - 1];
        this.#setupDecompressorEvents(lastDecompressor, controller);
        this.#pipelineStream = pipeline(this.#decompressors, (err)=>{
            if (err) {
                super.onResponseError(controller, err);
                return;
            }
            super.onResponseEnd(controller, {});
        });
    }
    /**
   * Cleans up decompressor references to prevent memory leaks
   * @returns {void}
   */ #cleanupDecompressors() {
        this.#decompressors.length = 0;
        this.#pipelineStream = null;
    }
    /**
   * @param {Controller} controller
   * @param {number} statusCode
   * @param {Record<string, string | string[] | undefined>} headers
   * @param {string} statusMessage
   * @returns {void}
   */ onResponseStart(controller, statusCode, headers, statusMessage) {
        const contentEncoding = headers['content-encoding'];
        // If content encoding is not supported or status code is in skip list
        if (this.#shouldSkipDecompression(contentEncoding, statusCode)) {
            return super.onResponseStart(controller, statusCode, headers, statusMessage);
        }
        const decompressors = this.#createDecompressionChain(contentEncoding.toLowerCase());
        if (decompressors.length === 0) {
            this.#cleanupDecompressors();
            return super.onResponseStart(controller, statusCode, headers, statusMessage);
        }
        this.#decompressors = decompressors;
        // Remove compression headers since we're decompressing
        const { 'content-encoding': _, 'content-length': __, ...newHeaders } = headers;
        if (this.#decompressors.length === 1) {
            this.#setupSingleDecompressor(controller);
        } else {
            this.#setupMultipleDecompressors(controller);
        }
        super.onResponseStart(controller, statusCode, newHeaders, statusMessage);
    }
    /**
   * @param {Controller} controller
   * @param {Buffer} chunk
   * @returns {void}
   */ onResponseData(controller, chunk) {
        if (this.#decompressors.length > 0) {
            this.#decompressors[0].write(chunk);
            return;
        }
        super.onResponseData(controller, chunk);
    }
    /**
   * @param {Controller} controller
   * @param {Record<string, string | string[]> | undefined} trailers
   * @returns {void}
   */ onResponseEnd(controller, trailers) {
        if (this.#decompressors.length > 0) {
            this.#decompressors[0].end();
            this.#cleanupDecompressors();
            return;
        }
        super.onResponseEnd(controller, trailers);
    }
    /**
   * @param {Controller} controller
   * @param {Error} err
   * @returns {void}
   */ onResponseError(controller, err) {
        if (this.#decompressors.length > 0) {
            for (const decompressor of this.#decompressors){
                decompressor.destroy(err);
            }
            this.#cleanupDecompressors();
        }
        super.onResponseError(controller, err);
    }
}
/**
 * Creates a decompression interceptor for HTTP responses
 * @param {DecompressHandlerOptions} [options] - Options for the interceptor
 * @returns {Function} - Interceptor function
 */ function createDecompressInterceptor(options = {}) {
    // Emit experimental warning only once
    if (!warningEmitted) {
        process.emitWarning('DecompressInterceptor is experimental and subject to change', 'ExperimentalWarning');
        warningEmitted = true;
    }
    return (dispatch)=>{
        return (opts, handler)=>{
            const decompressHandler = new DecompressHandler(handler, options);
            return dispatch(opts, decompressHandler);
        };
    };
}
module.exports = createDecompressInterceptor;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/cache/memory-cache-store.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { EventEmitter } = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const { assertCacheKey, assertCacheValue } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/cache.js [app-rsc] (ecmascript)");
/**
 * @typedef {import('../../types/cache-interceptor.d.ts').default.CacheKey} CacheKey
 * @typedef {import('../../types/cache-interceptor.d.ts').default.CacheValue} CacheValue
 * @typedef {import('../../types/cache-interceptor.d.ts').default.CacheStore} CacheStore
 * @typedef {import('../../types/cache-interceptor.d.ts').default.GetResult} GetResult
 */ /**
 * @implements {CacheStore}
 * @extends {EventEmitter}
 */ class MemoryCacheStore extends EventEmitter {
    #maxCount = 1024;
    #maxSize = 104857600 // 100MB
    ;
    #maxEntrySize = 5242880 // 5MB
    ;
    #size = 0;
    #count = 0;
    #entries = new Map();
    #hasEmittedMaxSizeEvent = false;
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.MemoryCacheStoreOpts | undefined} [opts]
   */ constructor(opts){
        super();
        if (opts) {
            if (typeof opts !== 'object') {
                throw new TypeError('MemoryCacheStore options must be an object');
            }
            if (opts.maxCount !== undefined) {
                if (typeof opts.maxCount !== 'number' || !Number.isInteger(opts.maxCount) || opts.maxCount < 0) {
                    throw new TypeError('MemoryCacheStore options.maxCount must be a non-negative integer');
                }
                this.#maxCount = opts.maxCount;
            }
            if (opts.maxSize !== undefined) {
                if (typeof opts.maxSize !== 'number' || !Number.isInteger(opts.maxSize) || opts.maxSize < 0) {
                    throw new TypeError('MemoryCacheStore options.maxSize must be a non-negative integer');
                }
                this.#maxSize = opts.maxSize;
            }
            if (opts.maxEntrySize !== undefined) {
                if (typeof opts.maxEntrySize !== 'number' || !Number.isInteger(opts.maxEntrySize) || opts.maxEntrySize < 0) {
                    throw new TypeError('MemoryCacheStore options.maxEntrySize must be a non-negative integer');
                }
                this.#maxEntrySize = opts.maxEntrySize;
            }
        }
    }
    /**
   * Get the current size of the cache in bytes
   * @returns {number} The current size of the cache in bytes
   */ get size() {
        return this.#size;
    }
    /**
   * Check if the cache is full (either max size or max count reached)
   * @returns {boolean} True if the cache is full, false otherwise
   */ isFull() {
        return this.#size >= this.#maxSize || this.#count >= this.#maxCount;
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} req
   * @returns {import('../../types/cache-interceptor.d.ts').default.GetResult | undefined}
   */ get(key) {
        assertCacheKey(key);
        const topLevelKey = `${key.origin}:${key.path}`;
        const now = Date.now();
        const entries = this.#entries.get(topLevelKey);
        const entry = entries ? findEntry(key, entries, now) : null;
        return entry == null ? undefined : {
            statusMessage: entry.statusMessage,
            statusCode: entry.statusCode,
            headers: entry.headers,
            body: entry.body,
            vary: entry.vary ? entry.vary : undefined,
            etag: entry.etag,
            cacheControlDirectives: entry.cacheControlDirectives,
            cachedAt: entry.cachedAt,
            staleAt: entry.staleAt,
            deleteAt: entry.deleteAt
        };
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} key
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheValue} val
   * @returns {Writable | undefined}
   */ createWriteStream(key, val) {
        assertCacheKey(key);
        assertCacheValue(val);
        const topLevelKey = `${key.origin}:${key.path}`;
        const store = this;
        const entry = {
            ...key,
            ...val,
            body: [],
            size: 0
        };
        return new Writable({
            write (chunk, encoding, callback) {
                if (typeof chunk === 'string') {
                    chunk = Buffer.from(chunk, encoding);
                }
                entry.size += chunk.byteLength;
                if (entry.size >= store.#maxEntrySize) {
                    this.destroy();
                } else {
                    entry.body.push(chunk);
                }
                callback(null);
            },
            final (callback) {
                let entries = store.#entries.get(topLevelKey);
                if (!entries) {
                    entries = [];
                    store.#entries.set(topLevelKey, entries);
                }
                const previousEntry = findEntry(key, entries, Date.now());
                if (previousEntry) {
                    const index = entries.indexOf(previousEntry);
                    entries.splice(index, 1, entry);
                    store.#size -= previousEntry.size;
                } else {
                    entries.push(entry);
                    store.#count += 1;
                }
                store.#size += entry.size;
                // Check if cache is full and emit event if needed
                if (store.#size > store.#maxSize || store.#count > store.#maxCount) {
                    // Emit maxSizeExceeded event if we haven't already
                    if (!store.#hasEmittedMaxSizeEvent) {
                        store.emit('maxSizeExceeded', {
                            size: store.#size,
                            maxSize: store.#maxSize,
                            count: store.#count,
                            maxCount: store.#maxCount
                        });
                        store.#hasEmittedMaxSizeEvent = true;
                    }
                    // Perform eviction
                    for (const [key, entries] of store.#entries){
                        for (const entry of entries.splice(0, entries.length / 2)){
                            store.#size -= entry.size;
                            store.#count -= 1;
                        }
                        if (entries.length === 0) {
                            store.#entries.delete(key);
                        }
                    }
                    // Reset the event flag after eviction
                    if (store.#size < store.#maxSize && store.#count < store.#maxCount) {
                        store.#hasEmittedMaxSizeEvent = false;
                    }
                }
                callback(null);
            }
        });
    }
    /**
   * @param {CacheKey} key
   */ delete(key) {
        if (typeof key !== 'object') {
            throw new TypeError(`expected key to be object, got ${typeof key}`);
        }
        const topLevelKey = `${key.origin}:${key.path}`;
        for (const entry of this.#entries.get(topLevelKey) ?? []){
            this.#size -= entry.size;
            this.#count -= 1;
        }
        this.#entries.delete(topLevelKey);
    }
}
function findEntry(key, entries, now) {
    return entries.find((entry)=>entry.deleteAt > now && entry.method === key.method && (entry.vary == null || Object.keys(entry.vary).every((headerName)=>{
            if (entry.vary[headerName] === null) {
                return key.headers[headerName] === undefined;
            }
            return entry.vary[headerName] === key.headers[headerName];
        })));
}
module.exports = MemoryCacheStore;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/cache/sqlite-cache-store.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { Writable } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const { assertCacheKey, assertCacheValue } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/cache.js [app-rsc] (ecmascript)");
let DatabaseSync;
const VERSION = 3;
// 2gb
const MAX_ENTRY_SIZE = 2 * 1000 * 1000 * 1000;
/**
 * @typedef {import('../../types/cache-interceptor.d.ts').default.CacheStore} CacheStore
 * @implements {CacheStore}
 *
 * @typedef {{
 *  id: Readonly<number>,
 *  body?: Uint8Array
 *  statusCode: number
 *  statusMessage: string
 *  headers?: string
 *  vary?: string
 *  etag?: string
 *  cacheControlDirectives?: string
 *  cachedAt: number
 *  staleAt: number
 *  deleteAt: number
 * }} SqliteStoreValue
 */ module.exports = class SqliteCacheStore {
    #maxEntrySize = MAX_ENTRY_SIZE;
    #maxCount = Infinity;
    /**
   * @type {import('node:sqlite').DatabaseSync}
   */ #db;
    /**
   * @type {import('node:sqlite').StatementSync}
   */ #getValuesQuery;
    /**
   * @type {import('node:sqlite').StatementSync}
   */ #updateValueQuery;
    /**
   * @type {import('node:sqlite').StatementSync}
   */ #insertValueQuery;
    /**
   * @type {import('node:sqlite').StatementSync}
   */ #deleteExpiredValuesQuery;
    /**
   * @type {import('node:sqlite').StatementSync}
   */ #deleteByUrlQuery;
    /**
   * @type {import('node:sqlite').StatementSync}
   */ #countEntriesQuery;
    /**
   * @type {import('node:sqlite').StatementSync | null}
   */ #deleteOldValuesQuery;
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.SqliteCacheStoreOpts | undefined} opts
   */ constructor(opts){
        if (opts) {
            if (typeof opts !== 'object') {
                throw new TypeError('SqliteCacheStore options must be an object');
            }
            if (opts.maxEntrySize !== undefined) {
                if (typeof opts.maxEntrySize !== 'number' || !Number.isInteger(opts.maxEntrySize) || opts.maxEntrySize < 0) {
                    throw new TypeError('SqliteCacheStore options.maxEntrySize must be a non-negative integer');
                }
                if (opts.maxEntrySize > MAX_ENTRY_SIZE) {
                    throw new TypeError('SqliteCacheStore options.maxEntrySize must be less than 2gb');
                }
                this.#maxEntrySize = opts.maxEntrySize;
            }
            if (opts.maxCount !== undefined) {
                if (typeof opts.maxCount !== 'number' || !Number.isInteger(opts.maxCount) || opts.maxCount < 0) {
                    throw new TypeError('SqliteCacheStore options.maxCount must be a non-negative integer');
                }
                this.#maxCount = opts.maxCount;
            }
        }
        if (!DatabaseSync) {
            DatabaseSync = (()=>{
                const e = new Error("Cannot find module 'node:sqlite': Unsupported external type Url for commonjs reference");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })().DatabaseSync;
        }
        this.#db = new DatabaseSync(opts?.location ?? ':memory:');
        this.#db.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA synchronous = NORMAL;
      PRAGMA temp_store = memory;
      PRAGMA optimize;

      CREATE TABLE IF NOT EXISTS cacheInterceptorV${VERSION} (
        -- Data specific to us
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL,
        method TEXT NOT NULL,

        -- Data returned to the interceptor
        body BUF NULL,
        deleteAt INTEGER NOT NULL,
        statusCode INTEGER NOT NULL,
        statusMessage TEXT NOT NULL,
        headers TEXT NULL,
        cacheControlDirectives TEXT NULL,
        etag TEXT NULL,
        vary TEXT NULL,
        cachedAt INTEGER NOT NULL,
        staleAt INTEGER NOT NULL
      );

      CREATE INDEX IF NOT EXISTS idx_cacheInterceptorV${VERSION}_getValuesQuery ON cacheInterceptorV${VERSION}(url, method, deleteAt);
      CREATE INDEX IF NOT EXISTS idx_cacheInterceptorV${VERSION}_deleteByUrlQuery ON cacheInterceptorV${VERSION}(deleteAt);
    `);
        this.#getValuesQuery = this.#db.prepare(`
      SELECT
        id,
        body,
        deleteAt,
        statusCode,
        statusMessage,
        headers,
        etag,
        cacheControlDirectives,
        vary,
        cachedAt,
        staleAt
      FROM cacheInterceptorV${VERSION}
      WHERE
        url = ?
        AND method = ?
      ORDER BY
        deleteAt ASC
    `);
        this.#updateValueQuery = this.#db.prepare(`
      UPDATE cacheInterceptorV${VERSION} SET
        body = ?,
        deleteAt = ?,
        statusCode = ?,
        statusMessage = ?,
        headers = ?,
        etag = ?,
        cacheControlDirectives = ?,
        cachedAt = ?,
        staleAt = ?
      WHERE
        id = ?
    `);
        this.#insertValueQuery = this.#db.prepare(`
      INSERT INTO cacheInterceptorV${VERSION} (
        url,
        method,
        body,
        deleteAt,
        statusCode,
        statusMessage,
        headers,
        etag,
        cacheControlDirectives,
        vary,
        cachedAt,
        staleAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
        this.#deleteByUrlQuery = this.#db.prepare(`DELETE FROM cacheInterceptorV${VERSION} WHERE url = ?`);
        this.#countEntriesQuery = this.#db.prepare(`SELECT COUNT(*) AS total FROM cacheInterceptorV${VERSION}`);
        this.#deleteExpiredValuesQuery = this.#db.prepare(`DELETE FROM cacheInterceptorV${VERSION} WHERE deleteAt <= ?`);
        this.#deleteOldValuesQuery = this.#maxCount === Infinity ? null : this.#db.prepare(`
        DELETE FROM cacheInterceptorV${VERSION}
        WHERE id IN (
          SELECT
            id
          FROM cacheInterceptorV${VERSION}
          ORDER BY cachedAt DESC
          LIMIT ?
        )
      `);
    }
    close() {
        this.#db.close();
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} key
   * @returns {(import('../../types/cache-interceptor.d.ts').default.GetResult & { body?: Buffer }) | undefined}
   */ get(key) {
        assertCacheKey(key);
        const value = this.#findValue(key);
        return value ? {
            body: value.body ? Buffer.from(value.body.buffer, value.body.byteOffset, value.body.byteLength) : undefined,
            statusCode: value.statusCode,
            statusMessage: value.statusMessage,
            headers: value.headers ? JSON.parse(value.headers) : undefined,
            etag: value.etag ? value.etag : undefined,
            vary: value.vary ? JSON.parse(value.vary) : undefined,
            cacheControlDirectives: value.cacheControlDirectives ? JSON.parse(value.cacheControlDirectives) : undefined,
            cachedAt: value.cachedAt,
            staleAt: value.staleAt,
            deleteAt: value.deleteAt
        } : undefined;
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} key
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheValue & { body: null | Buffer | Array<Buffer>}} value
   */ set(key, value) {
        assertCacheKey(key);
        const url = this.#makeValueUrl(key);
        const body = Array.isArray(value.body) ? Buffer.concat(value.body) : value.body;
        const size = body?.byteLength;
        if (size && size > this.#maxEntrySize) {
            return;
        }
        const existingValue = this.#findValue(key, true);
        if (existingValue) {
            // Updating an existing response, let's overwrite it
            this.#updateValueQuery.run(body, value.deleteAt, value.statusCode, value.statusMessage, value.headers ? JSON.stringify(value.headers) : null, value.etag ? value.etag : null, value.cacheControlDirectives ? JSON.stringify(value.cacheControlDirectives) : null, value.cachedAt, value.staleAt, existingValue.id);
        } else {
            this.#prune();
            // New response, let's insert it
            this.#insertValueQuery.run(url, key.method, body, value.deleteAt, value.statusCode, value.statusMessage, value.headers ? JSON.stringify(value.headers) : null, value.etag ? value.etag : null, value.cacheControlDirectives ? JSON.stringify(value.cacheControlDirectives) : null, value.vary ? JSON.stringify(value.vary) : null, value.cachedAt, value.staleAt);
        }
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} key
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheValue} value
   * @returns {Writable | undefined}
   */ createWriteStream(key, value) {
        assertCacheKey(key);
        assertCacheValue(value);
        let size = 0;
        /**
     * @type {Buffer[] | null}
     */ const body = [];
        const store = this;
        return new Writable({
            decodeStrings: true,
            write (chunk, encoding, callback) {
                size += chunk.byteLength;
                if (size < store.#maxEntrySize) {
                    body.push(chunk);
                } else {
                    this.destroy();
                }
                callback();
            },
            final (callback) {
                store.set(key, {
                    ...value,
                    body
                });
                callback();
            }
        });
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} key
   */ delete(key) {
        if (typeof key !== 'object') {
            throw new TypeError(`expected key to be object, got ${typeof key}`);
        }
        this.#deleteByUrlQuery.run(this.#makeValueUrl(key));
    }
    #prune() {
        if (Number.isFinite(this.#maxCount) && this.size <= this.#maxCount) {
            return 0;
        }
        {
            const removed = this.#deleteExpiredValuesQuery.run(Date.now()).changes;
            if (removed) {
                return removed;
            }
        }
        {
            const removed = this.#deleteOldValuesQuery?.run(Math.max(Math.floor(this.#maxCount * 0.1), 1)).changes;
            if (removed) {
                return removed;
            }
        }
        return 0;
    }
    /**
   * Counts the number of rows in the cache
   * @returns {Number}
   */ get size() {
        const { total } = this.#countEntriesQuery.get();
        return total;
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} key
   * @returns {string}
   */ #makeValueUrl(key) {
        return `${key.origin}/${key.path}`;
    }
    /**
   * @param {import('../../types/cache-interceptor.d.ts').default.CacheKey} key
   * @param {boolean} [canBeExpired=false]
   * @returns {SqliteStoreValue | undefined}
   */ #findValue(key, canBeExpired = false) {
        const url = this.#makeValueUrl(key);
        const { headers, method } = key;
        /**
     * @type {SqliteStoreValue[]}
     */ const values = this.#getValuesQuery.all(url, method);
        if (values.length === 0) {
            return undefined;
        }
        const now = Date.now();
        for (const value of values){
            if (now >= value.deleteAt && !canBeExpired) {
                return undefined;
            }
            let matches = true;
            if (value.vary) {
                const vary = JSON.parse(value.vary);
                for(const header in vary){
                    if (!headerValueEquals(headers[header], vary[header])) {
                        matches = false;
                        break;
                    }
                }
            }
            if (matches) {
                return value;
            }
        }
        return undefined;
    }
};
/**
 * @param {string|string[]|null|undefined} lhs
 * @param {string|string[]|null|undefined} rhs
 * @returns {boolean}
 */ function headerValueEquals(lhs, rhs) {
    if (lhs == null && rhs == null) {
        return true;
    }
    if (lhs == null && rhs != null || lhs != null && rhs == null) {
        return false;
    }
    if (Array.isArray(lhs) && Array.isArray(rhs)) {
        if (lhs.length !== rhs.length) {
            return false;
        }
        return lhs.every((x, i)=>x === rhs[i]);
    }
    return lhs === rhs;
}
}),
];

//# sourceMappingURL=646fa_undici_lib_e1fc883a._.js.map