module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const EventEmitter = __turbopack_context__.r("[externals]/node:events [external] (node:events, cjs)");
const WrapHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/wrap-handler.js [app-ssr] (ecmascript)");
const wrapInterceptor = (dispatch)=>(opts, handler)=>dispatch(opts, WrapHandler.wrap(handler));
class Dispatcher extends EventEmitter {
    dispatch() {
        throw new Error('not implemented');
    }
    close() {
        throw new Error('not implemented');
    }
    destroy() {
        throw new Error('not implemented');
    }
    compose(...args) {
        // So we handle [interceptor1, interceptor2] or interceptor1, interceptor2, ...
        const interceptors = Array.isArray(args[0]) ? args[0] : args;
        let dispatch = this.dispatch.bind(this);
        for (const interceptor of interceptors){
            if (interceptor == null) {
                continue;
            }
            if (typeof interceptor !== 'function') {
                throw new TypeError(`invalid interceptor, expected function received ${typeof interceptor}`);
            }
            dispatch = interceptor(dispatch);
            dispatch = wrapInterceptor(dispatch);
            if (dispatch == null || typeof dispatch !== 'function' || dispatch.length !== 2) {
                throw new TypeError('invalid interceptor');
            }
        }
        return new Proxy(this, {
            get: (target, key)=>key === 'dispatch' ? dispatch : target[key]
        });
    }
}
module.exports = Dispatcher;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher-base.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Dispatcher = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher.js [app-ssr] (ecmascript)");
const UnwrapHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/unwrap-handler.js [app-ssr] (ecmascript)");
const { ClientDestroyedError, ClientClosedError, InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const { kDestroy, kClose, kClosed, kDestroyed, kDispatch } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const kOnDestroyed = Symbol('onDestroyed');
const kOnClosed = Symbol('onClosed');
class DispatcherBase extends Dispatcher {
    /** @type {boolean} */ [kDestroyed] = false;
    /** @type {Array|null} */ [kOnDestroyed] = null;
    /** @type {boolean} */ [kClosed] = false;
    /** @type {Array} */ [kOnClosed] = [];
    /** @returns {boolean} */ get destroyed() {
        return this[kDestroyed];
    }
    /** @returns {boolean} */ get closed() {
        return this[kClosed];
    }
    close(callback) {
        if (callback === undefined) {
            return new Promise((resolve, reject)=>{
                this.close((err, data)=>{
                    return err ? reject(err) : resolve(data);
                });
            });
        }
        if (typeof callback !== 'function') {
            throw new InvalidArgumentError('invalid callback');
        }
        if (this[kDestroyed]) {
            queueMicrotask(()=>callback(new ClientDestroyedError(), null));
            return;
        }
        if (this[kClosed]) {
            if (this[kOnClosed]) {
                this[kOnClosed].push(callback);
            } else {
                queueMicrotask(()=>callback(null, null));
            }
            return;
        }
        this[kClosed] = true;
        this[kOnClosed].push(callback);
        const onClosed = ()=>{
            const callbacks = this[kOnClosed];
            this[kOnClosed] = null;
            for(let i = 0; i < callbacks.length; i++){
                callbacks[i](null, null);
            }
        };
        // Should not error.
        this[kClose]().then(()=>this.destroy()).then(()=>{
            queueMicrotask(onClosed);
        });
    }
    destroy(err, callback) {
        if (typeof err === 'function') {
            callback = err;
            err = null;
        }
        if (callback === undefined) {
            return new Promise((resolve, reject)=>{
                this.destroy(err, (err, data)=>{
                    return err ? /* istanbul ignore next: should never error */ reject(err) : resolve(data);
                });
            });
        }
        if (typeof callback !== 'function') {
            throw new InvalidArgumentError('invalid callback');
        }
        if (this[kDestroyed]) {
            if (this[kOnDestroyed]) {
                this[kOnDestroyed].push(callback);
            } else {
                queueMicrotask(()=>callback(null, null));
            }
            return;
        }
        if (!err) {
            err = new ClientDestroyedError();
        }
        this[kDestroyed] = true;
        this[kOnDestroyed] = this[kOnDestroyed] || [];
        this[kOnDestroyed].push(callback);
        const onDestroyed = ()=>{
            const callbacks = this[kOnDestroyed];
            this[kOnDestroyed] = null;
            for(let i = 0; i < callbacks.length; i++){
                callbacks[i](null, null);
            }
        };
        // Should not error.
        this[kDestroy](err).then(()=>{
            queueMicrotask(onDestroyed);
        });
    }
    dispatch(opts, handler) {
        if (!handler || typeof handler !== 'object') {
            throw new InvalidArgumentError('handler must be an object');
        }
        handler = UnwrapHandler.unwrap(handler);
        try {
            if (!opts || typeof opts !== 'object') {
                throw new InvalidArgumentError('opts must be an object.');
            }
            if (this[kDestroyed] || this[kOnDestroyed]) {
                throw new ClientDestroyedError();
            }
            if (this[kClosed]) {
                throw new ClientClosedError();
            }
            return this[kDispatch](opts, handler);
        } catch (err) {
            if (typeof handler.onError !== 'function') {
                throw err;
            }
            handler.onError(err);
            return false;
        }
    }
}
module.exports = DispatcherBase;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client-h1.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* global WebAssembly */ const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const { channels } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/diagnostics.js [app-ssr] (ecmascript)");
const timers = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/timers.js [app-ssr] (ecmascript)");
const { RequestContentLengthMismatchError, ResponseContentLengthMismatchError, RequestAbortedError, HeadersTimeoutError, HeadersOverflowError, SocketError, InformationalError, BodyTimeoutError, HTTPParserError, ResponseExceededMaxSizeError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const { kUrl, kReset, kClient, kParser, kBlocking, kRunning, kPending, kSize, kWriting, kQueue, kNoRef, kKeepAliveDefaultTimeout, kHostHeader, kPendingIdx, kRunningIdx, kError, kPipelining, kSocket, kKeepAliveTimeoutValue, kMaxHeadersSize, kKeepAliveMaxTimeout, kKeepAliveTimeoutThreshold, kHeadersTimeout, kBodyTimeout, kStrictContentLength, kMaxRequests, kCounter, kMaxResponseSize, kOnError, kResume, kHTTPContext, kClosed } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const constants = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/llhttp/constants.js [app-ssr] (ecmascript)");
const EMPTY_BUF = Buffer.alloc(0);
const FastBuffer = Buffer[Symbol.species];
const removeAllListeners = util.removeAllListeners;
let extractBody;
function lazyllhttp() {
    const llhttpWasmData = process.env.JEST_WORKER_ID ? __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/llhttp/llhttp-wasm.js [app-ssr] (ecmascript)") : undefined;
    let mod;
    // We disable wasm SIMD on ppc64 as it seems to be broken on Power 9 architectures.
    let useWasmSIMD = process.arch !== 'ppc64';
    // The Env Variable UNDICI_NO_WASM_SIMD allows explicitly overriding the default behavior
    if (process.env.UNDICI_NO_WASM_SIMD === '1') {
        useWasmSIMD = true;
    } else if (process.env.UNDICI_NO_WASM_SIMD === '0') {
        useWasmSIMD = false;
    }
    if (useWasmSIMD) {
        try {
            mod = new WebAssembly.Module(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/llhttp/llhttp_simd-wasm.js [app-ssr] (ecmascript)"));
        /* istanbul ignore next */ } catch  {}
    }
    /* istanbul ignore next */ if (!mod) {
        // We could check if the error was caused by the simd option not
        // being enabled, but the occurring of this other error
        // * https://github.com/emscripten-core/emscripten/issues/11495
        // got me to remove that check to avoid breaking Node 12.
        mod = new WebAssembly.Module(llhttpWasmData || __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/llhttp/llhttp-wasm.js [app-ssr] (ecmascript)"));
    }
    return new WebAssembly.Instance(mod, {
        env: {
            /**
       * @param {number} p
       * @param {number} at
       * @param {number} len
       * @returns {number}
       */ wasm_on_url: (p, at, len)=>{
                /* istanbul ignore next */ return 0;
            },
            /**
       * @param {number} p
       * @param {number} at
       * @param {number} len
       * @returns {number}
       */ wasm_on_status: (p, at, len)=>{
                assert(currentParser.ptr === p);
                const start = at - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onStatus(new FastBuffer(currentBufferRef.buffer, start, len));
            },
            /**
       * @param {number} p
       * @returns {number}
       */ wasm_on_message_begin: (p)=>{
                assert(currentParser.ptr === p);
                return currentParser.onMessageBegin();
            },
            /**
       * @param {number} p
       * @param {number} at
       * @param {number} len
       * @returns {number}
       */ wasm_on_header_field: (p, at, len)=>{
                assert(currentParser.ptr === p);
                const start = at - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onHeaderField(new FastBuffer(currentBufferRef.buffer, start, len));
            },
            /**
       * @param {number} p
       * @param {number} at
       * @param {number} len
       * @returns {number}
       */ wasm_on_header_value: (p, at, len)=>{
                assert(currentParser.ptr === p);
                const start = at - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onHeaderValue(new FastBuffer(currentBufferRef.buffer, start, len));
            },
            /**
       * @param {number} p
       * @param {number} statusCode
       * @param {0|1} upgrade
       * @param {0|1} shouldKeepAlive
       * @returns {number}
       */ wasm_on_headers_complete: (p, statusCode, upgrade, shouldKeepAlive)=>{
                assert(currentParser.ptr === p);
                return currentParser.onHeadersComplete(statusCode, upgrade === 1, shouldKeepAlive === 1);
            },
            /**
       * @param {number} p
       * @param {number} at
       * @param {number} len
       * @returns {number}
       */ wasm_on_body: (p, at, len)=>{
                assert(currentParser.ptr === p);
                const start = at - currentBufferPtr + currentBufferRef.byteOffset;
                return currentParser.onBody(new FastBuffer(currentBufferRef.buffer, start, len));
            },
            /**
       * @param {number} p
       * @returns {number}
       */ wasm_on_message_complete: (p)=>{
                assert(currentParser.ptr === p);
                return currentParser.onMessageComplete();
            }
        }
    });
}
let llhttpInstance = null;
/**
 * @type {Parser|null}
 */ let currentParser = null;
let currentBufferRef = null;
/**
 * @type {number}
 */ let currentBufferSize = 0;
let currentBufferPtr = null;
const USE_NATIVE_TIMER = 0;
const USE_FAST_TIMER = 1;
// Use fast timers for headers and body to take eventual event loop
// latency into account.
const TIMEOUT_HEADERS = 2 | USE_FAST_TIMER;
const TIMEOUT_BODY = 4 | USE_FAST_TIMER;
// Use native timers to ignore event loop latency for keep-alive
// handling.
const TIMEOUT_KEEP_ALIVE = 8 | USE_NATIVE_TIMER;
class Parser {
    /**
     * @param {import('./client.js')} client
     * @param {import('net').Socket} socket
     * @param {*} llhttp
     */ constructor(client, socket, { exports }){
        this.llhttp = exports;
        this.ptr = this.llhttp.llhttp_alloc(constants.TYPE.RESPONSE);
        this.client = client;
        /**
     * @type {import('net').Socket}
     */ this.socket = socket;
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.statusCode = 0;
        this.statusText = '';
        this.upgrade = false;
        this.headers = [];
        this.headersSize = 0;
        this.headersMaxSize = client[kMaxHeadersSize];
        this.shouldKeepAlive = false;
        this.paused = false;
        this.resume = this.resume.bind(this);
        this.bytesRead = 0;
        this.keepAlive = '';
        this.contentLength = '';
        this.connection = '';
        this.maxResponseSize = client[kMaxResponseSize];
    }
    setTimeout(delay, type) {
        // If the existing timer and the new timer are of different timer type
        // (fast or native) or have different delay, we need to clear the existing
        // timer and set a new one.
        if (delay !== this.timeoutValue || type & USE_FAST_TIMER ^ this.timeoutType & USE_FAST_TIMER) {
            // If a timeout is already set, clear it with clearTimeout of the fast
            // timer implementation, as it can clear fast and native timers.
            if (this.timeout) {
                timers.clearTimeout(this.timeout);
                this.timeout = null;
            }
            if (delay) {
                if (type & USE_FAST_TIMER) {
                    this.timeout = timers.setFastTimeout(onParserTimeout, delay, new WeakRef(this));
                } else {
                    this.timeout = setTimeout(onParserTimeout, delay, new WeakRef(this));
                    this.timeout?.unref();
                }
            }
            this.timeoutValue = delay;
        } else if (this.timeout) {
            // istanbul ignore else: only for jest
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        this.timeoutType = type;
    }
    resume() {
        if (this.socket.destroyed || !this.paused) {
            return;
        }
        assert(this.ptr != null);
        assert(currentParser === null);
        this.llhttp.llhttp_resume(this.ptr);
        assert(this.timeoutType === TIMEOUT_BODY);
        if (this.timeout) {
            // istanbul ignore else: only for jest
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        this.paused = false;
        this.execute(this.socket.read() || EMPTY_BUF); // Flush parser.
        this.readMore();
    }
    readMore() {
        while(!this.paused && this.ptr){
            const chunk = this.socket.read();
            if (chunk === null) {
                break;
            }
            this.execute(chunk);
        }
    }
    /**
   * @param {Buffer} chunk
   */ execute(chunk) {
        assert(currentParser === null);
        assert(this.ptr != null);
        assert(!this.paused);
        const { socket, llhttp } = this;
        // Allocate a new buffer if the current buffer is too small.
        if (chunk.length > currentBufferSize) {
            if (currentBufferPtr) {
                llhttp.free(currentBufferPtr);
            }
            // Allocate a buffer that is a multiple of 4096 bytes.
            currentBufferSize = Math.ceil(chunk.length / 4096) * 4096;
            currentBufferPtr = llhttp.malloc(currentBufferSize);
        }
        new Uint8Array(llhttp.memory.buffer, currentBufferPtr, currentBufferSize).set(chunk);
        // Call `execute` on the wasm parser.
        // We pass the `llhttp_parser` pointer address, the pointer address of buffer view data,
        // and finally the length of bytes to parse.
        // The return value is an error code or `constants.ERROR.OK`.
        try {
            let ret;
            try {
                currentBufferRef = chunk;
                currentParser = this;
                ret = llhttp.llhttp_execute(this.ptr, currentBufferPtr, chunk.length);
            } finally{
                currentParser = null;
                currentBufferRef = null;
            }
            if (ret !== constants.ERROR.OK) {
                const data = chunk.subarray(llhttp.llhttp_get_error_pos(this.ptr) - currentBufferPtr);
                if (ret === constants.ERROR.PAUSED_UPGRADE) {
                    this.onUpgrade(data);
                } else if (ret === constants.ERROR.PAUSED) {
                    this.paused = true;
                    socket.unshift(data);
                } else {
                    const ptr = llhttp.llhttp_get_error_reason(this.ptr);
                    let message = '';
                    /* istanbul ignore else: difficult to make a test case for */ if (ptr) {
                        const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
                        message = 'Response does not match the HTTP/1.1 protocol (' + Buffer.from(llhttp.memory.buffer, ptr, len).toString() + ')';
                    }
                    throw new HTTPParserError(message, constants.ERROR[ret], data);
                }
            }
        } catch (err) {
            util.destroy(socket, err);
        }
    }
    destroy() {
        assert(currentParser === null);
        assert(this.ptr != null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        this.timeout && timers.clearTimeout(this.timeout);
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.paused = false;
    }
    /**
   * @param {Buffer} buf
   * @returns {0}
   */ onStatus(buf) {
        this.statusText = buf.toString();
        return 0;
    }
    /**
   * @returns {0|-1}
   */ onMessageBegin() {
        const { socket, client } = this;
        /* istanbul ignore next: difficult to make a test case for */ if (socket.destroyed) {
            return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        if (!request) {
            return -1;
        }
        request.onResponseStarted();
        return 0;
    }
    /**
   * @param {Buffer} buf
   * @returns {number}
   */ onHeaderField(buf) {
        const len = this.headers.length;
        if ((len & 1) === 0) {
            this.headers.push(buf);
        } else {
            this.headers[len - 1] = Buffer.concat([
                this.headers[len - 1],
                buf
            ]);
        }
        this.trackHeader(buf.length);
        return 0;
    }
    /**
   * @param {Buffer} buf
   * @returns {number}
   */ onHeaderValue(buf) {
        let len = this.headers.length;
        if ((len & 1) === 1) {
            this.headers.push(buf);
            len += 1;
        } else {
            this.headers[len - 1] = Buffer.concat([
                this.headers[len - 1],
                buf
            ]);
        }
        const key = this.headers[len - 2];
        if (key.length === 10) {
            const headerName = util.bufferToLowerCasedHeaderName(key);
            if (headerName === 'keep-alive') {
                this.keepAlive += buf.toString();
            } else if (headerName === 'connection') {
                this.connection += buf.toString();
            }
        } else if (key.length === 14 && util.bufferToLowerCasedHeaderName(key) === 'content-length') {
            this.contentLength += buf.toString();
        }
        this.trackHeader(buf.length);
        return 0;
    }
    /**
   * @param {number} len
   */ trackHeader(len) {
        this.headersSize += len;
        if (this.headersSize >= this.headersMaxSize) {
            util.destroy(this.socket, new HeadersOverflowError());
        }
    }
    /**
   * @param {Buffer} head
   */ onUpgrade(head) {
        const { upgrade, client, socket, headers, statusCode } = this;
        assert(upgrade);
        assert(client[kSocket] === socket);
        assert(!socket.destroyed);
        assert(!this.paused);
        assert((headers.length & 1) === 0);
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert(request.upgrade || request.method === 'CONNECT');
        this.statusCode = 0;
        this.statusText = '';
        this.shouldKeepAlive = false;
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[kParser].destroy();
        socket[kParser] = null;
        socket[kClient] = null;
        socket[kError] = null;
        removeAllListeners(socket);
        client[kSocket] = null;
        client[kHTTPContext] = null; // TODO (fix): This is hacky...
        client[kQueue][client[kRunningIdx]++] = null;
        client.emit('disconnect', client[kUrl], [
            client
        ], new InformationalError('upgrade'));
        try {
            request.onUpgrade(statusCode, headers, socket);
        } catch (err) {
            util.destroy(socket, err);
        }
        client[kResume]();
    }
    /**
   * @param {number} statusCode
   * @param {boolean} upgrade
   * @param {boolean} shouldKeepAlive
   * @returns {number}
   */ onHeadersComplete(statusCode, upgrade, shouldKeepAlive) {
        const { client, socket, headers, statusText } = this;
        /* istanbul ignore next: difficult to make a test case for */ if (socket.destroyed) {
            return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        /* istanbul ignore next: difficult to make a test case for */ if (!request) {
            return -1;
        }
        assert(!this.upgrade);
        assert(this.statusCode < 200);
        if (statusCode === 100) {
            util.destroy(socket, new SocketError('bad response', util.getSocketInfo(socket)));
            return -1;
        }
        /* this can only happen if server is misbehaving */ if (upgrade && !request.upgrade) {
            util.destroy(socket, new SocketError('bad upgrade', util.getSocketInfo(socket)));
            return -1;
        }
        assert(this.timeoutType === TIMEOUT_HEADERS);
        this.statusCode = statusCode;
        this.shouldKeepAlive = shouldKeepAlive || request.method === 'HEAD' && !socket[kReset] && this.connection.toLowerCase() === 'keep-alive';
        if (this.statusCode >= 200) {
            const bodyTimeout = request.bodyTimeout != null ? request.bodyTimeout : client[kBodyTimeout];
            this.setTimeout(bodyTimeout, TIMEOUT_BODY);
        } else if (this.timeout) {
            // istanbul ignore else: only for jest
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        if (request.method === 'CONNECT') {
            assert(client[kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        if (upgrade) {
            assert(client[kRunning] === 1);
            this.upgrade = true;
            return 2;
        }
        assert((this.headers.length & 1) === 0);
        this.headers = [];
        this.headersSize = 0;
        if (this.shouldKeepAlive && client[kPipelining]) {
            const keepAliveTimeout = this.keepAlive ? util.parseKeepAliveTimeout(this.keepAlive) : null;
            if (keepAliveTimeout != null) {
                const timeout = Math.min(keepAliveTimeout - client[kKeepAliveTimeoutThreshold], client[kKeepAliveMaxTimeout]);
                if (timeout <= 0) {
                    socket[kReset] = true;
                } else {
                    client[kKeepAliveTimeoutValue] = timeout;
                }
            } else {
                client[kKeepAliveTimeoutValue] = client[kKeepAliveDefaultTimeout];
            }
        } else {
            // Stop more requests from being dispatched.
            socket[kReset] = true;
        }
        const pause = request.onHeaders(statusCode, headers, this.resume, statusText) === false;
        if (request.aborted) {
            return -1;
        }
        if (request.method === 'HEAD') {
            return 1;
        }
        if (statusCode < 200) {
            return 1;
        }
        if (socket[kBlocking]) {
            socket[kBlocking] = false;
            client[kResume]();
        }
        return pause ? constants.ERROR.PAUSED : 0;
    }
    /**
   * @param {Buffer} buf
   * @returns {number}
   */ onBody(buf) {
        const { client, socket, statusCode, maxResponseSize } = this;
        if (socket.destroyed) {
            return -1;
        }
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        assert(this.timeoutType === TIMEOUT_BODY);
        if (this.timeout) {
            // istanbul ignore else: only for jest
            if (this.timeout.refresh) {
                this.timeout.refresh();
            }
        }
        assert(statusCode >= 200);
        if (maxResponseSize > -1 && this.bytesRead + buf.length > maxResponseSize) {
            util.destroy(socket, new ResponseExceededMaxSizeError());
            return -1;
        }
        this.bytesRead += buf.length;
        if (request.onData(buf) === false) {
            return constants.ERROR.PAUSED;
        }
        return 0;
    }
    /**
   * @returns {number}
   */ onMessageComplete() {
        const { client, socket, statusCode, upgrade, headers, contentLength, bytesRead, shouldKeepAlive } = this;
        if (socket.destroyed && (!statusCode || shouldKeepAlive)) {
            return -1;
        }
        if (upgrade) {
            return 0;
        }
        assert(statusCode >= 100);
        assert((this.headers.length & 1) === 0);
        const request = client[kQueue][client[kRunningIdx]];
        assert(request);
        this.statusCode = 0;
        this.statusText = '';
        this.bytesRead = 0;
        this.contentLength = '';
        this.keepAlive = '';
        this.connection = '';
        this.headers = [];
        this.headersSize = 0;
        if (statusCode < 200) {
            return 0;
        }
        /* istanbul ignore next: should be handled by llhttp? */ if (request.method !== 'HEAD' && contentLength && bytesRead !== parseInt(contentLength, 10)) {
            util.destroy(socket, new ResponseContentLengthMismatchError());
            return -1;
        }
        request.onComplete(headers);
        client[kQueue][client[kRunningIdx]++] = null;
        if (socket[kWriting]) {
            assert(client[kRunning] === 0);
            // Response completed before request.
            util.destroy(socket, new InformationalError('reset'));
            return constants.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
            util.destroy(socket, new InformationalError('reset'));
            return constants.ERROR.PAUSED;
        } else if (socket[kReset] && client[kRunning] === 0) {
            // Destroy socket once all requests have completed.
            // The request at the tail of the pipeline is the one
            // that requested reset and no further requests should
            // have been queued since then.
            util.destroy(socket, new InformationalError('reset'));
            return constants.ERROR.PAUSED;
        } else if (client[kPipelining] == null || client[kPipelining] === 1) {
            // We must wait a full event loop cycle to reuse this socket to make sure
            // that non-spec compliant servers are not closing the connection even if they
            // said they won't.
            setImmediate(client[kResume]);
        } else {
            client[kResume]();
        }
        return 0;
    }
}
function onParserTimeout(parser) {
    const { socket, timeoutType, client, paused } = parser.deref();
    /* istanbul ignore else */ if (timeoutType === TIMEOUT_HEADERS) {
        if (!socket[kWriting] || socket.writableNeedDrain || client[kRunning] > 1) {
            assert(!paused, 'cannot be paused while waiting for headers');
            util.destroy(socket, new HeadersTimeoutError());
        }
    } else if (timeoutType === TIMEOUT_BODY) {
        if (!paused) {
            util.destroy(socket, new BodyTimeoutError());
        }
    } else if (timeoutType === TIMEOUT_KEEP_ALIVE) {
        assert(client[kRunning] === 0 && client[kKeepAliveTimeoutValue]);
        util.destroy(socket, new InformationalError('socket idle timeout'));
    }
}
/**
 * @param {import ('./client.js')} client
 * @param {import('net').Socket} socket
 * @returns
 */ function connectH1(client, socket) {
    client[kSocket] = socket;
    if (!llhttpInstance) {
        llhttpInstance = lazyllhttp();
    }
    if (socket.errored) {
        throw socket.errored;
    }
    if (socket.destroyed) {
        throw new SocketError('destroyed');
    }
    socket[kNoRef] = false;
    socket[kWriting] = false;
    socket[kReset] = false;
    socket[kBlocking] = false;
    socket[kParser] = new Parser(client, socket, llhttpInstance);
    util.addListener(socket, 'error', onHttpSocketError);
    util.addListener(socket, 'readable', onHttpSocketReadable);
    util.addListener(socket, 'end', onHttpSocketEnd);
    util.addListener(socket, 'close', onHttpSocketClose);
    socket[kClosed] = false;
    socket.on('close', onSocketClose);
    return {
        version: 'h1',
        defaultPipelining: 1,
        write (request) {
            return writeH1(client, request);
        },
        resume () {
            resumeH1(client);
        },
        /**
     * @param {Error|undefined} err
     * @param {() => void} callback
     */ destroy (err, callback) {
            if (socket[kClosed]) {
                queueMicrotask(callback);
            } else {
                socket.on('close', callback);
                socket.destroy(err);
            }
        },
        /**
     * @returns {boolean}
     */ get destroyed () {
            return socket.destroyed;
        },
        /**
     * @param {import('../core/request.js')} request
     * @returns {boolean}
     */ busy (request) {
            if (socket[kWriting] || socket[kReset] || socket[kBlocking]) {
                return true;
            }
            if (request) {
                if (client[kRunning] > 0 && !request.idempotent) {
                    // Non-idempotent request cannot be retried.
                    // Ensure that no other requests are inflight and
                    // could cause failure.
                    return true;
                }
                if (client[kRunning] > 0 && (request.upgrade || request.method === 'CONNECT')) {
                    // Don't dispatch an upgrade until all preceding requests have completed.
                    // A misbehaving server might upgrade the connection before all pipelined
                    // request has completed.
                    return true;
                }
                if (client[kRunning] > 0 && util.bodyLength(request.body) !== 0 && (util.isStream(request.body) || util.isAsyncIterable(request.body) || util.isFormDataLike(request.body))) {
                    // Request with stream or iterator body can error while other requests
                    // are inflight and indirectly error those as well.
                    // Ensure this doesn't happen by waiting for inflight
                    // to complete before dispatching.
                    // Request with stream or iterator body cannot be retried.
                    // Ensure that no other requests are inflight and
                    // could cause failure.
                    return true;
                }
            }
            return false;
        }
    };
}
function onHttpSocketError(err) {
    assert(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
    const parser = this[kParser];
    // On Mac OS, we get an ECONNRESET even if there is a full body to be forwarded
    // to the user.
    if (err.code === 'ECONNRESET' && parser.statusCode && !parser.shouldKeepAlive) {
        // We treat all incoming data so for as a valid response.
        parser.onMessageComplete();
        return;
    }
    this[kError] = err;
    this[kClient][kOnError](err);
}
function onHttpSocketReadable() {
    this[kParser]?.readMore();
}
function onHttpSocketEnd() {
    const parser = this[kParser];
    if (parser.statusCode && !parser.shouldKeepAlive) {
        // We treat all incoming data so far as a valid response.
        parser.onMessageComplete();
        return;
    }
    util.destroy(this, new SocketError('other side closed', util.getSocketInfo(this)));
}
function onHttpSocketClose() {
    const parser = this[kParser];
    if (parser) {
        if (!this[kError] && parser.statusCode && !parser.shouldKeepAlive) {
            // We treat all incoming data so far as a valid response.
            parser.onMessageComplete();
        }
        this[kParser].destroy();
        this[kParser] = null;
    }
    const err = this[kError] || new SocketError('closed', util.getSocketInfo(this));
    const client = this[kClient];
    client[kSocket] = null;
    client[kHTTPContext] = null; // TODO (fix): This is hacky...
    if (client.destroyed) {
        assert(client[kPending] === 0);
        // Fail entire queue.
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            util.errorRequest(client, request, err);
        }
    } else if (client[kRunning] > 0 && err.code !== 'UND_ERR_INFO') {
        // Fail head of pipeline.
        const request = client[kQueue][client[kRunningIdx]];
        client[kQueue][client[kRunningIdx]++] = null;
        util.errorRequest(client, request, err);
    }
    client[kPendingIdx] = client[kRunningIdx];
    assert(client[kRunning] === 0);
    client.emit('disconnect', client[kUrl], [
        client
    ], err);
    client[kResume]();
}
function onSocketClose() {
    this[kClosed] = true;
}
/**
 * @param {import('./client.js')} client
 */ function resumeH1(client) {
    const socket = client[kSocket];
    if (socket && !socket.destroyed) {
        if (client[kSize] === 0) {
            if (!socket[kNoRef] && socket.unref) {
                socket.unref();
                socket[kNoRef] = true;
            }
        } else if (socket[kNoRef] && socket.ref) {
            socket.ref();
            socket[kNoRef] = false;
        }
        if (client[kSize] === 0) {
            if (socket[kParser].timeoutType !== TIMEOUT_KEEP_ALIVE) {
                socket[kParser].setTimeout(client[kKeepAliveTimeoutValue], TIMEOUT_KEEP_ALIVE);
            }
        } else if (client[kRunning] > 0 && socket[kParser].statusCode < 200) {
            if (socket[kParser].timeoutType !== TIMEOUT_HEADERS) {
                const request = client[kQueue][client[kRunningIdx]];
                const headersTimeout = request.headersTimeout != null ? request.headersTimeout : client[kHeadersTimeout];
                socket[kParser].setTimeout(headersTimeout, TIMEOUT_HEADERS);
            }
        }
    }
}
// https://www.rfc-editor.org/rfc/rfc7230#section-3.3.2
function shouldSendContentLength(method) {
    return method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS' && method !== 'TRACE' && method !== 'CONNECT';
}
/**
 * @param {import('./client.js')} client
 * @param {import('../core/request.js')} request
 * @returns
 */ function writeH1(client, request) {
    const { method, path, host, upgrade, blocking, reset } = request;
    let { body, headers, contentLength } = request;
    // https://tools.ietf.org/html/rfc7231#section-4.3.1
    // https://tools.ietf.org/html/rfc7231#section-4.3.2
    // https://tools.ietf.org/html/rfc7231#section-4.3.5
    // Sending a payload body on a request that does not
    // expect it can cause undefined behavior on some
    // servers and corrupt connection state. Do not
    // re-use the connection for further requests.
    const expectsPayload = method === 'PUT' || method === 'POST' || method === 'PATCH' || method === 'QUERY' || method === 'PROPFIND' || method === 'PROPPATCH';
    if (util.isFormDataLike(body)) {
        if (!extractBody) {
            extractBody = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/body.js [app-ssr] (ecmascript)").extractBody;
        }
        const [bodyStream, contentType] = extractBody(body);
        if (request.contentType == null) {
            headers.push('content-type', contentType);
        }
        body = bodyStream.stream;
        contentLength = bodyStream.length;
    } else if (util.isBlobLike(body) && request.contentType == null && body.type) {
        headers.push('content-type', body.type);
    }
    if (body && typeof body.read === 'function') {
        // Try to read EOF in order to get length.
        body.read(0);
    }
    const bodyLength = util.bodyLength(body);
    contentLength = bodyLength ?? contentLength;
    if (contentLength === null) {
        contentLength = request.contentLength;
    }
    if (contentLength === 0 && !expectsPayload) {
        // https://tools.ietf.org/html/rfc7230#section-3.3.2
        // A user agent SHOULD NOT send a Content-Length header field when
        // the request message does not contain a payload body and the method
        // semantics do not anticipate such a body.
        contentLength = null;
    }
    // https://github.com/nodejs/undici/issues/2046
    // A user agent may send a Content-Length header with 0 value, this should be allowed.
    if (shouldSendContentLength(method) && contentLength > 0 && request.contentLength !== null && request.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
            util.errorRequest(client, request, new RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
    }
    const socket = client[kSocket];
    /**
   * @param {Error} [err]
   * @returns {void}
   */ const abort = (err)=>{
        if (request.aborted || request.completed) {
            return;
        }
        util.errorRequest(client, request, err || new RequestAbortedError());
        util.destroy(body);
        util.destroy(socket, new InformationalError('aborted'));
    };
    try {
        request.onConnect(abort);
    } catch (err) {
        util.errorRequest(client, request, err);
    }
    if (request.aborted) {
        return false;
    }
    if (method === 'HEAD') {
        // https://github.com/mcollina/undici/issues/258
        // Close after a HEAD request to interop with misbehaving servers
        // that may send a body in the response.
        socket[kReset] = true;
    }
    if (upgrade || method === 'CONNECT') {
        // On CONNECT or upgrade, block pipeline from dispatching further
        // requests on this connection.
        socket[kReset] = true;
    }
    if (reset != null) {
        socket[kReset] = reset;
    }
    if (client[kMaxRequests] && socket[kCounter]++ >= client[kMaxRequests]) {
        socket[kReset] = true;
    }
    if (blocking) {
        socket[kBlocking] = true;
    }
    let header = `${method} ${path} HTTP/1.1\r\n`;
    if (typeof host === 'string') {
        header += `host: ${host}\r\n`;
    } else {
        header += client[kHostHeader];
    }
    if (upgrade) {
        header += `connection: upgrade\r\nupgrade: ${upgrade}\r\n`;
    } else if (client[kPipelining] && !socket[kReset]) {
        header += 'connection: keep-alive\r\n';
    } else {
        header += 'connection: close\r\n';
    }
    if (Array.isArray(headers)) {
        for(let n = 0; n < headers.length; n += 2){
            const key = headers[n + 0];
            const val = headers[n + 1];
            if (Array.isArray(val)) {
                for(let i = 0; i < val.length; i++){
                    header += `${key}: ${val[i]}\r\n`;
                }
            } else {
                header += `${key}: ${val}\r\n`;
            }
        }
    }
    if (channels.sendHeaders.hasSubscribers) {
        channels.sendHeaders.publish({
            request,
            headers: header,
            socket
        });
    }
    /* istanbul ignore else: assertion */ if (!body || bodyLength === 0) {
        writeBuffer(abort, null, client, request, socket, contentLength, header, expectsPayload);
    } else if (util.isBuffer(body)) {
        writeBuffer(abort, body, client, request, socket, contentLength, header, expectsPayload);
    } else if (util.isBlobLike(body)) {
        if (typeof body.stream === 'function') {
            writeIterable(abort, body.stream(), client, request, socket, contentLength, header, expectsPayload);
        } else {
            writeBlob(abort, body, client, request, socket, contentLength, header, expectsPayload);
        }
    } else if (util.isStream(body)) {
        writeStream(abort, body, client, request, socket, contentLength, header, expectsPayload);
    } else if (util.isIterable(body)) {
        writeIterable(abort, body, client, request, socket, contentLength, header, expectsPayload);
    } else {
        assert(false);
    }
    return true;
}
/**
 * @param {AbortCallback} abort
 * @param {import('stream').Stream} body
 * @param {import('./client.js')} client
 * @param {import('../core/request.js')} request
 * @param {import('net').Socket} socket
 * @param {number} contentLength
 * @param {string} header
 * @param {boolean} expectsPayload
 */ function writeStream(abort, body, client, request, socket, contentLength, header, expectsPayload) {
    assert(contentLength !== 0 || client[kRunning] === 0, 'stream body cannot be pipelined');
    let finished = false;
    const writer = new AsyncWriter({
        abort,
        socket,
        request,
        contentLength,
        client,
        expectsPayload,
        header
    });
    /**
   * @param {Buffer} chunk
   * @returns {void}
   */ const onData = function(chunk) {
        if (finished) {
            return;
        }
        try {
            if (!writer.write(chunk) && this.pause) {
                this.pause();
            }
        } catch (err) {
            util.destroy(this, err);
        }
    };
    /**
   * @returns {void}
   */ const onDrain = function() {
        if (finished) {
            return;
        }
        if (body.resume) {
            body.resume();
        }
    };
    /**
   * @returns {void}
   */ const onClose = function() {
        // 'close' might be emitted *before* 'error' for
        // broken streams. Wait a tick to avoid this case.
        queueMicrotask(()=>{
            // It's only safe to remove 'error' listener after
            // 'close'.
            body.removeListener('error', onFinished);
        });
        if (!finished) {
            const err = new RequestAbortedError();
            queueMicrotask(()=>onFinished(err));
        }
    };
    /**
   * @param {Error} [err]
   * @returns
   */ const onFinished = function(err) {
        if (finished) {
            return;
        }
        finished = true;
        assert(socket.destroyed || socket[kWriting] && client[kRunning] <= 1);
        socket.off('drain', onDrain).off('error', onFinished);
        body.removeListener('data', onData).removeListener('end', onFinished).removeListener('close', onClose);
        if (!err) {
            try {
                writer.end();
            } catch (er) {
                err = er;
            }
        }
        writer.destroy(err);
        if (err && (err.code !== 'UND_ERR_INFO' || err.message !== 'reset')) {
            util.destroy(body, err);
        } else {
            util.destroy(body);
        }
    };
    body.on('data', onData).on('end', onFinished).on('error', onFinished).on('close', onClose);
    if (body.resume) {
        body.resume();
    }
    socket.on('drain', onDrain).on('error', onFinished);
    if (body.errorEmitted ?? body.errored) {
        setImmediate(onFinished, body.errored);
    } else if (body.endEmitted ?? body.readableEnded) {
        setImmediate(onFinished, null);
    }
    if (body.closeEmitted ?? body.closed) {
        setImmediate(onClose);
    }
}
/**
 * @typedef AbortCallback
 * @type {Function}
 * @param {Error} [err]
 * @returns {void}
 */ /**
 * @param {AbortCallback} abort
 * @param {Uint8Array|null} body
 * @param {import('./client.js')} client
 * @param {import('../core/request.js')} request
 * @param {import('net').Socket} socket
 * @param {number} contentLength
 * @param {string} header
 * @param {boolean} expectsPayload
 * @returns {void}
 */ function writeBuffer(abort, body, client, request, socket, contentLength, header, expectsPayload) {
    try {
        if (!body) {
            if (contentLength === 0) {
                socket.write(`${header}content-length: 0\r\n\r\n`, 'latin1');
            } else {
                assert(contentLength === null, 'no body must not have content length');
                socket.write(`${header}\r\n`, 'latin1');
            }
        } else if (util.isBuffer(body)) {
            assert(contentLength === body.byteLength, 'buffer body must have content length');
            socket.cork();
            socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
            socket.write(body);
            socket.uncork();
            request.onBodySent(body);
            if (!expectsPayload && request.reset !== false) {
                socket[kReset] = true;
            }
        }
        request.onRequestSent();
        client[kResume]();
    } catch (err) {
        abort(err);
    }
}
/**
 * @param {AbortCallback} abort
 * @param {Blob} body
 * @param {import('./client.js')} client
 * @param {import('../core/request.js')} request
 * @param {import('net').Socket} socket
 * @param {number} contentLength
 * @param {string} header
 * @param {boolean} expectsPayload
 * @returns {Promise<void>}
 */ async function writeBlob(abort, body, client, request, socket, contentLength, header, expectsPayload) {
    assert(contentLength === body.size, 'blob body must have content length');
    try {
        if (contentLength != null && contentLength !== body.size) {
            throw new RequestContentLengthMismatchError();
        }
        const buffer = Buffer.from(await body.arrayBuffer());
        socket.cork();
        socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
        socket.write(buffer);
        socket.uncork();
        request.onBodySent(buffer);
        request.onRequestSent();
        if (!expectsPayload && request.reset !== false) {
            socket[kReset] = true;
        }
        client[kResume]();
    } catch (err) {
        abort(err);
    }
}
/**
 * @param {AbortCallback} abort
 * @param {Iterable} body
 * @param {import('./client.js')} client
 * @param {import('../core/request.js')} request
 * @param {import('net').Socket} socket
 * @param {number} contentLength
 * @param {string} header
 * @param {boolean} expectsPayload
 * @returns {Promise<void>}
 */ async function writeIterable(abort, body, client, request, socket, contentLength, header, expectsPayload) {
    assert(contentLength !== 0 || client[kRunning] === 0, 'iterator body cannot be pipelined');
    let callback = null;
    function onDrain() {
        if (callback) {
            const cb = callback;
            callback = null;
            cb();
        }
    }
    const waitForDrain = ()=>new Promise((resolve, reject)=>{
            assert(callback === null);
            if (socket[kError]) {
                reject(socket[kError]);
            } else {
                callback = resolve;
            }
        });
    socket.on('close', onDrain).on('drain', onDrain);
    const writer = new AsyncWriter({
        abort,
        socket,
        request,
        contentLength,
        client,
        expectsPayload,
        header
    });
    try {
        // It's up to the user to somehow abort the async iterable.
        for await (const chunk of body){
            if (socket[kError]) {
                throw socket[kError];
            }
            if (!writer.write(chunk)) {
                await waitForDrain();
            }
        }
        writer.end();
    } catch (err) {
        writer.destroy(err);
    } finally{
        socket.off('close', onDrain).off('drain', onDrain);
    }
}
class AsyncWriter {
    /**
   *
   * @param {object} arg
   * @param {AbortCallback} arg.abort
   * @param {import('net').Socket} arg.socket
   * @param {import('../core/request.js')} arg.request
   * @param {number} arg.contentLength
   * @param {import('./client.js')} arg.client
   * @param {boolean} arg.expectsPayload
   * @param {string} arg.header
   */ constructor({ abort, socket, request, contentLength, client, expectsPayload, header }){
        this.socket = socket;
        this.request = request;
        this.contentLength = contentLength;
        this.client = client;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        this.abort = abort;
        socket[kWriting] = true;
    }
    /**
   * @param {Buffer} chunk
   * @returns
   */ write(chunk) {
        const { socket, request, contentLength, client, bytesWritten, expectsPayload, header } = this;
        if (socket[kError]) {
            throw socket[kError];
        }
        if (socket.destroyed) {
            return false;
        }
        const len = Buffer.byteLength(chunk);
        if (!len) {
            return true;
        }
        // We should defer writing chunks.
        if (contentLength !== null && bytesWritten + len > contentLength) {
            if (client[kStrictContentLength]) {
                throw new RequestContentLengthMismatchError();
            }
            process.emitWarning(new RequestContentLengthMismatchError());
        }
        socket.cork();
        if (bytesWritten === 0) {
            if (!expectsPayload && request.reset !== false) {
                socket[kReset] = true;
            }
            if (contentLength === null) {
                socket.write(`${header}transfer-encoding: chunked\r\n`, 'latin1');
            } else {
                socket.write(`${header}content-length: ${contentLength}\r\n\r\n`, 'latin1');
            }
        }
        if (contentLength === null) {
            socket.write(`\r\n${len.toString(16)}\r\n`, 'latin1');
        }
        this.bytesWritten += len;
        const ret = socket.write(chunk);
        socket.uncork();
        request.onBodySent(chunk);
        if (!ret) {
            if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
                // istanbul ignore else: only for jest
                if (socket[kParser].timeout.refresh) {
                    socket[kParser].timeout.refresh();
                }
            }
        }
        return ret;
    }
    /**
   * @returns {void}
   */ end() {
        const { socket, contentLength, client, bytesWritten, expectsPayload, header, request } = this;
        request.onRequestSent();
        socket[kWriting] = false;
        if (socket[kError]) {
            throw socket[kError];
        }
        if (socket.destroyed) {
            return;
        }
        if (bytesWritten === 0) {
            if (expectsPayload) {
                // https://tools.ietf.org/html/rfc7230#section-3.3.2
                // A user agent SHOULD send a Content-Length in a request message when
                // no Transfer-Encoding is sent and the request method defines a meaning
                // for an enclosed payload body.
                socket.write(`${header}content-length: 0\r\n\r\n`, 'latin1');
            } else {
                socket.write(`${header}\r\n`, 'latin1');
            }
        } else if (contentLength === null) {
            socket.write('\r\n0\r\n\r\n', 'latin1');
        }
        if (contentLength !== null && bytesWritten !== contentLength) {
            if (client[kStrictContentLength]) {
                throw new RequestContentLengthMismatchError();
            } else {
                process.emitWarning(new RequestContentLengthMismatchError());
            }
        }
        if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
            // istanbul ignore else: only for jest
            if (socket[kParser].timeout.refresh) {
                socket[kParser].timeout.refresh();
            }
        }
        client[kResume]();
    }
    /**
   * @param {Error} [err]
   * @returns {void}
   */ destroy(err) {
        const { socket, client, abort } = this;
        socket[kWriting] = false;
        if (err) {
            assert(client[kRunning] <= 1, 'pipeline should only contain this request');
            abort(err);
        }
    }
}
module.exports = connectH1;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client-h2.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const { pipeline } = __turbopack_context__.r("[externals]/node:stream [external] (node:stream, cjs)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const { RequestContentLengthMismatchError, RequestAbortedError, SocketError, InformationalError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const { kUrl, kReset, kClient, kRunning, kPending, kQueue, kPendingIdx, kRunningIdx, kError, kSocket, kStrictContentLength, kOnError, kMaxConcurrentStreams, kHTTP2Session, kResume, kSize, kHTTPContext, kClosed, kBodyTimeout } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const { channels } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/diagnostics.js [app-ssr] (ecmascript)");
const kOpenStreams = Symbol('open streams');
let extractBody;
/** @type {import('http2')} */ let http2;
try {
    http2 = __turbopack_context__.r("[externals]/node:http2 [external] (node:http2, cjs)");
} catch  {
    // @ts-ignore
    http2 = {
        constants: {}
    };
}
const { constants: { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_SCHEME, HTTP2_HEADER_CONTENT_LENGTH, HTTP2_HEADER_EXPECT, HTTP2_HEADER_STATUS } } = http2;
function parseH2Headers(headers) {
    const result = [];
    for (const [name, value] of Object.entries(headers)){
        // h2 may concat the header value by array
        // e.g. Set-Cookie
        if (Array.isArray(value)) {
            for (const subvalue of value){
                // we need to provide each header value of header name
                // because the headers handler expect name-value pair
                result.push(Buffer.from(name), Buffer.from(subvalue));
            }
        } else {
            result.push(Buffer.from(name), Buffer.from(value));
        }
    }
    return result;
}
function connectH2(client, socket) {
    client[kSocket] = socket;
    const session = http2.connect(client[kUrl], {
        createConnection: ()=>socket,
        peerMaxConcurrentStreams: client[kMaxConcurrentStreams],
        settings: {
            // TODO(metcoder95): add support for PUSH
            enablePush: false
        }
    });
    session[kOpenStreams] = 0;
    session[kClient] = client;
    session[kSocket] = socket;
    session[kHTTP2Session] = null;
    util.addListener(session, 'error', onHttp2SessionError);
    util.addListener(session, 'frameError', onHttp2FrameError);
    util.addListener(session, 'end', onHttp2SessionEnd);
    util.addListener(session, 'goaway', onHttp2SessionGoAway);
    util.addListener(session, 'close', onHttp2SessionClose);
    session.unref();
    client[kHTTP2Session] = session;
    socket[kHTTP2Session] = session;
    util.addListener(socket, 'error', onHttp2SocketError);
    util.addListener(socket, 'end', onHttp2SocketEnd);
    util.addListener(socket, 'close', onHttp2SocketClose);
    socket[kClosed] = false;
    socket.on('close', onSocketClose);
    return {
        version: 'h2',
        defaultPipelining: Infinity,
        write (request) {
            return writeH2(client, request);
        },
        resume () {
            resumeH2(client);
        },
        destroy (err, callback) {
            if (socket[kClosed]) {
                queueMicrotask(callback);
            } else {
                socket.destroy(err).on('close', callback);
            }
        },
        get destroyed () {
            return socket.destroyed;
        },
        busy () {
            return false;
        }
    };
}
function resumeH2(client) {
    const socket = client[kSocket];
    if (socket?.destroyed === false) {
        if (client[kSize] === 0 || client[kMaxConcurrentStreams] === 0) {
            socket.unref();
            client[kHTTP2Session].unref();
        } else {
            socket.ref();
            client[kHTTP2Session].ref();
        }
    }
}
function onHttp2SessionError(err) {
    assert(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
    this[kSocket][kError] = err;
    this[kClient][kOnError](err);
}
function onHttp2FrameError(type, code, id) {
    if (id === 0) {
        const err = new InformationalError(`HTTP/2: "frameError" received - type ${type}, code ${code}`);
        this[kSocket][kError] = err;
        this[kClient][kOnError](err);
    }
}
function onHttp2SessionEnd() {
    const err = new SocketError('other side closed', util.getSocketInfo(this[kSocket]));
    this.destroy(err);
    util.destroy(this[kSocket], err);
}
/**
 * This is the root cause of #3011
 * We need to handle GOAWAY frames properly, and trigger the session close
 * along with the socket right away
 *
 * @this {import('http2').ClientHttp2Session}
 * @param {number} errorCode
 */ function onHttp2SessionGoAway(errorCode) {
    // TODO(mcollina): Verify if GOAWAY implements the spec correctly:
    // https://datatracker.ietf.org/doc/html/rfc7540#section-6.8
    // Specifically, we do not verify the "valid" stream id.
    const err = this[kError] || new SocketError(`HTTP/2: "GOAWAY" frame received with code ${errorCode}`, util.getSocketInfo(this[kSocket]));
    const client = this[kClient];
    client[kSocket] = null;
    client[kHTTPContext] = null;
    // this is an HTTP2 session
    this.close();
    this[kHTTP2Session] = null;
    util.destroy(this[kSocket], err);
    // Fail head of pipeline.
    if (client[kRunningIdx] < client[kQueue].length) {
        const request = client[kQueue][client[kRunningIdx]];
        client[kQueue][client[kRunningIdx]++] = null;
        util.errorRequest(client, request, err);
        client[kPendingIdx] = client[kRunningIdx];
    }
    assert(client[kRunning] === 0);
    client.emit('disconnect', client[kUrl], [
        client
    ], err);
    client.emit('connectionError', client[kUrl], [
        client
    ], err);
    client[kResume]();
}
function onHttp2SessionClose() {
    const { [kClient]: client } = this;
    const { [kSocket]: socket } = client;
    const err = this[kSocket][kError] || this[kError] || new SocketError('closed', util.getSocketInfo(socket));
    client[kSocket] = null;
    client[kHTTPContext] = null;
    if (client.destroyed) {
        assert(client[kPending] === 0);
        // Fail entire queue.
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            util.errorRequest(client, request, err);
        }
    }
}
function onHttp2SocketClose() {
    const err = this[kError] || new SocketError('closed', util.getSocketInfo(this));
    const client = this[kHTTP2Session][kClient];
    client[kSocket] = null;
    client[kHTTPContext] = null;
    if (this[kHTTP2Session] !== null) {
        this[kHTTP2Session].destroy(err);
    }
    client[kPendingIdx] = client[kRunningIdx];
    assert(client[kRunning] === 0);
    client.emit('disconnect', client[kUrl], [
        client
    ], err);
    client[kResume]();
}
function onHttp2SocketError(err) {
    assert(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
    this[kError] = err;
    this[kClient][kOnError](err);
}
function onHttp2SocketEnd() {
    util.destroy(this, new SocketError('other side closed', util.getSocketInfo(this)));
}
function onSocketClose() {
    this[kClosed] = true;
}
// https://www.rfc-editor.org/rfc/rfc7230#section-3.3.2
function shouldSendContentLength(method) {
    return method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS' && method !== 'TRACE' && method !== 'CONNECT';
}
function writeH2(client, request) {
    const requestTimeout = request.bodyTimeout ?? client[kBodyTimeout];
    const session = client[kHTTP2Session];
    const { method, path, host, upgrade, expectContinue, signal, protocol, headers: reqHeaders } = request;
    let { body } = request;
    if (upgrade) {
        util.errorRequest(client, request, new Error('Upgrade not supported for H2'));
        return false;
    }
    const headers = {};
    for(let n = 0; n < reqHeaders.length; n += 2){
        const key = reqHeaders[n + 0];
        const val = reqHeaders[n + 1];
        if (key === 'cookie') {
            if (headers[key] != null) {
                headers[key] = Array.isArray(headers[key]) ? (headers[key].push(val), headers[key]) : [
                    headers[key],
                    val
                ];
            } else {
                headers[key] = val;
            }
            continue;
        }
        if (Array.isArray(val)) {
            for(let i = 0; i < val.length; i++){
                if (headers[key]) {
                    headers[key] += `, ${val[i]}`;
                } else {
                    headers[key] = val[i];
                }
            }
        } else if (headers[key]) {
            headers[key] += `, ${val}`;
        } else {
            headers[key] = val;
        }
    }
    /** @type {import('node:http2').ClientHttp2Stream} */ let stream = null;
    const { hostname, port } = client[kUrl];
    headers[HTTP2_HEADER_AUTHORITY] = host || `${hostname}${port ? `:${port}` : ''}`;
    headers[HTTP2_HEADER_METHOD] = method;
    const abort = (err)=>{
        if (request.aborted || request.completed) {
            return;
        }
        err = err || new RequestAbortedError();
        util.errorRequest(client, request, err);
        if (stream != null) {
            // Some chunks might still come after abort,
            // let's ignore them
            stream.removeAllListeners('data');
            // On Abort, we close the stream to send RST_STREAM frame
            stream.close();
            // We move the running index to the next request
            client[kOnError](err);
            client[kResume]();
        }
        // We do not destroy the socket as we can continue using the session
        // the stream gets destroyed and the session remains to create new streams
        util.destroy(body, err);
    };
    try {
        // We are already connected, streams are pending.
        // We can call on connect, and wait for abort
        request.onConnect(abort);
    } catch (err) {
        util.errorRequest(client, request, err);
    }
    if (request.aborted) {
        return false;
    }
    if (method === 'CONNECT') {
        session.ref();
        // We are already connected, streams are pending, first request
        // will create a new stream. We trigger a request to create the stream and wait until
        // `ready` event is triggered
        // We disabled endStream to allow the user to write to the stream
        stream = session.request(headers, {
            endStream: false,
            signal
        });
        if (!stream.pending) {
            request.onUpgrade(null, null, stream);
            ++session[kOpenStreams];
            client[kQueue][client[kRunningIdx]++] = null;
        } else {
            stream.once('ready', ()=>{
                request.onUpgrade(null, null, stream);
                ++session[kOpenStreams];
                client[kQueue][client[kRunningIdx]++] = null;
            });
        }
        stream.once('close', ()=>{
            session[kOpenStreams] -= 1;
            if (session[kOpenStreams] === 0) session.unref();
        });
        stream.setTimeout(requestTimeout);
        return true;
    }
    // https://tools.ietf.org/html/rfc7540#section-8.3
    // :path and :scheme headers must be omitted when sending CONNECT
    headers[HTTP2_HEADER_PATH] = path;
    headers[HTTP2_HEADER_SCHEME] = protocol === 'http:' ? 'http' : 'https';
    // https://tools.ietf.org/html/rfc7231#section-4.3.1
    // https://tools.ietf.org/html/rfc7231#section-4.3.2
    // https://tools.ietf.org/html/rfc7231#section-4.3.5
    // Sending a payload body on a request that does not
    // expect it can cause undefined behavior on some
    // servers and corrupt connection state. Do not
    // re-use the connection for further requests.
    const expectsPayload = method === 'PUT' || method === 'POST' || method === 'PATCH';
    if (body && typeof body.read === 'function') {
        // Try to read EOF in order to get length.
        body.read(0);
    }
    let contentLength = util.bodyLength(body);
    if (util.isFormDataLike(body)) {
        extractBody ??= __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/body.js [app-ssr] (ecmascript)").extractBody;
        const [bodyStream, contentType] = extractBody(body);
        headers['content-type'] = contentType;
        body = bodyStream.stream;
        contentLength = bodyStream.length;
    }
    if (contentLength == null) {
        contentLength = request.contentLength;
    }
    if (contentLength === 0 || !expectsPayload) {
        // https://tools.ietf.org/html/rfc7230#section-3.3.2
        // A user agent SHOULD NOT send a Content-Length header field when
        // the request message does not contain a payload body and the method
        // semantics do not anticipate such a body.
        contentLength = null;
    }
    // https://github.com/nodejs/undici/issues/2046
    // A user agent may send a Content-Length header with 0 value, this should be allowed.
    if (shouldSendContentLength(method) && contentLength > 0 && request.contentLength != null && request.contentLength !== contentLength) {
        if (client[kStrictContentLength]) {
            util.errorRequest(client, request, new RequestContentLengthMismatchError());
            return false;
        }
        process.emitWarning(new RequestContentLengthMismatchError());
    }
    if (contentLength != null) {
        assert(body, 'no body must not have content length');
        headers[HTTP2_HEADER_CONTENT_LENGTH] = `${contentLength}`;
    }
    session.ref();
    if (channels.sendHeaders.hasSubscribers) {
        let header = '';
        for(const key in headers){
            header += `${key}: ${headers[key]}\r\n`;
        }
        channels.sendHeaders.publish({
            request,
            headers: header,
            socket: session[kSocket]
        });
    }
    // TODO(metcoder95): add support for sending trailers
    const shouldEndStream = method === 'GET' || method === 'HEAD' || body === null;
    if (expectContinue) {
        headers[HTTP2_HEADER_EXPECT] = '100-continue';
        stream = session.request(headers, {
            endStream: shouldEndStream,
            signal
        });
        stream.once('continue', writeBodyH2);
    } else {
        stream = session.request(headers, {
            endStream: shouldEndStream,
            signal
        });
        writeBodyH2();
    }
    // Increment counter as we have new streams open
    ++session[kOpenStreams];
    stream.setTimeout(requestTimeout);
    stream.once('response', (headers)=>{
        const { [HTTP2_HEADER_STATUS]: statusCode, ...realHeaders } = headers;
        request.onResponseStarted();
        // Due to the stream nature, it is possible we face a race condition
        // where the stream has been assigned, but the request has been aborted
        // the request remains in-flight and headers hasn't been received yet
        // for those scenarios, best effort is to destroy the stream immediately
        // as there's no value to keep it open.
        if (request.aborted) {
            stream.removeAllListeners('data');
            return;
        }
        if (request.onHeaders(Number(statusCode), parseH2Headers(realHeaders), stream.resume.bind(stream), '') === false) {
            stream.pause();
        }
    });
    stream.on('data', (chunk)=>{
        if (request.onData(chunk) === false) {
            stream.pause();
        }
    });
    stream.once('end', (err)=>{
        stream.removeAllListeners('data');
        // When state is null, it means we haven't consumed body and the stream still do not have
        // a state.
        // Present specially when using pipeline or stream
        if (stream.state?.state == null || stream.state.state < 6) {
            // Do not complete the request if it was aborted
            // Not prone to happen for as safety net to avoid race conditions with 'trailers'
            if (!request.aborted && !request.completed) {
                request.onComplete({});
            }
            client[kQueue][client[kRunningIdx]++] = null;
            client[kResume]();
        } else {
            // Stream is closed or half-closed-remote (6), decrement counter and cleanup
            // It does not have sense to continue working with the stream as we do not
            // have yet RST_STREAM support on client-side
            --session[kOpenStreams];
            if (session[kOpenStreams] === 0) {
                session.unref();
            }
            abort(err ?? new InformationalError('HTTP/2: stream half-closed (remote)'));
            client[kQueue][client[kRunningIdx]++] = null;
            client[kPendingIdx] = client[kRunningIdx];
            client[kResume]();
        }
    });
    stream.once('close', ()=>{
        stream.removeAllListeners('data');
        session[kOpenStreams] -= 1;
        if (session[kOpenStreams] === 0) {
            session.unref();
        }
    });
    stream.once('error', function(err) {
        stream.removeAllListeners('data');
        abort(err);
    });
    stream.once('frameError', (type, code)=>{
        stream.removeAllListeners('data');
        abort(new InformationalError(`HTTP/2: "frameError" received - type ${type}, code ${code}`));
    });
    stream.on('aborted', ()=>{
        stream.removeAllListeners('data');
    });
    stream.on('timeout', ()=>{
        const err = new InformationalError(`HTTP/2: "stream timeout after ${requestTimeout}"`);
        stream.removeAllListeners('data');
        session[kOpenStreams] -= 1;
        if (session[kOpenStreams] === 0) {
            session.unref();
        }
        abort(err);
    });
    stream.once('trailers', (trailers)=>{
        if (request.aborted || request.completed) {
            return;
        }
        request.onComplete(trailers);
    });
    return true;
    //TURBOPACK unreachable
    ;
    function writeBodyH2() {
        /* istanbul ignore else: assertion */ if (!body || contentLength === 0) {
            writeBuffer(abort, stream, null, client, request, client[kSocket], contentLength, expectsPayload);
        } else if (util.isBuffer(body)) {
            writeBuffer(abort, stream, body, client, request, client[kSocket], contentLength, expectsPayload);
        } else if (util.isBlobLike(body)) {
            if (typeof body.stream === 'function') {
                writeIterable(abort, stream, body.stream(), client, request, client[kSocket], contentLength, expectsPayload);
            } else {
                writeBlob(abort, stream, body, client, request, client[kSocket], contentLength, expectsPayload);
            }
        } else if (util.isStream(body)) {
            writeStream(abort, client[kSocket], expectsPayload, stream, body, client, request, contentLength);
        } else if (util.isIterable(body)) {
            writeIterable(abort, stream, body, client, request, client[kSocket], contentLength, expectsPayload);
        } else {
            assert(false);
        }
    }
}
function writeBuffer(abort, h2stream, body, client, request, socket, contentLength, expectsPayload) {
    try {
        if (body != null && util.isBuffer(body)) {
            assert(contentLength === body.byteLength, 'buffer body must have content length');
            h2stream.cork();
            h2stream.write(body);
            h2stream.uncork();
            h2stream.end();
            request.onBodySent(body);
        }
        if (!expectsPayload) {
            socket[kReset] = true;
        }
        request.onRequestSent();
        client[kResume]();
    } catch (error) {
        abort(error);
    }
}
function writeStream(abort, socket, expectsPayload, h2stream, body, client, request, contentLength) {
    assert(contentLength !== 0 || client[kRunning] === 0, 'stream body cannot be pipelined');
    // For HTTP/2, is enough to pipe the stream
    const pipe = pipeline(body, h2stream, (err)=>{
        if (err) {
            util.destroy(pipe, err);
            abort(err);
        } else {
            util.removeAllListeners(pipe);
            request.onRequestSent();
            if (!expectsPayload) {
                socket[kReset] = true;
            }
            client[kResume]();
        }
    });
    util.addListener(pipe, 'data', onPipeData);
    function onPipeData(chunk) {
        request.onBodySent(chunk);
    }
}
async function writeBlob(abort, h2stream, body, client, request, socket, contentLength, expectsPayload) {
    assert(contentLength === body.size, 'blob body must have content length');
    try {
        if (contentLength != null && contentLength !== body.size) {
            throw new RequestContentLengthMismatchError();
        }
        const buffer = Buffer.from(await body.arrayBuffer());
        h2stream.cork();
        h2stream.write(buffer);
        h2stream.uncork();
        h2stream.end();
        request.onBodySent(buffer);
        request.onRequestSent();
        if (!expectsPayload) {
            socket[kReset] = true;
        }
        client[kResume]();
    } catch (err) {
        abort(err);
    }
}
async function writeIterable(abort, h2stream, body, client, request, socket, contentLength, expectsPayload) {
    assert(contentLength !== 0 || client[kRunning] === 0, 'iterator body cannot be pipelined');
    let callback = null;
    function onDrain() {
        if (callback) {
            const cb = callback;
            callback = null;
            cb();
        }
    }
    const waitForDrain = ()=>new Promise((resolve, reject)=>{
            assert(callback === null);
            if (socket[kError]) {
                reject(socket[kError]);
            } else {
                callback = resolve;
            }
        });
    h2stream.on('close', onDrain).on('drain', onDrain);
    try {
        // It's up to the user to somehow abort the async iterable.
        for await (const chunk of body){
            if (socket[kError]) {
                throw socket[kError];
            }
            const res = h2stream.write(chunk);
            request.onBodySent(chunk);
            if (!res) {
                await waitForDrain();
            }
        }
        h2stream.end();
        request.onRequestSent();
        if (!expectsPayload) {
            socket[kReset] = true;
        }
        client[kResume]();
    } catch (err) {
        abort(err);
    } finally{
        h2stream.off('close', onDrain).off('drain', onDrain);
    }
}
module.exports = connectH2;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const assert = __turbopack_context__.r("[externals]/node:assert [external] (node:assert, cjs)");
const net = __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
const http = __turbopack_context__.r("[externals]/node:http [external] (node:http, cjs)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const { ClientStats } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/stats.js [app-ssr] (ecmascript)");
const { channels } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/diagnostics.js [app-ssr] (ecmascript)");
const Request = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/request.js [app-ssr] (ecmascript)");
const DispatcherBase = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher-base.js [app-ssr] (ecmascript)");
const { InvalidArgumentError, InformationalError, ClientDestroyedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const buildConnector = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/connect.js [app-ssr] (ecmascript)");
const { kUrl, kServerName, kClient, kBusy, kConnect, kResuming, kRunning, kPending, kSize, kQueue, kConnected, kConnecting, kNeedDrain, kKeepAliveDefaultTimeout, kHostHeader, kPendingIdx, kRunningIdx, kError, kPipelining, kKeepAliveTimeoutValue, kMaxHeadersSize, kKeepAliveMaxTimeout, kKeepAliveTimeoutThreshold, kHeadersTimeout, kBodyTimeout, kStrictContentLength, kConnector, kMaxRequests, kCounter, kClose, kDestroy, kDispatch, kLocalAddress, kMaxResponseSize, kOnError, kHTTPContext, kMaxConcurrentStreams, kResume } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const connectH1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client-h1.js [app-ssr] (ecmascript)");
const connectH2 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client-h2.js [app-ssr] (ecmascript)");
const kClosedResolve = Symbol('kClosedResolve');
const getDefaultNodeMaxHeaderSize = http && http.maxHeaderSize && Number.isInteger(http.maxHeaderSize) && http.maxHeaderSize > 0 ? ()=>http.maxHeaderSize : ()=>{
    throw new InvalidArgumentError('http module not available or http.maxHeaderSize invalid');
};
const noop = ()=>{};
function getPipelining(client) {
    return client[kPipelining] ?? client[kHTTPContext]?.defaultPipelining ?? 1;
}
/**
 * @type {import('../../types/client.js').default}
 */ class Client extends DispatcherBase {
    /**
   *
   * @param {string|URL} url
   * @param {import('../../types/client.js').Client.Options} options
   */ constructor(url, { maxHeaderSize, headersTimeout, socketTimeout, requestTimeout, connectTimeout, bodyTimeout, idleTimeout, keepAlive, keepAliveTimeout, maxKeepAliveTimeout, keepAliveMaxTimeout, keepAliveTimeoutThreshold, socketPath, pipelining, tls, strictContentLength, maxCachedSessions, connect, maxRequestsPerClient, localAddress, maxResponseSize, autoSelectFamily, autoSelectFamilyAttemptTimeout, // h2
    maxConcurrentStreams, allowH2 } = {}){
        if (keepAlive !== undefined) {
            throw new InvalidArgumentError('unsupported keepAlive, use pipelining=0 instead');
        }
        if (socketTimeout !== undefined) {
            throw new InvalidArgumentError('unsupported socketTimeout, use headersTimeout & bodyTimeout instead');
        }
        if (requestTimeout !== undefined) {
            throw new InvalidArgumentError('unsupported requestTimeout, use headersTimeout & bodyTimeout instead');
        }
        if (idleTimeout !== undefined) {
            throw new InvalidArgumentError('unsupported idleTimeout, use keepAliveTimeout instead');
        }
        if (maxKeepAliveTimeout !== undefined) {
            throw new InvalidArgumentError('unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead');
        }
        if (maxHeaderSize != null) {
            if (!Number.isInteger(maxHeaderSize) || maxHeaderSize < 1) {
                throw new InvalidArgumentError('invalid maxHeaderSize');
            }
        } else {
            // If maxHeaderSize is not provided, use the default value from the http module
            // or if that is not available, throw an error.
            maxHeaderSize = getDefaultNodeMaxHeaderSize();
        }
        if (socketPath != null && typeof socketPath !== 'string') {
            throw new InvalidArgumentError('invalid socketPath');
        }
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) {
            throw new InvalidArgumentError('invalid connectTimeout');
        }
        if (keepAliveTimeout != null && (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)) {
            throw new InvalidArgumentError('invalid keepAliveTimeout');
        }
        if (keepAliveMaxTimeout != null && (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)) {
            throw new InvalidArgumentError('invalid keepAliveMaxTimeout');
        }
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) {
            throw new InvalidArgumentError('invalid keepAliveTimeoutThreshold');
        }
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) {
            throw new InvalidArgumentError('headersTimeout must be a positive integer or zero');
        }
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) {
            throw new InvalidArgumentError('bodyTimeout must be a positive integer or zero');
        }
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') {
            throw new InvalidArgumentError('connect must be a function or an object');
        }
        if (maxRequestsPerClient != null && (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)) {
            throw new InvalidArgumentError('maxRequestsPerClient must be a positive number');
        }
        if (localAddress != null && (typeof localAddress !== 'string' || net.isIP(localAddress) === 0)) {
            throw new InvalidArgumentError('localAddress must be valid string IP address');
        }
        if (maxResponseSize != null && (!Number.isInteger(maxResponseSize) || maxResponseSize < -1)) {
            throw new InvalidArgumentError('maxResponseSize must be a positive number');
        }
        if (autoSelectFamilyAttemptTimeout != null && (!Number.isInteger(autoSelectFamilyAttemptTimeout) || autoSelectFamilyAttemptTimeout < -1)) {
            throw new InvalidArgumentError('autoSelectFamilyAttemptTimeout must be a positive number');
        }
        // h2
        if (allowH2 != null && typeof allowH2 !== 'boolean') {
            throw new InvalidArgumentError('allowH2 must be a valid boolean value');
        }
        if (maxConcurrentStreams != null && (typeof maxConcurrentStreams !== 'number' || maxConcurrentStreams < 1)) {
            throw new InvalidArgumentError('maxConcurrentStreams must be a positive integer, greater than 0');
        }
        super();
        if (typeof connect !== 'function') {
            connect = buildConnector({
                ...tls,
                maxCachedSessions,
                allowH2,
                socketPath,
                timeout: connectTimeout,
                ...typeof autoSelectFamily === 'boolean' ? {
                    autoSelectFamily,
                    autoSelectFamilyAttemptTimeout
                } : undefined,
                ...connect
            });
        }
        this[kUrl] = util.parseOrigin(url);
        this[kConnector] = connect;
        this[kPipelining] = pipelining != null ? pipelining : 1;
        this[kMaxHeadersSize] = maxHeaderSize;
        this[kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 600e3 : keepAliveMaxTimeout;
        this[kKeepAliveTimeoutThreshold] = keepAliveTimeoutThreshold == null ? 2e3 : keepAliveTimeoutThreshold;
        this[kKeepAliveTimeoutValue] = this[kKeepAliveDefaultTimeout];
        this[kServerName] = null;
        this[kLocalAddress] = localAddress != null ? localAddress : null;
        this[kResuming] = 0; // 0, idle, 1, scheduled, 2 resuming
        this[kNeedDrain] = 0; // 0, idle, 1, scheduled, 2 resuming
        this[kHostHeader] = `host: ${this[kUrl].hostname}${this[kUrl].port ? `:${this[kUrl].port}` : ''}\r\n`;
        this[kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 300e3;
        this[kHeadersTimeout] = headersTimeout != null ? headersTimeout : 300e3;
        this[kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[kMaxRequests] = maxRequestsPerClient;
        this[kClosedResolve] = null;
        this[kMaxResponseSize] = maxResponseSize > -1 ? maxResponseSize : -1;
        this[kMaxConcurrentStreams] = maxConcurrentStreams != null ? maxConcurrentStreams : 100; // Max peerConcurrentStreams for a Node h2 server
        this[kHTTPContext] = null;
        // kQueue is built up of 3 sections separated by
        // the kRunningIdx and kPendingIdx indices.
        // |   complete   |   running   |   pending   |
        //                ^ kRunningIdx ^ kPendingIdx ^ kQueue.length
        // kRunningIdx points to the first running element.
        // kPendingIdx points to the first pending element.
        // This implements a fast queue with an amortized
        // time of O(1).
        this[kQueue] = [];
        this[kRunningIdx] = 0;
        this[kPendingIdx] = 0;
        this[kResume] = (sync)=>resume(this, sync);
        this[kOnError] = (err)=>onError(this, err);
    }
    get pipelining() {
        return this[kPipelining];
    }
    set pipelining(value) {
        this[kPipelining] = value;
        this[kResume](true);
    }
    get stats() {
        return new ClientStats(this);
    }
    get [kPending]() {
        return this[kQueue].length - this[kPendingIdx];
    }
    get [kRunning]() {
        return this[kPendingIdx] - this[kRunningIdx];
    }
    get [kSize]() {
        return this[kQueue].length - this[kRunningIdx];
    }
    get [kConnected]() {
        return !!this[kHTTPContext] && !this[kConnecting] && !this[kHTTPContext].destroyed;
    }
    get [kBusy]() {
        return Boolean(this[kHTTPContext]?.busy(null) || this[kSize] >= (getPipelining(this) || 1) || this[kPending] > 0);
    }
    /* istanbul ignore: only used for test */ [kConnect](cb) {
        connect(this);
        this.once('connect', cb);
    }
    [kDispatch](opts, handler) {
        const request = new Request(this[kUrl].origin, opts, handler);
        this[kQueue].push(request);
        if (this[kResuming]) {
        // Do nothing.
        } else if (util.bodyLength(request.body) == null && util.isIterable(request.body)) {
            // Wait a tick in case stream/iterator is ended in the same tick.
            this[kResuming] = 1;
            queueMicrotask(()=>resume(this));
        } else {
            this[kResume](true);
        }
        if (this[kResuming] && this[kNeedDrain] !== 2 && this[kBusy]) {
            this[kNeedDrain] = 2;
        }
        return this[kNeedDrain] < 2;
    }
    [kClose]() {
        // TODO: for H2 we need to gracefully flush the remaining enqueued
        // request and close each stream.
        return new Promise((resolve)=>{
            if (this[kSize]) {
                this[kClosedResolve] = resolve;
            } else {
                resolve(null);
            }
        });
    }
    [kDestroy](err) {
        return new Promise((resolve)=>{
            const requests = this[kQueue].splice(this[kPendingIdx]);
            for(let i = 0; i < requests.length; i++){
                const request = requests[i];
                util.errorRequest(this, request, err);
            }
            const callback = ()=>{
                if (this[kClosedResolve]) {
                    // TODO (fix): Should we error here with ClientDestroyedError?
                    this[kClosedResolve]();
                    this[kClosedResolve] = null;
                }
                resolve(null);
            };
            if (this[kHTTPContext]) {
                this[kHTTPContext].destroy(err, callback);
                this[kHTTPContext] = null;
            } else {
                queueMicrotask(callback);
            }
            this[kResume]();
        });
    }
}
function onError(client, err) {
    if (client[kRunning] === 0 && err.code !== 'UND_ERR_INFO' && err.code !== 'UND_ERR_SOCKET') {
        // Error is not caused by running request and not a recoverable
        // socket error.
        assert(client[kPendingIdx] === client[kRunningIdx]);
        const requests = client[kQueue].splice(client[kRunningIdx]);
        for(let i = 0; i < requests.length; i++){
            const request = requests[i];
            util.errorRequest(client, request, err);
        }
        assert(client[kSize] === 0);
    }
}
/**
 * @param {Client} client
 * @returns {void}
 */ function connect(client) {
    assert(!client[kConnecting]);
    assert(!client[kHTTPContext]);
    let { host, hostname, protocol, port } = client[kUrl];
    // Resolve ipv6
    if (hostname[0] === '[') {
        const idx = hostname.indexOf(']');
        assert(idx !== -1);
        const ip = hostname.substring(1, idx);
        assert(net.isIPv6(ip));
        hostname = ip;
    }
    client[kConnecting] = true;
    if (channels.beforeConnect.hasSubscribers) {
        channels.beforeConnect.publish({
            connectParams: {
                host,
                hostname,
                protocol,
                port,
                version: client[kHTTPContext]?.version,
                servername: client[kServerName],
                localAddress: client[kLocalAddress]
            },
            connector: client[kConnector]
        });
    }
    client[kConnector]({
        host,
        hostname,
        protocol,
        port,
        servername: client[kServerName],
        localAddress: client[kLocalAddress]
    }, (err, socket)=>{
        if (err) {
            handleConnectError(client, err, {
                host,
                hostname,
                protocol,
                port
            });
            client[kResume]();
            return;
        }
        if (client.destroyed) {
            util.destroy(socket.on('error', noop), new ClientDestroyedError());
            client[kResume]();
            return;
        }
        assert(socket);
        try {
            client[kHTTPContext] = socket.alpnProtocol === 'h2' ? connectH2(client, socket) : connectH1(client, socket);
        } catch (err) {
            socket.destroy().on('error', noop);
            handleConnectError(client, err, {
                host,
                hostname,
                protocol,
                port
            });
            client[kResume]();
            return;
        }
        client[kConnecting] = false;
        socket[kCounter] = 0;
        socket[kMaxRequests] = client[kMaxRequests];
        socket[kClient] = client;
        socket[kError] = null;
        if (channels.connected.hasSubscribers) {
            channels.connected.publish({
                connectParams: {
                    host,
                    hostname,
                    protocol,
                    port,
                    version: client[kHTTPContext]?.version,
                    servername: client[kServerName],
                    localAddress: client[kLocalAddress]
                },
                connector: client[kConnector],
                socket
            });
        }
        client.emit('connect', client[kUrl], [
            client
        ]);
        client[kResume]();
    });
}
function handleConnectError(client, err, { host, hostname, protocol, port }) {
    if (client.destroyed) {
        return;
    }
    client[kConnecting] = false;
    if (channels.connectError.hasSubscribers) {
        channels.connectError.publish({
            connectParams: {
                host,
                hostname,
                protocol,
                port,
                version: client[kHTTPContext]?.version,
                servername: client[kServerName],
                localAddress: client[kLocalAddress]
            },
            connector: client[kConnector],
            error: err
        });
    }
    if (err.code === 'ERR_TLS_CERT_ALTNAME_INVALID') {
        assert(client[kRunning] === 0);
        while(client[kPending] > 0 && client[kQueue][client[kPendingIdx]].servername === client[kServerName]){
            const request = client[kQueue][client[kPendingIdx]++];
            util.errorRequest(client, request, err);
        }
    } else {
        onError(client, err);
    }
    client.emit('connectionError', client[kUrl], [
        client
    ], err);
}
function emitDrain(client) {
    client[kNeedDrain] = 0;
    client.emit('drain', client[kUrl], [
        client
    ]);
}
function resume(client, sync) {
    if (client[kResuming] === 2) {
        return;
    }
    client[kResuming] = 2;
    _resume(client, sync);
    client[kResuming] = 0;
    if (client[kRunningIdx] > 256) {
        client[kQueue].splice(0, client[kRunningIdx]);
        client[kPendingIdx] -= client[kRunningIdx];
        client[kRunningIdx] = 0;
    }
}
function _resume(client, sync) {
    while(true){
        if (client.destroyed) {
            assert(client[kPending] === 0);
            return;
        }
        if (client[kClosedResolve] && !client[kSize]) {
            client[kClosedResolve]();
            client[kClosedResolve] = null;
            return;
        }
        if (client[kHTTPContext]) {
            client[kHTTPContext].resume();
        }
        if (client[kBusy]) {
            client[kNeedDrain] = 2;
        } else if (client[kNeedDrain] === 2) {
            if (sync) {
                client[kNeedDrain] = 1;
                queueMicrotask(()=>emitDrain(client));
            } else {
                emitDrain(client);
            }
            continue;
        }
        if (client[kPending] === 0) {
            return;
        }
        if (client[kRunning] >= (getPipelining(client) || 1)) {
            return;
        }
        const request = client[kQueue][client[kPendingIdx]];
        if (client[kUrl].protocol === 'https:' && client[kServerName] !== request.servername) {
            if (client[kRunning] > 0) {
                return;
            }
            client[kServerName] = request.servername;
            client[kHTTPContext]?.destroy(new InformationalError('servername changed'), ()=>{
                client[kHTTPContext] = null;
                resume(client);
            });
        }
        if (client[kConnecting]) {
            return;
        }
        if (!client[kHTTPContext]) {
            connect(client);
            return;
        }
        if (client[kHTTPContext].destroyed) {
            return;
        }
        if (client[kHTTPContext].busy(request)) {
            return;
        }
        if (!request.aborted && client[kHTTPContext].write(request)) {
            client[kPendingIdx]++;
        } else {
            client[kQueue].splice(client[kPendingIdx], 1);
        }
    }
}
module.exports = Client;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/fixed-queue.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Extracted from node/lib/internal/fixed_queue.js
// Currently optimal queue size, tested on V8 6.0 - 6.6. Must be power of two.
const kSize = 2048;
const kMask = kSize - 1;
// The FixedQueue is implemented as a singly-linked list of fixed-size
// circular buffers. It looks something like this:
//
//  head                                                       tail
//    |                                                          |
//    v                                                          v
// +-----------+ <-----\       +-----------+ <------\         +-----------+
// |  [null]   |        \----- |   next    |         \------- |   next    |
// +-----------+               +-----------+                  +-----------+
// |   item    | <-- bottom    |   item    | <-- bottom       | undefined |
// |   item    |               |   item    |                  | undefined |
// |   item    |               |   item    |                  | undefined |
// |   item    |               |   item    |                  | undefined |
// |   item    |               |   item    |       bottom --> |   item    |
// |   item    |               |   item    |                  |   item    |
// |    ...    |               |    ...    |                  |    ...    |
// |   item    |               |   item    |                  |   item    |
// |   item    |               |   item    |                  |   item    |
// | undefined | <-- top       |   item    |                  |   item    |
// | undefined |               |   item    |                  |   item    |
// | undefined |               | undefined | <-- top  top --> | undefined |
// +-----------+               +-----------+                  +-----------+
//
// Or, if there is only one circular buffer, it looks something
// like either of these:
//
//  head   tail                                 head   tail
//    |     |                                     |     |
//    v     v                                     v     v
// +-----------+                               +-----------+
// |  [null]   |                               |  [null]   |
// +-----------+                               +-----------+
// | undefined |                               |   item    |
// | undefined |                               |   item    |
// |   item    | <-- bottom            top --> | undefined |
// |   item    |                               | undefined |
// | undefined | <-- top            bottom --> |   item    |
// | undefined |                               |   item    |
// +-----------+                               +-----------+
//
// Adding a value means moving `top` forward by one, removing means
// moving `bottom` forward by one. After reaching the end, the queue
// wraps around.
//
// When `top === bottom` the current queue is empty and when
// `top + 1 === bottom` it's full. This wastes a single space of storage
// but allows much quicker checks.
/**
 * @type {FixedCircularBuffer}
 * @template T
 */ class FixedCircularBuffer {
    /** @type {number} */ bottom = 0;
    /** @type {number} */ top = 0;
    /** @type {Array<T|undefined>} */ list = new Array(kSize).fill(undefined);
    /** @type {T|null} */ next = null;
    /** @returns {boolean} */ isEmpty() {
        return this.top === this.bottom;
    }
    /** @returns {boolean} */ isFull() {
        return (this.top + 1 & kMask) === this.bottom;
    }
    /**
   * @param {T} data
   * @returns {void}
   */ push(data) {
        this.list[this.top] = data;
        this.top = this.top + 1 & kMask;
    }
    /** @returns {T|null} */ shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === undefined) {
            return null;
        }
        this.list[this.bottom] = undefined;
        this.bottom = this.bottom + 1 & kMask;
        return nextItem;
    }
}
/**
 * @template T
 */ module.exports = class FixedQueue {
    constructor(){
        /** @type {FixedCircularBuffer<T>} */ this.head = this.tail = new FixedCircularBuffer();
    }
    /** @returns {boolean} */ isEmpty() {
        return this.head.isEmpty();
    }
    /** @param {T} data */ push(data) {
        if (this.head.isFull()) {
            // Head is full: Creates a new queue, sets the old queue's `.next` to it,
            // and sets it as the new main queue.
            this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
    }
    /** @returns {T|null} */ shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
            // If there is another queue, it forms the new tail.
            this.tail = tail.next;
            tail.next = null;
        }
        return next;
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool-base.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { PoolStats } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/util/stats.js [app-ssr] (ecmascript)");
const DispatcherBase = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher-base.js [app-ssr] (ecmascript)");
const FixedQueue = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/fixed-queue.js [app-ssr] (ecmascript)");
const { kConnected, kSize, kRunning, kPending, kQueued, kBusy, kFree, kUrl, kClose, kDestroy, kDispatch } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const kClients = Symbol('clients');
const kNeedDrain = Symbol('needDrain');
const kQueue = Symbol('queue');
const kClosedResolve = Symbol('closed resolve');
const kOnDrain = Symbol('onDrain');
const kOnConnect = Symbol('onConnect');
const kOnDisconnect = Symbol('onDisconnect');
const kOnConnectionError = Symbol('onConnectionError');
const kGetDispatcher = Symbol('get dispatcher');
const kAddClient = Symbol('add client');
const kRemoveClient = Symbol('remove client');
class PoolBase extends DispatcherBase {
    [kQueue] = new FixedQueue();
    [kQueued] = 0;
    [kClients] = [];
    [kNeedDrain] = false;
    [kOnDrain](client, origin, targets) {
        const queue = this[kQueue];
        let needDrain = false;
        while(!needDrain){
            const item = queue.shift();
            if (!item) {
                break;
            }
            this[kQueued]--;
            needDrain = !client.dispatch(item.opts, item.handler);
        }
        client[kNeedDrain] = needDrain;
        if (!needDrain && this[kNeedDrain]) {
            this[kNeedDrain] = false;
            this.emit('drain', origin, [
                this,
                ...targets
            ]);
        }
        if (this[kClosedResolve] && queue.isEmpty()) {
            const closeAll = new Array(this[kClients].length);
            for(let i = 0; i < this[kClients].length; i++){
                closeAll[i] = this[kClients][i].close();
            }
            Promise.all(closeAll).then(this[kClosedResolve]);
        }
    }
    [kOnConnect] = (origin, targets)=>{
        this.emit('connect', origin, [
            this,
            ...targets
        ]);
    };
    [kOnDisconnect] = (origin, targets, err)=>{
        this.emit('disconnect', origin, [
            this,
            ...targets
        ], err);
    };
    [kOnConnectionError] = (origin, targets, err)=>{
        this.emit('connectionError', origin, [
            this,
            ...targets
        ], err);
    };
    get [kBusy]() {
        return this[kNeedDrain];
    }
    get [kConnected]() {
        let ret = 0;
        for (const { [kConnected]: connected } of this[kClients]){
            ret += connected;
        }
        return ret;
    }
    get [kFree]() {
        let ret = 0;
        for (const { [kConnected]: connected, [kNeedDrain]: needDrain } of this[kClients]){
            ret += connected && !needDrain;
        }
        return ret;
    }
    get [kPending]() {
        let ret = this[kQueued];
        for (const { [kPending]: pending } of this[kClients]){
            ret += pending;
        }
        return ret;
    }
    get [kRunning]() {
        let ret = 0;
        for (const { [kRunning]: running } of this[kClients]){
            ret += running;
        }
        return ret;
    }
    get [kSize]() {
        let ret = this[kQueued];
        for (const { [kSize]: size } of this[kClients]){
            ret += size;
        }
        return ret;
    }
    get stats() {
        return new PoolStats(this);
    }
    [kClose]() {
        if (this[kQueue].isEmpty()) {
            const closeAll = new Array(this[kClients].length);
            for(let i = 0; i < this[kClients].length; i++){
                closeAll[i] = this[kClients][i].close();
            }
            return Promise.all(closeAll);
        } else {
            return new Promise((resolve)=>{
                this[kClosedResolve] = resolve;
            });
        }
    }
    [kDestroy](err) {
        while(true){
            const item = this[kQueue].shift();
            if (!item) {
                break;
            }
            item.handler.onError(err);
        }
        const destroyAll = new Array(this[kClients].length);
        for(let i = 0; i < this[kClients].length; i++){
            destroyAll[i] = this[kClients][i].destroy(err);
        }
        return Promise.all(destroyAll);
    }
    [kDispatch](opts, handler) {
        const dispatcher = this[kGetDispatcher]();
        if (!dispatcher) {
            this[kNeedDrain] = true;
            this[kQueue].push({
                opts,
                handler
            });
            this[kQueued]++;
        } else if (!dispatcher.dispatch(opts, handler)) {
            dispatcher[kNeedDrain] = true;
            this[kNeedDrain] = !this[kGetDispatcher]();
        }
        return !this[kNeedDrain];
    }
    [kAddClient](client) {
        client.on('drain', this[kOnDrain].bind(this, client)).on('connect', this[kOnConnect]).on('disconnect', this[kOnDisconnect]).on('connectionError', this[kOnConnectionError]);
        this[kClients].push(client);
        if (this[kNeedDrain]) {
            queueMicrotask(()=>{
                if (this[kNeedDrain]) {
                    this[kOnDrain](client, client[kUrl], [
                        client,
                        this
                    ]);
                }
            });
        }
        return this;
    }
    [kRemoveClient](client) {
        client.close(()=>{
            const idx = this[kClients].indexOf(client);
            if (idx !== -1) {
                this[kClients].splice(idx, 1);
            }
        });
        this[kNeedDrain] = this[kClients].some((dispatcher)=>!dispatcher[kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
    }
}
module.exports = {
    PoolBase,
    kClients,
    kNeedDrain,
    kAddClient,
    kRemoveClient,
    kGetDispatcher
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { PoolBase, kClients, kNeedDrain, kAddClient, kGetDispatcher, kRemoveClient } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool-base.js [app-ssr] (ecmascript)");
const Client = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client.js [app-ssr] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const { kUrl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const buildConnector = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/connect.js [app-ssr] (ecmascript)");
const kOptions = Symbol('options');
const kConnections = Symbol('connections');
const kFactory = Symbol('factory');
function defaultFactory(origin, opts) {
    return new Client(origin, opts);
}
class Pool extends PoolBase {
    constructor(origin, { connections, factory = defaultFactory, connect, connectTimeout, tls, maxCachedSessions, socketPath, autoSelectFamily, autoSelectFamilyAttemptTimeout, allowH2, clientTtl, ...options } = {}){
        if (connections != null && (!Number.isFinite(connections) || connections < 0)) {
            throw new InvalidArgumentError('invalid connections');
        }
        if (typeof factory !== 'function') {
            throw new InvalidArgumentError('factory must be a function.');
        }
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') {
            throw new InvalidArgumentError('connect must be a function or an object');
        }
        if (typeof connect !== 'function') {
            connect = buildConnector({
                ...tls,
                maxCachedSessions,
                allowH2,
                socketPath,
                timeout: connectTimeout,
                ...typeof autoSelectFamily === 'boolean' ? {
                    autoSelectFamily,
                    autoSelectFamilyAttemptTimeout
                } : undefined,
                ...connect
            });
        }
        super();
        this[kConnections] = connections || null;
        this[kUrl] = util.parseOrigin(origin);
        this[kOptions] = {
            ...util.deepClone(options),
            connect,
            allowH2,
            clientTtl
        };
        this[kOptions].interceptors = options.interceptors ? {
            ...options.interceptors
        } : undefined;
        this[kFactory] = factory;
        this.on('connect', (origin, targets)=>{
            if (clientTtl != null && clientTtl > 0) {
                for (const target of targets){
                    Object.assign(target, {
                        ttl: Date.now()
                    });
                }
            }
        });
        this.on('connectionError', (origin, targets, error)=>{
            // If a connection error occurs, we remove the client from the pool,
            // and emit a connectionError event. They will not be re-used.
            // Fixes https://github.com/nodejs/undici/issues/3895
            for (const target of targets){
                // Do not use kRemoveClient here, as it will close the client,
                // but the client cannot be closed in this state.
                const idx = this[kClients].indexOf(target);
                if (idx !== -1) {
                    this[kClients].splice(idx, 1);
                }
            }
        });
    }
    [kGetDispatcher]() {
        const clientTtlOption = this[kOptions].clientTtl;
        for (const client of this[kClients]){
            // check ttl of client and if it's stale, remove it from the pool
            if (clientTtlOption != null && clientTtlOption > 0 && client.ttl && Date.now() - client.ttl > clientTtlOption) {
                this[kRemoveClient](client);
            } else if (!client[kNeedDrain]) {
                return client;
            }
        }
        if (!this[kConnections] || this[kClients].length < this[kConnections]) {
            const dispatcher = this[kFactory](this[kUrl], this[kOptions]);
            this[kAddClient](dispatcher);
            return dispatcher;
        }
    }
}
module.exports = Pool;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/balanced-pool.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { BalancedPoolMissingUpstreamError, InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const { PoolBase, kClients, kNeedDrain, kAddClient, kRemoveClient, kGetDispatcher } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool-base.js [app-ssr] (ecmascript)");
const Pool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool.js [app-ssr] (ecmascript)");
const { kUrl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const { parseOrigin } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const kFactory = Symbol('factory');
const kOptions = Symbol('options');
const kGreatestCommonDivisor = Symbol('kGreatestCommonDivisor');
const kCurrentWeight = Symbol('kCurrentWeight');
const kIndex = Symbol('kIndex');
const kWeight = Symbol('kWeight');
const kMaxWeightPerServer = Symbol('kMaxWeightPerServer');
const kErrorPenalty = Symbol('kErrorPenalty');
/**
 * Calculate the greatest common divisor of two numbers by
 * using the Euclidean algorithm.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */ function getGreatestCommonDivisor(a, b) {
    if (a === 0) return b;
    while(b !== 0){
        const t = b;
        b = a % b;
        a = t;
    }
    return a;
}
function defaultFactory(origin, opts) {
    return new Pool(origin, opts);
}
class BalancedPool extends PoolBase {
    constructor(upstreams = [], { factory = defaultFactory, ...opts } = {}){
        if (typeof factory !== 'function') {
            throw new InvalidArgumentError('factory must be a function.');
        }
        super();
        this[kOptions] = opts;
        this[kIndex] = -1;
        this[kCurrentWeight] = 0;
        this[kMaxWeightPerServer] = this[kOptions].maxWeightPerServer || 100;
        this[kErrorPenalty] = this[kOptions].errorPenalty || 15;
        if (!Array.isArray(upstreams)) {
            upstreams = [
                upstreams
            ];
        }
        this[kFactory] = factory;
        for (const upstream of upstreams){
            this.addUpstream(upstream);
        }
        this._updateBalancedPoolStats();
    }
    addUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        if (this[kClients].find((pool)=>pool[kUrl].origin === upstreamOrigin && pool.closed !== true && pool.destroyed !== true)) {
            return this;
        }
        const pool = this[kFactory](upstreamOrigin, Object.assign({}, this[kOptions]));
        this[kAddClient](pool);
        pool.on('connect', ()=>{
            pool[kWeight] = Math.min(this[kMaxWeightPerServer], pool[kWeight] + this[kErrorPenalty]);
        });
        pool.on('connectionError', ()=>{
            pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
            this._updateBalancedPoolStats();
        });
        pool.on('disconnect', (...args)=>{
            const err = args[2];
            if (err && err.code === 'UND_ERR_SOCKET') {
                // decrease the weight of the pool.
                pool[kWeight] = Math.max(1, pool[kWeight] - this[kErrorPenalty]);
                this._updateBalancedPoolStats();
            }
        });
        for (const client of this[kClients]){
            client[kWeight] = this[kMaxWeightPerServer];
        }
        this._updateBalancedPoolStats();
        return this;
    }
    _updateBalancedPoolStats() {
        let result = 0;
        for(let i = 0; i < this[kClients].length; i++){
            result = getGreatestCommonDivisor(this[kClients][i][kWeight], result);
        }
        this[kGreatestCommonDivisor] = result;
    }
    removeUpstream(upstream) {
        const upstreamOrigin = parseOrigin(upstream).origin;
        const pool = this[kClients].find((pool)=>pool[kUrl].origin === upstreamOrigin && pool.closed !== true && pool.destroyed !== true);
        if (pool) {
            this[kRemoveClient](pool);
        }
        return this;
    }
    get upstreams() {
        return this[kClients].filter((dispatcher)=>dispatcher.closed !== true && dispatcher.destroyed !== true).map((p)=>p[kUrl].origin);
    }
    [kGetDispatcher]() {
        // We validate that pools is greater than 0,
        // otherwise we would have to wait until an upstream
        // is added, which might never happen.
        if (this[kClients].length === 0) {
            throw new BalancedPoolMissingUpstreamError();
        }
        const dispatcher = this[kClients].find((dispatcher)=>!dispatcher[kNeedDrain] && dispatcher.closed !== true && dispatcher.destroyed !== true);
        if (!dispatcher) {
            return;
        }
        const allClientsBusy = this[kClients].map((pool)=>pool[kNeedDrain]).reduce((a, b)=>a && b, true);
        if (allClientsBusy) {
            return;
        }
        let counter = 0;
        let maxWeightIndex = this[kClients].findIndex((pool)=>!pool[kNeedDrain]);
        while(counter++ < this[kClients].length){
            this[kIndex] = (this[kIndex] + 1) % this[kClients].length;
            const pool = this[kClients][this[kIndex]];
            // find pool index with the largest weight
            if (pool[kWeight] > this[kClients][maxWeightIndex][kWeight] && !pool[kNeedDrain]) {
                maxWeightIndex = this[kIndex];
            }
            // decrease the current weight every `this[kClients].length`.
            if (this[kIndex] === 0) {
                // Set the current weight to the next lower weight.
                this[kCurrentWeight] = this[kCurrentWeight] - this[kGreatestCommonDivisor];
                if (this[kCurrentWeight] <= 0) {
                    this[kCurrentWeight] = this[kMaxWeightPerServer];
                }
            }
            if (pool[kWeight] >= this[kCurrentWeight] && !pool[kNeedDrain]) {
                return pool;
            }
        }
        this[kCurrentWeight] = this[kClients][maxWeightIndex][kWeight];
        this[kIndex] = maxWeightIndex;
        return this[kClients][maxWeightIndex];
    }
}
module.exports = BalancedPool;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/agent.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { InvalidArgumentError, MaxOriginsReachedError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const { kClients, kRunning, kClose, kDestroy, kDispatch, kUrl } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const DispatcherBase = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher-base.js [app-ssr] (ecmascript)");
const Pool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool.js [app-ssr] (ecmascript)");
const Client = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client.js [app-ssr] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const kOnConnect = Symbol('onConnect');
const kOnDisconnect = Symbol('onDisconnect');
const kOnConnectionError = Symbol('onConnectionError');
const kOnDrain = Symbol('onDrain');
const kFactory = Symbol('factory');
const kOptions = Symbol('options');
const kOrigins = Symbol('origins');
function defaultFactory(origin, opts) {
    return opts && opts.connections === 1 ? new Client(origin, opts) : new Pool(origin, opts);
}
class Agent extends DispatcherBase {
    constructor({ factory = defaultFactory, maxOrigins = Infinity, connect, ...options } = {}){
        if (typeof factory !== 'function') {
            throw new InvalidArgumentError('factory must be a function.');
        }
        if (connect != null && typeof connect !== 'function' && typeof connect !== 'object') {
            throw new InvalidArgumentError('connect must be a function or an object');
        }
        if (typeof maxOrigins !== 'number' || Number.isNaN(maxOrigins) || maxOrigins <= 0) {
            throw new InvalidArgumentError('maxOrigins must be a number greater than 0');
        }
        super();
        if (connect && typeof connect !== 'function') {
            connect = {
                ...connect
            };
        }
        this[kOptions] = {
            ...util.deepClone(options),
            maxOrigins,
            connect
        };
        this[kFactory] = factory;
        this[kClients] = new Map();
        this[kOrigins] = new Set();
        this[kOnDrain] = (origin, targets)=>{
            this.emit('drain', origin, [
                this,
                ...targets
            ]);
        };
        this[kOnConnect] = (origin, targets)=>{
            this.emit('connect', origin, [
                this,
                ...targets
            ]);
        };
        this[kOnDisconnect] = (origin, targets, err)=>{
            this.emit('disconnect', origin, [
                this,
                ...targets
            ], err);
        };
        this[kOnConnectionError] = (origin, targets, err)=>{
            this.emit('connectionError', origin, [
                this,
                ...targets
            ], err);
        };
    }
    get [kRunning]() {
        let ret = 0;
        for (const { dispatcher } of this[kClients].values()){
            ret += dispatcher[kRunning];
        }
        return ret;
    }
    [kDispatch](opts, handler) {
        let key;
        if (opts.origin && (typeof opts.origin === 'string' || opts.origin instanceof URL)) {
            key = String(opts.origin);
        } else {
            throw new InvalidArgumentError('opts.origin must be a non-empty string or URL.');
        }
        if (this[kOrigins].size >= this[kOptions].maxOrigins && !this[kOrigins].has(key)) {
            throw new MaxOriginsReachedError();
        }
        const result = this[kClients].get(key);
        let dispatcher = result && result.dispatcher;
        if (!dispatcher) {
            const closeClientIfUnused = (connected)=>{
                const result = this[kClients].get(key);
                if (result) {
                    if (connected) result.count -= 1;
                    if (result.count <= 0) {
                        this[kClients].delete(key);
                        result.dispatcher.close();
                    }
                    this[kOrigins].delete(key);
                }
            };
            dispatcher = this[kFactory](opts.origin, this[kOptions]).on('drain', this[kOnDrain]).on('connect', (origin, targets)=>{
                const result = this[kClients].get(key);
                if (result) {
                    result.count += 1;
                }
                this[kOnConnect](origin, targets);
            }).on('disconnect', (origin, targets, err)=>{
                closeClientIfUnused(true);
                this[kOnDisconnect](origin, targets, err);
            }).on('connectionError', (origin, targets, err)=>{
                closeClientIfUnused(false);
                this[kOnConnectionError](origin, targets, err);
            });
            this[kClients].set(key, {
                count: 0,
                dispatcher
            });
            this[kOrigins].add(key);
        }
        return dispatcher.dispatch(opts, handler);
    }
    [kClose]() {
        const closePromises = [];
        for (const { dispatcher } of this[kClients].values()){
            closePromises.push(dispatcher.close());
        }
        this[kClients].clear();
        return Promise.all(closePromises);
    }
    [kDestroy](err) {
        const destroyPromises = [];
        for (const { dispatcher } of this[kClients].values()){
            destroyPromises.push(dispatcher.destroy(err));
        }
        this[kClients].clear();
        return Promise.all(destroyPromises);
    }
    get stats() {
        const allClientStats = {};
        for (const { dispatcher } of this[kClients].values()){
            if (dispatcher.stats) {
                allClientStats[dispatcher[kUrl].origin] = dispatcher.stats;
            }
        }
        return allClientStats;
    }
}
module.exports = Agent;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/proxy-agent.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { kProxy, kClose, kDestroy, kDispatch } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const Agent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/agent.js [app-ssr] (ecmascript)");
const Pool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool.js [app-ssr] (ecmascript)");
const DispatcherBase = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher-base.js [app-ssr] (ecmascript)");
const { InvalidArgumentError, RequestAbortedError, SecureProxyConnectionError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const buildConnector = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/connect.js [app-ssr] (ecmascript)");
const Client = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client.js [app-ssr] (ecmascript)");
const kAgent = Symbol('proxy agent');
const kClient = Symbol('proxy client');
const kProxyHeaders = Symbol('proxy headers');
const kRequestTls = Symbol('request tls settings');
const kProxyTls = Symbol('proxy tls settings');
const kConnectEndpoint = Symbol('connect endpoint function');
const kTunnelProxy = Symbol('tunnel proxy');
function defaultProtocolPort(protocol) {
    return protocol === 'https:' ? 443 : 80;
}
function defaultFactory(origin, opts) {
    return new Pool(origin, opts);
}
const noop = ()=>{};
function defaultAgentFactory(origin, opts) {
    if (opts.connections === 1) {
        return new Client(origin, opts);
    }
    return new Pool(origin, opts);
}
class Http1ProxyWrapper extends DispatcherBase {
    #client;
    constructor(proxyUrl, { headers = {}, connect, factory }){
        if (!proxyUrl) {
            throw new InvalidArgumentError('Proxy URL is mandatory');
        }
        super();
        this[kProxyHeaders] = headers;
        if (factory) {
            this.#client = factory(proxyUrl, {
                connect
            });
        } else {
            this.#client = new Client(proxyUrl, {
                connect
            });
        }
    }
    [kDispatch](opts, handler) {
        const onHeaders = handler.onHeaders;
        handler.onHeaders = function(statusCode, data, resume) {
            if (statusCode === 407) {
                if (typeof handler.onError === 'function') {
                    handler.onError(new InvalidArgumentError('Proxy Authentication Required (407)'));
                }
                return;
            }
            if (onHeaders) onHeaders.call(this, statusCode, data, resume);
        };
        // Rewrite request as an HTTP1 Proxy request, without tunneling.
        const { origin, path = '/', headers = {} } = opts;
        opts.path = origin + path;
        if (!('host' in headers) && !('Host' in headers)) {
            const { host } = new URL(origin);
            headers.host = host;
        }
        opts.headers = {
            ...this[kProxyHeaders],
            ...headers
        };
        return this.#client[kDispatch](opts, handler);
    }
    [kClose]() {
        return this.#client.close();
    }
    [kDestroy](err) {
        return this.#client.destroy(err);
    }
}
class ProxyAgent extends DispatcherBase {
    constructor(opts){
        if (!opts || typeof opts === 'object' && !(opts instanceof URL) && !opts.uri) {
            throw new InvalidArgumentError('Proxy uri is mandatory');
        }
        const { clientFactory = defaultFactory } = opts;
        if (typeof clientFactory !== 'function') {
            throw new InvalidArgumentError('Proxy opts.clientFactory must be a function.');
        }
        const { proxyTunnel = true } = opts;
        super();
        const url = this.#getUrl(opts);
        const { href, origin, port, protocol, username, password, hostname: proxyHostname } = url;
        this[kProxy] = {
            uri: href,
            protocol
        };
        this[kRequestTls] = opts.requestTls;
        this[kProxyTls] = opts.proxyTls;
        this[kProxyHeaders] = opts.headers || {};
        this[kTunnelProxy] = proxyTunnel;
        if (opts.auth && opts.token) {
            throw new InvalidArgumentError('opts.auth cannot be used in combination with opts.token');
        } else if (opts.auth) {
            /* @deprecated in favour of opts.token */ this[kProxyHeaders]['proxy-authorization'] = `Basic ${opts.auth}`;
        } else if (opts.token) {
            this[kProxyHeaders]['proxy-authorization'] = opts.token;
        } else if (username && password) {
            this[kProxyHeaders]['proxy-authorization'] = `Basic ${Buffer.from(`${decodeURIComponent(username)}:${decodeURIComponent(password)}`).toString('base64')}`;
        }
        const connect = buildConnector({
            ...opts.proxyTls
        });
        this[kConnectEndpoint] = buildConnector({
            ...opts.requestTls
        });
        const agentFactory = opts.factory || defaultAgentFactory;
        const factory = (origin, options)=>{
            const { protocol } = new URL(origin);
            if (!this[kTunnelProxy] && protocol === 'http:' && this[kProxy].protocol === 'http:') {
                return new Http1ProxyWrapper(this[kProxy].uri, {
                    headers: this[kProxyHeaders],
                    connect,
                    factory: agentFactory
                });
            }
            return agentFactory(origin, options);
        };
        this[kClient] = clientFactory(url, {
            connect
        });
        this[kAgent] = new Agent({
            ...opts,
            factory,
            connect: async (opts, callback)=>{
                let requestedPath = opts.host;
                if (!opts.port) {
                    requestedPath += `:${defaultProtocolPort(opts.protocol)}`;
                }
                try {
                    const { socket, statusCode } = await this[kClient].connect({
                        origin,
                        port,
                        path: requestedPath,
                        signal: opts.signal,
                        headers: {
                            ...this[kProxyHeaders],
                            host: opts.host,
                            ...opts.connections == null || opts.connections > 0 ? {
                                'proxy-connection': 'keep-alive'
                            } : {}
                        },
                        servername: this[kProxyTls]?.servername || proxyHostname
                    });
                    if (statusCode !== 200) {
                        socket.on('error', noop).destroy();
                        callback(new RequestAbortedError(`Proxy response (${statusCode}) !== 200 when HTTP Tunneling`));
                    }
                    if (opts.protocol !== 'https:') {
                        callback(null, socket);
                        return;
                    }
                    let servername;
                    if (this[kRequestTls]) {
                        servername = this[kRequestTls].servername;
                    } else {
                        servername = opts.servername;
                    }
                    this[kConnectEndpoint]({
                        ...opts,
                        servername,
                        httpSocket: socket
                    }, callback);
                } catch (err) {
                    if (err.code === 'ERR_TLS_CERT_ALTNAME_INVALID') {
                        // Throw a custom error to avoid loop in client.js#connect
                        callback(new SecureProxyConnectionError(err));
                    } else {
                        callback(err);
                    }
                }
            }
        });
    }
    dispatch(opts, handler) {
        const headers = buildHeaders(opts.headers);
        throwIfProxyAuthIsSent(headers);
        if (headers && !('host' in headers) && !('Host' in headers)) {
            const { host } = new URL(opts.origin);
            headers.host = host;
        }
        return this[kAgent].dispatch({
            ...opts,
            headers
        }, handler);
    }
    /**
   * @param {import('../../types/proxy-agent').ProxyAgent.Options | string | URL} opts
   * @returns {URL}
   */ #getUrl(opts) {
        if (typeof opts === 'string') {
            return new URL(opts);
        } else if (opts instanceof URL) {
            return opts;
        } else {
            return new URL(opts.uri);
        }
    }
    [kClose]() {
        return Promise.all([
            this[kAgent].close(),
            this[kClient].close()
        ]);
    }
    [kDestroy]() {
        return Promise.all([
            this[kAgent].destroy(),
            this[kClient].destroy()
        ]);
    }
}
/**
 * @param {string[] | Record<string, string>} headers
 * @returns {Record<string, string>}
 */ function buildHeaders(headers) {
    // When using undici.fetch, the headers list is stored
    // as an array.
    if (Array.isArray(headers)) {
        /** @type {Record<string, string>} */ const headersPair = {};
        for(let i = 0; i < headers.length; i += 2){
            headersPair[headers[i]] = headers[i + 1];
        }
        return headersPair;
    }
    return headers;
}
/**
 * @param {Record<string, string>} headers
 *
 * Previous versions of ProxyAgent suggests the Proxy-Authorization in request headers
 * Nevertheless, it was changed and to avoid a security vulnerability by end users
 * this check was created.
 * It should be removed in the next major version for performance reasons
 */ function throwIfProxyAuthIsSent(headers) {
    const existProxyAuth = headers && Object.keys(headers).find((key)=>key.toLowerCase() === 'proxy-authorization');
    if (existProxyAuth) {
        throw new InvalidArgumentError('Proxy-Authorization should be sent in ProxyAgent constructor');
    }
}
module.exports = ProxyAgent;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/env-http-proxy-agent.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const DispatcherBase = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher-base.js [app-ssr] (ecmascript)");
const { kClose, kDestroy, kClosed, kDestroyed, kDispatch, kNoProxyAgent, kHttpProxyAgent, kHttpsProxyAgent } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const ProxyAgent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/proxy-agent.js [app-ssr] (ecmascript)");
const Agent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/agent.js [app-ssr] (ecmascript)");
const DEFAULT_PORTS = {
    'http:': 80,
    'https:': 443
};
class EnvHttpProxyAgent extends DispatcherBase {
    #noProxyValue = null;
    #noProxyEntries = null;
    #opts = null;
    constructor(opts = {}){
        super();
        this.#opts = opts;
        const { httpProxy, httpsProxy, noProxy, ...agentOpts } = opts;
        this[kNoProxyAgent] = new Agent(agentOpts);
        const HTTP_PROXY = httpProxy ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
        if (HTTP_PROXY) {
            this[kHttpProxyAgent] = new ProxyAgent({
                ...agentOpts,
                uri: HTTP_PROXY
            });
        } else {
            this[kHttpProxyAgent] = this[kNoProxyAgent];
        }
        const HTTPS_PROXY = httpsProxy ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
        if (HTTPS_PROXY) {
            this[kHttpsProxyAgent] = new ProxyAgent({
                ...agentOpts,
                uri: HTTPS_PROXY
            });
        } else {
            this[kHttpsProxyAgent] = this[kHttpProxyAgent];
        }
        this.#parseNoProxy();
    }
    [kDispatch](opts, handler) {
        const url = new URL(opts.origin);
        const agent = this.#getProxyAgentForUrl(url);
        return agent.dispatch(opts, handler);
    }
    [kClose]() {
        return Promise.all([
            this[kNoProxyAgent].close(),
            !this[kHttpProxyAgent][kClosed] && this[kHttpProxyAgent].close(),
            !this[kHttpsProxyAgent][kClosed] && this[kHttpsProxyAgent].close()
        ]);
    }
    [kDestroy](err) {
        return Promise.all([
            this[kNoProxyAgent].destroy(err),
            !this[kHttpProxyAgent][kDestroyed] && this[kHttpProxyAgent].destroy(err),
            !this[kHttpsProxyAgent][kDestroyed] && this[kHttpsProxyAgent].destroy(err)
        ]);
    }
    #getProxyAgentForUrl(url) {
        let { protocol, host: hostname, port } = url;
        // Stripping ports in this way instead of using parsedUrl.hostname to make
        // sure that the brackets around IPv6 addresses are kept.
        hostname = hostname.replace(/:\d*$/, '').toLowerCase();
        port = Number.parseInt(port, 10) || DEFAULT_PORTS[protocol] || 0;
        if (!this.#shouldProxy(hostname, port)) {
            return this[kNoProxyAgent];
        }
        if (protocol === 'https:') {
            return this[kHttpsProxyAgent];
        }
        return this[kHttpProxyAgent];
    }
    #shouldProxy(hostname, port) {
        if (this.#noProxyChanged) {
            this.#parseNoProxy();
        }
        if (this.#noProxyEntries.length === 0) {
            return true // Always proxy if NO_PROXY is not set or empty.
            ;
        }
        if (this.#noProxyValue === '*') {
            return false // Never proxy if wildcard is set.
            ;
        }
        for(let i = 0; i < this.#noProxyEntries.length; i++){
            const entry = this.#noProxyEntries[i];
            if (entry.port && entry.port !== port) {
                continue; // Skip if ports don't match.
            }
            if (!/^[.*]/.test(entry.hostname)) {
                // No wildcards, so don't proxy only if there is not an exact match.
                if (hostname === entry.hostname) {
                    return false;
                }
            } else {
                // Don't proxy if the hostname ends with the no_proxy host.
                if (hostname.endsWith(entry.hostname.replace(/^\*/, ''))) {
                    return false;
                }
            }
        }
        return true;
    }
    #parseNoProxy() {
        const noProxyValue = this.#opts.noProxy ?? this.#noProxyEnv;
        const noProxySplit = noProxyValue.split(/[,\s]/);
        const noProxyEntries = [];
        for(let i = 0; i < noProxySplit.length; i++){
            const entry = noProxySplit[i];
            if (!entry) {
                continue;
            }
            const parsed = entry.match(/^(.+):(\d+)$/);
            noProxyEntries.push({
                hostname: (parsed ? parsed[1] : entry).toLowerCase(),
                port: parsed ? Number.parseInt(parsed[2], 10) : 0
            });
        }
        this.#noProxyValue = noProxyValue;
        this.#noProxyEntries = noProxyEntries;
    }
    get #noProxyChanged() {
        if (this.#opts.noProxy !== undefined) {
            return false;
        }
        return this.#noProxyValue !== this.#noProxyEnv;
    }
    get #noProxyEnv() {
        return process.env.no_proxy ?? process.env.NO_PROXY ?? '';
    }
}
module.exports = EnvHttpProxyAgent;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/retry-agent.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Dispatcher = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher.js [app-ssr] (ecmascript)");
const RetryHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/retry-handler.js [app-ssr] (ecmascript)");
class RetryAgent extends Dispatcher {
    #agent = null;
    #options = null;
    constructor(agent, options = {}){
        super(options);
        this.#agent = agent;
        this.#options = options;
    }
    dispatch(opts, handler) {
        const retry = new RetryHandler({
            ...opts,
            retryOptions: this.#options
        }, {
            dispatch: this.#agent.dispatch.bind(this.#agent),
            handler
        });
        return this.#agent.dispatch(opts, retry);
    }
    close() {
        return this.#agent.close();
    }
    destroy() {
        return this.#agent.destroy();
    }
}
module.exports = RetryAgent;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/h2c-client.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { connect } = __turbopack_context__.r("[externals]/node:net [external] (node:net, cjs)");
const { kClose, kDestroy } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
const { InvalidArgumentError } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const Client = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client.js [app-ssr] (ecmascript)");
const DispatcherBase = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher-base.js [app-ssr] (ecmascript)");
class H2CClient extends DispatcherBase {
    #client = null;
    constructor(origin, clientOpts){
        if (typeof origin === 'string') {
            origin = new URL(origin);
        }
        if (origin.protocol !== 'http:') {
            throw new InvalidArgumentError('h2c-client: Only h2c protocol is supported');
        }
        const { connect, maxConcurrentStreams, pipelining, ...opts } = clientOpts ?? {};
        let defaultMaxConcurrentStreams = 100;
        let defaultPipelining = 100;
        if (maxConcurrentStreams != null && Number.isInteger(maxConcurrentStreams) && maxConcurrentStreams > 0) {
            defaultMaxConcurrentStreams = maxConcurrentStreams;
        }
        if (pipelining != null && Number.isInteger(pipelining) && pipelining > 0) {
            defaultPipelining = pipelining;
        }
        if (defaultPipelining > defaultMaxConcurrentStreams) {
            throw new InvalidArgumentError('h2c-client: pipelining cannot be greater than maxConcurrentStreams');
        }
        super();
        this.#client = new Client(origin, {
            ...opts,
            connect: this.#buildConnector(connect),
            maxConcurrentStreams: defaultMaxConcurrentStreams,
            pipelining: defaultPipelining,
            allowH2: true
        });
    }
    #buildConnector(connectOpts) {
        return (opts, callback)=>{
            const timeout = connectOpts?.connectOpts ?? 10e3;
            const { hostname, port, pathname } = opts;
            const socket = connect({
                ...opts,
                host: hostname,
                port,
                pathname
            });
            // Set TCP keep alive options on the socket here instead of in connect() for the case of assigning the socket
            if (opts.keepAlive == null || opts.keepAlive) {
                const keepAliveInitialDelay = opts.keepAliveInitialDelay == null ? 60e3 : opts.keepAliveInitialDelay;
                socket.setKeepAlive(true, keepAliveInitialDelay);
            }
            socket.alpnProtocol = 'h2';
            const clearConnectTimeout = util.setupConnectTimeout(new WeakRef(socket), {
                timeout,
                hostname,
                port
            });
            socket.setNoDelay(true).once('connect', function() {
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
    dispatch(opts, handler) {
        return this.#client.dispatch(opts, handler);
    }
    [kClose]() {
        return this.#client.close();
    }
    [kDestroy]() {
        return this.#client.destroy();
    }
}
module.exports = H2CClient;
}),
];

//# sourceMappingURL=646fa_undici_lib_dispatcher_72c3a203._.js.map