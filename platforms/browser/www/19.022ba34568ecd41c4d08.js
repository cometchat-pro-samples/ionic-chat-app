(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{qI4B:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("ZZ/e"),o=u("mtpe"),i=function(){function l(l,n){this.navCtrl=l,this.router=n,this.userListArray=[],this.limit=30,this.usersRequest=(new o.CometChat.UsersRequestBuilder).setLimit(this.limit).build()}return l.prototype.ngOnInit=function(){this.getUserList()},l.prototype.getUserList=function(){var l=this;console.log("here the call has reached"),this.usersRequest.fetchNext().then(function(n){l.userListArray=n,console.log("UserList Array :",l.userListArray)},function(l){console.log("User list fetching failed with error:",l)})},l.prototype.tappedOnItems=function(l,n){console.log("here tappedOnItems "+n),this.userData=n,console.log("{{user.name}}"),this.router.navigate(["chat-view"],{state:{user:this.userData}})},l.prototype.loadNextUsers=function(l){var n=this;console.log("here the next users are loaded"),this.usersRequest.fetchNext().then(function(u){console.log("User list received:",u),""!=u&&(n.userListArray=n.userListArray.concat(u)),console.log("UserList Array :",n.userListArray),l.target.complete()},function(l){console.log("User list fetching failed with error:",l)})},l}(),r=function(){return function(){}}(),s=u("pMnS"),a=u("oBZk"),b=u("Ip0R"),c=u("ZYCi"),p=t.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,13,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,12,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.tappedOnItems(u,l.context.$implicit)&&t),t},a.H,a.m)),t.ob(2,49152,null,0,e.G,[t.h,t.k],null,null),(l()(),t.pb(3,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,a.w,a.b)),t.ob(4,49152,null,0,e.e,[t.h,t.k],null,null),(l()(),t.pb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(6,0,null,0,7,"ion-label",[],null,null,null,a.I,a.n)),t.ob(7,49152,null,0,e.M,[t.h,t.k],null,null),(l()(),t.pb(8,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Db(9,null,["",""])),(l()(),t.pb(10,0,null,0,3,"ion-note",[],null,null,null,a.K,a.p)),t.ob(11,49152,null,0,e.W,[t.h,t.k],null,null),(l()(),t.pb(12,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t.Db(13,null,["",""]))],null,function(l,n){l(n,5,0,t.rb(1,"",n.context.$implicit.avatar||"https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?resize=256%2C256&quality=100&ssl=1","")),l(n,9,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.status)})}function f(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,a.C,a.h)),t.ob(1,49152,null,0,e.A,[t.h,t.k],null,null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.P,a.u)),t.ob(3,49152,null,0,e.Ab,[t.h,t.k],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,a.O,a.t)),t.ob(5,49152,null,0,e.yb,[t.h,t.k],null,null),(l()(),t.Db(-1,0,["Chats"])),(l()(),t.pb(7,0,null,null,9,"ion-content",[],null,null,null,a.A,a.f)),t.ob(8,49152,null,0,e.t,[t.h,t.k],null,null),(l()(),t.pb(9,0,null,0,3,"ion-list",[],null,null,null,a.J,a.o)),t.ob(10,49152,null,0,e.N,[t.h,t.k],null,null),(l()(),t.gb(16777216,null,0,1,null,h)),t.ob(12,278528,null,0,b.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(13,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadNextUsers(u)&&t),t},a.F,a.j)),t.ob(14,49152,null,0,e.D,[t.h,t.k],{threshold:[0,"threshold"]},null),(l()(),t.pb(15,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","dots"],["loadingText","Loading more data..."]],null,null,null,a.E,a.k)),t.ob(16,49152,null,0,e.E,[t.h,t.k],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],function(l,n){l(n,12,0,n.component.userListArray),l(n,14,0,"100px"),l(n,16,0,"dots","Loading more data...")},null)}function d(l){return t.Eb(0,[(l()(),t.pb(0,0,null,null,1,"app-tab1",[],null,null,null,f,p)),t.ob(1,114688,null,0,i,[e.Gb,c.m],null,null)],function(l,n){l(n,1,0)},null)}var g=t.lb("app-tab1",i,d,{},{},[]),m=u("gIcY");u.d(n,"Tab1PageModuleNgFactory",function(){return x});var x=t.mb(r,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[s.a,g]],[3,t.j],t.x]),t.xb(4608,b.j,b.i,[t.u,[2,b.p]]),t.xb(4608,m.g,m.g,[]),t.xb(4608,e.b,e.b,[t.z,t.g]),t.xb(4608,e.Fb,e.Fb,[e.b,t.j,t.q,b.c]),t.xb(4608,e.Ib,e.Ib,[e.b,t.j,t.q,b.c]),t.xb(1073742336,b.b,b.b,[]),t.xb(1073742336,m.f,m.f,[]),t.xb(1073742336,m.a,m.a,[]),t.xb(1073742336,e.Cb,e.Cb,[]),t.xb(1073742336,c.n,c.n,[[2,c.t],[2,c.m]]),t.xb(1073742336,r,r,[]),t.xb(1024,c.k,function(){return[[{path:"",component:i}]]},[])])})}}]);