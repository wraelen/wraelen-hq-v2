module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** Get a key to uniquely identify a context value */ __turbopack_context__.s([
    "ROOT_CONTEXT",
    ()=>ROOT_CONTEXT,
    "createContextKey",
    ()=>createContextKey
]);
function createContextKey(description) {
    // The specification states that for the same input, multiple calls should
    // return different keys. Due to the nature of the JS dependency management
    // system, this creates problems where multiple versions of some package
    // could hold different keys for the same property.
    //
    // Therefore, we use Symbol.for which returns the same key for the same input.
    return Symbol.for(description);
}
var BaseContext = function() {
    /**
     * Construct a new context which inherits values from an optional parent context.
     *
     * @param parentContext a context from which to inherit values
     */ function BaseContext(parentContext) {
        // for minification
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : new Map();
        self.getValue = function(key) {
            return self._currentContext.get(key);
        };
        self.setValue = function(key, value) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.set(key, value);
            return context;
        };
        self.deleteValue = function(key) {
            var context = new BaseContext(self._currentContext);
            context._currentContext.delete(key);
            return context;
        };
    }
    return BaseContext;
}();
var ROOT_CONTEXT = new BaseContext(); //# sourceMappingURL=context.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NoopContextManager",
    ()=>NoopContextManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
var NoopContextManager = function() {
    function NoopContextManager() {}
    NoopContextManager.prototype.active = function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ROOT_CONTEXT"];
    };
    NoopContextManager.prototype.with = function(_context, fn, thisArg) {
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++){
            args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray([
            thisArg
        ], __read(args), false));
    };
    NoopContextManager.prototype.bind = function(_context, target) {
        return target;
    };
    NoopContextManager.prototype.enable = function() {
        return this;
    };
    NoopContextManager.prototype.disable = function() {
        return this;
    };
    return NoopContextManager;
}();
;
 //# sourceMappingURL=NoopContextManager.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s([
    "_globalThis",
    ()=>_globalThis
]);
var _globalThis = typeof globalThis === 'object' ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g; //# sourceMappingURL=globalThis.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/version.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // this is autogenerated file, see scripts/version-update.js
__turbopack_context__.s([
    "VERSION",
    ()=>VERSION
]);
var VERSION = '1.7.0'; //# sourceMappingURL=version.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/semver.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "_makeCompatibilityCheck",
    ()=>_makeCompatibilityCheck,
    "isCompatible",
    ()=>isCompatible
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/version.js [instrumentation] (ecmascript)");
;
var re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function _makeCompatibilityCheck(ownVersion) {
    var acceptedVersions = new Set([
        ownVersion
    ]);
    var rejectedVersions = new Set();
    var myVersionMatch = ownVersion.match(re);
    if (!myVersionMatch) {
        // we cannot guarantee compatibility so we always return noop
        return function() {
            return false;
        };
    }
    var ownVersionParsed = {
        major: +myVersionMatch[1],
        minor: +myVersionMatch[2],
        patch: +myVersionMatch[3],
        prerelease: myVersionMatch[4]
    };
    // if ownVersion has a prerelease tag, versions must match exactly
    if (ownVersionParsed.prerelease != null) {
        return function isExactmatch(globalVersion) {
            return globalVersion === ownVersion;
        };
    }
    function _reject(v) {
        rejectedVersions.add(v);
        return false;
    }
    function _accept(v) {
        acceptedVersions.add(v);
        return true;
    }
    return function isCompatible(globalVersion) {
        if (acceptedVersions.has(globalVersion)) {
            return true;
        }
        if (rejectedVersions.has(globalVersion)) {
            return false;
        }
        var globalVersionMatch = globalVersion.match(re);
        if (!globalVersionMatch) {
            // cannot parse other version
            // we cannot guarantee compatibility so we always noop
            return _reject(globalVersion);
        }
        var globalVersionParsed = {
            major: +globalVersionMatch[1],
            minor: +globalVersionMatch[2],
            patch: +globalVersionMatch[3],
            prerelease: globalVersionMatch[4]
        };
        // if globalVersion has a prerelease tag, versions must match exactly
        if (globalVersionParsed.prerelease != null) {
            return _reject(globalVersion);
        }
        // major versions must match
        if (ownVersionParsed.major !== globalVersionParsed.major) {
            return _reject(globalVersion);
        }
        if (ownVersionParsed.major === 0) {
            if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
                return _accept(globalVersion);
            }
            return _reject(globalVersion);
        }
        if (ownVersionParsed.minor <= globalVersionParsed.minor) {
            return _accept(globalVersion);
        }
        return _reject(globalVersion);
    };
}
var isCompatible = _makeCompatibilityCheck(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"]); //# sourceMappingURL=semver.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "getGlobal",
    ()=>getGlobal,
    "registerGlobal",
    ()=>registerGlobal,
    "unregisterGlobal",
    ()=>unregisterGlobal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/version.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/semver.js [instrumentation] (ecmascript)");
;
;
;
var major = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"].split('.')[0];
var GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_globalThis"];
function registerGlobal(type, instance, diag, allowOverride) {
    var _a;
    if (allowOverride === void 0) {
        allowOverride = false;
    }
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
        version: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"]
    };
    if (!allowOverride && api[type]) {
        // already registered an API of this type
        var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
        diag.error(err.stack || err.message);
        return false;
    }
    if (api.version !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"]) {
        // All registered APIs must be of the same version exactly
        var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"]);
        diag.error(err.stack || err.message);
        return false;
    }
    api[type] = instance;
    diag.debug("@opentelemetry/api: Registered a global for " + type + " v" + __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"] + ".");
    return true;
}
function getGlobal(type) {
    var _a, _b;
    var globalVersion = (_a = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
    if (!globalVersion || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$semver$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isCompatible"])(globalVersion)) {
        return;
    }
    return (_b = _global[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal(type, diag) {
    diag.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$version$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["VERSION"] + ".");
    var api = _global[GLOBAL_OPENTELEMETRY_API_KEY];
    if (api) {
        delete api[type];
    }
} //# sourceMappingURL=global-utils.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "DiagComponentLogger",
    ()=>DiagComponentLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
/**
 * Component Logger which is meant to be used as part of any component which
 * will add automatically additional namespace in front of the log message.
 * It will then forward all message to global diag logger
 * @example
 * const cLogger = diag.createComponentLogger({ namespace: '@opentelemetry/instrumentation-http' });
 * cLogger.debug('test');
 * // @opentelemetry/instrumentation-http test
 */ var DiagComponentLogger = function() {
    function DiagComponentLogger(props) {
        this._namespace = props.namespace || 'DiagComponentLogger';
    }
    DiagComponentLogger.prototype.debug = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('debug', this._namespace, args);
    };
    DiagComponentLogger.prototype.error = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('error', this._namespace, args);
    };
    DiagComponentLogger.prototype.info = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('info', this._namespace, args);
    };
    DiagComponentLogger.prototype.warn = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('warn', this._namespace, args);
    };
    DiagComponentLogger.prototype.verbose = function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++){
            args[_i] = arguments[_i];
        }
        return logProxy('verbose', this._namespace, args);
    };
    return DiagComponentLogger;
}();
;
function logProxy(funcName, namespace, args) {
    var logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
    // shortcut if logger not set
    if (!logger) {
        return;
    }
    args.unshift(namespace);
    return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
} //# sourceMappingURL=ComponentLogger.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Defines the available internal logging levels for the diagnostic logger, the numeric values
 * of the levels are defined to match the original values from the initial LogLevel to avoid
 * compatibility/migration issues for any implementation that assume the numeric ordering.
 */ __turbopack_context__.s([
    "DiagLogLevel",
    ()=>DiagLogLevel
]);
var DiagLogLevel;
(function(DiagLogLevel) {
    /** Diagnostic Logging level setting to disable all logging (except and forced logs) */ DiagLogLevel[DiagLogLevel["NONE"] = 0] = "NONE";
    /** Identifies an error scenario */ DiagLogLevel[DiagLogLevel["ERROR"] = 30] = "ERROR";
    /** Identifies a warning scenario */ DiagLogLevel[DiagLogLevel["WARN"] = 50] = "WARN";
    /** General informational log message */ DiagLogLevel[DiagLogLevel["INFO"] = 60] = "INFO";
    /** General debug log message */ DiagLogLevel[DiagLogLevel["DEBUG"] = 70] = "DEBUG";
    /**
     * Detailed trace level logging should only be used for development, should only be set
     * in a development environment.
     */ DiagLogLevel[DiagLogLevel["VERBOSE"] = 80] = "VERBOSE";
    /** Used to set the logging level to include all logging */ DiagLogLevel[DiagLogLevel["ALL"] = 9999] = "ALL";
})(DiagLogLevel || (DiagLogLevel = {})); //# sourceMappingURL=types.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "createLogLevelDiagLogger",
    ()=>createLogLevelDiagLogger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation] (ecmascript)");
;
function createLogLevelDiagLogger(maxLevel, logger) {
    if (maxLevel < __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].NONE;
    } else if (maxLevel > __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL) {
        maxLevel = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].ALL;
    }
    // In case the logger is null or undefined
    logger = logger || {};
    function _filterFunc(funcName, theLevel) {
        var theFunc = logger[funcName];
        if (typeof theFunc === 'function' && maxLevel >= theLevel) {
            return theFunc.bind(logger);
        }
        return function() {};
    }
    return {
        error: _filterFunc('error', __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].ERROR),
        warn: _filterFunc('warn', __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].WARN),
        info: _filterFunc('info', __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO),
        debug: _filterFunc('debug', __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].DEBUG),
        verbose: _filterFunc('verbose', __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].VERBOSE)
    };
} //# sourceMappingURL=logLevelLogger.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "DiagAPI",
    ()=>DiagAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
;
var API_NAME = 'diag';
/**
 * Singleton object which represents the entry point to the OpenTelemetry internal
 * diagnostic API
 */ var DiagAPI = function() {
    /**
     * Private internal constructor
     * @private
     */ function DiagAPI() {
        function _logProxy(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++){
                    args[_i] = arguments[_i];
                }
                var logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
                // shortcut if logger not set
                if (!logger) return;
                return logger[funcName].apply(logger, __spreadArray([], __read(args), false));
            };
        }
        // Using self local variable for minification purposes as 'this' cannot be minified
        var self = this;
        // DiagAPI specific functions
        var setLogger = function(logger, optionsOrLogLevel) {
            var _a, _b, _c;
            if (optionsOrLogLevel === void 0) {
                optionsOrLogLevel = {
                    logLevel: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO
                };
            }
            if (logger === self) {
                // There isn't much we can do here.
                // Logging to the console might break the user application.
                // Try to log to self. If a logger was previously registered it will receive the log.
                var err = new Error('Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation');
                self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
                return false;
            }
            if (typeof optionsOrLogLevel === 'number') {
                optionsOrLogLevel = {
                    logLevel: optionsOrLogLevel
                };
            }
            var oldLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getGlobal"])('diag');
            var newLogger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$internal$2f$logLevelLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createLogLevelDiagLogger"])((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"].INFO, logger);
            // There already is an logger registered. We'll let it know before overwriting it.
            if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
                var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : '<failed to generate stacktrace>';
                oldLogger.warn("Current logger will be overwritten from " + stack);
                newLogger.warn("Current logger will overwrite one already registered from " + stack);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerGlobal"])('diag', newLogger, self, true);
        };
        self.setLogger = setLogger;
        self.disable = function() {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, self);
        };
        self.createComponentLogger = function(options) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$ComponentLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagComponentLogger"](options);
        };
        self.verbose = _logProxy('verbose');
        self.debug = _logProxy('debug');
        self.info = _logProxy('info');
        self.warn = _logProxy('warn');
        self.error = _logProxy('error');
    }
    /** Get the singleton instance of the DiagAPI API */ DiagAPI.instance = function() {
        if (!this._instance) {
            this._instance = new DiagAPI();
        }
        return this._instance;
    };
    return DiagAPI;
}();
;
 //# sourceMappingURL=diag.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "ContextAPI",
    ()=>ContextAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation] (ecmascript)");
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
;
;
;
var API_NAME = 'context';
var NOOP_CONTEXT_MANAGER = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$NoopContextManager$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopContextManager"]();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 */ var ContextAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function ContextAPI() {}
    /** Get the singleton instance of the Context API */ ContextAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    };
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */ ContextAPI.prototype.setGlobalContextManager = function(contextManager) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, contextManager, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    /**
     * Get the currently active context
     */ ContextAPI.prototype.active = function() {
        return this._getContextManager().active();
    };
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */ ContextAPI.prototype.with = function(context, fn, thisArg) {
        var _a;
        var args = [];
        for(var _i = 3; _i < arguments.length; _i++){
            args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray([
            context,
            fn,
            thisArg
        ], __read(args), false));
    };
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */ ContextAPI.prototype.bind = function(context, target) {
        return this._getContextManager().bind(context, target);
    };
    ContextAPI.prototype._getContextManager = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || NOOP_CONTEXT_MANAGER;
    };
    /** Disable and remove the global context manager */ ContextAPI.prototype.disable = function() {
        this._getContextManager().disable();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    return ContextAPI;
}();
;
 //# sourceMappingURL=context.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context-api.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
__turbopack_context__.s([
    "context",
    ()=>context
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation] (ecmascript)");
;
var context = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance(); //# sourceMappingURL=context-api.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
__turbopack_context__.s([
    "diag",
    ()=>diag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation] (ecmascript)");
;
var diag = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance(); //# sourceMappingURL=diag-api.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NOOP_COUNTER_METRIC",
    ()=>NOOP_COUNTER_METRIC,
    "NOOP_HISTOGRAM_METRIC",
    ()=>NOOP_HISTOGRAM_METRIC,
    "NOOP_METER",
    ()=>NOOP_METER,
    "NOOP_OBSERVABLE_COUNTER_METRIC",
    ()=>NOOP_OBSERVABLE_COUNTER_METRIC,
    "NOOP_OBSERVABLE_GAUGE_METRIC",
    ()=>NOOP_OBSERVABLE_GAUGE_METRIC,
    "NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC",
    ()=>NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC,
    "NOOP_UP_DOWN_COUNTER_METRIC",
    ()=>NOOP_UP_DOWN_COUNTER_METRIC,
    "NoopCounterMetric",
    ()=>NoopCounterMetric,
    "NoopHistogramMetric",
    ()=>NoopHistogramMetric,
    "NoopMeter",
    ()=>NoopMeter,
    "NoopMetric",
    ()=>NoopMetric,
    "NoopObservableCounterMetric",
    ()=>NoopObservableCounterMetric,
    "NoopObservableGaugeMetric",
    ()=>NoopObservableGaugeMetric,
    "NoopObservableMetric",
    ()=>NoopObservableMetric,
    "NoopObservableUpDownCounterMetric",
    ()=>NoopObservableUpDownCounterMetric,
    "NoopUpDownCounterMetric",
    ()=>NoopUpDownCounterMetric,
    "createNoopMeter",
    ()=>createNoopMeter
]);
var __extends = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
/**
 * NoopMeter is a noop implementation of the {@link Meter} interface. It reuses
 * constant NoopMetrics for all of its methods.
 */ var NoopMeter = function() {
    function NoopMeter() {}
    /**
     * @see {@link Meter.createHistogram}
     */ NoopMeter.prototype.createHistogram = function(_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
    };
    /**
     * @see {@link Meter.createCounter}
     */ NoopMeter.prototype.createCounter = function(_name, _options) {
        return NOOP_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createUpDownCounter}
     */ NoopMeter.prototype.createUpDownCounter = function(_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableGauge}
     */ NoopMeter.prototype.createObservableGauge = function(_name, _options) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
    };
    /**
     * @see {@link Meter.createObservableCounter}
     */ NoopMeter.prototype.createObservableCounter = function(_name, _options) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.createObservableUpDownCounter}
     */ NoopMeter.prototype.createObservableUpDownCounter = function(_name, _options) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
    };
    /**
     * @see {@link Meter.addBatchObservableCallback}
     */ NoopMeter.prototype.addBatchObservableCallback = function(_callback, _observables) {};
    /**
     * @see {@link Meter.removeBatchObservableCallback}
     */ NoopMeter.prototype.removeBatchObservableCallback = function(_callback) {};
    return NoopMeter;
}();
;
var NoopMetric = function() {
    function NoopMetric() {}
    return NoopMetric;
}();
;
var NoopCounterMetric = function(_super) {
    __extends(NoopCounterMetric, _super);
    function NoopCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopCounterMetric.prototype.add = function(_value, _attributes) {};
    return NoopCounterMetric;
}(NoopMetric);
;
var NoopUpDownCounterMetric = function(_super) {
    __extends(NoopUpDownCounterMetric, _super);
    function NoopUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopUpDownCounterMetric.prototype.add = function(_value, _attributes) {};
    return NoopUpDownCounterMetric;
}(NoopMetric);
;
var NoopHistogramMetric = function(_super) {
    __extends(NoopHistogramMetric, _super);
    function NoopHistogramMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoopHistogramMetric.prototype.record = function(_value, _attributes) {};
    return NoopHistogramMetric;
}(NoopMetric);
;
var NoopObservableMetric = function() {
    function NoopObservableMetric() {}
    NoopObservableMetric.prototype.addCallback = function(_callback) {};
    NoopObservableMetric.prototype.removeCallback = function(_callback) {};
    return NoopObservableMetric;
}();
;
var NoopObservableCounterMetric = function(_super) {
    __extends(NoopObservableCounterMetric, _super);
    function NoopObservableCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableCounterMetric;
}(NoopObservableMetric);
;
var NoopObservableGaugeMetric = function(_super) {
    __extends(NoopObservableGaugeMetric, _super);
    function NoopObservableGaugeMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableGaugeMetric;
}(NoopObservableMetric);
;
var NoopObservableUpDownCounterMetric = function(_super) {
    __extends(NoopObservableUpDownCounterMetric, _super);
    function NoopObservableUpDownCounterMetric() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoopObservableUpDownCounterMetric;
}(NoopObservableMetric);
;
var NOOP_METER = new NoopMeter();
var NOOP_COUNTER_METRIC = new NoopCounterMetric();
var NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
var NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
var NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
var NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
var NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
function createNoopMeter() {
    return NOOP_METER;
} //# sourceMappingURL=NoopMeter.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NOOP_METER_PROVIDER",
    ()=>NOOP_METER_PROVIDER,
    "NoopMeterProvider",
    ()=>NoopMeterProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$NoopMeter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js [instrumentation] (ecmascript)");
;
/**
 * An implementation of the {@link MeterProvider} which returns an impotent Meter
 * for all calls to `getMeter`
 */ var NoopMeterProvider = function() {
    function NoopMeterProvider() {}
    NoopMeterProvider.prototype.getMeter = function(_name, _version, _options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$NoopMeter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_METER"];
    };
    return NoopMeterProvider;
}();
;
var NOOP_METER_PROVIDER = new NoopMeterProvider(); //# sourceMappingURL=NoopMeterProvider.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/metrics.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "MetricsAPI",
    ()=>MetricsAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$NoopMeterProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation] (ecmascript)");
;
;
;
var API_NAME = 'metrics';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Metrics API
 */ var MetricsAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function MetricsAPI() {}
    /** Get the singleton instance of the Metrics API */ MetricsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new MetricsAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global meter provider.
     * Returns true if the meter provider was successfully registered, else false.
     */ MetricsAPI.prototype.setGlobalMeterProvider = function(provider) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, provider, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    /**
     * Returns the global meter provider.
     */ MetricsAPI.prototype.getMeterProvider = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$NoopMeterProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_METER_PROVIDER"];
    };
    /**
     * Returns a meter from the global meter provider.
     */ MetricsAPI.prototype.getMeter = function(name, version, options) {
        return this.getMeterProvider().getMeter(name, version, options);
    };
    /** Remove the global meter provider */ MetricsAPI.prototype.disable = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    return MetricsAPI;
}();
;
 //# sourceMappingURL=metrics.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics-api.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
__turbopack_context__.s([
    "metrics",
    ()=>metrics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$metrics$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/metrics.js [instrumentation] (ecmascript)");
;
var metrics = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$metrics$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["MetricsAPI"].getInstance(); //# sourceMappingURL=metrics-api.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * No-op implementations of {@link TextMapPropagator}.
 */ __turbopack_context__.s([
    "NoopTextMapPropagator",
    ()=>NoopTextMapPropagator
]);
var NoopTextMapPropagator = function() {
    function NoopTextMapPropagator() {}
    /** Noop inject function does nothing */ NoopTextMapPropagator.prototype.inject = function(_context, _carrier) {};
    /** Noop extract function does nothing and returns the input context */ NoopTextMapPropagator.prototype.extract = function(context, _carrier) {
        return context;
    };
    NoopTextMapPropagator.prototype.fields = function() {
        return [];
    };
    return NoopTextMapPropagator;
}();
;
 //# sourceMappingURL=NoopTextMapPropagator.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "defaultTextMapGetter",
    ()=>defaultTextMapGetter,
    "defaultTextMapSetter",
    ()=>defaultTextMapSetter
]);
var defaultTextMapGetter = {
    get: function(carrier, key) {
        if (carrier == null) {
            return undefined;
        }
        return carrier[key];
    },
    keys: function(carrier) {
        if (carrier == null) {
            return [];
        }
        return Object.keys(carrier);
    }
};
var defaultTextMapSetter = {
    set: function(carrier, key, value) {
        if (carrier == null) {
            return;
        }
        carrier[key] = value;
    }
}; //# sourceMappingURL=TextMapPropagator.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "deleteBaggage",
    ()=>deleteBaggage,
    "getActiveBaggage",
    ()=>getActiveBaggage,
    "getBaggage",
    ()=>getBaggage,
    "setBaggage",
    ()=>setBaggage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation] (ecmascript)");
;
;
/**
 * Baggage key
 */ var BAGGAGE_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry Baggage Key');
function getBaggage(context) {
    return context.getValue(BAGGAGE_KEY) || undefined;
}
function getActiveBaggage() {
    return getBaggage(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance().active());
}
function setBaggage(context, baggage) {
    return context.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context) {
    return context.deleteValue(BAGGAGE_KEY);
} //# sourceMappingURL=context-helpers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "BaggageImpl",
    ()=>BaggageImpl
]);
var __read = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __values = ("TURBOPACK compile-time value", void 0) && ("TURBOPACK compile-time value", void 0).__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var BaggageImpl = function() {
    function BaggageImpl(entries) {
        this._entries = entries ? new Map(entries) : new Map();
    }
    BaggageImpl.prototype.getEntry = function(key) {
        var entry = this._entries.get(key);
        if (!entry) {
            return undefined;
        }
        return Object.assign({}, entry);
    };
    BaggageImpl.prototype.getAllEntries = function() {
        return Array.from(this._entries.entries()).map(function(_a) {
            var _b = __read(_a, 2), k = _b[0], v = _b[1];
            return [
                k,
                v
            ];
        });
    };
    BaggageImpl.prototype.setEntry = function(key, entry) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntry = function(key) {
        var newBaggage = new BaggageImpl(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
    };
    BaggageImpl.prototype.removeEntries = function() {
        var e_1, _a;
        var keys = [];
        for(var _i = 0; _i < arguments.length; _i++){
            keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl(this._entries);
        try {
            for(var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()){
                var key = keys_1_1.value;
                newBaggage._entries.delete(key);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return newBaggage;
    };
    BaggageImpl.prototype.clear = function() {
        return new BaggageImpl();
    };
    return BaggageImpl;
}();
;
 //# sourceMappingURL=baggage-impl.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Symbol used to make BaggageEntryMetadata an opaque type
 */ __turbopack_context__.s([
    "baggageEntryMetadataSymbol",
    ()=>baggageEntryMetadataSymbol
]);
var baggageEntryMetadataSymbol = Symbol('BaggageEntryMetadata'); //# sourceMappingURL=symbol.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "baggageEntryMetadataFromString",
    ()=>baggageEntryMetadataFromString,
    "createBaggage",
    ()=>createBaggage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$baggage$2d$impl$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$symbol$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js [instrumentation] (ecmascript)");
;
;
;
var diag = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance();
function createBaggage(entries) {
    if (entries === void 0) {
        entries = {};
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$baggage$2d$impl$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["BaggageImpl"](new Map(Object.entries(entries)));
}
function baggageEntryMetadataFromString(str) {
    if (typeof str !== 'string') {
        diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
        str = '';
    }
    return {
        __TYPE__: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$internal$2f$symbol$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["baggageEntryMetadataSymbol"],
        toString: function() {
            return str;
        }
    };
} //# sourceMappingURL=utils.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/propagation.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "PropagationAPI",
    ()=>PropagationAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$NoopTextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation] (ecmascript)");
;
;
;
;
;
;
var API_NAME = 'propagation';
var NOOP_TEXT_MAP_PROPAGATOR = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$NoopTextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopTextMapPropagator"]();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Propagation API
 */ var PropagationAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function PropagationAPI() {
        this.createBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createBaggage"];
        this.getBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getBaggage"];
        this.getActiveBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getActiveBaggage"];
        this.setBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["setBaggage"];
        this.deleteBaggage = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$context$2d$helpers$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["deleteBaggage"];
    }
    /** Get the singleton instance of the Propagator API */ PropagationAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new PropagationAPI();
        }
        return this._instance;
    };
    /**
     * Set the current propagator.
     *
     * @returns true if the propagator was successfully registered, else false
     */ PropagationAPI.prototype.setGlobalPropagator = function(propagator) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, propagator, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    /**
     * Inject context into a carrier to be propagated inter-process
     *
     * @param context Context carrying tracing data to inject
     * @param carrier carrier to inject context into
     * @param setter Function used to set values on the carrier
     */ PropagationAPI.prototype.inject = function(context, carrier, setter) {
        if (setter === void 0) {
            setter = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["defaultTextMapSetter"];
        }
        return this._getGlobalPropagator().inject(context, carrier, setter);
    };
    /**
     * Extract context from a carrier
     *
     * @param context Context which the newly created context will inherit from
     * @param carrier Carrier to extract context from
     * @param getter Function used to extract keys from a carrier
     */ PropagationAPI.prototype.extract = function(context, carrier, getter) {
        if (getter === void 0) {
            getter = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["defaultTextMapGetter"];
        }
        return this._getGlobalPropagator().extract(context, carrier, getter);
    };
    /**
     * Return a list of all fields which may be used by the propagator.
     */ PropagationAPI.prototype.fields = function() {
        return this._getGlobalPropagator().fields();
    };
    /** Remove the global propagator */ PropagationAPI.prototype.disable = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
    };
    PropagationAPI.prototype._getGlobalPropagator = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || NOOP_TEXT_MAP_PROPAGATOR;
    };
    return PropagationAPI;
}();
;
 //# sourceMappingURL=propagation.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation-api.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
__turbopack_context__.s([
    "propagation",
    ()=>propagation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$propagation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/propagation.js [instrumentation] (ecmascript)");
;
var propagation = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$propagation$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["PropagationAPI"].getInstance(); //# sourceMappingURL=propagation-api.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "TraceFlags",
    ()=>TraceFlags
]);
var TraceFlags;
(function(TraceFlags) {
    /** Represents no flag set. */ TraceFlags[TraceFlags["NONE"] = 0] = "NONE";
    /** Bit to represent whether trace is sampled in trace flags. */ TraceFlags[TraceFlags["SAMPLED"] = 1] = "SAMPLED";
})(TraceFlags || (TraceFlags = {})); //# sourceMappingURL=trace_flags.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "INVALID_SPANID",
    ()=>INVALID_SPANID,
    "INVALID_SPAN_CONTEXT",
    ()=>INVALID_SPAN_CONTEXT,
    "INVALID_TRACEID",
    ()=>INVALID_TRACEID
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [instrumentation] (ecmascript)");
;
var INVALID_SPANID = '0000000000000000';
var INVALID_TRACEID = '00000000000000000000000000000000';
var INVALID_SPAN_CONTEXT = {
    traceId: INVALID_TRACEID,
    spanId: INVALID_SPANID,
    traceFlags: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceFlags"].NONE
}; //# sourceMappingURL=invalid-span-constants.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NonRecordingSpan",
    ()=>NonRecordingSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [instrumentation] (ecmascript)");
;
/**
 * The NonRecordingSpan is the default {@link Span} that is used when no Span
 * implementation is available. All operations are no-op including context
 * propagation.
 */ var NonRecordingSpan = function() {
    function NonRecordingSpan(_spanContext) {
        if (_spanContext === void 0) {
            _spanContext = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["INVALID_SPAN_CONTEXT"];
        }
        this._spanContext = _spanContext;
    }
    // Returns a SpanContext.
    NonRecordingSpan.prototype.spanContext = function() {
        return this._spanContext;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttribute = function(_key, _value) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setAttributes = function(_attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.addEvent = function(_name, _attributes) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.setStatus = function(_status) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.updateName = function(_name) {
        return this;
    };
    // By default does nothing
    NonRecordingSpan.prototype.end = function(_endTime) {};
    // isRecording always returns false for NonRecordingSpan.
    NonRecordingSpan.prototype.isRecording = function() {
        return false;
    };
    // By default does nothing
    NonRecordingSpan.prototype.recordException = function(_exception, _time) {};
    return NonRecordingSpan;
}();
;
 //# sourceMappingURL=NonRecordingSpan.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "deleteSpan",
    ()=>deleteSpan,
    "getActiveSpan",
    ()=>getActiveSpan,
    "getSpan",
    ()=>getSpan,
    "getSpanContext",
    ()=>getSpanContext,
    "setSpan",
    ()=>setSpan,
    "setSpanContext",
    ()=>setSpanContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation] (ecmascript)");
;
;
;
/**
 * span key
 */ var SPAN_KEY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createContextKey"])('OpenTelemetry Context Key SPAN');
function getSpan(context) {
    return context.getValue(SPAN_KEY) || undefined;
}
function getActiveSpan() {
    return getSpan(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance().active());
}
function setSpan(context, span) {
    return context.setValue(SPAN_KEY, span);
}
function deleteSpan(context) {
    return context.deleteValue(SPAN_KEY);
}
function setSpanContext(context, spanContext) {
    return setSpan(context, new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext));
}
function getSpanContext(context) {
    var _a;
    return (_a = getSpan(context)) === null || _a === void 0 ? void 0 : _a.spanContext();
} //# sourceMappingURL=context-utils.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "isSpanContextValid",
    ()=>isSpanContextValid,
    "isValidSpanId",
    ()=>isValidSpanId,
    "isValidTraceId",
    ()=>isValidTraceId,
    "wrapSpanContext",
    ()=>wrapSpanContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation] (ecmascript)");
;
;
var VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
var VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
function isValidTraceId(traceId) {
    return VALID_TRACEID_REGEX.test(traceId) && traceId !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["INVALID_TRACEID"];
}
function isValidSpanId(spanId) {
    return VALID_SPANID_REGEX.test(spanId) && spanId !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["INVALID_SPANID"];
}
function isSpanContextValid(spanContext) {
    return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NonRecordingSpan"](spanContext);
} //# sourceMappingURL=spancontext-utils.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NoopTracer",
    ()=>NoopTracer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/context.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation] (ecmascript)");
;
;
;
;
var contextApi = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ContextAPI"].getInstance();
/**
 * No-op implementations of {@link Tracer}.
 */ var NoopTracer = function() {
    function NoopTracer() {}
    // startSpan starts a noop span.
    NoopTracer.prototype.startSpan = function(name, options, context) {
        if (context === void 0) {
            context = contextApi.active();
        }
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
        var parentFromContext = context && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getSpanContext"])(context);
        if (isSpanContext(parentFromContext) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isSpanContextValid"])(parentFromContext)) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NonRecordingSpan"](parentFromContext);
        } else {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NonRecordingSpan$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NonRecordingSpan"]();
        }
    };
    NoopTracer.prototype.startActiveSpan = function(name, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
            return;
        } else if (arguments.length === 2) {
            fn = arg2;
        } else if (arguments.length === 3) {
            opts = arg2;
            fn = arg3;
        } else {
            opts = arg2;
            ctx = arg3;
            fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name, opts, parentContext);
        var contextWithSpanSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["setSpan"])(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, undefined, span);
    };
    return NoopTracer;
}();
;
function isSpanContext(spanContext) {
    return typeof spanContext === 'object' && typeof spanContext['spanId'] === 'string' && typeof spanContext['traceId'] === 'string' && typeof spanContext['traceFlags'] === 'number';
} //# sourceMappingURL=NoopTracer.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "ProxyTracer",
    ()=>ProxyTracer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [instrumentation] (ecmascript)");
;
var NOOP_TRACER = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopTracer"]();
/**
 * Proxy tracer provided by the proxy tracer provider
 */ var ProxyTracer = function() {
    function ProxyTracer(_provider, name, version, options) {
        this._provider = _provider;
        this.name = name;
        this.version = version;
        this.options = options;
    }
    ProxyTracer.prototype.startSpan = function(name, options, context) {
        return this._getTracer().startSpan(name, options, context);
    };
    ProxyTracer.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
        var tracer = this._getTracer();
        return Reflect.apply(tracer.startActiveSpan, tracer, arguments);
    };
    /**
     * Try to get a tracer from the proxy tracer provider.
     * If the proxy tracer provider has no delegate, return a noop tracer.
     */ ProxyTracer.prototype._getTracer = function() {
        if (this._delegate) {
            return this._delegate;
        }
        var tracer = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer) {
            return NOOP_TRACER;
        }
        this._delegate = tracer;
        return this._delegate;
    };
    return ProxyTracer;
}();
;
 //# sourceMappingURL=ProxyTracer.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NoopTracerProvider",
    ()=>NoopTracerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js [instrumentation] (ecmascript)");
;
/**
 * An implementation of the {@link TracerProvider} which returns an impotent
 * Tracer for all calls to `getTracer`.
 *
 * All operations are no-op.
 */ var NoopTracerProvider = function() {
    function NoopTracerProvider() {}
    NoopTracerProvider.prototype.getTracer = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopTracer"]();
    };
    return NoopTracerProvider;
}();
;
 //# sourceMappingURL=NoopTracerProvider.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "ProxyTracerProvider",
    ()=>ProxyTracerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js [instrumentation] (ecmascript)");
;
;
var NOOP_TRACER_PROVIDER = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$NoopTracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopTracerProvider"]();
/**
 * Tracer provider which provides {@link ProxyTracer}s.
 *
 * Before a delegate is set, tracers provided are NoOp.
 *   When a delegate is set, traces are provided from the delegate.
 *   When a delegate is set after tracers have already been provided,
 *   all tracers already provided will use the provided delegate implementation.
 */ var ProxyTracerProvider = function() {
    function ProxyTracerProvider() {}
    /**
     * Get a {@link ProxyTracer}
     */ ProxyTracerProvider.prototype.getTracer = function(name, version, options) {
        var _a;
        return (_a = this.getDelegateTracer(name, version, options)) !== null && _a !== void 0 ? _a : new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyTracer"](this, name, version, options);
    };
    ProxyTracerProvider.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
    };
    /**
     * Set the delegate tracer provider
     */ ProxyTracerProvider.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
    };
    ProxyTracerProvider.prototype.getDelegateTracer = function(name, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name, version, options);
    };
    return ProxyTracerProvider;
}();
;
 //# sourceMappingURL=ProxyTracerProvider.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/trace.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "TraceAPI",
    ()=>TraceAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/context-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/diag.js [instrumentation] (ecmascript)");
;
;
;
;
;
var API_NAME = 'trace';
/**
 * Singleton object which represents the entry point to the OpenTelemetry Tracing API
 */ var TraceAPI = function() {
    /** Empty private constructor prevents end users from constructing a new instance of the API */ function TraceAPI() {
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
        this.wrapSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["wrapSpanContext"];
        this.isSpanContextValid = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isSpanContextValid"];
        this.deleteSpan = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["deleteSpan"];
        this.getSpan = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getSpan"];
        this.getActiveSpan = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getActiveSpan"];
        this.getSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getSpanContext"];
        this.setSpan = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["setSpan"];
        this.setSpanContext = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$context$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["setSpanContext"];
    }
    /** Get the singleton instance of the Trace API */ TraceAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new TraceAPI();
        }
        return this._instance;
    };
    /**
     * Set the current global tracer.
     *
     * @returns true if the tracer provider was successfully registered, else false
     */ TraceAPI.prototype.setGlobalTracerProvider = function(provider) {
        var success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["registerGlobal"])(API_NAME, this._proxyTracerProvider, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        if (success) {
            this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
    };
    /**
     * Returns the global tracer provider.
     */ TraceAPI.prototype.getTracerProvider = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["getGlobal"])(API_NAME) || this._proxyTracerProvider;
    };
    /**
     * Returns a tracer from the global tracer provider.
     */ TraceAPI.prototype.getTracer = function(name, version) {
        return this.getTracerProvider().getTracer(name, version);
    };
    /** Remove the global tracer provider */ TraceAPI.prototype.disable = function() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["unregisterGlobal"])(API_NAME, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$diag$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagAPI"].instance());
        this._proxyTracerProvider = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyTracerProvider"]();
    };
    return TraceAPI;
}();
;
 //# sourceMappingURL=trace.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace-api.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ // Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
__turbopack_context__.s([
    "trace",
    ()=>trace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/api/trace.js [instrumentation] (ecmascript)");
;
var trace = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$api$2f$trace$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceAPI"].getInstance(); //# sourceMappingURL=trace-api.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/index.js [instrumentation] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Split module-level variable definition into separate files to allow
// tree-shaking on each api instance.
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace-api.js [instrumentation] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = {
    context: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["context"],
    diag: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"],
    metrics: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["metrics"],
    propagation: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["propagation"],
    trace: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["trace"]
};
 //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "DiagConsoleLogger",
    ()=>DiagConsoleLogger
]);
var consoleMap = [
    {
        n: 'error',
        c: 'error'
    },
    {
        n: 'warn',
        c: 'warn'
    },
    {
        n: 'info',
        c: 'info'
    },
    {
        n: 'debug',
        c: 'debug'
    },
    {
        n: 'verbose',
        c: 'trace'
    }
];
/**
 * A simple Immutable Console based diagnostic logger which will output any messages to the Console.
 * If you want to limit the amount of logging to a specific level or lower use the
 * {@link createLogLevelDiagLogger}
 */ var DiagConsoleLogger = function() {
    function DiagConsoleLogger() {
        function _consoleFunc(funcName) {
            return function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++){
                    args[_i] = arguments[_i];
                }
                if (console) {
                    // Some environments only expose the console when the F12 developer console is open
                    // eslint-disable-next-line no-console
                    var theFunc = console[funcName];
                    if (typeof theFunc !== 'function') {
                        // Not all environments support all functions
                        // eslint-disable-next-line no-console
                        theFunc = console.log;
                    }
                    // One last final check
                    if (typeof theFunc === 'function') {
                        return theFunc.apply(console, args);
                    }
                }
            };
        }
        for(var i = 0; i < consoleMap.length; i++){
            this[consoleMap[i].n] = _consoleFunc(consoleMap[i].c);
        }
    }
    return DiagConsoleLogger;
}();
;
 //# sourceMappingURL=consoleLogger.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics/Metric.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** The Type of value. It describes how the data is reported. */ __turbopack_context__.s([
    "ValueType",
    ()=>ValueType
]);
var ValueType;
(function(ValueType) {
    ValueType[ValueType["INT"] = 0] = "INT";
    ValueType[ValueType["DOUBLE"] = 1] = "DOUBLE";
})(ValueType || (ValueType = {})); //# sourceMappingURL=Metric.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @deprecated use the one declared in @opentelemetry/sdk-trace-base instead.
 * A sampling decision that determines how a {@link Span} will be recorded
 * and collected.
 */ __turbopack_context__.s([
    "SamplingDecision",
    ()=>SamplingDecision
]);
var SamplingDecision;
(function(SamplingDecision) {
    /**
     * `Span.isRecording() === false`, span will not be recorded and all events
     * and attributes will be dropped.
     */ SamplingDecision[SamplingDecision["NOT_RECORD"] = 0] = "NOT_RECORD";
    /**
     * `Span.isRecording() === true`, but `Sampled` flag in {@link TraceFlags}
     * MUST NOT be set.
     */ SamplingDecision[SamplingDecision["RECORD"] = 1] = "RECORD";
    /**
     * `Span.isRecording() === true` AND `Sampled` flag in {@link TraceFlags}
     * MUST be set.
     */ SamplingDecision[SamplingDecision["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
})(SamplingDecision || (SamplingDecision = {})); //# sourceMappingURL=SamplingResult.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "SpanKind",
    ()=>SpanKind
]);
var SpanKind;
(function(SpanKind) {
    /** Default value. Indicates that the span is used internally. */ SpanKind[SpanKind["INTERNAL"] = 0] = "INTERNAL";
    /**
     * Indicates that the span covers server-side handling of an RPC or other
     * remote request.
     */ SpanKind[SpanKind["SERVER"] = 1] = "SERVER";
    /**
     * Indicates that the span covers the client-side wrapper around an RPC or
     * other remote request.
     */ SpanKind[SpanKind["CLIENT"] = 2] = "CLIENT";
    /**
     * Indicates that the span describes producer sending a message to a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["PRODUCER"] = 3] = "PRODUCER";
    /**
     * Indicates that the span describes consumer receiving a message from a
     * broker. Unlike client and server, there is no direct critical path latency
     * relationship between producer and consumer spans.
     */ SpanKind[SpanKind["CONSUMER"] = 4] = "CONSUMER";
})(SpanKind || (SpanKind = {})); //# sourceMappingURL=span_kind.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/status.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * An enumeration of status codes.
 */ __turbopack_context__.s([
    "SpanStatusCode",
    ()=>SpanStatusCode
]);
var SpanStatusCode;
(function(SpanStatusCode) {
    /**
     * The default status.
     */ SpanStatusCode[SpanStatusCode["UNSET"] = 0] = "UNSET";
    /**
     * The operation has been validated by an Application developer or
     * Operator to have completed successfully.
     */ SpanStatusCode[SpanStatusCode["OK"] = 1] = "OK";
    /**
     * The operation contains an error.
     */ SpanStatusCode[SpanStatusCode["ERROR"] = 2] = "ERROR";
})(SpanStatusCode || (SpanStatusCode = {})); //# sourceMappingURL=status.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "validateKey",
    ()=>validateKey,
    "validateValue",
    ()=>validateValue
]);
var VALID_KEY_CHAR_RANGE = '[_0-9a-z-*/]';
var VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
var VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
var VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
var VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
var INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
function validateKey(key) {
    return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
    return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
} //# sourceMappingURL=tracestate-validators.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "TraceStateImpl",
    ()=>TraceStateImpl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$internal$2f$tracestate$2d$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js [instrumentation] (ecmascript)");
;
var MAX_TRACE_STATE_ITEMS = 32;
var MAX_TRACE_STATE_LEN = 512;
var LIST_MEMBERS_SEPARATOR = ',';
var LIST_MEMBER_KEY_VALUE_SPLITTER = '=';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */ var TraceStateImpl = function() {
    function TraceStateImpl(rawTraceState) {
        this._internalState = new Map();
        if (rawTraceState) this._parse(rawTraceState);
    }
    TraceStateImpl.prototype.set = function(key, value) {
        // TODO: Benchmark the different approaches(map vs list) and
        // use the faster one.
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
            traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
    };
    TraceStateImpl.prototype.unset = function(key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
    };
    TraceStateImpl.prototype.get = function(key) {
        return this._internalState.get(key);
    };
    TraceStateImpl.prototype.serialize = function() {
        var _this = this;
        return this._keys().reduce(function(agg, key) {
            agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
            return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
    };
    TraceStateImpl.prototype._parse = function(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN) return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse() // Store in reverse so new keys (.set(...)) will be placed at the beginning
        .reduce(function(agg, part) {
            var listMember = part.trim(); // Optional Whitespace (OWS) handling
            var i = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
            if (i !== -1) {
                var key = listMember.slice(0, i);
                var value = listMember.slice(i + 1, part.length);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$internal$2f$tracestate$2d$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["validateKey"])(key) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$internal$2f$tracestate$2d$validators$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["validateValue"])(value)) {
                    agg.set(key, value);
                } else {
                // TODO: Consider to add warning log
                }
            }
            return agg;
        }, new Map());
        // Because of the reverse() requirement, trunc must be done after map is created
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
            this._internalState = new Map(Array.from(this._internalState.entries()).reverse() // Use reverse same as original tracestate parse chain
            .slice(0, MAX_TRACE_STATE_ITEMS));
        }
    };
    TraceStateImpl.prototype._keys = function() {
        return Array.from(this._internalState.keys()).reverse();
    };
    TraceStateImpl.prototype._clone = function() {
        var traceState = new TraceStateImpl();
        traceState._internalState = new Map(this._internalState);
        return traceState;
    };
    return TraceStateImpl;
}();
;
 //# sourceMappingURL=tracestate-impl.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "createTraceState",
    ()=>createTraceState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$internal$2f$tracestate$2d$impl$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js [instrumentation] (ecmascript)");
;
function createTraceState(rawTraceState) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$internal$2f$tracestate$2d$impl$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceStateImpl"](rawTraceState);
} //# sourceMappingURL=utils.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/index.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiagConsoleLogger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$consoleLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagConsoleLogger"],
    "DiagLogLevel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["DiagLogLevel"],
    "INVALID_SPANID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["INVALID_SPANID"],
    "INVALID_SPAN_CONTEXT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["INVALID_SPAN_CONTEXT"],
    "INVALID_TRACEID",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["INVALID_TRACEID"],
    "ProxyTracer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyTracer"],
    "ProxyTracerProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ProxyTracerProvider"],
    "ROOT_CONTEXT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ROOT_CONTEXT"],
    "SamplingDecision",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$SamplingResult$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SamplingDecision"],
    "SpanKind",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$span_kind$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SpanKind"],
    "SpanStatusCode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$status$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SpanStatusCode"],
    "TraceFlags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["TraceFlags"],
    "ValueType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$Metric$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["ValueType"],
    "baggageEntryMetadataFromString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["baggageEntryMetadataFromString"],
    "context",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["context"],
    "createContextKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createContextKey"],
    "createNoopMeter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$NoopMeter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createNoopMeter"],
    "createTraceState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$internal$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["createTraceState"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "defaultTextMapGetter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["defaultTextMapGetter"],
    "defaultTextMapSetter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["defaultTextMapSetter"],
    "diag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["diag"],
    "isSpanContextValid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isSpanContextValid"],
    "isValidSpanId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isValidSpanId"],
    "isValidTraceId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["isValidTraceId"],
    "metrics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["metrics"],
    "propagation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["propagation"],
    "trace",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["trace"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$baggage$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/baggage/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2f$context$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context/context.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$consoleLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2f$types$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag/types.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$NoopMeter$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2f$Metric$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics/Metric.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2f$TextMapPropagator$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracer$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$ProxyTracerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$SamplingResult$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$span_kind$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/span_kind.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$status$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/status.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$trace_flags$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$internal$2f$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$spancontext$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2f$invalid$2d$span$2d$constants$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$context$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/context-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$diag$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/diag-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$metrics$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/metrics-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$propagation$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/propagation-api.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$trace$2d$api$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/trace-api.js [instrumentation] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /** only globals that common to node and browsers are allowed */ // eslint-disable-next-line node/no-unsupported-features/es-builtins
__turbopack_context__.s([
    "_globalThis",
    ()=>_globalThis
]);
var _globalThis = typeof globalThis === 'object' ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g; //# sourceMappingURL=globalThis.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "API_BACKWARDS_COMPATIBILITY_VERSION",
    ()=>API_BACKWARDS_COMPATIBILITY_VERSION,
    "GLOBAL_LOGS_API_KEY",
    ()=>GLOBAL_LOGS_API_KEY,
    "_global",
    ()=>_global,
    "makeGetter",
    ()=>makeGetter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/platform/node/globalThis.js [instrumentation] (ecmascript)");
;
var GLOBAL_LOGS_API_KEY = Symbol.for('io.opentelemetry.js.api.logs');
var _global = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$platform$2f$node$2f$globalThis$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_globalThis"];
function makeGetter(requiredVersion, instance, fallback) {
    return function(version) {
        return version === requiredVersion ? instance : fallback;
    };
}
var API_BACKWARDS_COMPATIBILITY_VERSION = 1; //# sourceMappingURL=global-utils.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NOOP_LOGGER",
    ()=>NOOP_LOGGER,
    "NoopLogger",
    ()=>NoopLogger
]);
var NoopLogger = function() {
    function NoopLogger() {}
    NoopLogger.prototype.emit = function(_logRecord) {};
    return NoopLogger;
}();
;
var NOOP_LOGGER = new NoopLogger(); //# sourceMappingURL=NoopLogger.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "NOOP_LOGGER_PROVIDER",
    ()=>NOOP_LOGGER_PROVIDER,
    "NoopLoggerProvider",
    ()=>NoopLoggerProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation] (ecmascript)");
;
var NoopLoggerProvider = function() {
    function NoopLoggerProvider() {}
    NoopLoggerProvider.prototype.getLogger = function(_name, _version, _options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopLogger"]();
    };
    return NoopLoggerProvider;
}();
;
var NOOP_LOGGER_PROVIDER = new NoopLoggerProvider(); //# sourceMappingURL=NoopLoggerProvider.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "LogsAPI",
    ()=>LogsAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/internal/global-utils.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation] (ecmascript)");
;
;
var LogsAPI = function() {
    function LogsAPI() {}
    LogsAPI.getInstance = function() {
        if (!this._instance) {
            this._instance = new LogsAPI();
        }
        return this._instance;
    };
    LogsAPI.prototype.setGlobalLoggerProvider = function(provider) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) {
            return this.getLoggerProvider();
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["makeGetter"])(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"], provider, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"]);
        return provider;
    };
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */ LogsAPI.prototype.getLoggerProvider = function() {
        var _a, _b;
        return (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]]) === null || _a === void 0 ? void 0 : _a.call(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"], __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["API_BACKWARDS_COMPATIBILITY_VERSION"])) !== null && _b !== void 0 ? _b : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"];
    };
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */ LogsAPI.prototype.getLogger = function(name, version, options) {
        return this.getLoggerProvider().getLogger(name, version, options);
    };
    /** Remove the global logger provider */ LogsAPI.prototype.disable = function() {
        delete __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["_global"][__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$internal$2f$global$2d$utils$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["GLOBAL_LOGS_API_KEY"]];
    };
    return LogsAPI;
}();
;
 //# sourceMappingURL=logs.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "logs",
    ()=>logs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/api/logs.js [instrumentation] (ecmascript)");
;
;
;
;
;
;
;
var logs = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$api$2f$logs$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["LogsAPI"].getInstance(); //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/Logger.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([]);
;
 //# sourceMappingURL=Logger.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerProvider.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([]);
;
 //# sourceMappingURL=LoggerProvider.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ __turbopack_context__.s([
    "SeverityNumber",
    ()=>SeverityNumber
]);
var SeverityNumber;
(function(SeverityNumber) {
    SeverityNumber[SeverityNumber["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    SeverityNumber[SeverityNumber["TRACE"] = 1] = "TRACE";
    SeverityNumber[SeverityNumber["TRACE2"] = 2] = "TRACE2";
    SeverityNumber[SeverityNumber["TRACE3"] = 3] = "TRACE3";
    SeverityNumber[SeverityNumber["TRACE4"] = 4] = "TRACE4";
    SeverityNumber[SeverityNumber["DEBUG"] = 5] = "DEBUG";
    SeverityNumber[SeverityNumber["DEBUG2"] = 6] = "DEBUG2";
    SeverityNumber[SeverityNumber["DEBUG3"] = 7] = "DEBUG3";
    SeverityNumber[SeverityNumber["DEBUG4"] = 8] = "DEBUG4";
    SeverityNumber[SeverityNumber["INFO"] = 9] = "INFO";
    SeverityNumber[SeverityNumber["INFO2"] = 10] = "INFO2";
    SeverityNumber[SeverityNumber["INFO3"] = 11] = "INFO3";
    SeverityNumber[SeverityNumber["INFO4"] = 12] = "INFO4";
    SeverityNumber[SeverityNumber["WARN"] = 13] = "WARN";
    SeverityNumber[SeverityNumber["WARN2"] = 14] = "WARN2";
    SeverityNumber[SeverityNumber["WARN3"] = 15] = "WARN3";
    SeverityNumber[SeverityNumber["WARN4"] = 16] = "WARN4";
    SeverityNumber[SeverityNumber["ERROR"] = 17] = "ERROR";
    SeverityNumber[SeverityNumber["ERROR2"] = 18] = "ERROR2";
    SeverityNumber[SeverityNumber["ERROR3"] = 19] = "ERROR3";
    SeverityNumber[SeverityNumber["ERROR4"] = 20] = "ERROR4";
    SeverityNumber[SeverityNumber["FATAL"] = 21] = "FATAL";
    SeverityNumber[SeverityNumber["FATAL2"] = 22] = "FATAL2";
    SeverityNumber[SeverityNumber["FATAL3"] = 23] = "FATAL3";
    SeverityNumber[SeverityNumber["FATAL4"] = 24] = "FATAL4";
})(SeverityNumber || (SeverityNumber = {})); //# sourceMappingURL=LogRecord.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerOptions.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
 //# sourceMappingURL=LoggerOptions.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NOOP_LOGGER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_LOGGER"],
    "NOOP_LOGGER_PROVIDER",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NOOP_LOGGER_PROVIDER"],
    "NoopLogger",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopLogger"],
    "NoopLoggerProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["NoopLoggerProvider"],
    "SeverityNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LogRecord$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__["SeverityNumber"],
    "logs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__["logs"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$Logger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/Logger.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerProvider.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LogRecord$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/LogRecord.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$types$2f$LoggerOptions$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/types/LoggerOptions.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLogger$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLogger.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$NoopLoggerProvider$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/NoopLoggerProvider.js [instrumentation] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@vercel+otel@1.12.0_@opentelemetry+api-logs@0.46.0_@opentelemetry+api@1.7.0_@openteleme_89cf353be598bbddec090bbff98c3ad6/node_modules/@vercel/otel/dist/node/index.js [instrumentation] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FetchInstrumentation",
    ()=>or,
    "OTLPHttpJsonTraceExporter",
    ()=>nr,
    "OTLPHttpProtoTraceExporter",
    ()=>pt,
    "registerOTel",
    ()=>yv
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/module [external] (module, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api@1.7.0/node_modules/@opentelemetry/api/build/esm/index.js [instrumentation] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@opentelemetry+api-logs@0.46.0/node_modules/@opentelemetry/api-logs/build/esm/index.js [instrumentation] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@vercel+otel@1.12.0_@opentelemetry+api-logs@0.46.0_@opentelemetry+api@1.7.0_@openteleme_89cf353be598bbddec090bbff98c3ad6/node_modules/@vercel/otel/dist/node/index.js")}`;
    }
};
;
;
;
const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(__TURBOPACK__import$2e$meta__.url);
const __filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const __dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(__filename);
var of = Object.create;
var Fs = Object.defineProperty;
var af = Object.getOwnPropertyDescriptor;
var uf = Object.getOwnPropertyNames;
var cf = Object.getPrototypeOf, lf = Object.prototype.hasOwnProperty;
var ee = ((r)=>typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(r, {
        get: (e, t)=>(typeof require < "u" ? require : e)[t]
    }) : r)(function(r) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + r + '" is not supported');
});
var _c = (r, e)=>()=>(r && (e = r(r = 0)), e);
var c = (r, e)=>()=>(e || r((e = {
            exports: {}
        }).exports, e), e.exports);
var Xr = (r, e, t, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let i of uf(e))!lf.call(r, i) && i !== t && Fs(r, i, {
        get: ()=>e[i],
        enumerable: !(n = af(e, i)) || n.enumerable
    });
    return r;
}, Et = (r, e, t)=>(Xr(r, e, "default"), t && Xr(t, e, "default")), q = (r, e, t)=>(t = r != null ? of(cf(r)) : {}, Xr(e || !r || !r.__esModule ? Fs(t, "default", {
        value: r,
        enumerable: !0
    }) : t, r)), f = (r)=>Xr(Fs({}, "__esModule", {
        value: !0
    }), r);
var d = {};
;
var p = _c(()=>{
    Et(d, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$40$1$2e$7$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__);
});
var _r = c((Ie)=>{
    "use strict";
    Object.defineProperty(Ie, "__esModule", {
        value: !0
    });
    Ie.isTracingSuppressed = Ie.unsuppressTracing = Ie.suppressTracing = void 0;
    var df = (p(), f(d)), Hs = (0, df.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
    function _f(r) {
        return r.setValue(Hs, !0);
    }
    Ie.suppressTracing = _f;
    function pf(r) {
        return r.deleteValue(Hs);
    }
    Ie.unsuppressTracing = pf;
    function hf(r) {
        return r.getValue(Hs) === !0;
    }
    Ie.isTracingSuppressed = hf;
});
var ks = c(($)=>{
    "use strict";
    Object.defineProperty($, "__esModule", {
        value: !0
    });
    $.BAGGAGE_MAX_TOTAL_LENGTH = $.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = $.BAGGAGE_MAX_NAME_VALUE_PAIRS = $.BAGGAGE_HEADER = $.BAGGAGE_ITEMS_SEPARATOR = $.BAGGAGE_PROPERTIES_SEPARATOR = $.BAGGAGE_KEY_PAIR_SEPARATOR = void 0;
    $.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
    $.BAGGAGE_PROPERTIES_SEPARATOR = ";";
    $.BAGGAGE_ITEMS_SEPARATOR = ",";
    $.BAGGAGE_HEADER = "baggage";
    $.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
    $.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
    $.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});
var $s = c((he)=>{
    "use strict";
    Object.defineProperty(he, "__esModule", {
        value: !0
    });
    he.parseKeyPairsIntoRecord = he.parsePairKeyValue = he.getKeyPairs = he.serializeKeyPairs = void 0;
    var ff = (p(), f(d)), ke = ks();
    function Ef(r) {
        return r.reduce((e, t)=>{
            let n = `${e}${e !== "" ? ke.BAGGAGE_ITEMS_SEPARATOR : ""}${t}`;
            return n.length > ke.BAGGAGE_MAX_TOTAL_LENGTH ? e : n;
        }, "");
    }
    he.serializeKeyPairs = Ef;
    function mf(r) {
        return r.getAllEntries().map(([e, t])=>{
            let n = `${encodeURIComponent(e)}=${encodeURIComponent(t.value)}`;
            return t.metadata !== void 0 && (n += ke.BAGGAGE_PROPERTIES_SEPARATOR + t.metadata.toString()), n;
        });
    }
    he.getKeyPairs = mf;
    function pc(r) {
        let e = r.split(ke.BAGGAGE_PROPERTIES_SEPARATOR);
        if (e.length <= 0) return;
        let t = e.shift();
        if (!t) return;
        let n = t.indexOf(ke.BAGGAGE_KEY_PAIR_SEPARATOR);
        if (n <= 0) return;
        let i = decodeURIComponent(t.substring(0, n).trim()), s = decodeURIComponent(t.substring(n + 1).trim()), o;
        return e.length > 0 && (o = (0, ff.baggageEntryMetadataFromString)(e.join(ke.BAGGAGE_PROPERTIES_SEPARATOR))), {
            key: i,
            value: s,
            metadata: o
        };
    }
    he.parsePairKeyValue = pc;
    function gf(r) {
        return typeof r != "string" || r.length === 0 ? {} : r.split(ke.BAGGAGE_ITEMS_SEPARATOR).map((e)=>pc(e)).filter((e)=>e !== void 0 && e.value.length > 0).reduce((e, t)=>(e[t.key] = t.value, e), {});
    }
    he.parseKeyPairsIntoRecord = gf;
});
var hc = c((Wr)=>{
    "use strict";
    Object.defineProperty(Wr, "__esModule", {
        value: !0
    });
    Wr.W3CBaggagePropagator = void 0;
    var Xs = (p(), f(d)), Tf = _r(), $e = ks(), Ws = $s(), Ks = class {
        inject(e, t, n) {
            let i = Xs.propagation.getBaggage(e);
            if (!i || (0, Tf.isTracingSuppressed)(e)) return;
            let s = (0, Ws.getKeyPairs)(i).filter((a)=>a.length <= $e.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, $e.BAGGAGE_MAX_NAME_VALUE_PAIRS), o = (0, Ws.serializeKeyPairs)(s);
            o.length > 0 && n.set(t, $e.BAGGAGE_HEADER, o);
        }
        extract(e, t, n) {
            let i = n.get(t, $e.BAGGAGE_HEADER), s = Array.isArray(i) ? i.join($e.BAGGAGE_ITEMS_SEPARATOR) : i;
            if (!s) return e;
            let o = {};
            return s.length === 0 || (s.split($e.BAGGAGE_ITEMS_SEPARATOR).forEach((u)=>{
                let l = (0, Ws.parsePairKeyValue)(u);
                if (l) {
                    let _ = {
                        value: l.value
                    };
                    l.metadata && (_.metadata = l.metadata), o[l.key] = _;
                }
            }), Object.entries(o).length === 0) ? e : Xs.propagation.setBaggage(e, Xs.propagation.createBaggage(o));
        }
        fields() {
            return [
                $e.BAGGAGE_HEADER
            ];
        }
    };
    Wr.W3CBaggagePropagator = Ks;
});
var fc = c((Kr)=>{
    "use strict";
    Object.defineProperty(Kr, "__esModule", {
        value: !0
    });
    Kr.AnchoredClock = void 0;
    var zs = class {
        constructor(e, t){
            this._monotonicClock = t, this._epochMillis = e.now(), this._performanceMillis = t.now();
        }
        now() {
            let e = this._monotonicClock.now() - this._performanceMillis;
            return this._epochMillis + e;
        }
    };
    Kr.AnchoredClock = zs;
});
var Sc = c((Le)=>{
    "use strict";
    Object.defineProperty(Le, "__esModule", {
        value: !0
    });
    Le.isAttributeValue = Le.isAttributeKey = Le.sanitizeAttributes = void 0;
    var Ec = (p(), f(d));
    function Sf(r) {
        let e = {};
        if (typeof r != "object" || r == null) return e;
        for (let [t, n] of Object.entries(r)){
            if (!mc(t)) {
                Ec.diag.warn(`Invalid attribute key: ${t}`);
                continue;
            }
            if (!gc(n)) {
                Ec.diag.warn(`Invalid attribute value set for key: ${t}`);
                continue;
            }
            Array.isArray(n) ? e[t] = n.slice() : e[t] = n;
        }
        return e;
    }
    Le.sanitizeAttributes = Sf;
    function mc(r) {
        return typeof r == "string" && r.length > 0;
    }
    Le.isAttributeKey = mc;
    function gc(r) {
        return r == null ? !0 : Array.isArray(r) ? Af(r) : Tc(r);
    }
    Le.isAttributeValue = gc;
    function Af(r) {
        let e;
        for (let t of r)if (t != null) {
            if (!e) {
                if (Tc(t)) {
                    e = typeof t;
                    continue;
                }
                return !1;
            }
            if (typeof t !== e) return !1;
        }
        return !0;
    }
    function Tc(r) {
        switch(typeof r){
            case "number":
            case "boolean":
            case "string":
                return !0;
        }
        return !1;
    }
});
var Ys = c((zr)=>{
    "use strict";
    Object.defineProperty(zr, "__esModule", {
        value: !0
    });
    zr.loggingErrorHandler = void 0;
    var Of = (p(), f(d));
    function Rf() {
        return (r)=>{
            Of.diag.error(bf(r));
        };
    }
    zr.loggingErrorHandler = Rf;
    function bf(r) {
        return typeof r == "string" ? r : JSON.stringify(Pf(r));
    }
    function Pf(r) {
        let e = {}, t = r;
        for(; t !== null;)Object.getOwnPropertyNames(t).forEach((n)=>{
            if (e[n]) return;
            let i = t[n];
            i && (e[n] = String(i));
        }), t = Object.getPrototypeOf(t);
        return e;
    }
});
var Qs = c((mt)=>{
    "use strict";
    Object.defineProperty(mt, "__esModule", {
        value: !0
    });
    mt.globalErrorHandler = mt.setGlobalErrorHandler = void 0;
    var yf = Ys(), Ac = (0, yf.loggingErrorHandler)();
    function vf(r) {
        Ac = r;
    }
    mt.setGlobalErrorHandler = vf;
    function If(r) {
        try {
            Ac(r);
        } catch  {}
    }
    mt.globalErrorHandler = If;
});
var Zs = c((pr)=>{
    "use strict";
    Object.defineProperty(pr, "__esModule", {
        value: !0
    });
    pr.TracesSamplerValues = void 0;
    var Lf;
    (function(r) {
        r.AlwaysOff = "always_off", r.AlwaysOn = "always_on", r.ParentBasedAlwaysOff = "parentbased_always_off", r.ParentBasedAlwaysOn = "parentbased_always_on", r.ParentBasedTraceIdRatio = "parentbased_traceidratio", r.TraceIdRatio = "traceidratio";
    })(Lf = pr.TracesSamplerValues || (pr.TracesSamplerValues = {}));
});
var Oc = c((Yr)=>{
    "use strict";
    Object.defineProperty(Yr, "__esModule", {
        value: !0
    });
    Yr._globalThis = void 0;
    Yr._globalThis = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable";
});
var Qr = c((I)=>{
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    });
    I.getEnvWithoutDefaults = I.parseEnvironment = I.DEFAULT_ENVIRONMENT = I.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = I.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = I.DEFAULT_ATTRIBUTE_COUNT_LIMIT = I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = void 0;
    var Me = (p(), f(d)), Mf = Zs(), Nf = Oc(), Cf = ",", wf = [
        "OTEL_SDK_DISABLED"
    ];
    function xf(r) {
        return wf.indexOf(r) > -1;
    }
    var Df = [
        "OTEL_BSP_EXPORT_TIMEOUT",
        "OTEL_BSP_MAX_EXPORT_BATCH_SIZE",
        "OTEL_BSP_MAX_QUEUE_SIZE",
        "OTEL_BSP_SCHEDULE_DELAY",
        "OTEL_BLRP_EXPORT_TIMEOUT",
        "OTEL_BLRP_MAX_EXPORT_BATCH_SIZE",
        "OTEL_BLRP_MAX_QUEUE_SIZE",
        "OTEL_BLRP_SCHEDULE_DELAY",
        "OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT",
        "OTEL_ATTRIBUTE_COUNT_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT",
        "OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT",
        "OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT",
        "OTEL_SPAN_EVENT_COUNT_LIMIT",
        "OTEL_SPAN_LINK_COUNT_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT",
        "OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT",
        "OTEL_EXPORTER_OTLP_TIMEOUT",
        "OTEL_EXPORTER_OTLP_TRACES_TIMEOUT",
        "OTEL_EXPORTER_OTLP_METRICS_TIMEOUT",
        "OTEL_EXPORTER_OTLP_LOGS_TIMEOUT",
        "OTEL_EXPORTER_JAEGER_AGENT_PORT"
    ];
    function Uf(r) {
        return Df.indexOf(r) > -1;
    }
    var Bf = [
        "OTEL_NO_PATCH_MODULES",
        "OTEL_PROPAGATORS"
    ];
    function qf(r) {
        return Bf.indexOf(r) > -1;
    }
    I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT = 1 / 0;
    I.DEFAULT_ATTRIBUTE_COUNT_LIMIT = 128;
    I.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = 128;
    I.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT = 128;
    I.DEFAULT_ENVIRONMENT = {
        OTEL_SDK_DISABLED: !1,
        CONTAINER_NAME: "",
        ECS_CONTAINER_METADATA_URI_V4: "",
        ECS_CONTAINER_METADATA_URI: "",
        HOSTNAME: "",
        KUBERNETES_SERVICE_HOST: "",
        NAMESPACE: "",
        OTEL_BSP_EXPORT_TIMEOUT: 3e4,
        OTEL_BSP_MAX_EXPORT_BATCH_SIZE: 512,
        OTEL_BSP_MAX_QUEUE_SIZE: 2048,
        OTEL_BSP_SCHEDULE_DELAY: 5e3,
        OTEL_BLRP_EXPORT_TIMEOUT: 3e4,
        OTEL_BLRP_MAX_EXPORT_BATCH_SIZE: 512,
        OTEL_BLRP_MAX_QUEUE_SIZE: 2048,
        OTEL_BLRP_SCHEDULE_DELAY: 5e3,
        OTEL_EXPORTER_JAEGER_AGENT_HOST: "",
        OTEL_EXPORTER_JAEGER_AGENT_PORT: 6832,
        OTEL_EXPORTER_JAEGER_ENDPOINT: "",
        OTEL_EXPORTER_JAEGER_PASSWORD: "",
        OTEL_EXPORTER_JAEGER_USER: "",
        OTEL_EXPORTER_OTLP_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_TRACES_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_METRICS_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_LOGS_ENDPOINT: "",
        OTEL_EXPORTER_OTLP_HEADERS: "",
        OTEL_EXPORTER_OTLP_TRACES_HEADERS: "",
        OTEL_EXPORTER_OTLP_METRICS_HEADERS: "",
        OTEL_EXPORTER_OTLP_LOGS_HEADERS: "",
        OTEL_EXPORTER_OTLP_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_TRACES_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_METRICS_TIMEOUT: 1e4,
        OTEL_EXPORTER_OTLP_LOGS_TIMEOUT: 1e4,
        OTEL_EXPORTER_ZIPKIN_ENDPOINT: "http://localhost:9411/api/v2/spans",
        OTEL_LOG_LEVEL: Me.DiagLogLevel.INFO,
        OTEL_NO_PATCH_MODULES: [],
        OTEL_PROPAGATORS: [
            "tracecontext",
            "baggage"
        ],
        OTEL_RESOURCE_ATTRIBUTES: "",
        OTEL_SERVICE_NAME: "",
        OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT: I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        OTEL_ATTRIBUTE_COUNT_LIMIT: I.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
        OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT: I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT: I.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
        OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT: I.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT,
        OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT: I.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
        OTEL_SPAN_EVENT_COUNT_LIMIT: 128,
        OTEL_SPAN_LINK_COUNT_LIMIT: 128,
        OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT: I.DEFAULT_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
        OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT: I.DEFAULT_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT,
        OTEL_TRACES_EXPORTER: "",
        OTEL_TRACES_SAMPLER: Mf.TracesSamplerValues.ParentBasedAlwaysOn,
        OTEL_TRACES_SAMPLER_ARG: "",
        OTEL_LOGS_EXPORTER: "",
        OTEL_EXPORTER_OTLP_INSECURE: "",
        OTEL_EXPORTER_OTLP_TRACES_INSECURE: "",
        OTEL_EXPORTER_OTLP_METRICS_INSECURE: "",
        OTEL_EXPORTER_OTLP_LOGS_INSECURE: "",
        OTEL_EXPORTER_OTLP_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_TRACES_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_METRICS_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_LOGS_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_TRACES_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_METRICS_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_LOGS_COMPRESSION: "",
        OTEL_EXPORTER_OTLP_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_TRACES_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_METRICS_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_LOGS_CLIENT_KEY: "",
        OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_TRACES_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_METRICS_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_LOGS_CLIENT_CERTIFICATE: "",
        OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_TRACES_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_METRICS_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_LOGS_PROTOCOL: "http/protobuf",
        OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE: "cumulative"
    };
    function Gf(r, e, t) {
        if (typeof t[r] > "u") return;
        let n = String(t[r]);
        e[r] = n.toLowerCase() === "true";
    }
    function Vf(r, e, t, n = -1 / 0, i = 1 / 0) {
        if (typeof t[r] < "u") {
            let s = Number(t[r]);
            isNaN(s) || (s < n ? e[r] = n : s > i ? e[r] = i : e[r] = s);
        }
    }
    function jf(r, e, t, n = Cf) {
        let i = t[r];
        typeof i == "string" && (e[r] = i.split(n).map((s)=>s.trim()));
    }
    var Ff = {
        ALL: Me.DiagLogLevel.ALL,
        VERBOSE: Me.DiagLogLevel.VERBOSE,
        DEBUG: Me.DiagLogLevel.DEBUG,
        INFO: Me.DiagLogLevel.INFO,
        WARN: Me.DiagLogLevel.WARN,
        ERROR: Me.DiagLogLevel.ERROR,
        NONE: Me.DiagLogLevel.NONE
    };
    function Hf(r, e, t) {
        let n = t[r];
        if (typeof n == "string") {
            let i = Ff[n.toUpperCase()];
            i != null && (e[r] = i);
        }
    }
    function Js(r) {
        let e = {};
        for(let t in I.DEFAULT_ENVIRONMENT){
            let n = t;
            switch(n){
                case "OTEL_LOG_LEVEL":
                    Hf(n, e, r);
                    break;
                default:
                    if (xf(n)) Gf(n, e, r);
                    else if (Uf(n)) Vf(n, e, r);
                    else if (qf(n)) jf(n, e, r);
                    else {
                        let i = r[n];
                        typeof i < "u" && i !== null && (e[n] = String(i));
                    }
            }
        }
        return e;
    }
    I.parseEnvironment = Js;
    function kf() {
        return typeof process < "u" && process && process.env ? Js(process.env) : Js(Nf._globalThis);
    }
    I.getEnvWithoutDefaults = kf;
});
var bc = c((Zr)=>{
    "use strict";
    Object.defineProperty(Zr, "__esModule", {
        value: !0
    });
    Zr.getEnv = void 0;
    var $f = ee("os"), Rc = Qr();
    function Xf() {
        let r = (0, Rc.parseEnvironment)(process.env);
        return Object.assign({
            HOSTNAME: $f.hostname()
        }, Rc.DEFAULT_ENVIRONMENT, r);
    }
    Zr.getEnv = Xf;
});
var Pc = c((Jr)=>{
    "use strict";
    Object.defineProperty(Jr, "__esModule", {
        value: !0
    });
    Jr._globalThis = void 0;
    Jr._globalThis = typeof globalThis == "object" ? globalThis : /*TURBOPACK member replacement*/ __turbopack_context__.g;
});
var vc = c((en)=>{
    "use strict";
    Object.defineProperty(en, "__esModule", {
        value: !0
    });
    en.hexToBase64 = void 0;
    function yc(r) {
        return r >= 48 && r <= 57 ? r - 48 : r >= 97 && r <= 102 ? r - 87 : r - 55;
    }
    var Wf = Buffer.alloc(8), Kf = Buffer.alloc(16);
    function zf(r) {
        let e;
        r.length === 16 ? e = Wf : r.length === 32 ? e = Kf : e = Buffer.alloc(r.length / 2);
        let t = 0;
        for(let n = 0; n < r.length; n += 2){
            let i = yc(r.charCodeAt(n)), s = yc(r.charCodeAt(n + 1));
            e.writeUInt8(i << 4 | s, t++);
        }
        return e.toString("base64");
    }
    en.hexToBase64 = zf;
});
var Mc = c((rn)=>{
    "use strict";
    Object.defineProperty(rn, "__esModule", {
        value: !0
    });
    rn.RandomIdGenerator = void 0;
    var Yf = 8, Lc = 16, eo = class {
        constructor(){
            this.generateTraceId = Ic(Lc), this.generateSpanId = Ic(Yf);
        }
    };
    rn.RandomIdGenerator = eo;
    var tn = Buffer.allocUnsafe(Lc);
    function Ic(r) {
        return function() {
            for(let t = 0; t < r / 4; t++)tn.writeUInt32BE(Math.random() * 2 ** 32 >>> 0, t * 4);
            for(let t = 0; t < r && !(tn[t] > 0); t++)t === r - 1 && (tn[r - 1] = 1);
            return tn.toString("hex", 0, r);
        };
    }
});
var Nc = c((nn)=>{
    "use strict";
    Object.defineProperty(nn, "__esModule", {
        value: !0
    });
    nn.otperformance = void 0;
    var Qf = ee("perf_hooks");
    nn.otperformance = Qf.performance;
});
var to = c((sn)=>{
    "use strict";
    Object.defineProperty(sn, "__esModule", {
        value: !0
    });
    sn.VERSION = void 0;
    sn.VERSION = "1.19.0";
});
var Cc = c((R)=>{
    "use strict";
    Object.defineProperty(R, "__esModule", {
        value: !0
    });
    R.MessageTypeValues = R.RpcGrpcStatusCodeValues = R.MessagingOperationValues = R.MessagingDestinationKindValues = R.HttpFlavorValues = R.NetHostConnectionSubtypeValues = R.NetHostConnectionTypeValues = R.NetTransportValues = R.FaasInvokedProviderValues = R.FaasDocumentOperationValues = R.FaasTriggerValues = R.DbCassandraConsistencyLevelValues = R.DbSystemValues = R.SemanticAttributes = void 0;
    R.SemanticAttributes = {
        AWS_LAMBDA_INVOKED_ARN: "aws.lambda.invoked_arn",
        DB_SYSTEM: "db.system",
        DB_CONNECTION_STRING: "db.connection_string",
        DB_USER: "db.user",
        DB_JDBC_DRIVER_CLASSNAME: "db.jdbc.driver_classname",
        DB_NAME: "db.name",
        DB_STATEMENT: "db.statement",
        DB_OPERATION: "db.operation",
        DB_MSSQL_INSTANCE_NAME: "db.mssql.instance_name",
        DB_CASSANDRA_KEYSPACE: "db.cassandra.keyspace",
        DB_CASSANDRA_PAGE_SIZE: "db.cassandra.page_size",
        DB_CASSANDRA_CONSISTENCY_LEVEL: "db.cassandra.consistency_level",
        DB_CASSANDRA_TABLE: "db.cassandra.table",
        DB_CASSANDRA_IDEMPOTENCE: "db.cassandra.idempotence",
        DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: "db.cassandra.speculative_execution_count",
        DB_CASSANDRA_COORDINATOR_ID: "db.cassandra.coordinator.id",
        DB_CASSANDRA_COORDINATOR_DC: "db.cassandra.coordinator.dc",
        DB_HBASE_NAMESPACE: "db.hbase.namespace",
        DB_REDIS_DATABASE_INDEX: "db.redis.database_index",
        DB_MONGODB_COLLECTION: "db.mongodb.collection",
        DB_SQL_TABLE: "db.sql.table",
        EXCEPTION_TYPE: "exception.type",
        EXCEPTION_MESSAGE: "exception.message",
        EXCEPTION_STACKTRACE: "exception.stacktrace",
        EXCEPTION_ESCAPED: "exception.escaped",
        FAAS_TRIGGER: "faas.trigger",
        FAAS_EXECUTION: "faas.execution",
        FAAS_DOCUMENT_COLLECTION: "faas.document.collection",
        FAAS_DOCUMENT_OPERATION: "faas.document.operation",
        FAAS_DOCUMENT_TIME: "faas.document.time",
        FAAS_DOCUMENT_NAME: "faas.document.name",
        FAAS_TIME: "faas.time",
        FAAS_CRON: "faas.cron",
        FAAS_COLDSTART: "faas.coldstart",
        FAAS_INVOKED_NAME: "faas.invoked_name",
        FAAS_INVOKED_PROVIDER: "faas.invoked_provider",
        FAAS_INVOKED_REGION: "faas.invoked_region",
        NET_TRANSPORT: "net.transport",
        NET_PEER_IP: "net.peer.ip",
        NET_PEER_PORT: "net.peer.port",
        NET_PEER_NAME: "net.peer.name",
        NET_HOST_IP: "net.host.ip",
        NET_HOST_PORT: "net.host.port",
        NET_HOST_NAME: "net.host.name",
        NET_HOST_CONNECTION_TYPE: "net.host.connection.type",
        NET_HOST_CONNECTION_SUBTYPE: "net.host.connection.subtype",
        NET_HOST_CARRIER_NAME: "net.host.carrier.name",
        NET_HOST_CARRIER_MCC: "net.host.carrier.mcc",
        NET_HOST_CARRIER_MNC: "net.host.carrier.mnc",
        NET_HOST_CARRIER_ICC: "net.host.carrier.icc",
        PEER_SERVICE: "peer.service",
        ENDUSER_ID: "enduser.id",
        ENDUSER_ROLE: "enduser.role",
        ENDUSER_SCOPE: "enduser.scope",
        THREAD_ID: "thread.id",
        THREAD_NAME: "thread.name",
        CODE_FUNCTION: "code.function",
        CODE_NAMESPACE: "code.namespace",
        CODE_FILEPATH: "code.filepath",
        CODE_LINENO: "code.lineno",
        HTTP_METHOD: "http.method",
        HTTP_URL: "http.url",
        HTTP_TARGET: "http.target",
        HTTP_HOST: "http.host",
        HTTP_SCHEME: "http.scheme",
        HTTP_STATUS_CODE: "http.status_code",
        HTTP_FLAVOR: "http.flavor",
        HTTP_USER_AGENT: "http.user_agent",
        HTTP_REQUEST_CONTENT_LENGTH: "http.request_content_length",
        HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: "http.request_content_length_uncompressed",
        HTTP_RESPONSE_CONTENT_LENGTH: "http.response_content_length",
        HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: "http.response_content_length_uncompressed",
        HTTP_SERVER_NAME: "http.server_name",
        HTTP_ROUTE: "http.route",
        HTTP_CLIENT_IP: "http.client_ip",
        AWS_DYNAMODB_TABLE_NAMES: "aws.dynamodb.table_names",
        AWS_DYNAMODB_CONSUMED_CAPACITY: "aws.dynamodb.consumed_capacity",
        AWS_DYNAMODB_ITEM_COLLECTION_METRICS: "aws.dynamodb.item_collection_metrics",
        AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: "aws.dynamodb.provisioned_read_capacity",
        AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: "aws.dynamodb.provisioned_write_capacity",
        AWS_DYNAMODB_CONSISTENT_READ: "aws.dynamodb.consistent_read",
        AWS_DYNAMODB_PROJECTION: "aws.dynamodb.projection",
        AWS_DYNAMODB_LIMIT: "aws.dynamodb.limit",
        AWS_DYNAMODB_ATTRIBUTES_TO_GET: "aws.dynamodb.attributes_to_get",
        AWS_DYNAMODB_INDEX_NAME: "aws.dynamodb.index_name",
        AWS_DYNAMODB_SELECT: "aws.dynamodb.select",
        AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: "aws.dynamodb.global_secondary_indexes",
        AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: "aws.dynamodb.local_secondary_indexes",
        AWS_DYNAMODB_EXCLUSIVE_START_TABLE: "aws.dynamodb.exclusive_start_table",
        AWS_DYNAMODB_TABLE_COUNT: "aws.dynamodb.table_count",
        AWS_DYNAMODB_SCAN_FORWARD: "aws.dynamodb.scan_forward",
        AWS_DYNAMODB_SEGMENT: "aws.dynamodb.segment",
        AWS_DYNAMODB_TOTAL_SEGMENTS: "aws.dynamodb.total_segments",
        AWS_DYNAMODB_COUNT: "aws.dynamodb.count",
        AWS_DYNAMODB_SCANNED_COUNT: "aws.dynamodb.scanned_count",
        AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: "aws.dynamodb.attribute_definitions",
        AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: "aws.dynamodb.global_secondary_index_updates",
        MESSAGING_SYSTEM: "messaging.system",
        MESSAGING_DESTINATION: "messaging.destination",
        MESSAGING_DESTINATION_KIND: "messaging.destination_kind",
        MESSAGING_TEMP_DESTINATION: "messaging.temp_destination",
        MESSAGING_PROTOCOL: "messaging.protocol",
        MESSAGING_PROTOCOL_VERSION: "messaging.protocol_version",
        MESSAGING_URL: "messaging.url",
        MESSAGING_MESSAGE_ID: "messaging.message_id",
        MESSAGING_CONVERSATION_ID: "messaging.conversation_id",
        MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: "messaging.message_payload_size_bytes",
        MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: "messaging.message_payload_compressed_size_bytes",
        MESSAGING_OPERATION: "messaging.operation",
        MESSAGING_CONSUMER_ID: "messaging.consumer_id",
        MESSAGING_RABBITMQ_ROUTING_KEY: "messaging.rabbitmq.routing_key",
        MESSAGING_KAFKA_MESSAGE_KEY: "messaging.kafka.message_key",
        MESSAGING_KAFKA_CONSUMER_GROUP: "messaging.kafka.consumer_group",
        MESSAGING_KAFKA_CLIENT_ID: "messaging.kafka.client_id",
        MESSAGING_KAFKA_PARTITION: "messaging.kafka.partition",
        MESSAGING_KAFKA_TOMBSTONE: "messaging.kafka.tombstone",
        RPC_SYSTEM: "rpc.system",
        RPC_SERVICE: "rpc.service",
        RPC_METHOD: "rpc.method",
        RPC_GRPC_STATUS_CODE: "rpc.grpc.status_code",
        RPC_JSONRPC_VERSION: "rpc.jsonrpc.version",
        RPC_JSONRPC_REQUEST_ID: "rpc.jsonrpc.request_id",
        RPC_JSONRPC_ERROR_CODE: "rpc.jsonrpc.error_code",
        RPC_JSONRPC_ERROR_MESSAGE: "rpc.jsonrpc.error_message",
        MESSAGE_TYPE: "message.type",
        MESSAGE_ID: "message.id",
        MESSAGE_COMPRESSED_SIZE: "message.compressed_size",
        MESSAGE_UNCOMPRESSED_SIZE: "message.uncompressed_size"
    };
    R.DbSystemValues = {
        OTHER_SQL: "other_sql",
        MSSQL: "mssql",
        MYSQL: "mysql",
        ORACLE: "oracle",
        DB2: "db2",
        POSTGRESQL: "postgresql",
        REDSHIFT: "redshift",
        HIVE: "hive",
        CLOUDSCAPE: "cloudscape",
        HSQLDB: "hsqldb",
        PROGRESS: "progress",
        MAXDB: "maxdb",
        HANADB: "hanadb",
        INGRES: "ingres",
        FIRSTSQL: "firstsql",
        EDB: "edb",
        CACHE: "cache",
        ADABAS: "adabas",
        FIREBIRD: "firebird",
        DERBY: "derby",
        FILEMAKER: "filemaker",
        INFORMIX: "informix",
        INSTANTDB: "instantdb",
        INTERBASE: "interbase",
        MARIADB: "mariadb",
        NETEZZA: "netezza",
        PERVASIVE: "pervasive",
        POINTBASE: "pointbase",
        SQLITE: "sqlite",
        SYBASE: "sybase",
        TERADATA: "teradata",
        VERTICA: "vertica",
        H2: "h2",
        COLDFUSION: "coldfusion",
        CASSANDRA: "cassandra",
        HBASE: "hbase",
        MONGODB: "mongodb",
        REDIS: "redis",
        COUCHBASE: "couchbase",
        COUCHDB: "couchdb",
        COSMOSDB: "cosmosdb",
        DYNAMODB: "dynamodb",
        NEO4J: "neo4j",
        GEODE: "geode",
        ELASTICSEARCH: "elasticsearch",
        MEMCACHED: "memcached",
        COCKROACHDB: "cockroachdb"
    };
    R.DbCassandraConsistencyLevelValues = {
        ALL: "all",
        EACH_QUORUM: "each_quorum",
        QUORUM: "quorum",
        LOCAL_QUORUM: "local_quorum",
        ONE: "one",
        TWO: "two",
        THREE: "three",
        LOCAL_ONE: "local_one",
        ANY: "any",
        SERIAL: "serial",
        LOCAL_SERIAL: "local_serial"
    };
    R.FaasTriggerValues = {
        DATASOURCE: "datasource",
        HTTP: "http",
        PUBSUB: "pubsub",
        TIMER: "timer",
        OTHER: "other"
    };
    R.FaasDocumentOperationValues = {
        INSERT: "insert",
        EDIT: "edit",
        DELETE: "delete"
    };
    R.FaasInvokedProviderValues = {
        ALIBABA_CLOUD: "alibaba_cloud",
        AWS: "aws",
        AZURE: "azure",
        GCP: "gcp"
    };
    R.NetTransportValues = {
        IP_TCP: "ip_tcp",
        IP_UDP: "ip_udp",
        IP: "ip",
        UNIX: "unix",
        PIPE: "pipe",
        INPROC: "inproc",
        OTHER: "other"
    };
    R.NetHostConnectionTypeValues = {
        WIFI: "wifi",
        WIRED: "wired",
        CELL: "cell",
        UNAVAILABLE: "unavailable",
        UNKNOWN: "unknown"
    };
    R.NetHostConnectionSubtypeValues = {
        GPRS: "gprs",
        EDGE: "edge",
        UMTS: "umts",
        CDMA: "cdma",
        EVDO_0: "evdo_0",
        EVDO_A: "evdo_a",
        CDMA2000_1XRTT: "cdma2000_1xrtt",
        HSDPA: "hsdpa",
        HSUPA: "hsupa",
        HSPA: "hspa",
        IDEN: "iden",
        EVDO_B: "evdo_b",
        LTE: "lte",
        EHRPD: "ehrpd",
        HSPAP: "hspap",
        GSM: "gsm",
        TD_SCDMA: "td_scdma",
        IWLAN: "iwlan",
        NR: "nr",
        NRNSA: "nrnsa",
        LTE_CA: "lte_ca"
    };
    R.HttpFlavorValues = {
        HTTP_1_0: "1.0",
        HTTP_1_1: "1.1",
        HTTP_2_0: "2.0",
        SPDY: "SPDY",
        QUIC: "QUIC"
    };
    R.MessagingDestinationKindValues = {
        QUEUE: "queue",
        TOPIC: "topic"
    };
    R.MessagingOperationValues = {
        RECEIVE: "receive",
        PROCESS: "process"
    };
    R.RpcGrpcStatusCodeValues = {
        OK: 0,
        CANCELLED: 1,
        UNKNOWN: 2,
        INVALID_ARGUMENT: 3,
        DEADLINE_EXCEEDED: 4,
        NOT_FOUND: 5,
        ALREADY_EXISTS: 6,
        PERMISSION_DENIED: 7,
        RESOURCE_EXHAUSTED: 8,
        FAILED_PRECONDITION: 9,
        ABORTED: 10,
        OUT_OF_RANGE: 11,
        UNIMPLEMENTED: 12,
        INTERNAL: 13,
        UNAVAILABLE: 14,
        DATA_LOSS: 15,
        UNAUTHENTICATED: 16
    };
    R.MessageTypeValues = {
        SENT: "SENT",
        RECEIVED: "RECEIVED"
    };
});
var wc = c((Xe)=>{
    "use strict";
    var Zf = Xe && Xe.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Jf = Xe && Xe.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Zf(e, r, t);
    };
    Object.defineProperty(Xe, "__esModule", {
        value: !0
    });
    Jf(Cc(), Xe);
});
var xc = c((X)=>{
    "use strict";
    Object.defineProperty(X, "__esModule", {
        value: !0
    });
    X.TelemetrySdkLanguageValues = X.OsTypeValues = X.HostArchValues = X.AwsEcsLaunchtypeValues = X.CloudPlatformValues = X.CloudProviderValues = X.SemanticResourceAttributes = void 0;
    X.SemanticResourceAttributes = {
        CLOUD_PROVIDER: "cloud.provider",
        CLOUD_ACCOUNT_ID: "cloud.account.id",
        CLOUD_REGION: "cloud.region",
        CLOUD_AVAILABILITY_ZONE: "cloud.availability_zone",
        CLOUD_PLATFORM: "cloud.platform",
        AWS_ECS_CONTAINER_ARN: "aws.ecs.container.arn",
        AWS_ECS_CLUSTER_ARN: "aws.ecs.cluster.arn",
        AWS_ECS_LAUNCHTYPE: "aws.ecs.launchtype",
        AWS_ECS_TASK_ARN: "aws.ecs.task.arn",
        AWS_ECS_TASK_FAMILY: "aws.ecs.task.family",
        AWS_ECS_TASK_REVISION: "aws.ecs.task.revision",
        AWS_EKS_CLUSTER_ARN: "aws.eks.cluster.arn",
        AWS_LOG_GROUP_NAMES: "aws.log.group.names",
        AWS_LOG_GROUP_ARNS: "aws.log.group.arns",
        AWS_LOG_STREAM_NAMES: "aws.log.stream.names",
        AWS_LOG_STREAM_ARNS: "aws.log.stream.arns",
        CONTAINER_NAME: "container.name",
        CONTAINER_ID: "container.id",
        CONTAINER_RUNTIME: "container.runtime",
        CONTAINER_IMAGE_NAME: "container.image.name",
        CONTAINER_IMAGE_TAG: "container.image.tag",
        DEPLOYMENT_ENVIRONMENT: "deployment.environment",
        DEVICE_ID: "device.id",
        DEVICE_MODEL_IDENTIFIER: "device.model.identifier",
        DEVICE_MODEL_NAME: "device.model.name",
        FAAS_NAME: "faas.name",
        FAAS_ID: "faas.id",
        FAAS_VERSION: "faas.version",
        FAAS_INSTANCE: "faas.instance",
        FAAS_MAX_MEMORY: "faas.max_memory",
        HOST_ID: "host.id",
        HOST_NAME: "host.name",
        HOST_TYPE: "host.type",
        HOST_ARCH: "host.arch",
        HOST_IMAGE_NAME: "host.image.name",
        HOST_IMAGE_ID: "host.image.id",
        HOST_IMAGE_VERSION: "host.image.version",
        K8S_CLUSTER_NAME: "k8s.cluster.name",
        K8S_NODE_NAME: "k8s.node.name",
        K8S_NODE_UID: "k8s.node.uid",
        K8S_NAMESPACE_NAME: "k8s.namespace.name",
        K8S_POD_UID: "k8s.pod.uid",
        K8S_POD_NAME: "k8s.pod.name",
        K8S_CONTAINER_NAME: "k8s.container.name",
        K8S_REPLICASET_UID: "k8s.replicaset.uid",
        K8S_REPLICASET_NAME: "k8s.replicaset.name",
        K8S_DEPLOYMENT_UID: "k8s.deployment.uid",
        K8S_DEPLOYMENT_NAME: "k8s.deployment.name",
        K8S_STATEFULSET_UID: "k8s.statefulset.uid",
        K8S_STATEFULSET_NAME: "k8s.statefulset.name",
        K8S_DAEMONSET_UID: "k8s.daemonset.uid",
        K8S_DAEMONSET_NAME: "k8s.daemonset.name",
        K8S_JOB_UID: "k8s.job.uid",
        K8S_JOB_NAME: "k8s.job.name",
        K8S_CRONJOB_UID: "k8s.cronjob.uid",
        K8S_CRONJOB_NAME: "k8s.cronjob.name",
        OS_TYPE: "os.type",
        OS_DESCRIPTION: "os.description",
        OS_NAME: "os.name",
        OS_VERSION: "os.version",
        PROCESS_PID: "process.pid",
        PROCESS_EXECUTABLE_NAME: "process.executable.name",
        PROCESS_EXECUTABLE_PATH: "process.executable.path",
        PROCESS_COMMAND: "process.command",
        PROCESS_COMMAND_LINE: "process.command_line",
        PROCESS_COMMAND_ARGS: "process.command_args",
        PROCESS_OWNER: "process.owner",
        PROCESS_RUNTIME_NAME: "process.runtime.name",
        PROCESS_RUNTIME_VERSION: "process.runtime.version",
        PROCESS_RUNTIME_DESCRIPTION: "process.runtime.description",
        SERVICE_NAME: "service.name",
        SERVICE_NAMESPACE: "service.namespace",
        SERVICE_INSTANCE_ID: "service.instance.id",
        SERVICE_VERSION: "service.version",
        TELEMETRY_SDK_NAME: "telemetry.sdk.name",
        TELEMETRY_SDK_LANGUAGE: "telemetry.sdk.language",
        TELEMETRY_SDK_VERSION: "telemetry.sdk.version",
        TELEMETRY_AUTO_VERSION: "telemetry.auto.version",
        WEBENGINE_NAME: "webengine.name",
        WEBENGINE_VERSION: "webengine.version",
        WEBENGINE_DESCRIPTION: "webengine.description"
    };
    X.CloudProviderValues = {
        ALIBABA_CLOUD: "alibaba_cloud",
        AWS: "aws",
        AZURE: "azure",
        GCP: "gcp"
    };
    X.CloudPlatformValues = {
        ALIBABA_CLOUD_ECS: "alibaba_cloud_ecs",
        ALIBABA_CLOUD_FC: "alibaba_cloud_fc",
        AWS_EC2: "aws_ec2",
        AWS_ECS: "aws_ecs",
        AWS_EKS: "aws_eks",
        AWS_LAMBDA: "aws_lambda",
        AWS_ELASTIC_BEANSTALK: "aws_elastic_beanstalk",
        AZURE_VM: "azure_vm",
        AZURE_CONTAINER_INSTANCES: "azure_container_instances",
        AZURE_AKS: "azure_aks",
        AZURE_FUNCTIONS: "azure_functions",
        AZURE_APP_SERVICE: "azure_app_service",
        GCP_COMPUTE_ENGINE: "gcp_compute_engine",
        GCP_CLOUD_RUN: "gcp_cloud_run",
        GCP_KUBERNETES_ENGINE: "gcp_kubernetes_engine",
        GCP_CLOUD_FUNCTIONS: "gcp_cloud_functions",
        GCP_APP_ENGINE: "gcp_app_engine"
    };
    X.AwsEcsLaunchtypeValues = {
        EC2: "ec2",
        FARGATE: "fargate"
    };
    X.HostArchValues = {
        AMD64: "amd64",
        ARM32: "arm32",
        ARM64: "arm64",
        IA64: "ia64",
        PPC32: "ppc32",
        PPC64: "ppc64",
        X86: "x86"
    };
    X.OsTypeValues = {
        WINDOWS: "windows",
        LINUX: "linux",
        DARWIN: "darwin",
        FREEBSD: "freebsd",
        NETBSD: "netbsd",
        OPENBSD: "openbsd",
        DRAGONFLYBSD: "dragonflybsd",
        HPUX: "hpux",
        AIX: "aix",
        SOLARIS: "solaris",
        Z_OS: "z_os"
    };
    X.TelemetrySdkLanguageValues = {
        CPP: "cpp",
        DOTNET: "dotnet",
        ERLANG: "erlang",
        GO: "go",
        JAVA: "java",
        NODEJS: "nodejs",
        PHP: "php",
        PYTHON: "python",
        RUBY: "ruby",
        WEBJS: "webjs"
    };
});
var Dc = c((We)=>{
    "use strict";
    var eE = We && We.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), tE = We && We.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && eE(e, r, t);
    };
    Object.defineProperty(We, "__esModule", {
        value: !0
    });
    tE(xc(), We);
});
var se = c((Ne)=>{
    "use strict";
    var rE = Ne && Ne.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Uc = Ne && Ne.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && rE(e, r, t);
    };
    Object.defineProperty(Ne, "__esModule", {
        value: !0
    });
    Uc(wc(), Ne);
    Uc(Dc(), Ne);
});
var Bc = c((on)=>{
    "use strict";
    Object.defineProperty(on, "__esModule", {
        value: !0
    });
    on.SDK_INFO = void 0;
    var nE = to(), hr = se();
    on.SDK_INFO = {
        [hr.SemanticResourceAttributes.TELEMETRY_SDK_NAME]: "opentelemetry",
        [hr.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: "node",
        [hr.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE]: hr.TelemetrySdkLanguageValues.NODEJS,
        [hr.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]: nE.VERSION
    };
});
var qc = c((an)=>{
    "use strict";
    Object.defineProperty(an, "__esModule", {
        value: !0
    });
    an.unrefTimer = void 0;
    function iE(r) {
        r.unref();
    }
    an.unrefTimer = iE;
});
var Gc = c((te)=>{
    "use strict";
    var sE = te && te.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Ke = te && te.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && sE(e, r, t);
    };
    Object.defineProperty(te, "__esModule", {
        value: !0
    });
    Ke(bc(), te);
    Ke(Pc(), te);
    Ke(vc(), te);
    Ke(Mc(), te);
    Ke(Nc(), te);
    Ke(Bc(), te);
    Ke(qc(), te);
});
var ro = c((ze)=>{
    "use strict";
    var oE = ze && ze.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), aE = ze && ze.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && oE(e, r, t);
    };
    Object.defineProperty(ze, "__esModule", {
        value: !0
    });
    aE(Gc(), ze);
});
var Hc = c((v)=>{
    "use strict";
    Object.defineProperty(v, "__esModule", {
        value: !0
    });
    v.addHrTimes = v.isTimeInput = v.isTimeInputHrTime = v.hrTimeToMicroseconds = v.hrTimeToMilliseconds = v.hrTimeToNanoseconds = v.hrTimeToTimeStamp = v.hrTimeDuration = v.timeInputToHrTime = v.hrTime = v.getTimeOrigin = v.millisToHrTime = void 0;
    var no = ro(), Vc = 9, uE = 6, cE = Math.pow(10, uE), un = Math.pow(10, Vc);
    function fr(r) {
        let e = r / 1e3, t = Math.trunc(e), n = Math.round(r % 1e3 * cE);
        return [
            t,
            n
        ];
    }
    v.millisToHrTime = fr;
    function io() {
        let r = no.otperformance.timeOrigin;
        if (typeof r != "number") {
            let e = no.otperformance;
            r = e.timing && e.timing.fetchStart;
        }
        return r;
    }
    v.getTimeOrigin = io;
    function jc(r) {
        let e = fr(io()), t = fr(typeof r == "number" ? r : no.otperformance.now());
        return Fc(e, t);
    }
    v.hrTime = jc;
    function lE(r) {
        if (so(r)) return r;
        if (typeof r == "number") return r < io() ? jc(r) : fr(r);
        if (r instanceof Date) return fr(r.getTime());
        throw TypeError("Invalid input type");
    }
    v.timeInputToHrTime = lE;
    function dE(r, e) {
        let t = e[0] - r[0], n = e[1] - r[1];
        return n < 0 && (t -= 1, n += un), [
            t,
            n
        ];
    }
    v.hrTimeDuration = dE;
    function _E(r) {
        let e = Vc, t = `${"0".repeat(e)}${r[1]}Z`, n = t.substr(t.length - e - 1);
        return new Date(r[0] * 1e3).toISOString().replace("000Z", n);
    }
    v.hrTimeToTimeStamp = _E;
    function pE(r) {
        return r[0] * un + r[1];
    }
    v.hrTimeToNanoseconds = pE;
    function hE(r) {
        return r[0] * 1e3 + r[1] / 1e6;
    }
    v.hrTimeToMilliseconds = hE;
    function fE(r) {
        return r[0] * 1e6 + r[1] / 1e3;
    }
    v.hrTimeToMicroseconds = fE;
    function so(r) {
        return Array.isArray(r) && r.length === 2 && typeof r[0] == "number" && typeof r[1] == "number";
    }
    v.isTimeInputHrTime = so;
    function EE(r) {
        return so(r) || typeof r == "number" || r instanceof Date;
    }
    v.isTimeInput = EE;
    function Fc(r, e) {
        let t = [
            r[0] + e[0],
            r[1] + e[1]
        ];
        return t[1] >= un && (t[1] -= un, t[0] += 1), t;
    }
    v.addHrTimes = Fc;
});
var $c = c((kc)=>{
    "use strict";
    Object.defineProperty(kc, "__esModule", {
        value: !0
    });
});
var Xc = c((Er)=>{
    "use strict";
    Object.defineProperty(Er, "__esModule", {
        value: !0
    });
    Er.ExportResultCode = void 0;
    var mE;
    (function(r) {
        r[r.SUCCESS = 0] = "SUCCESS", r[r.FAILED = 1] = "FAILED";
    })(mE = Er.ExportResultCode || (Er.ExportResultCode = {}));
});
var Kc = c((cn)=>{
    "use strict";
    Object.defineProperty(cn, "__esModule", {
        value: !0
    });
    cn.CompositePropagator = void 0;
    var Wc = (p(), f(d)), oo = class {
        constructor(e = {}){
            var t;
            this._propagators = (t = e.propagators) !== null && t !== void 0 ? t : [], this._fields = Array.from(new Set(this._propagators.map((n)=>typeof n.fields == "function" ? n.fields() : []).reduce((n, i)=>n.concat(i), [])));
        }
        inject(e, t, n) {
            for (let i of this._propagators)try {
                i.inject(e, t, n);
            } catch (s) {
                Wc.diag.warn(`Failed to inject with ${i.constructor.name}. Err: ${s.message}`);
            }
        }
        extract(e, t, n) {
            return this._propagators.reduce((i, s)=>{
                try {
                    return s.extract(i, t, n);
                } catch (o) {
                    Wc.diag.warn(`Failed to inject with ${s.constructor.name}. Err: ${o.message}`);
                }
                return i;
            }, e);
        }
        fields() {
            return this._fields.slice();
        }
    };
    cn.CompositePropagator = oo;
});
var zc = c((gt)=>{
    "use strict";
    Object.defineProperty(gt, "__esModule", {
        value: !0
    });
    gt.validateValue = gt.validateKey = void 0;
    var ao = "[_0-9a-z-*/]", gE = `[a-z]${ao}{0,255}`, TE = `[a-z0-9]${ao}{0,240}@[a-z]${ao}{0,13}`, SE = new RegExp(`^(?:${gE}|${TE})$`), AE = /^[ -~]{0,255}[!-~]$/, OE = /,|=/;
    function RE(r) {
        return SE.test(r);
    }
    gt.validateKey = RE;
    function bE(r) {
        return AE.test(r) && !OE.test(r);
    }
    gt.validateValue = bE;
});
var co = c((ln)=>{
    "use strict";
    Object.defineProperty(ln, "__esModule", {
        value: !0
    });
    ln.TraceState = void 0;
    var Yc = zc(), Qc = 32, PE = 512, Zc = ",", Jc = "=", uo = class r {
        constructor(e){
            this._internalState = new Map, e && this._parse(e);
        }
        set(e, t) {
            let n = this._clone();
            return n._internalState.has(e) && n._internalState.delete(e), n._internalState.set(e, t), n;
        }
        unset(e) {
            let t = this._clone();
            return t._internalState.delete(e), t;
        }
        get(e) {
            return this._internalState.get(e);
        }
        serialize() {
            return this._keys().reduce((e, t)=>(e.push(t + Jc + this.get(t)), e), []).join(Zc);
        }
        _parse(e) {
            e.length > PE || (this._internalState = e.split(Zc).reverse().reduce((t, n)=>{
                let i = n.trim(), s = i.indexOf(Jc);
                if (s !== -1) {
                    let o = i.slice(0, s), a = i.slice(s + 1, n.length);
                    (0, Yc.validateKey)(o) && (0, Yc.validateValue)(a) && t.set(o, a);
                }
                return t;
            }, new Map), this._internalState.size > Qc && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Qc))));
        }
        _keys() {
            return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
            let e = new r;
            return e._internalState = new Map(this._internalState), e;
        }
    };
    ln.TraceState = uo;
});
var tl = c((W)=>{
    "use strict";
    Object.defineProperty(W, "__esModule", {
        value: !0
    });
    W.W3CTraceContextPropagator = W.parseTraceParent = W.TRACE_STATE_HEADER = W.TRACE_PARENT_HEADER = void 0;
    var dn = (p(), f(d)), yE = _r(), vE = co();
    W.TRACE_PARENT_HEADER = "traceparent";
    W.TRACE_STATE_HEADER = "tracestate";
    var IE = "00", LE = "(?!ff)[\\da-f]{2}", ME = "(?![0]{32})[\\da-f]{32}", NE = "(?![0]{16})[\\da-f]{16}", CE = "[\\da-f]{2}", wE = new RegExp(`^\\s?(${LE})-(${ME})-(${NE})-(${CE})(-.*)?\\s?$`);
    function el(r) {
        let e = wE.exec(r);
        return !e || e[1] === "00" && e[5] ? null : {
            traceId: e[2],
            spanId: e[3],
            traceFlags: parseInt(e[4], 16)
        };
    }
    W.parseTraceParent = el;
    var lo = class {
        inject(e, t, n) {
            let i = dn.trace.getSpanContext(e);
            if (!i || (0, yE.isTracingSuppressed)(e) || !(0, dn.isSpanContextValid)(i)) return;
            let s = `${IE}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags || dn.TraceFlags.NONE).toString(16)}`;
            n.set(t, W.TRACE_PARENT_HEADER, s), i.traceState && n.set(t, W.TRACE_STATE_HEADER, i.traceState.serialize());
        }
        extract(e, t, n) {
            let i = n.get(t, W.TRACE_PARENT_HEADER);
            if (!i) return e;
            let s = Array.isArray(i) ? i[0] : i;
            if (typeof s != "string") return e;
            let o = el(s);
            if (!o) return e;
            o.isRemote = !0;
            let a = n.get(t, W.TRACE_STATE_HEADER);
            if (a) {
                let u = Array.isArray(a) ? a.join(",") : a;
                o.traceState = new vE.TraceState(typeof u == "string" ? u : void 0);
            }
            return dn.trace.setSpanContext(e, o);
        }
        fields() {
            return [
                W.TRACE_PARENT_HEADER,
                W.TRACE_STATE_HEADER
            ];
        }
    };
    W.W3CTraceContextPropagator = lo;
});
var nl = c((rl)=>{
    "use strict";
    Object.defineProperty(rl, "__esModule", {
        value: !0
    });
});
var il = c((ce)=>{
    "use strict";
    Object.defineProperty(ce, "__esModule", {
        value: !0
    });
    ce.getRPCMetadata = ce.deleteRPCMetadata = ce.setRPCMetadata = ce.RPCType = void 0;
    var xE = (p(), f(d)), _o = (0, xE.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA"), DE;
    (function(r) {
        r.HTTP = "http";
    })(DE = ce.RPCType || (ce.RPCType = {}));
    function UE(r, e) {
        return r.setValue(_o, e);
    }
    ce.setRPCMetadata = UE;
    function BE(r) {
        return r.deleteValue(_o);
    }
    ce.deleteRPCMetadata = BE;
    function qE(r) {
        return r.getValue(_o);
    }
    ce.getRPCMetadata = qE;
});
var ho = c((_n)=>{
    "use strict";
    Object.defineProperty(_n, "__esModule", {
        value: !0
    });
    _n.AlwaysOffSampler = void 0;
    var GE = (p(), f(d)), po = class {
        shouldSample() {
            return {
                decision: GE.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return "AlwaysOffSampler";
        }
    };
    _n.AlwaysOffSampler = po;
});
var Eo = c((pn)=>{
    "use strict";
    Object.defineProperty(pn, "__esModule", {
        value: !0
    });
    pn.AlwaysOnSampler = void 0;
    var VE = (p(), f(d)), fo = class {
        shouldSample() {
            return {
                decision: VE.SamplingDecision.RECORD_AND_SAMPLED
            };
        }
        toString() {
            return "AlwaysOnSampler";
        }
    };
    pn.AlwaysOnSampler = fo;
});
var ol = c((fn)=>{
    "use strict";
    Object.defineProperty(fn, "__esModule", {
        value: !0
    });
    fn.ParentBasedSampler = void 0;
    var hn = (p(), f(d)), jE = Qs(), sl = ho(), mo = Eo(), go = class {
        constructor(e){
            var t, n, i, s;
            this._root = e.root, this._root || ((0, jE.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new mo.AlwaysOnSampler), this._remoteParentSampled = (t = e.remoteParentSampled) !== null && t !== void 0 ? t : new mo.AlwaysOnSampler, this._remoteParentNotSampled = (n = e.remoteParentNotSampled) !== null && n !== void 0 ? n : new sl.AlwaysOffSampler, this._localParentSampled = (i = e.localParentSampled) !== null && i !== void 0 ? i : new mo.AlwaysOnSampler, this._localParentNotSampled = (s = e.localParentNotSampled) !== null && s !== void 0 ? s : new sl.AlwaysOffSampler;
        }
        shouldSample(e, t, n, i, s, o) {
            let a = hn.trace.getSpanContext(e);
            return !a || !(0, hn.isSpanContextValid)(a) ? this._root.shouldSample(e, t, n, i, s, o) : a.isRemote ? a.traceFlags & hn.TraceFlags.SAMPLED ? this._remoteParentSampled.shouldSample(e, t, n, i, s, o) : this._remoteParentNotSampled.shouldSample(e, t, n, i, s, o) : a.traceFlags & hn.TraceFlags.SAMPLED ? this._localParentSampled.shouldSample(e, t, n, i, s, o) : this._localParentNotSampled.shouldSample(e, t, n, i, s, o);
        }
        toString() {
            return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
        }
    };
    fn.ParentBasedSampler = go;
});
var al = c((En)=>{
    "use strict";
    Object.defineProperty(En, "__esModule", {
        value: !0
    });
    En.TraceIdRatioBasedSampler = void 0;
    var To = (p(), f(d)), So = class {
        constructor(e = 0){
            this._ratio = e, this._ratio = this._normalize(e), this._upperBound = Math.floor(this._ratio * 4294967295);
        }
        shouldSample(e, t) {
            return {
                decision: (0, To.isValidTraceId)(t) && this._accumulate(t) < this._upperBound ? To.SamplingDecision.RECORD_AND_SAMPLED : To.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return `TraceIdRatioBased{${this._ratio}}`;
        }
        _normalize(e) {
            return typeof e != "number" || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
        }
        _accumulate(e) {
            let t = 0;
            for(let n = 0; n < e.length / 8; n++){
                let i = n * 8, s = parseInt(e.slice(i, i + 8), 16);
                t = (t ^ s) >>> 0;
            }
            return t;
        }
    };
    En.TraceIdRatioBasedSampler = So;
});
var _l = c((mn)=>{
    "use strict";
    Object.defineProperty(mn, "__esModule", {
        value: !0
    });
    mn.isPlainObject = void 0;
    var FE = "[object Object]", HE = "[object Null]", kE = "[object Undefined]", $E = Function.prototype, ul = $E.toString, XE = ul.call(Object), WE = KE(Object.getPrototypeOf, Object), cl = Object.prototype, ll = cl.hasOwnProperty, Ye = Symbol ? Symbol.toStringTag : void 0, dl = cl.toString;
    function KE(r, e) {
        return function(t) {
            return r(e(t));
        };
    }
    function zE(r) {
        if (!YE(r) || QE(r) !== FE) return !1;
        let e = WE(r);
        if (e === null) return !0;
        let t = ll.call(e, "constructor") && e.constructor;
        return typeof t == "function" && t instanceof t && ul.call(t) === XE;
    }
    mn.isPlainObject = zE;
    function YE(r) {
        return r != null && typeof r == "object";
    }
    function QE(r) {
        return r == null ? r === void 0 ? kE : HE : Ye && Ye in Object(r) ? ZE(r) : JE(r);
    }
    function ZE(r) {
        let e = ll.call(r, Ye), t = r[Ye], n = !1;
        try {
            r[Ye] = void 0, n = !0;
        } catch  {}
        let i = dl.call(r);
        return n && (e ? r[Ye] = t : delete r[Ye]), i;
    }
    function JE(r) {
        return dl.call(r);
    }
});
var ml = c((Sn)=>{
    "use strict";
    Object.defineProperty(Sn, "__esModule", {
        value: !0
    });
    Sn.merge = void 0;
    var pl = _l(), em = 20;
    function tm(...r) {
        let e = r.shift(), t = new WeakMap;
        for(; r.length > 0;)e = fl(e, r.shift(), 0, t);
        return e;
    }
    Sn.merge = tm;
    function Ao(r) {
        return Tn(r) ? r.slice() : r;
    }
    function fl(r, e, t = 0, n) {
        let i;
        if (!(t > em)) {
            if (t++, gn(r) || gn(e) || El(e)) i = Ao(e);
            else if (Tn(r)) {
                if (i = r.slice(), Tn(e)) for(let s = 0, o = e.length; s < o; s++)i.push(Ao(e[s]));
                else if (mr(e)) {
                    let s = Object.keys(e);
                    for(let o = 0, a = s.length; o < a; o++){
                        let u = s[o];
                        i[u] = Ao(e[u]);
                    }
                }
            } else if (mr(r)) if (mr(e)) {
                if (!rm(r, e)) return e;
                i = Object.assign({}, r);
                let s = Object.keys(e);
                for(let o = 0, a = s.length; o < a; o++){
                    let u = s[o], l = e[u];
                    if (gn(l)) typeof l > "u" ? delete i[u] : i[u] = l;
                    else {
                        let _ = i[u], E = l;
                        if (hl(r, u, n) || hl(e, u, n)) delete i[u];
                        else {
                            if (mr(_) && mr(E)) {
                                let O = n.get(_) || [], x = n.get(E) || [];
                                O.push({
                                    obj: r,
                                    key: u
                                }), x.push({
                                    obj: e,
                                    key: u
                                }), n.set(_, O), n.set(E, x);
                            }
                            i[u] = fl(i[u], l, t, n);
                        }
                    }
                }
            } else i = e;
            return i;
        }
    }
    function hl(r, e, t) {
        let n = t.get(r[e]) || [];
        for(let i = 0, s = n.length; i < s; i++){
            let o = n[i];
            if (o.key === e && o.obj === r) return !0;
        }
        return !1;
    }
    function Tn(r) {
        return Array.isArray(r);
    }
    function El(r) {
        return typeof r == "function";
    }
    function mr(r) {
        return !gn(r) && !Tn(r) && !El(r) && typeof r == "object";
    }
    function gn(r) {
        return typeof r == "string" || typeof r == "number" || typeof r == "boolean" || typeof r > "u" || r instanceof Date || r instanceof RegExp || r === null;
    }
    function rm(r, e) {
        return !(!(0, pl.isPlainObject)(r) || !(0, pl.isPlainObject)(e));
    }
});
var gl = c((Tt)=>{
    "use strict";
    Object.defineProperty(Tt, "__esModule", {
        value: !0
    });
    Tt.callWithTimeout = Tt.TimeoutError = void 0;
    var An = class r extends Error {
        constructor(e){
            super(e), Object.setPrototypeOf(this, r.prototype);
        }
    };
    Tt.TimeoutError = An;
    function nm(r, e) {
        let t, n = new Promise(function(s, o) {
            t = setTimeout(function() {
                o(new An("Operation timed out."));
            }, e);
        });
        return Promise.race([
            r,
            n
        ]).then((i)=>(clearTimeout(t), i), (i)=>{
            throw clearTimeout(t), i;
        });
    }
    Tt.callWithTimeout = nm;
});
var Sl = c((St)=>{
    "use strict";
    Object.defineProperty(St, "__esModule", {
        value: !0
    });
    St.isUrlIgnored = St.urlMatches = void 0;
    function Tl(r, e) {
        return typeof e == "string" ? r === e : !!r.match(e);
    }
    St.urlMatches = Tl;
    function im(r, e) {
        if (!e) return !1;
        for (let t of e)if (Tl(r, t)) return !0;
        return !1;
    }
    St.isUrlIgnored = im;
});
var Al = c((On)=>{
    "use strict";
    Object.defineProperty(On, "__esModule", {
        value: !0
    });
    On.isWrapped = void 0;
    function sm(r) {
        return typeof r == "function" && typeof r.__original == "function" && typeof r.__unwrap == "function" && r.__wrapped === !0;
    }
    On.isWrapped = sm;
});
var Ol = c((Rn)=>{
    "use strict";
    Object.defineProperty(Rn, "__esModule", {
        value: !0
    });
    Rn.Deferred = void 0;
    var Oo = class {
        constructor(){
            this._promise = new Promise((e, t)=>{
                this._resolve = e, this._reject = t;
            });
        }
        get promise() {
            return this._promise;
        }
        resolve(e) {
            this._resolve(e);
        }
        reject(e) {
            this._reject(e);
        }
    };
    Rn.Deferred = Oo;
});
var Rl = c((bn)=>{
    "use strict";
    Object.defineProperty(bn, "__esModule", {
        value: !0
    });
    bn.BindOnceFuture = void 0;
    var om = Ol(), Ro = class {
        constructor(e, t){
            this._callback = e, this._that = t, this._isCalled = !1, this._deferred = new om.Deferred;
        }
        get isCalled() {
            return this._isCalled;
        }
        get promise() {
            return this._deferred.promise;
        }
        call(...e) {
            if (!this._isCalled) {
                this._isCalled = !0;
                try {
                    Promise.resolve(this._callback.call(this._that, ...e)).then((t)=>this._deferred.resolve(t), (t)=>this._deferred.reject(t));
                } catch (t) {
                    this._deferred.reject(t);
                }
            }
            return this._deferred.promise;
        }
    };
    bn.BindOnceFuture = Ro;
});
var Pl = c((Pn)=>{
    "use strict";
    Object.defineProperty(Pn, "__esModule", {
        value: !0
    });
    Pn._export = void 0;
    var bl = (p(), f(d)), am = _r();
    function um(r, e) {
        return new Promise((t)=>{
            bl.context.with((0, am.suppressTracing)(bl.context.active()), ()=>{
                r.export(e, (n)=>{
                    t(n);
                });
            });
        });
    }
    Pn._export = um;
});
var T = c((g)=>{
    "use strict";
    var cm = g && g.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), P = g && g.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && cm(e, r, t);
    };
    Object.defineProperty(g, "__esModule", {
        value: !0
    });
    g.internal = g.baggageUtils = void 0;
    P(hc(), g);
    P(fc(), g);
    P(Sc(), g);
    P(Qs(), g);
    P(Ys(), g);
    P(Hc(), g);
    P($c(), g);
    P(Xc(), g);
    g.baggageUtils = $s();
    P(ro(), g);
    P(Kc(), g);
    P(tl(), g);
    P(nl(), g);
    P(il(), g);
    P(ho(), g);
    P(Eo(), g);
    P(ol(), g);
    P(al(), g);
    P(_r(), g);
    P(co(), g);
    P(Qr(), g);
    P(ml(), g);
    P(Zs(), g);
    P(gl(), g);
    P(Sl(), g);
    P(Al(), g);
    P(Rl(), g);
    P(to(), g);
    var lm = Pl();
    g.internal = {
        _export: lm._export
    };
});
var yl = c((yn)=>{
    "use strict";
    Object.defineProperty(yn, "__esModule", {
        value: !0
    });
    yn.ExceptionEventName = void 0;
    yn.ExceptionEventName = "exception";
});
var Po = c((vn)=>{
    "use strict";
    Object.defineProperty(vn, "__esModule", {
        value: !0
    });
    vn.Span = void 0;
    var fe = (p(), f(d)), K = T(), Qe = se(), dm = yl(), bo = class {
        constructor(e, t, n, i, s, o, a = [], u, l, _){
            this.attributes = {}, this.links = [], this.events = [], this._droppedAttributesCount = 0, this._droppedEventsCount = 0, this._droppedLinksCount = 0, this.status = {
                code: fe.SpanStatusCode.UNSET
            }, this.endTime = [
                0,
                0
            ], this._ended = !1, this._duration = [
                -1,
                -1
            ], this.name = n, this._spanContext = i, this.parentSpanId = o, this.kind = s, this.links = a;
            let E = Date.now();
            this._performanceStartTime = K.otperformance.now(), this._performanceOffset = E - (this._performanceStartTime + (0, K.getTimeOrigin)()), this._startTimeProvided = u != null, this.startTime = this._getTime(u ?? E), this.resource = e.resource, this.instrumentationLibrary = e.instrumentationLibrary, this._spanLimits = e.getSpanLimits(), _ != null && this.setAttributes(_), this._spanProcessor = e.getActiveSpanProcessor(), this._spanProcessor.onStart(this, t), this._attributeValueLengthLimit = this._spanLimits.attributeValueLengthLimit || 0;
        }
        spanContext() {
            return this._spanContext;
        }
        setAttribute(e, t) {
            return t == null || this._isSpanEnded() ? this : e.length === 0 ? (fe.diag.warn(`Invalid attribute key: ${e}`), this) : (0, K.isAttributeValue)(t) ? Object.keys(this.attributes).length >= this._spanLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, e) ? (this._droppedAttributesCount++, this) : (this.attributes[e] = this._truncateToSize(t), this) : (fe.diag.warn(`Invalid attribute value set for key: ${e}`), this);
        }
        setAttributes(e) {
            for (let [t, n] of Object.entries(e))this.setAttribute(t, n);
            return this;
        }
        addEvent(e, t, n) {
            if (this._isSpanEnded()) return this;
            if (this._spanLimits.eventCountLimit === 0) return fe.diag.warn("No events allowed."), this._droppedEventsCount++, this;
            this.events.length >= this._spanLimits.eventCountLimit && (fe.diag.warn("Dropping extra events."), this.events.shift(), this._droppedEventsCount++), (0, K.isTimeInput)(t) && ((0, K.isTimeInput)(n) || (n = t), t = void 0);
            let i = (0, K.sanitizeAttributes)(t);
            return this.events.push({
                name: e,
                attributes: i,
                time: this._getTime(n),
                droppedAttributesCount: 0
            }), this;
        }
        setStatus(e) {
            return this._isSpanEnded() ? this : (this.status = e, this);
        }
        updateName(e) {
            return this._isSpanEnded() ? this : (this.name = e, this);
        }
        end(e) {
            if (this._isSpanEnded()) {
                fe.diag.error(`${this.name} ${this._spanContext.traceId}-${this._spanContext.spanId} - You can only call end() on a span once.`);
                return;
            }
            this._ended = !0, this.endTime = this._getTime(e), this._duration = (0, K.hrTimeDuration)(this.startTime, this.endTime), this._duration[0] < 0 && (fe.diag.warn("Inconsistent start and end time, startTime > endTime. Setting span duration to 0ms.", this.startTime, this.endTime), this.endTime = this.startTime.slice(), this._duration = [
                0,
                0
            ]), this._spanProcessor.onEnd(this);
        }
        _getTime(e) {
            if (typeof e == "number" && e < K.otperformance.now()) return (0, K.hrTime)(e + this._performanceOffset);
            if (typeof e == "number") return (0, K.millisToHrTime)(e);
            if (e instanceof Date) return (0, K.millisToHrTime)(e.getTime());
            if ((0, K.isTimeInputHrTime)(e)) return e;
            if (this._startTimeProvided) return (0, K.millisToHrTime)(Date.now());
            let t = K.otperformance.now() - this._performanceStartTime;
            return (0, K.addHrTimes)(this.startTime, (0, K.millisToHrTime)(t));
        }
        isRecording() {
            return this._ended === !1;
        }
        recordException(e, t) {
            let n = {};
            typeof e == "string" ? n[Qe.SemanticAttributes.EXCEPTION_MESSAGE] = e : e && (e.code ? n[Qe.SemanticAttributes.EXCEPTION_TYPE] = e.code.toString() : e.name && (n[Qe.SemanticAttributes.EXCEPTION_TYPE] = e.name), e.message && (n[Qe.SemanticAttributes.EXCEPTION_MESSAGE] = e.message), e.stack && (n[Qe.SemanticAttributes.EXCEPTION_STACKTRACE] = e.stack)), n[Qe.SemanticAttributes.EXCEPTION_TYPE] || n[Qe.SemanticAttributes.EXCEPTION_MESSAGE] ? this.addEvent(dm.ExceptionEventName, n, t) : fe.diag.warn(`Failed to record an exception ${e}`);
        }
        get duration() {
            return this._duration;
        }
        get ended() {
            return this._ended;
        }
        get droppedAttributesCount() {
            return this._droppedAttributesCount;
        }
        get droppedEventsCount() {
            return this._droppedEventsCount;
        }
        get droppedLinksCount() {
            return this._droppedLinksCount;
        }
        _isSpanEnded() {
            return this._ended && fe.diag.warn(`Can not execute the operation on ended Span {traceId: ${this._spanContext.traceId}, spanId: ${this._spanContext.spanId}}`), this._ended;
        }
        _truncateToLimitUtil(e, t) {
            return e.length <= t ? e : e.substr(0, t);
        }
        _truncateToSize(e) {
            let t = this._attributeValueLengthLimit;
            return t <= 0 ? (fe.diag.warn(`Attribute value limit must be positive, got ${t}`), e) : typeof e == "string" ? this._truncateToLimitUtil(e, t) : Array.isArray(e) ? e.map((n)=>typeof n == "string" ? this._truncateToLimitUtil(n, t) : n) : e;
        }
    };
    vn.Span = bo;
});
var Tr = c((gr)=>{
    "use strict";
    Object.defineProperty(gr, "__esModule", {
        value: !0
    });
    gr.SamplingDecision = void 0;
    var _m;
    (function(r) {
        r[r.NOT_RECORD = 0] = "NOT_RECORD", r[r.RECORD = 1] = "RECORD", r[r.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
    })(_m = gr.SamplingDecision || (gr.SamplingDecision = {}));
});
var Ln = c((In)=>{
    "use strict";
    Object.defineProperty(In, "__esModule", {
        value: !0
    });
    In.AlwaysOffSampler = void 0;
    var pm = Tr(), yo = class {
        shouldSample() {
            return {
                decision: pm.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return "AlwaysOffSampler";
        }
    };
    In.AlwaysOffSampler = yo;
});
var Nn = c((Mn)=>{
    "use strict";
    Object.defineProperty(Mn, "__esModule", {
        value: !0
    });
    Mn.AlwaysOnSampler = void 0;
    var hm = Tr(), vo = class {
        shouldSample() {
            return {
                decision: hm.SamplingDecision.RECORD_AND_SAMPLED
            };
        }
        toString() {
            return "AlwaysOnSampler";
        }
    };
    Mn.AlwaysOnSampler = vo;
});
var Mo = c((wn)=>{
    "use strict";
    Object.defineProperty(wn, "__esModule", {
        value: !0
    });
    wn.ParentBasedSampler = void 0;
    var Cn = (p(), f(d)), fm = T(), vl = Ln(), Io = Nn(), Lo = class {
        constructor(e){
            var t, n, i, s;
            this._root = e.root, this._root || ((0, fm.globalErrorHandler)(new Error("ParentBasedSampler must have a root sampler configured")), this._root = new Io.AlwaysOnSampler), this._remoteParentSampled = (t = e.remoteParentSampled) !== null && t !== void 0 ? t : new Io.AlwaysOnSampler, this._remoteParentNotSampled = (n = e.remoteParentNotSampled) !== null && n !== void 0 ? n : new vl.AlwaysOffSampler, this._localParentSampled = (i = e.localParentSampled) !== null && i !== void 0 ? i : new Io.AlwaysOnSampler, this._localParentNotSampled = (s = e.localParentNotSampled) !== null && s !== void 0 ? s : new vl.AlwaysOffSampler;
        }
        shouldSample(e, t, n, i, s, o) {
            let a = Cn.trace.getSpanContext(e);
            return !a || !(0, Cn.isSpanContextValid)(a) ? this._root.shouldSample(e, t, n, i, s, o) : a.isRemote ? a.traceFlags & Cn.TraceFlags.SAMPLED ? this._remoteParentSampled.shouldSample(e, t, n, i, s, o) : this._remoteParentNotSampled.shouldSample(e, t, n, i, s, o) : a.traceFlags & Cn.TraceFlags.SAMPLED ? this._localParentSampled.shouldSample(e, t, n, i, s, o) : this._localParentNotSampled.shouldSample(e, t, n, i, s, o);
        }
        toString() {
            return `ParentBased{root=${this._root.toString()}, remoteParentSampled=${this._remoteParentSampled.toString()}, remoteParentNotSampled=${this._remoteParentNotSampled.toString()}, localParentSampled=${this._localParentSampled.toString()}, localParentNotSampled=${this._localParentNotSampled.toString()}}`;
        }
    };
    wn.ParentBasedSampler = Lo;
});
var Co = c((xn)=>{
    "use strict";
    Object.defineProperty(xn, "__esModule", {
        value: !0
    });
    xn.TraceIdRatioBasedSampler = void 0;
    var Em = (p(), f(d)), Il = Tr(), No = class {
        constructor(e = 0){
            this._ratio = e, this._ratio = this._normalize(e), this._upperBound = Math.floor(this._ratio * 4294967295);
        }
        shouldSample(e, t) {
            return {
                decision: (0, Em.isValidTraceId)(t) && this._accumulate(t) < this._upperBound ? Il.SamplingDecision.RECORD_AND_SAMPLED : Il.SamplingDecision.NOT_RECORD
            };
        }
        toString() {
            return `TraceIdRatioBased{${this._ratio}}`;
        }
        _normalize(e) {
            return typeof e != "number" || isNaN(e) ? 0 : e >= 1 ? 1 : e <= 0 ? 0 : e;
        }
        _accumulate(e) {
            let t = 0;
            for(let n = 0; n < e.length / 8; n++){
                let i = n * 8, s = parseInt(e.slice(i, i + 8), 16);
                t = (t ^ s) >>> 0;
            }
            return t;
        }
    };
    xn.TraceIdRatioBasedSampler = No;
});
var Do = c((Ot)=>{
    "use strict";
    Object.defineProperty(Ot, "__esModule", {
        value: !0
    });
    Ot.buildSamplerFromEnv = Ot.loadDefaultConfig = void 0;
    var Dn = (p(), f(d)), F = T(), Ll = Ln(), wo = Nn(), xo = Mo(), Ml = Co(), mm = (0, F.getEnv)(), gm = F.TracesSamplerValues.AlwaysOn, At = 1;
    function Tm() {
        return {
            sampler: Cl(mm),
            forceFlushTimeoutMillis: 3e4,
            generalLimits: {
                attributeValueLengthLimit: (0, F.getEnv)().OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: (0, F.getEnv)().OTEL_ATTRIBUTE_COUNT_LIMIT
            },
            spanLimits: {
                attributeValueLengthLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT,
                linkCountLimit: (0, F.getEnv)().OTEL_SPAN_LINK_COUNT_LIMIT,
                eventCountLimit: (0, F.getEnv)().OTEL_SPAN_EVENT_COUNT_LIMIT,
                attributePerEventCountLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_EVENT_COUNT_LIMIT,
                attributePerLinkCountLimit: (0, F.getEnv)().OTEL_SPAN_ATTRIBUTE_PER_LINK_COUNT_LIMIT
            }
        };
    }
    Ot.loadDefaultConfig = Tm;
    function Cl(r = (0, F.getEnv)()) {
        switch(r.OTEL_TRACES_SAMPLER){
            case F.TracesSamplerValues.AlwaysOn:
                return new wo.AlwaysOnSampler;
            case F.TracesSamplerValues.AlwaysOff:
                return new Ll.AlwaysOffSampler;
            case F.TracesSamplerValues.ParentBasedAlwaysOn:
                return new xo.ParentBasedSampler({
                    root: new wo.AlwaysOnSampler
                });
            case F.TracesSamplerValues.ParentBasedAlwaysOff:
                return new xo.ParentBasedSampler({
                    root: new Ll.AlwaysOffSampler
                });
            case F.TracesSamplerValues.TraceIdRatio:
                return new Ml.TraceIdRatioBasedSampler(Nl(r));
            case F.TracesSamplerValues.ParentBasedTraceIdRatio:
                return new xo.ParentBasedSampler({
                    root: new Ml.TraceIdRatioBasedSampler(Nl(r))
                });
            default:
                return Dn.diag.error(`OTEL_TRACES_SAMPLER value "${r.OTEL_TRACES_SAMPLER} invalid, defaulting to ${gm}".`), new wo.AlwaysOnSampler;
        }
    }
    Ot.buildSamplerFromEnv = Cl;
    function Nl(r) {
        if (r.OTEL_TRACES_SAMPLER_ARG === void 0 || r.OTEL_TRACES_SAMPLER_ARG === "") return Dn.diag.error(`OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${At}.`), At;
        let e = Number(r.OTEL_TRACES_SAMPLER_ARG);
        return isNaN(e) ? (Dn.diag.error(`OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${At}.`), At) : e < 0 || e > 1 ? (Dn.diag.error(`OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${At}.`), At) : e;
    }
});
var Bo = c((Rt)=>{
    "use strict";
    Object.defineProperty(Rt, "__esModule", {
        value: !0
    });
    Rt.reconfigureLimits = Rt.mergeConfig = void 0;
    var wl = Do(), Uo = T();
    function Sm(r) {
        let e = {
            sampler: (0, wl.buildSamplerFromEnv)()
        }, t = (0, wl.loadDefaultConfig)(), n = Object.assign({}, t, e, r);
        return n.generalLimits = Object.assign({}, t.generalLimits, r.generalLimits || {}), n.spanLimits = Object.assign({}, t.spanLimits, r.spanLimits || {}), n;
    }
    Rt.mergeConfig = Sm;
    function Am(r) {
        var e, t, n, i, s, o, a, u, l, _, E, O;
        let x = Object.assign({}, r.spanLimits), J = (0, Uo.getEnvWithoutDefaults)();
        return x.attributeCountLimit = (o = (s = (i = (t = (e = r.spanLimits) === null || e === void 0 ? void 0 : e.attributeCountLimit) !== null && t !== void 0 ? t : (n = r.generalLimits) === null || n === void 0 ? void 0 : n.attributeCountLimit) !== null && i !== void 0 ? i : J.OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT) !== null && s !== void 0 ? s : J.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && o !== void 0 ? o : Uo.DEFAULT_ATTRIBUTE_COUNT_LIMIT, x.attributeValueLengthLimit = (O = (E = (_ = (u = (a = r.spanLimits) === null || a === void 0 ? void 0 : a.attributeValueLengthLimit) !== null && u !== void 0 ? u : (l = r.generalLimits) === null || l === void 0 ? void 0 : l.attributeValueLengthLimit) !== null && _ !== void 0 ? _ : J.OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && E !== void 0 ? E : J.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && O !== void 0 ? O : Uo.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT, Object.assign({}, r, {
            spanLimits: x
        });
    }
    Rt.reconfigureLimits = Am;
});
var xl = c((Un)=>{
    "use strict";
    Object.defineProperty(Un, "__esModule", {
        value: !0
    });
    Un.BatchSpanProcessorBase = void 0;
    var bt = (p(), f(d)), Ze = T(), qo = class {
        constructor(e, t){
            this._exporter = e, this._isExporting = !1, this._finishedSpans = [], this._droppedSpansCount = 0;
            let n = (0, Ze.getEnv)();
            this._maxExportBatchSize = typeof t?.maxExportBatchSize == "number" ? t.maxExportBatchSize : n.OTEL_BSP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = typeof t?.maxQueueSize == "number" ? t.maxQueueSize : n.OTEL_BSP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = typeof t?.scheduledDelayMillis == "number" ? t.scheduledDelayMillis : n.OTEL_BSP_SCHEDULE_DELAY, this._exportTimeoutMillis = typeof t?.exportTimeoutMillis == "number" ? t.exportTimeoutMillis : n.OTEL_BSP_EXPORT_TIMEOUT, this._shutdownOnce = new Ze.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (bt.diag.warn("BatchSpanProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize);
        }
        forceFlush() {
            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
        }
        onStart(e, t) {}
        onEnd(e) {
            this._shutdownOnce.isCalled || e.spanContext().traceFlags & bt.TraceFlags.SAMPLED && this._addToBuffer(e);
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        _shutdown() {
            return Promise.resolve().then(()=>this.onShutdown()).then(()=>this._flushAll()).then(()=>this._exporter.shutdown());
        }
        _addToBuffer(e) {
            if (this._finishedSpans.length >= this._maxQueueSize) {
                this._droppedSpansCount === 0 && bt.diag.debug("maxQueueSize reached, dropping spans"), this._droppedSpansCount++;
                return;
            }
            this._droppedSpansCount > 0 && (bt.diag.warn(`Dropped ${this._droppedSpansCount} spans because maxQueueSize reached`), this._droppedSpansCount = 0), this._finishedSpans.push(e), this._maybeStartTimer();
        }
        _flushAll() {
            return new Promise((e, t)=>{
                let n = [], i = Math.ceil(this._finishedSpans.length / this._maxExportBatchSize);
                for(let s = 0, o = i; s < o; s++)n.push(this._flushOneBatch());
                Promise.all(n).then(()=>{
                    e();
                }).catch(t);
            });
        }
        _flushOneBatch() {
            return this._clearTimer(), this._finishedSpans.length === 0 ? Promise.resolve() : new Promise((e, t)=>{
                let n = setTimeout(()=>{
                    t(new Error("Timeout"));
                }, this._exportTimeoutMillis);
                bt.context.with((0, Ze.suppressTracing)(bt.context.active()), ()=>{
                    let i = this._finishedSpans.splice(0, this._maxExportBatchSize), s = ()=>this._exporter.export(i, (a)=>{
                            var u;
                            clearTimeout(n), a.code === Ze.ExportResultCode.SUCCESS ? e() : t((u = a.error) !== null && u !== void 0 ? u : new Error("BatchSpanProcessor: span export failed"));
                        }), o = i.map((a)=>a.resource).filter((a)=>a.asyncAttributesPending);
                    o.length === 0 ? s() : Promise.all(o.map((a)=>{
                        var u;
                        return (u = a.waitForAsyncAttributes) === null || u === void 0 ? void 0 : u.call(a);
                    })).then(s, (a)=>{
                        (0, Ze.globalErrorHandler)(a), t(a);
                    });
                });
            });
        }
        _maybeStartTimer() {
            if (this._isExporting) return;
            let e = ()=>{
                this._isExporting = !0, this._flushOneBatch().then(()=>{
                    this._isExporting = !1, this._finishedSpans.length > 0 && (this._clearTimer(), this._maybeStartTimer());
                }).catch((t)=>{
                    this._isExporting = !1, (0, Ze.globalErrorHandler)(t);
                });
            };
            if (this._finishedSpans.length >= this._maxExportBatchSize) return e();
            this._timer === void 0 && (this._timer = setTimeout(()=>e(), this._scheduledDelayMillis), (0, Ze.unrefTimer)(this._timer));
        }
        _clearTimer() {
            this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0);
        }
    };
    Un.BatchSpanProcessorBase = qo;
});
var Dl = c((Bn)=>{
    "use strict";
    Object.defineProperty(Bn, "__esModule", {
        value: !0
    });
    Bn.BatchSpanProcessor = void 0;
    var Om = xl(), Go = class extends Om.BatchSpanProcessorBase {
        onShutdown() {}
    };
    Bn.BatchSpanProcessor = Go;
});
var ql = c((Gn)=>{
    "use strict";
    Object.defineProperty(Gn, "__esModule", {
        value: !0
    });
    Gn.RandomIdGenerator = void 0;
    var Rm = 8, Bl = 16, Vo = class {
        constructor(){
            this.generateTraceId = Ul(Bl), this.generateSpanId = Ul(Rm);
        }
    };
    Gn.RandomIdGenerator = Vo;
    var qn = Buffer.allocUnsafe(Bl);
    function Ul(r) {
        return function() {
            for(let t = 0; t < r / 4; t++)qn.writeUInt32BE(Math.random() * 2 ** 32 >>> 0, t * 4);
            for(let t = 0; t < r && !(qn[t] > 0); t++)t === r - 1 && (qn[r - 1] = 1);
            return qn.toString("hex", 0, r);
        };
    }
});
var Vl = c((Ce)=>{
    "use strict";
    var bm = Ce && Ce.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Gl = Ce && Ce.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && bm(e, r, t);
    };
    Object.defineProperty(Ce, "__esModule", {
        value: !0
    });
    Gl(Dl(), Ce);
    Gl(ql(), Ce);
});
var Vn = c((Je)=>{
    "use strict";
    var Pm = Je && Je.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), ym = Je && Je.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Pm(e, r, t);
    };
    Object.defineProperty(Je, "__esModule", {
        value: !0
    });
    ym(Vl(), Je);
});
var jl = c((Fn)=>{
    "use strict";
    Object.defineProperty(Fn, "__esModule", {
        value: !0
    });
    Fn.Tracer = void 0;
    var H = (p(), f(d)), jn = T(), vm = Po(), Im = Bo(), Lm = Vn(), jo = class {
        constructor(e, t, n){
            this._tracerProvider = n;
            let i = (0, Im.mergeConfig)(t);
            this._sampler = i.sampler, this._generalLimits = i.generalLimits, this._spanLimits = i.spanLimits, this._idGenerator = t.idGenerator || new Lm.RandomIdGenerator, this.resource = n.resource, this.instrumentationLibrary = e;
        }
        startSpan(e, t = {}, n = H.context.active()) {
            var i, s, o;
            t.root && (n = H.trace.deleteSpan(n));
            let a = H.trace.getSpan(n);
            if ((0, jn.isTracingSuppressed)(n)) return H.diag.debug("Instrumentation suppressed, returning Noop Span"), H.trace.wrapSpanContext(H.INVALID_SPAN_CONTEXT);
            let u = a?.spanContext(), l = this._idGenerator.generateSpanId(), _, E, O;
            !u || !H.trace.isSpanContextValid(u) ? _ = this._idGenerator.generateTraceId() : (_ = u.traceId, E = u.traceState, O = u.spanId);
            let x = (i = t.kind) !== null && i !== void 0 ? i : H.SpanKind.INTERNAL, J = ((s = t.links) !== null && s !== void 0 ? s : []).map((ht)=>({
                    context: ht.context,
                    attributes: (0, jn.sanitizeAttributes)(ht.attributes)
                })), y = (0, jn.sanitizeAttributes)(t.attributes), k = this._sampler.shouldSample(n, _, e, x, y, J);
            E = (o = k.traceState) !== null && o !== void 0 ? o : E;
            let S = k.decision === H.SamplingDecision.RECORD_AND_SAMPLED ? H.TraceFlags.SAMPLED : H.TraceFlags.NONE, b = {
                traceId: _,
                spanId: l,
                traceFlags: S,
                traceState: E
            };
            if (k.decision === H.SamplingDecision.NOT_RECORD) return H.diag.debug("Recording is off, propagating context in a non-recording span"), H.trace.wrapSpanContext(b);
            let ye = (0, jn.sanitizeAttributes)(Object.assign(y, k.attributes));
            return new vm.Span(this, n, e, b, x, O, J, t.startTime, void 0, ye);
        }
        startActiveSpan(e, t, n, i) {
            let s, o, a;
            if (arguments.length < 2) return;
            arguments.length === 2 ? a = t : arguments.length === 3 ? (s = t, a = n) : (s = t, o = n, a = i);
            let u = o ?? H.context.active(), l = this.startSpan(e, s, u), _ = H.trace.setSpan(u, l);
            return H.context.with(_, a, void 0, l);
        }
        getGeneralLimits() {
            return this._generalLimits;
        }
        getSpanLimits() {
            return this._spanLimits;
        }
        getActiveSpanProcessor() {
            return this._tracerProvider.getActiveSpanProcessor();
        }
    };
    Fn.Tracer = jo;
});
var Fl = c((Hn)=>{
    "use strict";
    Object.defineProperty(Hn, "__esModule", {
        value: !0
    });
    Hn.defaultServiceName = void 0;
    function Mm() {
        return `unknown_service:${process.argv0}`;
    }
    Hn.defaultServiceName = Mm;
});
var Fo = c((Pt)=>{
    "use strict";
    Object.defineProperty(Pt, "__esModule", {
        value: !0
    });
    Pt.normalizeType = Pt.normalizeArch = void 0;
    var Nm = (r)=>{
        switch(r){
            case "arm":
                return "arm32";
            case "ppc":
                return "ppc32";
            case "x64":
                return "amd64";
            default:
                return r;
        }
    };
    Pt.normalizeArch = Nm;
    var Cm = (r)=>{
        switch(r){
            case "sunos":
                return "solaris";
            case "win32":
                return "windows";
            default:
                return r;
        }
    };
    Pt.normalizeType = Cm;
});
var $n = c((kn)=>{
    "use strict";
    Object.defineProperty(kn, "__esModule", {
        value: !0
    });
    kn.execAsync = void 0;
    var wm = ee("child_process"), xm = ee("util");
    kn.execAsync = xm.promisify(wm.exec);
});
var Hl = c((Xn)=>{
    "use strict";
    Object.defineProperty(Xn, "__esModule", {
        value: !0
    });
    Xn.getMachineId = void 0;
    var Dm = $n(), Um = (p(), f(d));
    async function Bm() {
        try {
            let e = (await (0, Dm.execAsync)('ioreg -rd1 -c "IOPlatformExpertDevice"')).stdout.split(`
`).find((n)=>n.includes("IOPlatformUUID"));
            if (!e) return "";
            let t = e.split('" = "');
            if (t.length === 2) return t[1].slice(0, -1);
        } catch (r) {
            Um.diag.debug(`error reading machine id: ${r}`);
        }
        return "";
    }
    Xn.getMachineId = Bm;
});
var kl = c((Wn)=>{
    "use strict";
    Object.defineProperty(Wn, "__esModule", {
        value: !0
    });
    Wn.getMachineId = void 0;
    var qm = ee("fs"), Gm = (p(), f(d));
    async function Vm() {
        let r = [
            "/etc/machine-id",
            "/var/lib/dbus/machine-id"
        ];
        for (let e of r)try {
            return (await qm.promises.readFile(e, {
                encoding: "utf8"
            })).trim();
        } catch (t) {
            Gm.diag.debug(`error reading machine id: ${t}`);
        }
        return "";
    }
    Wn.getMachineId = Vm;
});
var Xl = c((Kn)=>{
    "use strict";
    Object.defineProperty(Kn, "__esModule", {
        value: !0
    });
    Kn.getMachineId = void 0;
    var jm = ee("fs"), Fm = $n(), $l = (p(), f(d));
    async function Hm() {
        try {
            return (await jm.promises.readFile("/etc/hostid", {
                encoding: "utf8"
            })).trim();
        } catch (r) {
            $l.diag.debug(`error reading machine id: ${r}`);
        }
        try {
            return (await (0, Fm.execAsync)("kenv -q smbios.system.uuid")).stdout.trim();
        } catch (r) {
            $l.diag.debug(`error reading machine id: ${r}`);
        }
        return "";
    }
    Kn.getMachineId = Hm;
});
var Kl = c((zn)=>{
    "use strict";
    Object.defineProperty(zn, "__esModule", {
        value: !0
    });
    zn.getMachineId = void 0;
    var Wl = ee("process"), km = $n(), $m = (p(), f(d));
    async function Xm() {
        let r = "QUERY HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Cryptography /v MachineGuid", e = "%windir%\\System32\\REG.exe";
        Wl.arch === "ia32" && "PROCESSOR_ARCHITEW6432" in Wl.env && (e = "%windir%\\sysnative\\cmd.exe /c " + e);
        try {
            let n = (await (0, km.execAsync)(`${e} ${r}`)).stdout.split("REG_SZ");
            if (n.length === 2) return n[1].trim();
        } catch (t) {
            $m.diag.debug(`error reading machine id: ${t}`);
        }
        return "";
    }
    zn.getMachineId = Xm;
});
var zl = c((Yn)=>{
    "use strict";
    Object.defineProperty(Yn, "__esModule", {
        value: !0
    });
    Yn.getMachineId = void 0;
    var Wm = (p(), f(d));
    async function Km() {
        return Wm.diag.debug("could not read machine-id: unsupported platform"), "";
    }
    Yn.getMachineId = Km;
});
var Yl = c((Ae)=>{
    "use strict";
    Object.defineProperty(Ae, "__esModule", {
        value: !0
    });
    Ae.getMachineId = void 0;
    var zm = ee("process"), yt;
    Ae.getMachineId = yt;
    switch(zm.platform){
        case "darwin":
            Ae.getMachineId = yt = Hl().getMachineId;
            break;
        case "linux":
            Ae.getMachineId = yt = kl().getMachineId;
            break;
        case "freebsd":
            Ae.getMachineId = yt = Xl().getMachineId;
            break;
        case "win32":
            Ae.getMachineId = yt = Kl().getMachineId;
            break;
        default:
            Ae.getMachineId = yt = zl().getMachineId;
    }
});
var $o = c((Qn)=>{
    "use strict";
    Object.defineProperty(Qn, "__esModule", {
        value: !0
    });
    Qn.hostDetectorSync = void 0;
    var Ho = se(), Ym = et(), Ql = ee("os"), Qm = Fo(), Zm = Yl(), ko = class {
        detect(e) {
            let t = {
                [Ho.SemanticResourceAttributes.HOST_NAME]: (0, Ql.hostname)(),
                [Ho.SemanticResourceAttributes.HOST_ARCH]: (0, Qm.normalizeArch)((0, Ql.arch)())
            };
            return new Ym.Resource(t, this._getAsyncAttributes());
        }
        _getAsyncAttributes() {
            return (0, Zm.getMachineId)().then((e)=>{
                let t = {};
                return e && (t[Ho.SemanticResourceAttributes.HOST_ID] = e), t;
            });
        }
    };
    Qn.hostDetectorSync = new ko;
});
var Zl = c((Zn)=>{
    "use strict";
    Object.defineProperty(Zn, "__esModule", {
        value: !0
    });
    Zn.hostDetector = void 0;
    var Jm = $o(), Xo = class {
        detect(e) {
            return Promise.resolve(Jm.hostDetectorSync.detect(e));
        }
    };
    Zn.hostDetector = new Xo;
});
var Ko = c((Jn)=>{
    "use strict";
    Object.defineProperty(Jn, "__esModule", {
        value: !0
    });
    Jn.osDetectorSync = void 0;
    var Jl = se(), eg = et(), ed = ee("os"), tg = Fo(), Wo = class {
        detect(e) {
            let t = {
                [Jl.SemanticResourceAttributes.OS_TYPE]: (0, tg.normalizeType)((0, ed.platform)()),
                [Jl.SemanticResourceAttributes.OS_VERSION]: (0, ed.release)()
            };
            return new eg.Resource(t);
        }
    };
    Jn.osDetectorSync = new Wo;
});
var td = c((ei)=>{
    "use strict";
    Object.defineProperty(ei, "__esModule", {
        value: !0
    });
    ei.osDetector = void 0;
    var rg = Ko(), zo = class {
        detect(e) {
            return Promise.resolve(rg.osDetectorSync.detect(e));
        }
    };
    ei.osDetector = new zo;
});
var Qo = c((ti)=>{
    "use strict";
    Object.defineProperty(ti, "__esModule", {
        value: !0
    });
    ti.processDetectorSync = void 0;
    var ng = (p(), f(d)), Oe = se(), ig = et(), sg = ee("os"), Yo = class {
        detect(e) {
            let t = {
                [Oe.SemanticResourceAttributes.PROCESS_PID]: process.pid,
                [Oe.SemanticResourceAttributes.PROCESS_EXECUTABLE_NAME]: process.title,
                [Oe.SemanticResourceAttributes.PROCESS_EXECUTABLE_PATH]: process.execPath,
                [Oe.SemanticResourceAttributes.PROCESS_COMMAND_ARGS]: [
                    process.argv[0],
                    ...process.execArgv,
                    ...process.argv.slice(1)
                ],
                [Oe.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION]: process.versions.node,
                [Oe.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: "nodejs",
                [Oe.SemanticResourceAttributes.PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
            };
            process.argv.length > 1 && (t[Oe.SemanticResourceAttributes.PROCESS_COMMAND] = process.argv[1]);
            try {
                let n = sg.userInfo();
                t[Oe.SemanticResourceAttributes.PROCESS_OWNER] = n.username;
            } catch (n) {
                ng.diag.debug(`error obtaining process owner: ${n}`);
            }
            return new ig.Resource(t);
        }
    };
    ti.processDetectorSync = new Yo;
});
var rd = c((ri)=>{
    "use strict";
    Object.defineProperty(ri, "__esModule", {
        value: !0
    });
    ri.processDetector = void 0;
    var og = Qo(), Zo = class {
        detect(e) {
            return Promise.resolve(og.processDetectorSync.detect(e));
        }
    };
    ri.processDetector = new Zo;
});
var nd = c((re)=>{
    "use strict";
    var ag = re && re.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), tt = re && re.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && ag(e, r, t);
    };
    Object.defineProperty(re, "__esModule", {
        value: !0
    });
    tt(Fl(), re);
    tt(Zl(), re);
    tt(td(), re);
    tt($o(), re);
    tt(Ko(), re);
    tt(rd(), re);
    tt(Qo(), re);
});
var Jo = c((rt)=>{
    "use strict";
    var ug = rt && rt.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), cg = rt && rt.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && ug(e, r, t);
    };
    Object.defineProperty(rt, "__esModule", {
        value: !0
    });
    cg(nd(), rt);
});
var et = c((ni)=>{
    "use strict";
    Object.defineProperty(ni, "__esModule", {
        value: !0
    });
    ni.Resource = void 0;
    var id = (p(), f(d)), nt = se(), ea = T(), lg = Jo(), Sr = class r {
        constructor(e, t){
            var n;
            this._attributes = e, this.asyncAttributesPending = t != null, this._syncAttributes = (n = this._attributes) !== null && n !== void 0 ? n : {}, this._asyncAttributesPromise = t?.then((i)=>(this._attributes = Object.assign({}, this._attributes, i), this.asyncAttributesPending = !1, i), (i)=>(id.diag.debug("a resource's async attributes promise rejected: %s", i), this.asyncAttributesPending = !1, {}));
        }
        static empty() {
            return r.EMPTY;
        }
        static default() {
            return new r({
                [nt.SemanticResourceAttributes.SERVICE_NAME]: (0, lg.defaultServiceName)(),
                [nt.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE]: ea.SDK_INFO[nt.SemanticResourceAttributes.TELEMETRY_SDK_LANGUAGE],
                [nt.SemanticResourceAttributes.TELEMETRY_SDK_NAME]: ea.SDK_INFO[nt.SemanticResourceAttributes.TELEMETRY_SDK_NAME],
                [nt.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]: ea.SDK_INFO[nt.SemanticResourceAttributes.TELEMETRY_SDK_VERSION]
            });
        }
        get attributes() {
            var e;
            return this.asyncAttributesPending && id.diag.error("Accessing resource attributes before async attributes settled"), (e = this._attributes) !== null && e !== void 0 ? e : {};
        }
        async waitForAsyncAttributes() {
            this.asyncAttributesPending && await this._asyncAttributesPromise;
        }
        merge(e) {
            var t;
            if (!e) return this;
            let n = Object.assign(Object.assign({}, this._syncAttributes), (t = e._syncAttributes) !== null && t !== void 0 ? t : e.attributes);
            if (!this._asyncAttributesPromise && !e._asyncAttributesPromise) return new r(n);
            let i = Promise.all([
                this._asyncAttributesPromise,
                e._asyncAttributesPromise
            ]).then(([s, o])=>{
                var a;
                return Object.assign(Object.assign(Object.assign(Object.assign({}, this._syncAttributes), s), (a = e._syncAttributes) !== null && a !== void 0 ? a : e.attributes), o);
            });
            return new r(n, i);
        }
    };
    ni.Resource = Sr;
    Sr.EMPTY = new Sr({});
});
var od = c((sd)=>{
    "use strict";
    Object.defineProperty(sd, "__esModule", {
        value: !0
    });
});
var ud = c((ad)=>{
    "use strict";
    Object.defineProperty(ad, "__esModule", {
        value: !0
    });
});
var ld = c((cd)=>{
    "use strict";
    Object.defineProperty(cd, "__esModule", {
        value: !0
    });
});
var dd = c((ii)=>{
    "use strict";
    Object.defineProperty(ii, "__esModule", {
        value: !0
    });
    ii.browserDetector = void 0;
    var dg = it(), ta = class {
        detect(e) {
            return Promise.resolve(dg.browserDetectorSync.detect(e));
        }
    };
    ii.browserDetector = new ta;
});
var na = c((si)=>{
    "use strict";
    Object.defineProperty(si, "__esModule", {
        value: !0
    });
    si.envDetectorSync = void 0;
    var _g = (p(), f(d)), pg = T(), hg = se(), fg = et(), ra = class {
        constructor(){
            this._MAX_LENGTH = 255, this._COMMA_SEPARATOR = ",", this._LABEL_KEY_VALUE_SPLITTER = "=", this._ERROR_MESSAGE_INVALID_CHARS = "should be a ASCII string with a length greater than 0 and not exceed " + this._MAX_LENGTH + " characters.", this._ERROR_MESSAGE_INVALID_VALUE = "should be a ASCII string with a length not exceed " + this._MAX_LENGTH + " characters.";
        }
        detect(e) {
            let t = {}, n = (0, pg.getEnv)(), i = n.OTEL_RESOURCE_ATTRIBUTES, s = n.OTEL_SERVICE_NAME;
            if (i) try {
                let o = this._parseResourceAttributes(i);
                Object.assign(t, o);
            } catch (o) {
                _g.diag.debug(`EnvDetector failed: ${o.message}`);
            }
            return s && (t[hg.SemanticResourceAttributes.SERVICE_NAME] = s), new fg.Resource(t);
        }
        _parseResourceAttributes(e) {
            if (!e) return {};
            let t = {}, n = e.split(this._COMMA_SEPARATOR, -1);
            for (let i of n){
                let s = i.split(this._LABEL_KEY_VALUE_SPLITTER, -1);
                if (s.length !== 2) continue;
                let [o, a] = s;
                if (o = o.trim(), a = a.trim().split(/^"|"$/).join(""), !this._isValidAndNotEmpty(o)) throw new Error(`Attribute key ${this._ERROR_MESSAGE_INVALID_CHARS}`);
                if (!this._isValid(a)) throw new Error(`Attribute value ${this._ERROR_MESSAGE_INVALID_VALUE}`);
                t[o] = decodeURIComponent(a);
            }
            return t;
        }
        _isValid(e) {
            return e.length <= this._MAX_LENGTH && this._isBaggageOctetString(e);
        }
        _isBaggageOctetString(e) {
            for(let t = 0; t < e.length; t++){
                let n = e.charCodeAt(t);
                if (n < 33 || n === 44 || n === 59 || n === 92 || n > 126) return !1;
            }
            return !0;
        }
        _isValidAndNotEmpty(e) {
            return e.length > 0 && this._isValid(e);
        }
    };
    si.envDetectorSync = new ra;
});
var _d = c((oi)=>{
    "use strict";
    Object.defineProperty(oi, "__esModule", {
        value: !0
    });
    oi.envDetector = void 0;
    var Eg = na(), ia = class {
        detect(e) {
            return Promise.resolve(Eg.envDetectorSync.detect(e));
        }
    };
    oi.envDetector = new ia;
});
var pd = c((ui)=>{
    "use strict";
    Object.defineProperty(ui, "__esModule", {
        value: !0
    });
    ui.browserDetectorSync = void 0;
    var ai = se(), sa = it(), mg = (p(), f(d)), oa = class {
        detect(e) {
            if (!(typeof navigator < "u")) return sa.Resource.empty();
            let n = {
                [ai.SemanticResourceAttributes.PROCESS_RUNTIME_NAME]: "browser",
                [ai.SemanticResourceAttributes.PROCESS_RUNTIME_DESCRIPTION]: "Web Browser",
                [ai.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION]: navigator.userAgent
            };
            return this._getResourceAttributes(n, e);
        }
        _getResourceAttributes(e, t) {
            return e[ai.SemanticResourceAttributes.PROCESS_RUNTIME_VERSION] === "" ? (mg.diag.debug("BrowserDetector failed: Unable to find required browser resources. "), sa.Resource.empty()) : new sa.Resource(Object.assign({}, e));
        }
    };
    ui.browserDetectorSync = new oa;
});
var hd = c((Ee)=>{
    "use strict";
    var gg = Ee && Ee.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), ci = Ee && Ee.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && gg(e, r, t);
    };
    Object.defineProperty(Ee, "__esModule", {
        value: !0
    });
    ci(dd(), Ee);
    ci(_d(), Ee);
    ci(pd(), Ee);
    ci(na(), Ee);
});
var fd = c((li)=>{
    "use strict";
    Object.defineProperty(li, "__esModule", {
        value: !0
    });
    li.isPromiseLike = void 0;
    var Tg = (r)=>r !== null && typeof r == "object" && typeof r.then == "function";
    li.isPromiseLike = Tg;
});
var md = c((It)=>{
    "use strict";
    Object.defineProperty(It, "__esModule", {
        value: !0
    });
    It.detectResourcesSync = It.detectResources = void 0;
    var Ar = et(), vt = (p(), f(d)), Sg = fd(), Ag = async (r = {})=>{
        let e = await Promise.all((r.detectors || []).map(async (t)=>{
            try {
                let n = await t.detect(r);
                return vt.diag.debug(`${t.constructor.name} found resource.`, n), n;
            } catch (n) {
                return vt.diag.debug(`${t.constructor.name} failed: ${n.message}`), Ar.Resource.empty();
            }
        }));
        return Ed(e), e.reduce((t, n)=>t.merge(n), Ar.Resource.empty());
    };
    It.detectResources = Ag;
    var Og = (r = {})=>{
        var e;
        let t = ((e = r.detectors) !== null && e !== void 0 ? e : []).map((i)=>{
            try {
                let s = i.detect(r), o;
                if ((0, Sg.isPromiseLike)(s)) {
                    let a = async ()=>(await s).attributes;
                    o = new Ar.Resource({}, a());
                } else o = s;
                return o.waitForAsyncAttributes ? o.waitForAsyncAttributes().then(()=>vt.diag.debug(`${i.constructor.name} found resource.`, o)) : vt.diag.debug(`${i.constructor.name} found resource.`, o), o;
            } catch (s) {
                return vt.diag.error(`${i.constructor.name} failed: ${s.message}`), Ar.Resource.empty();
            }
        }), n = t.reduce((i, s)=>i.merge(s), Ar.Resource.empty());
        return n.waitForAsyncAttributes && n.waitForAsyncAttributes().then(()=>{
            Ed(t);
        }), n;
    };
    It.detectResourcesSync = Og;
    var Ed = (r)=>{
        r.forEach((e)=>{
            if (Object.keys(e.attributes).length > 0) {
                let t = JSON.stringify(e.attributes, null, 4);
                vt.diag.verbose(t);
            }
        });
    };
});
var it = c((ne)=>{
    "use strict";
    var Rg = ne && ne.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), st = ne && ne.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Rg(e, r, t);
    };
    Object.defineProperty(ne, "__esModule", {
        value: !0
    });
    st(et(), ne);
    st(od(), ne);
    st(Jo(), ne);
    st(ud(), ne);
    st(ld(), ne);
    st(hd(), ne);
    st(md(), ne);
});
var gd = c((di)=>{
    "use strict";
    Object.defineProperty(di, "__esModule", {
        value: !0
    });
    di.MultiSpanProcessor = void 0;
    var bg = T(), aa = class {
        constructor(e){
            this._spanProcessors = e;
        }
        forceFlush() {
            let e = [];
            for (let t of this._spanProcessors)e.push(t.forceFlush());
            return new Promise((t)=>{
                Promise.all(e).then(()=>{
                    t();
                }).catch((n)=>{
                    (0, bg.globalErrorHandler)(n || new Error("MultiSpanProcessor: forceFlush failed")), t();
                });
            });
        }
        onStart(e, t) {
            for (let n of this._spanProcessors)n.onStart(e, t);
        }
        onEnd(e) {
            for (let t of this._spanProcessors)t.onEnd(e);
        }
        shutdown() {
            let e = [];
            for (let t of this._spanProcessors)e.push(t.shutdown());
            return new Promise((t, n)=>{
                Promise.all(e).then(()=>{
                    t();
                }, n);
            });
        }
    };
    di.MultiSpanProcessor = aa;
});
var ca = c((_i)=>{
    "use strict";
    Object.defineProperty(_i, "__esModule", {
        value: !0
    });
    _i.NoopSpanProcessor = void 0;
    var ua = class {
        onStart(e, t) {}
        onEnd(e) {}
        shutdown() {
            return Promise.resolve();
        }
        forceFlush() {
            return Promise.resolve();
        }
    };
    _i.NoopSpanProcessor = ua;
});
var Sd = c((ot)=>{
    "use strict";
    Object.defineProperty(ot, "__esModule", {
        value: !0
    });
    ot.BasicTracerProvider = ot.ForceFlushState = void 0;
    var Lt = (p(), f(d)), Nt = T(), Td = it(), Pg = la(), yg = Do(), vg = gd(), Ig = ca(), Lg = Vn(), Mg = Bo(), Mt;
    (function(r) {
        r[r.resolved = 0] = "resolved", r[r.timeout = 1] = "timeout", r[r.error = 2] = "error", r[r.unresolved = 3] = "unresolved";
    })(Mt = ot.ForceFlushState || (ot.ForceFlushState = {}));
    var Or = class {
        constructor(e = {}){
            var t;
            this._registeredSpanProcessors = [], this._tracers = new Map;
            let n = (0, Nt.merge)({}, (0, yg.loadDefaultConfig)(), (0, Mg.reconfigureLimits)(e));
            this.resource = (t = n.resource) !== null && t !== void 0 ? t : Td.Resource.empty(), this.resource = Td.Resource.default().merge(this.resource), this._config = Object.assign({}, n, {
                resource: this.resource
            });
            let i = this._buildExporterFromEnv();
            if (i !== void 0) {
                let s = new Lg.BatchSpanProcessor(i);
                this.activeSpanProcessor = s;
            } else this.activeSpanProcessor = new Ig.NoopSpanProcessor;
        }
        getTracer(e, t, n) {
            let i = `${e}@${t || ""}:${n?.schemaUrl || ""}`;
            return this._tracers.has(i) || this._tracers.set(i, new Pg.Tracer({
                name: e,
                version: t,
                schemaUrl: n?.schemaUrl
            }, this._config, this)), this._tracers.get(i);
        }
        addSpanProcessor(e) {
            this._registeredSpanProcessors.length === 0 && this.activeSpanProcessor.shutdown().catch((t)=>Lt.diag.error("Error while trying to shutdown current span processor", t)), this._registeredSpanProcessors.push(e), this.activeSpanProcessor = new vg.MultiSpanProcessor(this._registeredSpanProcessors);
        }
        getActiveSpanProcessor() {
            return this.activeSpanProcessor;
        }
        register(e = {}) {
            Lt.trace.setGlobalTracerProvider(this), e.propagator === void 0 && (e.propagator = this._buildPropagatorFromEnv()), e.contextManager && Lt.context.setGlobalContextManager(e.contextManager), e.propagator && Lt.propagation.setGlobalPropagator(e.propagator);
        }
        forceFlush() {
            let e = this._config.forceFlushTimeoutMillis, t = this._registeredSpanProcessors.map((n)=>new Promise((i)=>{
                    let s, o = setTimeout(()=>{
                        i(new Error(`Span processor did not completed within timeout period of ${e} ms`)), s = Mt.timeout;
                    }, e);
                    n.forceFlush().then(()=>{
                        clearTimeout(o), s !== Mt.timeout && (s = Mt.resolved, i(s));
                    }).catch((a)=>{
                        clearTimeout(o), s = Mt.error, i(a);
                    });
                }));
            return new Promise((n, i)=>{
                Promise.all(t).then((s)=>{
                    let o = s.filter((a)=>a !== Mt.resolved);
                    o.length > 0 ? i(o) : n();
                }).catch((s)=>i([
                        s
                    ]));
            });
        }
        shutdown() {
            return this.activeSpanProcessor.shutdown();
        }
        _getPropagator(e) {
            var t;
            return (t = this.constructor._registeredPropagators.get(e)) === null || t === void 0 ? void 0 : t();
        }
        _getSpanExporter(e) {
            var t;
            return (t = this.constructor._registeredExporters.get(e)) === null || t === void 0 ? void 0 : t();
        }
        _buildPropagatorFromEnv() {
            let e = Array.from(new Set((0, Nt.getEnv)().OTEL_PROPAGATORS)), n = e.map((i)=>{
                let s = this._getPropagator(i);
                return s || Lt.diag.warn(`Propagator "${i}" requested through environment variable is unavailable.`), s;
            }).reduce((i, s)=>(s && i.push(s), i), []);
            if (n.length !== 0) return e.length === 1 ? n[0] : new Nt.CompositePropagator({
                propagators: n
            });
        }
        _buildExporterFromEnv() {
            let e = (0, Nt.getEnv)().OTEL_TRACES_EXPORTER;
            if (e === "none" || e === "") return;
            let t = this._getSpanExporter(e);
            return t || Lt.diag.error(`Exporter "${e}" requested through environment variable is unavailable.`), t;
        }
    };
    ot.BasicTracerProvider = Or;
    Or._registeredPropagators = new Map([
        [
            "tracecontext",
            ()=>new Nt.W3CTraceContextPropagator
        ],
        [
            "baggage",
            ()=>new Nt.W3CBaggagePropagator
        ]
    ]);
    Or._registeredExporters = new Map;
});
var Ad = c((pi)=>{
    "use strict";
    Object.defineProperty(pi, "__esModule", {
        value: !0
    });
    pi.ConsoleSpanExporter = void 0;
    var da = T(), _a = class {
        export(e, t) {
            return this._sendSpans(e, t);
        }
        shutdown() {
            return this._sendSpans([]), this.forceFlush();
        }
        forceFlush() {
            return Promise.resolve();
        }
        _exportInfo(e) {
            var t;
            return {
                traceId: e.spanContext().traceId,
                parentId: e.parentSpanId,
                traceState: (t = e.spanContext().traceState) === null || t === void 0 ? void 0 : t.serialize(),
                name: e.name,
                id: e.spanContext().spanId,
                kind: e.kind,
                timestamp: (0, da.hrTimeToMicroseconds)(e.startTime),
                duration: (0, da.hrTimeToMicroseconds)(e.duration),
                attributes: e.attributes,
                status: e.status,
                events: e.events,
                links: e.links
            };
        }
        _sendSpans(e, t) {
            for (let n of e)console.dir(this._exportInfo(n), {
                depth: 3
            });
            if (t) return t({
                code: da.ExportResultCode.SUCCESS
            });
        }
    };
    pi.ConsoleSpanExporter = _a;
});
var Rd = c((hi)=>{
    "use strict";
    Object.defineProperty(hi, "__esModule", {
        value: !0
    });
    hi.InMemorySpanExporter = void 0;
    var Od = T(), pa = class {
        constructor(){
            this._finishedSpans = [], this._stopped = !1;
        }
        export(e, t) {
            if (this._stopped) return t({
                code: Od.ExportResultCode.FAILED,
                error: new Error("Exporter has been stopped")
            });
            this._finishedSpans.push(...e), setTimeout(()=>t({
                    code: Od.ExportResultCode.SUCCESS
                }), 0);
        }
        shutdown() {
            return this._stopped = !0, this._finishedSpans = [], this.forceFlush();
        }
        forceFlush() {
            return Promise.resolve();
        }
        reset() {
            this._finishedSpans = [];
        }
        getFinishedSpans() {
            return this._finishedSpans;
        }
    };
    hi.InMemorySpanExporter = pa;
});
var Pd = c((bd)=>{
    "use strict";
    Object.defineProperty(bd, "__esModule", {
        value: !0
    });
});
var yd = c((fi)=>{
    "use strict";
    Object.defineProperty(fi, "__esModule", {
        value: !0
    });
    fi.SimpleSpanProcessor = void 0;
    var Ng = (p(), f(d)), Ct = T(), ha = class {
        constructor(e){
            this._exporter = e, this._shutdownOnce = new Ct.BindOnceFuture(this._shutdown, this), this._unresolvedExports = new Set;
        }
        async forceFlush() {
            await Promise.all(Array.from(this._unresolvedExports)), this._exporter.forceFlush && await this._exporter.forceFlush();
        }
        onStart(e, t) {}
        onEnd(e) {
            var t, n;
            if (this._shutdownOnce.isCalled || !(e.spanContext().traceFlags & Ng.TraceFlags.SAMPLED)) return;
            let i = ()=>Ct.internal._export(this._exporter, [
                    e
                ]).then((s)=>{
                    var o;
                    s.code !== Ct.ExportResultCode.SUCCESS && (0, Ct.globalErrorHandler)((o = s.error) !== null && o !== void 0 ? o : new Error(`SimpleSpanProcessor: span export failed (status ${s})`));
                }).catch((s)=>{
                    (0, Ct.globalErrorHandler)(s);
                });
            if (e.resource.asyncAttributesPending) {
                let s = (n = (t = e.resource).waitForAsyncAttributes) === null || n === void 0 ? void 0 : n.call(t).then(()=>(s != null && this._unresolvedExports.delete(s), i()), (o)=>(0, Ct.globalErrorHandler)(o));
                s != null && this._unresolvedExports.add(s);
            } else i();
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        _shutdown() {
            return this._exporter.shutdown();
        }
    };
    fi.SimpleSpanProcessor = ha;
});
var Id = c((vd)=>{
    "use strict";
    Object.defineProperty(vd, "__esModule", {
        value: !0
    });
});
var Md = c((Ld)=>{
    "use strict";
    Object.defineProperty(Ld, "__esModule", {
        value: !0
    });
});
var Cd = c((Nd)=>{
    "use strict";
    Object.defineProperty(Nd, "__esModule", {
        value: !0
    });
});
var xd = c((wd)=>{
    "use strict";
    Object.defineProperty(wd, "__esModule", {
        value: !0
    });
});
var Ud = c((Dd)=>{
    "use strict";
    Object.defineProperty(Dd, "__esModule", {
        value: !0
    });
});
var la = c((L)=>{
    "use strict";
    var Cg = L && L.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), U = L && L.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && Cg(e, r, t);
    };
    Object.defineProperty(L, "__esModule", {
        value: !0
    });
    U(jl(), L);
    U(Sd(), L);
    U(Vn(), L);
    U(Ad(), L);
    U(Rd(), L);
    U(Pd(), L);
    U(yd(), L);
    U(Id(), L);
    U(ca(), L);
    U(Ln(), L);
    U(Nn(), L);
    U(Mo(), L);
    U(Co(), L);
    U(Tr(), L);
    U(Po(), L);
    U(Md(), L);
    U(Cd(), L);
    U(xd(), L);
    U(Ud(), L);
});
var at = {};
;
var fa = _c(()=>{
    Et(at, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$opentelemetry$2b$api$2d$logs$40$0$2e$46$2e$0$2f$node_modules$2f40$opentelemetry$2f$api$2d$logs$2f$build$2f$esm$2f$index$2e$js__$5b$instrumentation$5d$__$28$ecmascript$29$__);
});
var qd = c((we)=>{
    "use strict";
    Object.defineProperty(we, "__esModule", {
        value: !0
    });
    we.disableInstrumentations = we.enableInstrumentations = we.parseInstrumentationOptions = void 0;
    function Bd(r = []) {
        let e = [];
        for(let t = 0, n = r.length; t < n; t++){
            let i = r[t];
            if (Array.isArray(i)) {
                let s = Bd(i);
                e = e.concat(s.instrumentations);
            } else typeof i == "function" ? e.push(new i) : i.instrumentationName && e.push(i);
        }
        return {
            instrumentations: e
        };
    }
    we.parseInstrumentationOptions = Bd;
    function wg(r, e, t) {
        for(let n = 0, i = r.length; n < i; n++){
            let s = r[n];
            e && s.setTracerProvider(e), t && s.setMeterProvider(t), s.getConfig().enabled || s.enable();
        }
    }
    we.enableInstrumentations = wg;
    function xg(r) {
        r.forEach((e)=>e.disable());
    }
    we.disableInstrumentations = xg;
});
var Vd = c((Ei)=>{
    "use strict";
    Object.defineProperty(Ei, "__esModule", {
        value: !0
    });
    Ei.registerInstrumentations = void 0;
    var Gd = (p(), f(d)), Ea = qd();
    function Dg(r) {
        let { instrumentations: e } = (0, Ea.parseInstrumentationOptions)(r.instrumentations), t = r.tracerProvider || Gd.trace.getTracerProvider(), n = r.meterProvider || Gd.metrics.getMeterProvider();
        return (0, Ea.enableInstrumentations)(e, t, n), ()=>{
            (0, Ea.disableInstrumentations)(e);
        };
    }
    Ei.registerInstrumentations = Dg;
});
var ga = c((gi)=>{
    "use strict";
    Object.defineProperty(gi, "__esModule", {
        value: !0
    });
    gi.LogRecord = void 0;
    var Ug = (p(), f(d)), Rr = (p(), f(d)), mi = T(), ma = class {
        constructor(e, t, n){
            this.attributes = {}, this.totalAttributesCount = 0, this._isReadonly = !1;
            let { timestamp: i, observedTimestamp: s, severityNumber: o, severityText: a, body: u, attributes: l = {}, context: _ } = n, E = Date.now();
            if (this.hrTime = (0, mi.timeInputToHrTime)(i ?? E), this.hrTimeObserved = (0, mi.timeInputToHrTime)(s ?? E), _) {
                let O = Rr.trace.getSpanContext(_);
                O && Rr.isSpanContextValid(O) && (this.spanContext = O);
            }
            this.severityNumber = o, this.severityText = a, this.body = u, this.resource = e.resource, this.instrumentationScope = t, this._logRecordLimits = e.logRecordLimits, this.setAttributes(l);
        }
        set severityText(e) {
            this._isLogRecordReadonly() || (this._severityText = e);
        }
        get severityText() {
            return this._severityText;
        }
        set severityNumber(e) {
            this._isLogRecordReadonly() || (this._severityNumber = e);
        }
        get severityNumber() {
            return this._severityNumber;
        }
        set body(e) {
            this._isLogRecordReadonly() || (this._body = e);
        }
        get body() {
            return this._body;
        }
        get droppedAttributesCount() {
            return this.totalAttributesCount - Object.keys(this.attributes).length;
        }
        setAttribute(e, t) {
            return this._isLogRecordReadonly() ? this : t === null ? this : e.length === 0 ? (Rr.diag.warn(`Invalid attribute key: ${e}`), this) : !(0, mi.isAttributeValue)(t) && !(typeof t == "object" && !Array.isArray(t) && Object.keys(t).length > 0) ? (Rr.diag.warn(`Invalid attribute value set for key: ${e}`), this) : (this.totalAttributesCount += 1, Object.keys(this.attributes).length >= this._logRecordLimits.attributeCountLimit && !Object.prototype.hasOwnProperty.call(this.attributes, e) ? this : ((0, mi.isAttributeValue)(t) ? this.attributes[e] = this._truncateToSize(t) : this.attributes[e] = t, this));
        }
        setAttributes(e) {
            for (let [t, n] of Object.entries(e))this.setAttribute(t, n);
            return this;
        }
        setBody(e) {
            return this.body = e, this;
        }
        setSeverityNumber(e) {
            return this.severityNumber = e, this;
        }
        setSeverityText(e) {
            return this.severityText = e, this;
        }
        _makeReadonly() {
            this._isReadonly = !0;
        }
        _truncateToSize(e) {
            let t = this._logRecordLimits.attributeValueLengthLimit;
            return t <= 0 ? (Rr.diag.warn(`Attribute value limit must be positive, got ${t}`), e) : typeof e == "string" ? this._truncateToLimitUtil(e, t) : Array.isArray(e) ? e.map((n)=>typeof n == "string" ? this._truncateToLimitUtil(n, t) : n) : e;
        }
        _truncateToLimitUtil(e, t) {
            return e.length <= t ? e : e.substring(0, t);
        }
        _isLogRecordReadonly() {
            return this._isReadonly && Ug.diag.warn("Can not execute the operation on emitted log record"), this._isReadonly;
        }
    };
    gi.LogRecord = ma;
});
var jd = c((Ti)=>{
    "use strict";
    Object.defineProperty(Ti, "__esModule", {
        value: !0
    });
    Ti.Logger = void 0;
    var Bg = (p(), f(d)), qg = ga(), Ta = class {
        constructor(e, t){
            this.instrumentationScope = e, this._sharedState = t;
        }
        emit(e) {
            let t = e.context || Bg.context.active(), n = new qg.LogRecord(this._sharedState, this.instrumentationScope, Object.assign({
                context: t
            }, e));
            this._sharedState.activeProcessor.onEmit(n, t), n._makeReadonly();
        }
    };
    Ti.Logger = Ta;
});
var Fd = c((wt)=>{
    "use strict";
    Object.defineProperty(wt, "__esModule", {
        value: !0
    });
    wt.reconfigureLimits = wt.loadDefaultConfig = void 0;
    var br = T();
    function Gg() {
        return {
            forceFlushTimeoutMillis: 3e4,
            logRecordLimits: {
                attributeValueLengthLimit: (0, br.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT,
                attributeCountLimit: (0, br.getEnv)().OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT
            },
            includeTraceContext: !0
        };
    }
    wt.loadDefaultConfig = Gg;
    function Vg(r) {
        var e, t, n, i, s, o;
        let a = (0, br.getEnvWithoutDefaults)();
        return {
            attributeCountLimit: (n = (t = (e = r.attributeCountLimit) !== null && e !== void 0 ? e : a.OTEL_LOGRECORD_ATTRIBUTE_COUNT_LIMIT) !== null && t !== void 0 ? t : a.OTEL_ATTRIBUTE_COUNT_LIMIT) !== null && n !== void 0 ? n : br.DEFAULT_ATTRIBUTE_COUNT_LIMIT,
            attributeValueLengthLimit: (o = (s = (i = r.attributeValueLengthLimit) !== null && i !== void 0 ? i : a.OTEL_LOGRECORD_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && s !== void 0 ? s : a.OTEL_ATTRIBUTE_VALUE_LENGTH_LIMIT) !== null && o !== void 0 ? o : br.DEFAULT_ATTRIBUTE_VALUE_LENGTH_LIMIT
        };
    }
    wt.reconfigureLimits = Vg;
});
var Hd = c((Si)=>{
    "use strict";
    Object.defineProperty(Si, "__esModule", {
        value: !0
    });
    Si.MultiLogRecordProcessor = void 0;
    var jg = T(), Sa = class {
        constructor(e, t){
            this.processors = e, this.forceFlushTimeoutMillis = t;
        }
        async forceFlush() {
            let e = this.forceFlushTimeoutMillis;
            await Promise.all(this.processors.map((t)=>(0, jg.callWithTimeout)(t.forceFlush(), e)));
        }
        onEmit(e, t) {
            this.processors.forEach((n)=>n.onEmit(e, t));
        }
        async shutdown() {
            await Promise.all(this.processors.map((e)=>e.shutdown()));
        }
    };
    Si.MultiLogRecordProcessor = Sa;
});
var Oa = c((Ai)=>{
    "use strict";
    Object.defineProperty(Ai, "__esModule", {
        value: !0
    });
    Ai.NoopLogRecordProcessor = void 0;
    var Aa = class {
        forceFlush() {
            return Promise.resolve();
        }
        onEmit(e, t) {}
        shutdown() {
            return Promise.resolve();
        }
    };
    Ai.NoopLogRecordProcessor = Aa;
});
var kd = c((Oi)=>{
    "use strict";
    Object.defineProperty(Oi, "__esModule", {
        value: !0
    });
    Oi.LoggerProviderSharedState = void 0;
    var Fg = Oa(), Ra = class {
        constructor(e, t, n){
            this.resource = e, this.forceFlushTimeoutMillis = t, this.logRecordLimits = n, this.loggers = new Map, this.registeredLogRecordProcessors = [], this.activeProcessor = new Fg.NoopLogRecordProcessor;
        }
    };
    Oi.LoggerProviderSharedState = Ra;
});
var Wd = c((ut)=>{
    "use strict";
    Object.defineProperty(ut, "__esModule", {
        value: !0
    });
    ut.LoggerProvider = ut.DEFAULT_LOGGER_NAME = void 0;
    var Pr = (p(), f(d)), Hg = (fa(), f(at)), kg = it(), $d = T(), $g = jd(), Xd = Fd(), Xg = Hd(), Wg = kd();
    ut.DEFAULT_LOGGER_NAME = "unknown";
    var ba = class {
        constructor(e = {}){
            let { resource: t = kg.Resource.default(), logRecordLimits: n, forceFlushTimeoutMillis: i } = (0, $d.merge)({}, (0, Xd.loadDefaultConfig)(), e);
            this._sharedState = new Wg.LoggerProviderSharedState(t, i, (0, Xd.reconfigureLimits)(n)), this._shutdownOnce = new $d.BindOnceFuture(this._shutdown, this);
        }
        getLogger(e, t, n) {
            if (this._shutdownOnce.isCalled) return Pr.diag.warn("A shutdown LoggerProvider cannot provide a Logger"), Hg.NOOP_LOGGER;
            e || Pr.diag.warn("Logger requested without instrumentation scope name.");
            let i = e || ut.DEFAULT_LOGGER_NAME, s = `${i}@${t || ""}:${n?.schemaUrl || ""}`;
            return this._sharedState.loggers.has(s) || this._sharedState.loggers.set(s, new $g.Logger({
                name: i,
                version: t,
                schemaUrl: n?.schemaUrl
            }, this._sharedState)), this._sharedState.loggers.get(s);
        }
        addLogRecordProcessor(e) {
            this._sharedState.registeredLogRecordProcessors.length === 0 && this._sharedState.activeProcessor.shutdown().catch((t)=>Pr.diag.error("Error while trying to shutdown current log record processor", t)), this._sharedState.registeredLogRecordProcessors.push(e), this._sharedState.activeProcessor = new Xg.MultiLogRecordProcessor(this._sharedState.registeredLogRecordProcessors, this._sharedState.forceFlushTimeoutMillis);
        }
        forceFlush() {
            return this._shutdownOnce.isCalled ? (Pr.diag.warn("invalid attempt to force flush after LoggerProvider shutdown"), this._shutdownOnce.promise) : this._sharedState.activeProcessor.forceFlush();
        }
        shutdown() {
            return this._shutdownOnce.isCalled ? (Pr.diag.warn("shutdown may only be called once per LoggerProvider"), this._shutdownOnce.promise) : this._shutdownOnce.call();
        }
        _shutdown() {
            return this._sharedState.activeProcessor.shutdown();
        }
    };
    ut.LoggerProvider = ba;
});
var Kd = c((Ri)=>{
    "use strict";
    Object.defineProperty(Ri, "__esModule", {
        value: !0
    });
    Ri.ConsoleLogRecordExporter = void 0;
    var Kg = T(), zg = T(), Pa = class {
        export(e, t) {
            this._sendLogRecords(e, t);
        }
        shutdown() {
            return Promise.resolve();
        }
        _exportInfo(e) {
            var t, n, i;
            return {
                timestamp: (0, Kg.hrTimeToMicroseconds)(e.hrTime),
                traceId: (t = e.spanContext) === null || t === void 0 ? void 0 : t.traceId,
                spanId: (n = e.spanContext) === null || n === void 0 ? void 0 : n.spanId,
                traceFlags: (i = e.spanContext) === null || i === void 0 ? void 0 : i.traceFlags,
                severityText: e.severityText,
                severityNumber: e.severityNumber,
                body: e.body,
                attributes: e.attributes
            };
        }
        _sendLogRecords(e, t) {
            for (let n of e)console.dir(this._exportInfo(n), {
                depth: 3
            });
            t?.({
                code: zg.ExportResultCode.SUCCESS
            });
        }
    };
    Ri.ConsoleLogRecordExporter = Pa;
});
var zd = c((bi)=>{
    "use strict";
    Object.defineProperty(bi, "__esModule", {
        value: !0
    });
    bi.SimpleLogRecordProcessor = void 0;
    var ya = T(), va = class {
        constructor(e){
            this._exporter = e, this._shutdownOnce = new ya.BindOnceFuture(this._shutdown, this);
        }
        onEmit(e) {
            this._shutdownOnce.isCalled || this._exporter.export([
                e
            ], (t)=>{
                var n;
                if (t.code !== ya.ExportResultCode.SUCCESS) {
                    (0, ya.globalErrorHandler)((n = t.error) !== null && n !== void 0 ? n : new Error(`SimpleLogRecordProcessor: log record export failed (status ${t})`));
                    return;
                }
            });
        }
        forceFlush() {
            return Promise.resolve();
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        _shutdown() {
            return this._exporter.shutdown();
        }
    };
    bi.SimpleLogRecordProcessor = va;
});
var Qd = c((Pi)=>{
    "use strict";
    Object.defineProperty(Pi, "__esModule", {
        value: !0
    });
    Pi.InMemoryLogRecordExporter = void 0;
    var Yd = T(), Ia = class {
        constructor(){
            this._finishedLogRecords = [], this._stopped = !1;
        }
        export(e, t) {
            if (this._stopped) return t({
                code: Yd.ExportResultCode.FAILED,
                error: new Error("Exporter has been stopped")
            });
            this._finishedLogRecords.push(...e), t({
                code: Yd.ExportResultCode.SUCCESS
            });
        }
        shutdown() {
            return this._stopped = !0, this.reset(), Promise.resolve();
        }
        getFinishedLogRecords() {
            return this._finishedLogRecords;
        }
        reset() {
            this._finishedLogRecords = [];
        }
    };
    Pi.InMemoryLogRecordExporter = Ia;
});
var Zd = c((yi)=>{
    "use strict";
    Object.defineProperty(yi, "__esModule", {
        value: !0
    });
    yi.BatchLogRecordProcessorBase = void 0;
    var Yg = (p(), f(d)), xt = T(), La = class {
        constructor(e, t){
            var n, i, s, o;
            this._exporter = e, this._finishedLogRecords = [];
            let a = (0, xt.getEnv)();
            this._maxExportBatchSize = (n = t?.maxExportBatchSize) !== null && n !== void 0 ? n : a.OTEL_BLRP_MAX_EXPORT_BATCH_SIZE, this._maxQueueSize = (i = t?.maxQueueSize) !== null && i !== void 0 ? i : a.OTEL_BLRP_MAX_QUEUE_SIZE, this._scheduledDelayMillis = (s = t?.scheduledDelayMillis) !== null && s !== void 0 ? s : a.OTEL_BLRP_SCHEDULE_DELAY, this._exportTimeoutMillis = (o = t?.exportTimeoutMillis) !== null && o !== void 0 ? o : a.OTEL_BLRP_EXPORT_TIMEOUT, this._shutdownOnce = new xt.BindOnceFuture(this._shutdown, this), this._maxExportBatchSize > this._maxQueueSize && (Yg.diag.warn("BatchLogRecordProcessor: maxExportBatchSize must be smaller or equal to maxQueueSize, setting maxExportBatchSize to match maxQueueSize"), this._maxExportBatchSize = this._maxQueueSize);
        }
        onEmit(e) {
            this._shutdownOnce.isCalled || this._addToBuffer(e);
        }
        forceFlush() {
            return this._shutdownOnce.isCalled ? this._shutdownOnce.promise : this._flushAll();
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        async _shutdown() {
            this.onShutdown(), await this._flushAll(), await this._exporter.shutdown();
        }
        _addToBuffer(e) {
            this._finishedLogRecords.length >= this._maxQueueSize || (this._finishedLogRecords.push(e), this._maybeStartTimer());
        }
        _flushAll() {
            return new Promise((e, t)=>{
                let n = [], i = Math.ceil(this._finishedLogRecords.length / this._maxExportBatchSize);
                for(let s = 0; s < i; s++)n.push(this._flushOneBatch());
                Promise.all(n).then(()=>{
                    e();
                }).catch(t);
            });
        }
        _flushOneBatch() {
            return this._clearTimer(), this._finishedLogRecords.length === 0 ? Promise.resolve() : new Promise((e, t)=>{
                (0, xt.callWithTimeout)(this._export(this._finishedLogRecords.splice(0, this._maxExportBatchSize)), this._exportTimeoutMillis).then(()=>e()).catch(t);
            });
        }
        _maybeStartTimer() {
            this._timer === void 0 && (this._timer = setTimeout(()=>{
                this._flushOneBatch().then(()=>{
                    this._finishedLogRecords.length > 0 && (this._clearTimer(), this._maybeStartTimer());
                }).catch((e)=>{
                    (0, xt.globalErrorHandler)(e);
                });
            }, this._scheduledDelayMillis), (0, xt.unrefTimer)(this._timer));
        }
        _clearTimer() {
            this._timer !== void 0 && (clearTimeout(this._timer), this._timer = void 0);
        }
        _export(e) {
            return new Promise((t, n)=>{
                this._exporter.export(e, (i)=>{
                    var s;
                    if (i.code !== xt.ExportResultCode.SUCCESS) {
                        n((s = i.error) !== null && s !== void 0 ? s : new Error(`BatchLogRecordProcessorBase: log record export failed (status ${i})`));
                        return;
                    }
                    t(i);
                });
            });
        }
    };
    yi.BatchLogRecordProcessorBase = La;
});
var Jd = c((vi)=>{
    "use strict";
    Object.defineProperty(vi, "__esModule", {
        value: !0
    });
    vi.BatchLogRecordProcessor = void 0;
    var Qg = Zd(), Ma = class extends Qg.BatchLogRecordProcessorBase {
        onShutdown() {}
    };
    vi.BatchLogRecordProcessor = Ma;
});
var e_ = c((Ii)=>{
    "use strict";
    Object.defineProperty(Ii, "__esModule", {
        value: !0
    });
    Ii.BatchLogRecordProcessor = void 0;
    var Zg = Jd();
    Object.defineProperty(Ii, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return Zg.BatchLogRecordProcessor;
        }
    });
});
var t_ = c((Li)=>{
    "use strict";
    Object.defineProperty(Li, "__esModule", {
        value: !0
    });
    Li.BatchLogRecordProcessor = void 0;
    var Jg = e_();
    Object.defineProperty(Li, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return Jg.BatchLogRecordProcessor;
        }
    });
});
var r_ = c((z)=>{
    "use strict";
    Object.defineProperty(z, "__esModule", {
        value: !0
    });
    z.BatchLogRecordProcessor = z.InMemoryLogRecordExporter = z.SimpleLogRecordProcessor = z.ConsoleLogRecordExporter = z.NoopLogRecordProcessor = z.LogRecord = z.LoggerProvider = void 0;
    var eT = Wd();
    Object.defineProperty(z, "LoggerProvider", {
        enumerable: !0,
        get: function() {
            return eT.LoggerProvider;
        }
    });
    var tT = ga();
    Object.defineProperty(z, "LogRecord", {
        enumerable: !0,
        get: function() {
            return tT.LogRecord;
        }
    });
    var rT = Oa();
    Object.defineProperty(z, "NoopLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return rT.NoopLogRecordProcessor;
        }
    });
    var nT = Kd();
    Object.defineProperty(z, "ConsoleLogRecordExporter", {
        enumerable: !0,
        get: function() {
            return nT.ConsoleLogRecordExporter;
        }
    });
    var iT = zd();
    Object.defineProperty(z, "SimpleLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return iT.SimpleLogRecordProcessor;
        }
    });
    var sT = Qd();
    Object.defineProperty(z, "InMemoryLogRecordExporter", {
        enumerable: !0,
        get: function() {
            return sT.InMemoryLogRecordExporter;
        }
    });
    var oT = t_();
    Object.defineProperty(z, "BatchLogRecordProcessor", {
        enumerable: !0,
        get: function() {
            return oT.BatchLogRecordProcessor;
        }
    });
});
var Mi = c((yr)=>{
    "use strict";
    Object.defineProperty(yr, "__esModule", {
        value: !0
    });
    yr.AggregationTemporality = void 0;
    var aT;
    (function(r) {
        r[r.DELTA = 0] = "DELTA", r[r.CUMULATIVE = 1] = "CUMULATIVE";
    })(aT = yr.AggregationTemporality || (yr.AggregationTemporality = {}));
});
var Dt = c((vr)=>{
    "use strict";
    Object.defineProperty(vr, "__esModule", {
        value: !0
    });
    vr.DataPointType = void 0;
    var uT;
    (function(r) {
        r[r.HISTOGRAM = 0] = "HISTOGRAM", r[r.EXPONENTIAL_HISTOGRAM = 1] = "EXPONENTIAL_HISTOGRAM", r[r.GAUGE = 2] = "GAUGE", r[r.SUM = 3] = "SUM";
    })(uT = vr.DataPointType || (vr.DataPointType = {}));
});
var me = c((M)=>{
    "use strict";
    Object.defineProperty(M, "__esModule", {
        value: !0
    });
    M.equalsCaseInsensitive = M.binarySearchLB = M.setEquals = M.FlatMap = M.isPromiseAllSettledRejectionResult = M.PromiseAllSettled = M.callWithTimeout = M.TimeoutError = M.instrumentationScopeId = M.hashAttributes = M.isNotNullish = void 0;
    function cT(r) {
        return r != null;
    }
    M.isNotNullish = cT;
    function lT(r) {
        let e = Object.keys(r);
        return e.length === 0 ? "" : (e = e.sort(), JSON.stringify(e.map((t)=>[
                t,
                r[t]
            ])));
    }
    M.hashAttributes = lT;
    function dT(r) {
        var e, t;
        return `${r.name}:${(e = r.version) !== null && e !== void 0 ? e : ""}:${(t = r.schemaUrl) !== null && t !== void 0 ? t : ""}`;
    }
    M.instrumentationScopeId = dT;
    var Ni = class r extends Error {
        constructor(e){
            super(e), Object.setPrototypeOf(this, r.prototype);
        }
    };
    M.TimeoutError = Ni;
    function _T(r, e) {
        let t, n = new Promise(function(s, o) {
            t = setTimeout(function() {
                o(new Ni("Operation timed out."));
            }, e);
        });
        return Promise.race([
            r,
            n
        ]).then((i)=>(clearTimeout(t), i), (i)=>{
            throw clearTimeout(t), i;
        });
    }
    M.callWithTimeout = _T;
    async function pT(r) {
        return Promise.all(r.map(async (e)=>{
            try {
                return {
                    status: "fulfilled",
                    value: await e
                };
            } catch (t) {
                return {
                    status: "rejected",
                    reason: t
                };
            }
        }));
    }
    M.PromiseAllSettled = pT;
    function hT(r) {
        return r.status === "rejected";
    }
    M.isPromiseAllSettledRejectionResult = hT;
    function fT(r, e) {
        let t = [];
        return r.forEach((n)=>{
            t.push(...e(n));
        }), t;
    }
    M.FlatMap = fT;
    function ET(r, e) {
        if (r.size !== e.size) return !1;
        for (let t of r)if (!e.has(t)) return !1;
        return !0;
    }
    M.setEquals = ET;
    function mT(r, e) {
        let t = 0, n = r.length - 1;
        for(; n - t > 1;){
            let i = Math.trunc((n + t) / 2);
            r[i] <= e ? t = i : n = i - 1;
        }
        return r[n] <= e ? n : r[t] <= e ? t : -1;
    }
    M.binarySearchLB = mT;
    function gT(r, e) {
        return r.toLowerCase() === e.toLowerCase();
    }
    M.equalsCaseInsensitive = gT;
});
var Ut = c((Ir)=>{
    "use strict";
    Object.defineProperty(Ir, "__esModule", {
        value: !0
    });
    Ir.AggregatorKind = void 0;
    var TT;
    (function(r) {
        r[r.DROP = 0] = "DROP", r[r.SUM = 1] = "SUM", r[r.LAST_VALUE = 2] = "LAST_VALUE", r[r.HISTOGRAM = 3] = "HISTOGRAM", r[r.EXPONENTIAL_HISTOGRAM = 4] = "EXPONENTIAL_HISTOGRAM";
    })(TT = Ir.AggregatorKind || (Ir.AggregatorKind = {}));
});
var n_ = c((Ci)=>{
    "use strict";
    Object.defineProperty(Ci, "__esModule", {
        value: !0
    });
    Ci.DropAggregator = void 0;
    var ST = Ut(), Na = class {
        constructor(){
            this.kind = ST.AggregatorKind.DROP;
        }
        createAccumulation() {}
        merge(e, t) {}
        diff(e, t) {}
        toMetricData(e, t, n, i) {}
    };
    Ci.DropAggregator = Na;
});
var Re = c((ie)=>{
    "use strict";
    Object.defineProperty(ie, "__esModule", {
        value: !0
    });
    ie.isValidName = ie.isDescriptorCompatibleWith = ie.createInstrumentDescriptorWithView = ie.createInstrumentDescriptor = ie.InstrumentType = void 0;
    var i_ = (p(), f(d)), AT = me(), OT;
    (function(r) {
        r.COUNTER = "COUNTER", r.HISTOGRAM = "HISTOGRAM", r.UP_DOWN_COUNTER = "UP_DOWN_COUNTER", r.OBSERVABLE_COUNTER = "OBSERVABLE_COUNTER", r.OBSERVABLE_GAUGE = "OBSERVABLE_GAUGE", r.OBSERVABLE_UP_DOWN_COUNTER = "OBSERVABLE_UP_DOWN_COUNTER";
    })(OT = ie.InstrumentType || (ie.InstrumentType = {}));
    function RT(r, e, t) {
        var n, i, s, o;
        return s_(r) || i_.diag.warn(`Invalid metric name: "${r}". The metric name should be a ASCII string with a length no greater than 255 characters.`), {
            name: r,
            type: e,
            description: (n = t?.description) !== null && n !== void 0 ? n : "",
            unit: (i = t?.unit) !== null && i !== void 0 ? i : "",
            valueType: (s = t?.valueType) !== null && s !== void 0 ? s : i_.ValueType.DOUBLE,
            advice: (o = t?.advice) !== null && o !== void 0 ? o : {}
        };
    }
    ie.createInstrumentDescriptor = RT;
    function bT(r, e) {
        var t, n;
        return {
            name: (t = r.name) !== null && t !== void 0 ? t : e.name,
            description: (n = r.description) !== null && n !== void 0 ? n : e.description,
            type: e.type,
            unit: e.unit,
            valueType: e.valueType,
            advice: e.advice
        };
    }
    ie.createInstrumentDescriptorWithView = bT;
    function PT(r, e) {
        return (0, AT.equalsCaseInsensitive)(r.name, e.name) && r.unit === e.unit && r.type === e.type && r.valueType === e.valueType;
    }
    ie.isDescriptorCompatibleWith = PT;
    var yT = /^[a-z][a-z0-9_.\-/]{0,254}$/i;
    function s_(r) {
        return r.match(yT) != null;
    }
    ie.isValidName = s_;
});
var o_ = c((qt)=>{
    "use strict";
    Object.defineProperty(qt, "__esModule", {
        value: !0
    });
    qt.HistogramAggregator = qt.HistogramAccumulation = void 0;
    var vT = Ut(), IT = Dt(), Ca = Re(), LT = me();
    function MT(r) {
        let e = r.map(()=>0);
        return e.push(0), {
            buckets: {
                boundaries: r,
                counts: e
            },
            sum: 0,
            count: 0,
            hasMinMax: !1,
            min: 1 / 0,
            max: -1 / 0
        };
    }
    var Bt = class {
        constructor(e, t, n = !0, i = MT(t)){
            this.startTime = e, this._boundaries = t, this._recordMinMax = n, this._current = i;
        }
        record(e) {
            this._current.count += 1, this._current.sum += e, this._recordMinMax && (this._current.min = Math.min(e, this._current.min), this._current.max = Math.max(e, this._current.max), this._current.hasMinMax = !0);
            let t = (0, LT.binarySearchLB)(this._boundaries, e);
            this._current.buckets.counts[t + 1] += 1;
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return this._current;
        }
    };
    qt.HistogramAccumulation = Bt;
    var wa = class {
        constructor(e, t){
            this._boundaries = e, this._recordMinMax = t, this.kind = vT.AggregatorKind.HISTOGRAM;
        }
        createAccumulation(e) {
            return new Bt(e, this._boundaries, this._recordMinMax);
        }
        merge(e, t) {
            let n = e.toPointValue(), i = t.toPointValue(), s = n.buckets.counts, o = i.buckets.counts, a = new Array(s.length);
            for(let _ = 0; _ < s.length; _++)a[_] = s[_] + o[_];
            let u = 1 / 0, l = -1 / 0;
            return this._recordMinMax && (n.hasMinMax && i.hasMinMax ? (u = Math.min(n.min, i.min), l = Math.max(n.max, i.max)) : n.hasMinMax ? (u = n.min, l = n.max) : i.hasMinMax && (u = i.min, l = i.max)), new Bt(e.startTime, n.buckets.boundaries, this._recordMinMax, {
                buckets: {
                    boundaries: n.buckets.boundaries,
                    counts: a
                },
                count: n.count + i.count,
                sum: n.sum + i.sum,
                hasMinMax: this._recordMinMax && (n.hasMinMax || i.hasMinMax),
                min: u,
                max: l
            });
        }
        diff(e, t) {
            let n = e.toPointValue(), i = t.toPointValue(), s = n.buckets.counts, o = i.buckets.counts, a = new Array(s.length);
            for(let u = 0; u < s.length; u++)a[u] = o[u] - s[u];
            return new Bt(t.startTime, n.buckets.boundaries, this._recordMinMax, {
                buckets: {
                    boundaries: n.buckets.boundaries,
                    counts: a
                },
                count: i.count - n.count,
                sum: i.sum - n.sum,
                hasMinMax: !1,
                min: 1 / 0,
                max: -1 / 0
            });
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: IT.DataPointType.HISTOGRAM,
                dataPoints: n.map(([s, o])=>{
                    let a = o.toPointValue(), u = e.type === Ca.InstrumentType.UP_DOWN_COUNTER || e.type === Ca.InstrumentType.OBSERVABLE_GAUGE || e.type === Ca.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
                    return {
                        attributes: s,
                        startTime: o.startTime,
                        endTime: i,
                        value: {
                            min: a.hasMinMax ? a.min : void 0,
                            max: a.hasMinMax ? a.max : void 0,
                            sum: u ? void 0 : a.sum,
                            buckets: a.buckets,
                            count: a.count
                        }
                    };
                })
            };
        }
    };
    qt.HistogramAggregator = wa;
});
var a_ = c((wi)=>{
    "use strict";
    Object.defineProperty(wi, "__esModule", {
        value: !0
    });
    wi.Buckets = void 0;
    var xa = class r {
        constructor(e = new Da, t = 0, n = 0, i = 0){
            this.backing = e, this.indexBase = t, this.indexStart = n, this.indexEnd = i;
        }
        get offset() {
            return this.indexStart;
        }
        get length() {
            return this.backing.length === 0 || this.indexEnd === this.indexStart && this.at(0) === 0 ? 0 : this.indexEnd - this.indexStart + 1;
        }
        counts() {
            return Array.from({
                length: this.length
            }, (e, t)=>this.at(t));
        }
        at(e) {
            let t = this.indexBase - this.indexStart;
            return e < t && (e += this.backing.length), e -= t, this.backing.countAt(e);
        }
        incrementBucket(e, t) {
            this.backing.increment(e, t);
        }
        decrementBucket(e, t) {
            this.backing.decrement(e, t);
        }
        trim() {
            for(let e = 0; e < this.length; e++)if (this.at(e) !== 0) {
                this.indexStart += e;
                break;
            } else if (e === this.length - 1) {
                this.indexStart = this.indexEnd = this.indexBase = 0;
                return;
            }
            for(let e = this.length - 1; e >= 0; e--)if (this.at(e) !== 0) {
                this.indexEnd -= this.length - e - 1;
                break;
            }
            this._rotate();
        }
        downscale(e) {
            this._rotate();
            let t = 1 + this.indexEnd - this.indexStart, n = 1 << e, i = 0, s = 0;
            for(let o = this.indexStart; o <= this.indexEnd;){
                let a = o % n;
                a < 0 && (a += n);
                for(let u = a; u < n && i < t; u++)this._relocateBucket(s, i), i++, o++;
                s++;
            }
            this.indexStart >>= e, this.indexEnd >>= e, this.indexBase = this.indexStart;
        }
        clone() {
            return new r(this.backing.clone(), this.indexBase, this.indexStart, this.indexEnd);
        }
        _rotate() {
            let e = this.indexBase - this.indexStart;
            e !== 0 && (e > 0 ? (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, e), this.backing.reverse(e, this.backing.length)) : (this.backing.reverse(0, this.backing.length), this.backing.reverse(0, this.backing.length + e)), this.indexBase = this.indexStart);
        }
        _relocateBucket(e, t) {
            e !== t && this.incrementBucket(e, this.backing.emptyBucket(t));
        }
    };
    wi.Buckets = xa;
    var Da = class r {
        constructor(e = [
            0
        ]){
            this._counts = e;
        }
        get length() {
            return this._counts.length;
        }
        countAt(e) {
            return this._counts[e];
        }
        growTo(e, t, n) {
            let i = new Array(e).fill(0);
            i.splice(n, this._counts.length - t, ...this._counts.slice(t)), i.splice(0, t, ...this._counts.slice(0, t)), this._counts = i;
        }
        reverse(e, t) {
            let n = Math.floor((e + t) / 2) - e;
            for(let i = 0; i < n; i++){
                let s = this._counts[e + i];
                this._counts[e + i] = this._counts[t - i - 1], this._counts[t - i - 1] = s;
            }
        }
        emptyBucket(e) {
            let t = this._counts[e];
            return this._counts[e] = 0, t;
        }
        increment(e, t) {
            this._counts[e] += t;
        }
        decrement(e, t) {
            this._counts[e] >= t ? this._counts[e] -= t : this._counts[e] = 0;
        }
        clone() {
            return new r([
                ...this._counts
            ]);
        }
    };
});
var Ba = c((Y)=>{
    "use strict";
    Object.defineProperty(Y, "__esModule", {
        value: !0
    });
    Y.getSignificand = Y.getNormalBase2 = Y.MIN_VALUE = Y.MAX_NORMAL_EXPONENT = Y.MIN_NORMAL_EXPONENT = Y.SIGNIFICAND_WIDTH = void 0;
    Y.SIGNIFICAND_WIDTH = 52;
    var NT = 2146435072, CT = 1048575, Ua = 1023;
    Y.MIN_NORMAL_EXPONENT = -Ua + 1;
    Y.MAX_NORMAL_EXPONENT = Ua;
    Y.MIN_VALUE = Math.pow(2, -1022);
    function wT(r) {
        let e = new DataView(new ArrayBuffer(8));
        return e.setFloat64(0, r), ((e.getUint32(0) & NT) >> 20) - Ua;
    }
    Y.getNormalBase2 = wT;
    function xT(r) {
        let e = new DataView(new ArrayBuffer(8));
        e.setFloat64(0, r);
        let t = e.getUint32(0), n = e.getUint32(4);
        return (t & CT) * Math.pow(2, 32) + n;
    }
    Y.getSignificand = xT;
});
var xi = c((Gt)=>{
    "use strict";
    Object.defineProperty(Gt, "__esModule", {
        value: !0
    });
    Gt.nextGreaterSquare = Gt.ldexp = void 0;
    function DT(r, e) {
        return r === 0 || r === Number.POSITIVE_INFINITY || r === Number.NEGATIVE_INFINITY || Number.isNaN(r) ? r : r * Math.pow(2, e);
    }
    Gt.ldexp = DT;
    function UT(r) {
        return r--, r |= r >> 1, r |= r >> 2, r |= r >> 4, r |= r >> 8, r |= r >> 16, r++, r;
    }
    Gt.nextGreaterSquare = UT;
});
var Ui = c((Di)=>{
    "use strict";
    Object.defineProperty(Di, "__esModule", {
        value: !0
    });
    Di.MappingError = void 0;
    var qa = class extends Error {
    };
    Di.MappingError = qa;
});
var c_ = c((Bi)=>{
    "use strict";
    Object.defineProperty(Bi, "__esModule", {
        value: !0
    });
    Bi.ExponentMapping = void 0;
    var Vt = Ba(), BT = xi(), u_ = Ui(), Ga = class {
        constructor(e){
            this._shift = -e;
        }
        mapToIndex(e) {
            if (e < Vt.MIN_VALUE) return this._minNormalLowerBoundaryIndex();
            let t = Vt.getNormalBase2(e), n = this._rightShift(Vt.getSignificand(e) - 1, Vt.SIGNIFICAND_WIDTH);
            return t + n >> this._shift;
        }
        lowerBoundary(e) {
            let t = this._minNormalLowerBoundaryIndex();
            if (e < t) throw new u_.MappingError(`underflow: ${e} is < minimum lower boundary: ${t}`);
            let n = this._maxNormalLowerBoundaryIndex();
            if (e > n) throw new u_.MappingError(`overflow: ${e} is > maximum lower boundary: ${n}`);
            return BT.ldexp(1, e << this._shift);
        }
        get scale() {
            return this._shift === 0 ? 0 : -this._shift;
        }
        _minNormalLowerBoundaryIndex() {
            let e = Vt.MIN_NORMAL_EXPONENT >> this._shift;
            return this._shift < 2 && e--, e;
        }
        _maxNormalLowerBoundaryIndex() {
            return Vt.MAX_NORMAL_EXPONENT >> this._shift;
        }
        _rightShift(e, t) {
            return Math.floor(e * Math.pow(2, -t));
        }
    };
    Bi.ExponentMapping = Ga;
});
var __ = c((qi)=>{
    "use strict";
    Object.defineProperty(qi, "__esModule", {
        value: !0
    });
    qi.LogarithmMapping = void 0;
    var jt = Ba(), l_ = xi(), d_ = Ui(), Va = class {
        constructor(e){
            this._scale = e, this._scaleFactor = l_.ldexp(Math.LOG2E, e), this._inverseFactor = l_.ldexp(Math.LN2, -e);
        }
        mapToIndex(e) {
            if (e <= jt.MIN_VALUE) return this._minNormalLowerBoundaryIndex() - 1;
            if (jt.getSignificand(e) === 0) return (jt.getNormalBase2(e) << this._scale) - 1;
            let t = Math.floor(Math.log(e) * this._scaleFactor), n = this._maxNormalLowerBoundaryIndex();
            return t >= n ? n : t;
        }
        lowerBoundary(e) {
            let t = this._maxNormalLowerBoundaryIndex();
            if (e >= t) {
                if (e === t) return 2 * Math.exp((e - (1 << this._scale)) / this._scaleFactor);
                throw new d_.MappingError(`overflow: ${e} is > maximum lower boundary: ${t}`);
            }
            let n = this._minNormalLowerBoundaryIndex();
            if (e <= n) {
                if (e === n) return jt.MIN_VALUE;
                if (e === n - 1) return Math.exp((e + (1 << this._scale)) / this._scaleFactor) / 2;
                throw new d_.MappingError(`overflow: ${e} is < minimum lower boundary: ${n}`);
            }
            return Math.exp(e * this._inverseFactor);
        }
        get scale() {
            return this._scale;
        }
        _minNormalLowerBoundaryIndex() {
            return jt.MIN_NORMAL_EXPONENT << this._scale;
        }
        _maxNormalLowerBoundaryIndex() {
            return (jt.MAX_NORMAL_EXPONENT + 1 << this._scale) - 1;
        }
    };
    qi.LogarithmMapping = Va;
});
var f_ = c((Gi)=>{
    "use strict";
    Object.defineProperty(Gi, "__esModule", {
        value: !0
    });
    Gi.getMapping = void 0;
    var qT = c_(), GT = __(), VT = Ui(), p_ = -10, h_ = 20, jT = Array.from({
        length: 31
    }, (r, e)=>e > 10 ? new GT.LogarithmMapping(e - 10) : new qT.ExponentMapping(e - 10));
    function FT(r) {
        if (r > h_ || r < p_) throw new VT.MappingError(`expected scale >= ${p_} && <= ${h_}, got: ${r}`);
        return jT[r + 10];
    }
    Gi.getMapping = FT;
});
var g_ = c((Ht)=>{
    "use strict";
    Object.defineProperty(Ht, "__esModule", {
        value: !0
    });
    Ht.ExponentialHistogramAggregator = Ht.ExponentialHistogramAccumulation = void 0;
    var HT = Ut(), kT = Dt(), $T = (p(), f(d)), ja = Re(), E_ = a_(), m_ = f_(), XT = xi(), Ft = class r {
        constructor(e, t){
            this.low = e, this.high = t;
        }
        static combine(e, t) {
            return new r(Math.min(e.low, t.low), Math.max(e.high, t.high));
        }
    }, WT = 20, KT = 160, Fa = 2, Vi = class r {
        constructor(e = e, t = KT, n = !0, i = 0, s = 0, o = 0, a = Number.POSITIVE_INFINITY, u = Number.NEGATIVE_INFINITY, l = new E_.Buckets, _ = new E_.Buckets, E = (0, m_.getMapping)(WT)){
            this.startTime = e, this._maxSize = t, this._recordMinMax = n, this._sum = i, this._count = s, this._zeroCount = o, this._min = a, this._max = u, this._positive = l, this._negative = _, this._mapping = E, this._maxSize < Fa && ($T.diag.warn(`Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${Fa}`), this._maxSize = Fa);
        }
        record(e) {
            this.updateByIncrement(e, 1);
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return {
                hasMinMax: this._recordMinMax,
                min: this.min,
                max: this.max,
                sum: this.sum,
                positive: {
                    offset: this.positive.offset,
                    bucketCounts: this.positive.counts()
                },
                negative: {
                    offset: this.negative.offset,
                    bucketCounts: this.negative.counts()
                },
                count: this.count,
                scale: this.scale,
                zeroCount: this.zeroCount
            };
        }
        get sum() {
            return this._sum;
        }
        get min() {
            return this._min;
        }
        get max() {
            return this._max;
        }
        get count() {
            return this._count;
        }
        get zeroCount() {
            return this._zeroCount;
        }
        get scale() {
            return this._count === this._zeroCount ? 0 : this._mapping.scale;
        }
        get positive() {
            return this._positive;
        }
        get negative() {
            return this._negative;
        }
        updateByIncrement(e, t) {
            if (e > this._max && (this._max = e), e < this._min && (this._min = e), this._count += t, e === 0) {
                this._zeroCount += t;
                return;
            }
            this._sum += e * t, e > 0 ? this._updateBuckets(this._positive, e, t) : this._updateBuckets(this._negative, -e, t);
        }
        merge(e) {
            this._count === 0 ? (this._min = e.min, this._max = e.max) : e.count !== 0 && (e.min < this.min && (this._min = e.min), e.max > this.max && (this._max = e.max)), this.startTime = e.startTime, this._sum += e.sum, this._count += e.count, this._zeroCount += e.zeroCount;
            let t = this._minScale(e);
            this._downscale(this.scale - t), this._mergeBuckets(this.positive, e, e.positive, t), this._mergeBuckets(this.negative, e, e.negative, t);
        }
        diff(e) {
            this._min = 1 / 0, this._max = -1 / 0, this._sum -= e.sum, this._count -= e.count, this._zeroCount -= e.zeroCount;
            let t = this._minScale(e);
            this._downscale(this.scale - t), this._diffBuckets(this.positive, e, e.positive, t), this._diffBuckets(this.negative, e, e.negative, t);
        }
        clone() {
            return new r(this.startTime, this._maxSize, this._recordMinMax, this._sum, this._count, this._zeroCount, this._min, this._max, this.positive.clone(), this.negative.clone(), this._mapping);
        }
        _updateBuckets(e, t, n) {
            let i = this._mapping.mapToIndex(t), s = !1, o = 0, a = 0;
            if (e.length === 0 ? (e.indexStart = i, e.indexEnd = e.indexStart, e.indexBase = e.indexStart) : i < e.indexStart && e.indexEnd - i >= this._maxSize ? (s = !0, a = i, o = e.indexEnd) : i > e.indexEnd && i - e.indexStart >= this._maxSize && (s = !0, a = e.indexStart, o = i), s) {
                let u = this._changeScale(o, a);
                this._downscale(u), i = this._mapping.mapToIndex(t);
            }
            this._incrementIndexBy(e, i, n);
        }
        _incrementIndexBy(e, t, n) {
            if (n === 0) return;
            if (t < e.indexStart) {
                let s = e.indexEnd - t;
                s >= e.backing.length && this._grow(e, s + 1), e.indexStart = t;
            } else if (t > e.indexEnd) {
                let s = t - e.indexStart;
                s >= e.backing.length && this._grow(e, s + 1), e.indexEnd = t;
            }
            let i = t - e.indexBase;
            i < 0 && (i += e.backing.length), e.incrementBucket(i, n);
        }
        _grow(e, t) {
            let n = e.backing.length, i = e.indexBase - e.indexStart, s = n - i, o = (0, XT.nextGreaterSquare)(t);
            o > this._maxSize && (o = this._maxSize);
            let a = o - i;
            e.backing.growTo(o, s, a);
        }
        _changeScale(e, t) {
            let n = 0;
            for(; e - t >= this._maxSize;)e >>= 1, t >>= 1, n++;
            return n;
        }
        _downscale(e) {
            if (e === 0) return;
            if (e < 0) throw new Error(`impossible change of scale: ${this.scale}`);
            let t = this._mapping.scale - e;
            this._positive.downscale(e), this._negative.downscale(e), this._mapping = (0, m_.getMapping)(t);
        }
        _minScale(e) {
            let t = Math.min(this.scale, e.scale), n = Ft.combine(this._highLowAtScale(this.positive, this.scale, t), this._highLowAtScale(e.positive, e.scale, t)), i = Ft.combine(this._highLowAtScale(this.negative, this.scale, t), this._highLowAtScale(e.negative, e.scale, t));
            return Math.min(t - this._changeScale(n.high, n.low), t - this._changeScale(i.high, i.low));
        }
        _highLowAtScale(e, t, n) {
            if (e.length === 0) return new Ft(0, -1);
            let i = t - n;
            return new Ft(e.indexStart >> i, e.indexEnd >> i);
        }
        _mergeBuckets(e, t, n, i) {
            let s = n.offset, o = t.scale - i;
            for(let a = 0; a < n.length; a++)this._incrementIndexBy(e, s + a >> o, n.at(a));
        }
        _diffBuckets(e, t, n, i) {
            let s = n.offset, o = t.scale - i;
            for(let a = 0; a < n.length; a++){
                let l = (s + a >> o) - e.indexBase;
                l < 0 && (l += e.backing.length), e.decrementBucket(l, n.at(a));
            }
            e.trim();
        }
    };
    Ht.ExponentialHistogramAccumulation = Vi;
    var Ha = class {
        constructor(e, t){
            this._maxSize = e, this._recordMinMax = t, this.kind = HT.AggregatorKind.EXPONENTIAL_HISTOGRAM;
        }
        createAccumulation(e) {
            return new Vi(e, this._maxSize, this._recordMinMax);
        }
        merge(e, t) {
            let n = t.clone();
            return n.merge(e), n;
        }
        diff(e, t) {
            let n = t.clone();
            return n.diff(e), n;
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: kT.DataPointType.EXPONENTIAL_HISTOGRAM,
                dataPoints: n.map(([s, o])=>{
                    let a = o.toPointValue(), u = e.type === ja.InstrumentType.UP_DOWN_COUNTER || e.type === ja.InstrumentType.OBSERVABLE_GAUGE || e.type === ja.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
                    return {
                        attributes: s,
                        startTime: o.startTime,
                        endTime: i,
                        value: {
                            min: a.hasMinMax ? a.min : void 0,
                            max: a.hasMinMax ? a.max : void 0,
                            sum: u ? void 0 : a.sum,
                            positive: {
                                offset: a.positive.offset,
                                bucketCounts: a.positive.bucketCounts
                            },
                            negative: {
                                offset: a.negative.offset,
                                bucketCounts: a.negative.bucketCounts
                            },
                            count: a.count,
                            scale: a.scale,
                            zeroCount: a.zeroCount
                        }
                    };
                })
            };
        }
    };
    Ht.ExponentialHistogramAggregator = Ha;
});
var T_ = c(($t)=>{
    "use strict";
    Object.defineProperty($t, "__esModule", {
        value: !0
    });
    $t.LastValueAggregator = $t.LastValueAccumulation = void 0;
    var zT = Ut(), Lr = T(), YT = Dt(), kt = class {
        constructor(e, t = 0, n = [
            0,
            0
        ]){
            this.startTime = e, this._current = t, this.sampleTime = n;
        }
        record(e) {
            this._current = e, this.sampleTime = (0, Lr.millisToHrTime)(Date.now());
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return this._current;
        }
    };
    $t.LastValueAccumulation = kt;
    var ka = class {
        constructor(){
            this.kind = zT.AggregatorKind.LAST_VALUE;
        }
        createAccumulation(e) {
            return new kt(e);
        }
        merge(e, t) {
            let n = (0, Lr.hrTimeToMicroseconds)(t.sampleTime) >= (0, Lr.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
            return new kt(e.startTime, n.toPointValue(), n.sampleTime);
        }
        diff(e, t) {
            let n = (0, Lr.hrTimeToMicroseconds)(t.sampleTime) >= (0, Lr.hrTimeToMicroseconds)(e.sampleTime) ? t : e;
            return new kt(t.startTime, n.toPointValue(), n.sampleTime);
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: YT.DataPointType.GAUGE,
                dataPoints: n.map(([s, o])=>({
                        attributes: s,
                        startTime: o.startTime,
                        endTime: i,
                        value: o.toPointValue()
                    }))
            };
        }
    };
    $t.LastValueAggregator = ka;
});
var S_ = c((Xt)=>{
    "use strict";
    Object.defineProperty(Xt, "__esModule", {
        value: !0
    });
    Xt.SumAggregator = Xt.SumAccumulation = void 0;
    var QT = Ut(), ZT = Dt(), xe = class {
        constructor(e, t, n = 0, i = !1){
            this.startTime = e, this.monotonic = t, this._current = n, this.reset = i;
        }
        record(e) {
            this.monotonic && e < 0 || (this._current += e);
        }
        setStartTime(e) {
            this.startTime = e;
        }
        toPointValue() {
            return this._current;
        }
    };
    Xt.SumAccumulation = xe;
    var $a = class {
        constructor(e){
            this.monotonic = e, this.kind = QT.AggregatorKind.SUM;
        }
        createAccumulation(e) {
            return new xe(e, this.monotonic);
        }
        merge(e, t) {
            let n = e.toPointValue(), i = t.toPointValue();
            return t.reset ? new xe(t.startTime, this.monotonic, i, t.reset) : new xe(e.startTime, this.monotonic, n + i);
        }
        diff(e, t) {
            let n = e.toPointValue(), i = t.toPointValue();
            return this.monotonic && n > i ? new xe(t.startTime, this.monotonic, i, !0) : new xe(t.startTime, this.monotonic, i - n);
        }
        toMetricData(e, t, n, i) {
            return {
                descriptor: e,
                aggregationTemporality: t,
                dataPointType: ZT.DataPointType.SUM,
                dataPoints: n.map(([s, o])=>({
                        attributes: s,
                        startTime: o.startTime,
                        endTime: i,
                        value: o.toPointValue()
                    })),
                isMonotonic: this.monotonic
            };
        }
    };
    Xt.SumAggregator = $a;
});
var A_ = c((le)=>{
    "use strict";
    var JT = le && le.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), Mr = le && le.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && JT(e, r, t);
    };
    Object.defineProperty(le, "__esModule", {
        value: !0
    });
    Mr(n_(), le);
    Mr(o_(), le);
    Mr(g_(), le);
    Mr(T_(), le);
    Mr(S_(), le);
});
var ki = c((G)=>{
    "use strict";
    Object.defineProperty(G, "__esModule", {
        value: !0
    });
    G.DefaultAggregation = G.ExponentialHistogramAggregation = G.ExplicitBucketHistogramAggregation = G.HistogramAggregation = G.LastValueAggregation = G.SumAggregation = G.DropAggregation = G.Aggregation = void 0;
    var eS = (p(), f(d)), ct = A_(), be = Re(), ge = class {
        static Drop() {
            return O_;
        }
        static Sum() {
            return R_;
        }
        static LastValue() {
            return b_;
        }
        static Histogram() {
            return P_;
        }
        static ExponentialHistogram() {
            return tS;
        }
        static Default() {
            return rS;
        }
    };
    G.Aggregation = ge;
    var Nr = class r extends ge {
        createAggregator(e) {
            return r.DEFAULT_INSTANCE;
        }
    };
    G.DropAggregation = Nr;
    Nr.DEFAULT_INSTANCE = new ct.DropAggregator;
    var Wt = class r extends ge {
        createAggregator(e) {
            switch(e.type){
                case be.InstrumentType.COUNTER:
                case be.InstrumentType.OBSERVABLE_COUNTER:
                case be.InstrumentType.HISTOGRAM:
                    return r.MONOTONIC_INSTANCE;
                default:
                    return r.NON_MONOTONIC_INSTANCE;
            }
        }
    };
    G.SumAggregation = Wt;
    Wt.MONOTONIC_INSTANCE = new ct.SumAggregator(!0);
    Wt.NON_MONOTONIC_INSTANCE = new ct.SumAggregator(!1);
    var Cr = class r extends ge {
        createAggregator(e) {
            return r.DEFAULT_INSTANCE;
        }
    };
    G.LastValueAggregation = Cr;
    Cr.DEFAULT_INSTANCE = new ct.LastValueAggregator;
    var wr = class r extends ge {
        createAggregator(e) {
            return r.DEFAULT_INSTANCE;
        }
    };
    G.HistogramAggregation = wr;
    wr.DEFAULT_INSTANCE = new ct.HistogramAggregator([
        0,
        5,
        10,
        25,
        50,
        75,
        100,
        250,
        500,
        750,
        1e3,
        2500,
        5e3,
        7500,
        1e4
    ], !0);
    var ji = class extends ge {
        constructor(e, t = !0){
            if (super(), this._recordMinMax = t, e === void 0 || e.length === 0) throw new Error("HistogramAggregator should be created with boundaries.");
            e = e.concat(), e = e.sort((s, o)=>s - o);
            let n = e.lastIndexOf(-1 / 0), i = e.indexOf(1 / 0);
            i === -1 && (i = void 0), this._boundaries = e.slice(n + 1, i);
        }
        createAggregator(e) {
            return new ct.HistogramAggregator(this._boundaries, this._recordMinMax);
        }
    };
    G.ExplicitBucketHistogramAggregation = ji;
    var Fi = class extends ge {
        constructor(e = 160, t = !0){
            super(), this._maxSize = e, this._recordMinMax = t;
        }
        createAggregator(e) {
            return new ct.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
        }
    };
    G.ExponentialHistogramAggregation = Fi;
    var Hi = class extends ge {
        _resolve(e) {
            switch(e.type){
                case be.InstrumentType.COUNTER:
                case be.InstrumentType.UP_DOWN_COUNTER:
                case be.InstrumentType.OBSERVABLE_COUNTER:
                case be.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
                    return R_;
                case be.InstrumentType.OBSERVABLE_GAUGE:
                    return b_;
                case be.InstrumentType.HISTOGRAM:
                    return e.advice.explicitBucketBoundaries ? new ji(e.advice.explicitBucketBoundaries) : P_;
            }
            return eS.diag.warn(`Unable to recognize instrument type: ${e.type}`), O_;
        }
        createAggregator(e) {
            return this._resolve(e).createAggregator(e);
        }
    };
    G.DefaultAggregation = Hi;
    var O_ = new Nr, R_ = new Wt, b_ = new Cr, P_ = new wr, tS = new Fi, rS = new Hi;
});
var Xa = c((Kt)=>{
    "use strict";
    Object.defineProperty(Kt, "__esModule", {
        value: !0
    });
    Kt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = Kt.DEFAULT_AGGREGATION_SELECTOR = void 0;
    var nS = ki(), iS = Mi(), sS = (r)=>nS.Aggregation.Default();
    Kt.DEFAULT_AGGREGATION_SELECTOR = sS;
    var oS = (r)=>iS.AggregationTemporality.CUMULATIVE;
    Kt.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR = oS;
});
var Ka = c((Xi)=>{
    "use strict";
    Object.defineProperty(Xi, "__esModule", {
        value: !0
    });
    Xi.MetricReader = void 0;
    var y_ = (p(), f(d)), $i = me(), v_ = Xa(), Wa = class {
        constructor(e){
            var t, n, i;
            this._shutdown = !1, this._aggregationSelector = (t = e?.aggregationSelector) !== null && t !== void 0 ? t : v_.DEFAULT_AGGREGATION_SELECTOR, this._aggregationTemporalitySelector = (n = e?.aggregationTemporalitySelector) !== null && n !== void 0 ? n : v_.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR, this._metricProducers = (i = e?.metricProducers) !== null && i !== void 0 ? i : [];
        }
        setMetricProducer(e) {
            if (this._sdkMetricProducer) throw new Error("MetricReader can not be bound to a MeterProvider again.");
            this._sdkMetricProducer = e, this.onInitialized();
        }
        selectAggregation(e) {
            return this._aggregationSelector(e);
        }
        selectAggregationTemporality(e) {
            return this._aggregationTemporalitySelector(e);
        }
        onInitialized() {}
        async collect(e) {
            if (this._sdkMetricProducer === void 0) throw new Error("MetricReader is not bound to a MetricProducer");
            if (this._shutdown) throw new Error("MetricReader is shutdown");
            let [t, ...n] = await Promise.all([
                this._sdkMetricProducer.collect({
                    timeoutMillis: e?.timeoutMillis
                }),
                ...this._metricProducers.map((a)=>a.collect({
                        timeoutMillis: e?.timeoutMillis
                    }))
            ]), i = t.errors.concat((0, $i.FlatMap)(n, (a)=>a.errors)), s = t.resourceMetrics.resource, o = t.resourceMetrics.scopeMetrics.concat((0, $i.FlatMap)(n, (a)=>a.resourceMetrics.scopeMetrics));
            return {
                resourceMetrics: {
                    resource: s,
                    scopeMetrics: o
                },
                errors: i
            };
        }
        async shutdown(e) {
            if (this._shutdown) {
                y_.diag.error("Cannot call shutdown twice.");
                return;
            }
            e?.timeoutMillis == null ? await this.onShutdown() : await (0, $i.callWithTimeout)(this.onShutdown(), e.timeoutMillis), this._shutdown = !0;
        }
        async forceFlush(e) {
            if (this._shutdown) {
                y_.diag.warn("Cannot forceFlush on already shutdown MetricReader.");
                return;
            }
            if (e?.timeoutMillis == null) {
                await this.onForceFlush();
                return;
            }
            await (0, $i.callWithTimeout)(this.onForceFlush(), e.timeoutMillis);
        }
    };
    Xi.MetricReader = Wa;
});
var M_ = c((Ki)=>{
    "use strict";
    Object.defineProperty(Ki, "__esModule", {
        value: !0
    });
    Ki.PeriodicExportingMetricReader = void 0;
    var I_ = (p(), f(d)), Wi = T(), aS = Ka(), L_ = me(), uS = (p(), f(d)), za = class extends aS.MetricReader {
        constructor(e){
            var t, n, i, s;
            if (super({
                aggregationSelector: (t = e.exporter.selectAggregation) === null || t === void 0 ? void 0 : t.bind(e.exporter),
                aggregationTemporalitySelector: (n = e.exporter.selectAggregationTemporality) === null || n === void 0 ? void 0 : n.bind(e.exporter),
                metricProducers: e.metricProducers
            }), e.exportIntervalMillis !== void 0 && e.exportIntervalMillis <= 0) throw Error("exportIntervalMillis must be greater than 0");
            if (e.exportTimeoutMillis !== void 0 && e.exportTimeoutMillis <= 0) throw Error("exportTimeoutMillis must be greater than 0");
            if (e.exportTimeoutMillis !== void 0 && e.exportIntervalMillis !== void 0 && e.exportIntervalMillis < e.exportTimeoutMillis) throw Error("exportIntervalMillis must be greater than or equal to exportTimeoutMillis");
            this._exportInterval = (i = e.exportIntervalMillis) !== null && i !== void 0 ? i : 6e4, this._exportTimeout = (s = e.exportTimeoutMillis) !== null && s !== void 0 ? s : 3e4, this._exporter = e.exporter;
        }
        async _runOnce() {
            try {
                await (0, L_.callWithTimeout)(this._doRun(), this._exportTimeout);
            } catch (e) {
                if (e instanceof L_.TimeoutError) {
                    I_.diag.error("Export took longer than %s milliseconds and timed out.", this._exportTimeout);
                    return;
                }
                (0, Wi.globalErrorHandler)(e);
            }
        }
        async _doRun() {
            var e, t;
            let { resourceMetrics: n, errors: i } = await this.collect({
                timeoutMillis: this._exportTimeout
            });
            i.length > 0 && I_.diag.error("PeriodicExportingMetricReader: metrics collection errors", ...i);
            let s = async ()=>{
                let o = await Wi.internal._export(this._exporter, n);
                if (o.code !== Wi.ExportResultCode.SUCCESS) throw new Error(`PeriodicExportingMetricReader: metrics export failed (error ${o.error})`);
            };
            n.resource.asyncAttributesPending ? (t = (e = n.resource).waitForAsyncAttributes) === null || t === void 0 || t.call(e).then(s, (o)=>uS.diag.debug("Error while resolving async portion of resource: ", o)) : await s();
        }
        onInitialized() {
            this._interval = setInterval(()=>{
                this._runOnce();
            }, this._exportInterval), (0, Wi.unrefTimer)(this._interval);
        }
        async onForceFlush() {
            await this._runOnce(), await this._exporter.forceFlush();
        }
        async onShutdown() {
            this._interval && clearInterval(this._interval), await this._exporter.shutdown();
        }
    };
    Ki.PeriodicExportingMetricReader = za;
});
var C_ = c((zi)=>{
    "use strict";
    Object.defineProperty(zi, "__esModule", {
        value: !0
    });
    zi.InMemoryMetricExporter = void 0;
    var N_ = T(), Ya = class {
        constructor(e){
            this._shutdown = !1, this._metrics = [], this._aggregationTemporality = e;
        }
        export(e, t) {
            if (this._shutdown) {
                setTimeout(()=>t({
                        code: N_.ExportResultCode.FAILED
                    }), 0);
                return;
            }
            this._metrics.push(e), setTimeout(()=>t({
                    code: N_.ExportResultCode.SUCCESS
                }), 0);
        }
        getMetrics() {
            return this._metrics;
        }
        forceFlush() {
            return Promise.resolve();
        }
        reset() {
            this._metrics = [];
        }
        selectAggregationTemporality(e) {
            return this._aggregationTemporality;
        }
        shutdown() {
            return this._shutdown = !0, Promise.resolve();
        }
    };
    zi.InMemoryMetricExporter = Ya;
});
var x_ = c((Yi)=>{
    "use strict";
    Object.defineProperty(Yi, "__esModule", {
        value: !0
    });
    Yi.ConsoleMetricExporter = void 0;
    var w_ = T(), cS = Xa(), Qa = class r {
        constructor(e){
            var t;
            this._shutdown = !1, this._temporalitySelector = (t = e?.temporalitySelector) !== null && t !== void 0 ? t : cS.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
        }
        export(e, t) {
            if (this._shutdown) {
                setImmediate(t, {
                    code: w_.ExportResultCode.FAILED
                });
                return;
            }
            return r._sendMetrics(e, t);
        }
        forceFlush() {
            return Promise.resolve();
        }
        selectAggregationTemporality(e) {
            return this._temporalitySelector(e);
        }
        shutdown() {
            return this._shutdown = !0, Promise.resolve();
        }
        static _sendMetrics(e, t) {
            for (let n of e.scopeMetrics)for (let i of n.metrics)console.dir({
                descriptor: i.descriptor,
                dataPointType: i.dataPointType,
                dataPoints: i.dataPoints
            });
            t({
                code: w_.ExportResultCode.SUCCESS
            });
        }
    };
    Yi.ConsoleMetricExporter = Qa;
});
var D_ = c((Qi)=>{
    "use strict";
    Object.defineProperty(Qi, "__esModule", {
        value: !0
    });
    Qi.ViewRegistry = void 0;
    var Za = class {
        constructor(){
            this._registeredViews = [];
        }
        addView(e) {
            this._registeredViews.push(e);
        }
        findViews(e, t) {
            return this._registeredViews.filter((i)=>this._matchInstrument(i.instrumentSelector, e) && this._matchMeter(i.meterSelector, t));
        }
        _matchInstrument(e, t) {
            return (e.getType() === void 0 || t.type === e.getType()) && e.getNameFilter().match(t.name) && e.getUnitFilter().match(t.unit);
        }
        _matchMeter(e, t) {
            return e.getNameFilter().match(t.name) && (t.version === void 0 || e.getVersionFilter().match(t.version)) && (t.schemaUrl === void 0 || e.getSchemaUrlFilter().match(t.schemaUrl));
        }
    };
    Qi.ViewRegistry = Za;
});
var Zi = c((D)=>{
    "use strict";
    Object.defineProperty(D, "__esModule", {
        value: !0
    });
    D.isObservableInstrument = D.ObservableUpDownCounterInstrument = D.ObservableGaugeInstrument = D.ObservableCounterInstrument = D.ObservableInstrument = D.HistogramInstrument = D.CounterInstrument = D.UpDownCounterInstrument = D.SyncInstrument = void 0;
    var zt = (p(), f(d)), lS = T(), Yt = class {
        constructor(e, t){
            this._writableMetricStorage = e, this._descriptor = t;
        }
        _record(e, t = {}, n = zt.context.active()) {
            if (typeof e != "number") {
                zt.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${e}`);
                return;
            }
            this._descriptor.valueType === zt.ValueType.INT && !Number.isInteger(e) && (zt.diag.warn(`INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`), e = Math.trunc(e), !Number.isInteger(e)) || this._writableMetricStorage.record(e, t, n, (0, lS.millisToHrTime)(Date.now()));
        }
    };
    D.SyncInstrument = Yt;
    var Ja = class extends Yt {
        add(e, t, n) {
            this._record(e, t, n);
        }
    };
    D.UpDownCounterInstrument = Ja;
    var eu = class extends Yt {
        add(e, t, n) {
            if (e < 0) {
                zt.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${e}`);
                return;
            }
            this._record(e, t, n);
        }
    };
    D.CounterInstrument = eu;
    var tu = class extends Yt {
        record(e, t, n) {
            if (e < 0) {
                zt.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${e}`);
                return;
            }
            this._record(e, t, n);
        }
    };
    D.HistogramInstrument = tu;
    var lt = class {
        constructor(e, t, n){
            this._observableRegistry = n, this._descriptor = e, this._metricStorages = t;
        }
        addCallback(e) {
            this._observableRegistry.addCallback(e, this);
        }
        removeCallback(e) {
            this._observableRegistry.removeCallback(e, this);
        }
    };
    D.ObservableInstrument = lt;
    var ru = class extends lt {
    };
    D.ObservableCounterInstrument = ru;
    var nu = class extends lt {
    };
    D.ObservableGaugeInstrument = nu;
    var iu = class extends lt {
    };
    D.ObservableUpDownCounterInstrument = iu;
    function dS(r) {
        return r instanceof lt;
    }
    D.isObservableInstrument = dS;
});
var U_ = c((Ji)=>{
    "use strict";
    Object.defineProperty(Ji, "__esModule", {
        value: !0
    });
    Ji.Meter = void 0;
    var oe = Re(), Qt = Zi(), su = class {
        constructor(e){
            this._meterSharedState = e;
        }
        createHistogram(e, t) {
            let n = (0, oe.createInstrumentDescriptor)(e, oe.InstrumentType.HISTOGRAM, t), i = this._meterSharedState.registerMetricStorage(n);
            return new Qt.HistogramInstrument(i, n);
        }
        createCounter(e, t) {
            let n = (0, oe.createInstrumentDescriptor)(e, oe.InstrumentType.COUNTER, t), i = this._meterSharedState.registerMetricStorage(n);
            return new Qt.CounterInstrument(i, n);
        }
        createUpDownCounter(e, t) {
            let n = (0, oe.createInstrumentDescriptor)(e, oe.InstrumentType.UP_DOWN_COUNTER, t), i = this._meterSharedState.registerMetricStorage(n);
            return new Qt.UpDownCounterInstrument(i, n);
        }
        createObservableGauge(e, t) {
            let n = (0, oe.createInstrumentDescriptor)(e, oe.InstrumentType.OBSERVABLE_GAUGE, t), i = this._meterSharedState.registerAsyncMetricStorage(n);
            return new Qt.ObservableGaugeInstrument(n, i, this._meterSharedState.observableRegistry);
        }
        createObservableCounter(e, t) {
            let n = (0, oe.createInstrumentDescriptor)(e, oe.InstrumentType.OBSERVABLE_COUNTER, t), i = this._meterSharedState.registerAsyncMetricStorage(n);
            return new Qt.ObservableCounterInstrument(n, i, this._meterSharedState.observableRegistry);
        }
        createObservableUpDownCounter(e, t) {
            let n = (0, oe.createInstrumentDescriptor)(e, oe.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, t), i = this._meterSharedState.registerAsyncMetricStorage(n);
            return new Qt.ObservableUpDownCounterInstrument(n, i, this._meterSharedState.observableRegistry);
        }
        addBatchObservableCallback(e, t) {
            this._meterSharedState.observableRegistry.addBatchCallback(e, t);
        }
        removeBatchObservableCallback(e, t) {
            this._meterSharedState.observableRegistry.removeBatchCallback(e, t);
        }
    };
    Ji.Meter = su;
});
var au = c((es)=>{
    "use strict";
    Object.defineProperty(es, "__esModule", {
        value: !0
    });
    es.MetricStorage = void 0;
    var _S = Re(), ou = class {
        constructor(e){
            this._instrumentDescriptor = e;
        }
        getInstrumentDescriptor() {
            return this._instrumentDescriptor;
        }
        updateDescription(e) {
            this._instrumentDescriptor = (0, _S.createInstrumentDescriptor)(this._instrumentDescriptor.name, this._instrumentDescriptor.type, {
                description: e,
                valueType: this._instrumentDescriptor.valueType,
                unit: this._instrumentDescriptor.unit,
                advice: this._instrumentDescriptor.advice
            });
        }
    };
    es.MetricStorage = ou;
});
var xr = c((Zt)=>{
    "use strict";
    Object.defineProperty(Zt, "__esModule", {
        value: !0
    });
    Zt.AttributeHashMap = Zt.HashMap = void 0;
    var pS = me(), ts = class {
        constructor(e){
            this._hash = e, this._valueMap = new Map, this._keyMap = new Map;
        }
        get(e, t) {
            return t ?? (t = this._hash(e)), this._valueMap.get(t);
        }
        getOrDefault(e, t) {
            let n = this._hash(e);
            if (this._valueMap.has(n)) return this._valueMap.get(n);
            let i = t();
            return this._keyMap.has(n) || this._keyMap.set(n, e), this._valueMap.set(n, i), i;
        }
        set(e, t, n) {
            n ?? (n = this._hash(e)), this._keyMap.has(n) || this._keyMap.set(n, e), this._valueMap.set(n, t);
        }
        has(e, t) {
            return t ?? (t = this._hash(e)), this._valueMap.has(t);
        }
        *keys() {
            let e = this._keyMap.entries(), t = e.next();
            for(; t.done !== !0;)yield [
                t.value[1],
                t.value[0]
            ], t = e.next();
        }
        *entries() {
            let e = this._valueMap.entries(), t = e.next();
            for(; t.done !== !0;)yield [
                this._keyMap.get(t.value[0]),
                t.value[1],
                t.value[0]
            ], t = e.next();
        }
        get size() {
            return this._valueMap.size;
        }
    };
    Zt.HashMap = ts;
    var uu = class extends ts {
        constructor(){
            super(pS.hashAttributes);
        }
    };
    Zt.AttributeHashMap = uu;
});
var du = c((rs)=>{
    "use strict";
    Object.defineProperty(rs, "__esModule", {
        value: !0
    });
    rs.DeltaMetricProcessor = void 0;
    var cu = xr(), lu = class {
        constructor(e){
            this._aggregator = e, this._activeCollectionStorage = new cu.AttributeHashMap, this._cumulativeMemoStorage = new cu.AttributeHashMap;
        }
        record(e, t, n, i) {
            let s = this._activeCollectionStorage.getOrDefault(t, ()=>this._aggregator.createAccumulation(i));
            s?.record(e);
        }
        batchCumulate(e, t) {
            Array.from(e.entries()).forEach(([n, i, s])=>{
                let o = this._aggregator.createAccumulation(t);
                o?.record(i);
                let a = o;
                if (this._cumulativeMemoStorage.has(n, s)) {
                    let u = this._cumulativeMemoStorage.get(n, s);
                    a = this._aggregator.diff(u, o);
                }
                if (this._activeCollectionStorage.has(n, s)) {
                    let u = this._activeCollectionStorage.get(n, s);
                    a = this._aggregator.merge(u, a);
                }
                this._cumulativeMemoStorage.set(n, o, s), this._activeCollectionStorage.set(n, a, s);
            });
        }
        collect() {
            let e = this._activeCollectionStorage;
            return this._activeCollectionStorage = new cu.AttributeHashMap, e;
        }
    };
    rs.DeltaMetricProcessor = lu;
});
var pu = c((ns)=>{
    "use strict";
    Object.defineProperty(ns, "__esModule", {
        value: !0
    });
    ns.TemporalMetricProcessor = void 0;
    var hS = Mi(), fS = xr(), _u = class r {
        constructor(e, t){
            this._aggregator = e, this._unreportedAccumulations = new Map, this._reportHistory = new Map, t.forEach((n)=>{
                this._unreportedAccumulations.set(n, []);
            });
        }
        buildMetrics(e, t, n, i) {
            this._stashAccumulations(n);
            let s = this._getMergedUnreportedAccumulations(e), o = s, a;
            if (this._reportHistory.has(e)) {
                let l = this._reportHistory.get(e), _ = l.collectionTime;
                a = l.aggregationTemporality, a === hS.AggregationTemporality.CUMULATIVE ? o = r.merge(l.accumulations, s, this._aggregator) : o = r.calibrateStartTime(l.accumulations, s, _);
            } else a = e.selectAggregationTemporality(t.type);
            this._reportHistory.set(e, {
                accumulations: o,
                collectionTime: i,
                aggregationTemporality: a
            });
            let u = ES(o);
            if (u.length !== 0) return this._aggregator.toMetricData(t, a, u, i);
        }
        _stashAccumulations(e) {
            let t = this._unreportedAccumulations.keys();
            for (let n of t){
                let i = this._unreportedAccumulations.get(n);
                i === void 0 && (i = [], this._unreportedAccumulations.set(n, i)), i.push(e);
            }
        }
        _getMergedUnreportedAccumulations(e) {
            let t = new fS.AttributeHashMap, n = this._unreportedAccumulations.get(e);
            if (this._unreportedAccumulations.set(e, []), n === void 0) return t;
            for (let i of n)t = r.merge(t, i, this._aggregator);
            return t;
        }
        static merge(e, t, n) {
            let i = e, s = t.entries(), o = s.next();
            for(; o.done !== !0;){
                let [a, u, l] = o.value;
                if (e.has(a, l)) {
                    let _ = e.get(a, l), E = n.merge(_, u);
                    i.set(a, E, l);
                } else i.set(a, u, l);
                o = s.next();
            }
            return i;
        }
        static calibrateStartTime(e, t, n) {
            for (let [i, s] of e.keys()){
                let o = t.get(i, s);
                o?.setStartTime(n);
            }
            return t;
        }
    };
    ns.TemporalMetricProcessor = _u;
    function ES(r) {
        return Array.from(r.entries());
    }
});
var B_ = c((is)=>{
    "use strict";
    Object.defineProperty(is, "__esModule", {
        value: !0
    });
    is.AsyncMetricStorage = void 0;
    var mS = au(), gS = du(), TS = pu(), SS = xr(), hu = class extends mS.MetricStorage {
        constructor(e, t, n, i){
            super(e), this._attributesProcessor = n, this._deltaMetricStorage = new gS.DeltaMetricProcessor(t), this._temporalMetricStorage = new TS.TemporalMetricProcessor(t, i);
        }
        record(e, t) {
            let n = new SS.AttributeHashMap;
            Array.from(e.entries()).forEach(([i, s])=>{
                n.set(this._attributesProcessor.process(i), s);
            }), this._deltaMetricStorage.batchCumulate(n, t);
        }
        collect(e, t) {
            let n = this._deltaMetricStorage.collect();
            return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
        }
    };
    is.AsyncMetricStorage = hu;
});
var F_ = c((Q)=>{
    "use strict";
    Object.defineProperty(Q, "__esModule", {
        value: !0
    });
    Q.getConflictResolutionRecipe = Q.getDescriptionResolutionRecipe = Q.getTypeConflictResolutionRecipe = Q.getUnitConflictResolutionRecipe = Q.getValueTypeConflictResolutionRecipe = Q.getIncompatibilityDetails = void 0;
    function AS(r, e) {
        let t = "";
        return r.unit !== e.unit && (t += `	- Unit '${r.unit}' does not match '${e.unit}'
`), r.type !== e.type && (t += `	- Type '${r.type}' does not match '${e.type}'
`), r.valueType !== e.valueType && (t += `	- Value Type '${r.valueType}' does not match '${e.valueType}'
`), r.description !== e.description && (t += `	- Description '${r.description}' does not match '${e.description}'
`), t;
    }
    Q.getIncompatibilityDetails = AS;
    function q_(r, e) {
        return `	- use valueType '${r.valueType}' on instrument creation or use an instrument name other than '${e.name}'`;
    }
    Q.getValueTypeConflictResolutionRecipe = q_;
    function G_(r, e) {
        return `	- use unit '${r.unit}' on instrument creation or use an instrument name other than '${e.name}'`;
    }
    Q.getUnitConflictResolutionRecipe = G_;
    function V_(r, e) {
        let t = {
            name: e.name,
            type: e.type,
            unit: e.unit
        }, n = JSON.stringify(t);
        return `	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'`;
    }
    Q.getTypeConflictResolutionRecipe = V_;
    function j_(r, e) {
        let t = {
            name: e.name,
            type: e.type,
            unit: e.unit
        }, n = JSON.stringify(t);
        return `	- create a new view with a name other than '${r.name}' and InstrumentSelector '${n}'
    	- OR - create a new view with the name ${r.name} and description '${r.description}' and InstrumentSelector ${n}
    	- OR - create a new view with the name ${e.name} and description '${r.description}' and InstrumentSelector ${n}`;
    }
    Q.getDescriptionResolutionRecipe = j_;
    function OS(r, e) {
        return r.valueType !== e.valueType ? q_(r, e) : r.unit !== e.unit ? G_(r, e) : r.type !== e.type ? V_(r, e) : r.description !== e.description ? j_(r, e) : "";
    }
    Q.getConflictResolutionRecipe = OS;
});
var k_ = c((os)=>{
    "use strict";
    Object.defineProperty(os, "__esModule", {
        value: !0
    });
    os.MetricStorageRegistry = void 0;
    var RS = Re(), H_ = (p(), f(d)), ss = F_(), fu = class r {
        constructor(){
            this._sharedRegistry = new Map, this._perCollectorRegistry = new Map;
        }
        static create() {
            return new r;
        }
        getStorages(e) {
            let t = [];
            for (let i of this._sharedRegistry.values())t = t.concat(i);
            let n = this._perCollectorRegistry.get(e);
            if (n != null) for (let i of n.values())t = t.concat(i);
            return t;
        }
        register(e) {
            this._registerStorage(e, this._sharedRegistry);
        }
        registerForCollector(e, t) {
            let n = this._perCollectorRegistry.get(e);
            n == null && (n = new Map, this._perCollectorRegistry.set(e, n)), this._registerStorage(t, n);
        }
        findOrUpdateCompatibleStorage(e) {
            let t = this._sharedRegistry.get(e.name);
            return t === void 0 ? null : this._findOrUpdateCompatibleStorage(e, t);
        }
        findOrUpdateCompatibleCollectorStorage(e, t) {
            let n = this._perCollectorRegistry.get(e);
            if (n === void 0) return null;
            let i = n.get(t.name);
            return i === void 0 ? null : this._findOrUpdateCompatibleStorage(t, i);
        }
        _registerStorage(e, t) {
            let n = e.getInstrumentDescriptor(), i = t.get(n.name);
            if (i === void 0) {
                t.set(n.name, [
                    e
                ]);
                return;
            }
            i.push(e);
        }
        _findOrUpdateCompatibleStorage(e, t) {
            let n = null;
            for (let i of t){
                let s = i.getInstrumentDescriptor();
                (0, RS.isDescriptorCompatibleWith)(s, e) ? (s.description !== e.description && (e.description.length > s.description.length && i.updateDescription(e.description), H_.diag.warn("A view or instrument with the name ", e.name, ` has already been registered, but has a different description and is incompatible with another registered view.
`, `Details:
`, (0, ss.getIncompatibilityDetails)(s, e), `The longer description will be used.
To resolve the conflict:`, (0, ss.getConflictResolutionRecipe)(s, e))), n = i) : H_.diag.warn("A view or instrument with the name ", e.name, ` has already been registered and is incompatible with another registered view.
`, `Details:
`, (0, ss.getIncompatibilityDetails)(s, e), `To resolve the conflict:
`, (0, ss.getConflictResolutionRecipe)(s, e));
            }
            return n;
        }
    };
    os.MetricStorageRegistry = fu;
});
var $_ = c((as)=>{
    "use strict";
    Object.defineProperty(as, "__esModule", {
        value: !0
    });
    as.MultiMetricStorage = void 0;
    var Eu = class {
        constructor(e){
            this._backingStorages = e;
        }
        record(e, t, n, i) {
            this._backingStorages.forEach((s)=>{
                s.record(e, t, n, i);
            });
        }
    };
    as.MultiMetricStorage = Eu;
});
var W_ = c((er)=>{
    "use strict";
    Object.defineProperty(er, "__esModule", {
        value: !0
    });
    er.BatchObservableResultImpl = er.ObservableResultImpl = void 0;
    var Jt = (p(), f(d)), X_ = xr(), bS = Zi(), mu = class {
        constructor(e, t){
            this._instrumentName = e, this._valueType = t, this._buffer = new X_.AttributeHashMap;
        }
        observe(e, t = {}) {
            if (typeof e != "number") {
                Jt.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${e}`);
                return;
            }
            this._valueType === Jt.ValueType.INT && !Number.isInteger(e) && (Jt.diag.warn(`INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`), e = Math.trunc(e), !Number.isInteger(e)) || this._buffer.set(t, e);
        }
    };
    er.ObservableResultImpl = mu;
    var gu = class {
        constructor(){
            this._buffer = new Map;
        }
        observe(e, t, n = {}) {
            if (!(0, bS.isObservableInstrument)(e)) return;
            let i = this._buffer.get(e);
            if (i == null && (i = new X_.AttributeHashMap, this._buffer.set(e, i)), typeof t != "number") {
                Jt.diag.warn(`non-number value provided to metric ${e._descriptor.name}: ${t}`);
                return;
            }
            e._descriptor.valueType === Jt.ValueType.INT && !Number.isInteger(t) && (Jt.diag.warn(`INT value type cannot accept a floating-point value for ${e._descriptor.name}, ignoring the fractional digits.`), t = Math.trunc(t), !Number.isInteger(t)) || i.set(n, t);
        }
    };
    er.BatchObservableResultImpl = gu;
});
var Y_ = c((us)=>{
    "use strict";
    Object.defineProperty(us, "__esModule", {
        value: !0
    });
    us.ObservableRegistry = void 0;
    var PS = (p(), f(d)), K_ = Zi(), z_ = W_(), Dr = me(), Tu = class {
        constructor(){
            this._callbacks = [], this._batchCallbacks = [];
        }
        addCallback(e, t) {
            this._findCallback(e, t) >= 0 || this._callbacks.push({
                callback: e,
                instrument: t
            });
        }
        removeCallback(e, t) {
            let n = this._findCallback(e, t);
            n < 0 || this._callbacks.splice(n, 1);
        }
        addBatchCallback(e, t) {
            let n = new Set(t.filter(K_.isObservableInstrument));
            if (n.size === 0) {
                PS.diag.error("BatchObservableCallback is not associated with valid instruments", t);
                return;
            }
            this._findBatchCallback(e, n) >= 0 || this._batchCallbacks.push({
                callback: e,
                instruments: n
            });
        }
        removeBatchCallback(e, t) {
            let n = new Set(t.filter(K_.isObservableInstrument)), i = this._findBatchCallback(e, n);
            i < 0 || this._batchCallbacks.splice(i, 1);
        }
        async observe(e, t) {
            let n = this._observeCallbacks(e, t), i = this._observeBatchCallbacks(e, t);
            return (await (0, Dr.PromiseAllSettled)([
                ...n,
                ...i
            ])).filter(Dr.isPromiseAllSettledRejectionResult).map((a)=>a.reason);
        }
        _observeCallbacks(e, t) {
            return this._callbacks.map(async ({ callback: n, instrument: i })=>{
                let s = new z_.ObservableResultImpl(i._descriptor.name, i._descriptor.valueType), o = Promise.resolve(n(s));
                t != null && (o = (0, Dr.callWithTimeout)(o, t)), await o, i._metricStorages.forEach((a)=>{
                    a.record(s._buffer, e);
                });
            });
        }
        _observeBatchCallbacks(e, t) {
            return this._batchCallbacks.map(async ({ callback: n, instruments: i })=>{
                let s = new z_.BatchObservableResultImpl, o = Promise.resolve(n(s));
                t != null && (o = (0, Dr.callWithTimeout)(o, t)), await o, i.forEach((a)=>{
                    let u = s._buffer.get(a);
                    u != null && a._metricStorages.forEach((l)=>{
                        l.record(u, e);
                    });
                });
            });
        }
        _findCallback(e, t) {
            return this._callbacks.findIndex((n)=>n.callback === e && n.instrument === t);
        }
        _findBatchCallback(e, t) {
            return this._batchCallbacks.findIndex((n)=>n.callback === e && (0, Dr.setEquals)(n.instruments, t));
        }
    };
    us.ObservableRegistry = Tu;
});
var Q_ = c((cs)=>{
    "use strict";
    Object.defineProperty(cs, "__esModule", {
        value: !0
    });
    cs.SyncMetricStorage = void 0;
    var yS = au(), vS = du(), IS = pu(), Su = class extends yS.MetricStorage {
        constructor(e, t, n, i){
            super(e), this._attributesProcessor = n, this._deltaMetricStorage = new vS.DeltaMetricProcessor(t), this._temporalMetricStorage = new IS.TemporalMetricProcessor(t, i);
        }
        record(e, t, n, i) {
            t = this._attributesProcessor.process(t, n), this._deltaMetricStorage.record(e, t, n, i);
        }
        collect(e, t) {
            let n = this._deltaMetricStorage.collect();
            return this._temporalMetricStorage.buildMetrics(e, this._instrumentDescriptor, n, t);
        }
    };
    cs.SyncMetricStorage = Su;
});
var Ou = c((De)=>{
    "use strict";
    Object.defineProperty(De, "__esModule", {
        value: !0
    });
    De.FilteringAttributesProcessor = De.NoopAttributesProcessor = De.AttributesProcessor = void 0;
    var Ur = class {
        static Noop() {
            return LS;
        }
    };
    De.AttributesProcessor = Ur;
    var ls = class extends Ur {
        process(e, t) {
            return e;
        }
    };
    De.NoopAttributesProcessor = ls;
    var Au = class extends Ur {
        constructor(e){
            super(), this._allowedAttributeNames = e;
        }
        process(e, t) {
            let n = {};
            return Object.keys(e).filter((i)=>this._allowedAttributeNames.includes(i)).forEach((i)=>n[i] = e[i]), n;
        }
    };
    De.FilteringAttributesProcessor = Au;
    var LS = new ls;
});
var Z_ = c((ds)=>{
    "use strict";
    Object.defineProperty(ds, "__esModule", {
        value: !0
    });
    ds.MeterSharedState = void 0;
    var MS = Re(), NS = U_(), CS = me(), wS = B_(), xS = k_(), DS = $_(), US = Y_(), BS = Q_(), qS = Ou(), Ru = class {
        constructor(e, t){
            this._meterProviderSharedState = e, this._instrumentationScope = t, this.metricStorageRegistry = new xS.MetricStorageRegistry, this.observableRegistry = new US.ObservableRegistry, this.meter = new NS.Meter(this);
        }
        registerMetricStorage(e) {
            let t = this._registerMetricStorage(e, BS.SyncMetricStorage);
            return t.length === 1 ? t[0] : new DS.MultiMetricStorage(t);
        }
        registerAsyncMetricStorage(e) {
            return this._registerMetricStorage(e, wS.AsyncMetricStorage);
        }
        async collect(e, t, n) {
            let i = await this.observableRegistry.observe(t, n?.timeoutMillis), s = this.metricStorageRegistry.getStorages(e);
            if (s.length === 0) return null;
            let o = s.map((a)=>a.collect(e, t)).filter(CS.isNotNullish);
            return o.length === 0 ? {
                errors: i
            } : {
                scopeMetrics: {
                    scope: this._instrumentationScope,
                    metrics: o
                },
                errors: i
            };
        }
        _registerMetricStorage(e, t) {
            let i = this._meterProviderSharedState.viewRegistry.findViews(e, this._instrumentationScope).map((s)=>{
                let o = (0, MS.createInstrumentDescriptorWithView)(s, e), a = this.metricStorageRegistry.findOrUpdateCompatibleStorage(o);
                if (a != null) return a;
                let u = s.aggregation.createAggregator(o), l = new t(o, u, s.attributesProcessor, this._meterProviderSharedState.metricCollectors);
                return this.metricStorageRegistry.register(l), l;
            });
            if (i.length === 0) {
                let o = this._meterProviderSharedState.selectAggregations(e.type).map(([a, u])=>{
                    let l = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(a, e);
                    if (l != null) return l;
                    let _ = u.createAggregator(e), E = new t(e, _, qS.AttributesProcessor.Noop(), [
                        a
                    ]);
                    return this.metricStorageRegistry.registerForCollector(a, E), E;
                });
                i = i.concat(o);
            }
            return i;
        }
    };
    ds.MeterSharedState = Ru;
});
var J_ = c((_s)=>{
    "use strict";
    Object.defineProperty(_s, "__esModule", {
        value: !0
    });
    _s.MeterProviderSharedState = void 0;
    var GS = me(), VS = D_(), jS = Z_(), bu = class {
        constructor(e){
            this.resource = e, this.viewRegistry = new VS.ViewRegistry, this.metricCollectors = [], this.meterSharedStates = new Map;
        }
        getMeterSharedState(e) {
            let t = (0, GS.instrumentationScopeId)(e), n = this.meterSharedStates.get(t);
            return n == null && (n = new jS.MeterSharedState(this, e), this.meterSharedStates.set(t, n)), n;
        }
        selectAggregations(e) {
            let t = [];
            for (let n of this.metricCollectors)t.push([
                n,
                n.selectAggregation(e)
            ]);
            return t;
        }
    };
    _s.MeterProviderSharedState = bu;
});
var ep = c((ps)=>{
    "use strict";
    Object.defineProperty(ps, "__esModule", {
        value: !0
    });
    ps.MetricCollector = void 0;
    var FS = T(), Pu = class {
        constructor(e, t){
            this._sharedState = e, this._metricReader = t;
        }
        async collect(e) {
            let t = (0, FS.millisToHrTime)(Date.now()), n = [], i = [], s = Array.from(this._sharedState.meterSharedStates.values()).map(async (o)=>{
                let a = await o.collect(this, t, e);
                a?.scopeMetrics != null && n.push(a.scopeMetrics), a?.errors != null && i.push(...a.errors);
            });
            return await Promise.all(s), {
                resourceMetrics: {
                    resource: this._sharedState.resource,
                    scopeMetrics: n
                },
                errors: i
            };
        }
        async forceFlush(e) {
            await this._metricReader.forceFlush(e);
        }
        async shutdown(e) {
            await this._metricReader.shutdown(e);
        }
        selectAggregationTemporality(e) {
            return this._metricReader.selectAggregationTemporality(e);
        }
        selectAggregation(e) {
            return this._metricReader.selectAggregation(e);
        }
    };
    ps.MetricCollector = Pu;
});
var rp = c((fs)=>{
    "use strict";
    Object.defineProperty(fs, "__esModule", {
        value: !0
    });
    fs.MeterProvider = void 0;
    var hs = (p(), f(d)), tp = it(), HS = J_(), kS = ep(), yu = class {
        constructor(e){
            var t;
            this._shutdown = !1;
            let n = tp.Resource.default().merge((t = e?.resource) !== null && t !== void 0 ? t : tp.Resource.empty());
            if (this._sharedState = new HS.MeterProviderSharedState(n), e?.views != null && e.views.length > 0) for (let i of e.views)this._sharedState.viewRegistry.addView(i);
        }
        getMeter(e, t = "", n = {}) {
            return this._shutdown ? (hs.diag.warn("A shutdown MeterProvider cannot provide a Meter"), (0, hs.createNoopMeter)()) : this._sharedState.getMeterSharedState({
                name: e,
                version: t,
                schemaUrl: n.schemaUrl
            }).meter;
        }
        addMetricReader(e) {
            let t = new kS.MetricCollector(this._sharedState, e);
            e.setMetricProducer(t), this._sharedState.metricCollectors.push(t);
        }
        async shutdown(e) {
            if (this._shutdown) {
                hs.diag.warn("shutdown may only be called once per MeterProvider");
                return;
            }
            this._shutdown = !0, await Promise.all(this._sharedState.metricCollectors.map((t)=>t.shutdown(e)));
        }
        async forceFlush(e) {
            if (this._shutdown) {
                hs.diag.warn("invalid attempt to force flush after MeterProvider shutdown");
                return;
            }
            await Promise.all(this._sharedState.metricCollectors.map((t)=>t.forceFlush(e)));
        }
    };
    fs.MeterProvider = yu;
});
var Es = c((tr)=>{
    "use strict";
    Object.defineProperty(tr, "__esModule", {
        value: !0
    });
    tr.ExactPredicate = tr.PatternPredicate = void 0;
    var $S = /[\^$\\.+?()[\]{}|]/g, vu = class r {
        constructor(e){
            e === "*" ? (this._matchAll = !0, this._regexp = /.*/) : (this._matchAll = !1, this._regexp = new RegExp(r.escapePattern(e)));
        }
        match(e) {
            return this._matchAll ? !0 : this._regexp.test(e);
        }
        static escapePattern(e) {
            return `^${e.replace($S, "\\$&").replace("*", ".*")}$`;
        }
        static hasWildcard(e) {
            return e.includes("*");
        }
    };
    tr.PatternPredicate = vu;
    var Iu = class {
        constructor(e){
            this._matchAll = e === void 0, this._pattern = e;
        }
        match(e) {
            return !!(this._matchAll || e === this._pattern);
        }
    };
    tr.ExactPredicate = Iu;
});
var ip = c((ms)=>{
    "use strict";
    Object.defineProperty(ms, "__esModule", {
        value: !0
    });
    ms.InstrumentSelector = void 0;
    var np = Es(), Lu = class {
        constructor(e){
            var t;
            this._nameFilter = new np.PatternPredicate((t = e?.name) !== null && t !== void 0 ? t : "*"), this._type = e?.type, this._unitFilter = new np.ExactPredicate(e?.unit);
        }
        getType() {
            return this._type;
        }
        getNameFilter() {
            return this._nameFilter;
        }
        getUnitFilter() {
            return this._unitFilter;
        }
    };
    ms.InstrumentSelector = Lu;
});
var sp = c((gs)=>{
    "use strict";
    Object.defineProperty(gs, "__esModule", {
        value: !0
    });
    gs.MeterSelector = void 0;
    var Mu = Es(), Nu = class {
        constructor(e){
            this._nameFilter = new Mu.ExactPredicate(e?.name), this._versionFilter = new Mu.ExactPredicate(e?.version), this._schemaUrlFilter = new Mu.ExactPredicate(e?.schemaUrl);
        }
        getNameFilter() {
            return this._nameFilter;
        }
        getVersionFilter() {
            return this._versionFilter;
        }
        getSchemaUrlFilter() {
            return this._schemaUrlFilter;
        }
    };
    gs.MeterSelector = Nu;
});
var ap = c((Ts)=>{
    "use strict";
    Object.defineProperty(Ts, "__esModule", {
        value: !0
    });
    Ts.View = void 0;
    var XS = Es(), op = Ou(), WS = ip(), KS = sp(), zS = ki();
    function YS(r) {
        return r.instrumentName == null && r.instrumentType == null && r.instrumentUnit == null && r.meterName == null && r.meterVersion == null && r.meterSchemaUrl == null;
    }
    var Cu = class {
        constructor(e){
            var t;
            if (YS(e)) throw new Error("Cannot create view with no selector arguments supplied");
            if (e.name != null && (e?.instrumentName == null || XS.PatternPredicate.hasWildcard(e.instrumentName))) throw new Error("Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.");
            e.attributeKeys != null ? this.attributesProcessor = new op.FilteringAttributesProcessor(e.attributeKeys) : this.attributesProcessor = op.AttributesProcessor.Noop(), this.name = e.name, this.description = e.description, this.aggregation = (t = e.aggregation) !== null && t !== void 0 ? t : zS.Aggregation.Default(), this.instrumentSelector = new WS.InstrumentSelector({
                name: e.instrumentName,
                type: e.instrumentType,
                unit: e.instrumentUnit
            }), this.meterSelector = new KS.MeterSelector({
                name: e.meterName,
                version: e.meterVersion,
                schemaUrl: e.meterSchemaUrl
            });
        }
    };
    Ts.View = Cu;
});
var wu = c((m)=>{
    "use strict";
    Object.defineProperty(m, "__esModule", {
        value: !0
    });
    m.TimeoutError = m.View = m.Aggregation = m.SumAggregation = m.LastValueAggregation = m.HistogramAggregation = m.DropAggregation = m.ExponentialHistogramAggregation = m.ExplicitBucketHistogramAggregation = m.DefaultAggregation = m.MeterProvider = m.InstrumentType = m.ConsoleMetricExporter = m.InMemoryMetricExporter = m.PeriodicExportingMetricReader = m.MetricReader = m.DataPointType = m.AggregationTemporality = void 0;
    var QS = Mi();
    Object.defineProperty(m, "AggregationTemporality", {
        enumerable: !0,
        get: function() {
            return QS.AggregationTemporality;
        }
    });
    var ZS = Dt();
    Object.defineProperty(m, "DataPointType", {
        enumerable: !0,
        get: function() {
            return ZS.DataPointType;
        }
    });
    var JS = Ka();
    Object.defineProperty(m, "MetricReader", {
        enumerable: !0,
        get: function() {
            return JS.MetricReader;
        }
    });
    var eA = M_();
    Object.defineProperty(m, "PeriodicExportingMetricReader", {
        enumerable: !0,
        get: function() {
            return eA.PeriodicExportingMetricReader;
        }
    });
    var tA = C_();
    Object.defineProperty(m, "InMemoryMetricExporter", {
        enumerable: !0,
        get: function() {
            return tA.InMemoryMetricExporter;
        }
    });
    var rA = x_();
    Object.defineProperty(m, "ConsoleMetricExporter", {
        enumerable: !0,
        get: function() {
            return rA.ConsoleMetricExporter;
        }
    });
    var nA = Re();
    Object.defineProperty(m, "InstrumentType", {
        enumerable: !0,
        get: function() {
            return nA.InstrumentType;
        }
    });
    var iA = rp();
    Object.defineProperty(m, "MeterProvider", {
        enumerable: !0,
        get: function() {
            return iA.MeterProvider;
        }
    });
    var Ue = ki();
    Object.defineProperty(m, "DefaultAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.DefaultAggregation;
        }
    });
    Object.defineProperty(m, "ExplicitBucketHistogramAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.ExplicitBucketHistogramAggregation;
        }
    });
    Object.defineProperty(m, "ExponentialHistogramAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.ExponentialHistogramAggregation;
        }
    });
    Object.defineProperty(m, "DropAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.DropAggregation;
        }
    });
    Object.defineProperty(m, "HistogramAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.HistogramAggregation;
        }
    });
    Object.defineProperty(m, "LastValueAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.LastValueAggregation;
        }
    });
    Object.defineProperty(m, "SumAggregation", {
        enumerable: !0,
        get: function() {
            return Ue.SumAggregation;
        }
    });
    Object.defineProperty(m, "Aggregation", {
        enumerable: !0,
        get: function() {
            return Ue.Aggregation;
        }
    });
    var sA = ap();
    Object.defineProperty(m, "View", {
        enumerable: !0,
        get: function() {
            return sA.View;
        }
    });
    var oA = me();
    Object.defineProperty(m, "TimeoutError", {
        enumerable: !0,
        get: function() {
            return oA.TimeoutError;
        }
    });
});
var up = c((Ss)=>{
    "use strict";
    Object.defineProperty(Ss, "__esModule", {
        value: !0
    });
    Ss.AbstractAsyncHooksContextManager = void 0;
    var aA = ee("events"), uA = [
        "addListener",
        "on",
        "once",
        "prependListener",
        "prependOnceListener"
    ], xu = class {
        constructor(){
            this._kOtListeners = Symbol("OtListeners"), this._wrapped = !1;
        }
        bind(e, t) {
            return t instanceof aA.EventEmitter ? this._bindEventEmitter(e, t) : typeof t == "function" ? this._bindFunction(e, t) : t;
        }
        _bindFunction(e, t) {
            let n = this, i = function(...s) {
                return n.with(e, ()=>t.apply(this, s));
            };
            return Object.defineProperty(i, "length", {
                enumerable: !1,
                configurable: !0,
                writable: !1,
                value: t.length
            }), i;
        }
        _bindEventEmitter(e, t) {
            return this._getPatchMap(t) !== void 0 || (this._createPatchMap(t), uA.forEach((i)=>{
                t[i] !== void 0 && (t[i] = this._patchAddListener(t, t[i], e));
            }), typeof t.removeListener == "function" && (t.removeListener = this._patchRemoveListener(t, t.removeListener)), typeof t.off == "function" && (t.off = this._patchRemoveListener(t, t.off)), typeof t.removeAllListeners == "function" && (t.removeAllListeners = this._patchRemoveAllListeners(t, t.removeAllListeners))), t;
        }
        _patchRemoveListener(e, t) {
            let n = this;
            return function(i, s) {
                var o;
                let a = (o = n._getPatchMap(e)) === null || o === void 0 ? void 0 : o[i];
                if (a === void 0) return t.call(this, i, s);
                let u = a.get(s);
                return t.call(this, i, u || s);
            };
        }
        _patchRemoveAllListeners(e, t) {
            let n = this;
            return function(i) {
                let s = n._getPatchMap(e);
                return s !== void 0 && (arguments.length === 0 ? n._createPatchMap(e) : s[i] !== void 0 && delete s[i]), t.apply(this, arguments);
            };
        }
        _patchAddListener(e, t, n) {
            let i = this;
            return function(s, o) {
                if (i._wrapped) return t.call(this, s, o);
                let a = i._getPatchMap(e);
                a === void 0 && (a = i._createPatchMap(e));
                let u = a[s];
                u === void 0 && (u = new WeakMap, a[s] = u);
                let l = i.bind(n, o);
                u.set(o, l), i._wrapped = !0;
                try {
                    return t.call(this, s, l);
                } finally{
                    i._wrapped = !1;
                }
            };
        }
        _createPatchMap(e) {
            let t = Object.create(null);
            return e[this._kOtListeners] = t, t;
        }
        _getPatchMap(e) {
            return e[this._kOtListeners];
        }
    };
    Ss.AbstractAsyncHooksContextManager = xu;
});
var cp = c((As)=>{
    "use strict";
    Object.defineProperty(As, "__esModule", {
        value: !0
    });
    As.AsyncLocalStorageContextManager = void 0;
    var cA = (p(), f(d)), lA = ee("async_hooks"), dA = up(), Du = class extends dA.AbstractAsyncHooksContextManager {
        constructor(){
            super(), this._asyncLocalStorage = new lA.AsyncLocalStorage;
        }
        active() {
            var e;
            return (e = this._asyncLocalStorage.getStore()) !== null && e !== void 0 ? e : cA.ROOT_CONTEXT;
        }
        with(e, t, n, ...i) {
            let s = n == null ? t : t.bind(n);
            return this._asyncLocalStorage.run(e, s, ...i);
        }
        enable() {
            return this;
        }
        disable() {
            return this._asyncLocalStorage.disable(), this;
        }
    };
    As.AsyncLocalStorageContextManager = Du;
});
var qr = c((Be)=>{
    "use strict";
    Object.defineProperty(Be, "__esModule", {
        value: !0
    });
    Be.toAnyValue = Be.toKeyValue = Be.toAttributes = void 0;
    function mA(r) {
        return Object.keys(r).map((e)=>Bu(e, r[e]));
    }
    Be.toAttributes = mA;
    function Bu(r, e) {
        return {
            key: r,
            value: qu(e)
        };
    }
    Be.toKeyValue = Bu;
    function qu(r) {
        let e = typeof r;
        return e === "string" ? {
            stringValue: r
        } : e === "number" ? Number.isInteger(r) ? {
            intValue: r
        } : {
            doubleValue: r
        } : e === "boolean" ? {
            boolValue: r
        } : r instanceof Uint8Array ? {
            bytesValue: r
        } : Array.isArray(r) ? {
            arrayValue: {
                values: r.map(qu)
            }
        } : e === "object" && r != null ? {
            kvlistValue: {
                values: Object.entries(r).map(([t, n])=>Bu(t, n))
            }
        } : {};
    }
    Be.toAnyValue = qu;
});
var fp = c((qe)=>{
    "use strict";
    Object.defineProperty(qe, "__esModule", {
        value: !0
    });
    qe.toOtlpSpanEvent = qe.toOtlpLink = qe.sdkSpanToOtlpSpan = void 0;
    var Gu = qr();
    function gA(r, e) {
        var t;
        let n = r.spanContext(), i = r.status;
        return {
            traceId: e.encodeSpanContext(n.traceId),
            spanId: e.encodeSpanContext(n.spanId),
            parentSpanId: e.encodeOptionalSpanContext(r.parentSpanId),
            traceState: (t = n.traceState) === null || t === void 0 ? void 0 : t.serialize(),
            name: r.name,
            kind: r.kind == null ? 0 : r.kind + 1,
            startTimeUnixNano: e.encodeHrTime(r.startTime),
            endTimeUnixNano: e.encodeHrTime(r.endTime),
            attributes: (0, Gu.toAttributes)(r.attributes),
            droppedAttributesCount: r.droppedAttributesCount,
            events: r.events.map((s)=>hp(s, e)),
            droppedEventsCount: r.droppedEventsCount,
            status: {
                code: i.code,
                message: i.message
            },
            links: r.links.map((s)=>pp(s, e)),
            droppedLinksCount: r.droppedLinksCount
        };
    }
    qe.sdkSpanToOtlpSpan = gA;
    function pp(r, e) {
        var t;
        return {
            attributes: r.attributes ? (0, Gu.toAttributes)(r.attributes) : [],
            spanId: e.encodeSpanContext(r.context.spanId),
            traceId: e.encodeSpanContext(r.context.traceId),
            traceState: (t = r.context.traceState) === null || t === void 0 ? void 0 : t.serialize(),
            droppedAttributesCount: r.droppedAttributesCount || 0
        };
    }
    qe.toOtlpLink = pp;
    function hp(r, e) {
        return {
            attributes: r.attributes ? (0, Gu.toAttributes)(r.attributes) : [],
            name: r.name,
            timeUnixNano: e.encodeHrTime(r.time),
            droppedAttributesCount: r.droppedAttributesCount || 0
        };
    }
    qe.toOtlpSpanEvent = hp;
});
var Gr = c((ae)=>{
    "use strict";
    Object.defineProperty(ae, "__esModule", {
        value: !0
    });
    ae.getOtlpEncoder = ae.encodeAsString = ae.encodeAsLongBits = ae.toLongBits = ae.hrTimeToNanos = void 0;
    var bs = T(), TA = BigInt(1e9);
    function Vu(r) {
        return BigInt(r[0]) * TA + BigInt(r[1]);
    }
    ae.hrTimeToNanos = Vu;
    function mp(r) {
        let e = Number(BigInt.asUintN(32, r)), t = Number(BigInt.asUintN(32, r >> BigInt(32)));
        return {
            low: e,
            high: t
        };
    }
    ae.toLongBits = mp;
    function ju(r) {
        let e = Vu(r);
        return mp(e);
    }
    ae.encodeAsLongBits = ju;
    function gp(r) {
        return Vu(r).toString();
    }
    ae.encodeAsString = gp;
    var SA = typeof BigInt < "u" ? gp : bs.hrTimeToNanoseconds;
    function Ep(r) {
        return r;
    }
    function Tp(r) {
        if (r !== void 0) return (0, bs.hexToBase64)(r);
    }
    var AA = {
        encodeHrTime: ju,
        encodeSpanContext: bs.hexToBase64,
        encodeOptionalSpanContext: Tp
    };
    function OA(r) {
        var e, t;
        if (r === void 0) return AA;
        let n = (e = r.useLongBits) !== null && e !== void 0 ? e : !0, i = (t = r.useHex) !== null && t !== void 0 ? t : !1;
        return {
            encodeHrTime: n ? ju : SA,
            encodeSpanContext: i ? Ep : bs.hexToBase64,
            encodeOptionalSpanContext: i ? Ep : Tp
        };
    }
    ae.getOtlpEncoder = OA;
});
var ys = c((Ps)=>{
    "use strict";
    Object.defineProperty(Ps, "__esModule", {
        value: !0
    });
    Ps.createExportTraceServiceRequest = void 0;
    var RA = qr(), bA = fp(), PA = Gr();
    function yA(r, e) {
        let t = (0, PA.getOtlpEncoder)(e);
        return {
            resourceSpans: IA(r, t)
        };
    }
    Ps.createExportTraceServiceRequest = yA;
    function vA(r) {
        let e = new Map;
        for (let t of r){
            let n = e.get(t.resource);
            n || (n = new Map, e.set(t.resource, n));
            let i = `${t.instrumentationLibrary.name}@${t.instrumentationLibrary.version || ""}:${t.instrumentationLibrary.schemaUrl || ""}`, s = n.get(i);
            s || (s = [], n.set(i, s)), s.push(t);
        }
        return e;
    }
    function IA(r, e) {
        let t = vA(r), n = [], i = t.entries(), s = i.next();
        for(; !s.done;){
            let [o, a] = s.value, u = [], l = a.values(), _ = l.next();
            for(; !_.done;){
                let O = _.value;
                if (O.length > 0) {
                    let { name: x, version: J, schemaUrl: y } = O[0].instrumentationLibrary, k = O.map((S)=>(0, bA.sdkSpanToOtlpSpan)(S, e));
                    u.push({
                        scope: {
                            name: x,
                            version: J
                        },
                        spans: k,
                        schemaUrl: y
                    });
                }
                _ = l.next();
            }
            let E = {
                resource: {
                    attributes: (0, RA.toAttributes)(o.attributes),
                    droppedAttributesCount: 0
                },
                scopeSpans: u,
                schemaUrl: void 0
            };
            n.push(E), s = i.next();
        }
        return n;
    }
});
var Op = c((N)=>{
    "use strict";
    Object.defineProperty(N, "__esModule", {
        value: !0
    });
    N.parseRetryAfterToMills = N.isExportRetryable = N.invalidTimeout = N.configureExporterTimeout = N.appendRootPathToUrlIfNeeded = N.appendResourcePathToUrl = N.parseHeaders = N.DEFAULT_EXPORT_BACKOFF_MULTIPLIER = N.DEFAULT_EXPORT_MAX_BACKOFF = N.DEFAULT_EXPORT_INITIAL_BACKOFF = N.DEFAULT_EXPORT_MAX_ATTEMPTS = void 0;
    var Fu = (p(), f(d)), Sp = T(), Ap = 1e4;
    N.DEFAULT_EXPORT_MAX_ATTEMPTS = 5;
    N.DEFAULT_EXPORT_INITIAL_BACKOFF = 1e3;
    N.DEFAULT_EXPORT_MAX_BACKOFF = 5e3;
    N.DEFAULT_EXPORT_BACKOFF_MULTIPLIER = 1.5;
    function LA(r = {}) {
        let e = {};
        return Object.entries(r).forEach(([t, n])=>{
            typeof n < "u" ? e[t] = String(n) : Fu.diag.warn(`Header "${t}" has wrong value and will be ignored`);
        }), e;
    }
    N.parseHeaders = LA;
    function MA(r, e) {
        return r.endsWith("/") || (r = r + "/"), r + e;
    }
    N.appendResourcePathToUrl = MA;
    function NA(r) {
        try {
            let e = new URL(r);
            return e.pathname === "" && (e.pathname = e.pathname + "/"), e.toString();
        } catch  {
            return Fu.diag.warn(`Could not parse export URL: '${r}'`), r;
        }
    }
    N.appendRootPathToUrlIfNeeded = NA;
    function CA(r) {
        return typeof r == "number" ? r <= 0 ? Hu(r, Ap) : r : wA();
    }
    N.configureExporterTimeout = CA;
    function wA() {
        var r;
        let e = Number((r = (0, Sp.getEnv)().OTEL_EXPORTER_OTLP_TRACES_TIMEOUT) !== null && r !== void 0 ? r : (0, Sp.getEnv)().OTEL_EXPORTER_OTLP_TIMEOUT);
        return e <= 0 ? Hu(e, Ap) : e;
    }
    function Hu(r, e) {
        return Fu.diag.warn("Timeout must be greater than 0", r), e;
    }
    N.invalidTimeout = Hu;
    function xA(r) {
        return [
            429,
            502,
            503,
            504
        ].includes(r);
    }
    N.isExportRetryable = xA;
    function DA(r) {
        if (r == null) return -1;
        let e = Number.parseInt(r, 10);
        if (Number.isInteger(e)) return e > 0 ? e * 1e3 : -1;
        let t = new Date(r).getTime() - Date.now();
        return t >= 0 ? t : 0;
    }
    N.parseRetryAfterToMills = DA;
});
var bp = c((vs)=>{
    "use strict";
    Object.defineProperty(vs, "__esModule", {
        value: !0
    });
    vs.OTLPExporterBase = void 0;
    var Rp = (p(), f(d)), Vr = T(), UA = Op(), ku = class {
        constructor(e = {}){
            this._sendingPromises = [], this.url = this.getDefaultUrl(e), typeof e.hostname == "string" && (this.hostname = e.hostname), this.shutdown = this.shutdown.bind(this), this._shutdownOnce = new Vr.BindOnceFuture(this._shutdown, this), this._concurrencyLimit = typeof e.concurrencyLimit == "number" ? e.concurrencyLimit : 30, this.timeoutMillis = (0, UA.configureExporterTimeout)(e.timeoutMillis), this.onInit(e);
        }
        export(e, t) {
            if (this._shutdownOnce.isCalled) {
                t({
                    code: Vr.ExportResultCode.FAILED,
                    error: new Error("Exporter has been shutdown")
                });
                return;
            }
            if (this._sendingPromises.length >= this._concurrencyLimit) {
                t({
                    code: Vr.ExportResultCode.FAILED,
                    error: new Error("Concurrent export limit reached")
                });
                return;
            }
            this._export(e).then(()=>{
                t({
                    code: Vr.ExportResultCode.SUCCESS
                });
            }).catch((n)=>{
                t({
                    code: Vr.ExportResultCode.FAILED,
                    error: n
                });
            });
        }
        _export(e) {
            return new Promise((t, n)=>{
                try {
                    Rp.diag.debug("items to be sent", e), this.send(e, t, n);
                } catch (i) {
                    n(i);
                }
            });
        }
        shutdown() {
            return this._shutdownOnce.call();
        }
        forceFlush() {
            return Promise.all(this._sendingPromises).then(()=>{});
        }
        _shutdown() {
            return Rp.diag.debug("shutdown started"), this.onShutdown(), this.forceFlush();
        }
    };
    vs.OTLPExporterBase = ku;
});
var Ip = c((Ry, vp)=>{
    "use strict";
    vp.exports = GA;
    function GA(r, e) {
        for(var t = new Array(arguments.length - 1), n = 0, i = 2, s = !0; i < arguments.length;)t[n++] = arguments[i++];
        return new Promise(function(a, u) {
            t[n] = function(_) {
                if (s) if (s = !1, _) u(_);
                else {
                    for(var E = new Array(arguments.length - 1), O = 0; O < E.length;)E[O++] = arguments[O];
                    a.apply(null, E);
                }
            };
            try {
                r.apply(e || null, t);
            } catch (l) {
                s && (s = !1, u(l));
            }
        });
    }
});
var Cp = c((Np)=>{
    "use strict";
    var Ls = Np;
    Ls.length = function(e) {
        var t = e.length;
        if (!t) return 0;
        for(var n = 0; --t % 4 > 1 && e.charAt(t) === "=";)++n;
        return Math.ceil(e.length * 3) / 4 - n;
    };
    var ir = new Array(64), Mp = new Array(123);
    for(de = 0; de < 64;)Mp[ir[de] = de < 26 ? de + 65 : de < 52 ? de + 71 : de < 62 ? de - 4 : de - 59 | 43] = de++;
    var de;
    Ls.encode = function(e, t, n) {
        for(var i = null, s = [], o = 0, a = 0, u; t < n;){
            var l = e[t++];
            switch(a){
                case 0:
                    s[o++] = ir[l >> 2], u = (l & 3) << 4, a = 1;
                    break;
                case 1:
                    s[o++] = ir[u | l >> 4], u = (l & 15) << 2, a = 2;
                    break;
                case 2:
                    s[o++] = ir[u | l >> 6], s[o++] = ir[l & 63], a = 0;
                    break;
            }
            o > 8191 && ((i || (i = [])).push(String.fromCharCode.apply(String, s)), o = 0);
        }
        return a && (s[o++] = ir[u], s[o++] = 61, a === 1 && (s[o++] = 61)), i ? (o && i.push(String.fromCharCode.apply(String, s.slice(0, o))), i.join("")) : String.fromCharCode.apply(String, s.slice(0, o));
    };
    var Lp = "invalid encoding";
    Ls.decode = function(e, t, n) {
        for(var i = n, s = 0, o, a = 0; a < e.length;){
            var u = e.charCodeAt(a++);
            if (u === 61 && s > 1) break;
            if ((u = Mp[u]) === void 0) throw Error(Lp);
            switch(s){
                case 0:
                    o = u, s = 1;
                    break;
                case 1:
                    t[n++] = o << 2 | (u & 48) >> 4, o = u, s = 2;
                    break;
                case 2:
                    t[n++] = (o & 15) << 4 | (u & 60) >> 2, o = u, s = 3;
                    break;
                case 3:
                    t[n++] = (o & 3) << 6 | u, s = 0;
                    break;
            }
        }
        if (s === 1) throw Error(Lp);
        return n - i;
    };
    Ls.test = function(e) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
    };
});
var xp = c((Py, wp)=>{
    "use strict";
    wp.exports = Ms;
    function Ms() {
        this._listeners = {};
    }
    Ms.prototype.on = function(e, t, n) {
        return (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: n || this
        }), this;
    };
    Ms.prototype.off = function(e, t) {
        if (e === void 0) this._listeners = {};
        else if (t === void 0) this._listeners[e] = [];
        else for(var n = this._listeners[e], i = 0; i < n.length;)n[i].fn === t ? n.splice(i, 1) : ++i;
        return this;
    };
    Ms.prototype.emit = function(e) {
        var t = this._listeners[e];
        if (t) {
            for(var n = [], i = 1; i < arguments.length;)n.push(arguments[i++]);
            for(i = 0; i < t.length;)t[i].fn.apply(t[i++].ctx, n);
        }
        return this;
    };
});
var jp = c((yy, Vp)=>{
    "use strict";
    Vp.exports = Dp(Dp);
    function Dp(r) {
        return typeof Float32Array < "u" ? function() {
            var e = new Float32Array([
                -0
            ]), t = new Uint8Array(e.buffer), n = t[3] === 128;
            function i(u, l, _) {
                e[0] = u, l[_] = t[0], l[_ + 1] = t[1], l[_ + 2] = t[2], l[_ + 3] = t[3];
            }
            function s(u, l, _) {
                e[0] = u, l[_] = t[3], l[_ + 1] = t[2], l[_ + 2] = t[1], l[_ + 3] = t[0];
            }
            r.writeFloatLE = n ? i : s, r.writeFloatBE = n ? s : i;
            function o(u, l) {
                return t[0] = u[l], t[1] = u[l + 1], t[2] = u[l + 2], t[3] = u[l + 3], e[0];
            }
            function a(u, l) {
                return t[3] = u[l], t[2] = u[l + 1], t[1] = u[l + 2], t[0] = u[l + 3], e[0];
            }
            r.readFloatLE = n ? o : a, r.readFloatBE = n ? a : o;
        }() : function() {
            function e(n, i, s, o) {
                var a = i < 0 ? 1 : 0;
                if (a && (i = -i), i === 0) n(1 / i > 0 ? 0 : 2147483648, s, o);
                else if (isNaN(i)) n(2143289344, s, o);
                else if (i > 34028234663852886e22) n((a << 31 | 2139095040) >>> 0, s, o);
                else if (i < 11754943508222875e-54) n((a << 31 | Math.round(i / 1401298464324817e-60)) >>> 0, s, o);
                else {
                    var u = Math.floor(Math.log(i) / Math.LN2), l = Math.round(i * Math.pow(2, -u) * 8388608) & 8388607;
                    n((a << 31 | u + 127 << 23 | l) >>> 0, s, o);
                }
            }
            r.writeFloatLE = e.bind(null, Up), r.writeFloatBE = e.bind(null, Bp);
            function t(n, i, s) {
                var o = n(i, s), a = (o >> 31) * 2 + 1, u = o >>> 23 & 255, l = o & 8388607;
                return u === 255 ? l ? NaN : a * (1 / 0) : u === 0 ? a * 1401298464324817e-60 * l : a * Math.pow(2, u - 150) * (l + 8388608);
            }
            r.readFloatLE = t.bind(null, qp), r.readFloatBE = t.bind(null, Gp);
        }(), typeof Float64Array < "u" ? function() {
            var e = new Float64Array([
                -0
            ]), t = new Uint8Array(e.buffer), n = t[7] === 128;
            function i(u, l, _) {
                e[0] = u, l[_] = t[0], l[_ + 1] = t[1], l[_ + 2] = t[2], l[_ + 3] = t[3], l[_ + 4] = t[4], l[_ + 5] = t[5], l[_ + 6] = t[6], l[_ + 7] = t[7];
            }
            function s(u, l, _) {
                e[0] = u, l[_] = t[7], l[_ + 1] = t[6], l[_ + 2] = t[5], l[_ + 3] = t[4], l[_ + 4] = t[3], l[_ + 5] = t[2], l[_ + 6] = t[1], l[_ + 7] = t[0];
            }
            r.writeDoubleLE = n ? i : s, r.writeDoubleBE = n ? s : i;
            function o(u, l) {
                return t[0] = u[l], t[1] = u[l + 1], t[2] = u[l + 2], t[3] = u[l + 3], t[4] = u[l + 4], t[5] = u[l + 5], t[6] = u[l + 6], t[7] = u[l + 7], e[0];
            }
            function a(u, l) {
                return t[7] = u[l], t[6] = u[l + 1], t[5] = u[l + 2], t[4] = u[l + 3], t[3] = u[l + 4], t[2] = u[l + 5], t[1] = u[l + 6], t[0] = u[l + 7], e[0];
            }
            r.readDoubleLE = n ? o : a, r.readDoubleBE = n ? a : o;
        }() : function() {
            function e(n, i, s, o, a, u) {
                var l = o < 0 ? 1 : 0;
                if (l && (o = -o), o === 0) n(0, a, u + i), n(1 / o > 0 ? 0 : 2147483648, a, u + s);
                else if (isNaN(o)) n(0, a, u + i), n(2146959360, a, u + s);
                else if (o > 17976931348623157e292) n(0, a, u + i), n((l << 31 | 2146435072) >>> 0, a, u + s);
                else {
                    var _;
                    if (o < 22250738585072014e-324) _ = o / 5e-324, n(_ >>> 0, a, u + i), n((l << 31 | _ / 4294967296) >>> 0, a, u + s);
                    else {
                        var E = Math.floor(Math.log(o) / Math.LN2);
                        E === 1024 && (E = 1023), _ = o * Math.pow(2, -E), n(_ * 4503599627370496 >>> 0, a, u + i), n((l << 31 | E + 1023 << 20 | _ * 1048576 & 1048575) >>> 0, a, u + s);
                    }
                }
            }
            r.writeDoubleLE = e.bind(null, Up, 0, 4), r.writeDoubleBE = e.bind(null, Bp, 4, 0);
            function t(n, i, s, o, a) {
                var u = n(o, a + i), l = n(o, a + s), _ = (l >> 31) * 2 + 1, E = l >>> 20 & 2047, O = 4294967296 * (l & 1048575) + u;
                return E === 2047 ? O ? NaN : _ * (1 / 0) : E === 0 ? _ * 5e-324 * O : _ * Math.pow(2, E - 1075) * (O + 4503599627370496);
            }
            r.readDoubleLE = t.bind(null, qp, 0, 4), r.readDoubleBE = t.bind(null, Gp, 4, 0);
        }(), r;
    }
    function Up(r, e, t) {
        e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24;
    }
    function Bp(r, e, t) {
        e[t] = r >>> 24, e[t + 1] = r >>> 16 & 255, e[t + 2] = r >>> 8 & 255, e[t + 3] = r & 255;
    }
    function qp(r, e) {
        return (r[e] | r[e + 1] << 8 | r[e + 2] << 16 | r[e + 3] << 24) >>> 0;
    }
    function Gp(r, e) {
        return (r[e] << 24 | r[e + 1] << 16 | r[e + 2] << 8 | r[e + 3]) >>> 0;
    }
});
var Fp = c((exports, module)=>{
    "use strict";
    module.exports = inquire;
    function inquire(moduleName) {
        try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName);
            if (mod && (mod.length || Object.keys(mod).length)) return mod;
        } catch (r) {}
        return null;
    }
});
var kp = c((Hp)=>{
    "use strict";
    var Xu = Hp;
    Xu.length = function(e) {
        for(var t = 0, n = 0, i = 0; i < e.length; ++i)n = e.charCodeAt(i), n < 128 ? t += 1 : n < 2048 ? t += 2 : (n & 64512) === 55296 && (e.charCodeAt(i + 1) & 64512) === 56320 ? (++i, t += 4) : t += 3;
        return t;
    };
    Xu.read = function(e, t, n) {
        var i = n - t;
        if (i < 1) return "";
        for(var s = null, o = [], a = 0, u; t < n;)u = e[t++], u < 128 ? o[a++] = u : u > 191 && u < 224 ? o[a++] = (u & 31) << 6 | e[t++] & 63 : u > 239 && u < 365 ? (u = ((u & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536, o[a++] = 55296 + (u >> 10), o[a++] = 56320 + (u & 1023)) : o[a++] = (u & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63, a > 8191 && ((s || (s = [])).push(String.fromCharCode.apply(String, o)), a = 0);
        return s ? (a && s.push(String.fromCharCode.apply(String, o.slice(0, a))), s.join("")) : String.fromCharCode.apply(String, o.slice(0, a));
    };
    Xu.write = function(e, t, n) {
        for(var i = n, s, o, a = 0; a < e.length; ++a)s = e.charCodeAt(a), s < 128 ? t[n++] = s : s < 2048 ? (t[n++] = s >> 6 | 192, t[n++] = s & 63 | 128) : (s & 64512) === 55296 && ((o = e.charCodeAt(a + 1)) & 64512) === 56320 ? (s = 65536 + ((s & 1023) << 10) + (o & 1023), ++a, t[n++] = s >> 18 | 240, t[n++] = s >> 12 & 63 | 128, t[n++] = s >> 6 & 63 | 128, t[n++] = s & 63 | 128) : (t[n++] = s >> 12 | 224, t[n++] = s >> 6 & 63 | 128, t[n++] = s & 63 | 128);
        return n - i;
    };
});
var Xp = c((Iy, $p)=>{
    "use strict";
    $p.exports = VA;
    function VA(r, e, t) {
        var n = t || 8192, i = n >>> 1, s = null, o = n;
        return function(u) {
            if (u < 1 || u > i) return r(u);
            o + u > n && (s = r(n), o = 0);
            var l = e.call(s, o, o += u);
            return o & 7 && (o = (o | 7) + 1), l;
        };
    }
});
var Kp = c((Ly, Wp)=>{
    "use strict";
    Wp.exports = V;
    var jr = Ve();
    function V(r, e) {
        this.lo = r >>> 0, this.hi = e >>> 0;
    }
    var dt = V.zero = new V(0, 0);
    dt.toNumber = function() {
        return 0;
    };
    dt.zzEncode = dt.zzDecode = function() {
        return this;
    };
    dt.length = function() {
        return 1;
    };
    var jA = V.zeroHash = "\0\0\0\0\0\0\0\0";
    V.fromNumber = function(e) {
        if (e === 0) return dt;
        var t = e < 0;
        t && (e = -e);
        var n = e >>> 0, i = (e - n) / 4294967296 >>> 0;
        return t && (i = ~i >>> 0, n = ~n >>> 0, ++n > 4294967295 && (n = 0, ++i > 4294967295 && (i = 0))), new V(n, i);
    };
    V.from = function(e) {
        if (typeof e == "number") return V.fromNumber(e);
        if (jr.isString(e)) if (jr.Long) e = jr.Long.fromString(e);
        else return V.fromNumber(parseInt(e, 10));
        return e.low || e.high ? new V(e.low >>> 0, e.high >>> 0) : dt;
    };
    V.prototype.toNumber = function(e) {
        if (!e && this.hi >>> 31) {
            var t = ~this.lo + 1 >>> 0, n = ~this.hi >>> 0;
            return t || (n = n + 1 >>> 0), -(t + n * 4294967296);
        }
        return this.lo + this.hi * 4294967296;
    };
    V.prototype.toLong = function(e) {
        return jr.Long ? new jr.Long(this.lo | 0, this.hi | 0, !!e) : {
            low: this.lo | 0,
            high: this.hi | 0,
            unsigned: !!e
        };
    };
    var Ge = String.prototype.charCodeAt;
    V.fromHash = function(e) {
        return e === jA ? dt : new V((Ge.call(e, 0) | Ge.call(e, 1) << 8 | Ge.call(e, 2) << 16 | Ge.call(e, 3) << 24) >>> 0, (Ge.call(e, 4) | Ge.call(e, 5) << 8 | Ge.call(e, 6) << 16 | Ge.call(e, 7) << 24) >>> 0);
    };
    V.prototype.toHash = function() {
        return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
    };
    V.prototype.zzEncode = function() {
        var e = this.hi >> 31;
        return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, this;
    };
    V.prototype.zzDecode = function() {
        var e = -(this.lo & 1);
        return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, this;
    };
    V.prototype.length = function() {
        var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
        return n === 0 ? t === 0 ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : n < 128 ? 9 : 10;
    };
});
var Ve = c((Wu)=>{
    "use strict";
    var h = Wu;
    h.asPromise = Ip();
    h.base64 = Cp();
    h.EventEmitter = xp();
    h.float = jp();
    h.inquire = Fp();
    h.utf8 = kp();
    h.pool = Xp();
    h.LongBits = Kp();
    h.isNode = !!(("TURBOPACK compile-time value", "object") < "u" && /*TURBOPACK member replacement*/ __turbopack_context__.g && /*TURBOPACK member replacement*/ __turbopack_context__.g.process && /*TURBOPACK member replacement*/ __turbopack_context__.g.process.versions && /*TURBOPACK member replacement*/ __turbopack_context__.g.process.versions.node);
    h.global = h.isNode && /*TURBOPACK member replacement*/ __turbopack_context__.g || "undefined" < "u" && window || typeof self < "u" && self || Wu;
    h.emptyArray = Object.freeze ? Object.freeze([]) : [];
    h.emptyObject = Object.freeze ? Object.freeze({}) : {};
    h.isInteger = Number.isInteger || function(e) {
        return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
    };
    h.isString = function(e) {
        return typeof e == "string" || e instanceof String;
    };
    h.isObject = function(e) {
        return e && typeof e == "object";
    };
    h.isset = h.isSet = function(e, t) {
        var n = e[t];
        return n != null && e.hasOwnProperty(t) ? typeof n != "object" || (Array.isArray(n) ? n.length : Object.keys(n).length) > 0 : !1;
    };
    h.Buffer = function() {
        try {
            var r = h.inquire("buffer").Buffer;
            return r.prototype.utf8Write ? r : null;
        } catch  {
            return null;
        }
    }();
    h._Buffer_from = null;
    h._Buffer_allocUnsafe = null;
    h.newBuffer = function(e) {
        return typeof e == "number" ? h.Buffer ? h._Buffer_allocUnsafe(e) : new h.Array(e) : h.Buffer ? h._Buffer_from(e) : typeof Uint8Array > "u" ? e : new Uint8Array(e);
    };
    h.Array = typeof Uint8Array < "u" ? Uint8Array : Array;
    h.Long = h.global.dcodeIO && h.global.dcodeIO.Long || h.global.Long || h.inquire("long");
    h.key2Re = /^true|false|0|1$/;
    h.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    h.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    h.longToHash = function(e) {
        return e ? h.LongBits.from(e).toHash() : h.LongBits.zeroHash;
    };
    h.longFromHash = function(e, t) {
        var n = h.LongBits.fromHash(e);
        return h.Long ? h.Long.fromBits(n.lo, n.hi, t) : n.toNumber(!!t);
    };
    function zp(r, e, t) {
        for(var n = Object.keys(e), i = 0; i < n.length; ++i)(r[n[i]] === void 0 || !t) && (r[n[i]] = e[n[i]]);
        return r;
    }
    h.merge = zp;
    h.lcFirst = function(e) {
        return e.charAt(0).toLowerCase() + e.substring(1);
    };
    function Yp(r) {
        function e(t, n) {
            if (!(this instanceof e)) return new e(t, n);
            Object.defineProperty(this, "message", {
                get: function() {
                    return t;
                }
            }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", {
                value: new Error().stack || ""
            }), n && zp(this, n);
        }
        return e.prototype = Object.create(Error.prototype, {
            constructor: {
                value: e,
                writable: !0,
                enumerable: !1,
                configurable: !0
            },
            name: {
                get: function() {
                    return r;
                },
                set: void 0,
                enumerable: !1,
                configurable: !0
            },
            toString: {
                value: function() {
                    return this.name + ": " + this.message;
                },
                writable: !0,
                enumerable: !1,
                configurable: !0
            }
        }), e;
    }
    h.newError = Yp;
    h.ProtocolError = Yp("ProtocolError");
    h.oneOfGetter = function(e) {
        for(var t = {}, n = 0; n < e.length; ++n)t[e[n]] = 1;
        return function() {
            for(var i = Object.keys(this), s = i.length - 1; s > -1; --s)if (t[i[s]] === 1 && this[i[s]] !== void 0 && this[i[s]] !== null) return i[s];
        };
    };
    h.oneOfSetter = function(e) {
        return function(t) {
            for(var n = 0; n < e.length; ++n)e[n] !== t && delete this[e[n]];
        };
    };
    h.toJSONOptions = {
        longs: String,
        enums: String,
        bytes: String,
        json: !0
    };
    h._configure = function() {
        var r = h.Buffer;
        if (!r) {
            h._Buffer_from = h._Buffer_allocUnsafe = null;
            return;
        }
        h._Buffer_from = r.from !== Uint8Array.from && r.from || function(t, n) {
            return new r(t, n);
        }, h._Buffer_allocUnsafe = r.allocUnsafe || function(t) {
            return new r(t);
        };
    };
});
var ec = c((Ny, eh)=>{
    "use strict";
    eh.exports = A;
    var ue = Ve(), Ku, Ns = ue.LongBits, Qp = ue.base64, Zp = ue.utf8;
    function Fr(r, e, t) {
        this.fn = r, this.len = e, this.next = void 0, this.val = t;
    }
    function Yu() {}
    function FA(r) {
        this.head = r.head, this.tail = r.tail, this.len = r.len, this.next = r.states;
    }
    function A() {
        this.len = 0, this.head = new Fr(Yu, 0, 0), this.tail = this.head, this.states = null;
    }
    var Jp = function() {
        return ue.Buffer ? function() {
            return (A.create = function() {
                return new Ku;
            })();
        } : function() {
            return new A;
        };
    };
    A.create = Jp();
    A.alloc = function(e) {
        return new ue.Array(e);
    };
    ue.Array !== Array && (A.alloc = ue.pool(A.alloc, ue.Array.prototype.subarray));
    A.prototype._push = function(e, t, n) {
        return this.tail = this.tail.next = new Fr(e, t, n), this.len += t, this;
    };
    function Qu(r, e, t) {
        e[t] = r & 255;
    }
    function HA(r, e, t) {
        for(; r > 127;)e[t++] = r & 127 | 128, r >>>= 7;
        e[t] = r;
    }
    function Zu(r, e) {
        this.len = r, this.next = void 0, this.val = e;
    }
    Zu.prototype = Object.create(Fr.prototype);
    Zu.prototype.fn = HA;
    A.prototype.uint32 = function(e) {
        return this.len += (this.tail = this.tail.next = new Zu((e = e >>> 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, this;
    };
    A.prototype.int32 = function(e) {
        return e < 0 ? this._push(Ju, 10, Ns.fromNumber(e)) : this.uint32(e);
    };
    A.prototype.sint32 = function(e) {
        return this.uint32((e << 1 ^ e >> 31) >>> 0);
    };
    function Ju(r, e, t) {
        for(; r.hi;)e[t++] = r.lo & 127 | 128, r.lo = (r.lo >>> 7 | r.hi << 25) >>> 0, r.hi >>>= 7;
        for(; r.lo > 127;)e[t++] = r.lo & 127 | 128, r.lo = r.lo >>> 7;
        e[t++] = r.lo;
    }
    A.prototype.uint64 = function(e) {
        var t = Ns.from(e);
        return this._push(Ju, t.length(), t);
    };
    A.prototype.int64 = A.prototype.uint64;
    A.prototype.sint64 = function(e) {
        var t = Ns.from(e).zzEncode();
        return this._push(Ju, t.length(), t);
    };
    A.prototype.bool = function(e) {
        return this._push(Qu, 1, e ? 1 : 0);
    };
    function zu(r, e, t) {
        e[t] = r & 255, e[t + 1] = r >>> 8 & 255, e[t + 2] = r >>> 16 & 255, e[t + 3] = r >>> 24;
    }
    A.prototype.fixed32 = function(e) {
        return this._push(zu, 4, e >>> 0);
    };
    A.prototype.sfixed32 = A.prototype.fixed32;
    A.prototype.fixed64 = function(e) {
        var t = Ns.from(e);
        return this._push(zu, 4, t.lo)._push(zu, 4, t.hi);
    };
    A.prototype.sfixed64 = A.prototype.fixed64;
    A.prototype.float = function(e) {
        return this._push(ue.float.writeFloatLE, 4, e);
    };
    A.prototype.double = function(e) {
        return this._push(ue.float.writeDoubleLE, 8, e);
    };
    var kA = ue.Array.prototype.set ? function(e, t, n) {
        t.set(e, n);
    } : function(e, t, n) {
        for(var i = 0; i < e.length; ++i)t[n + i] = e[i];
    };
    A.prototype.bytes = function(e) {
        var t = e.length >>> 0;
        if (!t) return this._push(Qu, 1, 0);
        if (ue.isString(e)) {
            var n = A.alloc(t = Qp.length(e));
            Qp.decode(e, n, 0), e = n;
        }
        return this.uint32(t)._push(kA, t, e);
    };
    A.prototype.string = function(e) {
        var t = Zp.length(e);
        return t ? this.uint32(t)._push(Zp.write, t, e) : this._push(Qu, 1, 0);
    };
    A.prototype.fork = function() {
        return this.states = new FA(this), this.head = this.tail = new Fr(Yu, 0, 0), this.len = 0, this;
    };
    A.prototype.reset = function() {
        return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new Fr(Yu, 0, 0), this.len = 0), this;
    };
    A.prototype.ldelim = function() {
        var e = this.head, t = this.tail, n = this.len;
        return this.reset().uint32(n), n && (this.tail.next = e.next, this.tail = t, this.len += n), this;
    };
    A.prototype.finish = function() {
        for(var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;)e.fn(e.val, t, n), n += e.len, e = e.next;
        return t;
    };
    A._configure = function(r) {
        Ku = r, A.create = Jp(), Ku._configure();
    };
});
var nh = c((Cy, rh)=>{
    "use strict";
    rh.exports = Se;
    var th = ec();
    (Se.prototype = Object.create(th.prototype)).constructor = Se;
    var je = Ve();
    function Se() {
        th.call(this);
    }
    Se._configure = function() {
        Se.alloc = je._Buffer_allocUnsafe, Se.writeBytesBuffer = je.Buffer && je.Buffer.prototype instanceof Uint8Array && je.Buffer.prototype.set.name === "set" ? function(e, t, n) {
            t.set(e, n);
        } : function(e, t, n) {
            if (e.copy) e.copy(t, n, 0, e.length);
            else for(var i = 0; i < e.length;)t[n++] = e[i++];
        };
    };
    Se.prototype.bytes = function(e) {
        je.isString(e) && (e = je._Buffer_from(e, "base64"));
        var t = e.length >>> 0;
        return this.uint32(t), t && this._push(Se.writeBytesBuffer, t, e), this;
    };
    function $A(r, e, t) {
        r.length < 40 ? je.utf8.write(r, e, t) : e.utf8Write ? e.utf8Write(r, t) : e.write(r, t);
    }
    Se.prototype.string = function(e) {
        var t = je.Buffer.byteLength(e);
        return this.uint32(t), t && this._push($A, t, e), this;
    };
    Se._configure();
});
var nc = c((wy, uh)=>{
    "use strict";
    uh.exports = w;
    var _e = Ve(), rc, oh = _e.LongBits, XA = _e.utf8;
    function pe(r, e) {
        return RangeError("index out of range: " + r.pos + " + " + (e || 1) + " > " + r.len);
    }
    function w(r) {
        this.buf = r, this.pos = 0, this.len = r.length;
    }
    var ih = typeof Uint8Array < "u" ? function(e) {
        if (e instanceof Uint8Array || Array.isArray(e)) return new w(e);
        throw Error("illegal buffer");
    } : function(e) {
        if (Array.isArray(e)) return new w(e);
        throw Error("illegal buffer");
    }, ah = function() {
        return _e.Buffer ? function(t) {
            return (w.create = function(i) {
                return _e.Buffer.isBuffer(i) ? new rc(i) : ih(i);
            })(t);
        } : ih;
    };
    w.create = ah();
    w.prototype._slice = _e.Array.prototype.subarray || _e.Array.prototype.slice;
    w.prototype.uint32 = function() {
        var e = 4294967295;
        return function() {
            if (e = (this.buf[this.pos] & 127) >>> 0, this.buf[this.pos++] < 128 || (e = (e | (this.buf[this.pos] & 127) << 7) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 14) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 127) << 21) >>> 0, this.buf[this.pos++] < 128) || (e = (e | (this.buf[this.pos] & 15) << 28) >>> 0, this.buf[this.pos++] < 128)) return e;
            if ((this.pos += 5) > this.len) throw this.pos = this.len, pe(this, 10);
            return e;
        };
    }();
    w.prototype.int32 = function() {
        return this.uint32() | 0;
    };
    w.prototype.sint32 = function() {
        var e = this.uint32();
        return e >>> 1 ^ -(e & 1) | 0;
    };
    function tc() {
        var r = new oh(0, 0), e = 0;
        if (this.len - this.pos > 4) {
            for(; e < 4; ++e)if (r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return r;
            if (r.lo = (r.lo | (this.buf[this.pos] & 127) << 28) >>> 0, r.hi = (r.hi | (this.buf[this.pos] & 127) >> 4) >>> 0, this.buf[this.pos++] < 128) return r;
            e = 0;
        } else {
            for(; e < 3; ++e){
                if (this.pos >= this.len) throw pe(this);
                if (r.lo = (r.lo | (this.buf[this.pos] & 127) << e * 7) >>> 0, this.buf[this.pos++] < 128) return r;
            }
            return r.lo = (r.lo | (this.buf[this.pos++] & 127) << e * 7) >>> 0, r;
        }
        if (this.len - this.pos > 4) {
            for(; e < 5; ++e)if (r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return r;
        } else for(; e < 5; ++e){
            if (this.pos >= this.len) throw pe(this);
            if (r.hi = (r.hi | (this.buf[this.pos] & 127) << e * 7 + 3) >>> 0, this.buf[this.pos++] < 128) return r;
        }
        throw Error("invalid varint encoding");
    }
    w.prototype.bool = function() {
        return this.uint32() !== 0;
    };
    function Cs(r, e) {
        return (r[e - 4] | r[e - 3] << 8 | r[e - 2] << 16 | r[e - 1] << 24) >>> 0;
    }
    w.prototype.fixed32 = function() {
        if (this.pos + 4 > this.len) throw pe(this, 4);
        return Cs(this.buf, this.pos += 4);
    };
    w.prototype.sfixed32 = function() {
        if (this.pos + 4 > this.len) throw pe(this, 4);
        return Cs(this.buf, this.pos += 4) | 0;
    };
    function sh() {
        if (this.pos + 8 > this.len) throw pe(this, 8);
        return new oh(Cs(this.buf, this.pos += 4), Cs(this.buf, this.pos += 4));
    }
    w.prototype.float = function() {
        if (this.pos + 4 > this.len) throw pe(this, 4);
        var e = _e.float.readFloatLE(this.buf, this.pos);
        return this.pos += 4, e;
    };
    w.prototype.double = function() {
        if (this.pos + 8 > this.len) throw pe(this, 4);
        var e = _e.float.readDoubleLE(this.buf, this.pos);
        return this.pos += 8, e;
    };
    w.prototype.bytes = function() {
        var e = this.uint32(), t = this.pos, n = this.pos + e;
        if (n > this.len) throw pe(this, e);
        if (this.pos += e, Array.isArray(this.buf)) return this.buf.slice(t, n);
        if (t === n) {
            var i = _e.Buffer;
            return i ? i.alloc(0) : new this.buf.constructor(0);
        }
        return this._slice.call(this.buf, t, n);
    };
    w.prototype.string = function() {
        var e = this.bytes();
        return XA.read(e, 0, e.length);
    };
    w.prototype.skip = function(e) {
        if (typeof e == "number") {
            if (this.pos + e > this.len) throw pe(this, e);
            this.pos += e;
        } else do if (this.pos >= this.len) throw pe(this);
        while (this.buf[this.pos++] & 128)
        return this;
    };
    w.prototype.skipType = function(r) {
        switch(r){
            case 0:
                this.skip();
                break;
            case 1:
                this.skip(8);
                break;
            case 2:
                this.skip(this.uint32());
                break;
            case 3:
                for(; (r = this.uint32() & 7) !== 4;)this.skipType(r);
                break;
            case 5:
                this.skip(4);
                break;
            default:
                throw Error("invalid wire type " + r + " at offset " + this.pos);
        }
        return this;
    };
    w._configure = function(r) {
        rc = r, w.create = ah(), rc._configure();
        var e = _e.Long ? "toLong" : "toNumber";
        _e.merge(w.prototype, {
            int64: function() {
                return tc.call(this)[e](!1);
            },
            uint64: function() {
                return tc.call(this)[e](!0);
            },
            sint64: function() {
                return tc.call(this).zzDecode()[e](!1);
            },
            fixed64: function() {
                return sh.call(this)[e](!0);
            },
            sfixed64: function() {
                return sh.call(this)[e](!1);
            }
        });
    };
});
var _h = c((xy, dh)=>{
    "use strict";
    dh.exports = _t;
    var lh = nc();
    (_t.prototype = Object.create(lh.prototype)).constructor = _t;
    var ch = Ve();
    function _t(r) {
        lh.call(this, r);
    }
    _t._configure = function() {
        ch.Buffer && (_t.prototype._slice = ch.Buffer.prototype.slice);
    };
    _t.prototype.string = function() {
        var e = this.uint32();
        return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
    };
    _t._configure();
});
var hh = c((Dy, ph)=>{
    "use strict";
    ph.exports = Hr;
    var ic = Ve();
    (Hr.prototype = Object.create(ic.EventEmitter.prototype)).constructor = Hr;
    function Hr(r, e, t) {
        if (typeof r != "function") throw TypeError("rpcImpl must be a function");
        ic.EventEmitter.call(this), this.rpcImpl = r, this.requestDelimited = !!e, this.responseDelimited = !!t;
    }
    Hr.prototype.rpcCall = function r(e, t, n, i, s) {
        if (!i) throw TypeError("request must be specified");
        var o = this;
        if (!s) return ic.asPromise(r, o, e, t, n, i);
        if (!o.rpcImpl) {
            setTimeout(function() {
                s(Error("already ended"));
            }, 0);
            return;
        }
        try {
            return o.rpcImpl(e, t[o.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(u, l) {
                if (u) return o.emit("error", u, e), s(u);
                if (l === null) {
                    o.end(!0);
                    return;
                }
                if (!(l instanceof n)) try {
                    l = n[o.responseDelimited ? "decodeDelimited" : "decode"](l);
                } catch (_) {
                    return o.emit("error", _, e), s(_);
                }
                return o.emit("data", l, e), s(null, l);
            });
        } catch (a) {
            o.emit("error", a, e), setTimeout(function() {
                s(a);
            }, 0);
            return;
        }
    };
    Hr.prototype.end = function(e) {
        return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this;
    };
});
var Eh = c((fh)=>{
    "use strict";
    var WA = fh;
    WA.Service = hh();
});
var gh = c((By, mh)=>{
    "use strict";
    mh.exports = {};
});
var Ah = c((Sh)=>{
    "use strict";
    var Z = Sh;
    Z.build = "minimal";
    Z.Writer = ec();
    Z.BufferWriter = nh();
    Z.Reader = nc();
    Z.BufferReader = _h();
    Z.util = Ve();
    Z.rpc = Eh();
    Z.roots = gh();
    Z.configure = Th;
    function Th() {
        Z.util._configure(), Z.Writer._configure(Z.BufferWriter), Z.Reader._configure(Z.BufferReader);
    }
    Th();
});
var Rh = c((Gy, Oh)=>{
    "use strict";
    Oh.exports = Ah();
});
var Ch = c((Nh)=>{
    "use strict";
    Object.defineProperty(Nh, "__esModule", {
        value: !0
    });
});
var xh = c((wh)=>{
    "use strict";
    Object.defineProperty(wh, "__esModule", {
        value: !0
    });
});
var Uh = c((Dh)=>{
    "use strict";
    Object.defineProperty(Dh, "__esModule", {
        value: !0
    });
});
var Bh = c(($r)=>{
    "use strict";
    Object.defineProperty($r, "__esModule", {
        value: !0
    });
    $r.ESpanKind = void 0;
    var lO;
    (function(r) {
        r[r.SPAN_KIND_UNSPECIFIED = 0] = "SPAN_KIND_UNSPECIFIED", r[r.SPAN_KIND_INTERNAL = 1] = "SPAN_KIND_INTERNAL", r[r.SPAN_KIND_SERVER = 2] = "SPAN_KIND_SERVER", r[r.SPAN_KIND_CLIENT = 3] = "SPAN_KIND_CLIENT", r[r.SPAN_KIND_PRODUCER = 4] = "SPAN_KIND_PRODUCER", r[r.SPAN_KIND_CONSUMER = 5] = "SPAN_KIND_CONSUMER";
    })(lO = $r.ESpanKind || ($r.ESpanKind = {}));
});
var Gh = c((qh)=>{
    "use strict";
    Object.defineProperty(qh, "__esModule", {
        value: !0
    });
});
var kh = c((Fe)=>{
    "use strict";
    Object.defineProperty(Fe, "__esModule", {
        value: !0
    });
    Fe.toMetric = Fe.toScopeMetrics = Fe.toResourceMetrics = void 0;
    var Vh = (p(), f(d)), ar = wu(), xs = qr(), dO = Gr();
    function _O(r, e) {
        let t = (0, dO.getOtlpEncoder)(e);
        return {
            resource: {
                attributes: (0, xs.toAttributes)(r.resource.attributes),
                droppedAttributesCount: 0
            },
            schemaUrl: void 0,
            scopeMetrics: Fh(r.scopeMetrics, t)
        };
    }
    Fe.toResourceMetrics = _O;
    function Fh(r, e) {
        return Array.from(r.map((t)=>({
                scope: {
                    name: t.scope.name,
                    version: t.scope.version
                },
                metrics: t.metrics.map((n)=>Hh(n, e)),
                schemaUrl: t.scope.schemaUrl
            })));
    }
    Fe.toScopeMetrics = Fh;
    function Hh(r, e) {
        let t = {
            name: r.descriptor.name,
            description: r.descriptor.description,
            unit: r.descriptor.unit
        }, n = EO(r.aggregationTemporality);
        switch(r.dataPointType){
            case ar.DataPointType.SUM:
                t.sum = {
                    aggregationTemporality: n,
                    isMonotonic: r.isMonotonic,
                    dataPoints: jh(r, e)
                };
                break;
            case ar.DataPointType.GAUGE:
                t.gauge = {
                    dataPoints: jh(r, e)
                };
                break;
            case ar.DataPointType.HISTOGRAM:
                t.histogram = {
                    aggregationTemporality: n,
                    dataPoints: hO(r, e)
                };
                break;
            case ar.DataPointType.EXPONENTIAL_HISTOGRAM:
                t.exponentialHistogram = {
                    aggregationTemporality: n,
                    dataPoints: fO(r, e)
                };
                break;
        }
        return t;
    }
    Fe.toMetric = Hh;
    function pO(r, e, t) {
        let n = {
            attributes: (0, xs.toAttributes)(r.attributes),
            startTimeUnixNano: t.encodeHrTime(r.startTime),
            timeUnixNano: t.encodeHrTime(r.endTime)
        };
        switch(e){
            case Vh.ValueType.INT:
                n.asInt = r.value;
                break;
            case Vh.ValueType.DOUBLE:
                n.asDouble = r.value;
                break;
        }
        return n;
    }
    function jh(r, e) {
        return r.dataPoints.map((t)=>pO(t, r.descriptor.valueType, e));
    }
    function hO(r, e) {
        return r.dataPoints.map((t)=>{
            let n = t.value;
            return {
                attributes: (0, xs.toAttributes)(t.attributes),
                bucketCounts: n.buckets.counts,
                explicitBounds: n.buckets.boundaries,
                count: n.count,
                sum: n.sum,
                min: n.min,
                max: n.max,
                startTimeUnixNano: e.encodeHrTime(t.startTime),
                timeUnixNano: e.encodeHrTime(t.endTime)
            };
        });
    }
    function fO(r, e) {
        return r.dataPoints.map((t)=>{
            let n = t.value;
            return {
                attributes: (0, xs.toAttributes)(t.attributes),
                count: n.count,
                min: n.min,
                max: n.max,
                sum: n.sum,
                positive: {
                    offset: n.positive.offset,
                    bucketCounts: n.positive.bucketCounts
                },
                negative: {
                    offset: n.negative.offset,
                    bucketCounts: n.negative.bucketCounts
                },
                scale: n.scale,
                zeroCount: n.zeroCount,
                startTimeUnixNano: e.encodeHrTime(t.startTime),
                timeUnixNano: e.encodeHrTime(t.endTime)
            };
        });
    }
    function EO(r) {
        switch(r){
            case ar.AggregationTemporality.DELTA:
                return 1;
            case ar.AggregationTemporality.CUMULATIVE:
                return 2;
        }
    }
});
var $h = c((Ds)=>{
    "use strict";
    Object.defineProperty(Ds, "__esModule", {
        value: !0
    });
    Ds.createExportMetricsServiceRequest = void 0;
    var mO = kh();
    function gO(r, e) {
        return {
            resourceMetrics: r.map((t)=>(0, mO.toResourceMetrics)(t, e))
        };
    }
    Ds.createExportMetricsServiceRequest = gO;
});
var Wh = c((ur)=>{
    "use strict";
    Object.defineProperty(ur, "__esModule", {
        value: !0
    });
    ur.toLogAttributes = ur.createExportLogsServiceRequest = void 0;
    var TO = Gr(), cc = qr();
    function SO(r, e) {
        let t = (0, TO.getOtlpEncoder)(e);
        return {
            resourceLogs: OO(r, t)
        };
    }
    ur.createExportLogsServiceRequest = SO;
    function AO(r) {
        let e = new Map;
        for (let t of r){
            let { resource: n, instrumentationScope: { name: i, version: s = "", schemaUrl: o = "" } } = t, a = e.get(n);
            a || (a = new Map, e.set(n, a));
            let u = `${i}@${s}:${o}`, l = a.get(u);
            l || (l = [], a.set(u, l)), l.push(t);
        }
        return e;
    }
    function OO(r, e) {
        let t = AO(r);
        return Array.from(t, ([n, i])=>({
                resource: {
                    attributes: (0, cc.toAttributes)(n.attributes),
                    droppedAttributesCount: 0
                },
                scopeLogs: Array.from(i, ([, s])=>{
                    let { instrumentationScope: { name: o, version: a, schemaUrl: u } } = s[0];
                    return {
                        scope: {
                            name: o,
                            version: a
                        },
                        logRecords: s.map((l)=>RO(l, e)),
                        schemaUrl: u
                    };
                }),
                schemaUrl: void 0
            }));
    }
    function RO(r, e) {
        var t, n, i;
        return {
            timeUnixNano: e.encodeHrTime(r.hrTime),
            observedTimeUnixNano: e.encodeHrTime(r.hrTimeObserved),
            severityNumber: r.severityNumber,
            severityText: r.severityText,
            body: (0, cc.toAnyValue)(r.body),
            attributes: Xh(r.attributes),
            droppedAttributesCount: r.droppedAttributesCount,
            flags: (t = r.spanContext) === null || t === void 0 ? void 0 : t.traceFlags,
            traceId: e.encodeOptionalSpanContext((n = r.spanContext) === null || n === void 0 ? void 0 : n.traceId),
            spanId: e.encodeOptionalSpanContext((i = r.spanContext) === null || i === void 0 ? void 0 : i.spanId)
        };
    }
    function Xh(r) {
        return Object.keys(r).map((e)=>(0, cc.toKeyValue)(e, r[e]));
    }
    ur.toLogAttributes = Xh;
});
var Kh = c((j)=>{
    "use strict";
    var bO = j && j.__createBinding || (Object.create ? function(r, e, t, n) {
        n === void 0 && (n = t), Object.defineProperty(r, n, {
            enumerable: !0,
            get: function() {
                return e[t];
            }
        });
    } : function(r, e, t, n) {
        n === void 0 && (n = t), r[n] = e[t];
    }), cr = j && j.__exportStar || function(r, e) {
        for(var t in r)t !== "default" && !Object.prototype.hasOwnProperty.call(e, t) && bO(e, r, t);
    };
    Object.defineProperty(j, "__esModule", {
        value: !0
    });
    j.createExportLogsServiceRequest = j.createExportMetricsServiceRequest = j.createExportTraceServiceRequest = void 0;
    cr(Ch(), j);
    cr(Gr(), j);
    cr(xh(), j);
    cr(Uh(), j);
    cr(Bh(), j);
    cr(Gh(), j);
    var PO = ys();
    Object.defineProperty(j, "createExportTraceServiceRequest", {
        enumerable: !0,
        get: function() {
            return PO.createExportTraceServiceRequest;
        }
    });
    var yO = $h();
    Object.defineProperty(j, "createExportMetricsServiceRequest", {
        enumerable: !0,
        get: function() {
            return yO.createExportMetricsServiceRequest;
        }
    });
    var vO = Wh();
    Object.defineProperty(j, "createExportLogsServiceRequest", {
        enumerable: !0,
        get: function() {
            return vO.createExportLogsServiceRequest;
        }
    });
});
var C = q(la(), 1);
p();
fa();
var Zh = q(Vd(), 1), dr = q(it(), 1), Jh = q(r_(), 1), ef = q(wu(), 1), lc = q(se(), 1), Gs = q(Qr(), 1), tf = q(cp(), 1), He = q(T(), 1);
p();
var _A = Symbol.for("@vercel/request-context");
function Te() {
    return globalThis[_A]?.get();
}
var Uu = q(se(), 1);
function Os(r) {
    return Object.fromEntries(Object.entries(r).filter(([e, t])=>t !== void 0));
}
function lp(r) {
    return r ? r.split("::").at(-1) : void 0;
}
function dp(r = Te(), e) {
    if (!r) return;
    let t = e ? hA(e, r.headers) : void 0;
    return Os({
        [Uu.SemanticAttributes.HTTP_HOST]: r.headers.host,
        [Uu.SemanticAttributes.HTTP_USER_AGENT]: r.headers["user-agent"],
        "http.referer": r.headers.referer,
        "vercel.request_id": lp(r.headers["x-vercel-id"]),
        "vercel.matched_path": r.headers["x-matched-path"],
        "vercel.edge_region": process.env.VERCEL_REGION,
        ...t
    });
}
var pA = {
    keys (r) {
        return [];
    },
    get (r, e) {
        return r[e.toLocaleLowerCase()];
    }
};
function hA(r, e) {
    if (typeof r == "function") return r(e, pA);
    let t = {};
    for (let [n, i] of Object.entries(r)){
        let s = e[i.toLocaleLowerCase()];
        s !== void 0 && (t[n] = s);
    }
    return t;
}
p();
function Br(r) {
    return (r & d.TraceFlags.SAMPLED) !== 0;
}
var Rs = class {
    constructor(e, t){
        this.processors = e;
        this.attributesFromHeaders = t;
        this.rootSpanIds = new Map;
        this.waitSpanEnd = new Map;
    }
    forceFlush() {
        return Promise.all(this.processors.map((e)=>e.forceFlush().catch((t)=>{
                d.diag.error("@vercel/otel: forceFlush failed:", t);
            }))).then(()=>{});
    }
    shutdown() {
        return Promise.all(this.processors.map((e)=>e.shutdown().catch(()=>{}))).then(()=>{});
    }
    onStart(e, t) {
        let { traceId: n, spanId: i, traceFlags: s } = e.spanContext(), o = !e.parentSpanId || !this.rootSpanIds.has(n);
        if (o ? this.rootSpanIds.set(n, {
            rootSpanId: i,
            open: []
        }) : this.rootSpanIds.get(n)?.open.push(e), o && Br(s)) {
            let a = Te(), u = dp(a, this.attributesFromHeaders);
            u && e.setAttributes(u), a && a.waitUntil(async ()=>{
                if (this.rootSpanIds.has(n)) {
                    let l = new Promise((E)=>{
                        this.waitSpanEnd.set(n, E);
                    }), _;
                    await Promise.race([
                        l,
                        new Promise((E)=>{
                            _ = setTimeout(()=>{
                                this.waitSpanEnd.delete(n), E(void 0);
                            }, 50);
                        })
                    ]), _ && clearTimeout(_);
                }
                return this.forceFlush();
            });
        }
        for (let a of this.processors)a.onStart(e, t);
    }
    onEnd(e) {
        let { traceId: t, spanId: n, traceFlags: i } = e.spanContext(), s = Br(i), o = this.rootSpanIds.get(t), a = o?.rootSpanId === n;
        if (s) {
            let u = EA(e);
            u && Object.assign(e.attributes, u);
        }
        if (a) {
            if (this.rootSpanIds.delete(t), o.open.length > 0) {
                for (let u of o.open)if (!u.ended && u.spanContext().spanId !== n) try {
                    u.end();
                } catch (l) {
                    d.diag.error("@vercel/otel: onEnd failed:", l);
                }
            }
        } else if (o) for(let u = 0; u < o.open.length; u++)o.open[u]?.spanContext().spanId === n && o.open.splice(u, 1);
        for (let u of this.processors)u.onEnd(e);
        if (a) {
            let u = this.waitSpanEnd.get(t);
            u && (this.waitSpanEnd.delete(t), u());
        }
    }
}, fA = {
    [d.SpanKind.INTERNAL]: "internal",
    [d.SpanKind.SERVER]: "server",
    [d.SpanKind.CLIENT]: "client",
    [d.SpanKind.PRODUCER]: "producer",
    [d.SpanKind.CONSUMER]: "consumer"
};
function EA(r) {
    let { kind: e, attributes: t } = r, { "operation.name": n, "resource.name": i, "span.type": s, "next.span_type": o, "http.method": a, "http.route": u } = t;
    if (n) return;
    let l = i ?? (a && typeof a == "string" && u && typeof u == "string" ? `${a} ${u}` : u);
    if (r.kind === d.SpanKind.SERVER && a && u && typeof a == "string" && typeof u == "string") return {
        "operation.name": "web.request",
        "resource.name": l
    };
    let _ = r.instrumentationLibrary.name, E = o ?? s;
    if (E && typeof E == "string") {
        let O = _p(_, E);
        return u ? {
            "operation.name": O,
            "resource.name": l
        } : {
            "operation.name": O
        };
    }
    return {
        "operation.name": _p(_, e === d.SpanKind.INTERNAL ? "" : fA[e])
    };
}
function _p(r, e) {
    if (!r) return e;
    let t = r.replace(/[ @./]/g, "_");
    return t.startsWith("_") && (t = t.slice(1)), e ? `${t}.${e}` : t;
}
var yp = q(ys(), 1);
var Pp = q(bp(), 1);
p();
var rr = class extends Pp.OTLPExporterBase {
    constructor(e = {}){
        super(e), e.headers && (this._headers = e.headers);
    }
    onShutdown() {
        d.diag.debug("@vercel/otel/otlp: onShutdown");
    }
    onInit() {
        d.diag.debug("@vercel/otel/otlp: onInit");
    }
    send(e, t, n) {
        if (this._shutdownOnce.isCalled) {
            d.diag.debug("@vercel/otel/otlp: Shutdown already started. Cannot send objects");
            return;
        }
        let i = this.convert(e), s, o, a;
        try {
            ({ body: s, contentType: o, headers: a } = this.toMessage(i));
        } catch (l) {
            d.diag.warn("@vercel/otel/otlp: no proto", l);
            return;
        }
        let u = fetch(this.url, {
            method: "POST",
            body: s,
            headers: {
                ...this._headers,
                ...a,
                "Content-Type": o,
                "User-Agent": "OTel-OTLP-Exporter-JavaScript/0.46.0"
            },
            next: {
                internal: !0
            }
        }).then((l)=>{
            d.diag.debug("@vercel/otel/otlp: onSuccess", l.status, l.statusText), t(), l.arrayBuffer().catch(()=>{});
        }).catch((l)=>{
            d.diag.error("@vercel/otel/otlp: onError", l), n(l);
        }).finally(()=>{
            let l = this._sendingPromises.indexOf(u);
            this._sendingPromises.splice(l, 1);
        });
        this._sendingPromises.push(u);
    }
    getDefaultUrl(e) {
        throw new Error("Method not implemented.");
    }
};
var BA = "v1/traces", qA = `http://localhost:4318/${BA}`;
function Is(r) {
    return typeof r.url == "string" ? r.url : qA;
}
var nr = class {
    constructor(e = {}){
        this.impl = new $u(e);
    }
    export(e, t) {
        this.impl.export(e, t);
    }
    shutdown() {
        return this.impl.shutdown();
    }
    forceFlush() {
        return this.impl.forceFlush();
    }
}, $u = class extends rr {
    convert(e) {
        return (0, yp.createExportTraceServiceRequest)(e, {
            useHex: !0,
            useLongBits: !1
        });
    }
    toMessage(e) {
        return {
            body: JSON.stringify(e),
            contentType: "application/json"
        };
    }
    getDefaultUrl(e) {
        return Is(e);
    }
};
var vh = q(ys(), 1);
var bh = q(Rh(), 1);
function Ph(r) {
    let e = new bh.Writer;
    return KA(r, e), e.finish();
}
function KA(r, e) {
    if (r.resourceSpans != null && r.resourceSpans.length) for(let t = 0; t < r.resourceSpans.length; ++t)zA(r.resourceSpans[t], e.uint32(10).fork()).ldelim();
    return e;
}
function zA(r, e) {
    if (r.resource != null && YA(r.resource, e.uint32(10).fork()).ldelim(), r.scopeSpans != null && r.scopeSpans.length) for(let t = 0; t < r.scopeSpans.length; ++t)QA(r.scopeSpans[t], e.uint32(18).fork()).ldelim();
    return r.schemaUrl != null && e.uint32(26).string(r.schemaUrl), e;
}
function YA(r, e) {
    if (r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)sr(r.attributes[t], e.uint32(10).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(16).uint32(r.droppedAttributesCount), e;
}
function QA(r, e) {
    if (r.scope != null && eO(r.scope, e.uint32(10).fork()).ldelim(), r.spans != null && r.spans.length) for(let t = 0; t < r.spans.length; ++t)tO(r.spans[t], e.uint32(18).fork()).ldelim();
    return r.schemaUrl != null && e.uint32(26).string(r.schemaUrl), e;
}
function sr(r, e) {
    return r.key != null && e.uint32(10).string(r.key), r.value != null && yh(r.value, e.uint32(18).fork()).ldelim(), e;
}
function yh(r, e) {
    return r.stringValue != null && e.uint32(10).string(r.stringValue), r.boolValue != null && e.uint32(16).bool(r.boolValue), r.intValue != null && e.uint32(24).int64(r.intValue), r.doubleValue != null && e.uint32(33).double(r.doubleValue), r.arrayValue != null && ZA(r.arrayValue, e.uint32(42).fork()).ldelim(), r.kvlistValue != null && JA(r.kvlistValue, e.uint32(50).fork()).ldelim(), r.bytesValue != null && e.uint32(58).bytes(r.bytesValue), e;
}
function ZA(r, e) {
    if (r.values != null && r.values.length) for(let t = 0; t < r.values.length; ++t)yh(r.values[t], e.uint32(10).fork()).ldelim();
    return e;
}
function JA(r, e) {
    if (r.values != null && r.values.length) for(let t = 0; t < r.values.length; ++t)sr(r.values[t], e.uint32(10).fork()).ldelim();
    return e;
}
function eO(r, e) {
    if (r.name != null && e.uint32(10).string(r.name), r.version != null && e.uint32(18).string(r.version), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)sr(r.attributes[t], e.uint32(26).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(32).uint32(r.droppedAttributesCount), e;
}
function tO(r, e) {
    if (r.traceId != null && e.uint32(10).bytes(r.traceId), r.spanId != null && e.uint32(18).bytes(r.spanId), r.traceState != null && e.uint32(26).string(r.traceState), r.parentSpanId != null && e.uint32(34).bytes(r.parentSpanId), r.name != null && e.uint32(42).string(r.name), r.kind != null && e.uint32(48).int32(r.kind), r.startTimeUnixNano != null && e.uint32(57).fixed64(r.startTimeUnixNano), r.endTimeUnixNano != null && e.uint32(65).fixed64(r.endTimeUnixNano), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)sr(r.attributes[t], e.uint32(74).fork()).ldelim();
    if (r.droppedAttributesCount != null && e.uint32(80).uint32(r.droppedAttributesCount), r.events != null && r.events.length) for(let t = 0; t < r.events.length; ++t)nO(r.events[t], e.uint32(90).fork()).ldelim();
    if (r.droppedEventsCount != null && e.uint32(96).uint32(r.droppedEventsCount), r.links != null && r.links.length) for(let t = 0; t < r.links.length; ++t)iO(r.links[t], e.uint32(106).fork()).ldelim();
    return r.droppedLinksCount != null && e.uint32(112).uint32(r.droppedLinksCount), r.status != null && rO(r.status, e.uint32(122).fork()).ldelim(), e;
}
function rO(r, e) {
    return r.message != null && e.uint32(18).string(r.message), r.code != null && e.uint32(24).int32(r.code), e;
}
function nO(r, e) {
    if (r.timeUnixNano != null && e.uint32(9).fixed64(r.timeUnixNano), r.name != null && e.uint32(18).string(r.name), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)sr(r.attributes[t], e.uint32(26).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(32).uint32(r.droppedAttributesCount), e;
}
function iO(r, e) {
    if (r.traceId != null && e.uint32(10).bytes(r.traceId), r.spanId != null && e.uint32(18).bytes(r.spanId), r.traceState != null && e.uint32(26).string(r.traceState), r.attributes != null && r.attributes.length) for(let t = 0; t < r.attributes.length; ++t)sr(r.attributes[t], e.uint32(34).fork()).ldelim();
    return r.droppedAttributesCount != null && e.uint32(40).uint32(r.droppedAttributesCount), e;
}
var pt = class {
    constructor(e = {}){
        this.impl = new sc(e);
    }
    export(e, t) {
        this.impl.export(e, t);
    }
    shutdown() {
        return this.impl.shutdown();
    }
    forceFlush() {
        return this.impl.forceFlush();
    }
}, sc = class extends rr {
    convert(e) {
        return (0, vh.createExportTraceServiceRequest)(e, void 0);
    }
    toMessage(e) {
        return {
            body: Ph(e),
            contentType: "application/x-protobuf",
            headers: {
                accept: "application/x-protobuf"
            }
        };
    }
    getDefaultUrl(e) {
        return Is(e);
    }
};
p();
var Pe = q(se(), 1);
function Ih(r, e) {
    return r.replace(/\{(?<temp1>[^{}]+)\}/g, (t, n)=>{
        let i = e[n];
        return i !== void 0 ? String(i) : t;
    });
}
var or = class {
    constructor(e = {}){
        this.instrumentationName = "@vercel/otel/fetch";
        this.instrumentationVersion = "1.0.0";
        this.config = e;
    }
    getConfig() {
        return this.config;
    }
    setConfig() {}
    setTracerProvider(e) {
        this.tracerProvider = e;
    }
    setMeterProvider() {}
    enable() {
        this.disable();
        let { tracerProvider: e } = this;
        if (!e) return;
        let t = e.getTracer(this.instrumentationName, this.instrumentationVersion), n = this.config.ignoreUrls ?? [], i = (y, k)=>{
            if (k?.opentelemetry?.ignore !== void 0) return k.opentelemetry.ignore;
            if (n.length === 0) return !1;
            let S = y.toString();
            return n.some((b)=>typeof b == "string" ? b === "*" ? !0 : S.startsWith(b) : b.test(S));
        }, s = process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || null, o = process.env.VERCEL_BRANCH_URL || process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL || null, a = this.config.propagateContextUrls ?? [], u = this.config.dontPropagateContextUrls ?? [], l = this.config.resourceNameTemplate, { attributesFromRequestHeaders: _, attributesFromResponseHeaders: E } = this.config, O = (y, k)=>{
            if (k?.opentelemetry?.propagateContext) return k.opentelemetry.propagateContext;
            let S = y.toString();
            return u.length > 0 && u.some((b)=>typeof b == "string" ? b === "*" ? !0 : S.startsWith(b) : b.test(S)) ? !1 : s && y.protocol === "https:" && (y.host === s || y.host === o || y.host === Te()?.headers.host) || !s && y.protocol === "http:" && y.hostname === "localhost" ? !0 : a.some((b)=>typeof b == "string" ? b === "*" ? !0 : S.startsWith(b) : b.test(S));
        };
        process.env.NEXT_OTEL_FETCH_DISABLED = "1";
        let x = globalThis.fetch;
        this.originalFetch = x;
        let J = async (y, k)=>{
            let S = k;
            if (S?.next?.internal) return x(y, S);
            let b = new Request(y instanceof Request ? y.clone() : y, S), ye = new URL(b.url);
            if (i(ye, S)) return x(y, S);
            let Vs = {
                [Pe.SemanticAttributes.HTTP_METHOD]: b.method,
                [Pe.SemanticAttributes.HTTP_URL]: b.url,
                [Pe.SemanticAttributes.HTTP_HOST]: ye.host,
                [Pe.SemanticAttributes.HTTP_SCHEME]: ye.protocol.replace(":", ""),
                [Pe.SemanticAttributes.NET_PEER_NAME]: ye.hostname,
                [Pe.SemanticAttributes.NET_PEER_PORT]: ye.port
            }, ht = l ? Ih(l, Vs) : oO(b.url), nf = S?.opentelemetry?.spanName ?? `fetch ${b.method} ${b.url}`, dc = d.context.active(), B = t.startSpan(nf, {
                kind: d.SpanKind.CLIENT,
                attributes: {
                    ...Vs,
                    "operation.name": `fetch.${b.method}`,
                    "resource.name": ht,
                    ...S?.opentelemetry?.attributes
                }
            }, dc);
            if (!B.isRecording() || !Br(B.spanContext().traceFlags)) return B.end(), x(y, S);
            if (O(ye, S)) {
                let ft = d.trace.setSpan(dc, B);
                d.propagation.inject(ft, b.headers, sO);
            }
            _ && Lh(B, _, b.headers);
            try {
                let ft = Date.now();
                S?.body && S.body instanceof FormData && b.headers.delete("content-type");
                let ve = await x(y, {
                    ...S,
                    headers: b.headers
                }), sf = Date.now() - ft;
                return B.setAttribute(Pe.SemanticAttributes.HTTP_STATUS_CODE, ve.status), B.setAttribute("http.response_time", sf), E && Lh(B, E, ve.headers), ve.status >= 500 && oc(B, `Status: ${ve.status} (${ve.statusText})`), ve.body ? aO(ve).then((js)=>{
                    B.isRecording() && (B.setAttribute(Pe.SemanticAttributes.HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, js), B.end());
                }, (js)=>{
                    B.isRecording() && (oc(B, js), B.end());
                }) : B.end(), ve;
            } catch (ft) {
                throw oc(B, ft), B.end(), ft;
            }
        };
        globalThis.fetch = J;
    }
    disable() {
        this.originalFetch && (globalThis.fetch = this.originalFetch);
    }
}, sO = {
    set (r, e, t) {
        r.set(e, t);
    }
};
function oO(r) {
    let e = r.indexOf("?");
    return e === -1 ? r : r.substring(0, e);
}
function aO(r) {
    let e = 0, n = r.clone().body?.getReader();
    if (!n) return Promise.resolve(0);
    let i = ()=>n.read().then(({ done: s, value: o })=>{
            if (!s) return e += o.byteLength, i();
        });
    return i().then(()=>e);
}
function oc(r, e) {
    if (e instanceof Error) r.recordException(e), r.setStatus({
        code: d.SpanStatusCode.ERROR,
        message: e.message
    });
    else {
        let t = String(e);
        r.setStatus({
            code: d.SpanStatusCode.ERROR,
            message: t
        });
    }
}
function Lh(r, e, t) {
    for (let [n, i] of Object.entries(e)){
        let s = t.get(i);
        s !== null && r.setAttribute(n, s);
    }
}
p();
var Mh = q(T(), 1), uO = "00", ac = "traceparent", uc = "tracestate", kr = class {
    fields() {
        return [
            ac,
            uc
        ];
    }
    inject(e, t, n) {
        let i = d.trace.getSpanContext(e);
        if (!i || (0, Mh.isTracingSuppressed)(e) || !(0, d.isSpanContextValid)(i)) return;
        let s = `${uO}-${i.traceId}-${i.spanId}-0${Number(i.traceFlags || 0).toString(16)}`;
        n.set(t, ac, s), i.traceState && n.set(t, uc, i.traceState.serialize());
    }
    extract(e, t, n) {
        let i = n.get(t, ac);
        if (!i) return e;
        let s = Array.isArray(i) ? i[0] : i;
        if (typeof s != "string") return e;
        let o = cO(s);
        if (!o) return e;
        o.isRemote = !0;
        let a = n.get(t, uc);
        if (a) {
            let u = Array.isArray(a) ? a.join(",") : a;
            o.traceState = (0, d.createTraceState)(typeof u == "string" ? u : void 0);
        }
        return d.trace.setSpanContext(e, o);
    }
};
function cO(r) {
    let [e, t, n, i, s] = r.split("-");
    return !e || !t || !n || !i || e.length !== 2 || t.length !== 32 || n.length !== 16 || i.length !== 2 || e === "00" && s ? null : {
        traceId: t,
        spanId: n,
        traceFlags: parseInt(i, 16)
    };
}
p();
var ws = class {
    fields() {
        return [];
    }
    inject() {}
    extract(e) {
        let t = Te();
        if (!t?.telemetry) return d.diag.warn("@vercel/otel: Vercel telemetry extension not found."), e;
        let { rootSpanContext: n } = t.telemetry;
        return n ? (d.diag.debug("@vercel/otel: Extracted root SpanContext from Vercel request context.", n), d.trace.setSpanContext(e, {
            ...n,
            isRemote: !0,
            traceFlags: n.traceFlags || d.TraceFlags.SAMPLED
        })) : e;
    }
};
p();
var Us = q(T(), 1), zh = q(Kh(), 1);
var Bs = class {
    export(e, t) {
        let n = Te();
        if (!n?.telemetry) {
            d.diag.warn("@vercel/otel: no telemetry context found"), t({
                code: Us.ExportResultCode.SUCCESS,
                error: void 0
            });
            return;
        }
        try {
            let i = (0, zh.createExportTraceServiceRequest)(e, {
                useHex: !0,
                useLongBits: !1
            });
            n.telemetry.reportSpans(i), t({
                code: Us.ExportResultCode.SUCCESS,
                error: void 0
            });
        } catch (i) {
            t({
                code: Us.ExportResultCode.FAILED,
                error: i instanceof Error ? i : new Error(String(i))
            });
        }
    }
    shutdown() {
        return Promise.resolve();
    }
    forceFlush() {
        return Promise.resolve();
    }
};
var IO = {
    ALL: d.DiagLogLevel.ALL,
    VERBOSE: d.DiagLogLevel.VERBOSE,
    DEBUG: d.DiagLogLevel.DEBUG,
    INFO: d.DiagLogLevel.INFO,
    WARN: d.DiagLogLevel.WARN,
    ERROR: d.DiagLogLevel.ERROR,
    NONE: d.DiagLogLevel.NONE
}, qs = class {
    constructor(e = {}){
        this.configuration = e;
    }
    start() {
        let e = LO(), t = this.configuration, n = ("TURBOPACK compile-time value", "nodejs") || "nodejs", i = !!e.OTEL_SDK_DISABLED;
        if (process.env.OTEL_LOG_LEVEL && d.diag.setLogger(new d.DiagConsoleLogger, {
            logLevel: IO[process.env.OTEL_LOG_LEVEL.toUpperCase()]
        }), i) return;
        let s = t.idGenerator ?? new C.RandomIdGenerator, o = t.contextManager ?? new tf.AsyncLocalStorageContextManager;
        o.enable(), this.contextManager = o;
        let a = e.OTEL_SERVICE_NAME || t.serviceName || "app", u = new dr.Resource(Os({
            [lc.SemanticResourceAttributes.SERVICE_NAME]: a,
            "node.ci": process.env.CI ? !0 : void 0,
            "node.env": ("TURBOPACK compile-time value", "development"),
            env: process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV,
            "vercel.region": process.env.VERCEL_REGION,
            "vercel.runtime": n,
            "vercel.sha": process.env.VERCEL_GIT_COMMIT_SHA || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA,
            "vercel.host": process.env.VERCEL_URL || process.env.NEXT_PUBLIC_VERCEL_URL || void 0,
            "vercel.branch_host": process.env.VERCEL_BRANCH_URL || process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL || void 0,
            "vercel.deployment_id": process.env.VERCEL_DEPLOYMENT_ID || void 0,
            [lc.SemanticResourceAttributes.SERVICE_VERSION]: process.env.VERCEL_DEPLOYMENT_ID,
            ...t.attributes
        })), l = t.resourceDetectors ?? [
            dr.envDetectorSync
        ];
        if (t.autoDetectResources ?? !0) {
            let S = {
                detectors: l
            };
            u = u.merge((0, dr.detectResourcesSync)(S));
        }
        let E = NO(t.propagators, t, e), O = CO(t.traceSampler, e), x = wO(t.spanProcessors, t, e);
        x.length === 0 && d.diag.warn("@vercel/otel: No span processors configured. No spans will be exported.");
        let J = t.spanLimits, y = new C.BasicTracerProvider({
            resource: u,
            idGenerator: s,
            sampler: O,
            spanLimits: J
        });
        if (y.addSpanProcessor(new Rs(x, t.attributesFromHeaders)), y.register({
            contextManager: o,
            propagator: new He.CompositePropagator({
                propagators: E
            })
        }), this.tracerProvider = y, t.logRecordProcessor) {
            let S = new Jh.LoggerProvider({
                resource: u
            });
            this.loggerProvider = S, S.addLogRecordProcessor(t.logRecordProcessor), at.logs.setGlobalLoggerProvider(S);
        }
        if (t.metricReader || t.views) {
            let S = new ef.MeterProvider({
                resource: u,
                views: t.views ?? []
            });
            t.metricReader && S.addMetricReader(t.metricReader), d.metrics.setGlobalMeterProvider(S), this.meterProvider = S;
        }
        let k = MO(t.instrumentations, t.instrumentationConfig);
        this.disableInstrumentations = (0, Zh.registerInstrumentations)({
            instrumentations: k
        }), d.diag.info("@vercel/otel: started", a, n);
    }
    async shutdown() {
        let e = [];
        this.tracerProvider && e.push(this.tracerProvider.shutdown()), this.loggerProvider && e.push(this.loggerProvider.shutdown()), this.meterProvider && e.push(this.meterProvider.shutdown()), d.diag.info("@vercel/otel: shutting down", e.length, ("TURBOPACK compile-time value", "nodejs")), await Promise.all(e), this.contextManager && this.contextManager.disable();
        let { disableInstrumentations: t } = this;
        t && t();
    }
};
function LO() {
    let r = (0, Gs.parseEnvironment)(process.env);
    return {
        ...Gs.DEFAULT_ENVIRONMENT,
        ...r
    };
}
function MO(r, e) {
    return (r ?? [
        "auto"
    ]).map((t)=>t === "auto" ? (d.diag.debug("@vercel/otel: Configure instrumentations: fetch", e?.fetch), [
            new or(e?.fetch)
        ]) : t === "fetch" ? (d.diag.debug("@vercel/otel: Configure instrumentations: fetch", e?.fetch), new or(e?.fetch)) : t).flat();
}
function NO(r, e, t) {
    let n = process.env.OTEL_PROPAGATORS && t.OTEL_PROPAGATORS && t.OTEL_PROPAGATORS.length > 0 ? t.OTEL_PROPAGATORS : void 0;
    return (r ?? n ?? [
        "auto"
    ]).map((i)=>{
        if (i === "none") return [];
        if (i === "auto") {
            let s = [];
            return s.push({
                name: "tracecontext",
                propagator: new kr
            }), s.push({
                name: "baggage",
                propagator: new He.W3CBaggagePropagator
            }), s.push({
                name: "vercel-runtime",
                propagator: new ws
            }), d.diag.debug(`@vercel/otel: Configure propagators: ${s.map((o)=>o.name).join(", ")}`), s.map((o)=>o.propagator);
        }
        if (i === "tracecontext") return d.diag.debug("@vercel/otel: Configure propagator: tracecontext"), new kr;
        if (i === "baggage") return d.diag.debug("@vercel/otel: Configure propagator: baggage"), new He.W3CBaggagePropagator;
        if (typeof i == "string") throw new Error(`Unknown propagator: "${i}"`);
        return i;
    }).flat();
}
var Yh = "always_on", lr = 1;
function CO(r, e) {
    if (r && typeof r != "string") return r;
    let t = r && r !== "auto" ? r : e.OTEL_TRACES_SAMPLER || Yh;
    switch(d.diag.debug("@vercel/otel: Configure sampler: ", t), t){
        case "always_on":
            return new C.AlwaysOnSampler;
        case "always_off":
            return new C.AlwaysOffSampler;
        case "parentbased_always_on":
            return new C.ParentBasedSampler({
                root: new C.AlwaysOnSampler
            });
        case "parentbased_always_off":
            return new C.ParentBasedSampler({
                root: new C.AlwaysOffSampler
            });
        case "traceidratio":
            return new C.TraceIdRatioBasedSampler(Qh(e));
        case "parentbased_traceidratio":
            return new C.ParentBasedSampler({
                root: new C.TraceIdRatioBasedSampler(Qh(e))
            });
        default:
            return d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER value "${String(e.OTEL_TRACES_SAMPLER)} invalid, defaulting to ${Yh}".`), new C.AlwaysOnSampler;
    }
}
function Qh(r) {
    if (r.OTEL_TRACES_SAMPLER_ARG === void 0 || r.OTEL_TRACES_SAMPLER_ARG === "") return d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG is blank, defaulting to ${lr}.`), lr;
    d.diag.debug("@vercel/otel: Configure sampler probability: ", r.OTEL_TRACES_SAMPLER_ARG);
    let e = Number(r.OTEL_TRACES_SAMPLER_ARG);
    return isNaN(e) ? (d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is invalid, defaulting to ${lr}.`), lr) : e < 0 || e > 1 ? (d.diag.error(`@vercel/otel: OTEL_TRACES_SAMPLER_ARG=${r.OTEL_TRACES_SAMPLER_ARG} was given, but it is out of range ([0..1]), defaulting to ${lr}.`), lr) : e;
}
function wO(r, e, t) {
    return [
        ...(r ?? [
            "auto"
        ]).flatMap((n)=>{
            if (n === "auto") {
                let i = [
                    new C.BatchSpanProcessor(new Bs)
                ];
                if (process.env.VERCEL_OTEL_ENDPOINTS) {
                    let s = process.env.VERCEL_OTEL_ENDPOINTS_PORT || "4318", o = process.env.VERCEL_OTEL_ENDPOINTS_PROTOCOL || "http/protobuf";
                    d.diag.debug("@vercel/otel: Configure vercel otel collector on port: ", s, o);
                    let a = {
                        url: `http://localhost:${s}/v1/traces`,
                        headers: {}
                    }, u = o === "http/protobuf" ? new pt(a) : new nr(a);
                    i.push(new C.BatchSpanProcessor(u));
                } else (!e.traceExporter || e.traceExporter === "auto" || t.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT || t.OTEL_EXPORTER_OTLP_ENDPOINT) && i.push(new C.BatchSpanProcessor(xO(t)));
                return i;
            }
            return n;
        }).filter(BO),
        ...e.traceExporter && e.traceExporter !== "auto" ? [
            new C.BatchSpanProcessor(e.traceExporter)
        ] : []
    ];
}
function xO(r) {
    let e = process.env.OTEL_EXPORTER_OTLP_TRACES_PROTOCOL ?? process.env.OTEL_EXPORTER_OTLP_PROTOCOL ?? "http/protobuf", t = UO(r), n = {
        ...He.baggageUtils.parseKeyPairsIntoRecord(r.OTEL_EXPORTER_OTLP_HEADERS),
        ...He.baggageUtils.parseKeyPairsIntoRecord(r.OTEL_EXPORTER_OTLP_TRACES_HEADERS)
    };
    switch(d.diag.debug("@vercel/otel: Configure trace exporter: ", e, t, `headers: ${Object.keys(n).join(",") || "<none>"}`), e){
        case "http/json":
            return new nr({
                url: t,
                headers: n
            });
        case "http/protobuf":
            return new pt({
                url: t,
                headers: n
            });
        default:
            return d.diag.warn(`@vercel/otel: Unsupported OTLP traces protocol: ${e}. Using http/protobuf.`), new pt;
    }
}
var rf = "v1/traces", DO = `http://localhost:4318/${rf}`;
function UO(r) {
    let e = r.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT;
    if (e && typeof e == "string") return e;
    let t = r.OTEL_EXPORTER_OTLP_ENDPOINT;
    return t && typeof t == "string" ? `${t}/${rf}` : DO;
}
function BO(r) {
    return r != null;
}
function yv(r) {
    let e;
    r ? typeof r == "string" ? e = {
        serviceName: r
    } : e = r : e = {}, new qs(e).start();
}
;
 //# sourceMappingURL=index.js.map
}),
];

//# sourceMappingURL=ecc1d__pnpm_d7a1e783._.js.map