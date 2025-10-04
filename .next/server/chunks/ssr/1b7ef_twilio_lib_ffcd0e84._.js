module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/response.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Response {
    constructor(statusCode, body, headers){
        this.statusCode = statusCode;
        this.body = body;
        this.headers = headers;
    }
    toString() {
        return "HTTP " + this.statusCode + " " + this.body;
    }
}
exports.default = Response;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/request.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Request {
    constructor(opts){
        opts = opts || {};
        this.method = opts.method || this.ANY;
        this.url = opts.url || this.ANY;
        this.auth = opts.auth || this.ANY;
        this.params = opts.params || this.ANY;
        this.data = opts.data || this.ANY;
        this.headers = opts.headers || this.ANY;
    }
    get ANY() {
        return "*";
    }
    attributeEqual(lhs, rhs) {
        if (lhs === this.ANY || rhs === this.ANY) {
            return true;
        }
        lhs = lhs || undefined;
        rhs = rhs || undefined;
        if (typeof lhs !== typeof rhs) {
            return false;
        }
        if (typeof lhs !== "object") {
            return lhs === rhs;
        }
        return Object.entries(lhs).sort((a, b)=>a[0].localeCompare(b[0])).toString() === Object.entries(rhs).sort((a, b)=>a[0].localeCompare(b[0])).toString();
    }
    isEqual(other) {
        return this.attributeEqual(this.method, other.method) && this.attributeEqual(this.url, other.url) && this.attributeEqual(this.auth, other.auth) && this.attributeEqual(this.params, other.params) && this.attributeEqual(this.data, other.data) && this.attributeEqual(this.headers, other.headers);
    }
    toString() {
        var auth = "";
        if (this.auth && this.auth !== this.ANY) {
            auth = this.auth + " ";
        }
        var params = "";
        if (this.params && this.params !== this.ANY) {
            params = "?" + Object.keys(this.params).map((key)=>(function() {
                    return key + "=" + this.params[key];
                }).bind(this)()).join("&");
        }
        var data = "";
        if (this.data && this.data !== this.ANY) {
            if (this.method === "get") {
                data = "\n -G";
            }
            data = data + "\n" + Object.entries(this.data).map((d)=>{
                return " -d " + d[0] + "=" + d[1];
            }).join("\n");
        }
        var headers = "";
        if (this.headers && this.headers !== this.ANY) {
            headers = "\n" + Object.entries(this.headers).map((header)=>{
                return " -H " + header[0] + "=" + header[1];
            }).join("\n");
        }
        return auth + this.method + " " + this.url + params + data + headers;
    }
}
exports.default = Request;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/bearer_token/ApiTokenManager.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const token_1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/rest/oauth/v2/token.js [app-rsc] (ecmascript)");
const OauthBase_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/rest/OauthBase.js [app-rsc] (ecmascript)"));
const V2_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/rest/oauth/V2.js [app-rsc] (ecmascript)"));
const NoAuthCredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/NoAuthCredentialProvider.js [app-rsc] (ecmascript)"));
const BaseTwilio_1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/BaseTwilio.js [app-rsc] (ecmascript)");
class ApiTokenManager {
    constructor(params){
        this.params = params;
    }
    getParams() {
        return this.params;
    }
    async fetchToken() {
        const noAuthCredentialProvider = new NoAuthCredentialProvider_1.default.NoAuthCredentialProvider();
        const client = new BaseTwilio_1.Client();
        client.setCredentialProvider(noAuthCredentialProvider);
        const tokenListInstance = (0, token_1.TokenListInstance)(new V2_1.default(new OauthBase_1.default(client)));
        return tokenListInstance.create(this.params).then((token)=>{
            return token.accessToken;
        }).catch((error)=>{
            throw new Error(`Error Status Code: ${error.status}\nFailed to fetch access token: ${error.message}`);
        });
    }
}
exports.default = ApiTokenManager;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/bearer_token/OrgsTokenManager.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const token_1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/rest/oauth/v2/token.js [app-rsc] (ecmascript)");
const OauthBase_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/rest/OauthBase.js [app-rsc] (ecmascript)"));
const V2_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/rest/oauth/V2.js [app-rsc] (ecmascript)"));
const NoAuthCredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/NoAuthCredentialProvider.js [app-rsc] (ecmascript)"));
const BaseTwilio_1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/BaseTwilio.js [app-rsc] (ecmascript)");
class OrgsTokenManager {
    constructor(params){
        this.params = params;
    }
    getParams() {
        return this.params;
    }
    async fetchToken() {
        const noAuthCredentialProvider = new NoAuthCredentialProvider_1.default.NoAuthCredentialProvider();
        const client = new BaseTwilio_1.Client();
        client.setCredentialProvider(noAuthCredentialProvider);
        const tokenListInstance = (0, token_1.TokenListInstance)(new V2_1.default(new OauthBase_1.default(client)));
        return tokenListInstance.create(this.params).then((token)=>{
            return token.accessToken;
        }).catch((error)=>{
            throw new Error(`Error Status Code: ${error.status}\nFailed to fetch access token: ${error.message}`);
        });
    }
}
exports.default = OrgsTokenManager;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/validation/RequestCanonicalizer.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __importDefault(__turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)"));
class RequestCanonicalizer {
    constructor(method, uri, queryParams, requestBody, headers){
        this.method = method;
        this.uri = uri;
        this.queryParams = queryParams;
        this.requestBody = requestBody;
        this.headers = headers;
    }
    getCanonicalizedMethod() {
        return this.method.toUpperCase();
    }
    customEncode(str) {
        return encodeURIComponent(decodeURIComponent(str)).replace(/\*/g, "%2A").replace(/%7E/g, "~");
    }
    ASCIICompare(a, b) {
        if (a < b) return -1;
        return a > b ? 1 : 0;
    }
    getCanonicalizedPath() {
        // Remove query string from path
        const path = this.uri.split("?")[0];
        // Normalize duplicate slashes (but preserve the leading one)
        const normalizedPath = path.replace(/\/+/g, "/");
        // We must preserve slashes (as path delimiters) but encode each segment
        // Split and encode, but first decode each segment to avoid double-encoding
        return normalizedPath.split("/").map((segment)=>this.customEncode(segment)).join("/");
    }
    getCanonicalizedQueryParams() {
        if (!this.queryParams) {
            return "";
        }
        // sort query params on the basis of '{key}={value}'
        const sortedQueryParams = Object.entries(this.queryParams).map(([key, value])=>{
            return `${key}=${value}`;
        }).sort((a, b)=>this.ASCIICompare(a, b)) // forces ASCII sorting using custom compare
        .map((param)=>{
            const [key, value] = param.split("=");
            return `${this.customEncode(key)}=${this.customEncode(value)}`; // encode and concatenate as `key=value`
        });
        return sortedQueryParams.join("&");
    }
    getCanonicalizedHeaders() {
        // sort headers on the basis of '{key}:{value}'
        const sortedHeaders = Object.keys(this.headers).map((key)=>{
            if (!this.headers[key]) {
                return `${key.toLowerCase()}:`;
            }
            return `${key.toLowerCase()}:${this.headers[key].trim()}`;
        }).sort((a, b)=>this.ASCIICompare(a, b)); // forces ASCII sorting using custom compare
        return `${sortedHeaders.join("\n")}\n`;
    }
    getCanonicalizedHashedHeaders() {
        const sortedHeaders = Object.keys(this.headers).sort((a, b)=>this.ASCIICompare(a, b)); // forces ASCII sorting using custom compare
        return sortedHeaders.join(";");
    }
    getCanonicalizedRequestBody() {
        if (!this.requestBody) {
            return "";
        }
        if (typeof this.requestBody === "string") {
            return this.sha256Hex(this.requestBody);
        } else return this.sha256Hex(JSON.stringify(this.requestBody));
    }
    sha256Hex(body) {
        return crypto_1.default.createHash("sha256").update(body).digest("hex");
    }
    getCanonicalizedRequestString() {
        return `${this.getCanonicalizedMethod()}
${this.getCanonicalizedPath()}
${this.getCanonicalizedQueryParams()}
${this.getCanonicalizedHeaders()}
${this.getCanonicalizedHashedHeaders()}
${this.getCanonicalizedRequestBody()}`;
    }
    create() {
        return this.sha256Hex(this.getCanonicalizedRequestString());
    }
}
exports.default = RequestCanonicalizer;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/validation/ValidationToken.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const RequestCanonicalizer_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/validation/RequestCanonicalizer.js [app-rsc] (ecmascript)"));
const jsonwebtoken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)"));
class ValidationToken {
    get accountSid() {
        return this._accountSid;
    }
    get credentialSid() {
        return this._credentialSid;
    }
    get signingKey() {
        return this._signingKey;
    }
    get privateKey() {
        return this._privateKey;
    }
    get algorithm() {
        return this._algorithm;
    }
    /**
     * @constructor
     * @param opts - The Options used to configure the ValidationToken
     * @param opts.accountSid - The account SID
     * @param opts.credentialSid - The credential SID for public key submitted to Twilio
     * @param opts.signingKey - The signing key
     * @param opts.privateKey - The private key for signing the token
     * @param opts.algorithm - The algorithm to use for signing the token
     * @param opts.ttl - The time to live for the token in seconds
     */ constructor(opts){
        if (!opts.accountSid) {
            throw new Error("accountSid is required");
        }
        if (!opts.credentialSid) {
            throw new Error("credentialSid is required");
        }
        if (!opts.signingKey) {
            throw new Error("signingKey is required");
        }
        if (!opts.privateKey) {
            throw new Error("privateKey is required");
        }
        const algorithm = opts.algorithm ?? ValidationToken.DEFAULT_ALGORITHM; // default to RS256;
        if (!ValidationToken.ALGORITHMS.includes(algorithm)) {
            throw new Error("Algorithm not supported. Allowed values are " + ValidationToken.ALGORITHMS.join(", "));
        }
        this._accountSid = opts.accountSid;
        this._credentialSid = opts.credentialSid;
        this._signingKey = opts.signingKey;
        this._privateKey = opts.privateKey;
        this._algorithm = algorithm;
        this.ttl = 300;
    }
    /**
     * Generates a `RequestCanonicalizer` instance for the given HTTP request.
     *
     * @param request - The HTTP request object containing details such as headers, URL, method, query parameters, and body.
     * @throws {Error} If the request URL or method is missing.
     * @returns {RequestCanonicalizer} - An instance of `RequestCanonicalizer` initialized with the canonicalized request details.
     */ getRequestCanonicalizer(request) {
        const headers = request.headers ?? {};
        const requestUrl = request.url;
        const method = request.method;
        const queryParams = request.params;
        const requestBody = request.data;
        if (!requestUrl) {
            throw new Error("Url is required");
        }
        if (!method) {
            throw new Error("Method is required");
        }
        const url = new URL(requestUrl);
        let signedHeaders = {
            host: url.host,
            authorization: headers["Authorization"]
        };
        return new RequestCanonicalizer_1.default(method, url.pathname, queryParams, requestBody, signedHeaders);
    }
    /**
     * Generate a JWT token to include in the request header for PKCV
     * @param request - The request object
     * @returns {string} - The JWT token
     */ fromHttpRequest(request) {
        try {
            const requestCanonicalizer = this.getRequestCanonicalizer(request);
            const canonicalizedRequest = requestCanonicalizer.create();
            const header = {
                cty: "twilio-pkrv;v=1",
                typ: "JWT",
                alg: this._algorithm,
                kid: this._credentialSid
            };
            const payload = {
                iss: this._signingKey,
                sub: this._accountSid,
                hrh: requestCanonicalizer.getCanonicalizedHashedHeaders(),
                rqh: canonicalizedRequest
            };
            return jsonwebtoken_1.default.sign(payload, this._privateKey, {
                header: header,
                algorithm: this._algorithm,
                expiresIn: this.ttl
            });
        } catch (err) {
            throw new Error("Error generating JWT token " + err);
        }
    }
}
ValidationToken.DEFAULT_ALGORITHM = "RS256";
ValidationToken.ALGORITHMS = [
    "RS256",
    "PS256"
];
module.exports = ValidationToken;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/AccessToken.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const jsonwebtoken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)"));
class AccessToken {
    /**
     * @param accountSid - The account's unique ID to which access is scoped
     * @param keySid - The signing key's unique ID
     * @param secret - The secret to sign the token with
     * @param options - ...
     * @param options.ttl - Time to live in seconds (default 3600)
     * @param options.identity - The identity of the first person. Required.
     * @param options.nbf - Time from epoch in seconds for not before value
     * @param options.region - The region value associated with this account
     */ constructor(accountSid, keySid, secret, options){
        if (!accountSid) {
            throw new Error("accountSid is required");
        }
        if (!keySid) {
            throw new Error("keySid is required");
        }
        if (!secret) {
            throw new Error("secret is required");
        }
        if (!options || !options.identity) {
            throw new Error("identity is required to be specified in options");
        }
        this.accountSid = accountSid;
        this.keySid = keySid;
        this.secret = secret;
        this.ttl = options.ttl || 3600;
        this.identity = options.identity;
        this.nbf = options.nbf;
        this.region = options.region;
        this.grants = [];
    }
    addGrant(grant) {
        this.grants.push(grant);
    }
    toJwt(algorithm) {
        algorithm = algorithm || AccessToken.DEFAULT_ALGORITHM;
        if (!AccessToken.ALGORITHMS.includes(algorithm)) {
            throw new Error("Algorithm not supported. Allowed values are " + AccessToken.ALGORITHMS.join(", "));
        }
        let grants = {};
        if (Number.isInteger(this.identity) || typeof this.identity === "string") {
            grants.identity = String(this.identity);
        }
        for (const grant of this.grants){
            grants[grant.key] = grant.toPayload();
        }
        const now = Math.floor(Date.now() / 1000);
        let payload = {
            jti: this.keySid + "-" + now,
            grants: grants
        };
        if (typeof this.nbf === "number") {
            payload.nbf = this.nbf;
        }
        let header = {
            cty: "twilio-fpa;v=1",
            typ: "JWT"
        };
        if (this.region && typeof this.region === "string") {
            header.twr = this.region;
        }
        return jsonwebtoken_1.default.sign(payload, this.secret, {
            header: header,
            algorithm: algorithm,
            issuer: this.keySid,
            subject: this.accountSid,
            expiresIn: this.ttl
        });
    }
}
AccessToken.DEFAULT_ALGORITHM = "HS256";
AccessToken.ALGORITHMS = [
    "HS256",
    "HS384",
    "HS512"
];
(function(AccessToken) {
    class Grant {
        constructor(key){
            this.key = key;
        }
    }
    AccessToken.Grant = Grant;
    class TaskRouterGrant extends Grant {
        /**
         * @param options - ...
         * @param options.workspaceSid - The workspace unique ID
         * @param options.workerSid - The worker unique ID
         * @param options.role - The role of the grant
         */ constructor(options){
            options = options || {};
            super("task_router");
            this.workspaceSid = options.workspaceSid;
            this.workerSid = options.workerSid;
            this.role = options.role;
        }
        toPayload() {
            let grant = {};
            if (this.workspaceSid) {
                grant.workspace_sid = this.workspaceSid;
            }
            if (this.workerSid) {
                grant.worker_sid = this.workerSid;
            }
            if (this.role) {
                grant.role = this.role;
            }
            return grant;
        }
    }
    AccessToken.TaskRouterGrant = TaskRouterGrant;
    class ChatGrant extends Grant {
        /**
         * @param options - ...
         * @param options.serviceSid - The service unique ID
         * @param options.endpointId - The endpoint ID
         * @param options.deploymentRoleSid - SID of the deployment role to be
         *                 assigned to the user
         * @param options.pushCredentialSid - The Push Credentials SID
         */ constructor(options){
            options = options || {};
            super("chat");
            this.serviceSid = options.serviceSid;
            this.endpointId = options.endpointId;
            this.deploymentRoleSid = options.deploymentRoleSid;
            this.pushCredentialSid = options.pushCredentialSid;
        }
        toPayload() {
            let grant = {};
            if (this.serviceSid) {
                grant.service_sid = this.serviceSid;
            }
            if (this.endpointId) {
                grant.endpoint_id = this.endpointId;
            }
            if (this.deploymentRoleSid) {
                grant.deployment_role_sid = this.deploymentRoleSid;
            }
            if (this.pushCredentialSid) {
                grant.push_credential_sid = this.pushCredentialSid;
            }
            return grant;
        }
    }
    AccessToken.ChatGrant = ChatGrant;
    class VideoGrant extends Grant {
        /**
         * @param options - ...
         * @param options.room - The Room name or Room sid.
         */ constructor(options){
            options = options || {};
            super("video");
            this.room = options.room;
        }
        toPayload() {
            let grant = {};
            if (this.room) {
                grant.room = this.room;
            }
            return grant;
        }
    }
    AccessToken.VideoGrant = VideoGrant;
    class SyncGrant extends Grant {
        /**
         * @param options.serviceSid - The service unique ID
         * @param options.endpointId - The endpoint ID
         */ constructor(options){
            options = options || {};
            super("data_sync");
            this.serviceSid = options.serviceSid;
            this.endpointId = options.endpointId;
        }
        toPayload() {
            let grant = {};
            if (this.serviceSid) {
                grant.service_sid = this.serviceSid;
            }
            if (this.endpointId) {
                grant.endpoint_id = this.endpointId;
            }
            return grant;
        }
    }
    AccessToken.SyncGrant = SyncGrant;
    class VoiceGrant extends Grant {
        /**
         * @param options - ...
         * @param options.incomingAllow - Whether or not this endpoint is allowed to receive incoming calls as grants.identity
         * @param options.outgoingApplicationSid - application sid to call when placing outgoing call
         * @param options.outgoingApplicationParams - request params to pass to the application
         * @param options.pushCredentialSid - Push Credential Sid to use when registering to receive incoming call notifications
         * @param options.endpointId - Specify an endpoint identifier for this device, which will allow the developer
         *                 to direct calls to a specific endpoint when multiple devices are associated with a single identity
         */ constructor(options){
            options = options || {};
            super("voice");
            this.incomingAllow = options.incomingAllow;
            this.outgoingApplicationSid = options.outgoingApplicationSid;
            this.outgoingApplicationParams = options.outgoingApplicationParams;
            this.pushCredentialSid = options.pushCredentialSid;
            this.endpointId = options.endpointId;
        }
        toPayload() {
            let grant = {};
            if (this.incomingAllow === true) {
                grant.incoming = {
                    allow: true
                };
            }
            if (this.outgoingApplicationSid) {
                grant.outgoing = {
                    application_sid: this.outgoingApplicationSid
                };
                if (this.outgoingApplicationParams) {
                    grant.outgoing.params = this.outgoingApplicationParams;
                }
            }
            if (this.pushCredentialSid) {
                grant.push_credential_sid = this.pushCredentialSid;
            }
            if (this.endpointId) {
                grant.endpoint_id = this.endpointId;
            }
            return grant;
        }
    }
    AccessToken.VoiceGrant = VoiceGrant;
    class PlaybackGrant extends Grant {
        /**
         * @param options - ...
         * @param options.grant - The PlaybackGrant retrieved from Twilio's API
         */ constructor(options){
            options = options || {};
            super("player");
            this.grant = options.grant;
        }
        toPayload() {
            let grant = {};
            if (this.grant) {
                grant = this.grant;
            }
            return grant;
        }
    }
    AccessToken.PlaybackGrant = PlaybackGrant;
})(AccessToken || (AccessToken = {}));
module.exports = AccessToken;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/ClientCapability.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OutgoingClientScope = exports.IncomingClientScope = exports.EventStreamScope = void 0;
const jsonwebtoken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)"));
const querystring_1 = __importDefault(__turbopack_context__.r("[externals]/querystring [external] (querystring, cjs)"));
/**
 * @param filters
 */ class EventStreamScope {
    constructor(filters){
        this.scope = "scope:stream:subscribe";
        this.filters = filters || {};
    }
    payload() {
        var queryArgs = [
            "path=/2010-04-01/Events"
        ];
        if (Object.keys(this.filters).length > 0) {
            var queryParams = Object.entries(this.filters).map((filter)=>{
                return [
                    querystring_1.default.escape(filter[0]),
                    querystring_1.default.escape(filter[1])
                ].join("=");
            });
            var filterParams = queryParams.join("&");
            queryArgs.push([
                "appParams",
                querystring_1.default.escape(filterParams)
            ].join("="));
        }
        var queryString = queryArgs.join("&");
        return [
            this.scope,
            queryString
        ].join("?");
    }
}
exports.EventStreamScope = EventStreamScope;
/**
 * @param clientName
 */ class IncomingClientScope {
    constructor(clientName){
        this.scope = "scope:client:incoming";
        this.clientName = clientName;
    }
    payload() {
        var query = [
            "clientName",
            querystring_1.default.escape(this.clientName)
        ].join("=");
        return [
            this.scope,
            query
        ].join("?");
    }
}
exports.IncomingClientScope = IncomingClientScope;
class OutgoingClientScope {
    /**
     * @param options - ...
     * @param options.applicationSid - the application sid
     * @param options.clientName - the client name
     * @param options.params - parameters
     */ constructor(options){
        this.scope = "scope:client:outgoing";
        if (!options) {
            throw new Error('Required parameter "options" missing.');
        }
        if (typeof options !== "object") {
            throw new TypeError('Parameter "options" must be a type Object');
        }
        if (!options.applicationSid) {
            throw new Error('Required parameter "options.applicationSid" missing.');
        }
        this.applicationSid = options.applicationSid;
        this.clientName = options.clientName;
        this.params = options.params;
    }
    payload() {
        var queryArgs = [
            [
                "appSid",
                querystring_1.default.escape(this.applicationSid)
            ].join("=")
        ];
        if (typeof this.clientName === "string") {
            queryArgs.push([
                "clientName",
                querystring_1.default.escape(this.clientName)
            ].join("="));
        }
        if (typeof this.params === "object") {
            var queryParams = Object.entries(this.params).map((param)=>{
                return [
                    querystring_1.default.escape(param[0]),
                    querystring_1.default.escape(param[1])
                ].join("=");
            });
            var filterParams = queryParams.join("&");
            queryArgs.push([
                "appParams",
                querystring_1.default.escape(filterParams)
            ].join("="));
        }
        var queryString = queryArgs.join("&");
        return [
            this.scope,
            queryString
        ].join("?");
    }
}
exports.OutgoingClientScope = OutgoingClientScope;
/**
 * @param options
 */ class ClientCapability {
    constructor(options){
        if (!options) {
            throw new Error('Required parameter "options" missing.');
        }
        if (typeof options !== "object") {
            throw new TypeError('Parameter "options" must be a type Object');
        }
        if (!options.accountSid) {
            throw new Error('Required parameter "options.accountSid" missing.');
        }
        if (!options.authToken) {
            throw new Error('Required parameter "options.authToken" missing.');
        }
        this.accountSid = options.accountSid;
        this.authToken = options.authToken;
        this.ttl = options.ttl || 3600;
        this.scopes = [];
    }
    addScope(scope) {
        this.scopes.push(scope);
    }
    toJwt() {
        const scope = this.scopes.map((scope)=>scope.payload()).join(" ");
        var payload = {
            scope: scope,
            iss: this.accountSid,
            exp: Math.floor(new Date().valueOf() / 1000) + this.ttl
        };
        return jsonwebtoken_1.default.sign(payload, this.authToken);
    }
}
ClientCapability.EventStreamScope = EventStreamScope;
ClientCapability.IncomingClientScope = IncomingClientScope;
ClientCapability.OutgoingClientScope = OutgoingClientScope;
exports.default = ClientCapability;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/taskrouter/TaskRouterCapability.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Policy = void 0;
const jsonwebtoken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)"));
/**
 * Create a new Policy
 */ class Policy {
    /**
     * Create a new Policy instance
     *
     * @param options - ...
     * @param options.url - Policy URL
     * @param options.method - HTTP Method
     * @param options.queryFilter - Request query filter allowances
     * @param options.postFilter - Request post filter allowances
     * @param options.allowed - Allow the policy
     */ constructor(options){
        options = options || {};
        this.url = options.url || "";
        this.method = options.method || "GET";
        this.queryFilter = options.queryFilter || {};
        this.postFilter = options.postFilter || {};
        this.allow = options.allow || true;
    }
    payload() {
        return {
            url: this.url,
            method: this.method,
            query_filter: this.queryFilter,
            post_filter: this.postFilter,
            allow: this.allow
        };
    }
}
exports.Policy = Policy;
class TaskRouterCapability {
    /**
     * @param options - ...
     * @param options.accountSid - account sid
     * @param options.authToken - auth token
     * @param options.workspaceSid - workspace sid
     * @param options.channelId - taskrouter channel id
     * @param options.friendlyName - friendly name for the jwt
     * @param options.ttl - time to live
     * @param options.version - taskrouter version
     */ constructor(options){
        if (!options) {
            throw new Error('Required parameter "options" missing.');
        }
        if (!options.accountSid) {
            throw new Error('Required parameter "options.accountSid" missing.');
        }
        if (!options.authToken) {
            throw new Error('Required parameter "options.authToken" missing.');
        }
        if (!options.workspaceSid) {
            throw new Error('Required parameter "options.workspaceSid" missing.');
        }
        if (!options.channelId) {
            throw new Error('Required parameter "options.channelId" missing.');
        }
        this.accountSid = options.accountSid;
        this.authToken = options.authToken;
        this.workspaceSid = options.workspaceSid;
        this.channelId = options.channelId;
        this.friendlyName = options.friendlyName;
        this.ttl = options.ttl || 3600;
        this.version = options.version || "v1";
        this.policies = [];
    }
    addPolicy(policy) {
        this.policies.push(policy);
    }
    toJwt() {
        var payload = {
            iss: this.accountSid,
            exp: Math.floor(new Date().valueOf() / 1000) + this.ttl,
            version: this.version,
            friendly_name: this.friendlyName,
            account_sid: this.accountSid,
            channel: this.channelId,
            workspace_sid: this.workspaceSid,
            policies: this.policies.map((policy)=>policy.payload())
        };
        if (this.channelId.startsWith("WK")) {
            payload.worker_sid = this.channelId;
        } else if (this.channelId.startsWith("WQ")) {
            payload.taskqueue_sid = this.channelId;
        }
        return jsonwebtoken_1.default.sign(payload, this.authToken);
    }
}
TaskRouterCapability.Policy = Policy;
exports.default = TaskRouterCapability;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/taskrouter/util.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultWorkerPolicies = defaultWorkerPolicies;
exports.defaultEventBridgePolicies = defaultEventBridgePolicies;
exports.workspacesUrl = workspacesUrl;
exports.taskQueuesUrl = taskQueuesUrl;
exports.tasksUrl = tasksUrl;
exports.activitiesUrl = activitiesUrl;
exports.workersUrl = workersUrl;
exports.reservationsUrl = reservationsUrl;
const TaskRouterCapability_1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/taskrouter/TaskRouterCapability.js [app-rsc] (ecmascript)");
const EVENT_URL_BASE = "https://event-bridge.twilio.com/v1/wschannels";
const TASKROUTER_BASE_URL = "https://taskrouter.twilio.com";
const TASKROUTER_VERSION = "v1";
/**
 * Build the default Policies for a worker
 *
 * @param version - TaskRouter version
 * @param workspaceSid - workspace sid
 * @param workerSid - worker sid
 * @returns list of Policies
 */ function defaultWorkerPolicies(version, workspaceSid, workerSid) {
    var activities = new TaskRouterCapability_1.Policy({
        url: [
            TASKROUTER_BASE_URL,
            version,
            "Workspaces",
            workspaceSid,
            "Activities"
        ].join("/"),
        method: "GET",
        allow: true
    });
    var tasks = new TaskRouterCapability_1.Policy({
        url: [
            TASKROUTER_BASE_URL,
            version,
            "Workspaces",
            workspaceSid,
            "Tasks",
            "**"
        ].join("/"),
        method: "GET",
        allow: true
    });
    var reservations = new TaskRouterCapability_1.Policy({
        url: [
            TASKROUTER_BASE_URL,
            version,
            "Workspaces",
            workspaceSid,
            "Workers",
            workerSid,
            "Reservations",
            "**"
        ].join("/"),
        method: "GET",
        allow: true
    });
    var workerFetch = new TaskRouterCapability_1.Policy({
        url: [
            TASKROUTER_BASE_URL,
            version,
            "Workspaces",
            workspaceSid,
            "Workers",
            workerSid
        ].join("/"),
        method: "GET",
        allow: true
    });
    return [
        activities,
        tasks,
        reservations,
        workerFetch
    ];
}
/**
 * Build the default Event Bridge Policies
 *
 * @param accountSid - account sid
 * @param channelId - channel id
 * @returns list of Policies
 */ function defaultEventBridgePolicies(accountSid, channelId) {
    var url = [
        EVENT_URL_BASE,
        accountSid,
        channelId
    ].join("/");
    return [
        new TaskRouterCapability_1.Policy({
            url: url,
            method: "GET",
            allow: true
        }),
        new TaskRouterCapability_1.Policy({
            url: url,
            method: "POST",
            allow: true
        })
    ];
}
/**
 * Generate TaskRouter workspace url
 *
 * @param workspaceSid - workspace sid or '**' for all workspaces
 * @returns generated url
 */ function workspacesUrl(workspaceSid) {
    return [
        TASKROUTER_BASE_URL,
        TASKROUTER_VERSION,
        "Workspaces",
        workspaceSid
    ].filter((item)=>typeof item === "string").join("/");
}
/**
 * Generate TaskRouter task queue url
 *
 * @param workspaceSid - workspace sid
 * @param taskQueueSid - task queue sid or '**' for all task queues
 * @returns generated url
 */ function taskQueuesUrl(workspaceSid, taskQueueSid) {
    return [
        workspacesUrl(workspaceSid),
        "TaskQueues",
        taskQueueSid
    ].filter((item)=>typeof item === "string").join("/");
}
/**
 * Generate TaskRouter task url
 *
 * @param workspaceSid - workspace sid
 * @param taskSid - task sid or '**' for all tasks
 * @returns generated url
 */ function tasksUrl(workspaceSid, taskSid) {
    return [
        workspacesUrl(workspaceSid),
        "Tasks",
        taskSid
    ].filter((item)=>typeof item === "string").join("/");
}
/**
 * Generate TaskRouter activity url
 *
 * @param workspaceSid - workspace sid
 * @param activitySid - activity sid or '**' for all activities
 * @returns generated url
 */ function activitiesUrl(workspaceSid, activitySid) {
    return [
        workspacesUrl(workspaceSid),
        "Activities",
        activitySid
    ].filter((item)=>typeof item === "string").join("/");
}
/**
 * Generate TaskRouter worker url
 *
 * @param workspaceSid - workspace sid
 * @param workerSid - worker sid or '**' for all workers
 * @returns generated url
 */ function workersUrl(workspaceSid, workerSid) {
    return [
        workspacesUrl(workspaceSid),
        "Workers",
        workerSid
    ].filter((item)=>typeof item === "string").join("/");
}
/**
 * Generate TaskRouter worker reservation url
 *
 * @param workspaceSid - workspace sid
 * @param workerSid - worker sid
 * @param reservationSid - reservation sid or '**' for all reservations
 * @returns generated url
 */ function reservationsUrl(workspaceSid, workerSid, reservationSid) {
    return [
        workersUrl(workspaceSid, workerSid),
        "Reservations",
        reservationSid
    ].filter((item)=>typeof item === "string").join("/");
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RequestClient.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const axios_1 = __importStar(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/axios@1.12.2/node_modules/axios/dist/node/axios.cjs [app-rsc] (ecmascript)"));
const fs = __importStar(__turbopack_context__.r("[externals]/fs [external] (fs, cjs)"));
const https_proxy_agent_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/https-proxy-agent@5.0.1/node_modules/https-proxy-agent/dist/index.js [app-rsc] (ecmascript)"));
const qs_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/index.js [app-rsc] (ecmascript)"));
const https = __importStar(__turbopack_context__.r("[externals]/https [external] (https, cjs)"));
const response_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/response.js [app-rsc] (ecmascript)"));
const request_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/request.js [app-rsc] (ecmascript)"));
const ValidationToken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/validation/ValidationToken.js [app-rsc] (ecmascript)"));
const DEFAULT_CONTENT_TYPE = "application/x-www-form-urlencoded";
const DEFAULT_TIMEOUT = 30000;
const DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS = 100;
const DEFAULT_MAX_RETRY_DELAY = 3000;
const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_MAX_SOCKETS = 20;
const DEFAULT_MAX_FREE_SOCKETS = 5;
const DEFAULT_MAX_TOTAL_SOCKETS = 100;
function getExponentialBackoffResponseHandler(axios, opts) {
    const maxIntervalMillis = opts.maxIntervalMillis;
    const maxRetries = opts.maxRetries;
    return function(res) {
        const config = res.config;
        if (res.status !== 429) {
            return res;
        }
        const retryCount = (config.retryCount || 0) + 1;
        if (retryCount <= maxRetries) {
            config.retryCount = retryCount;
            const baseDelay = Math.min(maxIntervalMillis, DEFAULT_INITIAL_RETRY_INTERVAL_MILLIS * Math.pow(2, retryCount));
            const delay = Math.floor(baseDelay * Math.random()); // Full jitter backoff
            return new Promise((resolve)=>{
                setTimeout(()=>resolve(axios(config)), delay);
            });
        }
        return res;
    };
}
class RequestClient {
    /**
     * Make http request
     * @param opts - The options passed to https.Agent
     * @param opts.timeout - https.Agent timeout option. Used as the socket timeout, AND as the default request timeout.
     * @param opts.keepAlive - https.Agent keepAlive option
     * @param opts.keepAliveMsecs - https.Agent keepAliveMsecs option
     * @param opts.maxSockets - https.Agent maxSockets option
     * @param opts.maxTotalSockets - https.Agent maxTotalSockets option
     * @param opts.maxFreeSockets - https.Agent maxFreeSockets option
     * @param opts.scheduling - https.Agent scheduling option
     * @param opts.autoRetry - Enable auto-retry requests with exponential backoff on 429 responses. Defaults to false.
     * @param opts.maxRetryDelay - Max retry delay in milliseconds for 429 Too Many Request response retries. Defaults to 3000.
     * @param opts.maxRetries - Max number of request retries for 429 Too Many Request responses. Defaults to 3.
     * @param opts.validationClient - Validation client for PKCV
     */ constructor(opts){
        opts = opts || {};
        this.defaultTimeout = opts.timeout || DEFAULT_TIMEOUT;
        this.autoRetry = opts.autoRetry || false;
        this.maxRetryDelay = opts.maxRetryDelay || DEFAULT_MAX_RETRY_DELAY;
        this.maxRetries = opts.maxRetries || DEFAULT_MAX_RETRIES;
        this.keepAlive = opts.keepAlive !== false;
        // construct an https agent
        let agentOpts = {
            timeout: this.defaultTimeout,
            keepAlive: this.keepAlive,
            keepAliveMsecs: opts.keepAliveMsecs,
            maxSockets: opts.maxSockets || DEFAULT_MAX_SOCKETS,
            maxTotalSockets: opts.maxTotalSockets || DEFAULT_MAX_TOTAL_SOCKETS,
            maxFreeSockets: opts.maxFreeSockets || DEFAULT_MAX_FREE_SOCKETS,
            scheduling: opts.scheduling,
            ca: opts.ca
        };
        // sets https agent CA bundle if defined in CA bundle filepath env variable
        if (process.env.TWILIO_CA_BUNDLE !== undefined) {
            if (agentOpts.ca === undefined) {
                agentOpts.ca = fs.readFileSync(process.env.TWILIO_CA_BUNDLE);
            }
        }
        let agent;
        if (process.env.HTTP_PROXY) {
            // Note: if process.env.HTTP_PROXY is set, we're not able to apply the given
            // socket timeout. See: https://github.com/TooTallNate/node-https-proxy-agent/pull/96
            agent = (0, https_proxy_agent_1.default)(process.env.HTTP_PROXY);
        } else {
            agent = new https.Agent(agentOpts);
        }
        // construct an axios instance
        this.axios = axios_1.default.create();
        this.axios.defaults.headers.post["Content-Type"] = DEFAULT_CONTENT_TYPE;
        this.axios.defaults.httpsAgent = agent;
        if (opts.autoRetry) {
            this.axios.interceptors.response.use(getExponentialBackoffResponseHandler(this.axios, {
                maxIntervalMillis: this.maxRetryDelay,
                maxRetries: this.maxRetries
            }));
        }
        // if validation client is set, intercept the request using ValidationInterceptor
        if (opts.validationClient) {
            this.axios.interceptors.request.use(this.validationInterceptor(opts.validationClient));
        }
    }
    /**
     * Make http request
     * @param opts - The options argument
     * @param opts.method - The http method
     * @param opts.uri - The request uri
     * @param opts.username - The username used for auth
     * @param opts.password - The password used for auth
     * @param opts.authStrategy - The authStrategy for API call
     * @param opts.headers - The request headers
     * @param opts.params - The request params
     * @param opts.data - The request data
     * @param opts.timeout - The request timeout in milliseconds (default 30000)
     * @param opts.allowRedirects - Should the client follow redirects
     * @param opts.forever - Set to true to use the forever-agent
     * @param opts.logLevel - Show debug logs
     */ async request(opts) {
        if (!opts.method) {
            throw new Error("http method is required");
        }
        if (!opts.uri) {
            throw new Error("uri is required");
        }
        var headers = opts.headers || {};
        if (!headers.Connection && !headers.connection) headers.Connection = this.keepAlive ? "keep-alive" : "close";
        let auth = undefined;
        if (opts.username && opts.password) {
            auth = Buffer.from(opts.username + ":" + opts.password).toString("base64");
            headers.Authorization = "Basic " + auth;
        } else if (opts.authStrategy) {
            headers.Authorization = await opts.authStrategy.getAuthString();
        }
        const options = {
            timeout: opts.timeout || this.defaultTimeout,
            maxRedirects: opts.allowRedirects ? 10 : 0,
            url: opts.uri,
            method: opts.method,
            headers: opts.headers,
            proxy: false,
            validateStatus: (status)=>status >= 100 && status < 600
        };
        if (opts.data && options.headers) {
            if (options.headers["Content-Type"] === "application/x-www-form-urlencoded") {
                options.data = qs_1.default.stringify(opts.data, {
                    arrayFormat: "repeat"
                });
            } else if (options.headers["Content-Type"] === "application/json") {
                options.data = opts.data;
            }
        }
        if (opts.params) {
            options.params = opts.params;
            options.paramsSerializer = (params)=>{
                return qs_1.default.stringify(params, {
                    arrayFormat: "repeat"
                });
            };
        }
        const requestOptions = {
            method: opts.method,
            url: opts.uri,
            auth: auth,
            params: options.params,
            data: opts.data,
            headers: opts.headers
        };
        if (opts.logLevel === "debug") {
            this.logRequest(requestOptions);
        }
        const _this = this;
        this.lastResponse = undefined;
        this.lastRequest = new request_1.default(requestOptions);
        return this.axios(options).then((response)=>{
            if (opts.logLevel === "debug") {
                console.log(`response.statusCode: ${response.status}`);
                console.log(`response.headers: ${JSON.stringify(response.headers)}`);
            }
            _this.lastResponse = new response_1.default(response.status, response.data, response.headers);
            return {
                statusCode: response.status,
                body: response.data,
                headers: response.headers
            };
        }).catch((error)=>{
            _this.lastResponse = undefined;
            throw error;
        });
    }
    filterLoggingHeaders(headers) {
        return Object.keys(headers).filter((header)=>{
            return !"authorization".includes(header.toLowerCase());
        });
    }
    /**
     * ValidationInterceptor adds the Twilio-Client-Validation header to the request
     * @param validationClient - The validation client for PKCV
     * <p>Usage Example:</p>
     * ```javascript
     * import axios from "axios";
     * // Initialize validation client with credentials
     * const validationClient = {
     *           accountSid: "ACXXXXXXXXXXXXXXXX",
     *           credentialSid: "CRXXXXXXXXXXXXXXXX",
     *           signingKey: "SKXXXXXXXXXXXXXXXX",
     *           privateKey: "private key",
     *           algorithm: "PS256",
     *         }
     * // construct an axios instance
     * const instance = axios.create();
     * instance.interceptors.request.use(
     *   ValidationInterceptor(opts.validationClient)
     * );
     * ```
     */ validationInterceptor(validationClient) {
        return function(config) {
            config.headers = config.headers || new axios_1.AxiosHeaders();
            try {
                config.headers["Twilio-Client-Validation"] = new ValidationToken_1.default(validationClient).fromHttpRequest(config);
            } catch (err) {
                console.log("Error creating Twilio-Client-Validation header:", err);
                throw err;
            }
            return config;
        };
    }
    logRequest(options) {
        console.log("-- BEGIN Twilio API Request --");
        console.log(`${options.method} ${options.url}`);
        if (options.params) {
            console.log("Querystring:");
            console.log(options.params);
        }
        if (options.headers) {
            console.log("Headers:");
            const filteredHeaderKeys = this.filterLoggingHeaders(options.headers);
            filteredHeaderKeys.forEach((header)=>console.log(`${header}: ${options.headers?.header}`));
        }
        console.log("-- END Twilio API Request --");
    }
}
module.exports = RequestClient;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RestException.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class RestException extends Error {
    constructor(response){
        super("[HTTP " + response.statusCode + "] Failed to execute request");
        const isResponseBodyString = typeof response.body == "string";
        const body = isResponseBodyString ? parseResponseBody(response.body) : response.body;
        this.status = response.statusCode;
        if (body !== null) {
            this.message = body.message;
            this.code = body.code;
            this.moreInfo = body.more_info; /* jshint ignore:line */ 
            this.details = body.details;
        } else {
            this.message = "[HTTP " + response.statusCode + "] Failed to execute request";
        }
    }
}
exports.default = RestException;
function parseResponseBody(response_body) {
    let body = null;
    try {
        body = JSON.parse(response_body);
    } catch (catchError) {
        body = null;
    }
    return body;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/BaseTwilio.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const RequestClient_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RequestClient.js [app-rsc] (ecmascript)")); /* jshint ignore:line */ 
const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)"); /* jshint ignore:line */ 
const url = __turbopack_context__.r("[externals]/url [external] (url, cjs)"); /* jshint ignore:line */ 
const moduleInfo = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/package.json (json)"); /* jshint ignore:line */ 
const util = __turbopack_context__.r("[externals]/util [external] (util, cjs)"); /* jshint ignore:line */ 
const RestException = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RestException.js [app-rsc] (ecmascript)"); /* jshint ignore:line */ 
var Twilio;
(function(Twilio) {
    /* jshint ignore:start */ /**
     * Parent class for Twilio Client that implements request & validation logic
     */ /* jshint ignore:end */ class Client {
        /* jshint ignore:start */ /**
         * Create a BaseTwilio instance
         *
         * @param username -
         *          The username used for authentication. This is normally account sid, but if using key/secret auth will be
         *          the api key sid.
         * @param password -
         *          The password used for authentication. This is normally auth token, but if using key/secret auth will be
         *          the secret.
         * @param opts - The options argument
         *
         * @returns A new instance of BaseTwilio
         */ /* jshint ignore:end */ constructor(username, password, opts){
            this.setOpts(opts);
            this.username = username ?? this.env?.TWILIO_ACCOUNT_SID ?? process.env.TWILIO_ACCOUNT_SID;
            this.password = password ?? this.env?.TWILIO_AUTH_TOKEN ?? process.env.TWILIO_AUTH_TOKEN;
            this.accountSid = "";
            this.setAccountSid(this.opts?.accountSid || this.username);
            this.invalidateOAuth();
        }
        setOpts(opts) {
            this.opts = opts || {};
            this.env = this.opts.env || {};
            this.edge = this.opts.edge ?? this.env.TWILIO_EDGE ?? process.env.TWILIO_EDGE;
            this.region = this.opts.region ?? this.env.TWILIO_REGION ?? process.env.TWILIO_REGION;
            this.logLevel = this.opts.logLevel ?? this.env.TWILIO_LOG_LEVEL ?? process.env.TWILIO_LOG_LEVEL;
            this.timeout = this.opts.timeout;
            this.keepAlive = this.opts.keepAlive;
            this.keepAliveMsecs = this.opts.keepAliveMsecs;
            this.maxSockets = this.opts.maxSockets;
            this.maxTotalSockets = this.opts.maxTotalSockets;
            this.maxFreeSockets = this.opts.maxFreeSockets;
            this.scheduling = this.opts.scheduling;
            this.ca = this.opts.ca;
            this.autoRetry = this.opts.autoRetry || false;
            this.maxRetryDelay = this.opts.maxRetryDelay;
            this.maxRetries = this.opts.maxRetries;
            this.validationClient = this.opts.validationClient;
            this.userAgentExtensions = this.opts.userAgentExtensions || [];
            this._httpClient = this.opts.httpClient;
            if (this.opts.lazyLoading === false) {
                this._httpClient = this.httpClient;
            }
        }
        setAccountSid(accountSid) {
            this.accountSid = accountSid || "";
            if (this.accountSid && !this.accountSid?.startsWith("AC")) {
                const apiKeyMsg = this.accountSid?.startsWith("SK") ? ". The given SID indicates an API Key which requires the accountSid to be passed as an additional option" : "";
                throw new Error("accountSid must start with AC" + apiKeyMsg);
            }
        }
        setCredentialProvider(credentialProvider) {
            this.credentialProvider = credentialProvider;
            this.accountSid = "";
            this.invalidateBasicAuth();
        }
        invalidateBasicAuth() {
            this.username = undefined;
            this.password = undefined;
        }
        invalidateOAuth() {
            this.credentialProvider = undefined;
        }
        get httpClient() {
            if (!this._httpClient) {
                this._httpClient = new RequestClient_1.default({
                    timeout: this.timeout,
                    keepAlive: this.keepAlive,
                    keepAliveMsecs: this.keepAliveMsecs,
                    maxSockets: this.maxSockets,
                    maxTotalSockets: this.maxTotalSockets,
                    maxFreeSockets: this.maxFreeSockets,
                    scheduling: this.scheduling,
                    ca: this.ca,
                    autoRetry: this.autoRetry,
                    maxRetryDelay: this.maxRetryDelay,
                    maxRetries: this.maxRetries,
                    validationClient: this.validationClient
                });
            }
            return this._httpClient;
        }
        /* jshint ignore:start */ /**
         * Makes a request to the Twilio API using the configured http client.
         * Authentication information is automatically added if none is provided.
         *
         * @param opts - The options argument
         */ /* jshint ignore:end */ request(opts) {
            opts = opts || {};
            if (!opts.method) {
                throw new Error("method is required");
            }
            if (!opts.uri) {
                throw new Error("uri is required");
            }
            const username = opts.username || this.username;
            const password = opts.password || this.password;
            const authStrategy = opts.authStrategy || this.credentialProvider?.toAuthStrategy();
            if (!authStrategy) {
                if (!username) {
                    (()=>{
                        throw new Error("username is required");
                    })();
                }
                if (!password) {
                    (()=>{
                        throw new Error("password is required");
                    })();
                }
            }
            const headers = opts.headers || {};
            const pkgVersion = moduleInfo.version;
            const osName = os.platform();
            const osArch = os.arch();
            const nodeVersion = process.version;
            headers["User-Agent"] = util.format("twilio-node/%s (%s %s) node/%s", pkgVersion, osName, osArch, nodeVersion);
            this.userAgentExtensions?.forEach((extension)=>{
                headers["User-Agent"] += ` ${extension}`;
            });
            headers["Accept-Charset"] = "utf-8";
            if ((opts.method === "post" || opts.method === "put") && !headers["Content-Type"]) {
                headers["Content-Type"] = "application/x-www-form-urlencoded";
            }
            if (opts.method !== "delete" && !headers["Accept"]) {
                headers["Accept"] = "application/json";
            }
            var uri = new url.URL(opts.uri);
            uri.hostname = this.getHostname(uri.hostname, this.edge, this.region);
            return this.httpClient?.request({
                method: opts.method,
                uri: uri.href,
                username: username,
                password: password,
                authStrategy: authStrategy,
                headers: headers,
                params: opts.params,
                data: opts.data,
                timeout: opts.timeout,
                allowRedirects: opts.allowRedirects,
                // use the Twilio client's log-level if the httpClient's log-level is unspecified
                logLevel: opts.logLevel || this.opts?.logLevel
            });
        }
        /* jshint ignore:start */ /**
         * Adds a region and/or edge to a given hostname
         *
         * @param hostname - A URI hostname (e.g. api.twilio.com)
         * @param targetEdge - The targeted edge location (e.g. sydney)
         * @param targetRegion - The targeted region location (e.g. au1)
         */ /* jshint ignore:end */ getHostname(hostname, targetEdge, targetRegion) {
            const defaultRegion = "us1";
            const domain = hostname.split(".").slice(-2).join(".");
            const prefix = hostname.split("." + domain)[0];
            let [product, edge, region] = prefix.split(".");
            if (edge && !region) {
                region = edge;
                edge = undefined;
            }
            region = targetRegion || region || targetEdge && defaultRegion;
            if (!region) {
                return hostname;
            }
            edge = targetEdge || edge;
            return [
                product,
                edge,
                region,
                domain
            ].filter((part)=>part).join(".");
        }
        /* jshint ignore:start */ /**
         * Test if your environment is impacted by a TLS or certificate
         * change is by sending an HTTP request to the test endpoint
         *
         * @throws RestException if the request fails
         *
         */ /* jshint ignore:end */ validateSslCert() {
            return this.httpClient?.request({
                method: "get",
                uri: "https://tls-test.twilio.com:443"
            }).then((response)=>{
                if (response["statusCode"] < 200 || response["statusCode"] >= 300) {
                    throw new RestException(response);
                }
                return response;
            });
        }
    }
    Twilio.Client = Client;
})(Twilio || (Twilio = {}));
module.exports = Twilio;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/utility.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.trim = void 0;
exports.isValidPathParam = isValidPathParam;
const INVALID_PATH_PARAM_CHARS = [
    "/",
    "?"
];
const trim = (str, c = "\\s")=>str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), "$2");
exports.trim = trim;
function isValidPathParam(param) {
    if (param === null || param === undefined) return false;
    const paramString = param.toString();
    return INVALID_PATH_PARAM_CHARS.every((invalidChar)=>!paramString.includes(invalidChar));
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/Domain.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const utility_1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/utility.js [app-rsc] (ecmascript)");
/**
 * Base domain object
 */ class Domain {
    /**
     * Creates a Domain instance
     *
     * @param twilio - A Twilio Client
     * @param baseUrl - Base url for this domain
     */ constructor(twilio, baseUrl){
        this.twilio = twilio;
        this.baseUrl = baseUrl;
    }
    /**
     * Turn a uri into an absolute url
     *
     * @param uri - uri to transform
     * @returns absolute url
     */ absoluteUrl(uri) {
        var result = "";
        if (typeof this.baseUrl === "string") {
            const cleanBaseUrl = (0, utility_1.trim)(this.baseUrl, "/");
            result += cleanBaseUrl;
            result += "/";
        }
        if (typeof uri === "string") {
            uri = (0, utility_1.trim)(uri, "/");
            if (result === "") {
                result += "/";
            }
            result += uri;
        }
        return result;
    }
    /**
     * Make request to this domain
     *
     * @param opts - request options
     * @returns request promise
     */ request(opts) {
        return this.twilio.request({
            ...opts,
            uri: this.absoluteUrl(opts.uri)
        });
    }
}
exports.default = Domain;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/Version.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const RestException_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RestException.js [app-rsc] (ecmascript)"));
const utility_1 = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/utility.js [app-rsc] (ecmascript)");
class Version {
    /**
     *
     * Base version object
     *
     * @param domain - twilio domain
     * @param version - api version
     */ constructor(domain, version){
        this._domain = domain;
        this._version = version;
    }
    get domain() {
        return this._domain;
    }
    /**
     * Generate absolute url from a uri
     *
     * @param uri - uri to transform
     * @returns transformed url
     */ absoluteUrl(uri) {
        return this._domain.absoluteUrl(this.relativeUrl(uri));
    }
    /**
     * Generate relative url from a uri
     *
     * @param uri - uri to transform
     * @returns transformed url
     */ relativeUrl(uri) {
        var result = "";
        if (typeof this._version === "string") {
            const version = (0, utility_1.trim)(this._version, "/");
            result += version;
            result += "/";
        }
        if (typeof uri === "string") {
            uri = (0, utility_1.trim)(uri, "/");
            if (result === "") {
                result += "/";
            }
            result += uri;
        }
        return result;
    }
    /**
     * Make a request against the domain
     *
     * @param opts - request options
     * @returns promise that resolves to request response
     */ request(opts) {
        return this._domain.request({
            ...opts,
            uri: this.relativeUrl(opts.uri || "")
        });
    }
    /**
     * Create a new record
     *
     * @param opts - request options
     *
     * @throws Error If response returns non 2xx or 201 status code
     *
     * @returns promise that resolves to created record
     */ create(opts) {
        var qResponse = this.request(opts);
        qResponse = qResponse.then(function success(response) {
            if (response.statusCode < 200 || response.statusCode >= 300) {
                throw new RestException_1.default(response);
            }
            if (typeof response.body === "string") {
                return JSON.parse(response.body);
            }
            return response.body;
        });
        return qResponse;
    }
    /**
     * Fetch an instance of a record
     *
     * @param opts - request options
     *
     * @throws Error If response returns non 2xx or 3xx status code
     *
     * @returns promise that resolves to fetched result
     */ fetch(opts) {
        var qResponse = this.request(opts);
        qResponse = qResponse.then(function success(response) {
            if (response.statusCode < 200 || response.statusCode >= 400) {
                throw new RestException_1.default(response);
            }
            if (typeof response.body === "string") {
                return JSON.parse(response.body);
            }
            return response.body;
        });
        return qResponse;
    }
    /**
     * Fetch a page of records
     *
     * @param opts - request options
     * @returns promise that resolves to page of records
     */ page(opts) {
        return this.request(opts);
    }
    /**
     * Update a record
     *
     * @param opts - request options
     *
     * @throws Error If response returns non 2xx status code
     *
     * @returns promise that resolves to updated result
     */ update(opts) {
        var qResponse = this.request(opts);
        qResponse = qResponse.then(function success(response) {
            if (response.statusCode < 200 || response.statusCode >= 300) {
                throw new RestException_1.default(response);
            }
            if (typeof response.body === "string") {
                return JSON.parse(response.body);
            }
            return response.body;
        });
        return qResponse;
    }
    /**
     * Delete a record
     *
     * @param opts - request options
     *
     * @throws Error If response returns a 5xx status
     *
     * @returns promise that resolves to true if record was deleted
     */ remove(opts) {
        var qResponse = this.request(opts);
        qResponse = qResponse.then(function success(response) {
            if (response.statusCode < 200 || response.statusCode >= 300) {
                throw new RestException_1.default(response);
            }
            return response.statusCode === 204;
        });
        return qResponse;
    }
    /**
     * Process limits for list requests
     *
     * @param opts.limit - The maximum number of items to fetch
     * @param opts.pageSize - The maximum number of items to return with every request
     *
     */ readLimits(opts) {
        var limit = opts.limit;
        var pageSize = opts.pageSize;
        if (limit && !Number.isFinite(limit) || limit <= 0) {
            throw new TypeError("Parameter limit must be a positive integer");
        }
        if (pageSize && (!Number.isFinite(pageSize) || pageSize <= 0)) {
            throw new TypeError("Parameter pageSize must be a positive integer");
        }
        if (limit && !pageSize) {
            pageSize = limit;
        }
        return {
            limit: limit,
            pageSize: pageSize
        };
    }
    setPromiseCallback(operationPromise, callback) {
        if (typeof callback === "function") {
            operationPromise = operationPromise.then((value)=>callback(null, value)).catch((error)=>callback(error));
        }
        return operationPromise;
    }
    /**
     * For each record instance, executes a provided callback function with that
     * instance
     *
     * @param params - Parameters (Optional)
     * @param params.limit - Optional maximum number of record instances to
     *  fetch
     * @param params.pageSize - Optional maximum number of records to return
     *  with every request
     * @param params.callback - Callback function to call with each
     *  record instance
     * @param params.done - Optional done function to call when all
     *  records are processed, the limit is reached, or an error occurs.
     *  Receives an error argument if an error occurs.
     * @param callback - Callback function to call with each record.
     *  Receives a done function argument that will short-circuit the for-each
     *  loop that may accept an error argument.
     * @returns Returns a promise that resolves when all records
     *  processed or if the limit is reached, and rejects with an error if an
     *  error occurs and is not handled in the user provided done function.
     */ each(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        } else {
            params = params || {};
        }
        if (params.callback) {
            callback = params.callback;
        }
        if (typeof callback === "undefined") {
            throw new Error("Callback function must be provided");
        }
        let done = false;
        let doneCalled = false;
        let currentPage = 1;
        let currentResource = 0;
        let limits = {};
        let pPending = true;
        let pResolve;
        let pReject;
        if (this._version instanceof Version) {
            limits = this._version.readLimits({
                limit: params.limit,
                pageSize: params.pageSize
            });
        }
        function onComplete(error) {
            let unhandledError = error;
            done = true;
            if (typeof params.done === "function" && !doneCalled) {
                try {
                    params.done(unhandledError);
                    unhandledError = null;
                } catch (e) {
                    unhandledError = e;
                }
            }
            doneCalled = true;
            if (pPending) {
                if (unhandledError) {
                    pReject(unhandledError);
                } else {
                    pResolve();
                }
                pPending = false;
            }
        }
        function fetchNextPage(fn) {
            let promise = fn();
            if (typeof promise === "undefined") {
                onComplete();
                return;
            }
            promise.then((page)=>{
                try {
                    page.instances.forEach(function(instance) {
                        if (done || typeof params.limit !== "undefined" && currentResource >= params.limit) {
                            done = true;
                            return false;
                        }
                        currentResource++;
                        callback?.(instance, onComplete);
                    });
                } catch (e) {
                    return onComplete(e);
                }
                if (!done) {
                    currentPage++;
                    fetchNextPage(page.nextPage.bind(page));
                } else {
                    onComplete();
                }
            }).catch(onComplete);
        }
        return new Promise((resolve, reject)=>{
            pResolve = resolve;
            pReject = reject;
            fetchNextPage(this.page.bind(this, Object.assign(params, limits)));
        });
    }
    list(params, callback) {
        if (typeof params === "function") {
            callback = params;
            params = {};
        } else {
            params = params || {};
        }
        let allResources = [];
        params.callback = function(resource, done) {
            allResources.push(resource);
            if (typeof params.limit !== "undefined" && allResources.length === params.limit) {
                done();
            }
        };
        let operationPromise = new Promise((resolve, reject)=>{
            params.done = function(error) {
                if (typeof error === "undefined") {
                    resolve(allResources);
                } else {
                    reject(error);
                }
            };
        });
        if (this._version instanceof Version) {
            operationPromise = this._version.setPromiseCallback(operationPromise, callback);
        }
        this.each(params);
        return operationPromise;
    }
}
exports.default = Version;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/deserialize.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iso8601Date = iso8601Date;
exports.iso8601DateTime = iso8601DateTime;
exports.rfc2822DateTime = rfc2822DateTime;
exports.decimal = decimal;
exports.integer = integer;
const dayjs_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/dayjs.min.js [app-rsc] (ecmascript)"));
const utc_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/plugin/utc.js [app-rsc] (ecmascript)"));
dayjs_1.default.extend(utc_1.default);
/**
 * @namespace deserialize
 */ /**
 * Parse a string into a Date object
 *
 * @param s - Date string in YYYY-MM-DD format
 * @returns Date object, or the original date string if the argument is not a valid date
 */ function iso8601Date(s) {
    return parseDate(s, "YYYY-MM-DD");
}
/**
 * Parse a string into a Date object
 *
 * @param s - Date string in YYYY-MM-DD[T]HH:mm:ss[Z] format
 * @returns Date object, or the original date string if the argument is not a valid date
 */ function iso8601DateTime(s) {
    return parseDate(s, "YYYY-MM-DD[T]HH:mm:ss[Z]");
}
/**
 * Parse a string into a Date object
 *
 * @param s - Date string in ddd, DD MMM YYYY HH:mm:ss [+0000] format
 * @returns Date object, or the original date string if the argument is not a valid date
 */ function rfc2822DateTime(s) {
    return parseDate(s, "ddd, DD MMM YYYY HH:mm:ss [+0000]");
}
/**
 * Parse a string into a decimal
 *
 * @param d - Decimal value as string
 * @returns Number, or the original string if the argument is NaN
 */ function decimal(d) {
    return parseNumber(d, parseFloat);
}
/**
 * Parse a string into a integer
 *
 * @param i - Integer value as string
 * @returns Number, or the original string if the argument is NaN
 */ function integer(i) {
    return parseNumber(i, parseInt);
}
function parseDate(s, format) {
    var m = dayjs_1.default.utc(s, format);
    if (m.isValid()) {
        return m.toDate();
    }
    return s;
}
function parseNumber(n, parser) {
    var parsed = parser(n);
    if (typeof parsed === "number" && isNaN(parsed)) {
        return n;
    }
    return parsed;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/serialize.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iso8601Date = iso8601Date;
exports.iso8601DateTime = iso8601DateTime;
exports.prefixedCollapsibleMap = prefixedCollapsibleMap;
exports.object = object;
exports.bool = bool;
exports.twiml = twiml;
exports.map = map;
const dayjs_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/dayjs.min.js [app-rsc] (ecmascript)"));
const utc_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dayjs@1.11.18/node_modules/dayjs/plugin/utc.js [app-rsc] (ecmascript)"));
dayjs_1.default.extend(utc_1.default);
/**
 * @namespace serialize
 */ /**
 * Turns a Date object into a string if parameter is a Date otherwise returns the parameter
 *
 * @param d - date object to format
 * @returns date formatted in YYYY-MM-DD form, otherwise the
 * provided parameter.
 */ function iso8601Date(date) {
    if (!date || !(date instanceof Date)) {
        return date;
    } else {
        return dayjs_1.default.utc(date).format("YYYY-MM-DD");
    }
}
/**
 * Turns a Date object into a string if parameter is a Date otherwise returns the parameter
 *
 * @param  d - date object to format
 * @returns date formatted in YYYY-MM-DD[T]HH:mm:ss[Z] form, otherwise the
 * provided parameter.
 */ function iso8601DateTime(date) {
    if (!date || !(date instanceof Date)) {
        return date;
    } else {
        return dayjs_1.default.utc(date).format("YYYY-MM-DD[T]HH:mm:ss[Z]");
    }
}
function prefixedCollapsibleMap(m, prefix) {
    if (!m || typeof m !== "object" || Object.prototype.toString.call(m) !== "[object Object]") {
        return {};
    }
    function flatten(m, result, previous) {
        result = result || {};
        previous = previous || [];
        Object.keys(m).forEach((key)=>{
            const unionKeys = [
                ...previous
            ];
            if (!unionKeys.includes(key)) {
                unionKeys.push(key);
            }
            if (typeof m[key] === "object" && Object.prototype.toString.call(m[key]) === "[object Object]") {
                flatten(m[key], result, unionKeys);
            } else {
                result[unionKeys.join(".")] = m[key];
            }
        });
        return result;
    }
    var flattened = flatten(m);
    var result = flattened;
    if (prefix) {
        result = {};
        Object.keys(flattened).forEach((key)=>{
            result[prefix + "." + key] = flattened[key];
        });
    }
    return result;
}
function object(o) {
    if (typeof o === "object") {
        return JSON.stringify(o);
    }
    return o;
}
/**
 * Coerces a boolean literal into a string
 *
 * @param input - boolean or string to be coerced
 * @returns a string 'true' or 'false' if passed a boolean, else the value
 */ function bool(input) {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input === "boolean" || typeof input === "object" && Object.prototype.toString.call(input) === "[object Boolean]") {
        return input.toString();
    }
    return input;
}
function twiml(input) {
    return input.toString();
}
/**
 * Maps transform over each element in input if input is an array
 *
 * @param input - array to map transform over, if not an array then it is
 * returned as is.
 * @returns new array with transform applied to each element.
 */ function map(input, transform) {
    if (typeof input === "object" && Array.isArray(input)) {
        return input.map((element)=>transform(element));
    }
    return input;
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/Page.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const RestException_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RestException.js [app-rsc] (ecmascript)"));
class Page {
    /**
     *
     * Base page object to maintain request state.
     *
     * @param version - A twilio version instance
     * @param response - The http response
     * @param solution - path solution
     */ constructor(version, response, solution){
        let payload = this.processResponse(response);
        this._version = version;
        this._payload = payload;
        this._solution = solution;
        this.nextPageUrl = this.getNextPageUrl();
        this.previousPageUrl = this.getPreviousPageUrl();
        this.instances = this.loadInstances(this.loadPage(payload));
    }
    /**
     * Get the url of the previous page of records
     *
     * @returns url of the previous page, or undefined if the
     * previous page URI/URL is not defined.
     */ getPreviousPageUrl() {
        if (this._payload.meta && "previous_page_url" in this._payload.meta && this._payload.meta.previous_page_url) {
            // jshint ignore:line
            return this._payload.meta.previous_page_url; // jshint ignore:line
        }
        if ("previous_page_uri" in this._payload && this._payload.previous_page_uri) {
            // jshint ignore:line
            return this._version._domain.absoluteUrl(this._payload.previous_page_uri); // jshint ignore:line
        }
        return undefined;
    }
    /**
     * Get the url of the next page of records
     *
     * @returns url of the next page, or undefined if the
     * next page URI/URL is not defined.
     */ getNextPageUrl() {
        if (this._payload.meta && "next_page_url" in this._payload.meta && this._payload.meta.next_page_url) {
            // jshint ignore:line
            return this._payload.meta.next_page_url; // jshint ignore:line
        }
        if ("next_page_uri" in this._payload && this._payload.next_page_uri) {
            // jshint ignore:line
            return this._version._domain.absoluteUrl(this._payload.next_page_uri); // jshint ignore:line
        }
        return undefined;
    }
    /**
     * Build a new instance given a json payload
     *
     * @param payload - Payload response from the API
     * @returns instance of a resource
     */ getInstance(payload) {
        throw new Error("Page.get_instance() must be implemented in the derived class");
    }
    /**
     * Load a list of records
     *
     * @param resources - json payload of records
     * @returns list of resources
     */ loadInstances(resources) {
        let instances = [];
        resources.forEach((resource)=>{
            instances.push(this.getInstance(resource));
        });
        return instances;
    }
    /**
     * Fetch the next page of records
     *
     * @returns promise that resolves to next page of results,
     * or undefined if there isn't a nextPageUrl undefined.
     */ nextPage() {
        if (!this.nextPageUrl) {
            return undefined;
        }
        var reqPromise = this._version._domain.twilio.request({
            method: "get",
            uri: this.nextPageUrl
        });
        var nextPagePromise = reqPromise.then((function(response) {
            return new this.constructor(this._version, response, this._solution);
        }).bind(this));
        return nextPagePromise;
    }
    /**
     * Fetch the previous page of records
     *
     * @returns promise that resolves to previous page of
     * results, or undefined if there isn't a previousPageUrl undefined.
     */ previousPage() {
        if (!this.previousPageUrl) {
            return undefined;
        }
        var reqPromise = this._version._domain.twilio.request({
            method: "get",
            uri: this.previousPageUrl
        });
        var prevPagePromise = reqPromise.then((function(response) {
            return new this.constructor(this._version, response, this._solution);
        }).bind(this));
        return prevPagePromise;
    }
    /**
     * Parse json response from API
     *
     * @param response - API response
     *
     * @throws Error If non 200 status code is returned
     *
     * @returns json parsed response
     */ processResponse(response) {
        if (response.statusCode !== 200) {
            throw new RestException_1.default(response);
        }
        if (typeof response.body === "string") {
            return JSON.parse(response.body);
        }
        return response.body;
    }
    /**
     * Load a page of records
     *
     * @param  {object} payload json payload
     * @return {array} the page of records
     */ loadPage(payload) {
        if (payload.meta?.key) {
            return payload[payload.meta.key];
        }
        const keys = Object.keys(payload).filter((key)=>!Page.META_KEYS.includes(key));
        if (keys.length === 1) {
            return payload[keys[0]];
        }
        for (const key of keys)if (Array.isArray(payload[key])) return payload[key];
        throw new Error("Page Records cannot be deserialized");
    }
    forOwn(obj, iteratee) {
        obj = Object(obj);
        for (const [key, val] of Object.entries(obj)){
            iteratee(val, key, obj);
        }
    }
    toJSON() {
        const clone = {};
        this.forOwn(this, (value, key)=>{
            if (!key.startsWith("_") && typeof value !== "function") {
                clone[key] = value;
            }
        });
        return clone;
    }
}
/**
 * Meta keys returned in a list request
 *
 * @constant META_KEYS
 */ Page.META_KEYS = [
    "end",
    "first_page_uri",
    "last_page_uri",
    "next_page_uri",
    "num_pages",
    "page",
    "page_size",
    "previous_page_uri",
    "start",
    "total",
    "uri"
];
exports.default = Page;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/webhooks/webhooks.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getExpectedTwilioSignature = getExpectedTwilioSignature;
exports.getExpectedBodyHash = getExpectedBodyHash;
exports.validateRequest = validateRequest;
exports.validateBody = validateBody;
exports.validateRequestWithBody = validateRequestWithBody;
exports.validateIncomingRequest = validateIncomingRequest;
exports.validateExpressRequest = validateExpressRequest;
exports.webhook = webhook;
const scmp = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/scmp@2.1.0/node_modules/scmp/index.js [app-rsc] (ecmascript)");
const crypto_1 = __importDefault(__turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)"));
const url_1 = __importDefault(__turbopack_context__.r("[externals]/url [external] (url, cjs)"));
const querystring_1 = __turbopack_context__.r("[externals]/querystring [external] (querystring, cjs)");
/**
 * Utility function to construct the URL string, since Node.js url library won't include standard port numbers
 *
 * @param parsedUrl - The parsed url object that Twilio requested on your server
 * @returns URL with standard port number included
 */ function buildUrlWithStandardPort(parsedUrl) {
    let url = "";
    const port = parsedUrl.protocol === "https:" ? ":443" : ":80";
    url += parsedUrl.protocol ? parsedUrl.protocol + "//" : "";
    url += parsedUrl.username;
    url += parsedUrl.password ? ":" + parsedUrl.password : "";
    url += parsedUrl.username || parsedUrl.password ? "@" : "";
    url += parsedUrl.host ? parsedUrl.host + port : "";
    url += parsedUrl.pathname + parsedUrl.search + parsedUrl.hash;
    return url;
}
/**
 Utility function to add a port number to a URL

 @param parsedUrl - The parsed url object that Twilio requested on your server
 @returns URL with port
 */ function addPort(parsedUrl) {
    if (!parsedUrl.port) {
        return buildUrlWithStandardPort(parsedUrl);
    }
    return parsedUrl.toString();
}
/**
 Utility function to remove a port number from a URL

 @param parsedUrl - The parsed url object that Twilio requested on your server
 @returns URL without port
 */ function removePort(parsedUrl) {
    parsedUrl = new URL(parsedUrl); // prevent mutation of original URL object
    parsedUrl.port = "";
    return parsedUrl.toString();
}
function withLegacyQuerystring(url) {
    const parsedUrl = new URL(url);
    if (parsedUrl.search) {
        const qs = (0, querystring_1.parse)(parsedUrl.search.slice(1));
        parsedUrl.search = "";
        return parsedUrl.toString() + "?" + (0, querystring_1.stringify)(qs);
    }
    return url;
}
/**
 Utility function to convert request parameter to a string format

 @param paramName - The request parameter name
 @param paramValue - The request parameter value
 @returns Formatted parameter string
 */ function toFormUrlEncodedParam(paramName, paramValue) {
    if (paramValue instanceof Array) {
        return Array.from(new Set(paramValue)).sort().map((val)=>toFormUrlEncodedParam(paramName, val)).reduce((acc, val)=>acc + val, "");
    }
    return paramName + paramValue;
}
/**
 Utility function to get the expected signature for a given request

 @param authToken - The auth token, as seen in the Twilio portal
 @param url - The full URL (with query string) you configured to handle
 this request
 @param params - the parameters sent with this request
 @returns signature
 */ function getExpectedTwilioSignature(authToken, url, params) {
    if (url.indexOf("bodySHA256") !== -1 && params === null) {
        params = {};
    }
    var data = Object.keys(params).sort().reduce((acc, key)=>acc + toFormUrlEncodedParam(key, params[key]), url);
    return crypto_1.default.createHmac("sha1", authToken).update(Buffer.from(data, "utf-8")).digest("base64");
}
/**
 Utility function to get the expected body hash for a given request's body

 @param body - The plain-text body of the request
 */ function getExpectedBodyHash(body) {
    return crypto_1.default.createHash("sha256").update(Buffer.from(body, "utf-8")).digest("hex");
}
/**
 Utility function to validate an incoming request is indeed from Twilio

 @param authToken - The auth token, as seen in the Twilio portal
 @param twilioHeader - The value of the X-Twilio-Signature header from the request
 @param url - The full URL (with query string) you configured to handle this request
 @param params - the parameters sent with this request
 @returns valid
 */ function validateRequest(authToken, twilioHeader, url, params) {
    twilioHeader = twilioHeader || "";
    const urlObject = new URL(url);
    /*
     *  Check signature of the url with and without the port number
     *  and with and without the legacy querystring (special chars are encoded when using `new URL()`)
     *  since signature generation on the back end is inconsistent
     */ const isValidSignatureWithoutPort = validateSignatureWithUrl(authToken, twilioHeader, removePort(urlObject), params);
    if (isValidSignatureWithoutPort) {
        return true;
    }
    const isValidSignatureWithPort = validateSignatureWithUrl(authToken, twilioHeader, addPort(urlObject), params);
    if (isValidSignatureWithPort) {
        return true;
    }
    const isValidSignatureWithLegacyQuerystringWithoutPort = validateSignatureWithUrl(authToken, twilioHeader, withLegacyQuerystring(removePort(urlObject)), params);
    if (isValidSignatureWithLegacyQuerystringWithoutPort) {
        return true;
    }
    const isValidSignatureWithLegacyQuerystringWithPort = validateSignatureWithUrl(authToken, twilioHeader, withLegacyQuerystring(addPort(urlObject)), params);
    return isValidSignatureWithLegacyQuerystringWithPort;
}
function validateSignatureWithUrl(authToken, twilioHeader, url, params) {
    const signatureWithoutPort = getExpectedTwilioSignature(authToken, url, params);
    return scmp(Buffer.from(twilioHeader), Buffer.from(signatureWithoutPort));
}
function validateBody(body, bodyHash) {
    var expectedHash = getExpectedBodyHash(body);
    return scmp(Buffer.from(bodyHash), Buffer.from(expectedHash));
}
/**
 Utility function to validate an incoming request is indeed from Twilio. This also validates
 the request body against the bodySHA256 post parameter.

 @param authToken - The auth token, as seen in the Twilio portal
 @param twilioHeader - The value of the X-Twilio-Signature header from the request
 @param url - The full URL (with query string) you configured to handle this request
 @param body - The body of the request
 @returns valid
 */ function validateRequestWithBody(authToken, twilioHeader, url, body) {
    const urlObject = new URL(url);
    return validateRequest(authToken, twilioHeader, url, {}) && validateBody(body, urlObject.searchParams.get("bodySHA256") || "");
}
/**
 Utility function to validate an incoming request is indeed from Twilio.
 adapted from https://github.com/crabasa/twiliosig

 @param request - A request object (based on Express implementation http://expressjs.com/api.html#req.params)
 @param authToken - The auth token, as seen in the Twilio portal
 @param opts - options for request validation:
    -> url: The full URL (with query string) you used to configure the webhook with Twilio - overrides host/protocol options
    -> host: manually specify the host name used by Twilio in a number's webhook config
    -> protocol: manually specify the protocol used by Twilio in a number's webhook config
 */ function validateIncomingRequest(request, authToken, opts) {
    var options = opts || {};
    var webhookUrl;
    if (options.url) {
        // Let the user specify the full URL
        webhookUrl = options.url;
    } else {
        // Use configured host/protocol, or infer based on request
        var protocol = options.protocol || request.protocol;
        var host = options.host || request.headers.host;
        webhookUrl = url_1.default.format({
            protocol: protocol,
            host: host,
            pathname: request.originalUrl
        });
        if (request.originalUrl.search(/\?/) >= 0) {
            webhookUrl = webhookUrl.replace(/%3F/g, "?");
        }
    }
    if (webhookUrl.indexOf("bodySHA256") > 0) {
        return validateRequestWithBody(authToken, request.header("X-Twilio-Signature") || "", webhookUrl, request.rawBody || "{}");
    } else {
        return validateRequest(authToken, request.header("X-Twilio-Signature") || "", webhookUrl, request.body || {});
    }
}
function validateExpressRequest(request, authToken, opts) {
    return validateIncomingRequest(request, authToken, opts);
}
/**
Express middleware to accompany a Twilio webhook. Provides Twilio
request validation, and makes the response a little more friendly for our
TwiML generator.  Request validation requires the express.urlencoded middleware
to have been applied (e.g. app.use(express.urlencoded()); in your app config).

Options:
- validate: {Boolean} whether or not the middleware should validate the request
    came from Twilio.  Default true. If the request does not originate from
    Twilio, we will return a text body and a 403.  If there is no configured
    auth token and validate=true, this is an error condition, so we will return
    a 500.
- host: manually specify the host name used by Twilio in a number's webhook config
- protocol: manually specify the protocol used by Twilio in a number's webhook config
- url: The full URL (with query string) you used to configure the webhook with Twilio - overrides host/protocol options

Returns a middleware function.

Examples:
var webhookMiddleware = twilio.webhook();
var webhookMiddleware = twilio.webhook('asdha9dhjasd'); //init with auth token
var webhookMiddleware = twilio.webhook({
    validate:false // don't attempt request validation
});
var webhookMiddleware = twilio.webhook({
    host: 'hook.twilio.com',
    protocol: 'https'
});
 */ function webhook(opts, authToken) {
    let token;
    let options = undefined;
    // Narrowing the args
    if (opts) {
        if (typeof opts === "string") {
            token = opts;
        }
        if (typeof opts === "object") {
            options = opts;
        }
    }
    if (authToken) {
        if (typeof authToken === "string") {
            token = authToken;
        }
        if (typeof authToken === "object") {
            options = authToken;
        }
    }
    if (!options) options = {};
    if (options.validate == undefined) options.validate = true;
    // Process arguments
    var tokenString;
    for(var i = 0, l = arguments.length; i < l; i++){
        var arg = arguments[i];
        if (typeof arg === "string") {
            tokenString = arg;
        } else {
            options = Object.assign(options || {}, arg);
        }
    }
    // set auth token from input or environment variable
    if (options) {
        options.authToken = tokenString ? tokenString : process.env.TWILIO_AUTH_TOKEN;
    }
    // Create middleware function
    return function hook(request, response, next) {
        // Do validation if requested
        if (options?.validate) {
            // Check if the 'X-Twilio-Signature' header exists or not
            if (!request.header("X-Twilio-Signature")) {
                return response.type("text/plain").status(400).send("No signature header error - X-Twilio-Signature header does not exist, maybe this request is not coming from Twilio.");
            }
            // Check for a valid auth token
            if (!options?.authToken) {
                console.error("[Twilio]: Error - Twilio auth token is required for webhook request validation.");
                response.type("text/plain").status(500).send("Webhook Error - we attempted to validate this request without first configuring our auth token.");
            } else {
                // Check that the request originated from Twilio
                var valid = validateExpressRequest(request, options?.authToken, {
                    url: options?.url,
                    host: options?.host,
                    protocol: options?.protocol
                });
                if (valid) {
                    next();
                } else {
                    return response.type("text/plain").status(403).send("Twilio Request Validation Failed.");
                }
            }
        } else {
            next();
        }
    };
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/TwiML.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const xmlbuilder_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/xmlbuilder@13.0.2/node_modules/xmlbuilder/lib/index.js [app-rsc] (ecmascript)"));
/* jshint ignore:start */ /**
 * Parent TwiML object
 */ /* jshint ignore:end */ class TwiML {
    constructor(){
        this._propertyName = "";
        this.response = xmlbuilder_1.default.create("Response", {
            stringify: {
                attValue: function(value) {
                    if (Array.isArray(value)) {
                        value = value.join(" ");
                    }
                    return this.attEscape?.("" + value || "") || "";
                }
            }
        }).dec("1.0", "UTF-8");
    }
    /* jshint ignore:start */ /**
     * Because child elements have properties named after their class names, we need
     * to translate that when we want to access that at the parent prototype level.
     * So this will translate something like Say to 'say' and VoiceResponse to
     * 'response'.
     */ /* jshint ignore:end */ _getXml() {
        return this[this._propertyName];
    }
    /* jshint ignore:start */ /**
     * Convert to TwiML
     *
     * @returns TwiML XML
     */ /* jshint ignore:end */ toString() {
        return this._getXml().end();
    }
    /* jshint ignore:start */ /**
     * Add text under the TwiML node
     *
     * @param {string} content
     */ /* jshint ignore:end */ addText(content) {
        this._getXml().txt(content);
    }
    /* jshint ignore:start */ /**
     * Add an arbitrary tag as a child.
     *
     * @param {string} content
     */ /* jshint ignore:end */ addChild(tagName, attributes) {
        return new GenericNode(this._getXml().ele(tagName, attributes));
    }
}
exports.default = TwiML;
/* jshint ignore:start */ /**
 * Generic node
 */ /* jshint ignore:end */ class GenericNode extends TwiML {
    // must match variable name for _getPropertyName
    constructor(node){
        super();
        this.node = node;
        this._propertyName = "node";
    }
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/VoiceResponse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */ var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const TwiML_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/TwiML.js [app-rsc] (ecmascript)"));
class VoiceResponse extends TwiML_1.default {
    /**
     * <Response> TwiML for Voice
     */ constructor(){
        super();
        this._propertyName = "response";
    }
    /**
     * Comments in <Response>
     *
     * @param comment - XML Comment
     */ comment(comment) {
        return this.response.comment(comment);
    }
    /**
     * Comments after <Response>
     *
     * @param comment - XML Comment
     */ commentAfter(comment) {
        return this.response.commentAfter(comment);
    }
    /**
     * Comments before <Response>
     *
     * @param comment - XML Comment
     */ commentBefore(comment) {
        return this.response.commentBefore(comment);
    }
    /**
     * <Connect> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ connect(attributes) {
        return new VoiceResponse.Connect(this.response.ele("Connect", attributes));
    }
    dial(attributes, number) {
        if (typeof attributes === "string") {
            number = attributes;
            attributes = {};
        }
        return new VoiceResponse.Dial(this.response.ele("Dial", attributes, number));
    }
    /**
     * <Echo> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ echo(attributes) {
        return new VoiceResponse.Echo(this.response.ele("Echo", attributes));
    }
    enqueue(attributes, name) {
        if (typeof attributes === "string") {
            name = attributes;
            attributes = {};
        }
        return new VoiceResponse.Enqueue(this.response.ele("Enqueue", attributes, name));
    }
    /**
     * <Gather> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ gather(attributes) {
        return new VoiceResponse.Gather(this.response.ele("Gather", attributes));
    }
    /**
     * <Hangup> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ hangup(attributes) {
        return new VoiceResponse.Hangup(this.response.ele("Hangup", attributes));
    }
    /**
     * <Leave> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ leave(attributes) {
        return new VoiceResponse.Leave(this.response.ele("Leave", attributes));
    }
    /**
     * <Pause> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ pause(attributes) {
        return new VoiceResponse.Pause(this.response.ele("Pause", attributes));
    }
    /**
     * <Pay> Twiml Verb
     *
     * @param attributes - TwiML attributes
     */ pay(attributes) {
        return new VoiceResponse.Pay(this.response.ele("Pay", attributes));
    }
    play(attributes, url) {
        if (typeof attributes === "string") {
            url = attributes;
            attributes = {};
        }
        return new VoiceResponse.Play(this.response.ele("Play", attributes, url));
    }
    /**
     * <Prompt> Twiml Verb
     *
     * @param attributes - TwiML attributes
     */ prompt(attributes) {
        return new VoiceResponse.Prompt(this.response.ele("Prompt", attributes));
    }
    queue(attributes, name) {
        if (typeof attributes === "string") {
            name = attributes;
            attributes = {};
        }
        return new VoiceResponse.Queue(this.response.ele("Queue", attributes, name));
    }
    /**
     * <Record> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ record(attributes) {
        return new VoiceResponse.Record(this.response.ele("Record", attributes));
    }
    redirect(attributes, url) {
        if (typeof attributes === "string") {
            url = attributes;
            attributes = {};
        }
        return new VoiceResponse.Redirect(this.response.ele("Redirect", attributes, url));
    }
    /**
     * <Refer> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ refer(attributes) {
        return new VoiceResponse.Refer(this.response.ele("Refer", attributes));
    }
    /**
     * <Reject> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ reject(attributes) {
        return new VoiceResponse.Reject(this.response.ele("Reject", attributes));
    }
    say(attributes, message) {
        if (typeof attributes === "string") {
            message = attributes;
            attributes = {};
        }
        return new VoiceResponse.Say(this.response.ele("Say", attributes, message));
    }
    sms(attributes, message) {
        if (typeof attributes === "string") {
            message = attributes;
            attributes = {};
        }
        return new VoiceResponse.Sms(this.response.ele("Sms", attributes, message));
    }
    /**
     * <Start> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ start(attributes) {
        return new VoiceResponse.Start(this.response.ele("Start", attributes));
    }
    /**
     * <Stop> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ stop(attributes) {
        return new VoiceResponse.Stop(this.response.ele("Stop", attributes));
    }
}
(function(VoiceResponse) {
    class AiSession extends TwiML_1.default {
        /**
         * <AiSession> TwiML Noun
         */ constructor(aiSession){
            super();
            this.aiSession = aiSession;
            this._propertyName = "aiSession";
        }
    }
    VoiceResponse.AiSession = AiSession;
    class Application extends TwiML_1.default {
        /**
         * <Application> TwiML Noun
         */ constructor(application){
            super();
            this.application = application;
            this._propertyName = "application";
        }
        applicationSid(attributes, sid) {
            if (typeof attributes === "string") {
                sid = attributes;
                attributes = {};
            }
            return new VoiceResponse.ApplicationSid(this.application.ele("ApplicationSid", attributes, sid));
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.application.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Application = Application;
    class ApplicationSid extends TwiML_1.default {
        /**
         * <ApplicationSid> TwiML Noun
         */ constructor(applicationSid){
            super();
            this.applicationSid = applicationSid;
            this._propertyName = "applicationSid";
        }
    }
    VoiceResponse.ApplicationSid = ApplicationSid;
    class Assistant extends TwiML_1.default {
        /**
         * <Assistant> TwiML Noun
         */ constructor(assistant){
            super();
            this.assistant = assistant;
            this._propertyName = "assistant";
        }
        /**
         * <Language> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ language(attributes) {
            return new VoiceResponse.Language(this.assistant.ele("Language", attributes));
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.assistant.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Assistant = Assistant;
    class Autopilot extends TwiML_1.default {
        /**
         * <Autopilot> TwiML Noun
         */ constructor(autopilot){
            super();
            this.autopilot = autopilot;
            this._propertyName = "autopilot";
        }
    }
    VoiceResponse.Autopilot = Autopilot;
    class Client extends TwiML_1.default {
        /**
         * <Client> TwiML Noun
         */ constructor(client){
            super();
            this.client = client;
            this._propertyName = "client";
        }
        identity(attributes, clientIdentity) {
            if (typeof attributes === "string") {
                clientIdentity = attributes;
                attributes = {};
            }
            return new VoiceResponse.Identity(this.client.ele("Identity", attributes, clientIdentity));
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.client.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Client = Client;
    class Conference extends TwiML_1.default {
        /**
         * <Conference> TwiML Noun
         */ constructor(conference){
            super();
            this.conference = conference;
            this._propertyName = "conference";
        }
    }
    VoiceResponse.Conference = Conference;
    class Config extends TwiML_1.default {
        /**
         * <Config> TwiML Noun
         */ constructor(config){
            super();
            this.config = config;
            this._propertyName = "config";
        }
    }
    VoiceResponse.Config = Config;
    class Connect extends TwiML_1.default {
        /**
         * <Connect> TwiML Verb
         */ constructor(connect){
            super();
            this.connect = connect;
            this._propertyName = "connect";
        }
        /**
         * <AiSession> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ aiSession(attributes) {
            return new VoiceResponse.AiSession(this.connect.ele("AiSession", attributes));
        }
        /**
         * <Assistant> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ assistant(attributes) {
            return new VoiceResponse.Assistant(this.connect.ele("Assistant", attributes));
        }
        autopilot(attributes, name) {
            if (typeof attributes === "string") {
                name = attributes;
                attributes = {};
            }
            return new VoiceResponse.Autopilot(this.connect.ele("Autopilot", attributes, name));
        }
        /**
         * <Conversation> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ conversation(attributes) {
            return new VoiceResponse.Conversation(this.connect.ele("Conversation", attributes));
        }
        /**
         * <ConversationRelay> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ conversationRelay(attributes) {
            return new VoiceResponse.ConversationRelay(this.connect.ele("ConversationRelay", attributes));
        }
        room(attributes, name) {
            if (typeof attributes === "string") {
                name = attributes;
                attributes = {};
            }
            return new VoiceResponse.Room(this.connect.ele("Room", attributes, name));
        }
        /**
         * <Stream> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ stream(attributes) {
            return new VoiceResponse.Stream(this.connect.ele("Stream", attributes));
        }
        /**
         * <VirtualAgent> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ virtualAgent(attributes) {
            return new VoiceResponse.VirtualAgent(this.connect.ele("VirtualAgent", attributes));
        }
    }
    VoiceResponse.Connect = Connect;
    class Conversation extends TwiML_1.default {
        /**
         * <Conversation> TwiML Noun
         */ constructor(conversation){
            super();
            this.conversation = conversation;
            this._propertyName = "conversation";
        }
    }
    VoiceResponse.Conversation = Conversation;
    class ConversationRelay extends TwiML_1.default {
        /**
         * <ConversationRelay> TwiML Noun
         */ constructor(conversationRelay){
            super();
            this.conversationRelay = conversationRelay;
            this._propertyName = "conversationRelay";
        }
        /**
         * <Language> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ language(attributes) {
            return new VoiceResponse.Language(this.conversationRelay.ele("Language", attributes));
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.conversationRelay.ele("Parameter", attributes));
        }
    }
    VoiceResponse.ConversationRelay = ConversationRelay;
    class Dial extends TwiML_1.default {
        /**
         * <Dial> TwiML Verb
         */ constructor(dial){
            super();
            this.dial = dial;
            this._propertyName = "dial";
        }
        application(attributes, applicationSid) {
            if (typeof attributes === "string") {
                applicationSid = attributes;
                attributes = {};
            }
            return new VoiceResponse.Application(this.dial.ele("Application", attributes, applicationSid));
        }
        client(attributes, identity) {
            if (typeof attributes === "string") {
                identity = attributes;
                attributes = {};
            }
            return new VoiceResponse.Client(this.dial.ele("Client", attributes, identity));
        }
        conference(attributes, name) {
            if (typeof attributes === "string") {
                name = attributes;
                attributes = {};
            }
            return new VoiceResponse.Conference(this.dial.ele("Conference", attributes, name));
        }
        number(attributes, phoneNumber) {
            if (typeof attributes === "string") {
                phoneNumber = attributes;
                attributes = {};
            }
            return new VoiceResponse.Number(this.dial.ele("Number", attributes, phoneNumber));
        }
        queue(attributes, name) {
            if (typeof attributes === "string") {
                name = attributes;
                attributes = {};
            }
            return new VoiceResponse.Queue(this.dial.ele("Queue", attributes, name));
        }
        sim(attributes, simSid) {
            if (typeof attributes === "string") {
                simSid = attributes;
                attributes = {};
            }
            return new VoiceResponse.Sim(this.dial.ele("Sim", attributes, simSid));
        }
        sip(attributes, sipUrl) {
            if (typeof attributes === "string") {
                sipUrl = attributes;
                attributes = {};
            }
            return new VoiceResponse.Sip(this.dial.ele("Sip", attributes, sipUrl));
        }
        whatsApp(attributes, phoneNumber) {
            if (typeof attributes === "string") {
                phoneNumber = attributes;
                attributes = {};
            }
            return new VoiceResponse.WhatsApp(this.dial.ele("WhatsApp", attributes, phoneNumber));
        }
    }
    VoiceResponse.Dial = Dial;
    class Echo extends TwiML_1.default {
        /**
         * <Echo> TwiML Verb
         */ constructor(echo){
            super();
            this.echo = echo;
            this._propertyName = "echo";
        }
    }
    VoiceResponse.Echo = Echo;
    class Enqueue extends TwiML_1.default {
        /**
         * <Enqueue> TwiML Noun
         */ constructor(enqueue){
            super();
            this.enqueue = enqueue;
            this._propertyName = "enqueue";
        }
        task(attributes, body) {
            if (typeof attributes === "string") {
                body = attributes;
                attributes = {};
            }
            return new VoiceResponse.Task(this.enqueue.ele("Task", attributes, body));
        }
    }
    VoiceResponse.Enqueue = Enqueue;
    class Gather extends TwiML_1.default {
        /**
         * <Gather> TwiML Verb
         */ constructor(gather){
            super();
            this.gather = gather;
            this._propertyName = "gather";
        }
        /**
         * <Pause> TwiML Verb
         *
         * @param attributes - TwiML attributes
         */ pause(attributes) {
            return new VoiceResponse.Pause(this.gather.ele("Pause", attributes));
        }
        play(attributes, url) {
            if (typeof attributes === "string") {
                url = attributes;
                attributes = {};
            }
            return new VoiceResponse.Play(this.gather.ele("Play", attributes, url));
        }
        say(attributes, message) {
            if (typeof attributes === "string") {
                message = attributes;
                attributes = {};
            }
            return new VoiceResponse.Say(this.gather.ele("Say", attributes, message));
        }
    }
    VoiceResponse.Gather = Gather;
    class Hangup extends TwiML_1.default {
        /**
         * <Hangup> TwiML Verb
         */ constructor(hangup){
            super();
            this.hangup = hangup;
            this._propertyName = "hangup";
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.hangup.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Hangup = Hangup;
    class Identity extends TwiML_1.default {
        /**
         * <Identity> TwiML Noun
         */ constructor(identity){
            super();
            this.identity = identity;
            this._propertyName = "identity";
        }
    }
    VoiceResponse.Identity = Identity;
    class Language extends TwiML_1.default {
        /**
         * <Language> TwiML Noun
         */ constructor(language){
            super();
            this.language = language;
            this._propertyName = "language";
        }
    }
    VoiceResponse.Language = Language;
    class Leave extends TwiML_1.default {
        /**
         * <Leave> TwiML Verb
         */ constructor(leave){
            super();
            this.leave = leave;
            this._propertyName = "leave";
        }
    }
    VoiceResponse.Leave = Leave;
    class Number extends TwiML_1.default {
        /**
         * <Number> TwiML Noun
         */ constructor(number){
            super();
            this.number = number;
            this._propertyName = "number";
        }
    }
    VoiceResponse.Number = Number;
    class Parameter extends TwiML_1.default {
        /**
         * <Parameter> TwiML Noun
         */ constructor(parameter){
            super();
            this.parameter = parameter;
            this._propertyName = "parameter";
        }
    }
    VoiceResponse.Parameter = Parameter;
    class Pause extends TwiML_1.default {
        /**
         * <Pause> TwiML Verb
         */ constructor(pause){
            super();
            this.pause = pause;
            this._propertyName = "pause";
        }
    }
    VoiceResponse.Pause = Pause;
    class Pay extends TwiML_1.default {
        /**
         * <Pay> Twiml Verb
         */ constructor(pay){
            super();
            this.pay = pay;
            this._propertyName = "pay";
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.pay.ele("Parameter", attributes));
        }
        /**
         * <Prompt> Twiml Verb
         *
         * @param attributes - TwiML attributes
         */ prompt(attributes) {
            return new VoiceResponse.Prompt(this.pay.ele("Prompt", attributes));
        }
    }
    VoiceResponse.Pay = Pay;
    class Play extends TwiML_1.default {
        /**
         * <Play> TwiML Verb
         */ constructor(play){
            super();
            this.play = play;
            this._propertyName = "play";
        }
    }
    VoiceResponse.Play = Play;
    class Prompt extends TwiML_1.default {
        /**
         * <Prompt> Twiml Verb
         */ constructor(prompt){
            super();
            this.prompt = prompt;
            this._propertyName = "prompt";
        }
        /**
         * <Pause> TwiML Verb
         *
         * @param attributes - TwiML attributes
         */ pause(attributes) {
            return new VoiceResponse.Pause(this.prompt.ele("Pause", attributes));
        }
        play(attributes, url) {
            if (typeof attributes === "string") {
                url = attributes;
                attributes = {};
            }
            return new VoiceResponse.Play(this.prompt.ele("Play", attributes, url));
        }
        say(attributes, message) {
            if (typeof attributes === "string") {
                message = attributes;
                attributes = {};
            }
            return new VoiceResponse.Say(this.prompt.ele("Say", attributes, message));
        }
    }
    VoiceResponse.Prompt = Prompt;
    class Queue extends TwiML_1.default {
        /**
         * <Queue> TwiML Noun
         */ constructor(queue){
            super();
            this.queue = queue;
            this._propertyName = "queue";
        }
    }
    VoiceResponse.Queue = Queue;
    class Record extends TwiML_1.default {
        /**
         * <Record> TwiML Verb
         */ constructor(record){
            super();
            this.record = record;
            this._propertyName = "record";
        }
    }
    VoiceResponse.Record = Record;
    class Redirect extends TwiML_1.default {
        /**
         * <Redirect> TwiML Verb
         */ constructor(redirect){
            super();
            this.redirect = redirect;
            this._propertyName = "redirect";
        }
    }
    VoiceResponse.Redirect = Redirect;
    class Refer extends TwiML_1.default {
        /**
         * <Refer> TwiML Verb
         */ constructor(refer){
            super();
            this.refer = refer;
            this._propertyName = "refer";
        }
        sip(attributes, sipUrl) {
            if (typeof attributes === "string") {
                sipUrl = attributes;
                attributes = {};
            }
            return new VoiceResponse.ReferSip(this.refer.ele("Sip", attributes, sipUrl));
        }
    }
    VoiceResponse.Refer = Refer;
    class ReferSip extends TwiML_1.default {
        /**
         * <Sip> TwiML Noun used in <Refer>
         */ constructor(referSip){
            super();
            this.referSip = referSip;
            this._propertyName = "referSip";
        }
    }
    VoiceResponse.ReferSip = ReferSip;
    class Reject extends TwiML_1.default {
        /**
         * <Reject> TwiML Verb
         */ constructor(reject){
            super();
            this.reject = reject;
            this._propertyName = "reject";
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.reject.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Reject = Reject;
    class Room extends TwiML_1.default {
        /**
         * <Room> TwiML Noun
         */ constructor(room){
            super();
            this.room = room;
            this._propertyName = "room";
        }
    }
    VoiceResponse.Room = Room;
    class Say extends TwiML_1.default {
        /**
         * <Say> TwiML Verb
         */ constructor(say){
            super();
            this.say = say;
            this._propertyName = "say";
        }
        /**
         * Adding a Pause in <Say>
         *
         * @param attributes - TwiML attributes
         */ break(attributes) {
            return new VoiceResponse.SsmlBreak(this.say.ele("break", attributes));
        }
        emphasis(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlEmphasis(this.say.ele("emphasis", attributes, words));
        }
        lang(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlLang(this.say.ele("lang", attributes, words));
        }
        p(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlP(this.say.ele("p", attributes, words));
        }
        phoneme(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlPhoneme(this.say.ele("phoneme", attributes, words));
        }
        prosody(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlProsody(this.say.ele("prosody", attributes, words));
        }
        s(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlS(this.say.ele("s", attributes, words));
        }
        sayAs(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSayAs(this.say.ele("say-as", attributes, words));
        }
        sub(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSub(this.say.ele("sub", attributes, words));
        }
        w(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlW(this.say.ele("w", attributes, words));
        }
    }
    VoiceResponse.Say = Say;
    class Sim extends TwiML_1.default {
        /**
         * <Sim> TwiML Noun
         */ constructor(sim){
            super();
            this.sim = sim;
            this._propertyName = "sim";
        }
    }
    VoiceResponse.Sim = Sim;
    class Sip extends TwiML_1.default {
        /**
         * <Sip> TwiML Noun
         */ constructor(sip){
            super();
            this.sip = sip;
            this._propertyName = "sip";
        }
    }
    VoiceResponse.Sip = Sip;
    class Siprec extends TwiML_1.default {
        /**
         * <Siprec> TwiML Noun
         */ constructor(siprec){
            super();
            this.siprec = siprec;
            this._propertyName = "siprec";
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.siprec.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Siprec = Siprec;
    class Sms extends TwiML_1.default {
        /**
         * <Sms> TwiML Noun
         */ constructor(sms){
            super();
            this.sms = sms;
            this._propertyName = "sms";
        }
    }
    VoiceResponse.Sms = Sms;
    class SsmlBreak extends TwiML_1.default {
        /**
         * Adding a Pause in <Say>
         */ constructor(ssmlBreak){
            super();
            this.ssmlBreak = ssmlBreak;
            this._propertyName = "ssmlBreak";
        }
    }
    VoiceResponse.SsmlBreak = SsmlBreak;
    class SsmlEmphasis extends TwiML_1.default {
        /**
         * Emphasizing Words in <Say>
         */ constructor(ssmlEmphasis){
            super();
            this.ssmlEmphasis = ssmlEmphasis;
            this._propertyName = "ssmlEmphasis";
        }
        /**
         * Adding a Pause in <Say>
         *
         * @param attributes - TwiML attributes
         */ break(attributes) {
            return new VoiceResponse.SsmlBreak(this.ssmlEmphasis.ele("break", attributes));
        }
        emphasis(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlEmphasis(this.ssmlEmphasis.ele("emphasis", attributes, words));
        }
        lang(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlLang(this.ssmlEmphasis.ele("lang", attributes, words));
        }
        phoneme(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlPhoneme(this.ssmlEmphasis.ele("phoneme", attributes, words));
        }
        prosody(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlProsody(this.ssmlEmphasis.ele("prosody", attributes, words));
        }
        sayAs(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSayAs(this.ssmlEmphasis.ele("say-as", attributes, words));
        }
        sub(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSub(this.ssmlEmphasis.ele("sub", attributes, words));
        }
        w(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlW(this.ssmlEmphasis.ele("w", attributes, words));
        }
    }
    VoiceResponse.SsmlEmphasis = SsmlEmphasis;
    class SsmlLang extends TwiML_1.default {
        /**
         * Specifying Another Language for Specific Words in <Say>
         */ constructor(ssmlLang){
            super();
            this.ssmlLang = ssmlLang;
            this._propertyName = "ssmlLang";
        }
        /**
         * Adding a Pause in <Say>
         *
         * @param attributes - TwiML attributes
         */ break(attributes) {
            return new VoiceResponse.SsmlBreak(this.ssmlLang.ele("break", attributes));
        }
        emphasis(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlEmphasis(this.ssmlLang.ele("emphasis", attributes, words));
        }
        lang(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlLang(this.ssmlLang.ele("lang", attributes, words));
        }
        p(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlP(this.ssmlLang.ele("p", attributes, words));
        }
        phoneme(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlPhoneme(this.ssmlLang.ele("phoneme", attributes, words));
        }
        prosody(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlProsody(this.ssmlLang.ele("prosody", attributes, words));
        }
        s(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlS(this.ssmlLang.ele("s", attributes, words));
        }
        sayAs(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSayAs(this.ssmlLang.ele("say-as", attributes, words));
        }
        sub(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSub(this.ssmlLang.ele("sub", attributes, words));
        }
        w(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlW(this.ssmlLang.ele("w", attributes, words));
        }
    }
    VoiceResponse.SsmlLang = SsmlLang;
    class SsmlP extends TwiML_1.default {
        /**
         * Adding a Pause Between Paragraphs in <Say>
         */ constructor(ssmlP){
            super();
            this.ssmlP = ssmlP;
            this._propertyName = "ssmlP";
        }
        /**
         * Adding a Pause in <Say>
         *
         * @param attributes - TwiML attributes
         */ break(attributes) {
            return new VoiceResponse.SsmlBreak(this.ssmlP.ele("break", attributes));
        }
        emphasis(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlEmphasis(this.ssmlP.ele("emphasis", attributes, words));
        }
        lang(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlLang(this.ssmlP.ele("lang", attributes, words));
        }
        phoneme(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlPhoneme(this.ssmlP.ele("phoneme", attributes, words));
        }
        prosody(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlProsody(this.ssmlP.ele("prosody", attributes, words));
        }
        s(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlS(this.ssmlP.ele("s", attributes, words));
        }
        sayAs(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSayAs(this.ssmlP.ele("say-as", attributes, words));
        }
        sub(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSub(this.ssmlP.ele("sub", attributes, words));
        }
        w(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlW(this.ssmlP.ele("w", attributes, words));
        }
    }
    VoiceResponse.SsmlP = SsmlP;
    class SsmlPhoneme extends TwiML_1.default {
        /**
         * Using Phonetic Pronunciation in <Say>
         */ constructor(ssmlPhoneme){
            super();
            this.ssmlPhoneme = ssmlPhoneme;
            this._propertyName = "ssmlPhoneme";
        }
    }
    VoiceResponse.SsmlPhoneme = SsmlPhoneme;
    class SsmlProsody extends TwiML_1.default {
        /**
         * Controling Volume, Speaking Rate, and Pitch in <Say>
         */ constructor(ssmlProsody){
            super();
            this.ssmlProsody = ssmlProsody;
            this._propertyName = "ssmlProsody";
        }
        /**
         * Adding a Pause in <Say>
         *
         * @param attributes - TwiML attributes
         */ break(attributes) {
            return new VoiceResponse.SsmlBreak(this.ssmlProsody.ele("break", attributes));
        }
        emphasis(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlEmphasis(this.ssmlProsody.ele("emphasis", attributes, words));
        }
        lang(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlLang(this.ssmlProsody.ele("lang", attributes, words));
        }
        p(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlP(this.ssmlProsody.ele("p", attributes, words));
        }
        phoneme(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlPhoneme(this.ssmlProsody.ele("phoneme", attributes, words));
        }
        prosody(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlProsody(this.ssmlProsody.ele("prosody", attributes, words));
        }
        s(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlS(this.ssmlProsody.ele("s", attributes, words));
        }
        sayAs(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSayAs(this.ssmlProsody.ele("say-as", attributes, words));
        }
        sub(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSub(this.ssmlProsody.ele("sub", attributes, words));
        }
        w(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlW(this.ssmlProsody.ele("w", attributes, words));
        }
    }
    VoiceResponse.SsmlProsody = SsmlProsody;
    class SsmlS extends TwiML_1.default {
        /**
         * Adding A Pause Between Sentences in <Say>
         */ constructor(ssmlS){
            super();
            this.ssmlS = ssmlS;
            this._propertyName = "ssmlS";
        }
        /**
         * Adding a Pause in <Say>
         *
         * @param attributes - TwiML attributes
         */ break(attributes) {
            return new VoiceResponse.SsmlBreak(this.ssmlS.ele("break", attributes));
        }
        emphasis(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlEmphasis(this.ssmlS.ele("emphasis", attributes, words));
        }
        lang(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlLang(this.ssmlS.ele("lang", attributes, words));
        }
        phoneme(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlPhoneme(this.ssmlS.ele("phoneme", attributes, words));
        }
        prosody(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlProsody(this.ssmlS.ele("prosody", attributes, words));
        }
        sayAs(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSayAs(this.ssmlS.ele("say-as", attributes, words));
        }
        sub(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSub(this.ssmlS.ele("sub", attributes, words));
        }
        w(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlW(this.ssmlS.ele("w", attributes, words));
        }
    }
    VoiceResponse.SsmlS = SsmlS;
    class SsmlSayAs extends TwiML_1.default {
        /**
         * Controlling How Special Types of Words Are Spoken in <Say>
         */ constructor(ssmlSayAs){
            super();
            this.ssmlSayAs = ssmlSayAs;
            this._propertyName = "ssmlSayAs";
        }
    }
    VoiceResponse.SsmlSayAs = SsmlSayAs;
    class SsmlSub extends TwiML_1.default {
        /**
         * Pronouncing Acronyms and Abbreviations in <Say>
         */ constructor(ssmlSub){
            super();
            this.ssmlSub = ssmlSub;
            this._propertyName = "ssmlSub";
        }
    }
    VoiceResponse.SsmlSub = SsmlSub;
    class SsmlW extends TwiML_1.default {
        /**
         * Improving Pronunciation by Specifying Parts of Speech in <Say>
         */ constructor(ssmlW){
            super();
            this.ssmlW = ssmlW;
            this._propertyName = "ssmlW";
        }
        /**
         * Adding a Pause in <Say>
         *
         * @param attributes - TwiML attributes
         */ break(attributes) {
            return new VoiceResponse.SsmlBreak(this.ssmlW.ele("break", attributes));
        }
        emphasis(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlEmphasis(this.ssmlW.ele("emphasis", attributes, words));
        }
        phoneme(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlPhoneme(this.ssmlW.ele("phoneme", attributes, words));
        }
        prosody(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlProsody(this.ssmlW.ele("prosody", attributes, words));
        }
        sayAs(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSayAs(this.ssmlW.ele("say-as", attributes, words));
        }
        sub(attributes, words) {
            if (typeof attributes === "string") {
                words = attributes;
                attributes = {};
            }
            return new VoiceResponse.SsmlSub(this.ssmlW.ele("sub", attributes, words));
        }
    }
    VoiceResponse.SsmlW = SsmlW;
    class Start extends TwiML_1.default {
        /**
         * <Start> TwiML Verb
         */ constructor(start){
            super();
            this.start = start;
            this._propertyName = "start";
        }
        /**
         * <Siprec> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ siprec(attributes) {
            return new VoiceResponse.Siprec(this.start.ele("Siprec", attributes));
        }
        /**
         * <Stream> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ stream(attributes) {
            return new VoiceResponse.Stream(this.start.ele("Stream", attributes));
        }
        /**
         * <Transcription> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ transcription(attributes) {
            return new VoiceResponse.Transcription(this.start.ele("Transcription", attributes));
        }
    }
    VoiceResponse.Start = Start;
    class Stop extends TwiML_1.default {
        /**
         * <Stop> TwiML Verb
         */ constructor(stop){
            super();
            this.stop = stop;
            this._propertyName = "stop";
        }
        /**
         * <Siprec> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ siprec(attributes) {
            return new VoiceResponse.Siprec(this.stop.ele("Siprec", attributes));
        }
        /**
         * <Stream> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ stream(attributes) {
            return new VoiceResponse.Stream(this.stop.ele("Stream", attributes));
        }
        /**
         * <Transcription> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ transcription(attributes) {
            return new VoiceResponse.Transcription(this.stop.ele("Transcription", attributes));
        }
    }
    VoiceResponse.Stop = Stop;
    class Stream extends TwiML_1.default {
        /**
         * <Stream> TwiML Noun
         */ constructor(stream){
            super();
            this.stream = stream;
            this._propertyName = "stream";
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.stream.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Stream = Stream;
    class Task extends TwiML_1.default {
        /**
         * <Task> TwiML Noun
         */ constructor(task){
            super();
            this.task = task;
            this._propertyName = "task";
        }
    }
    VoiceResponse.Task = Task;
    class Transcription extends TwiML_1.default {
        /**
         * <Transcription> TwiML Noun
         */ constructor(transcription){
            super();
            this.transcription = transcription;
            this._propertyName = "transcription";
        }
        /**
         * <Config> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ config(attributes) {
            return new VoiceResponse.Config(this.transcription.ele("Config", attributes));
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.transcription.ele("Parameter", attributes));
        }
    }
    VoiceResponse.Transcription = Transcription;
    class VirtualAgent extends TwiML_1.default {
        /**
         * <VirtualAgent> TwiML Noun
         */ constructor(virtualAgent){
            super();
            this.virtualAgent = virtualAgent;
            this._propertyName = "virtualAgent";
        }
        /**
         * <Config> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ config(attributes) {
            return new VoiceResponse.Config(this.virtualAgent.ele("Config", attributes));
        }
        /**
         * <Parameter> TwiML Noun
         *
         * @param attributes - TwiML attributes
         */ parameter(attributes) {
            return new VoiceResponse.Parameter(this.virtualAgent.ele("Parameter", attributes));
        }
    }
    VoiceResponse.VirtualAgent = VirtualAgent;
    class WhatsApp extends TwiML_1.default {
        /**
         * <WhatsApp> TwiML Noun
         */ constructor(whatsApp){
            super();
            this.whatsApp = whatsApp;
            this._propertyName = "whatsApp";
        }
    }
    VoiceResponse.WhatsApp = WhatsApp;
})(VoiceResponse || (VoiceResponse = {}));
module.exports = VoiceResponse;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/MessagingResponse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */ var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const TwiML_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/TwiML.js [app-rsc] (ecmascript)"));
class MessagingResponse extends TwiML_1.default {
    /**
     * <Response> TwiML for Messages
     */ constructor(){
        super();
        this._propertyName = "response";
    }
    /**
     * Comments in <Response>
     *
     * @param comment - XML Comment
     */ comment(comment) {
        return this.response.comment(comment);
    }
    /**
     * Comments after <Response>
     *
     * @param comment - XML Comment
     */ commentAfter(comment) {
        return this.response.commentAfter(comment);
    }
    /**
     * Comments before <Response>
     *
     * @param comment - XML Comment
     */ commentBefore(comment) {
        return this.response.commentBefore(comment);
    }
    message(attributes, body) {
        if (typeof attributes === "string") {
            body = attributes;
            attributes = {};
        }
        return new MessagingResponse.Message(this.response.ele("Message", attributes, body));
    }
    redirect(attributes, url) {
        if (typeof attributes === "string") {
            url = attributes;
            attributes = {};
        }
        return new MessagingResponse.Redirect(this.response.ele("Redirect", attributes, url));
    }
}
(function(MessagingResponse) {
    class Body extends TwiML_1.default {
        /**
         * <Body> TwiML Noun
         */ constructor(body){
            super();
            this.body = body;
            this._propertyName = "body";
        }
    }
    MessagingResponse.Body = Body;
    class Media extends TwiML_1.default {
        /**
         * <Media> TwiML Noun
         */ constructor(media){
            super();
            this.media = media;
            this._propertyName = "media";
        }
    }
    MessagingResponse.Media = Media;
    class Message extends TwiML_1.default {
        /**
         * <Message> TwiML Verb
         */ constructor(message){
            super();
            this.message = message;
            this._propertyName = "message";
        }
        body(attributes, message) {
            if (typeof attributes === "string") {
                message = attributes;
                attributes = {};
            }
            return new MessagingResponse.Body(this.message.ele("Body", attributes, message));
        }
        media(attributes, url) {
            if (typeof attributes === "string") {
                url = attributes;
                attributes = {};
            }
            return new MessagingResponse.Media(this.message.ele("Media", attributes, url));
        }
    }
    MessagingResponse.Message = Message;
    class Redirect extends TwiML_1.default {
        /**
         * <Redirect> TwiML Verb
         */ constructor(redirect){
            super();
            this.redirect = redirect;
            this._propertyName = "redirect";
        }
    }
    MessagingResponse.Redirect = Redirect;
})(MessagingResponse || (MessagingResponse = {}));
module.exports = MessagingResponse;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/FaxResponse.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */ var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const TwiML_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/TwiML.js [app-rsc] (ecmascript)"));
class FaxResponse extends TwiML_1.default {
    /**
     * <Response> TwiML for Faxes
     */ constructor(){
        super();
        this._propertyName = "response";
    }
    /**
     * Comments in <Response>
     *
     * @param comment - XML Comment
     */ comment(comment) {
        return this.response.comment(comment);
    }
    /**
     * Comments after <Response>
     *
     * @param comment - XML Comment
     */ commentAfter(comment) {
        return this.response.commentAfter(comment);
    }
    /**
     * Comments before <Response>
     *
     * @param comment - XML Comment
     */ commentBefore(comment) {
        return this.response.commentBefore(comment);
    }
    /**
     * <Receive> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */ receive(attributes) {
        return new FaxResponse.Receive(this.response.ele("Receive", attributes));
    }
}
(function(FaxResponse) {
    class Receive extends TwiML_1.default {
        /**
         * <Receive> TwiML Verb
         */ constructor(receive){
            super();
            this.receive = receive;
            this._propertyName = "receive";
        }
    }
    FaxResponse.Receive = Receive;
})(FaxResponse || (FaxResponse = {}));
module.exports = FaxResponse;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/CredentialProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class CredentialProvider {
    constructor(authType){
        this.authType = authType;
    }
    getAuthType() {
        return this.authType;
    }
}
exports.default = CredentialProvider;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/NoAuthCredentialProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const CredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/CredentialProvider.js [app-rsc] (ecmascript)"));
const NoAuthStrategy_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/NoAuthStrategy.js [app-rsc] (ecmascript)"));
var NoAuthCredentialProvider;
(function(NoAuthCredentialProvider_1) {
    class NoAuthCredentialProvider extends CredentialProvider_1.default {
        constructor(){
            super("noauth");
        }
        toAuthStrategy() {
            return new NoAuthStrategy_1.default();
        }
    }
    NoAuthCredentialProvider_1.NoAuthCredentialProvider = NoAuthCredentialProvider;
})(NoAuthCredentialProvider || (NoAuthCredentialProvider = {}));
module.exports = NoAuthCredentialProvider;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/ClientCredentialProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const CredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/CredentialProvider.js [app-rsc] (ecmascript)"));
const ApiTokenManager_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/bearer_token/ApiTokenManager.js [app-rsc] (ecmascript)"));
const TokenAuthStrategy_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/TokenAuthStrategy.js [app-rsc] (ecmascript)"));
class ClientCredentialProvider extends CredentialProvider_1.default {
    constructor(){
        super("client-credentials");
        this.grantType = "client_credentials";
        this.clientId = "";
        this.clientSecret = "";
        this.tokenManager = null;
    }
    toAuthStrategy() {
        if (this.tokenManager == null) {
            this.tokenManager = new ApiTokenManager_1.default({
                grantType: this.grantType,
                clientId: this.clientId,
                clientSecret: this.clientSecret
            });
        }
        return new TokenAuthStrategy_1.default(this.tokenManager);
    }
}
(function(ClientCredentialProvider) {
    class ClientCredentialProviderBuilder {
        constructor(){
            this.instance = new ClientCredentialProvider();
        }
        setClientId(clientId) {
            this.instance.clientId = clientId;
            return this;
        }
        setClientSecret(clientSecret) {
            this.instance.clientSecret = clientSecret;
            return this;
        }
        setTokenManager(tokenManager) {
            this.instance.tokenManager = tokenManager;
            return this;
        }
        build() {
            return this.instance;
        }
    }
    ClientCredentialProvider.ClientCredentialProviderBuilder = ClientCredentialProviderBuilder;
})(ClientCredentialProvider || (ClientCredentialProvider = {}));
module.exports = ClientCredentialProvider;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/OrgsCredentialProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const CredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/CredentialProvider.js [app-rsc] (ecmascript)"));
const OrgsTokenManager_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/http/bearer_token/OrgsTokenManager.js [app-rsc] (ecmascript)"));
const TokenAuthStrategy_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/TokenAuthStrategy.js [app-rsc] (ecmascript)"));
class OrgsCredentialProvider extends CredentialProvider_1.default {
    constructor(){
        super("client-credentials");
        this.grantType = "client_credentials";
        this.clientId = "";
        this.clientSecret = "";
        this.tokenManager = null;
    }
    toAuthStrategy() {
        if (this.tokenManager == null) {
            this.tokenManager = new OrgsTokenManager_1.default({
                grantType: this.grantType,
                clientId: this.clientId,
                clientSecret: this.clientSecret
            });
        }
        return new TokenAuthStrategy_1.default(this.tokenManager);
    }
}
(function(OrgsCredentialProvider) {
    class OrgsCredentialProviderBuilder {
        constructor(){
            this.instance = new OrgsCredentialProvider();
        }
        setClientId(clientId) {
            this.instance.clientId = clientId;
            return this;
        }
        setClientSecret(clientSecret) {
            this.instance.clientSecret = clientSecret;
            return this;
        }
        setTokenManager(tokenManager) {
            this.instance.tokenManager = tokenManager;
            return this;
        }
        build() {
            return this.instance;
        }
    }
    OrgsCredentialProvider.OrgsCredentialProviderBuilder = OrgsCredentialProviderBuilder;
})(OrgsCredentialProvider || (OrgsCredentialProvider = {}));
module.exports = OrgsCredentialProvider;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/AuthStrategy.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class AuthStrategy {
    constructor(authType){
        this.authType = authType;
    }
    getAuthType() {
        return this.authType;
    }
}
exports.default = AuthStrategy;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/NoAuthStrategy.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const AuthStrategy_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/AuthStrategy.js [app-rsc] (ecmascript)"));
class NoAuthStrategy extends AuthStrategy_1.default {
    constructor(){
        super("noauth");
    }
    getAuthString() {
        return Promise.resolve("");
    }
    requiresAuthentication() {
        return false;
    }
}
exports.default = NoAuthStrategy;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/TokenAuthStrategy.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
const AuthStrategy_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/auth_strategy/AuthStrategy.js [app-rsc] (ecmascript)"));
const jsonwebtoken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/jsonwebtoken@9.0.2/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)"));
class TokenAuthStrategy extends AuthStrategy_1.default {
    constructor(tokenManager){
        super("token");
        this.token = "";
        this.tokenManager = tokenManager;
    }
    async getAuthString() {
        return this.fetchToken().then((token)=>{
            this.token = token;
            return `Bearer ${this.token}`;
        }).catch((error)=>{
            throw new Error(`Failed to fetch access token: ${error.message}`);
        });
    }
    requiresAuthentication() {
        return true;
    }
    async fetchToken() {
        if (this.token == null || this.token.length === 0 || this.isTokenExpired(this.token)) {
            return this.tokenManager.fetchToken();
        }
        return Promise.resolve(this.token);
    }
    /**
     * Function to check if the token is expired with a buffer of 30 seconds.
     * @param token - The JWT token as a string.
     * @returns Boolean indicating if the token is expired.
     */ isTokenExpired(token) {
        try {
            // Decode the token without verifying the signature, as we only want to read the expiration for this check
            const decoded = jsonwebtoken_1.default.decode(token);
            if (!decoded || !decoded.exp) {
                // If the token doesn't have an expiration, consider it expired
                return true;
            }
            const expiresAt = decoded.exp * 1000;
            const bufferMilliseconds = 30 * 1000;
            const bufferExpiresAt = expiresAt - bufferMilliseconds;
            // Return true if the current time is after the expiration time with buffer
            return Date.now() > bufferExpiresAt;
        } catch (error) {
            // If there's an error decoding the token, consider it expired
            return true;
        }
    }
}
exports.default = TokenAuthStrategy;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __importStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importStar || function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o) {
            var ar = [];
            for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
            for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
        }
        __setModuleDefault(result, mod);
        return result;
    };
}();
var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
const Twilio_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/rest/Twilio.js [app-rsc] (ecmascript)"));
const webhooks = __importStar(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/webhooks/webhooks.js [app-rsc] (ecmascript)"));
const RequestClient_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RequestClient.js [app-rsc] (ecmascript)"));
const RestException_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/base/RestException.js [app-rsc] (ecmascript)"));
const AccessToken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/AccessToken.js [app-rsc] (ecmascript)"));
const ValidationToken_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/validation/ValidationToken.js [app-rsc] (ecmascript)"));
const ClientCapability_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/ClientCapability.js [app-rsc] (ecmascript)"));
const TaskRouterCapability_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/taskrouter/TaskRouterCapability.js [app-rsc] (ecmascript)"));
const taskRouterUtil = __importStar(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/jwt/taskrouter/util.js [app-rsc] (ecmascript)"));
const VoiceResponse_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/VoiceResponse.js [app-rsc] (ecmascript)"));
const MessagingResponse_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/MessagingResponse.js [app-rsc] (ecmascript)"));
const FaxResponse_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/twiml/FaxResponse.js [app-rsc] (ecmascript)"));
const ClientCredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/ClientCredentialProvider.js [app-rsc] (ecmascript)"));
const NoAuthCredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/NoAuthCredentialProvider.js [app-rsc] (ecmascript)"));
const OrgsCredentialProvider_1 = __importDefault(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/twilio@5.10.2/node_modules/twilio/lib/credential_provider/OrgsCredentialProvider.js [app-rsc] (ecmascript)"));
// Shorthand to automatically create a RestClient
function TwilioSDK(accountSid, authToken, opts) {
    return new TwilioSDK.Twilio(accountSid, authToken, opts);
}
(function(TwilioSDK) {
    TwilioSDK.Twilio = Twilio_1.default;
    let jwt;
    (function(jwt) {
        jwt.AccessToken = AccessToken_1.default;
        jwt.ValidationToken = ValidationToken_1.default;
        jwt.ClientCapability = ClientCapability_1.default;
        let taskrouter;
        (function(taskrouter) {
            taskrouter.TaskRouterCapability = TaskRouterCapability_1.default;
            taskrouter.util = taskRouterUtil;
        })(taskrouter = jwt.taskrouter || (jwt.taskrouter = {}));
    })(jwt = TwilioSDK.jwt || (TwilioSDK.jwt = {}));
    let twiml;
    (function(twiml) {
        twiml.VoiceResponse = VoiceResponse_1.default;
        twiml.MessagingResponse = MessagingResponse_1.default;
        twiml.FaxResponse = FaxResponse_1.default;
    })(twiml = TwilioSDK.twiml || (TwilioSDK.twiml = {}));
    TwilioSDK.RequestClient = RequestClient_1.default;
    TwilioSDK.RestException = RestException_1.default;
    TwilioSDK.ClientCredentialProviderBuilder = ClientCredentialProvider_1.default.ClientCredentialProviderBuilder;
    TwilioSDK.OrgsCredentialProviderBuilder = OrgsCredentialProvider_1.default.OrgsCredentialProviderBuilder;
    TwilioSDK.NoAuthCredentialProvider = NoAuthCredentialProvider_1.default.NoAuthCredentialProvider;
    TwilioSDK.validateBody = webhooks.validateBody;
    TwilioSDK.validateRequest = webhooks.validateRequest;
    TwilioSDK.validateRequestWithBody = webhooks.validateRequestWithBody;
    TwilioSDK.validateExpressRequest = webhooks.validateExpressRequest;
    TwilioSDK.validateIncomingRequest = webhooks.validateIncomingRequest;
    TwilioSDK.getExpectedBodyHash = webhooks.getExpectedBodyHash;
    TwilioSDK.getExpectedTwilioSignature = webhooks.getExpectedTwilioSignature;
    TwilioSDK.webhook = webhooks.webhook;
})(TwilioSDK || (TwilioSDK = {}));
module.exports = TwilioSDK;
}),
];

//# sourceMappingURL=1b7ef_twilio_lib_ffcd0e84._.js.map