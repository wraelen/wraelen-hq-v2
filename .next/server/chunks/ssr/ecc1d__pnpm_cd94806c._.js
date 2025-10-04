module.exports = [
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/react-hook-form@7.63.0_react@19.1.0/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Controller",
    ()=>Controller,
    "Form",
    ()=>Form,
    "FormProvider",
    ()=>FormProvider,
    "appendErrors",
    ()=>appendErrors,
    "createFormControl",
    ()=>createFormControl,
    "get",
    ()=>get,
    "set",
    ()=>set,
    "useController",
    ()=>useController,
    "useFieldArray",
    ()=>useFieldArray,
    "useForm",
    ()=>useForm,
    "useFormContext",
    ()=>useFormContext,
    "useFormState",
    ()=>useFormState,
    "useWatch",
    ()=>useWatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
var isCheckBoxInput = (element)=>element.type === 'checkbox';
var isDateObject = (value1)=>value1 instanceof Date;
var isNullOrUndefined = (value1)=>value1 == null;
const isObjectType = (value1)=>typeof value1 === 'object';
var isObject = (value1)=>!isNullOrUndefined(value1) && !Array.isArray(value1) && isObjectType(value1) && !isDateObject(value1);
var getEventValue = (event)=>isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name)=>names.has(getNodeParentName(name));
var isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty('isPrototypeOf');
};
var isWeb = "undefined" !== 'undefined' && typeof window.HTMLElement !== 'undefined' && typeof document !== 'undefined';
function cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== 'undefined' ? data instanceof FileList : false;
    if (data instanceof Date) {
        copy = new Date(data);
    } else if (!(isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || isObject(data))) {
        copy = isArray ? [] : Object.create(Object.getPrototypeOf(data));
        if (!isArray && !isPlainObject(data)) {
            copy = data;
        } else {
            for(const key in data){
                if (data.hasOwnProperty(key)) {
                    copy[key] = cloneObject(data[key]);
                }
            }
        }
    } else {
        return data;
    }
    return copy;
}
var isKey = (value1)=>/^\w*$/.test(value1);
var isUndefined = (val)=>val === undefined;
var compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var stringToPath = (input)=>compact(input.replace(/["|']|\]/g, '').split(/\.|\[/));
var get = (object, path, defaultValue)=>{
    if (!path || !isObject(object)) {
        return defaultValue;
    }
    const result = (isKey(path) ? [
        path
    ] : stringToPath(path)).reduce((result, key)=>isNullOrUndefined(result) ? result : result[key], object);
    return isUndefined(result) || result === object ? isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var isBoolean = (value1)=>typeof value1 === 'boolean';
var set = (object, path, value1)=>{
    let index = -1;
    const tempPath = isKey(path) ? [
        path
    ] : stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            return;
        }
        object[key] = newValue;
        object = object[key];
    }
};
const EVENTS = {
    BLUR: 'blur',
    FOCUS_OUT: 'focusout',
    CHANGE: 'change'
};
const VALIDATION_MODE = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all'
};
const INPUT_VALIDATION_RULES = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate'
};
const HookFormContext = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext(null);
HookFormContext.displayName = 'HookFormContext';
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const useFormContext = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useContext(HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const FormProvider = (props)=>{
    const { children, ...data } = props;
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(HookFormContext.Provider, {
        value: data
    }, children);
};
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true)=>{
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState){
        Object.defineProperty(result, key, {
            get: ()=>{
                const _key = key;
                if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
                    control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
                }
                localProxyFormState && (localProxyFormState[_key] = true);
                return formState[_key];
            }
        });
    }
    return result;
};
const useIsomorphicLayoutEffect = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect;
/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFormState(props) {
    const methods = useFormContext();
    const { control = methods.control, disabled, name, exact } = props || {};
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(control._formState);
    const _localProxyFormState = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    });
    useIsomorphicLayoutEffect(()=>control._subscribe({
            name,
            formState: _localProxyFormState.current,
            exact,
            callback: (formState)=>{
                !disabled && updateFormState({
                    ...control._formState,
                    ...formState
                });
            }
        }), [
        name,
        disabled,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        _localProxyFormState.current.isValid && control._setValid(true);
    }, [
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>getProxyFormState(formState, control, _localProxyFormState.current, false), [
        formState,
        control
    ]);
}
var isString = (value1)=>typeof value1 === 'string';
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue)=>{
    if (isString(names)) {
        isGlobal && _names.watch.add(names);
        return get(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) {
        return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
    }
    isGlobal && (_names.watchAll = true);
    return formValues;
};
var isPrimitive = (value1)=>isNullOrUndefined(value1) || !isObjectType(value1);
function deepEqual(object1, object2, _internal_visited = new WeakSet()) {
    if (isPrimitive(object1) || isPrimitive(object2)) {
        return object1 === object2;
    }
    if (isDateObject(object1) && isDateObject(object2)) {
        return object1.getTime() === object2.getTime();
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    if (_internal_visited.has(object1) || _internal_visited.has(object2)) {
        return true;
    }
    _internal_visited.add(object1);
    _internal_visited.add(object2);
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) {
            return false;
        }
        if (key !== 'ref') {
            const val2 = object2[key];
            if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2, _internal_visited) : val1 !== val2) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */ function useWatch(props) {
    const methods = useFormContext();
    const { control = methods.control, name, defaultValue, disabled, exact, compute } = props || {};
    const _defaultValue = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(defaultValue);
    const _compute = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(compute);
    const _computeFormValues = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    _compute.current = compute;
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>control._getWatch(name, _defaultValue.current), [
        control,
        name
    ]);
    const [value1, updateValue] = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(_compute.current ? _compute.current(defaultValueMemo) : defaultValueMemo);
    useIsomorphicLayoutEffect(()=>control._subscribe({
            name,
            formState: {
                values: true
            },
            exact,
            callback: (formState)=>{
                if (!disabled) {
                    const formValues = generateWatchOutput(name, control._names, formState.values || control._formValues, false, _defaultValue.current);
                    if (_compute.current) {
                        const computedFormValues = _compute.current(formValues);
                        if (!deepEqual(computedFormValues, _computeFormValues.current)) {
                            updateValue(computedFormValues);
                            _computeFormValues.current = computedFormValues;
                        }
                    } else {
                        updateValue(formValues);
                    }
                }
            }
        }), [
        control,
        disabled,
        name,
        exact
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>control._removeUnmounted());
    return value1;
}
/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */ function useController(props) {
    const methods = useFormContext();
    const { name, disabled, control = methods.control, shouldUnregister, defaultValue } = props;
    const isArrayField = isNameInFieldArray(control._names.array, name);
    const defaultValueMemo = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>get(control._formValues, name, get(control._defaultValues, name, defaultValue)), [
        control,
        name,
        defaultValue
    ]);
    const value1 = useWatch({
        control,
        name,
        defaultValue: defaultValueMemo,
        exact: true
    });
    const formState = useFormState({
        control,
        name,
        exact: true
    });
    const _props = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(props);
    const _previousNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _registerProps = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(control.register(name, {
        ...props.rules,
        value: value1,
        ...isBoolean(props.disabled) ? {
            disabled: props.disabled
        } : {}
    }));
    _props.current = props;
    const fieldState = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>Object.defineProperties({}, {
            invalid: {
                enumerable: true,
                get: ()=>!!get(formState.errors, name)
            },
            isDirty: {
                enumerable: true,
                get: ()=>!!get(formState.dirtyFields, name)
            },
            isTouched: {
                enumerable: true,
                get: ()=>!!get(formState.touchedFields, name)
            },
            isValidating: {
                enumerable: true,
                get: ()=>!!get(formState.validatingFields, name)
            },
            error: {
                enumerable: true,
                get: ()=>get(formState.errors, name)
            }
        }), [
        formState,
        name
    ]);
    const onChange = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((event)=>_registerProps.current.onChange({
            target: {
                value: getEventValue(event),
                name: name
            },
            type: EVENTS.CHANGE
        }), [
        name
    ]);
    const onBlur = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(()=>_registerProps.current.onBlur({
            target: {
                value: get(control._formValues, name),
                name: name
            },
            type: EVENTS.BLUR
        }), [
        name,
        control._formValues
    ]);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((elm)=>{
        const field = get(control._fields, name);
        if (field && elm) {
            field._f.ref = {
                focus: ()=>elm.focus && elm.focus(),
                select: ()=>elm.select && elm.select(),
                setCustomValidity: (message)=>elm.setCustomValidity(message),
                reportValidity: ()=>elm.reportValidity()
            };
        }
    }, [
        control._fields,
        name
    ]);
    const field = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            name,
            value: value1,
            ...isBoolean(disabled) || formState.disabled ? {
                disabled: formState.disabled || disabled
            } : {},
            onChange,
            onBlur,
            ref
        }), [
        name,
        disabled,
        formState.disabled,
        onChange,
        onBlur,
        ref,
        value1
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
        const previousName = _previousNameRef.current;
        if (previousName && previousName !== name && !isArrayField) {
            control.unregister(previousName);
        }
        control.register(name, {
            ..._props.current.rules,
            ...isBoolean(_props.current.disabled) ? {
                disabled: _props.current.disabled
            } : {}
        });
        const updateMounted = (name, value1)=>{
            const field = get(control._fields, name);
            if (field && field._f) {
                field._f.mount = value1;
            }
        };
        updateMounted(name, true);
        if (_shouldUnregisterField) {
            const value1 = cloneObject(get(control._options.defaultValues, name));
            set(control._defaultValues, name, value1);
            if (isUndefined(get(control._formValues, name))) {
                set(control._formValues, name, value1);
            }
        }
        !isArrayField && control.register(name);
        _previousNameRef.current = name;
        return ()=>{
            (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
        };
    }, [
        name,
        control,
        isArrayField,
        shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        control._setDisabledField({
            disabled,
            name
        });
    }, [
        disabled,
        name,
        control
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            field,
            formState,
            fieldState
        }), [
        field,
        formState,
        fieldState
    ]);
}
/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */ const Controller = (props)=>props.render(useController(props));
const flatten = (obj)=>{
    const output = {};
    for (const key of Object.keys(obj)){
        if (isObjectType(obj[key]) && obj[key] !== null) {
            const nested = flatten(obj[key]);
            for (const nestedKey of Object.keys(nested)){
                output[`${key}.${nestedKey}`] = nested[nestedKey];
            }
        } else {
            output[key] = obj[key];
        }
    }
    return output;
};
const POST_REQUEST = 'post';
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */ function Form(props) {
    const methods = useFormContext();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { control = methods.control, onSubmit, children, action, method = POST_REQUEST, headers, encType, onError, render, onSuccess, validateStatus, ...rest } = props;
    const submit = async (event)=>{
        let hasError = false;
        let type = '';
        await control.handleSubmit(async (data)=>{
            const formData = new FormData();
            let formDataJson = '';
            try {
                formDataJson = JSON.stringify(data);
            } catch (_a) {}
            const flattenFormValues = flatten(control._formValues);
            for(const key in flattenFormValues){
                formData.append(key, flattenFormValues[key]);
            }
            if (onSubmit) {
                await onSubmit({
                    data,
                    event,
                    method,
                    formData,
                    formDataJson
                });
            }
            if (action) {
                try {
                    const shouldStringifySubmissionData = [
                        headers && headers['Content-Type'],
                        encType
                    ].some((value1)=>value1 && value1.includes('json'));
                    const response = await fetch(String(action), {
                        method,
                        headers: {
                            ...headers,
                            ...encType && encType !== 'multipart/form-data' ? {
                                'Content-Type': encType
                            } : {}
                        },
                        body: shouldStringifySubmissionData ? formDataJson : formData
                    });
                    if (response && (validateStatus ? !validateStatus(response.status) : response.status < 200 || response.status >= 300)) {
                        hasError = true;
                        onError && onError({
                            response
                        });
                        type = String(response.status);
                    } else {
                        onSuccess && onSuccess({
                            response
                        });
                    }
                } catch (error) {
                    hasError = true;
                    onError && onError({
                        error
                    });
                }
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false
            });
            props.control.setError('root.server', {
                type
            });
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setMounted(true);
    }, []);
    return render ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, render({
        submit
    })) : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        noValidate: mounted,
        action: action,
        method: method,
        encType: encType,
        onSubmit: submit,
        ...rest
    }, children);
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
var createSubject = ()=>{
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers){
            observer.next && observer.next(value1);
        }
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next,
        subscribe,
        unsubscribe
    };
};
function extractFormValues(fieldsState, formValues) {
    const values = {};
    for(const key in fieldsState){
        if (fieldsState.hasOwnProperty(key)) {
            const fieldState = fieldsState[key];
            const fieldValue = formValues[key];
            if (fieldState && isObject(fieldState) && fieldValue) {
                const nestedFieldsState = extractFormValues(fieldState, fieldValue);
                if (isObject(nestedFieldsState)) {
                    values[key] = nestedFieldsState;
                }
            } else if (fieldsState[key]) {
                values[key] = fieldValue;
            }
        }
    }
    return values;
}
var isEmptyObject = (value1)=>isObject(value1) && !Object.keys(value1).length;
var isFileInput = (element)=>element.type === 'file';
var isFunction = (value1)=>typeof value1 === 'function';
var isHTMLElement = (value1)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return false;
    }
    //TURBOPACK unreachable
    ;
    const owner = undefined;
};
var isMultipleSelect = (element)=>element.type === `select-multiple`;
var isRadioInput = (element)=>element.type === 'radio';
var isRadioOrCheckbox = (ref)=>isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref)=>isHTMLElement(ref) && ref.isConnected;
function baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length){
        object = isUndefined(object) ? index++ : object[updatePath[index++]];
    }
    return object;
}
function isEmptyArray(obj) {
    for(const key in obj){
        if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
            return false;
        }
    }
    return true;
}
function unset(object, path) {
    const paths = Array.isArray(path) ? path : isKey(path) ? [
        path
    ] : stringToPath(path);
    const childObject = paths.length === 1 ? object : baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) {
        delete childObject[key];
    }
    if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
        unset(object, paths.slice(0, -1));
    }
    return object;
}
var objectHasFunction = (data)=>{
    for(const key in data){
        if (isFunction(data[key])) {
            return true;
        }
    }
    return false;
};
function isTraversable(value1) {
    return Array.isArray(value1) || isObject(value1) && !objectHasFunction(value1);
}
function markFieldsDirty(data, fields = {}) {
    for(const key in data){
        if (isTraversable(data[key])) {
            fields[key] = Array.isArray(data[key]) ? [] : {};
            markFieldsDirty(data[key], fields[key]);
        } else if (!isNullOrUndefined(data[key])) {
            fields[key] = true;
        }
    }
    return fields;
}
function getDirtyFields(data, formValues, dirtyFieldsFromValues) {
    if (!dirtyFieldsFromValues) {
        dirtyFieldsFromValues = markFieldsDirty(formValues);
    }
    for(const key in data){
        if (isTraversable(data[key])) {
            if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
                dirtyFieldsFromValues[key] = markFieldsDirty(data[key], Array.isArray(data[key]) ? [] : {});
            } else {
                getDirtyFields(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
            }
        } else {
            dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
        }
    }
    return dirtyFieldsFromValues;
}
const defaultResult = {
    value: false,
    isValid: false
};
const validResult = {
    value: true,
    isValid: true
};
var getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === '' ? validResult : {
            value: options[0].value,
            isValid: true
        } : validResult : defaultResult;
    }
    return defaultResult;
};
var getFieldValueAs = (value1, { valueAsNumber, valueAsDate, setValueAs })=>isUndefined(value1) ? value1 : valueAsNumber ? value1 === '' ? NaN : value1 ? +value1 : value1 : valueAsDate && isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
const defaultReturn = {
    isValid: false,
    value: null
};
var getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, defaultReturn) : defaultReturn;
function getFieldValue(_f) {
    const ref = _f.ref;
    if (isFileInput(ref)) {
        return ref.files;
    }
    if (isRadioInput(ref)) {
        return getRadioValue(_f.refs).value;
    }
    if (isMultipleSelect(ref)) {
        return [
            ...ref.selectedOptions
        ].map(({ value: value1 })=>value1);
    }
    if (isCheckBoxInput(ref)) {
        return getCheckboxValue(_f.refs).value;
    }
    return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = get(_fields, name);
        field && set(fields, name, field._f);
    }
    return {
        criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields,
        shouldUseNativeValidation
    };
};
var isRegex = (value1)=>value1 instanceof RegExp;
var getRuleValue = (rule)=>isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
        isOnBlur: mode === VALIDATION_MODE.onBlur,
        isOnChange: mode === VALIDATION_MODE.onChange,
        isOnAll: mode === VALIDATION_MODE.all,
        isOnTouch: mode === VALIDATION_MODE.onTouched
    });
