/**
 * @license React
 * react-server-dom-turbopack-client.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";
"production" !== process.env.NODE_ENV &&
  (function () {
    function _defineProperty(obj, key, value) {
      key in obj
        ? Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
          })
        : (obj[key] = value);
      return obj;
    }
    function resolveClientReference(bundlerConfig, metadata) {
      if (bundlerConfig) {
        var moduleExports = bundlerConfig[metadata[0]];
        if ((bundlerConfig = moduleExports[metadata[2]]))
          moduleExports = bundlerConfig.name;
        else {
          bundlerConfig = moduleExports["*"];
          if (!bundlerConfig)
            throw Error(
              'Could not find the module "' +
                metadata[0] +
                '" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.'
            );
          moduleExports = metadata[2];
        }
        return 4 === metadata.length
          ? [bundlerConfig.id, bundlerConfig.chunks, moduleExports, 1]
          : [bundlerConfig.id, bundlerConfig.chunks, moduleExports];
      }
      return metadata;
    }
    function requireAsyncModule(id) {
      var promise = __turbopack_require__(id);
      if ("function" !== typeof promise.then || "fulfilled" === promise.status)
        return null;
      promise.then(
        function (value) {
          promise.status = "fulfilled";
          promise.value = value;
        },
        function (reason) {
          promise.status = "rejected";
          promise.reason = reason;
        }
      );
      return promise;
    }
    function ignoreReject() {}
    function preloadModule(metadata) {
      for (
        var chunks = metadata[1], promises = [], i = 0;
        i < chunks.length;
        i++
      ) {
        var chunkFilename = chunks[i],
          entry = chunkCache.get(chunkFilename);
        if (void 0 === entry) {
          entry = __turbopack_load__(chunkFilename);
          promises.push(entry);
          var resolve = chunkCache.set.bind(chunkCache, chunkFilename, null);
          entry.then(resolve, ignoreReject);
          chunkCache.set(chunkFilename, entry);
        } else null !== entry && promises.push(entry);
      }
      return 4 === metadata.length
        ? 0 === promises.length
          ? requireAsyncModule(metadata[0])
          : Promise.all(promises).then(function () {
              return requireAsyncModule(metadata[0]);
            })
        : 0 < promises.length
          ? Promise.all(promises)
          : null;
    }
    function getIteratorFn(maybeIterable) {
      if (null === maybeIterable || "object" !== typeof maybeIterable)
        return null;
      maybeIterable =
        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
        maybeIterable["@@iterator"];
      return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function isObjectPrototype(object) {
      if (!object) return !1;
      var ObjectPrototype = Object.prototype;
      if (object === ObjectPrototype) return !0;
      if (getPrototypeOf(object)) return !1;
      object = Object.getOwnPropertyNames(object);
      for (var i = 0; i < object.length; i++)
        if (!(object[i] in ObjectPrototype)) return !1;
      return !0;
    }
    function isSimpleObject(object) {
      if (!isObjectPrototype(getPrototypeOf(object))) return !1;
      for (
        var names = Object.getOwnPropertyNames(object), i = 0;
        i < names.length;
        i++
      ) {
        var descriptor = Object.getOwnPropertyDescriptor(object, names[i]);
        if (
          !descriptor ||
          (!descriptor.enumerable &&
            (("key" !== names[i] && "ref" !== names[i]) ||
              "function" !== typeof descriptor.get))
        )
          return !1;
      }
      return !0;
    }
    function objectName(object) {
      return Object.prototype.toString
        .call(object)
        .replace(/^\[object (.*)\]$/, function (m, p0) {
          return p0;
        });
    }
    function describeKeyForErrorMessage(key) {
      var encodedKey = JSON.stringify(key);
      return '"' + key + '"' === encodedKey ? key : encodedKey;
    }
    function describeValueForErrorMessage(value) {
      switch (typeof value) {
        case "string":
          return JSON.stringify(
            10 >= value.length ? value : value.slice(0, 10) + "..."
          );
        case "object":
          if (isArrayImpl(value)) return "[...]";
          if (null !== value && value.$$typeof === CLIENT_REFERENCE_TAG)
            return "client";
          value = objectName(value);
          return "Object" === value ? "{...}" : value;
        case "function":
          return value.$$typeof === CLIENT_REFERENCE_TAG
            ? "client"
            : (value = value.displayName || value.name)
              ? "function " + value
              : "function";
        default:
          return String(value);
      }
    }
    function describeElementType(type) {
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type)
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeElementType(type.render);
          case REACT_MEMO_TYPE:
            return describeElementType(type.type);
          case REACT_LAZY_TYPE:
            var payload = type._payload;
            type = type._init;
            try {
              return describeElementType(type(payload));
            } catch (x) {}
        }
      return "";
    }
    function describeObjectForErrorMessage(objectOrArray, expandedName) {
      var objKind = objectName(objectOrArray);
      if ("Object" !== objKind && "Array" !== objKind) return objKind;
      var start = -1,
        length = 0;
      if (isArrayImpl(objectOrArray))
        if (jsxChildrenParents.has(objectOrArray)) {
          var type = jsxChildrenParents.get(objectOrArray);
          objKind = "<" + describeElementType(type) + ">";
          for (var i = 0; i < objectOrArray.length; i++) {
            var value = objectOrArray[i];
            value =
              "string" === typeof value
                ? value
                : "object" === typeof value && null !== value
                  ? "{" + describeObjectForErrorMessage(value) + "}"
                  : "{" + describeValueForErrorMessage(value) + "}";
            "" + i === expandedName
              ? ((start = objKind.length),
                (length = value.length),
                (objKind += value))
              : (objKind =
                  15 > value.length && 40 > objKind.length + value.length
                    ? objKind + value
                    : objKind + "{...}");
          }
          objKind += "</" + describeElementType(type) + ">";
        } else {
          objKind = "[";
          for (type = 0; type < objectOrArray.length; type++)
            0 < type && (objKind += ", "),
              (i = objectOrArray[type]),
              (i =
                "object" === typeof i && null !== i
                  ? describeObjectForErrorMessage(i)
                  : describeValueForErrorMessage(i)),
              "" + type === expandedName
                ? ((start = objKind.length),
                  (length = i.length),
                  (objKind += i))
                : (objKind =
                    10 > i.length && 40 > objKind.length + i.length
                      ? objKind + i
                      : objKind + "...");
          objKind += "]";
        }
      else if (objectOrArray.$$typeof === REACT_ELEMENT_TYPE)
        objKind = "<" + describeElementType(objectOrArray.type) + "/>";
      else {
        if (objectOrArray.$$typeof === CLIENT_REFERENCE_TAG) return "client";
        if (jsxPropsParents.has(objectOrArray)) {
          objKind = jsxPropsParents.get(objectOrArray);
          objKind = "<" + (describeElementType(objKind) || "...");
          type = Object.keys(objectOrArray);
          for (i = 0; i < type.length; i++) {
            objKind += " ";
            value = type[i];
            objKind += describeKeyForErrorMessage(value) + "=";
            var _value2 = objectOrArray[value];
            var _substr2 =
              value === expandedName &&
              "object" === typeof _value2 &&
              null !== _value2
                ? describeObjectForErrorMessage(_value2)
                : describeValueForErrorMessage(_value2);
            "string" !== typeof _value2 && (_substr2 = "{" + _substr2 + "}");
            value === expandedName
              ? ((start = objKind.length),
                (length = _substr2.length),
                (objKind += _substr2))
              : (objKind =
                  10 > _substr2.length && 40 > objKind.length + _substr2.length
                    ? objKind + _substr2
                    : objKind + "...");
          }
          objKind += ">";
        } else {
          objKind = "{";
          type = Object.keys(objectOrArray);
          for (i = 0; i < type.length; i++)
            0 < i && (objKind += ", "),
              (value = type[i]),
              (objKind += describeKeyForErrorMessage(value) + ": "),
              (_value2 = objectOrArray[value]),
              (_value2 =
                "object" === typeof _value2 && null !== _value2
                  ? describeObjectForErrorMessage(_value2)
                  : describeValueForErrorMessage(_value2)),
              value === expandedName
                ? ((start = objKind.length),
                  (length = _value2.length),
                  (objKind += _value2))
                : (objKind =
                    10 > _value2.length && 40 > objKind.length + _value2.length
                      ? objKind + _value2
                      : objKind + "...");
          objKind += "}";
        }
      }
      return void 0 === expandedName
        ? objKind
        : -1 < start && 0 < length
          ? ((objectOrArray = " ".repeat(start) + "^".repeat(length)),
            "\n  " + objKind + "\n  " + objectOrArray)
          : "\n  " + objKind;
    }
    function serializeNumber(number) {
      return Number.isFinite(number)
        ? 0 === number && -Infinity === 1 / number
          ? "$-0"
          : number
        : Infinity === number
          ? "$Infinity"
          : -Infinity === number
            ? "$-Infinity"
            : "$NaN";
    }
    function processReply(
      root,
      formFieldPrefix,
      temporaryReferences,
      resolve,
      reject
    ) {
      function serializeTypedArray(tag, typedArray) {
        typedArray = new Blob([
          new Uint8Array(
            typedArray.buffer,
            typedArray.byteOffset,
            typedArray.byteLength
          )
        ]);
        var blobId = nextPartId++;
        null === formData && (formData = new FormData());
        formData.append(formFieldPrefix + blobId, typedArray);
        return "$" + tag + blobId.toString(16);
      }
      function serializeBinaryReader(reader) {
        function progress(entry) {
          entry.done
            ? ((entry = nextPartId++),
              data.append(formFieldPrefix + entry, new Blob(buffer)),
              data.append(
                formFieldPrefix + streamId,
                '"$o' + entry.toString(16) + '"'
              ),
              data.append(formFieldPrefix + streamId, "C"),
              pendingParts--,
              0 === pendingParts && resolve(data))
            : (buffer.push(entry.value),
              reader.read(new Uint8Array(1024)).then(progress, reject));
        }
        null === formData && (formData = new FormData());
        var data = formData;
        pendingParts++;
        var streamId = nextPartId++,
          buffer = [];
        reader.read(new Uint8Array(1024)).then(progress, reject);
        return "$r" + streamId.toString(16);
      }
      function serializeReader(reader) {
        function progress(entry) {
          if (entry.done)
            data.append(formFieldPrefix + streamId, "C"),
              pendingParts--,
              0 === pendingParts && resolve(data);
          else
            try {
              var partJSON = JSON.stringify(entry.value, resolveToJSON);
              data.append(formFieldPrefix + streamId, partJSON);
              reader.read().then(progress, reject);
            } catch (x) {
              reject(x);
            }
        }
        null === formData && (formData = new FormData());
        var data = formData;
        pendingParts++;
        var streamId = nextPartId++;
        reader.read().then(progress, reject);
        return "$R" + streamId.toString(16);
      }
      function serializeReadableStream(stream) {
        try {
          var binaryReader = stream.getReader({ mode: "byob" });
        } catch (x) {
          return serializeReader(stream.getReader());
        }
        return serializeBinaryReader(binaryReader);
      }
      function serializeAsyncIterable(iterable, iterator) {
        function progress(entry) {
          if (entry.done) {
            if (void 0 === entry.value)
              data.append(formFieldPrefix + streamId, "C");
            else
              try {
                var partJSON = JSON.stringify(entry.value, resolveToJSON);
                data.append(formFieldPrefix + streamId, "C" + partJSON);
              } catch (x) {
                reject(x);
                return;
              }
            pendingParts--;
            0 === pendingParts && resolve(data);
          } else
            try {
              var _partJSON = JSON.stringify(entry.value, resolveToJSON);
              data.append(formFieldPrefix + streamId, _partJSON);
              iterator.next().then(progress, reject);
            } catch (x$0) {
              reject(x$0);
            }
        }
        null === formData && (formData = new FormData());
        var data = formData;
        pendingParts++;
        var streamId = nextPartId++;
        iterable = iterable === iterator;
        iterator.next().then(progress, reject);
        return "$" + (iterable ? "x" : "X") + streamId.toString(16);
      }
      function resolveToJSON(key, value) {
        var originalValue = this[key];
        "object" !== typeof originalValue ||
          originalValue === value ||
          originalValue instanceof Date ||
          ("Object" !== objectName(originalValue)
            ? console.error(
                "Only plain objects can be passed to Server Functions from the Client. %s objects are not supported.%s",
                objectName(originalValue),
                describeObjectForErrorMessage(this, key)
              )
            : console.error(
                "Only plain objects can be passed to Server Functions from the Client. Objects with toJSON methods are not supported. Convert it manually to a simple value before passing it to props.%s",
                describeObjectForErrorMessage(this, key)
              ));
        if (null === value) return null;
        if ("object" === typeof value) {
          switch (value.$$typeof) {
            case REACT_ELEMENT_TYPE:
              if (void 0 !== temporaryReferences && -1 === key.indexOf(":")) {
                var parentReference = writtenObjects.get(this);
                if (void 0 !== parentReference)
                  return (
                    temporaryReferences.set(parentReference + ":" + key, value),
                    "$T"
                  );
              }
              throw Error(
                "React Element cannot be passed to Server Functions from the Client without a temporary reference set. Pass a TemporaryReferenceSet to the options." +
                  describeObjectForErrorMessage(this, key)
              );
            case REACT_LAZY_TYPE:
              originalValue = value._payload;
              var init = value._init;
              null === formData && (formData = new FormData());
              pendingParts++;
              try {
                parentReference = init(originalValue);
                var lazyId = nextPartId++,
                  partJSON = serializeModel(parentReference, lazyId);
                formData.append(formFieldPrefix + lazyId, partJSON);
                return "$" + lazyId.toString(16);
              } catch (x) {
                if (
                  "object" === typeof x &&
                  null !== x &&
                  "function" === typeof x.then
                ) {
                  pendingParts++;
                  var _lazyId = nextPartId++;
                  parentReference = function () {
                    try {
                      var _partJSON2 = serializeModel(value, _lazyId),
                        _data = formData;
                      _data.append(formFieldPrefix + _lazyId, _partJSON2);
                      pendingParts--;
                      0 === pendingParts && resolve(_data);
                    } catch (reason) {
                      reject(reason);
                    }
                  };
                  x.then(parentReference, parentReference);
                  return "$" + _lazyId.toString(16);
                }
                reject(x);
                return null;
              } finally {
                pendingParts--;
              }
          }
          if ("function" === typeof value.then) {
            null === formData && (formData = new FormData());
            pendingParts++;
            var promiseId = nextPartId++;
            value.then(function (partValue) {
              try {
                var _partJSON3 = serializeModel(partValue, promiseId);
                partValue = formData;
                partValue.append(formFieldPrefix + promiseId, _partJSON3);
                pendingParts--;
                0 === pendingParts && resolve(partValue);
              } catch (reason) {
                reject(reason);
              }
            }, reject);
            return "$@" + promiseId.toString(16);
          }
          parentReference = writtenObjects.get(value);
          if (void 0 !== parentReference)
            if (modelRoot === value) modelRoot = null;
            else return parentReference;
          else
            -1 === key.indexOf(":") &&
              ((parentReference = writtenObjects.get(this)),
              void 0 !== parentReference &&
                ((parentReference = parentReference + ":" + key),
                writtenObjects.set(value, parentReference),
                void 0 !== temporaryReferences &&
                  temporaryReferences.set(parentReference, value)));
          if (isArrayImpl(value)) return value;
          if (value instanceof FormData) {
            null === formData && (formData = new FormData());
            var _data3 = formData;
            key = nextPartId++;
            var prefix = formFieldPrefix + key + "_";
            value.forEach(function (originalValue, originalKey) {
              _data3.append(prefix + originalKey, originalValue);
            });
            return "$K" + key.toString(16);
          }
          if (value instanceof Map)
            return (
              (key = nextPartId++),
              (parentReference = serializeModel(Array.from(value), key)),
              null === formData && (formData = new FormData()),
              formData.append(formFieldPrefix + key, parentReference),
              "$Q" + key.toString(16)
            );
          if (value instanceof Set)
            return (
              (key = nextPartId++),
              (parentReference = serializeModel(Array.from(value), key)),
              null === formData && (formData = new FormData()),
              formData.append(formFieldPrefix + key, parentReference),
              "$W" + key.toString(16)
            );
          if (value instanceof ArrayBuffer)
            return (
              (key = new Blob([value])),
              (parentReference = nextPartId++),
              null === formData && (formData = new FormData()),
              formData.append(formFieldPrefix + parentReference, key),
              "$A" + parentReference.toString(16)
            );
          if (value instanceof Int8Array)
            return serializeTypedArray("O", value);
          if (value instanceof Uint8Array)
            return serializeTypedArray("o", value);
          if (value instanceof Uint8ClampedArray)
            return serializeTypedArray("U", value);
          if (value instanceof Int16Array)
            return serializeTypedArray("S", value);
          if (value instanceof Uint16Array)
            return serializeTypedArray("s", value);
          if (value instanceof Int32Array)
            return serializeTypedArray("L", value);
          if (value instanceof Uint32Array)
            return serializeTypedArray("l", value);
          if (value instanceof Float32Array)
            return serializeTypedArray("G", value);
          if (value instanceof Float64Array)
            return serializeTypedArray("g", value);
          if (value instanceof BigInt64Array)
            return serializeTypedArray("M", value);
          if (value instanceof BigUint64Array)
            return serializeTypedArray("m", value);
          if (value instanceof DataView) return serializeTypedArray("V", value);
          if ("function" === typeof Blob && value instanceof Blob)
            return (
              null === formData && (formData = new FormData()),
              (key = nextPartId++),
              formData.append(formFieldPrefix + key, value),
              "$B" + key.toString(16)
            );
          if ((parentReference = getIteratorFn(value)))
            return (
              (parentReference = parentReference.call(value)),
              parentReference === value
                ? ((key = nextPartId++),
                  (parentReference = serializeModel(
                    Array.from(parentReference),
                    key
                  )),
                  null === formData && (formData = new FormData()),
                  formData.append(formFieldPrefix + key, parentReference),
                  "$i" + key.toString(16))
                : Array.from(parentReference)
            );
          if (
            "function" === typeof ReadableStream &&
            value instanceof ReadableStream
          )
            return serializeReadableStream(value);
          parentReference = value[ASYNC_ITERATOR];
          if ("function" === typeof parentReference)
            return serializeAsyncIterable(value, parentReference.call(value));
          parentReference = getPrototypeOf(value);
          if (
            parentReference !== ObjectPrototype &&
            (null === parentReference ||
              null !== getPrototypeOf(parentReference))
          ) {
            if (void 0 === temporaryReferences)
              throw Error(
                "Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported." +
                  describeObjectForErrorMessage(this, key)
              );
            return "$T";
          }
          value.$$typeof === REACT_CONTEXT_TYPE
            ? console.error(
                "React Context Providers cannot be passed to Server Functions from the Client.%s",
                describeObjectForErrorMessage(this, key)
              )
            : "Object" !== objectName(value)
              ? console.error(
                  "Only plain objects can be passed to Server Functions from the Client. %s objects are not supported.%s",
                  objectName(value),
                  describeObjectForErrorMessage(this, key)
                )
              : isSimpleObject(value)
                ? Object.getOwnPropertySymbols &&
                  ((parentReference = Object.getOwnPropertySymbols(value)),
                  0 < parentReference.length &&
                    console.error(
                      "Only plain objects can be passed to Server Functions from the Client. Objects with symbol properties like %s are not supported.%s",
                      parentReference[0].description,
                      describeObjectForErrorMessage(this, key)
                    ))
                : console.error(
                    "Only plain objects can be passed to Server Functions from the Client. Classes or other objects with methods are not supported.%s",
                    describeObjectForErrorMessage(this, key)
                  );
          return value;
        }
        if ("string" === typeof value) {
          if ("Z" === value[value.length - 1] && this[key] instanceof Date)
            return "$D" + value;
          key = "$" === value[0] ? "$" + value : value;
          return key;
        }
        if ("boolean" === typeof value) return value;
        if ("number" === typeof value) return serializeNumber(value);
        if ("undefined" === typeof value) return "$undefined";
        if ("function" === typeof value) {
          parentReference = knownServerReferences.get(value);
          if (void 0 !== parentReference)
            return (
              (key = JSON.stringify(parentReference, resolveToJSON)),
              null === formData && (formData = new FormData()),
              (parentReference = nextPartId++),
              formData.set(formFieldPrefix + parentReference, key),
              "$F" + parentReference.toString(16)
            );
          if (
            void 0 !== temporaryReferences &&
            -1 === key.indexOf(":") &&
            ((parentReference = writtenObjects.get(this)),
            void 0 !== parentReference)
          )
            return (
              temporaryReferences.set(parentReference + ":" + key, value), "$T"
            );
          throw Error(
            "Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again."
          );
        }
        if ("symbol" === typeof value) {
          if (
            void 0 !== temporaryReferences &&
            -1 === key.indexOf(":") &&
            ((parentReference = writtenObjects.get(this)),
            void 0 !== parentReference)
          )
            return (
              temporaryReferences.set(parentReference + ":" + key, value), "$T"
            );
          throw Error(
            "Symbols cannot be passed to a Server Function without a temporary reference set. Pass a TemporaryReferenceSet to the options." +
              describeObjectForErrorMessage(this, key)
          );
        }
        if ("bigint" === typeof value) return "$n" + value.toString(10);
        throw Error(
          "Type " +
            typeof value +
            " is not supported as an argument to a Server Function."
        );
      }
      function serializeModel(model, id) {
        "object" === typeof model &&
          null !== model &&
          ((id = "$" + id.toString(16)),
          writtenObjects.set(model, id),
          void 0 !== temporaryReferences && temporaryReferences.set(id, model));
        modelRoot = model;
        return JSON.stringify(model, resolveToJSON);
      }
      var nextPartId = 1,
        pendingParts = 0,
        formData = null,
        writtenObjects = new WeakMap(),
        modelRoot = root;
      root = serializeModel(root, 0);
      null === formData
        ? resolve(root)
        : (formData.set(formFieldPrefix + "0", root),
          0 === pendingParts && resolve(formData));
    }
    function registerServerReference(proxy, reference) {
      knownServerReferences.set(proxy, reference);
    }
    function getComponentNameFromType(type) {
      if (null == type) return null;
      if ("function" === typeof type)
        return type.$$typeof === REACT_CLIENT_REFERENCE
          ? null
          : type.displayName || type.name || null;
      if ("string" === typeof type) return type;
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if ("object" === typeof type)
        switch (
          ("number" === typeof type.tag &&
            console.error(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          type.$$typeof)
        ) {
          case REACT_CONTEXT_TYPE:
            return (type.displayName || "Context") + ".Provider";
          case REACT_CONSUMER_TYPE:
            return (type._context.displayName || "Context") + ".Consumer";
          case REACT_FORWARD_REF_TYPE:
            var innerType = type.render;
            type = type.displayName;
            type ||
              ((type = innerType.displayName || innerType.name || ""),
              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
            return type;
          case REACT_MEMO_TYPE:
            return (
              (innerType = type.displayName || null),
              null !== innerType
                ? innerType
                : getComponentNameFromType(type.type) || "Memo"
            );
          case REACT_LAZY_TYPE:
            innerType = type._payload;
            type = type._init;
            try {
              return getComponentNameFromType(type(innerType));
            } catch (x) {}
        }
      return null;
    }
    function Chunk(status, value, reason, response) {
      this.status = status;
      this.value = value;
      this.reason = reason;
      this._response = response;
      this._debugInfo = null;
    }
    function readChunk(chunk) {
      switch (chunk.status) {
        case "resolved_model":
          initializeModelChunk(chunk);
          break;
        case "resolved_module":
          initializeModuleChunk(chunk);
      }
      switch (chunk.status) {
        case "fulfilled":
          return chunk.value;
        case "pending":
        case "blocked":
          throw chunk;
        default:
          throw chunk.reason;
      }
    }
    function createPendingChunk(response) {
      return new Chunk("pending", null, null, response);
    }
    function wakeChunk(listeners, value) {
      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(value);
    }
    function wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners) {
      switch (chunk.status) {
        case "fulfilled":
          wakeChunk(resolveListeners, chunk.value);
          break;
        case "pending":
        case "blocked":
          if (chunk.value)
            for (var i = 0; i < resolveListeners.length; i++)
              chunk.value.push(resolveListeners[i]);
          else chunk.value = resolveListeners;
          if (chunk.reason) {
            if (rejectListeners)
              for (
                resolveListeners = 0;
                resolveListeners < rejectListeners.length;
                resolveListeners++
              )
                chunk.reason.push(rejectListeners[resolveListeners]);
          } else chunk.reason = rejectListeners;
          break;
        case "rejected":
          rejectListeners && wakeChunk(rejectListeners, chunk.reason);
      }
    }
    function triggerErrorOnChunk(chunk, error) {
      if ("pending" !== chunk.status && "blocked" !== chunk.status)
        chunk.reason.error(error);
      else {
        var listeners = chunk.reason;
        chunk.status = "rejected";
        chunk.reason = error;
        null !== listeners && wakeChunk(listeners, error);
      }
    }
    function createResolvedIteratorResultChunk(response, value, done) {
      return new Chunk(
        "resolved_model",
        (done ? '{"done":true,"value":' : '{"done":false,"value":') +
          value +
          "}",
        null,
        response
      );
    }
    function resolveIteratorResultChunk(chunk, value, done) {
      resolveModelChunk(
        chunk,
        (done ? '{"done":true,"value":' : '{"done":false,"value":') +
          value +
          "}"
      );
    }
    function resolveModelChunk(chunk, value) {
      if ("pending" !== chunk.status) chunk.reason.enqueueModel(value);
      else {
        var resolveListeners = chunk.value,
          rejectListeners = chunk.reason;
        chunk.status = "resolved_model";
        chunk.value = value;
        null !== resolveListeners &&
          (initializeModelChunk(chunk),
          wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
      }
    }
    function resolveModuleChunk(chunk, value) {
      if ("pending" === chunk.status || "blocked" === chunk.status) {
        var resolveListeners = chunk.value,
          rejectListeners = chunk.reason;
        chunk.status = "resolved_module";
        chunk.value = value;
        null !== resolveListeners &&
          (initializeModuleChunk(chunk),
          wakeChunkIfInitialized(chunk, resolveListeners, rejectListeners));
      }
    }
    function initializeModelChunk(chunk) {
      var prevHandler = initializingHandler;
      initializingHandler = null;
      var resolvedModel = chunk.value;
      chunk.status = "blocked";
      chunk.value = null;
      chunk.reason = null;
      try {
        var value = JSON.parse(resolvedModel, chunk._response._fromJSON),
          resolveListeners = chunk.value;
        null !== resolveListeners &&
          ((chunk.value = null),
          (chunk.reason = null),
          wakeChunk(resolveListeners, value));
        if (null !== initializingHandler) {
          if (initializingHandler.errored) throw initializingHandler.value;
          if (0 < initializingHandler.deps) {
            initializingHandler.value = value;
            initializingHandler.chunk = chunk;
            return;
          }
        }
        chunk.status = "fulfilled";
        chunk.value = value;
      } catch (error) {
        (chunk.status = "rejected"), (chunk.reason = error);
      } finally {
        initializingHandler = prevHandler;
      }
    }
    function initializeModuleChunk(chunk) {
      try {
        var metadata = chunk.value,
          moduleExports = __turbopack_require__(metadata[0]);
        if (4 === metadata.length && "function" === typeof moduleExports.then)
          if ("fulfilled" === moduleExports.status)
            moduleExports = moduleExports.value;
          else throw moduleExports.reason;
        var value =
          "*" === metadata[2]
            ? moduleExports
            : "" === metadata[2]
              ? moduleExports.__esModule
                ? moduleExports.default
                : moduleExports
              : moduleExports[metadata[2]];
        chunk.status = "fulfilled";
        chunk.value = value;
      } catch (error) {
        (chunk.status = "rejected"), (chunk.reason = error);
      }
    }
    function reportGlobalError(response, error) {
      response._chunks.forEach(function (chunk) {
        "pending" === chunk.status && triggerErrorOnChunk(chunk, error);
      });
    }
    function nullRefGetter() {
      return null;
    }
    function createLazyChunkWrapper(chunk) {
      var lazyType = {
        $$typeof: REACT_LAZY_TYPE,
        _payload: chunk,
        _init: readChunk
      };
      chunk = chunk._debugInfo || (chunk._debugInfo = []);
      lazyType._debugInfo = chunk;
      return lazyType;
    }
    function getChunk(response, id) {
      var chunks = response._chunks,
        chunk = chunks.get(id);
      chunk || ((chunk = createPendingChunk(response)), chunks.set(id, chunk));
      return chunk;
    }
    function waitForReference(
      referencedChunk,
      parentObject,
      key,
      response,
      map,
      path
    ) {
      function fulfill(value) {
        for (var i = 1; i < path.length; i++) {
          for (; value.$$typeof === REACT_LAZY_TYPE; )
            if (((value = value._payload), value === handler.chunk))
              value = handler.value;
            else if ("fulfilled" === value.status) value = value.value;
            else {
              path.splice(0, i - 1);
              value.then(fulfill, reject);
              return;
            }
          value = value[path[i]];
        }
        parentObject[key] = map(response, value);
        "" === key &&
          null === handler.value &&
          (handler.value = parentObject[key]);
        parentObject[0] === REACT_ELEMENT_TYPE &&
          "3" === key &&
          "object" === typeof handler.value &&
          null !== handler.value &&
          handler.value.$$typeof === REACT_ELEMENT_TYPE &&
          null === handler.value.props &&
          (handler.value.props = parentObject[key]);
        handler.deps--;
        0 === handler.deps &&
          ((i = handler.chunk),
          null !== i &&
            "blocked" === i.status &&
            ((value = i.value),
            (i.status = "fulfilled"),
            (i.value = handler.value),
            null !== value && wakeChunk(value, handler.value)));
      }
      function reject(error) {
        if (!handler.errored) {
          var blockedValue = handler.value;
          handler.errored = !0;
          handler.value = error;
          var chunk = handler.chunk;
          null !== chunk &&
            "blocked" === chunk.status &&
            ("object" === typeof blockedValue &&
              null !== blockedValue &&
              blockedValue.$$typeof === REACT_ELEMENT_TYPE &&
              ((blockedValue = {
                name: getComponentNameFromType(blockedValue.type) || "",
                owner: blockedValue._owner
              }),
              (chunk._debugInfo || (chunk._debugInfo = [])).push(blockedValue)),
            triggerErrorOnChunk(chunk, error));
        }
      }
      if (initializingHandler) {
        var handler = initializingHandler;
        handler.deps++;
      } else
        handler = initializingHandler = {
          parent: null,
          chunk: null,
          value: null,
          deps: 1,
          errored: !1
        };
      referencedChunk.then(fulfill, reject);
      return null;
    }
    function createServerReferenceProxy(response, metaData) {
      function proxy() {
        var args = Array.prototype.slice.call(arguments),
          p = metaData.bound;
        return p
          ? "fulfilled" === p.status
            ? callServer(metaData.id, p.value.concat(args))
            : Promise.resolve(p).then(function (bound) {
                return callServer(metaData.id, bound.concat(args));
              })
          : callServer(metaData.id, args);
      }
      var callServer = response._callServer;
      knownServerReferences.set(proxy, metaData);
      return proxy;
    }
    function getOutlinedModel(response, reference, parentObject, key, map) {
      reference = reference.split(":");
      var id = parseInt(reference[0], 16);
      id = getChunk(response, id);
      switch (id.status) {
        case "resolved_model":
          initializeModelChunk(id);
          break;
        case "resolved_module":
          initializeModuleChunk(id);
      }
      switch (id.status) {
        case "fulfilled":
          for (var value = id.value, i = 1; i < reference.length; i++)
            if (
              ((value = value[reference[i]]),
              value.$$typeof === REACT_LAZY_TYPE)
            )
              if (((value = value._payload), "fulfilled" === value.status))
                value = value.value;
              else
                return waitForReference(
                  value,
                  parentObject,
                  key,
                  response,
                  map,
                  reference.slice(i)
                );
          response = map(response, value);
          id._debugInfo &&
            ("object" !== typeof response ||
              null === response ||
              (!isArrayImpl(response) &&
                "function" !== typeof response[ASYNC_ITERATOR] &&
                response.$$typeof !== REACT_ELEMENT_TYPE) ||
              response._debugInfo ||
              Object.defineProperty(response, "_debugInfo", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: id._debugInfo
              }));
          return response;
        case "pending":
        case "blocked":
          return waitForReference(
            id,
            parentObject,
            key,
            response,
            map,
            reference
          );
        default:
          return (
            initializingHandler
              ? ((initializingHandler.errored = !0),
                (initializingHandler.value = id.reason))
              : (initializingHandler = {
                  parent: null,
                  chunk: null,
                  value: id.reason,
                  deps: 0,
                  errored: !0
                }),
            null
          );
      }
    }
    function createMap(response, model) {
      return new Map(model);
    }
    function createSet(response, model) {
      return new Set(model);
    }
    function createBlob(response, model) {
      return new Blob(model.slice(1), { type: model[0] });
    }
    function createFormData(response, model) {
      response = new FormData();
      for (var i = 0; i < model.length; i++)
        response.append(model[i][0], model[i][1]);
      return response;
    }
    function extractIterator(response, model) {
      return model[Symbol.iterator]();
    }
    function createModel(response, model) {
      return model;
    }
    function parseModelString(response, parentObject, key, value) {
      if ("$" === value[0]) {
        if ("$" === value)
          return (
            null !== initializingHandler &&
              "0" === key &&
              (initializingHandler = {
                parent: initializingHandler,
                chunk: null,
                value: null,
                deps: 0,
                errored: !1
              }),
            REACT_ELEMENT_TYPE
          );
        switch (value[1]) {
          case "$":
            return value.slice(1);
          case "L":
            return (
              (parentObject = parseInt(value.slice(2), 16)),
              (response = getChunk(response, parentObject)),
              createLazyChunkWrapper(response)
            );
          case "@":
            if (2 === value.length) return new Promise(function () {});
            parentObject = parseInt(value.slice(2), 16);
            return getChunk(response, parentObject);
          case "S":
            return Symbol.for(value.slice(2));
          case "F":
            return (
              (value = value.slice(2)),
              getOutlinedModel(
                response,
                value,
                parentObject,
                key,
                createServerReferenceProxy
              )
            );
          case "T":
            parentObject = "$" + value.slice(2);
            response = response._tempRefs;
            if (null == response)
              throw Error(
                "Missing a temporary reference set but the RSC response returned a temporary reference. Pass a temporaryReference option with the set that was used with the reply."
              );
            return response.get(parentObject);
          case "Q":
            return (
              (value = value.slice(2)),
              getOutlinedModel(response, value, parentObject, key, createMap)
            );
          case "W":
            return (
              (value = value.slice(2)),
              getOutlinedModel(response, value, parentObject, key, createSet)
            );
          case "B":
            return (
              (value = value.slice(2)),
              getOutlinedModel(response, value, parentObject, key, createBlob)
            );
          case "K":
            return (
              (value = value.slice(2)),
              getOutlinedModel(
                response,
                value,
                parentObject,
                key,
                createFormData
              )
            );
          case "i":
            return (
              (value = value.slice(2)),
              getOutlinedModel(
                response,
                value,
                parentObject,
                key,
                extractIterator
              )
            );
          case "I":
            return Infinity;
          case "-":
            return "$-0" === value ? -0 : -Infinity;
          case "N":
            return NaN;
          case "u":
            return;
          case "D":
            return new Date(Date.parse(value.slice(2)));
          case "n":
            return BigInt(value.slice(2));
          case "E":
            try {
              return (0, eval)(value.slice(2));
            } catch (x) {
              return function () {};
            }
          case "Y":
            return (
              Object.defineProperty(parentObject, key, {
                get: function () {
                  throw "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.";
                },
                enumerable: !0,
                configurable: !1
              }),
              null
            );
          default:
            return (
              (value = value.slice(1)),
              getOutlinedModel(response, value, parentObject, key, createModel)
            );
        }
      }
      return value;
    }
    function missingCall() {
      throw Error(
        'Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.'
      );
    }
    function ResponseInstance(
      bundlerConfig,
      moduleLoading,
      callServer,
      encodeFormAction,
      nonce,
      temporaryReferences,
      findSourceMapURL,
      replayConsole,
      environmentName
    ) {
      var chunks = new Map();
      this._bundlerConfig = bundlerConfig;
      this._moduleLoading = moduleLoading;
      this._callServer = void 0 !== callServer ? callServer : missingCall;
      this._encodeFormAction = encodeFormAction;
      this._nonce = nonce;
      this._chunks = chunks;
      this._stringDecoder = new TextDecoder();
      this._fromJSON = null;
      this._rowLength = this._rowTag = this._rowID = this._rowState = 0;
      this._buffer = [];
      this._tempRefs = temporaryReferences;
      this._debugFindSourceMapURL = findSourceMapURL;
      this._replayConsole = replayConsole;
      this._rootEnvironmentName =
        void 0 === environmentName ? "Server" : environmentName;
      this._fromJSON = createFromJSONCallback(this);
    }
    function resolveBuffer(response, id, buffer) {
      var chunks = response._chunks,
        chunk = chunks.get(id);
      chunk && "pending" !== chunk.status
        ? chunk.reason.enqueueValue(buffer)
        : chunks.set(id, new Chunk("fulfilled", buffer, null, response));
    }
    function resolveModule(response, id, model) {
      var chunks = response._chunks,
        chunk = chunks.get(id);
      model = JSON.parse(model, response._fromJSON);
      var clientReference = resolveClientReference(
        response._bundlerConfig,
        model
      );
      if ((model = preloadModule(clientReference))) {
        if (chunk) {
          var blockedChunk = chunk;
          blockedChunk.status = "blocked";
        } else
          (blockedChunk = new Chunk("blocked", null, null, response)),
            chunks.set(id, blockedChunk);
        model.then(
          function () {
            return resolveModuleChunk(blockedChunk, clientReference);
          },
          function (error) {
            return triggerErrorOnChunk(blockedChunk, error);
          }
        );
      } else
        chunk
          ? resolveModuleChunk(chunk, clientReference)
          : chunks.set(
              id,
              new Chunk("resolved_module", clientReference, null, response)
            );
    }
    function resolveStream(response, id, stream, controller) {
      var chunks = response._chunks,
        chunk = chunks.get(id);
      chunk
        ? "pending" === chunk.status &&
          ((response = chunk.value),
          (chunk.status = "fulfilled"),
          (chunk.value = stream),
          (chunk.reason = controller),
          null !== response && wakeChunk(response, chunk.value))
        : chunks.set(id, new Chunk("fulfilled", stream, controller, response));
    }
    function startReadableStream(response, id, type) {
      var controller = null;
      type = new ReadableStream({
        type: type,
        start: function (c) {
          controller = c;
        }
      });
      var previousBlockedChunk = null;
      resolveStream(response, id, type, {
        enqueueValue: function (value) {
          null === previousBlockedChunk
            ? controller.enqueue(value)
            : previousBlockedChunk.then(function () {
                controller.enqueue(value);
              });
        },
        enqueueModel: function (json) {
          if (null === previousBlockedChunk) {
            var chunk = new Chunk("resolved_model", json, null, response);
            initializeModelChunk(chunk);
            "fulfilled" === chunk.status
              ? controller.enqueue(chunk.value)
              : (chunk.then(
                  function (v) {
                    return controller.enqueue(v);
                  },
                  function (e) {
                    return controller.error(e);
                  }
                ),
                (previousBlockedChunk = chunk));
          } else {
            chunk = previousBlockedChunk;
            var _chunk3 = createPendingChunk(response);
            _chunk3.then(
              function (v) {
                return controller.enqueue(v);
              },
              function (e) {
                return controller.error(e);
              }
            );
            previousBlockedChunk = _chunk3;
            chunk.then(function () {
              previousBlockedChunk === _chunk3 && (previousBlockedChunk = null);
              resolveModelChunk(_chunk3, json);
            });
          }
        },
        close: function () {
          if (null === previousBlockedChunk) controller.close();
          else {
            var blockedChunk = previousBlockedChunk;
            previousBlockedChunk = null;
            blockedChunk.then(function () {
              return controller.close();
            });
          }
        },
        error: function (error) {
          if (null === previousBlockedChunk) controller.error(error);
          else {
            var blockedChunk = previousBlockedChunk;
            previousBlockedChunk = null;
            blockedChunk.then(function () {
              return controller.error(error);
            });
          }
        }
      });
    }
    function asyncIterator() {
      return this;
    }
    function createIterator(next) {
      next = { next: next };
      next[ASYNC_ITERATOR] = asyncIterator;
      return next;
    }
    function startAsyncIterable(response, id, iterator) {
      var buffer = [],
        closed = !1,
        nextWriteIndex = 0,
        iterable = _defineProperty({}, ASYNC_ITERATOR, function () {
          var nextReadIndex = 0;
          return createIterator(function (arg) {
            if (void 0 !== arg)
              throw Error(
                "Values cannot be passed to next() of AsyncIterables passed to Client Components."
              );
            if (nextReadIndex === buffer.length) {
              if (closed)
                return new Chunk(
                  "fulfilled",
                  { done: !0, value: void 0 },
                  null,
                  response
                );
              buffer[nextReadIndex] = createPendingChunk(response);
            }
            return buffer[nextReadIndex++];
          });
        });
      resolveStream(
        response,
        id,
        iterator ? iterable[ASYNC_ITERATOR]() : iterable,
        {
          enqueueValue: function (value) {
            if (nextWriteIndex === buffer.length)
              buffer[nextWriteIndex] = new Chunk(
                "fulfilled",
                { done: !1, value: value },
                null,
                response
              );
            else {
              var chunk = buffer[nextWriteIndex],
                resolveListeners = chunk.value,
                rejectListeners = chunk.reason;
              chunk.status = "fulfilled";
              chunk.value = { done: !1, value: value };
              null !== resolveListeners &&
                wakeChunkIfInitialized(
                  chunk,
                  resolveListeners,
                  rejectListeners
                );
            }
            nextWriteIndex++;
          },
          enqueueModel: function (value) {
            nextWriteIndex === buffer.length
              ? (buffer[nextWriteIndex] = createResolvedIteratorResultChunk(
                  response,
                  value,
                  !1
                ))
              : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !1);
            nextWriteIndex++;
          },
          close: function (value) {
            closed = !0;
            nextWriteIndex === buffer.length
              ? (buffer[nextWriteIndex] = createResolvedIteratorResultChunk(
                  response,
                  value,
                  !0
                ))
              : resolveIteratorResultChunk(buffer[nextWriteIndex], value, !0);
            for (nextWriteIndex++; nextWriteIndex < buffer.length; )
              resolveIteratorResultChunk(
                buffer[nextWriteIndex++],
                '"$undefined"',
                !0
              );
          },
          error: function (error) {
            closed = !0;
            for (
              nextWriteIndex === buffer.length &&
              (buffer[nextWriteIndex] = createPendingChunk(response));
              nextWriteIndex < buffer.length;

            )
              triggerErrorOnChunk(buffer[nextWriteIndex++], error);
          }
        }
      );
    }
    function createFakeFunction(
      name,
      filename,
      sourceMap,
      line,
      col,
      environmentName
    ) {
      name || (name = "<anonymous>");
      var encodedName = JSON.stringify(name);
      1 >= line
        ? ((line = encodedName.length + 7),
          (col =
            "({" +
            encodedName +
            ":_=>" +
            " ".repeat(col < line ? 0 : col - line) +
            "_()})\n/* This module was rendered by a Server Component. Turn on Source Maps to see the server source. */"))
        : (col =
            "/* This module was rendered by a Server Component. Turn on Source Maps to see the server source. */" +
            "\n".repeat(line - 2) +
            "({" +
            encodedName +
            ":_=>\n" +
            " ".repeat(1 > col ? 0 : col - 1) +
            "_()})");
      filename.startsWith("/") && (filename = "file://" + filename);
      sourceMap
        ? ((col +=
            "\n//# sourceURL=rsc://React/" +
            encodeURIComponent(environmentName) +
            "/" +
            filename +
            "?" +
            fakeFunctionIdx++),
          (col += "\n//# sourceMappingURL=" + sourceMap))
        : filename && (col += "\n//# sourceURL=" + filename);
      try {
        var fn = (0, eval)(col)[name];
      } catch (x) {
        fn = function (_) {
          return _();
        };
      }
      return fn;
    }
    function fakeJSXCallSite() {
      return Error("react-stack-top-frame");
    }
    function initializeFakeStack(response, debugInfo) {
      void 0 === debugInfo.debugStack &&
        (null != debugInfo.stack &&
          (debugInfo.debugStack = createFakeJSXCallStackInDEV(
            response,
            debugInfo.stack,
            null == debugInfo.env ? "" : debugInfo.env
          )),
        null != debugInfo.owner &&
          initializeFakeStack(response, debugInfo.owner));
    }
    function getCurrentStackInDEV() {
      return "";
    }
    function mergeBuffer(buffer, lastChunk) {
      for (
        var l = buffer.length, byteLength = lastChunk.length, i = 0;
        i < l;
        i++
      )
        byteLength += buffer[i].byteLength;
      byteLength = new Uint8Array(byteLength);
      for (var _i2 = (i = 0); _i2 < l; _i2++) {
        var chunk = buffer[_i2];
        byteLength.set(chunk, i);
        i += chunk.byteLength;
      }
      byteLength.set(lastChunk, i);
      return byteLength;
    }
    function resolveTypedArray(
      response,
      id,
      buffer,
      lastChunk,
      constructor,
      bytesPerElement
    ) {
      buffer =
        0 === buffer.length && 0 === lastChunk.byteOffset % bytesPerElement
          ? lastChunk
          : mergeBuffer(buffer, lastChunk);
      constructor = new constructor(
        buffer.buffer,
        buffer.byteOffset,
        buffer.byteLength / bytesPerElement
      );
      resolveBuffer(response, id, constructor);
    }
    function processFullBinaryRow(response, id, tag, buffer, chunk) {
      switch (tag) {
        case 65:
          resolveBuffer(response, id, mergeBuffer(buffer, chunk).buffer);
          return;
        case 79:
          resolveTypedArray(response, id, buffer, chunk, Int8Array, 1);
          return;
        case 111:
          resolveBuffer(
            response,
            id,
            0 === buffer.length ? chunk : mergeBuffer(buffer, chunk)
          );
          return;
        case 85:
          resolveTypedArray(response, id, buffer, chunk, Uint8ClampedArray, 1);
          return;
        case 83:
          resolveTypedArray(response, id, buffer, chunk, Int16Array, 2);
          return;
        case 115:
          resolveTypedArray(response, id, buffer, chunk, Uint16Array, 2);
          return;
        case 76:
          resolveTypedArray(response, id, buffer, chunk, Int32Array, 4);
          return;
        case 108:
          resolveTypedArray(response, id, buffer, chunk, Uint32Array, 4);
          return;
        case 71:
          resolveTypedArray(response, id, buffer, chunk, Float32Array, 4);
          return;
        case 103:
          resolveTypedArray(response, id, buffer, chunk, Float64Array, 8);
          return;
        case 77:
          resolveTypedArray(response, id, buffer, chunk, BigInt64Array, 8);
          return;
        case 109:
          resolveTypedArray(response, id, buffer, chunk, BigUint64Array, 8);
          return;
        case 86:
          resolveTypedArray(response, id, buffer, chunk, DataView, 1);
          return;
      }
      for (
        var stringDecoder = response._stringDecoder, row = "", i = 0;
        i < buffer.length;
        i++
      )
        row += stringDecoder.decode(buffer[i], decoderOptions);
      buffer = row += stringDecoder.decode(chunk);
      switch (tag) {
        case 73:
          resolveModule(response, id, buffer);
          break;
        case 72:
          id = buffer[0];
          var model = buffer.slice(1);
          response = JSON.parse(model, response._fromJSON);
          model = ReactDOMSharedInternals.d;
          switch (id) {
            case "D":
              model.D(response);
              break;
            case "C":
              "string" === typeof response
                ? model.C(response)
                : model.C(response[0], response[1]);
              break;
            case "L":
              id = response[0];
              var as = response[1];
              3 === response.length
                ? model.L(id, as, response[2])
                : model.L(id, as);
              break;
            case "m":
              "string" === typeof response
                ? model.m(response)
                : model.m(response[0], response[1]);
              break;
            case "X":
              "string" === typeof response
                ? model.X(response)
                : model.X(response[0], response[1]);
              break;
            case "S":
              "string" === typeof response
                ? model.S(response)
                : model.S(
                    response[0],
                    0 === response[1] ? void 0 : response[1],
                    3 === response.length ? response[2] : void 0
                  );
              break;
            case "M":
              "string" === typeof response
                ? model.M(response)
                : model.M(response[0], response[1]);
          }
          break;
        case 69:
          tag = JSON.parse(buffer);
          as = tag.digest;
          buffer = tag.env;
          model = Error(
            tag.message ||
              "An error occurred in the Server Components render but no message was provided"
          );
          tag = tag.stack;
          chunk = model.name + ": " + model.message;
          if (tag)
            for (
              stringDecoder = 0;
              stringDecoder < tag.length;
              stringDecoder++
            ) {
              var frame = tag[stringDecoder];
              row = frame[0];
              i = frame[1];
              var line = frame[2];
              frame = frame[3];
              chunk = row
                ? chunk +
                  ("\n    at " +
                    row +
                    " (" +
                    i +
                    ":" +
                    line +
                    ":" +
                    frame +
                    ")")
                : chunk + ("\n    at " + i + ":" + line + ":" + frame);
            }
          model.stack = chunk;
          model.digest = as;
          model.environmentName = buffer;
          as = response._chunks;
          (buffer = as.get(id))
            ? triggerErrorOnChunk(buffer, model)
            : as.set(id, new Chunk("rejected", null, model, response));
          break;
        case 84:
          model = response._chunks;
          (as = model.get(id)) && "pending" !== as.status
            ? as.reason.enqueueValue(buffer)
            : model.set(id, new Chunk("fulfilled", buffer, null, response));
          break;
        case 68:
          model = JSON.parse(buffer, response._fromJSON);
          initializeFakeStack(response, model);
          response = getChunk(response, id);
          (response._debugInfo || (response._debugInfo = [])).push(model);
          break;
        case 87:
          if (response._replayConsole) {
            buffer = JSON.parse(buffer, response._fromJSON);
            response = buffer[0];
            id = buffer[3];
            buffer = buffer.slice(4);
            tag = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = getCurrentStackInDEV;
            try {
              a: {
                chunk = 0;
                switch (response) {
                  case "dir":
                  case "dirxml":
                  case "groupEnd":
                  case "table":
                    model = bind.apply(
                      console[response],
                      [console].concat(buffer)
                    );
                    break a;
                  case "assert":
                    chunk = 1;
                }
                as = buffer.slice(0);
                "string" === typeof as[chunk]
                  ? as.splice(
                      chunk,
                      1,
                      "%c%s%c " + as[chunk],
                      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
                      " " + id + " ",
                      ""
                    )
                  : as.splice(
                      chunk,
                      0,
                      "%c%s%c ",
                      "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",
                      " " + id + " ",
                      ""
                    );
                as.unshift(console);
                model = bind.apply(console[response], as);
              }
              model();
            } finally {
              ReactSharedInternals.getCurrentStack = tag;
            }
          }
          break;
        case 82:
          startReadableStream(response, id, void 0);
          break;
        case 114:
          startReadableStream(response, id, "bytes");
          break;
        case 88:
          startAsyncIterable(response, id, !1);
          break;
        case 120:
          startAsyncIterable(response, id, !0);
          break;
        case 67:
          (response = response._chunks.get(id)) &&
            "fulfilled" === response.status &&
            response.reason.close("" === buffer ? '"$undefined"' : buffer);
          break;
        default:
          (model = response._chunks),
            (as = model.get(id))
              ? resolveModelChunk(as, buffer)
              : model.set(
                  id,
                  new Chunk("resolved_model", buffer, null, response)
                );
      }
    }
    function createFromJSONCallback(response) {
      return function (key, value) {
        if ("string" === typeof value)
          return parseModelString(response, this, key, value);
        if ("object" === typeof value && null !== value) {
          if (value[0] === REACT_ELEMENT_TYPE)
            if (
              ((key = {
                $$typeof: REACT_ELEMENT_TYPE,
                type: value[1],
                key: value[2],
                props: value[3],
                _owner: value[4]
              }),
              Object.defineProperty(key, "ref", {
                enumerable: !1,
                get: nullRefGetter
              }),
              (key._store = {}),
              Object.defineProperty(key._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: 1
              }),
              Object.defineProperty(key, "_debugInfo", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: null
              }),
              null !== initializingHandler)
            ) {
              var handler = initializingHandler;
              initializingHandler = handler.parent;
              handler.errored
                ? ((value = new Chunk(
                    "rejected",
                    null,
                    handler.value,
                    response
                  )),
                  (key = {
                    name: getComponentNameFromType(key.type) || "",
                    owner: key._owner
                  }),
                  (value._debugInfo = [key]),
                  (key = createLazyChunkWrapper(value)))
                : 0 < handler.deps &&
                  ((value = new Chunk("blocked", null, null, response)),
                  (handler.value = key),
                  (handler.chunk = value),
                  (key = Object.freeze.bind(Object, key.props)),
                  value.then(key, key),
                  (key = createLazyChunkWrapper(value)));
            } else Object.freeze(key.props);
          else key = value;
          return key;
        }
        return value;
      };
    }
    function createResponseFromOptions(options) {
      return new ResponseInstance(
        null,
        null,
        options && options.callServer ? options.callServer : void 0,
        void 0,
        void 0,
        options && options.temporaryReferences
          ? options.temporaryReferences
          : void 0,
        options && options.findSourceMapURL ? options.findSourceMapURL : void 0,
        options ? !1 !== options.replayConsoleLogs : !0,
        options && options.environmentName ? options.environmentName : void 0
      );
    }
    function startReadingFromStream(response, stream) {
      function progress(_ref) {
        var value = _ref.value;
        if (_ref.done) reportGlobalError(response, Error("Connection closed."));
        else {
          var i = 0,
            rowState = response._rowState;
          _ref = response._rowID;
          for (
            var rowTag = response._rowTag,
              rowLength = response._rowLength,
              buffer = response._buffer,
              chunkLength = value.length;
            i < chunkLength;

          ) {
            var lastIdx = -1;
            switch (rowState) {
              case 0:
                lastIdx = value[i++];
                58 === lastIdx
                  ? (rowState = 1)
                  : (_ref =
                      (_ref << 4) |
                      (96 < lastIdx ? lastIdx - 87 : lastIdx - 48));
                continue;
              case 1:
                rowState = value[i];
                84 === rowState ||
                65 === rowState ||
                79 === rowState ||
                111 === rowState ||
                85 === rowState ||
                83 === rowState ||
                115 === rowState ||
                76 === rowState ||
                108 === rowState ||
                71 === rowState ||
                103 === rowState ||
                77 === rowState ||
                109 === rowState ||
                86 === rowState
                  ? ((rowTag = rowState), (rowState = 2), i++)
                  : (64 < rowState && 91 > rowState) ||
                      114 === rowState ||
                      120 === rowState
                    ? ((rowTag = rowState), (rowState = 3), i++)
                    : ((rowTag = 0), (rowState = 3));
                continue;
              case 2:
                lastIdx = value[i++];
                44 === lastIdx
                  ? (rowState = 4)
                  : (rowLength =
                      (rowLength << 4) |
                      (96 < lastIdx ? lastIdx - 87 : lastIdx - 48));
                continue;
              case 3:
                lastIdx = value.indexOf(10, i);
                break;
              case 4:
                (lastIdx = i + rowLength),
                  lastIdx > value.length && (lastIdx = -1);
            }
            var offset = value.byteOffset + i;
            if (-1 < lastIdx)
              (rowLength = new Uint8Array(value.buffer, offset, lastIdx - i)),
                processFullBinaryRow(response, _ref, rowTag, buffer, rowLength),
                (i = lastIdx),
                3 === rowState && i++,
                (rowLength = _ref = rowTag = rowState = 0),
                (buffer.length = 0);
            else {
              value = new Uint8Array(
                value.buffer,
                offset,
                value.byteLength - i
              );
              buffer.push(value);
              rowLength -= value.byteLength;
              break;
            }
          }
          response._rowState = rowState;
          response._rowID = _ref;
          response._rowTag = rowTag;
          response._rowLength = rowLength;
          return reader.read().then(progress).catch(error);
        }
      }
      function error(e) {
        reportGlobalError(response, e);
      }
      var reader = stream.getReader();
      reader.read().then(progress).catch(error);
    }
    var ReactDOM = require("react-dom"),
      React = require("react"),
      decoderOptions = { stream: !0 },
      bind = Function.prototype.bind,
      chunkCache = new Map(),
      ReactDOMSharedInternals =
        ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
      REACT_MEMO_TYPE = Symbol.for("react.memo"),
      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
      ASYNC_ITERATOR = Symbol.asyncIterator,
      isArrayImpl = Array.isArray,
      getPrototypeOf = Object.getPrototypeOf,
      jsxPropsParents = new WeakMap(),
      jsxChildrenParents = new WeakMap(),
      CLIENT_REFERENCE_TAG = Symbol.for("react.client.reference"),
      ObjectPrototype = Object.prototype,
      knownServerReferences = new WeakMap(),
      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
    new ("function" === typeof WeakMap ? WeakMap : Map)();
    var ReactSharedInternals =
      React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE ||
      React.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    Chunk.prototype = Object.create(Promise.prototype);
    Chunk.prototype.then = function (resolve, reject) {
      switch (this.status) {
        case "resolved_model":
          initializeModelChunk(this);
          break;
        case "resolved_module":
          initializeModuleChunk(this);
      }
      switch (this.status) {
        case "fulfilled":
          resolve(this.value);
          break;
        case "pending":
        case "blocked":
          resolve &&
            (null === this.value && (this.value = []),
            this.value.push(resolve));
          reject &&
            (null === this.reason && (this.reason = []),
            this.reason.push(reject));
          break;
        default:
          reject && reject(this.reason);
      }
    };
    var initializingHandler = null,
      fakeFunctionCache = new Map(),
      fakeFunctionIdx = 0;
    ReactDOM = {
      "react-stack-bottom-frame": function (response, stack, environmentName) {
        for (var callStack = fakeJSXCallSite, i = 0; i < stack.length; i++) {
          var frame = stack[i],
            frameKey = frame.join("-") + "-" + environmentName,
            fn = fakeFunctionCache.get(frameKey);
          if (void 0 === fn) {
            fn = frame[0];
            var filename = frame[1],
              line = frame[2];
            frame = frame[3];
            var findSourceMapURL = response._debugFindSourceMapURL;
            findSourceMapURL = findSourceMapURL
              ? findSourceMapURL(filename, environmentName)
              : null;
            fn = createFakeFunction(
              fn,
              filename,
              findSourceMapURL,
              line,
              frame,
              environmentName
            );
            fakeFunctionCache.set(frameKey, fn);
          }
          callStack = fn.bind(null, callStack);
        }
        return callStack();
      }
    };
    var createFakeJSXCallStackInDEV =
      ReactDOM["react-stack-bottom-frame"].bind(ReactDOM);
    exports.createFromFetch = function (promiseForResponse, options) {
      var response = createResponseFromOptions(options);
      promiseForResponse.then(
        function (r) {
          startReadingFromStream(response, r.body);
        },
        function (e) {
          reportGlobalError(response, e);
        }
      );
      return getChunk(response, 0);
    };
    exports.createFromReadableStream = function (stream, options) {
      options = createResponseFromOptions(options);
      startReadingFromStream(options, stream);
      return getChunk(options, 0);
    };
    exports.createServerReference = function (id, callServer) {
      function proxy() {
        var args = Array.prototype.slice.call(arguments);
        return callServer(id, args);
      }
      registerServerReference(proxy, { id: id, bound: null });
      return proxy;
    };
    exports.createTemporaryReferenceSet = function () {
      return new Map();
    };
    exports.encodeReply = function (value, options) {
      return new Promise(function (resolve, reject) {
        processReply(
          value,
          "",
          options && options.temporaryReferences
            ? options.temporaryReferences
            : void 0,
          resolve,
          reject
        );
      });
    };
  })();