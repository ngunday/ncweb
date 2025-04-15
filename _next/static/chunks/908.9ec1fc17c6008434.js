(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[908],{72908:function(e){var t;t=()=>{var e,t;return e={2:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),r=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),r(i(637),t),r(i(155),t)},7:e=>{var t,i="object"==typeof Reflect?Reflect:null,n=i&&"function"==typeof i.apply?i.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)};t=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise(function(i,n){function r(i){e.removeListener(t,o),n(i)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",r),i([].slice.call(arguments))}h(e,t,o,{once:!0}),"error"!==t&&"function"==typeof e.on&&h(e,"error",r,{once:!0})})},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function l(e,t,i,n){var r,o,a;if(s(i),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,i.listener?i.listener:i),o=e._events),a=o[t]),void 0===a)a=o[t]=i,++e._eventsCount;else if("function"==typeof a?a=o[t]=n?[i,a]:[a,i]:n?a.unshift(i):a.push(i),(r=c(e))>0&&a.length>r&&!a.warned){a.warned=!0;var l=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=a.length,console&&console.warn&&console.warn(l)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,i){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:i},r=u.bind(n);return r.listener=i,n.wrapFn=r,r}function d(e,t,i){var n=e._events;if(void 0===n)return[];var r=n[t];return void 0===r?[]:"function"==typeof r?i?[r.listener||r]:[r]:i?function(e){for(var t=Array(e.length),i=0;i<t.length;++i)t[i]=e[i].listener||e[i];return t}(r):v(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var i=t[e];if("function"==typeof i)return 1;if(void 0!==i)return i.length}return 0}function v(e,t){for(var i=Array(t),n=0;n<t;++n)i[n]=e[n];return i}function h(e,t,i,n){if("function"==typeof e.on)n.once?e.once(t,i):e.on(t,i);else{if("function"!=typeof e.addEventListener)throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,function r(o){n.once&&e.removeEventListener(t,r),i(o)})}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||r(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,s=Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)n(c,this,t);else{var l=c.length,u=v(c,l);for(i=0;i<l;++i)n(u[i],this,t)}return!0},o.prototype.addListener=function(e,t){return l(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return l(this,e,t,!0)},o.prototype.once=function(e,t){return s(t),this.on(e,f(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,f(this,e,t)),this},o.prototype.removeListener=function(e,t){var i,n,r,o,a;if(s(t),void 0===(n=this._events)||void 0===(i=n[e]))return this;if(i===t||i.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,i.listener||t));else if("function"!=typeof i){for(r=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){a=i[o].listener,r=o;break}if(r<0)return this;0===r?i.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(i,r),1===i.length&&(n[e]=i[0]),void 0!==n.removeListener&&this.emit("removeListener",e,a||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,i,n;if(void 0===(i=this._events))return this;if(void 0===i.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==i[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete i[e]),this;if(0==arguments.length){var r,o=Object.keys(i);for(n=0;n<o.length;++n)"removeListener"!==(r=o[n])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=i[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this},o.prototype.listeners=function(e){return d(this,e,!0)},o.prototype.rawListeners=function(e){return d(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},36:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Log=void 0;let n=i(329);class r{static async error(e){try{let t=r.getPrefixedMessage(e);console.error(t),await n.finContext.System.log("error",t)}catch(e){r.handleError(e,"Failed to log error")}}static async warn(e){try{let t=r.getPrefixedMessage(e);console.warn(t),await n.finContext.System.log("warning",t)}catch(e){r.handleError(e,"Failed to log warning")}}static async info(e){try{let t=r.getPrefixedMessage(e);console.info(t),await n.finContext.System.log("info",t)}catch(e){r.handleError(e,"Failed to log info")}}static getPrefixedMessage(e){return`${r.LOG_PREFIX} ${e}`}static handleError(e,t){e instanceof Error?console.error(`${t} - ${e.name}: ${e.message}`):console.error(`${t} - ${JSON.stringify(e)}`)}}t.Log=r,r.LOG_PREFIX="[openfin-notifications]"},89:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DeferredPromise=class{constructor(){let e=new Promise((e,t)=>{this._resolve=e,this._reject=t});this._promise=e}get promise(){return this._promise}get resolve(){return this._resolve}get reject(){return this._reject}}},93:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},96:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},134:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},155:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetType=t.TimeWidgetType=t.DateWidgetType=t.RadioGroupWidgetType=t.CheckboxGroupWidgetType=t.BooleanWidgetType=t.NumberWidgetType=t.StringWidgetType=void 0,t.StringWidgetType={Text:"Text",Dropdown:"Dropdown"},t.NumberWidgetType={Number:"Number"},t.BooleanWidgetType={Toggle:"Toggle",Checkbox:"Checkbox"},t.CheckboxGroupWidgetType={CheckboxGroup:"CheckboxGroup"},t.RadioGroupWidgetType={RadioGroup:"RadioGroup"},t.DateWidgetType={Date:"Date"},t.TimeWidgetType={Time:"Time"},t.WidgetType=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t.StringWidgetType),t.NumberWidgetType),t.BooleanWidgetType),t.CheckboxGroupWidgetType),t.RadioGroupWidgetType),t.DateWidgetType),t.TimeWidgetType)},158:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionBodyClickType=t.ActionNoopType=t.ActionTrigger=void 0,(i=t.ActionTrigger||(t.ActionTrigger={})).CONTROL="control",i.SELECT="select",i.CLOSE="close",i.EXPIRE="expire",i.PROGRAMMATIC="programmatic",(t.ActionNoopType||(t.ActionNoopType={})).EVENT_DISMISS="event_dismiss",(t.ActionBodyClickType||(t.ActionBodyClickType={})).DISMISS_EVENT="dismiss_event"},217:function(e,t,i){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isConnectedToAtLeast=t.getStatus=void 0;let r=n(i(667)),o=i(785),a=i(902),s=i(349);function c(){return(0,o.withStrictTimeout)(500,(0,a.tryServiceDispatch)(s.APITopic.GET_PROVIDER_STATUS,void 0),"").catch(()=>({connected:!1,version:null,templateAPIVersion:null}))}t.getStatus=c,t.isConnectedToAtLeast=async function(e){let t=await c();if(t.connected&&null!==t.version){let i=(0,r.default)(t.version,e);if(0===i||1===i)return!0}return!1}},329:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setFinContext=t.finContext=void 0,t.setFinContext=e=>{t.finContext=e}},349:(e,t)=>{var i;Object.defineProperty(t,"__esModule",{value:!0}),t.APITopic=t.getChannelName=t.SERVICE_CHANNEL=t.SERVICE_IDENTITY=void 0,t.SERVICE_IDENTITY={uuid:"notifications-service",name:"notifications-service"},t.SERVICE_CHANNEL="of-notifications-service-v1",t.getChannelName=e=>e===t.SERVICE_IDENTITY.uuid?t.SERVICE_CHANNEL:`${e}-${t.SERVICE_CHANNEL}`,(i=t.APITopic||(t.APITopic={})).CREATE_NOTIFICATION="create-notification",i.UPDATE_NOTIFICATION="update-notification",i.CLEAR_NOTIFICATION="clear-notification",i.GET_APP_NOTIFICATIONS="fetch-app-notifications",i.CLEAR_APP_NOTIFICATIONS="clear-app-notifications",i.TOGGLE_NOTIFICATION_CENTER="toggle-notification-center",i.ADD_EVENT_LISTENER="add-event-listener",i.REMOVE_EVENT_LISTENER="remove-event-listener",i.GET_PROVIDER_STATUS="get-provider-status",i.GET_NOTIFICATIONS_COUNT="get-notifications-count",i.SHOW_NOTIFICATION_CENTER="show-notification-center",i.HIDE_NOTIFICATION_CENTER="hide-notification-center",i.REGISTER_PLATFORM="register-notifications-platform",i.DEREGISTER_PLATFORM="deregister-notifications-platform",i.SET_FORM_STATUS_OPTIONS="set-form-status-options",i.SET_FORM_VALIDATION_ERRORS="set-form-validation-errors",i.GET_USER_SETTINGS_STATUS="get-user-settings-status",i.SET_DEFAULT_PLATFORM_SHORTCUT="set-default-platform-shortcut",i.SET_NOTIFICATION_SECURITY_RULE="set-notification-security-rule"},403:(e,t)=>{var i,n;Object.defineProperty(t,"__esModule",{value:!0}),t.IndicatorColor=t.IndicatorType=void 0,(n=t.IndicatorType||(t.IndicatorType={})).FAILURE="failure",n.WARNING="warning",n.SUCCESS="success",(i=t.IndicatorColor||(t.IndicatorColor={})).RED="red",i.GREEN="green",i.YELLOW="yellow",i.BLUE="blue",i.PURPLE="purple",i.GRAY="gray",i.ORANGE="orange",i.MAGENTA="magenta",i.TEAL="teal"},405:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return r(t,e),t},a=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)},s=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.setAllowedOrigins=t.getUserSettingStatus=t.UserSettings=t.getNotificationsCount=t.hide=t.show=t.setDefaultPlatformShortcut=t.toggleNotificationCenter=t.clearAll=t.getAll=t.clear=t.update=t.create=t.removeEventListener=t.addEventListener=t.VERSION=t.NotificationIndicatorType=t.IndicatorColor=t.NotificationIndicatorWithCustomColor=t.NotificationIndicator=t.NotificationOptions=t.provider=t.actions=void 0;let c=i(158),l=i(902),u=i(349),f=i(471),d=o(i(217));t.provider=d;let p=i(855),v=i(403);Object.defineProperty(t,"NotificationIndicator",{enumerable:!0,get:function(){return v.NotificationIndicator}}),Object.defineProperty(t,"NotificationIndicatorWithCustomColor",{enumerable:!0,get:function(){return v.NotificationIndicatorWithCustomColor}}),Object.defineProperty(t,"NotificationIndicatorType",{enumerable:!0,get:function(){return v.IndicatorType}}),Object.defineProperty(t,"IndicatorColor",{enumerable:!0,get:function(){return v.IndicatorColor}});let h=i(965);Object.defineProperty(t,"NotificationOptions",{enumerable:!0,get:function(){return h.NotificationOptions}});let m=o(i(158));t.actions=m,a(i(158),t),a(i(578),t),a(i(93),t),a(i(2),t),a(i(520),t),a(i(96),t),a(i(470),t),t.VERSION="2.9.1-alpha-3958";let g=(0,f.getEventRouter)();function y(e){let{notification:t}=e;return Object.assign(Object.assign({},e),{notification:Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})})}g.registerDeserializer("notification-created",e=>y(e)),g.registerDeserializer("notification-toast-dismissed",e=>y(e)),g.registerDeserializer("notification-closed",e=>y(e)),g.registerDeserializer("notification-action",e=>{var t;let i=y(e),{controlSource:n,controlIndex:r}=i,o=s(i,["controlSource","controlIndex"]);return e.trigger===c.ActionTrigger.CONTROL?Object.assign(Object.assign({},o),{control:null===(t=e.notification[n])||void 0===t?void 0:t[r]}):o}),g.registerDeserializer("notifications-count-changed",e=>e),g.registerDeserializer("notification-reminder-created",e=>{let t=y(e),{reminderDate:i}=t;return Object.assign(Object.assign({},s(t,["reminderDate"])),{reminderDate:new Date(i)})}),g.registerDeserializer("notification-reminder-removed",e=>y(e)),g.registerDeserializer("notification-sound-toggled",e=>e),t.addEventListener=async function(e,t){var i,n;(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t);let r=f.eventEmitter.listenerCount(e);"notification-form-submitted"===e&&(i=t,t=e=>{let t=e.notification.id;e.setFormStatus=e=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_STATUS_OPTIONS,Object.assign(Object.assign({},e),{_notificationId:t})),i(e)}),"notification-form-values-changed"===e&&(n=t,t=e=>{e.setErrors=t=>(0,l.tryServiceDispatch)(u.APITopic.SET_FORM_VALIDATION_ERRORS,{errors:t,notificationId:e.notification.id}),n(e)}),f.eventEmitter.addListener(e,t),0===r&&1===f.eventEmitter.listenerCount(e)&&await (0,l.tryServiceDispatch)(u.APITopic.ADD_EVENT_LISTENER,e)},t.removeEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t),1===f.eventEmitter.listenerCount(e)&&f.eventEmitter.listeners(e)[0]===t&&await (0,l.tryServiceDispatch)(u.APITopic.REMOVE_EVENT_LISTENER,e),f.eventEmitter.removeListener(e,t)},t.create=async function(e,t){if("object"!=typeof e||null===e)throw Error("Invalid argument passed to create: argument must be an object and must not be null");if(void 0!==e.date&&!(e.date instanceof Date))throw Error('Invalid argument passed to create: "date" must be a valid Date object');if(void 0!==e.expires&&null!==e.expires&&!(e.expires instanceof Date))throw Error('Invalid argument passed to create: "expires" must be null or a valid Date object');if(t&&t.reminderDate){if(!1===e.allowReminder)throw Error('You must not specify a reminder date for a notification with "allowReminder" option set to false.');if(!(t.reminderDate instanceof Date))throw Error('Invalid argument passed to reminder Options: "date" must a valid Date object');if(e.expires&&e.expires.getTime()<t.reminderDate.getTime())throw Error("Expiration date must not be earlier than reminder date.")}void 0!==e.category&&null!==e.category||(e.category="default");let i=await (0,l.tryServiceDispatch)(u.APITopic.CREATE_NOTIFICATION,Object.assign(Object.assign({},e),{date:e.date&&e.date.valueOf(),expires:e.expires&&e.expires.valueOf(),reminder:(null==t?void 0:t.reminderDate)&&t.reminderDate.valueOf()}));return Object.assign(Object.assign({},i),{date:new Date(i.date),expires:null!==i.expires?new Date(i.expires):null})},t.update=async function(e){if("object"!=typeof e||null===e)throw Error("Invalid argument passed to create: argument must be an object and must not be null");if(!e.id)throw Error('Invalid argument passed to create: "id" must be Id of previously created Notification');return Object.assign({},await (0,l.tryServiceDispatch)(u.APITopic.UPDATE_NOTIFICATION,Object.assign({},e)))},t.clear=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_NOTIFICATION,{id:e})},t.getAll=async function(){return(await (0,l.tryServiceDispatch)(u.APITopic.GET_APP_NOTIFICATIONS,void 0)).map(e=>Object.assign(Object.assign({},e),{indicator:e.indicator||null,date:new Date(e.date),expires:null!==e.expires?new Date(e.expires):null}))},t.clearAll=async function(){return(0,l.tryServiceDispatch)(u.APITopic.CLEAR_APP_NOTIFICATIONS,void 0)},t.toggleNotificationCenter=async function(){return(0,l.tryServiceDispatch)(u.APITopic.TOGGLE_NOTIFICATION_CENTER,void 0)},t.setDefaultPlatformShortcut=function(e){return(0,l.tryServiceDispatch)(u.APITopic.SET_DEFAULT_PLATFORM_SHORTCUT,e)},t.show=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.SHOW_NOTIFICATION_CENTER,e)},t.hide=async function(){return(0,l.tryServiceDispatch)(u.APITopic.HIDE_NOTIFICATION_CENTER,void 0)},t.getNotificationsCount=async function(){return(0,l.tryServiceDispatch)(u.APITopic.GET_NOTIFICATIONS_COUNT,void 0)},(t.UserSettings||(t.UserSettings={})).SOUND_ENABLED="soundEnabled",t.getUserSettingStatus=async function(e){return(0,l.tryServiceDispatch)(u.APITopic.GET_USER_SETTINGS_STATUS,e)},t.setAllowedOrigins=async e=>(0,l.tryServiceDispatch)(u.APITopic.SET_NOTIFICATION_SECURITY_RULE,{allowedOrigins:e})},468:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},470:function(e,t,i){var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),r=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),r(i(134),t),r(i(468),t),r(i(965),t),r(i(929),t)},471:function(e,t,i){let n;var r=this&&this.__rest||function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i};Object.defineProperty(t,"__esModule",{value:!0}),t.getEventRouter=t.eventEmitter=t.EventRouter=void 0;let o=i(7),a=i(902),s=i(349);class c{constructor(e){this._emitterProviders={},this._deserializers={},this._defaultEmitter=e}registerEmitterProvider(e,t){this._emitterProviders[e]=t}registerDeserializer(e,t){this._deserializers[e]=t}dispatchEvent(e){var t;let i,n;let{type:o,target:c}=e,l=r(e,["type","target"]);if(!c)throw Error("Invalid event, no target specified");if("default"===c)i=this._defaultEmitter;else{if(!this._emitterProviders[c.type])throw Error(`Invalid target, no provider registered for '${c.type}'`);i=this._emitterProviders[c.type](c.id)}let u=Object.assign({type:o},l),f=this._deserializers[o];f?i.emit(o,f(u)):"notification-form-submitted"===o?(t=i,n=!1,u.preventDefault=()=>n=!0,t.emit("notification-form-submitted",u),n||(0,a.tryServiceDispatch)(s.APITopic.SET_FORM_STATUS_OPTIONS,{formStatus:"submitted",_notificationId:u.notification.id})):i.emit(o,u)}}t.EventRouter=c,t.eventEmitter=new o.EventEmitter,t.getEventRouter=function(){return n||(n=new c(t.eventEmitter)),n}},520:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},578:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},610:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultValidateEnvironment=t.defaultDispatch=void 0;let n=i(793),r=i(329);t.defaultDispatch=async function(e,t){return(await (0,n.getChannelClient)()).dispatch(e,t)},t.defaultValidateEnvironment=function(){if(void 0===r.finContext)throw Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")}},637:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.FieldType=void 0,t.FieldType={string:"string",number:"number",boolean:"boolean",date:"date",checkboxGroup:"checkboxGroup",radioGroup:"radioGroup",time:"time"}},667:e=>{e.exports=void 0},683:function(e,t,i){let n;var r=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,r)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||r(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),t.connectToNotifications=void 0;let a=i(902),s=i(855),c=i(471),l=i(797),u=i(217),f=i(329),d=i(610);o(i(405),t);let p=async(e,t)=>{if(!n)throw Error("Not connected to the notification center. Did you call connectToNotifications()?.");return n.dispatch(e,t)};t.connectToNotifications=async function e(t){if(!t)throw Error("Provider config must be provided.");if(!t.finContext)throw Error("fin context must be provided.");if("desktop"===t.environment){if(!t.finContext.me.isOpenFin)throw Error("You must be in Here environment when you provide a desktop config.");return(0,f.setFinContext)(t.finContext),(0,s.setValidationMethod)(d.defaultValidateEnvironment),(0,a.setDispatchMethod)(d.defaultDispatch),(0,l.register)(t)}{(e=>{if(!e.id)throw Error("id must be a non-zero length and must be a unique identifier of the provider.");if(!e.title)throw Error("title must be a non-zero length.");if(!e.serviceId)throw Error("serviceId must be a non-zero length and must match the service id of the Web Notification Center instance.")})(t),(0,s.setValidationMethod)(()=>{}),(0,a.setDispatchMethod)(p);let i={id:t.id,title:t.title,icon:t.icon};console.log("Connecting to the Notification Center..."),n=await t.finContext.InterApplicationBus.Channel.connect(t.serviceId,{wait:!0,payload:{version:"2.9.1-alpha-3958",providerInfo:i}}),console.log("Connected to the Notification Center.");let r=(0,c.getEventRouter)();return n.setDefaultAction(()=>!1),n.register("WARN",e=>console.warn(e)),n.register("event",e=>{r.dispatchEvent(e)}),n.onDisconnection(()=>{console.warn("Disconnected from the Notification Center"),n=null,setTimeout(()=>{console.log("Attempting to reconnect to the Notification Center"),e(t)},300)}),{clientAPIVersion:"2.9.1-alpha-3958",notificationsVersion:(await (0,u.getStatus)()).version||"unknown"}}}},777:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});let n=i(89);async function r(e,t){let i=0;for(let n of e)await t(n,i,e),i++}async function o(e,t){await Promise.all(e.map(t))}function a(e,t,i){let r=new n.DeferredPromise,o=e.add((...e)=>{t(...e)&&(o.remove(),r.resolve())});return i&&i.catch(e=>{o.remove(),r.reject(e)}),s(r.promise)}function s(e){return e.catch(()=>{}),e}t.serialForEach=r,t.serialMap=async function(e,t){let i=[];return await r(e,async(e,n,r)=>{i.push(await t(e,n,r))}),i},t.serialFilter=async function(e,t){let i=[];return await r(e,async(e,n,r)=>{await t(e,n,r)&&i.push(e)}),i},t.parallelForEach=o,t.parallelMap=async function(e,t){let i=[];return await o(e,async(e,n,r)=>{i[n]=await t(e,n,r)}),i},t.parallelFilter=async function(e,t){let i=[];return await o(e,async(e,n,r)=>{i[n]=await t(e,n,r)}),e.filter((e,t)=>i[t])},t.withStrictTimeout=function(e,t,i){return s(Promise.race([new Promise((t,n)=>setTimeout(()=>n(Error(i)),e)),t]))},t.withTimeout=function(e,t){return Promise.race([new Promise(t=>setTimeout(()=>t([!0,void 0]),e)),t.then(e=>[!1,e])])},t.untilTrue=function(e,t,i){return t()?Promise.resolve():a(e,t,i)},t.untilSignal=a,t.allowReject=s},785:(e,t,i)=>{function n(e){for(var i in e)t.hasOwnProperty(i)||(t[i]=e[i])}Object.defineProperty(t,"__esModule",{value:!0}),n(i(777)),n(i(89))},793:(e,t,i)=>{let n,r;Object.defineProperty(t,"__esModule",{value:!0}),t.getChannelClient=t.clearAwaitedChannelClient=t.initAwaitedChannelClient=t.ChannelClientConfig=void 0;let o=i(349),a=i(36),s=i(329);t.ChannelClientConfig={serviceChannel:o.SERVICE_CHANNEL};let c=async({wait:e})=>{await a.Log.info("Connecting to Notifications...");let i=await s.finContext.InterApplicationBus.Channel.connect(t.ChannelClientConfig.serviceChannel,{wait:e,payload:{version:"2.9.1-alpha-3958"}});return await a.Log.info("Successfully connected to Notifications."),i};t.initAwaitedChannelClient=()=>n?{channelClientPromise:n,isInit:!1}:((n=c({wait:!0})).catch(e=>(0,t.clearAwaitedChannelClient)()),{channelClientPromise:n,isInit:!0}),t.clearAwaitedChannelClient=()=>{n=null},t.getChannelClient=async()=>n||(async()=>{if(!r){try{(r=await c({wait:!1})).setDefaultAction(()=>!1)}catch(e){throw await a.Log.error('Could not find channel provider. Did you call "notifications.register()"?'),e}r.onDisconnection(()=>{r=null})}return r})()},797:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.register=t.ChannelClientHandlers=void 0;let n=i(349),r=i(471),o=i(36),a=i(793),s=i(217),c=i(329);class l{}t.ChannelClientHandlers=l,l.handleDefaultAction=()=>!1,l.handleEventAction=e=>{(0,r.getEventRouter)().dispatchEvent(e)},l.handleWarnAction=async e=>{await o.Log.warn(e)},l.handleDisconnection=async()=>{(0,a.getChannelClient)()&&(await o.Log.warn("Disconnected from Notifications. Reconnecting..."),(0,a.clearAwaitedChannelClient)(),await d(),await p())};let u=null;t.register=async e=>{if(u)return u;try{return u=f(e),await u}finally{u=null}};let f=async e=>{if(null==e?void 0:e.customManifest){if(!e.customManifest.manifestUrl)throw Error("manifestUrl must be provided.");if(!e.customManifest.manifestUuid)throw Error("manifestUuid must be provided and must not be an empty string.");if(e.customManifest.manifestUuid===n.SERVICE_CHANNEL)throw Error(`manifestUuid must not be ${n.SERVICE_CHANNEL}`);a.ChannelClientConfig.serviceChannel=`${e.customManifest.manifestUuid}-${n.SERVICE_CHANNEL}`,await d(e.customManifest.manifestUrl)}else a.ChannelClientConfig.serviceChannel=n.SERVICE_CHANNEL,await d();return await p(),{clientAPIVersion:"2.9.1-alpha-3958",notificationsVersion:(await (0,s.getStatus)()).version||"unknown"}},d=async e=>{try{let t=window.navigator.userAgent.toLowerCase().includes("windows"),i=e||"fins://system-apps/notification-center";t?(await o.Log.info("Launching Notifications via fin.System.launchManifest..."),await c.finContext.System.launchManifest(i,{noUi:!0})):(await o.Log.info("Launching Notifications via fin.System.openUrlWithBrowser..."),await c.finContext.System.openUrlWithBrowser(i))}catch(e){throw e instanceof Error?await o.Log.error(`Failed to launch Notifications - ${e.name}: ${e.message}`):await o.Log.error(`Failed to launch Notifications - ${JSON.stringify(e)}`),e}},p=async()=>{try{let{channelClientPromise:e,isInit:t}=(0,a.initAwaitedChannelClient)(),i=await e;t&&(i.setDefaultAction(l.handleDefaultAction),i.register("event",l.handleEventAction),i.register("WARN",l.handleWarnAction),i.onDisconnection(l.handleDisconnection),c.finContext.Window.wrapSync(n.SERVICE_IDENTITY).once("closed",l.handleDisconnection))}catch(e){throw e instanceof Error?await o.Log.error(`Failed to connect to Notifications - ${e.name}: ${e.message}`):await o.Log.error(`Failed to connect to Notifications - ${JSON.stringify(e)}`),e}}},855:(e,t)=>{function i(e,t){let i;try{i=JSON.stringify(e)}catch(e){i=t}return i}Object.defineProperty(t,"__esModule",{value:!0}),t.setValidationMethod=t.validateEnvironment=t.safeStringify=t.sanitizeEventType=t.sanitizeFunction=void 0,t.sanitizeFunction=function(e){if("function"!=typeof e)throw Error(`Invalid argument passed: ${i(e,"The provided value")} is not a valid function`);return e},t.sanitizeEventType=function(e){if("notification-action"===e||"notification-created"===e||"notification-toast-dismissed"===e||"notification-closed"===e||"notifications-count-changed"===e||"notification-form-submitted"===e||"notification-reminder-created"===e||"notification-reminder-removed"===e||"notification-form-values-changed"===e||"notification-sound-toggled"===e)return e;throw Error(`Invalid argument passed: ${i(e,"The provided event type")} is not a valid Notifications event type`)},t.safeStringify=i,t.validateEnvironment=()=>{throw Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")},t.setValidationMethod=e=>{t.validateEnvironment=e}},902:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setDispatchMethod=t.tryServiceDispatch=void 0,t.tryServiceDispatch=async(e,t)=>{throw Error("Environment is not initialized..")},t.setDispatchMethod=e=>{t.tryServiceDispatch=e}},929:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},965:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragmentNames=t.PresentationTemplateFragmentNames=t.ContainerTemplateFragmentNames=t.TemplateNames=void 0,t.TemplateNames={markdown:"markdown",list:"list",custom:"custom"},t.ContainerTemplateFragmentNames={container:"container"},t.PresentationTemplateFragmentNames={text:"text",image:"image",list:"list",actionableText:"actionableText"},t.TemplateFragmentNames=Object.assign(Object.assign({},t.ContainerTemplateFragmentNames),t.PresentationTemplateFragmentNames)}},t={},function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}(683)},e.exports=t()}}]);