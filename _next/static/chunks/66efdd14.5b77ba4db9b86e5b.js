(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{85900:function(e,t,n){var i;i=(e,t,n,i,o,r,a,l,s,c,u,d,f,p,h,m,b,g,v,y,_,x,O,C,w,j,S,P)=>{var E,M;return E={0:t=>{"use strict";t.exports=e},67:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCalendarModalDialog=void 0;let i=n(7581);t.useCalendarModalDialog=(e,t,n,o,r,a,l,s,c)=>(0,i.useModalDialog)(t,n,o,(e,t,n)=>Object.assign(Object.assign({type:"Calendar",position:n,width:t.clientWidth},e),{initialValue:a,minDate:l,maxDate:s}),t=>t?e(t):r(),c,"date")},79:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomLocation=t.CustomLocationComponent=void 0;let o=i(n(5932)),r=i(n(2230)),a=n(7250),l=n(4084),s=n(9130),c=n(930),u=n(7451);t.CustomLocationComponent=({state:e,onChange:t,requestNewCustomPosition:n,raiseAnalyticsEvent:i})=>o.default.createElement(f,null,o.default.createElement(l.SettingsToggle,{title:"Custom Position",onChange:e=>{t(e.target.checked),null==i||i({type:"Settings",action:"Toggle Toast Custom Position",value:`${e.target.checked}`,skipValueHashing:!0})},toggleId:"custom-position-toggle",state:"custom"===(null==e?void 0:e.position)}),o.default.createElement(d,{size:a.Size.base},"You can set where your desktop notifications appear more precisely"),"custom"===(null==e?void 0:e.position)&&o.default.createElement(a.Button,{kind:"primary",onClick:n},"Change Position"));let d=(0,r.default)(a.Text).attrs({as:"label"})`
  margin-bottom: ${({theme:e})=>e.px.large};
  color: ${({theme:e})=>e.palette.textHelp};
`,f=(0,r.default)(a.Box)`
  flex-direction: column;
  margin-top: ${({theme:e})=>e.px.large};
`;t.CustomLocation=(0,s.connect)(void 0,e=>({requestNewCustomPosition:()=>e(new c.RequestNewCustomToastPosition),raiseAnalyticsEvent:async(t,n)=>e(new u.RaiseAnalyticsEvent(t,n))}))(t.CustomLocationComponent)},94:e=>{"use strict";e.exports=t},96:e=>{"use strict";e.exports=n},136:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APIMethodHandler=void 0;let i=n(4673),o=n(6012),r=n(8320),a=n(7451),l=n(2753),s=n(5425),c=n(707),u=n(2984),d=n(7234),f=n(4138),p=n(8917);t.APIMethodHandler=class{constructor(e,t){this._store=e,this._scheduler=t}async createNotification(e,t){let n=(0,o.hydrateNotification)(e,{type:"desktop",identity:this.translateIdentity(t),origin:await this.getOrigin(t)});return e.reminder&&e.reminder>Date.now()?await this._store.dispatch(new r.SetReminder(Object.assign(Object.assign({},n),{modifiers:{reminder:e.reminder}}))):await this._store.dispatch(new a.CreateNotification(n)),(0,i.mutable)(n.notification)}async updateNotification(e,t){let n=await this.getOrigin(t),r=(0,o.getAllStoredNotifications)(this._store.state).find(t=>t.notification.id===e.id&&this.isAllowed(t.source,n));if(!r)throw Error(`Cannot find existing notification to update with id: ${e.id}`);let s=(0,o.hydrateUpdateNotification)(e,(0,l.getUpdateValidateOptions)(null==r?void 0:r.notification));await this._store.dispatch(new a.UpdateNotification(s));let c=(0,o.getAllStoredNotifications)(this._store.state).find(t=>t.notification.id===e.id&&this.isAllowed(t.source,n));if(!c)throw Error(`Cannot find updated notification with id: ${e.id}`);return(0,i.mutable)(c.notification)}async clearNotification(e,t){if("string"!=typeof e.id)throw Error("Invalid argument passed to clear: argument must be a string");let n=await this.getOrigin(t),i=this.translateIdentity(t),r=(0,o.encodeId)(e.id,i),l=(0,o.getAllStoredNotifications)(this._store.state).find(e=>e.id===r&&this.isAllowed(e.source,n));return!!l&&(await this._store.dispatch(new a.RemoveNotifications([l])),!0)}async fetchAppNotifications(e,t){let n=await this.getOrigin(t),o=this.translateIdentity(t);return this.getAppNotifications(o.uuid,n).map(e=>(0,i.mutable)(e.notification))}async clearAppNotifications(e,t){let n=await this.getOrigin(t),i=this.translateIdentity(t),o=this.getAppNotifications(i.uuid,n);return await this._store.dispatch(new a.InitiateRemoveAllNotifications(o)),o.length}getAppNotifications(e,t){return this._store.state.notifications.filter(n=>"desktop"===n.source.type&&n.source.identity.uuid===e&&this.isAllowed(n.source,t))}async showNotificationCenter(e){let t=(null==e?void 0:e.navigateToAll)&&(0,s.shouldNavigateToAll)(this._store.getState());await this._store.dispatch(new a.ShowCenter(t))}async hideNotificationCenter(){await this._store.dispatch(new a.HideCenter)}async toggleNotificationCenter(){await this._store.dispatch(new a.ToggleCenterVisibility(a.ToggleCenterVisibilitySource.API))}async getNotificationsCount(){return this._store.state.notifications.length}async getNotificationCenterSettings(e){if(e===c.UserSettings.SOUND_ENABLED)return this._store.state.settings.notificationSoundEnabled;throw Error("Invalid setting requested")}getStatus(){return{connected:!0,version:(0,u.getVersion)(),templateAPIVersion:(0,u.getTemplateAPIVersion)()}}async setDefaultPlatformShortcut(e){let t=this._store.state.settings.platformDefaultShortcut;""===t?await this._store.dispatch(new d.SetPlatformDefaultShortcut(e)):console.warn(`Notifications: Default Platform Shortcut has previously been set to ${t} and cannot be changed`)}async setFormValidationErrors(e,t){let n=this.translateIdentity(t),i=(0,o.encodeId)(e.notificationId,n),r=await this.getOrigin(t);if(!(0,o.getAllStoredNotifications)(this._store.state).find(t=>t.notification.id===e.notificationId&&this.isAllowed(t.source,r)))throw Error(`Attempted to set form validation errors for notification ${i} but the sender does not have permission`);await this._store.dispatch(new f.SetNotificationFormCustomValidationErrors(i,e.errors))}async setFormStatus(e,t){var n,i;let r=this.translateIdentity(t),a=(0,o.encodeId)(e._notificationId,r),l=Object.assign(Object.assign({},e),{_notificationId:a}),s=await this.getOrigin(t);if(!(0,o.getAllStoredNotifications)(this._store.state).find(t=>t.notification.id===e._notificationId&&this.isAllowed(t.source,s)))throw Error(`Attempted to set form status for notification source: ${JSON.stringify(t)} but the sender does not have permission`);(null===(i=null===(n=this._store.state.activeForms)||void 0===n?void 0:n.forms)||void 0===i?void 0:i.find(e=>e.notificationId===a&&"submitted"===e.formStatusOptions.formStatus))||await this._store.dispatch(new p.SetNotificationFormStatusOptions(l))}}},164:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationForm=void 0;let o=i(n(5932)),r=n(258),a=n(7250),l=n(597),s=n(4382),c=n(8768),u=n(9636),d=n(6430),f=n(6075),p=n(8684),h=n(723),m=n(6766);t.NotificationForm=e=>{let{notification:t,onSubmit:n}=e,[i,b]=(0,c.useFormData)(t.notification.form),g=(0,l.buildFormSchema)(i),v=(0,m.getInitialFormValues)(i),y=(0,f.useDispatchRequestCustomValidationDebounced)(),_=(0,h.useNotificationFormAnalytics)(t.id,e.isToast);return o.default.createElement(r.Formik,{key:t.id,initialValues:v,validationSchema:g,validateOnBlur:!0,validateOnChange:!0,validateOnMount:!0,validate:e=>y(new p.RequestNotificationFormCustomValidation(t,e)),onSubmit:e=>{let i=t.notification.buttons.find(e=>e.submit);if(!i)throw Error(`Form was submitted without a submit button for notification ${t.notification.id}`);null==n||n(t,e,i)}},n=>o.default.createElement(u.FormContainer,{templateContent:e.templateContent,fields:i,notificationId:t.id,formErrorsCount:(0,d.getFormikErrorCount)(n)},o.default.createElement(r.Form,{autoComplete:"off"},o.default.createElement(a.Box,{flexDirection:"column",gap:i.length>1?"base":void 0},i.map((t,n)=>{let i=s.WidgetComponentMap[t.widget.type];return i?o.default.createElement(i,{tabIndexOverride:e.tabIndexOverride,formSettings:b,field:t,key:n,raiseAnalytics:_}):(console.error("Unable to render component",t),null)})))))}},194:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Section=t.Transitions=void 0;let o=i(n(5932)),r=n(9130),a=n(7451),l=n(9004),s=n(4887),c=i(n(2230)),u=n(524),d=n(6460),f=n(4248);t.Transitions=(0,c.default)(u.TransitionGroup)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.px.base};
`,t.Section=(0,r.connect)(void 0,e=>({remove:t=>e(new a.RemoveNotifications(t,"Clear")),raiseAnalyticsEvent:async(t,n)=>e(new a.RaiseAnalyticsEvent(t,n))}))(({hasControls:e,section:n,remove:i,raiseAnalyticsEvent:r,onKeyDown:a})=>{let{notifications:c,title:u}=n,[p,h]=o.default.useState(!1),m=c.slice(0,Math.min(s.groupMinimizedStackSize,c.length));return o.default.createElement(o.default.Fragment,null,o.default.createElement(l.Header,{hasControls:e,title:u,itemCount:c.length,onClearAll:()=>{i(c),r({type:"Center",action:"Clear",value:`${u}`,skipValueHashing:!0})},isExpandable:c.length>s.groupMinimizedStackSize,isExpanded:p,onToggleExpanded:()=>{h(!p),r({type:"Center",action:p?"Select Show Fewer":"Select Show All",value:`${u}`})},onKeyDown:null==a?void 0:a(null)}),o.default.createElement(t.Transitions,{"data-testid":"group-section",role:e?"list":void 0},(e&&!p?m:c).map(e=>o.default.createElement(d.FadeTransition,{key:`${e.id}${e.notification.date}`,timeout:200},o.default.createElement(f.NotificationCard,{notification:e,onKeyDown:null==a?void 0:a(e.id)})))))})},258:e=>{"use strict";e.exports=i},260:e=>{"use strict";e.exports=o},295:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},343:function(e,t,n){"use strict";var i,o,r,a,l,s=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.Main=void 0;let d=n(4352),f=n(9603),p=n(7010),h=n(4854),m=n(6858),b=n(7202),g=n(2882),v=n(2716),y=n(9897),_=n(7451),x=n(2750),O=n(7250),C=n(4022),w=i=class extends v.APIExecutionDeferrer{constructor(e,t,n,i){super(e,t),this._apiHandler=n,this._clientController=i,this._webStore=e}async register(e){var t;await g.Injector.init(),this._apiHandler.registerListeners({[f.APITopic.CREATE_NOTIFICATION]:this.defer(this.createNotification.bind(this),!0),[f.APITopic.UPDATE_NOTIFICATION]:this.defer(this.updateNotification.bind(this)),[f.APITopic.CLEAR_NOTIFICATION]:this.defer(this.clearNotification.bind(this)),[f.APITopic.CLEAR_APP_NOTIFICATIONS]:this.defer(this.clearAppNotifications.bind(this)),[f.APITopic.TOGGLE_NOTIFICATION_CENTER]:this.defer(this.toggleNotificationCenter.bind(this)),[f.APITopic.SHOW_NOTIFICATION_CENTER]:this.defer(this.showNotificationCenter.bind(this)),[f.APITopic.HIDE_NOTIFICATION_CENTER]:this.defer(this.hideNotificationCenter.bind(this)),[f.APITopic.GET_NOTIFICATIONS_COUNT]:this.getNotificationsCount.bind(this),[f.APITopic.GET_APP_NOTIFICATIONS]:this.fetchAppNotifications.bind(this),[f.APITopic.GET_PROVIDER_STATUS]:this.getStatus.bind(this),[f.APITopic.SET_FORM_STATUS_OPTIONS]:this.setFormStatus.bind(this),[f.APITopic.SET_FORM_VALIDATION_ERRORS]:this.setFormValidationErrors.bind(this),[f.APITopic.GET_USER_SETTINGS_STATUS]:this.getNotificationCenterSettings.bind(this),[f.APITopic.SET_DEFAULT_PLATFORM_SHORTCUT]:this.setDefaultPlatformShortcut.bind(this),[f.APITopic.ADD_EVENT_LISTENER]:this._clientController.onAddEventListener.bind(this._clientController),[f.APITopic.REMOVE_EVENT_LISTENER]:this._clientController.onRemoveEventListener.bind(this._clientController),[f.APITopic.REGISTER_PLATFORM]:()=>{this.notImplemented(f.APITopic.REGISTER_PLATFORM)},[f.APITopic.DEREGISTER_PLATFORM]:()=>{this.notImplemented(f.APITopic.DEREGISTER_PLATFORM)},[f.APITopic.SET_NOTIFICATION_SECURITY_RULE]:()=>{this.notImplemented(f.APITopic.SET_NOTIFICATION_SECURITY_RULE)}},e.finContext,e.serviceId),e.snapshot&&this._webStore.dispatch(new _.ApplySnapshot(e.snapshot));let n=document.createElement("notification-center");n.setProps({store:this._store}),e.container.appendChild(n),this._store.onAction.add(this.onStoreAction.bind(this)),(null===(t=e.theme)||void 0===t?void 0:t.palette)&&this.setTheme(e.theme),console.log("Notification Center Initialized.")}async onStoreAction(e){e instanceof _.InitiateRemoveAllNotifications&&await this._store.dispatch(new _.RemoveNotifications(e.notifications)),(e instanceof _.CreateNotification||e instanceof _.RemoveNotifications)&&i._countChangeSignal.emit(this._webStore.state.notifications.length),(e instanceof _.ShowCenter||e instanceof _.HideCenter||e instanceof _.ToggleCenterVisibility)&&i._visibilityChangeSignal.emit(this._webStore.state.centerVisible)}async getOrigin(){return"web"}isAllowed(){return!0}translateIdentity(e){return this._clientController.translateClientIdentityToProviderIdentity(e)}notImplemented(e){throw Error(`${e} API is not supported by this version of the OpenFin Web Notification Center.`)}async setTheme(e){let t=(0,O.createTheme)(e.palette);await this._webStore.dispatch(new x.SetTheme({themes:{light:t,dark:t}}))}getSnapshot(){let e=this._webStore.getState();return{applications:Array.from(e.applications.values()),streams:Array.from(e.streams.values()),notifications:e.notifications,reminders:e.reminders}}async applySnapshot(e){await this._webStore.dispatch(new _.ApplySnapshot(e)),i._countChangeSignal.emit(this._webStore.state.notifications.length)}async show(){await this._webStore.dispatch(new _.ShowCenter)}async hide(){await this._webStore.dispatch(new _.HideCenter)}};w._countChangeSignal=new C.Signal,w._visibilityChangeSignal=new C.Signal,w=i=s([(0,d.injectable)(),u(0,(0,d.inject)(b.Inject.STORE)),u(1,(0,d.inject)(b.Inject.SCHEDULER)),u(2,(0,d.inject)(b.Inject.API_HANDLER)),u(3,(0,d.inject)(b.Inject.CLIENT_CONTOLLER)),c("design:paramtypes",["function"==typeof(o=void 0!==m.WebStore&&m.WebStore)?o:Object,"function"==typeof(r=void 0!==p.Scheduler&&p.Scheduler)?r:Object,"function"==typeof(a=void 0!==h.APIHandler&&h.APIHandler)?a:Object,"function"==typeof(l=void 0!==y.ClientController&&y.ClientController)?l:Object])],w),t.Main=w},388:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCollapsibleCardHeaderEdgeCaseBehavior=void 0;let i=n(5932),o=n(1230);t.useCollapsibleCardHeaderEdgeCaseBehavior=(e,t,n,r)=>{let a=(0,o.useCollapsibleCardHeaderOffScreen)(e,t);(0,i.useEffect)(()=>{var n,i,o,l,s;let c;if(null===(o=null===(i=null===(n=null==t?void 0:t.current)||void 0===n?void 0:n.parentElement)||void 0===i?void 0:i.querySelector("[data-cloned-header]"))||void 0===o||o.remove(),(null==t?void 0:t.current)&&(t.current.style.maxHeight="400px"),a&&(null==e?void 0:e.current)&&(null==t?void 0:t.current)){(c=e.current.cloneNode(!0)).setAttribute("data-cloned-header","true");let n=null===(l=t.current.parentElement)||void 0===l?void 0:l.querySelector('[data-role="buttons-container"]');null===(s=t.current.parentElement)||void 0===s||s.insertBefore(c,n),t.current.style.maxHeight="360px",c.style.marginTop="-4px",c.style.marginBottom="-4px",c.style.cursor="pointer";let i=c.querySelector("#icon-container");i&&(i.style.marginRight="4px"),r&&c.addEventListener("click",r)}return()=>{var e,n,i;r&&c&&(c.removeEventListener("click",r),null===(i=null===(n=null===(e=null==t?void 0:t.current)||void 0===e?void 0:e.parentElement)||void 0===n?void 0:n.querySelector("[data-cloned-header]"))||void 0===i||i.remove())}},[a,e,t,n])}},392:e=>{"use strict";e.exports=r},394:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},428:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NumberSpinner=void 0;let l=r(n(5932)),s=n(7250),c=a(n(2230)),u=a(n(7446));t.NumberSpinner=({onChange:e,value:t=0,min:n=Number.MIN_SAFE_INTEGER,max:i=Number.MAX_SAFE_INTEGER,suffix:o="",className:r=""})=>{let a={inputValue:t,displayValue:t.toString(),showSuffix:!0},[s,c]=(0,l.useState)(a),b=(0,l.useRef)(null),g=t=>{c(e=>({inputValue:t,displayValue:t.toString(),showSuffix:e.showSuffix})),e&&e(t)};(0,l.useEffect)(()=>{g((0,u.default)(t,n,i))},[t]);let v=e=>{let t=(0,u.default)(s.inputValue+(e?1:-1),n,i);t!==s.inputValue&&g(t)},y=()=>{let e=Number(s.displayValue);isNaN(e)?c(e=>Object.assign(Object.assign({},e),{displayValue:""})):g((0,u.default)(e,n,i))},_=(e,t)=>{" "!==e.key&&"Enter"!==e.key||(e.preventDefault(),v(t))};return l.default.createElement(d,{ref:b,role:"group","aria-labelledby":"spinner-label spinner-hidden",alignItems:"center",justifyContent:"space-between",className:r,tabIndex:0,onKeyUp:e=>{let t;let{inputValue:o}=s;switch(e.key){case"PageUp":e.preventDefault(),e.stopPropagation(),t=o+5>i?i:o+5;break;case"PageDown":e.preventDefault(),e.stopPropagation(),t=o-5<n?n:o-5;break;case"Home":e.preventDefault(),e.stopPropagation(),t=n;break;case"End":e.preventDefault(),e.stopPropagation(),t=i;break;case"ArrowDown":case"ArrowLeft":e.preventDefault(),e.stopPropagation(),t=o-1<n?n:o-1;break;case"ArrowUp":case"ArrowRight":e.preventDefault(),e.stopPropagation(),t=o+1>i?i:o+1;break;default:return}t!==o&&g(t)},"aria-live":"assertive"},l.default.createElement(f,{id:"spinner-hidden"},"How long a notification will display before disappearing, Duration Time in seconds."),l.default.createElement(p,{role:"button",icon:"MinusIcon","aria-label":"decrement",onClick:()=>v(!1),onKeyDown:e=>_(e,!1),title:"Decrease Duration Time",tabIndex:0}),l.default.createElement(m,{onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),y(),b.current&&b.current.focus())},"aria-label":`Duration Time: ${s.inputValue} ${o}`,role:"spinbutton","aria-valuemin":n,"aria-valuemax":i,"aria-valuenow":t,"aria-valuetext":s.displayValue,value:`${s.displayValue}${s.showSuffix?" "+o:""}`,onChange:e=>{let t=e.target.value.trim();""===t?c(e=>Object.assign(Object.assign({},e),{displayValue:""})):/^\d+$/.test(t)&&c(e=>Object.assign(Object.assign({},e),{displayValue:t}))},onFocus:()=>{c(e=>Object.assign(Object.assign({},e),{showSuffix:!1}))},onBlur:()=>{c(e=>Object.assign(Object.assign({},e),{showSuffix:!0})),y()},title:"Duration Time"}),l.default.createElement(h,{onKeyDown:e=>_(e,!0),role:"button",icon:"PlusIcon","aria-label":"increment",onClick:()=>v(!0),title:"Increase Duration Time",tabIndex:0}))};let d=(0,c.default)(s.Box)`
  position: relative;
  background-color: ${({theme:e})=>e.palette.background6};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({theme:e})=>e.radius.small};
  border: none;
  padding: 4px 0px;
  height: ${({theme:e})=>e.px.xxlarge};
`,f=c.default.div`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,p=(0,c.default)(s.Icon)`
  width: ${({theme:e})=>e.px.xxlarge};
  height: ${({theme:e})=>e.px.xxlarge};
  border: none;
  &:active {
    border: 1px solid ${({theme:e})=>e.palette.inputFocused};
  }
  border-top-left-radius: ${({theme:e})=>e.radius.small};
  border-bottom-left-radius: ${({theme:e})=>e.radius.small};
`,h=(0,c.default)(s.Icon)`
  width: ${({theme:e})=>e.px.xxlarge};
  height: ${({theme:e})=>e.px.xxlarge};
  border: none;
  &:active {
    border: 1px solid ${({theme:e})=>e.palette.inputFocused};
  }
  border-top-right-radius: ${({theme:e})=>e.radius.small};
  border-bottom-right-radius: ${({theme:e})=>e.radius.small};
`,m=c.default.input`
  border: none;
  text-align: center;
  padding: 0;
  margin: 0;
  height: ${({theme:e})=>e.px.xxlarge};
  width: 54px;
  background-color: ${({theme:e})=>e.palette.background6};
  color: inherit;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }

  &:hover,
  &:focus-within {
    outline: none;
    border: 1px solid ${({theme:e})=>e.palette.inputFocused};
  }
  outline: none;
  border-left: 1px solid ${({theme:e})=>e.palette.inputBorder};
  border-right: 1px solid ${({theme:e})=>e.palette.inputBorder};
  user-select: none;
  ${s.Mixins.textOverflow};
`},436:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CenterRoutes=void 0;let i=n(6345),o=n(8180),r=n(7586);t.CenterRoutes=[{Component:i.NotificationsPanel,exact:!0,path:r.ROUTES.NOTIFICATIONS},{Component:o.SettingsPanel,exact:!1,path:r.ROUTES.SETTINGS}]},512:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(8364),t),o(n(1474),t),o(n(4415),t),o(n(5915),t)},524:e=>{"use strict";e.exports=a},545:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorItem=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(7250);t.ErrorItem=e=>{let{id:t,message:n,onDismiss:i}=e;return l.createElement(u,null,l.createElement(d,{icon:"ExclamationTriangleIcon"}),l.createElement(f,null,n),l.createElement(p,{icon:"Cross1Icon",onClick:()=>{i(t)}}))};let u=(0,s.default)(c.Box)`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  grid-gap: ${({theme:e})=>e.px.large};
  height: ${({theme:e})=>e.px.xxxxlarge};
  width: 100%;
  align-items: center;
  padding: 0 ${({theme:e})=>e.px.large};
  background-color: ${({theme:e})=>e.palette.background4};
`,d=(0,s.default)(c.Icon)`
  color: ${({theme:e})=>e.palette.statusCritical};
`,f=s.default.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  font-size: ${({theme:e})=>e.fontSize.small};
  margin-right: ${({theme:e})=>e.px.small};
  user-select: none;
`,p=(0,s.default)(c.Icon)`
  cursor: pointer;
`},597:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.parseFormData=t.buildFormSchema=t.buildFieldSchema=t.FieldValidationFunctions=void 0;let a=r(n(4298)),l=n(3955),s=e=>null==e;t.FieldValidationFunctions={[l.FieldType.radioGroup]:Object.assign({},{required:(e,t)=>t.arg?e.required(t.invalidMessage):e}),[l.FieldType.checkboxGroup]:Object.assign({},{required:(e,t)=>t.arg?e.required(t.invalidMessage):e}),[l.FieldType.date]:Object.assign({},{required:(e,t)=>t.arg?e.required(t.invalidMessage):e}),[l.FieldType.time]:Object.assign({},{required:(e,t)=>t.arg?e.required(t.invalidMessage):e}),[l.FieldType.string]:Object.assign(Object.assign({min:(e,t)=>{var n;return e.min(null!==(n=t.arg)&&void 0!==n?n:0,t.invalidMessage)},max:(e,t)=>{var n;return e.max(null!==(n=t.arg)&&void 0!==n?n:0,t.invalidMessage)},length:(e,t)=>{var n;return e.length(null!==(n=t.arg)&&void 0!==n?n:0,t.invalidMessage)}},{required:(e,t)=>t.arg?e.required(t.invalidMessage):e}),{match:(e,t)=>{if(!t.arg)return e;let n=new RegExp(t.arg);return e.matches(n,{message:t.invalidMessage,excludeEmptyString:!0})}}),[l.FieldType.number]:{max:(e,t)=>s(t.arg)?e:e.max(t.arg,t.invalidMessage),min:(e,t)=>s(t.arg)?e:e.min(t.arg,t.invalidMessage),lessThan:(e,t)=>s(t.arg)?e:e.lessThan(t.arg,t.invalidMessage),moreThan:(e,t)=>s(t.arg)?e:e.moreThan(t.arg,t.invalidMessage),positive:(e,t)=>e.positive(t.invalidMessage),negative:(e,t)=>e.negative(t.invalidMessage),required:(e,t)=>e.required(t.invalidMessage)},[l.FieldType.boolean]:{}};let c={[l.FieldType.string]:a.StringSchema,[l.FieldType.number]:a.NumberSchema,[l.FieldType.boolean]:a.BooleanSchema,[l.FieldType.date]:a.ObjectSchema,[l.FieldType.checkboxGroup]:a.ArraySchema,[l.FieldType.radioGroup]:a.StringSchema,[l.FieldType.time]:a.ObjectSchema};function u(e){let n=t.FieldValidationFunctions[e.type];if(!n)throw Error("Invalid field");let i=function(e){let{type:t}=e;return new c[t]}(e);if(!e.validation)return i;for(let[t,o]of Object.entries(e.validation)){let r=n[t];if(r){let n=null;try{n=r(i,o)}catch(n){console.error(`Error parsing field ${t}`,o,e)}i=null!=n?n:i}}return e.label&&(i.spec.label=e.label),i}t.buildFieldSchema=u,t.buildFormSchema=function(e){let t={};for(let n of e)t[n.key]=u(n);return a.object().shape(t)},t.parseFormData=function(e){return e.map(e=>({initialValue:e.value,fieldData:e,widget:e.widget,schema:u(e)})),[]}},611:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.getTemplateSchema=void 0;let a=r(n(4298)),l=n(512),s=n(3694),c=n(6188),u=a.object({id:a.string().required(),buttons:c.ButtonsSchema.clone(),customData:a.object().optional().default({})}),d=u.clone().shape({template:a.mixed().required(),body:a.string().optional().default(null),form:s.templateMarkDownFormSchema}).label("Notification Update (Markdown)"),f=u.clone().shape({template:a.mixed().required(),list:a.mixed().optional().test({name:"List object",message:"Invalid list object",test:e=>{if(!e)return!0;if(e&&"object"!=typeof e)throw Error("Not an object");return Object.entries(null!=e?e:{}).every(([e,t])=>"string"==typeof e&&"string"==typeof t)}})}).label("Update Notification (List)"),p=u.clone().shape({template:a.mixed().required(),form:s.templateCustomFormSchema,templateData:a.mixed().optional().test({name:"Temp object",message:"Invalid list object",test:function(e){var t,n;return!e||((null===(n=null===(t=this.options)||void 0===t?void 0:t.context)||void 0===n?void 0:n.fragments).presentationFragments.forEach(t=>{let n=e[t.dataKey];if(!t.optional&&!n)throw Error(`templateData["${t.dataKey}"] is not optional and must exist in template data.`);if(n){if(("text"===t.type||"image"===t.type)&&"string"!=typeof n)throw Error(`templateData["${t.dataKey}"] is referred by a ${t.type} fragment and must be a string type.`);if("list"===t.type&&(!Array.isArray(n)||n.some(e=>2!==e.length||"string"!=typeof e[0]||"string"!=typeof e[1])))throw Error(`templateData["${t.dataKey}"] is referred by a list fragment and must be a ListPairs (Array of [string, string]) type.`)}}),!0)}})}).label("Update Notification (Custom)"),h={[l.TemplateNames.markdown]:d,[l.TemplateNames.list]:f,[l.TemplateNames.custom]:p};t.getTemplateSchema=e=>{if(!e.template)throw Error("Template type cannot be null");let t=h[null==e?void 0:e.template];if(!t)throw Error(`Cannot find template type: ${e.template}`);return t}},660:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.HistoryContext=void 0;let a=r(n(5932));t.HistoryContext=a.createContext({})},697:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ToastPositionSelector=void 0;let a=r(n(5932)),l=n(7250),s=n(79),c=n(785);t.ToastPositionSelector=e=>a.createElement(a.Fragment,null,a.createElement(d,Object.assign({},e,{title:"Position",id:"toast-position"})),a.createElement(s.CustomLocation,{state:e.value,onChange:t=>{var n,i;null===(n=e.onChange)||void 0===n||n.call(e,{position:t?"custom":"bottom-right",customPosition:null===(i=e.value)||void 0===i?void 0:i.customPosition})}}));let u=["top-left","top-right","bottom-left","bottom-right"],d=({value:e,title:t,id:n="",onChange:i=()=>{}})=>{let o=t=>{i(Object.assign(Object.assign({},e||{}),{position:t}))};return a.createElement("div",{role:"radiogroup"},a.createElement(c.TitleElement,{htmlFor:n,size:l.Size.large},t),a.createElement(c.StyledSelectors,{tabIndex:0,onKeyUp:t=>{let n=u.findIndex(t=>t===(null==e?void 0:e.position));switch(t.key){case"ArrowUp":case"ArrowLeft":t.preventDefault(),t.stopPropagation(),i(0===n?Object.assign(Object.assign({},e),{position:"bottom-right"}):Object.assign(Object.assign({},e),{position:u[n-1]}));break;case"ArrowDown":case"ArrowRight":t.preventDefault(),t.stopPropagation(),n===u.length-1?i(Object.assign(Object.assign({},e),{position:"top-left"})):i(Object.assign(Object.assign({},e),{position:u[n+1]}))}},id:n},u.map(t=>a.createElement(c.Selector,{key:t,position:t,onClick:o,active:(null==e?void 0:e.position)===t}))))}},707:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)},l=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.setAllowedOrigins=t.getUserSettingStatus=t.UserSettings=t.getNotificationsCount=t.hide=t.show=t.setDefaultPlatformShortcut=t.toggleNotificationCenter=t.clearAll=t.getAll=t.clear=t.update=t.create=t.removeEventListener=t.addEventListener=t.VERSION=t.NotificationIndicatorType=t.IndicatorColor=t.NotificationIndicatorWithCustomColor=t.NotificationIndicator=t.NotificationOptions=t.provider=t.actions=void 0;let s=n(6455),c=n(3816),u=n(9603),d=n(3657),f=r(n(6451));t.provider=f;let p=n(8173),h=n(6865);Object.defineProperty(t,"NotificationIndicator",{enumerable:!0,get:function(){return h.NotificationIndicator}}),Object.defineProperty(t,"NotificationIndicatorWithCustomColor",{enumerable:!0,get:function(){return h.NotificationIndicatorWithCustomColor}}),Object.defineProperty(t,"NotificationIndicatorType",{enumerable:!0,get:function(){return h.IndicatorType}}),Object.defineProperty(t,"IndicatorColor",{enumerable:!0,get:function(){return h.IndicatorColor}});let m=n(4415);Object.defineProperty(t,"NotificationOptions",{enumerable:!0,get:function(){return m.NotificationOptions}});let b=r(n(6455));t.actions=b,a(n(6455),t),a(n(7204),t),a(n(295),t),a(n(8912),t),a(n(3154),t),a(n(5050),t),a(n(512),t),t.VERSION="2.9.1";let g=(0,d.getEventRouter)();function v(e){let{notification:t}=e;return Object.assign(Object.assign({},e),{notification:Object.assign(Object.assign({},t),{date:new Date(t.date),expires:null!==t.expires?new Date(t.expires):null})})}g.registerDeserializer("notification-created",e=>v(e)),g.registerDeserializer("notification-toast-dismissed",e=>v(e)),g.registerDeserializer("notification-closed",e=>v(e)),g.registerDeserializer("notification-action",e=>{var t;let n=v(e),{controlSource:i,controlIndex:o}=n,r=l(n,["controlSource","controlIndex"]);return e.trigger===s.ActionTrigger.CONTROL?Object.assign(Object.assign({},r),{control:null===(t=e.notification[i])||void 0===t?void 0:t[o]}):r}),g.registerDeserializer("notifications-count-changed",e=>e),g.registerDeserializer("notification-reminder-created",e=>{let t=v(e),{reminderDate:n}=t;return Object.assign(Object.assign({},l(t,["reminderDate"])),{reminderDate:new Date(n)})}),g.registerDeserializer("notification-reminder-removed",e=>v(e)),g.registerDeserializer("notification-sound-toggled",e=>e),t.addEventListener=async function(e,t){var n,i;(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t);let o=d.eventEmitter.listenerCount(e);"notification-form-submitted"===e&&(n=t,t=e=>{let t=e.notification.id;e.setFormStatus=e=>(0,c.tryServiceDispatch)(u.APITopic.SET_FORM_STATUS_OPTIONS,Object.assign(Object.assign({},e),{_notificationId:t})),n(e)}),"notification-form-values-changed"===e&&(i=t,t=e=>{e.setErrors=t=>(0,c.tryServiceDispatch)(u.APITopic.SET_FORM_VALIDATION_ERRORS,{errors:t,notificationId:e.notification.id}),i(e)}),d.eventEmitter.addListener(e,t),0===o&&1===d.eventEmitter.listenerCount(e)&&await (0,c.tryServiceDispatch)(u.APITopic.ADD_EVENT_LISTENER,e)},t.removeEventListener=async function(e,t){(0,p.validateEnvironment)(),e=(0,p.sanitizeEventType)(e),t=(0,p.sanitizeFunction)(t),1===d.eventEmitter.listenerCount(e)&&d.eventEmitter.listeners(e)[0]===t&&await (0,c.tryServiceDispatch)(u.APITopic.REMOVE_EVENT_LISTENER,e),d.eventEmitter.removeListener(e,t)},t.create=async function(e,t){if("object"!=typeof e||null===e)throw Error("Invalid argument passed to create: argument must be an object and must not be null");if(void 0!==e.date&&!(e.date instanceof Date))throw Error('Invalid argument passed to create: "date" must be a valid Date object');if(void 0!==e.expires&&null!==e.expires&&!(e.expires instanceof Date))throw Error('Invalid argument passed to create: "expires" must be null or a valid Date object');if(t&&t.reminderDate){if(!1===e.allowReminder)throw Error('You must not specify a reminder date for a notification with "allowReminder" option set to false.');if(!(t.reminderDate instanceof Date))throw Error('Invalid argument passed to reminder Options: "date" must a valid Date object');if(e.expires&&e.expires.getTime()<t.reminderDate.getTime())throw Error("Expiration date must not be earlier than reminder date.")}void 0!==e.category&&null!==e.category||(e.category="default");let n=await (0,c.tryServiceDispatch)(u.APITopic.CREATE_NOTIFICATION,Object.assign(Object.assign({},e),{date:e.date&&e.date.valueOf(),expires:e.expires&&e.expires.valueOf(),reminder:(null==t?void 0:t.reminderDate)&&t.reminderDate.valueOf()}));return Object.assign(Object.assign({},n),{date:new Date(n.date),expires:null!==n.expires?new Date(n.expires):null})},t.update=async function(e){if("object"!=typeof e||null===e)throw Error("Invalid argument passed to create: argument must be an object and must not be null");if(!e.id)throw Error('Invalid argument passed to create: "id" must be Id of previously created Notification');return Object.assign({},await (0,c.tryServiceDispatch)(u.APITopic.UPDATE_NOTIFICATION,Object.assign({},e)))},t.clear=async function(e){return(0,c.tryServiceDispatch)(u.APITopic.CLEAR_NOTIFICATION,{id:e})},t.getAll=async function(){return(await (0,c.tryServiceDispatch)(u.APITopic.GET_APP_NOTIFICATIONS,void 0)).map(e=>Object.assign(Object.assign({},e),{indicator:e.indicator||null,date:new Date(e.date),expires:null!==e.expires?new Date(e.expires):null}))},t.clearAll=async function(){return(0,c.tryServiceDispatch)(u.APITopic.CLEAR_APP_NOTIFICATIONS,void 0)},t.toggleNotificationCenter=async function(){return(0,c.tryServiceDispatch)(u.APITopic.TOGGLE_NOTIFICATION_CENTER,void 0)},t.setDefaultPlatformShortcut=function(e){return(0,c.tryServiceDispatch)(u.APITopic.SET_DEFAULT_PLATFORM_SHORTCUT,e)},t.show=async function(e){return(0,c.tryServiceDispatch)(u.APITopic.SHOW_NOTIFICATION_CENTER,e)},t.hide=async function(){return(0,c.tryServiceDispatch)(u.APITopic.HIDE_NOTIFICATION_CENTER,void 0)},t.getNotificationsCount=async function(){return(0,c.tryServiceDispatch)(u.APITopic.GET_NOTIFICATIONS_COUNT,void 0)},(t.UserSettings||(t.UserSettings={})).SOUND_ENABLED="soundEnabled",t.getUserSettingStatus=async function(e){return(0,c.tryServiceDispatch)(u.APITopic.GET_USER_SETTINGS_STATUS,e)},t.setAllowedOrigins=async e=>(0,c.tryServiceDispatch)(u.APITopic.SET_NOTIFICATION_SECURITY_RULE,{allowedOrigins:e})},714:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroupWidgetComponent=void 0;let o=i(n(5932)),r=n(7250),a=n(258),l=n(7260),s=n(1971),c=n(5232),u=n(5484);t.RadioGroupWidgetComponent=e=>o.default.createElement(a.Field,{name:e.field.key,component:d,radioGroupField:e.field,formSettings:e.formSettings,raiseAnalytics:e.raiseAnalytics});let d=({raiseAnalytics:e,radioGroupField:t,field:n,form:i,formSettings:a})=>((0,u.useRaiseFieldAnalytics)(t,e),o.default.createElement(l.InputContainer,{flexDirection:"column"},o.default.createElement(r.RadioGroup,{onChange:e=>{i.setFieldTouched(t.key,!0),i.setFieldValue(t.key,e.target.value)},label:(0,c.getLabelText)(t,a),helperText:t.helperText,name:t.key,value:n.value,key:`${t.key}_${n.value}`},t.widget.group.map(e=>o.default.createElement(r.RadioInput,{key:`${t.key}_${e.value}`,label:e.label,value:e.value}))),o.default.createElement(s.ErrorLabel,{name:n.name})))},723:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useNotificationFormAnalytics=void 0;let i=n(5932),o=n(9130),r=n(7451);t.useNotificationFormAnalytics=(e,t)=>{let n=(0,o.useDispatch)();return(0,i.useCallback)((i,o,a)=>{n(new r.RaiseAnalyticsEvent({type:t?"Toast":"Notification",action:o,value:a,data:{fieldLabel:i,notificationId:e}}))},[e,n,t])}},746:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.PlatformIcon=void 0;let a=r(n(5932)),l=r(n(2230)),s=n(7250),c=n(8833);t.PlatformIcon=({id:e,icon:t,title:n,selected:i,count:o,onPlatformSelect:r})=>{var l,s;let h=(0,c.useLoaded)(t),m=!e,b=m?"All":null!==(l=null==n?void 0:n[0])&&void 0!==l?l:null==e?void 0:e[0];return a.createElement(f,{"data-testid":"platform-icon",onClick:()=>{r(e)},allIcon:m,title:`${m?"All":null!==(s=null!=n?n:e)&&void 0!==s?s:"Platform"} Notifications`},o>0&&a.createElement(u,{count:o,max:99}),a.createElement(d,{src:t},(h===c.LoadState.ERROR||h===c.LoadState.LOADING)&&b),i&&a.createElement(p,null))};let u=(0,l.default)(s.Badge)`
  position: absolute;
  right: 0;
  top: -${({theme:e})=>e.px.small};
  transform: scale(0.85);
  user-select: none;
`,d=l.default.button`
  align-items: center;
  justify-content: center;
  display: flex;
  height: ${({theme:e})=>e.px.xxxlarge};
  width: ${({theme:e})=>e.px.xxxlarge};
  border: none;
  border-radius: ${({theme:e})=>e.px.xsmall};
  color: ${({theme:e})=>e.palette.background1};
  background-color: ${({theme:e})=>e.palette.textDefault};
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  user-select: none;
  text-transform: capitalize;
`,f=(0,l.default)(s.Box)`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({allIcon:e})=>e?l.css`
          margin-right: ${({theme:e})=>e.px.small};
        `:l.css`
          margin-left: ${({theme:e})=>e.px.small};
        `}
`,p=(0,l.default)(s.Box)`
  border-bottom: 1px ${({theme:e})=>e.palette.textDefault} solid;
  width: ${({theme:e})=>e.px.xxxlarge};
  margin-top: ${({theme:e})=>e.px.xsmall};
`},768:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handleTutorialButtonAction=t.isTutorialNotification=t.makeRemindersTutorialNotification=void 0;let i=n(7451),o=n(7527),r=n(5172),a={action:"goToReminders"};t.makeRemindersTutorialNotification=function(e,t){var n;return n={id:"openfin-notifications-reminder-tutorial-card",date:Date.now(),title:"You have successfully set a reminder!",body:'You can find all notifications with a reminder in the Notification Center under the "Reminders" category.',allowReminder:!1,buttons:[{title:"View Reminders",cta:!0,onClick:a}],icon:e},Object.assign(Object.assign({},(0,r.hydrateNotification)(n,t)),{modifiers:{tutorial:!0}})},t.isTutorialNotification=function(e){var t;return!!(null===(t=e.modifiers)||void 0===t?void 0:t.tutorial)},t.handleTutorialButtonAction=async function(e,t){if(e.action!==a.action)throw Error(`Unknown action for tutorial card button: ${e}`);await t.dispatch(new i.ShowCenter),await t.dispatch(new o.SetSelectedCategory("reminders"))}},785:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StyledSelectors=t.TitleElement=t.Selector=void 0;let s=r(n(5932)),c=l(n(2230)),u=n(7250);t.Selector=function(e){var{position:t,active:n=!1,onClick:i=()=>{}}=e,o=a(e,["position","active","onClick"]);return s.createElement(d,Object.assign({role:"radio",onClick:()=>i(t),onKeyPress:e=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),i(t))},"aria-checked":n,"aria-label":t},o),s.createElement(f,null,s.createElement(p,{quad:"top-left"===t||"top-right"===t||"bottom-left"===t||"bottom-right"===t,active:n,left:t.includes("left"),top:t.includes("top")})),s.createElement(h,null,t))},t.TitleElement=(0,c.default)(u.Text).attrs({as:"label"})`
  margin-bottom: ${({theme:e})=>e.px.base};
`;let d=c.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 110px;
  width: 154px;
  padding: 7px;
  border-radius: ${({theme:e})=>e.px.xsmall};
  cursor: pointer;
  border: 1px solid transparent;
  transition: background 125ms ease-in;

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.palette.inputFocused};
  }

  &[aria-checked='true'] {
    background: ${({theme:e})=>e.palette.background6};
    cursor: auto;
  }

  &:hover:not([aria-checked='true']) {
    background: ${({theme:e})=>e.palette.background5};
  }
`,f=c.default.div`
  display: flex;
  border-radius: ${({theme:e})=>e.px.xsmall};
  background: ${({theme:e})=>e.palette.background1};
  min-height: 78px;
  width: 140px;
  padding: 6px;
`,p=c.default.div`
  margin-left: ${({left:e})=>e?"unset":"auto"};
  margin-right: ${({left:e})=>e?"auto":"unset"};

  margin-top: ${({top:e})=>e?"unset":"auto"};
  margin-bottom: ${({top:e})=>e?"auto":"unset"};

  border-radius: 1px;
  width: ${({theme:e})=>e.px.xlarge};
  height: 100%;
  background: ${({active:e,theme:t})=>e?t.palette.brandPrimary:t.palette.background6};
  transition: background 125ms ease-in;

  ${({quad:e})=>e?"max-height: 15px;":""}
`,h=c.default.div`
  font-size: ${({theme:e})=>e.px.base};
  font-style: normal;
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  line-height: ${({theme:e})=>e.lineHeight.text};
  letter-spacing: 0px;
  text-align: left;
  margin: 5px 0;
  text-transform: capitalize;
`;t.StyledSelectors=c.default.div`
  display: grid;
  grid-gap: ${({theme:e})=>e.px.xsmall};
  grid-template-columns: 1fr 1fr;
`},790:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validateTemplateData=void 0;let i=n(9611),o=n(4692),r=n(2984),a=n(6188);t.validateTemplateData=function(e,t){var n;let l=e.templateOptions,s=l.body,c=(0,i.pickBestComposition)(s.compositions);if(!c&&!s.fallbackText)throw Error(`Could not find a suitable composition with the version supported by the service.      Notification Center instance might be too old to show this template. (Template API Version: ${(0,r.getTemplateAPIVersion)()})`);s.compositions=[],c&&(a.CustomTemplateDataSchema.validateSync(e.templateData,{context:{fragments:(0,o.flattenLayout)(c.layout)}}),s.compositions.push(c)),t&&e.indicator&&(null===(n=l.indicator)||void 0===n?void 0:n.color)&&(e.indicator.color=l.indicator.color)}},925:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalProviderStyles=void 0;let i=n(7250),o=n(2230);t.GlobalProviderStyles=o.createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    font-family: ${({theme:e})=>e.fontFamily};
    font-size: ${({theme:e})=>e.fontSize.base};
    line-height: ${({theme:e})=>e.lineHeight.text};
    color: ${({theme:e})=>e.palette.textDefault};
    background-color: ${({theme:e})=>e.palette.background2};
    caret-color: ${({theme:e})=>e.palette.textDefault};
  }

  #toast-container {
    padding: 0 !important;
    margin: 0;
    overflow: hidden !important;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  &, * {
    ${i.Mixins.scrollbar.base}
  }

  .notification-center {
    width: ${"345px"};
    display: flex;
    flex-flow: column;
    height: 100%;
    background-color: ${({theme:e})=>e.palette.background2};
  }

  #react-app {
    height: 100%;
  }

  .no-select {
    user-select: none;
  }

  .single-line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    color: ${({theme:e})=>e.palette.textDefault};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    100% {
      opacity: 0;
      transform: translate3d(200%, 0, 0);
      perspective: 1000;
    }
  }
`},930:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ToastPositionerValidStateChange=t.ToastPositionerDragChange=t.RequestSetToastLocation=t.ExitSetCustomToastPosition=t.RequestNewCustomToastPosition=void 0;let i=n(6566);class o extends i.Action{constructor(){super()}reduce(e){return Object.assign(Object.assign({},e),{centerVisible:!1,toastPositioning:Object.assign(Object.assign({},e.toastPositioning),{isSettingPosition:!0})})}}t.RequestNewCustomToastPosition=o;class r extends i.Action{constructor(){super()}reduce(e){return Object.assign(Object.assign({},e),{centerVisible:!0,toastPositioning:Object.assign(Object.assign({},e.toastPositioning),{isSettingPosition:!1})})}}t.ExitSetCustomToastPosition=r;class a extends i.Action{constructor(e){super(),this.position=e}}t.RequestSetToastLocation=a;class l extends i.KeyedAction{constructor(e){super("toastPositioning"),this.state=e}reduce(e){return Object.assign(Object.assign({},e),{isDragging:this.state})}}t.ToastPositionerDragChange=l;class s extends i.KeyedAction{constructor(e){super("toastPositioning"),this.state=e}reduce(e){return Object.assign(Object.assign({},e),{validPosition:this.state})}}t.ToastPositionerValidStateChange=s},978:e=>{"use strict";e.exports=l},1037:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CenterPositionSelector=void 0;let a=r(n(5932)),l=n(7250),s=n(785);t.CenterPositionSelector=e=>{let{value:t,title:n,id:i="",onChange:o=()=>{}}=e;return a.createElement("div",{role:"radiogroup"},a.createElement(s.TitleElement,{htmlFor:i,size:l.Size.large},n),a.createElement(s.StyledSelectors,{tabIndex:0,onKeyUp:e=>{switch(e.key){case"ArrowUp":case"ArrowLeft":case"ArrowDown":case"ArrowRight":e.preventDefault(),e.stopPropagation(),"left"===t&&o("right"),"right"===t&&o("left")}},id:i},a.createElement(s.Selector,{position:"left",onClick:o,active:"left"===t}),a.createElement(s.Selector,{position:"right",onClick:o,active:"right"===t})))}},1168:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateListComponent=void 0;let o=i(n(5932)),r=i(n(2230)),a=n(7250);t.TemplateListComponent=e=>{let{notification:t}=e;return o.default.createElement(l,null,o.default.createElement(a.DefinitionList,{definitions:new Map(Object.entries(t.notification.list))}))};let l=r.default.div`
  flex: 1;
  width: 100%;
`},1230:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCollapsibleCardHeaderOffScreen=void 0;let i=n(5932),o=(e,t)=>{let n=null==e?void 0:e.current,i=null==t?void 0:t.current;if(n&&i){let e=n.getBoundingClientRect(),t=i.getBoundingClientRect(),o=e.top-t.top,r=e.bottom-t.top,a=t.bottom-t.top;return o<0||r>a+40}return!1};t.useCollapsibleCardHeaderOffScreen=(e,t)=>{let[n,r]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let n=()=>r(o(e,t));return(null==t?void 0:t.current)&&t.current.addEventListener("scroll",n),()=>{(null==t?void 0:t.current)&&t.current.removeEventListener("scroll",n)}},[e,t]),(0,i.useEffect)(()=>r(o(e,t)),[e,t]),n}},1270:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useCollapsibleCardHeaderScroll=void 0;let i=n(5932);t.useCollapsibleCardHeaderScroll=(e,t,n)=>{(0,i.useEffect)(()=>{var i;n&&(null==t?void 0:t.current)&&(null==e?void 0:e.current)&&(t.current.scrollTop=null==e?void 0:e.current.offsetTop,t.current.scroll({behavior:"auto",top:null===(i=e.current.parentElement)||void 0===i?void 0:i.offsetTop}))},[n,e,t])}},1351:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxWidgetComponent=void 0;let o=n(7250),r=n(258),a=i(n(5932)),l=i(n(2230)),s=n(5232),c=n(5484);t.CheckboxWidgetComponent=e=>((0,c.useRaiseFieldAnalytics)(e.field,e.raiseAnalytics),a.default.createElement(r.Field,{name:e.field.key},({field:t})=>a.default.createElement(u,null,a.default.createElement(o.Checkbox,Object.assign({},t,{checked:t.value,label:(0,s.getLabelText)(e.field,e.formSettings),tabIndex:e.tabIndexOverride,helperText:e.field.helperText})))));let u=(0,l.default)(o.Box)`
  width: 100%;
`},1413:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateComponentMap=void 0;let i=n(4415),o=n(6812),r=n(6684),a=n(1168);t.TemplateComponentMap={[i.TemplateNames.markdown]:r.TemplateMarkdownComponent,[i.TemplateNames.list]:a.TemplateListComponent,[i.TemplateNames.custom]:o.TemplateCustomComponent}},1474:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},1569:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useTooltip=t.isElementOverflown=void 0;let i=n(5932);function o(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}t.isElementOverflown=o,t.useTooltip=e=>(0,i.useCallback)(t=>{t&&e&&(o(t)?t.title=e:t.title="")},[e])},1656:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMenuModalDialog=void 0;let i=n(7581);t.useMenuModalDialog=(e,t,n,o,r,a,l,s,c)=>(0,i.useModalDialog)(t,n,r,(e,t,n)=>Object.assign(Object.assign({type:"Menu",position:n,width:t.clientWidth,options:[o]},e),{selectedOption:l}),t=>t?e(t):a(),s,c)},1827:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationFormEditStart=void 0;let i=n(6566),o=n(7451);class r extends i.Action{constructor(e){super(),this.notificationId=e}async call(e,t){await e.dispatch(new o.Freeze),await t()}reduce(e){var t,n,i,o;let r=null!==(n=null===(t=e.activeForms)||void 0===t?void 0:t.forms)&&void 0!==n?n:[];return Object.assign(Object.assign({},e),{activeForms:{focusedFormNotificationId:this.notificationId,createNotificationsCount:null!==(o=null===(i=e.activeForms)||void 0===i?void 0:i.createNotificationsCount)&&void 0!==o?o:0,forms:[{notificationId:this.notificationId,formStatusOptions:{formStatus:"not-submitted"}},...r.filter(e=>e.notificationId!==this.notificationId)]}})}}t.NotificationFormEditStart=r},1922:e=>{"use strict";e.exports=s},1971:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorLabel=void 0;let o=i(n(5932)),r=n(258),a=n(7250);t.ErrorLabel=e=>{let{name:t}=e,{errors:n,touched:i}=(0,r.useFormikContext)(),l=n[t],s=!!l,c=i[t];return s&&c?o.default.createElement("div",{"data-test-id":"validation-error"},o.default.createElement(a.ValidationError,null,"string"==typeof l?l:"Invalid value")):null}},2124:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.InfoBanner=t.IndicatorBanner=void 0;let a=n(7250),l=r(n(5932)),s=r(n(2230)),c=n(6865),u=n(1569),d=n(9872);t.IndicatorBanner=e=>{let{indicator:t,children:n,alignment:i}=e,o="center"===i?h.horizontal:h.vertical,r=t.text||t.type,a=(0,u.useTooltip)(r);return l.createElement(o.Container,{className:"indicator","data-testid":"indicator",indicator:t,alignItems:"center",key:`${i}-indicator`},l.createElement(o.TextWrapper,null,l.createElement(o.Message,{ref:a,indicator:t,alignment:i,"data-testid":"text"},n||r)))},t.InfoBanner=({text:e})=>l.createElement(t.IndicatorBanner,{indicator:{text:e,color:c.IndicatorColor.GRAY},alignment:"center"});let f=s.css`
  color: ${({indicator:e,theme:t})=>(0,d.getIndicatorColor)("foreground",e,t)};
`,p=s.css`
  background: ${({indicator:e,theme:t})=>(0,d.getIndicatorColor)("background",e,t)};
`,h={horizontal:{CountWrapper:(0,s.default)(a.Box)`
      min-width: ${e=>e.theme.px.xxxxlarge};
      width: ${e=>e.theme.px.xxxxlarge};
      z-index: 100;
    `,TextWrapper:(0,s.default)(a.Box)`
      width: ${({shift:e,theme:t})=>e?`calc(100% - ${t.px.xxxxlarge})`:"100%"};
      & > * {
        width: ${({shift:e,theme:t})=>e?`calc(100% - ${t.px.xxlarge})`:"100%"} !important;
        margin-left: 0;
        &:not([title]) {
          margin-left: -${({shift:e,theme:t})=>e?t.unit.xxlarge/2+"px":"0"};
        }
      }
    `,StackCount:(0,s.default)(a.Badge)`
      background: rgba(0, 0, 0, 0.25);
      border-radius: ${e=>e.theme.radius.small};
      justify-self: flex-start;
      box-shadow: none;
    `,Message:(0,s.default)(a.Text)`
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      ${a.Mixins.textOverflow};
      ${f}
    `,Container:(0,s.default)(a.Box)`
      user-select: none;
      position: relative;
      width: 100%;
      height: ${e=>e.theme.px.xxlarge};
      padding: 0 ${e=>e.theme.px.small};
      ${p}
    `},vertical:{CountWrapper:(0,s.default)(a.Box)`
      z-index: 100;
    `,TextWrapper:(0,s.default)(a.Box)`
      justify-content: center;
      flex: 1;
      width: ${({theme:e})=>e.px.xlarge};
      writing-mode: vertical-rl;
      padding-top: ${({theme:e})=>e.px.xsmall};
      overflow: hidden;
    `,Message:(0,s.default)(a.Text)`
      transform: ${({alignment:e})=>"left"===e?"rotate(180deg)":""};
      text-align: center;
      text-transform: uppercase;
      ${a.Mixins.textOverflow};
      ${f}
    `,StackCount:(0,s.default)(a.Badge)`
      background: rgba(0, 0, 0, 0.25);
      border-radius: ${({theme:e})=>e.radius.small};
      box-shadow: none;
      align-self: center;
      /* next 3 values are not in theme.px */
      margin-left: ${({alignment:e})=>"left"===e?"1px":"0"};
      margin-right: ${({alignment:e})=>"right"===e?"1px":"0"};
      width: 22px;
    `,Container:(0,s.default)(a.Box)`
      user-select: none;
      position: relative;
      width: ${({theme:e})=>e.px.xxlarge};
      height: 100%;
      padding: ${({theme:e})=>`${e.px.small} ${e.px.xsmall}`};
      flex-direction: column;
      ${p}
    `}}},2191:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getSortDate=t.generateGroups=t.getPriorityTitle=t.getGroupTitle=t.isLayered=t.GroupTypeNames=t.PriorityTitles=void 0;let i=n(4887),o=n(3363),r=n(2207);function a(e,t){return"date"===t?(0,r.getDateTitle)(u(e)):l(e)}function l(e){var n;let i=null!==(n=e.notification.priority)&&void 0!==n?n:1;return t.PriorityTitles[i-1]}function s(e,t,n){let i=c(e,e=>a(e,t));return Array.from(i.keys()).map(e=>{var o;let r="date"===t,a=null!==(o=i.get(e))&&void 0!==o?o:[],l=a[0];return r&&a.sort((e,t)=>"ascending"===n?u(e)-u(t):u(t)-u(e)),{key:e,title:e,sortValue:r?u(l):l.notification.priority,notifications:a}}).sort((e,t)=>"ascending"===n?e.sortValue-t.sortValue:t.sortValue-e.sortValue)}function c(e,t){let n=new Map;return e.forEach(e=>{let i=t(e),o=n.get(i);o?o.push(e):n.set(i,[e])}),n}function u(e){var t,n;return null!==(n=null===(t=e.modifiers)||void 0===t?void 0:t.reminder)&&void 0!==n?n:e.notification.date}t.PriorityTitles=["Uncategorized","Low","Medium","High"],t.GroupTypeNames={Flat:"Flat",Layered:"Layered"},t.isLayered=function(e){return e.type===t.GroupTypeNames.Layered},t.getGroupTitle=a,t.getPriorityTitle=l,t.generateGroups=function(e){let{notifications:n,applications:r,streams:a,selectedCategory:l,sortType:u,sortDirection:d}=e,f=n.map(e=>{var t,n;return Object.assign(Object.assign({},e),{title:null!==(n=(0,o.getStreamTitle)(a,null===(t=e.notification.stream)||void 0===t?void 0:t.id))&&void 0!==n?n:(0,o.getSourceTitle)(e.source,r)})});return"needs-attention"===l&&(f=f.filter(e=>"sticky"===e.notification.toast||"sticky"===e.notification.sticky)),"sender"===l?{type:t.GroupTypeNames.Layered,layers:function(e,t,n){let o=c(e,e=>(function(e){var t,n;let i=e.source;return"desktop"===i.type?null!==(n=null===(t=e.notification.stream)||void 0===t?void 0:t.id)&&void 0!==n?n:i.identity.uuid:""})(e));return Array.from(o.keys()).map(e=>{var r,a,l,c;let u=null!==(r=o.get(e))&&void 0!==r?r:[],d=s(u,t,n),f=d.reduce((e,t)=>e+t.notifications.length,0);return{key:e,title:null!==(l=null===(a=u[0])||void 0===a?void 0:a.title)&&void 0!==l?l:e,count:f,sections:d,preview:function(e){let t=0,n=[];for(let o of e){if(t+o.notifications.length<=i.groupMinimizedStackSize)n.push(o),t+=o.notifications.length;else{let e=i.groupMinimizedStackSize-t;n.push(Object.assign(Object.assign({},o),{notifications:o.notifications.slice(0,e)})),t+=e}if(t>=i.groupMinimizedStackSize)break}return{sections:n}}(d),isStream:!!(null===(c=u[0])||void 0===c?void 0:c.notification.stream)}}).sort((e,t)=>e.title.localeCompare(t.title))}(f,u,d)}:{sections:s(f,u,d)}},t.getSortDate=u},2200:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonLabel=void 0;let o=i(n(5932)),r=i(n(2230)),a=n(7250),l={"not-submitted":e=>o.default.createElement(s,null,e.buttonText),submitted:e=>o.default.createElement(o.default.Fragment,null,o.default.createElement(c,null),o.default.createElement(s,null,e.buttonText)),submitting:e=>o.default.createElement(o.default.Fragment,null,o.default.createElement(u,null),o.default.createElement(s,null,e.buttonText))};t.ButtonLabel=({overrides:e,button:t})=>t.submit&&e.hasOverrides?l[e.formStatus](e):l["not-submitted"](e);let s=r.default.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
  height: ${({theme:e})=>e.unit.base+1}px;
`,c=(0,r.default)(a.Icon).attrs({icon:"CheckIcon",size:"base"})``,u=(0,r.default)(a.Loader).attrs({size:"base"})``},2207:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getZonedDate=t.localTimeString=t.localDateString=t.formatLines=t.getDate=t.getDateTitle=void 0;let i=n(5738),o=n(5904);function r(e,t){let n=new Date(e),o=new Date,r=Math.abs((0,i.differenceInMinutes)(n,o));return r<1?"now":r<60||!t&&n>o?function(e,t){let n=(0,i.formatDistanceStrict)(e,t,{addSuffix:!0}).replace(/ minutes| minute/g,"m");return"60m ago"===n?(0,i.format)(e,"p"):"in 60m"===n?"in 1 hour":n}(n,o):function(e,t,n){let o=(0,i.differenceInHours)(t,e),r=(0,i.differenceInCalendarDays)(t,e);return Math.abs((0,i.differenceInMinutes)(t,e))>=60&&0===r?`${n?"at ":""}${(0,i.format)(e,"p")}`:1===r||o>24&&r<=6?`${n?"at ":""}${(0,i.format)(e,n?"p, EEE":"EEE, p")}`:`${n?"at ":""}${(0,i.format)(e,n?"p, MMM d":"MMM d, p")}`}(n,o,t)}function a(e){return(0,o.toZonedTime)(null!=e?e:Date.now(),Intl.DateTimeFormat().resolvedOptions().timeZone)}t.getDateTitle=function(e){let t=new Date(e),n=new Date,o=(0,i.differenceInCalendarDays)(n,t);return 0===o?"Today":1===o?"Yesterday":-1===o?"Tomorrow":o>0&&o<=6?`Last ${(0,i.format)(t,"EEEE")}`:o<0&&o>=-6?(0,i.format)(t,"EEEE"):(0,i.format)(t,"MMMM d, yyyy")},t.getDate=r,t.formatLines=function(e,t){if(t){if(t>=Date.now()){let e=r(t,!0);return"at"===e.substring(0,2)?["Reminding at",e.substring(3)]:[`Reminding ${e}`,null]}return[`Reminded ${r(t,!0)}`,`Sent ${r(e,!0)}`]}return[r(e),null]},t.localDateString=function(e){let t=null!=e?e:Date.now();return(0,i.formatISO)(a(t)).substring(0,10)},t.localTimeString=function(e){let t=null!=e?e:Date.now();return(0,i.formatISO)(a(t)).substring(11,16)},t.getZonedDate=a},2230:e=>{"use strict";e.exports=c},2362:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hydrateUpdateNotification=void 0;let i=n(2867),o=n(5996),r=n(611);t.hydrateUpdateNotification=function(e,t){let n=(0,r.getTemplateSchema)(e).validateSync(e,t),a=(0,o.isTemplate)(n,"markdown")?(0,i.getMarkdownTextContent)(n.body):"";return Object.assign(Object.assign({},n),{bodyText:a,body:n.body})}},2373:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0,t.Timer=class{constructor(e){this._duration=e}start(e){this.clear(),this._timeoutHandle=window.setTimeout(()=>{this._timeoutHandle=void 0,null==e||e()},this._duration)}clear(){void 0!==this._timeoutHandle&&window.clearTimeout(this._timeoutHandle),this._timeoutHandle=void 0}get running(){return void 0!==this._timeoutHandle}}},2391:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(6630),t),o(n(2874),t)},2425:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.makePresetTimeSpanOptions=t.isPresetTimeSpan=void 0;let i=n(5738);t.isPresetTimeSpan=function(e){return e&&"object"==typeof e&&"timeSpan"in e&&"event"in e},t.makePresetTimeSpanOptions=function(e){return[[{title:"5 min",value:{event:"5 min",timeSpan:(0,i.minutesToMilliseconds)(5)}},{title:"15 min",value:{event:"15 min",timeSpan:(0,i.minutesToMilliseconds)(15)}},{title:"30 min",value:{event:"30 min",timeSpan:(0,i.minutesToMilliseconds)(30)}},{title:"1 hour",value:{event:"1 hour",timeSpan:(0,i.minutesToMilliseconds)(60)}},{title:"Custom",value:"custom"}],...e?[[{title:"Cancel Reminder",value:"cancel"}]]:[]]}},2471:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SetSearchMode=t.SetSearching=t.ClearSearch=t.SearchNotifications=t.searchKeys=t.initialSearchState=void 0;let o=n(6566),r=i(n(7342)),a=n(2191);t.initialSearchState={searchMode:!1,searching:!1,query:"",ready:!1,results:[]},t.searchKeys=["notification.title","bodyText","title","notification.indicator.text"],"undefined"!=typeof window&&(window.search={minLength:1,useQueryLength:!0,queryLengthMinus:0,threshold:.4,distance:500,useExtendedSearch:!1,logging:!1});class l extends o.Action{constructor(e){super(),this.text=e}async call(e,n){let{notifications:i}=e.state,o=i.map(e=>{var t,n,i;let o=e;return o.notification.indicator&&(o=Object.assign(Object.assign({},o),{notification:Object.assign(Object.assign({},o.notification),{indicator:Object.assign(Object.assign({},null===(t=e.notification)||void 0===t?void 0:t.indicator),{text:(null===(n=e.notification.indicator)||void 0===n?void 0:n.text)||(null===(i=e.notification.indicator)||void 0===i?void 0:i.type)})})})),o}),l=new r.default(o,{keys:t.searchKeys,includeMatches:!0,includeScore:!0,useExtendedSearch:window.search.useExtendedSearch,minMatchCharLength:window.search.useQueryLength?this.text.length-window.search.queryLengthMinus:window.search.minLength,threshold:window.search.threshold,distance:window.search.distance,sortFn:(e,t)=>e.score===t.score?(0,a.getSortDate)(o[t.idx])-(0,a.getSortDate)(o[e.idx]):e.score-t.score});await e.dispatch(new c),new Promise(()=>{this.result=l.search(this.text.trim(),{limit:300}),window.search.logging&&console.log(this.result),n()})}reduce(e){return Object.assign(Object.assign({},e),{search:Object.assign(Object.assign({},e.search),{searching:!1,query:this.text,ready:!0,results:this.result})})}}t.SearchNotifications=l;class s extends o.Action{reduce(e){return Object.assign(Object.assign({},e),{search:Object.assign(Object.assign({},e.search),{query:"",searching:!1,ready:!1,results:[]})})}}t.ClearSearch=s;class c extends o.Action{constructor(){super()}reduce(e){return Object.assign(Object.assign({},e),{search:Object.assign(Object.assign({},e.search),{searching:!0})})}}t.SetSearching=c;class u extends o.Action{constructor(e){super(),this.mode=e}async call(e,t){await e.dispatch(new s),await t()}reduce(e){return Object.assign(Object.assign({},e),{search:Object.assign(Object.assign({},e.search),{searchMode:this.mode})})}}t.SetSearchMode=u},2551:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationCardComponent=void 0;let a=r(n(5932)),l=n(6455),s=n(1413),c=n(6012),u=n(2124),d=n(3873),f=n(9690),p=n(7207),h=n(7250),m=r(n(2230)),b=n(4858),g=n(5996),v=n(2773),y=n(2425),_=n(4990),x=n(3565),O=n(9136),C=n(6415);t.NotificationCardComponent=e=>{var t,n,i,o,r,h,m,M,T,k;let{style:I,senderTitle:D,isFormExpanded:$,isToast:N=!1,clickAction:A,remove:F,minimize:R,submitForm:B,clickButtonAction:L,showReminderModal:z,setReminder:H,cancelReminder:V,raiseAnalyticsEvent:W,clickFragment:U,revisionNumber:G,onKeyDown:q,focusedNotification:K}=e,{setIsMenuModalOpen:Z,setMenuConfig:Y,setIsCustomReminderModalOpen:X,setCustomReminderConfig:Q,setModalType:J}=(0,a.useContext)(C.WebModalContext),[ee,et]=(0,a.useState)(-1),[en,ei]=(0,a.useState)(!1),[eo,er]=(0,v.useIsStateUpdate)(G,(e,t)=>en&&e!==t),ea=(0,c.isStoredNotification)(e.notification)?e.notification:e.notification.item,el=ea.notification,es=null===(t=ea.modifiers)||void 0===t?void 0:t.reminder,ec=D||ea.title,eu=(0,g.isTemplate)(el,"custom")?null===(n=el.templateOptions.buttons)||void 0===n?void 0:n.align:void 0,ed=(0,g.isTemplate)(el,"custom")&&(null===(i=el.templateOptions.indicator)||void 0===i?void 0:i.align)||"center",ef=el.indicator?(0,g.isTemplate)(el,"custom")?Object.assign(Object.assign({},el.indicator),{color:null!==(T=null===(M=el.indicator)||void 0===M?void 0:M.color)&&void 0!==T?T:null===(k=el.templateOptions.indicator)||void 0===k?void 0:k.color}):el.indicator:null,ep=!!es&&es>Date.now(),eh=ea.notification.allowReminder,{raiseAnalyticsEventDelayed:em,cancelAnalyticsEventTimer:eb}=(0,_.useAnalyticsDebounce)(1e3,W),eg=(0,a.useRef)(null),ev=a.default.useContext(O.WindowContext),ey=a.default.useRef(null);(0,a.useEffect)(()=>{var e;ea.id===(null==K?void 0:K.notificationId)&&(null===(e=ey.current)||void 0===e||e.focus())},[K,ea.id,ey.current]);let e_=(e,t)=>{null==H||H(Object.assign(Object.assign({},ea),{modifiers:Object.assign(Object.assign({},ea),{reminder:null!=t?t:Date.now()+e})}))},ex=s.TemplateComponentMap[ea.notification.template];if(!ex)return console.error(`Unable to render ${ea.id}. Unknown template ${ea.notification.template}.`,ea),null;let eO=()=>er(),eC=eo&&el.buttons.length>0?[{title:"OK",cta:!0,index:0,iconUrl:"",submit:!1,type:"button",onClick:eO,formOptions:null}]:el.buttons,ew=a.default.createElement(a.default.Fragment,null,a.default.createElement(f.CardHeader,{sender:ec,icon:el.icon,uuid:null!==(r=null===(o=el.stream)||void 0===o?void 0:o.id)&&void 0!==r?r:JSON.stringify(ea.source),creationDate:el.date,reminderDate:es,isToast:N,"data-testid":"header",showReminderButton:eh,onDismiss:e=>{e.stopPropagation(),e.preventDefault(),eo||(N?(console.log(`Toast dismiss button clicked. (Nfn ID:${ea.id})`),null==R||R(ea)):(null==q||q(new KeyboardEvent("keydown",{key:"_Delete"})),console.log(`Notification remove button clicked. (Nfn ID:${ea.id})`),null==F||F(ea)))},onShowReminderModal:t=>{let n={x:t.screenX,y:t.screenY},i={identity:{id:"custom-reminder-select-menu-modal"},type:"CustomReminderModal",position:n,notification:ea,isToast:N,onDismiss:t=>{"web"===e.mode&&X(!1),"number"==typeof t&&(e_(0,t),null==W||W({type:N?"Toast":"Notification",action:"Set Custom Reminder",value:`${t+Date.now()}`,data:ea.id,skipValueHashing:!0}))}},o={type:"Menu",position:n,width:130,header:"Remind me in...",options:(0,y.makePresetTimeSpanOptions)(ep),onDismiss:t=>{(0,y.isPresetTimeSpan)(t)?(e_(t.timeSpan),Z(!1),null==W||W({type:N?"Toast":"Notification",action:"Select preset Reminder",value:`${t.timeSpan+Date.now()}`,data:ea.id,skipValueHashing:!0})):"string"==typeof t&&("cancel"===t?(null==V||V(ea),"web"===e.mode&&Z(!1),null==W||W({type:"Notification",action:"Cancel Reminder",data:ea.id,skipValueHashing:!0})):"custom"===t&&("web"===e.mode?(Z(!1),X(!0),J("reminder"),Q(i)):null==z||z(i)))}};if("desktop"===e.mode)null==z||z(o);else if("web"===e.mode)return Z(!0),Y(o),void J("reminder");null==W||W({type:N?"Toast":"Notification",action:"Select Reminder Button",data:{id:ea.id},skipValueHashing:!0})},raiseAnalyticsEvent:W,tabIndex:ee,notificationID:ea.id,mode:e.mode}),el.title&&a.default.createElement(E,null,a.default.createElement(b.SingleLine,{weight:"bold","data-testid":"notification-title"},el.title)),a.default.createElement(P,{ref:eg,"data-scrollable-container":"true",flexDirection:"column","data-testid":"template-content"},a.default.createElement(ex,{notification:ea,submitForm:B,clickButtonAction:L,clickFragment:async(e,t)=>{t.onClick&&(e.stopPropagation(),e.preventDefault(),await (null==U?void 0:U(ea,t,N)))},templateContent:eg,tabIndexOverride:ee,isToast:N}))),ej=N?"Click to dismiss":"Click to clear",eS=(null===(h=ea.notification.onSelect)||void 0===h?void 0:h.BODY_CLICK)===l.ActionBodyClickType.DISMISS_EVENT&&!(null===(m=ea.notification.buttons)||void 0===m?void 0:m.length),eP=eC.reduce((e,t)=>(t.cta?e.primary++:e.secondary++,e),{primary:0,secondary:0});return a.default.createElement(a.default.Fragment,null,a.default.createElement(p.Card,{title:eS?ej:"",onClick:async e=>{(0,g.isTemplate)(el,"markdown")&&el.form||(e.stopPropagation(),e.preventDefault(),eo||await (null==A?void 0:A(ea)))},"data-testid":"notification-card","data-id":ea.id,style:I,hasButtons:eC.length>0,isTall:eP.primary>3||eP.secondary>3,tabIndex:ee,onMouseEnter:()=>{ei(!0),em({type:N?"Toast":"Notification",action:"Hover",skipValueHashing:!0})},onMouseLeave:()=>{ei(!1),er(),eb()},isToast:N,isFormExpanded:$,onFocus:()=>et(0),onBlur:e=>{let t=e.currentTarget;requestAnimationFrame(()=>{t.contains(ev.document.activeElement)||et(-1)})},onKeyDown:e=>null==q?void 0:q(e.nativeEvent),ref:ey,role:"listitem",mode:e.mode},a.default.createElement(x.FormikProxyProvider,null,ef&&a.default.createElement(w,{alignment:ed},eo?a.default.createElement(u.InfoBanner,{text:"Notification Updated"}):a.default.createElement(u.IndicatorBanner,{indicator:ef,alignment:ed})),a.default.createElement(S,{flexDirection:"column",gap:"xsmall"},eo?a.default.createElement(j,{"data-testid":"update-overlay",gap:"xsmall"},ew):ew,eC.length>0&&a.default.createElement(d.ButtonsContainer,{alignment:eu,buttonData:eC,onClick:eo?eO:async(e,t)=>{if(!t.submit){e.stopPropagation(),e.preventDefault();let n=t.index||0;await (null==L?void 0:L(ea,n))}},tabIndexOverride:ee,notificationId:ea.id,isToast:N,raiseAnalyticsEvent:W})))))};let w=(0,m.default)(h.Box)`
  position: absolute;
  ${e=>{switch(e.alignment){case"center":return m.css`
          top: 0;
          width: 100%;

          & + * {
            margin-top: ${e=>e.theme.px.xxlarge};
          }
        `;case"left":return m.css`
          left: 0;
          height: 100%;

          & + * {
            margin-left: ${e=>e.theme.px.xxlarge};
            padding: ${({theme:e})=>`0 ${e.px.base}`};
          }
        `;case"right":return m.css`
          right: 0;
          height: 100%;

          & + * {
            margin-right: ${e=>e.theme.px.xxlarge};
            padding: ${({theme:e})=>`0 ${e.px.base}`};
          }
        `}}};
`,j=(0,m.default)(h.Box)`
  width: 100%;
  opacity: 0.5;
  z-index: 99;
  display: flex;
  flex-direction: column;
`,S=(0,m.default)(h.Box)`
  flex: 1;
  width: 100%;
  padding-bottom: ${e=>e.theme.px.base};
`,P=(0,m.default)(h.Box)`
  position: relative;
  flex: 1;
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: overlay;
`,E=(0,m.default)(h.Box)`
  padding-right: ${e=>e.theme.px.base};
  padding-left: ${e=>e.theme.px.base};
`},2645:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InjectorBase=void 0;let i=n(5966);class o{static get initialized(){return o._initialized.promise}}t.InjectorBase=o,o._initialized=new i.DeferredPromise},2716:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.APIExecutionDeferrer=void 0;let i=n(136),o=n(4128),r=n(6476),a=n(7451);class l extends i.APIMethodHandler{constructor(e,t){super(e,t),this._waitQueue=new r.WaitQueue}defer(e,t=!1){return async(n,i)=>{var r,a;this._waitQueue.isLocked&&t&&await this._store.dispatch(new o.SetNotificationFormEditBannerCount((null!==(a=null===(r=this._store.state.activeForms)||void 0===r?void 0:r.createNotificationsCount)&&void 0!==a?a:0)+1));let l=await this._waitQueue.lock(),s=await e(n,i);return this._waitQueue.release(l),s}}registerStoreActions(){this._store.onAction.add(this.onAction.bind(this))}async onAction(e){e instanceof a.Freeze?this._waitQueue.wait():e instanceof a.Unfreeze&&this._waitQueue.signal()}}t.APIExecutionDeferrer=l},2750:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetTheme=void 0;let i=n(6566);class o extends i.Action{constructor(e){super(),this.theme=e}reduce(e){return Object.assign(Object.assign({},e),{theme:this.theme?Object.assign({},this.theme):void 0})}}t.SetTheme=o},2753:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getUpdateValidateOptions=void 0;let i=n(4692),o=n(5996);t.getUpdateValidateOptions=function(e){if(e&&(0,o.isTemplate)(e,"custom")){let t=e.templateOptions.body.compositions;if(t.length>0)return{context:{fragments:(0,i.flattenLayout)(t[0].layout)}}}}},2773:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(8728),t)},2867:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getMarkdownTextContent=t.renderMarkdown=void 0;let o=(0,i(n(7344)).default)("zero",{breaks:!0});function r(e){return o.render(e)}o.enable("hr"),o.enable("paragraph"),o.enable("newline"),o.enable("heading"),o.enable("lheading"),o.enable("list"),o.enable("blockquote"),o.enable("emphasis"),o.enable("image"),t.renderMarkdown=r,t.getMarkdownTextContent=function(e){let t=r(e),n=document.createElement("span");n.innerHTML=t;let i=n.textContent||"";return n.remove(),i}},2874:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NumberWidgetComponent=t.clamp=void 0;let o=i(n(5932)),r=n(258),a=n(8912),l=n(7260),s=n(1971),c=n(7250),u=n(5232),d=n(5484);t.clamp=(e,t,n)=>Math.min(Math.max(e,null!=t?t:Number.NEGATIVE_INFINITY),null!=n?n:Number.POSITIVE_INFINITY),t.NumberWidgetComponent=e=>o.default.createElement(r.Field,{name:e.field.key,component:f,numberField:e.field,formSettings:e.formSettings,tabIndex:e.tabIndexOverride,raiseAnalytics:e.raiseAnalytics});let f=e=>{let{raiseAnalytics:n,field:i,form:r,numberField:f,formSettings:p}=e,{placeholder:h,min:m,max:b,step:g=1,currencyChar:v}=f.widget;(0,d.useRaiseFieldAnalytics)(f,n);let y=r.errors[i.name]&&r.touched[i.name]?"critical":void 0;return o.default.createElement(l.InputContainer,{flexDirection:"column"},o.default.createElement(c.NumberInput,{label:(0,u.getLabelText)(f,p),onChangeCapture:()=>{r.touched[i.name]||r.setFieldTouched(i.name)},onChange:e=>r.setFieldValue(i.name,e.target.value),autoComplete:"off",placeholder:h,helperText:f.helperText,min:m,max:b,prependString:v,onTakeStep:e=>{let n=i.value?Number(i.value):null,o=m||0==m?Number(m):void 0,a=b?Number(b):void 0,l=(0,t.clamp)((null!=n?n:0)+g*e,o,a);r.setFieldTouched(i.name,!0),r.setFieldValue(i.name,l,!0)},"data-type":a.NumberWidgetType.Number,value:i.value||0,status:y}),o.default.createElement(s.ErrorLabel,{name:i.name}))}},2882:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Injector=void 0;let i=n(4352),o=n(5966),r=n(6858),a=n(7202),l=n(3769),s=n(7010),c=n(4854),u=n(9897),d=n(2645),f={[a.Inject.STORE]:r.WebStore,[a.Inject.SCHEDULER]:s.Scheduler,[a.Inject.API_HANDLER]:c.APIHandler,[a.Inject.CLIENT_CONTOLLER]:u.ClientController};class p extends d.InjectorBase{static async init(){let e=p._container,t=[];return Object.keys(f).forEach(n=>{let i=e.get(a.Inject[n]);(i instanceof l.AsyncInit||i instanceof r.WebStore)&&t.push(i.delayedInit())}),await Promise.all(t),p._ready=!0,d.InjectorBase._initialized.resolve(),d.InjectorBase._initialized.promise}static rebind(e){return p._container.rebind(e)}static reset(){d.InjectorBase._initialized=new o.DeferredPromise,p._ready=!1,p._container=p.createContainer()}static get(e){if(!p._ready)throw Error("Injector not initialised");return p._container.get(e)}static getClass(e){return p._container.resolve(e)}static createContainer(){let e=new i.Container({skipBaseClassChecks:!0});return Object.keys(f).forEach(t=>{"function"==typeof f[t]?e.bind(a.Inject[t]).to(f[t]).inSingletonScope():e.bind(a.Inject[t]).toConstantValue(f[t])}),e}}t.Injector=p,p._ready=!1,p._container=p.createContainer()},2903:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=void 0;let i=n(7527),o=n(7676),r=n(2471),a=n(8061),l=n(7234),s=n(7383),c=n(7451);t.initialState={categories:i.initialCategoryState,customManifest:!1,notifications:[],reminders:[],search:r.initialSearchState,stickyNotifications:[],sortedNotifications:o.initialSortedNotificationsState,applications:new Map,centerVisible:!1,centerLocked:!0,centerMuted:!1,display:a.initialDisplayState,errors:new Map,settings:l.initialSettingsState,securitySettings:s.initialSecuritySettingsState,streams:new Map,platform:c.initialPlatformState,frozen:!1,focusedNotification:{notificationId:null},mode:"desktop"}},2972:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragment=void 0;let o=i(n(5932)),r=i(n(2230)),a=n(7250),l=n(4415);t.TemplateFragment=e=>{var n;let{fragment:i,templateData:r,fragmentIndex:a,notificationKey:p,clickFragment:h,tabIndexOverride:m}=e,b=Object.assign({},i.style),g=`${p}-f-${a}`,v=(e,t)=>{t.onClick&&(null==h||h(e,t))},y=(e,t)=>{"Enter"!==e.key&&" "!==e.key||v(e,t)};if(i.type===l.TemplateFragmentNames.container)return o.default.createElement(s,{onClick:e=>v(e,i),onKeyDown:e=>y(e,i),tabIndex:-1!==m&&i.onClick?0:-1,role:i.onClick?"button":void 0,title:i.tooltipKey?r[i.tooltipKey]:"",fragment:i,style:b},null===(n=i.children)||void 0===n?void 0:n.map((e,n)=>o.default.createElement(t.TemplateFragment,{fragment:e,templateData:r,fragmentIndex:a+1,notificationKey:p,key:`${g}-${n}`,clickFragment:h,tabIndexOverride:m})));let _=r[i.dataKey];switch(i.type){case l.TemplateFragmentNames.text:return o.default.createElement(c,{style:b},_);case l.TemplateFragmentNames.actionableText:return o.default.createElement(f,{style:b,onClick:e=>v(e,i),onKeyDown:e=>y(e,i),tabIndex:-1!==m&&i.onClick?0:-1,title:i.tooltipKey?r[i.tooltipKey]:""},_);case l.TemplateFragmentNames.image:return o.default.createElement(u,{onClick:e=>v(e,i),onKeyDown:e=>y(e,i),style:b,src:_,tabIndex:-1!==m&&i.onClick?0:-1,role:i.onClick?"button":void 0,title:i.tooltipKey?r[i.tooltipKey]:"",fragment:i});case l.TemplateFragmentNames.list:return o.default.createElement(d,{style:b,definitions:new Map(_)});default:return o.default.createElement(o.default.Fragment,null)}};let s=r.default.div`
  cursor: ${({fragment:e})=>e.onClick?"pointer":"default"};
`,c=r.default.span``,u=r.default.img`
  cursor: ${({fragment:e})=>e.onClick?"pointer":"default"};
`,d=(0,r.default)(a.DefinitionList)``,f=r.default.span.attrs({role:"button"})`
  cursor: pointer;
  text-decoration: underline;
  color: ${({theme:e})=>e.palette.linkDefault};

  &:hover {
    color: ${({theme:e})=>e.palette.linkHover};
  }
`},2984:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTemplateAPIVersion=t.getVersion=void 0,t.getVersion=function(){return"2.9.1"},t.getTemplateAPIVersion=function(){return"2"}},3051:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useFormCustomValidationErrors=void 0;let i=n(5932),o=n(9130);t.useFormCustomValidationErrors=(e,t)=>{let n=(0,o.useSelector)(e=>{var n,i;return null===(i=null===(n=e.activeForms)||void 0===n?void 0:n.forms.find(e=>e.notificationId===t))||void 0===i?void 0:i.errors}),{setFieldError:r}=e;(0,i.useEffect)(()=>{for(let e in n)r(e,n[e])},[n,r])}},3081:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollToFirstElementOnExpand=void 0;let i=n(5932);t.useScrollToFirstElementOnExpand=(e,t)=>{(0,i.useEffect)(()=>{t&&e.current&&setTimeout(()=>{var t,n;let i=null===(n=null===(t=e.current)||void 0===t?void 0:t.parentElement)||void 0===n?void 0:n.querySelector("input, textarea, button");i&&i.focus()},500)},[e,t])}},3082:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationCenterWebComponent=void 0;let l=a(n(5932)),s=n(5338),c=n(9130),u=n(5056),d=n(3764),f=r(n(2230)),p=n(9136),h=n(660),m=n(3083),b=n(6452),g=n(436),v=n(7586);class y extends HTMLElement{constructor(){super(),this.reactRoot=null,this.root=this.attachShadow({mode:"open"}),this.styleTarget=document.createElement("style"),this.styleTarget.setAttribute("type","text/css"),this.styleTarget.textContent="",this.root.appendChild(this.styleTarget)}setProps(e){this.props=e,this.render()}connectedCallback(){setTimeout(()=>{this.render()},0)}render(){this.props&&this.props.store&&(this.props.store.subscribe(()=>{!1===this.props.store.getState().centerVisible?this.style.display="none":this.style.display="block"}),this.styleTarget.sheet?(this.reactRoot||(this.reactRoot=(0,s.createRoot)(this.root)),u.centerHistory.push(v.ROUTES.NOTIFICATIONS),this.reactRoot.render(l.default.createElement(c.Provider,{store:this.props.store},l.default.createElement(f.StyleSheetManager,{target:this.styleTarget},l.default.createElement(h.HistoryContext.Provider,{value:u.centerHistory},l.default.createElement(p.WindowProvider,{value:window},l.default.createElement(m.RootThemeProvider,null,l.default.createElement(d.GlobalWebStyles,null),l.default.createElement(_,{id:"here-notifications-panel"},l.default.createElement(b.Router,{routes:g.CenterRoutes,history:u.centerHistory}))))))))):setTimeout(()=>this.render(),0))}}t.NotificationCenterWebComponent=y;let _=f.default.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`},3083:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootThemeProvider=void 0;let o=i(n(5932)),r=n(9130),a=n(9183),l=n(7250);t.RootThemeProvider=(0,r.connect)(e=>{var t,n;return{themes:null===(t=e.theme)||void 0===t?void 0:t.themes,scheme:null===(n=e.theme)||void 0===n?void 0:n.scheme}})(({themes:e,scheme:t,children:n})=>o.default.createElement(a.DefaultThemeProvider,{themes:e,scheme:null!=t?t:l.ColorScheme.dark},n))},3087:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FormikProxyContext=void 0;let i=n(5932);t.FormikProxyContext=(0,i.createContext)({})},3154:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},3166:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeRefs=void 0,t.mergeRefs=function(e){return t=>{e.forEach(e=>{"function"==typeof e?e(t):null!==e&&(e.current=t)})}}},3264:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=void 0;let s=r(n(5932)),c=n(4656),u=n(3166),d=n(7250),f=l(n(2230));t.TextInput=s.forwardRef((e,t)=>{let{clearControl:n,capitalize:i=!1,focusOnMount:o,icon:r,onChange:l,error:c}=e,f=a(e,["clearControl","capitalize","focusOnMount","icon","onChange","error"]),g=s.useRef(null);return s.useEffect(()=>{var e;o&&(null===(e=g.current)||void 0===e||e.focus())},[g.current]),s.createElement(p,{error:c},r&&s.createElement(m,null,s.createElement(d.Icon,{icon:r})),s.createElement(h,Object.assign({type:"text",onChange:e=>{null==l||l({name:e.target.name,value:e.target.value})},ref:(0,u.mergeRefs)([g,t]),capitalize:i,clearControlPadding:n,iconPadding:void 0!==r},f)),n&&s.createElement(b,{icon:"Cross1Icon",onClick:()=>{g.current&&(null==l||l({name:f.name||"",value:""}),g.current.value="",g.current.focus())}}))}),t.TextInput.displayName="TextInput";let p=f.default.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  width: 312px;
  height: 30px;
  margin: 10px 16px;
  background-color: ${({theme:e})=>e.palette.background5};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: solid transparent 1px;

  &:hover,
  &:focus-within {
    outline: none;
    border: solid ${({theme:e})=>e.palette.inputFocused} 1px;
  }

  ${({error:e,theme:t})=>e&&`border: solid ${t.palette.statusCritical} 1px;`}
`,h=f.default.input`
  font-family: ${({theme:e})=>e.fontFamily};
  font-size: ${({theme:e})=>e.fontSize.base};
  line-height: 16px;
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  font-style: normal;
  width: 100%;
  resize: none;
  background: none;
  outline: none;
  border: none;
  color: ${({theme:e})=>e.palette.textDefault};
  padding: 0px 2px;

  ${({capitalize:e})=>e&&"text-transform: capitalize;"};
  ${({iconPadding:e})=>e&&"padding-left: 29px;"};
  ${({clearControlPadding:e})=>e&&"padding-right: 28px;"};
`,m=f.default.div`
  left: 9px;
  position: absolute;
  height: 14px;
  width: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`,b=(0,f.default)(c.IconButton)`
  position: absolute;
  right: 3px;
`},3292:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationList=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(7250),u=n(4248),d=n(6012),f=n(8898),p=e=>{let t=(0,f.AnimatePresence)(e);return null!=t?t:null};t.default=p,t.NotificationList=({notifications:e})=>{let t={visible:{opacity:1,zIndex:2,y:0,scale:1},hidden:{opacity:0,zIndex:0,y:-200,scale:1}};return l.createElement(h,{flexDirection:"column"},l.createElement(f.LayoutGroup,null,l.createElement(m,{flexDirection:"column",as:f.motion.div,layout:!0},l.createElement(p,{initial:!1},e.map(e=>{let n=(0,d.isStoredNotification)(e)?e:e.item;return l.createElement(f.motion.div,{layout:!0,key:n.id,variants:t,initial:"hidden",animate:"visible",exit:"hidden",transition:{type:"spring",duration:.3,bounce:.25}},l.createElement(u.NotificationCard,{key:n.id,notification:n}))})))))};let h=(0,s.default)(c.Box)`
  position: relative;
  flex: 1 1 auto;
  overflow-y: overlay;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  padding-top: ${({theme:e})=>e.px.small};
`,m=(0,s.default)(c.Box)`
  gap: ${({theme:e})=>e.px.base} 0;
  padding-bottom: ${({theme:e})=>e.px.base};
  margin: 0 auto;
`},3298:e=>{"use strict";e.exports=u},3363:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStreamTitle=t.getSourceTitle=t.getApplicationTitle=t.getSourceApp=void 0,t.getSourceApp=function(e){return"desktop"===e.type?e.identity.uuid:null},t.getApplicationTitle=function(e,t){var n,i;return null!==(i=null===(n=t.get(e))||void 0===n?void 0:n.title)&&void 0!==i?i:""},t.getSourceTitle=function(e,t){var n;return"desktop"===e.type&&((null===(n=t.get(e.identity.uuid))||void 0===n?void 0:n.title)||e.identity.name)||""},t.getStreamTitle=function(e,t){var n;if(void 0!==t){let i=null===(n=e.get(t))||void 0===n?void 0:n.displayName;if(i)return i}}},3413:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomUUID=void 0,t.randomUUID=function(){return"randomUUID"in crypto&&"function"==typeof crypto.randomUUID?crypto.randomUUID():"10000000-1000-4000-8000-100000000000".replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}},3420:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SearchResults=void 0;let l=r(n(5932)),s=n(9130),c=a(n(2230)),u=n(7250),d=n(3292),f=n(5228),p=n(7451),h=(0,c.default)(u.Box)`
  width: calc(100% + 4px);
  flex: 1;
`;t.SearchResults=(0,s.connect)(e=>({results:(0,p.selectPlatformSearchResults)(e),searching:e.search.searching,query:e.search.query,applications:e.applications}))(e=>{let{results:t,searching:n,query:i}=e;return l.createElement(h,{className:"searchResults",flexDirection:"column"},n&&l.createElement(f.LoadingCard,{message:"Fetching results"}),!n&&0===t.length&&l.createElement(f.EmptyResultsListCard,{query:i}),t.length>0&&l.createElement(d.NotificationList,{notifications:t}))})},3565:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.FormikProxyProvider=void 0;let a=r(n(5932)),l=n(3087);t.FormikProxyProvider=e=>{let[t,n]=(0,a.useState)(null);return a.default.createElement(l.FormikProxyContext.Provider,{value:{formikProps:t,setFormikProps:n}},e.children)}},3657:function(e,t,n){"use strict";let i;var o=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.getEventRouter=t.eventEmitter=t.EventRouter=void 0;let r=n(7007),a=n(3816),l=n(9603);class s{constructor(e){this._emitterProviders={},this._deserializers={},this._defaultEmitter=e}registerEmitterProvider(e,t){this._emitterProviders[e]=t}registerDeserializer(e,t){this._deserializers[e]=t}dispatchEvent(e){var t;let n,i;let{type:r,target:s}=e,c=o(e,["type","target"]);if(!s)throw Error("Invalid event, no target specified");if("default"===s)n=this._defaultEmitter;else{if(!this._emitterProviders[s.type])throw Error(`Invalid target, no provider registered for '${s.type}'`);n=this._emitterProviders[s.type](s.id)}let u=Object.assign({type:r},c),d=this._deserializers[r];d?n.emit(r,d(u)):"notification-form-submitted"===r?(t=n,i=!1,u.preventDefault=()=>i=!0,t.emit("notification-form-submitted",u),i||(0,a.tryServiceDispatch)(l.APITopic.SET_FORM_STATUS_OPTIONS,{formStatus:"submitted",_notificationId:u.notification.id})):n.emit(r,u)}}t.EventRouter=s,t.eventEmitter=new r.EventEmitter,t.getEventRouter=function(){return i||(i=new s(t.eventEmitter)),i}},3694:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.templateCustomFormSchema=t.templateMarkDownFormSchema=t.checkboxGroupFieldSchema=t.radioGroupFieldSchema=t.timeFieldSchema=t.dateFieldSchema=t.booleanFieldSchema=t.numberFieldSchema=t.stringFieldSchema=t.baseFieldSchema=void 0;let a=r(n(4298)),l=n(3955),s=n(5356);function c(e,t){return e.some(e=>{try{return e.validateSync(t)}catch(e){return!1}})}t.baseFieldSchema=a.object({type:a.mixed().oneOf(Object.values(l.FieldType)).required(),key:a.string().required(),value:a.object(),validation:a.object(),label:a.string(),helperText:a.string()}).required(),t.stringFieldSchema=t.baseFieldSchema.clone().shape({value:a.string(),type:a.mixed().required().equals([l.FieldType.string]),widget:a.object().test({name:"Widget check",message:"Invalid widget ${path}",test:e=>c(Object.values(s.StringWidgetSchemaMap),e)}).required()}),t.numberFieldSchema=t.baseFieldSchema.clone().shape({value:a.number().optional(),type:a.mixed().required().equals([l.FieldType.number]),widget:a.object().test({name:"Widget check",message:"Invalid widget ${path}",test:e=>c(Object.values(s.NumberWidgetSchemaMap),e)}).required()}),t.booleanFieldSchema=t.baseFieldSchema.clone().shape({value:a.boolean().optional(),type:a.mixed().required().equals([l.FieldType.boolean]),widget:a.object().test({name:"Widget check",message:"Invalid widget ${path}",test:e=>c(Object.values(s.BooleanWidgetSchemaMap),e)}).required()}),t.dateFieldSchema=t.baseFieldSchema.clone().shape({value:a.object().optional().shape({date:a.number().test("Invalid date",e=>!e||e>=1&&e<=31),month:a.number().test("Invalid month",e=>!e||e>0&&e<=12),year:a.number().test("Invalid year",e=>!e||e>0)}),type:a.mixed().required().equals([l.FieldType.date]),widget:a.object().test({name:"Widget check",message:"Invalid widget ${path}",test:e=>c(Object.values(s.DateWidgetSchemaMap),e)})}),t.timeFieldSchema=t.baseFieldSchema.clone().shape({type:a.mixed().required().equals([l.FieldType.time]),value:a.object().shape({hour:a.number().nullable(!0).test("Invalid hour","Hour must be between 0 and 23",e=>!e||e>=0&&e<=23),minute:a.number().nullable(!0).test("Invalid minute","Minute must be between 0 and 59",e=>!e||e>=0&&e<=59)}).optional(),widget:a.object().test({name:"Widget check",message:"Invalid widget ${path}",test:e=>c(Object.values(s.TimeWidgetSchemaMap),e)})}),t.radioGroupFieldSchema=t.baseFieldSchema.clone().shape({value:a.string().optional(),type:a.mixed().required().equals([l.FieldType.radioGroup]),widget:a.object().test({name:"Widget check",message:"Invalid widget ${path}",test:e=>c(Object.values(s.RadioGroupWidgetSchemaMap),e)})}),t.checkboxGroupFieldSchema=t.baseFieldSchema.clone().shape({value:a.array().of(a.string()).optional(),type:a.mixed().required().equals([l.FieldType.checkboxGroup]),widget:a.object().test({name:"Widget check",message:"Invalid widget ${path}",test:e=>c(Object.values(s.CheckboxGroupWidgetSchemaMap),e)})});let u={string:t.stringFieldSchema,number:t.numberFieldSchema,boolean:t.booleanFieldSchema,date:t.dateFieldSchema,time:t.timeFieldSchema,radioGroup:t.radioGroupFieldSchema,checkboxGroup:t.checkboxGroupFieldSchema},d=Object.assign(Object.assign({},u),{date:t.dateFieldSchema,radioGroup:t.radioGroupFieldSchema,checkboxGroup:t.checkboxGroupFieldSchema}),f=e=>a.array().of(a.mixed().test({name:"Field check",message:"Invalid field ${path}",test:t=>{let n=[],i=e.some(e=>{try{return e.validateSync(t)}catch(e){return n.push(e),!1}});if(!i)throw Error(n.map(e=>e.message).join(".\n"));return i}})).transform(e=>0===(null==e?void 0:e.length)?null:e).required(),p=e=>a.lazy(t=>t&&t.hasOwnProperty.call(t,"fields")?a.object().shape({formSettings:a.object().optional().shape({displayFieldRequirementStatus:a.boolean().optional()}),fields:e.required()}):e.nullable().optional().default(null));t.templateMarkDownFormSchema=p(f(Object.values(u))),t.templateCustomFormSchema=p(f(Object.values(d)))},3713:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetType=t.TimeWidgetType=t.DateWidgetType=t.RadioGroupWidgetType=t.CheckboxGroupWidgetType=t.BooleanWidgetType=t.NumberWidgetType=t.StringWidgetType=void 0,t.StringWidgetType={Text:"Text",Dropdown:"Dropdown"},t.NumberWidgetType={Number:"Number"},t.BooleanWidgetType={Toggle:"Toggle",Checkbox:"Checkbox"},t.CheckboxGroupWidgetType={CheckboxGroup:"CheckboxGroup"},t.RadioGroupWidgetType={RadioGroup:"RadioGroup"},t.DateWidgetType={Date:"Date"},t.TimeWidgetType={Time:"Time"},t.WidgetType=Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},t.StringWidgetType),t.NumberWidgetType),t.BooleanWidgetType),t.CheckboxGroupWidgetType),t.RadioGroupWidgetType),t.DateWidgetType),t.TimeWidgetType)},3764:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalWebStyles=void 0;let i=n(2230);t.GlobalWebStyles=i.createGlobalStyle`
  #here-notifications-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9999;

    font-family: ${({theme:e})=>e.fontFamily};
    font-size: ${({theme:e})=>e.fontSize.base};
    line-height: ${({theme:e})=>e.lineHeight.text};
    color: ${({theme:e})=>e.palette.textDefault};
    background-color: ${({theme:e})=>e.palette.background2};
    caret-color: ${({theme:e})=>e.palette.textDefault};
  }
`},3769:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.AsyncInit=void 0;let r=n(4352),a=n(5966),l=class{constructor(){this._initialized=new a.DeferredPromise}get initialized(){return this._initialized.promise}delayedInit(){return this.init().then(()=>{this._initialized.resolve(this)}),this._initialized.promise}};l=i([(0,r.injectable)(),o("design:paramtypes",[])],l),t.AsyncInit=l},3786:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleWidgetComponent=void 0;let o=n(7250),r=n(258),a=i(n(5932)),l=i(n(2230)),s=n(5232),c=n(5484);t.ToggleWidgetComponent=e=>((0,c.useRaiseFieldAnalytics)(e.field,e.raiseAnalytics),a.default.createElement(r.Field,{name:e.field.key},({field:t})=>a.default.createElement(u,null,a.default.createElement(o.Toggle,Object.assign({},t,{checked:t.value,label:(0,s.getLabelText)(e.field,e.formSettings),labelSide:"right",tabIndex:e.tabIndexOverride,helperText:e.field.helperText})))));let u=(0,l.default)(o.Box)`
  width: 100%;
`},3816:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setDispatchMethod=t.tryServiceDispatch=void 0,t.tryServiceDispatch=async(e,t)=>{throw Error("Environment is not initialized..")},t.setDispatchMethod=e=>{t.tryServiceDispatch=e}},3873:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonsContainer=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(7250),u=n(9205),d=e=>{switch(e){case"left":return"flex-start";case"right":return"flex-end";case"center":return"center"}};t.ButtonsContainer=e=>{let{notificationId:t,buttonData:n=[],alignment:i="right",onClick:o,tabIndexOverride:r,isToast:a,raiseAnalyticsEvent:s}=e,c=l.useMemo(()=>{let e=[[],[]];return null==n||n.forEach(t=>{e[t.cta?0:1].push(Object.assign(Object.assign({},t),{onClick:o}))}),e},[n]);return l.createElement(f,{"data-role":"buttons-container","data-testid":"buttons-container",justifyContent:d(i)},l.createElement(u.CardButtonGroup,{raiseAnalyticsEvent:s,isToast:a,notificationId:t,buttons:c[1],tabIndexOverride:r}),l.createElement(u.CardButtonGroup,{raiseAnalyticsEvent:s,isToast:a,notificationId:t,buttons:c[0],tabIndexOverride:r}))};let f=(0,s.default)(c.Box)`
  margin-top: auto;
  align-self: flex-end;
  justify-self: flex-end;
  width: 100%;
  gap: ${e=>e.theme.px.base};
  padding: ${e=>e.theme.px.base};
  padding-top: 0;
  padding-bottom: 0;
  white-space: nowrap;
  max-width: 100%;
  display: flex;

  & > div {
    overflow-y: visible;
    overflow-x: clip;
  }

  & > div > div {
    display: flex;
  }

  & > div > div > button {
    overflow: hidden;
  }
`},3955:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FieldType=void 0,t.FieldType={string:"string",number:"number",boolean:"boolean",date:"date",checkboxGroup:"checkboxGroup",radioGroup:"radioGroup",time:"time"}},4022:e=>{"use strict";e.exports=d},4084:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsToggle=void 0;let l=r(n(5932)),s=n(7250),c=n(5396),u=a(n(2230)),d=n(1569);t.SettingsToggle=({title:e,state:t,showLogo:n=!1,subToggle:i=!1,iconUrl:o,onChange:r,toggleId:a,disabled:u=!1})=>{let h=(0,d.useTooltip)(e);return l.createElement(f,{subToggle:i},n&&l.createElement(c.AppLogo,{size:"xlarge",src:null!=o?o:"",alt:e}),l.createElement(p,{as:"label",htmlFor:a,size:i?"base":"large",ref:h,disabled:u},e),l.createElement(s.Toggle,{id:a,checked:t,onChange:r,disabled:u}))};let f=(0,u.default)(s.Box)`
  align-items: center;
  margin-bottom: 1em;
  width: 100%;

  &:last-child {
    margin-bottom: ${({subToggle:e})=>e?0:void 0};
  }
`,p=(0,u.default)(s.Text)`
  font-size: ${({theme:e})=>e.fontSize.large};
  margin-right: auto;
  max-width: 205px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: break-word;
  color: ${({theme:e,disabled:t})=>t?e.palette.inputDisabled:e.palette.textDefault};
`},4116:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useFormError=void 0;let i=n(9130),o=n(5932),r=n(7953);t.useFormError=e=>{let t=(0,i.useSelector)(e=>e.activeForms),n=null==t?void 0:t.forms.find(t=>t.notificationId===e),a=null==n?void 0:n.formStatusOptions.error,l=(0,o.useContext)(r.ResizeContext);return(0,o.useEffect)(()=>{"emitResize"in l&&l.emitResize()},[a]),a}},4128:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetNotificationFormEditBannerCount=void 0;let i=n(6566);class o extends i.Action{constructor(e){super(),this.count=e}reduce(e){var t,n,i;return Object.assign(Object.assign({},e),{activeForms:{focusedFormNotificationId:null===(t=e.activeForms)||void 0===t?void 0:t.focusedFormNotificationId,forms:null!==(i=null===(n=e.activeForms)||void 0===n?void 0:n.forms)&&void 0!==i?i:[],createNotificationsCount:this.count}})}}t.SetNotificationFormEditBannerCount=o},4138:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetNotificationFormCustomValidationErrors=void 0;let i=n(6566);class o extends i.Action{constructor(e,t){super(),this.notificationId=e,this.errors=t}reduce(e){var t,n;let i=null!==(n=null===(t=e.activeForms)||void 0===t?void 0:t.forms)&&void 0!==n?n:[],o=Object.assign({},...(this.errors||[]).map(e=>({[e.fieldKey]:e.error})));return Object.assign(Object.assign({},e),{activeForms:Object.assign(Object.assign({},e.activeForms),{forms:[...i.map(e=>e.notificationId==this.notificationId?Object.assign(Object.assign({},e),{errors:o}):e)]})})}}t.SetNotificationFormCustomValidationErrors=o},4182:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Group=void 0;let o=i(n(5932)),r=n(9628),a=n(194);t.Group=({source:e,isLayered:t,hasControls:n,onKeyDown:i})=>t?o.default.createElement(r.Layer,{layer:e,onKeyDown:i}):o.default.createElement(a.Section,{section:e,hasControls:n,onKeyDown:i})},4248:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationCard=void 0;let o=n(9130),r=i(n(5932)),a=n(7451),l=n(7676),s=n(2551),c=n(6012),u=n(8320),d=n(6415);t.NotificationCard=(0,o.connect)((e,t)=>{var n;let{activeForms:i}=e,o=t.notification,r=(0,c.getAllStoredNotifications)(e).find(e=>e.id===o.id),a=i&&i.focusedFormNotificationId==(null==r?void 0:r.id);return Object.assign(Object.assign({},t),{revisionNumber:null===(n=null==r?void 0:r.modifiers)||void 0===n?void 0:n.revision,focusedNotification:e.focusedNotification,isFormExpanded:a,mode:e.mode})},(e,t)=>{var n,i,o,r,s,c,d,f,p,h;return{remove:null!==(n=t.remove)&&void 0!==n?n:async t=>e(new a.RemoveNotifications([t],"Remove")),minimize:null!==(i=t.minimize)&&void 0!==i?i:t=>e(new l.MinimizeToast(t)),clickAction:null!==(o=t.clickAction)&&void 0!==o?o:t=>e(new a.ClickNotification(t)),clickButtonAction:null!==(r=t.clickButtonAction)&&void 0!==r?r:async(t,n)=>e(new a.ClickButton(t,n)),clickFragment:null!==(s=t.clickFragment)&&void 0!==s?s:(t,n,i)=>e(new a.ClickFragment(t,n,i)),submitForm:null!==(c=t.submitForm)&&void 0!==c?c:async(t,n,i)=>e(new l.SubmitNotificationForm(t,n,i)),showReminderModal:null!==(d=t.showReminderModal)&&void 0!==d?d:async t=>e(new a.ShowModal(t)),setReminder:null!==(f=t.setReminder)&&void 0!==f?f:async t=>e(new u.SetReminderThroughUI(t)),cancelReminder:null!==(p=t.cancelReminder)&&void 0!==p?p:async t=>e(new u.CancelReminderAndRecreateNotification(t)),raiseAnalyticsEvent:null!==(h=t.raiseAnalyticsEvent)&&void 0!==h?h:async(t,n)=>e(new a.RaiseAnalyticsEvent(t,n))}})(e=>r.default.createElement(d.WebModalContextProvider,null,r.default.createElement(s.NotificationCardComponent,Object.assign({},e)))),t.NotificationCard.displayName="ConnectedNotificationCard"},4298:e=>{"use strict";e.exports=f},4352:e=>{"use strict";e.exports=p},4382:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetComponentMap=void 0;let i=n(3713),o=n(2391),r=n(1351),a=n(3786),l=n(9594),s=n(6906),c=n(714),u=n(5718),d=n(6318);t.WidgetComponentMap={[i.WidgetType.Number]:o.NumberWidgetComponent,[i.WidgetType.Toggle]:a.ToggleWidgetComponent,[i.WidgetType.Checkbox]:r.CheckboxWidgetComponent,[i.WidgetType.Date]:l.DateWidgetComponent,[i.WidgetType.CheckboxGroup]:s.CheckboxGroupWidgetComponent,[i.WidgetType.RadioGroup]:c.RadioGroupWidgetComponent,[i.WidgetType.Dropdown]:u.DropdownWidgetComponent,[i.WidgetType.Text]:o.TextWidgetComponent,[i.WidgetType.Time]:d.TimeWidgetComponent}},4415:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateFragmentNames=t.PresentationTemplateFragmentNames=t.ContainerTemplateFragmentNames=t.TemplateNames=void 0,t.TemplateNames={markdown:"markdown",list:"list",custom:"custom"},t.ContainerTemplateFragmentNames={container:"container"},t.PresentationTemplateFragmentNames={text:"text",image:"image",list:"list",actionableText:"actionableText"},t.TemplateFragmentNames=Object.assign(Object.assign({},t.ContainerTemplateFragmentNames),t.PresentationTemplateFragmentNames)},4515:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleCardTitle=void 0;let o=i(n(2230)),r=i(n(5932));t.CollapsibleCardTitle=({expanded:e,fieldTitles:t})=>r.default.createElement(a,null,r.default.createElement(l,null,"Form"),r.default.createElement(c,null,"|"),e?r.default.createElement(s,null,t.length," Fields"):r.default.createElement(s,null,t.join(", ")));let a=o.default.span``,l=o.default.span`
  font-weight: 600;
`,s=o.default.span`
  color: ${({theme:e})=>e.palette.textHelp};
`,c=o.default.span`
  color: ${({theme:e})=>e.palette.background5};
  margin-left: ${({theme:e})=>e.px.base};
  margin-right: ${({theme:e})=>e.px.base};
`},4656:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IconButton=void 0;let r=n(7250),a=o(n(5932)),l=o(n(2230));t.IconButton=e=>{var{icon:t,dataId:n,onClick:o}=e,l=i(e,["icon","dataId","onClick"]);return a.default.createElement(s,Object.assign({onClick:o,"data-id":n},l),a.default.createElement(r.Icon,{icon:t}))};let s=l.default.div`
  height: ${({theme:e})=>e.px.xxlarge};
  width: ${({theme:e})=>e.px.xxlarge};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease-in-out;
  border-radius: 15px;
`},4673:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mutable=void 0,t.mutable=function(e){return e}},4691:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ensureCompleteTimeFieldValue=t.ensureCompleteDateFieldValue=t.fieldValueAsString=t.fieldValueToDate=t.dateToFieldValue=t.convertTo24HourFormat=t.convertFrom24HourFormat=void 0,t.convertFrom24HourFormat=e=>{let t=e.split(":").map(Number);if(2!==t.length||t[0]<0||t[0]>23||t[1]<0||t[1]>59)throw Error("Invalid time format");return{hour:t[0],minute:t[1]}},t.convertTo24HourFormat=e=>{let{hour:t=0,minute:n=0}=e;if(t<0||t>23||n<0||n>59)throw Error("Invalid time format");return`${t<10?`0${t}`:t}:${n<10?`0${n}`:n}`},t.dateToFieldValue=e=>({date:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()}),t.fieldValueToDate=e=>new Date(e.year,e.month-1,e.date),t.fieldValueAsString=e=>`${e.year}-${e.month.toString().padStart(2,"0")}-${e.date.toString().padStart(2,"0")}`,t.ensureCompleteDateFieldValue=e=>{var t,n,i;if(!e)return;let o=new Date;return{date:null!==(t=e.date)&&void 0!==t?t:o.getDate(),month:null!==(n=e.month)&&void 0!==n?n:o.getMonth()+1,year:null!==(i=e.year)&&void 0!==i?i:o.getFullYear()}},t.ensureCompleteTimeFieldValue=e=>{var t,n;if(e)return{hour:null!==(t=e.hour)&&void 0!==t?t:0,minute:null!==(n=e.minute)&&void 0!==n?n:0}}},4692:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flattenLayout=void 0,t.flattenLayout=function e(t,n){let i=null!=n?n:{containerFragments:[],presentationFragments:[]};return"container"===t.type?(i.containerFragments.push(t),Array.isArray(t.children)&&t.children.forEach(t=>{e(t,i)})):i.presentationFragments.push(t),i}},4800:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderButton=void 0;let l=r(n(5932)),s=r(n(2230));t.HeaderButton=e=>{var{children:t}=e,n=a(e,["children"]);return l.createElement(c,Object.assign({},n),t)};let c=s.default.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.palette.textDefault};
  margin: 0;
  height: ${({theme:e})=>e.px.xxxlarge};
  width: ${({theme:e})=>e.px.xxxlarge};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({disabled:e})=>!e&&s.css`
      &:focus {
        outline: none;
      }

      &:hover {
        background-color: ${({theme:e})=>e.palette.background4};
      }

      &:active {
        background-color: ${({theme:e})=>e.palette.background6};
      }

      &:focus-visible {
        outline: solid 1px ${({theme:e})=>e.palette.statusActive};
        outline-offset: -1px;
      }
    `}
`},4854:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0}),t.APIHandler=void 0;let o=n(4352),r=n(4022),a=n(9603),l=class{constructor(){this.onConnection=new r.Signal,this.onDisconnection=new r.Signal}get channel(){return this._providerChannel}isClientConnection(e){return this._providerChannel.connections.some(t=>e.uuid===t.uuid&&e.name===t.name)}getClientConnections(){return this._providerChannel.connections}async dispatchMessage(e,t,n){return this._providerChannel.dispatch(e,t,n)}async dispatchEvent(e,t){return console.debug("Dispatching event to window",{targetWindow:e,eventTransport:t}),this._providerChannel.dispatch(e,"event",t)}async publishMessage(e,t){return this._providerChannel.publish(e,t)}async publishEvent(e){return Promise.all(this._providerChannel.publish("event",e)).then(()=>{})}async registerListeners(e,t,n=null){for(let i in this._finContext=t,this._providerChannel=await this._finContext.InterApplicationBus.Channel.create(null!=n?n:(0,a.getChannelName)(this._finContext.me.uuid)),this._providerChannel.onConnection(this.onConnectionHandler.bind(this)),this._providerChannel.onDisconnection(this.onDisconnectionHandler.bind(this)),e)Object.hasOwnProperty.call(e,i)&&this._providerChannel.register(i,e[i])}onConnectionHandler(e,t){t&&t.version&&t.version.length>0?console.log(`Connection from client: ${e.name}, version: ${t.version}`):console.log(`Connection from client: ${e.name}, unable to determine version`),setTimeout(()=>{this.onConnection.emit(e,null==t?void 0:t.providerInfo)})}onDisconnectionHandler(e){this.onDisconnection.emit(e)}};l=i([(0,o.injectable)()],l),t.APIHandler=l},4858:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SingleLine=void 0;let r=o(n(5932)),a=n(7250),l=o(n(2230)),s=n(1569);t.SingleLine=e=>{var{children:t}=e,n=i(e,["children"]);return r.default.createElement(c,Object.assign({ref:(0,s.useTooltip)(t)},n),t)};let c=(0,l.default)(a.Text)`
  white-space: nowrap;
  ${a.Mixins.textOverflow};
`},4887:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maxVisibleUserFacingErrors=t.minSearchStringLength=t.notificationCenterAnimationDuration=t.notificationCenterWidth=t.toastWindowName=t.settingsApplicationsCollapsedSize=t.groupMinimizedStackSize=void 0,t.groupMinimizedStackSize=3,t.settingsApplicationsCollapsedSize=11,t.toastWindowName="Notification-Toast",t.notificationCenterWidth=344,t.notificationCenterAnimationDuration=300,t.minSearchStringLength=1,t.maxVisibleUserFacingErrors=3},4896:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ErrorPanel=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(524),u=n(545),d=n(6460);t.ErrorPanel=({errors:e,onDismiss:t})=>e.length?l.createElement(f,null,e.map((e,n)=>l.createElement(d.FadeTransition,{timeout:200,key:`error-item-${n}`},l.createElement(u.ErrorItem,{id:e.id,message:e.message,onDismiss:t})))):l.createElement(l.Fragment,null);let f=(0,s.default)(c.TransitionGroup)`
  display: flex;
  flex-direction: column;
`},4990:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useAnalyticsDebounce=void 0;let i=n(2373),o=n(5932);t.useAnalyticsDebounce=(e,t)=>{let n=(0,o.useRef)(new i.Timer(e));return{raiseAnalyticsEventDelayed:e=>{t&&n.current.start(()=>t(e))},cancelAnalyticsEventTimer:()=>{n.current.running&&n.current.clear()}}}},5046:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useValidation=void 0;let i=n(5932);t.useValidation=(e,t)=>{let[n,o]=(0,i.useState)(""),[r,a]=(0,i.useState)(!0),[l,s]=(0,i.useState)(t);return(0,i.useEffect)(()=>{let t=e(l);o(t),a(!t)},[l,e]),{value:l,message:n,isValid:r,updateValue:s}}},5050:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5056:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.centerHistory=void 0;let i=n(3298);t.centerHistory=(0,i.createMemoryHistory)()},5172:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(6099),t),o(n(2362),t)},5228:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.LoadingCard=t.EmptyResultsListCard=t.EmptyNotificationListCard=t.MessageCard=void 0;let l=r(n(5932)),s=n(7250),c=a(n(2230));t.MessageCard=({children:e,title:t,subtitle:n})=>l.createElement(u,null,e,t&&l.createElement(s.Text,{size:"xlarge"},t),n&&l.createElement(s.Text,null,n)),t.EmptyNotificationListCard=()=>l.createElement(t.MessageCard,{title:"No Notifications",subtitle:"You're up to date!"},l.createElement(d,{size:"xxlarge",icon:"BellIcon"})),t.EmptyResultsListCard=e=>l.createElement(t.MessageCard,{title:`No results for "${e.query}"`,subtitle:"Please try again."},l.createElement(d,{size:"xxlarge",icon:"CrossCircledIcon"})),t.LoadingCard=({message:e="Loading"})=>l.createElement(t.MessageCard,{title:e},l.createElement(s.Loader,{size:"xxlarge"}));let u=(0,c.default)(s.Box)`
  align-items: center;
  background: ${({theme:e})=>e.palette.background4};
  border-radius: ${({theme:e})=>e.radius.base};
  box-shadow: ${({theme:e})=>e.shadow.base};
  flex-direction: column;
  justify-content: center;
  min-height: 128px;
  padding: ${({theme:e})=>e.px.xxlarge};
  text-align: center;
  user-select: none;
  width: 312px;
`,d=(0,c.default)(s.Icon)`
  margin-bottom: ${({theme:e})=>e.px.base};
`},5232:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLabelText=void 0,t.getLabelText=(e,t)=>{var n;return(null==t?void 0:t.displayFieldRequirementStatus)?`${e.label} ${(null===(n=e.validation)||void 0===n?void 0:n.required.arg)?"(required)":"(optional)"}`:e.label}},5338:(e,t,n)=>{"use strict";var i=n(94);t.createRoot=i.createRoot,t.hydrateRoot=i.hydrateRoot},5356:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.StringWidgetSchemaMap=t.CheckboxGroupWidgetSchemaMap=t.RadioGroupWidgetSchemaMap=t.TimeWidgetSchemaMap=t.DateWidgetSchemaMap=t.BooleanWidgetSchemaMap=t.NumberWidgetSchemaMap=void 0;let a=r(n(4298)),l=n(3713),s=a.object({type:a.mixed().required().oneOf(Object.keys(l.WidgetType))}).required(),c=s.clone().shape({type:a.string().equals([l.WidgetType.Text]).required(),placeholder:a.string().optional(),multiline:a.boolean().optional(),rows:a.number().optional()}),u=s.clone().shape({type:a.string().equals([l.WidgetType.Number]).required(),placeholder:a.string(),min:a.number(),max:a.number(),currencyChar:a.string().optional(),decimalPlaces:a.number().optional(),step:a.number().optional()});t.NumberWidgetSchemaMap={Number:u};let d=s.clone().shape({type:a.mixed().equals([l.WidgetType.Toggle]).required()}),f=s.clone().shape({type:a.mixed().equals([l.WidgetType.Checkbox]).required()});t.BooleanWidgetSchemaMap={Toggle:d,Checkbox:f};let p=s.clone().shape({type:a.mixed().equals([l.WidgetType.Date]).required(),minDate:a.date().optional(),maxDate:a.date().optional()}),h=s.clone().shape({type:a.mixed().equals([l.WidgetType.Time]).required()});t.DateWidgetSchemaMap={Date:p},t.TimeWidgetSchemaMap={Time:h};let m=a.array().of(a.object({value:a.string().required(),label:a.string().required()})).test("more-than-one-element","Must have more than one item",e=>!!e&&e.length>1),b=s.clone().shape({type:a.mixed().equals([l.WidgetType.RadioGroup]).required(),group:m});t.RadioGroupWidgetSchemaMap={RadioGroup:b};let g=s.clone().shape({type:a.mixed().equals([l.WidgetType.CheckboxGroup]).required(),group:m}),v=s.clone().shape({type:a.string().equals([l.WidgetType.Dropdown]).required(),options:m,placeholder:a.string().optional()});t.CheckboxGroupWidgetSchemaMap={CheckboxGroup:g},t.StringWidgetSchemaMap={Text:c,Dropdown:v}},5387:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStateButtonOptionsOverrides=void 0;let i=n(9130);t.useStateButtonOptionsOverrides=(e,t)=>{var n,o,r,a,l,s,c,u,d,f,p,h,m;let b=(0,i.useSelector)(e=>e.activeForms),g=[],v=null==b?void 0:b.forms.find(t=>t.notificationId===e),y=!v||"not-submitted"===(null===(n=v.formStatusOptions)||void 0===n?void 0:n.formStatus),_="submitted"===(null===(o=null==v?void 0:v.formStatusOptions)||void 0===o?void 0:o.formStatus),x=!!(null==v?void 0:v.formStatusOptions);for(let n of t){let t=n?n.title:"";n&&v&&n.submit&&v.notificationId==e&&v.formStatusOptions&&("submitting"===v.formStatusOptions.formStatus?t=null!==(a=null===(r=n.formOptions)||void 0===r?void 0:r.submittingTitle)&&void 0!==a?a:t:"submitted"===(null===(l=v.formStatusOptions)||void 0===l?void 0:l.formStatus)?t=null!==(c=null===(s=n.formOptions)||void 0===s?void 0:s.successTitle)&&void 0!==c?c:t:"not-submitted"===(null===(u=v.formStatusOptions)||void 0===u?void 0:u.formStatus)&&(null===(d=null==v?void 0:v.formStatusOptions)||void 0===d?void 0:d.error)&&(t=null!==(p=null===(f=n.formOptions)||void 0===f?void 0:f.errorTitle)&&void 0!==p?p:t)),g.push({canSubmit:y,isSubmitted:_,buttonText:t,hasOverrides:x,formStatus:null!==(m=null===(h=null==v?void 0:v.formStatusOptions)||void 0===h?void 0:h.formStatus)&&void 0!==m?m:"not-submitted"})}return g}},5396:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AppLogo=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(7250),u=n(8833);t.AppLogo=({src:e,alt:t,uuid:n=e,tooltip:i,size:o,className:r})=>{let a=(0,u.useLoaded)(e),s=null==t?void 0:t.substr(0,1),c=!!e&&a!==u.LoadState.ERROR,f=c?"transparent":function(e,t=70,n=50){let i=0;for(let t=0;t<e.length;t++)i=e.charCodeAt(t)+((i<<5)-i)|0;return`hsl(${i%360}, ${t}%, ${n}%)`}(n);return l.createElement(d,{src:e,size:o,className:r,backgroundColor:f,title:!c&&i?t:void 0,"aria-hidden":!0},!c&&s)};let d=(0,s.default)(c.Icon)`
  flex-shrink: 0;
  user-select: none;
  border-radius: ${({theme:e})=>e.radius.small};
  background-image: url(${({src:e})=>e});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({backgroundColor:e})=>e};
  margin-right: ${({theme:e})=>e.px.small};
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: ${({size:e})=>c.FontSize[e]};
  place-content: center;
  place-items: center;
`},5425:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.shouldNavigateToAll=t.getDefaultPlatform=t.getTargetOrError=t.isTargetAvailable=void 0;let i=n(7451);function o(e,t){let n=t.platform;return n?e.state.platform.list.get(n):void 0}t.isTargetAvailable=function(e,t){let n=o(e,t);return!n||n.active},t.getTargetOrError=async function(e,t){let n=o(e,t),r=!n||n.active;if(!r){let t=(null==n?void 0:n.id)||"";await e.dispatch(new i.PushError(t,`Please start the ${null==n?void 0:n.title} platform and try again.`))}return r},t.getDefaultPlatform=function(e){let t;let n=e.getState(),o=(0,i.selectActivePlatforms)(n),r=n.platform.selected;if(1===o.length){let i=o[0].id;e.state.notifications.length===n.platform.counts.get(i)&&(t=i)}return t===r?null:t},t.shouldNavigateToAll=function(e){let t=(0,i.selectActivePlatforms)(e);return t.length>1||t.length>0&&e.platform.counts.get(t[0].id)!==e.notifications.length}},5484:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useRaiseFieldAnalytics=void 0;let i=n(258),o=n(5932),r=n(8912),a=n(96),l={[r.FieldType.string]:e=>e.widget.type===r.WidgetType.Dropdown?"Select Form Dropdown":e.widget.multiline?"Enter Form Textarea Input":"Enter Form Text Input",[r.FieldType.boolean]:(e,t)=>e.widget.type===r.WidgetType.Checkbox?t?"Select Form Checkbox":"Deselect Form Checkbox":"Select Form Toggle",[r.FieldType.date]:e=>"Enter Form Date Input",[r.FieldType.time]:e=>"Enter Form Time Input",[r.FieldType.number]:e=>"Enter Form Number Input",[r.FieldType.checkboxGroup]:(e,t)=>t?"Select Form Checkbox":"Deselect Form Checkbox",[r.FieldType.radioGroup]:e=>"Select Form Radio Button"};t.useRaiseFieldAnalytics=(e,t,n,r)=>{let s=(0,i.useFormikContext)(),c=s.getFieldProps(e.key),u=s.touched[e.key],d=(0,o.useCallback)((0,a.debounce)(t,1e3),[t]);(0,o.useEffect)(()=>{u&&(r?function(e,t,n,i){let o=e.current,r=new Set;t&&t.forEach(e=>{r.add(e)}),o.forEach((e,t)=>{let a=r.has(e.value);e.clicked!==a&&(n(i.label||i.key,l[i.type](i,a),e.value),o[t].clicked=a)})}(r,c.value,t,e):d(e.label||e.key,l[e.type](e,c.value),n?n(c):c.value))},[c.value,u,e,d])}},5718:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownWidgetComponent=void 0;let a=r(n(5932)),l=n(258),s=n(7250),c=n(7451),u=n(9130),d=n(1656),f=n(6464),p=n(7260),h=n(1971),m=n(5232),b=n(5484),g=n(9816),v=n(6415),y=({stringField:e,field:t,form:n,showModal:i,hideModal:o,formSettings:r,raiseAnalytics:l,mode:c})=>{var u;let y=e.widget.options.map(e=>({title:e.label,value:e.value}));(0,b.useRaiseFieldAnalytics)(e,l);let[_,x,O]=(0,d.useMenuModalDialog)(t=>{n.setFieldTouched(e.key,!0),n.setFieldValue(e.key,t)},i,o,y,e=>{var t;return{width:null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.clientWidth,height:f.dropdownModalHeight}},()=>n.setFieldTouched(e.key,!0),y.find(e=>e.value==t.value),c,"menu"),{modalType:C,isMenuModalOpen:w}=a.default.useContext(v.WebModalContext);(0,a.useEffect)(()=>{var e;null===(e=O.current)||void 0===e||e.setAttribute("type","button")},[O]);let j=n.errors[t.name]&&n.touched[t.name]?"critical":void 0;return a.default.createElement(p.InputContainer,{flexDirection:"column"},a.default.createElement(s.DropdownButton,{label:(0,m.getLabelText)(e,r),placeholder:null!==(u=e.widget.placeholder)&&void 0!==u?u:"Select",handleClick:()=>{x(!_)},key:t.name,selected:y.find(e=>e.value===t.value),expanded:_,helperText:e.helperText,ref:O,status:j}),"web"===c&&"widget"===C&&w&&a.default.createElement(g.WebModalComponent,{mode:c}),a.default.createElement(h.ErrorLabel,{name:t.name}))};t.DropdownWidgetComponent=(0,u.connect)(e=>({mode:e.mode}),e=>({showModal:t=>e(new c.ShowModal(t)),hideModal:t=>e(new c.HideModal(t))}))(e=>a.default.createElement(l.Field,{name:e.field.key,component:y,stringField:e.field,showModal:e.showModal,hideModal:e.hideModal,formSettings:e.formSettings,raiseAnalytics:e.raiseAnalytics,mode:e.mode}))},5724:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Body=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(2867);t.Body=l.memo(e=>{var t;let n=null!==(t=e.text)&&void 0!==t?t:"";n=n.replace(/http:/g,"https:");let i=l.useCallback(e=>{e&&e.querySelectorAll("img").forEach(e=>{var t;if(e.complete&&e.naturalWidth>0)return void(e.style.visibility="visible");let n=u(e);null===(t=e.parentElement)||void 0===t||t.insertBefore(n,e.nextElementSibling),e.onload=()=>{n.remove(),e.style.visibility="visible"},e.onerror=()=>{n.querySelector(".img-error-msg").style.display="block",n.querySelector(".img-error-alt").style.display="block",n.querySelector(".spinner").style.display="none"}})},[n]);return l.createElement(d,{className:"text",key:n.length,ref:i,dangerouslySetInnerHTML:{__html:(0,c.renderMarkdown)(n)}})}),t.Body.displayName="Body";let u=e=>{let t=`
    <div class="image-error">
        <span class="img-error-msg">Unable to load image:</span>
        <span class="img-error-alt">${e.getAttribute("alt")}</span>
        <div class="spinner" />
    </div>
    `,n=document.createElement("div");return n.innerHTML=t,n},d=s.default.div`
  display: block;
  overflow-x: hidden;
  overflow-y: overlay;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;

  * {
    margin-bottom: 4px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    font-size: 12px;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 5px 0;
    width: 100%;
  }

  li {
    list-style-position: inside;
    display: list-item;
    list-style-type: disc;
    width: 100%;

    li {
      margin-left: 18px;
    }
  }

  ol {
    list-style-type: decimal;
    li {
      list-style-type: decimal;
    }
  }

  blockquote {
    border-left: 0.25em solid ${({theme:e})=>e.palette.textDefault};
    padding: 0 8px;
  }

  img {
    max-width: 100%;
    visibility: hidden;
  }

  .image-error {
    font-size: 12px;
    line-height: 16px;
    font-weight: normal;
    color: ${({theme:e})=>e.palette.textDefault};
    min-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 263px;
    height: 85px;
    margin: 4px auto;
    border: 1px solid ${({theme:e})=>e.palette.background6};
    border-radius: 4px;
    background: ${({theme:e})=>e.palette.background4};
    text-align: center;

    .img-error-msg {
      font-weight: bold;
      display: none;
    }

    .img-error-alt {
      font-style: italic;
      display: none;
    }

    .spinner {
      border: 5px solid transparent;
      border-top: 5px solid ${({theme:e})=>e.palette.background6};
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 2s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  }
`},5738:e=>{"use strict";e.exports=h},5898:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsView=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(9130),u=n(7250),d=n(4084),f=n(1037),p=n(697),h=n(7451),m=n(4990),b=n(7234),g=n(4887),v=n(428),y=n(9588),_=n(930),x=n(660),O=n(7586),C=n(8740),w=(0,s.default)(u.Box)`
  color: ${({theme:e})=>e.palette.textDefault};
  overflow-x: hidden;
  overflow-y: auto;
  user-select: none;
  height: 100%;
`,j=(0,s.default)(u.Box)`
  border-bottom: 1px solid ${({theme:e})=>e.palette.background4};
  margin: ${({theme:e})=>`${e.px.large} 0 0`};
  padding: ${({theme:e})=>`0 ${e.px.large} ${e.px.large}`};
  flex-direction: column;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,S=(0,s.default)(u.H2)`
  margin-bottom: ${({theme:e})=>e.px.base};
`,P=(0,s.default)(u.Text)`
  cursor: pointer;
  text-align: center;
  margin-top: ${({theme:e})=>e.px.small};

  &:hover {
    text-decoration: underline;
  }
`,E=(0,s.default)(u.Box)`
  border-left: 1px solid ${({theme:e})=>e.palette.background4};
  padding-left: ${({theme:e})=>e.px.xlarge};
  margin-left: calc(${({theme:e})=>e.px.base} - 1px); /* Offset 1px border */
  flex-direction: column;
  margin-bottom: 1rem;
`,M=(0,s.default)(u.Box)`
  margin-bottom: ${({theme:e})=>e.px.small};
  & > ${u.Text} {
    margin-right: auto;
  }

  .spinner {
    /* Min size so it doesn't change size on smaller numbers */
    min-width: 100px;
  }
`;t.SettingsView=(0,c.connect)(e=>{let t=Array.from(e.applications.values()).map(e=>({application:e,streams:[]}));return e.streams.forEach(e=>{var n;let i=t.find(t=>t.application.id===e.appId);i&&(null===(n=i.streams)||void 0===n||n.push(e))}),{appManagers:t,centerLocked:e.centerLocked,centerMuted:e.centerMuted,centerPosition:e.settings.centerPosition,mode:e.mode,notificationSoundEnabled:e.settings.notificationSoundEnabled,toastPosition:(0,b.selectActiveDisplayToastPosition)(e),toastDuration:e.settings.toastDuration}},e=>({toggleCenterLocked:()=>e(new h.ToggleCenterLocked),toggleCenterMuted:()=>e(new h.ToggleCenterMuted),toggleNotificationSound:()=>e(new b.ToggleNotificationSound),setCenterPosition:t=>e(new b.SetCenterPosition(t)),setToastPosition:t=>e(new _.RequestSetToastLocation(t)),updateAppMuteState:(t,n)=>e(new h.UpdateAppMuteState(t,n)),updateStreamMuteState:(t,n)=>e(new h.UpdateStreamMuteState(t,n)),setToastDuration:t=>e(new b.SetToastDuration(t)),raiseAnalyticsEvent:async(t,n)=>e(new h.RaiseAnalyticsEvent(t,n))}))(({appManagers:e,centerLocked:t,centerMuted:n,centerPosition:i,mode:o,notificationSoundEnabled:r,toastPosition:a,setToastPosition:s,setCenterPosition:c,toggleCenterLocked:h,toggleCenterMuted:b,toggleNotificationSound:_,updateAppMuteState:T,updateStreamMuteState:k,toastDuration:I,setToastDuration:D,raiseAnalyticsEvent:$})=>{let[N,A]=l.useState(!1),F=l.useContext(x.HistoryContext),R=e.length>g.settingsApplicationsCollapsedSize&&!N?g.settingsApplicationsCollapsedSize:e.length,B=e.slice(0,R),{raiseAnalyticsEventDelayed:L}=(0,m.useAnalyticsDebounce)(1e3,$);return l.createElement(w,{flexDirection:"column"},l.createElement(j,null,l.createElement(S,null,"Notification Center"),"desktop"===o&&l.createElement(l.Fragment,null,l.createElement(d.SettingsToggle,{title:"Auto-hide Center",state:!t,onChange:()=>{h(),null==$||$({type:"Settings",action:"Toggle Autohide",value:`${t}`,skipValueHashing:!0})},toggleId:"lock-link"}),l.createElement(d.SettingsToggle,{title:"Do Not Disturb",state:n,onChange:()=>{b(),null==$||$({type:"Settings",action:"Toggle Do Not Disturb",value:`${!n}`,skipValueHashing:!0})},toggleId:"mute-link"})),l.createElement(d.SettingsToggle,{title:"Play Sound For Notifications",state:!n&&r,onChange:()=>{_(),null==$||$({type:"Settings",action:"Toggle Play Sound",value:`${!r}`,skipValueHashing:!0})},toggleId:"notification-sound",disabled:n})),"desktop"===o&&l.createElement(l.Fragment,null,l.createElement(j,null,l.createElement(C.SettingsNavigationTitle,{title:"Advanced Settings",onClick:()=>{F.push(O.ROUTES.ADVANCED_SETTINGS)}})),l.createElement(j,null,l.createElement(y.DisplaySelector,{title:"Default Display",description:"This is the display where Notification Center will launch and all new notifications will appear.",raiseAnalyticsEvent:$})),l.createElement(j,null,l.createElement(f.CenterPositionSelector,{title:"Notification Center Position",id:"center-position",value:i,onChange:e=>{c(e),null==$||$({type:"Settings",action:"Change Notification Center Position",value:`${e}`,skipValueHashing:!0})}})),l.createElement(j,null,l.createElement(S,null,"Notification Toasts"),l.createElement(M,{flexDirection:"row"},l.createElement(u.Text,{id:"spinner-label",size:"large","aria-hidden":"true"},"Duration Time"),l.createElement(v.NumberSpinner,{className:"spinner",value:I/1e3|0,suffix:"sec",min:4,max:16,onChange:e=>{D(1e3*e),null==L||L({type:"Settings",action:"Change Toast Duration",value:`${e}`,skipValueHashing:!0})}})),l.createElement(p.ToastPositionSelector,{value:a,onChange:e=>{s(e),"custom"!==e.position&&(null==$||$({type:"Settings",action:"Change Toast Position",value:`${e.position}`,skipValueHashing:!0}))}})),l.createElement(j,null,l.createElement(S,null,"Manage Applications "),e.length>0&&B.map(({application:e,streams:t=[]},n)=>l.createElement("div",{key:`SettingsToggle-${n}`},l.createElement(d.SettingsToggle,{key:`SettingsToggle-Application-${n}`,iconUrl:e.iconUrl,state:!e.muted,title:e.title,onChange:n=>{(function(e,t=[]){let n=!e.muted;T(e,n),t.length>0&&t.forEach(e=>k(e,n))})(e,t),null==$||$({type:"Settings",action:n.target.checked?"Unmute Application":"Mute Application",value:`${e.title}`})},toggleId:`mute-app-toggle-${e.id}`,showLogo:!0}),t.length>0&&l.createElement(E,null,null==t?void 0:t.map((e,t)=>l.createElement(d.SettingsToggle,{key:`SettingsToggle-Stream-${t}`,state:!e.muted,title:e.displayName,onChange:()=>{k(e,!e.muted)},toggleId:`mute-stream-toggle-${e.id}`,subToggle:!0}))))),e.length>g.settingsApplicationsCollapsedSize&&l.createElement(P,{id:"show-less-more-button",onClick:()=>A(!N)},N?"Show Fewer":"Show More"))))})},5904:e=>{"use strict";e.exports=m},5915:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},5932:e=>{"use strict";e.exports=b},5966:e=>{"use strict";e.exports=g},5996:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isTemplate=void 0,t.isTemplate=(e,t)=>e.template===t},6012:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.getAllStoredNotifications=t.isSticky=t.isStoredNotification=t.normalizeCmdOrCtrl=t.checkTolerance=t.clamp=void 0,t.clamp=function(e,t,n){return e<=t?t:e>=n?n:e},t.checkTolerance=function(e,t,n){return t<n+e&&t>n-e},t.normalizeCmdOrCtrl=function(e){return e.replace(/CmdOrCtrl/g,e=>e.includes("Cmd")?"Cmd":"Ctrl").replace(/(Cmd|Ctrl)/g,"CmdOrCtrl")},t.isStoredNotification=function(e){return!!e.notification},t.isSticky=function(e){return e.toast?"sticky"===e.toast:"sticky"===e.sticky},t.getAllStoredNotifications=function(e){return[...e.notifications,...e.reminders]},o(n(5172),t)},6075:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDispatchRequestCustomValidationDebounced=void 0;let i=n(5932),o=n(9130);t.useDispatchRequestCustomValidationDebounced=()=>{let e=(0,o.useDispatch)(),t=(0,i.useRef)(null);return(0,i.useCallback)(n=>{t.current&&window.clearTimeout(t.current),t.current=window.setTimeout(()=>{e(n)},500)},[e])}},6099:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.encodeId=t.hydrateNotification=void 0;let i=n(2867),o=n(512),r=n(5996),a=n(790),l=n(6188);function s(e,t){return`${t.uuid}:${e}`}t.hydrateNotification=function(e,t,n){var c,u;null!==(c=e.template)&&void 0!==c||(e.template="markdown");let d=l.TemplateSchemaMap[e.template];if(!d)throw Error(`Unrecognized notification template name, must be one of:     ${Object.values(o.TemplateNames).join(",")}`);let f=d.validateSync(e),p=null!=n?n:"desktop"===t.type?s(f.id,t.identity):f.id,h=(0,r.isTemplate)(f,"markdown")?(0,i.getMarkdownTextContent)(f.body):"";return(0,r.isTemplate)(f,"custom")&&(0,a.validateTemplateData)(f,!(null===(u=e.indicator)||void 0===u?void 0:u.color)),{id:p,notification:f,source:t,bodyText:h,title:""}},t.encodeId=s},6188:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.generateId=t.TemplateSchemaMap=t.CustomTemplateDataSchema=t.ButtonsSchema=t.ButtonOptionsSchema=t.IndicatorSchema=t.StreamSchema=void 0;let a=r(n(4298)),l=n(6865),s=n(3694),c=n(4415),u=n(2984),d=n(3413);t.StreamSchema=a.object({displayName:a.string().required(),id:a.string().required(),appId:a.string().required()}).label("Stream");let f=a.mixed().oneOf(Object.values(l.IndicatorType)).optional(),p=a.mixed().optional().when("type",(e,t)=>t.default(e)),h=a.mixed().oneOf(Object.values(l.IndicatorColor)).optional().when("type",(e,t)=>{switch(e){case l.IndicatorType.FAILURE:return t.default(l.IndicatorColor.RED);case l.IndicatorType.WARNING:return t.default(l.IndicatorColor.YELLOW);case l.IndicatorType.SUCCESS:return t.default(l.IndicatorColor.GREEN)}}).default(l.IndicatorColor.RED),m=a.string().required().default(l.IndicatorColor.RED),b=a.mixed().oneOf(Object.values(l.IndicatorColor)).required(),g=a.object({type:f,text:p,color:h}),v=a.object({type:f,text:p,color:m,fallback:b});t.IndicatorSchema=a.mixed().when({is:e=>{var t;return(null==e?void 0:e.color)&&(t=null==e?void 0:e.color)&&!Object.values(l.IndicatorColor).includes(t)},then:v.optional().default(null).nullable(),otherwise:g.optional().default(null).nullable()}).label("Indicator"),t.ButtonOptionsSchema=a.object({type:a.mixed().default("button"),title:a.string().required(),cta:a.boolean().default(!1),iconUrl:a.string().default(""),index:a.number(),onClick:a.mixed().nullable(),submit:a.boolean().default(!1),formOptions:a.object({submittingTitle:a.string().nullable(),errorTitle:a.string().nullable(),successTitle:a.string().nullable()}).nullable()}).label("ButtonOptions"),t.ButtonsSchema=a.array().of(t.ButtonOptionsSchema).transform((e=[])=>e.map((e,t)=>Object.assign(Object.assign({},e),{type:"button",index:t}))).test("Max 8 buttons","Max 8 buttons allowed",(e=[])=>e.length<=8).test("Max 4 CTA buttons","Max 4 CTA buttons allowed",(e=[])=>(null==e?void 0:e.filter(e=>e.cta).length)<=4).test("Max 4 non-CTA buttons","Max 4 non-CTA buttons allowed",(e=[])=>(null==e?void 0:e.filter(e=>!e.cta).length)<=4).default([]);let y=a.object({id:a.string().default(()=>C()),template:a.mixed().oneOf(Object.values(c.TemplateNames)).optional().default("markdown"),title:a.string().defined(),category:a.string().optional().default("default"),allowReminder:a.boolean().default(!0),indicator:t.IndicatorSchema,icon:a.string().default(""),priority:a.number().min(1).max(4).default(1),customData:a.object().optional().default({}),sticky:a.mixed(),toast:a.mixed(),date:a.number().default(()=>Date.now()),expires:a.number().nullable().default(null),stream:t.StreamSchema.nullable().optional().default(null),platform:a.string().nullable().optional(),onSelect:a.object().nullable().default(null),onClose:a.object().nullable().default(null),onExpire:a.object().nullable().default(null),buttons:t.ButtonsSchema.clone(),soundOptions:a.object({mode:a.mixed().required().default("default")}).default({mode:"default"})}).transform(e=>(e.sticky||e.toast||(e.toast="transient"),e)).required(),_=y.clone().omit(["form"]).shape({template:a.mixed().required(),body:a.string().defined(),form:s.templateMarkDownFormSchema}).label("Notification (Markdown)"),x=y.clone().omit(["template"]).shape({template:a.mixed().required(),list:a.mixed().required().test({name:"List object",message:"Invalid list object",test:e=>{if("object"!=typeof e)throw Error("Not an object");return Object.entries(null!=e?e:{}).every(([e,t])=>"string"==typeof e&&"string"==typeof t)}})}).label("Notification (List)"),O=y.clone().omit(["template","form"]).shape({template:a.mixed().required(),form:s.templateCustomFormSchema,templateOptions:a.object().shape({body:a.object().shape({fallbackText:a.string().optional(),compositions:a.array().required().min(1).of(a.object().shape({minTemplateAPIVersion:a.string().required().test({name:"Template API Version",message:"Minimum Template API version must be a positive integer",test:e=>/^[0-9]+$/.test(e||"")&&"0"!==e}),layout:a.mixed().required()}))}).required(),indicator:a.object({align:a.mixed().oneOf(["center","left","right"]).optional(),color:a.mixed().oneOf(Object.values(l.IndicatorColor)).optional()}).optional(),buttons:a.object({align:a.mixed().oneOf(["center","left","right"]).optional()}).optional()}).required(),templateData:a.object().required()}).label("Notification (Custom)");function C(){return(0,d.randomUUID)()}t.CustomTemplateDataSchema=a.mixed().test({name:"Custom Template Data",message:"Custom Template Data Validation Error",test:function(e){var t,n;let i=null===(n=null===(t=this.options)||void 0===t?void 0:t.context)||void 0===n?void 0:n.fragments,o=null!=e?e:{},r=Object.values(c.TemplateFragmentNames).filter(e=>"container"!=e),a=e=>{if(e.style){if(e.style.constructor!==Object)throw Error('"style" property must be an object type.');for(let t in e.style){let n=e.style[t];if("string"!=typeof n&&"number"!=typeof n)throw Error('"style" object\'s values must be a string or a number type.');if("string"==typeof n&&"position"===t.trim()&&"fixed"===n.trim())throw Error(`"${t}: ${n}" style is not allowed in fragments.`)}}};return i.containerFragments.forEach(e=>{if(e.children&&!Array.isArray(e.children))throw Error('container fragment\'s "children" property must be an array type.');a(e)}),i.presentationFragments.forEach(e=>{if(!r.includes(e.type))throw Error(`Unsupported fragment type (${e.type}) in composition. (Template API Version: ${(0,u.getTemplateAPIVersion)()})`);if(!e.dataKey||"string"!=typeof e.dataKey)throw Error('"dataKey" property must be a string type and is required field for all presentation fragment types.');if(e.optional&&"boolean"!=typeof e.optional)throw Error('"optional" property must be a boolean type.');let t=o[e.dataKey];if(!e.optional&&!t)throw Error(`templateData["${e.dataKey}"] is not optional and must exist in template data.`);if(t){if(("text"===e.type||"image"===e.type)&&"string"!=typeof t)throw Error(`templateData["${e.dataKey}"] is referred by a ${e.type} fragment and must be a string type.`);if("list"===e.type&&(!Array.isArray(t)||t.some(e=>2!==e.length||"string"!=typeof e[0]||"string"!=typeof e[1])))throw Error(`templateData["${e.dataKey}"] is referred by a list fragment and must be a ListPairs (Array of [string, string]) type.`)}a(e)}),!0}}).label("Custom Template Data"),t.TemplateSchemaMap={[c.TemplateNames.markdown]:_,[c.TemplateNames.list]:x,[c.TemplateNames.custom]:O},t.generateId=C},6318:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TimeWidgetComponent=t.TimeWidgetComponentConnected=void 0;let o=i(n(5932)),r=n(9130),a=n(7451),l=n(258),s=n(7250),c=n(1656),u=n(6464),d=n(4691),f=n(7260),p=n(1971),h=n(5232),m=n(5484),b=n(9816),g=n(6415),v=Array.from(Array(24).keys()).map(e=>({title:`${e%12||12}:00 ${e>=12?"PM":"AM"}`,value:`${e.toString().padStart(2,"0")}:00`}));t.TimeWidgetComponentConnected=e=>o.default.createElement(l.Field,{name:e.field.key,component:y,timeField:e.field,showModal:e.showModal,hideModal:e.hideModal,formSettings:e.formSettings,raiseAnalytics:e.raiseAnalytics,mode:e.mode});let y=({field:e,showModal:t,hideModal:n,timeField:i,form:r,formSettings:a,raiseAnalytics:l,mode:y})=>{let _=e.value?(0,d.convertTo24HourFormat)(e.value):void 0;(0,m.useRaiseFieldAnalytics)(i,l,e=>(0,d.convertTo24HourFormat)(e.value));let[x,O,C,w]=(0,c.useMenuModalDialog)(e=>{r.setFieldTouched(i.key,!0),r.setFieldValue(i.key,(0,d.convertFrom24HourFormat)(e))},t,n,v,e=>{var t;return{width:null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.clientWidth,height:u.dropdownModalHeight}},()=>r.setFieldTouched(i.key,!0),v.find(t=>e.value&&t.value==_),y,"time"),{modalType:j,isTimePickerModalOpen:S}=o.default.useContext(g.WebModalContext),P=r.errors[e.name]&&r.touched[e.name]?"critical":void 0;return o.default.createElement(f.InputContainer,{flexDirection:"column"},o.default.createElement(s.DateInput,{label:(0,h.getLabelText)(i,a),key:`${i.key}-${w}`,value:_,type:"time",ref:C,helperText:i.helperText,onExpand:()=>O(!x),expanded:x,status:P,onChange:e=>r.setFieldValue(i.key,(0,d.convertFrom24HourFormat)(e.target.value))}),"web"===y&&"widget"===j&&S&&o.default.createElement(b.WebModalComponent,{mode:y}),o.default.createElement(p.ErrorLabel,{name:e.name}))};t.TimeWidgetComponent=(0,r.connect)(e=>({mode:e.mode}),e=>({showModal:t=>e(new a.ShowModal(t)),hideModal:t=>e(new a.HideModal(t))}))(t.TimeWidgetComponentConnected)},6345:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationsPanel=void 0;let l=n(7250),s=r(n(5932)),c=n(9130),u=a(n(2230)),d=n(4800),f=n(7451),p=n(2471),h=n(4896),m=n(6764),b=n(6834),g=n(8318),v=n(8904),y=n(3264),_=n(660),x=n(9136),O=n(7586),C=n(925),w=(0,u.default)(l.Box)`
  background: ${({theme:e})=>e.palette.background2};
  border: 1px solid ${({theme:e})=>e.palette.background4};
  height: 100%;

  &:after {
    position: absolute;
    content: '';
    pointer-events: none;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    box-shadow: 0 0 1px 1px ${({theme:e})=>e.palette.background4};
  }
`,j=u.default.div`
  margin: ${({theme:e})=>e.px.large} auto;
`;t.NotificationsPanel=(0,c.connect)(e=>({notifications:(0,f.selectPlatformNotifications)(e),reminders:(0,f.selectPlatformReminders)(e),applications:e.applications,streams:e.streams,platforms:e.platform.list,centerLocked:e.centerLocked,searchResults:(0,f.selectPlatformSearchResults)(e),searchQuery:e.search.query,searchMode:e.search.searchMode,visible:e.centerVisible,errors:(0,f.selectVisibleErrors)(e),category:e.categories.selectedCategory}),e=>({setSearchMode:t=>e(new p.SetSearchMode(t)),searchNotifications:t=>e(new p.SearchNotifications(t)),clearSearch:()=>e(new p.ClearSearch),removeNotifications:t=>e(new f.RemoveNotifications(t,"ClearAll")),closeCenter:()=>e(new f.ToggleCenterVisibility(f.ToggleCenterVisibilitySource.BUTTON,!1)),dismissError:t=>e(new f.DismissError(t)),raiseAnalyticsEvent:async(t,n)=>e(new f.RaiseAnalyticsEvent(t,n))}))(({notifications:e,reminders:t,applications:n,streams:i,platforms:o,searchMode:r,searchQuery:a,visible:c,errors:u,category:f,clearSearch:p,removeNotifications:S,setSearchMode:P,searchNotifications:E,closeCenter:M,dismissError:T,raiseAnalyticsEvent:k})=>{let I=s.useContext(_.HistoryContext),D=s.useContext(x.WindowContext);s.useEffect(()=>{D.document.title="Center"},[]);let $=s.useCallback(()=>{S("reminders"===f?t:e),null==k||k({type:"Center",action:"Clear All",skipValueHashing:!0})},[e,t,S,f]);return s.createElement(w,{flexDirection:"column",flexGrow:1,"data-testid":"notifications-panel-container"},s.createElement(C.GlobalProviderStyles,null),s.createElement(m.Header,{title:"Notifications",onBack:r?()=>P(!1):void 0,onClose:M,badgeCount:e.length},s.createElement(d.HeaderButton,{"aria-label":"Search",onClick:()=>{P(!r),null==k||k({type:"Center",action:"Select Search",skipValueHashing:!0})}},s.createElement(l.Icon,{icon:"MagnifyingGlassIcon",size:"base"})),s.createElement(d.HeaderButton,{"aria-label":"Settings",onClick:()=>{r&&P(!1),I.push(O.ROUTES.SETTINGS)}},s.createElement(l.Icon,{icon:"GearIcon",size:"base"}))),s.createElement(h.ErrorPanel,{errors:u,onDismiss:e=>{T(e)}}),s.createElement(g.PlatformsPanel,null),r?s.createElement(j,null,s.createElement(y.TextInput,{onChange:e=>{e.value.length>0?E(e.value.trim()):p()},clearControl:!0,focusOnMount:!0,icon:"MagnifyingGlassIcon",placeholder:"Search within your Notifications"})):s.createElement(v.CategoriesPanel,{onClearAll:$}),c?s.createElement(b.NotificationView,{id:"notification-panel-view",reminders:t,notifications:e,searchMode:r,searchString:a,applications:n,streams:i,platforms:o}):s.createElement(s.Fragment,null))})},6370:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useFormContainerExpander=void 0;let i=n(9130),o=n(5932),r=n(7953),a=n(7216),l=n(1827);t.useFormContainerExpander=e=>{let t=(0,i.useSelector)(e=>e.activeForms),n=t&&t.focusedFormNotificationId==e,s=(0,i.useDispatch)(),c=(0,o.useContext)(r.ResizeContext);return(0,o.useEffect)(()=>{"emitResize"in c&&setTimeout(()=>c.emitResize(),200)},[c,n]),(0,o.useEffect)(()=>()=>{n&&s(new a.NotificationFormEditComplete)},[]),[!!n,()=>s(n?new a.NotificationFormEditComplete:new l.NotificationFormEditStart(e))]}},6406:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.AdvancedSettingsView=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(9130),u=n(7250),d=n(7234),f=n(7451),p=(0,s.default)(u.Box)`
  background-color: ${({theme:e})=>e.palette.background6};
  padding-left: ${({theme:e})=>e.px.small};
  padding-right: ${({theme:e})=>e.px.small};
`,h=(0,s.default)(u.Box)`
  border-top: 1px solid ${({theme:e})=>e.palette.background4};
  flex-direction: column;
  gap: ${({theme:e})=>e.px.large};
  padding: ${({theme:e})=>`${e.px.large} ${e.px.large}`};
`,m=(0,s.default)(u.Box)`
  align-items: center;
  justify-content: space-between;
  flex-direction: flex;
  gap: ${({theme:e})=>e.px.large};
`,b=(0,s.default)(u.Box)`
  flex-direction: column;
  gap: ${({theme:e})=>e.px.large};
`,g=(0,s.default)(u.Text).attrs({weight:"bold"})`
  margin-bottom: ${({theme:e})=>`${e.px.xsmall}`};
`,v=(0,s.default)(u.Box)`
  padding: ${({theme:e})=>`${e.px.large} ${e.px.large} 0 ${e.px.large}`};
  flex-direction: column;
`;t.AdvancedSettingsView=(0,c.connect)(e=>({clearFiltersOnCenterShow:e.settings.clearFiltersOnCenterShow,clearFiltersOnShortcutCenterShow:e.settings.clearFiltersOnShortcutCenterShow,userDefaultShortcut:e.settings.userDefaultShortcut,platformDefaultShortcut:e.settings.platformDefaultShortcut,keyboardShortcutToOpenEnabled:e.settings.keyboardShortcutToOpenEnabled}),e=>({toggleClearFiltersOnCenterShow:t=>e(new d.ToggleClearFiltersOnCenterShow(t)),toggleClearFiltersOnShortcutCenterShow:t=>e(new d.ToggleClearFiltersOnShortcutCenterShow(t)),toggleKeyboardShortcutToOpenEnabled:t=>e(new d.ToggleKeyboardShortcutToOpenEnabled(t)),setUserDefaultShortcut:(t,n)=>e(new d.SetUserDefaultShortcut(t,n)),raiseAnalyticsEvent:async t=>e(new f.RaiseAnalyticsEvent(t))}))(({clearFiltersOnCenterShow:e,toggleClearFiltersOnCenterShow:t,raiseAnalyticsEvent:n,toggleClearFiltersOnShortcutCenterShow:i,toggleKeyboardShortcutToOpenEnabled:o,userDefaultShortcut:r,setUserDefaultShortcut:a,platformDefaultShortcut:s,keyboardShortcutToOpenEnabled:c,clearFiltersOnShortcutCenterShow:f})=>{let[y,_]=l.useState(!1),[x,O]=l.useState(new Set),C=l.useRef(null),w=e=>window.navigator.userAgent.toLowerCase().includes("windows")?e.replace("CmdOrCtrl","Ctrl"):e.replace("CmdOrCtrl","Cmd"),j=w(s||d.openFinDefaultShortcut),S=w(r||j),[P,E]=l.useState(w(S));return l.useEffect(()=>{y&&C.current&&(C.current.focus(),O(new Set))},[y]),l.createElement(b,null,l.createElement(v,null,l.createElement(g,null,"Notification Center Behavior when opened"),l.createElement(u.RadioGroup,{direction:"column",name:"clear-filters-on-open",value:e?"reset":"remember",onChange:e=>{var i;t("reset"===e.target.value),i="reset"!==e.target.value,null==n||n({type:"Settings",action:"Keep Filters",value:i?"True":"False",skipValueHashing:!0})}},l.createElement(u.RadioInput,{label:"Remember previous state",value:"remember"}),l.createElement(u.RadioInput,{label:"Reset to default",value:"reset"}))),l.createElement(v,null,l.createElement(m,null,l.createElement(g,null,"Enable keyboard shortcut to open Notification Center"),l.createElement(u.Toggle,{checked:c,onChange:()=>o(!c)})),c&&l.createElement(l.Fragment,null,l.createElement(m,null,l.createElement(p,null,P),l.createElement(u.Box,{display:"flex"},l.createElement(u.Button,{kind:"secondary",onClick:()=>{y&&(_(!1),""!==P?a(P,r):E(S)),_(!y)}},y?"Save Shortcut":l.createElement(l.Fragment,null,l.createElement(u.Icon,{size:"small",icon:"Pencil1Icon"})," Edit")))),y&&l.createElement(u.TextInput,{onKeyDown:e=>{if(x.size<4){e.preventDefault();let t=1===e.key.length?e.key.toUpperCase():e.key,n=new Set(x).add(t);O(n),(e=>{let t={Control:"Ctrl",Command:"Cmd"," ":"Space",ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"};E(Array.from(e).map(e=>t[e]||e).join(" + "))})(n)}},onKeyUp:e=>{x.delete(1===e.key.length?e.key.toUpperCase():e.key),O(new Set(x))},ref:C,style:{marginTop:"5px"},value:P}))),c&&l.createElement(v,null,l.createElement(g,null,"Notification Center behavior when opened with a keyboard shortcut"),l.createElement(u.RadioGroup,{direction:"column",name:"clear-filters-on-shortcut-open",value:f?"reset":"remember",onChange:e=>i("reset"===e.target.value)},l.createElement(u.RadioInput,{label:"Remember previous state",value:"remember"}),l.createElement(u.RadioInput,{label:"Reset to default",value:"reset"}))),l.createElement(h,null,l.createElement(u.Button,{kind:"secondary",onClick:()=>{t(!1),i(!0),o(!0),a("",P),E(j)}},"Restore Default Preferences")))})},6415:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.WebModalContextProvider=t.WebModalContext=void 0;let a=r(n(5932));t.WebModalContext=(0,a.createContext)({isMenuModalOpen:!1,setIsMenuModalOpen:()=>{},menuConfig:null,setMenuConfig:()=>{},isCustomReminderModalOpen:!1,setIsCustomReminderModalOpen:()=>{},customReminderConfig:null,setCustomReminderConfig:()=>{},isDatePickerModalOpen:!1,setIsDatePickerModalOpen:()=>{},datePickerConfig:null,setDatePickerConfig:()=>{},isTimePickerModalOpen:!1,setIsTimePickerModalOpen:()=>{},timePickerConfig:null,setTimePickerConfig:()=>{},modalType:null,setModalType:()=>{}}),t.WebModalContextProvider=({children:e})=>{let[n,i]=(0,a.useState)(!1),[o,r]=(0,a.useState)(null),[l,s]=(0,a.useState)(!1),[c,u]=(0,a.useState)(null),[d,f]=(0,a.useState)(!1),[p,h]=(0,a.useState)(null),[m,b]=(0,a.useState)(!1),[g,v]=(0,a.useState)(null),[y,_]=(0,a.useState)(null);return a.default.createElement(t.WebModalContext.Provider,{value:{isMenuModalOpen:n,menuConfig:o,setIsMenuModalOpen:i,setMenuConfig:r,isCustomReminderModalOpen:l,customReminderConfig:c,setIsCustomReminderModalOpen:s,setCustomReminderConfig:u,isDatePickerModalOpen:d,datePickerConfig:p,setIsDatePickerModalOpen:f,setDatePickerConfig:h,isTimePickerModalOpen:m,timePickerConfig:g,setIsTimePickerModalOpen:b,setTimePickerConfig:v,modalType:y,setModalType:_}},e)}},6430:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getFormikErrorCount=void 0,t.getFormikErrorCount=e=>{let{errors:t,touched:n}=e;return Object.entries(t).map(([e])=>n[e]).filter(e=>e).length}},6451:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isConnectedToAtLeast=t.getStatus=void 0;let o=i(n(7530)),r=n(5966),a=n(3816),l=n(9603);function s(){return(0,r.withStrictTimeout)(500,(0,a.tryServiceDispatch)(l.APITopic.GET_PROVIDER_STATUS,void 0),"").catch(()=>({connected:!1,version:null,templateAPIVersion:null}))}t.getStatus=s,t.isConnectedToAtLeast=async function(e){let t=await s();if(t.connected&&null!==t.version){let n=(0,o.default)(t.version,e);if(0===n||1===n)return!0}return!1}},6452:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;let a=r(n(5932)),l=n(260),s=n(978);t.Router=({history:e,routes:t=[]})=>a.createElement(s.Router,{history:e},a.createElement(l.Switch,null,t.map(c)));let c=e=>{let{path:t,exact:n,Component:i}=e;return a.createElement(l.Route,{key:t,component:i,exact:n,path:t})}},6455:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.ActionBodyClickType=t.ActionNoopType=t.ActionTrigger=void 0,(n=t.ActionTrigger||(t.ActionTrigger={})).CONTROL="control",n.SELECT="select",n.CLOSE="close",n.EXPIRE="expire",n.PROGRAMMATIC="programmatic",(t.ActionNoopType||(t.ActionNoopType={})).EVENT_DISMISS="event_dismiss",(t.ActionBodyClickType||(t.ActionBodyClickType={})).DISMISS_EVENT="dismiss_event"},6460:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FadeTransition=void 0;let r=o(n(5932)),a=o(n(2230)),l=n(524);t.FadeTransition=e=>{var{children:t}=e,n=i(e,["children"]);let o=r.default.useRef(null);return r.default.createElement(l.Transition,Object.assign({},n,{nodeRef:o}),e=>r.default.createElement(s,{ref:o,state:e},t))};let s=a.default.div`
  transition: 200ms;
  opacity: ${({state:e})=>"entered"===e?1:0};
  display: ${({state:e})=>"exited"===e?"none":"block"};
`},6464:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultCalendarWidth=t.dropdownModalWidth=t.dropdownModalHeight=t.modalWidth=void 0,t.modalWidth=312,t.dropdownModalHeight=272,t.dropdownModalWidth=285,t.defaultCalendarWidth=230},6476:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WaitQueue=void 0;let i=n(5966);t.WaitQueue=class{constructor(){this.waiting=!1,this.root=null,this.current=null}get isLocked(){return this.waiting}wait(){this.waiting=!0,this.root||(this.root=this.current=new i.DeferredPromise)}async signal(){this.waiting=!1,this.release(this.root);let e=this.current;this.root=this.current=null,await (null==e?void 0:e.promise)}async lock(){if(!this.waiting)return null;let e=null,t=this.current;return t&&(this.current=e=new i.DeferredPromise,await t.promise),e}release(e){e&&e.resolve()}}},6542:e=>{"use strict";e.exports=v},6566:e=>{"use strict";e.exports=y},6630:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TextWidgetComponent=void 0;let r=o(n(5932)),a=n(258),l=n(7260),s=n(8912),c=n(1971),u=n(7250),d=n(5232),f=n(5484);t.TextWidgetComponent=e=>{let{key:t}=e.field;return r.default.createElement(a.Field,{name:t,component:p,tabIndex:e.tabIndexOverride,formSettings:e.formSettings,notificationField:e.field,raiseAnalytics:e.raiseAnalytics})};let p=e=>{let{raiseAnalytics:t,field:n,form:o,notificationField:a,formSettings:p}=e,h=i(e,["raiseAnalytics","field","form","notificationField","formSettings"]),{placeholder:m,multiline:b,rows:g}=a.widget,v=o.errors[n.name];(0,f.useRaiseFieldAnalytics)(a,t);let y=()=>{o.touched[n.name]||o.setFieldTouched(n.name)};return r.default.createElement(l.InputContainer,{flexDirection:"column"},!b&&r.default.createElement(u.TextInput,Object.assign({label:(0,d.getLabelText)(a,p),"aria-label":(0,d.getLabelText)(a,p),type:"text",helperText:a.helperText,onChangeCapture:y,autoComplete:"off",placeholder:m,status:v&&o.touched[n.name]?"critical":void 0,"data-type":s.StringWidgetType.Text},h,n)),b&&r.default.createElement(u.TextArea,Object.assign({label:(0,d.getLabelText)(a,p),"aria-label":(0,d.getLabelText)(a,p),onChangeCapture:y,autoComplete:"off",placeholder:m,"data-type":s.StringWidgetType.Text,helperText:a.helperText,rows:g},h,n)),r.default.createElement(c.ErrorLabel,{name:n.name}))}},6684:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateMarkdownComponent=void 0;let o=n(7250),r=i(n(5932)),a=i(n(2230)),l=n(164),s=n(5724);t.TemplateMarkdownComponent=({notification:e,templateContent:t,submitForm:n=()=>null,tabIndexOverride:i,isToast:o})=>r.default.createElement(c,{flexDirection:"column"},r.default.createElement(u,null,r.default.createElement(s.Body,{text:e.notification.body})),e.notification.form&&r.default.createElement(l.NotificationForm,{templateContent:t,tabIndexOverride:i,notification:e,onSubmit:n,isToast:o}));let c=(0,a.default)(o.Box)`
  width: 100%;
`,u=(0,a.default)(o.Box)`
  padding-right: ${e=>e.theme.px.base};
  padding-left: ${e=>e.theme.px.base};
`},6731:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Groups=void 0;let o=i(n(5932)),r=n(2191),a=i(n(2230)),l=n(6460),s=n(524),c=n(4182);t.Groups=({groupData:e,hasControls:t=!0,onKeyDown:n})=>{let i=(0,r.isLayered)(e),a=i?e.layers:e.sections;return o.default.createElement(u,null,a.map(e=>o.default.createElement(l.FadeTransition,{key:e.key,timeout:200},o.default.createElement(d,null,o.default.createElement(c.Group,{source:e,isLayered:i,hasControls:t,onKeyDown:null==n?void 0:n(e.key)})))))};let u=(0,a.default)(s.TransitionGroup)`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.px.xsmall};
`,d=a.default.div`
  align-self: center;
  width: 100%;
  position: sticky;
  &:not(:first-child) {
    margin-top: ${({theme:e})=>e.px.small};
  }
  &:last-of-type {
    margin-bottom: ${({theme:e})=>e.px.large};
  }
`},6764:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=t.NonDraggableHeader=t.DraggableHeader=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(7250),u=n(5396),d=n(4800);t.DraggableHeader=e=>{var t;return l.createElement(b,null,l.createElement(g,{justifyContent:"space-between",alignItems:"center"},l.createElement(y,{alignItems:"center",windowDrag:!0},e.icon&&l.createElement(f,{size:"xlarge",src:e.icon,"aria-label":"logo",alt:null!==(t=e.title)&&void 0!==t?t:""}),l.createElement(v,{as:"h1",size:"large",leftPad:!e.icon,weight:"bold"},e.title),!!e.badgeCount&&e.badgeCount>0&&l.createElement(c.Badge,{count:e.badgeCount,className:"badge",max:99}),l.createElement(h,{href:"#notification-panel-view","aria-label":`${e.badgeCount} notifications - skip to content`})),l.createElement(m,{justifyContent:"center",alignItems:"center"},e.onClose&&l.createElement(d.HeaderButton,{onClick:e.onClose,"aria-label":"close",className:"closeButton"},l.createElement(c.Icon,{icon:"Cross1Icon",size:"base"})))))},t.NonDraggableHeader=e=>l.createElement(b,null,l.createElement(g,{justifyContent:"space-between",alignItems:"center"},l.createElement(y,{alignItems:"center"},e.onBack&&l.createElement(p,null,l.createElement(d.HeaderButton,{autoFocus:!0,"aria-label":"back",onClick:e.onBack},l.createElement(c.Icon,{icon:"ArrowLeftIcon",size:"base"}))),l.createElement(v,{as:"h1",size:"large",leftPad:!e.onBack,weight:"bold"},e.title),!!e.badgeCount&&e.badgeCount>0&&l.createElement(c.Badge,{count:e.badgeCount,className:"badge",max:99}),l.createElement(h,{href:"#notification-panel-view","aria-label":`${e.badgeCount} notifications - skip to content`})),l.createElement(m,{justifyContent:"center",alignItems:"center"},e.children,e.onClose&&l.createElement(d.HeaderButton,{onClick:e.onClose,"aria-label":"close",className:"closeButton"},l.createElement(c.Icon,{icon:"Cross1Icon",size:"base"}))))),t.Header=e=>e.draggable?l.createElement(t.DraggableHeader,Object.assign({},e)):l.createElement(t.NonDraggableHeader,Object.assign({},e));let f=(0,s.default)(u.AppLogo)`
  margin-left: ${({theme:e})=>e.px.small};
`,p=s.default.div`
  margin-right: ${({theme:e})=>e.px.small};
`,h=s.default.a`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  list-style: none;
`,m=(0,s.default)(c.Box)`
  margin-left: ${({theme:e})=>e.px.small};
  height: ${({theme:e})=>e.px.xxxlarge};
`,b=(0,s.default)(c.Box)`
  padding: 0 0;
  height: ${({theme:e})=>e.px.xxxlarge};
  border-bottom: 1px solid ${({theme:e})=>e.palette.background4};
  user-select: none;
  width: 100%;

  ${c.Icon} {
    /* prevent icon from squishing when title text is too long. */
    min-width: ${e=>e.theme.px.xlarge};
  }

  .badge {
    margin-left: ${({theme:e})=>e.px.base};
    margin-right: auto;
  }
`,g=(0,s.default)(c.Box)`
  height: 100%;
  width: 100%;
`,v=(0,s.default)(c.Text)`
  padding-left: ${({leftPad:e,theme:t})=>e?t.px.large:0};
  ${c.Mixins.textOverflow};
`,y=(0,s.default)(c.Box)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
  -webkit-app-region: ${e=>e.windowDrag?"drag":"no-drag"};
  flex: 1;
`},6766:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getInitialFormValues=void 0;let i=n(8912),o=n(4691),r=new Map;r.set(i.FieldType.date,e=>(0,o.ensureCompleteDateFieldValue)(e.value)),r.set(i.FieldType.time,e=>(0,o.ensureCompleteTimeFieldValue)(e.value)),t.getInitialFormValues=function(e){let t={};for(let n of e)if(r.has(n.type)){let e=r.get(n.type);t[n.key]=e&&e(n)}else t[n.key]=n.value;return t}},6812:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateCustomComponent=void 0;let o=i(n(5932)),r=n(2972),a=n(164),l=i(n(2230));t.TemplateCustomComponent=e=>{var t;let{notification:n,clickFragment:i,tabIndexOverride:l}=e,c=n.notification,u=null===(t=c.templateOptions.body.compositions[0])||void 0===t?void 0:t.layout,d=c.templateOptions.body.fallbackText;return u?o.default.createElement(o.default.Fragment,null,o.default.createElement(s,null,o.default.createElement(r.TemplateFragment,{fragment:u,templateData:c.templateData,fragmentIndex:0,notificationKey:`${n.id}${n.notification.date}`,clickFragment:i,tabIndexOverride:l})),n.notification.form&&o.default.createElement(a.NotificationForm,{templateContent:e.templateContent,notification:n,onSubmit:e.submitForm,isToast:e.isToast})):d?o.default.createElement(o.default.Fragment,null," ",d," "):o.default.createElement(o.default.Fragment,null)};let s=l.default.div`
  padding-right: ${e=>e.theme.px.base};
  padding-left: ${e=>e.theme.px.base};
`},6834:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationView=void 0;let l=r(n(5932)),s=n(9130),c=a(n(2230)),u=n(7250),d=n(4887),f=n(2191),p=n(3420),h=n(5228),m=n(6731),b=n(6460),g=n(524),v=n(8602),y=n(9136),_=n(7451),x=(0,c.default)(u.Box)`
  flex: 1;
  user-select: none;
  padding: ${({theme:e})=>e.px.large};
  align-content: center;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: overlay;
`;t.NotificationView=(0,s.connect)(e=>({platform:e.platform.selected,selectedCategory:e.categories.selectedCategory,sortMethod:e.categories.sortType,sortDirection:e.categories.sortDirection}),e=>({setFocusedNotification:t=>{e(new v.SetFocusedNotification(t))},raiseAnalyticsEvent:async(t,n)=>e(new _.RaiseAnalyticsEvent(t,n))}))(({notifications:e,reminders:t,searchMode:n,searchString:i,applications:o,streams:r,id:a,selectedCategory:s,platform:c,setFocusedNotification:u,sortMethod:v,sortDirection:_,raiseAnalyticsEvent:O})=>{let C=(0,l.useMemo)(()=>(0,f.generateGroups)({notifications:"reminders"===s?t:e,applications:o,streams:r,selectedCategory:s,sortType:v,sortDirection:_}),[e,t,o,r,s,v,_]),w=l.default.useContext(y.WindowContext),j=(0,f.isLayered)(C)?C.layers.length:C.sections.length,S=`${c}-${s}-${v}-${_}-${!!j}`,P=(0,l.useCallback)(e=>t=>n=>{var i,o;let r=e=>{null==O||O({type:"Center",action:"Keystroke",value:e,skipValueHashing:!0})},a=(0,f.isLayered)(C)?null===(o=C.layers.find(t=>t.key===e))||void 0===o?void 0:o.sections.reduce((e,t)=>[...e,...t.notifications],[]):null===(i=C.sections.find(t=>t.key===e))||void 0===i?void 0:i.notifications;if(a){if(t){let e=a.findIndex(e=>e.id===t);if("ArrowDown"===n.key)n.preventDefault(),e!==a.length-1&&(u(a[e+1].id),r("ArrowDown"));else if("ArrowUp"===n.key)n.preventDefault(),0!==e&&(u(a[e-1].id),r("ArrowUp"));else if("_Delete"===n.key){let e=((0,f.isLayered)(C)?C.layers.flatMap(e=>e.sections):C.sections).flatMap(e=>e.notifications),n=e.findIndex(e=>e.id===t),i=e.filter(e=>e.id!==t),o=i.length>=n+1?i[n]:i[i.length-1];u(null==o?void 0:o.id),r("_Delete")}}else"ArrowDown"===n.key&&(n.preventDefault(),u(a[0].id),r("ArrowDown"))}},[C]);return(0,l.useEffect)(()=>{let e=e=>{var t,n,i,o;if("t"===e.key&&e.ctrlKey){let e=(0,f.isLayered)(C)?null===(o=null===(i=C.layers[0])||void 0===i?void 0:i.sections[0].notifications)||void 0===o?void 0:o[0]:null===(n=null===(t=C.sections[0])||void 0===t?void 0:t.notifications)||void 0===n?void 0:n[0];e&&(u(e.id),null==O||O({type:"Notification",action:"Keystroke",value:"ctrl + t",skipValueHashing:!0}))}};return w.document.addEventListener("keydown",e),()=>{w.document.removeEventListener("keydown",e)}},[C]),l.default.createElement(x,{"data-scrollable-container":"true",className:"view",id:a,tabIndex:-1,role:"list","aria-label":"Notifications Groups"},n&&i.length>=d.minSearchStringLength&&l.default.createElement(p.SearchResults,null),i.length<d.minSearchStringLength&&l.default.createElement(g.SwitchTransition,{mode:"out-in"},l.default.createElement(b.FadeTransition,{key:S,timeout:100,mountOnEnter:!0,unmountOnExit:!0},j?l.default.createElement(m.Groups,{groupData:C,onKeyDown:P}):l.default.createElement(h.EmptyNotificationListCard,null))))})},6858:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.WebStore=void 0;let r=n(4352),a=n(2903),l=n(8281),s=class extends l.Store{constructor(){super(Object.assign(Object.assign({},a.initialState),{centerVisible:!0,mode:"web"}))}async init(){}};s=i([(0,r.injectable)(),o("design:paramtypes",[])],s),t.WebStore=s},6865:(e,t)=>{"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.IndicatorColor=t.IndicatorType=void 0,(i=t.IndicatorType||(t.IndicatorType={})).FAILURE="failure",i.WARNING="warning",i.SUCCESS="success",(n=t.IndicatorColor||(t.IndicatorColor={})).RED="red",n.GREEN="green",n.YELLOW="yellow",n.BLUE="blue",n.PURPLE="purple",n.GRAY="gray",n.ORANGE="orange",n.MAGENTA="magenta",n.TEAL="teal"},6906:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxGroupWidgetComponent=void 0;let a=r(n(5932)),l=n(7250),s=n(258),c=n(7260),u=n(1971),d=n(5232),f=n(5484);t.CheckboxGroupWidgetComponent=e=>a.default.createElement(s.Field,{name:e.field.key,component:p,checkboxGroupField:e.field,formSettings:e.formSettings,raiseAnalytics:e.raiseAnalytics});let p=({checkboxGroupField:e,field:t,form:n,formSettings:i,raiseAnalytics:o})=>{let r=e.widget.group.map(e=>({value:e.value,clicked:!1})),s=(0,a.useRef)(r);return(0,f.useRaiseFieldAnalytics)(e,o,void 0,s),a.default.createElement(c.InputContainer,{flexDirection:"column"},a.default.createElement(l.CheckboxGroup,{label:(0,d.getLabelText)(e,i),helperText:e.helperText,onChange:t=>{n.setFieldTouched(e.key,!0),n.setFieldValue(e.key,t.length>0?t:void 0)},values:t.value,key:`${t.name}-${t.value}`},e.widget.group.map(n=>{var i;return a.default.createElement(l.Checkbox,{name:`${e.key}_${n.value}`,key:`${e.key}_${n.value}`,checked:-1!==(null===(i=t.value)||void 0===i?void 0:i.indexOf(n.value)),label:n.label,value:n.value})})),a.default.createElement(u.ErrorLabel,{name:t.name}))}},6975:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unsubscribeScrollableContainers=t.subscribeScrollableContainers=void 0,t.subscribeScrollableContainers=(e,t)=>{let n=e.parentElement;for(;n;)"true"===n.getAttribute("data-scrollable-container")&&n.addEventListener("scroll",t),n=n.parentElement},t.unsubscribeScrollableContainers=(e,t)=>{let n=e.parentElement;for(;n;)"true"===n.getAttribute("data-scrollable-container")&&n.removeEventListener("scroll",t),n=n.parentElement}},6992:e=>{"use strict";e.exports=_},7007:e=>{"use strict";var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function r(){r.init.call(this)}e.exports=r,e.exports.once=function(e,t){return new Promise(function(n,i){function o(n){e.removeListener(t,r),i(n)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}m(e,t,r,{once:!0}),"error"!==t&&"function"==typeof e.on&&m(e,"error",o,{once:!0})})},r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var a=10;function l(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function s(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function c(e,t,n,i){var o,r,a;if(l(n),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),r=e._events),a=r[t]),void 0===a)a=r[t]=n,++e._eventsCount;else if("function"==typeof a?a=r[t]=i?[n,a]:[a,n]:i?a.unshift(n):a.push(n),(o=s(e))>0&&a.length>o&&!a.warned){a.warned=!0;var c=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=a.length,console&&console.warn&&console.warn(c)}return e}function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=u.bind(i);return o.listener=n,i.wrapFn=o,o}function f(e,t,n){var i=e._events;if(void 0===i)return[];var o=i[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):h(o,o.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=Array(t),i=0;i<t;++i)n[i]=e[i];return n}function m(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,function o(r){i.once&&e.removeEventListener(t,o),n(r)})}}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),r.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return s(this)},r.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,l=Error("Unhandled error."+(a?" ("+a.message+")":""));throw l.context=a,l}var s=r[e];if(void 0===s)return!1;if("function"==typeof s)i(s,this,t);else{var c=s.length,u=h(s,c);for(n=0;n<c;++n)i(u[n],this,t)}return!0},r.prototype.addListener=function(e,t){return c(this,e,t,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(e,t){return c(this,e,t,!0)},r.prototype.once=function(e,t){return l(t),this.on(e,d(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,d(this,e,t)),this},r.prototype.removeListener=function(e,t){var n,i,o,r,a;if(l(t),void 0===(i=this._events)||void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,r=n.length-1;r>=0;r--)if(n[r]===t||n[r].listener===t){a=n[r].listener,o=r;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,a||t)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0==arguments.length){var o,r=Object.keys(n);for(i=0;i<r.length;++i)"removeListener"!==(o=r[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},r.prototype.listeners=function(e){return f(this,e,!0)},r.prototype.rawListeners=function(e){return f(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},r.prototype.listenerCount=p,r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},7010:function(e,t,n){"use strict";var i,o=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}};Object.defineProperty(t,"__esModule",{value:!0}),t.Scheduler=void 0;let l=n(4352),s=n(6566),c=n(8004),u=n(7451),d=n(8320),f=n(2645),p=class{constructor(e){this._active=!0,this._nextAction=null,this._store=e,this._store.onAction.add(this.onAction,this),f.InjectorBase.initialized.then(()=>{this.scheduleEarliestAction(Date.now())})}scheduleEarliestAction(e){let t=this.generateNextClassifier();null!==t&&this.scheduleAction(t,e)}scheduleAction(e,t){this._active&&(e.timestamp<=t?this.executeAction(e,t):(this._nextAction&&window.clearTimeout(this._nextAction.timerHandle),this._nextAction=Object.assign(Object.assign({},e),{timerHandle:this.safeDelay(()=>{this.executeAction(e,e.timestamp)},e.timestamp,t)})))}async executeAction(e,t){this._nextAction&&this._nextAction.target.id===e.target.id&&(this._nextAction=null),"Expiry"===e.type?await this._store.dispatch(new u.ExpireNotification(e.target)):await this._store.dispatch(new d.TimeoutReminder(e.target.id)),this.scheduleEarliestAction(t)}async onAction(e){e instanceof u.CreateNotification?this.onAddNotification(e.notification):e instanceof u.RemoveNotifications?this.onRemoveNotifications(e.notifications):e instanceof d.SetReminder?this.onSetReminder(e.reminder,e.reminder.modifiers.reminder):e instanceof d.CancelReminder?this.onCancelReminder(e.reminder):e instanceof u.Freeze?this.onFreeze():e instanceof u.Unfreeze?this.onUnfreeze():e instanceof u.ApplySnapshot&&this.scheduleEarliestAction(Date.now())}onSetReminder(e,t){var n;(!this._nextAction||t<this._nextAction.timestamp)&&this.scheduleAction({type:"Reminder",target:Object.assign(Object.assign({},e),{modifiers:Object.assign(Object.assign({},null!==(n=e.modifiers)&&void 0!==n?n:{}),{reminder:t})}),timestamp:t},Date.now())}onCancelReminder(e){this._nextAction&&"Reminder"==this._nextAction.type&&this._nextAction.target.id===e.id&&this.reschedule()}onAddNotification(e){h(e)&&(!this._nextAction||e.notification.expires<this._nextAction.timestamp)&&this.scheduleAction({type:"Expiry",target:e,timestamp:e.notification.expires},Date.now())}onRemoveNotifications(e){let t=e.filter(h);this._nextAction&&t.some(e=>{var t;return e.id===(null===(t=this._nextAction)||void 0===t?void 0:t.target.id)})&&this.reschedule()}reschedule(){var e;window.clearTimeout(null===(e=this._nextAction)||void 0===e?void 0:e.timerHandle),this._nextAction=null,this.scheduleEarliestAction(Date.now())}onFreeze(){this._active=!1,this._nextAction&&(window.clearTimeout(this._nextAction.timerHandle),this._nextAction=null)}onUnfreeze(){this._active=!0,this.scheduleEarliestAction(Date.now())}safeDelay(e,t,n){return t-n>2147483646?window.setTimeout(()=>{this.safeDelay(e,t,n+2147483646)},2147483646):window.setTimeout(()=>{e()},t-n)}generateNextClassifier(){return[...this._store.state.notifications.filter(h).map(e=>({type:"Expiry",target:e,timestamp:e.notification.expires})),...this._store.state.reminders.map(e=>({type:"Reminder",target:e,timestamp:e.modifiers.reminder}))].reduce((e,t)=>!e||t.timestamp<e.timestamp?t:e,null)}};function h(e){return null!==e.notification.expires}p=o([(0,l.injectable)(),a(0,(0,l.inject)(c.Inject.STORE)),r("design:paramtypes",["function"==typeof(i=void 0!==s.Store&&s.Store)?i:Object])],p),t.Scheduler=p},7031:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.updateCollection=void 0,t.updateCollection=function(e,t){var n,i,o,r,a,l,s,c;let u=e.findIndex(e=>e.notification.id===t.id);if(-1===u)return null;let d=e[u],f=d.notification;return e[u]=Object.assign(Object.assign({},d),{bodyText:null!==(n=t.bodyText)&&void 0!==n?n:d.bodyText,notification:Object.assign(Object.assign(Object.assign({},f),{buttons:null!==(i=t.buttons)&&void 0!==i?i:f.buttons,customData:null!==(o=t.customData)&&void 0!==o?o:f.customData}),"list"===t.template&&"list"===f.template?{list:null!==(l=t.list)&&void 0!==l?l:f.list}:"markdown"===t.template&&"markdown"===f.template?{body:null!==(s=t.body)&&void 0!==s?s:f.body}:"custom"===t.template&&"custom"===f.template?{templateData:null!==(c=t.templateData)&&void 0!==c?c:f.templateData}:{}),modifiers:Object.assign(Object.assign({},d.modifiers),{revision:(null!==(a=null===(r=d.modifiers)||void 0===r?void 0:r.revision)&&void 0!==a?a:0)+1})}),e[u]}},7049:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.usePosition=void 0;let i=n(5932),o=n(8899),r=n(9136);t.usePosition=()=>{let e=(0,i.useContext)(r.WindowContext);return[(0,i.useCallback)(t=>{if(t){let n={left:e.screenX,top:e.screenY,width:e.outerWidth,height:e.outerHeight},i=t.getBoundingClientRect();return(0,o.alignModalToParent)(n,{left:i.left,top:i.top,width:i.right-i.left,height:i.bottom-i.top})}return null},[e])]}},7202:(e,t)=>{"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.Inject=void 0,(i=n||(n={}))[i.STORE=0]="STORE",i[i.SCHEDULER=1]="SCHEDULER",i[i.API_HANDLER=2]="API_HANDLER",i[i.CLIENT_CONTOLLER=3]="CLIENT_CONTOLLER",t.Inject=Object.keys(n).filter(e=>"string"==typeof e).reduce((e,t)=>(e[t]=t,e),{})},7204:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},7207:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0;let o=n(9690),r=n(7250),a=i(n(2230));t.Card=(0,a.default)(r.Box)`
  flex-direction: column;
  user-select: none;
  width: 312px;
  position: relative;
  // if buttons exist, min-height is 128px if isTall is true min height is 160px
  min-height: ${({hasButtons:e,isTall:t})=>e?t?"160px":"128px":"96px"};
  align-items: center;
  justify-content: center;
  background: ${({theme:e,isFormExpanded:t})=>t?e.palette.background3:e.palette.background4};
  box-shadow: ${({theme:e})=>e.shadow.base};
  overflow: ${({mode:e})=>"desktop"===e?"hidden":"visible"};
  border-radius: ${({theme:e,isToast:t})=>t?0:e.radius.base};

  ${o.CardHeaderHover}

  &:focus {
    outline: 1px solid ${({theme:e})=>e.palette.textDefault};
  }
`},7216:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationFormEditComplete=t.removeCurrentFormAndReplaceWithNext=void 0;let i=n(6566);t.removeCurrentFormAndReplaceWithNext=e=>{if(!e)return;let t=e.forms.findIndex(t=>t.notificationId===e.focusedFormNotificationId);if(-1===t)return e;let n=[...e.forms.slice(0,t),...e.forms.slice(t+1)],i=n[t]||n[t-1]||null;return{forms:n,focusedFormNotificationId:null==i?void 0:i.notificationId,createNotificationsCount:e.createNotificationsCount}};class o extends i.Action{reduce(e){return Object.assign(Object.assign({},e),{activeForms:(0,t.removeCurrentFormAndReplaceWithNext)(e.activeForms)})}}t.NotificationFormEditComplete=o},7230:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CategoriesSortingSelect=t.categoriesSortingMethods=void 0;let o=i(n(5932)),r=n(7527),a=n(7250),l=i(n(2230)),s=[{title:r.CategorySortTypesNamesMap["priority-descending"],value:{type:"priority",direction:"descending"}},{title:r.CategorySortTypesNamesMap["priority-ascending"],value:{type:"priority",direction:"ascending"}}];t.categoriesSortingMethods=[[{title:r.CategorySortTypesNamesMap["date-descending"],value:{type:"date",direction:"descending"}},{title:r.CategorySortTypesNamesMap["date-ascending"],value:{type:"date",direction:"ascending"}},...s]];let c=[[{title:"Date",value:{type:"date",direction:"ascending"}},...s]];t.CategoriesSortingSelect=({selectedCategory:e,onChange:n,selectedSortType:i,selectedSortDirection:r})=>{let l="reminders"===e?c:t.categoriesSortingMethods;return o.default.createElement(a.DropdownMenu,{selected:l[0].find(e=>e.value.type===i&&e.value.direction===r),options:l,onChange:n,renderLabel:u,fitContent:!0})};let u=(e,t,n)=>o.default.createElement(d,{onClick:n,"data-testid":"sort-option"},o.default.createElement("span",null,"Sort by ",o.default.createElement("strong",null,e.title)),o.default.createElement(a.Icon,{icon:t?"ChevronUpIcon":"ChevronDownIcon"})),d=l.default.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.palette.textDefault};
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSize.base};
  user-select: none;
  display: flex;
  align-items: center;

  column-gap: ${({theme:e})=>e.px.xsmall};
`},7234:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.SetUserDefaultShortcut=t.SetPlatformDefaultShortcut=t.ToggleKeyboardShortcutToOpenEnabled=t.ToggleClearFiltersOnShortcutCenterShow=t.ToggleClearFiltersOnCenterShow=t.RemindersTutorialComplete=t.SetToastPosition=t.SetCenterPosition=t.ToggleNotificationSound=t.SetToastDuration=t.selectActiveDisplayToastPosition=t.selectCurrentDisplayToastPosition=t.initialSettingsState=t.openFinDefaultShortcut=void 0;let r=n(6566);t.openFinDefaultShortcut="CmdOrCtrl + /",t.initialSettingsState={centerPosition:"right",clearFiltersOnCenterShow:!1,notificationSoundEnabled:!1,toastPosition:{default:{position:"bottom-right"}},toastDuration:1e4,tutorials:{reminders:!1},keyboardShortcutToOpenEnabled:!0,clearFiltersOnShortcutCenterShow:!1,userDefaultShortcut:"",platformDefaultShortcut:""},t.selectCurrentDisplayToastPosition=e=>{var t;return null!==(t=e.settings.toastPosition[e.display.selected])&&void 0!==t?t:{position:"bottom-right"}},t.selectActiveDisplayToastPosition=e=>{var t;return null!==(t=e.settings.toastPosition[e.display.active])&&void 0!==t?t:{position:"bottom-right"}};let a=class extends r.KeyedAction{constructor(e){super("settings"),this.duration=e}reduce(e){return Object.assign(Object.assign({},e),{toastDuration:this.duration})}};a=i([(0,r.actionType)("SetToastDuration"),o("design:paramtypes",[Number])],a),t.SetToastDuration=a;class l extends r.KeyedAction{constructor(){super("settings")}reduce(e){return Object.assign(Object.assign({},e),{notificationSoundEnabled:!e.notificationSoundEnabled})}}t.ToggleNotificationSound=l;class s extends r.KeyedAction{constructor(e){super("settings"),this.position=e}async call(e,t){e.state.settings.centerPosition!==this.position&&await t()}reduce(e){return Object.assign(Object.assign({},e),{centerPosition:this.position})}}t.SetCenterPosition=s;class c extends r.Action{constructor(e){super(),this.position=e}async call(e,t){let n=e.state.display.selected;e.state.settings.toastPosition[n]!==this.position&&await t()}reduce(e){return Object.assign(Object.assign({},e),{settings:Object.assign(Object.assign({},e.settings),{toastPosition:Object.assign(Object.assign({},e.settings.toastPosition),{[e.display.active]:this.position})})})}}t.SetToastPosition=c;class u extends r.KeyedAction{constructor(){super("settings")}reduce(e){return Object.assign(Object.assign({},e),{tutorials:Object.assign(Object.assign({},e.tutorials),{reminders:!0})})}}t.RemindersTutorialComplete=u;class d extends r.KeyedAction{constructor(e){super("settings"),this.clearFiltersOnShow=e}reduce(e){return Object.assign(Object.assign({},e),{clearFiltersOnCenterShow:this.clearFiltersOnShow})}}t.ToggleClearFiltersOnCenterShow=d;class f extends r.KeyedAction{constructor(e){super("settings"),this.clearFiltersOnShortcutCenterShow=e}reduce(e){return Object.assign(Object.assign({},e),{clearFiltersOnShortcutCenterShow:this.clearFiltersOnShortcutCenterShow})}}t.ToggleClearFiltersOnShortcutCenterShow=f;class p extends r.KeyedAction{constructor(e){super("settings"),this.toggle=e}reduce(e){return Object.assign(Object.assign({},e),{keyboardShortcutToOpenEnabled:this.toggle})}}t.ToggleKeyboardShortcutToOpenEnabled=p;class h extends r.KeyedAction{constructor(e){super("settings"),this.platformShortcut=e}reduce(e){return Object.assign(Object.assign({},e),{platformDefaultShortcut:this.platformShortcut})}}t.SetPlatformDefaultShortcut=h;class m extends r.KeyedAction{constructor(e,t){super("settings"),this.newShortcut=e,this.oldShortcut=t}reduce(e){return Object.assign(Object.assign({},e),{userDefaultShortcut:this.newShortcut})}}t.SetUserDefaultShortcut=m},7250:(e,t,n)=>{var i={1193:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var i=n(1601),o=n.n(i),r=n(6314),a=n.n(r)()(o());a.push([e.id,".react-calendar {\n  width: 350px;\n  max-width: 100%;\n  background: white;\n  border: 1px solid #a0a096;\n  font-family: 'Arial', 'Helvetica', sans-serif;\n  line-height: 1.125em;\n}\n\n.react-calendar--doubleView {\n  width: 700px;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer {\n  display: flex;\n  margin: -0.5em;\n}\n\n.react-calendar--doubleView .react-calendar__viewContainer > * {\n  width: 50%;\n  margin: 0.5em;\n}\n\n.react-calendar,\n.react-calendar *,\n.react-calendar *:before,\n.react-calendar *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.react-calendar button {\n  margin: 0;\n  border: 0;\n  outline: none;\n}\n\n.react-calendar button:enabled:hover {\n  cursor: pointer;\n}\n\n.react-calendar__navigation {\n  display: flex;\n  height: 44px;\n  margin-bottom: 1em;\n}\n\n.react-calendar__navigation button {\n  min-width: 44px;\n  background: none;\n}\n\n.react-calendar__navigation button:disabled {\n  background-color: #f0f0f0;\n}\n\n.react-calendar__navigation button:enabled:hover,\n.react-calendar__navigation button:enabled:focus {\n  background-color: #e6e6e6;\n}\n\n.react-calendar__month-view__weekdays {\n  text-align: center;\n  text-transform: uppercase;\n  font: inherit;\n  font-size: 0.75em;\n  font-weight: bold;\n}\n\n.react-calendar__month-view__weekdays__weekday {\n  padding: 0.5em;\n}\n\n.react-calendar__month-view__weekNumbers .react-calendar__tile {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: inherit;\n  font-size: 0.75em;\n  font-weight: bold;\n}\n\n.react-calendar__month-view__days__day--weekend {\n  color: #d10000;\n}\n\n.react-calendar__month-view__days__day--neighboringMonth,\n.react-calendar__decade-view__years__year--neighboringDecade,\n.react-calendar__century-view__decades__decade--neighboringCentury {\n  color: #757575;\n}\n\n.react-calendar__year-view .react-calendar__tile,\n.react-calendar__decade-view .react-calendar__tile,\n.react-calendar__century-view .react-calendar__tile {\n  padding: 2em 0.5em;\n}\n\n.react-calendar__tile {\n  max-width: 100%;\n  padding: 10px 6.6667px;\n  background: none;\n  text-align: center;\n  font: inherit;\n  font-size: 0.833em;\n}\n\n.react-calendar__tile:disabled {\n  background-color: #f0f0f0;\n  color: #ababab;\n}\n\n.react-calendar__month-view__days__day--neighboringMonth:disabled,\n.react-calendar__decade-view__years__year--neighboringDecade:disabled,\n.react-calendar__century-view__decades__decade--neighboringCentury:disabled {\n  color: #cdcdcd;\n}\n\n.react-calendar__tile:enabled:hover,\n.react-calendar__tile:enabled:focus {\n  background-color: #e6e6e6;\n}\n\n.react-calendar__tile--now {\n  background: #ffff76;\n}\n\n.react-calendar__tile--now:enabled:hover,\n.react-calendar__tile--now:enabled:focus {\n  background: #ffffa9;\n}\n\n.react-calendar__tile--hasActive {\n  background: #76baff;\n}\n\n.react-calendar__tile--hasActive:enabled:hover,\n.react-calendar__tile--hasActive:enabled:focus {\n  background: #a9d4ff;\n}\n\n.react-calendar__tile--active {\n  background: #006edc;\n  color: white;\n}\n\n.react-calendar__tile--active:enabled:hover,\n.react-calendar__tile--active:enabled:focus {\n  background: #1087ff;\n}\n\n.react-calendar--selectRange .react-calendar__tile--hover {\n  background-color: #e6e6e6;\n}\n",""]);let l=a},6314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n}).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var l=0;l<this.length;l++){var s=this[l][0];null!=s&&(a[s]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);i&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},1601:e=>{e.exports=function(e){return e[1]}},4708:(e,t,n)=>{function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(o=function(){return!!e})()}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(e){if("object"!=i(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=i(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var s=n(2015),c=n(5556),u=n(2697).createFocusTrap,d=n(9054).isFocusable,f=function(e){var t;function n(e){(function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")})(this,n),t=n,a=[e],t=r(t),s=function(e,t){if(t&&("object"==i(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,o()?Reflect.construct(t,a||[],r(this).constructor):t.apply(this,a)),u=function(e){var t,n=null!==(t=this.internalOptions[e])&&void 0!==t?t:this.originalOptions[e];if("function"==typeof n){for(var i=arguments.length,o=Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];n=n.apply(void 0,o)}if(!0===n&&(n=void 0),!n){if(void 0===n||!1===n)return n;throw Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var a,l=n;if("string"==typeof n&&!(l=null===(a=this.getDocument())||void 0===a?void 0:a.querySelector(n)))throw Error("`".concat(e,"` as selector refers to no known node"));return l},(c=l(c="getNodeForOption"))in s?Object.defineProperty(s,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[c]=u,s.handleDeactivate=s.handleDeactivate.bind(s),s.handlePostDeactivate=s.handlePostDeactivate.bind(s),s.handleClickOutsideDeactivates=s.handleClickOutsideDeactivates.bind(s),s.internalOptions={returnFocusOnDeactivate:!1,checkCanReturnFocus:null,onDeactivate:s.handleDeactivate,onPostDeactivate:s.handlePostDeactivate,clickOutsideDeactivates:s.handleClickOutsideDeactivates},s.originalOptions={returnFocusOnDeactivate:!0,onDeactivate:null,onPostDeactivate:null,checkCanReturnFocus:null,clickOutsideDeactivates:!1};var t,a,s,c,u,d=e.focusTrapOptions;for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&("returnFocusOnDeactivate"!==f&&"onDeactivate"!==f&&"onPostDeactivate"!==f&&"checkCanReturnFocus"!==f&&"clickOutsideDeactivates"!==f?s.internalOptions[f]=d[f]:s.originalOptions[f]=d[f]);return s.outsideClick=null,s.focusTrapElements=e.containerElements||[],s.updatePreviousElement(),s}return function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(n,e),t=[{key:"getDocument",value:function(){return this.props.focusTrapOptions.document||("undefined"!=typeof document?document:void 0)}},{key:"getReturnFocusNode",value:function(){var e=this.getNodeForOption("setReturnFocus",this.previouslyFocusedElement);return e||!1!==e&&this.previouslyFocusedElement}},{key:"updatePreviousElement",value:function(){var e=this.getDocument();e&&(this.previouslyFocusedElement=e.activeElement)}},{key:"deactivateTrap",value:function(){this.focusTrap&&this.focusTrap.active&&this.focusTrap.deactivate({returnFocus:!1,checkCanReturnFocus:null,onDeactivate:this.originalOptions.onDeactivate})}},{key:"handleClickOutsideDeactivates",value:function(e){var t="function"==typeof this.originalOptions.clickOutsideDeactivates?this.originalOptions.clickOutsideDeactivates.call(null,e):this.originalOptions.clickOutsideDeactivates;return t&&(this.outsideClick={target:e.target,allowDeactivation:t}),t}},{key:"handleDeactivate",value:function(){this.originalOptions.onDeactivate&&this.originalOptions.onDeactivate.call(null),this.deactivateTrap()}},{key:"handlePostDeactivate",value:function(){var e=this,t=function(){var t=e.getReturnFocusNode(),n=!(!e.originalOptions.returnFocusOnDeactivate||null==t||!t.focus||e.outsideClick&&(!e.outsideClick.allowDeactivation||d(e.outsideClick.target,e.internalOptions.tabbableOptions))),i=e.internalOptions.preventScroll;n&&t.focus({preventScroll:void 0!==i&&i}),e.originalOptions.onPostDeactivate&&e.originalOptions.onPostDeactivate.call(null),e.outsideClick=null};this.originalOptions.checkCanReturnFocus?this.originalOptions.checkCanReturnFocus.call(null,this.getReturnFocusNode()).then(t,t):t()}},{key:"setupFocusTrap",value:function(){this.focusTrap?this.props.active&&!this.focusTrap.active&&(this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()):this.focusTrapElements.some(Boolean)&&(this.focusTrap=this.props._createFocusTrap(this.focusTrapElements,this.internalOptions),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause())}},{key:"componentDidMount",value:function(){this.props.active&&this.setupFocusTrap()}},{key:"componentDidUpdate",value:function(e){if(this.focusTrap){e.containerElements!==this.props.containerElements&&this.focusTrap.updateContainerElements(this.props.containerElements);var t=!e.active&&this.props.active,n=e.active&&!this.props.active,i=!e.paused&&this.props.paused,o=e.paused&&!this.props.paused;if(t&&(this.updatePreviousElement(),this.focusTrap.activate()),n)return void this.deactivateTrap();i&&this.focusTrap.pause(),o&&this.focusTrap.unpause()}else e.containerElements!==this.props.containerElements&&(this.focusTrapElements=this.props.containerElements),this.props.active&&(this.updatePreviousElement(),this.setupFocusTrap())}},{key:"componentWillUnmount",value:function(){this.deactivateTrap()}},{key:"render",value:function(){var e=this,t=this.props.children?s.Children.only(this.props.children):void 0;if(t){if(t.type&&t.type===s.Fragment)throw Error("A focus-trap cannot use a Fragment as its child container. Try replacing it with a <div> element.");return s.cloneElement(t,{ref:function(n){var i=e.props.containerElements;t&&("function"==typeof t.ref?t.ref(n):t.ref&&(t.ref.current=n)),e.focusTrapElements=i||[n]}})}return null}}],function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,l(i.key),i)}}(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n}(s.Component),p="undefined"==typeof Element?Function:Element;f.propTypes={active:c.bool,paused:c.bool,focusTrapOptions:c.shape({document:c.object,onActivate:c.func,onPostActivate:c.func,checkCanFocusTrap:c.func,onPause:c.func,onPostPause:c.func,onUnpause:c.func,onPostUnpause:c.func,onDeactivate:c.func,onPostDeactivate:c.func,checkCanReturnFocus:c.func,initialFocus:c.oneOfType([c.instanceOf(p),c.string,c.bool,c.func]),fallbackFocus:c.oneOfType([c.instanceOf(p),c.string,c.func]),escapeDeactivates:c.oneOfType([c.bool,c.func]),clickOutsideDeactivates:c.oneOfType([c.bool,c.func]),returnFocusOnDeactivate:c.bool,setReturnFocus:c.oneOfType([c.instanceOf(p),c.string,c.bool,c.func]),allowOutsideClick:c.oneOfType([c.bool,c.func]),preventScroll:c.bool,tabbableOptions:c.shape({displayCheck:c.oneOf(["full","legacy-full","non-zero-area","none"]),getShadowRoot:c.oneOfType([c.bool,c.func])}),trapStack:c.array,isKeyForward:c.func,isKeyBackward:c.func}),containerElements:c.arrayOf(c.instanceOf(p)),children:c.oneOfType([c.element,c.instanceOf(p)])},f.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:u},e.exports=f},2697:(e,t,n)=>{n.r(t),n.d(t,{createFocusTrap:()=>h});var i=n(9054);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){(function(e,t,n){var i;(t="symbol"==typeof(i=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l=function(e){return"Tab"===(null==e?void 0:e.key)||9===(null==e?void 0:e.keyCode)},s=function(e){return l(e)&&!e.shiftKey},c=function(e){return l(e)&&e.shiftKey},u=function(e){return setTimeout(e,0)},d=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return"function"==typeof e?e.apply(void 0,n):e},f=function(e){return e.target.shadowRoot&&"function"==typeof e.composedPath?e.composedPath()[0]:e.target},p=[],h=function(e,t){var n,r=(null==t?void 0:t.document)||document,h=(null==t?void 0:t.trapStack)||p,m=a({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:s,isKeyBackward:c},t),b={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},g=function(e,t,n){return e&&void 0!==e[t]?e[t]:m[n||t]},v=function(e,t){var n="function"==typeof(null==t?void 0:t.composedPath)?t.composedPath():void 0;return b.containerGroups.findIndex(function(t){var i=t.container,o=t.tabbableNodes;return i.contains(e)||(null==n?void 0:n.includes(i))||o.find(function(t){return t===e})})},y=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.hasFallback,a=n.params,l=m[e];if("function"==typeof l&&(l=l.apply(void 0,function(e){if(Array.isArray(e))return o(e)}(t=void 0===a?[]:a)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return o(e,void 0);var n=({}).toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,void 0):void 0}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),!0===l&&(l=void 0),!l){if(void 0===l||!1===l)return l;throw Error("`".concat(e,"` was specified but was not a node, or did not return a node"))}var s=l;if("string"==typeof l){try{s=r.querySelector(l)}catch(t){throw Error("`".concat(e,'` appears to be an invalid selector; error="').concat(t.message,'"'))}if(!s&&!(void 0!==i&&i))throw Error("`".concat(e,"` as selector refers to no known node"))}return s},_=function(){var e=y("initialFocus",{hasFallback:!0});if(!1===e)return!1;if(void 0===e||e&&!(0,i.isFocusable)(e,m.tabbableOptions)){if(v(r.activeElement)>=0)e=r.activeElement;else{var t=b.tabbableGroups[0];e=t&&t.firstTabbableNode||y("fallbackFocus")}}else null===e&&(e=y("fallbackFocus"));if(!e)throw Error("Your focus-trap needs to have at least one focusable element");return e},x=function(){if(b.containerGroups=b.containers.map(function(e){var t=(0,i.tabbable)(e,m.tabbableOptions),n=(0,i.focusable)(e,m.tabbableOptions),o=t.length>0?t[0]:void 0,r=t.length>0?t[t.length-1]:void 0,a=n.find(function(e){return(0,i.isTabbable)(e)}),l=n.slice().reverse().find(function(e){return(0,i.isTabbable)(e)}),s=!!t.find(function(e){return(0,i.getTabIndex)(e)>0});return{container:e,tabbableNodes:t,focusableNodes:n,posTabIndexesFound:s,firstTabbableNode:o,lastTabbableNode:r,firstDomTabbableNode:a,lastDomTabbableNode:l,nextTabbableNode:function(e){var o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.indexOf(e);return r<0?o?n.slice(n.indexOf(e)+1).find(function(e){return(0,i.isTabbable)(e)}):n.slice(0,n.indexOf(e)).reverse().find(function(e){return(0,i.isTabbable)(e)}):t[r+(o?1:-1)]}}}),b.tabbableGroups=b.containerGroups.filter(function(e){return e.tabbableNodes.length>0}),b.tabbableGroups.length<=0&&!y("fallbackFocus"))throw Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(b.containerGroups.find(function(e){return e.posTabIndexesFound})&&b.containerGroups.length>1)throw Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},O=function(e){var t=e.activeElement;if(t)return t.shadowRoot&&null!==t.shadowRoot.activeElement?O(t.shadowRoot):t},C=function(e){!1!==e&&e!==O(document)&&(e&&e.focus?(e.focus({preventScroll:!!m.preventScroll}),b.mostRecentlyFocusedNode=e,e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select&&e.select()):C(_()))},w=function(e){var t=y("setReturnFocus",{params:[e]});return t||!1!==t&&e},j=function(e){var t=e.target,n=e.event,o=e.isBackward,r=void 0!==o&&o;t=t||f(n),x();var a=null;if(b.tabbableGroups.length>0){var s=v(t,n),c=s>=0?b.containerGroups[s]:void 0;if(s<0)a=r?b.tabbableGroups[b.tabbableGroups.length-1].lastTabbableNode:b.tabbableGroups[0].firstTabbableNode;else if(r){var u=b.tabbableGroups.findIndex(function(e){var n=e.firstTabbableNode;return t===n});if(u<0&&(c.container===t||(0,i.isFocusable)(t,m.tabbableOptions)&&!(0,i.isTabbable)(t,m.tabbableOptions)&&!c.nextTabbableNode(t,!1))&&(u=s),u>=0){var d=0===u?b.tabbableGroups.length-1:u-1,p=b.tabbableGroups[d];a=(0,i.getTabIndex)(t)>=0?p.lastTabbableNode:p.lastDomTabbableNode}else l(n)||(a=c.nextTabbableNode(t,!1))}else{var h=b.tabbableGroups.findIndex(function(e){var n=e.lastTabbableNode;return t===n});if(h<0&&(c.container===t||(0,i.isFocusable)(t,m.tabbableOptions)&&!(0,i.isTabbable)(t,m.tabbableOptions)&&!c.nextTabbableNode(t))&&(h=s),h>=0){var g=h===b.tabbableGroups.length-1?0:h+1,_=b.tabbableGroups[g];a=(0,i.getTabIndex)(t)>=0?_.firstTabbableNode:_.firstDomTabbableNode}else l(n)||(a=c.nextTabbableNode(t))}}else a=y("fallbackFocus");return a},S=function(e){v(f(e),e)>=0||(d(m.clickOutsideDeactivates,e)?n.deactivate({returnFocus:m.returnFocusOnDeactivate}):d(m.allowOutsideClick,e)||e.preventDefault())},P=function(e){var t=f(e),n=v(t,e)>=0;if(n||t instanceof Document)n&&(b.mostRecentlyFocusedNode=t);else{e.stopImmediatePropagation();var o,r=!0;if(b.mostRecentlyFocusedNode){if((0,i.getTabIndex)(b.mostRecentlyFocusedNode)>0){var a=v(b.mostRecentlyFocusedNode),l=b.containerGroups[a].tabbableNodes;if(l.length>0){var s=l.findIndex(function(e){return e===b.mostRecentlyFocusedNode});s>=0&&(m.isKeyForward(b.recentNavEvent)?s+1<l.length&&(o=l[s+1],r=!1):s-1>=0&&(o=l[s-1],r=!1))}}else b.containerGroups.some(function(e){return e.tabbableNodes.some(function(e){return(0,i.getTabIndex)(e)>0})})||(r=!1)}else r=!1;r&&(o=j({target:b.mostRecentlyFocusedNode,isBackward:m.isKeyBackward(b.recentNavEvent)})),C(o||b.mostRecentlyFocusedNode||_())}b.recentNavEvent=void 0},E=function(e){(m.isKeyForward(e)||m.isKeyBackward(e))&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];b.recentNavEvent=e;var n=j({event:e,isBackward:t});n&&(l(e)&&e.preventDefault(),C(n))}(e,m.isKeyBackward(e))},M=function(e){"Escape"!==(null==e?void 0:e.key)&&"Esc"!==(null==e?void 0:e.key)&&27!==(null==e?void 0:e.keyCode)||!1===d(m.escapeDeactivates,e)||(e.preventDefault(),n.deactivate())},T=function(e){v(f(e),e)>=0||d(m.clickOutsideDeactivates,e)||d(m.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},k=function(){if(b.active)return function(e,t){if(e.length>0){var n=e[e.length-1];n!==t&&n.pause()}var i=e.indexOf(t);-1===i||e.splice(i,1),e.push(t)}(h,n),b.delayInitialFocusTimer=m.delayInitialFocus?u(function(){C(_())}):C(_()),r.addEventListener("focusin",P,!0),r.addEventListener("mousedown",S,{capture:!0,passive:!1}),r.addEventListener("touchstart",S,{capture:!0,passive:!1}),r.addEventListener("click",T,{capture:!0,passive:!1}),r.addEventListener("keydown",E,{capture:!0,passive:!1}),r.addEventListener("keydown",M),n},I=function(){if(b.active)return r.removeEventListener("focusin",P,!0),r.removeEventListener("mousedown",S,!0),r.removeEventListener("touchstart",S,!0),r.removeEventListener("click",T,!0),r.removeEventListener("keydown",E,!0),r.removeEventListener("keydown",M),n},D="undefined"!=typeof window&&"MutationObserver"in window?new MutationObserver(function(e){e.some(function(e){return Array.from(e.removedNodes).some(function(e){return e===b.mostRecentlyFocusedNode})})&&C(_())}):void 0,$=function(){D&&(D.disconnect(),b.active&&!b.paused&&b.containers.map(function(e){D.observe(e,{subtree:!0,childList:!0})}))};return(n={get active(){return b.active},get paused(){return b.paused},activate:function(e){if(b.active)return this;var t=g(e,"onActivate"),n=g(e,"onPostActivate"),i=g(e,"checkCanFocusTrap");i||x(),b.active=!0,b.paused=!1,b.nodeFocusedBeforeActivation=r.activeElement,null==t||t();var o=function(){i&&x(),k(),$(),null==n||n()};return i?i(b.containers.concat()).then(o,o):o(),this},deactivate:function(e){if(!b.active)return this;var t,i,o=a({onDeactivate:m.onDeactivate,onPostDeactivate:m.onPostDeactivate,checkCanReturnFocus:m.checkCanReturnFocus},e);clearTimeout(b.delayInitialFocusTimer),b.delayInitialFocusTimer=void 0,I(),b.active=!1,b.paused=!1,$(),t=n,-1!==(i=h.indexOf(t))&&h.splice(i,1),h.length>0&&h[h.length-1].unpause();var r=g(o,"onDeactivate"),l=g(o,"onPostDeactivate"),s=g(o,"checkCanReturnFocus"),c=g(o,"returnFocus","returnFocusOnDeactivate");null==r||r();var d=function(){u(function(){c&&C(w(b.nodeFocusedBeforeActivation)),null==l||l()})};return c&&s?s(w(b.nodeFocusedBeforeActivation)).then(d,d):d(),this},pause:function(e){if(b.paused||!b.active)return this;var t=g(e,"onPause"),n=g(e,"onPostPause");return b.paused=!0,null==t||t(),I(),$(),null==n||n(),this},unpause:function(e){if(!b.paused||!b.active)return this;var t=g(e,"onUnpause"),n=g(e,"onPostUnpause");return b.paused=!1,null==t||t(),x(),k(),$(),null==n||n(),this},updateContainerElements:function(e){var t=[].concat(e).filter(Boolean);return b.containers=t.map(function(e){return"string"==typeof e?r.querySelector(e):e}),b.active&&x(),$(),this}}).updateContainerElements(e),n}},2694:(e,t,n)=>{var i=n(6925);function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,r,a){if(a!==i){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:o};return n.PropTypes=n,n}},5556:(e,t,n)=>{e.exports=n(2694)()},6925:e=>{e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1020:(e,t,n)=>{var i=n(2015),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var i,r={},c=null,u=null;for(i in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,i)&&!s.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:c,ref:u,props:r,_owner:l.current}}t.Fragment=r,t.jsx=c,t.jsxs=c},4848:(e,t,n)=>{e.exports=n(1020)},9054:(e,t,n)=>{n.r(t),n.d(t,{focusable:()=>x,getTabIndex:()=>f,isFocusable:()=>w,isTabbable:()=>O,tabbable:()=>_});var i=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],o=i.join(","),r="undefined"==typeof Element,a=r?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,l=!r&&Element.prototype.getRootNode?function(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},s=function e(t,n){void 0===n&&(n=!0);var i,o=null==t||null===(i=t.getAttribute)||void 0===i?void 0:i.call(t,"inert");return""===o||"true"===o||n&&t&&e(t.parentNode)},c=function(e,t,n){if(s(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(o));return t&&a.call(e,o)&&i.unshift(e),i.filter(n)},u=function e(t,n,i){for(var r=[],l=Array.from(t);l.length;){var c=l.shift();if(!s(c,!1)){if("SLOT"===c.tagName){var u=c.assignedElements(),d=e(u.length?u:c.children,!0,i);i.flatten?r.push.apply(r,d):r.push({scopeParent:c,candidates:d})}else{a.call(c,o)&&i.filter(c)&&(n||!t.includes(c))&&r.push(c);var f=c.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(c),p=!s(f,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(c));if(f&&p){var h=e(!0===f?c.children:f.children,!0,i);i.flatten?r.push.apply(r,h):r.push({scopeParent:c,candidates:h})}else l.unshift.apply(l,c.children)}}}return r},d=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},f=function(e){var t,n;if(!e)throw Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||""===(n=null==e||null===(t=e.getAttribute)||void 0===t?void 0:t.call(e,"contenteditable"))||"true"===n)&&!d(e)?0:e.tabIndex},p=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},h=function(e){return"INPUT"===e.tagName},m=function(e){var t=e.getBoundingClientRect(),n=t.width,i=t.height;return 0===n&&0===i},b=function(e,t){return!(t.disabled||s(t)||h(t)&&"hidden"===t.type||function(e,t){var n=t.displayCheck,i=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var o=a.call(e,"details>summary:first-of-type")?e.parentElement:e;if(a.call(o,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return m(e)}else{if("function"==typeof i){for(var r=e;e;){var s=e.parentElement,c=l(e);if(s&&!s.shadowRoot&&!0===i(s))return m(e);e=e.assignedSlot?e.assignedSlot:s||c===e.ownerDocument?s:c.host}e=r}if(function(e){var t,n,i,o,r,a,s,c=e&&l(e),u=null===(o=c)||void 0===o?void 0:o.host,d=!1;if(c&&c!==e)for(d=!!(null!==(r=u)&&void 0!==r&&null!==(a=r.ownerDocument)&&void 0!==a&&a.contains(u)||null!=e&&null!==(s=e.ownerDocument)&&void 0!==s&&s.contains(e));!d&&u;)d=!(null===(n=u=null===(t=c=l(u))||void 0===t?void 0:t.host)||void 0===n||null===(i=n.ownerDocument)||void 0===i||!i.contains(u));return d}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1}(t,e)||"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(e){return"SUMMARY"===e.tagName})||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var i=t.children.item(n);if("LEGEND"===i.tagName)return!!a.call(t,"fieldset[disabled] *")||!i.contains(e)}return!0}t=t.parentElement}return!1}(t))},g=function(e,t){return!(h(t)&&"radio"===t.type&&!function(e){if(!e.name)return!0;var t,n=e.form||l(e),i=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=i(window.CSS.escape(e.name));else try{t=i(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var o=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!o||o===e}(t)||0>f(t)||!b(e,t))},v=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],i=[];return t.forEach(function(t,o){var r,a=!!t.scopeParent,l=a?t.scopeParent:t,s=(r=f(l))<0&&a&&!d(l)?0:r,c=a?e(t.candidates):l;0===s?a?n.push.apply(n,c):n.push(l):i.push({documentOrder:o,tabIndex:s,item:t,isScope:a,content:c})}),i.sort(p).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(n)},_=function(e,t){return y((t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:g.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:v}):c(e,t.includeContainer,g.bind(null,t)))},x=function(e,t){return(t=t||{}).getShadowRoot?u([e],t.includeContainer,{filter:b.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):c(e,t.includeContainer,b.bind(null,t))},O=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==a.call(e,o)&&g(t,e)},C=i.concat("iframe").join(","),w=function(e,t){if(t=t||{},!e)throw Error("No node provided");return!1!==a.call(e,C)&&b(t,e)}},8869:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Fonts=void 0;let o=i(n(9294)),r=i(n(9802)),a=i(n(3325)),l=i(n(2773));t.Fonts={regular:o.default,italic:r.default,semiBold:a.default,semiBoldItalic:l.default}},3092:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(8869),t)},5415:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonTextOnly=t.ButtonSecondary=t.ButtonPrimary=t.Button=void 0;let r=n(4848),a=o(n(2770)),l=n(2094),s=n(532),c=n(549);t.Button=e=>{var{label:t,children:n,size:o="base",shape:a="square",kind:l="primary",layout:s="fit",href:c}=e,f=i(e,["label","children","size","shape","kind","layout","href"]);return(0,r.jsx)(u,Object.assign({as:c?"a":"button",size:o,shape:a,kind:l,layout:s},f,{children:t?(0,r.jsx)(d,{alignItems:"center",justifyContent:"center",children:t}):n}))};let u=a.default.button`
  /* Default values that get overridden by variants */
  background: ${({theme:e})=>e.palette.inputBackground};
  border: 1px solid ${({theme:e})=>e.palette.inputBackground};
  color: ${({theme:e})=>e.palette.brandPrimaryText};

  /* Inject variants */
  ${(0,s.getVariantCSS)(c.variants,c.Variant.size)}
  ${(0,s.getVariantCSS)(c.variants,c.Variant.shape)}
  ${(0,s.getVariantCSS)(c.variants,c.Variant.kind)}
  ${(0,s.getVariantCSS)(c.variants,c.Variant.layout)}

  display: inline-flex;
  align-items: center;
  gap: ${({theme:e})=>e.px.small};
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  line-height: ${({theme:e})=>e.lineHeight.ui};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
  transition: border-color var(--openfin-ui-globalTransition);

  &:not(:disabled) {
    cursor: pointer;
  }

  &:disabled,
  &:active:disabled {
    background: ${({theme:e})=>e.palette.inputDisabled};
    border-color: ${({theme:e})=>e.palette.inputDisabled};
    color: ${({theme:e})=>e.palette.inputPlaceholder};
    cursor: not-allowed;
  }
`,d=(0,a.default)(l.Box)`
  padding: ${({theme:e})=>`0 ${e.px.xsmall}`};
`;t.ButtonPrimary=e=>(0,r.jsx)(t.Button,Object.assign({},e,{kind:"primary"})),t.ButtonSecondary=e=>(0,r.jsx)(t.Button,Object.assign({},e,{kind:"secondary"})),t.ButtonTextOnly=e=>(0,r.jsx)(t.Button,Object.assign({},e,{kind:"textOnly"}))},549:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.variants=t.ButtonShape=t.ButtonLayout=t.ButtonSize=t.ButtonKind=t.Variant=void 0;let i=n(2770);t.Variant={shape:"shape",size:"size",kind:"kind",layout:"layout"},t.ButtonKind={primary:"primary",secondary:"secondary",textOnly:"textOnly"},t.ButtonSize={small:"small",base:"base",large:"large"},t.ButtonLayout={fit:"fit",full:"full"},t.ButtonShape={square:"square",pill:"pill"},t.variants={[t.Variant.size]:{[t.ButtonSize.base]:i.css`
      padding: ${({theme:e})=>`${e.px.small} ${e.px.large}`};
      font-size: ${({theme:e})=>e.fontSize.base};
    `,[t.ButtonSize.small]:i.css`
      padding: ${({theme:e})=>`${e.px.xsmall} ${e.px.base}`};
      font-size: ${({theme:e})=>e.fontSize.small};
    `,[t.ButtonSize.large]:i.css`
      padding: ${({theme:e})=>`${e.px.base} ${e.px.xlarge}`};
      font-size: ${({theme:e})=>e.fontSize.large};
    `},[t.Variant.shape]:{[t.ButtonShape.square]:i.css`
      border-radius: ${({theme:e})=>e.radius.small};
    `,[t.ButtonShape.pill]:i.css`
      border-radius: ${({theme:e})=>e.radius.pill};
    `},[t.Variant.layout]:{[t.ButtonLayout.fit]:i.css`
      width: fit-content;
    `,[t.ButtonLayout.full]:i.css`
      width: 100%;
    `},[t.Variant.kind]:{[t.ButtonKind.primary]:i.css`
      background: ${({theme:e})=>e.palette.brandPrimary};
      border-color: ${({theme:e})=>e.palette.brandPrimary};

      &:hover {
        background: ${({theme:e})=>e.palette.brandPrimaryHover};
      }

      &:active {
        background: ${({theme:e})=>e.palette.brandPrimaryActive};
      }

      &:focus {
        border-color: ${({theme:e})=>e.palette.brandPrimaryFocused};
      }
    `,[t.ButtonKind.secondary]:i.css`
      background: ${({theme:e})=>e.palette.brandSecondary};
      border-color: ${({theme:e})=>e.palette.brandSecondary};
      color: ${({theme:e})=>e.palette.brandSecondaryText};

      &:hover {
        background: ${({theme:e})=>e.palette.brandSecondaryHover};
      }

      &:active {
        background: ${({theme:e})=>e.palette.brandSecondaryActive};
      }

      &:focus {
        border-color: ${({theme:e})=>e.palette.brandSecondaryFocused};
      }
    `,[t.ButtonKind.textOnly]:i.css`
      background: transparent;
      border-color: transparent;
      color: ${({theme:e})=>e.palette.textDefault};

      &:active {
        opacity: 0.8;
      }

      &:focus {
        border-color: ${({theme:e})=>e.palette.inputFocused};
      }
    `}}},2367:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(5415),t),o(n(549),t)},7544:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CardContainer=void 0;let o=n(4848),r=i(n(2770)),a=n(532),l=n(2094);t.CardContainer=e=>(0,o.jsx)(s,{style:{maxHeight:e.maxHeight,overflowY:"auto"},id:"card-container","data-testid":"card-container",children:(0,o.jsx)(c,{children:e.children})});let s=(0,r.default)(l.Box)`
  display: block;
  background: ${({theme:e})=>e.palette.background3};
  border-bottom: 1px solid ${({theme:e})=>e.palette.background5};
  padding: ${({theme:e})=>e.px.xsmall} ${({theme:e})=>e.px.xsmall}
    ${({theme:e})=>e.px.large} 0px;
  width: 100%;
  ${a.Mixins.scrollbar.base};
  gap: ${({theme:e})=>e.px.base};
`,c=r.default.div`
  padding: ${({theme:e})=>e.px.small} ${({theme:e})=>e.px.small} 0px
    ${({theme:e})=>e.px.base};
  width: 100%;
`},2361:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CollapsibleCardStateless=t.CollapsibleCard=void 0;let o=n(4848),r=n(2015),a=i(n(2770)),l=n(3189),s=n(5917),c=n(2094),u=n(7544),d=n(5963),f=n(532);t.CollapsibleCard=(0,r.forwardRef)((e,n)=>{let[i,a]=(0,r.useState)(e.expanded||!1);return(0,o.jsx)(t.CollapsibleCardStateless,Object.assign({},e,{ref:n,expanded:i,onExpand:e=>a(!e)}))}),t.CollapsibleCard.displayName="CollapsibleCard",t.CollapsibleCardStateless=(0,r.forwardRef)((e,t)=>{var n,i;return(0,o.jsxs)(p,{"data-testid":"collapsible-card",children:[(0,o.jsxs)(m,{"aria-expanded":e.expanded,"data-testid":"heading-container",ref:t,zIndex:null===(n=e.headerSettings)||void 0===n?void 0:n.zIndex,fixedHeader:null===(i=e.headerSettings)||void 0===i?void 0:i.fixedHeader,onClick:()=>e.onExpand(e.expanded),tabIndex:0,onKeyDown:t=>{switch(t.code){case"Enter":case"Space":t.preventDefault(),e.onExpand(e.expanded)}},children:[(0,o.jsx)(h,{children:e.title}),(0,o.jsxs)("div",{id:"icon-container",children:[void 0!==e.badgeText&&(0,o.jsx)(l.Badge,{count:e.badgeText,id:"collapsible-card-heading-badge","data-testid":"collapsible-card-heading-badge"}),(0,o.jsx)(s.Icon,{icon:e.expanded?"ChevronUpIcon":"ChevronDownIcon"})]})]}),e.expanded&&(0,o.jsx)(u.CardContainer,{maxHeight:e.maxHeight||"none",children:(0,o.jsx)("div",{children:e.children})})]})}),t.CollapsibleCardStateless.displayName="CollapsibleCardStateless";let p=a.default.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,h=(0,a.default)(d.Text)`
  color: ${({theme:e})=>e.palette.textDefault};
  ${f.Mixins.textOverflow};
  text-decoration: none;
  display: block;
  overflow: hidden;
`,m=(0,a.default)(c.Box)`
  position: ${({fixedHeader:e})=>e?"sticky":"relative"};
  top: ${({fixedHeader:e})=>e?0:void 0};
  z-index: ${({zIndex:e})=>e};
  align-items: center;
  background: ${({theme:e})=>e.palette.background3};
  border-top: 1px solid ${({theme:e})=>e.palette.background5};
  border-bottom: 1px solid ${({theme:e})=>e.palette.background5};
  cursor: pointer;
  display: inline-flex;
  gap: ${({theme:e})=>e.px.small};
  justify-content: space-between;
  line-height: ${({theme:e})=>e.lineHeight.heading};
  outline: none;
  padding: ${({theme:e})=>e.px.base};
  transition: border-color var(--openfin-ui-globalTransition);
  width: 100%;
  white-space: nowrap;

  #icon-container {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  #collapsible-card-heading-badge {
    background-color: ${({theme:e})=>e.palette.brandPrimary};
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({theme:e})=>e.palette.background2};
    border-top: 1px solid ${({theme:e})=>e.palette.background5};
    border-bottom: 1px solid ${({theme:e})=>e.palette.background5};
  }

  &:focus {
    border-top: 1px solid ${({theme:e})=>e.palette.borderNeutral};
    border-bottom: 1px solid ${({theme:e})=>e.palette.borderNeutral};
  }
`},7787:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(2361),t)},6588:(e,t)=>{var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.ExpandDirection=void 0,(i=n||(t.ExpandDirection=n={}))[i.Up=0]="Up",i[i.Down=1]="Down"},4947:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ExpandableButton=void 0;let o=n(4848),r=n(2015),a=n(2367),l=i(n(2770)),s=n(5917),c=n(5322),u=n(1953),d=n(2094),f=n(6588);t.ExpandableButton=e=>{var t,n,i,l,s,p;let[_,x]=(0,r.useState)({show:!1,requestedByCollapse:!1}),O={size:e.size,kind:e.kind,disabled:e.disabled,tabIndex:e.tabIndex},C=Object.assign(Object.assign({},e),{shape:a.ButtonShape.square,"aria-label":null!==(t=e["aria-label"])&&void 0!==t?t:`Primary Button ${e.title}`}),w=null!==(n=e.expandDirection)&&void 0!==n?n:f.ExpandDirection.Down;return(0,r.useEffect)(()=>{if(!_.requestedByCollapse)return;let e=setTimeout(()=>x({requestedByCollapse:!1,show:!1}),200);return()=>clearTimeout(e)},[_.requestedByCollapse]),(0,o.jsxs)(y,{children:[(0,o.jsxs)(v,{children:[(0,o.jsx)(m,Object.assign({},C,{children:(0,o.jsx)(b,{children:null!==(i=e.children)&&void 0!==i?i:C.title})})),e.secondaryButtons&&e.secondaryButtons.length>0&&(0,o.jsx)(d.Box,{id:"dropdown-container",children:(0,o.jsxs)(g,Object.assign({},O,{role:"combobox",onClick:()=>{_.requestedByCollapse||x({requestedByCollapse:!1,show:!_.show})},"aria-label":"Expand Secondary Buttons Panel","aria-expanded":_.show,children:[w===f.ExpandDirection.Down&&(0,o.jsx)(h,{kind:null!==(l=e.kind)&&void 0!==l?l:a.ButtonKind.primary,icon:"CaretDownIcon"}),w===f.ExpandDirection.Up&&(0,o.jsx)(h,{kind:null!==(s=e.kind)&&void 0!==s?s:a.ButtonKind.primary,icon:"CaretUpIcon"})]}))})]}),e.secondaryButtons&&e.secondaryButtons.length>0&&(0,o.jsx)(c.AnimatePresence,{children:_.show&&(0,o.jsx)(u.ExpandablePanel,{expandDirection:w,secondaryButtons:null!==(p=e.secondaryButtons)&&void 0!==p?p:[],stretch:e.stretchExpandablePanel,closePanelOnSecondaryButtonClick:e.closePanelOnSecondaryButtonClick,onCollapseRequest:()=>x({show:!1,requestedByCollapse:!0}),buttonSize:e.size,document:e.document})})]})};let p={[a.ButtonKind.primary]:e=>e.palette.brandPrimaryText,[a.ButtonKind.secondary]:e=>e.palette.brandSecondaryText,[a.ButtonKind.textOnly]:e=>e.palette.textDefault},h=(0,l.default)(s.Icon)`
  svg path {
    color: ${({theme:e,kind:t})=>p[t](e)};
  }
  line-height: ${({theme:e})=>e.lineHeight.ui};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
`,m=(0,l.default)(a.Button)`
  margin-right: ${({theme:e})=>e.px.xsmall};
`,b=(0,l.default)(d.Box)`
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
`,g=(0,l.default)(a.Button)`
  width: ${e=>e.theme.px.xxlarge};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=l.default.div`
  display: inline-flex;
  flex-direction: row;
  position: relative;
`,y=l.default.div`
  position: relative;
  display: inline-block;
`},4032:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setupExpandablePanel=void 0;let i=n(6588);t.setupExpandablePanel=(e,t,n=!1)=>{if(!e||0===e.childNodes.length)return;let o=e.parentElement,r=null==o?void 0:o.getBoundingClientRect(),a=e.getBoundingClientRect();if(!r)return;let l=a.height,s=a.width<=r.width||n?a.width:r.width,c=r.x+s>document.body.clientWidth||s<r.width;e.style.width=`${s}px`,e.style.opacity="1",c?e.style.right="0px":e.style.left="0px",t===i.ExpandDirection.Down&&(e.style.top=`${r.height}px`),t===i.ExpandDirection.Up&&(e.style.top=-1*l+"px")}},1953:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ExpandablePanel=void 0;let o=n(4848),r=i(n(2770)),a=n(5322),l=n(2367),s=n(2094),c=n(4032),u=i(n(4708)),d={type:"spring",duration:.2,bounce:.25};t.ExpandablePanel=e=>{var t;let n=`${e.panelId}-expandable-panel`;return(0,o.jsx)(u.default,{focusTrapOptions:{fallbackFocus:`#${n}`,clickOutsideDeactivates:!0,onDeactivate:e.onCollapseRequest,initialFocus:!1,document:e.document,returnFocusOnDeactivate:!1},children:(0,o.jsx)(h,{ref:t=>(0,c.setupExpandablePanel)(t,e.expandDirection,e.stretch),tabIndex:0,id:n,initial:"initial",exit:"hidden",buttonSize:null!==(t=e.buttonSize)&&void 0!==t?t:l.ButtonSize.base,animate:"visible",role:"menu",transition:d,onMouseOver:()=>{var e;return null===(e=document.activeElement)||void 0===e?void 0:e.blur()},children:e.secondaryButtons.map((t,n)=>(0,o.jsx)(l.Button,{className:"menu-item",tabIndex:n+1,title:t.title,role:"menuitem",size:e.buttonSize,disabled:t.disabled,kind:"textOnly",onClick:n=>{e.closePanelOnSecondaryButtonClick?(t.onClick(n),e.onCollapseRequest()):t.onClick(n,()=>e.onCollapseRequest())},"aria-label":t.title,children:(0,o.jsx)(f,{"aria-label":t.title,children:t.title})},n))},"expandablePanel")})};let f=(0,r.default)(s.Box)`
  padding-bottom: 1px;
  padding-top: 1px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  overflow: hidden;
`,p={[l.ButtonSize.small]:e=>e.px.small,[l.ButtonSize.base]:e=>e.px.base,[l.ButtonSize.large]:e=>e.px.large},h=(0,r.default)(a.motion.div)`
  border-radius: ${({theme:e})=>e.radius.small};
  opacity: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: ${e=>e.theme.px.xxxlarge};
  max-width: max-content;
  min-width: 80px;
  background: ${e=>e.theme.palette.background4};
  box-shadow: ${e=>e.theme.shadow.base};
  height: max-content;
  z-index: 100;

  .menu-item {
    border-radius: unset;
    background: none;
    border: transparent;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    overflow: clip;
    & > * {
      text-align: left;
    }
    font-weight: ${({theme:e})=>e.fontWeight.normal};
    padding-top: ${({theme:e,buttonSize:t})=>p[t](e)};
    padding-bottom: ${({theme:e,buttonSize:t})=>p[t](e)};
    padding-left: ${({theme:e})=>e.px.small};
    padding-right: ${({theme:e})=>e.px.small};

    :first-child {
      border-top-left-radius: ${({theme:e})=>e.radius.small};
      border-top-right-radius: ${({theme:e})=>e.radius.small};
    }

    :last-child {
      border-bottom-left-radius: ${({theme:e})=>e.radius.small};
      border-bottom-right-radius: ${({theme:e})=>e.radius.small};
    }

    &:focus,
    &:hover {
      outline: none;
      border-color: transparent;
      background: ${e=>e.theme.palette.background2};
    }

    &:disabled,
    &:active:disabled {
      color: ${({theme:e})=>e.palette.textInactive};
      background: ${e=>e.theme.palette.background4};
      opacity: unset;
    }
  }
`},5825:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(4947),t),o(n(6588),t)},6368:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContentMenu=t.findPathToItemWithId=void 0;let o=n(4848),r=n(2015),a=n(1255),l=i(n(2770)),s=n(2094);t.findPathToItemWithId=(e,n,i)=>{if(e.id===i)return n;if(e.children)for(let o=0;o<e.children.length;++o){let r=e.children[o];n.push(r.id);let a=(0,t.findPathToItemWithId)(r,n,i);if(a)return a;n.pop()}},t.ContentMenu=({structure:e,handleClickItem:n,handleBookmarkItem:i,targetId:l})=>{let[s,u]=(0,r.useState)([]),[d,f]=(0,r.useState)(),p=(0,r.useRef)(null),h=(0,r.useCallback)(()=>{p.current&&p.current.scrollTo({left:p.current.scrollWidth,behavior:"smooth"})},[]);return(0,r.useEffect)(()=>{if(l){let n=(0,t.findPathToItemWithId)({id:"",children:e},[],l);if(n)return u(n),void f(`content-menu-item-${l}`)}f(void 0)},[l]),(0,r.useEffect)(()=>{h()},[s]),(0,o.jsx)(c,{ref:p,children:(0,o.jsx)(a.ContentMenuColumn,{entries:e,depth:0,path:s,targetItemId:d,setCurrentlySelectedPath:u,handleClickItem:n,handleBookmarkItem:i})})};let c=(0,l.default)(s.Box)`
  height: 100%;
  width: 100%;

  background-color: ${({theme:e})=>e.palette.background1};
  display: flex;

  overflow-x: auto;
  overflow-y: hidden;
`},1255:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContentMenuColumn=void 0;let o=n(4848),r=i(n(2770)),a=n(6418),l=n(2015),s=n(8307);t.ContentMenuColumn=({entries:e,depth:n,path:i,targetItemId:r,setCurrentlySelectedPath:a,handleClickItem:d,handleBookmarkItem:f})=>{let p=(0,l.useRef)(null),h=i[n],m=h?e.find(e=>e.id===h):void 0;(0,l.useEffect)(()=>{if(r&&m){let e=document.getElementById(`content-menu-item-${m.id}`);if(e&&p.current){let t=e.getBoundingClientRect().top-p.current.children[0].getBoundingClientRect().top;p.current.scrollTo({top:t,behavior:"smooth"})}}},[r]);let b=(0,l.useCallback)(e=>{a(t=>e?(t[n]=e,t.slice(0,n+1)):t.slice(0,n))},[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{ref:p,children:e.length>0?(0,o.jsx)("div",{children:e.map(e=>(0,o.jsx)(s.ContentMenuItem,{entry:e,active:"folder"===e.type&&e.id===h,handleClick:(e,t)=>{"folder"===e.type?b(e.id):d(e,t)},handleBookmark:f},e.id))}):(0,o.jsx)(u,{children:"No content available."})}),m&&"folder"===m.type&&(0,o.jsx)(t.ContentMenuColumn,{entries:m.children,depth:n+1,path:i,targetItemId:r,setCurrentlySelectedPath:a,handleClickItem:d,handleBookmarkItem:f})]})};let c=(0,r.default)(a.MenuFrame).attrs({className:"content-menu-column-frame"})`
  height: 100%;
  width: 241px;
  padding: ${({theme:e})=>e.px.xsmall};
  overflow-y: auto;

  position: unset;
  flex-shrink: 0;

  border-right: 1px solid ${({theme:e})=>e.palette.background5};
`,u=r.default.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  user-select: none;
`},8307:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.ContentMenuItemContainer=t.ContentMenuItem=void 0;let l=n(4848),s=a(n(2770)),c=n(6418),u=n(5917),d=n(5699);t.ContentMenuItem=({entry:e,active:n,handleClick:i,handleBookmark:o})=>{let{label:r,type:a}=e;return(0,l.jsxs)(t.ContentMenuItemContainer,{id:`content-menu-item-${e.id}`,onClick:t=>i(e,t),active:n,children:["item"===a&&(0,l.jsx)(d.IconWithFallback,{iconUrl:e.icon}),(0,l.jsx)(f,{size:"base",weight:"normal",children:r}),(0,l.jsx)(p,{side:"right",bookmarked:e.bookmarked,onClick:t=>{null==t||t.stopPropagation(),o&&o(e)},"data-testid":`content-menu-item-${e.id}-bookmark-icon`,children:e.bookmarked?(0,l.jsx)(u.Icon,{icon:"StarFilledIcon"}):(0,l.jsx)(u.Icon,{icon:"StarIcon"})}),"folder"===a&&(0,l.jsx)(c.MenuItemIconContainer,{side:"right","data-testid":`content-menu-item-${e.id}-chevron-icon`,children:(0,l.jsx)(c.MenuItemRightIcon,{icon:"ChevronRightIcon"})})]})};let f=(0,s.default)(c.MenuItemText)`
  padding-right: ${({theme:e})=>e.px.large};
`,p=(0,s.default)(c.MenuItemIconContainer)`
  ${({bookmarked:e})=>e?s.css`
        & + ${c.MenuItemIconContainer} {
          margin-left: unset;
        }
      `:s.css`
        display: none;
      `};

  svg {
    height: ${({theme:e})=>e.px.large};
    width: ${({theme:e})=>e.px.large};
  }
`;t.ContentMenuItemContainer=(0,s.default)(c.MenuItemInnerContainer).attrs(({active:e})=>({className:["content-menu-item-container",e?"content-menu-item-container-active":""].filter(Boolean).join(" ")}))`
  ${({theme:e,active:t})=>t&&s.css`
      background-color: ${e.palette.background3};
    `}
  &:hover {
    background-color: ${({theme:e})=>e.palette.background2};

    ${p} {
      display: block;
    }

    ${p} + ${c.MenuItemIconContainer} {
      margin-left: unset;
    }
  }
`},5699:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IconWithFallback=void 0;let o=n(4848),r=i(n(2770)),a=n(1491),l=n(5917);t.IconWithFallback=({iconUrl:e,alt:t})=>{let n=(0,a.useImageLoader)(e);return"error"===n?(0,o.jsx)(s,{children:(0,o.jsx)(l.Icon,{icon:"FallbackGlobeIcon"})}):"loading"===n?(0,o.jsx)(c,{}):(0,o.jsx)(u,{src:e,alt:t})};let s=r.default.div`
  height: ${({theme:e})=>e.px.large};
  width: ${({theme:e})=>e.px.large};
  margin-left: ${({theme:e})=>e.px.small};

  border-radius: ${({theme:e})=>e.radius.small};
`,c=r.default.div`
  height: ${({theme:e})=>e.px.large};
  width: ${({theme:e})=>e.px.large};
  margin-left: ${({theme:e})=>e.px.small};
`,u=r.default.img`
  height: ${({theme:e})=>e.px.large};
  width: ${({theme:e})=>e.px.large};
  margin-left: ${({theme:e})=>e.px.small};

  border-radius: ${({theme:e})=>e.radius.small};

  user-select: none;
`},1491:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useImageLoader=void 0;let i=n(2015);t.useImageLoader=e=>{let[t,n]=(0,i.useState)("loading");return(0,i.useEffect)(()=>{if(!e)return void n("error");n("loading");let t=new Image,i=()=>{n("success")},o=()=>{n("error")};return t.addEventListener("load",i),t.addEventListener("error",o),t.src=e,()=>{t.removeEventListener("load",i),t.removeEventListener("error",o)}},[e]),t}},4810:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(6368),t)},244:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomContextMenu=t.CONTEXT_MENU_ANIMATION_DURATION=t.PRIOR_CONTEXT_MENU_CLASS=t.BASE_CONTEXT_MENU=t.ACTIVE_CONTEXT_MENU_CLASS=t.CONTEXT_MENU_FRAME_ID=void 0;let o=n(4848),r=n(2015),a=i(n(2770)),l=n(9005),s=n(68),c=n(6972),u=n(8666),d=n(3247),f=n(8429),p=n(6418);t.CONTEXT_MENU_FRAME_ID="context_menu_frame",t.ACTIVE_CONTEXT_MENU_CLASS="active_context_menu",t.BASE_CONTEXT_MENU="base_context_menu",t.PRIOR_CONTEXT_MENU_CLASS="previous_context_menu",t.CONTEXT_MENU_ANIMATION_DURATION=200,t.CustomContextMenu=({menuTemplate:e,onClick:n,icon:i,onMenuResize:a,onContextMenuReady:p,isWindows:b=!0})=>{var g;let v=(0,r.useRef)(null),[y,_]=(0,r.useState)(!1),[x,O]=(0,r.useState)({width:160,height:160}),[C,w]=(0,r.useState)(0),[j,S]=(0,r.useState)([]),[P,E]=(0,r.useState)(),[M,T]=(0,r.useState)([]),[k,I]=(0,r.useState)(e.map(e=>e.label||"")),[D,$]=(0,r.useState)(-1);(0,r.useEffect)(()=>{I(e.map(e=>e.label||"")),$(k.findIndex(e=>e===P))},[e]);let{width:N,height:A}=(0,s.useResizeContextMenu)(P),{handleNavigateToSubmenu:F,handleNavigateBackToParent:R,handleNavigateToBase:B}=(0,u.useContextMenuNavigation)(C,w,M,T,P,E,O,$,j,a);return(0,r.useEffect)(()=>{S((0,c.getMenuNavigationOrder)(e)),E(t.BASE_CONTEXT_MENU),T([]),O({width:N,height:A})},[e]),(0,d.useContextMenuKeyboardNavigation)(null===(g=j.find(e=>e.parentLabel===P))||void 0===g?void 0:g.menuTemplate,M,P,D,$,n,F,R,B),(0,r.useEffect)(()=>{v.current&&(y||(p&&p(),_(!0)))},[v.current]),(0,o.jsx)(h,{id:t.CONTEXT_MENU_FRAME_ID,transitionSpeed:C,isWindows:b,children:j.map(({parentLabel:e,menuTemplate:r})=>(0,o.jsx)("div",{ref:e===P?v:void 0,children:(0,o.jsxs)(m,{className:(0,c.getClassName)(e,P,M),activeMenuWidth:x.width,transitionSpeed:C,id:e,children:[e!==t.BASE_CONTEXT_MENU?(0,o.jsx)(l.CustomContextMenuItem,{type:"submenuHeader",label:e,onBack:()=>R(e,"click"),onClose:B,showShouldHomeButton:M.slice(2).includes(e)||M.length>=2&&P===e,selected:-1===D},`${e}-submenu-header`):i&&(0,o.jsx)(f.RootMenuHeader,{icon:i}),r.map((t,i)=>(0,o.jsx)(l.CustomContextMenuItem,Object.assign({onClick:e=>{t.hasSubMenu?F(t.label||""):n(e),$(-2)}},t,{selected:D===i}),`${e}-${t.label}-${i}`))]})},e))})};let h=a.default.div`
  position: relative;
  min-width: fit-content;
  min-height: fit-content;
  overflow: hidden;

  background-color: ${({theme:e})=>e.palette.background1};
  transition: ${({transitionSpeed:e})=>`all ${e}ms linear`};
  border: ${({theme:e,isWindows:t})=>t&&`1px solid ${e.palette.background3}`};
  border-radius: ${({isWindows:e})=>!e&&"10px"};
`,m=(0,a.default)(p.MenuFrame)`
  transform: translateX(${({activeMenuWidth:e})=>`${e}px`});
  transition: ${({transitionSpeed:e})=>`all ${e}ms cubic-bezier(0, 0, 0.58, 1)`};
  opacity: 0%;

  &.active_context_menu {
    transform: unset;
    opacity: 100%;
  }

  &.previous_context_menu {
    transform: translateX(-100%);
    opacity: 0%;
  }
`},6374:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ColorLinkingContextMenuWidget=void 0;let o=n(4848),r=i(n(2770)),a=n(2094),l=n(5917);t.ColorLinkingContextMenuWidget=({config:e,onClick:t})=>(0,o.jsx)(u,{children:e.channels.map(e=>"color"in e?(0,o.jsx)(c,{title:e.label,color:e.color,onClick:()=>null==t?void 0:t(e.data),children:e.checked&&(0,o.jsx)(l.Icon,{icon:"CheckIcon",title:e.label,size:"base",color:"white"})},e.label):(0,o.jsx)(s,{onClick:()=>null==t?void 0:t(e.data),children:(0,o.jsx)(l.Icon,{icon:"LinkBreak1Icon",title:e.label,size:"base"})},e.label))});let s=(0,r.default)(a.Box)`
  cursor: pointer;
  width: ${({theme:e})=>e.px.large};
  height: ${({theme:e})=>e.px.large};
  justify-content: center;
`,c=(0,r.default)(a.Box)`
  background-color: ${({color:e})=>e};
  width: ${({theme:e})=>e.px.large};
  height: ${({theme:e})=>e.px.large};
  border-radius: 3px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`,u=(0,r.default)(a.Box)`
  flex-direction: row;
  gap: ${({theme:e})=>e.px.small};
  /*
   * Container width is colorbox width * columnCount + # of gaps * gap width + side padding
  */
  width: calc(
    ${({theme:e})=>e.px.large} * 5 + 4 * ${({theme:e})=>e.px.small} + 2 *
      ${({theme:e})=>e.px.small}
  );
  flex-wrap: wrap;
  padding: ${({theme:e})=>e.px.small} ${({theme:e})=>e.px.small};
`},9005:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.CustomContextMenuItem=void 0;let o=n(4848),r=n(2015),a=n(6554),l=n(2294),s=n(3741),c=n(4953),u={normal:l.NormalCustomContextMenuItem,checkbox:l.NormalCustomContextMenuItem,submenu:l.NormalCustomContextMenuItem,separator:a.SeparatorCustomContextMenuItem,submenuHeader:s.SubmenuHeaderCustomContextMenuItem,widget:c.WidgetCustomContextMenuItem};t.CustomContextMenuItem=e=>{let t;var{type:n="normal",icon:a,label:l,enabled:s=!0,checked:c,hasSubMenu:d,showShouldHomeButton:f,onClick:p,onClose:h,onBack:m,selected:b}=e,g=i(e,["type","icon","label","enabled","checked","hasSubMenu","showShouldHomeButton","onClick","onClose","onBack","selected"]);switch(n){case"normal":case"checkbox":{t=Object.assign(Object.assign({},g),{type:n,label:l,icon:a,enabled:s,checked:c,selected:b,onClick:p});let e=u[n];return(0,r.createElement)(e,Object.assign({},t,{key:l}))}case"submenu":{t=Object.assign(Object.assign({},g),{label:l,enabled:s,checked:c,submenu:d,selected:b,onClick:p});let e=u[n];return(0,r.createElement)(e,Object.assign({},t,{key:l}))}case"submenuHeader":{t={label:l,showShouldHomeButton:f,onClose:h,onBack:m,selected:b,onClick:p};let e=u[n];return(0,r.createElement)(e,Object.assign({},t,{key:l}))}case"separator":{let e=u[n];return(0,o.jsx)(e,{})}case"widget":{let e=Object.assign(Object.assign({},g),{onClick:p,label:l,enabled:s}),t=u[n];return(0,r.createElement)(t,Object.assign({},e,{key:l,onClick:p}))}default:return(0,o.jsx)(o.Fragment,{})}}},2294:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NormalCustomContextMenuItem=void 0;let o=n(4848),r=i(n(2770)),a=n(5917),l=n(6418);t.NormalCustomContextMenuItem=({type:e,label:t,enabled:n=!0,checked:i,submenu:r,onClick:a,selected:c,data:u})=>(0,o.jsx)(l.MenuItemContainer,{children:(0,o.jsxs)(l.MenuItemInnerContainer,{onClick:n?()=>null==a?void 0:a(u):void 0,enabled:n.toString(),selected:c,children:["checkbox"===e&&(0,o.jsx)(l.MenuItemIconContainer,{side:"left",children:(0,o.jsx)(s,{icon:"CheckIcon",enabled:n.toString(),checked:i})}),(0,o.jsx)(l.MenuItemText,{size:"base",weight:"normal",enabled:n,children:t}),r&&(0,o.jsx)(l.MenuItemIconContainer,{side:"right",children:(0,o.jsx)(l.MenuItemRightIcon,{icon:"ChevronRightIcon",enabled:n})})]})});let s=(0,r.default)(a.Icon)`
  svg path {
    fill: ${({theme:e,enabled:t,checked:n})=>"true"===t?n?e.palette.textDefault:"transparent":e.palette.textInactive};
    stroke-width: 1.25;
  }
`},8429:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RootMenuHeader=void 0;let o=n(4848),r=i(n(2770)),a=n(2094),l=n(6554);t.RootMenuHeader=({icon:e})=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s,{children:e}),(0,o.jsx)(l.SeparatorCustomContextMenuItem,{})]});let s=(0,r.default)(a.Box)`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({theme:e})=>e.radius.small};
  padding: ${({theme:e})=>`0 0 0 ${e.px.large}`};
`},6554:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SeparatorCustomContextMenuItem=void 0;let o=n(4848),r=n(2094),a=i(n(2770));t.SeparatorCustomContextMenuItem=()=>(0,o.jsx)(l,{"data-testid":"custom-context-menu-separator",children:(0,o.jsx)(s,{})});let l=(0,a.default)(r.Box)`
  width: 100%;
  padding: ${({theme:e})=>e.px.small} 0;
`,s=a.default.hr`
  width: 100%;
  height: 1px;
  border: none;
  background-color: ${({theme:e})=>e.palette.background3};
`},3741:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SubmenuHeaderCustomContextMenuItem=void 0;let o=n(4848),r=n(2015),a=i(n(2770)),l=n(5917),s=n(5963),c=n(2094),u=n(6554);t.SubmenuHeaderCustomContextMenuItem=({label:e,showShouldHomeButton:t,onClose:n,onBack:i,selected:a})=>{let l=(0,r.useCallback)(e=>{e.stopPropagation(),null==i||i()},[i]),s=(0,r.useCallback)(e=>{e.stopPropagation(),null==n||n()},[n]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(d,{children:[(0,o.jsx)(f,{side:"left",selected:a,children:(0,o.jsx)(p,{icon:"ArrowLeftIcon",onClick:l,id:"back-icon",selected:a})}),(0,o.jsx)(h,{size:"base",weight:"normal",children:e}),t&&(0,o.jsx)(f,{side:"right",children:(0,o.jsx)(m,{icon:"Cross2Icon",onClick:s,id:"close-icon"})})]}),(0,o.jsx)(u.SeparatorCustomContextMenuItem,{})]})};let d=(0,a.default)(c.Box)`
  width: 100%;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({theme:e})=>e.radius.small};
  padding: ${({theme:e})=>`0 ${e.px.small} 0 ${e.px.small}`};
`,f=(0,a.default)(c.Box)`
  padding: ${({theme:e,side:t})=>"right"===t?`0 ${e.px.small} 0 0`:`0 0 0 ${e.px.small}`};
  margin-left: ${({side:e})=>"right"===e?"auto":0};
`,p=(0,a.default)(l.Icon)`
  border-radius: ${({theme:e})=>e.radius.small};
  background-color: ${({selected:e,theme:t})=>e?t.palette.background3:"transparent"};
  color: ${({theme:e,selected:t})=>t?e.palette.textDefault:e.palette.textHelp};
  stroke: ${({theme:e,selected:t})=>t?e.palette.textDefault:e.palette.textHelp};
  stroke-width: 0.25;

  &:hover {
    color: ${({theme:e})=>e.palette.textDefault};
    stroke: ${({theme:e})=>e.palette.textDefault};
  }
`,h=(0,a.default)(s.Text)`
  color: ${({theme:e})=>e.palette.textHelp};
  padding: ${({theme:e})=>`0 ${e.px.xxxlarge} 0 ${e.px.small}`};
  cursor: default;
`,m=(0,a.default)(l.Icon)`
  color: ${({theme:e})=>e.palette.textHelp};
  stroke: ${({theme:e})=>e.palette.textHelp};
  stroke-width: 0.25;
  margin-left: auto;

  &:hover {
    color: ${({theme:e})=>e.palette.textDefault};
    stroke: ${({theme:e})=>e.palette.textDefault};
  }
`},4953:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WidgetCustomContextMenuItem=void 0;let o=n(4848),r=n(6418),a=i(n(2770)),l=n(2094),s=n(6374);t.WidgetCustomContextMenuItem=({label:e,enabled:t,onClick:n,config:i})=>(0,o.jsx)(r.MenuItemContainer,{children:(0,o.jsxs)(c,{enabled:(null!=t?t:"true").toString(),children:[(0,o.jsx)(r.MenuItemText,{size:"base",weight:"normal",enabled:t,children:e}),(0,o.jsx)(s.ColorLinkingContextMenuWidget,{config:i,onClick:n})]})});let c=(0,a.default)(l.Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  min-height: 28px;
  justify-content: flex-start;
  border-radius: ${({theme:e})=>e.radius.small};
  background-color: ${({theme:e,selected:t,enabled:n})=>"false"!==n&&t?e.palette.background3:"transparent"};
`},759:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(244),t)},3247:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useContextMenuKeyboardNavigation=void 0;let i=n(2015),o=n(244);t.useContextMenuKeyboardNavigation=(e,t,n,r,a,l,s,c,u)=>{let d=t=>{var n,i,o;return"separator"===(null===(n=e[t])||void 0===n?void 0:n.type)||!1===(null===(i=e[t])||void 0===i?void 0:i.enabled)||!1===(null===(o=e[t])||void 0===o?void 0:o.visible)},f=(0,i.useCallback)(()=>{a(t=>{let n=t;do{if(n===(null==e?void 0:e.length)-1)break;n+=1}while(d(n));return d(n)?t:n})},[a,e]),p=(0,i.useCallback)(()=>{a(e=>{let t=e;do{if(n===o.BASE_CONTEXT_MENU&&0===t||-1===t)break;t-=1}while(d(t));return t})},[a,e]),h=(0,i.useCallback)(()=>{a(n===o.BASE_CONTEXT_MENU?0:-1)},[a,n]),m=(0,i.useCallback)(()=>{a(t=>{for(let n=e.length-1;n>=t;n--)if(!d(n))return n;return t})},[null==e?void 0:e.length,a]),b=(0,i.useCallback)(()=>{var t,i;if(null===(t=e[r])||void 0===t?void 0:t.hasSubMenu)s((null===(i=e[r])||void 0===i?void 0:i.label)||"");else{if(-1===r)return void c(n,"keyboard");l(e[r].data)}a(-1)},[a,l,s,e,r,c,n]),g=(0,i.useCallback)(()=>{var t,n;(null===(t=e[r])||void 0===t?void 0:t.hasSubMenu)&&(s((null===(n=e[r])||void 0===n?void 0:n.label)||""),a(-1))},[a,s,e,r]),v=(0,i.useCallback)(()=>{(t.slice(1).includes(n)||(null==t?void 0:t.length)>=1)&&c(n,"keyboard")},[c,t,n]),y=(0,i.useCallback)(()=>{t.slice(2).includes(n)||(null==t?void 0:t.length)>=2?u():l({type:"close"})},[u,t,n]);(0,i.useEffect)(()=>{let e=e=>{switch(e.key){case"ArrowDown":f();break;case"ArrowUp":p();break;case"Home":case"PageUp":h();break;case"End":case"PageDown":m();break;case"Enter":b();break;case"ArrowRight":g();break;case"ArrowLeft":v();break;case"Escape":y()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[f,p,h,m,b,g,v,y])}},8666:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useContextMenuNavigation=void 0;let i=n(2015),o=n(244);t.useContextMenuNavigation=(e,t,n,r,a,l,s,c,u,d)=>{let f=(0,i.useCallback)(e=>{let t=document.getElementById(e),n=null==t?void 0:t.getBoundingClientRect();return{height:(null==n?void 0:n.height)||0,width:(null==n?void 0:n.width)||0}},[]);return{handleNavigateToSubmenu:(0,i.useCallback)(i=>{let{height:c,width:u}=f(i);d&&d(c,u),e||t(o.CONTEXT_MENU_ANIMATION_DURATION),s({width:u,height:c}),l(i),r([...n,a])},[a,n,r,d,t,f]),handleNavigateBackToParent:(0,i.useCallback)((e,t="click")=>{if(d){let{height:e,width:t}=f(1===n.length?o.BASE_CONTEXT_MENU:n[n.length-1]);d(e,t)}let i=n.pop(),a=u.find(e=>e.parentLabel===i);l(i),r(n),c("keyboard"===t?(null==a?void 0:a.menuTemplate.findIndex(t=>t.label===e))||0:-1)},[n,r,c,f,d,u]),handleNavigateToBase:(0,i.useCallback)(()=>{if(d){let{height:e,width:t}=f(o.BASE_CONTEXT_MENU);d(e,t)}l(o.BASE_CONTEXT_MENU),r([]),c(-1)},[l,r,c,f,d])}}},68:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useResizeContextMenu=void 0;let i=n(2015),o=n(244);t.useResizeContextMenu=e=>{let[t,n]=(0,i.useState)({height:160,width:160});return(0,i.useEffect)(()=>{let t=document.getElementById(e),i=document.getElementById(o.CONTEXT_MENU_FRAME_ID);if(!t)return;let r=new ResizeObserver(e=>{for(let t of e){let{width:e,height:o}=t.target.getBoundingClientRect();i&&(i.style.height=`${o}px`,i.style.width=`${e}px`,n({width:e,height:o}))}});return r.observe(t),()=>{r.unobserve(t)}},[e]),t}},6972:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMenuNavigationOrder=t.getClassName=void 0;let i=n(244);t.getClassName=(e,t,n)=>t===e?i.ACTIVE_CONTEXT_MENU_CLASS:n.includes(e)?i.PRIOR_CONTEXT_MENU_CLASS:"",t.getMenuNavigationOrder=e=>{if(!e)return[];let t=[{parentLabel:i.BASE_CONTEXT_MENU,template:e}],n=[];for(;t.length;){let{template:e,parentLabel:i}=t.pop();e.forEach(({submenu:n,label:i},o)=>{n&&(t.push({parentLabel:i||"",template:n}),delete e[o].submenu,e[o].hasSubMenu=!0)}),n.push({parentLabel:i,menuTemplate:e})}return n}},6418:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MenuItemText=t.MenuItemRightIcon=t.MenuItemIconContainer=t.MenuItemInnerContainer=t.MenuItemContainer=t.MenuFrame=void 0;let o=i(n(2770)),r=n(2094),a=n(5917),l=n(5963);t.MenuFrame=(0,o.default)(r.Box)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: max-content;
  background-color: ${({theme:e})=>e.palette.background1};
  padding: ${({theme:e})=>`${e.px.small} 0 ${e.px.small} 0`};
`,t.MenuItemContainer=(0,o.default)(r.Box)`
  width: 100%;
  padding: ${({theme:e})=>`0 ${e.px.small} 0 ${e.px.small}`};
`,t.MenuItemInnerContainer=(0,o.default)(r.Box)`
  width: 100%;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${({theme:e})=>e.radius.small};
  background-color: ${({theme:e,selected:t,enabled:n})=>"false"!==n&&t?e.palette.background3:"transparent"};

  &:hover {
    background-color: ${({theme:e,enabled:t})=>"false"!==t?e.palette.background3:"transparent"};
  }
`,t.MenuItemIconContainer=(0,o.default)(r.Box)`
  margin-left: ${({side:e})=>"right"===e?"auto":0};
  padding: ${({theme:e,side:t})=>"right"===t?`0 ${e.px.small} 0 0`:`0 0 0 ${e.px.small}`};
`,t.MenuItemRightIcon=(0,o.default)(a.Icon)`
  margin-left: auto;

  svg path {
    fill: ${({theme:e,enabled:t})=>null==t||t?e.palette.textDefault:e.palette.textInactive};
    stroke: ${({theme:e,enabled:t})=>null==t||t?e.palette.textDefault:e.palette.textInactive};
    stroke-width: 0.5;
  }
`,t.MenuItemText=(0,o.default)(l.Text)`
  color: ${({theme:e,enabled:t})=>null==t||t?e.palette.textDefault:e.palette.textInactive};
  cursor: default;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  user-select: none;
  padding: ${({theme:e})=>`0 ${e.px.xxxlarge} 0 ${e.px.small}`};
`},8577:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(3803),t)},3803:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Toggle=void 0;let r=n(4848),a=n(2015),l=o(n(2770)),s=n(2649),c=n(2094),u=n(8820);t.Toggle=e=>{var{id:t,label:n,onChange:o,labelSide:l="right",type:s="checkbox",helperText:c}=e,m=i(e,["id","label","onChange","labelSide","type","helperText"]);let[b,g]=(0,a.useState)(m.checked);return(0,a.useEffect)(()=>{g(m.checked)},[m.checked]),(0,r.jsxs)(d,{labelSide:l,children:[(n||c)&&(0,r.jsx)(u.Label,{htmlFor:t,text:n,helperText:c}),(0,r.jsxs)(f,{isChecked:b,children:[(0,r.jsx)(h,Object.assign({},m,{id:t,type:s,onChange:e=>{g(e.target.checked),null==o||o(e)}})),(0,r.jsx)(p,{tabIndex:-1,"aria-hidden":"true",isChecked:b})]})]})};let d=l.default.div`
  display: flex;
  gap: ${({theme:e})=>e.px.xlarge};
  flex-direction: ${({labelSide:e})=>"left"===e?"row":"row-reverse"};
  line-height: ${({theme:e})=>e.px.xlarge};
`,f=(0,l.default)(c.Box)`
  --px-toggle: ${({theme:e})=>e.px.xlarge};
  --px-knob: ${({theme:e})=>e.px.base};

  position: relative;
  height: var(--px-toggle);
  width: calc(2 * var(--px-toggle));
  border: 1px solid
    ${({isChecked:e,theme:t})=>e?t.palette.brandPrimary:t.palette.background6};
  border-radius: calc(0.5 * var(--px-toggle));

  background: ${({isChecked:e,theme:t})=>e?t.palette.brandPrimary:t.palette.background6};
  transition: background var(--openfin-ui-globalTransition),
    border-color var(---openfin-ui-globalTransition);

  &:focus-within {
    border-color: ${({theme:e})=>e.palette.inputFocused};
  }
`,p=l.default.button`
  position: absolute;
  width: var(--px-knob);
  height: var(--px-knob);
  top: 50%;
  left: ${({theme:e})=>e.px.xsmall};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${({isChecked:e,theme:t})=>e?t.palette.brandPrimaryText:t.palette.inputColor};
  border: none;
  outline: none;
  transition: left var(--openfin-ui-globalTransition), background var(--openfin-ui-globalTransition);
  pointer-events: none; /* Allow pass-thru for native input */
`,h=(0,l.default)(s.RawInput)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  border: none;
  outline: none;
  appearance: none;
  display: block;

  &:checked + ${p} {
    left: calc(100% - ${({theme:e})=>e.px.large});
  }
  &:disabled + ${p} {
    background: ${({theme:e})=>e.palette.inputDisabled};
  }
  &:not(:disabled) {
    cursor: pointer;
  }
`},9992:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Badge=void 0;let r=n(4848),a=o(n(2770)),l=n(2094),s=n(8543);t.Badge=e=>{var{count:t=0,max:n}=e,o=i(e,["count","max"]);let a=t.toString();return n&&t>n&&(a=`${n}+`),(0,r.jsx)(c,Object.assign({},o,{children:a}))};let c=(0,a.default)(l.Box)`
  background: ${({theme:e})=>e.palette.statusCritical};
  border-radius: ${({theme:e})=>e.radius.pill};
  color: ${s.Color.white};
  font-size: ${({theme:e})=>e.fontSize.small};
  min-width: ${({theme:e})=>e.px.xlarge};
  padding: 2px 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({theme:e})=>e.shadow.base};
`},3189:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(9992),t)},2942:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t}),l=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Calendar=void 0;let c=n(4848),u=n(2015),d=s(n(2770)),f=n(9500),p=n(2367),h=n(2094),m=a(n(1193));t.Calendar=e=>{var{value:t,onChange:n,onDismiss:i}=e,o=l(e,["value","onChange","onDismiss"]);let[r]=(0,u.useState)(t),[a,s]=(0,u.useState)(t),d=(0,u.useCallback)(e=>{e instanceof Array?(s(e[0]),null==n||n(e[0])):(s(e),null==n||n(e))},[]),p=(0,u.useCallback)(()=>{d(r||null),null==i||i()},[]);return(0,c.jsxs)(v,{"data-testid":"react-calendar",children:[(0,c.jsx)(f.Calendar,Object.assign({value:a,onChange:d,calendarType:"gregory",defaultView:"month",minDetail:"year",next2Label:null,prev2Label:null,showFixedNumberOfWeeks:!0,selectRange:!1,allowPartialRange:!1},o)),(0,c.jsxs)(b,{children:[(0,c.jsx)(g,{"data-testid":"calendar-cancel-button","aria-label":"cancel-button",label:"Cancel",size:"base",kind:"textOnly",onClick:p}),(0,c.jsx)(g,{"data-testid":"calendar-apply-button","aria-label":"apply-button",label:"Apply",size:"base",kind:"primary",onClick:i})]})]})};let b=(0,d.default)(h.Box)`
  width: 100%;
  padding: ${({theme:e})=>`${e.px.small} 0px`};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: ${({theme:e})=>`${e.px.small}`};
  background-color: ${({theme:e})=>e.palette.background4};
  border: 1px solid ${({theme:e})=>e.palette.background6};
  border-top: none;
`,g=(0,d.default)(p.Button)`
  padding: ${({theme:e})=>`${e.px.small} ${e.px.small}`};
  margin-right: ${({theme:e})=>`${e.px.small}`};
`,v=(0,d.default)(h.Box)`
  ${m};
  flex-direction: column;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  user-select: none;

  .react-calendar {
    min-width: 230px;
    width: 100%;
    background-color: ${({theme:e})=>e.palette.background4};
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.base};
    border: 1px solid ${({theme:e})=>e.palette.background6};
  }

  .react-calendar__navigation {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.base};
    margin: 0;
  }

  .react-calendar__navigation__arrow {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.large};

    :disabled {
      color: ${({theme:e})=>e.palette.inputDisabled};
    }
  }

  .react-calendar__navigation__label {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.base};
  }

  .react-calendar__viewContainer {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.inputColor};
    font-size: ${({theme:e})=>e.fontSize.base};
  }

  .react-calendar__month-view__weekdays {
    text-decoration: none;
    text-transform: none;
    font-weight: normal;
    font-size: ${({theme:e})=>e.fontSize.base};

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    border-radius: 100px;
    aspect-ratio: 1/1;
    cursor: pointer;

    :disabled {
      color: ${({theme:e})=>e.palette.textInactive};
      cursor: not-allowed;

      :hover {
        border: none;
      }
    }

    :hover {
      border: 2px solid ${({theme:e})=>e.palette.brandPrimary};
      border-radius: 100px;
    }

    :focus {
      border: 2px solid ${({theme:e})=>e.palette.brandPrimary};
      border-radius: 100px;
    }
  }

  .react-calendar__tile--now {
    border: 2px solid ${({theme:e})=>e.palette.brandPrimary} !important;
    border-radius: 100px;
  }

  .react-calendar__tile--active {
    background-color: ${({theme:e})=>e.palette.brandPrimary} !important;
    color: ${({theme:e})=>e.palette.brandPrimaryText};
    border-radius: 100px;

    :focus {
      border: 2px solid ${({theme:e})=>e.palette.brandPrimary};
      color: ${({theme:e})=>e.palette.textDefault};
      border-radius: 100px;
    }
  }
`},4706:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(2942),t)},2587:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownButton=void 0;let o=n(4848),r=n(2501),a=n(2821),l=n(5917),s=n(2015),c=i(n(2770)),u=n(2094),d=n(532),f=n(8820);t.DropdownButton=(0,s.forwardRef)((e,t)=>{var n,i,l,s,c;return(0,o.jsx)(h,{children:(0,o.jsxs)(p,{children:[(e.label||e.helperText)&&(0,o.jsx)(f.Label,{text:e.label,helperText:e.helperText,htmlFor:e.name}),(0,o.jsxs)(b,{role:"comboxbox",ref:t,name:e.name,tabIndex:e.tabIndex,"aria-activedescendant":e.activeDescendant,status:e.status,"aria-expanded":e.expanded,"aria-haspopup":"listbox","aria-controls":"dropdown-listbox",onClick:()=>e.handleClick(),as:"button","data-testid":"dropdown-button",title:null!==(i=null===(n=e.selected)||void 0===n?void 0:n.title)&&void 0!==i?i:e.placeholder,children:[(null===(l=e.selected)||void 0===l?void 0:l.iconUrl)&&(0,o.jsx)(r.ButtonImage,{src:e.selected.iconUrl}),(0,o.jsx)(a.OptionTitle,{"aria-live":"polite","data-testid":"selected-option",children:null!==(c=null===(s=e.selected)||void 0===s?void 0:s.title)&&void 0!==c?c:e.placeholder}),(0,o.jsx)(m,{status:e.status,icon:e.expanded?"ChevronUpIcon":"ChevronDownIcon"})]})]})})}),t.DropdownButton.displayName="DropdownButton";let p=(0,c.default)(u.Box)`
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`,h=(0,c.default)(u.Box)`
  font-size: ${({theme:e})=>e.fontSize.base};
  width: 100%;
  user-select: none;
`,m=(0,c.default)(l.Icon)`
  color: ${({theme:e,status:t})=>(0,d.getStatusColor)(e,t,"textDefault")};
`,b=(0,c.default)(u.Box)`
  align-items: center;
  background: ${({theme:e})=>e.palette.background4};
  border: 1px solid ${({theme:e})=>e.palette.inputBackground};
  border-radius: ${({theme:e})=>e.radius.small};
  color: ${({theme:e})=>e.palette.textDefault};
  cursor: pointer;
  border-color: ${({theme:e,status:t})=>(0,d.getStatusColor)(e,t,"inputBorder")};
  display: inline-flex;
  font-weight: ${({theme:e})=>e.fontWeight.bold};
  gap: ${({theme:e})=>e.px.small};
  justify-content: flex-start;
  line-height: ${({theme:e})=>e.lineHeight.ui};
  outline: none;
  padding: ${({theme:e})=>`${e.px.small} ${e.px.small}`};
  position: relative;
  text-decoration: none;
  transition: border-color var(--openfin-ui-globalTransition);
  width: 100%;
  white-space: nowrap;

  ${l.Icon} {
    margin-left: auto;
  }

  &:focus-within {
    border-color: ${({theme:e})=>e.palette.inputFocused};
  }

  &:focus {
    outline: 0;
    border-color: ${({theme:e,status:t})=>(0,d.getStatusColor)(e,t,"inputFocused")};
  }
`},926:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DropdownMenu=void 0;let o=n(4848),r=n(2015),a=n(2094),l=i(n(2770)),s=n(2821),c=n(2501),u=n(6110),d=n(2587);t.DropdownMenu=(0,r.forwardRef)(({label:e,options:t=[[]],placeholder:n="Select an option",selected:i,onOptionHover:l,onChange:h,renderLabel:m,fitContent:b},g)=>{if(i&&!t.some(e=>e.some(e=>e.value===i.value)))throw Error(`The selected option ${i.value} is not present in the options array`);let[v,y]=(0,r.useState)(!1);(0,r.useEffect)(()=>{1===t[0].length&&_(!1)},[t]);let _=e=>{y(null!=e?e:!v)},{focusedOption:x,handleKeyDown:O}=(0,u.useDropdownKeyboardNavigation)(t,i,v,_,h);return(0,o.jsx)(f,{ref:g,flexDirection:"column",onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||y(!1)},onKeyDown:O,children:(0,o.jsxs)(a.Box,{gap:"small",flexDirection:"column",style:{width:"100%"},children:[e&&(0,o.jsx)("label",{htmlFor:"dropdown-button",children:(0,o.jsx)(s.OptionTitle,{children:e})}),(0,o.jsxs)(p,{children:[m?(0,o.jsx)(r.Fragment,{children:m(i||{title:n,value:null},v,_,x)},`render-label-${i}`):(0,o.jsx)(d.DropdownButton,{tabIndex:0,activeDescendant:`menu-option-${null==x?void 0:x.value}`,expanded:v&&t[0].length>1,handleClick:()=>_(),selected:i,placeholder:n}),t.length&&t[0].length>1&&v&&(0,o.jsx)(c.Menu,{menuId:"dropdown-listbox",options:t,selected:i,handleExpandMenu:_,onOptionHover:l,onChange:h,fitContent:b,focusedOption:x,absolutePosition:!0})]})]})})}),t.DropdownMenu.displayName="DropdownMenu";let f=(0,l.default)(a.Box)`
  user-select: none;
  position: relative;
`,p=(0,l.default)(a.Box)``},5918:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(926),t),o(n(2501),t),o(n(2587),t)},2501:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ButtonImage=t.Menu=void 0;let o=n(4848),r=i(n(2015)),a=i(n(2770)),l=n(5917),s=n(2094),c=n(2821);t.Menu=({options:e,selected:n,menuId:i,handleExpandMenu:a,onOptionHover:l,onChange:s,width:m,height:b,header:g,focusedOption:v,absolutePosition:y,fitContent:_})=>{let x=e=>{null==l||l(e)};return(0,o.jsxs)(u,{role:"listbox",flexDirection:"column",onMouseLeave:()=>{x(null)},"data-testid":"menu",id:i,width:m,height:b,absolutePosition:y,fitContent:_,children:[g&&(0,o.jsxs)(r.default.Fragment,{children:[(0,o.jsx)(f,{children:(0,o.jsx)(c.OptionTitle,{children:g})}),(0,o.jsx)(h,{})]}),e.map((e,i)=>(0,o.jsxs)(r.default.Fragment,{children:[0!==i&&(0,o.jsx)(h,{}),e.map((e,i)=>(0,o.jsxs)(d,{role:"option",isFocused:(null==v?void 0:v.value)===e.value,"aria-selected":(null==n?void 0:n.value)===e.value,alignItems:"center",as:"button","data-testid":`menu-option-${i}`,id:`menu-option-${e.value}`,title:e.title,onClick:()=>{e.overrideOnClick?e.overrideOnClick(e):s(e),null==a||a()},onMouseOver:()=>x(e.value),children:[(null==e?void 0:e.iconUrl)&&(0,o.jsx)(t.ButtonImage,{src:e.iconUrl,style:{marginRight:"8px"}}),(0,o.jsx)(c.OptionTitle,{children:e.title}),(null==n?void 0:n.value)===e.value?(0,o.jsx)(p,{icon:"CheckIcon"}):(0,o.jsx)(p,{children:(0,o.jsx)(o.Fragment,{})})]},i))]},i))]})};let u=(0,a.default)(s.Box)`
  width: ${({width:e,fitContent:t})=>e||(t?"fit-content":"100%")};
  max-height: ${({height:e})=>null!=e?e:"fit-content"};
  top: ${({theme:e})=>`calc(100% + ${e.px.xsmall})`};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: ${({theme:e})=>e.palette.background4};
  color: ${({theme:e})=>e.palette.textDefault};
  z-index: 10;
  overflow-y: auto;
  border: 1px solid ${({theme:e})=>e.palette.inputBackground};
  position: ${({absolutePosition:e})=>e?"absolute":"initial"};
`,d=(0,a.default)(s.Box)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border: ${({isFocused:e,theme:t})=>e?`1px solid ${t.palette.borderNeutral}`:"1px solid transparent"};
  background: transparent;
  outline: none;
  cursor: pointer;
  user-select: none;
  color: ${({theme:e})=>e.palette.textDefault};
  padding: ${({theme:e})=>`${e.px.small} ${e.px.small}`};
  &:hover {
    background: ${({theme:e})=>e.palette.background2};
  }
`,f=(0,a.default)(s.Box)`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  background: transparent;
  border: transparent;
  color: ${({theme:e})=>e.palette.textHelp};
  padding: ${({theme:e})=>`${e.px.small} ${e.px.small}`};
`,p=(0,a.default)(l.Icon)`
  margin-left: auto;
`,h=(0,a.default)(s.Box)`
  border-top: 1px solid ${({theme:e})=>e.palette.inputBackground};
`;t.ButtonImage=a.default.img`
  height: ${({theme:e})=>e.iconSize.xlarge};
  width: ${({theme:e})=>e.iconSize.xlarge};
  border-radius: ${({theme:e})=>e.radius.small};
`},2821:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTooltip=t.OptionTitle=void 0,t.isElementOverflown=d;let r=n(4848),a=n(2015),l=n(5963),s=n(532),c=o(n(2770));t.OptionTitle=e=>{var{children:n}=e,o=i(e,["children"]);return(0,r.jsx)(u,Object.assign({ref:(0,t.useTooltip)(n)},o,{children:(0,r.jsx)("div",{children:n})}))};let u=(0,c.default)(l.Text)`
  ${s.Mixins.textOverflow};
  margin-left: ${({theme:e})=>e.px.xsmall};
`;function d(e){return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth}t.useTooltip=e=>(0,a.useCallback)(t=>{t&&e&&d(t)&&(t.title=e)},[])},3136:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Icon=void 0;let r=n(4848),a=n(2015),l=o(n(2770)),s=n(2094),c=n(532),u=n(9438),d=(0,a.forwardRef)((e,t)=>{var{tabIndex:n,icon:o,children:a,size:l="base",containerSize:s,"data-testid":c}=e,u=i(e,["tabIndex","icon","children","size","containerSize","data-testid"]);return(0,r.jsx)(p,Object.assign({},u,{iconSize:l,containerSize:s||l,justifyContent:"center",alignItems:"center","data-testid":c,tabIndex:n,ref:t,children:o?(0,r.jsx)(f,Object.assign({ariaLabel:u["aria-label"],icon:o},u)):a}))});d.displayName="Icon",t.Icon=(0,l.default)(d)``;let f=(0,l.default)(e=>{var{icon:t,ariaLabel:n}=e,o=i(e,["icon","ariaLabel"]);let a=c.IconSet[t];return(0,r.jsx)(a,Object.assign({role:"img","aria-label":n},o))})``,p=(0,l.default)(s.Box)`
  /**
   * 1. Initialize local variables with reasonable defaults
   */
  --px-default: ${({theme:e})=>e.iconSize.base};

  /**
   * 2. Inject variants -- ? What are Variants
   */
  ${(0,c.getVariantCSS)(u.variants,u.Variant.containerSize)}
  ${(0,c.getVariantCSS)(u.variants,u.Variant.iconSize)}

  width: var(--px-container, var(--px-default));
  height: var(--px-container, var(--px-default));

  /* SVG Asset */

  & > *,
  ${f} {
    display: block;
    width: var(--px-icon, var(--px-default));
    height: var(--px-icon, var(--px-default));
    border-radius: inherit;
  }
`},9438:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.variants=t.Variant=void 0;let i=n(2770);t.Variant={iconSize:"iconSize",containerSize:"containerSize"},t.variants={[t.Variant.iconSize]:{xsmall:i.css`
      --px-icon: ${({theme:e})=>e.iconSize.xsmall};
    `,small:i.css`
      --px-icon: ${({theme:e})=>e.iconSize.small};
    `,base:i.css`
      --px-icon: ${({theme:e})=>e.iconSize.base};
    `,large:i.css`
      --px-icon: ${({theme:e})=>e.iconSize.large};
    `,xlarge:i.css`
      --px-icon: ${({theme:e})=>e.iconSize.xlarge};
    `,xxlarge:i.css`
      --px-icon: ${({theme:e})=>e.iconSize.xxlarge};
    `,xxxlarge:i.css`
      --px-icon: ${({theme:e})=>e.iconSize.xxxlarge};
    `},[t.Variant.containerSize]:{xsmall:i.css`
      --px-container: ${({theme:e})=>e.iconSize.xsmall};
    `,small:i.css`
      --px-container: ${({theme:e})=>e.iconSize.small};
    `,base:i.css`
      --px-container: ${({theme:e})=>e.iconSize.base};
    `,large:i.css`
      --px-container: ${({theme:e})=>e.iconSize.large};
    `,xlarge:i.css`
      --px-container: ${({theme:e})=>e.iconSize.xlarge};
    `,xxlarge:i.css`
      --px-container: ${({theme:e})=>e.iconSize.xxlarge};
    `,xxxlarge:i.css`
      --px-container: ${({theme:e})=>e.iconSize.xxxlarge};
    `}}},5917:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(3136),t)},2953:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.BellFilledIcon=void 0;let o=n(4848);t.BellFilledIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 2C11.2296 2 10.5845 2.58379 10.5078 3.35041C10.4952 3.47677 10.4057 3.58157 10.2846 3.61971C8.06554 4.31851 6.42238 6.33796 6.30033 8.77893L6.12382 12.3091C6.09936 12.7982 5.81331 13.2362 5.3753 13.4552L4.60739 13.8392C4.14761 14.0691 3.85718 14.539 3.85718 15.0531V16.25C3.85718 16.6248 4.16098 16.9286 4.53575 16.9286H19.4643C19.8391 16.9286 20.1429 16.6248 20.1429 16.25V15.0531C20.1429 14.539 19.8525 14.0691 19.3927 13.8392L18.6247 13.4552C18.1867 13.2362 17.9006 12.7982 17.8762 12.3091L17.6997 8.77893C17.5776 6.33796 15.9344 4.31851 13.7154 3.61972C13.5942 3.58157 13.5048 3.47678 13.4922 3.35041C13.4155 2.5838 12.7704 2 12 2Z",fill:t}),(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.28571 18.2857C9.28571 19.7848 10.5009 21 12 21C13.4991 21 14.7143 19.7848 14.7143 18.2857L9.28571 18.2857Z",fill:t})]}))}},2665:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.BellIcon=void 0;let o=n(4848);t.BellIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.47306 1.22943C6.5193 1.22943 5.87291 1.98399 5.65371 2.72697C5.65207 2.72932 5.64921 2.73303 5.64485 2.73756C5.6392 2.74342 5.63264 2.74896 5.62599 2.75355C5.61926 2.75819 5.61452 2.7604 5.613 2.76102L5.61265 2.76117C5.05088 2.99251 4.39193 3.36022 3.87697 4.03357C3.35815 4.71196 3.01949 5.65571 3.01945 6.97749L5.65371 2.72697L3.01945 6.97776C3.01866 8.30165 2.87871 9.0313 2.67091 9.53439C2.48879 9.97531 2.24889 10.2658 1.912 10.6738L1.91185 10.674C1.86263 10.7336 1.81135 10.7957 1.75787 10.8612C1.14923 11.606 1.72729 12.6419 2.65986 12.6419H5.09019C5.21191 12.98 5.40726 13.2906 5.66618 13.5495C6.12827 14.0116 6.75499 14.2712 7.40848 14.2712C8.06197 14.2712 8.6887 14.0116 9.15078 13.5495C9.40971 13.2906 9.60505 12.98 9.72678 12.6419H12.2894C13.2234 12.6419 13.792 11.6008 13.1884 10.8613L13.1883 10.8612C13.1348 10.7957 13.0835 10.7336 13.0342 10.674C12.6973 10.2659 12.4574 9.9754 12.2755 9.53451C12.0678 9.03147 11.9282 8.30182 11.9282 6.97776C11.9282 5.65688 11.5891 4.71299 11.0703 4.03433C10.5553 3.36075 9.89652 2.99234 9.33499 2.76115L9.33467 2.76102C9.33409 2.76079 9.32982 2.75888 9.32313 2.75424C9.31655 2.74967 9.30981 2.74394 9.30382 2.7377C9.29875 2.73241 9.29545 2.72803 9.29363 2.72531C9.07264 1.98378 8.42691 1.22943 7.47306 1.22943ZM8.68654 12.6419H6.13042C6.1876 12.7295 6.25403 12.8115 6.3291 12.8866C6.61537 13.1729 7.00363 13.3337 7.40848 13.3337C7.81333 13.3337 8.2016 13.1729 8.48787 12.8866C8.56293 12.8115 8.62937 12.7295 8.68654 12.6419ZM6.55145 2.99716C6.69571 2.50085 7.07121 2.16693 7.47306 2.16693C7.87492 2.16693 8.2505 2.50061 8.3966 2.99785L8.39695 2.99904C8.48499 3.29575 8.72843 3.52538 8.97809 3.62806C9.45625 3.82492 9.94894 4.11119 10.3255 4.60373C10.6982 5.09119 10.9907 5.82486 10.9907 6.97776C10.9907 8.35506 11.1337 9.2255 11.4089 9.89217C11.6483 10.4723 11.9823 10.8749 12.3167 11.278C12.3653 11.3366 12.4139 11.3951 12.4622 11.4542C12.5016 11.5025 12.5046 11.5552 12.4793 11.605C12.4553 11.6524 12.3996 11.7044 12.2894 11.7044H2.65986C2.54604 11.7044 2.48955 11.6509 2.46588 11.6045C2.44119 11.5562 2.44325 11.504 2.4838 11.4544L2.48383 11.4544C2.53215 11.3952 2.58075 11.3366 2.62934 11.2781L2.62946 11.2779C2.96389 10.8748 3.29785 10.4723 3.5374 9.89229C3.81273 9.22571 3.95615 8.35533 3.95695 6.97803V6.97776C3.95695 5.82341 4.24928 5.08999 4.62165 4.60309C4.99792 4.1111 5.49044 3.82537 5.96963 3.62805C6.21661 3.52645 6.46257 3.30002 6.55111 2.99833L6.55145 2.99716Z",fill:t,role:"img"})}))}},5090:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.BlockedIcon=void 0;let o=n(4848);t.BlockedIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.99985 1.6665C5.3972 1.6665 1.66602 5.39769 1.66602 10.0003C1.66602 14.6029 5.3972 18.3342 9.99985 18.3342C14.6025 18.3342 18.3337 14.603 18.3337 10.0003C18.3337 5.39769 14.6025 1.6665 9.99985 1.6665ZM3.94666 10.0003C3.94666 6.65725 6.65677 3.94714 9.99985 3.94714C11.1976 3.94714 12.314 4.295 13.2537 4.89519L4.89471 13.2542C4.29451 12.3145 3.94666 11.198 3.94666 10.0003ZM6.40896 14.8739C7.41352 15.6153 8.65551 16.0535 9.99985 16.0535C13.3429 16.0535 16.053 13.3434 16.053 10.0003C16.053 8.656 15.6148 7.41401 14.8734 6.40945L6.40896 14.8739Z",role:"img",fill:t})}))}},6049:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.BookmarkFilled=void 0;let o=n(4848);t.BookmarkFilled=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.80005 1.17578C2.52391 1.17578 2.30005 1.39964 2.30005 1.67578V10.4758C2.30005 10.6669 2.40904 10.8414 2.58086 10.9252C2.75267 11.009 2.95723 10.9875 3.10787 10.8698L5.84614 8.73052C5.93658 8.65986 6.06352 8.65986 6.15396 8.73052L8.89223 10.8698C9.04287 10.9875 9.24742 11.009 9.41924 10.9252C9.59105 10.8414 9.70005 10.6669 9.70005 10.4758V1.67578C9.70005 1.39964 9.47619 1.17578 9.20005 1.17578H2.80005Z",fill:t})}))}},7463:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.BookmarkOutlined=void 0;let o=n(4848);t.BookmarkOutlined=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.29999 1.67578C2.29999 1.39964 2.52385 1.17578 2.79999 1.17578H9.19999C9.47613 1.17578 9.69999 1.39964 9.69999 1.67578V10.4758C9.69999 10.6669 9.59099 10.8414 9.41918 10.9252C9.24736 11.009 9.04281 10.9875 8.89217 10.8698L6.1539 8.73052C6.06346 8.65986 5.93652 8.65986 5.84608 8.73052L3.10781 10.8698C2.95717 10.9875 2.75261 11.009 2.5808 10.9252C2.40898 10.8414 2.29999 10.6669 2.29999 10.4758V1.67578ZM3.29999 2.17578V9.45066L5.23043 7.9425C5.68265 7.58921 6.31733 7.5892 6.76954 7.9425L8.69999 9.45066V2.17578H3.29999Z",fill:t})}))}},2353:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.BrokenLinkIcon=void 0;let o=n(4848);t.BrokenLinkIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:[(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.3335 3.7002C6.05735 3.7002 5.8335 3.92405 5.8335 4.2002V27.8002C5.8335 28.0763 6.05735 28.3002 6.3335 28.3002H25.6668C25.943 28.3002 26.1668 28.0763 26.1668 27.8002V12.2335H18.1335C17.8574 12.2335 17.6335 12.0097 17.6335 11.7335V3.7002H6.3335ZM18.6335 4.4073L25.4597 11.2335H18.6335V4.4073ZM4.8335 4.2002C4.8335 3.37177 5.50507 2.7002 6.3335 2.7002H18.1335C18.2661 2.7002 18.3933 2.75287 18.487 2.84664L27.0204 11.38C27.1141 11.4737 27.1668 11.6009 27.1668 11.7335V27.8002C27.1668 28.6286 26.4953 29.3002 25.6668 29.3002H6.3335C5.50507 29.3002 4.8335 28.6286 4.8335 27.8002V4.2002Z",fill:t}),(0,o.jsx)("path",{d:"M14.248 21.9084V21.8409C14.2528 21.4006 14.2966 21.0502 14.3794 20.7898C14.4647 20.5294 14.5854 20.3187 14.7417 20.1577C14.8979 19.9967 15.0861 19.8499 15.3063 19.7173C15.4483 19.6274 15.5762 19.5268 15.6898 19.4155C15.8034 19.3042 15.8934 19.1764 15.9597 19.032C16.026 18.8875 16.0591 18.7277 16.0591 18.5526C16.0591 18.3419 16.0094 18.1596 15.91 18.0057C15.8105 17.8518 15.678 17.7334 15.5123 17.6506C15.3489 17.5653 15.1666 17.5227 14.9654 17.5227C14.7831 17.5227 14.6091 17.5606 14.4434 17.6364C14.2776 17.7121 14.1403 17.8305 14.0314 17.9915C13.9225 18.1501 13.8598 18.3549 13.8432 18.6058H12.7637C12.7802 18.1797 12.888 17.8198 13.0868 17.5263C13.2857 17.2304 13.5485 17.0066 13.8752 16.8551C14.2042 16.7036 14.5676 16.6278 14.9654 16.6278C15.401 16.6278 15.7821 16.7095 16.1088 16.8729C16.4355 17.0339 16.6889 17.2599 16.8688 17.5511C17.0511 17.84 17.1422 18.1773 17.1422 18.5632C17.1422 18.8284 17.1008 19.0675 17.0179 19.2805C16.9351 19.4912 16.8167 19.6795 16.6628 19.8452C16.5113 20.0109 16.329 20.1577 16.1159 20.2855C15.9147 20.411 15.7514 20.5412 15.6259 20.6761C15.5028 20.8111 15.4128 20.9709 15.356 21.1555C15.2992 21.3402 15.2684 21.5687 15.2637 21.8409V21.9084H14.248ZM14.7843 24.0675C14.5901 24.0675 14.4232 23.9988 14.2836 23.8615C14.1439 23.7218 14.074 23.5537 14.074 23.3572C14.074 23.1631 14.1439 22.9974 14.2836 22.8601C14.4232 22.7204 14.5901 22.6506 14.7843 22.6506C14.976 22.6506 15.1417 22.7204 15.2814 22.8601C15.4235 22.9974 15.4945 23.1631 15.4945 23.3572C15.4945 23.4875 15.4614 23.607 15.3951 23.7159C15.3311 23.8224 15.2459 23.9077 15.1394 23.9716C15.0328 24.0355 14.9145 24.0675 14.7843 24.0675Z",fill:t})]}))}},3551:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronDownIcon=void 0;let o=n(4848);t.ChevronDownIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M5.05282 9.88707C5.33612 9.58489 5.81075 9.56958 6.11293 9.85287L12 15.372L17.887 9.85287C18.1892 9.56958 18.6638 9.58489 18.9471 9.88707C19.2304 10.1893 19.2151 10.6639 18.9129 10.9472L12.5129 16.9472C12.2244 17.2176 11.7755 17.2176 11.487 16.9472L5.08702 10.9472C4.78484 10.6639 4.76952 10.1893 5.05282 9.88707Z",fill:t},n))})}},1364:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronLeftIcon=void 0;let o=n(4848);t.ChevronLeftIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M14.1127 5.05272C14.4149 5.33601 14.4302 5.81064 14.1469 6.11282L8.62784 11.9999L14.1469 17.8869C14.4302 18.1891 14.4149 18.6637 14.1127 18.947C13.8106 19.2303 13.3359 19.215 13.0526 18.9128L7.05264 12.5128C6.78218 12.2243 6.78218 11.7754 7.05264 11.4869L13.0526 5.08691C13.3359 4.78473 13.8106 4.76942 14.1127 5.05272Z",fill:t},n))})}},9431:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronRightIcon=void 0;let o=n(4848);t.ChevronRightIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M9.88762 5.05256C10.1898 4.76926 10.6644 4.78457 10.9477 5.08676L16.9477 11.4868C17.2182 11.7753 17.2182 12.2242 16.9477 12.5127L10.9477 18.9127C10.6644 19.2149 10.1898 19.2302 9.88762 18.9469C9.58543 18.6636 9.57012 18.1889 9.85342 17.8868L15.3725 11.9997L9.85342 6.11267C9.57012 5.81049 9.58544 5.33586 9.88762 5.05256Z",fill:t},n))})}},8044:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.ChevronUpIcon=void 0;let o=n(4848);t.ChevronUpIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,o.jsx)("path",Object.assign({fillRule:"evenodd",clipRule:"evenodd",d:"M5.05285 14.1129C5.33615 14.4151 5.81078 14.4304 6.11296 14.1471L12 8.62802L17.887 14.1471C18.1892 14.4304 18.6639 14.4151 18.9472 14.1129C19.2305 13.8107 19.2151 13.3361 18.913 13.0528L12.513 7.05282C12.2245 6.78236 11.7755 6.78236 11.4871 7.05282L5.08705 13.0528C4.78487 13.3361 4.76956 13.8107 5.05285 14.1129Z",fill:t},n))})}},5482:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.EnterpriseGlobeIcon=void 0;let o=n(4848);t.EnterpriseGlobeIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M21.6211 7.80002C20.3905 4.99598 17.9682 2.82878 14.9983 1.94153C15.9266 3.39315 16.5775 5.49525 16.9329 7.80002H21.6211ZM22.1656 14.625C22.383 13.7855 22.5 12.9067 22.5 12C22.5 11.0933 22.383 10.2145 22.1656 9.37502H17.1256C17.2069 10.2439 17.25 11.1254 17.25 12C17.25 12.8747 17.2069 13.7561 17.1256 14.625H22.1656ZM6.75002 12C6.75002 11.1254 6.79307 10.2439 6.87444 9.37502H1.83442C1.61707 10.2145 1.5 11.0933 1.5 12C1.5 12.9067 1.61707 13.7855 1.83442 14.625H6.87444C6.79307 13.7561 6.75002 12.8747 6.75002 12ZM15.675 12C15.675 11.0844 15.6252 10.2098 15.5427 9.37502H8.45731C8.37489 10.2098 8.32502 11.0844 8.32502 12C8.32502 12.9156 8.37489 13.7903 8.45731 14.625H15.5427C15.6252 13.7903 15.675 12.9156 15.675 12ZM15.34 7.80002C14.7111 4.0158 13.2983 1.5 12 1.5C10.7017 1.5 9.28892 4.0158 8.65997 7.80002H15.34ZM8.65997 16.2C9.28892 19.9842 10.7022 22.5 12 22.5C13.2978 22.5 14.7111 19.9842 15.34 16.2H8.65997ZM7.06712 7.80002C7.42254 5.49525 8.07354 3.39315 9.00174 1.94153C6.0318 2.82878 3.60945 4.99598 2.37885 7.80002H7.06712ZM16.9329 16.2C16.5775 18.5048 15.9266 20.6069 14.9983 22.0584C17.9682 21.1712 20.3905 19.0046 21.6211 16.2H16.9329ZM2.37885 16.2C3.60945 19.004 6.0318 21.1712 9.00174 22.0584C8.07354 20.6069 7.42254 18.5048 7.06712 16.2H2.37885Z",fill:t})}))}},5931:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExclamationCircledFilledIcon=void 0;let i=n(4848);t.ExclamationCircledFilledIcon=e=>(0,i.jsxs)("svg",Object.assign({width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:[(0,i.jsx)("path",{d:"M7.99988 15.3317C11.7729 15.3317 14.8316 12.2731 14.8316 8.50007C14.8316 4.72704 11.7729 1.6684 7.99988 1.6684C4.22686 1.6684 1.16821 4.72704 1.16821 8.50007C1.16821 12.2731 4.22686 15.3317 7.99988 15.3317Z",fill:"red"}),(0,i.jsx)("mask",{id:"path-2-inside-1_6_262033",fill:"white",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.99993 4.37384C7.57525 4.37384 7.23564 4.72676 7.25196 5.15113L7.42296 9.59706C7.43489 9.90708 7.68968 10.1523 7.99993 10.1523C8.31019 10.1523 8.56498 9.90708 8.5769 9.59706L8.7479 5.15113C8.76422 4.72676 8.42461 4.37384 7.99993 4.37384ZM7.99993 12.6406C8.46022 12.6406 8.83335 12.2675 8.83335 11.8072C8.83335 11.3469 8.46022 10.9738 7.99993 10.9738C7.53964 10.9738 7.1665 11.3469 7.1665 11.8072C7.1665 12.2675 7.53964 12.6406 7.99993 12.6406Z"})}),(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.99993 4.37384C7.57525 4.37384 7.23564 4.72676 7.25196 5.15113L7.42296 9.59706C7.43489 9.90708 7.68968 10.1523 7.99993 10.1523C8.31019 10.1523 8.56498 9.90708 8.5769 9.59706L8.7479 5.15113C8.76422 4.72676 8.42461 4.37384 7.99993 4.37384ZM7.99993 12.6406C8.46022 12.6406 8.83335 12.2675 8.83335 11.8072C8.83335 11.3469 8.46022 10.9738 7.99993 10.9738C7.53964 10.9738 7.1665 11.3469 7.1665 11.8072C7.1665 12.2675 7.53964 12.6406 7.99993 12.6406Z",fill:"white"}),(0,i.jsx)("path",{d:"M7.25196 5.15113L5.64874 5.21279L5.64874 5.21279L7.25196 5.15113ZM7.42296 9.59706L9.02618 9.5354L9.02618 9.5354L7.42296 9.59706ZM8.5769 9.59706L10.1801 9.65872L8.5769 9.59706ZM8.7479 5.15113L10.3511 5.21279L10.3511 5.21279L8.7479 5.15113ZM8.85519 5.08947C8.87385 5.5747 8.48553 5.97825 7.99993 5.97825V2.76943C6.66498 2.76943 5.59744 3.87882 5.64874 5.21279L8.85519 5.08947ZM9.02618 9.5354L8.85519 5.08947L5.64874 5.21279L5.81974 9.65872L9.02618 9.5354ZM7.99993 8.54786C8.55177 8.54786 9.00498 8.98396 9.02618 9.5354L5.81974 9.65872C5.8648 10.8302 6.82758 11.7567 7.99993 11.7567V8.54786ZM6.97368 9.5354C6.99489 8.98396 7.44809 8.54786 7.99993 8.54786V11.7567C9.17228 11.7567 10.1351 10.8302 10.1801 9.65872L6.97368 9.5354ZM7.14468 5.08947L6.97368 9.5354L10.1801 9.65872L10.3511 5.21279L7.14468 5.08947ZM7.99993 5.97825C7.51434 5.97825 7.12602 5.5747 7.14468 5.08947L10.3511 5.21279C10.4024 3.87882 9.33489 2.76943 7.99993 2.76943V5.97825ZM7.22895 11.8072C7.22895 11.3814 7.57413 11.0362 7.99993 11.0362V14.245C9.34631 14.245 10.4378 13.1536 10.4378 11.8072H7.22895ZM7.99993 12.5782C7.57413 12.5782 7.22895 12.233 7.22895 11.8072H10.4378C10.4378 10.4608 9.34631 9.36937 7.99993 9.36937V12.5782ZM8.77091 11.8072C8.77091 12.233 8.42573 12.5782 7.99993 12.5782V9.36937C6.65355 9.36937 5.5621 10.4608 5.5621 11.8072H8.77091ZM7.99993 11.0362C8.42573 11.0362 8.77091 11.3814 8.77091 11.8072H5.5621C5.5621 13.1536 6.65355 14.245 7.99993 14.245V11.0362Z",fill:"white",mask:"url(#path-2-inside-1_6_262033)"})]}))},9687:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.FallbackGlobeIcon=void 0;let o=n(4848);t.FallbackGlobeIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M14.4141 5.19998C13.5937 3.33062 11.9788 1.88582 9.99886 1.29432C10.6177 2.26207 11.0517 3.66347 11.2886 5.19998H14.4141ZM14.7771 9.74998C14.922 9.19033 15 8.60443 15 7.99998C15 7.39553 14.922 6.80963 14.7771 6.24998H11.4171C11.4713 6.82923 11.5 7.41688 11.5 7.99998C11.5 8.58308 11.4713 9.17073 11.4171 9.74998H14.7771ZM4.50001 7.99998C4.50001 7.41688 4.52871 6.82923 4.58296 6.24998H1.22295C1.07805 6.80963 1 7.39553 1 7.99998C1 8.60443 1.07805 9.19033 1.22295 9.74998H4.58296C4.52871 9.17073 4.50001 8.58308 4.50001 7.99998ZM10.45 7.99998C10.45 7.38958 10.4168 6.80648 10.3618 6.24998H5.63821C5.58326 6.80648 5.55001 7.38958 5.55001 7.99998C5.55001 8.61038 5.58326 9.19348 5.63821 9.74998H10.3618C10.4168 9.19348 10.45 8.61038 10.45 7.99998ZM10.2267 5.19998C9.80741 2.67717 8.86556 0.999969 8.00001 0.999969C7.13446 0.999969 6.19261 2.67717 5.77331 5.19998H10.2267ZM5.77331 10.8C6.19261 13.3228 7.13481 15 8.00001 15C8.86521 15 9.80741 13.3228 10.2267 10.8H5.77331ZM4.71141 5.19998C4.94836 3.66347 5.38236 2.26207 6.00116 1.29432C4.0212 1.88582 2.4063 3.33062 1.5859 5.19998H4.71141ZM11.2886 10.8C11.0517 12.3365 10.6177 13.7379 9.99886 14.7056C11.9788 14.1141 13.5937 12.6697 14.4141 10.8H11.2886ZM1.5859 10.8C2.4063 12.6693 4.0212 14.1141 6.00116 14.7056C5.38236 13.7379 4.94836 12.3365 4.71141 10.8H1.5859Z",fill:t,fillRule:"evenodd",clipRule:"evenodd"})}))}},7474:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.FilledCircleIcon=void 0;let o=n(4848);t.FilledCircleIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("g",{id:".Slot",children:(0,o.jsx)("circle",{id:"Ellipse 1",cx:"8",cy:"8",r:"8",fill:t})})}))}},8424:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.FilterIcon=void 0;let o=n(4848);t.FilterIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M4 6.5C4 6.36739 4.05268 6.24021 4.14645 6.14645C4.24021 6.05268 4.36739 6 4.5 6H7.5C7.63261 6 7.75979 6.05268 7.85355 6.14645C7.94732 6.24021 8 6.36739 8 6.5C8 6.63261 7.94732 6.75979 7.85355 6.85355C7.75979 6.94732 7.63261 7 7.5 7H4.5C4.36739 7 4.24021 6.94732 4.14645 6.85355C4.05268 6.75979 4 6.63261 4 6.5ZM2 3.5C2 3.36739 2.05268 3.24021 2.14645 3.14645C2.24021 3.05268 2.36739 3 2.5 3H9.5C9.63261 3 9.75979 3.05268 9.85355 3.14645C9.94732 3.24021 10 3.36739 10 3.5C10 3.63261 9.94732 3.75979 9.85355 3.85355C9.75979 3.94732 9.63261 4 9.5 4H2.5C2.36739 4 2.24021 3.94732 2.14645 3.85355C2.05268 3.75979 2 3.63261 2 3.5ZM0 0.5C0 0.367392 0.0526785 0.240215 0.146447 0.146447C0.240215 0.0526785 0.367392 0 0.5 0H11.5C11.6326 0 11.7598 0.0526785 11.8536 0.146447C11.9473 0.240215 12 0.367392 12 0.5C12 0.632608 11.9473 0.759785 11.8536 0.853553C11.7598 0.947321 11.6326 1 11.5 1H0.5C0.367392 1 0.240215 0.947321 0.146447 0.853553C0.0526785 0.759785 0 0.632608 0 0.5Z",fill:t})}))}},1387:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.FloppyDiskIcon=void 0;let o=n(4848);t.FloppyDiskIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M1.875 2.1875C1.875 2.15298 1.90298 2.125 1.9375 2.125H8.23039C8.24697 2.125 8.26287 2.13158 8.27459 2.14331L9.98169 3.85041C9.99341 3.86213 10 3.87803 10 3.89461V10.1875C10 10.222 9.97202 10.25 9.9375 10.25H1.9375C1.90298 10.25 1.875 10.222 1.875 10.1875V2.1875ZM1.9375 1.25C1.41973 1.25 1 1.66973 1 2.1875V10.1875C1 10.7053 1.41973 11.125 1.9375 11.125H9.9375C10.4553 11.125 10.875 10.7053 10.875 10.1875V3.89461C10.875 3.64597 10.7762 3.40751 10.6004 3.23169L8.89331 1.52459C8.71749 1.34877 8.47903 1.25 8.23039 1.25H1.9375ZM2.84924 3.4081C2.84924 3.23754 2.98751 3.09927 3.15807 3.09927H7.4816C7.65215 3.09927 7.79042 3.23754 7.79042 3.4081V4.64339C7.79042 4.81395 7.65215 4.95221 7.4816 4.95221H3.15807C2.98751 4.95221 2.84924 4.81395 2.84924 4.64339V3.4081ZM4.5368 6.63977C4.82638 6.35019 5.21913 6.18751 5.62865 6.18751C6.03818 6.18751 6.43093 6.35019 6.72051 6.63977C7.01009 6.92935 7.17277 7.3221 7.17277 7.73163C7.17277 8.14115 7.01009 8.5339 6.72051 8.82348C6.43093 9.11306 6.03818 9.27574 5.62865 9.27574C5.21913 9.27574 4.82638 9.11306 4.5368 8.82348C4.24722 8.5339 4.08454 8.14115 4.08454 7.73163C4.08454 7.3221 4.24722 6.92935 4.5368 6.63977Z",fill:t,role:"img"})}))}},9173:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.FragmentsIcon=void 0;let o=n(4848);t.FragmentsIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M8.80001 4.80002H4.80001C3.91761 4.80002 3.20001 5.51762 3.20001 6.40002V10.4C3.20001 11.2824 3.91761 12 4.80001 12H8.80001C9.68241 12 10.4 11.2824 10.4 10.4V6.40002C10.4 5.51762 9.68241 4.80002 8.80001 4.80002ZM20.3592 6.46882L17.5312 3.64002C16.908 3.01602 15.892 3.01602 15.2688 3.64002L12.4408 6.46882C11.8168 7.09282 11.8168 8.10722 12.4408 8.73122L15.2688 11.56C15.5808 11.872 15.9904 12.028 16.4 12.028C16.8096 12.028 17.2192 11.872 17.5312 11.56L20.3592 8.73122C20.9832 8.10722 20.9832 7.09282 20.3592 6.46882ZM8.80001 13.6H4.80001C3.91761 13.6 3.20001 14.3176 3.20001 15.2V19.2C3.20001 20.0824 3.91761 20.8 4.80001 20.8H8.80001C9.68241 20.8 10.4 20.0824 10.4 19.2V15.2C10.4 14.3176 9.68241 13.6 8.80001 13.6ZM17.6 13.6H13.6C12.7176 13.6 12 14.3176 12 15.2V19.2C12 20.0824 12.7176 20.8 13.6 20.8H17.6C18.4824 20.8 19.2 20.0824 19.2 19.2V15.2C19.2 14.3176 18.4824 13.6 17.6 13.6Z",fill:t})}))}},8387:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.LightBulbFilledIcon=void 0;let o=n(4848);t.LightBulbFilledIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:[(0,o.jsx)("path",{d:"M1.83 1.31008C2.24409 0.891667 2.73768 0.560307 3.28174 0.335504C3.82581 0.110701 4.40934 -0.00300333 4.998 0.00108291C6.18628 -0.00310785 7.32905 0.457733 8.182 1.28508C8.59881 1.68719 8.93046 2.16903 9.15723 2.70194C9.384 3.23485 9.50125 3.80793 9.502 4.38708C9.502 5.68008 8.917 6.83008 7.883 7.82508L7.577 9.00008H2.466L2.236 8.03708C1.154 6.90708 0.556 5.81908 0.5 4.58208V4.54408C0.54 3.24808 1.033 2.12108 1.831 1.31108L1.83 1.31008Z",fill:t}),(0,o.jsx)("path",{d:"M2.7041 10L2.9371 10.978L2.9451 11C3.0451 11.297 3.2371 11.544 3.4791 11.717C3.7301 11.897 4.0371 11.999 4.3611 11.999H4.3631L5.7461 11.995L5.7671 11.993C6.07587 11.9669 6.36913 11.8465 6.6071 11.648C6.8381 11.454 7.0131 11.188 7.0871 10.874L7.3161 10H2.7041V10Z",fill:t})]}))}},7901:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.LightBulbOutlinedIcon=void 0;let o=n(4848);t.LightBulbOutlinedIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M4.99766 0.00100149C3.76866 0.00100149 2.64766 0.482002 1.82966 1.311C1.03166 2.121 0.539657 3.248 0.499657 4.544L0.498657 4.563V4.583C0.555657 5.819 1.15366 6.907 2.23566 8.037L2.93766 10.978L2.94466 11C3.04466 11.297 3.23666 11.544 3.47866 11.717C3.72966 11.897 4.03666 11.999 4.36166 11.999L5.74566 11.995L5.76666 11.993C6.07542 11.9669 6.36869 11.8465 6.60666 11.648C6.83766 11.454 7.01266 11.188 7.08666 10.874L7.88266 7.824C8.91666 6.83 9.50066 5.68 9.50066 4.387C9.49991 3.80785 9.38266 3.23477 9.15589 2.70186C8.92912 2.16895 8.59746 1.68711 8.18066 1.285C7.32796 0.457894 6.18559 -0.00292788 4.99766 0.00100149ZM2.54266 2.013C2.86344 1.68871 3.24596 1.43198 3.66762 1.258C4.08928 1.08401 4.54153 0.996283 4.99766 1C5.92514 0.995784 6.81744 1.35471 7.48366 2C7.80471 2.30904 8.06023 2.67957 8.23496 3.08951C8.40969 3.49945 8.50005 3.94038 8.50066 4.386C8.50066 5.377 8.04766 6.312 7.09666 7.191L6.98866 7.291L6.54266 9H3.49366L3.14466 7.536L3.04766 7.436C1.99966 6.372 1.54766 5.48 1.49866 4.557C1.53666 3.509 1.93266 2.632 2.54266 2.014V2.013ZM3.73266 10H6.28266L6.11766 10.627L6.11466 10.64C6.09211 10.7342 6.03944 10.8185 5.96466 10.88C5.88873 10.9435 5.79595 10.9834 5.69766 10.995L4.36066 11C4.25321 11.0003 4.14833 10.9671 4.06066 10.905C3.9877 10.8536 3.93139 10.782 3.89866 10.699L3.73166 10H3.73266Z",fill:t})}))}},264:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.LockedClosedFilledIcon=void 0;let o=n(4848);t.LockedClosedFilledIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M5.00003 4.63623C5.00003 3.76052 5.24222 3.10561 5.64327 2.67378C6.03938 2.24727 6.64585 1.97852 7.50143 1.97852C8.35748 1.97852 8.96309 2.24673 9.35827 2.6723C9.75841 3.10321 10 3.75729 10 4.63346V6.50021H11V4.63346C11 3.57917 10.7076 2.65578 10.0911 1.99183C9.46955 1.32254 8.57586 0.978516 7.50143 0.978516C6.42678 0.978516 5.53255 1.3235 4.91052 1.99328C4.29342 2.65775 4.00003 3.58169 4.00003 4.63623V6.50021H5.00003V4.63623ZM3 6.50021C2.72386 6.50021 2.5 6.72407 2.5 7.00021V13.0002C2.5 13.2764 2.72386 13.5002 3 13.5002H12C12.2761 13.5002 12.5 13.2764 12.5 13.0002V7.00021C12.5 6.72407 12.2761 6.50021 12 6.50021H3Z",fill:t,role:"img"})}))}},686:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.MinimizeIcon=void 0;let o=n(4848);t.MinimizeIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.16602 12C2.16602 11.7239 2.38987 11.5 2.66602 11.5H13.3327C13.6088 11.5 13.8327 11.7239 13.8327 12C13.8327 12.2761 13.6088 12.5 13.3327 12.5H2.66602C2.38987 12.5 2.16602 12.2761 2.16602 12Z",fill:t,role:"img"})}))}},245:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.OpenFinIcon=void 0;let o=n(4848);t.OpenFinIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M14.2685 5.73916C14.1785 5.64906 14.0817 5.56592 13.979 5.49047L13.9412 5.46429C13.9196 5.44919 13.8984 5.43358 13.8763 5.41898C13.8541 5.40438 13.8284 5.38878 13.8048 5.37418L13.7715 5.35354C13.7418 5.33592 13.7116 5.3193 13.6814 5.30319L13.6638 5.29363C13.3065 5.10618 12.9091 5.00807 12.5057 5.00768C11.8417 5.00715 11.2052 4.74291 10.7362 4.2731C10.2671 3.8033 10.004 3.16642 10.0046 2.50262C10.0065 1.49222 9.39933 0.580219 8.46634 0.191911C7.53335 -0.196397 6.45826 0.015466 5.74244 0.728701C5.02661 1.44194 4.81103 2.51607 5.19621 3.4502C5.5814 4.38433 6.4915 4.99447 7.5021 4.9961C8.16603 4.99664 8.80256 5.26088 9.27161 5.73068C9.74066 6.20049 10.0038 6.83736 10.0031 7.50117C10.0026 8.16497 9.7383 8.80137 9.2684 9.27032C8.7985 9.73928 8.1615 10.0024 7.49756 10.0017C6.83413 10.0022 6.19772 9.73894 5.72865 9.26987C5.25958 8.8008 4.99636 8.16447 4.99703 7.50117C4.99703 6.12155 3.87841 5.00315 2.49852 5.00315C1.11862 5.00315 0 6.12155 0 7.50117C0 8.88078 1.11862 9.99918 2.49852 9.99918C3.87841 9.99918 4.99703 11.1176 4.99703 12.4972C4.99703 13.8795 6.1178 15 7.50033 15C8.88287 15 10.0036 13.8795 10.0036 12.4972C10.0036 11.1176 11.1223 9.99918 12.5021 9.99918C12.9482 9.99948 13.3862 9.88022 13.7705 9.65383C13.8038 9.6342 13.8365 9.61356 13.8712 9.59241L13.8783 9.58788C13.9085 9.56775 13.9387 9.5466 13.9679 9.52546L13.981 9.5164C14.0072 9.49727 14.0314 9.47662 14.0591 9.45598L14.0812 9.43887C14.1054 9.41923 14.1286 9.39859 14.1522 9.37795L14.1779 9.3558C14.2081 9.32862 14.2378 9.30042 14.267 9.27123L14.2716 9.2672C14.3794 9.15887 14.4772 9.04091 14.5636 8.9148C14.5824 8.88761 14.6005 8.86009 14.618 8.83223C15.237 7.84584 15.092 6.56267 14.2685 5.73916Z",fill:t,role:"img"})}))}},7867:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.PageIcon=void 0;let o=n(4848);t.PageIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M11.9997 0.666992H1.99967C1.08051 0.666992 0.333008 1.41449 0.333008 2.33366V15.667C0.333008 16.5862 1.08051 17.3337 1.99967 17.3337H11.9997C12.9188 17.3337 13.6663 16.5862 13.6663 15.667V2.33366C13.6663 1.41449 12.9188 0.666992 11.9997 0.666992ZM7.41634 8.16699H3.24967C3.01967 8.16699 2.83301 7.98033 2.83301 7.75033V6.91699C2.83301 6.68699 3.01967 6.50033 3.24967 6.50033H7.41634C7.64634 6.50033 7.83301 6.68699 7.83301 6.91699V7.75033C7.83301 7.98033 7.64634 8.16699 7.41634 8.16699ZM10.7497 4.83366H3.24967C3.01967 4.83366 2.83301 4.64699 2.83301 4.41699V3.58366C2.83301 3.35366 3.01967 3.16699 3.24967 3.16699H10.7497C10.9797 3.16699 11.1663 3.35366 11.1663 3.58366V4.41699C11.1663 4.64699 10.9797 4.83366 10.7497 4.83366Z",fill:t})}))}},6224:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.RedDotIcon=void 0;let o=n(4848);t.RedDotIcon=e=>{var t=i(e,[]);return(0,o.jsx)("svg",Object.assign({width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t,{children:(0,o.jsx)("rect",{x:"0.5",y:"0.5",width:"7",height:"7",rx:"3.5",fill:"#C21313"})}))}},5598:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.StackIcon=void 0;let o=n(4848);t.StackIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M14.2178 3.00092C14.1504 3.00514 14.0839 3.01844 14.02 3.04047L3.51986 6.4287C3.36864 6.47743 3.23681 6.57291 3.14335 6.70138C3.04989 6.82986 2.99964 6.98469 2.99983 7.14356V15.754C2.99843 15.8534 3.01679 15.9521 3.05385 16.0443C3.09091 16.1366 3.14593 16.2205 3.21571 16.2913C3.2855 16.3621 3.36865 16.4183 3.46035 16.4566C3.55204 16.495 3.65045 16.5147 3.74984 16.5147C3.84924 16.5147 3.94764 16.495 4.03934 16.4566C4.13103 16.4183 4.21419 16.3621 4.28397 16.2913C4.35375 16.2205 4.40878 16.1366 4.44584 16.0443C4.4829 15.9521 4.50126 15.8534 4.49985 15.754V7.68849L14.48 4.46725C14.649 4.41529 14.7942 4.30532 14.89 4.15674C14.9858 4.00815 15.026 3.8305 15.0036 3.65514C14.9812 3.47977 14.8975 3.31797 14.7674 3.19827C14.6373 3.07857 14.4691 3.00868 14.2925 3.00092C14.2676 2.99967 14.2427 2.99967 14.2178 3.00092ZM17.2178 5.25095C17.1504 5.25517 17.0839 5.26848 17.0201 5.2905L6.5199 8.67874C6.36869 8.72746 6.23685 8.82294 6.14339 8.95142C6.04993 9.07989 5.99968 9.23472 5.99988 9.39359V18.0041C5.99847 18.1035 6.01683 18.2021 6.05389 18.2944C6.09095 18.3866 6.14597 18.4705 6.21576 18.5413C6.28554 18.6121 6.3687 18.6683 6.46039 18.7066C6.55209 18.745 6.65049 18.7648 6.74989 18.7648C6.84928 18.7648 6.94769 18.745 7.03938 18.7066C7.13108 18.6683 7.21423 18.6121 7.28402 18.5413C7.3538 18.4705 7.40882 18.3866 7.44588 18.2944C7.48294 18.2021 7.5013 18.1035 7.4999 18.0041V9.93852L17.48 6.71728C17.649 6.66533 17.7942 6.55535 17.89 6.40677C17.9858 6.25818 18.0261 6.08054 18.0036 5.90517C17.9812 5.72981 17.8976 5.568 17.7675 5.4483C17.6374 5.32861 17.4691 5.25871 17.2925 5.25095C17.2676 5.24971 17.2427 5.24971 17.2178 5.25095ZM20.193 7.50538C20.1344 7.50982 20.0758 7.52197 20.0186 7.54053L9.51848 10.9288C9.20948 11.0293 8.99992 11.3181 8.99992 11.6436V20.2541C8.99992 20.4979 9.11829 20.7262 9.3178 20.8664C9.44605 20.9572 9.59693 21.0041 9.74993 21.0041C9.83468 21.0041 9.92014 20.9894 10.0019 20.9602L20.502 17.2101C20.8006 17.1044 21.0001 16.8213 21.0001 16.504V8.25392C21.0001 8.01467 20.8853 7.78922 20.691 7.64747C20.5459 7.54172 20.3688 7.49205 20.193 7.50538Z",fill:t})}))}},1686:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.StorefrontIcon=void 0;let o=n(4848);t.StorefrontIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsx)("svg",Object.assign({width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n,{children:(0,o.jsx)("path",{d:"M5 3C4.448 3 4 3.448 4 4C4 4.552 4.448 5 5 5H19C19.552 5 20 4.552 20 4C20 3.448 19.552 3 19 3H5ZM4.61719 7C4.23819 7 3.89361 7.21373 3.72461 7.55273L2.10547 10.7891C2.03547 10.9281 2 11.0813 2 11.2363V12C2 12.552 2.448 13 3 13V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V13C21.552 13 22 12.552 22 12V11.2363C22 11.0813 21.9645 10.9281 21.8945 10.7891L20.2754 7.55273C20.1064 7.21373 19.7618 7 19.3828 7H4.61719ZM6 13H18C18.552 13 19 13.448 19 14V18C19 18.552 18.552 19 18 19H6C5.448 19 5 18.552 5 18V14C5 13.448 5.448 13 6 13Z",fill:t})}))}},6253:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceIcon=void 0;let o=n(4848);t.WorkspaceIcon=e=>{var{color:t="currentColor"}=e,n=i(e,["color"]);return(0,o.jsxs)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},n,{children:[(0,o.jsx)("path",{d:"M6.73811 2.8125H3.53137C3.13442 2.8125 2.81262 3.1343 2.81262 3.53125V7.51204C2.81262 7.909 3.13442 8.23079 3.53137 8.23079H6.73811C7.13506 8.23079 7.45686 7.909 7.45686 7.51204V3.53125C7.45686 3.1343 7.13506 2.8125 6.73811 2.8125Z",fill:t}),(0,o.jsx)("path",{d:"M12.1565 6.26758H8.94971C8.75123 6.26758 8.59033 6.42848 8.59033 6.62696V11.3818C8.59033 11.5803 8.75123 11.7412 8.94971 11.7412H12.1565C12.3549 11.7412 12.5158 11.5803 12.5158 11.3818V6.62696C12.5158 6.42848 12.3549 6.26758 12.1565 6.26758Z",stroke:t,strokeWidth:"0.718753"}),(0,o.jsx)("path",{d:"M12.1564 2.8125H8.94971C8.55275 2.8125 8.23096 3.1343 8.23096 3.53125V4.41587C8.23096 4.81283 8.55275 5.13463 8.94971 5.13463H12.1564C12.5534 5.13463 12.8752 4.81283 12.8752 4.41587V3.53125C12.8752 3.1343 12.5534 2.8125 12.1564 2.8125Z",fill:t}),(0,o.jsx)("path",{d:"M6.73798 9.00488H3.53125C3.1343 9.00488 2.8125 9.32668 2.8125 9.72364V11.3823C2.8125 11.7793 3.1343 12.1011 3.53125 12.1011H6.73798C7.13494 12.1011 7.45674 11.7793 7.45674 11.3823V9.72364C7.45674 9.32668 7.13494 9.00488 6.73798 9.00488Z",fill:t})]}))}},6283:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(245),t),o(n(2665),t),o(n(6253),t),o(n(264),t),o(n(686),t),o(n(8387),t),o(n(7901),t),o(n(8424),t),o(n(2353),t),o(n(1387),t),o(n(5598),t),o(n(2953),t),o(n(1686),t),o(n(9173),t),o(n(9431),t),o(n(1364),t),o(n(8044),t),o(n(3551),t),o(n(5931),t),o(n(7474),t),o(n(7867),t),o(n(6224),t),o(n(6049),t),o(n(7463),t),o(n(9687),t),o(n(5090),t),o(n(5482),t)},228:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.IconWithBadge=void 0;let r=n(4848),a=o(n(2770)),l=n(3136),s=n(3189),c=n(2094);t.IconWithBadge=e=>{var{count:t=0,max:n}=e,o=i(e,["count","max"]);return(0,r.jsxs)(u,{children:[(0,r.jsx)(l.Icon,Object.assign({},o)),t>0&&(0,r.jsx)(d,{count:t,max:n})]})};let u=(0,a.default)(c.Box)`
  position: relative;
`,d=(0,a.default)(s.Badge)`
  position: absolute;
  transform: scale(70%);
  right: -${({theme:e})=>e.px.base};
  top: -${({theme:e})=>e.px.small};
`},4416:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(228),t)},8820:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;let o=n(4848),r=i(n(2770)),a=n(2094),l=n(5963),s=n(5917);t.Label=({icon:e,text:t,helperText:n,htmlFor:i,inline:r})=>(0,o.jsxs)(f,{inline:r,children:[(0,o.jsxs)("div",{style:{display:"flex"},children:["function"==typeof e?e():e?(0,o.jsx)(d,{icon:e}):null,(0,o.jsx)(u,{as:"label",htmlFor:i,weight:"bold",children:t})]}),n&&(0,o.jsx)(c,{children:n})]});let c=(0,r.default)(l.Text)`
  size: ${({theme:e})=>e.fontSize.base};
  color: ${({theme:e})=>e.palette.textHelp};
`,u=(0,r.default)(l.Text)`
  text-transform: capitalize;
  color: ${({theme:e})=>e.palette.textDefault};
`,d=(0,r.default)(s.Icon)`
  margin-right: ${({theme:e})=>e.px.xsmall};
  min-width: ${({theme:e})=>e.iconSize.small};
  min-height: ${({theme:e})=>e.iconSize.small};
  align-self: center;
`,f=(0,r.default)(a.Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.px.small};

  ${({inline:e,theme:t})=>e&&`cursor: pointer;
     margin-bottom: 0;
     margin-left: ${t.px.small};
     font-weight: ${t.fontWeight.normal};
  `}
`},2387:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(5136),t),o(n(2799),t)},5136:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Loader=void 0;let r=n(4848),a=o(n(2770)),l=n(5917);t.Loader=(0,a.default)(e=>{var t=i(e,[]);return(0,r.jsx)(l.Icon,Object.assign({},t,{children:(0,r.jsx)("svg",{width:"100%",height:"100%",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",children:(0,r.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,r.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[(0,r.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),(0,r.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:(0,r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})})}))})``},2799:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t}),l=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.OpenfinLoader=void 0;let s=n(4848),c=a(n(2770)),u=n(5917);t.OpenfinLoader=(0,c.default)(e=>{var t=l(e,[]);return(0,s.jsx)(u.Icon,Object.assign({},t,{children:(0,s.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)(d,{d:"\n            M 17.1222 6.887\n            C 17.0141 6.77887 16.898 6.67911 16.7748 6.58856\n            L 16.7295 6.55715\n            C 16.7035 6.53903 16.6781 6.5203 16.6515 6.50278\n            C 16.625 6.48526 16.5941 6.46653 16.5657 6.44901\n            L 16.5259 6.42424\n            C 16.4902 6.4031 16.454 6.38316 16.4177 6.36383\n            L 16.3966 6.35236\n            C 15.9678 6.12742 15.491 6.00968 15.0068 6.00922\n            C 14.2101 6.00858 13.4463 5.69149 12.8834 5.12772\n            C 12.3205 4.56395 12.0048 3.79971 12.0056 3.00314\n            C 12.0078 1.79066 11.2792 0.696263 10.1596 0.230293\n            C 9.04002 -0.235676 7.74992 0.0185592 6.89093 0.874441\n            C 6.03194 1.73032 5.77323 3.01928 6.23546 4.14024\n            C 6.69768 5.26119 7.7898 5.99337 9.00251 5.99532\n            C 9.79924 5.99596 10.5631 6.31305 11.1259 6.87682\n            C 11.6888 7.44059 12.0046 8.20484 12.0038 9.0014\n            C 12.0031 9.79797 11.686 10.5616 11.1221 11.1244\n            C 10.5582 11.6871 9.7938 12.0028 8.99708 12.002\n            C 8.20096 12.0027 7.43727 11.6867 6.87438 11.1238\n            C 6.3115 10.561 5.99564 9.79736 5.99644 9.0014\n            C 5.99644 7.34586 4.65409 6.00378 2.99822 6.00378\n            C 1.34235 6.00378 0 7.34586 0 9.0014\n            C 0 10.6569 1.34235 11.999 2.99822 11.999\n            C 4.65409 11.999 5.99644 13.3411 5.99644 14.9966\n            C 5.99644 16.6553 7.34136 18 9.0004 18\n            C 10.6594 18 12.0044 16.6553 12.0044 14.9966\n            C 12.0044 13.3411 13.3467 11.999 15.0026 11.999\n            C 15.5379 11.9994 16.0635 11.8563 16.5247 11.5846\n            C 16.5645 11.561 16.6038 11.5363 16.6455 11.5109\n            L 16.654 11.5055\n            C 16.6902 11.4813 16.7265 11.4559 16.7615 11.4305\n            L 16.7772 11.4197\n            C 16.8086 11.3967 16.8376 11.372 16.8709 11.3472\n            L 16.8975 11.3266\n            C 16.9265 11.3031 16.9543 11.2783 16.9827 11.2535\n            L 17.0135 11.227\n            C 17.0497 11.1943 17.0854 11.1605 17.1204 11.1255\n            L 17.1259 11.1206\n            C 17.2553 10.9906 17.3726 10.8491 17.4763 10.6978\n            C 17.4989 10.6651 17.5206 10.6321 17.5416 10.5987\n            C 18.2843 9.415 18.1104 7.8752 17.1222 6.887Z\n            ",fill:"currentColor"}),(0,s.jsx)(f,{cx:"9",cy:"3",r:"2.9",fill:"currentColor",angle:0}),(0,s.jsx)(f,{cx:"15",cy:"9",r:"2.75",fill:"currentColor",angle:-90}),(0,s.jsx)(f,{cx:"9",cy:"15",r:"2.5",fill:"currentColor",angle:-180}),(0,s.jsx)(f,{cx:"3",cy:"9",r:"2.25",fill:"currentColor",angle:-270})]})}))})``;let d=c.default.path`
  @keyframes logoAnimation {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 1;
    }
    35% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  animation: logoAnimation 2s ease-in-out infinite;
`,f=c.default.circle`
  transform-origin: center;
  animation: ${({angle:e})=>c.keyframes`
    0% {
      transform: rotate(0deg);
      opacity: 0;
    }
    25% {
      transform: rotate(0deg);
      opacity: 1;
    }
    30% {
      transform: rotate(0deg);
      opacity: 1;
    }
    50% {
      transform: rotate(${e}deg);
      opacity: 1;
    }
    70% {
      transform: rotate(-360deg);
      opacity: 1;
    }
    75% {
      transform: rotate(-360deg);
      opacity: 0;
    }
    100% {
      transform: rotate(-360deg);
      opacity: 0;
    }
`} 2s ease-in-out infinite;
`},3679:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationError=void 0;let o=n(4848),r=i(n(2770)),a=n(5963),l=n(5917);t.ValidationError=({children:e})=>(0,o.jsxs)(s,{children:[(0,o.jsx)(l.Icon,{icon:"ExclamationCircledFilledIcon"}),(0,o.jsx)(c,{children:e})]});let s=r.default.div`
  display: flex;
  gap: ${({theme:e})=>e.px.xsmall};
  align-items: center;
  text-align: center;
  margin-top: ${({theme:e})=>e.px.small};
`,c=(0,r.default)(a.Text)`
  color: ${({theme:e})=>e.palette.textHelp};
`},1167:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.StyledInputField=t.BaseInput=void 0;let r=n(4848),a=n(2015),l=o(n(2770)),s=n(2094),c=n(532),u=n(5963),d=n(3679),f=n(8820);t.BaseInput=(0,a.forwardRef)((e,n)=>{var{className:o,renderInput:a,message:l,label:s,status:c,name:u,icon:b,type:g="text",helperText:v,placeholder:y}=e,_=i(e,["className","renderInput","message","label","status","name","icon","type","helperText","placeholder"]);let x="checkbox"===g||"radio"===g;return(0,r.jsxs)(m,{flexDirection:"column",alignItems:"flex-start",children:[(0,r.jsxs)(p,{inline:x,children:[!!s&&(0,r.jsx)(f.Label,{inline:x,icon:b,text:s,helperText:v,htmlFor:u}),!!a&&a(Object.assign({name:u,status:c,type:g},_)),!a&&(0,r.jsx)(t.StyledInputField,Object.assign({className:o,name:u,placeholder:y,status:c,type:g},_,{ref:n}))]}),l&&("critical"===c?(0,r.jsx)(d.ValidationError,{children:l}):(0,r.jsx)(h,{status:c,children:l}))]})}),t.BaseInput.displayName="BaseInput";let p=(0,l.default)(s.Box)`
  align-items: ${({inline:e})=>e?"center":"flex-start"};
  flex-direction: ${({inline:e})=>e?"row-reverse":"column"};
  justify-content: ${({inline:e})=>e?"flex-end":"flex-start"};
  width: 100%;
`,h=(0,l.default)(u.Text)`
  color: ${({theme:e,status:t})=>(0,c.getStatusColor)(e,t,"textHelp")};
`,m=(0,l.default)(s.Box)`
  font-size: ${({theme:e})=>e.fontSize.base};
  user-select: none;
`;t.StyledInputField=l.default.input`
  background: ${({theme:e})=>e.palette.background4};
  border: 1px solid ${({theme:e})=>e.palette.background6};
  border-color: ${({theme:e,status:t})=>(0,c.getStatusColor)(e,t,c.Palette.inputBorder)};
  border-radius: ${({theme:e})=>e.radius.small};
  box-shadow: ${({theme:e})=>e.shadow.base};
  color: ${({theme:e})=>e.palette.inputColor};
  font-size: ${({theme:e})=>e.fontSize.base};
  padding: ${({theme:e})=>`${e.px.small} ${e.px.base}`};
  transition: border-color var(--openfin-ui-globalTransition);
  width: 100%;

  &:focus {
    outline: 0;
    border-color: ${({theme:e,status:t})=>(0,c.getStatusColor)(e,t,c.Palette.inputFocused)};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled::placeholder {
    color: ${({theme:e})=>e.palette.inputDisabled};
  }

  /**
   * This is a hack to invert the calendar icon. This only works in dark mode.
   * Until either light mode is a thing or we get a datetime picker design, this will do.
   */

  ::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
`},114:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(1167),t)},5567:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t}),l=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Checkbox=void 0;let c=n(4848),u=a(n(2015)),d=s(n(2770)),f=n(114),p=n(5917),h=n(532);t.Checkbox=u.forwardRef((e,t)=>{var{status:n}=e,i=l(e,["status"]);return(0,c.jsx)(f.BaseInput,Object.assign({},i,{type:"checkbox",status:n,renderInput:e=>{var i=l(e,[]);return(0,c.jsxs)(m,{children:[(0,c.jsx)(v,Object.assign({ref:t,id:i.name,type:"checkbox"},i)),(0,c.jsx)(b,{status:n,children:(0,c.jsx)(g,{})})]})}}))}),t.Checkbox.displayName="Checkbox";let m=d.default.div`
  display: inline-block;
  position: relative;
`,b=d.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({theme:e})=>e.px.base};
  width: ${({theme:e})=>e.px.base};
  border: 1px solid ${({theme:e})=>e.palette.textDefault};
  border-color: ${({theme:e,status:t})=>(0,h.getStatusColor)(e,t,"textDefault")};
  border-radius: 2px;
  pointer-events: none;
`,g=(0,d.default)(p.Icon).attrs({icon:"CheckIcon",size:"small"})`
  opacity: 0;
`,v=d.default.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:checked + ${b+" "+g} {
    opacity: 1;
  }

  &:hover + ${b} {
    box-shadow: 0 0 1px 1px ${({theme:e})=>e.palette.inputFocused};
  }

  &:focus + ${b} {
    box-shadow: 0 0 1px 1px ${({theme:e})=>e.palette.inputFocused};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + ${b} {
    opacity: 0.5;
  }
`},9990:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(5567),t)},9555:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.CheckboxGroup=void 0;let l=n(4848),s=a(n(2015)),c=a(n(2770)),u=n(2094),d=n(5963),f=n(9990),p=n(3679);t.CheckboxGroup=({disabled:e,gap:t="small",helperText:n,label:i,message:o,children:r,validationErrorMessage:a,values:c,onChange:u})=>{let[d,_]=s.useState(null!=c?c:[]),x=e=>{let t=e.target.value,n=d.includes(t)?d.filter(e=>e!==t):[...d,t];_(n),u&&u(n)};return(0,l.jsxs)(g,{children:[i&&(0,l.jsxs)(h,{children:[(0,l.jsx)(m,{weight:"bold",children:i}),n&&(0,l.jsx)(b,{children:n})]}),(0,l.jsx)(v,{gap:t,children:s.Children.map(r,t=>t.type===f.Checkbox?s.cloneElement(t,{disabled:e,onChange:x,checked:d.includes(t.props.value)}):t)}),!d.length&&a&&(0,l.jsx)(p.ValidationError,{children:a}),o?(0,l.jsx)(y,{disabled:e,children:o}):null]})};let h=(0,c.default)(u.Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.px.small};
`,m=(0,c.default)(d.Text)`
  text-transform: capitalize;
`,b=(0,c.default)(d.Text)`
  size: ${({theme:e})=>e.fontSize.base};
  color: ${({theme:e})=>e.palette.textHelp};
`,g=(0,c.default)(u.Box)`
  display: flex;
  flex-direction: column;
  width: max-content;
`,v=(0,c.default)(u.Box)`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: fit-content;
`,y=(0,c.default)(d.Text)`
  color: ${({theme:e})=>e.palette.inputPlaceholder};
  margin-top: ${({theme:e})=>e.px.base};

  ${({disabled:e})=>e&&c.css`
      color: ${({theme:e})=>e.palette.inputDisabled};
    `}
`},8045:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(9555),t)},5887:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DateInput=void 0;let r=n(4848),a=n(2015),l=o(n(2770)),s=n(5917),c=n(2094),u=n(114);t.DateInput=(0,a.forwardRef)((e,t)=>{var{value:n="",type:o="date",expanded:l=!1,onChange:s}=e,c=i(e,["value","type","expanded","onChange"]);let[f,p]=(0,a.useState)(n);return(0,a.useEffect)(()=>p(n),[]),(0,r.jsx)(u.BaseInput,Object.assign({type:o},c,{renderInput:e=>{var n=i(e,[]);return(0,r.jsx)(d,Object.assign({ref:t,type:o,onChange:e=>{let{value:t}=e.target;t&&p(t),null==s||s(e)},value:f,expanded:l},n))}}))}),t.DateInput.displayName="DateInput";let d=(0,a.forwardRef)((e,t)=>{var{type:n,expanded:o,onExpand:a}=e,l=i(e,["type","expanded","onExpand"]);return(0,r.jsxs)(f,{children:[(0,r.jsx)(h,{children:(0,r.jsx)(s.Icon,{icon:"time"===n?"ClockIcon":"CalendarIcon"})}),(0,r.jsx)(b,Object.assign({ref:t,type:n,onKeyDown:e=>{" "===e.key&&e.preventDefault()}},l)),(0,r.jsx)(m,{flexDirection:"column",disabled:l.disabled,onClick:a,children:(0,r.jsx)(s.Icon,{icon:o?"ChevronUpIcon":"ChevronDownIcon"})})]})});d.displayName="StyledDateInput";let f=l.default.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.small};
  width: 100%;
`,p=(0,l.default)(c.Box)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1px;
  overflow: hidden;
  height: calc(100% - 2px);
`,h=(0,l.default)(p)`
  left: ${({theme:e})=>e.px.small};
  pointer-events: none;
`,m=(0,l.default)(p)`
  right: ${({theme:e})=>e.px.small};
  pointer-events: ${({disabled:e})=>e?"none":void 0};
  border-left: 1px solid ${({theme:e})=>e.palette.background6};
  padding-left: ${({theme:e})=>e.px.small};
`,b=(0,l.default)(u.StyledInputField)`
  appearance: textfield;
  padding-right: ${({theme:e})=>e.px.xxxlarge};
  padding-left: ${({theme:e})=>e.px.xxxlarge};
  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    display: none;
    appearance: none;
  }
`},6841:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(5887),t)},3842:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(1511),t)},1511:function(e,t,n){var i,o,r=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NumberInput=t.Direction=void 0;let l=n(4848),s=n(2015),c=a(n(2770)),u=n(5917),d=n(2094),f=n(114);(i=o||(t.Direction=o={}))[i.Up=1]="Up",i[i.Down=-1]="Down",t.NumberInput=(0,s.forwardRef)((e,t)=>{var{min:n,max:i,step:a=1,onTakeStep:s,value:c}=e,u=r(e,["min","max","step","onTakeStep","value"]);return(0,l.jsx)(f.BaseInput,Object.assign({type:"number"},u,{renderInput:e=>{var d=r(e,[]);return(0,l.jsx)(p,Object.assign({prependIcon:u.prependIcon,prependString:u.prependString,ref:t,onIncrement:()=>s&&s(o.Up,a),onDecrement:()=>s&&s(o.Down,a),min:n,max:i,step:a},d,{placeholder:u.placeholder,value:c,"aria-valuenow":c,"aria-valuemin":n,"aria-valuemax":i}))}}))}),t.NumberInput.displayName="NumberInput";let p=(0,s.forwardRef)((e,t)=>{var{onIncrement:n,onDecrement:i,prependIcon:o,prependString:a}=e,c=r(e,["onIncrement","onDecrement","prependIcon","prependString"]);let d=(e,t)=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),t?n():i())},f=(0,s.useRef)(null),[p,y]=(0,s.useState)(0);return(0,s.useEffect)(()=>{f.current?y(f.current.offsetWidth):y(0)},[f.current,o,a]),(0,l.jsxs)(h,{children:[(!!o||!!a)&&(0,l.jsxs)(m,{hasIcon:!!o,ref:f,alignItems:"center",justifyContent:"center",children:[o&&(0,l.jsx)(u.Icon,{icon:o,size:"base"}),a&&!o&&a]}),(0,l.jsx)(v,Object.assign({prependContainerWidth:p,ref:t},c)),(0,l.jsxs)(b,{flexDirection:"column",disabled:c.disabled,children:[(0,l.jsx)(g,{onClick:n,onKeyDown:e=>d(e,!0),disabled:c.disabled,"aria-label":"Increment value",tabIndex:0,children:(0,l.jsx)(u.Icon,{icon:"TriangleUpIcon"})}),(0,l.jsx)(g,{onKeyDown:e=>d(e),onClick:i,"aria-label":"Decrement value",disabled:c.disabled,tabIndex:0,children:(0,l.jsx)(u.Icon,{icon:"TriangleDownIcon"})})]})]})});p.displayName="StyledNumberInput";let h=c.default.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({theme:e})=>e.radius.small};
  width: 100%;
`,m=(0,c.default)(d.Box)`
  background-color: ${({theme:e})=>e.palette.background6};
  position: absolute;
  left: 1px;
  top: 1px;
  width: ${({theme:e,hasIcon:t})=>t?e.px.xxlarge:"fit-content"};
  padding: 0 ${({theme:e})=>e.px.small};
  height: calc(100% - 2px);
  border-radius: ${({theme:e})=>`${e.radius.small} 0 0 ${e.radius.small}`};
`,b=(0,c.default)(d.Box)`
  align-items: center;
  position: absolute;
  right: 1px;
  top: 1px;
  gap: 1px;
  height: calc(100% - 2px);
  border-radius: ${({theme:e})=>`0 ${e.radius.small} ${e.radius.small} 0`};
  overflow: hidden;

  pointer-events: ${({disabled:e})=>e?"none":void 0};
`,g=(0,c.default)(d.Box)`
  cursor: pointer;
  background: ${({theme:e})=>e.palette.background6};
  padding: 0 ${({theme:e})=>e.px.xsmall};
  user-select: none;
  height: 50%;
  align-items: center;
  justify-content: center;

  color: ${({disabled:e,theme:t})=>e?t.palette.textHelp:t.palette.textDefault};

  &:hover {
    background: ${({theme:e})=>e.palette.inputFocused};
  }

  &:active {
    background: ${({theme:e})=>e.palette.inputColor};
  }
`,v=(0,c.default)(f.StyledInputField)`
  appearance: textfield;
  padding-left: ${({prependContainerWidth:e})=>`${e+10}px`};

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`},3982:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(8373),t)},8373:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=void 0;let l=n(4848),s=a(n(2015)),c=a(n(2770)),u=n(2094),d=n(5963),f=n(5311),p=n(3679);t.RadioGroup=({direction:e="column",label:t,disabled:n,labelSide:i="right",gap:o="small",message:r,helperText:a,name:c,children:u,validationErrorMessage:d,onChange:_,value:x})=>{let[O,C]=s.useState(x),w=e=>{C(e.target.value),_&&_(e)};return s.useEffect(()=>{C(x)},[x]),(0,l.jsxs)(m,{children:[(0,l.jsxs)(h,{children:[(0,l.jsx)(y,{weight:"bold",children:t}),a&&(0,l.jsx)(b,{children:a})]}),(0,l.jsx)(g,{direction:e,labelSide:i,gap:o,children:s.Children.map(u,e=>e.type===f.RadioInput?s.cloneElement(e,{name:c,labelSide:i,disabled:n,onChange:w,checked:e.props.value===O}):e)}),!O&&d&&(0,l.jsx)(p.ValidationError,{children:d}),r?(0,l.jsx)(v,{disabled:n,children:r}):null]})};let h=(0,c.default)(u.Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({theme:e})=>e.px.small};
`,m=(0,c.default)(u.Box)`
  display: flex;
  flex-direction: column;
  width: max-content;
`,b=(0,c.default)(d.Text)`
  size: ${({theme:e})=>e.fontSize.base};
  color: ${({theme:e})=>e.palette.textHelp};
`,g=(0,c.default)(u.Box)`
  display: flex;
  flex-direction: ${e=>e.direction};
  align-items: ${e=>{switch(e.labelSide){case"left":return"end";case"right":return"start";default:return"center"}}};
  width: fit-content;
`,v=(0,c.default)(d.Text)`
  color: ${({theme:e})=>e.palette.inputPlaceholder};
  margin-top: ${({theme:e})=>e.px.base};

  ${({disabled:e})=>e&&c.css`
      color: ${({theme:e})=>e.palette.inputDisabled};
    `}
`,y=(0,c.default)(d.Text)`
  text-transform: capitalize;
`},6942:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(5311),t)},5311:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t}),l=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.RadioInput=void 0;let s=n(4848),c=n(5963),u=a(n(2015)),d=a(n(2770)),f=n(2094),p=n(5917);t.RadioInput=u.forwardRef((e,t)=>{var{disabled:n,id:i,label:o,labelSide:r,icon:a}=e,c=l(e,["disabled","id","label","labelSide","icon"]);return(0,s.jsx)(h,{children:(0,s.jsxs)(g,{as:"label",htmlFor:i,labelSide:r,disabled:n,children:[(0,s.jsx)(b,Object.assign({ref:t,type:"radio",disabled:n},c)),(0,s.jsx)(m,{}),!!a&&(0,s.jsx)(p.Icon,{icon:a}),o||""]})})}),t.RadioInput.displayName="RadioInput";let h=(0,d.default)(f.Box)`
  display: flex;
  flex-direction: column;
`,m=d.default.div`
  width: ${({theme:e})=>e.px.base};
  height: ${({theme:e})=>e.px.base};
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  border-color: ${({theme:e})=>e.palette.textDefault};
  box-sizing: content-box;

  input:checked ~ &:after {
    content: '';
    display: block;
    margin: 2px 1px 0px 2px;
    width: ${({theme:e})=>e.px.small};
    height: ${({theme:e})=>e.px.small};
    border-radius: 50%;
    background-color: ${({theme:e})=>e.palette.textDefault};
  }

  input:disabled ~ & {
    border-color: ${({theme:e})=>e.palette.inputDisabled};
  }

  input:disabled ~ &:after {
    background-color: ${({theme:e})=>e.palette.inputDisabled};
  }
`,b=d.default.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;

  &:disabled {
    cursor: default;
  }
`,g=(0,d.default)(c.Text)`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-direction: ${({labelSide:e})=>{switch(e||"right"){case"left":return"row-reverse";case"right":return"row";case"top":return"column-reverse";case"bottom":return"column"}}};
  gap: ${({theme:e})=>e.px.small};
  cursor: pointer;

  ${({disabled:e})=>e?d.css`
          & {
            cursor: default;
          }

          color: ${({theme:e})=>e.palette.inputDisabled};
        `:null}
`},2649:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(5),t)},5:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RawInput=void 0;let o=i(n(2770));t.RawInput=o.default.input``,t.RawInput.displayName="RawInput"},2685:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(113),t)},113:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.TextArea=void 0;let o=n(4848),r=n(2015),a=i(n(2770)),l=n(532),s=n(532),c=n(2094),u=n(8820);t.TextArea=(0,r.forwardRef)((e,t)=>(0,o.jsx)(f,{flexDirection:"column",alignItems:"flex-start",children:(0,o.jsxs)(d,{children:[!!e.label&&(0,o.jsx)(u.Label,{text:e.label,htmlFor:e.name,helperText:e.helperText}),(0,o.jsx)(p,Object.assign({ref:t},e,{onChange:e.onChange}))]})})),t.TextArea.displayName="TextArea";let d=(0,a.default)(c.Box)`
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`,f=(0,a.default)(c.Box)`
  font-size: ${({theme:e})=>e.fontSize.base};
  user-select: none;
`,p=a.default.textarea`
  background: ${({theme:e})=>e.palette.background4};
  border: 1px solid ${({theme:e})=>e.palette.inputBorder};
  border-color: ${({theme:e,status:t})=>(0,s.getStatusColor)(e,t,"inputBorder")};
  border-radius: 4px;
  width: 100%;
  resize: none;
  overflow-y: auto;
  ${l.Mixins.scrollbar.small};
  color: ${({theme:e})=>e.palette.inputColor};
  font-size: ${({theme:e})=>e.fontSize.base};
  line-height: ${({theme:e})=>e.lineHeight.text};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  padding: ${({theme:e})=>e.px.small} ${({theme:e})=>e.px.small} 0px ${({theme:e})=>e.px.small};

  &:focus {
    outline: 0;
    border-color: ${({theme:e,status:t})=>(0,s.getStatusColor)(e,t,"inputFocused")};
  }

  &:disabled::placeholder {
    color: ${({theme:e})=>e.palette.inputDisabled};
  }
`},4864:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(7043),t)},7043:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TextInput=void 0;let i=n(4848),o=n(2015),r=n(114);t.TextInput=(0,o.forwardRef)((e,t)=>(0,i.jsx)(r.BaseInput,Object.assign({ref:t,type:"text"},e))),t.TextInput.displayName="TextInput"},2989:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Box=void 0;let o=i(n(2770)),r=n(8816),a=n(5939),l={1:a.Palette.background1,2:a.Palette.background2,3:a.Palette.background3,4:a.Palette.background4,5:a.Palette.background5,6:a.Palette.background6};t.Box=o.default.div`
  /**
   * Style Scrollbar for Boxes with overflow
   */
  ${r.Mixins.scrollbar.base}

  display: ${({display:e="flex"})=>e};
  flex-direction: ${({flexDirection:e="row"})=>e};
  flex-wrap: ${({flexWrap:e="nowrap"})=>e};
  align-items: ${({alignItems:e})=>e};
  justify-content: ${({justifyContent:e})=>e};
  gap: ${({theme:e,gap:t})=>t&&e.px[t]};
  align-self: ${({alignSelf:e})=>e};
  flex-basis: ${({flexBasis:e})=>e};
  flex-grow: ${({flexGrow:e})=>e};
  flex-shrink: ${({flexShrink:e})=>e};
  order: ${({order:e})=>e};
  padding: ${({theme:e,padding:t})=>t&&e.px[t]};
  background: ${({theme:e,background:t})=>t&&e.palette[l[t]]};
`,t.Box.displayName="Box"},2094:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(2989),t)},9341:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DefinitionList=void 0;let r=n(4848),a=o(n(2770));t.DefinitionList=e=>{var{definitions:t}=e,n=i(e,["definitions"]);return(0,r.jsx)(s,Object.assign({},n,{role:"list",children:(Array.isArray(t)?t:Array.from(t)).map(([e,t],n)=>(0,r.jsxs)(l,{role:"listitem",children:[(0,r.jsx)(c,{id:`term${n}`,children:e}),(0,r.jsx)(u,{"aria-labelledby":`term${n}`,children:t})]},`${e}-${n}`))}))};let l=a.default.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`,s=a.default.dl`
  gap: ${({theme:e})=>`0 ${e.px.large}`};
  overflow-y: auto;
  padding: ${({theme:e})=>`${e.px.small} ${e.px.base}`};
  word-break: break-word;
`,c=a.default.dt`
  color: ${({theme:e})=>e.palette.textHelp};
  font-size: ${({theme:e})=>e.fontSize.small};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  line-height: ${({theme:e})=>e.px.base};
  padding-bottom: ${({theme:e})=>e.px.small};
  white-space: nowrap;
`,u=a.default.dd`
  color: ${({theme:e})=>e.palette.textDefault};
  font-size: ${({theme:e})=>e.fontSize.small};
  line-height: ${({theme:e})=>e.px.base};
  padding-bottom: ${({theme:e})=>e.px.small};
`},9916:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(9341),t)},9960:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalFonts=t.GlobalStyles=void 0;let i=n(2770),o=n(9853),r=n(6151);t.GlobalStyles=i.createGlobalStyle`
  /** -> Define Global CSS Vars */
  :root {
    --openfin-ui-globalTransition: ${({theme:e})=>e.transition.base};

    font-family: ${({theme:e})=>e.fontFamily};
    /* Map over the palette keys and create variables out of them */
    ${o.getRootCssVars}
  }

  /** -> @font-face Declaration */

  /** -> Micro Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /**
     * Prevent browser auto-weighting
     * @link https://css-tricks.com/almanac/properties/f/font-synthesis/
     */
    font-synthesis: none;
  }

  /** -> Apply Global Styles */

  body,
  :root {
    background: ${({theme:e})=>e.palette.background1};
    color: ${({theme:e})=>e.palette.textDefault};
    font-family: ${({theme:e})=>e.fontFamily};
    font-weight: ${({theme:e})=>e.fontWeight.normal};
    font-size: ${({theme:e})=>e.fontSize.base};
    line-height: ${({theme:e})=>e.lineHeight.text};
  }

  ::placeholder {
    color: ${({theme:e})=>e.palette.inputPlaceholder};
  }

  /** -> Reduced Motion (Accessibility) */
  @media (prefers-reduced-motion) {
    :root {
      --openfin-ui-globalTransition: ${({theme:e})=>e.transition.none};
    }
  }
`,t.GlobalFonts=i.createGlobalStyle`${({fonts:e})=>(0,r.createFontFaceCss)(e)}`},4901:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(9960),t)},5014:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},532:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(1696),t),o(n(2268),t)},2346:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getMostReadable=t.darkenColor=t.lightenColor=void 0;let o=i(n(6535));t.lightenColor=(e,t)=>r(e,"lighten",t),t.darkenColor=(e,t)=>r(e,"darken",t);let r=(e,t,n)=>{if(n&&(n<0||n>100))throw Error(`${n} must be a number between 0 and 100`);return(0,o.default)(e)[t](n).toString()};t.getMostReadable=(e,t)=>o.default.mostReadable(e,t).toHexString()},2317:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IconSize=t.Transition=t.LineHeight=t.FontWeight=t.FontSize=t.FontFamily=t.Shadow=t.Radius=t.UnitPx=t.Unit=t.SizeName=t.Size=t.Color=void 0,t.Color={white:"#FFFFFF",lightGray1:"#FAFBFE",lightGray2:"#F3F5F8",lightGray3:"#ECEEF1",lightGray4:"#DDDFE4",lightGray5:"#C9CBD2",neutralGray:"#7D808A",neutralGray80:"rgba(125,128,138,0.8)",silverGray:"#C0C1C2",darkGray1:"#53565F",darkGray2:"#383A40",darkGray3:"#2F3136",darkGray4:"#24262B",darkGray5:"#1E1F23",darkGray6:"#111214",openFinDarkest:"#3D39CD",openFinDarker:"#4642E0",openFin:"#504CFF",openFinLight:"#5254FB",openFinLighter:"#5C5EFE",openFinLightest:"#6864FF",functional1:"#207735",functional2:"#46C8F1",functional3:"#0A76D3",functional4:"#6CADE5",functional5:"#0A76D3",functional6:"#882BFE",functional7:"#F31818",functional8:"#C93400",functional9:"#FF5E60",functional10:"#F48F00",purple:"#8C61FF",lightblue:"#36C3FE",aqua:"#00CC88",yellow:"#FFEB00",salmon:"#FF8C4C",pink:"#FF5E60",lightpink:"#FF8FB8",white00:"rgba(255,255,255,0.0)",white10:"rgba(255,255,255,0.1)",white20:"rgba(255,255,255,0.2)",white30:"rgba(255,255,255,0.3)",white40:"rgba(255,255,255,0.4)",white50:"rgba(255,255,255,0.5)",white60:"rgba(255,255,255,0.6)",white70:"rgba(255,255,255,0.7)",white80:"rgba(255,255,255,0.8)",white90:"rgba(255,255,255,0.9)",black00:"rgba(0,0,0,0.0)",black10:"rgba(0,0,0,0.1)",black20:"rgba(0,0,0,0.2)",black30:"rgba(0,0,0,0.3)",black40:"rgba(0,0,0,0.4)",black50:"rgba(0,0,0,0.5)",black60:"rgba(0,0,0,0.6)",black70:"rgba(0,0,0,0.7)",black80:"rgba(0,0,0,0.8)",black90:"rgba(0,0,0,0.9)",transparent:"transparent"},t.Size={xsmall:"xsmall",small:"small",base:"base",large:"large",xlarge:"xlarge",xxlarge:"xxlarge",xxxlarge:"xxxlarge",xxxxlarge:"xxxxlarge"},t.SizeName={[t.Size.xsmall]:"Extra Small",[t.Size.small]:"Small",[t.Size.base]:"Base",[t.Size.large]:"Large",[t.Size.xlarge]:"Extra Large",[t.Size.xxlarge]:"2X Large",[t.Size.xxxlarge]:"3X Large",[t.Size.xxxxlarge]:"4X Large"},t.Unit={[t.Size.xsmall]:4,[t.Size.small]:8,[t.Size.base]:12,[t.Size.large]:16,[t.Size.xlarge]:20,[t.Size.xxlarge]:24,[t.Size.xxxlarge]:32,[t.Size.xxxxlarge]:48},t.UnitPx={[t.Size.xsmall]:"4px",[t.Size.small]:"8px",[t.Size.base]:"12px",[t.Size.large]:"16px",[t.Size.xlarge]:"20px",[t.Size.xxlarge]:"24px",[t.Size.xxxlarge]:"32px",[t.Size.xxxxlarge]:"48px"},t.Radius={[t.Size.xsmall]:"2px",[t.Size.small]:"4px",[t.Size.base]:"8px",[t.Size.large]:"24px",pill:"100vh",round:"50%",none:"0"},t.Shadow={[t.Size.base]:"0 4px 4px rgba(0, 0, 0, 0.25)"},t.FontFamily="Inter,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif",t.FontSize={[t.Size.xsmall]:"8px",[t.Size.small]:"10px",[t.Size.base]:"12px",[t.Size.large]:"14px",[t.Size.xlarge]:"16px",[t.Size.xxlarge]:"18px",[t.Size.xxxlarge]:"20px",[t.Size.xxxxlarge]:"40px"},t.FontWeight={normal:400,bold:600},t.LineHeight={ui:1,heading:1.2,text:1.5},t.Transition={base:"200ms cubic-bezier(0.16, 1, 0.3, 1)",none:"0ms"},t.IconSize={[t.Size.xsmall]:t.UnitPx.small,[t.Size.small]:t.UnitPx.base,[t.Size.base]:"15px",[t.Size.large]:t.UnitPx.xlarge,[t.Size.xlarge]:t.UnitPx.xxlarge,[t.Size.xxlarge]:t.UnitPx.xxxlarge,[t.Size.xxxlarge]:t.UnitPx.xxxxlarge}},6151:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createFontFaceCss=function(e){return i.css`
    ${e.regular&&i.css`
      @font-face {
        font-family: 'Inter';
        src: url(${e.regular}) format('woff2');
        font-weight: ${o.FontWeight.normal};
        font-style: normal;
        font-display: fallback;
      }
    `}
    ${e.italic&&i.css`
      @font-face {
        font-family: 'Inter';
        src: url(${e.italic}) format('woff2');
        font-weight: ${o.FontWeight.normal};
        font-style: italic;
        font-display: fallback;
      }
    `}
    ${e.semiBold&&i.css`
      @font-face {
        font-family: 'Inter';
        src: url(${e.semiBold}) format('woff2');
        font-weight: ${o.FontWeight.bold};
        font-style: normal;
        font-display: fallback;
      }
    `}
    ${e.semiBoldItalic&&i.css`
      @font-face {
        font-family: 'Inter';
        src: url(${e.semiBoldItalic}) format('woff2');
        font-weight: ${o.FontWeight.bold};
        font-style: italic;
        font-display: fallback;
      }
    `}
  `};let i=n(2770),o=n(2317)},6893:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createTheme=void 0;let i=n(2317),o=n(2346),r=n(5939),a={fontFamily:i.FontFamily,fontSize:i.FontSize,fontWeight:i.FontWeight,lineHeight:i.LineHeight,iconSize:i.IconSize,radius:i.Radius,shadow:i.Shadow,transition:i.Transition,unit:i.Unit,px:i.UnitPx},l=(e,t)=>({[`${e}Active`]:(0,o.darkenColor)(t,2),[`${e}Hover`]:(0,o.lightenColor)(t,5),[`${e}Focused`]:(0,o.getMostReadable)(t,[i.Color.white,i.Color.darkGray5]),[`${e}Text`]:(0,o.getMostReadable)(t,[i.Color.white,i.Color.darkGray5])});t.createTheme=e=>Object.assign(Object.assign({},a),{palette:Object.assign(Object.assign(Object.assign({},e),l(r.Palette.brandPrimary,e.brandPrimary)),l(r.Palette.brandSecondary,e.brandSecondary))})},9853:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SUPPORTED_LANGUAGES=t.getStatusColor=t.getRootCssVars=t.getVariantCSS=void 0;let i=n(5939);t.getVariantCSS=(e,t)=>n=>e[t][n[t]],t.getRootCssVars=({theme:e})=>Object.keys(i.Palette).map(t=>`--openfin-ui-${t}: ${e.palette[t]};`).join("\n"),t.getStatusColor=(e,t,n)=>{switch(t){case"active":return e.palette.statusActive;case"critical":return e.palette.statusCritical;case"warning":return e.palette.statusWarning;case"success":return e.palette.statusSuccess;default:return n?e.palette[n]:"inherit"}},t.SUPPORTED_LANGUAGES=["en-US","ja-JP","zh-CN","ko-KR","ru-RU","de-DE","zh-Hant"]},5947:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t});Object.defineProperty(t,"__esModule",{value:!0}),t.IconSet=void 0;let l=a(n(824)),s=a(n(6283));t.IconSet=Object.assign(Object.assign({},l),s)},1696:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(2346),t),o(n(2317),t),o(n(5947),t),o(n(6151),t),o(n(6893),t),o(n(9853),t),o(n(2091),t),o(n(8816),t),o(n(5939),t),o(n(5241),t)},2091:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},8816:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Mixins=void 0;let i=n(2317),o=n(2770),r=o.css`
  user-select: none;
`,a=o.css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,l=o.css`
  &::-webkit-scrollbar {
    width: var(--scrollbarSize, ${i.UnitPx.xsmall});
    height: var(--scrollbarSize, ${i.UnitPx.xsmall});
  }

  &::-webkit-scrollbar-track {
    background: ${i.Color.neutralGray80};
    border-radius: var(--scrollbarSize, ${i.UnitPx.xsmall});
    opacity: 0.8;
  }

  &::-webkit-scrollbar-thumb {
    background: ${i.Color.white80};
    width: var(--scrollbarSize, ${i.UnitPx.xsmall});
    height: var(--scrollbarSize, ${i.UnitPx.xsmall});
    border-radius: var(--scrollbarSize, ${i.UnitPx.xsmall});
    opacity: 0.8;
  }
`,s=o.css`
  --scrollbarSize: 2px;
  ${l};
`,c=o.css`
  -webkit-app-region: drag;
`,u=o.css`
  -webkit-app-region: no-drag;
`;t.Mixins={noSelect:r,textOverflow:a,scrollbar:{[i.Size.base]:l,[i.Size.small]:s},appRegion:{drag:c,noDrag:u}}},5939:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Palette=void 0,t.Palette={background1:"background1",background2:"background2",background3:"background3",background4:"background4",background5:"background5",background6:"background6",brandPrimary:"brandPrimary",brandSecondary:"brandSecondary",brandPrimaryActive:"brandPrimaryActive",brandPrimaryHover:"brandPrimaryHover",brandPrimaryFocused:"brandPrimaryFocused",brandPrimaryText:"brandPrimaryText",brandSecondaryActive:"brandSecondaryActive",brandSecondaryHover:"brandSecondaryHover",brandSecondaryFocused:"brandSecondaryFocused",brandSecondaryText:"brandSecondaryText",inputBackground:"inputBackground",inputColor:"inputColor",inputPlaceholder:"inputPlaceholder",inputDisabled:"inputDisabled",inputFocused:"inputFocused",inputBorder:"inputBorder",statusSuccess:"statusSuccess",statusWarning:"statusWarning",statusCritical:"statusCritical",statusActive:"statusActive",textDefault:"textDefault",textHelp:"textHelp",textInactive:"textInactive",borderNeutral:"borderNeutral",contentBackground1:"contentBackground1",contentBackground2:"contentBackground2",contentBackground3:"contentBackground3",contentBackground4:"contentBackground4",contentBackground5:"contentBackground5",linkDefault:"linkDefault",linkHover:"linkHover"}},5241:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},4322:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(4207),t)},4207:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OpenFinDarkTheme=t.OpenFinLightTheme=void 0;let i=n(5939),o=n(2317),r=n(6893),a={[i.Palette.brandPrimary]:o.Color.openFin,[i.Palette.statusSuccess]:o.Color.functional1,[i.Palette.statusWarning]:o.Color.functional10,[i.Palette.statusCritical]:o.Color.functional7,[i.Palette.statusActive]:o.Color.functional3,[i.Palette.borderNeutral]:o.Color.silverGray,[i.Palette.contentBackground1]:o.Color.openFin,[i.Palette.contentBackground2]:"#000000",[i.Palette.contentBackground3]:"#000000",[i.Palette.contentBackground4]:"#000000",[i.Palette.contentBackground5]:"#000000",[i.Palette.linkDefault]:o.Color.functional4,[i.Palette.linkHover]:o.Color.functional5};t.OpenFinLightTheme=(0,r.createTheme)(Object.assign(Object.assign({},a),{[i.Palette.background1]:o.Color.white,[i.Palette.background2]:o.Color.lightGray1,[i.Palette.background3]:o.Color.lightGray2,[i.Palette.background4]:o.Color.lightGray3,[i.Palette.background5]:o.Color.lightGray3,[i.Palette.background6]:o.Color.lightGray5,[i.Palette.brandSecondary]:o.Color.lightGray4,[i.Palette.inputBackground]:o.Color.lightGray3,[i.Palette.inputColor]:o.Color.darkGray5,[i.Palette.inputPlaceholder]:o.Color.darkGray2,[i.Palette.inputDisabled]:o.Color.neutralGray,[i.Palette.inputFocused]:o.Color.lightGray5,[i.Palette.inputBorder]:o.Color.neutralGray,[i.Palette.textDefault]:o.Color.darkGray5,[i.Palette.textHelp]:o.Color.neutralGray,[i.Palette.textInactive]:o.Color.neutralGray})),t.OpenFinDarkTheme=(0,r.createTheme)(Object.assign(Object.assign({},a),{[i.Palette.background1]:o.Color.darkGray6,[i.Palette.background2]:o.Color.darkGray5,[i.Palette.background3]:o.Color.darkGray4,[i.Palette.background4]:o.Color.darkGray3,[i.Palette.background5]:o.Color.darkGray2,[i.Palette.background6]:o.Color.darkGray1,[i.Palette.brandSecondary]:o.Color.darkGray2,[i.Palette.inputBackground]:o.Color.darkGray1,[i.Palette.inputColor]:o.Color.white,[i.Palette.inputPlaceholder]:o.Color.lightGray5,[i.Palette.inputDisabled]:o.Color.neutralGray,[i.Palette.inputFocused]:o.Color.lightGray5,[i.Palette.inputBorder]:o.Color.neutralGray,[i.Palette.textDefault]:o.Color.white,[i.Palette.textHelp]:o.Color.lightGray5,[i.Palette.textInactive]:o.Color.neutralGray}))},2268:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ThemeProvider=void 0;let i=n(4848),o=n(2015),r=n(2770),a=n(2762),l=n(5007),s=n(4901),c=n(3092);t.ThemeProvider=({children:e,themes:t,scheme:n=a.ColorScheme.system,fonts:u=c.Fonts})=>{let d=(0,l.useTheme)({themes:t,scheme:n}),f=(0,o.useMemo)(()=>(0,i.jsx)(s.GlobalFonts,{fonts:u}),[u]);return(0,i.jsxs)(i.Fragment,{children:[f,(0,i.jsx)(r.ThemeProvider,{theme:d,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.GlobalStyles,{}),e]})})]})}},8543:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(4901),t),o(n(5014),t),o(n(532),t)},357:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContactStatusIcon=void 0;let o=n(4848),r=i(n(2770)),a=n(5823),l={available:(0,o.jsx)(a.CheckSVG,{}),away:(0,o.jsx)(a.BusySVG,{}),"do-not-disturb":(0,o.jsx)(a.DoNotDisturbSVG,{}),offline:(0,o.jsx)(a.OfflineSVG,{}),busy:null};t.ContactStatusIcon=({onlineStatus:e})=>e?(0,o.jsx)(s,{onlineStatus:e,children:l[e]||null}):null;let s=r.default.div`
  border: 1.6px solid ${({theme:e})=>e.palette.background1};

  background: ${({onlineStatus:e})=>"busy"===e?"#C21313":"white"};
  border-radius: 50%;

  height: ${({theme:e})=>e.px.large};
  width: ${({theme:e})=>e.px.large};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 78.95%;
  right: -7.02%;
  top: 77.12%;
  bottom: -4.24%;
`},5823:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.OfflineSVG=t.DoNotDisturbSVG=t.BusySVG=t.CheckSVG=void 0;let i=n(4848);t.CheckSVG=()=>(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 0C8.73438 0 9.4401 0.0963542 10.1172 0.289063C10.7943 0.481771 11.4297 0.752604 12.0234 1.10156C12.6172 1.45052 13.1563 1.86979 13.6406 2.35938C14.1302 2.84375 14.5495 3.38281 14.8984 3.97656C15.2474 4.57031 15.5182 5.20573 15.7109 5.88281C15.9036 6.5599 16 7.26563 16 8C16 8.72917 15.9036 9.4349 15.7109 10.1172C15.5182 10.7943 15.2474 11.4297 14.8984 12.0234C14.5495 12.6172 14.1302 13.1589 13.6406 13.6484C13.1563 14.1328 12.6172 14.5495 12.0234 14.8984C11.4297 15.2474 10.7917 15.5182 10.1094 15.7109C9.43229 15.9036 8.72917 16 8 16C7.27083 16 6.5651 15.9036 5.88281 15.7109C5.20573 15.5182 4.57031 15.2474 3.97656 14.8984C3.38281 14.5495 2.84115 14.1328 2.35156 13.6484C1.86719 13.1589 1.45052 12.6172 1.10156 12.0234C0.752604 11.4297 0.481771 10.7943 0.289063 10.1172C0.0963542 9.4349 0 8.72917 0 8C0 7.27083 0.0963542 6.56771 0.289063 5.89063C0.481771 5.20833 0.752604 4.57031 1.10156 3.97656C1.45052 3.38281 1.86719 2.84375 2.35156 2.35938C2.84115 1.86979 3.38281 1.45052 3.97656 1.10156C4.57031 0.752604 5.20573 0.481771 5.88281 0.289063C6.5651 0.0963542 7.27083 0 8 0ZM10.6328 5.6875C10.4245 5.6875 10.2474 5.76042 10.1016 5.90625L7.27344 8.75L6.26563 7.75C6.11979 7.60417 5.94531 7.53125 5.74219 7.53125C5.64323 7.53125 5.54948 7.55208 5.46094 7.59375C5.3724 7.63542 5.29167 7.69271 5.21875 7.76563C5.15104 7.83333 5.09635 7.91146 5.05469 8C5.01302 8.08854 4.99219 8.18229 4.99219 8.28125C4.99219 8.48958 5.0651 8.66667 5.21094 8.8125L6.74219 10.3438C6.88802 10.4896 7.0651 10.5625 7.27344 10.5625C7.48177 10.5625 7.65885 10.4896 7.80469 10.3438L11.1641 6.96875C11.3099 6.82292 11.3828 6.64583 11.3828 6.4375C11.3828 6.33854 11.362 6.24479 11.3203 6.15625C11.2786 6.06771 11.2214 5.98958 11.1484 5.92188C11.0807 5.84896 11.0026 5.79167 10.9141 5.75C10.8255 5.70833 10.7318 5.6875 10.6328 5.6875Z",fill:"#207735"})}),t.BusySVG=()=>(0,i.jsx)("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 0.790237C8.73438 0.790237 9.4401 0.886592 10.1172 1.0793C10.7943 1.27201 11.4297 1.54284 12.0234 1.8918C12.6172 2.24076 13.1563 2.66003 13.6406 3.14961C14.1302 3.63399 14.5495 4.17305 14.8984 4.7668C15.2474 5.36055 15.5182 5.99597 15.7109 6.67305C15.9036 7.35013 16 8.05586 16 8.79024C16 9.5194 15.9036 10.2251 15.7109 10.9074C15.5182 11.5845 15.2474 12.2199 14.8984 12.8137C14.5495 13.4074 14.1302 13.9491 13.6406 14.4387C13.1563 14.9231 12.6172 15.3397 12.0234 15.6887C11.4297 16.0376 10.7917 16.3085 10.1094 16.5012C9.43229 16.6939 8.72917 16.7902 8 16.7902C7.27083 16.7902 6.5651 16.6939 5.88281 16.5012C5.20573 16.3085 4.57031 16.0376 3.97656 15.6887C3.38281 15.3397 2.84115 14.9231 2.35156 14.4387C1.86719 13.9491 1.45052 13.4074 1.10156 12.8137C0.752604 12.2199 0.481771 11.5845 0.289063 10.9074C0.0963542 10.2251 0 9.5194 0 8.79024C0 8.06107 0.0963542 7.35795 0.289063 6.68086C0.481771 5.99857 0.752604 5.36055 1.10156 4.7668C1.45052 4.17305 1.86719 3.63399 2.35156 3.14961C2.84115 2.66003 3.38281 2.24076 3.97656 1.8918C4.57031 1.54284 5.20573 1.27201 5.88281 1.0793C6.5651 0.886592 7.27083 0.790237 8 0.790237ZM7.32031 4.04805C7.21094 4.04805 7.10677 4.07149 7.00781 4.11836C6.91406 4.16003 6.82813 4.21992 6.75 4.29805C6.67708 4.37097 6.61719 4.4569 6.57031 4.55586C6.52865 4.64961 6.50781 4.75117 6.50781 4.86055V9.19649C6.50781 9.30586 6.52865 9.41263 6.57031 9.5168C6.61198 9.62097 6.67188 9.71211 6.75 9.79024L9.1875 12.2121C9.34896 12.3736 9.54167 12.4543 9.76563 12.4543C9.875 12.4543 9.97917 12.4335 10.0781 12.3918C10.1771 12.3449 10.263 12.285 10.3359 12.2121C10.4089 12.134 10.4661 12.0454 10.5078 11.9465C10.5547 11.8475 10.5781 11.7434 10.5781 11.634C10.5781 11.5298 10.5547 11.4283 10.5078 11.3293C10.4661 11.2251 10.4089 11.1366 10.3359 11.0637L8.13281 8.87618V4.86055C8.13281 4.75117 8.10938 4.64701 8.0625 4.54805C8.02083 4.44909 7.96354 4.36315 7.89063 4.29024C7.81771 4.21732 7.73177 4.16003 7.63281 4.11836C7.53385 4.07149 7.42969 4.04805 7.32031 4.04805Z",fill:"#FE9F4D"})}),t.DoNotDisturbSVG=()=>(0,i.jsx)("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 0.590256C8.73438 0.590256 9.4401 0.68661 10.1172 0.879318C10.7943 1.07203 11.4297 1.34286 12.0234 1.69182C12.6172 2.04078 13.1562 2.46005 13.6406 2.94963C14.1302 3.43401 14.5495 3.97307 14.8984 4.56682C15.2474 5.16057 15.5182 5.79598 15.7109 6.47307C15.9036 7.15015 16 7.85588 16 8.59026C16 9.31942 15.9036 10.0252 15.7109 10.7074C15.5182 11.3845 15.2474 12.0199 14.8984 12.6137C14.5495 13.2074 14.1302 13.7491 13.6406 14.2387C13.1562 14.7231 12.6172 15.1397 12.0234 15.4887C11.4297 15.8377 10.7917 16.1085 10.1094 16.3012C9.43229 16.4939 8.72917 16.5903 8 16.5903C7.27083 16.5903 6.5651 16.4939 5.88281 16.3012C5.20573 16.1085 4.57031 15.8377 3.97656 15.4887C3.38281 15.1397 2.84115 14.7231 2.35156 14.2387C1.86719 13.7491 1.45052 13.2074 1.10156 12.6137C0.752604 12.0199 0.481771 11.3845 0.289062 10.7074C0.0963542 10.0252 0 9.31942 0 8.59026C0 7.86109 0.0963542 7.15796 0.289062 6.48088C0.481771 5.79859 0.752604 5.16057 1.10156 4.56682C1.45052 3.97307 1.86719 3.43401 2.35156 2.94963C2.84115 2.46005 3.38281 2.04078 3.97656 1.69182C4.57031 1.34286 5.20573 1.07203 5.88281 0.879318C6.5651 0.68661 7.27083 0.590256 8 0.590256ZM5.47656 7.74651C5.36719 7.74651 5.26042 7.76994 5.15625 7.81682C5.05729 7.86369 4.96875 7.92619 4.89062 8.00432C4.8125 8.08244 4.75 8.17359 4.70312 8.27776C4.65625 8.37671 4.63281 8.48088 4.63281 8.59026C4.63281 8.69963 4.65625 8.8064 4.70312 8.91057C4.75 9.00953 4.8125 9.09807 4.89062 9.17619C4.96875 9.25432 5.05729 9.31682 5.15625 9.36369C5.26042 9.41057 5.36719 9.43401 5.47656 9.43401H10.5234C10.6328 9.43401 10.737 9.41057 10.8359 9.36369C10.9401 9.31682 11.0312 9.25432 11.1094 9.17619C11.1875 9.09807 11.25 9.00953 11.2969 8.91057C11.3438 8.8064 11.3672 8.69963 11.3672 8.59026C11.3672 8.48088 11.3438 8.37671 11.2969 8.27776C11.25 8.17359 11.1875 8.08244 11.1094 8.00432C11.0312 7.92619 10.9401 7.86369 10.8359 7.81682C10.737 7.76994 10.6328 7.74651 10.5234 7.74651H5.47656Z",fill:"#C21313"})}),t.OfflineSVG=()=>(0,i.jsx)("svg",{width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 0.990252C8.73438 0.990252 9.4401 1.08661 10.1172 1.27931C10.7943 1.47202 11.4297 1.74286 12.0234 2.09181C12.6172 2.44077 13.1562 2.86004 13.6406 3.34963C14.1302 3.834 14.5495 4.37306 14.8984 4.96681C15.2474 5.56056 15.5182 6.19598 15.7109 6.87306C15.9036 7.55015 16 8.25588 16 8.99025C16 9.71942 15.9036 10.4251 15.7109 11.1074C15.5182 11.7845 15.2474 12.4199 14.8984 13.0137C14.5495 13.6074 14.1302 14.1491 13.6406 14.6387C13.1562 15.1231 12.6172 15.5397 12.0234 15.8887C11.4297 16.2376 10.7917 16.5085 10.1094 16.7012C9.43229 16.8939 8.72917 16.9903 8 16.9903C7.27083 16.9903 6.5651 16.8939 5.88281 16.7012C5.20573 16.5085 4.57031 16.2376 3.97656 15.8887C3.38281 15.5397 2.84115 15.1231 2.35156 14.6387C1.86719 14.1491 1.45052 13.6074 1.10156 13.0137C0.752604 12.4199 0.481771 11.7845 0.289062 11.1074C0.0963542 10.4251 0 9.71942 0 8.99025C0 8.26109 0.0963542 7.55796 0.289062 6.88088C0.481771 6.19859 0.752604 5.56056 1.10156 4.96681C1.45052 4.37306 1.86719 3.834 2.35156 3.34963C2.84115 2.86004 3.38281 2.44077 3.97656 2.09181C4.57031 1.74286 5.20573 1.47202 5.88281 1.27931C6.5651 1.08661 7.27083 0.990252 8 0.990252ZM8 2.67775C7.42188 2.67775 6.86458 2.75327 6.32812 2.90431C5.79167 3.05536 5.28906 3.2689 4.82031 3.54494C4.35156 3.82098 3.92448 4.15171 3.53906 4.53713C3.15885 4.91734 2.83073 5.34181 2.55469 5.81056C2.27865 6.27931 2.0651 6.78192 1.91406 7.31838C1.76302 7.85484 1.6875 8.41213 1.6875 8.99025C1.6875 9.56838 1.76302 10.1257 1.91406 10.6621C2.0651 11.1986 2.27865 11.7012 2.55469 12.1699C2.83073 12.6387 3.15885 13.0658 3.53906 13.4512C3.92448 13.8314 4.35156 14.1595 4.82031 14.4356C5.28906 14.7116 5.79167 14.9251 6.32812 15.0762C6.86458 15.2272 7.42188 15.3028 8 15.3028C8.57812 15.3028 9.13542 15.2272 9.67188 15.0762C10.2083 14.9251 10.7109 14.7116 11.1797 14.4356C11.6484 14.1595 12.0729 13.8314 12.4531 13.4512C12.8385 13.0658 13.1693 12.6387 13.4453 12.1699C13.7214 11.7012 13.9349 11.1986 14.0859 10.6621C14.237 10.1257 14.3125 9.56838 14.3125 8.99025C14.3125 8.41213 14.237 7.85484 14.0859 7.31838C13.9349 6.78192 13.7214 6.27931 13.4453 5.81056C13.1693 5.34181 12.8385 4.91734 12.4531 4.53713C12.0729 4.15171 11.6484 3.82098 11.1797 3.54494C10.7109 3.2689 10.2083 3.05536 9.67188 2.90431C9.13542 2.75327 8.57812 2.67775 8 2.67775Z",fill:"#979797"})})},818:function(e,t,n){var i,o=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||(i=function(e){return(i=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t})(e)},function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=i(e),a=0;a<n.length;a++)"default"!==n[a]&&o(t,e,n[a]);return r(t,e),t}),l=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ContactCard=void 0;let c=n(4848),u=a(n(2015)),d=s(n(2770)),f=n(9916),p=n(904),h=n(357),m=n(9543);t.ContactCard=e=>{var{name:t,title:n,photoUrl:i,useInitials:o=!1,details:r,onlineStatus:a}=e,s=l(e,["name","title","photoUrl","useInitials","details","onlineStatus"]);let d=i||o,f=(0,u.useMemo)(()=>(0,p.getInitials)(t),[t]),P=(0,u.useMemo)(()=>(0,m.generateColorFromString)(t),[t]),E=(0,u.createRef)();return(0,u.useEffect)(()=>{var e;null===(e=E.current)||void 0===e||e.scrollTo(0,0)}),(0,c.jsxs)(b,Object.assign({},s,{children:[(0,c.jsxs)(g,{children:[d&&(0,c.jsxs)(v,{iconColor:P,children:[i?(0,c.jsx)(_,{alt:n,src:i}):(0,c.jsx)(y,{children:f}),(0,c.jsx)(h.ContactStatusIcon,{onlineStatus:a})]}),(0,c.jsxs)(x,{children:[(0,c.jsxs)(O,{children:[" ",t," "]}),n&&(0,c.jsxs)(C,{children:[" ",n," "]})]})]}),(0,c.jsx)(j,{}),(0,c.jsx)(w,{ref:E,children:(null==r?void 0:r.length)>0?r.map((e,n)=>(0,c.jsxs)(u.default.Fragment,{children:[(0,c.jsx)(S,{definitions:e}),n<r.length-1&&(0,c.jsx)(j,{padding:!0})]},`${t}-details-${n}`)):(0,c.jsx)("p",{children:"No information available."})})]}))};let b=d.default.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,g=d.default.div`
  display: flex;
  padding-bottom: ${({theme:e})=>e.px.large};
`,v=d.default.div`
  align-items: center;
  background-color: ${e=>e.iconColor};
  border-radius: ${({theme:e})=>e.px.xsmall};
  display: flex;
  justify-content: center;

  height: 60px;
  width: 60px;

  position: relative;
`,y=d.default.span`
  font-size: 24px;
  text-transform: uppercase;
`,_=d.default.img`
  border-radius: ${({theme:e})=>e.px.xsmall};
  object-fit: cover;
  user-select: none;
  height: 100%;
  width: 100%;
`,x=d.default.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 0;
  margin-left: ${({theme:e})=>e.px.base};
`,O=d.default.span`
  font-size: ${({theme:e})=>e.fontSize.large};
  line-height: ${({theme:e})=>e.px.large};
  overflow: hidden;
  padding-bottom: ${({theme:e})=>e.px.xsmall};
  font-weight: ${({theme:e})=>e.fontWeight.bold};
  text-overflow: ellipsis;
  white-space: nowrap;
`,C=d.default.span`
  color: ${({theme:e})=>e.palette.textHelp};
  line-height: ${({theme:e})=>e.px.base};
  overflow: hidden;
  padding-bottom: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
`,w=d.default.div`
  border-radius: 2px;
  flex: 1;
  margin-top: ${({theme:e})=>e.px.large};
  margin-bottom: ${({theme:e})=>e.px.base};
  padding-right: ${({theme:e})=>e.px.base};
  overflow-y: auto;
`,j=d.default.div`
  border-bottom: solid 1px ${({theme:e})=>e.palette.background6};
  margin-bottom: ${({theme:e,padding:t})=>t&&e.px.base};
`,S=(0,d.default)(f.DefinitionList)`
  dt {
    text-align: left;
    text-transform: capitalize;
  }

  dd {
    overflow: hidden;
    text-align: right;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`},5168:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(818),t)},904:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getInitials=void 0,t.getInitials=e=>{let t=e.trim(),n=t.lastIndexOf(" ");return n>-1?[t.charAt(0),t.charAt(n+1)].join(""):t.slice(0,2)}},4492:function(e,t,n){var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.H6=t.H5=t.H4=t.H3=t.H2=t.H1=t.Heading=t.defaultSize=void 0;let r=n(4848),a=o(n(2770)),l=n(2317),s=n(5963);t.defaultSize={h1:l.Size.xxxlarge,h2:l.Size.xxlarge,h3:l.Size.xlarge,h4:l.Size.large,h5:l.Size.base,h6:l.Size.small},t.Heading=e=>{var{level:n=1,className:o}=e,a=i(e,["level","className"]);let l=`h${n}`;return(0,r.jsx)(c,Object.assign({className:o,as:l,size:t.defaultSize[l],weight:"bold"},a))};let c=(0,a.default)(s.Text)`
  line-height: ${({theme:e})=>e.lineHeight.heading};
`;t.H1=(0,a.default)(t.Heading).attrs(e=>Object.assign(Object.assign({},e),{level:1}))``,t.H2=(0,a.default)(t.Heading).attrs(e=>Object.assign(Object.assign({},e),{level:2}))``,t.H3=(0,a.default)(t.Heading).attrs(e=>Object.assign(Object.assign({},e),{level:3}))``,t.H4=(0,a.default)(t.Heading).attrs(e=>Object.assign(Object.assign({},e),{level:4}))``,t.H5=(0,a.default)(t.Heading).attrs(e=>Object.assign(Object.assign({},e),{level:5}))``,t.H6=(0,a.default)(t.Heading).attrs(e=>Object.assign(Object.assign({},e),{level:6}))``},5058:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(4492),t)},5963:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(1316),t)},1316:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0;let o=i(n(2770));t.Text=o.default.span`
  color: ${({theme:e,color:t="textDefault"})=>e.palette[t]};
  font-size: ${({theme:e,size:t="base"})=>e.fontSize[t]};
  font-weight: ${({theme:e,weight:t="normal"})=>e.fontWeight[t]};
  line-height: ${({theme:e})=>e.lineHeight.text};
`,t.Text.displayName="Text"},2762:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useColorScheme=t.ColorScheme=void 0;let i=n(2015);t.ColorScheme={dark:"dark",light:"light",system:"system"},t.useColorScheme=({colorScheme:e,fallbackScheme:n=t.ColorScheme.light})=>{let[r,a]=(0,i.useState)(e&&e!==t.ColorScheme.system?e:n),l=t=>{a(o(t,e||n))};return(0,i.useEffect)(()=>{let t=window.matchMedia("(prefers-color-scheme: dark)");return a(o(t,e||n)),t.addEventListener("change",l),()=>t.removeEventListener("change",l)},[e,r]),r};let o=(e,n)=>n===t.ColorScheme.system?e.matches?t.ColorScheme.dark:t.ColorScheme.light:n},6110:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDropdownKeyboardNavigation=void 0;let i=n(2015);t.useDropdownKeyboardNavigation=(e,t,n,o,r)=>{let a;let[l,s]=(0,i.useState)(0),[c,u]=(0,i.useState)("");if((0,i.useEffect)(()=>{if(t&&!n){let n=e.flat().findIndex(e=>e.value===t.value);n>=0&&s(n)}},[e,t,n]),(0,i.useEffect)(()=>{n||u("")},[n]),(0,i.useEffect)(()=>{if(c){let t=e.flat().findIndex(e=>e.title.toLowerCase().startsWith(c.toLowerCase()));t>=0&&s(t)}},[e,c]),e[0].length>0&&e.flat().length>l){let[t,n]=[Math.floor(l/e[0].length),l%e[0].length];a=e[t][n]}return(0,i.useEffect)(()=>{let e=setTimeout(()=>{u("")},500);return()=>clearTimeout(e)},[c]),{focusedOption:a,handleKeyDown:t=>{switch(t.code){case"ArrowUp":t.preventDefault(),l>0&&s(l-1);break;case"ArrowDown":t.preventDefault(),l<e.flat().length-1&&s(l+1);break;case"Enter":case"Space":t.preventDefault(),n&&((null==a?void 0:a.overrideOnClick)?a.overrideOnClick():r(null!=a?a:e[0][0])),o();break;case"Escape":t.preventDefault(),o(!1);break;default:/^[a-z0-9]$/i.test(t.key)&&u(e=>e+t.key)}}}}},7980:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useLayoutMediaQuery=t.useMediaQuery=void 0;let i=n(2015),o=e=>t=>{let[n,o]=(0,i.useState)(!1);return e(()=>{let e=window.matchMedia(t);if(e){e.matches!==n&&o(e.matches);let t=()=>o(e.matches);return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}},[n,t]),n};t.useMediaQuery=o(i.useEffect),t.useLayoutMediaQuery=o(i.useLayoutEffect)},421:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.usePrevious=void 0;let i=n(2015);t.usePrevious=e=>{let t=(0,i.useRef)();return(0,i.useEffect)(()=>{t.current=e},[e]),t.current}},5007:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTheme=void 0;let i=n(2015),o=n(4322),r=n(2762),a=n(532),l=n(7825),s={[r.ColorScheme.dark]:o.OpenFinDarkTheme,[r.ColorScheme.light]:o.OpenFinLightTheme};t.useTheme=({themes:e,scheme:t})=>{let n={},o=(0,r.useColorScheme)({colorScheme:t});try{n=(0,i.useMemo)(()=>((e,t)=>{let n=null==t?void 0:t[e],i=Object.assign({},s[e]);return n&&n.palette&&(i=(0,l.merge)(i,n,(0,a.createTheme)(n.palette))),i})(o,e),[e,o])}catch(e){console.error(e)}return n}},1440:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(2367),t),o(n(7787),t),o(n(759),t),o(n(4810),t),o(n(5825),t),o(n(8577),t),o(n(3189),t),o(n(4706),t),o(n(5918),t),o(n(5917),t),o(n(4416),t),o(n(2387),t),o(n(114),t),o(n(2649),t),o(n(4864),t),o(n(3842),t),o(n(9990),t),o(n(8045),t),o(n(6942),t),o(n(3982),t),o(n(6841),t),o(n(2685),t),o(n(2094),t),o(n(9916),t),o(n(8543),t),o(n(5168),t),o(n(5058),t),o(n(5963),t),o(n(2762),t),o(n(7980),t),o(n(421),t),o(n(6110),t),o(n(7013),t),o(n(9543),t),o(n(3679),t),o(n(3092),t)},9543:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.generateColorFromString=function(e="",t=70,n=50){let i=0;for(let t=0;t<e.length;t++)i=e.charCodeAt(t)+((i<<5)-i)|0;return`hsl(${i%360}, ${t}%, ${n}%)`}},7013:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.whenFin=function(e,t){let n="undefined"!=typeof fin?e:t;return"function"==typeof n?n():n}},9802:e=>{e.exports="https://cdn.openfin.co/ui-library/fonts/Inter-Italic.woff2"},9294:e=>{e.exports="https://cdn.openfin.co/ui-library/fonts/Inter-Regular.woff2"},3325:e=>{e.exports="https://cdn.openfin.co/ui-library/fonts/Inter-SemiBold.woff2"},2773:e=>{e.exports="https://cdn.openfin.co/ui-library/fonts/Inter-SemiBoldItalic.woff2"},824:e=>{e.exports=n(6542)},5322:e=>{e.exports=n(8898)},7825:e=>{e.exports=n(96)},2015:e=>{e.exports=n(5932)},9500:e=>{e.exports=n(1922)},2770:e=>{e.exports=n(2230)},6535:function(e){e.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t=/^\s+/,n=/\s+$/;function i(o,r){if(r=r||{},(o=o||"")instanceof i)return o;if(!(this instanceof i))return new i(o,r);var a,l,s,c,u,d,f,p,h,m,b,g,v,y,x,w,S,E,M,T,k=(u={r:0,g:0,b:0},d=1,f=null,p=null,h=null,m=!1,b=!1,"string"==typeof(a=o)&&(a=function(e){e=e.replace(t,"").replace(n,"").toLowerCase();var i,o=!1;if(_[e])e=_[e],o=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(i=I.rgb.exec(e))?{r:i[1],g:i[2],b:i[3]}:(i=I.rgba.exec(e))?{r:i[1],g:i[2],b:i[3],a:i[4]}:(i=I.hsl.exec(e))?{h:i[1],s:i[2],l:i[3]}:(i=I.hsla.exec(e))?{h:i[1],s:i[2],l:i[3],a:i[4]}:(i=I.hsv.exec(e))?{h:i[1],s:i[2],v:i[3]}:(i=I.hsva.exec(e))?{h:i[1],s:i[2],v:i[3],a:i[4]}:(i=I.hex8.exec(e))?{r:j(i[1]),g:j(i[2]),b:j(i[3]),a:j(i[4])/255,format:o?"name":"hex8"}:(i=I.hex6.exec(e))?{r:j(i[1]),g:j(i[2]),b:j(i[3]),format:o?"name":"hex"}:(i=I.hex4.exec(e))?{r:j(i[1]+""+i[1]),g:j(i[2]+""+i[2]),b:j(i[3]+""+i[3]),a:j(i[4]+""+i[4])/255,format:o?"name":"hex8"}:!!(i=I.hex3.exec(e))&&{r:j(i[1]+""+i[1]),g:j(i[2]+""+i[2]),b:j(i[3]+""+i[3]),format:o?"name":"hex"}}(a)),"object"==e(a)&&(D(a.r)&&D(a.g)&&D(a.b)?(l=a.r,s=a.g,c=a.b,u={r:255*C(l,255),g:255*C(s,255),b:255*C(c,255)},m=!0,b="%"===String(a.r).substr(-1)?"prgb":"rgb"):D(a.h)&&D(a.s)&&D(a.v)?(f=P(a.s),p=P(a.v),g=a.h,v=f,y=p,g=6*C(g,360),v=C(v,100),y=C(y,100),x=Math.floor(g),w=g-x,S=y*(1-v),E=y*(1-w*v),M=y*(1-(1-w)*v),u={r:255*[y,E,S,S,M,y][T=x%6],g:255*[M,y,y,E,S,S][T],b:255*[S,S,M,y,y,E][T]},m=!0,b="hsv"):D(a.h)&&D(a.s)&&D(a.l)&&(f=P(a.s),h=P(a.l),u=function(e,t,n){var i,o,r;function a(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(e=C(e,360),t=C(t,100),n=C(n,100),0===t)i=o=r=n;else{var l=n<.5?n*(1+t):n+t-n*t,s=2*n-l;i=a(s,l,e+1/3),o=a(s,l,e),r=a(s,l,e-1/3)}return{r:255*i,g:255*o,b:255*r}}(a.h,f,h),m=!0,b="hsl"),a.hasOwnProperty("a")&&(d=a.a)),d=O(d),{ok:m,format:a.format||b,r:Math.min(255,Math.max(u.r,0)),g:Math.min(255,Math.max(u.g,0)),b:Math.min(255,Math.max(u.b,0)),a:d});this._originalInput=o,this._r=k.r,this._g=k.g,this._b=k.b,this._a=k.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||k.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=k.ok}function o(e,t,n){var i,o,r=Math.max(e=C(e,255),t=C(t,255),n=C(n,255)),a=Math.min(e,t,n),l=(r+a)/2;if(r==a)i=o=0;else{var s=r-a;switch(o=l>.5?s/(2-r-a):s/(r+a),r){case e:i=(t-n)/s+(t<n?6:0);break;case t:i=(n-e)/s+2;break;case n:i=(e-t)/s+4}i/=6}return{h:i,s:o,l}}function r(e,t,n){var i,o,r=Math.max(e=C(e,255),t=C(t,255),n=C(n,255)),a=Math.min(e,t,n),l=r-a;if(o=0===r?0:l/r,r==a)i=0;else{switch(r){case e:i=(t-n)/l+(t<n?6:0);break;case t:i=(n-e)/l+2;break;case n:i=(e-t)/l+4}i/=6}return{h:i,s:o,v:r}}function a(e,t,n,i){var o=[S(Math.round(e).toString(16)),S(Math.round(t).toString(16)),S(Math.round(n).toString(16))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function l(e,t,n,i){return[S(E(i)),S(Math.round(e).toString(16)),S(Math.round(t).toString(16)),S(Math.round(n).toString(16))].join("")}function s(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.s-=t/100,n.s=w(n.s),i(n)}function c(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.s+=t/100,n.s=w(n.s),i(n)}function u(e){return i(e).desaturate(100)}function d(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.l+=t/100,n.l=w(n.l),i(n)}function f(e,t){t=0===t?0:t||10;var n=i(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),i(n)}function p(e,t){t=0===t?0:t||10;var n=i(e).toHsl();return n.l-=t/100,n.l=w(n.l),i(n)}function h(e,t){var n=i(e).toHsl(),o=(n.h+t)%360;return n.h=o<0?360+o:o,i(n)}function m(e){var t=i(e).toHsl();return t.h=(t.h+180)%360,i(t)}function b(e,t){if(isNaN(t)||t<=0)throw Error("Argument to polyad must be a positive number");for(var n=i(e).toHsl(),o=[i(e)],r=360/t,a=1;a<t;a++)o.push(i({h:(n.h+a*r)%360,s:n.s,l:n.l}));return o}function g(e){var t=i(e).toHsl(),n=t.h;return[i(e),i({h:(n+72)%360,s:t.s,l:t.l}),i({h:(n+216)%360,s:t.s,l:t.l})]}function v(e,t,n){t=t||6,n=n||30;var o=i(e).toHsl(),r=360/n,a=[i(e)];for(o.h=(o.h-(r*t>>1)+720)%360;--t;)o.h=(o.h+r)%360,a.push(i(o));return a}function y(e,t){t=t||6;for(var n=i(e).toHsv(),o=n.h,r=n.s,a=n.v,l=[],s=1/t;t--;)l.push(i({h:o,s:r,v:a})),a=(a+s)%1;return l}i.prototype={isDark:function(){return 128>this.getBrightness()},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,i=this.toRgb();return .2126*((e=i.r/255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*((t=i.g/255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*((n=i.b/255)<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=O(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=r(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=r(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),i=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+n+"%, "+i+"%)":"hsva("+t+", "+n+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var e=o(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=o(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),i=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+n+"%, "+i+"%)":"hsla("+t+", "+n+"%, "+i+"%, "+this._roundA+")"},toHex:function(e){return a(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){var t,n,i,o,r;return t=this._r,n=this._g,i=this._b,o=this._a,r=[S(Math.round(t).toString(16)),S(Math.round(n).toString(16)),S(Math.round(i).toString(16)),S(E(o))],e&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)&&r[3].charAt(0)==r[3].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*C(this._r,255))+"%",g:Math.round(100*C(this._g,255))+"%",b:Math.round(100*C(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*C(this._r,255))+"%, "+Math.round(100*C(this._g,255))+"%, "+Math.round(100*C(this._b,255))+"%)":"rgba("+Math.round(100*C(this._r,255))+"%, "+Math.round(100*C(this._g,255))+"%, "+Math.round(100*C(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(x[a(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+l(this._r,this._g,this._b,this._a),n=t,o=this._gradientType?"GradientType = 1, ":"";if(e){var r=i(e);n="#"+l(r._r,r._g,r._b,r._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,i=this._a<1&&this._a>=0;return t||!i||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(n=this.toRgbString()),"prgb"===e&&(n=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(n=this.toHexString()),"hex3"===e&&(n=this.toHexString(!0)),"hex4"===e&&(n=this.toHex8String(!0)),"hex8"===e&&(n=this.toHex8String()),"name"===e&&(n=this.toName()),"hsl"===e&&(n=this.toHslString()),"hsv"===e&&(n=this.toHsvString()),n||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return i(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(d,arguments)},brighten:function(){return this._applyModification(f,arguments)},darken:function(){return this._applyModification(p,arguments)},desaturate:function(){return this._applyModification(s,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(u,arguments)},spin:function(){return this._applyModification(h,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(v,arguments)},complement:function(){return this._applyCombination(m,arguments)},monochromatic:function(){return this._applyCombination(y,arguments)},splitcomplement:function(){return this._applyCombination(g,arguments)},triad:function(){return this._applyCombination(b,[3])},tetrad:function(){return this._applyCombination(b,[4])}},i.fromRatio=function(t,n){if("object"==e(t)){var o={};for(var r in t)t.hasOwnProperty(r)&&(o[r]="a"===r?t[r]:P(t[r]));t=o}return i(t,n)},i.equals=function(e,t){return!(!e||!t)&&i(e).toRgbString()==i(t).toRgbString()},i.random=function(){return i.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},i.mix=function(e,t,n){n=0===n?0:n||50;var o=i(e).toRgb(),r=i(t).toRgb(),a=n/100;return i({r:(r.r-o.r)*a+o.r,g:(r.g-o.g)*a+o.g,b:(r.b-o.b)*a+o.b,a:(r.a-o.a)*a+o.a})},i.readability=function(e,t){var n=i(e),o=i(t);return(Math.max(n.getLuminance(),o.getLuminance())+.05)/(Math.min(n.getLuminance(),o.getLuminance())+.05)},i.isReadable=function(e,t,n){var o,r,a,l,s,c=i.readability(e,t);switch(r=!1,("AA"!==(l=((a=(a=n)||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==l&&(l="AA"),"small"!==(s=(a.size||"small").toLowerCase())&&"large"!==s&&(s="small"),o={level:l,size:s}).level+o.size){case"AAsmall":case"AAAlarge":r=c>=4.5;break;case"AAlarge":r=c>=3;break;case"AAAsmall":r=c>=7}return r},i.mostReadable=function(e,t,n){var o,r,a,l,s=null,c=0;r=(n=n||{}).includeFallbackColors,a=n.level,l=n.size;for(var u=0;u<t.length;u++)(o=i.readability(e,t[u]))>c&&(c=o,s=i(t[u]));return i.isReadable(e,s,{level:a,size:l})||!r?s:(n.includeFallbackColors=!1,i.mostReadable(e,["#fff","#000"],n))};var _=i.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},x=i.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(_);function O(e){return(isNaN(e=parseFloat(e))||e<0||e>1)&&(e=1),e}function C(e,t){"string"==typeof(n=e)&&-1!=n.indexOf(".")&&1===parseFloat(n)&&(e="100%");var n,i,o="string"==typeof(i=e)&&-1!=i.indexOf("%");return e=Math.min(t,Math.max(0,parseFloat(e))),o&&(e=parseInt(e*t,10)/100),1e-6>Math.abs(e-t)?1:e%t/parseFloat(t)}function w(e){return Math.min(1,Math.max(0,e))}function j(e){return parseInt(e,16)}function S(e){return 1==e.length?"0"+e:""+e}function P(e){return e<=1&&(e=100*e+"%"),e}function E(e){return Math.round(255*parseFloat(e)).toString(16)}var M,T,k,I=(T="[\\s|\\(]+("+(M="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",k="[\\s|\\(]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")[,|\\s]+("+M+")\\s*\\)?",{CSS_UNIT:new RegExp(M),rgb:RegExp("rgb"+T),rgba:RegExp("rgba"+k),hsl:RegExp("hsl"+T),hsla:RegExp("hsla"+k),hsv:RegExp("hsv"+T),hsva:RegExp("hsva"+k),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function D(e){return!!I.CSS_UNIT.exec(e)}return i}()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,exports:{}};return i[e].call(n.exports,n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a=r(1440);for(var l in a)t[l]=a[l];a.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})},7260:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultInputBoxCSS=t.Label=t.SingleLineText=t.InputContainer=void 0;let a=r(n(2230)),l=n(7250);t.InputContainer=(0,a.default)(l.Box)`
  width: 100%;
  display: flex;
 `,t.SingleLineText=a.css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
`,t.Label=a.default.label`
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
  ${t.SingleLineText}
`,t.defaultInputBoxCSS=a.css`
  width: 100%;
  padding: ${({theme:e})=>`${e.px.small} ${e.px.base}`};
  border-radius: ${({theme:e})=>e.radius.small};
  background: ${({theme:e})=>e.palette.inputBackground};
  border: 1px solid
    ${e=>e.$validationError?e.theme.palette.statusCritical:"transparent"};
  color: ${({theme:e})=>e.palette.textDefault};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &::placeholder {
    color: ${({theme:e})=>e.palette.inputPlaceholder};
  }

  &:focus {
    border: 1px solid ${({theme:e})=>e.palette.brandPrimary};
    outline: none;
  }
`},7261:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeNotification=void 0;let i=n(4022);t.removeNotification=new i.Signal(i.Aggregators.AWAIT_VOID)},7342:e=>{"use strict";e.exports=x},7344:e=>{"use strict";e.exports=O},7379:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FormError=void 0;let o=i(n(2230)),r=n(7250),a=i(n(5932));t.FormError=({error:e})=>a.default.createElement(l,null,a.default.createElement(r.Icon,{icon:"ExclamationCircledFilledIcon",color:"red"})," ",e);let l=(0,o.default)(r.Text)`
  margin-bottom: ${({theme:e})=>e.px.small};
  display: flex;
  gap: ${({theme:e})=>e.px.xsmall};
`},7380:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleFilter=void 0;let i=n(7451),o=n(2373);t.ToggleFilter=class{constructor(){this._toggleBlockTimer=new o.Timer(750),this._blurBlockTimer=new o.Timer(750)}recordBlur(){return this._blurBlockTimer.running?(this._blurBlockTimer.clear(),!1):(this._toggleBlockTimer.start(),!0)}recordToggle(e){if(e===i.ToggleCenterVisibilitySource.API||e===i.ToggleCenterVisibilitySource.TRAY){let e=this._toggleBlockTimer.running;return this._toggleBlockTimer.clear(),!e&&(this._blurBlockTimer.start(),!0)}return!0}}},7383:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initialSecuritySettingsState=void 0,t.initialSecuritySettingsState={notificationSecurityRules:{}}},7446:e=>{"use strict";e.exports=C},7451:function(e,t,n){"use strict";var i,o,r=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.ApplySnapshot=t.UsingCustomManifest=t.RaiseAnalyticsEvent=t.HideModal=t.ShowModal=t.selectVisibleErrors=t.selectErrors=t.Unfreeze=t.Freeze=t.UpdateAppToastPersistState=t.SetSelectedPlatform=t.UpdateStreamMuteState=t.UpdateAppMuteState=t.ExpireNotification=t.DismissError=t.PushError=t.RegisterStream=t.RegisterApplication=t.ToggleCenterMuted=t.ToggleCenterLocked=t.BlurCenter=t.HideCenter=t.ShowCenter=t.ToggleCenterVisibility=t.ClickFragment=t.ClickButton=t.ClickNotification=t.RemoveNotifications=t.InitiateRemoveAllNotifications=t.UpdateNotification=t.CreateNotification=t.ToggleCenterVisibilitySource=void 0;let l=n(6566),s=n(6455),c=n(7380),u=n(3363),d=n(0),f=n(4887),p=n(6012),h=n(5425),m=n(8136),b=n(7676),g=n(2471),v=n(8320),y=n(7031),_=n(7261),x=n(8001);a(n(7540),t),(i=o=t.ToggleCenterVisibilitySource||(t.ToggleCenterVisibilitySource={}))[i.API=0]="API",i[i.TRAY=1]="TRAY",i[i.BUTTON=2]="BUTTON",i[i.INTERNAL=3]="INTERNAL",i[i.HOTKEY=4]="HOTKEY";class O extends l.Action{get notification(){return this._notification}constructor(e){super(),this._notification=e}async handleStreamStatus(e,t){let n=e.notification.stream;if(n){let i=t.state.streams.get(n.id);if(!i||i.displayName!==n.displayName){let i=e.source.identity.uuid;await t.dispatch(new A(n,i))}}}async call(e,t){var n;let i=this.notification;this._notification=Object.assign(Object.assign({},this.notification),{title:(0,u.getStreamTitle)(e.state.streams,null===(n=i.notification.stream)||void 0===n?void 0:n.id)||(0,u.getSourceTitle)(this.notification.source,e.state.applications)});let o=e.state.reminders.find(e=>e.id===i.id);o&&await e.dispatch(new v.CancelReminder(o));let r=e.state.notifications.filter(e=>e.id===i.id);r.length&&await e.dispatch(new j(r)),await this.handleStreamStatus(i,e),await t()}reduce(e){let{notification:t}=this,n=e.notifications.slice(),i=e.notifications.findIndex(e=>e.id===t.id);i>=0?(console.warn(`Attempted to add a notification with duplicate id '${t.id}'. Will replace existing notification.`),n[i]=t):n.push(t);let o=e.stickyNotifications.slice();if((0,p.isSticky)(t.notification)){let e=o.findIndex(e=>e.id===t.id);e>=0?o[e]=t:o.push(t)}let r=(0,m.insertNotificationIntoSortedMaps)(e.sortedNotifications,t),a=new Map(e.platform.counts),l=t.notification.platform;if(l){let e=a.get(l);a.set(l,e?e+1:1)}return Object.assign(Object.assign({},e),{notifications:n,stickyNotifications:o,sortedNotifications:r,platform:Object.assign(Object.assign({},e.platform),{counts:a})})}}t.CreateNotification=O;class C extends l.Action{constructor(e){super(),this.updatePayload=e,this._updatedNotification=null}get updatedNotification(){return this._updatedNotification}async call(e,t){e.state.reminders.find(e=>e.notification.id===this.updatePayload.id)&&await e.dispatch(new v.UpdateReminder(this.updatePayload)),await t()}reduce(e){var t;let n=[...e.notifications];return this._updatedNotification=(0,y.updateCollection)(n,this.updatePayload),this._updatedNotification?Object.assign(Object.assign(Object.assign({},e),{notifications:n}),{stickyNotifications:(t=this._updatedNotification)&&(0,p.isSticky)(t.notification)?e.stickyNotifications.map(e=>e.id===t.id?t:e):e.stickyNotifications,sortedNotifications:(0,m.insertNotificationIntoSortedMaps)(e.sortedNotifications,t)}):Object.assign({},e)}}t.UpdateNotification=C;class w extends l.Action{constructor(e){super(),this.notifications=e}}t.InitiateRemoveAllNotifications=w;class j extends l.Action{constructor(e,t){super(),this.notifications=e,this.action=t}async call(e,t){let{notifications:n}=this,i=n.map(e=>e.id);for(let t of e.state.reminders.filter(e=>i.includes(e.id)))await e.dispatch(new v.CancelReminder(t));for(let e of n)await _.removeNotification.emit(e);await t();let o=(0,h.getDefaultPlatform)(e);o&&await e.dispatch(new H(o))}reduce(e){let{notifications:t}=this,n=t.map(e=>e.id),i=e.stickyNotifications.slice();t.forEach(e=>{(0,p.isSticky)(e.notification)&&(i=i.filter(t=>t.id!==e.id))});let o=Object.assign({},e.sortedNotifications),r=new Map(e.platform.counts);for(let e of t){o=(0,m.removeNotificationFromSortedMaps)(o,e);let t=e.notification.platform;if(t){let e=r.get(t);r.set(t,e?e-1:1)}}return Object.assign(Object.assign({},e),{notifications:e.notifications.filter(e=>-1===n.indexOf(e.id)),stickyNotifications:i,search:Object.assign(Object.assign({},e.search),{results:e.search.results.filter(({item:e})=>-1===n.indexOf(e.id))}),sortedNotifications:o,platform:Object.assign(Object.assign({},e.platform),{counts:r})})}}t.RemoveNotifications=j;class S extends l.Action{constructor(e){super(),this.notification=e}async call(e,t){var n,i;(null===(n=this.notification.notification.onSelect)||void 0===n?void 0:n.__NOOP__)===s.ActionNoopType.EVENT_DISMISS&&console.warn("[DEPRECATED]: __NOOP__ has been deprecated, Notifications now will not trigger the dismiss action when the body is clicked by default."),(null===(i=this.notification.notification.onSelect)||void 0===i?void 0:i.BODY_CLICK)===s.ActionBodyClickType.DISMISS_EVENT&&(e.state.centerVisible?await e.dispatch(new j([this.notification])):await e.dispatch(new b.MinimizeToast(this.notification))),await (0,h.getTargetOrError)(e,this.notification.notification)&&await t()}}t.ClickNotification=S;class P extends l.Action{constructor(e,t){super(),this.notification=e,this.buttonIndex=t}async call(e,t){await (0,h.getTargetOrError)(e,this.notification.notification)&&await Promise.all([t(),e.dispatch(new j([this.notification]))])}}t.ClickButton=P;class E extends l.Action{constructor(e,t,n){super(),this.notification=e,this.fragment=t,this.isToast=n}}t.ClickFragment=E;class M extends l.Action{constructor(e,t){super(),this.source=e,this.visible=t}async call(e,t){(this.source===o.INTERNAL||G.recordToggle(this.source))&&await t();let n=void 0!==this.visible?this.visible:e.state.centerVisible;e.state.settings.clearFiltersOnCenterShow&&this.source!==o.HOTKEY&&n&&(0,x.clearAllFilterSettings)(e),await e.dispatch(new g.SetSearchMode(!1))}reduce(e){let t=void 0!==this.visible?this.visible:!e.centerVisible;return Object.assign(Object.assign({},e),{centerVisible:t})}}t.ToggleCenterVisibility=M;class T extends l.Action{constructor(e){super(),this.navigateToAll=e}async call(e,t){G.recordToggle(o.API),this.navigateToAll&&await e.dispatch(new H(void 0)),await t()}reduce(e){return Object.assign(Object.assign({},e),{centerVisible:!0})}}t.ShowCenter=T;class k extends l.Action{constructor(){super()}reduce(e){return Object.assign(Object.assign({},e),{centerVisible:!1})}}t.HideCenter=k;class I extends l.Action{async call(e,t){G.recordBlur()&&await t()}reduce(e){return Object.assign(Object.assign({},e),{centerVisible:!1})}}t.BlurCenter=I;class D extends l.Action{reduce(e){return Object.assign(Object.assign({},e),{centerLocked:!e.centerLocked})}}t.ToggleCenterLocked=D;class $ extends l.Action{reduce(e){return Object.assign(Object.assign({},e),{centerMuted:!e.centerMuted})}}t.ToggleCenterMuted=$;class N extends l.Action{constructor(e){super(),this.application=e}reduce(e){let t=e.applications.get(this.application.id),n=e.notifications,i=e.reminders;if(t&&t.title!==this.application.title){let t=this.application.title;n=e.notifications.map(e=>Object.assign(Object.assign({},e),{title:t})),i=e.reminders.map(e=>Object.assign(Object.assign({},e),{title:t}))}let o=Object.assign(Object.assign({},this.application),{muted:t?t.muted:this.application.muted,persistToasts:t?t.persistToasts:this.application.persistToasts}),r=new Map(e.applications);return r.set(o.id,o),Object.assign(Object.assign({},e),{applications:r,notifications:n,reminders:i})}}t.RegisterApplication=N;class A extends l.Action{constructor(e,t){super(),this.stream=e,this._appId=t}reduce(e){let t=e.streams.get(this.stream.id),n=new Map(e.streams);return n.set(this.stream.id,Object.assign(Object.assign({},this.stream),{muted:!!t&&t.muted,appId:this._appId})),Object.assign(Object.assign({},e),{streams:n})}}t.RegisterStream=A;class F extends l.Action{constructor(e,t){super(),this.id=e,this.message=t}reduce(e){let t=new Map(e.errors);return t.delete(this.id),t.set(this.id,{id:this.id,message:this.message}),Object.assign(Object.assign({},e),{errors:t})}}t.PushError=F;class R extends l.Action{constructor(e){super(),this.id=e}reduce(e){let t=new Map(e.errors);return t.delete(this.id),Object.assign(Object.assign({},e),{errors:t})}}t.DismissError=R;class B extends l.Action{constructor(e){super(),this.notification=e}async call(e,t){await Promise.all([t(),e.dispatch(new j([this.notification]))])}}t.ExpireNotification=B;class L extends l.Action{constructor(e,t){super(),this.application=e,this.muted=t}reduce(e){let t=this.application,n=new Map(e.applications);return n.set(t.id,Object.assign(Object.assign({},t),{muted:this.muted})),Object.assign(Object.assign({},e),{applications:n})}}t.UpdateAppMuteState=L;class z extends l.Action{constructor(e,t){super(),this.stream=e,this.muted=t}reduce(e){let t=this.stream,n=new Map(e.streams);return n.set(t.id,Object.assign(Object.assign({},t),{muted:this.muted})),Object.assign(Object.assign({},e),{streams:n})}}t.UpdateStreamMuteState=z;class H extends l.Action{constructor(e){super(),this.id=e}reduce(e){return Object.assign(Object.assign({},e),{platform:Object.assign(Object.assign({},e.platform),{selected:this.id})})}}t.SetSelectedPlatform=H;class V extends l.Action{constructor(e,t){super(),this.application=e,this.persistToasts=t}reduce(e){let t=this.application,n=new Map(e.applications);return n.set(t.id,Object.assign(Object.assign({},t),{persistToasts:this.persistToasts})),Object.assign(Object.assign({},e),{applications:n})}}t.UpdateAppToastPersistState=V;class W extends l.KeyedAction{constructor(){super("frozen")}reduce(){return!0}}t.Freeze=W;class U extends l.KeyedAction{constructor(){super("frozen")}reduce(){return!1}}t.Unfreeze=U;let G=new c.ToggleFilter;t.selectErrors=e=>e.errors,t.selectVisibleErrors=(0,d.createSelector)(t.selectErrors,e=>Array.from(e.values()).slice(-f.maxVisibleUserFacingErrors).reverse());class q extends l.Action{constructor(e){super(),this.config=e}}t.ShowModal=q;class K extends l.Action{constructor(e){super(),this.id=e}}t.HideModal=K;class Z extends l.Action{constructor(e,t){super(),this.event=e,this.platformId=t}}t.RaiseAnalyticsEvent=Z;class Y extends l.Action{reduce(e){return Object.assign(Object.assign({},e),{customManifest:!0})}}t.UsingCustomManifest=Y;class X extends l.Action{constructor(e){super(),this.snapshot=e}reduce(e){let t=new Map(this.snapshot.applications.map(e=>[e.id,e])),n=new Map(this.snapshot.streams.map(e=>[e.id,e])),i=b.initialSortedNotificationsState;return this.snapshot.notifications.forEach(e=>{i=(0,m.insertNotificationIntoSortedMaps)(i,e)}),Object.assign(Object.assign({},e),{applications:t,streams:n,notifications:this.snapshot.notifications,reminders:this.snapshot.reminders,sortedNotifications:i})}}t.ApplySnapshot=X},7527:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetSelectedCategorySorting=t.SetSelectedCategory=t.CategorySortTypesNamesMap=t.CategoryNamesMap=t.initialCategoryState=void 0;let i=n(6566);t.initialCategoryState={selectedCategory:"all",sortType:"date",sortDirection:"descending"},t.CategoryNamesMap={all:"All","needs-attention":"Needs Attention",sender:"Group by Sender",reminders:"Reminders"},t.CategorySortTypesNamesMap={"date-ascending":"Oldest","date-descending":"Newest","priority-ascending":"Lowest Priority","priority-descending":"Highest Priority"};class o extends i.Action{constructor(e){super(),this.category=e}reduce(e){return Object.assign(Object.assign({},e),{categories:Object.assign(Object.assign({},e.categories),{selectedCategory:this.category})})}}t.SetSelectedCategory=o;class r extends i.Action{constructor(e,t){super(),this.sortType=e,this.sortDirection=t}reduce(e){return Object.assign(Object.assign({},e),{categories:Object.assign(Object.assign({},e.categories),{sortType:this.sortType||e.categories.sortType,sortDirection:this.sortDirection||e.categories.sortDirection})})}}t.SetSelectedCategorySorting=r},7530:e=>{"use strict";e.exports=w},7540:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectPlatformNotificationCounts=t.selectPlatformSearchResults=t.selectPlatformReminders=t.selectPlatformNotifications=t.selectActivePlatforms=t.selectCurrentPlatform=t.selectPlatformScheme=t.selectPlatformTheme=t.selectCounts=t.selectPlatforms=t.DeregisterPlatform=t.UpdatePlatformScheme=t.RegisterPlatform=t.initialPlatformState=void 0;let i=n(6566),o=n(0);t.initialPlatformState={list:new Map,counts:new Map};class r extends i.Action{constructor(e){super(),this.platform=e}reduce(e){let t=new Map(e.platform.list);t.set(this.platform.id,Object.assign(Object.assign({},this.platform),{active:!0}));let n=new Map(e.platform.counts);return n.set(this.platform.id,e.notifications.filter(e=>e.notification.platform===this.platform.id).length),Object.assign(Object.assign({},e),{platform:Object.assign(Object.assign({},e.platform),{list:t,counts:n})})}}t.RegisterPlatform=r;class a extends i.Action{constructor(e,t){super(),this.scheme=e,this.identity=t}reduce(e){let t=e.theme,n=new Map(e.platform.list);return n.forEach(i=>{i.platformIdentity.uuid===this.identity.uuid&&(n.set(i.id,Object.assign(Object.assign({},i),{scheme:this.scheme})),i.id===e.platform.selected&&(t={themes:i.theme,scheme:this.scheme}))}),Object.assign(Object.assign({},e),{platform:Object.assign(Object.assign({},e.platform),{list:n}),theme:t})}}t.UpdatePlatformScheme=a;class l extends i.KeyedAction{constructor(e){super("platform"),this.id=e}reduce(e){let t=new Map(e.list),n=t.get(this.id);return n?t.set(this.id,Object.assign(Object.assign({},n),{active:!1})):console.warn(`Platform to deregister (id: ${this.id}) could not be found.`),Object.assign(Object.assign({},e),{list:t})}}t.DeregisterPlatform=l,t.selectPlatforms=e=>e.platform.list,t.selectCounts=e=>e.platform.counts,t.selectPlatformTheme=(0,o.createSelector)([t.selectPlatforms,(e,t)=>t],(e,t)=>{var n;return null===(n=e.get(t))||void 0===n?void 0:n.theme}),t.selectPlatformScheme=(0,o.createSelector)([t.selectPlatforms,(e,t)=>t],(e,t)=>{var n;return null===(n=e.get(t))||void 0===n?void 0:n.scheme}),t.selectCurrentPlatform=e=>e.platform.selected,t.selectActivePlatforms=(0,o.createSelector)(t.selectPlatforms,e=>Array.from(e.values()).filter(e=>e.active)),t.selectPlatformNotifications=(0,o.createSelector)(e=>e.notifications,t.selectCurrentPlatform,(e,t)=>t?e.filter(e=>e.notification.platform===t):e),t.selectPlatformReminders=(0,o.createSelector)(e=>e.reminders,t.selectCurrentPlatform,(e,t)=>t?e.filter(e=>e.notification.platform===t):e),t.selectPlatformSearchResults=(0,o.createSelector)(e=>e.search.results,t.selectCurrentPlatform,(e,t)=>t?e.filter(e=>e.item.notification.platform===t):e),t.selectPlatformNotificationCounts=(0,o.createSelector)([t.selectCounts,(e,t)=>t],(e,t)=>e.get(t)||0)},7581:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useModalDialog=void 0;let i=n(5932),o=n(7049),r=n(6975),a=n(3413),l=n(6415);t.useModalDialog=(e,t,n,s,c,u,d)=>{let f=(0,i.useRef)(null),[p,h]=(0,i.useState)(!1),[m]=(0,o.usePosition)(),[b,g]=(0,i.useState)(0),{setTimePickerConfig:v,setDatePickerConfig:y,setMenuConfig:_,setIsTimePickerModalOpen:x,setIsDatePickerModalOpen:O,setIsMenuModalOpen:C,setModalType:w}=(0,i.useContext)(l.WebModalContext);return(0,i.useEffect)(()=>{if(p){let i=f.current,o=i?m(i):null;if(o&&i){let l={id:(0,a.randomUUID)()},p=Object.assign(Object.assign({},s(n(f),i,o)),{onDismiss:e=>{g(b+1),h(!1),c(e),"web"===u&&("time"===d?x(!1):"date"===d?O(!1):"menu"===d&&C(!1))},identity:l}),m=()=>t(l.id);return"desktop"===u?(e(p),(0,r.subscribeScrollableContainers)(i,m)):"web"===u&&(console.log("setting modal config",d),w("widget"),"time"===d?(v(Object.assign({},p)),x(!0)):"date"===d?(y(Object.assign({},p)),O(!0)):"menu"===d&&(_(Object.assign({},p)),C(!0))),()=>{i&&"desktop"===u&&(0,r.unsubscribeScrollableContainers)(i,m)}}}},[p,f.current]),[p,h,f,b]}},7586:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ROUTES=void 0,t.ROUTES={NOTIFICATIONS:"/center/notifications",SETTINGS:"/center/settings",ADVANCED_SETTINGS:"/center/settings/advanced"}},7603:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MultiFieldFormContainer=void 0;let o=n(7250),r=i(n(5932)),a=i(n(2230)),l=n(6370),s=n(388),c=n(1270),u=n(4116),d=n(7379),f=n(4515),p=n(3081);t.MultiFieldFormContainer=({notificationId:e,templateContent:t,fields:n,children:i})=>{let a=r.default.useRef(null),[m,b]=(0,l.useFormContainerExpander)(e),g=(0,u.useFormError)(e);return(0,s.useCollapsibleCardHeaderEdgeCaseBehavior)(a,t,m,b),(0,c.useCollapsibleCardHeaderScroll)(a,t,m),(0,p.useScrollToFirstElementOnExpand)(a,m),r.default.createElement(h,null,r.default.createElement(o.CollapsibleCardStateless,{ref:a,onExpand:b,title:r.default.createElement(f.CollapsibleCardTitle,{expanded:m,fieldTitles:n.map(e=>{var t;return null!==(t=e.label)&&void 0!==t?t:"Unlabeled Field"})}),headerSettings:{fixedHeader:!0,zIndex:1e3},expanded:m||!1},g?r.default.createElement(d.FormError,{error:g}):null,i))};let h=(0,a.default)(o.Box)`
  width: 100%;
  padding-top: ${e=>e.theme.px.small};
  form {
    width: 100%;
  }
`},7620:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SingleFieldFormContainer=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(258),u=n(9130),d=n(1827),f=n(4116),p=n(7379);t.SingleFieldFormContainer=({children:e,notificationId:t})=>{let n=(0,u.useDispatch)(),{dirty:i}=(0,c.useFormikContext)(),o=(0,f.useFormError)(t);return(0,l.useEffect)(()=>{n&&i&&n(new d.NotificationFormEditStart(t))},[i,n,t]),l.default.createElement(h,null,o?l.default.createElement(p.FormError,{error:o}):null,e)};let h=s.default.div`
  padding: ${e=>e.theme.px.base};
  padding-top: ${e=>e.theme.px.small};
  padding-bottom: 0;
`},7676:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStickyNotifications=t.getNotifications=t.NotificationToastControlBarAction=t.MinimizeAllToast=t.MinimizeToast=t.ApplyNotificationModifier=t.SubmitNotificationForm=t.initialSortedNotificationsState=void 0;let i=n(6566),o=n(0),r=n(6012);t.initialSortedNotificationsState={byId:{},byApplication:{},byStream:{}};class a extends i.KeyedAction{constructor(e,t,n){super("notifications"),this.notification=e,this.form=t,this.button=n}}t.SubmitNotificationForm=a;class l extends i.KeyedAction{constructor(e,t){super("notifications"),this.modifiers=t,this.notification=Object.assign(Object.assign({},e),{modifiers:Object.assign({},t)})}reduce(e){let{id:t}=this.notification,n=[...e],i=[...e].findIndex(e=>e.id===t),o=Object.assign(Object.assign({},n[i]),{modifiers:this.modifiers});return n[i]=o,n}}t.ApplyNotificationModifier=l;class s extends i.Action{constructor(e){super(),this.notification=e}async call(e,t){(0,r.isSticky)(this.notification.notification)&&await e.dispatch(new l(this.notification,{notSticky:!0})),await t()}reduce(e){let{notification:t}=this;return(0,r.isSticky)(t.notification)?Object.assign(Object.assign({},e),{stickyNotifications:[...e.stickyNotifications.filter(e=>e.id!==t.id)]}):e}}t.MinimizeToast=s;class c extends i.Action{constructor(e){super(),this.notifications=e}async call(e,t){let n=this.notifications.map(async t=>{await e.dispatch(new s(t))});await Promise.all(n),await t()}reduce(e){return e}}t.MinimizeAllToast=c;class u extends i.Action{constructor(e){super(),this.action=e}}t.NotificationToastControlBarAction=u,t.getNotifications=e=>e.notifications,t.getStickyNotifications=(0,o.createSelector)(t.getNotifications,e=>e.filter(e=>{var t;return(0,r.isSticky)(e.notification)&&!(null===(t=e.modifiers)||void 0===t?void 0:t.notSticky)}))},7953:function(e,t,n){"use strict";var i,o,r=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ResizeWrapper=t.ResizeContext=t.MeasureMode=void 0;let s=l(n(5932));(i=o=t.MeasureMode||(t.MeasureMode={}))[i.CONSTANT=0]="CONSTANT",i[i.ONCE=1]="ONCE",t.ResizeContext=s.createContext({});let c={margin:"0",display:"inline-block"};t.ResizeWrapper=e=>{let{children:n,onModifySize:i,onSize:r,mode:a,onResize:l}=e,u=Object.assign(Object.assign({},c),e.style),d=s.useRef(null);return s.useEffect(()=>{let e=d.current;e&&Promise.all(Array.from(e.getElementsByTagName("img")).map(e=>new Promise(t=>{e.complete&&e.naturalWidth>0?t():(e.addEventListener("load",()=>t(),{once:!0}),e.addEventListener("error",()=>t(),{once:!0}))}))).then(()=>(()=>{let{width:t,height:n}=e.getBoundingClientRect();t&&n&&r&&r({x:t,y:n})})())},a===o.ONCE?[]:[n]),s.createElement(t.ResizeContext.Provider,{value:{emitResize:e=>{if(!d.current||!l)return;let{width:t,height:n}=d.current.getBoundingClientRect();t&&n&&l({x:t,y:n+(null!=e?e:0)})},emitModify:e=>{null==i||i(null!=e?e:{x:0,y:0})}}},s.createElement("div",{ref:d,style:u},s.Children.only(n)))}},7982:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.NotificationTime=void 0;let o=n(7250),r=i(n(5932)),a=i(n(2230));t.NotificationTime=e=>{let{timeStrings:t}=e;return r.default.createElement(s,null,r.default.createElement(l,{size:"base","data-testid":"time","aria-label":`${t[1]?"":" Received"} ${t[0]}`},t[0]),t[1]?r.default.createElement(l,{size:"base","data-testid":"time"},` ${t[1]}`):r.default.createElement(r.default.Fragment,null))};let l=(0,a.default)(o.Text)`
  color: ${o.Color.lightGray5};
  ${o.Mixins.textOverflow};
  white-space: pre;
  line-height: 16px;
`,s=(0,a.default)(o.Box)`
  top: 1px;
  flex-direction: column;
  align-items: flex-end;
`},8001:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearAllFilterSettings=void 0;let i=n(7451),o=n(7527);t.clearAllFilterSettings=e=>{e.dispatch(new o.SetSelectedCategory("all")),e.dispatch(new i.SetSelectedPlatform(void 0)),e.dispatch(new o.SetSelectedCategorySorting("date","descending"))}},8004:(e,t)=>{"use strict";var n,i;Object.defineProperty(t,"__esModule",{value:!0}),t.Inject=void 0,(i=n||(n={}))[i.API_HANDLER=0]="API_HANDLER",i[i.CLIENT_EVENT_CONTROLLER=1]="CLIENT_EVENT_CONTROLLER",i[i.CLIENT_REGISTRY=2]="CLIENT_REGISTRY",i[i.DATABASE=3]="DATABASE",i[i.ENVIRONMENT=4]="ENVIRONMENT",i[i.EVENT_PUMP=5]="EVENT_PUMP",i[i.SCHEDULER=6]="SCHEDULER",i[i.FRAME_MANAGER=7]="FRAME_MANAGER",i[i.LAYOUTER=8]="LAYOUTER",i[i.MONITOR_MODEL=9]="MONITOR_MODEL",i[i.NOTIFICATION_CENTER=10]="NOTIFICATION_CENTER",i[i.PERSISTOR=11]="PERSISTOR",i[i.STORE=12]="STORE",i[i.TOAST_MANAGER=13]="TOAST_MANAGER",i[i.TOAST_STATE_HANDLER=14]="TOAST_STATE_HANDLER",i[i.LAYOUT_STACK=15]="LAYOUT_STACK",i[i.TRAY_ICON=16]="TRAY_ICON",i[i.WEB_WINDOW_FACTORY=17]="WEB_WINDOW_FACTORY",i[i.WINDOW_MANAGER=18]="WINDOW_MANAGER",i[i.DISPLAY_CONTROLLER=19]="DISPLAY_CONTROLLER",i[i.ANALYTICS_CONTROLLER=20]="ANALYTICS_CONTROLLER",i[i.WORKSPACE_SYNC_CONTROLLER=21]="WORKSPACE_SYNC_CONTROLLER",i[i.TOAST_CUSTOM_LOCATION_CONTROLLER=22]="TOAST_CUSTOM_LOCATION_CONTROLLER",i[i.MODAL_CONTROLLER=23]="MODAL_CONTROLLER",i[i.WINDOW_POOL=24]="WINDOW_POOL",i[i.NOTIFICATION_FORM_EDIT_MANAGER=25]="NOTIFICATION_FORM_EDIT_MANAGER",i[i.SECURITY_SETTINGS_CONTROLLER=26]="SECURITY_SETTINGS_CONTROLLER",t.Inject=Object.keys(n).filter(e=>"string"==typeof e).reduce((e,t)=>(e[t]=t,e),{})},8017:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SetReminderModal=void 0;let l=n(7250),s=n(7451),c=n(4800),u=n(2207),d=n(5738),f=r(n(5932)),p=n(9130),h=a(n(2230)),m=n(6464),b=n(5046),g=n(9247);t.SetReminderModal=(0,p.connect)(e=>({mode:e.mode}),e=>({showModal:t=>e(new s.ShowModal(t)),raiseAnalyticsEvent:t=>e(new s.RaiseAnalyticsEvent(t))}))(({notification:e,onDismiss:t,showModal:n,getModalBounds:i,mode:o,position:r,modalType:a})=>{let[s,p]=(0,f.useState)(!0),[h,C]=(0,f.useState)(Date.now()),[w,j]=(0,f.useState)(void 0),S=(0,f.useMemo)(()=>Array.from(Array(24).keys()).map(e=>({title:`${e%12||12}:00 ${e>=12?"PM":"AM"}`,value:`${e.toString().padStart(2,"0")}:00`})),[]),P=(0,d.startOfHour)(Date.now()+(0,d.hoursToMilliseconds)(1)).valueOf(),E=(0,b.useValidation)((0,f.useCallback)(t=>{let n=(0,u.getZonedDate)(t).valueOf(),i=(0,d.startOfDay)((0,u.getZonedDate)()).valueOf(),o=e.notification.expires;return n<i?"You must select today or a date in the future.":o&&(0,d.startOfDay)((0,u.getZonedDate)(o)).valueOf()<(0,d.startOfDay)((0,u.getZonedDate)(n)).valueOf()?`This notification expires at ${(0,d.format)(o,"p, MMMM d y")}. You must select a date before the expiration date.`:""},[e.notification.expires]),(0,u.localDateString)(P)),{isValid:M,value:T}=E,k=(0,b.useValidation)((0,f.useCallback)(t=>{if(M){let n=(0,u.getZonedDate)(`${T} ${t}`).valueOf(),i=e.notification.expires;if(n<(0,u.getZonedDate)().valueOf())return"You must select a time in the future.";if(i&&(0,u.getZonedDate)(i).valueOf()<n)return`This notification expires at ${(0,d.format)(i,"p, MMMM d y")}. You must select a time before the expiration time.`}return""},[M,T,e.notification.expires]),(0,u.localTimeString)(P)),{isValid:I,value:D}=k;return(0,f.useEffect)(()=>{p(I&&M)},[I,M]),(0,f.useEffect)(()=>{C((0,u.getZonedDate)(`${T} ${D}`).valueOf())},[T,D,C]),(0,f.useEffect)(()=>{if("00"===D.substring(3))try{let e=parseInt(D.substring(0,2));e<24&&j(S[e])}catch(e){j(void 0)}else j(void 0)},[D,S]),f.default.createElement(v,{width:m.modalWidth,mode:o,position:r,modalType:a},f.default.createElement(y,null,f.default.createElement(_,null," Remind me in... "),f.default.createElement(x,null,f.default.createElement(c.HeaderButton,{onClick:()=>null==t?void 0:t(),"aria-label":"close"},f.default.createElement(l.Icon,{icon:"Cross1Icon",size:"base"})))),f.default.createElement(g.DateTimeInput,Object.assign({type:"Calendar",inputType:"date",getBounds:i,showModal:n,transformer:u.localDateString,width:m.dropdownModalWidth,minDate:(0,u.getZonedDate)(),initialValue:(0,u.getZonedDate)(T),mode:o},E)),f.default.createElement(g.DateTimeInput,Object.assign({type:"Menu",inputType:"time",getBounds:i,showModal:n,width:m.dropdownModalWidth,height:m.dropdownModalHeight,options:[S],selectedOption:w,mode:o},k)),f.default.createElement(O,null,f.default.createElement(l.Button,{"aria-label":"cancel-button",label:"Cancel",size:"base",kind:"textOnly",onClick:()=>null==t?void 0:t()}),f.default.createElement(l.Button,{"aria-label":"set-button",label:"Set Reminder",size:"base",kind:"primary",disabled:!s,onClick:()=>{null==t||t(h)}})))});let v=(0,h.default)(l.Box)`
  ${({mode:e,position:t,modalType:n})=>"web"===e&&`
    position: ${"reminder"===n?"absolute":"initial"};
    z-index: 1001;
    // transform: translate(0%, -30%); /* Transform is necessary to position web modal correctly */
    top: ${null==t?void 0:t.top};
    left: ${null==t?void 0:t.left};
  `}

  flex-direction: column;
  background-color: ${({theme:e})=>e.palette.background4};
  width: ${({width:e})=>`${e}px`};
  padding: ${({theme:e})=>e.px.base};
  user-select: none;
  border: 1px solid ${({theme:e})=>e.palette.inputBackground};
`,y=(0,h.default)(l.Box)`
  align-items: center;
  width: 100%;
`,_=(0,h.default)(l.Text)`
  font-weight: 600;
  text-transform: capitalize;
`,x=(0,h.default)(l.Box)`
  margin-left: auto;
`,O=(0,h.default)(l.Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.px.xsmall};
`},8061:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HideIndicator=t.ShowIndicator=t.UpdateActiveDisplay=t.SelectDisplay=t.UpdateDisplayList=t.initialDisplayState=void 0;let i=n(6566),o="Default Display Set";t.initialDisplayState={selected:"",active:"",list:[]};class r extends i.Action{constructor(e){super(),this.displays=e}reduce(e){return Object.assign(Object.assign({},e),{display:Object.assign(Object.assign({},e.display),{list:this.displays})})}}t.UpdateDisplayList=r;class a extends i.Action{constructor(e){super(),this.display=e}reduce(e){return Object.assign(Object.assign({},e),{display:Object.assign(Object.assign({},e.display),{selected:this.display,active:this.display,indicator:{message:o,decorateSuccess:!0}})})}}t.SelectDisplay=a;class l extends i.Action{constructor(e){super(),this.display=e}reduce(e){return Object.assign(Object.assign({},e),{display:Object.assign(Object.assign({},e.display),{active:this.display,indicator:{message:o,decorateSuccess:!0}})})}}t.UpdateActiveDisplay=l;class s extends i.Action{constructor(e,t){super(),this.display=e,this.message=t}reduce(e){return Object.assign(Object.assign({},e),{display:Object.assign(Object.assign({},e.display),{indicator:{message:this.message,decorateSuccess:!1}})})}}t.ShowIndicator=s;class c extends i.Action{constructor(){super()}}t.HideIndicator=c},8136:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.binaryInsertNotificationSortedMap=t.removeNotificationFromSortedMaps=t.insertNotificationIntoSortedMaps=void 0;let i=n(2191);function o(e,t){var n,o,a,l,s,c;let u=Object.assign({},t);delete u[e.id];let d=Object.entries(u),f=null!==(l=null===(a=null===(o=null===(n=d[0])||void 0===n?void 0:n[1])||void 0===o?void 0:o.modifiers)||void 0===a?void 0:a.reminder)&&void 0!==l?l:null===(c=null===(s=d[0])||void 0===s?void 0:s[1])||void 0===c?void 0:c.notification.date;if(0===d.length)return{[e.id]:e};if((0,i.getSortDate)(e)>=f)return Object.fromEntries([[e.id,e],...d]);let p=r(d,e,0,d.length-1),h=d.slice(0,p),m=d.slice(p,d.length);return Object.fromEntries([...h,[e.id,e],...m])}t.insertNotificationIntoSortedMaps=function(e,t){var n,i;let r=t.source.identity.uuid,a=null!==(i=null===(n=t.notification.stream)||void 0===n?void 0:n.id)&&void 0!==i?i:null,l=Object.assign({},e),s=o(t,e.byId),c=o(t,e.byApplication[r]);return l.byId=s,l.byApplication[r]=c,a&&(l.byStream[a]=o(t,e.byStream[a])),l},t.removeNotificationFromSortedMaps=function(e,t){var n,i,o;if(!e.byId[t.id])return e;delete e.byId[t.id];let r=t.source.identity.uuid,a=null===(n=t.notification.stream)||void 0===n?void 0:n.id;return null===(i=e.byApplication[r])||void 0===i||delete i[t.id],0===Object.keys(e.byApplication[r]).length&&delete e.byApplication[r],a&&(null===(o=e.byStream[a])||void 0===o||delete o[t.id],0===Object.keys(e.byStream[a]).length&&delete e.byStream[a]),e},t.binaryInsertNotificationSortedMap=o;let r=(e,t,n=0,o=e.length-1)=>{var a,l,s,c;let u=Math.floor((n-o)/2+n),d=null!==(s=null===(l=null===(a=e[u])||void 0===a?void 0:a[1].modifiers)||void 0===l?void 0:l.reminder)&&void 0!==s?s:null===(c=e[u])||void 0===c?void 0:c[1].notification.date;switch(!0){case d===(0,i.getSortDate)(t):return u;case o-n==0:return 0;case d<(0,i.getSortDate)(t):return r(e,t,u+1,o);case d>(0,i.getSortDate)(t):return r(e,t,n,u);default:return 0}}},8173:(e,t)=>{"use strict";function n(e,t){let n;try{n=JSON.stringify(e)}catch(e){n=t}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.setValidationMethod=t.validateEnvironment=t.safeStringify=t.sanitizeEventType=t.sanitizeFunction=void 0,t.sanitizeFunction=function(e){if("function"!=typeof e)throw Error(`Invalid argument passed: ${n(e,"The provided value")} is not a valid function`);return e},t.sanitizeEventType=function(e){if("notification-action"===e||"notification-created"===e||"notification-toast-dismissed"===e||"notification-closed"===e||"notifications-count-changed"===e||"notification-form-submitted"===e||"notification-reminder-created"===e||"notification-reminder-removed"===e||"notification-form-values-changed"===e||"notification-sound-toggled"===e)return e;throw Error(`Invalid argument passed: ${n(e,"The provided event type")} is not a valid Notifications event type`)},t.safeStringify=n,t.validateEnvironment=()=>{throw Error("fin is not defined. The openfin-notifications module is only intended for use in an OpenFin application.")},t.setValidationMethod=e=>{t.validateEnvironment=e}},8180:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsPanel=void 0;let l=n(7250),s=r(n(5932)),c=n(9130),u=a(n(2230)),d=n(7451),f=n(6764),p=n(5898),h=n(660),m=n(7586),b=n(925),g=n(2984),v=n(978),y=n(6406),_=s.default.createElement(v.Switch,null,s.default.createElement(v.Route,{path:m.ROUTES.ADVANCED_SETTINGS,exact:!0},s.default.createElement(y.AdvancedSettingsView,null)),s.default.createElement(v.Route,{path:m.ROUTES.SETTINGS,exact:!0},s.default.createElement(p.SettingsView,null))),x=({closeCenter:e})=>{let t=(0,s.useContext)(h.HistoryContext);return s.default.createElement(v.Switch,null,s.default.createElement(v.Route,{path:m.ROUTES.ADVANCED_SETTINGS,exact:!0},s.default.createElement(f.Header,{title:"Advanced Settings",onClose:e,onBack:()=>t.push(m.ROUTES.SETTINGS)})),s.default.createElement(v.Route,{path:m.ROUTES.SETTINGS,exact:!0},s.default.createElement(f.Header,{title:"Settings",onClose:e,onBack:()=>t.push(m.ROUTES.NOTIFICATIONS)})))},O=(0,u.default)(l.Box)`
  background: ${({theme:e})=>e.palette.background2};
  border: 1px solid ${({theme:e})=>e.palette.background4};
  height: 100%;

  &:after {
    position: absolute;
    content: '';
    pointer-events: none;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    box-shadow: 0 0 1px 1px ${({theme:e})=>e.palette.background4};
  }
`,C=(0,u.default)(l.Box)`
  background: ${({theme:e})=>e.palette.background1};
  color: ${({theme:e})=>e.palette.textDefault};
  left: ${({theme:e})=>e.px.xxxxlarge};
  top: ${({theme:e})=>e.px.xxxxlarge};
  padding: ${({theme:e})=>e.px.xsmall};
  user-select: none;
  position: absolute;
  visibility: hidden;
`,w=(0,u.default)(l.Box)`
  &:hover ${C} {
    visibility: visible !important;
  }
`;t.SettingsPanel=(0,c.connect)(void 0,e=>({closeCenter:()=>e(new d.ToggleCenterVisibility(d.ToggleCenterVisibilitySource.BUTTON,!1))}))(({closeCenter:e})=>{let[t,n]=(0,s.useState)(!1);return s.default.createElement(O,{flexDirection:"column"},s.default.createElement(b.GlobalProviderStyles,null),s.default.createElement(w,{onDoubleClick:()=>n(!t)},s.default.createElement(x,{closeCenter:e}),t&&s.default.createElement(C,null,"Notification Center Version: ",(0,g.getVersion)())),_)})},8281:function(e,t,n){"use strict";var i,o=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;let a=n(4352),l=n(6566),s=n(5966),c=n(4673),u=class extends l.Store{constructor(e){super(e),this._initialized=new s.DeferredPromise}get initialized(){return this._initialized.promise}delayedInit(){return this.init().then(()=>{this._initialized.resolve(this)}),this._initialized.promise}};u=o([(0,a.injectable)(),r("design:paramtypes",["function"==typeof(i=void 0!==c.RootState&&c.RootState)?i:Object])],u),t.Store=u},8318:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PlatformsPanel=t.PlatformsPanelComponent=void 0;let l=r(n(5932)),s=n(9130),c=n(7451),u=a(n(2230)),d=n(746),f=n(7250);t.PlatformsPanelComponent=e=>{let{platforms:t,currentPlatform:n,allNotificationsCount:i,setSelectedPlatform:o,platformCount:r}=e,a=e=>{o(e)};return t.length>1||t.length>0&&r(t[0].id)!==i?l.createElement(p,{"data-testid":"platform-select-container"},l.createElement(d.PlatformIcon,{title:"All",onPlatformSelect:a,selected:!n,count:i}),l.createElement(h,null),t.map(e=>l.createElement(d.PlatformIcon,{selected:n===e.id,key:`p-icon-${e.id}`,id:e.id,icon:e.icon,title:e.title,onPlatformSelect:a,count:r(e.id)}))):l.createElement(l.Fragment,null)};let p=(0,u.default)(f.Box)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  margin: ${({theme:e})=>`0 ${e.px.large}`};
  padding: ${({theme:e})=>`${e.px.large} 0 ${e.px.xsmall} 0`};
`,h=(0,u.default)(f.Box)`
  border-right: 1px ${({theme:e})=>e.palette.textDefault} solid;
  height: ${({theme:e})=>e.px.xxxlarge};
`;t.PlatformsPanel=(0,s.connect)(e=>({platforms:(0,c.selectActivePlatforms)(e),currentPlatform:(0,c.selectCurrentPlatform)(e),allNotificationsCount:e.notifications.length,platformCount:t=>(0,c.selectPlatformNotificationCounts)(e,t)}),e=>({setSelectedPlatform:t=>e(new c.SetSelectedPlatform(t))}))(t.PlatformsPanelComponent)},8320:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.UpdateReminder=t.TimeoutReminder=t.CancelReminderAndRecreateNotification=t.CancelReminder=t.SetReminderThroughUI=t.SetReminder=void 0;let i=n(6566),o=n(768),r=n(7031),a=n(7451),l=n(7234);class s extends i.KeyedAction{constructor(e){super("reminders"),this.reminder=e}async call(e,t){let n=e.state.reminders.find(e=>e.id===this.reminder.id);n&&await e.dispatch(new c(n)),e.state.notifications.some(e=>e.id===this.reminder.id)&&await e.dispatch(new a.RemoveNotifications([this.reminder])),await t()}reduce(e){return[...e,this.reminder]}}t.SetReminder=s,t.SetReminderThroughUI=class extends s{constructor(e){super(e),this.reminder=e}async call(e,t){await super.call(e,t),e.state.settings.tutorials.reminders||(await e.dispatch(new a.CreateNotification((0,o.makeRemindersTutorialNotification)(this.reminder.notification.icon,this.reminder.source))),await e.dispatch(new l.RemindersTutorialComplete))}};class c extends i.KeyedAction{constructor(e){super("reminders"),this.reminder=e}reduce(e){return e.filter(e=>e.id!==this.reminder.id)}}t.CancelReminder=c,t.CancelReminderAndRecreateNotification=class extends c{constructor(e){super(e),this.reminder=e}async call(e,t){let n=Object.assign({},this.reminder.modifiers);delete n.reminder,await e.dispatch(new a.CreateNotification(Object.assign(Object.assign({},this.reminder),{modifiers:n}))),await t()}reduce(e){return super.reduce(e)}};class u extends i.KeyedAction{constructor(e){super("reminders"),this.reminderId=e}async call(e,t){let n=e.state.reminders.find(e=>e.id===this.reminderId);n?(await e.dispatch(new a.CreateNotification(n)),await t()):console.warn(`Reminder(${this.reminderId}) was not found in the store.`)}reduce(e){return e.filter(e=>e.id!==this.reminderId)}}t.TimeoutReminder=u;class d extends i.KeyedAction{constructor(e){super("reminders"),this.updatePayload=e,this._updatedReminder=null}get updatedReminder(){return this._updatedReminder}reduce(e){let t=[...e];return this._updatedReminder=(0,r.updateCollection)(t,this.updatePayload),[...t]}}t.UpdateReminder=d},8364:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},8602:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetFocusedNotification=void 0;let i=n(6566);class o extends i.KeyedAction{constructor(e){super("focusedNotification"),this.notificationId=e}reduce(e){return Object.assign(Object.assign({},e),{notificationId:this.notificationId})}}t.SetFocusedNotification=o},8684:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RequestNotificationFormCustomValidation=void 0;let i=n(6566);class o extends i.Action{constructor(e,t){super(),this.notification=e,this.form=t}async call(e,t){await t()}}t.RequestNotificationFormCustomValidation=o},8728:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIsStateUpdate=void 0;let i=n(5932);t.useIsStateUpdate=(e,t)=>{let[n,o]=(0,i.useState)(e),[r,a]=(0,i.useState)(!1),l=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{l.current?(t(n,e)&&a(!0),o(e)):l.current=!0},[e]),[r,()=>a(!1)]}},8740:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsNavigationTitle=void 0;let o=i(n(5932)),r=n(7250),a=i(n(2230));t.SettingsNavigationTitle=({onClick:e,title:t})=>o.default.createElement(l,{as:"button",onClick:e},o.default.createElement(r.Text,{size:"large"},t),o.default.createElement(r.Icon,{icon:"ArrowRightIcon",size:"base"}));let l=(0,a.default)(r.Box)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
`},8768:function(e,t){"use strict";var n=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.useFormData=void 0,t.useFormData=e=>{if(!e)return[[],{}];if(e.hasOwnProperty.call(e,"fields")){let{fields:t}=e;return[t,n(e,["fields"])]}return[e,{}]}},8833:function(e,t,n){"use strict";var i,o,r=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useLoaded=t.LoadState=void 0;let s=l(n(5932));(i=o=t.LoadState||(t.LoadState={})).LOADING="loading",i.ERROR="error",i.LOADED="loaded",t.useLoaded=(e="",t)=>{let[n,i]=s.useState(o.LOADING);return s.useEffect(()=>{if(!e&&!t)return;let n=new Image,r=!0;return n.onload=()=>r&&i(o.LOADED),n.onerror=()=>r&&i(o.ERROR),n.src=e,t&&(n.srcset=t),()=>{r=!1}},[e,t]),n}},8898:e=>{"use strict";e.exports=j},8899:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.alignModalToParent=void 0,t.alignModalToParent=function(e,t){return{x:e.left+t.left,y:e.top+t.top+t.height+3,offsetX:t.width,offsetY:-(t.height+6)}}},8904:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CategoriesPanel=t.CategoriesPanelComponent=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(9130),u=n(7250),d=n(7527),f=n(7230),p=[Object.keys(d.CategoryNamesMap).map(e=>({value:e,title:d.CategoryNamesMap[e]}))];t.CategoriesPanelComponent=({onClearAll:e,setSelectedCategory:t,setSelectedCategorySorting:n,selectedCategory:i,selectedSortType:o,selectedSortDirection:r})=>{let[a,s]=(0,l.useState)(!1),[c,d]=(0,l.useState)(r);return(0,l.useEffect)(()=>{s("reminders"===i&&"date"===o)},[i,o]),(0,l.useEffect)(()=>{a&&n("date","ascending")},[a,n]),(0,l.useEffect)(()=>{d(a?"ascending":r)},[a,r]),l.default.createElement(h,{flexDirection:"column"},l.default.createElement(m,null,l.default.createElement(u.DropdownMenu,{selected:p[0].find(e=>e.value===i),options:p,onChange:e=>t(e.value)})),l.default.createElement(b,null,l.default.createElement(f.CategoriesSortingSelect,{selectedCategory:i,selectedSortType:o,selectedSortDirection:c,onChange:e=>{n(e.value.type,e.value.direction)}}),l.default.createElement(g,{"data-testid":"clearall",onClick:e},"Clear All")))};let h=(0,s.default)(u.Box)`
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.px.large};
  row-gap: ${({theme:e})=>e.px.small};

  border-bottom: 1px solid ${({theme:e})=>e.palette.background4};
`,m=s.default.div`
  width: 100%;
`,b=(0,s.default)(u.Box)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  row-gap: ${({theme:e})=>e.px.small};
`,g=s.default.button`
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.palette.textDefault};
  cursor: pointer;
  font-size: ${({theme:e})=>e.fontSize.base};
  user-select: none;
`;t.CategoriesPanel=(0,c.connect)(e=>({selectedCategory:e.categories.selectedCategory,selectedSortType:e.categories.sortType,selectedSortDirection:e.categories.sortDirection}),e=>({setSelectedCategory:t=>e(new d.SetSelectedCategory(t)),setSelectedCategorySorting:(t,n)=>{e(new d.SetSelectedCategorySorting(t,n))}}))(t.CategoriesPanelComponent)},8912:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(3955),t),o(n(3713),t)},8917:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SetNotificationFormStatusOptions=void 0;let i=n(6566),o=n(5425),r=n(7451),a=n(96);class l extends i.Action{constructor(e){super(),this.notificationFormStatusOptions=e}async call(e,t){if("submitted"===this.notificationFormStatusOptions.formStatus){let t=e.state.notifications.find(e=>e.id===this.notificationFormStatusOptions._notificationId);if(!t)throw Error(`SetNotificationFormStatusOptions was invoked without notification ${this.notificationFormStatusOptions._notificationId}`);await (0,o.getTargetOrError)(e,t.notification)&&await (0,a.debounce)(()=>Promise.all([e.dispatch(new r.RemoveNotifications([t]))]),500)()}await t()}reduce(e){var t,n;let i=null!==(n=null===(t=e.activeForms)||void 0===t?void 0:t.forms)&&void 0!==n?n:[],o=i.find(e=>e.notificationId===this.notificationFormStatusOptions._notificationId);return Object.assign(Object.assign({},e),{activeForms:Object.assign(Object.assign({},e.activeForms),{focusedFormNotificationId:this.notificationFormStatusOptions._notificationId,forms:[{notificationId:this.notificationFormStatusOptions._notificationId,formStatusOptions:Object.assign(Object.assign({},null==o?void 0:o.formStatusOptions),this.notificationFormStatusOptions)},...i.filter(e=>e.notificationId!==this.notificationFormStatusOptions._notificationId)]})})}}t.SetNotificationFormStatusOptions=l},9004:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;let o=n(7250),r=i(n(5932)),a=i(n(2230));t.Header=({title:e,hasControls:t=!1,itemCount:n,isExpandable:i=!1,isExpanded:o=!1,onToggleExpanded:a,onClearAll:b,onPopOutFrame:g,onKeyDown:v})=>{let y=o?"Show Fewer":`Show All (${n})`;return r.default.createElement(l,null,r.default.createElement(s,{"data-testid":"group-title",tabIndex:t?0:-1,onKeyDown:t?e=>null==v?void 0:v(e.nativeEvent):void 0,"aria-label":`Notifications from ${e}`,role:t?"listitem":void 0},g&&r.default.createElement(c,{onClick:g,icon:"ExternalLinkIcon"}),t?r.default.createElement(h,null,e):r.default.createElement(m,null,e),t&&r.default.createElement(u,null,i&&r.default.createElement(r.default.Fragment,null,r.default.createElement(f,{onClick:a,width:107,"aria-label":`${y} notifications from ${e}`},y),r.default.createElement(p,null)),r.default.createElement(d,{onClick:b,"data-testid":"clear","aria-label":`Clear all notifications from ${e}`},"Clear"))))};let l=(0,a.default)(o.Box)`
  margin-bottom: ${({theme:e})=>e.px.base};
  height: ${({theme:e})=>e.px.xlarge};
  align-items: center;
`,s=(0,a.default)(o.Box)`
  align-items: center;
  width: 100%;
  gap: ${({theme:e})=>e.px.small};
`,c=(0,a.default)(o.Icon)`
  cursor: pointer;
`,u=(0,a.default)(o.Box)`
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`,d=a.default.button`
  font-size: ${({theme:e})=>e.px.base};
  font-weight: ${({theme:e})=>e.fontWeight.normal};
  line-height: ${({theme:e})=>e.px.base};
  color: ${({theme:e})=>e.palette.textDefault};
  font-style: normal;
  letter-spacing: 0px;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
`,f=(0,a.default)(d)`
  max-width: 107px;
`,p=a.default.div`
  height: ${({theme:e})=>e.px.large};
  margin: 0 ${({theme:e})=>e.px.small};
  width: 0px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,h=a.default.h2`
  margin-right: ${({theme:e})=>e.px.small};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,m=a.default.h3`
  font-weight: ${({theme:e})=>e.fontWeight.bold};
  font-size: ${({theme:e})=>e.fontSize.large};
  line-height: ${({theme:e})=>e.px.large};
  font-style: normal;
`},9052:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ModalComponent=void 0;let a=n(7250),l=n(8017),s=r(n(5932)),c=r(n(2230)),u=n(6464),d=n(6415);t.ModalComponent=e=>{let{type:t,onDismiss:n,mode:i}=e,[o,r]=(0,s.useState)(null),c=(0,s.useCallback)(e=>{null==n||n(null!=e?e:o)},[o,n]),{modalType:h}=s.default.useContext(d.WebModalContext);return(()=>{var n,o;switch(t){case"Menu":return s.default.createElement(p,{mode:i,position:e.webPosition,modalType:h},s.default.createElement(a.Menu,{header:e.header,width:`${e.width}px`,height:`${e.height}px`,options:e.options,selected:e.selectedOption,onChange:e=>{c(e.value)}}));case"Calendar":{let t=e.minDate?new Date(e.minDate):void 0,l=e.maxDate?new Date(e.maxDate):void 0;return s.default.createElement(m,{width:null!==(n=e.width)&&void 0!==n?n:u.defaultCalendarWidth,mode:i,position:e.webPosition,modalType:h},s.default.createElement(a.Calendar,{value:null!==(o=e.initialValue)&&void 0!==o?o:null,minDate:t,maxDate:l,onChange:e=>r(e),onDismiss:()=>c()}))}case"CustomReminderModal":return s.default.createElement(l.SetReminderModal,{notification:e.notification,onDismiss:c,getModalBounds:e.queryModalBounds,position:e.webPosition,modalType:h});default:return s.default.createElement(f,null," Unknown Modal ")}})()};let f=(0,c.default)(a.Box)``,p=c.default.div`
  ${({mode:e,position:t,modalType:n})=>"web"===e&&`
    position: ${"reminder"===n?"absolute":"initial"};
    z-index: 1001;
    top: ${null==t?void 0:t.top};
    left: ${null==t?void 0:t.left}
  `}
`,h=c.css`
  /* stylelint-disable no-descending-specificity */
  /* stylelint-disable property-no-vendor-prefix */
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: 'Arial', 'Helvetica', sans-serif;
    line-height: 1.125em;
  }

  .react-calendar--doubleView {
    width: 700px;
  }

  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }

  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }

  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }

  .react-calendar button:enabled:hover {
    cursor: pointer;
  }

  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }

  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font: inherit;
    font-size: 0.75em;
    font-weight: bold;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }

  .react-calendar__month-view__days__day--neighboringMonth,
  .react-calendar__decade-view__years__year--neighboringDecade,
  .react-calendar__century-view__decades__decade--neighboringCentury {
    color: #757575;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }

  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    font: inherit;
    font-size: 0.833em;
  }

  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    color: #ababab;
  }

  .react-calendar__month-view__days__day--neighboringMonth:disabled,
  .react-calendar__decade-view__years__year--neighboringDecade:disabled,
  .react-calendar__century-view__decades__decade--neighboringCentury:disabled {
    color: #cdcdcd;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }

  .react-calendar__tile--now {
    background: #ffff76;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ffffa9;
  }

  .react-calendar__tile--hasActive {
    background: #76baff;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }

  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }
  /* stylelint-enable property-no-vendor-prefix */
  /* stylelint-enable no-descending-specificity */
`,m=(0,c.default)(a.Box)`
  ${({mode:e,position:t,modalType:n})=>"web"===e&&`
    position: ${"reminder"===n?"absolute":"initial"};
    z-index: 1002;
    top: ${null==t?void 0:t.top};
    left: ${null==t?void 0:t.left};
  `}

  width: ${({width:e})=>`${e}px`};

  ${h}

  /* stylelint-disable no-descending-specificity */
  .react-calendar {
    min-width: 230px;
    width: 100%;
    background-color: ${({theme:e})=>e.palette.background4};
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.base};
    border: 1px solid ${({theme:e})=>e.palette.background6};
  }

  .react-calendar__navigation {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.base};
    margin: 0;
  }

  .react-calendar__navigation__arrow {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.large};

    :disabled {
      color: ${({theme:e})=>e.palette.inputDisabled};
    }
  }

  .react-calendar__navigation__label {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    font-size: ${({theme:e})=>e.fontSize.base};
  }

  .react-calendar__viewContainer {
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.inputColor};
    font-size: ${({theme:e})=>e.fontSize.base};
  }

  .react-calendar__month-view__weekdays {
    text-decoration: none;
    text-transform: none;
    font-weight: normal;
    font-size: ${({theme:e})=>e.fontSize.base};

    abbr {
      text-decoration: none;
    }
  }

  .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme:e})=>e.palette.background4} !important;
    color: ${({theme:e})=>e.palette.textDefault};
    border-radius: 100px;
    aspect-ratio: 1/1;
    cursor: pointer;

    :disabled {
      color: ${({theme:e})=>e.palette.textInactive};
      cursor: not-allowed;

      :hover {
        border: none;
      }
    }

    :hover {
      border: 2px solid ${({theme:e})=>e.palette.brandPrimary};
      border-radius: 100px;
    }

    :focus {
      border: 2px solid ${({theme:e})=>e.palette.brandPrimary};
      border-radius: 100px;
    }
  }

  .react-calendar__tile--now {
    border: 2px solid ${({theme:e})=>e.palette.brandPrimary} !important;
    border-radius: 100px;
  }

  .react-calendar__tile--active {
    background-color: ${({theme:e})=>e.palette.brandPrimary} !important;
    color: ${({theme:e})=>e.palette.brandPrimaryText};
    border-radius: 100px;

    :focus {
      border: 2px solid ${({theme:e})=>e.palette.brandPrimary};
      color: ${({theme:e})=>e.palette.textDefault};
      border-radius: 100px;
    }
  }
`},9130:e=>{"use strict";e.exports=S},9136:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.WindowConsumer=t.WindowProvider=t.WindowContext=void 0;let a=r(n(5932));t.WindowContext=a.createContext(window),t.WindowProvider=t.WindowContext.Provider,t.WindowConsumer=t.WindowContext.Consumer},9173:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OpenFrame=void 0;let i=n(6566);class o extends i.Action{constructor(e,t,n){super(),this.key=e,this.isStream=t,this.platformId=n}}t.OpenFrame=o},9183:function(e,t,n){"use strict";var i=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DefaultThemeProvider=void 0;let r=n(7250),a=o(n(5932));t.DefaultThemeProvider=e=>{var{themes:t,children:n}=e,o=i(e,["themes","children"]);let l={light:(0,r.createTheme)({brandPrimary:"#0A76D3"}),dark:(0,r.createTheme)({brandPrimary:"#0A76D3"})};return a.default.createElement(r.ThemeProvider,Object.assign({themes:null!=t?t:l},o),n)}},9205:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.CardButtonGroup=void 0;let l=r(n(5932)),s=a(n(2230)),c=n(7250),u=a(n(6992)),d=n(9136),f=n(3087),p=n(5387),h=n(2200);t.CardButtonGroup=e=>{var t;let n=(0,l.useContext)(d.WindowContext),i=[...null!==(t=e.buttons)&&void 0!==t?t:[]],o=i[0],r=null==o?void 0:o.cta,a=i.find(e=>e.submit),s=!1,g=(e,t)=>t.onClick(e,t),v=(0,l.useContext)(f.FormikProxyContext).formikProps,[y]=(0,p.useStateButtonOptionsOverrides)(e.notificationId,[o]);a&&(v?(s=!v.isValid,g=v.submitForm):(s=!0,g=void 0));let _=(0,p.useStateButtonOptionsOverrides)(e.notificationId,i);if(i.length<=2&&r||i.length<=1)return l.default.createElement(l.default.Fragment,null,i.map((t,n)=>{let i=_[n];return l.default.createElement(m,Object.assign({},t,{title:i.buttonText,onClick:t.submit?e=>g&&i.canSubmit?g(e,t):(0,u.default)():e=>t.onClick(e,t),size:"base",kind:r||t.submit?c.ButtonKind.primary:c.ButtonKind.textOnly,disabled:s,key:n,"data-testid":`nft-btn-${n}`,tabIndex:e.tabIndexOverride,applySubmittedColor:i.isSubmitted&&i.hasOverrides&&t.submit}),l.default.createElement(h.ButtonLabel,{overrides:i,button:t}))}));{let t=i.slice(1).map(t=>({title:t.title,onClick:n=>{var i;t.onClick(n,t),null===(i=e.raiseAnalyticsEvent)||void 0===i||i.call(e,{type:e.isToast?"Toast":"Notification",action:"Select Secondary Button",value:t.title,data:{id:e.notificationId}})}})),a={title:y.buttonText,label:y.buttonText,onClick:o.submit?e=>g&&y.canSubmit?g(e,o):(0,u.default)():t=>{var n;o.onClick(t,o),null===(n=e.raiseAnalyticsEvent)||void 0===n||n.call(e,{type:e.isToast?"Toast":"Notification",action:"Select Primary Button",value:y.buttonText,data:{id:e.notificationId}})},size:"base",kind:r||o.submit?c.ButtonKind.primary:c.ButtonKind.textOnly,disabled:s,secondaryButtons:t,closePanelOnSecondaryButtonClick:!0,expandDirection:c.ExpandDirection.Up,document:n.document};return l.default.createElement(b,Object.assign({applySubmittedColor:y.isSubmitted&&y.hasOverrides},a,{tabIndex:e.tabIndexOverride}))}};let m=(0,s.default)(c.Button)`
  background-color: ${({applySubmittedColor:e,theme:t})=>e?t.palette.statusSuccess:void 0} !important;
  flex-shrink: 1;
  overflow: hidden;
`,b=(0,s.default)(c.ExpandableButton)`
  div {
    background-color: ${({applySubmittedColor:e,theme:t})=>e?t.palette.statusSuccess:void 0} !important;
    ${c.Mixins.textOverflow}
    white-space: nowrap;
    text-overflow: ellipsis;
    display: block;
    overflow: hidden;
    padding: 0;
  }
`},9247:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__rest||function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)0>t.indexOf(i[o])&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DateTimeInput=void 0;let s=n(7250),c=n(8899),u=r(n(5932)),d=l(n(2230)),f=n(6415);t.DateTimeInput=e=>{let{inputType:t,value:n,message:i,getBounds:o,showModal:r,updateValue:l,transformer:d,mode:h}=e,m=a(e,["inputType","value","message","getBounds","showModal","updateValue","transformer","mode"]),{setIsDatePickerModalOpen:b,setDatePickerConfig:g,setIsTimePickerModalOpen:v,setTimePickerConfig:y,setModalType:_}=(0,u.useContext)(f.WebModalContext),[x,O]=(0,u.useState)(!1),[C,w]=(0,u.useState)(0),[j,S]=(0,u.useState)(),P=(0,u.createRef)();(0,u.useEffect)(()=>{S(i?"critical":void 0)},[i]);let E=(0,u.useCallback)(e=>{if(e.current){let t=o(),n=e.current.getBoundingClientRect();return(0,c.alignModalToParent)(t,{left:n.left,top:n.top,width:n.right-n.left,height:n.bottom-n.top})}return null},[o]),M=(0,u.useCallback)(e=>{O(!1),e&&(l(d?d(e):e),w(C+1)),"date"===t?b(!1):"time"===t&&v(!1)},[C,d,l,t,b,v]),T=(0,u.useCallback)(e=>{var n;if(O(!x),x)"web"===h&&("date"===t?b(!1):"time"===t&&v(!1));else if("desktop"===h){let i=null!==(n=E(P))&&void 0!==n?n:{x:e.screenX,y:e.screenY};r(Object.assign(Object.assign({identity:{id:`${t}-input-dropdown-modal`,parentId:"custom-reminder-select-menu-modal"}},m),{position:i,onDismiss:M}))}else if("web"===h){let n={x:e.clientX,y:e.clientY},i=Object.assign(Object.assign({identity:{id:`${t}-input-dropdown-modal`,parentId:"custom-reminder-select-menu-modal"}},m),{position:n,onDismiss:M});_("reminder"),"date"===t?(g(i),b(!0),v(!1)):"time"===t&&(y(i),v(!0),b(!1))}},[x,h,E,P,t,m,M,r,_,g,b,v,y]);return u.default.createElement(p,null,u.default.createElement(s.DateInput,{type:t,expanded:x,status:j,message:i,ref:P,label:t,value:n,key:`${t}-input-rev-${C}`,onExpand:T,onChange:e=>l(e.target.value)}))};let p=(0,d.default)(s.Box)`
  width: 100%;
  padding-bottom: ${({theme:e})=>e.px.small};

  & > * {
    width: 100%;
  }
`},9588:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DisplaySelector=t.DisplaySelectorComponent=void 0;let l=r(n(5932)),s=n(9130),c=a(n(2230)),u=n(7250),d=n(8061);t.DisplaySelectorComponent=({title:e,description:t,displays:n,selectedDisplay:i,selectDisplay:o,showIndicator:r,hideIndicator:a,raiseAnalyticsEvent:s})=>{var c;let[d,m]=(0,l.useState)(),[b,g]=(0,l.useState)([[]]);return(0,l.useEffect)(()=>{let e=0,t=n.map((t,n)=>{let o={title:`Display ${n+1}`,value:{display:t,index:n}};return t===i&&(e=n),o});g([t]),m(t[e])},[n,i]),l.default.createElement(f,null,l.default.createElement(p,{size:u.Size.large},e),l.default.createElement(h,{size:u.Size.base},t),l.default.createElement(u.DropdownMenu,{key:null!==(c=null==d?void 0:d.title)&&void 0!==c?c:"No Display",options:b,onChange:e=>{let t=e.value;o(t.display),null==s||s({type:"Settings",action:"Change Display",value:`${t.index+1}`,skipValueHashing:!0})},onOptionHover:e=>{e?r(e.display,`Display ${e.index+1}`):a()},selected:d}))};let f=(0,c.default)(u.Box)`
  flex-direction: column;
`,p=(0,c.default)(u.Text).attrs({as:"label"})`
  margin-bottom: ${({theme:e})=>e.px.small};
`,h=(0,c.default)(u.Text).attrs({as:"label"})`
  margin-bottom: ${({theme:e})=>e.px.large};
  color: ${({theme:e})=>e.palette.textHelp};
`;t.DisplaySelector=(0,s.connect)(e=>({displays:e.display.list,selectedDisplay:e.display.selected}),e=>({selectDisplay:t=>e(new d.SelectDisplay(t)),showIndicator:(t,n)=>e(new d.ShowIndicator(t,n)),hideIndicator:()=>e(new d.HideIndicator)}))(t.DisplaySelectorComponent)},9594:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DateWidgetComponent=t.DateWidgetComponentConnected=void 0;let o=i(n(5932)),r=n(258),a=n(7451),l=n(9130),s=n(7250),c=n(6464),u=n(67),d=n(7260),f=n(1971),p=n(5232),h=n(5484),m=n(4691),b=n(9816),g=n(6415);t.DateWidgetComponentConnected=e=>o.default.createElement(r.Field,{name:e.field.key,component:v,dateField:e.field,showModal:e.showModal,hideModal:e.hideModal,formSettings:e.formSettings,raiseAnalytics:e.raiseAnalytics,mode:e.mode});let v=({field:e,showModal:t,hideModal:n,dateField:i,form:r,formSettings:a,raiseAnalytics:l,mode:v})=>{var y,_;(0,h.useRaiseFieldAnalytics)(i,l,e.value?t=>(0,m.fieldValueAsString)(e.value):void 0);let[x,O,C,w]=(0,u.useCalendarModalDialog)(e=>{r.setFieldTouched(i.key,!0),r.setFieldValue(i.key,(0,m.dateToFieldValue)(e))},t,n,e=>{var t;return{width:null===(t=null==e?void 0:e.current)||void 0===t?void 0:t.clientWidth,height:c.dropdownModalHeight}},()=>r.setFieldTouched(i.key,!0),e.value?(0,m.fieldValueToDate)(e.value):void 0,null===(y=i.widget)||void 0===y?void 0:y.minDate,null===(_=i.widget)||void 0===_?void 0:_.maxDate,v),{modalType:j,isDatePickerModalOpen:S}=o.default.useContext(g.WebModalContext),P=r.errors[e.name]&&r.touched[e.name]?"critical":void 0;return o.default.createElement(d.InputContainer,{flexDirection:"column"},o.default.createElement(s.DateInput,{label:(0,p.getLabelText)(i,a),key:`${i.key}-${w}`,value:e.value?(0,m.fieldValueAsString)(e.value):void 0,helperText:i.helperText,type:"date",onChange:e=>{isNaN(Date.parse(e.target.value))||r.setFieldValue(i.key,(0,m.dateToFieldValue)(new Date(Date.parse(e.target.value))))},expanded:x,ref:C,onExpand:()=>O(!x),status:P}),"web"===v&&"widget"===j&&S&&o.default.createElement(b.WebModalComponent,{mode:v}),o.default.createElement(f.ErrorLabel,{name:e.name}))};t.DateWidgetComponent=(0,l.connect)(e=>({mode:e.mode}),e=>({showModal:t=>e(new a.ShowModal(t)),hideModal:t=>e(new a.HideModal(t))}))(t.DateWidgetComponentConnected)},9603:(e,t)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.APITopic=t.getChannelName=t.SERVICE_CHANNEL=t.SERVICE_IDENTITY=void 0,t.SERVICE_IDENTITY={uuid:"notifications-service",name:"notifications-service"},t.SERVICE_CHANNEL="of-notifications-service-v1",t.getChannelName=e=>e===t.SERVICE_IDENTITY.uuid?t.SERVICE_CHANNEL:`${e}-${t.SERVICE_CHANNEL}`,(n=t.APITopic||(t.APITopic={})).CREATE_NOTIFICATION="create-notification",n.UPDATE_NOTIFICATION="update-notification",n.CLEAR_NOTIFICATION="clear-notification",n.GET_APP_NOTIFICATIONS="fetch-app-notifications",n.CLEAR_APP_NOTIFICATIONS="clear-app-notifications",n.TOGGLE_NOTIFICATION_CENTER="toggle-notification-center",n.ADD_EVENT_LISTENER="add-event-listener",n.REMOVE_EVENT_LISTENER="remove-event-listener",n.GET_PROVIDER_STATUS="get-provider-status",n.GET_NOTIFICATIONS_COUNT="get-notifications-count",n.SHOW_NOTIFICATION_CENTER="show-notification-center",n.HIDE_NOTIFICATION_CENTER="hide-notification-center",n.REGISTER_PLATFORM="register-notifications-platform",n.DEREGISTER_PLATFORM="deregister-notifications-platform",n.SET_FORM_STATUS_OPTIONS="set-form-status-options",n.SET_FORM_VALIDATION_ERRORS="set-form-validation-errors",n.GET_USER_SETTINGS_STATUS="get-user-settings-status",n.SET_DEFAULT_PLATFORM_SHORTCUT="set-default-platform-shortcut",n.SET_NOTIFICATION_SECURITY_RULE="set-notification-security-rule"},9611:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickBestComposition=void 0;let i=n(2984);t.pickBestComposition=function(e){if(e.length<1)return;let t=parseInt((0,i.getTemplateAPIVersion)()),n=e.map((e,t)=>({version:parseInt(e.minTemplateAPIVersion),index:t})).filter(e=>e.version<=t).reduce((e,t)=>t.version>e.version?t:e,{version:0,index:-1}).index;return n>=0?e[n]:void 0}},9615:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),t.hide=t.show=t.removeVisibilityListener=t.addVisibilityListener=t.removeNotificationCountListener=t.addNotificationCountListener=t.setTheme=t.applySnapshot=t.getSnapshot=t.initNotificationCenter=void 0,n(392);let r=n(2882),a=n(343),l=n(3082);o(n(394),t),customElements.define("notification-center",l.NotificationCenterWebComponent);let s=!1;function c(){if(!s)throw Error("Notification Center is not initialized. You must call initNotificationCenter first.")}t.initNotificationCenter=async function(e){if(s)throw Error("Notification center is already initialized.");if(!e)throw Error("You must provide options to initialize the notification center.");if(!e.container)throw Error("You must provide a container to render the notification center.");if(!e.finContext)throw Error("You must provide a fin context to initialize the notification center.");if(!e.serviceId)throw Error("You must provide a unique service id to initialize the notification center.");if(e.theme&&!e.theme.palette)throw Error("You must provide a palette when using the theme options.");let t=r.Injector.getClass(a.Main);await t.register(e),s=!0},t.getSnapshot=function(){return c(),r.Injector.getClass(a.Main).getSnapshot()},t.applySnapshot=async function(e){c(),await r.Injector.getClass(a.Main).applySnapshot(e)},t.setTheme=async function(e){c(),await r.Injector.getClass(a.Main).setTheme(e)},t.addNotificationCountListener=function(e,t){a.Main._countChangeSignal.add(e,t)},t.removeNotificationCountListener=function(e,t){a.Main._countChangeSignal.remove(e,t)},t.addVisibilityListener=function(e,t){a.Main._visibilityChangeSignal.add(e,t)},t.removeVisibilityListener=function(e,t){a.Main._visibilityChangeSignal.remove(e,t)},t.show=async function(){c(),await r.Injector.getClass(a.Main).show()},t.hide=async function(){c(),await r.Injector.getClass(a.Main).hide()}},9628:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.Layer=void 0;let a=r(n(5932)),l=n(9130),s=n(4887),c=n(7451),u=n(9173),d=n(9004),f=n(6731),p=n(7250);t.Layer=(0,l.connect)(e=>({platform:(0,c.selectCurrentPlatform)(e)}),e=>({remove:t=>e(new c.RemoveNotifications(t,"Clear")),frame:(t,n,i)=>e(new u.OpenFrame(t,n,i)),raiseAnalyticsEvent:async(t,n)=>e(new c.RaiseAnalyticsEvent(t,n))}))(({layer:e,platform:t,frame:n,remove:i,raiseAnalyticsEvent:o,onKeyDown:r})=>{let[l,c]=(0,a.useState)(!1);return a.default.createElement(a.default.Fragment,null,a.default.createElement(d.Header,{hasControls:!0,title:e.title,itemCount:e.count,isExpanded:l,isExpandable:e.count>s.groupMinimizedStackSize,onPopOutFrame:i=>{i.stopPropagation(),n(e.key,e.isStream,t),o({type:"Center",action:"Popout Stream",value:`${e.key}`})},onClearAll:()=>{i(e.sections.flatMap(e=>e.notifications)),o({type:"Center",action:"Clear",value:`${e.title}`,skipValueHashing:!0})},onToggleExpanded:()=>{c(!l),o({type:"Center",action:l?"Select Show Fewer":"Select Show All",value:`${e.title}`})},onKeyDown:null==r?void 0:r(null)}),a.default.createElement(p.Box,{role:"list"},a.default.createElement(f.Groups,{groupData:l?e:e.preview,hasControls:!1,onKeyDown:r?e=>r:void 0})))})},9636:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FormContainer=void 0;let l=r(n(5932)),s=n(3087),c=n(258),u=n(7603),d=n(7620),f=n(3051),p=n(7953),h=a(n(2230));t.FormContainer=e=>{let{setFormikProps:t}=(0,l.useContext)(s.FormikProxyContext),n=(0,c.useFormikContext)();(0,f.useFormCustomValidationErrors)(n,e.notificationId),(0,l.useEffect)(()=>{t(n)},[n]);let i=(0,l.useContext)(p.ResizeContext);return(0,l.useEffect)(()=>{"emitResize"in i&&i.emitResize()},[e.formErrorsCount,i]),l.default.createElement(m,null,e.fields.length>1?l.default.createElement(u.MultiFieldFormContainer,Object.assign({},e),e.children):l.default.createElement(d.SingleFieldFormContainer,{notificationId:e.notificationId},e.children))};let m=h.default.div`
  input {
    box-shadow: none;
  }
`},9640:e=>{"use strict";e.exports=P},9690:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.CardHeaderHover=t.CardHeader=void 0;let a=n(7250),l=n(2207),s=r(n(5932)),c=r(n(2230)),u=n(5396),d=n(7982),f=n(4858),p=n(9136),h=n(9816),m=n(6415);t.CardHeader=e=>{let{sender:t,creationDate:n,reminderDate:i,icon:o,uuid:r,notificationID:c,onDismiss:f,raiseAnalyticsEvent:O,onShowReminderModal:C,isToast:w,showReminderButton:j=!0,tabIndex:S,mode:P="desktop"}=e,[E,M]=s.default.useState(["",null]),T=s.default.useContext(p.WindowContext),{modalType:k}=s.default.useContext(m.WebModalContext);return(0,s.useEffect)(()=>{let e=()=>{n&&M((0,l.formatLines)(n,i))};e();let t=T.setInterval(e,6e4);return()=>{T.clearInterval(t)}},[n,i,l.formatLines]),s.default.createElement(b,{alignItems:"center"},s.default.createElement(u.AppLogo,{src:o,size:"xlarge",alt:t,uuid:r,"data-testid":"icon"}),s.default.createElement(g,{"data-testid":"sender-title"},t),s.default.createElement(v,{alignItems:"center"},s.default.createElement(x,null,s.default.createElement(d.NotificationTime,{timeStrings:E})),s.default.createElement(y,null,j?s.default.createElement(_,{onClick:C,kind:"secondary","data-testid":"reminders-menu-button",title:"Remind me later",tabIndex:S},s.default.createElement(a.Icon,{size:"base",icon:"TimerIcon"})):s.default.createElement(s.default.Fragment,null),s.default.createElement(_,{onClick:e=>{f(e),null==O||O({type:w?"Toast":"Notification",action:w?"Dismiss":"Clear",data:{id:c},skipValueHashing:!0})},kind:"secondary","data-testid":"dismiss-button",title:w?"Dismiss":"Clear",tabIndex:S},s.default.createElement(a.Icon,{size:"base",icon:w?"MinusCircledIcon":"CrossCircledIcon"}))),"web"===P&&"reminder"===k&&s.default.createElement(h.WebModalComponent,{mode:P})))};let b=(0,c.default)(a.Box)`
  width: 100%;
  user-select: none;
  position: relative;
  padding: ${e=>e.theme.px.base};
  padding-bottom: 0;
`,g=(0,c.default)(f.SingleLine)`
  flex: 1 1 100px;
`,v=(0,c.default)(a.Box)`
  height: 32px;
  justify-self: flex-end;
  margin-left: ${e=>e.theme.px.small};
`,y=(0,c.default)(a.Box)`
  right: ${e=>e.theme.px.base};
`,_=(0,c.default)(a.Button)`
  && {
    background-color: transparent;
    border-color: transparent;
    padding: ${e=>e.theme.px.xsmall};

    &:hover {
      background-color: ${e=>e.theme.palette.brandSecondaryHover};
    }
  }
`,x=c.default.div``;t.CardHeaderHover=c.css`
  &:hover {
    ${y} {
      display: inline-block;
      position: absolute;
      top: ${e=>e.theme.px.base};
    }

    ${x} {
      display: none;
    }
  }

  ${x} {
    display: inline-block;
    position: absolute;
    right: ${e=>e.theme.px.base};
  }

  ${y} {
    overflow: hidden;
    display: none;
  }

  ${y}:focus-within {
    height: unset;
  }
  &:has(${y}:focus-within) {
    ${x} {
      display: none;
    }
  }
`},9694:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useHandleClickOutsideForWebModals=void 0;let i=n(5932);t.useHandleClickOutsideForWebModals=function(e,t,n,o){(0,i.useEffect)(()=>{if("web"!==e||!(n.isMenuOpen||n.isCustomReminderOpen||n.isDatePickerOpen||n.isTimePickerOpen))return;let i=e=>{var i;let r=(null===(i=e.composedPath)||void 0===i?void 0:i.call(e))||[],a=n.isMenuOpen&&t.menuRef.current&&!r.includes(t.menuRef.current),l=n.isCustomReminderOpen&&t.customReminderRef.current&&!r.includes(t.customReminderRef.current),s=n.isDatePickerOpen&&t.datePickerRef.current&&!r.includes(t.datePickerRef.current),c=n.isTimePickerOpen&&t.timePickerRef.current&&!r.includes(t.timePickerRef.current);a&&o.setIsMenuOpen(!1),l&&((s||c)&&o.setIsCustomReminderOpen(!1),n.isTimePickerOpen||n.isDatePickerOpen||o.setIsCustomReminderOpen(!1)),s&&o.setIsDatePickerOpen(!1),c&&o.setIsTimePickerOpen(!1)};return document.addEventListener("click",i,{capture:!0}),()=>{document.removeEventListener("click",i,{capture:!0})}},[e,t.menuRef,t.customReminderRef,t.datePickerRef,t.timePickerRef,n.isMenuOpen,n.isCustomReminderOpen,n.isDatePickerOpen,n.isTimePickerOpen,o.setIsMenuOpen,o.setIsCustomReminderOpen,o.setIsDatePickerOpen,o.setIsTimePickerOpen])}},9816:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.WebModalComponent=void 0;let a=n(6415),l=n(9694),s=r(n(5932)),c=n(9052);t.WebModalComponent=e=>{let{isMenuModalOpen:t,setIsMenuModalOpen:n,menuConfig:i,isCustomReminderModalOpen:o,setIsCustomReminderModalOpen:r,customReminderConfig:d,isDatePickerModalOpen:f,setIsDatePickerModalOpen:p,datePickerConfig:h,isTimePickerModalOpen:m,setIsTimePickerModalOpen:b,timePickerConfig:g}=(0,s.useContext)(a.WebModalContext),v=(0,s.useRef)(null),y=(0,s.useRef)(null),_=(0,s.useRef)(null),x=(0,s.useRef)(null);return(0,l.useHandleClickOutsideForWebModals)(e.mode,{menuRef:v,customReminderRef:y,datePickerRef:_,timePickerRef:x},{isMenuOpen:t,isCustomReminderOpen:o,isDatePickerOpen:f,isTimePickerOpen:m},{setIsMenuOpen:n,setIsCustomReminderOpen:r,setIsDatePickerOpen:p,setIsTimePickerOpen:b}),s.default.createElement(s.default.Fragment,null,t&&s.default.createElement("div",{ref:v},s.default.createElement(c.ModalComponent,Object.assign({onDismiss:()=>n(!1)},i,{type:"Menu",mode:e.mode,webPosition:u.menu}))),o&&s.default.createElement("div",{ref:y},s.default.createElement(c.ModalComponent,Object.assign({onDismiss:()=>r(!1)},d,{type:"CustomReminderModal",mode:e.mode,webPosition:u.customReminder}))),f&&s.default.createElement("div",{ref:_},s.default.createElement(c.ModalComponent,Object.assign({onDismiss:()=>p(!1)},h,{type:"Calendar",mode:e.mode,webPosition:u.calendar}))),m&&s.default.createElement("div",{ref:x},s.default.createElement(c.ModalComponent,Object.assign({onDismiss:()=>{b(!1)}},g,{type:"Menu",mode:e.mode,webPosition:u.time}))))};let u={time:{top:"210px",left:"13px"},calendar:{top:"142px",left:"13px"},menu:{top:"37px",left:"145px"},customReminder:{top:"37px",left:"0px"}}},9872:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getIndicatorColor=void 0;let i=n(7250),o=n(6865),r={background:e=>{switch(e){case o.IndicatorColor.GREEN:return i.Color.functional1;case o.IndicatorColor.YELLOW:return"#FCFF58";case o.IndicatorColor.RED:return"#C21313";case o.IndicatorColor.BLUE:return i.Color.functional3;case o.IndicatorColor.PURPLE:return"#7E36C6";case o.IndicatorColor.GRAY:return i.Color.darkGray1;case o.IndicatorColor.MAGENTA:return"#AF2668";case o.IndicatorColor.ORANGE:return"#FE7301";case o.IndicatorColor.TEAL:return"#0B827C";default:return"transparent"}},foreground:e=>{switch(e){case o.IndicatorColor.ORANGE:case o.IndicatorColor.YELLOW:return"#000000";default:return"#FFFFFF"}}};t.getIndicatorColor=(e,t,n)=>{var i;let o=t.color?null===(i=n.notificationIndicatorColors)||void 0===i?void 0:i[t.color]:null;return o?o[e]:(0,r[e])("fallback"in t?t.fallback:t.color)}},9897:function(e,t,n){"use strict";var i,o,r=this&&this.__decorate||function(e,t,n,i){var o,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(r<3?o(a):r>3?o(t,n,a):o(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ClientController=void 0;let c=n(707),u=n(4854),d=n(7451),f=n(8684),p=n(7676),h=n(8320),m=n(4673),b=n(768),g=n(7234),v=n(7202),y=n(6858),_=n(4352),x=s(n(9640)),O=class{constructor(e,t){this._providersById=new Map,this._providersByUUID=new Map,this._topics=new Map,this._throttledBroadcastNotificationCount=(0,x.default)(()=>this.broardcastAction("notifications-count-changed"),1e3),this._throttledNotificationSoundChanged=(0,x.default)(()=>this.broardcastAction("notification-sound-toggled"),1e3),this._store=e,this._apiHandler=t,this._apiHandler.onConnection.add(this.onConnection,this),this._apiHandler.onDisconnection.add(this.onDisconnection,this),e.onAction.add(this.onAction.bind(this))}async onAction(e){e instanceof d.CreateNotification?await this.onCreateNotifications(e):e instanceof d.RemoveNotifications?await this.onRemoveNotifications(e):e instanceof h.SetReminder?await this.onSetReminder(e):e instanceof h.CancelReminder?await this.onCancelReminder(e):e instanceof d.ClickButton?await this.onClickButton(e):e instanceof d.ClickFragment?await this.onClickFragment(e):e instanceof d.ClickNotification?await this.onClickNotification(e):e instanceof d.ExpireNotification?await this.onExpireNotification(e):e instanceof p.SubmitNotificationForm?await this.onSubmitNotificationForm(e):e instanceof f.RequestNotificationFormCustomValidation&&await this.onRequestNotificationFormCustomValidation(e),(e instanceof d.CreateNotification||e instanceof d.RemoveNotifications)&&this._throttledBroadcastNotificationCount(),e instanceof g.ToggleNotificationSound&&this._throttledNotificationSoundChanged()}async onCreateNotifications(e){let{notification:t,source:n}=e.notification;if((0,b.isTutorialNotification)(e.notification))return;let i={target:"default",type:"notification-created",notification:(0,m.mutable)(t)};await this.dispatchAction(n,i)}async onRemoveNotifications(e){let{notifications:t}=e;await Promise.all(t.map(async e=>{let{notification:t,source:n}=e;if((0,b.isTutorialNotification)(e))return;if(null!==t.onClose){let e={target:"default",type:"notification-action",trigger:c.ActionTrigger.CLOSE,notification:(0,m.mutable)(t),source:n,result:t.onClose};await this.dispatchAction(n,e)}let i={target:"default",type:"notification-closed",notification:(0,m.mutable)(t)};await this.dispatchAction(n,i)}))}async onSetReminder(e){let{notification:t,source:n,modifiers:i}=e.reminder,o={target:"default",type:"notification-reminder-created",notification:(0,m.mutable)(t),reminderDate:i.reminder};await this.dispatchAction(n,o)}async onCancelReminder(e){let{notification:t,source:n}=e.reminder,i={target:"default",type:"notification-reminder-removed",notification:(0,m.mutable)(t)};await this.dispatchAction(n,i)}async onClickButton(e){let{notification:t,source:n}=e.notification,i=t.buttons[e.buttonIndex];if(!i.onClick)return;if((0,b.isTutorialNotification)(e.notification))return void await (0,b.handleTutorialButtonAction)(i.onClick,this._store);let o={target:"default",type:"notification-action",trigger:c.ActionTrigger.CONTROL,notification:(0,m.mutable)(t),source:n,controlSource:"buttons",controlIndex:e.buttonIndex,result:i.onClick};await this.dispatchAction(n,o)}async onClickFragment(e){let{notification:t,source:n}=e.notification,i=e.fragment;if(!i.onClick)return;let o={target:"default",type:"notification-action",trigger:c.ActionTrigger.CONTROL,notification:Object.assign(Object.assign({},t),{_fragments:[i]}),source:n,controlSource:"_fragments",controlIndex:0,result:i.onClick};await this.dispatchAction(n,o)}async onClickNotification(e){let{notification:t,source:n}=e.notification;if((0,b.isTutorialNotification)(e.notification)||!t.onSelect)return;let i={target:"default",type:"notification-action",trigger:c.ActionTrigger.SELECT,notification:(0,m.mutable)(t),source:n,result:t.onSelect};await this.dispatchAction(n,i)}async onExpireNotification(e){let{notification:t,source:n}=e.notification;if(!t.onExpire)return;let i={target:"default",type:"notification-action",trigger:c.ActionTrigger.EXPIRE,notification:(0,m.mutable)(t),source:n,result:t.onExpire};await this.dispatchAction(n,i)}async onSubmitNotificationForm(e){let{form:t,button:n}=e,{notification:i}=e.notification,o=e.notification.source,r={target:"default",type:"notification-form-submitted",notification:(0,m.mutable)(i),form:t,button:n};await this.dispatchAction(o,r)}async onRequestNotificationFormCustomValidation(e){let{notification:t}=e.notification,n=e.notification.source,i={target:"default",type:"notification-form-values-changed",notification:(0,m.mutable)(t),form:e.form};await this.dispatchAction(n,i)}async dispatchAction(e,t){let n=this._topics.get(t.type);if(n){let i=this.translateProviderIdentityToClientIdentity(e.identity);i&&n.some(e=>e.uuid===i.uuid&&e.name===i.name)&&this._apiHandler.dispatchEvent(i,t)}}async broardcastAction(e){let t=this._topics.get(e);if(t){if("notifications-count-changed"===e){let e={target:"default",type:"notifications-count-changed",count:this._store.state.notifications.length};t.forEach(t=>{this._apiHandler.dispatchEvent(t,e)})}else if("notification-sound-toggled"===e){let e={target:"default",type:"notification-sound-toggled",notificationSoundEnabled:this._store.state.settings.notificationSoundEnabled};t.forEach(t=>{this._apiHandler.dispatchEvent(t,e)})}}}async onAddEventListener(e,t){this._topics.has(e)||this._topics.set(e,[]);let n=this._topics.get(e);n&&!n.some(e=>e.uuid===t.uuid&&e.name===t.name)&&n.push(t)}async onRemoveEventListener(e,t){let n=this._topics.get(e);n&&this._topics.set(e,n.filter(e=>e.uuid!==t.uuid&&e.name!==t.name))}async onConnection(e,t){if(!t)throw Error("Provider information is missing.");await this._store.dispatch(new d.RegisterApplication({type:"web",id:t.id,title:t.title,iconUrl:t.icon,muted:!1,persistToasts:!1}));let n=Object.assign(Object.assign({},e),t);this._providersById.set(t.id,n),this._providersByUUID.set(e.uuid,n)}onDisconnection(e){let t=this._providersByUUID.get(e.uuid);if(t){let n=t.id;this._providersById.delete(n),this._providersByUUID.delete(e.uuid),this._topics.forEach((t,n)=>{this._topics.set(n,t.filter(t=>t.uuid!==e.uuid))})}else console.error(`Client with id {uuid:${e.uuid}, name:${e.name}} was disconnected but could not be found in the connection registry.`)}translateProviderIdentityToClientIdentity(e){let t=this._providersById.get(e.uuid);return t?{uuid:t.uuid,name:t.name}:null}translateClientIdentityToProviderIdentity(e){let t=this._providersByUUID.get(e.uuid);if(t)return{uuid:t.id,name:t.title};throw Error(`Client with identity={id:${e.uuid}, name:${e.name}}} is not connected.`)}};O=r([(0,_.injectable)(),l(0,(0,_.inject)(v.Inject.STORE)),l(1,(0,_.inject)(v.Inject.API_HANDLER)),a("design:paramtypes",["function"==typeof(i=void 0!==y.WebStore&&y.WebStore)?i:Object,"function"==typeof(o=void 0!==u.APIHandler&&u.APIHandler)?o:Object])],O),t.ClientController=O}},M={},function e(t){var n=M[t];if(void 0!==n)return n.exports;var i=M[t]={exports:{}};return E[t].call(i.exports,i,i.exports,e),i.exports}(9615)},e.exports=i(n(101),n(54887),n(8946),n(77314),n(14847),n(82152),n(5867),n(87839),n(69769),n(21707),n(2866),n(69379),n(38239),n(31459),n(35557),n(45896),n(2265),n(88535),n(20653),n(70420),n(20302),n(66367),n(89951),n(54945),n(85314),n(62778),n(58818),n(79118))}}]);