const ASYNC_FUNCTION = 'AsyncFunction';
var hasPromiseValidation = (fieldReference)=>!!fieldReference && !!fieldReference.validate && !!(isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === ASYNC_FUNCTION || isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction)=>validateFunction.constructor.name === ASYNC_FUNCTION));
var hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
var isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const iterateFieldsByAction = (fields, action, fieldsNames, abortEarly)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = get(fields, key);
        if (field) {
            const { _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) {
                    return true;
                } else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) {
                    return true;
                } else {
                    if (iterateFieldsByAction(currentField, action)) {
                        break;
                    }
                }
            } else if (isObject(currentField)) {
                if (iterateFieldsByAction(currentField, action)) {
                    break;
                }
            }
        }
    }
    return;
};
function schemaErrorLookup(errors, _fields, name) {
    const error = get(errors, name);
    if (error || isKey(name)) {
        return {
            error,
            name
        };
    }
    const names = name.split('.');
    while(names.length){
        const fieldName = names.join('.');
        const field = get(_fields, fieldName);
        const foundError = get(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) {
            return {
                name
            };
        }
        if (foundError && foundError.type) {
            return {
                name: fieldName,
                error: foundError
            };
        }
        if (foundError && foundError.root && foundError.root.type) {
            return {
                name: `${fieldName}.root`,
                error: foundError.root
            };
        }
        names.pop();
    }
    return {
        name
    };
}
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot)=>{
    updateFormState(formStateData);
    const { name, ...formState } = formStateData;
    return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var shouldSubscribeByName = (name, signalName, exact)=>!name || !signalName || name === signalName || convertToArrayPayload(name).some((currentName)=>currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) {
        return false;
    } else if (!isSubmitted && mode.isOnTouch) {
        return !(isTouched || isBlurEvent);
    } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
        return !isBlurEvent;
    } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
        return isBlurEvent;
    }
    return true;
};
var unsetEmptyArray = (ref, name)=>!compact(get(ref, name)).length && unset(ref, name);
var updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = convertToArrayPayload(get(errors, name));
    set(fieldArrayErrors, 'root', error[name]);
    set(errors, name, fieldArrayErrors);
    return errors;
};
function getValidateError(result, ref, type = 'validate') {
    if (isString(result) || Array.isArray(result) && result.every(isString) || isBoolean(result) && !result) {
        return {
            type,
            message: isString(result) ? result : '',
            ref
        };
    }
}
var getValueAndMessage = (validationData)=>isObject(validationData) && !isRegex(validationData) ? validationData : {
        value: validationData,
        message: ''
    };
var validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount } = field._f;
    const inputValue = get(formValues, name);
    if (!mount || disabledFieldNames.has(name)) {
        return {};
    }
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity(isBoolean(message) ? '' : message || '');
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = isRadioInput(ref);
    const isCheckBox = isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === '' || inputValue === '' || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength)=>{
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message,
            ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
        const { value: value1, message } = isString(required) ? {
            value: !!required,
            message: required
        } : getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.required,
                message,
                ref: inputRef,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = getValueAndMessage(max);
        const minOutput = getValueAndMessage(min);
        if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!isNullOrUndefined(maxOutput.value)) {
                exceedMax = valueNumber > maxOutput.value;
            }
            if (!isNullOrUndefined(minOutput.value)) {
                exceedMin = valueNumber < minOutput.value;
            }
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + ' ' + time);
            const isTime = ref.type == 'time';
            const isWeek = ref.type == 'week';
            if (isString(maxOutput.value) && inputValue) {
                exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            }
            if (isString(minOutput.value) && inputValue) {
                exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
            }
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = getValueAndMessage(maxLength);
        const minLengthOutput = getValueAndMessage(minLength);
        const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
        const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && isString(inputValue)) {
        const { value: patternValue, message } = getValueAndMessage(pattern);
        if (isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: INPUT_VALIDATION_RULES.pattern,
                message,
                ref,
                ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if (isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if (isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
                    break;
                }
                const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) {
                        error[name] = validationResult;
                    }
                }
            }
            if (!isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) {
                    return error;
                }
            }
        }
    }
    setCustomValidity(true);
    return error;
};
const defaultOptions = {
    mode: VALIDATION_MODE.onSubmit,
    reValidateMode: VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function createFormControl(props = {}) {
    let _options = {
        ...defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isReady: false,
        isLoading: isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    let _proxySubscribeFormState = {
        ..._proxyFormState
    };
    const _subjects = {
        array: createSubject(),
        state: createSubject()
    };
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = setTimeout(callback, wait);
        };
    const _setValid = async (shouldUpdateValid)=>{
        if (!_options.disabled && (_proxyFormState.isValid || _proxySubscribeFormState.isValid || shouldUpdateValid)) {
            const isValid = _options.resolver ? isEmptyObject((await _runSchema()).errors) : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) {
                _subjects.state.next({
                    isValid
                });
            }
        }
    };
    const _updateIsValidating = (names, isValidating)=>{
        if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields || _proxySubscribeFormState.isValidating || _proxySubscribeFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name)=>{
                if (name) {
                    isValidating ? set(_formState.validatingFields, name, isValidating) : unset(_formState.validatingFields, name);
                }
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !isEmptyObject(_formState.validatingFields)
            });
        }
    };
    const _setFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true)=>{
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
                const fieldValues = method(get(_fields, name), args.argA, args.argB);
                shouldSetValues && set(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
                const errors = method(get(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && set(_formState.errors, name, errors);
                unsetEmptyArray(_formState.errors, name);
            }
            if ((_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
                const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && set(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) {
                _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
            }
            _subjects.state.next({
                name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else {
            set(_formValues, name, values);
        }
    };
    const updateErrors = (name, error)=>{
        set(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const _setErrors = (errors)=>{
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = get(_fields, name);
        if (field) {
            const defaultValue = get(_formValues, name, isUndefined(value1) ? get(_defaultValues, name) : value1);
            isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _state.mount && _setValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name
        };
        if (!_options.disabled) {
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty || _proxySubscribeFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
                isPreviousDirty = !!get(_formState.dirtyFields, name);
                isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField = shouldUpdateField || (_proxyFormState.dirtyFields || _proxySubscribeFormState.dirtyFields) && isPreviousDirty !== !isCurrentFieldPristine;
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = get(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    set(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField = shouldUpdateField || (_proxyFormState.touchedFields || _proxySubscribeFormState.touchedFields) && isPreviousFieldTouched !== isBlurEvent;
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = get(_formState.errors, name);
        const shouldUpdateValid = (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isBoolean(isValid) && _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
        }
        if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && isBoolean(isValid) ? {
                    isValid
                } : {},
                errors: _formState.errors,
                name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _runSchema = async (name)=>{
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors } = await _runSchema(names);
        if (names) {
            for (const name of names){
                const error = get(errors, name);
                error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
            }
        } else {
            _formState.errors = errors;
        }
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true
    })=>{
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ], true);
                    }
                    const fieldError = await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) {
                        _updateIsValidating([
                            _f.name
                        ]);
                    }
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) {
                            break;
                        }
                    }
                    !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
                }
                !isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = get(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!live(ref)) : !live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>!_options.disabled && (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>generateWatchOutput(names, _names, {
            ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal, defaultValue);
    const _getFieldArray = (name)=>compact(get(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? get(_defaultValues, name, []) : []));
    const setFieldValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value1, fieldReference));
                fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value1) ? '' : value1;
                if (isMultipleSelect(fieldReference.ref)) {
                    [
                        ...fieldReference.ref.options
                    ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                } else if (fieldReference.refs) {
                    if (isCheckBoxInput(fieldReference.ref)) {
                        fieldReference.refs.forEach((checkboxRef)=>{
                            if (!checkboxRef.defaultChecked || !checkboxRef.disabled) {
                                if (Array.isArray(fieldValue)) {
                                    checkboxRef.checked = !!fieldValue.find((data)=>data === checkboxRef.value);
                                } else {
                                    checkboxRef.checked = fieldValue === checkboxRef.value || !!fieldValue;
                                }
                            }
                        });
                    } else {
                        fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                    }
                } else if (isFileInput(fieldReference.ref)) {
                    fieldReference.ref.value = '';
                } else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) {
                        _subjects.state.next({
                            name,
                            values: cloneObject(_formValues)
                        });
                    }
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            if (!value1.hasOwnProperty(fieldKey)) {
                return;
            }
            const fieldValue = value1[fieldKey];
            const fieldName = name + '.' + fieldKey;
            const field = get(_fields, fieldName);
            (_names.array.has(name) || isObject(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value1, options = {})=>{
        const field = get(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = cloneObject(value1);
        set(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name,
                values: cloneObject(_formValues)
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields || _proxySubscribeFormState.isDirty || _proxySubscribeFormState.dirtyFields) && options.shouldDirty) {
                _subjects.state.next({
                    name,
                    dirtyFields: getDirtyFields(_defaultValues, _formValues),
                    isDirty: _getDirty(name, cloneValue)
                });
            }
        } else {
            field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        }
        isWatched(name, _names) && _subjects.state.next({
            ..._formState,
            name
        });
        _subjects.state.next({
            name: _state.mount ? name : undefined,
            values: cloneObject(_formValues)
        });
    };
    const onChange = async (event)=>{
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = get(_fields, name);
        const _updateIsFieldValueUpdated = (fieldValue)=>{
            isFieldValueUpdated = Number.isNaN(fieldValue) || isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || deepEqual(fieldValue, get(_formValues, name, fieldValue));
        };
        const validationModeBeforeSubmit = getValidationModes(_options.mode);
        const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
        if (field) {
            let error;
            let isValid;
            const fieldValue = target.type ? getFieldValue(field._f) : getEventValue(event);
            const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = isWatched(name, _names, isBlurEvent);
            set(_formValues, name, fieldValue);
            if (isBlurEvent) {
                if (!target || !target.readOnly) {
                    field._f.onBlur && field._f.onBlur(event);
                    delayErrorCallback && delayErrorCallback(0);
                }
            } else if (field._f.onChange) {
                field._f.onChange(event);
            }
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent);
            const shouldRender = !isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.state.next({
                name,
                type: event.type,
                values: cloneObject(_formValues)
            });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                    if (_options.mode === 'onBlur') {
                        if (isBlurEvent) {
                            _setValid();
                        }
                    } else if (!isBlurEvent) {
                        _setValid();
                    }
                }
                return shouldRender && _subjects.state.next({
                    name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({
                ..._formState
            });
            if (_options.resolver) {
                const { errors } = await _runSchema([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = isEmptyObject(errors);
                }
            } else {
                _updateIsValidating([
                    name
                ], true);
                error = (await validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) {
                        isValid = false;
                    } else if (_proxyFormState.isValid || _proxySubscribeFormState.isValid) {
                        isValid = await executeBuiltInValidation(_fields, true);
                    }
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps && (!Array.isArray(field._f.deps) || field._f.deps.length > 0) && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key)=>{
        if (get(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {})=>{
        let isValid;
        let validationResult;
        const fieldNames = convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
            isValid = isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>get(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = get(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _setValid();
        } else {
            validationResult = isValid = await executeBuiltInValidation(_fields);
        }
        _subjects.state.next({
            ...!isString(name) || (_proxyFormState.isValid || _proxySubscribeFormState.isValid) && isValid !== _formState.isValid ? {} : {
                name
            },
            ..._options.resolver || !name ? {
                isValid
            } : {},
            errors: _formState.errors
        });
        options.shouldFocus && !validationResult && iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames, config)=>{
        let values = {
            ..._state.mount ? _formValues : _defaultValues
        };
        if (config) {
            values = extractFormValues(config.dirtyFields ? _formState.dirtyFields : _formState.touchedFields, values);
        }
        return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name)=>get(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!get((formState || _formState).errors, name),
            isDirty: !!get((formState || _formState).dirtyFields, name),
            error: get((formState || _formState).errors, name),
            isValidating: !!get(_formState.validatingFields, name),
            isTouched: !!get((formState || _formState).touchedFields, name)
        });
    const clearErrors = (name)=>{
        name && convertToArrayPayload(name).forEach((inputName)=>unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {}
        });
    };
    const setError = (name, error, options)=>{
        const ref = (get(_fields, name, {
            _f: {}
        })._f || {}).ref;
        const currentError = get(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message, type, ...restOfErrorTree } = currentError;
        set(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref
        });
        _subjects.state.next({
            name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>isFunction(name) ? _subjects.state.subscribe({
            next: (payload)=>'values' in payload && name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const _subscribe = (props)=>_subjects.state.subscribe({
            next: (formState)=>{
                if (shouldSubscribeByName(props.name, formState.name, props.exact) && shouldRenderFormState(formState, props.formState || _proxyFormState, _setFormState, props.reRenderRoot)) {
                    props.callback({
                        values: {
                            ..._formValues
                        },
                        ..._formState,
                        ...formState,
                        defaultValues: _defaultValues
                    });
                }
            }
        }).unsubscribe;
    const subscribe = (props)=>{
        _state.mount = true;
        _proxySubscribeFormState = {
            ..._proxySubscribeFormState,
            ...props.formState
        };
        return _subscribe({
            ...props,
            formState: _proxySubscribeFormState
        });
    };
    const unregister = (name, options = {})=>{
        for (const fieldName of name ? convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                unset(_fields, fieldName);
                unset(_formValues, fieldName);
            }
            !options.keepError && unset(_formState.errors, fieldName);
            !options.keepDirty && unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating && unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
        }
        _subjects.state.next({
            values: cloneObject(_formValues)
        });
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _setValid();
    };
    const _setDisabledField = ({ disabled, name })=>{
        if (isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
        }
    };
    const register = (name, options = {})=>{
        let field = get(_fields, name);
        const disabledIsDefined = isBoolean(options.disabled) || isBoolean(_options.disabled);
        set(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name
                    }
                },
                name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        if (field) {
            _setDisabledField({
                disabled: isBoolean(options.disabled) ? options.disabled : _options.disabled,
                name
            });
        } else {
            updateValidAndValue(name, true, options.value);
        }
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled || _options.disabled
            } : {},
            ..._options.progressive ? {
                required: !!options.required,
                min: getRuleValue(options.min),
                max: getRuleValue(options.max),
                minLength: getRuleValue(options.minLength),
                maxLength: getRuleValue(options.maxLength),
                pattern: getRuleValue(options.pattern)
            } : {},
            name,
            onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = get(_fields, name);
                    const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll('input,select,textarea')[0] || ref : ref : ref;
                    const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) {
                        return;
                    }
                    set(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter(live),
                                    fieldRef,
                                    ...Array.isArray(get(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = get(_fields, name, {});
                    if (field._f) {
                        field._f.mount = false;
                    }
                    (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled)=>{
        if (isBoolean(disabled)) {
            _subjects.state.next({
                disabled
            });
            iterateFieldsByAction(_fields, (ref, name)=>{
                const currentField = get(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) {
                        currentField._f.refs.forEach((inputRef)=>{
                            inputRef.disabled = currentField._f.disabled || disabled;
                        });
                    }
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            let onValidError = undefined;
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let fieldValues = cloneObject(_formValues);
            _subjects.state.next({
                isSubmitting: true
            });
            if (_options.resolver) {
                const { errors, values } = await _runSchema();
                _formState.errors = errors;
                fieldValues = cloneObject(values);
            } else {
                await executeBuiltInValidation(_fields);
            }
            if (_names.disabled.size) {
                for (const name of _names.disabled){
                    unset(fieldValues, name);
                }
            }
            unset(_formState.errors, 'root');
            if (isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {}
                });
                try {
                    await onValid(fieldValues, e);
                } catch (error) {
                    onValidError = error;
                }
            } else {
                if (onInvalid) {
                    await onInvalid({
                        ..._formState.errors
                    }, e);
                }
                _focusError();
                setTimeout(_focusError);
            }
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: isEmptyObject(_formState.errors) && !onValidError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors
            });
            if (onValidError) {
                throw onValidError;
            }
        };
    const resetField = (name, options = {})=>{
        if (get(_fields, name)) {
            if (isUndefined(options.defaultValue)) {
                setValue(name, cloneObject(get(_defaultValues, name)));
            } else {
                setValue(name, options.defaultValue);
                set(_defaultValues, name, cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) {
                unset(_formState.touchedFields, name);
            }
            if (!options.keepDirty) {
                unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, cloneObject(get(_defaultValues, name))) : _getDirty();
            }
            if (!options.keepError) {
                unset(_formState.errors, name);
                _proxyFormState.isValid && _setValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = (formValues, keepStateOptions = {})=>{
        const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = cloneObject(updatedValues);
        const isEmptyResetValues = isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) {
            _defaultValues = updatedValues;
        }
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys(getDirtyFields(_defaultValues, _formValues))
                ]);
                for (const fieldName of Array.from(fieldsToCheck)){
                    get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
                }
            } else {
                if (isWeb && isUndefined(formValues)) //TURBOPACK unreachable
                ;
                if (keepStateOptions.keepFieldsRef) {
                    for (const fieldName of _names.mount){
                        setValue(fieldName, get(values, fieldName));
                    }
                } else {
                    _fields = {};
                }
            }
            _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
            _subjects.array.next({
                values: {
                    ...values
                }
            });
            _subjects.state.next({
                values: {
                    ...values
                }
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ''
        };
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
            isSubmitting: false,
            defaultValues: _defaultValues
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
    const setFocus = (name, options = {})=>{
        const field = get(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && isFunction(fieldRef.select) && fieldRef.select();
            }
        }
    };
    const _setFormState = (updatedFormState)=>{
        _formState = {
            ..._formState,
            ...updatedFormState
        };
    };
    const _resetDefaultValues = ()=>isFunction(_options.defaultValues) && _options.defaultValues().then((values)=>{
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false
            });
        });
    const methods = {
        control: {
            register,
            unregister,
            getFieldState,
            handleSubmit,
            setError,
            _subscribe,
            _runSchema,
            _focusError,
            _getWatch,
            _getDirty,
            _setValid,
            _setFieldArray,
            _setDisabledField,
            _setErrors,
            _getFieldArray,
            _reset,
            _resetDefaultValues,
            _removeUnmounted,
            _disableForm,
            _subjects,
            _proxyFormState,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _state () {
                return _state;
            },
            set _state (value){
                _state = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        subscribe,
        trigger,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        reset,
        resetField,
        clearErrors,
        unregister,
        setError,
        setFocus,
        getFieldState
    };
    return {
        ...methods,
        formControl: methods
    };
}
var generateId = ()=>{
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    const d = typeof performance === 'undefined' ? Date.now() : performance.now() * 1000;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
var getFocusFieldName = (name, index, options = {})=>options.shouldFocus || isUndefined(options.shouldFocus) ? options.focusName || `${name}.${isUndefined(options.focusIndex) ? index : options.focusIndex}.` : '';
var appendAt = (data, value1)=>[
        ...data,
        ...convertToArrayPayload(value1)
    ];
var fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
function insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) {
        return [];
    }
    if (isUndefined(data[to])) {
        data[to] = undefined;
    }
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
var prependAt = (data, value1)=>[
        ...convertToArrayPayload(value1),
        ...convertToArrayPayload(data)
    ];
function removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return compact(temp).length ? temp : [];
}
var removeArrayAt = (data, index)=>isUndefined(index) ? [] : removeAtIndexes(data, convertToArrayPayload(index).sort((a, b)=>a - b));
var swapArrayAt = (data, indexA, indexB)=>{
    [data[indexA], data[indexB]] = [
        data[indexB],
        data[indexA]
    ];
};
var updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function useFieldArray(props) {
    const methods = useFormContext();
    const { control = methods.control, name, keyName = 'id', shouldUnregister, rules } = props;
    const [fields, setFields] = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(control._getFieldArray(name));
    const ids = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(control._getFieldArray(name).map(generateId));
    const _fieldIds = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(fields);
    const _actioned = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(false);
    _fieldIds.current = fields;
    control._names.array.add(name);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>rules && control.register(name, rules), [
        control,
        rules,
        name
    ]);
    useIsomorphicLayoutEffect(()=>control._subjects.array.subscribe({
            next: ({ values, name: fieldArrayName })=>{
                if (fieldArrayName === name || !fieldArrayName) {
                    const fieldValues = get(values, name);
                    if (Array.isArray(fieldValues)) {
                        setFields(fieldValues);
                        ids.current = fieldValues.map(generateId);
                    }
                }
            }
        }).unsubscribe, [
        control,
        name
    ]);
    const updateValues = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback((updatedFieldArrayValues)=>{
        _actioned.current = true;
        control._setFieldArray(name, updatedFieldArrayValues);
    }, [
        control,
        name
    ]);
    const append = (value1, options)=>{
        const appendValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = appendAt(ids.current, appendValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, appendAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const prepend = (value1, options)=>{
        const prependValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = getFocusFieldName(name, 0, options);
        ids.current = prependAt(ids.current, prependValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, prependAt, {
            argA: fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = removeArrayAt(control._getFieldArray(name), index);
        ids.current = removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray(get(control._fields, name)) && set(control._fields, name, undefined);
        control._setFieldArray(name, updatedFieldArrayValues, removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = convertToArrayPayload(cloneObject(value1));
        const updatedFieldArrayValues = insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = getFocusFieldName(name, index, options);
        ids.current = insert(ids.current, index, insertValue.map(generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, insert, {
            argA: index,
            argB: fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        moveArrayAt(updatedFieldArrayValues, from, to);
        moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._setFieldArray(name, updatedFieldArrayValues, moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = cloneObject(value1);
        const updatedFieldArrayValues = updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, updatedFieldArrayValues, updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = convertToArrayPayload(cloneObject(value1));
        ids.current = updatedFieldArrayValues.map(generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._setFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        control._state.action = false;
        isWatched(name, control._names) && control._subjects.state.next({
            ...control._formState
        });
        if (_actioned.current && (!getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted) && !getValidationModes(control._options.reValidateMode).isOnSubmit) {
            if (control._options.resolver) {
                control._runSchema([
                    name
                ]).then((result)=>{
                    const error = get(result.errors, name);
                    const existingError = get(control._formState.errors, name);
                    if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
                        error ? set(control._formState.errors, name, error) : unset(control._formState.errors, name);
                        control._subjects.state.next({
                            errors: control._formState.errors
                        });
                    }
                });
            } else {
                const field = get(control._fields, name);
                if (field && field._f && !(getValidationModes(control._options.reValidateMode).isOnSubmit && getValidationModes(control._options.mode).isOnSubmit)) {
                    validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error)=>!isEmptyObject(error) && control._subjects.state.next({
                            errors: updateFieldArrayRootError(control._formState.errors, error, name)
                        }));
                }
            }
        }
        control._subjects.state.next({
            name,
            values: cloneObject(control._formValues)
        });
        control._names.focus && iterateFieldsByAction(control._fields, (ref, key)=>{
            if (control._names.focus && key.startsWith(control._names.focus) && ref.focus) {
                ref.focus();
                return 1;
            }
            return;
        });
        control._names.focus = '';
        control._setValid();
        _actioned.current = false;
    }, [
        fields,
        name,
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        !get(control._formValues, name) && control._setFieldArray(name);
        return ()=>{
            const updateMounted = (name, value1)=>{
                const field = get(control._fields, name);
                if (field && field._f) {
                    field._f.mount = value1;
                }
            };
            control._options.shouldUnregister || shouldUnregister ? control.unregister(name) : updateMounted(name, false);
        };
    }, [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(prepend, [
            updateValues,
            name,
            control
        ]),
        append: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(append, [
            updateValues,
            name,
            control
        ]),
        remove: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>fields.map((field, index)=>({
                    ...field,
                    [keyName]: ids.current[index] || generateId()
                })), [
            fields,
            keyName
        ])
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */ function useForm(props = {}) {
    const _formControl = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const _values = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(undefined);
    const [formState, updateFormState] = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({
        isDirty: false,
        isValidating: false,
        isLoading: isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        isReady: false,
        defaultValues: isFunction(props.defaultValues) ? undefined : props.defaultValues
    });
    if (!_formControl.current) {
        if (props.formControl) {
            _formControl.current = {
                ...props.formControl,
                formState
            };
            if (props.defaultValues && !isFunction(props.defaultValues)) {
                props.formControl.reset(props.defaultValues, props.resetOptions);
            }
        } else {
            const { formControl, ...rest } = createFormControl(props);
            _formControl.current = {
                ...rest,
                formState
            };
        }
    }
    const control = _formControl.current.control;
    control._options = props;
    useIsomorphicLayoutEffect(()=>{
        const sub = control._subscribe({
            formState: control._proxyFormState,
            callback: ()=>updateFormState({
                    ...control._formState
                }),
            reRenderRoot: true
        });
        updateFormState((data)=>({
                ...data,
                isReady: true
            }));
        control._formState.isReady = true;
        return sub;
    }, [
        control
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>control._disableForm(props.disabled), [
        control,
        props.disabled
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (props.mode) {
            control._options.mode = props.mode;
        }
        if (props.reValidateMode) {
            control._options.reValidateMode = props.reValidateMode;
        }
    }, [
        control,
        props.mode,
        props.reValidateMode
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (props.errors) {
            control._setErrors(props.errors);
            control._focusError();
        }
    }, [
        control,
        props.errors
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        props.shouldUnregister && control._subjects.state.next({
            values: control._getWatch()
        });
    }, [
        control,
        props.shouldUnregister
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (control._proxyFormState.isDirty) {
            const isDirty = control._getDirty();
            if (isDirty !== formState.isDirty) {
                control._subjects.state.next({
                    isDirty
                });
            }
        }
    }, [
        control,
        formState.isDirty
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (props.values && !deepEqual(props.values, _values.current)) {
            control._reset(props.values, {
                keepFieldsRef: true,
                ...control._options.resetOptions
            });
            _values.current = props.values;
            updateFormState((state)=>({
                    ...state
                }));
        } else {
            control._resetDefaultValues();
        }
    }, [
        control,
        props.values
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$4_$40$babel$2b$core$40$7$2e$27$2e$1_$40$opentelemetry$2b$api$40$1$2e$7$2e$0_$40$playwright$2b$test$40$1$2e$52$2e$0_babel$2d$p_68e8c185df7d969f063bfb2ef00a51ed$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!control._state.mount) {
            control._setValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({
                ...control._formState
            });
        }
        control._removeUnmounted();
    });
    _formControl.current.formState = getProxyFormState(formState, control);
    return _formControl.current;
}
;
 //# sourceMappingURL=index.esm.mjs.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.63.0_react@19.1.0_/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toNestErrors",
    ()=>s,
    "validateFieldsNatively",
    ()=>o
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/react-hook-form@7.63.0_react@19.1.0/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
;
const r = (t, r, o)=>{
    if (t && "reportValidity" in t) {
        const s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(o, r);
        t.setCustomValidity(s && s.message || ""), t.reportValidity();
    }
}, o = (e, t)=>{
    for(const o in t.fields){
        const s = t.fields[o];
        s && s.ref && "reportValidity" in s.ref ? r(s.ref, o, e) : s && s.refs && s.refs.forEach((t)=>r(t, o, e));
    }
}, s = (r, s)=>{
    s.shouldUseNativeValidation && o(r, s);
    const n = {};
    for(const o in r){
        const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(s.fields, o), c = Object.assign(r[o] || {}, {
            ref: f && f.ref
        });
        if (i(s.names || Object.keys(r), o)) {
            const r = Object.assign({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(n, o));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(r, "root", c), (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(n, o, r);
        } else (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["set"])(n, o, c);
    }
    return n;
}, i = (e, t)=>{
    const r = n(t);
    return e.some((e)=>n(e).match(`^${r}\\.\\d+`));
};
function n(e) {
    return e.replace(/\]|\[/g, "");
}
;
 //# sourceMappingURL=resolvers.mjs.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.63.0_react@19.1.0_/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "zodResolver",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0_$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/@hookform+resolvers@5.2.2_react-hook-form@7.63.0_react@19.1.0_/node_modules/@hookform/resolvers/dist/resolvers.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/react-hook-form@7.63.0_react@19.1.0/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$core$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/zod@4.1.11/node_modules/zod/v4/core/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/zod@4.1.11/node_modules/zod/v4/core/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/zod@4.1.11/node_modules/zod/v4/core/parse.js [app-ssr] (ecmascript)");
;
;
;
function t(r, e) {
    try {
        var o = r();
    } catch (r) {
        return e(r);
    }
    return o && o.then ? o.then(void 0, e) : o;
}
function s(r, e) {
    for(var n = {}; r.length;){
        var t = r[0], s = t.code, i = t.message, a = t.path.join(".");
        if (!n[a]) if ("unionErrors" in t) {
            var u = t.unionErrors[0].errors[0];
            n[a] = {
                message: u.message,
                type: u.code
            };
        } else n[a] = {
            message: i,
            type: s
        };
        if ("unionErrors" in t && t.unionErrors.forEach(function(e) {
            return e.errors.forEach(function(e) {
                return r.push(e);
            });
        }), e) {
            var c = n[a].types, f = c && c[t.code];
            n[a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendErrors"])(a, e, n, s, f ? [].concat(f, t.message) : t.message);
        }
        r.shift();
    }
    return n;
}
function i(r, e) {
    for(var n = {}; r.length;){
        var t = r[0], s = t.code, i = t.message, a = t.path.join(".");
        if (!n[a]) if ("invalid_union" === t.code && t.errors.length > 0) {
            var u = t.errors[0][0];
            n[a] = {
                message: u.message,
                type: u.code
            };
        } else n[a] = {
            message: i,
            type: s
        };
        if ("invalid_union" === t.code && t.errors.forEach(function(e) {
            return e.forEach(function(e) {
                return r.push(e);
            });
        }), e) {
            var c = n[a].types, f = c && c[t.code];
            n[a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendErrors"])(a, e, n, s, f ? [].concat(f, t.message) : t.message);
        }
        r.shift();
    }
    return n;
}
function a(o, a, u) {
    if (void 0 === u && (u = {}), function(r) {
        return "_def" in r && "object" == typeof r._def && "typeName" in r._def;
    }(o)) return function(n, i, c) {
        try {
            return Promise.resolve(t(function() {
                return Promise.resolve(o["sync" === u.mode ? "parse" : "parseAsync"](n, a)).then(function(e) {
                    return c.shouldUseNativeValidation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0_$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateFieldsNatively"])({}, c), {
                        errors: {},
                        values: u.raw ? Object.assign({}, n) : e
                    };
                });
            }, function(r) {
                if (function(r) {
                    return Array.isArray(null == r ? void 0 : r.issues);
                }(r)) return {
                    values: {},
                    errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0_$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNestErrors"])(s(r.errors, !c.shouldUseNativeValidation && "all" === c.criteriaMode), c)
                };
                throw r;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
    if (function(r) {
        return "_zod" in r && "object" == typeof r._zod;
    }(o)) return function(s, c, f) {
        try {
            return Promise.resolve(t(function() {
                return Promise.resolve(("sync" === u.mode ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"] : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseAsync"])(o, s, a)).then(function(e) {
                    return f.shouldUseNativeValidation && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0_$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateFieldsNatively"])({}, f), {
                        errors: {},
                        values: u.raw ? Object.assign({}, s) : e
                    };
                });
            }, function(r) {
                if (function(r) {
                    return r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$1$2e$11$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodError"];
                }(r)) return {
                    values: {},
                    errors: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f40$hookform$2b$resolvers$40$5$2e$2$2e$2_react$2d$hook$2d$form$40$7$2e$63$2e$0_react$40$19$2e$1$2e$0_$2f$node_modules$2f40$hookform$2f$resolvers$2f$dist$2f$resolvers$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toNestErrors"])(i(r.issues, !f.shouldUseNativeValidation && "all" === f.criteriaMode), f)
                };
                throw r;
            }));
        } catch (r) {
            return Promise.reject(r);
        }
    };
    throw new Error("Invalid input: not a Zod schema");
}
;
 //# sourceMappingURL=zod.module.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/delayed-stream@1.0.0/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/combined-stream@1.0.8/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var DelayedStream = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/delayed-stream@1.0.0/node_modules/delayed-stream/lib/delayed_stream.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/mime-types@2.1.35/node_modules/mime-types/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ /**
 * Module dependencies.
 * @private
 */ var db = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/mime-db@1.52.0/node_modules/mime-db/index.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var defer = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/defer.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var async = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)"), abort = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var abort = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/abort.js [app-ssr] (ecmascript)"), async = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/async.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var iterate = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/iterate.js [app-ssr] (ecmascript)"), initState = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/state.js [app-ssr] (ecmascript)"), terminator = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/lib/terminator.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serial.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var serialOrdered = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    parallel: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/parallel.js [app-ssr] (ecmascript)"),
    serial: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serial.js [app-ssr] (ecmascript)"),
    serialOrdered: __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/serialOrdered.js [app-ssr] (ecmascript)")
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Object;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ module.exports = Error;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./eval')} */ module.exports = EvalError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./range')} */ module.exports = RangeError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./ref')} */ module.exports = ReferenceError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./syntax')} */ module.exports = SyntaxError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./type')} */ module.exports = TypeError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./uri')} */ module.exports = URIError;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./abs')} */ module.exports = Math.abs;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./floor')} */ module.exports = Math.floor;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./max')} */ module.exports = Math.max;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./min')} */ module.exports = Math.min;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./pow')} */ module.exports = Math.pow;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./round')} */ module.exports = Math.round;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $isNaN = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js [app-ssr] (ecmascript)");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) {
        return number;
    }
    return number < 0 ? -1 : +1;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('.')} */ var $gOPD = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var $Object = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var reflectGetProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var originalGetProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var getDunderProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var implementation = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js [app-ssr] (ecmascript)");
module.exports = Function.prototype.bind || implementation;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $reflectApply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/reflectApply.js [app-ssr] (ecmascript)");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
var $actualApply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/actualApply.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') {
        throw new $TypeError('a function is required');
    }
    return $actualApply(bind, $call, args);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var callBind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/index.js [app-ssr] (ecmascript)");
var gOPD = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-intrinsic@1.2.7/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var undefined1;
var $Object = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js [app-ssr] (ecmascript)");
var $Error = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js [app-ssr] (ecmascript)");
var $EvalError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js [app-ssr] (ecmascript)");
var $RangeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js [app-ssr] (ecmascript)");
var $ReferenceError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js [app-ssr] (ecmascript)");
var $SyntaxError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
var $URIError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js [app-ssr] (ecmascript)");
var abs = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js [app-ssr] (ecmascript)");
var floor = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js [app-ssr] (ecmascript)");
var max = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js [app-ssr] (ecmascript)");
var min = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js [app-ssr] (ecmascript)");
var pow = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js [app-ssr] (ecmascript)");
var round = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js [app-ssr] (ecmascript)");
var sign = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js [app-ssr] (ecmascript)");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js [app-ssr] (ecmascript)");
var $defineProperty = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js [app-ssr] (ecmascript)");
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
var hasSymbols = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js [app-ssr] (ecmascript)")();
var getProto = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js [app-ssr] (ecmascript)");
var $ObjectGPO = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js [app-ssr] (ecmascript)");
var $ReflectGPO = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js [app-ssr] (ecmascript)");
var $apply = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionApply.js [app-ssr] (ecmascript)");
var $call = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/call-bind-apply-helpers@1.0.1/node_modules/call-bind-apply-helpers/functionCall.js [app-ssr] (ecmascript)");
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
var bind = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var hasSymbols = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js [app-ssr] (ecmascript)");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-set-tostringtag@2.1.0/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var GetIntrinsic = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/get-intrinsic@1.2.7/node_modules/get-intrinsic/index.js [app-ssr] (ecmascript)");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasToStringTag = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js [app-ssr] (ecmascript)")();
var hasOwn = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var $TypeError = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/form-data@4.0.4/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// populates missing values
module.exports = function(dst, src) {
    Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop]; // eslint-disable-line no-param-reassign
    });
    return dst;
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/form-data@4.0.4/node_modules/form-data/lib/form_data.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var CombinedStream = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/combined-stream@1.0.8/node_modules/combined-stream/lib/combined_stream.js [app-ssr] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var parseUrl = __turbopack_context__.r("[externals]/url [external] (url, cjs)").parse;
var fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Stream;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var mime = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/mime-types@2.1.35/node_modules/mime-types/index.js [app-ssr] (ecmascript)");
var asynckit = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/asynckit@0.4.0/node_modules/asynckit/index.js [app-ssr] (ecmascript)");
var setToStringTag = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/es-set-tostringtag@2.1.0/node_modules/es-set-tostringtag/index.js [app-ssr] (ecmascript)");
var hasOwn = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js [app-ssr] (ecmascript)");
var populate = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/form-data@4.0.4/node_modules/form-data/lib/populate.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/proxy-from-env@1.1.0/node_modules/proxy-from-env/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
    createDebug.humanize = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/ms@2.1.3/node_modules/ms/index.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/node.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
    const supportsColor = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-ssr] (ecmascript)");
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
module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/common.js [app-ssr] (ecmascript)")(exports);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */ if (typeof process === 'undefined' || process.type === 'renderer' || ("TURBOPACK compile-time value", false) === true || process.__nwjs) {
    module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/browser.js [app-ssr] (ecmascript)");
} else {
    module.exports = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/node.js [app-ssr] (ecmascript)");
}
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = (flag, argv = process.argv)=>{
    const prefix = flag.startsWith('-') ? '' : flag.length === 1 ? '-' : '--';
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf('--');
    return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const os = __turbopack_context__.r("[externals]/os [external] (os, cjs)");
const tty = __turbopack_context__.r("[externals]/tty [external] (tty, cjs)");
const hasFlag = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/has-flag@4.0.0/node_modules/has-flag/index.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/follow-redirects@1.15.9/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var debug;
module.exports = function() {
    if (!debug) {
        try {
            /* eslint global-require: off */ debug = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/debug@4.4.0/node_modules/debug/src/index.js [app-ssr] (ecmascript)")("follow-redirects");
        } catch (error) {}
        if (typeof debug !== "function") {
            debug = function() {};
        }
    }
    debug.apply(null, arguments);
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/follow-redirects@1.15.9/node_modules/follow-redirects/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

var url = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
var URL = url.URL;
var http = __turbopack_context__.r("[externals]/http [external] (http, cjs)");
var https = __turbopack_context__.r("[externals]/https [external] (https, cjs)");
var Writable = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)").Writable;
var assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
var debug = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/follow-redirects@1.15.9/node_modules/follow-redirects/debug.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript) <export * as ElementType>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript)");
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
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Text;
    }
    get nodeType() {
        return 3;
    }
}
class Comment extends DataNode {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Comment;
    }
    get nodeType() {
        return 8;
    }
}
class ProcessingInstruction extends DataNode {
    constructor(name, data){
        super(data);
        this.name = name;
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Directive;
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
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
    }
    get nodeType() {
        return 4;
    }
}
class Document extends NodeWithChildren {
    constructor(){
        super(...arguments);
        this.type = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Root;
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
     */ constructor(name, attribs, children = [], type = name === "script" ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Script : name === "style" ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Style : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Tag){
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node);
}
function isCDATA(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].CDATA;
}
function isText(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Text;
}
function isComment(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Comment;
}
function isDirective(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Directive;
}
function isDocument(node) {
    return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Root;
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomHandler",
    ()=>DomHandler,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
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
        /** The root element for the DOM */ this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"](this.dom);
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
        this.root = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"](this.dom);
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
        const type = this.options.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Tag : undefined;
        const element = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Element"](name, attribs, undefined, type);
        this.addNode(element);
        this.tagStack.push(element);
    }
    ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
                lastNode.endIndex = this.parser.endIndex;
            }
        } else {
            const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"](data);
            this.addNode(node);
            this.lastNode = node;
        }
    }
    oncomment(data) {
        if (this.lastNode && this.lastNode.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Comment) {
            this.lastNode.data += data;
            return;
        }
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment"](data);
        this.addNode(node);
        this.lastNode = node;
    }
    oncommentend() {
        this.lastNode = null;
    }
    oncdatastart() {
        const text = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"]("");
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CDATA"]([
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
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessingInstruction"](name, data);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/foreignNames.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Module dependencies
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "render",
    ()=>render
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@4.5.0/node_modules/entities/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@4.5.0/node_modules/entities/lib/esm/escape.js [app-ssr] (ecmascript)");
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/foreignNames.js [app-ssr] (ecmascript)");
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
    const encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeXML"] : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeAttribute"];
    return Object.keys(attributes).map((key)=>{
        var _a, _b;
        const value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */ key = (_b = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeNames"].get(key)) !== null && _b !== void 0 ? _b : key;
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"]:
            return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Doctype"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Directive"]:
            return renderDirective(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment"]:
            return renderComment(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CDATA"]:
            return renderCdata(node);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Script"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Style"]:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"]:
            return renderTag(node, options);
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"]:
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
        /* Fix up mixed-case element names */ elem.name = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$foreignNames$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["elementNames"].get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
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
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeXML"])(data) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$4$2e$5$2e$0$2f$node_modules$2f$entities$2f$lib$2f$esm$2f$escape$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeText"])(data);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/dom-serializer@2.0.0/node_modules/dom-serializer/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript)");
;
;
;
function getOuterHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$dom$2d$serializer$40$2$2e$0$2e$0$2f$node_modules$2f$dom$2d$serializer$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(node, options);
}
function getInnerHTML(node, options) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) ? node.children.map((node)=>getOuterHTML(node, options)).join("") : "";
}
function getText(node) {
    if (Array.isArray(node)) return node.map(getText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node)) return node.name === "br" ? "\n" : getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCDATA"])(node)) return getText(node.children);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function textContent(node) {
    if (Array.isArray(node)) return node.map(textContent).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isComment"])(node)) {
        return textContent(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
}
function innerText(node) {
    if (Array.isArray(node)) return node.map(innerText).join("");
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && (node.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"].Tag || (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCDATA"])(node))) {
        return innerText(node.children);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(node)) return node.data;
    return "";
} //# sourceMappingURL=stringify.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/traversal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
;
function getChildren(elem) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(elem) ? elem.children : [];
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
    while(next !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(next))({ next } = next);
    return next;
}
function prevElementSibling(elem) {
    let { prev } = elem;
    while(prev !== null && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(prev))({ prev } = prev);
    return prev;
} //# sourceMappingURL=traversal.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/manipulation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
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
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(elem) && elem.children.length > 0) {
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node)) {
            return node;
        }
        if (recurse && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && node.children.length > 0) {
            const found = findOne(test, node.children, true);
            if (found) return found;
        }
    }
    return null;
}
function existsOne(test, nodes) {
    return (Array.isArray(nodes) ? nodes : [
        nodes
    ]).some((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(node) && test(node) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(node) && existsOne(test, node.children));
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
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(elem) && test(elem)) result.push(elem);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(elem) && elem.children.length > 0) {
            indexStack.unshift(0);
            nodeStack.unshift(elem.children);
        }
    }
} //# sourceMappingURL=querying.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-ssr] (ecmascript)");
;
;
/**
 * A map of functions to check nodes against.
 */ const Checks = {
    tag_name (name) {
        if (typeof name === "function") {
            return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(elem) && name(elem.name);
        } else if (name === "*") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"];
        }
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.name === name;
    },
    tag_type (type) {
        if (typeof type === "function") {
            return (elem)=>type(elem.type);
        }
        return (elem)=>elem.type === type;
    },
    tag_contains (data) {
        if (typeof data === "function") {
            return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(elem) && data(elem.data);
        }
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(elem) && elem.data === data;
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
        return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(elem) && value(elem.attribs[attrib]);
    }
    return (elem)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"])(elem) && elem.attribs[attrib] === value;
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
    return test ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(test, nodes, recurse, limit) : [];
}
function getElementById(id, nodes, recurse = true) {
    if (!Array.isArray(nodes)) nodes = [
        nodes
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findOne"])(getAttribCheck("id", id), nodes, recurse);
}
function getElementsByTagName(tagName, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_name"](tagName), nodes, recurse, limit);
}
function getElementsByClassName(className, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(getAttribCheck("class", className), nodes, recurse, limit);
}
function getElementsByTagType(type, nodes, recurse = true, limit = Infinity) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"])(Checks["tag_type"](type), nodes, recurse, limit);
} //# sourceMappingURL=legacy.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
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
    let current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(nodeA) ? nodeA : nodeA.parent;
    while(current){
        aParents.unshift(current);
        current = current.parent;
    }
    current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"])(nodeB) ? nodeB : nodeB.parent;
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFeed",
    ()=>getFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-ssr] (ecmascript)");
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
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])("entry", childs).map((item)=>{
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
        items: (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])("item", feedRoot.children).map((item)=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])("media:content", where).map((elem)=>{
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */ function fetch(tagName, where, recurse = false) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textContent"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"])(tagName, where, recurse, 1)).trim();
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/traversal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/manipulation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-ssr] (ecmascript)");
/** @deprecated Use these methods from `domhandler` directly. */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DocumentPosition"],
    "append",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["append"],
    "appendChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appendChild"],
    "compareDocumentPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compareDocumentPosition"],
    "existsOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["existsOne"],
    "filter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filter"],
    "find",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["find"],
    "findAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findAll"],
    "findOne",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findOne"],
    "findOneChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findOneChild"],
    "getAttributeValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAttributeValue"],
    "getChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChildren"],
    "getElementById",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementById"],
    "getElements",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElements"],
    "getElementsByClassName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByClassName"],
    "getElementsByTagName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagName"],
    "getElementsByTagType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getElementsByTagType"],
    "getFeed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeed"],
    "getInnerHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getInnerHTML"],
    "getName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getName"],
    "getOuterHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOuterHTML"],
    "getParent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getParent"],
    "getSiblings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSiblings"],
    "getText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getText"],
    "hasAttrib",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasAttrib"],
    "hasChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasChildren"],
    "innerText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["innerText"],
    "isCDATA",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCDATA"],
    "isComment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isComment"],
    "isDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDocument"],
    "isTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"],
    "isText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"],
    "nextElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["nextElementSibling"],
    "prepend",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prepend"],
    "prependChild",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prependChild"],
    "prevElementSibling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["prevElementSibling"],
    "removeElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeElement"],
    "removeSubsets",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeSubsets"],
    "replaceElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["replaceElement"],
    "testElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testElement"],
    "textContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["textContent"],
    "uniqueSort",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uniqueSort"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$stringify$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/stringify.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$traversal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/traversal.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$manipulation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/manipulation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$querying$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/querying.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$legacy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/legacy.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuoteType",
    ()=>QuoteType,
    "default",
    ()=>Tokenizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/decode.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/generated/decode-data-html.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/generated/decode-data-xml.js [app-ssr] (ecmascript)");
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
        this.entityDecoder = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EntityDecoder"](xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$xml$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["xmlDecodeTree"] : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$generated$2f$decode$2d$data$2d$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["htmlDecodeTree"], (cp, consumed)=>this.emitCodePoint(cp, consumed));
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
        this.entityDecoder.startEntity(this.xmlMode ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Legacy : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DecodingMode"].Attribute);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Parser.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Parser",
    ()=>Parser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/decode.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/entities@6.0.1/node_modules/entities/dist/esm/decode-codepoint.js [app-ssr] (ecmascript)");
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
        this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(this.options, this);
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
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromCodePoint"])(cp));
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
        this.attribvalue += (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$entities$40$6$2e$0$2e$1$2f$node_modules$2f$entities$2f$dist$2f$esm$2f$decode$2d$codepoint$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fromCodePoint"])(cp);
    }
    /** @internal */ onattribend(quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuoteType"].Double ? '"' : quote === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuoteType"].Single ? "'" : quote === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuoteType"].NoValue ? undefined : null);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Parser.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Tokenizer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/htmlparser2@10.0.0/node_modules/htmlparser2/dist/esm/Tokenizer.js [app-ssr] (ecmascript)");
