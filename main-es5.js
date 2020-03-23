function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,n){e.exports=n("zUnb")},zUnb:function(e,t,n){"use strict";n.r(t);var c=n("fXoL"),a=n("jhN1"),o=n("tyNb"),r=n("ofXK"),i=function(){function e(t,n){_classCallCheck(this,e),this.id=t,this.model=n,this.isNew=!1}return _createClass(e,[{key:"toModel",value:function(){return this.model}},{key:"address",get:function(){return this.model.address},set:function(e){this.model.address=e}},{key:"createdAt",get:function(){return this.model.createdAt.toDate()},set:function(e){this.model.createdAt=e}},{key:"geometry",get:function(){var e=new Array;return e.push(this.latitude),e.push(this.longitude),e}},{key:"filename",get:function(){return void 0===this.model.filename?void 0:"http://smtp.teledesk.ru/".concat(this.model.filename)}},{key:"placemarkProperties",get:function(){var e=new r.e("en-US");return{hintContent:this.title,balloonContent:"<p>".concat(e.transform(this.createdAt,"dd.MM.yyyy hh:mm"),"</p>").concat(this.title)}}},{key:"placemarkOptions",get:function(){return{iconColor:"red",preset:this.isNew?"islands#redCircleDotIcon":"islands#redDotIcon"}}},{key:"latitude",get:function(){return this.model.latitude}},{key:"longitude",get:function(){return this.model.longitude}},{key:"title",get:function(){return this.model.title}},{key:"phone",get:function(){return this.model.phone}}]),e}(),l=n("lJxs"),s=n("S/Aq"),u=n("BAab"),p=function(){function e(t,n){_classCallCheck(this,e),this.fireStore=t,this.storage=n,this.path="alerts"}return _createClass(e,[{key:"get",value:function(){return this.fireStore.collection(this.path).snapshotChanges().pipe(Object(l.a)((function(e){return e.map((function(e){var t=e.payload.doc.data(),n=e.payload.doc.id;return new i(n,t)}))})))}},{key:"add",value:function(e){return this.fireStore.collection("".concat(this.path)).add(e.toModel())}},{key:"delete",value:function(e){return this.fireStore.doc("/".concat(this.path,"/").concat(e)).delete()}},{key:"update",value:function(e){return this.fireStore.doc("/".concat(this.path,"/").concat(e.id)).update(e.toModel())}}]),e}();function d(e,t){if(1&e&&(c.qc(0,"tr"),c.qc(1,"td"),c.Vc(2),c.Bc(3,"date"),c.pc(),c.qc(4,"td"),c.Vc(5),c.pc(),c.qc(6,"td"),c.Vc(7),c.pc(),c.qc(8,"td"),c.Vc(9),c.pc(),c.qc(10,"td"),c.Vc(11),c.pc(),c.qc(12,"td"),c.Vc(13),c.pc(),c.qc(14,"td"),c.Vc(15),c.pc(),c.pc()),2&e){var n=t.$implicit;c.Yb(2),c.Wc(c.Dc(3,7,n.createdAt,"dd.MM.yyyy HH:mm:ss")),c.Yb(3),c.Wc(n.phone),c.Yb(2),c.Wc(n.toModel().address),c.Yb(2),c.Wc(n.toModel().longitude),c.Yb(2),c.Wc(n.toModel().latitude),c.Yb(2),c.Wc(n.toModel().title),c.Yb(2),c.Wc(n.filename)}}function f(e,t){if(1&e&&(c.oc(0),c.qc(1,"table",1),c.qc(2,"thead"),c.qc(3,"tr"),c.qc(4,"th"),c.Vc(5," \u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f "),c.pc(),c.qc(6,"th"),c.Vc(7," \u0422\u0435\u043b\u0435\u0444\u043e\u043d "),c.pc(),c.qc(8,"th"),c.Vc(9," \u0410\u0434\u0440\u0435\u0441 "),c.pc(),c.qc(10,"th"),c.Vc(11," \u0414\u043e\u043b\u0433\u043e\u0442\u0430 "),c.pc(),c.qc(12,"th"),c.Vc(13," \u0428\u0438\u0440\u0438\u043d\u0430 "),c.pc(),c.qc(14,"th"),c.Vc(15," \u041f\u043e\u043b\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 "),c.pc(),c.qc(16,"th"),c.Vc(17," \u0417\u0432\u0443\u043a\u043e\u0432\u043e\u0439 \u0444\u0430\u0439\u043b "),c.pc(),c.pc(),c.pc(),c.qc(18,"tbody"),c.Tc(19,d,16,10,"tr",2),c.pc(),c.pc(),c.nc()),2&e){var n=c.Ac();c.Yb(19),c.Gc("ngForOf",n.alerts)}}p.\u0275fac=function(e){return new(e||p)(c.uc(s.a),c.uc(u.a))},p.\u0275prov=c.gc({token:p,factory:p.\u0275fac,providedIn:"root"});var h=function(){function e(t){_classCallCheck(this,e),this.alertService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.alertService.get().subscribe((function(t){e.alerts=t.sort((function(e,t){return t.createdAt.getTime()-e.createdAt.getTime()})),console.log(t)}))}}]),e}();h.\u0275fac=function(e){return new(e||h)(c.kc(p))},h.\u0275cmp=c.ec({type:h,selectors:[["app-alerts"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&c.Tc(0,f,20,1,"ng-container",0),2&e&&c.Gc("ngIf",t.alerts)},directives:[r.m,r.l],pipes:[r.e],styles:[""]});var m=n("GUpj"),v=function(){function e(t){_classCallCheck(this,e),this.alertService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=m.map("map",{center:[55.03573,82.896184],zoom:16,fullscreenControl:!1});e&&console.log("Map added"),this.alertService.get().subscribe((function(t){t.forEach((function(t){if(void 0!==t.toModel().longitude){var n=m.marker([t.toModel().latitude,t.toModel().longitude]);n.addTo(e).bindPopup(t.toModel().title),n.on("click",(function(){})),console.log("Marker after adding:"+n.getLatLng())}}))})),e.on("click",(function(e){var t=m.marker([e.latlng.lat,e.latlng.lng]);console.log("Marker after adding:"+t.getLatLng())}))}}]),e}();v.\u0275fac=function(e){return new(e||v)(c.kc(p))},v.\u0275cmp=c.ec({type:v,selectors:[["app-map"]],decls:1,vars:0,consts:[["id","map",2,"width","100%","height","800px"]],template:function(e,t){1&e&&c.lc(0,"div",0)},styles:[""]});var g=n("dyI5"),y=function(){function e(t){_classCallCheck(this,e),this.alertService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;g.a.load().then((function(t){var n=new t.Map("map",{center:[55.030199,82.92043],zoom:16});e.alertService.get().subscribe((function(e){e.forEach((function(e){void 0!==e.toModel().longitude&&n.geoObjects.add(new g.a.Placemark([55.642063,37.656123],{balloonContent:"\u0446\u0432\u0435\u0442 <strong>\u043a\u0440\u0430\u0441\u043d\u044b\u0439</strong>"},{preset:"islands#redSportIcon"}))}))}))})).catch((function(e){return console.log("Failed to load Yandex Maps",e)}))}}]),e}();y.\u0275fac=function(e){return new(e||y)(c.kc(p))},y.\u0275cmp=c.ec({type:y,selectors:[["app-ymap"]],decls:1,vars:0,consts:[["id","map",2,"width","100%","height","700px"]],template:function(e,t){1&e&&c.lc(0,"div",0)},styles:[""]});var k=n("mrSG"),b=n("7avB"),w=function(){function e(t){_classCallCheck(this,e),this.alertService=t,this.close=new c.u}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"play",value:function(){return Object(k.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new Audio).src=this.alert.filename,t.load(),e.next=5,t.play();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"close_Click",value:function(){return Object(k.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443  ".concat(this.alert.address,"?")),!e.t0){e.next=5;break}return this.close.emit(this.placemark),e.next=5,this.alertService.delete(this.alert.id);case 5:case"end":return e.stop()}}),e,this)})))}}]),e}();function C(e,t){if(1&e){var n=c.rc();c.qc(0,"app-placemark",2),c.yc("close",(function(e){return c.Nc(n),c.Ac().close(e)})),c.pc()}if(2&e){var a=c.Ac();c.Gc("alert",a.alert)("placemark",a.placemark)}}w.\u0275fac=function(e){return new(e||w)(c.kc(p))},w.\u0275cmp=c.ec({type:w,selectors:[["app-placemark"]],inputs:{alert:"alert",placemark:"placemark"},outputs:{close:"close"},decls:13,vars:6,consts:[[3,"click"]],template:function(e,t){1&e&&(c.qc(0,"p"),c.Vc(1),c.Bc(2,"date"),c.pc(),c.qc(3,"p"),c.Vc(4),c.pc(),c.qc(5,"p"),c.Vc(6),c.pc(),c.qc(7,"p"),c.qc(8,"button",0),c.yc("click",(function(){return t.play()})),c.Vc(9,"\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c"),c.pc(),c.pc(),c.qc(10,"p"),c.qc(11,"button",0),c.yc("click",(function(){return t.close_Click()})),c.Vc(12,"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),c.pc(),c.pc()),2&e&&(c.Yb(1),c.Wc(c.Dc(2,3,t.alert.createdAt,"dd.MM.yyyy hh:mm")),c.Yb(3),c.Wc(t.alert.title),c.Yb(2),c.Wc(t.alert.phone))},pipes:[r.e],styles:["[_nghost-%COMP%]{position:absolute;right:10px;bottom:50px;top:70px;width:255px;background:azure;z-index:9999990;overflow:auto;padding-left:5px}"]});var _=function(){return[55.030199,82.92043]},q=function(){function e(t,n,c){_classCallCheck(this,e),this.alertService=t,this.cdr=n,this.applicationRef=c,this.alerts=void 0}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"balloonClick",value:function(e){console.log(e),"balloonopen"===e.type?(this.alert=e.alert,this.placemark=e.placemark):(this.alert=void 0,this.placemark=void 0),this.applicationRef.tick(),this.cdr.detectChanges()}},{key:"load",value:function(e){var t=this;this.map=e,console.log("load"),console.log(this.map),this.alertService.get().subscribe((function(e){if(null!==e){t.alerts&&e.filter((function(e){return!t.alerts.map((function(e){return e.id})).includes(e.id)})).forEach((function(e){return Object(k.__awaiter)(t,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isNew=!0,console.log(e),(n=new Audio).src=e.filename,n.load(),t.next=6,n.play();case 6:case"end":return t.stop()}}),t)})))})),t.alerts=e;var n=new ymaps.GeoObjectCollection;t.map.instance.geoObjects.add(n),n.removeAll(),e.forEach((function(e){var n=new ymaps.Placemark(e.geometry,e.placemarkProperties,e.placemarkOptions);n.events.add(["balloonopen","balloonclose"],(function(c){return t.balloonClick({ymaps:ymaps,instance:n,type:c.originalEvent.type,event:c,alert:e,placemark:n})})),t.map.instance.geoObjects.add(n)}))}}))}},{key:"close",value:function(e){console.log(e),this.map.instance.geoObjects.remove(e)}}]),e}();q.\u0275fac=function(e){return new(e||q)(c.kc(p),c.kc(c.j),c.kc(c.g))},q.\u0275cmp=c.ec({type:q,selectors:[["app-yandex-map"]],decls:2,vars:4,consts:[[3,"center","zoom","load"],[3,"alert","placemark","close",4,"ngIf"],[3,"alert","placemark","close"]],template:function(e,t){1&e&&(c.qc(0,"angular-yandex-map",0),c.yc("load",(function(e){return t.load(e)})),c.pc(),c.Tc(1,C,1,2,"app-placemark",1)),2&e&&(c.Gc("center",c.Ic(3,_))("zoom",12),c.Yb(1),c.Gc("ngIf",t.alert))},directives:[b.b,r.m,w],styles:[""]});var M=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();function O(e,t){if(1&e){var n=c.rc();c.qc(0,"button",3),c.yc("click",(function(){c.Nc(n);var e=c.Ac().$implicit;return c.Ac(2).play(e)})),c.Vc(1,"\u041f\u0440\u043e\u0441\u043b\u0443\u0448\u0430\u0442\u044c"),c.pc()}}function x(e,t){if(1&e&&(c.oc(0),c.qc(1,"p"),c.qc(2,"span"),c.Vc(3),c.Bc(4,"date"),c.pc(),c.Vc(5),c.Tc(6,O,2,0,"button",2),c.pc(),c.nc()),2&e){var n=t.$implicit;c.Yb(3),c.Wc(c.Dc(4,3,n.createdAt,"dd.MM.yyyy HH:mm:ss")),c.Yb(2),c.Xc(" ",n.title," "),c.Yb(1),c.Gc("ngIf",n.filename)}}function I(e,t){if(1&e&&(c.oc(0),c.Tc(1,x,7,6,"ng-container",1),c.nc()),2&e){var n=c.Ac();c.Yb(1),c.Gc("ngForOf",n.alerts)}}M.\u0275fac=function(e){return new(e||M)},M.\u0275cmp=c.ec({type:M,selectors:[["app-test"]],decls:2,vars:0,template:function(e,t){1&e&&(c.qc(0,"p"),c.Vc(1,"test works!"),c.pc())},styles:[""]});var A=function(){function e(t){_classCallCheck(this,e),this.alertService=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.alertService.get().subscribe((function(t){e.alerts=t.sort((function(e,t){return t.createdAt.getTime()-e.createdAt.getTime()})),console.log(t)}))}},{key:"play",value:function(e){return Object(k.__awaiter)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),(n=new Audio).src=e.filename,n.load(),t.next=6,n.play();case 6:case"end":return t.stop()}}),t)})))}}]),e}();A.\u0275fac=function(e){return new(e||A)(c.kc(p))},A.\u0275cmp=c.ec({type:A,selectors:[["app-sidebar"]],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["nbButton","",3,"click",4,"ngIf"],["nbButton","",3,"click"]],template:function(e,t){1&e&&c.Tc(0,I,2,1,"ng-container",0),2&e&&c.Gc("ngIf",t.alerts)},directives:[r.m,r.l],pipes:[r.e],styles:["[_nghost-%COMP%]{overflow:auto}"]});var V=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"change",value:function(){console.log("tets")}}]),e}();V.\u0275fac=function(e){return new(e||V)},V.\u0275cmp=c.ec({type:V,selectors:[["app-main"]],decls:4,vars:0,consts:[[1,"map"],[1,"panel"]],template:function(e,t){1&e&&(c.qc(0,"div",0),c.lc(1,"router-outlet"),c.pc(),c.qc(2,"div",1),c.lc(3,"app-sidebar"),c.pc())},directives:[o.h,A],styles:[".map{width:100%;height:800px}.panel{position:absolute;right:10px;bottom:50px;top:70px;width:225px;background:azure;z-index:999999;overflow:auto;padding-left:5px}"],encapsulation:2});var S=[{path:"",component:V,children:[{path:"",component:q},{path:"alerts",component:h},{path:"map",component:v},{path:"ymap",component:y},{path:"yamap",component:q},{path:"test",component:M}]}],j=function e(){_classCallCheck(this,e)};j.\u0275mod=c.ic({type:j}),j.\u0275inj=c.hc({factory:function(e){return new(e||j)},imports:[[o.g.forRoot(S)],o.g]});var z=function e(){_classCallCheck(this,e),this.title="MapAlert",console.log(this.title)};z.\u0275fac=function(e){return new(e||z)},z.\u0275cmp=c.ec({type:z,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&c.lc(0,"router-outlet")},directives:[o.h],styles:[""]});var R=n("ZfV3"),Y=n("RZlo"),P=n("Czum"),T=n("NbQQ"),G=n("w7Ir"),N=n("aceb"),W=n("3Pt+"),D=n("cdP3"),B=function e(){_classCallCheck(this,e)};B.\u0275mod=c.ic({type:B,bootstrap:[z]}),B.\u0275inj=c.hc({factory:function(e){return new(e||B)},providers:[N.c],imports:[[a.a,W.b,r.c,P.a.initializeApp({apiKey:"AIzaSyBzrzVtwElCgMQnSNUODhQlwh24jUetIRI",authDomain:"mapalert-99b0c.firebaseapp.com",databaseURL:"https://mapalert-99b0c.firebaseio.com",projectId:"mapalert-99b0c",storageBucket:"mapalert-99b0c.appspot.com",messagingSenderId:"1025639036588",appId:"1:1025639036588:web:c1f54cf30d57f54213d109",measurementId:"G-0931XJ839Q"}),T.a,G.a,R.a,Y.a,b.a.forRoot("881d7e11-b250-45a9-b8c8-051f61f50266"),N.d.forRoot(),N.a,N.b,D.a.forRoot(),j]]}),a.c().bootstrapModule(B).catch((function(e){return console.error(e)}))},zn8P:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="zn8P"}},[[0,0,5]]]);
//# sourceMappingURL=main-es5.js.map