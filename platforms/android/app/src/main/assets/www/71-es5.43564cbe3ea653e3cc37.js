!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"1yFL":function(t,i,r){"use strict";r.r(i),r.d(i,"StorekeeperPageModule",function(){return k});var o=r("ofXK"),c=r("3Pt+"),a=r("TEn/"),s=r("tyNb"),l=r("mrSG"),b=r("fXoL"),g=r("mKmO"),u=r("3LUQ"),m=r("5DBH");function d(n,t){if(1&n){var e=b.Qb();b.Pb(0,"ion-item",2),b.Xb("click",function(n){b.ic(e);var i=t.$implicit;return b.Zb().presentModal(n,i.id)}),b.Pb(1,"ion-avatar",3),b.Lb(2,"img",4),b.Ob(),b.Pb(3,"h2"),b.Pb(4,"a",5),b.mc(5),b.Ob(),b.Ob(),b.Ob()}if(2&n){var i=t.$implicit;b.Ab(5),b.nc(i.name)}}var p,h,f,v,O=((p=function(){function t(e,i,r,o,c,a){n(this,t),this.httpService=e,this.alertService=i,this.param=r,this.modalController=o,this.router=c,this.navCtrl=a}return e(t,[{key:"ngOnInit",value:function(){}},{key:"presentModal",value:function(n,t){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:this.param.id=t,this.router.navigate(["orders"]),console.log("param id in present:",this.param.id);case 1:case"end":return n.stop()}},n,this)}))}},{key:"ionViewWillEnter",value:function(){var n=this;this.httpService.makeGet("auth/driver_index").subscribe(function(t){n.drivers=t,console.log("order_info: ",n.drivers)},function(t){console.log(t),n.alertService.presentToast(t.message)})}}]),t}()).\u0275fac=function(n){return new(n||p)(b.Kb(g.a),b.Kb(u.a),b.Kb(m.a),b.Kb(a.V),b.Kb(s.g),b.Kb(a.W))},p.\u0275cmp=b.Eb({type:p,selectors:[["app-list-drivers"]],decls:6,vars:1,consts:[[1,"grid1"],["dir","rtl",3,"click",4,"ngFor","ngForOf"],["dir","rtl",3,"click"],["slot","start"],["src","https://cdn.landesa.org/wp-content/uploads/default-user-image.png"],[1,"secondary"]],template:function(n,t){1&n&&(b.Pb(0,"ion-content"),b.Pb(1,"ion-grid",0),b.Pb(2,"ion-list"),b.Pb(3,"div"),b.lc(4,d,6,1,"ion-item",1),b.Ob(),b.Ob(),b.Lb(5,"br"),b.Ob(),b.Ob()),2&n&&(b.Ab(4),b.cc("ngForOf",t.drivers))},directives:[a.k,a.n,a.x,o.i,a.t,a.d],styles:[".grid1[_ngcontent-%COMP%]{height:95%;padding:0}.row1[_ngcontent-%COMP%]{height:190%;margin-top:0;background:linear-gradient(45deg,#c0baba,rgba(255,254,254,.856))}.ion-button[_ngcontent-%COMP%]{text-align:center;color:#000;align-items:center;margin-left:.3cm;margin-right:.4cm;margin-top:3cm}.ion-button2[_ngcontent-%COMP%], .ion-button3[_ngcontent-%COMP%]{text-align:center;color:#000;align-items:center;margin-left:.3cm;margin-right:.4cm;margin-top:.3cm}.secondary[_ngcontent-%COMP%]{color:#000}"]}),p),P=[{path:"",component:(h=function(){function t(e){var i=this;n(this,t),this.navCtrl=e,this.logout=function(){localStorage.removeItem("token"),localStorage.removeItem("is_admin"),i.navCtrl.navigateRoot("/login")}}return e(t,[{key:"ngOnInit",value:function(){}}]),t}(),h.\u0275fac=function(n){return new(n||h)(b.Kb(a.W))},h.\u0275cmp=b.Eb({type:h,selectors:[["app-storekeeper"]],decls:13,vars:0,consts:[[1,"ion-no-border"],[2,"height","40px"],[1,"img-right",2,"padding-bottom","20px","text-align","center"],["src","../../../assets/tharwat1.png","width","160mm","height","80mm",1,"img-right"],[1,"grid1"],[1,"row1"],["href","/storekeeper/list-drivers","expand","block","color","white",1,"ion-button"],["expand","block","color","white",1,"ion-button3",3,"click"]],template:function(n,t){1&n&&(b.Pb(0,"ion-header",0),b.Pb(1,"ion-toolbar"),b.Lb(2,"div",1),b.Pb(3,"div",2),b.Lb(4,"img",3),b.Ob(),b.Ob(),b.Ob(),b.Pb(5,"ion-content"),b.Pb(6,"ion-grid",4),b.Pb(7,"ion-row",5),b.Pb(8,"ion-col"),b.Pb(9,"ion-button",6),b.mc(10," \u0627\u0644\u0645\u0646\u0627\u062f\u064a\u0628 "),b.Ob(),b.Pb(11,"ion-button",7),b.Xb("click",function(){return t.logout()}),b.mc(12," \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062e\u0631\u0648\u062c "),b.Ob(),b.Ob(),b.Ob(),b.Ob(),b.Ob())},directives:[a.o,a.Q,a.k,a.n,a.D,a.j,a.g],styles:[".grid1[_ngcontent-%COMP%]{height:95%;padding:0}.row1[_ngcontent-%COMP%]{height:190%;margin-top:0;background:linear-gradient(45deg,#c0baba,rgba(255,254,254,.856))}.ion-button[_ngcontent-%COMP%]{text-align:center;color:#000;align-items:center;margin-left:.3cm;margin-right:.4cm;margin-top:3cm}.ion-button2[_ngcontent-%COMP%], .ion-button3[_ngcontent-%COMP%]{text-align:center;color:#000;align-items:center;margin-left:.3cm;margin-right:.4cm;margin-top:.3cm}"]}),h)},{path:"list-drivers",component:O},{path:"orders",loadChildren:function(){return r.e(0).then(r.bind(null,"frJH")).then(function(n){return n.OrdersPageModule})}},{path:"orders-details",component:r("e24e").a}],w=((v=function t(){n(this,t)}).\u0275fac=function(n){return new(n||v)},v.\u0275mod=b.Ib({type:v}),v.\u0275inj=b.Hb({imports:[[s.i.forChild(P),o.b],s.i]}),v),k=((f=function t(){n(this,t)}).\u0275fac=function(n){return new(n||f)},f.\u0275mod=b.Ib({type:f}),f.\u0275inj=b.Hb({imports:[[o.b,c.f,a.S,w]]}),f)}}])}();