/*
 * All of the following exports exist for backwards-compatibility.
 * They should probably be removed eventually.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domelementtype$40$2$2e$3$2e$0$2f$node_modules$2f$domelementtype$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domelementtype@2.3.0/node_modules/domelementtype/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/feeds.js [app-ssr] (ecmascript)");
;
;
;
;
function parseDocument(data, options) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"](undefined, options);
    new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"](handler, options).end(data);
    return handler.root;
}
function parseDOM(data, options) {
    return parseDocument(data, options).children;
}
function createDocumentStream(callback, options, elementCallback) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"]((error)=>callback(error, handler.root), options, elementCallback);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"](handler, options);
}
function createDomStream(callback, options, elementCallback) {
    const handler = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DomHandler"](callback, options, elementCallback);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$htmlparser2$40$10$2e$0$2e$0$2f$node_modules$2f$htmlparser2$2f$dist$2f$esm$2f$Parser$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"](handler, options);
}
;
;
;
;
const parseFeedDefaultOptions = {
    xmlMode: true
};
function parseFeed(feed, options = parseFeedDefaultOptions) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$feeds$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFeed"])(parseDOM(feed, options));
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isTraversal",
    ()=>isTraversal,
    "parse",
    ()=>parse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
;
const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [
        126 /* Tilde */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element
    ],
    [
        94 /* Circumflex */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Start
    ],
    [
        36 /* Dollar */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].End
    ],
    [
        42 /* Asterisk */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Any
    ],
    [
        33 /* ExclamationMark */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Not
    ],
    [
        124 /* Pipe */ ,
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Hyphen
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
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
        if (tokens.length > 0 && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
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
            type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
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
        if (tokens.length && tokens[tokens.length - 1].type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
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
                    if (tokens.length === 0 || tokens[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                        ensureNotTraversal();
                        tokens.push({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
                        });
                    }
                    stripWhitespace(1);
                    break;
                }
            // Traversals
            case 62 /* GreaterThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child);
                    stripWhitespace(1);
                    break;
                }
            case 60 /* LessThan */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent);
                    stripWhitespace(1);
                    break;
                }
            case 126 /* Tilde */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling);
                    stripWhitespace(1);
                    break;
                }
            case 43 /* Plus */ :
                {
                    addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent);
                    stripWhitespace(1);
                    break;
                }
            // Special attribute selectors: .class, #id
            case 46 /* Period */ :
                {
                    addSpecialAttribute("class", __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Element);
                    break;
                }
            case 35 /* Hash */ :
                {
                    addSpecialAttribute("id", __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals);
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
                    let action = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Exists;
                    const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                    if (possibleAction) {
                        action = possibleAction;
                        if (selector.charCodeAt(selectorIndex + 1) !== 61 /* Equal */ ) {
                            throw new Error("Expected `=`");
                        }
                        stripWhitespace(2);
                    } else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */ ) {
                        action = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals;
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
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
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
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement,
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
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
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
                            addTraversal(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator);
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
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
                        namespace
                    } : {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    trueFunc: function trueFunc() {
        return true;
    },
    falseFunc: function falseFunc() {
        return false;
    }
};
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/sort.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sortByProcedure,
    "isTraversal",
    ()=>isTraversal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
