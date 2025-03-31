(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[732],{6732:function(e){var t,i;t={2:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(637),t),n(i(155),t)},7:e=>{"use strict";var t,i="object"==typeof Reflect?Reflect:null,r=i&&"function"==typeof i.apply?i.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)};t=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var n=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise(function(i,r){function n(i){e.removeListener(t,o),r(i)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",n),i([].slice.call(arguments))}m(e,t,o,{once:!0}),"error"!==t&&"function"==typeof e.on&&m(e,"error",n,{once:!0})})},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function u(e,t,i,r){var n,o,s;if(a(i),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),o=e._events),s=o[t]),void 0===s)s=o[t]=i,++e._eventsCount;else if("function"==typeof s?s=o[t]=r?[i,s]:[s,i]:r?s.unshift(i):s.push(i),(n=c(e))>0&&s.length>n&&!s.warned){s.warned=!0;var u=Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,console&&console.warn&&console.warn(u)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,i){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:i},n=l.bind(r);return n.listener=i,r.wrapFn=n,n}function f(e,t,i){var r=e._events;if(void 0===r)return[];var n=r[t];return void 0===n?[]:"function"==typeof n?i?[n.listener||n]:[n]:i?function(e){for(var t=Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(n):v(n,n.length)}function p(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function v(e,t){for(var i=Array(t),r=0;r<t;++r)i[r]=e[r];return i}function m(e,t,i,r){if("function"==typeof e.on)r.once?e.once(t,i):e.on(t,i);else{if("function"!=typeof e.addEventListener)throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,function n(o){r.once&&e.removeEventListener(t,n),i(o)})}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||n(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||n(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var n="error"===e,o=this._events;if(void 0!==o)n=n&&void 0===o.error;else if(!n)return!1;if(n){if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var s,a=Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)r(c,this,t);else{var u=c.length,l=v(c,u);for(i=0;i<u;++i)r(l[i],this,t)}return!0},o.prototype.addListener=function(e,t){return u(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return u(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,d(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,d(this,e,t)),this},o.prototype.removeListener=function(e,t){var i,r,n,o,s;if(a(t),void 0===(r=this._events)||void 0===(i=r[e]))return this;if(i===t||i.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(n=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){s=i[o].listener,n=o;break}if(n<0)return this;0===n?i.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(i,n),1===i.length&&(r[e]=i[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,i,r;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),this;if(0==arguments.length){var n,o=Object.keys(i);for(r=0;r<o.length;++r)"removeListener"!==(n=o[r])&&this.removeAllListeners(n);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return f(this,e,!0)},o.prototype.rawListeners=function(e){return f(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},89:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DeferredPromise=class{constructor(){let e=new Promise((e,t)=>{this._resolve=e,this._reject=t});this._promise=e}get promise(){return this._promise}get resolve(){return this._resolve}get reject(){return this._reject}}},93:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},96:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},134:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},155:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetType=t.TimeWidgetType=t.DateWidgetType=t.RadioGroupWidgetType=t.CheckboxGroupWidgetType=t.BooleanWidgetType=t.NumberWidgetType=t.StringWidgetType=void 0,t.StringWidgetType={Text:"Text",Dropdown:"Dropdown"},t.NumberWidgetType={Number:"Number"},t.BooleanWidgetType={Toggle:"Toggle",Checkbox:"Checkbox"},t.CheckboxGroupWidgetType={CheckboxGroup:"CheckboxGroup"},t.RadioGroupWidgetType={RadioGroup:"RadioGroup"},t.DateWidgetType={Date:"Date"},t.TimeWidgetType={Time:"Time"},t.WidgetType=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t.StringWidgetType),t.NumberWidgetType),t.BooleanWidgetType),t.CheckboxGroupWidgetType),t.RadioGroupWidgetType),t.DateWidgetType),t.TimeWidgetType)},158:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let r=i(89);async function n(e,t){let i=0;for(let r of e)await t(r,i,e),i++}async function o(e,t){await Promise.all(e.map(t))}function s(e,t,i){let n=new r.DeferredPromise,o=e.add((...e)=>{t(...e)&&(o.remove(),n.resolve())});return i&&i.catch(e=>{o.remove(),n.reject(e)}),a(n.promise)}function a(e){return e.catch(()=>{}),e}t.serialForEach=n,t.serialMap=async function(e,t){let i=[];return await n(e,async(e,r,n)=>{i.push(await t(e,r,n))}),i},t.serialFilter=async function(e,t){let i=[];return await n(e,async(e,r,n)=>{await t(e,r,n)&&i.push(e)}),i},t.parallelForEach=o,t.parallelMap=async function(e,t){let i=[];return await o(e,async(e,r,n)=>{i[r]=await t(e,r,n)}),i},t.parallelFilter=async function(e,t){let i=[];return await o(e,async(e,r,n)=>{i[r]=await t(e,r,n)}),e.filter((e,t)=>i[t])},t.withStrictTimeout=function(e,t,i){return a(Promise.race([new Promise((t,r)=>setTimeout(()=>r(Error(i)),e)),t]))},t.withTimeout=function(e,t){return Promise.race([new Promise(t=>setTimeout(()=>t([!0,void 0]),e)),t.then(e=>[!1,e])])},t.untilTrue=function(e,t,i){return t()?Promise.resolve():s(e,t,i)},t.untilSignal=s,t.allowReject=a},217:function(e,t,i){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isConnectedToAtLeast=t.getStatus=void 0;let n=r(i(651)),o=i(785),s=i(902),a=i(349);function c(){return(0,o.withStrictTimeout)(500,(0,s.tryServiceDispatch)(a.APITopic.GET_PROVIDER_STATUS,void 0),"").catch(()=>({connected:!1,version:null,templateAPIVersion:null}))}t.getStatus=c,t.isConnectedToAtLeast=async function(e){let t=await c();if(t.connected&&null!==t.version){let i=(0,n.default)(t.version,e);if(0===i||1===i)return!0}return!1}},349:(e,t)=>{"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.APITopic=t.getChannelName=t.SERVICE_CHANNEL=t.SERVICE_IDENTITY=void 0,t.SERVICE_IDENTITY={uuid:"notifications-service",name:"notifications-service"},t.SERVICE_CHANNEL="of-notifications-service-v1",t.getChannelName=e=>e===t.SERVICE_IDENTITY.uuid?t.SERVICE_CHANNEL:`${e}-${t.SERVICE_CHANNEL}`,(i=t.APITopic||(t.APITopic={})).CREATE_NOTIFICATION="create-notification",i.UPDATE_NOTIFICATION="update-notification",i.CLEAR_NOTIFICATION="clear-notification",i.GET_APP_NOTIFICATIONS="fetch-app-notifications",i.CLEAR_APP_NOTIFICATIONS="clear-app-notifications",i.TOGGLE_NOTIFICATION_CENTER="toggle-notification-center",i.ADD_EVENT_LISTENER="add-event-listener",i.REMOVE_EVENT_LISTENER="remove-event-listener",i.GET_PROVIDER_STATUS="get-provider-status",i.GET_NOTIFICATIONS_COUNT="get-notifications-count",i.SHOW_NOTIFICATION_CENTER="show-notification-center",i.HIDE_NOTIFICATION_CENTER="hide-notification-center",i.REGISTER_PLATFORM="register-notifications-platform",i.DEREGISTER_PLATFORM="deregister-notifications-platform",i.SET_FORM_STATUS_OPTIONS="set-form-status-options",i.SET_FORM_VALIDATION_ERRORS="set-form-validation-errors",i.GET_USER_SETTINGS_STATUS="get-user-settings-status",i.SET_DEFAULT_PLATFORM_SHORTCUT="set-default-platform-shortcut",i.SET_NOTIFICATION_SECURITY_RULE="set-notification-security-rule"},403:(e,t)=>{"use strict";var i,r;Object.defineProperty(t,"__esModule",{value:!0}),t.IndicatorColor=t.IndicatorType=void 0,(r=t.IndicatorType||(t.IndicatorType={})).FAILURE="failure",r.WARNING="warning",r.SUCCESS="success",(i=t.IndicatorColor||(t.IndicatorColor={})).RED="red",i.GREEN="green",i.YELLOW="yellow",i.BLUE="blue",i.PURPLE="purple",i.GRAY="gray",i.ORANGE="orange",i.MAGENTA="magenta",i.TEAL="teal"},405:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&r(t,e,i);return n(t,e),t},s=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)},a=this&&this.__rest||function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.setAllowedOrigins=t.getUserSettingStatus=t.UserSettings=t.getNotificationsCount=t.hide=t.show=t.setDefaultPlatformShortcut=t.toggleNotificationCenter=t.clearAll=t.getAll=t.clear=t.update=t.create=t.removeEventListener=t.addEventListener=t.VERSION=t.NotificationIndicatorType=t.IndicatorColor=t.NotificationIndicatorWithCustomColor=t.NotificationIndicator=t.NotificationOptions=t.provider=t.actions=void 0;let c=i(777),u=i(902),l=i(349),d=i(471);t.provider=o(i(217));let f=i(855),p=i(403);Object.defineProperty(t,"NotificationIndicator",{enumerable:!0,get:function(){return p.NotificationIndicator}}),Object.defineProperty(t,"NotificationIndicatorWithCustomColor",{enumerable:!0,get:function(){return p.NotificationIndicatorWithCustomColor}}),Object.defineProperty(t,"NotificationIndicatorType",{enumerable:!0,get:function(){return p.IndicatorType}}),Object.defineProperty(t,"IndicatorColor",{enumerable:!0,get:function(){return p.IndicatorColor}});let v=i(965);Object.defineProperty(t,"NotificationOptions",{enumerable:!0,get:function(){return v.NotificationOptions}}),t.actions=o(i(777)),s(i(777),t),s(i(578),t),s(i(93),t),s(i(2),t),s(i(520),t),s(i(96),t),s(i(470),t),t.VERSION="2.9.1";let m=(0,d.getEventRouter)();function h(e){let{notification:t}=e;return Object.assign(Object.assign({},e),{notification:Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})})}m.registerDeserializer("notification-created",e=>h(e)),m.registerDeserializer("notification-toast-dismissed",e=>h(e)),m.registerDeserializer("notification-closed",e=>h(e)),m.registerDeserializer("notification-action",e=>{var t;let i=h(e),{controlSource:r,controlIndex:n}=i,o=a(i,["controlSource","controlIndex"]);return e.trigger===c.ActionTrigger.CONTROL?Object.assign(Object.assign({},o),{control:null===(t=e.notification[r])||void 0===t?void 0:t[n]}):o}),m.registerDeserializer("notifications-count-changed",e=>e),m.registerDeserializer("notification-reminder-created",e=>{let t=h(e),{reminderDate:i}=t;return Object.assign(Object.assign({},a(t,["reminderDate"])),{reminderDate:new Date(i)})}),m.registerDeserializer("notification-reminder-removed",e=>h(e)),m.registerDeserializer("notification-sound-toggled",e=>e),t.addEventListener=async function(e,t){var i,r;(0,f.validateEnvironment)(),e=(0,f.sanitizeEventType)(e),t=(0,f.sanitizeFunction)(t);let n=d.eventEmitter.listenerCount(e);"notification-form-submitted"===e&&(i=t,t=e=>{let t=e.notification.id;e.setFormStatus=e=>(0,u.tryServiceDispatch)(l.APITopic.SET_FORM_STATUS_OPTIONS,Object.assign(Object.assign({},e),{_notificationId:t})),i(e)}),"notification-form-values-changed"===e&&(r=t,t=e=>{e.setErrors=t=>(0,u.tryServiceDispatch)(l.APITopic.SET_FORM_VALIDATION_ERRORS,{errors:t,notificationId:e.notification.id}),r(e)}),d.eventEmitter.addListener(e,t),0===n&&1===d.eventEmitter.listenerCount(e)&&await (0,u.tryServiceDispatch)(l.APITopic.ADD_EVENT_LISTENER,e)},t.removeEventListener=async function(e,t){(0,f.validateEnvironment)(),e=(0,f.sanitizeEventType)(e),t=(0,f.sanitizeFunction)(t),1===d.eventEmitter.listenerCount(e)&&d.eventEmitter.listeners(e)[0]===t&&await (0,u.tryServiceDispatch)(l.APITopic.REMOVE_EVENT_LISTENER,e),d.eventEmitter.removeListener(e,t)},t.create=async function(e,t){if("object"!=typeof e||null===e)throw Error("Invalid argument passed to create: argument must be an object and must not be null");if(void 0!==e.date&&!(e.date instanceof Date))throw Error('Invalid argument passed to create: "date" must be a valid Date object');if(void 0!==e.expires&&null!==e.expires&&!(e.expires instanceof Date))throw Error('Invalid argument passed to create: "expires" must be null or a valid Date object');if(t&&t.reminderDate){if(!1===e.allowReminder)throw Error('You must not specify a reminder date for a notification with "allowReminder" option set to false.');if(!(t.reminderDate instanceof Date))throw Error('Invalid argument passed to reminder Options: "date" must a valid Date object');if(e.expires&&e.expires.getTime()<t.reminderDate.getTime())throw Error("Expiration date must not be earlier than reminder date.")}void 0!==e.category&&null!==e.category||(e.category="default");let i=await (0,u.tryServiceDispatch)(l.APITopic.CREATE_NOTIFICATION,Object.assign(Object.assign({},e),{date:e.date&&e.date.valueOf(),expires:e.expires&&e.expires.valueOf(),reminder:(null==t?void 0:t.reminderDate)&&t.reminderDate.valueOf()}));return Object.assign(Object.assign({},i),{date:new Date(i.date),expires:null!==i.expires?new Date(i.expires):null})},t.update=async function(e){if("object"!=typeof e||null===e)throw Error("Invalid argument passed to create: argument must be an object and must not be null");if(!e.id)throw Error('Invalid argument passed to create: "id" must be Id of previously created Notification');return Object.assign({},await (0,u.tryServiceDispatch)(l.APITopic.UPDATE_NOTIFICATION,Object.assign({},e)))},t.clear=async function(e){return(0,u.tryServiceDispatch)(l.APITopic.CLEAR_NOTIFICATION,{id:e})},t.getAll=async function(){return(await (0,u.tryServiceDispatch)(l.APITopic.GET_APP_NOTIFICATIONS,void 0)).map(e=>Object.assign(Object.assign({},e),{indicator:e.indicator||null,date:new Date(e.date),expires:null!==e.expires?new Date(e.expires):null}))},t.clearAll=async function(){return(0,u.tryServiceDispatch)(l.APITopic.CLEAR_APP_NOTIFICATIONS,void 0)},t.toggleNotificationCenter=async function(){return(0,u.tryServiceDispatch)(l.APITopic.TOGGLE_NOTIFICATION_CENTER,void 0)},t.setDefaultPlatformShortcut=function(e){return(0,u.tryServiceDispatch)(l.APITopic.SET_DEFAULT_PLATFORM_SHORTCUT,e)},t.show=async function(e){return(0,u.tryServiceDispatch)(l.APITopic.SHOW_NOTIFICATION_CENTER,e)},t.hide=async function(){return(0,u.tryServiceDispatch)(l.APITopic.HIDE_NOTIFICATION_CENTER,void 0)},t.getNotificationsCount=async function(){return(0,u.tryServiceDispatch)(l.APITopic.GET_NOTIFICATIONS_COUNT,void 0)},(t.UserSettings||(t.UserSettings={})).SOUND_ENABLED="soundEnabled",t.getUserSettingStatus=async function(e){return(0,u.tryServiceDispatch)(l.APITopic.GET_USER_SETTINGS_STATUS,e)},t.setAllowedOrigins=async e=>(0,u.tryServiceDispatch)(l.APITopic.SET_NOTIFICATION_SECURITY_RULE,{allowedOrigins:e})},468:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},470:function(e,t,i){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),n=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),n(i(134),t),n(i(468),t),n(i(965),t),n(i(929),t)},471:function(e,t,i){"use strict";let r;var n=this&&this.__rest||function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(i[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(i[r[n]]=e[r[n]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.getEventRouter=t.eventEmitter=t.EventRouter=void 0;let o=i(7),s=i(902),a=i(349);class c{constructor(e){this._emitterProviders={},this._deserializers={},this._defaultEmitter=e}registerEmitterProvider(e,t){this._emitterProviders[e]=t}registerDeserializer(e,t){this._deserializers[e]=t}dispatchEvent(e){var t;let i,r;let{type:o,target:c}=e,u=n(e,["type","target"]);if(!c)throw Error("Invalid event, no target specified");if("default"===c)i=this._defaultEmitter;else{if(!this._emitterProviders[c.type])throw Error(`Invalid target, no provider registered for '${c.type}'`);i=this._emitterProviders[c.type](c.id)}let l=Object.assign({type:o},u),d=this._deserializers[o];d?i.emit(o,d(l)):"notification-form-submitted"===o?(t=i,r=!1,l.preventDefault=()=>r=!0,t.emit("notification-form-submitted",l),r||(0,s.tryServiceDispatch)(a.APITopic.SET_FORM_STATUS_OPTIONS,{formStatus:"submitted",_notificationId:l.notification.id})):i.emit(o,l)}}t.EventRouter=c,t.eventEmitter=new o.EventEmitter,t.getEventRouter=function(){return r||(r=new c(t.eventEmitter)),r}},520:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},578:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},637:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FieldType=void 0,t.FieldType={string:"string",number:"number",boolean:"boolean",date:"date",checkboxGroup:"checkboxGroup",radioGroup:"radioGroup",time:"time"}},651:e=>{e.exports=function(e,t){for(var i=e.split("."),r=t.split("."),n=0;n<3;n++){var o=Number(i[n]),s=Number(r[n]);if(o>s)return 1;if(s>o)return -1;if(!isNaN(o)&&isNaN(s))return 1;if(isNaN(o)&&!isNaN(s))return -1}return 0}},683:function(e,t,i){"use strict";let r;var n=this&&this.__createBinding||(Object.create?function(e,t,i,r){void 0===r&&(r=i);var n=Object.getOwnPropertyDescriptor(t,i);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,r,n)}:function(e,t,i,r){void 0===r&&(r=i),e[r]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),t.connectToNotifications=void 0;let s=i(902),a=i(855),c=i(471);o(i(405),t);let u=async(e,t)=>{if(!r)throw Error("Not connected to the notification center. Did you call connectToNotifications()?.");return r.dispatch(e,t)};t.connectToNotifications=async function e(t){(e=>{if(!e)throw Error("Provider config must be provided.");if(!e.id)throw Error("id must be a non-zero length and must be a unique identifier of the provider.");if(!e.title)throw Error("title must be a non-zero length.");if(!e.serviceId)throw Error("serviceId must be a non-zero length and must match the service id of the Web Notification Center instance.");if(!e.finContext)throw Error("fin context must be provided.")})(t),(0,a.setValidationMethod)(()=>{}),(0,s.setDispatchMethod)(u);let i={id:t.id,title:t.title,icon:t.icon};console.log("Connecting to the Notification Center..."),r=await t.finContext.InterApplicationBus.Channel.connect(t.serviceId,{wait:!0,payload:{version:"2.9.1",providerInfo:i}}),console.log("Connected to the Notification Center.");let n=(0,c.getEventRouter)();r.setDefaultAction(()=>!1),r.register("WARN",e=>console.warn(e)),r.register("event",e=>{n.dispatchEvent(e)}),r.onDisconnection(()=>{console.warn("Disconnected from the Notification Center"),r=null,setTimeout(()=>{console.log("Attempting to reconnect to the Notification Center"),e(t)},300)})}},777:(e,t)=>{"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionBodyClickType=t.ActionNoopType=t.ActionTrigger=void 0,(i=t.ActionTrigger||(t.ActionTrigger={})).CONTROL="control",i.SELECT="select",i.CLOSE="close",i.EXPIRE="expire",i.PROGRAMMATIC="programmatic",(t.ActionNoopType||(t.ActionNoopType={})).EVENT_DISMISS="event_dismiss",(t.ActionBodyClickType||(t.ActionBodyClickType={})).DISMISS_EVENT="dismiss_event"},785:(e,t,i)=>{"use strict";function r(e){for(var i in e)t.hasOwnProperty(i)||(t[i]=e[i])}Object.defineProperty(t,"__esModule",{value:!0}),r(i(158)),r(i(89))},855:(e,t)=>{"use strict";function i(e,t){let i;try{i=JSON.stringify(e)}catch(e){i=t}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.setValidationMethod=t.validateEnvironment=t.safeStringify=t.sanitizeEventType=t.sanitizeFunction=void 0,t.sanitizeFunction=function(e){if("function"!=typeof e)throw Error(`Invalid argument passed: ${i(e,"The provided value")} is not a valid function`);return e},t.sanitizeEventType=function(e){if("notification-action"===e||"notification-created"===e||"notification-toast-dismissed"===e||"notification-closed"===e||"notifications-count-changed"===e||"notification-form-submitted"===e||"notification-reminder-created"===e||"notification-reminder-removed"===e||"notification-form-values-changed"===e||"notification-sound-toggled"===e)return e;throw Error(`Invalid argument passed: ${i(e,"The provided event type")} is not a valid Notifications event type`)},t.safeStringify=i,t.validateEnvironment=()=>{throw Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")},t.setValidationMethod=e=>{t.validateEnvironment=e}},902:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setDispatchMethod=t.tryServiceDispatch=void 0,t.tryServiceDispatch=async(e,t)=>{throw Error("Environment is not initialized..")},t.setDispatchMethod=e=>{t.tryServiceDispatch=e}},929:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},965:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragmentNames=t.PresentationTemplateFragmentNames=t.ContainerTemplateFragmentNames=t.TemplateNames=void 0,t.TemplateNames={markdown:"markdown",list:"list",custom:"custom"},t.ContainerTemplateFragmentNames={container:"container"},t.PresentationTemplateFragmentNames={text:"text",image:"image",list:"list",actionableText:"actionableText"},t.TemplateFragmentNames=Object.assign(Object.assign({},t.ContainerTemplateFragmentNames),t.PresentationTemplateFragmentNames)}},i={},e.exports=function e(r){var n=i[r];if(void 0!==n)return n.exports;var o=i[r]={exports:{}};return t[r].call(o.exports,o,o.exports,e),o.exports}(683)}}]);