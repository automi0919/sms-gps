(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{106:function(e,t,n){},107:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){},142:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(8),i=n.n(a),r=n(9),s=(n(106),n(7)),c=n(10),l=n(13),u=(n(107),n(5)),d=n(89),p=n(61),h=n.n(p);h.a.defaults.baseURL="/api";var b=h.a,f=null;var j=function(){return f||((f=new WebSocket("wss://safelocate.io/socket")).onopen=function(e){f.send(JSON.stringify({msg:"request connect",init:!0}))},f)},y=n(27),m=n.n(y),O=n(45),v=function(){var e=Object(O.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("what3words called"),e.next=3,b.get("https://api.what3words.com/v3/convert-to-3wa",{params:{key:"VQS6AM2Y",coordinates:t}}).then((function(e){return e.data.words}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=Object(d.createTypes)(["SEND_REQUEST","SEND_LOCATION","SET_CURRENT_GEOLOCATION","GET_REQUEST","APPROVED","ERROR","ERROR_FORMAT","FORMAT_REQUEST_STATE","REQUEST_FAILD","SEND_CONTACT_US"],"SMS"),w="not send",x="sending",T="pending",S="faild",N="not send",E="sending",A="done",C="failed",_=function(){return function(e){return navigator.geolocation.getCurrentPosition((function(t){v("".concat(t.coords.latitude,",").concat(t.coords.longitude)).then((function(n){var o={lat:t.coords.latitude,lng:t.coords.longitude,what3words:n};e({type:g.SET_CURRENT_GEOLOCATION,payload:o})}))}))}},R=function(){return{type:g.FORMAT_REQUEST_STATE}},P=function(){return{type:g.SEND_CONTACT_US,payload:N}},k=n(90),I=n(92),U=n(100),L=(n(131),{position:{},current_geolocation:{},request_state:w,requested_data:{},approved_data:{approvedPos:{lat:"",lng:"",what3words:""},phonenumber:""},error:"",contact_us_state:N,current_state:"not set"}),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,o=t.payload;switch(n){case g.SEND_REQUEST:return console.log("Request State: ",o),Object(s.a)(Object(s.a)({},e),{},{request_state:o});case g.REQUEST_FAILD:return console.log(o),Object(s.a)(Object(s.a)({},e),{},{request_state:S,error:o});case g.SET_CURRENT_GEOLOCATION:return Object(s.a)(Object(s.a)({},e),{},{current_geolocation:o});case g.SEND_LOCATION:return Object(s.a)(Object(s.a)({},e),{},{request_state:o});case g.GET_REQUEST:return Object(s.a)(Object(s.a)({},e),{},{requested_data:o});case g.APPROVED:return Object(s.a)(Object(s.a)({},e),{},{approved_data:o,request_state:g.APPROVED});case g.FORMAT_REQUEST_STATE:return Object(s.a)(Object(s.a)({},e),{},{request_state:w,error:""});case g.SEND_CONTACT_US:return Object(s.a)(Object(s.a)({},e),{},{contact_us_state:o});default:return e}};function M(e){return e.sms.request_state}function q(e){return e.sms.current_geolocation}function Y(e){return e.sms.approved_data}function W(e){return e.sms.error}var F,H=function(e){return!!e&&(!(!e.lat||!e.lng)&&(NaN!==e.lat&&NaN!==e.lng))},G=n(1),Q=I.a.main(F||(F=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n"]))),B=function(){return{styles:[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}]}},z=function(e){var t=e.location,n=e.zoomLevel,o=e.points,a=Object(u.c)((function(e){return q(e)})),i={lat:"number"===typeof(null===t||void 0===t?void 0:t.lat)?null===t||void 0===t?void 0:t.lat:parseFloat(null===t||void 0===t?void 0:t.lat),lng:"number"===typeof(null===t||void 0===t?void 0:t.lng)?null===t||void 0===t?void 0:t.lng:parseFloat(null===t||void 0===t?void 0:t.lng)},r=[];Object.assign(r,o),H(i)||(i=a,console.log("error: ",i),r=[]),console.log("error1: ",i);var c={width:"100",height:"80px",position:"absolute",top:"100%",left:"50%",transform:"translate(-50%, -100%)"};return Object(G.jsx)(Q,{children:Object(G.jsx)("div",{className:"google-map",children:Object(G.jsx)(U.a,{bootstrapURLKeys:{key:"AIzaSyCO34vxnjcT_NlL8oP6BtF-A2E9AqN2u-k"},center:i,zoom:n,options:B,yesIWantToUseGoogleMapApiInternals:!0,children:o.map((function(e,t){var n=function(e){return{lat:"number"===typeof(null===e||void 0===e?void 0:e.lat)?null===e||void 0===e?void 0:e.lat:parseFloat(null===e||void 0===e?void 0:e.lat),lng:"number"===typeof(null===e||void 0===e?void 0:e.lng)?null===e||void 0===e?void 0:e.lng:parseFloat(null===e||void 0===e?void 0:e.lng)}}(e);if(H(n))return Object(G.jsx)("img",Object(s.a)({src:"/assets/images/map_marker.svg",alt:"Marker",style:c},n),t)}))})})})},V=(n(133),function(e){var t=Object(u.b)();Object(o.useEffect)((function(){t(_())}),[]);var n=Object(u.c)((function(e){return q(e)})),a=Object(u.c)((function(e){return Y(e)})),i=a.approvedPos,r=(a.approvedNumber,[]),s=Object(c.f)(),l=window.location.search,d=new URLSearchParams(l),p=d.get("id"),h=d.get("lat");"/display"===s.location.pathname&&(r=!p||h?[i]:[n]),console.log(n),console.log(r[0]);var b=r[0]&&r[0].lat?r[0]:n;return Object(G.jsxs)("div",{className:"layout-container",children:[Object(G.jsx)("div",{className:"map-wrapper",children:b&&(null===b||void 0===b?void 0:b.lat)&&Object(G.jsx)(z,{location:b,zoomLevel:14,points:r})}),e.children]})}),K=n(49),J=n(50),X=Object(c.h)((function(e){var t=e.history,n=Object(c.g)();return Object(G.jsx)(K.a,{icon:J.a,color:"var(--primary-color)",size:"2x",onClick:function(){var e=n.pathname;console.log("path: ",e),"/display"===e||"/send_my_location"===e?t.push("/"):t.goBack()}})})),Z=(n(137),function(e){var t=Object(c.g)();return Object(G.jsxs)("div",{className:"panel",children:[Object(G.jsxs)("div",{className:"logo",children:[Object(G.jsx)(r.b,{to:"/",children:Object(G.jsx)("img",{src:"/assets/images/logo.png",alt:"Logo",srcSet:"",style:{width:e.logoSize}})}),"/"===t.pathname&&Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("h2",{className:"logo-title",children:"safe locate"}),Object(G.jsx)("label",{className:"logo-description",children:"sms your gps"})]})]}),Object(G.jsx)("div",{className:"content-wrapper",children:e.children}),"/privacy"!==t.pathname&&"/display"!==t.pathname&&Object(G.jsxs)(r.b,{className:"copyright-wrapper",to:"/privacy",children:[Object(G.jsx)("span",{className:"privacy-link",children:"Privacy Policy"}),Object(G.jsx)("span",{children:"COPYRIGHT 2021"})]}),"/"!==t.pathname&&Object(G.jsx)("div",{className:"back-icon",children:Object(G.jsx)(X,{})})]})}),$=(n(138),n(94)),ee=n.n($),te=function(e){var t=Object(o.useState)(e.value),n=Object(l.a)(t,2),a=n[0],i=n[1],r=Object(o.useState)(""),s=Object(l.a)(r,2);s[0],s[1];return Object(G.jsxs)("label",{className:"input",children:[Object(G.jsx)(ee.a,{mask:e.mask,className:"input__field input-outline",type:e.type?e.type:"text",onClick:function(){e.onClick&&e.onClick()},readOnly:e.readonly||!1,required:e.required||!1,value:a,onFocus:function(e){},onChange:function(t){i(t.target.value),e.onChange&&(console.log("onHandleChange",t.target.value),e.onChange(t.target.value))},placeholder:" "}),Object(G.jsx)("span",{className:"input__label",children:e.placeholder||""})]})},ne=(n(140),function(e){return Object(G.jsxs)("button",{type:e.type?e.type:"button",className:"custom-btn "+(e.fill?"btn-fill":"btn-outline"),onClick:function(){e.onClick&&e.onClick()},disabled:e.loading,style:{height:e.height},children:[e.loading&&Object(G.jsx)(K.a,{icon:J.b,size:"2x",spin:!0}),!e.loading&&e.children]})});var oe=function(e){var t=Object(u.b)(),n=Object(o.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1],s=Object(o.useState)(""),d=Object(l.a)(s,2),p=d[0],h=d[1],j=Object(o.useState)(""),y=Object(l.a)(j,2),m=y[0],O=y[1],v=Object(o.useState)(""),w=Object(l.a)(v,2),N=w[0],E=w[1],A=Object(c.f)(),C=Object(u.c)((function(e){return W(e)})),_=Object(u.c)((function(e){return M(e)}));return Object(o.useEffect)((function(){t(R())}),[]),console.log("_error: ",C),_===T?(e.handleNotification("success","Your request has been sent successfully"),A.push("/pending"),t(R())):_===S&&(console.log("error: ",C),e.handleNotification("error",C),t(R())),Object(G.jsx)(Z,{children:Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(function(e,t,n,o){return function(a){return a({type:g.SEND_REQUEST,payload:x}),b.post("/send_request",{from:e,to:t,name:n,msg:o,socketID:(console.log("socketID: ",f.id),f?f.id:null)}).then((function(e){console.log("result: ",e),e.data.success?a({type:g.SEND_REQUEST,payload:T}):a({type:g.REQUEST_FAILD,payload:"Your number is not available to use Twilio"})}))}}(p,m,i,N))},children:[Object(G.jsx)(te,{type:"text",placeholder:"YOUR MOBILE NUMBER*",value:p,onChange:h,required:!0,mask:"+6\\1 999 999 999"}),Object(G.jsx)(te,{type:"text",placeholder:"RECEIVER'S MOBILE NUMBER*",value:m,onChange:O,required:!0,mask:"+6\\1 999 999 999"}),Object(G.jsx)(te,{type:"text",placeholder:"YOUR NAME(OPTIONAL)",value:i,onChange:r}),Object(G.jsx)(te,{type:"text",placeholder:"MESSAGE(OPTIONAL)",value:N,onChange:E}),Object(G.jsx)("div",{className:"btn-wrapper",children:Object(G.jsx)(ne,{fill:!0,type:"submit",loading:_===x,children:"SEND SMS GPS REQUEST"})})]})})})},ae=(n(141),n(142),function(e){return Object(G.jsx)("div",{className:e.fill?"info-onboarding info-fill":"info-onboarding info-outline",onClick:function(){e.onClick&&e.onClick()},style:{width:e.width,paddingTop:e.padding,paddingBottom:e.padding},children:e.children})}),ie=n(255),re=n(257),se=(n(143),function(e){return Object(G.jsxs)(ie.a,Object(s.a)(Object(s.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(G.jsx)(ie.a.Header,{closeButton:!0,children:Object(G.jsx)(ie.a.Title,{id:"contained-modal-title-vcenter",children:"Send your location to partner?"})}),Object(G.jsx)(ie.a.Body,{children:Object(G.jsx)("p",{children:"Are you willing to send your GPS location to your partner? If so, please press OK button."})}),Object(G.jsxs)(ie.a.Footer,{children:[Object(G.jsx)(re.a,{onClick:e.onHide,children:"Cancel"}),Object(G.jsx)(re.a,{onClick:e.onOK,children:"OK"})]})]}))});var ce=function(e){var t,n,a,i=Object(u.b)(),r=(Object(u.c)((function(e){return function(e){return e.sms.current_state}(e)})),Object(u.c)((function(e){return q(e)}))),s=Object(u.c)((function(e){return Y(e)})),c=Object(o.useState)(!1),d=Object(l.a)(c,2),p=d[0],h=d[1],f=Object(o.useState)(!1),j=Object(l.a)(f,2),y=(j[0],j[1],window.location.search),v=new URLSearchParams(y),x=v.get("id"),T=v.get("lat"),S=v.get("lng"),N=v.get("phonenumber"),E=v.get("what3words"),A=function(e){var t=e.get("id"),n=e.get("lat"),o=e.get("lng");return t?"CURRENT":n&&o?"SHARED":"APPROVED"}(v),C={lat:"",lng:"",what3words:""};switch(A){case"CURRENT":C=r;break;case"SHARED":C={lat:T,lng:S,what3words:E},e.handleNotification("info","You have shared location");break;case"APPROVED":C=null===s||void 0===s?void 0:s.approvedPos,N=null===s||void 0===s?void 0:s.phonenumber,e.handleNotification("info","Your request has been approved!")}console.log("current approvedPosData: ",s),console.log("current location: ",C),Object(o.useEffect)((function(){"CURRENT"===A&&(i(_()),h(!0))}),[]);var R=function(){var t=Object(O.a)(m.a.mark((function t(){var n,o,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("contacts"in navigator&&"ContactsManager"in window){t.next=4;break}return e.handleNotification("error","Sorry. Your device is not supported contacts!"),t.abrupt("return");case 4:return n=["name","email","tel","address","icon"],o={multiple:!0},t.prev=6,t.next=9,navigator.contacts.select(n,o);case 9:a=t.sent,P(a),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(6),e.handleNotification("error","Sorry. Unknown error occured");case 16:case"end":return t.stop()}}),t,null,[[6,13]])})));return function(){return t.apply(this,arguments)}}(),P=function(e){};return Object(G.jsxs)(Z,{logoSize:"60px",children:[Object(G.jsxs)("div",{className:"display-container",children:[Object(G.jsx)(ae,{fill:!0,width:"70%",padding:"5px",children:Object(G.jsx)("span",{style:{fontSize:"12px"},children:x?"YOU SHARED YOUR LOCATION":"".concat(N," HAS SHARED THEIR LOCATION")})}),Object(G.jsxs)("div",{className:"detail-wrapper",children:[Object(G.jsx)(ae,{onClick:function(){var t,n,o="latitude: ".concat(null===(t=C)||void 0===t?void 0:t.lat,", longitude: ").concat(null===(n=C)||void 0===n?void 0:n.lng);navigator.clipboard.writeText(o),e.handleNotification&&e.handleNotification("success","GPS position copied!","".concat(o))},children:Object(G.jsxs)("div",{className:"info",children:[Object(G.jsx)("span",{className:"info-title",children:"GPS LOCATION - TAP TO COPY"}),Object(G.jsx)("span",{className:"info-detail",children:null===(t=C)||void 0===t?void 0:t.lng}),Object(G.jsx)("span",{className:"info-detail",children:null===(n=C)||void 0===n?void 0:n.lat})]})}),Object(G.jsx)(ae,{onClick:function(){var t,n="".concat(null===(t=C)||void 0===t?void 0:t.what3words);navigator.clipboard.writeText(n),e.handleNotification&&e.handleNotification("success","What3words copied!","".concat(n))},children:Object(G.jsxs)("div",{className:"info",children:[Object(G.jsx)("span",{className:"info-title",children:"WHAT3WORDS LOCATION - TAP TO COPY"}),Object(G.jsx)("span",{className:"info-detail",children:"///"+(null===(a=C)||void 0===a?void 0:a.what3words)})]})}),Object(G.jsx)("div",{className:"mini-map-container",children:Object(G.jsx)(z,{location:C,zoomLevel:14,points:[C]})}),Object(G.jsx)(ne,{type:"button",fill:!0,onClick:function(){var e,t,n="".concat(null===(e=C)||void 0===e?void 0:e.lat,",").concat(null===(t=C)||void 0===t?void 0:t.lng),o="https://www.google.com.sa/maps/search/".concat(n,"?hl=en");window.open(o,"_blank")},children:"open in google maps"}),Object(G.jsx)(ne,{type:"button",fill:!0,onClick:function(){var e,t="https://what3words.com/".concat(null===(e=C)||void 0===e?void 0:e.what3words);window.open(t,"_blank")},children:"open in what3words"}),Object(G.jsx)(ne,{type:"button",fill:!0,onClick:R,children:"call emergency services"})]})]}),Object(G.jsx)(se,{show:p,onOK:function(){C=r,e.handleNotification("info","Your position has been sent!"),i(function(e,t){return function(n){return b.post("/send_location",{pos:e,id:t}).then((function(e){n({type:g.SEND_LOCATION,payload:w})}))}}(C,x)),h(!1)},onHide:function(){return h(!1)}})]})};n(145);var le=function(e){return Object(G.jsx)(Z,{logoSize:"60px",children:Object(G.jsxs)("div",{className:"approval-container",children:[Object(G.jsx)(ne,{type:"button",fill:!0,children:"GPS LOCATION PENDING APPROVAL"}),Object(G.jsx)("p",{children:"THIS SCREEN WILL AUTOMATICALLY UPDATE WHEN YOUR SMS REQUEST IS OPENED AND ACCEPTED"})]})})},ue=(n(146),function(e){return Object(u.b)()(_()),Object(G.jsx)(Z,{children:Object(G.jsx)("div",{className:"wrapper",children:Object(G.jsxs)("div",{className:"btn-group",children:[Object(G.jsx)(r.b,{to:"/request",children:Object(G.jsx)(ne,{fill:!0,children:"REQUEST A GPS LOCATION VIA SMS"})}),Object(G.jsx)(r.b,{to:"/send_my_location",children:Object(G.jsx)(ne,{fill:!0,children:"SEND MY GPS LOCATION VIA SMS"})}),Object(G.jsx)(r.b,{to:"/help",children:Object(G.jsx)(ne,{fill:!1,children:"HOW TO SAFE LOCATE"})}),Object(G.jsx)(r.b,{to:"/donate",children:Object(G.jsx)(ne,{fill:!1,children:"SPNSORS & DONATE"})}),Object(G.jsx)(r.b,{to:"/about",children:Object(G.jsx)(ne,{fill:!1,children:"ABOUT SAFE LOCATE"})}),Object(G.jsx)(r.b,{to:"/contact-us",children:Object(G.jsx)(ne,{fill:!1,children:"CONTACT"})})]})})})});n(147);var de=function(e){var t=Object(u.b)(),n=Object(o.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1],s=Object(o.useState)(""),d=Object(l.a)(s,2),p=d[0],h=d[1],f=Object(o.useState)(""),j=Object(l.a)(f,2),y=j[0],m=j[1],O=Object(c.f)(),v=Object(u.c)((function(e){return M(e)})),w=Object(u.c)((function(e){return W(e)})),N=Object(u.c)((function(e){return q(e)}));return Object(o.useEffect)((function(){t(_())}),[]),v===T?(e.handleNotification("success","Your location infomation has been sent successfully."),O.push("/"),t(R())):v===S&&(e.handleNotification("error",w),t(R())),Object(G.jsx)(Z,{children:Object(G.jsx)("div",{className:"my-container",children:Object(G.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(function(e,t,n,o){return function(a){return a({type:g.SEND_REQUEST,payload:x}),b.post("/send_share_request",{from:e,to:t,name:n,pos:o}).then((function(e){console.log("result: ",e),e.data.success?a({type:g.SEND_REQUEST,payload:T}):a({type:g.REQUEST_FAILD,payload:"Your number is not available to use Twilio"})}))}}(p,y,i,N))},children:[Object(G.jsx)(te,{type:"text",placeholder:"YOUR MOBILE NUMBER*",mask:"+6\\1 999 999 999",value:p,onChange:h,required:!0}),Object(G.jsx)(te,{type:"text",placeholder:"RECEIVER'S MOBILE NUMBER*",value:y,onChange:m,required:!0,mask:"+6\\1 999 999 999"}),Object(G.jsx)(te,{type:"text",placeholder:"YOUR NAME(OPTIONAL)",value:i,onChange:r}),Object(G.jsx)(ae,{children:Object(G.jsxs)("div",{className:"info",children:[Object(G.jsx)("span",{className:"info-title",children:"GPS LOCATION"}),Object(G.jsxs)("span",{className:"info-detail",children:["latitude: ",N.lng]}),Object(G.jsxs)("span",{className:"info-detail",children:["longitude: ",N.lat]})]})}),Object(G.jsx)(ae,{children:Object(G.jsxs)("div",{className:"info",children:[Object(G.jsx)("span",{className:"info-title",children:"WHAT3WORDS"}),Object(G.jsx)("span",{className:"info-detail",children:"///"+N.what3words})]})}),Object(G.jsx)("div",{className:"btn-wrapper",children:Object(G.jsx)(ne,{fill:!0,type:"submit",loading:v===x,children:"SEND SMS GPS"})})]})})})};n(148);var pe=function(e){var t=Object(u.b)(),n=Object(o.useState)(""),a=Object(l.a)(n,2),i=a[0],r=a[1],s=Object(o.useState)(""),d=Object(l.a)(s,2),p=d[0],h=d[1],f=Object(o.useState)(""),j=Object(l.a)(f,2),y=j[0],m=j[1],O=Object(o.useState)(""),v=Object(l.a)(O,2),w=v[0],x=v[1],T=Object(c.f)(),S=Object(u.c)((function(e){return function(e){return e.sms.contact_us_state}(e)}));return Object(o.useEffect)((function(){t(P())}),[]),S===A?(e.handleNotification("success","Your message has been sent successfully"),T.push("/"),t(P())):S===C&&(e.handleNotification("error","Sorry. Unknown error has been occurd"),t(P())),Object(G.jsx)(Z,{logoSize:"60px",children:Object(G.jsxs)("div",{className:"contactus-container",children:[Object(G.jsx)("div",{className:"title-wrapper",children:Object(G.jsx)("p",{className:"description",children:"Say Hello to our team"})}),Object(G.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(function(e,t,n,o){return function(a){return a({type:g.SEND_CONTACT_US,payload:E}),b.post("/send_contact_us",{name:e,email:t,phonenumber:n,msg:o}).then((function(e){console.log("result: ",e),e.data.success?a({type:g.SEND_CONTACT_US,payload:A}):a({type:g.SEND_CONTACT_US,payload:C})}))}}(p,i,y,w))},children:[Object(G.jsx)(te,{type:"text",placeholder:"YOUR NAME*",value:p,onChange:h,required:!0}),Object(G.jsx)(te,{type:"email",placeholder:"YOUR EMAIL ADDRESS*",value:i,onChange:r,required:!0}),Object(G.jsx)(te,{type:"text",placeholder:"YOUR NUMBER(OPTIONAL)",value:y,onChange:m}),Object(G.jsx)(te,{type:"text",placeholder:"MESSAGE(OPTIONAL)",value:w,onChange:x}),Object(G.jsx)("div",{className:"btn-wrapper",children:Object(G.jsx)(ne,{fill:!0,type:"submit",loading:S===E,height:"7vh",children:"SEND MESSAGE"})})]})]})})},he=(n(149),n(34));var be=function(e){return Object(G.jsx)(Z,{logoSize:"60px",children:Object(G.jsxs)("div",{className:"privacy-container",children:[Object(G.jsx)("h3",{className:"title",children:"Privacy Policy"}),Object(G.jsxs)(he.Scrollbars,{style:{height:438},children:[Object(G.jsxs)("p",{children:["Your privacy is important to us. It is SAFE LOCATE's policy to respect your privacy and comply with any applicable law and regulation regarding any personal information we may collect about you, including across our website, ",Object(G.jsx)(r.b,{to:"/",children:"https://safelocate.io"}),", and other sites we own and operate."]}),Object(G.jsx)("p",{children:"This policy is effective as of 1 August 2021 and was last updated on 1 August 2021."}),Object(G.jsx)("h4",{children:"Information We Collect"}),Object(G.jsx)("p",{children:"Information we collect includes both information you knowingly and actively provide us when using or participating in any of our services and promotions, and any information automatically sent by your devices in the course of accessing our products and services."}),Object(G.jsx)("h4",{children:"Log Data"}),Object(G.jsx)("article",{children:"When you visit our website, our servers may automatically log the standard data provided by your web browser. It may include your device\u2019s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, other details about your visit, and technical details that occur in conjunction with any errors you may encounter. Please be aware that while this information may not be personally identifying by itself, it may be possible to combine it with other data to personally identify individual persons."}),Object(G.jsx)("h4",{children:"Personal Information"}),"We may ask for personal information which may include one or more of the following:",Object(G.jsx)("title",{children:"Name"}),Object(G.jsx)("title",{children:"Phone/mobile number"}),Object(G.jsx)("p",{children:"Legitimate Reasons for Processing Your Personal Information"}),"We only collect and use your personal information when we have a legitimate reason for doing so. In which instance, we only collect personal information that is reasonably necessary to provide our services to you.",Object(G.jsx)("h4",{children:" Collection and Use of Information"}),Object(G.jsx)("article",{children:"We may collect personal information from you when you do any of the following on our website: Use a mobile device or web browser to access our content Contact us via email, social media, or on any similar technologies When you mention us on social media We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes: We may collect, hold, use, and disclose information for the following purposes, and personal information will not be further processed in a manner that is incompatible with these purposes: to enable you to customise or personalise your experience of our website to contact and communicate with you for analytics, market research, and business development, including to operate and improve our website, associated applications, and associated social media platforms for advertising and marketing, including to send you promotional information about our products and services and information about third parties that we consider may be of interest to you Please be aware that we may combine information we collect about you with general information or research data we receive from other trusted sources."}),Object(G.jsx)("h4",{children:"Security of Your Personal Information"}),"When we collect and process personal information, and while we retain this information, we will protect it within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use, or modification. Although we will do our best to protect the personal information you provide to us, we advise that no method of electronic transmission or storage is 100% secure, and no one can guarantee absolute data security. We will comply with laws applicable to us in respect of any data breach. You are responsible for selecting any password and its overall security strength, ensuring the security of your own information within the bounds of our services. How Long We Keep Your Personal Information We keep your personal information only for as long as we need to. This time period may depend on what we are using your information for, in accordance with this privacy policy. If your personal information is no longer required, we will delete it or make it anonymous by removing all details that identify you. However, if necessary, we may retain your personal information for our compliance with a legal, accounting, or reporting obligation or for archiving purposes in the public interest, scientific, or historical research purposes or statistical purposes.",Object(G.jsx)("h4",{children:"Children\u2019s Privacy"}),"We do not aim any of our products or services directly at children under the age of 13, and we do not knowingly collect personal information about children under 13. Disclosure of Personal Information to Third Parties We may disclose personal information to:",Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:" a parent, subsidiary, or affiliate of our company"}),Object(G.jsx)("li",{children:" third party service providers for the purpose of enabling them to provide their services, for example, IT service providers, data storage, hosting and server providers, advertisers, or analytics platforms"}),Object(G.jsx)("li",{children:" our employees, contractors, and/or related entities"}),Object(G.jsx)("li",{children:"our existing or potential agents or business partners"}),Object(G.jsx)("li",{children:"sponsors or promoters of any competition, sweepstakes, or promotion we run"}),Object(G.jsx)("li",{children:"courts, tribunals, regulatory authorities, and law enforcement officers, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise, or defend our legal rights third parties, including agents or sub-contractors, who assist us in providing information, products, services, or direct marketing to you third parties to collect and process data"})]}),Object(G.jsxs)("article",{children:[Object(G.jsx)("h4",{children:"International Transfers of Personal Information"}),"The personal information we collect is stored and/or processed where we or our partners, affiliates, and third-party providers maintain facilities. Please be aware that the locations to which we store, process, or transfer your personal information may not have the same data protection laws as the country in which you initially provided the information. If we transfer your personal information to third parties in other countries:",Object(G.jsxs)("ul",{style:{listStyle:"outside"},children:[Object(G.jsx)("li",{children:" we will perform those transfers in accordance with the requirements of applicable law; and "}),Object(G.jsx)("li",{children:" we will protect the transferred personal information in accordance with this privacy policy."})]}),"Your Rights and Controlling Your Personal Information You always retain the right to withhold personal information from us, with the understanding that your experience of our website may be affected. We will not discriminate against you for exercising any of your rights over your personal information. If you do provide us with personal information you understand that we will collect, hold, use and disclose it in accordance with this privacy policy. You retain the right to request details of any personal information we hold about you.",Object(G.jsxs)("ul",{children:[Object(G.jsx)("li",{children:"If we receive personal information about you from a third party, we will protect it as set out in this privacy policy. If you are a third party providing personal information about somebody else, you represent and warrant that you have such person\u2019s consent to provide the personal information to us."}),Object(G.jsx)("li",{children:" If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time. We will provide you with the ability to unsubscribe from our email-database or opt out of communications. Please be aware we may need to request specific information from you to help us confirm your identity."}),Object(G.jsx)("li",{children:"If you believe that any information we hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, please contact us using the details provided in this privacy policy. We will take reasonable steps to correct any information found to be inaccurate, incomplete, misleading, or out of date."}),Object(G.jsx)("li",{children:"If you believe that we have breached a relevant data protection law and wish to make a complaint, please contact us using the details below and provide us with full details of the alleged breach. We will promptly investigate your complaint and respond to you, in writing, setting out the outcome of our investigation and the steps we will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint."})]})]}),Object(G.jsx)("h4",{children:"Use of Cookies"}),"We use \u201ccookies\u201d to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.",Object(G.jsx)("h4",{children:"Limits of Our Policy"}),"Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices.",Object(G.jsx)("h4",{children:"Changes to This Policy"}),"At our discretion, we may change our privacy policy to reflect updates to our business processes, current acceptable practices, or legislative or regulatory changes. If we decide to change this privacy policy, we will post the changes here at the same link by which you are accessing this privacy policy. If required by law, we will get your permission or give you the opportunity to opt in to or opt out of, as applicable, any new uses of your personal information.",Object(G.jsx)("h4",{children:"Contact Us"}),"For any questions or concerns regarding your privacy, you may contact us using the following details:",Object(G.jsxs)("p",{children:["Hugh Campbell",Object(G.jsx)("br",{}),Object(G.jsx)("strong",{children:"Hello@safelocate.io"})]})]})]})})};n(165);var fe=function(e){return Object(G.jsx)(Z,{logoSize:"60px",children:Object(G.jsx)("div",{className:"privacy-container",children:Object(G.jsxs)(he.Scrollbars,{style:{height:400},children:[Object(G.jsx)("h3",{className:"title",children:"About"}),Object(G.jsxs)("p",{children:[Object(G.jsx)("strong",{children:"SAFE LOCATE"})," is a simple NO APP & 2 TAP way of requesting or sharing a location via SMS. A request link is sent to a user's phone via SMS, the receiver simply taps the link and taps ALLOW GPS on their phone and their location is sent back to the requesting person or party."]}),Object(G.jsxs)("p",{children:[Object(G.jsx)("strong",{children:"SAFE LOCATE"})," was a result of being first on the scene at an accident 2 weeks ago and the man died in my arms. One of the biggest issues was that the emergency services arrived 5-10 minutes late after driving past the location TWICE!"]}),Object(G.jsx)("p",{children:"Initially, SL has been launched for FREE private use when trying to locate a loved on when they have been involved in an incident, when lost or to provide peace of mind. We will then be launching our commercial offering which open up live location requests for emergency services, client and employee tracking for businesses such as insurance, roadside assist, delivery services etc."}),Object(G.jsxs)("p",{children:[Object(G.jsx)("strong",{children:"HUGH CAMPBELL"}),Object(G.jsx)("br",{})," FOUNDER"]})]})})})};n(166);var je=[{path:"/",component:ue,exact:!0},{path:"/request",component:oe},{path:"/pending",component:le},{path:"/send_my_location",component:de},{path:"/display",component:ce},{path:"/contact-us",component:pe},{path:"/privacy",component:be},{path:"/about",component:fe},{path:"/donate",component:function(e){return Object(G.jsx)(Z,{logoSize:"60px",children:Object(G.jsxs)("div",{className:"privacy-container",children:[Object(G.jsx)("h3",{className:"title",children:"Donate"}),Object(G.jsx)("p",{children:"Sorry. This is not developed yet"})]})})}},{path:"/"}],ye=(n(167),n(29)),me=(n(171),function(e){var t=je,n=j(),a=Object(c.f)(),i=Object(u.b)();Object(o.useEffect)((function(){return document.title="Safe Locate",n.onmessage=function(e){var t,o=JSON.parse(e.data);switch(console.log("Received message from server: ",o),o.type){case"UPDATE_POS":i((t={approvedPos:o.approvedPos,phonenumber:o.phonenumber},{type:g.APPROVED,payload:t})),console.log("updated_pos: ",o.approvedPos),a.push("/display");break;case"SET_SOCKETID":o.id&&(n.id=o.id)}},function(){n.close()}}),[]);var r=Object(c.g)(),l=Object(G.jsx)(V,{children:Object(G.jsx)(c.c,{location:r,children:t.map((function(n,o){return Object(G.jsx)(c.a,{path:n.path,component:function(){return Object(G.jsx)(n.component,Object(s.a)(Object(s.a)({},e),{},{handleNotification:d,routes:t}))},exact:n.exact},o)}))})}),d=function(e,t,n){var o=3e3;switch(e){case"info":ye.NotificationManager.info(n,t,o);break;case"success":ye.NotificationManager.success(n,t,o);break;case"warning":ye.NotificationManager.warning(n,t,o);break;case"error":ye.NotificationManager.error(n,t,o)}};return Object(G.jsxs)(G.Fragment,{children:[l,Object(G.jsx)(ye.NotificationContainer,{})]})}),Oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,258)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),i(e),r(e)}))},ve=n(28),ge=n(96),we=n(256);function xe(){return Object(ve.b)({form:we.a,sms:D})}var Te=function(e){return e},Se=function(){return Te};var Ne=n(99),Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=Object(ve.d)(xe(),t,Object(ve.c)(Object(ve.a)(ge.a),Se()));return n}(null,window.REDUX_DATA||void 0);i.a.render(Object(G.jsx)(u.a,{store:Ee,children:Object(G.jsx)(r.a,{children:Object(G.jsx)(Ne.ToastProvider,{children:Object(G.jsx)(me,{})})})}),document.getElementById("root")),Oe()}},[[252,1,2]]]);
//# sourceMappingURL=main.558e6add.chunk.js.map