;
const procedure = new Map([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
        50
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Tag,
        30
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute,
        1
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
        0
    ]
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
const attributes = new Map([
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Exists,
        10
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals,
        8
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Not,
        7
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Start,
        6
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].End,
        6
    ],
    [
        __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Any,
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
    if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AttributeAction"].Equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */ proc >>= 1;
        }
    } else if (token.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo) {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/attributes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeRules",
    ()=>attributeRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)");
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/filters.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filters",
    ()=>filters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)");
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
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
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
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
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
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
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
        const func = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(rule);
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
        if (func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc) return getChildFunc(next, adapter);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
        }
        return function active(elem) {
            return func(elem) && next(elem);
        };
    };
} //# sourceMappingURL=filters.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/sort.js [app-ssr] (ecmascript)");
;
;
const PLACEHOLDER_ELEMENT = {};
function ensureIsTag(next, adapter) {
    if (next === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
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
    return func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc ? next : func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc : (elem)=>func(elem) && next(elem);
};
const subselects = {
    is,
    /**
     * `:matches` and `:where` are aliases for `:is`.
     */ matches: is,
    where: is,
    not (next, token, options, context, compileToken) {
        const func = compileToken(token, copyOptions(options), context);
        return func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc ? next : func === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc : (elem)=>!func(elem) && next(elem);
    },
    has (next, subselect, options, _context, compileToken) {
        const { adapter } = options;
        const opts = copyOptions(options);
        opts.relativeSelector = true;
        const context = subselect.some((s)=>s.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"])) ? [
            PLACEHOLDER_ELEMENT
        ] : undefined;
        const compiled = compileToken(subselect, opts, context);
        if (compiled === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
        const hasElement = ensureIsTag(compiled, adapter);
        // If `compiled` is `trueFunc`, we can skip this.
        if (context && compiled !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc) {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compilePseudoSelector",
    ()=>compilePseudoSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/filters.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/pseudos.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$aliases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/aliases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-ssr] (ecmascript)");
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
        if (!(name in __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subselects"])) {
            throw new Error(`Unknown pseudo-class :${name}(${data})`);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subselects"][name](next, data, options, context, compileToken);
    }
    const userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
    const stringPseudo = typeof userPseudo === "string" ? userPseudo : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$aliases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["aliases"][name];
    if (typeof stringPseudo === "string") {
        if (data != null) {
            throw new Error(`Pseudo ${name} doesn't have any arguments`);
        }
        // The alias has to be parsed here, to make sure options are respected.
        const alias = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(stringPseudo);
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subselects"]["is"](next, alias, options, context, compileToken);
    }
    if (typeof userPseudo === "function") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyPseudoArgs"])(userPseudo, name, data, 1);
        return (elem)=>userPseudo(elem, data) && next(elem);
    }
    if (name in __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filters"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$filters$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["filters"][name](next, data, options, context);
    }
    if (name in __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pseudos"]) {
        const pseudo = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pseudos"][name];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$pseudos$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["verifyPseudoArgs"])(pseudo, name, data, 2);
        return (elem)=>pseudo(elem, options, data) && next(elem);
    }
    throw new Error(`Unknown pseudo-class :${name}`);
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/general.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compileGeneralSelector",
    ()=>compileGeneralSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/attributes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].PseudoElement:
            {
                throw new Error("Pseudo-elements are not supported by css-select");
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].ColumnCombinator:
            {
                throw new Error("Column combinators are not yet supported by css-select");
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Attribute:
            {
                if (selector.namespace != null) {
                    throw new Error("Namespaced attributes are not yet supported by css-select");
                }
                if (!options.xmlMode || options.lowerCaseAttributeNames) {
                    selector.name = selector.name.toLowerCase();
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$attributes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attributeRules"][selector.action](next, selector, options);
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo:
            {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compilePseudoSelector"])(next, selector, options, context, compileToken);
            }
        // Tags
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Tag:
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant:
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Parent:
            {
                return function parent(elem) {
                    return adapter.getChildren(elem).some((elem)=>adapter.isTag(elem) && next(elem));
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Child:
            {
                return function child(elem) {
                    const parent = adapter.getParent(elem);
                    return parent != null && adapter.isTag(parent) && next(parent);
                };
            }
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling:
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent:
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
        case __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Universal:
            {
                if (selector.namespace != null && selector.namespace !== "*") {
                    throw new Error("Namespaced universal selectors are not yet supported by css-select");
                }
                return next;
            }
    }
} //# sourceMappingURL=general.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/compile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile,
    "compileToken",
    ()=>compileToken,
    "compileUnsafe",
    ()=>compileUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/sort.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$general$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/general.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-ssr] (ecmascript)");
;
;
;
;
;
function compile(selector, options, context) {
    const next = compileUnsafe(selector, options, context);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureIsTag"])(next, options.adapter);
}
function compileUnsafe(selector, options, context) {
    const token = typeof selector === "string" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(selector) : selector;
    return compileToken(token, options, context);
}
function includesScopePseudo(t) {
    return t.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some((data)=>data.some(includesScopePseudo)));
}
const DESCENDANT_TOKEN = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant
};
const FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant"
};
const SCOPE_TOKEN = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
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
        return e === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLACEHOLDER_ELEMENT"] || parent && adapter.isTag(parent);
    }));
    for (const t of token){
        if (t.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"])(t[0]) && t[0].type !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
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
    token.forEach(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    const isArrayContext = Array.isArray(context);
    const finalContext = context && (Array.isArray(context) ? context : [
        context
    ]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    } else if (token.some((t)=>t.length > 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$sort$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"])(t[0]))) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    let shouldTestNextSiblings = false;
    const query = token.map((rules)=>{
        if (rules.length >= 2) {
            const [first, second] = rules;
            if (first.type !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo || first.name !== "scope") {
            // Ignore
            } else if (isArrayContext && second.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            } else if (second.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent || second.type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    }).reduce(reduceRules, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce((previous, rule)=>previous === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$general$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileGeneralSelector"])(previous, rule, options, context, compileToken), (_a = options.rootFunc) !== null && _a !== void 0 ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc);
}
function reduceRules(a, b) {
    if (b === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc || a === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc) {
        return a;
    }
    if (a === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc || b === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
} //# sourceMappingURL=compile.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/compile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/subselects.js [app-ssr] (ecmascript)");
// Export filters, pseudos and aliases to allow users to supply their own.
/** @deprecated Use the `pseudos` option instead. */ var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/pseudo-selectors/index.js [app-ssr] (ecmascript) <locals>"); //# sourceMappingURL=index.js.map
;
;
;
;
const defaultEquals = (a, b)=>a === b;
const defaultOptions = {
    adapter: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__,
    equals: defaultEquals
};
function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    /*
     * We force one format of options to the other one.
     */ // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
    const opts = options !== null && options !== void 0 ? options : defaultOptions;
    // @ts-expect-error Same as above.
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
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
const compile = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compile"]);
const _compileUnsafe = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileUnsafe"]);
const _compileToken = wrapCompile(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileToken"]);
function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
        const opts = convertOptionFormats(options);
        if (typeof query !== "function") {
            query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compileUnsafe"])(query, opts, elements);
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
        const nextSiblings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$pseudo$2d$selectors$2f$subselects$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNextSiblings"])(elems[i], adapter);
        elems.push(...nextSiblings);
    }
    return elems;
}
const selectAll = getSelectorFunc((query, elems, options)=>query === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems));
const selectOne = getSelectorFunc((query, elems, options)=>query === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems));
function is(elem, query, options) {
    const opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compile"])(query, opts))(elem);
}
const __TURBOPACK__default__export__ = selectAll;
;
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/compile.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile,
    "generate",
    ()=>generate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)");
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
     */ if (b < 0 && a <= 0) return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1) return (index)=>index <= b;
    if (a === 0) return (index)=>index === b;
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1) return b < 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].trueFunc : (index)=>index >= b;
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>nthCheck,
    "sequence",
    ()=>sequence
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/nth-check@2.1.1/node_modules/nth-check/lib/esm/compile.js [app-ssr] (ecmascript)");
;
;
;
function nthCheck(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compile"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(formula));
}
function sequence(formula) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$compile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generate"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$nth$2d$check$40$2$2e$1$2e$1$2f$node_modules$2f$nth$2d$check$2f$lib$2f$esm$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(formula));
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/positionals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDocumentRoot",
    ()=>getDocumentRoot,
    "groupSelectors",
    ()=>groupSelectors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/positionals.js [app-ssr] (ecmascript)");
;
function getDocumentRoot(node) {
    while(node.parent)node = node.parent;
    return node;
}
function groupSelectors(selectors) {
    const filteredSelectors = [];
    const plainSelectors = [];
    for (const selector of selectors){
        if (selector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFilter"])) {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-what@6.1.0/node_modules/css-what/lib/es/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/css-select@5.2.2/node_modules/css-select/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domutils@3.2.2/node_modules/domutils/lib/esm/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/boolbase@1.0.0/node_modules/boolbase/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/cheerio-select@2.1.0/node_modules/cheerio-select/lib/esm/positionals.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const UNIVERSAL_SELECTOR = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Universal,
    namespace: null
};
const SCOPE_PSEUDO = {
    type: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Pseudo,
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
    const [plain, filtered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupSelectors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(selector));
    return plain.length > 0 && elements.some((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(plain, options)) || filtered.some((sel)=>filterBySelector(sel, elements, options).length > 0);
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
    return filterParsed((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(selector), elements, options);
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
    const [plainSelectors, filteredSelectors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupSelectors"])(selector);
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
        const missing = found ? elements.filter((e)=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isTag(e) && !found.has(e)) : elements;
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
    if (selector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"])) {
        /*
         * Get root node, run selector with the scope
         * set to all of our nodes.
         */ const root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocumentRoot"])(elements[0]);
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
    const [plain, filtered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupSelectors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(selector));
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.uniqueSort(results.reduce((a, b)=>[
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
    const filterIndex = selector.findIndex(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFilter"]);
    const sub = selector.slice(0, filterIndex);
    const filter = selector[filterIndex];
    // If we are at the end of the selector, we can limit the number of elements to retrieve.
    const partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
    /*
     * Set the number of elements to retrieve.
     * Eg. for :first, we only have to get a single element.
     */ const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLimit"])(filter.name, filter.data, partLimit);
    if (limit === 0) return [];
    /*
     * Skip `findElements` call if our selector starts with a positional
     * pseudo.
     */ const elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.getChildren(root).filter(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isTag) : sub.length === 0 ? (Array.isArray(root) ? root : [
        root
    ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isTag) : queryForSelector || sub.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"]) ? findElements(root, [
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
    const remainingHasTraversal = remainingSelector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"]);
    if (remainingHasTraversal) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTraversal"])(remainingSelector[0])) {
            const { type } = remainingSelector[0];
            if (type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Sibling || type === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$what$40$6$2e$1$2e$0$2f$node_modules$2f$css$2d$what$2f$lib$2f$es$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectorType"].Adjacent) {
                // If we have a sibling traversal, we need to also look at the siblings.
                result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareContext"])(result, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, true);
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
    } else if (options.rootFunc && options.rootFunc !== __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trueFunc"]) {
        options = {
            ...options,
            rootFunc: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trueFunc"]
        };
    }
    /*
     * If we have another filter, recursively call `findFilterElements`,
     * with the `recursive` flag disabled. We only have to look for more
     * elements when we see a traversal.
     *
     * Otherwise,
     */ return remainingSelector.some(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$cheerio$2d$select$40$2$2e$1$2e$0$2f$node_modules$2f$cheerio$2d$select$2f$lib$2f$esm$2f$positionals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFilter"]) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? findElements(result, [
        remainingSelector
    ], options, totalLimit) : filterElements(result, [
        remainingSelector
    ], options);
}
function findElements(root, sel, options, limit) {
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(sel, options, root);
    return find(root, query, limit);
}
function find(root, query, limit = Infinity) {
    const elems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["prepareContext"])(root, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__, query.shouldTestNextSiblings);
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.find((node)=>__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isTag(node) && query(node), elems, true, limit);
}
function filterElements(elements, sel, options) {
    const els = (Array.isArray(elements) ? elements : [
        elements
    ]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domutils$40$3$2e$2$2e$2$2f$node_modules$2f$domutils$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.isTag);
    if (els.length === 0) return els;
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$css$2d$select$40$5$2e$2$2e$2$2f$node_modules$2f$css$2d$select$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["_compileToken"])(sel, options);
    return query === __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$boolbase$40$1$2e$0$2e$0$2f$node_modules$2f$boolbase$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["trueFunc"] ? els : els.filter(query);
} //# sourceMappingURL=index.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5-htmlparser2-tree-adapter@7.1.0/node_modules/parse5-htmlparser2-tree-adapter/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adapter",
    ()=>adapter,
    "serializeDoctypeContent",
    ()=>serializeDoctypeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/common/html.js [app-ssr] (ecmascript) <export * as html>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/domhandler@5.0.3/node_modules/domhandler/lib/esm/node.js [app-ssr] (ecmascript)");
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
    isCommentNode: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isComment"],
    isElementNode: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTag"],
    isTextNode: __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"],
    //Node construction
    createDocument () {
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]([]);
        node['x-mode'] = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$common$2f$html$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__html$3e$__["html"].DOCUMENT_MODE.NO_QUIRKS;
        return node;
    },
    createDocumentFragment () {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Document"]([]);
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
        const node = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Element"](tagName, attribs, []);
        node.namespace = namespaceURI;
        node['x-attribsNamespace'] = attribsNamespace;
        node['x-attribsPrefix'] = attribsPrefix;
        return node;
    },
    createCommentNode (data) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Comment"](data);
    },
    createTextNode (value) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"](value);
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
        let doctypeNode = document.children.find((node)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDirective"])(node) && node.name === '!doctype');
        if (doctypeNode) {
            doctypeNode.data = data !== null && data !== void 0 ? data : null;
        } else {
            doctypeNode = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProcessingInstruction"]('!doctype', data);
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
        if (lastChild && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(lastChild)) {
            lastChild.data += text;
        } else {
            adapter.appendChild(parentNode, adapter.createTextNode(text));
        }
    },
    insertTextBefore (parentNode, text, referenceNode) {
        const prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
        if (prevNode && (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isText"])(prevNode)) {
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$domhandler$40$5$2e$0$2e$3$2f$node_modules$2f$domhandler$2f$lib$2f$esm$2f$node$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isDirective"])(node) && node.name === '!doctype';
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5-parser-stream@7.1.2/node_modules/parse5-parser-stream/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParserStream",
    ()=>ParserStream
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/parse5@7.3.0/node_modules/parse5/dist/parser/index.js [app-ssr] (ecmascript)");
;
;
class ParserStream extends __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__["Writable"] {
    static getFragmentStream(fragmentContext, options) {
        const parser = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"].getFragmentParser(fragmentContext, options);
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
     */ constructor(options, parser = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$parse5$40$7$2e$3$2e$0$2f$node_modules$2f$parse5$2f$dist$2f$parser$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Parser"](options)){
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/safer-buffer@2.1.2/node_modules/safer-buffer/safer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/whatwg-encoding.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const iconvLite = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/iconv-lite@0.6.3/node_modules/iconv-lite/lib/index.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/encoding-sniffer@0.2.1/node_modules/encoding-sniffer/dist/esm/sniffer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$whatwg$2d$encoding$40$3$2e$1$2e$1$2f$node_modules$2f$whatwg$2d$encoding$2f$lib$2f$whatwg$2d$encoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-encoding@3.1.1/node_modules/whatwg-encoding/lib/whatwg-encoding.js [app-ssr] (ecmascript)");
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
            const encoding = (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$whatwg$2d$encoding$40$3$2e$1$2e$1$2f$node_modules$2f$whatwg$2d$encoding$2f$lib$2f$whatwg$2d$encoding$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["labelToName"])(label);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/encoding-sniffer@0.2.1/node_modules/encoding-sniffer/dist/esm/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecodeStream",
    ()=>DecodeStream,
    "decodeBuffer",
    ()=>decodeBuffer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$stream__$5b$external$5d$__$28$node$3a$stream$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:stream [external] (node:stream, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$iconv$2d$lite$40$0$2e$6$2e$3$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/iconv-lite@0.6.3/node_modules/iconv-lite/lib/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$encoding$2d$sniffer$40$0$2e$2$2e$1$2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/encoding-sniffer@0.2.1/node_modules/encoding-sniffer/dist/esm/sniffer.js [app-ssr] (ecmascript)");
;
;
;
function decodeBuffer(buffer, options = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$iconv$2d$lite$40$0$2e$6$2e$3$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].decode(buffer, (0, __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$encoding$2d$sniffer$40$0$2e$2$2e$1$2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEncoding"])(buffer, options));
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
        this.sniffer = new __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$encoding$2d$sniffer$40$0$2e$2$2e$1$2f$node_modules$2f$encoding$2d$sniffer$2f$dist$2f$esm$2f$sniffer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sniffer"](options);
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
        const stream = __TURBOPACK__imported__module__$5b$project$5d2f$wraelen$2f$wraelen$2d$internal$2d$boilerplate$2f$node_modules$2f2e$pnpm$2f$iconv$2d$lite$40$0$2e$6$2e$3$2f$node_modules$2f$iconv$2d$lite$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].decodeStream(this.sniffer.encoding);
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type-parameters.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { asciiLowercase, solelyContainsHTTPTokenCodePoints, soleyContainsHTTPQuotedStringTokenCodePoints } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/parser.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { removeLeadingAndTrailingHTTPWhitespace, removeTrailingHTTPWhitespace, isHTTPWhitespaceChar, solelyContainsHTTPTokenCodePoints, soleyContainsHTTPQuotedStringTokenCodePoints, asciiLowercase, collectAnHTTPQuotedString } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/serializer.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { solelyContainsHTTPTokenCodePoints } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MIMETypeParameters = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/mime-type-parameters.js [app-ssr] (ecmascript)");
const parse = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/parser.js [app-ssr] (ecmascript)");
const serialize = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/serializer.js [app-ssr] (ecmascript)");
const { asciiLowercase, solelyContainsHTTPTokenCodePoints } = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/whatwg-mimetype@4.0.0/node_modules/whatwg-mimetype/lib/utils.js [app-ssr] (ecmascript)");
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
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase().replace(/-/g, ""),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0]
        ];
        return this.set({
            ...options,
            name,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/cookies.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null,
    stringifyCookie: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    },
    stringifyCookie: function() {
        return _cookies.stringifyCookie;
    }
});
const _cookies = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-ssr] (ecmascript)"); //# sourceMappingURL=cookies.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ReflectAdapter", {
    enumerable: true,
    get: function() {
        return ReflectAdapter;
    }
});
class ReflectAdapter {
    static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === 'function') {
            return value.bind(target);
        }
        return value;
    }
    static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
    }
    static has(target, prop) {
        return Reflect.has(target, prop);
    }
    static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
    }
} //# sourceMappingURL=reflect.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    MutableRequestCookiesAdapter: null,
    ReadonlyRequestCookiesError: null,
    RequestCookiesAdapter: null,
    appendMutableCookies: null,
    areCookiesMutableInCurrentPhase: null,
    createCookiesWithMutableAccessCheck: null,
    getModifiedCookieValues: null,
    responseCookiesToRequestCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    MutableRequestCookiesAdapter: function() {
        return MutableRequestCookiesAdapter;
    },
    ReadonlyRequestCookiesError: function() {
        return ReadonlyRequestCookiesError;
    },
    RequestCookiesAdapter: function() {
        return RequestCookiesAdapter;
    },
    appendMutableCookies: function() {
        return appendMutableCookies;
    },
    areCookiesMutableInCurrentPhase: function() {
        return areCookiesMutableInCurrentPhase;
    },
    createCookiesWithMutableAccessCheck: function() {
        return createCookiesWithMutableAccessCheck;
    },
    getModifiedCookieValues: function() {
        return getModifiedCookieValues;
    },
    responseCookiesToRequestCookies: function() {
        return responseCookiesToRequestCookies;
    }
});
const _cookies = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/cookies.js [app-ssr] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
class ReadonlyRequestCookiesError extends Error {
    constructor(){
        super('Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#options');
    }
    static callable() {
        throw new ReadonlyRequestCookiesError();
    }
}
class RequestCookiesAdapter {
    static seal(cookies) {
        return new Proxy(cookies, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'clear':
                    case 'delete':
                    case 'set':
                        return ReadonlyRequestCookiesError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
}
const SYMBOL_MODIFY_COOKIE_VALUES = Symbol.for('next.mutated.cookies');
function getModifiedCookieValues(cookies) {
    const modified = cookies[SYMBOL_MODIFY_COOKIE_VALUES];
    if (!modified || !Array.isArray(modified) || modified.length === 0) {
        return [];
    }
    return modified;
}
function appendMutableCookies(headers, mutableCookies) {
    const modifiedCookieValues = getModifiedCookieValues(mutableCookies);
    if (modifiedCookieValues.length === 0) {
        return false;
    }
    // Return a new response that extends the response with
    // the modified cookies as fallbacks. `res` cookies
    // will still take precedence.
    const resCookies = new _cookies.ResponseCookies(headers);
    const returnedCookies = resCookies.getAll();
    // Set the modified cookies as fallbacks.
    for (const cookie of modifiedCookieValues){
        resCookies.set(cookie);
    }
    // Set the original cookies as the final values.
    for (const cookie of returnedCookies){
        resCookies.set(cookie);
    }
    return true;
}
class MutableRequestCookiesAdapter {
    static wrap(cookies, onUpdateCookies) {
        const responseCookies = new _cookies.ResponseCookies(new Headers());
        for (const cookie of cookies.getAll()){
            responseCookies.set(cookie);
        }
        let modifiedValues = [];
        const modifiedCookies = new Set();
        const updateResponseCookies = ()=>{
            // TODO-APP: change method of getting workStore
            const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
            if (workStore) {
                workStore.pathWasRevalidated = true;
            }
            const allCookies = responseCookies.getAll();
            modifiedValues = allCookies.filter((c)=>modifiedCookies.has(c.name));
            if (onUpdateCookies) {
                const serializedCookies = [];
                for (const cookie of modifiedValues){
                    const tempCookies = new _cookies.ResponseCookies(new Headers());
                    tempCookies.set(cookie);
                    serializedCookies.push(tempCookies.toString());
                }
                onUpdateCookies(serializedCookies);
            }
        };
        const wrappedCookies = new Proxy(responseCookies, {
            get (target, prop, receiver) {
                switch(prop){
                    // A special symbol to get the modified cookie values
                    case SYMBOL_MODIFY_COOKIE_VALUES:
                        return modifiedValues;
                    // TODO: Throw error if trying to set a cookie after the response
                    // headers have been set.
                    case 'delete':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.delete(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    case 'set':
                        return function(...args) {
                            modifiedCookies.add(typeof args[0] === 'string' ? args[0] : args[0].name);
                            try {
                                target.set(...args);
                                return wrappedCookies;
                            } finally{
                                updateResponseCookies();
                            }
                        };
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
        return wrappedCookies;
    }
}
function createCookiesWithMutableAccessCheck(requestStore) {
    const wrappedCookies = new Proxy(requestStore.mutableCookies, {
        get (target, prop, receiver) {
            switch(prop){
                case 'delete':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().delete');
                        target.delete(...args);
                        return wrappedCookies;
                    };
                case 'set':
                    return function(...args) {
                        ensureCookiesAreStillMutable(requestStore, 'cookies().set');
                        target.set(...args);
                        return wrappedCookies;
                    };
                default:
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
        }
    });
    return wrappedCookies;
}
function areCookiesMutableInCurrentPhase(requestStore) {
    return requestStore.phase === 'action';
}
/** Ensure that cookies() starts throwing on mutation
 * if we changed phases and can no longer mutate.
 *
 * This can happen when going:
 *   'render' -> 'after'
 *   'action' -> 'render'
 * */ function ensureCookiesAreStillMutable(requestStore, _callingExpression) {
    if (!areCookiesMutableInCurrentPhase(requestStore)) {
        // TODO: maybe we can give a more precise error message based on callingExpression?
        throw new ReadonlyRequestCookiesError();
    }
}
function responseCookiesToRequestCookies(responseCookies) {
    const requestCookies = new _cookies.RequestCookies(new Headers());
    for (const cookie of responseCookies.getAll()){
        requestCookies.set(cookie);
    }
    return requestCookies;
} //# sourceMappingURL=request-cookies.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupedByCallsiteServerErrorLoggerDev", {
    enumerable: true,
    get: function() {
        return createDedupedByCallsiteServerErrorLoggerDev;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const errorRef = {
    current: null
};
// React.cache is currently only available in canary/experimental React channels.
const cache = typeof _react.cache === 'function' ? _react.cache : (fn)=>fn;
// When Cache Components is enabled, we record these as errors so that they
// are captured by the dev overlay as it's more critical to fix these
// when enabled.
const logErrorOrWarn = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : console.warn;
// We don't want to dedupe across requests.
// The developer might've just attempted to fix the warning so we should warn again if it still happens.
const flushCurrentErrorIfNew = cache((key)=>{
    try {
        logErrorOrWarn(errorRef.current);
    } finally{
        errorRef.current = null;
    }
});
function createDedupedByCallsiteServerErrorLoggerDev(getMessage) {
    return function logDedupedError(...args) {
        const message = getMessage(...args);
        if ("TURBOPACK compile-time truthy", 1) {
            var _stack;
            const callStackFrames = (_stack = new Error().stack) == null ? void 0 : _stack.split('\n');
            if (callStackFrames === undefined || callStackFrames.length < 4) {
                logErrorOrWarn(message);
            } else {
                // Error:
                //   logDedupedError
                //   asyncApiBeingAccessedSynchronously
                //   <userland callsite>
                // TODO: This breaks if sourcemaps with ignore lists are enabled.
                const key = callStackFrames[4];
                errorRef.current = message;
                flushCurrentErrorIfNew(key);
            }
        } else //TURBOPACK unreachable
        ;
    };
} //# sourceMappingURL=create-deduped-by-callsite-server-error-logger.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isRequestAPICallableInsideAfter: null,
    throwForSearchParamsAccessInUseCache: null,
    throwWithStaticGenerationBailoutError: null,
    throwWithStaticGenerationBailoutErrorWithDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
    },
    throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
    },
    throwWithStaticGenerationBailoutError: function() {
        return throwWithStaticGenerationBailoutError;
    },
    throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
    }
});
const _staticgenerationbailout = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _aftertaskasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)");
function throwWithStaticGenerationBailoutError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E576",
        enumerable: false,
        configurable: true
    });
}
function throwWithStaticGenerationBailoutErrorWithDynamicError(route, expression) {
    throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
    });
}
function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
    const error = Object.defineProperty(new Error(`Route ${workStore.route} used "searchParams" inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await "searchParams" outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E779",
        enumerable: false,
        configurable: true
    });
    Error.captureStackTrace(error, constructorOpt);
    workStore.invalidDynamicUsageError ??= error;
    throw error;
}
function isRequestAPICallableInsideAfter() {
    const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
    return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === 'action';
} //# sourceMappingURL=utils.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/cookies.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cookies", {
    enumerable: true,
    get: function() {
        return cookies;
    }
});
const _requestcookies = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.js [app-ssr] (ecmascript)");
const _cookies = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/cookies.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/utils.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
function cookies() {
    const callingExpression = 'cookies';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "cookies" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E88",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // cookies object without tracking
            const underlyingCookies = createEmptyCookies();
            return makeUntrackedExoticCookies(underlyingCookies);
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`cookies\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E549",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    const error = Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                        value: "E398",
                        enumerable: false,
                        configurable: true
                    });
                    Error.captureStackTrace(error, cookies);
                    workStore.invalidDynamicUsageError ??= error;
                    throw error;
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used "cookies" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "cookies" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E157",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                    return makeHangingCookies(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`cookies`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E693",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // We need track dynamic access here eagerly to keep continuity with
                    // how cookies has worked in PPR without cacheComponents.
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // We track dynamic access here so we don't need to wrap the cookies
                    // in individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'prerender-runtime':
                    return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, makeUntrackedCookies(workUnitStore.cookies));
                case 'private-cache':
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    return makeUntrackedExoticCookies(workUnitStore.cookies);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    let underlyingCookies;
                    if ((0, _requestcookies.areCookiesMutableInCurrentPhase)(workUnitStore)) {
                        // We can't conditionally return different types here based on the context.
                        // To avoid confusion, we always return the readonly type here.
                        underlyingCookies = workUnitStore.userspaceMutableCookies;
                    } else {
                        underlyingCookies = workUnitStore.cookies;
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                        return makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, workStore == null ? void 0 : workStore.route);
                    } else //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
function createEmptyCookies() {
    return _requestcookies.RequestCookiesAdapter.seal(new _cookies.RequestCookies(new Headers({})));
}
const CachedCookies = new WeakMap();
function makeHangingCookies(workStore, prerenderStore) {
    const cachedPromise = CachedCookies.get(prerenderStore);
    if (cachedPromise) {
        return cachedPromise;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`cookies()`');
    CachedCookies.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    return promise;
}
function makeUntrackedExoticCookies(underlyingCookies) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = Promise.resolve(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].bind(underlyingCookies) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
            // has extra properties not available on RequestCookie instances.
            polyfilledResponseCookiesIterator.bind(underlyingCookies)
        },
        size: {
            get () {
                return underlyingCookies.size;
            }
        },
        get: {
            value: underlyingCookies.get.bind(underlyingCookies)
        },
        getAll: {
            value: underlyingCookies.getAll.bind(underlyingCookies)
        },
        has: {
            value: underlyingCookies.has.bind(underlyingCookies)
        },
        set: {
            value: underlyingCookies.set.bind(underlyingCookies)
        },
        delete: {
            value: underlyingCookies.delete.bind(underlyingCookies)
        },
        clear: {
            value: typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.bind(underlyingCookies) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
            // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
            // has extra properties not available on RequestCookie instances.
            polyfilledResponseCookiesClear.bind(underlyingCookies, promise)
        },
        toString: {
            value: underlyingCookies.toString.bind(underlyingCookies)
        }
    });
    return promise;
}
function makeUntrackedExoticCookiesWithDevWarnings(underlyingCookies, route) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies);
    CachedCookies.set(underlyingCookies, promise);
    Object.defineProperties(promise, {
        [Symbol.iterator]: {
            value: function() {
                const expression = '`...cookies()` or similar iteration';
                syncIODev(route, expression);
                return underlyingCookies[Symbol.iterator] ? underlyingCookies[Symbol.iterator].apply(underlyingCookies, arguments) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                // has extra properties not available on RequestCookie instances.
                polyfilledResponseCookiesIterator.call(underlyingCookies);
            },
            writable: false
        },
        size: {
            get () {
                const expression = '`cookies().size`';
                syncIODev(route, expression);
                return underlyingCookies.size;
            }
        },
        get: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().get()`';
                } else {
                    expression = `\`cookies().get(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.get.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        getAll: {
            value: function getAll() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().getAll()`';
                } else {
                    expression = `\`cookies().getAll(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.getAll.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        has: {
            value: function get() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().has()`';
                } else {
                    expression = `\`cookies().has(${describeNameArg(arguments[0])})\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.has.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        set: {
            value: function set() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().set()`';
                } else {
                    const arg = arguments[0];
                    if (arg) {
                        expression = `\`cookies().set(${describeNameArg(arg)}, ...)\``;
                    } else {
                        expression = '`cookies().set(...)`';
                    }
                }
                syncIODev(route, expression);
                return underlyingCookies.set.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        delete: {
            value: function() {
                let expression;
                if (arguments.length === 0) {
                    expression = '`cookies().delete()`';
                } else if (arguments.length === 1) {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])})\``;
                } else {
                    expression = `\`cookies().delete(${describeNameArg(arguments[0])}, ...)\``;
                }
                syncIODev(route, expression);
                return underlyingCookies.delete.apply(underlyingCookies, arguments);
            },
            writable: false
        },
        clear: {
            value: function clear() {
                const expression = '`cookies().clear()`';
                syncIODev(route, expression);
                // @ts-ignore clear is defined in RequestCookies implementation but not in the type
                return typeof underlyingCookies.clear === 'function' ? underlyingCookies.clear.apply(underlyingCookies, arguments) : // but that's already a hard thing to debug so we may as well implement it consistently. The biggest problem with
                // implementing this in this way is the underlying cookie type is a ResponseCookie and not a RequestCookie and so it
                // has extra properties not available on RequestCookie instances.
                polyfilledResponseCookiesClear.call(underlyingCookies, promise);
            },
            writable: false
        },
        toString: {
            value: function toString() {
                const expression = '`cookies().toString()` or implicit casting';
                syncIODev(route, expression);
                return underlyingCookies.toString.apply(underlyingCookies, arguments);
            },
            writable: false
        }
    });
    return promise;
}
// Similar to `makeUntrackedExoticCookiesWithDevWarnings`, but just logging the
// sync access without actually defining the cookies properties on the promise.
function makeUntrackedCookiesWithDevWarnings(underlyingCookies, route) {
    const cachedCookies = CachedCookies.get(underlyingCookies);
    if (cachedCookies) {
        return cachedCookies;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingCookies);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            switch(prop){
                case Symbol.iterator:
                    {
                        warnForSyncAccess(route, '`...cookies()` or similar iteration');
                        break;
                    }
                case 'size':
                case 'get':
                case 'getAll':
                case 'has':
                case 'set':
                case 'delete':
                case 'clear':
                case 'toString':
                    {
                        warnForSyncAccess(route, `\`cookies().${prop}\``);
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the cookies object.
                    }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedCookies.set(underlyingCookies, proxiedPromise);
    return proxiedPromise;
}
function describeNameArg(arg) {
    return typeof arg === 'object' && arg !== null && typeof arg.name === 'string' ? `'${arg.name}'` : typeof arg === 'string' ? `'${arg}'` : '...';
}
function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
                if (workUnitStore.prerenderPhase === true) {
                    // When we're rendering dynamically in dev, we need to advance out of
                    // the Prerender environment when we read Request data synchronously.
                    (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
                }
                break;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createCookiesAccessError);
function createCookiesAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`cookies()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E223",
        enumerable: false,
        configurable: true
    });
}
function polyfilledResponseCookiesIterator() {
    return this.getAll().map((c)=>[
            c.name,
            c
        ]).values();
}
function polyfilledResponseCookiesClear(returnable) {
    for (const cookie of this.getAll()){
        this.delete(cookie.name);
    }
    return returnable;
} //# sourceMappingURL=cookies.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HeadersAdapter: null,
    ReadonlyHeadersError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HeadersAdapter: function() {
        return HeadersAdapter;
    },
    ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
    }
});
const _reflect = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return _reflect.ReflectAdapter.get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return _reflect.ReflectAdapter.set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return _reflect.ReflectAdapter.has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return _reflect.ReflectAdapter.deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return _reflect.ReflectAdapter.deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return _reflect.ReflectAdapter.get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "headers", {
    enumerable: true,
    get: function() {
        return headers;
    }
});
const _headers = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/headers.js [app-ssr] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/dynamic-rendering-utils.js [app-ssr] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/utils.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
function headers() {
    const callingExpression = 'headers';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        if (workUnitStore && workUnitStore.phase === 'after' && !(0, _utils.isRequestAPICallableInsideAfter)()) {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "after(...)". This is not supported. If you need this data inside an "after" callback, use "headers" outside of the callback. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E367",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.forceStatic) {
            // When using forceStatic we override all other logic and always just return an empty
            // headers object without tracking
            const underlyingHeaders = _headers.HeadersAdapter.seal(new Headers({}));
            return makeUntrackedExoticHeaders(underlyingHeaders);
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E304",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, headers);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'private-cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside "use cache: private". Accessing "headers" inside a private cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E742",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, headers);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used "headers" inside a function cached with "unstable_cache(...)". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "headers" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E127",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-client':
                case 'prerender-runtime':
                case 'prerender-ppr':
                case 'prerender-legacy':
                case 'request':
                    break;
                default:
                    workUnitStore;
            }
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`headers\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E525",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'prerender':
                case 'prerender-runtime':
                    return makeHangingHeaders(workStore, workUnitStore);
                case 'prerender-client':
                    const exportName = '`headers`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E693",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    // PPR Prerender (no cacheComponents)
                    // We are prerendering with PPR. We need track dynamic access here eagerly
                    // to keep continuity with how headers has worked in PPR without cacheComponents.
                    // TODO consider switching the semantic to throw on property access instead
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, callingExpression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    // Legacy Prerender
                    // We are in a legacy static generation mode while prerendering
                    // We track dynamic access here so we don't need to wrap the headers in
                    // individual property access tracking.
                    return (0, _dynamicrendering.throwToInterruptStaticGeneration)(callingExpression, workStore, workUnitStore);
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    if ("TURBOPACK compile-time truthy", 1) {
                        // Semantically we only need the dev tracking when running in `next dev`
                        // but since you would never use next dev with production NODE_ENV we use this
                        // as a proxy so we can statically exclude this code from production builds.
                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                        return makeUntrackedExoticHeadersWithDevWarnings(workUnitStore.headers, workStore == null ? void 0 : workStore.route);
                    } else //TURBOPACK unreachable
                    ;
                    //TURBOPACK unreachable
                    ;
                default:
                    workUnitStore;
            }
        }
    }
    // If we end up here, there was no work store or work unit store present.
    (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
}
const CachedHeaders = new WeakMap();
function makeHangingHeaders(workStore, prerenderStore) {
    const cachedHeaders = CachedHeaders.get(prerenderStore);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, workStore.route, '`headers()`');
    CachedHeaders.set(prerenderStore, promise);
    return promise;
}
function makeUntrackedHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    return promise;
}
function makeUntrackedExoticHeaders(underlyingHeaders) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = Promise.resolve(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
        append: {
            value: underlyingHeaders.append.bind(underlyingHeaders)
        },
        delete: {
            value: underlyingHeaders.delete.bind(underlyingHeaders)
        },
        get: {
            value: underlyingHeaders.get.bind(underlyingHeaders)
        },
        has: {
            value: underlyingHeaders.has.bind(underlyingHeaders)
        },
        set: {
            value: underlyingHeaders.set.bind(underlyingHeaders)
        },
        getSetCookie: {
            value: underlyingHeaders.getSetCookie.bind(underlyingHeaders)
        },
        forEach: {
            value: underlyingHeaders.forEach.bind(underlyingHeaders)
        },
        keys: {
            value: underlyingHeaders.keys.bind(underlyingHeaders)
        },
        values: {
            value: underlyingHeaders.values.bind(underlyingHeaders)
        },
        entries: {
            value: underlyingHeaders.entries.bind(underlyingHeaders)
        },
        [Symbol.iterator]: {
            value: underlyingHeaders[Symbol.iterator].bind(underlyingHeaders)
        }
    });
    return promise;
}
function makeUntrackedExoticHeadersWithDevWarnings(underlyingHeaders, route) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders);
    CachedHeaders.set(underlyingHeaders, promise);
    Object.defineProperties(promise, {
        append: {
            value: function append() {
                const expression = `\`headers().append(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.append.apply(underlyingHeaders, arguments);
            }
        },
        delete: {
            value: function _delete() {
                const expression = `\`headers().delete(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.delete.apply(underlyingHeaders, arguments);
            }
        },
        get: {
            value: function get() {
                const expression = `\`headers().get(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.get.apply(underlyingHeaders, arguments);
            }
        },
        has: {
            value: function has() {
                const expression = `\`headers().has(${describeNameArg(arguments[0])})\``;
                syncIODev(route, expression);
                return underlyingHeaders.has.apply(underlyingHeaders, arguments);
            }
        },
        set: {
            value: function set() {
                const expression = `\`headers().set(${describeNameArg(arguments[0])}, ...)\``;
                syncIODev(route, expression);
                return underlyingHeaders.set.apply(underlyingHeaders, arguments);
            }
        },
        getSetCookie: {
            value: function getSetCookie() {
                const expression = '`headers().getSetCookie()`';
                syncIODev(route, expression);
                return underlyingHeaders.getSetCookie.apply(underlyingHeaders, arguments);
            }
        },
        forEach: {
            value: function forEach() {
                const expression = '`headers().forEach(...)`';
                syncIODev(route, expression);
                return underlyingHeaders.forEach.apply(underlyingHeaders, arguments);
            }
        },
        keys: {
            value: function keys() {
                const expression = '`headers().keys()`';
                syncIODev(route, expression);
                return underlyingHeaders.keys.apply(underlyingHeaders, arguments);
            }
        },
        values: {
            value: function values() {
                const expression = '`headers().values()`';
                syncIODev(route, expression);
                return underlyingHeaders.values.apply(underlyingHeaders, arguments);
            }
        },
        entries: {
            value: function entries() {
                const expression = '`headers().entries()`';
                syncIODev(route, expression);
                return underlyingHeaders.entries.apply(underlyingHeaders, arguments);
            }
        },
        [Symbol.iterator]: {
            value: function() {
                const expression = '`...headers()` or similar iteration';
                syncIODev(route, expression);
                return underlyingHeaders[Symbol.iterator].apply(underlyingHeaders, arguments);
            }
        }
    });
    return promise;
}
// Similar to `makeUntrackedExoticHeadersWithDevWarnings`, but just logging the
// sync access without actually defining the headers properties on the promise.
function makeUntrackedHeadersWithDevWarnings(underlyingHeaders, route) {
    const cachedHeaders = CachedHeaders.get(underlyingHeaders);
    if (cachedHeaders) {
        return cachedHeaders;
    }
    const promise = (0, _dynamicrenderingutils.makeDevtoolsIOAwarePromise)(underlyingHeaders);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            switch(prop){
                case Symbol.iterator:
                    {
                        warnForSyncAccess(route, '`...headers()` or similar iteration');
                        break;
                    }
                case 'append':
                case 'delete':
                case 'get':
                case 'has':
                case 'set':
                case 'getSetCookie':
                case 'forEach':
                case 'keys':
                case 'values':
                case 'entries':
                    {
                        warnForSyncAccess(route, `\`headers().${prop}\``);
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the headers object.
                    }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    CachedHeaders.set(underlyingHeaders, proxiedPromise);
    return proxiedPromise;
}
function describeNameArg(arg) {
    return typeof arg === 'string' ? `'${arg}'` : '...';
}
function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
                if (workUnitStore.prerenderPhase === true) {
                    // When we're rendering dynamically in dev, we need to advance out of
                    // the Prerender environment when we read Request data synchronously.
                    (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
                }
                break;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createHeadersAccessError);
function createHeadersAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`headers()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E277",
        enumerable: false,
        configurable: true
    });
} //# sourceMappingURL=headers.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/draft-mode.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "draftMode", {
    enumerable: true,
    get: function() {
        return draftMode;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-ssr] (ecmascript)");
const _creatededupedbycallsiteservererrorlogger = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/create-deduped-by-callsite-server-error-logger.js [app-ssr] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/client/components/static-generation-bailout.js [app-ssr] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/client/components/hooks-server-context.js [app-ssr] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/shared/lib/invariant-error.js [app-ssr] (ecmascript)");
const _reflect = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js [app-ssr] (ecmascript)");
function draftMode() {
    const callingExpression = 'draftMode';
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workStore || !workUnitStore) {
        (0, _workunitasyncstorageexternal.throwForMissingRequestStore)(callingExpression);
    }
    switch(workUnitStore.type){
        case 'prerender-runtime':
            // TODO(runtime-ppr): does it make sense to delay this? normally it's always microtasky
            return (0, _dynamicrendering.delayUntilRuntimeStage)(workUnitStore, createOrGetCachedDraftMode(workUnitStore.draftMode, workStore));
        case 'request':
            return createOrGetCachedDraftMode(workUnitStore.draftMode, workStore);
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            // Inside of `"use cache"` or `unstable_cache`, draft mode is available if
            // the outmost work unit store is a request store (or a runtime prerender),
            // and if draft mode is enabled.
            const draftModeProvider = (0, _workunitasyncstorageexternal.getDraftModeProviderForCacheScope)(workStore, workUnitStore);
            if (draftModeProvider) {
                return createOrGetCachedDraftMode(draftModeProvider, workStore);
            }
        // Otherwise, we fall through to providing an empty draft mode.
        // eslint-disable-next-line no-fallthrough
        case 'prerender':
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
            // Return empty draft mode
            return createOrGetCachedDraftMode(null, workStore);
        default:
            return workUnitStore;
    }
}
function createOrGetCachedDraftMode(draftModeProvider, workStore) {
    const cacheKey = draftModeProvider ?? NullDraftMode;
    const cachedDraftMode = CachedDraftModes.get(cacheKey);
    if (cachedDraftMode) {
        return cachedDraftMode;
    }
    let promise;
    if (("TURBOPACK compile-time value", "development") === 'development' && !(workStore == null ? void 0 : workStore.isPrefetchRequest)) {
        const route = workStore == null ? void 0 : workStore.route;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        promise = createExoticDraftModeWithDevWarnings(draftModeProvider, route);
    } else {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        promise = createExoticDraftMode(draftModeProvider);
    }
    CachedDraftModes.set(cacheKey, promise);
    return promise;
}
const NullDraftMode = {};
const CachedDraftModes = new WeakMap();
function createExoticDraftMode(underlyingProvider) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, 'isEnabled', {
        get () {
            return instance.isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    promise.enable = instance.enable.bind(instance);
    promise.disable = instance.disable.bind(instance);
    return promise;
}
function createExoticDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    Object.defineProperty(promise, 'isEnabled', {
        get () {
            const expression = '`draftMode().isEnabled`';
            syncIODev(route, expression);
            return instance.isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(promise, 'enable', {
        value: function get() {
            const expression = '`draftMode().enable()`';
            syncIODev(route, expression);
            return instance.enable.apply(instance, arguments);
        }
    });
    Object.defineProperty(promise, 'disable', {
        value: function get() {
            const expression = '`draftMode().disable()`';
            syncIODev(route, expression);
            return instance.disable.apply(instance, arguments);
        }
    });
    return promise;
}
// Similar to `createExoticDraftModeWithDevWarnings`, but just logging the sync
// access without actually defining the draftMode properties on the promise.
function createDraftModeWithDevWarnings(underlyingProvider, route) {
    const instance = new DraftMode(underlyingProvider);
    const promise = Promise.resolve(instance);
    const proxiedPromise = new Proxy(promise, {
        get (target, prop, receiver) {
            switch(prop){
                case 'isEnabled':
                    warnForSyncAccess(route, `\`draftMode().${prop}\``);
                    break;
                case 'enable':
                case 'disable':
                    {
                        warnForSyncAccess(route, `\`draftMode().${prop}()\``);
                        break;
                    }
                default:
                    {
                    // We only warn for well-defined properties of the draftMode object.
                    }
            }
            return _reflect.ReflectAdapter.get(target, prop, receiver);
        }
    });
    return proxiedPromise;
}
class DraftMode {
    constructor(provider){
        this._provider = provider;
    }
    get isEnabled() {
        if (this._provider !== null) {
            return this._provider.isEnabled;
        }
        return false;
    }
    enable() {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        trackDynamicDraftMode('draftMode().enable()', this.enable);
        if (this._provider !== null) {
            this._provider.enable();
        }
    }
    disable() {
        trackDynamicDraftMode('draftMode().disable()', this.disable);
        if (this._provider !== null) {
            this._provider.disable();
        }
    }
}
function syncIODev(route, expression) {
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'request':
                if (workUnitStore.prerenderPhase === true) {
                    // When we're rendering dynamically in dev, we need to advance out of
                    // the Prerender environment when we read Request data synchronously.
                    (0, _dynamicrendering.trackSynchronousRequestDataAccessInDev)(workUnitStore);
                }
                break;
            case 'prerender':
            case 'prerender-client':
            case 'prerender-runtime':
            case 'prerender-ppr':
            case 'prerender-legacy':
            case 'cache':
            case 'private-cache':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
    // In all cases we warn normally
    warnForSyncAccess(route, expression);
}
const warnForSyncAccess = (0, _creatededupedbycallsiteservererrorlogger.createDedupedByCallsiteServerErrorLoggerDev)(createDraftModeAccessError);
function createDraftModeAccessError(route, expression) {
    const prefix = route ? `Route "${route}" ` : 'This route ';
    return Object.defineProperty(new Error(`${prefix}used ${expression}. ` + `\`draftMode()\` should be awaited before using its value. ` + `Learn more: https://nextjs.org/docs/messages/sync-dynamic-apis`), "__NEXT_ERROR_CODE", {
        value: "E377",
        enumerable: false,
        configurable: true
    });
}
function trackDynamicDraftMode(expression, constructorOpt) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore) {
        // We have a store we want to track dynamic data access to ensure we
        // don't statically generate routes that manipulate draft mode.
        if ((workUnitStore == null ? void 0 : workUnitStore.phase) === 'after') {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside \`after\`. The enabled status of draftMode can be read inside \`after\` but you cannot enable or disable draftMode. See more info here: https://nextjs.org/docs/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
                value: "E348",
                enumerable: false,
                configurable: true
            });
        }
        if (workStore.dynamicShouldError) {
            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E553",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore) {
            switch(workUnitStore.type){
                case 'cache':
                case 'private-cache':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside "use cache". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                            value: "E246",
                            enumerable: false,
                            configurable: true
                        });
                        Error.captureStackTrace(error, constructorOpt);
                        workStore.invalidDynamicUsageError ??= error;
                        throw error;
                    }
                case 'unstable-cache':
                    throw Object.defineProperty(new Error(`Route ${workStore.route} used "${expression}" inside a function cached with "unstable_cache(...)". The enabled status of draftMode can be read in caches but you must not enable or disable draftMode inside a cache. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                        value: "E259",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender':
                case 'prerender-runtime':
                    {
                        const error = Object.defineProperty(new Error(`Route ${workStore.route} used ${expression} without first calling \`await connection()\`. See more info here: https://nextjs.org/docs/messages/next-prerender-sync-headers`), "__NEXT_ERROR_CODE", {
                            value: "E126",
                            enumerable: false,
                            configurable: true
                        });
                        return (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(workStore.route, expression, error, workUnitStore);
                    }
                case 'prerender-client':
                    const exportName = '`draftMode`';
                    throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                        value: "E693",
                        enumerable: false,
                        configurable: true
                    });
                case 'prerender-ppr':
                    return (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, workUnitStore.dynamicTracking);
                case 'prerender-legacy':
                    workUnitStore.revalidate = 0;
                    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${workStore.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                        value: "E558",
                        enumerable: false,
                        configurable: true
                    });
                    workStore.dynamicUsageDescription = expression;
                    workStore.dynamicUsageStack = err.stack;
                    throw err;
                case 'request':
                    (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workUnitStore);
                    break;
                default:
                    workUnitStore;
            }
        }
    }
} //# sourceMappingURL=draft-mode.js.map
}),
"[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/headers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports.cookies = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/cookies.js [app-ssr] (ecmascript)").cookies;
module.exports.headers = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/headers.js [app-ssr] (ecmascript)").headers;
module.exports.draftMode = __turbopack_context__.r("[project]/wraelen/wraelen-internal-boilerplate/node_modules/.pnpm/next@15.5.4_@babel+core@7.27.1_@opentelemetry+api@1.7.0_@playwright+test@1.52.0_babel-p_68e8c185df7d969f063bfb2ef00a51ed/node_modules/next/dist/server/request/draft-mode.js [app-ssr] (ecmascript)").draftMode;
}),
];

//# sourceMappingURL=ecc1d__pnpm_cd94806c._.js.map