module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const Client = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/client.js [app-ssr] (ecmascript)");
const Dispatcher = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/dispatcher.js [app-ssr] (ecmascript)");
const Pool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/pool.js [app-ssr] (ecmascript)");
const BalancedPool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/balanced-pool.js [app-ssr] (ecmascript)");
const Agent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/agent.js [app-ssr] (ecmascript)");
const ProxyAgent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/proxy-agent.js [app-ssr] (ecmascript)");
const EnvHttpProxyAgent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/env-http-proxy-agent.js [app-ssr] (ecmascript)");
const RetryAgent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/retry-agent.js [app-ssr] (ecmascript)");
const H2CClient = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/dispatcher/h2c-client.js [app-ssr] (ecmascript)");
const errors = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/errors.js [app-ssr] (ecmascript)");
const util = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/util.js [app-ssr] (ecmascript)");
const { InvalidArgumentError } = errors;
const api = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/api/index.js [app-ssr] (ecmascript)");
const buildConnector = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/connect.js [app-ssr] (ecmascript)");
const MockClient = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-client.js [app-ssr] (ecmascript)");
const { MockCallHistory, MockCallHistoryLog } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-call-history.js [app-ssr] (ecmascript)");
const MockAgent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-agent.js [app-ssr] (ecmascript)");
const MockPool = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-pool.js [app-ssr] (ecmascript)");
const SnapshotAgent = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/snapshot-agent.js [app-ssr] (ecmascript)");
const mockErrors = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/mock/mock-errors.js [app-ssr] (ecmascript)");
const RetryHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/retry-handler.js [app-ssr] (ecmascript)");
const { getGlobalDispatcher, setGlobalDispatcher } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/global.js [app-ssr] (ecmascript)");
const DecoratorHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/decorator-handler.js [app-ssr] (ecmascript)");
const RedirectHandler = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/handler/redirect-handler.js [app-ssr] (ecmascript)");
Object.assign(Dispatcher.prototype, api);
module.exports.Dispatcher = Dispatcher;
module.exports.Client = Client;
module.exports.Pool = Pool;
module.exports.BalancedPool = BalancedPool;
module.exports.Agent = Agent;
module.exports.ProxyAgent = ProxyAgent;
module.exports.EnvHttpProxyAgent = EnvHttpProxyAgent;
module.exports.RetryAgent = RetryAgent;
module.exports.H2CClient = H2CClient;
module.exports.RetryHandler = RetryHandler;
module.exports.DecoratorHandler = DecoratorHandler;
module.exports.RedirectHandler = RedirectHandler;
module.exports.interceptors = {
    redirect: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/redirect.js [app-ssr] (ecmascript)"),
    responseError: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/response-error.js [app-ssr] (ecmascript)"),
    retry: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/retry.js [app-ssr] (ecmascript)"),
    dump: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/dump.js [app-ssr] (ecmascript)"),
    dns: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/dns.js [app-ssr] (ecmascript)"),
    cache: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/cache.js [app-ssr] (ecmascript)"),
    decompress: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/interceptor/decompress.js [app-ssr] (ecmascript)")
};
module.exports.cacheStores = {
    MemoryCacheStore: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/cache/memory-cache-store.js [app-ssr] (ecmascript)")
};
const SqliteCacheStore = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/cache/sqlite-cache-store.js [app-ssr] (ecmascript)");
module.exports.cacheStores.SqliteCacheStore = SqliteCacheStore;
module.exports.buildConnector = buildConnector;
module.exports.errors = errors;
module.exports.util = {
    parseHeaders: util.parseHeaders,
    headerNameToString: util.headerNameToString
};
function makeDispatcher(fn) {
    return (url, opts, handler)=>{
        if (typeof opts === 'function') {
            handler = opts;
            opts = null;
        }
        if (!url || typeof url !== 'string' && typeof url !== 'object' && !(url instanceof URL)) {
            throw new InvalidArgumentError('invalid url');
        }
        if (opts != null && typeof opts !== 'object') {
            throw new InvalidArgumentError('invalid opts');
        }
        if (opts && opts.path != null) {
            if (typeof opts.path !== 'string') {
                throw new InvalidArgumentError('invalid opts.path');
            }
            let path = opts.path;
            if (!opts.path.startsWith('/')) {
                path = `/${path}`;
            }
            url = new URL(util.parseOrigin(url).origin + path);
        } else {
            if (!opts) {
                opts = typeof url === 'object' ? url : {};
            }
            url = util.parseURL(url);
        }
        const { agent, dispatcher = getGlobalDispatcher() } = opts;
        if (agent) {
            throw new InvalidArgumentError('unsupported opts.agent. Did you mean opts.client?');
        }
        return fn.call(dispatcher, {
            ...opts,
            origin: url.origin,
            path: url.search ? `${url.pathname}${url.search}` : url.pathname,
            method: opts.method || (opts.body ? 'PUT' : 'GET')
        }, handler);
    };
}
module.exports.setGlobalDispatcher = setGlobalDispatcher;
module.exports.getGlobalDispatcher = getGlobalDispatcher;
const fetchImpl = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/index.js [app-ssr] (ecmascript)").fetch;
module.exports.fetch = function fetch(init, options = undefined) {
    return fetchImpl(init, options).catch((err)=>{
        if (err && typeof err === 'object') {
            Error.captureStackTrace(err);
        }
        throw err;
    });
};
module.exports.Headers = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/headers.js [app-ssr] (ecmascript)").Headers;
module.exports.Response = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/response.js [app-ssr] (ecmascript)").Response;
module.exports.Request = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/request.js [app-ssr] (ecmascript)").Request;
module.exports.FormData = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/formdata.js [app-ssr] (ecmascript)").FormData;
const { setGlobalOrigin, getGlobalOrigin } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/global.js [app-ssr] (ecmascript)");
module.exports.setGlobalOrigin = setGlobalOrigin;
module.exports.getGlobalOrigin = getGlobalOrigin;
const { CacheStorage } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cache/cachestorage.js [app-ssr] (ecmascript)");
const { kConstruct } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/core/symbols.js [app-ssr] (ecmascript)");
module.exports.caches = new CacheStorage(kConstruct);
const { deleteCookie, getCookies, getSetCookies, setCookie, parseCookie } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/cookies/index.js [app-ssr] (ecmascript)");
module.exports.deleteCookie = deleteCookie;
module.exports.getCookies = getCookies;
module.exports.getSetCookies = getSetCookies;
module.exports.setCookie = setCookie;
module.exports.parseCookie = parseCookie;
const { parseMIMEType, serializeAMimeType } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/fetch/data-url.js [app-ssr] (ecmascript)");
module.exports.parseMIMEType = parseMIMEType;
module.exports.serializeAMimeType = serializeAMimeType;
const { CloseEvent, ErrorEvent, MessageEvent } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/events.js [app-ssr] (ecmascript)");
const { WebSocket, ping } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/websocket.js [app-ssr] (ecmascript)");
module.exports.WebSocket = WebSocket;
module.exports.CloseEvent = CloseEvent;
module.exports.ErrorEvent = ErrorEvent;
module.exports.MessageEvent = MessageEvent;
module.exports.ping = ping;
module.exports.WebSocketStream = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/stream/websocketstream.js [app-ssr] (ecmascript)").WebSocketStream;
module.exports.WebSocketError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/websocket/stream/websocketerror.js [app-ssr] (ecmascript)").WebSocketError;
module.exports.request = makeDispatcher(api.request);
module.exports.stream = makeDispatcher(api.stream);
module.exports.pipeline = makeDispatcher(api.pipeline);
module.exports.connect = makeDispatcher(api.connect);
module.exports.upgrade = makeDispatcher(api.upgrade);
module.exports.MockClient = MockClient;
module.exports.MockCallHistory = MockCallHistory;
module.exports.MockCallHistoryLog = MockCallHistoryLog;
module.exports.MockPool = MockPool;
module.exports.MockAgent = MockAgent;
module.exports.SnapshotAgent = SnapshotAgent;
module.exports.mockErrors = mockErrors;
const { EventSource } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/undici@7.16.0/node_modules/undici/lib/web/eventsource/eventsource.js [app-ssr] (ecmascript)");
module.exports.EventSource = EventSource;
function install() {
    globalThis.fetch = module.exports.fetch;
    globalThis.Headers = module.exports.Headers;
    globalThis.Response = module.exports.Response;
    globalThis.Request = module.exports.Request;
    globalThis.FormData = module.exports.FormData;
    globalThis.WebSocket = module.exports.WebSocket;
    globalThis.CloseEvent = module.exports.CloseEvent;
    globalThis.ErrorEvent = module.exports.ErrorEvent;
    globalThis.MessageEvent = module.exports.MessageEvent;
    globalThis.EventSource = module.exports.EventSource;
}
module.exports.install = install;
}),
];

//# sourceMappingURL=646fa_undici_index_e230046a.js.map