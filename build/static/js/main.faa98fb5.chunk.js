(this.webpackJsonphw4=this.webpackJsonphw4||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(1),r=s.n(n),i=s(3),o=s.n(i),a=s(4),c=s(5),u=s(8),l=s(7),h=s(6),b=s.n(h),p=(s(13),s(0)),j=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(t){var n;return Object(a.a)(this,s),(n=e.call(this,t)).state={userid:"",username:"",githubtUrl:"",avatarUrl:"",followers_amount:"",public_repos:"",email:""},n}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this;b.a.get(this.props.source,(function(e){console.log(t.props.source),console.log(e);var s=e;s&&t.setState({userid:s.id,username:s.login,githubtUrl:s.html_url,avatarUrl:s.avatar_url,followers_amount:s.followers,public_repos:s.public_repos})}))}},{key:"componentWillUnmount",value:function(){this.setState=function(){return!1}}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{class:"photo",children:[" ",Object(p.jsx)("img",{src:this.state.avatarUrl})]}),Object(p.jsxs)("div",{class:"uername",children:["name:",this.state.username]}),Object(p.jsxs)("h6",{children:["id:",this.state.userid]}),Object(p.jsxs)("h3",{children:["followers:",this.state.followers_amount]}),Object(p.jsxs)("h3",{children:["public_repos:",this.state.public_repos]}),Object(p.jsx)("a",{href:this.state.githubtUrl,children:"Github Link"}),".",Object(p.jsx)("br",{})]})}}]),s}(r.a.Component),d=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,n=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;s(t),n(t),r(t),i(t),o(t)}))};o.a.render(Object(p.jsx)(j,{source:"https://api.github.com/users/AdamWang518"}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.faa98fb5.chunk.js.map