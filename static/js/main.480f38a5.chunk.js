(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var n=s(10),c=s.n(n),a=s(9),r=s(5),i=s(2),o=s(4),l=s.n(o),d=s(1),j=(s(16),s(17),s(18),s(3)),m=s.n(j),u=s(0),b=function(e){var t=e.posts,s=e.selectedPost,n=e.setSelectedPost,c=e.setErrorPostComments;return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.title;return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:t}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:a}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:m()("button is-link",{"is-light":(null===s||void 0===s?void 0:s.id)!==t}),onClick:function(){return n(t),void c(!1)},children:(null===s||void 0===s?void 0:s.id)!==t?"Open":"Close"})})]},t)}))})]})]})},h=(s(20),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.onAddComment,s=e.isPostNewComment,n=e.safeBodyComments,c=Object(d.useState)(""),a=Object(i.a)(c,2),r=a[0],o=a[1],l=Object(d.useState)(""),j=Object(i.a)(l,2),b=j[0],h=j[1],O=Object(d.useState)(""),x=Object(i.a)(O,2),f=x[0],p=x[1],v=Object(d.useState)(!0),N=Object(i.a)(v,2),y=N[0],g=N[1],C=Object(d.useState)(!0),w=Object(i.a)(C,2),k=w[0],E=w[1],S=Object(d.useState)(!0),P=Object(i.a)(S,2),T=P[0],F=P[1],D=function(e){var t=e.currentTarget,s=t.value;switch(t.name){case"name":o(s),g(!0);break;case"email":h(s),E(!0);break;default:throw new Error("no name in input")}};return Object(d.useEffect)((function(){n&&p("")}),[n]),Object(u.jsxs)("form",{"data-cy":"NewCommentForm",children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:m()("input",{"is-danger":!y}),value:r,onChange:D}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),!y&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]})]})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:m()("input",{"is-danger":!k}),value:b,onChange:D}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),!k&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})}),Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]})]})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:m()("textarea",{"is-danger":!T}),value:f,onChange:function(e){var t=e.currentTarget.value;p(t),F(!0)}})}),!T&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:m()("button is-link",{"is-loading":s}),onClick:function(e){e.preventDefault(),function(){var e=!0;return r||(g(!1),e=!1),b||(E(!1),e=!1),f||(F(!1),e=!1),e}()&&t(r,b,f)},children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){o(""),h(""),p(""),g(!0),E(!0),F(!0)},children:"Clear"})})]})]})},x=function(e){var t=e.comment,s=e.onDelete;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:".concat(t.email),"data-cy":"CommentAuthor",children:t.name}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){s(t.id)},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:t.body})]})},f=function(e){var t=e.post,s=e.comments,n=e.isLoadComments,c=e.isErrorLoadComments,a=e.isErrorDelete,r=e.isPostNewComment,o=e.isErrorPostComments,l=e.safeBodyComments,j=e.setErrorPostComments,m=e.onAddComment,b=e.deletePost,f=e.setIsErrorDelete,p=Object(d.useState)(!1),v=Object(i.a)(p,2),N=v[0],y=v[1];return Object(d.useEffect)((function(){o&&setTimeout((function(){return j(!1)}),1500),a&&setTimeout((function(){return f(!1)}),1500)}),[o,a]),Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.title})]}),n||Object(u.jsx)(h,{}),Object(u.jsxs)("div",{className:"block",children:[c&&n&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),n&&!!s.length&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),s.map((function(e){return Object(u.jsx)("article",{className:"message is-small","data-cy":"Comment",children:Object(u.jsx)(x,{comment:e,onDelete:b})},e.id)}))]}),n&&!s.length&&!c&&Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),a&&Object(u.jsx)("div",{className:"notification is-danger",children:"can`t delete, try again"}),n&&!c&&!N&&Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){y(!0)},children:"Write a comment"})]}),N&&Object(u.jsx)(O,{onAddComment:m,isPostNewComment:r,safeBodyComments:l}),o&&Object(u.jsx)("div",{className:"notification is-danger",children:"Can`t post, try again"})]})})},p=function(e){var t=e.users,s=e.selectedUser,n=e.setSelectedUser,c=Object(d.useState)(!1),a=Object(i.a)(c,2),r=a[0],o=a[1],l=function(e){return(null===s||void 0===s?void 0:s.id)===e};return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:m()("dropdown",{"is-active":r}),children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){o((function(e){return!e}))},children:[Object(u.jsx)("span",{children:"Choose a user"}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:t.map((function(e){var s=e.id,c=e.name;return Object(u.jsx)("a",{href:"#user-".concat(s),className:m()("dropdown-item",{"is-active":l(s)}),onClick:function(){return e=s,n(t.find((function(t){return t.id===e}))||null),void o(!1);var e},children:c},s)}))})})]})},v="https://mate.academy/students-api";function N(e){return new Promise((function(t){setTimeout(t,e)}))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return s&&(n.body=JSON.stringify(s),n.headers={"Content-Type":"application/json; charset=UTF-8"}),N(300).then((function(){return fetch(v+e,n)})).then((function(e){return e.json()}))}var g=function(e){return y(e)},C=function(e,t){return y(e,"POST",t)},w=function(e){return y(e,"DELETE")},k=function(){var e=Object(d.useState)([]),t=Object(i.a)(e,2),s=t[0],n=t[1],c=Object(d.useState)(null),o=Object(i.a)(c,2),j=o[0],O=o[1],x=Object(d.useState)(!1),v=Object(i.a)(x,2),N=v[0],y=v[1],k=Object(d.useState)([]),E=Object(i.a)(k,2),S=E[0],P=E[1],T=Object(d.useState)(null),F=Object(i.a)(T,2),D=F[0],B=F[1],L=Object(d.useState)(!1),I=Object(i.a)(L,2),A=I[0],U=I[1],M=Object(d.useState)([]),_=Object(i.a)(M,2),J=_[0],q=_[1],W=Object(d.useState)(!1),G=Object(i.a)(W,2),Y=G[0],z=G[1],H=Object(d.useState)(!1),K=Object(i.a)(H,2),Q=K[0],R=K[1],V=Object(d.useState)(!1),X=Object(i.a)(V,2),Z=X[0],$=X[1],ee=Object(d.useState)(!1),te=Object(i.a)(ee,2),se=te[0],ne=te[1],ce=Object(d.useState)(!1),ae=Object(i.a)(ce,2),re=ae[0],ie=ae[1],oe=Object(d.useState)(!1),le=Object(i.a)(oe,2),de=le[0],je=le[1],me=!S.length&&j&&!N&&!A,ue=A&&!N,be=!N&&!A&&!j,he=function(){var e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("/users");case 3:t=e.sent,n(t),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Oe=function(){var e=Object(r.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,g("/posts?userId=".concat(t));case 4:s=e.sent,P(s),U(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),U(!0);case 12:return e.prev=12,y(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(r.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,z(!1),e.next=4,g("/comments?postId=".concat(t));case 4:s=e.sent,q(s),R(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),R(!0);case 12:return e.prev=12,z(!0),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();Object(d.useEffect)((function(){he()}),[]);var fe=Object(d.useCallback)((function(e){O(e),Oe(null===e||void 0===e?void 0:e.id)}),[]),pe=Object(d.useCallback)((function(e){if((null===D||void 0===D?void 0:D.id)!==e){var t=S.find((function(t){return t.id===e}));B(t||null),t&&xe(t.id)}else B(null)}),[S,D]),ve=function(){var e=Object(r.a)(l.a.mark((function e(t,s,n){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ne(!1),$(!0),ie(!1),e.prev=3,D){e.next=6;break}throw new Error("no post");case 6:return e.next=8,r={postId:D.id,name:t,email:s,body:n},C("/comments",r);case 8:c=e.sent,q([].concat(Object(a.a)(J),[c])),ie(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),ne(!0);case 16:return e.prev=16,$(!1),e.finish(16);case 19:case"end":return e.stop()}var r}),e,null,[[3,13,16,19]])})));return function(t,s,n){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(r.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(a.a)(J),e.prev=1,je(!1),q(J.filter((function(e){return e.id!==t}))),e.next=6,w("/comments/".concat(t));case 6:if(1!==e.sent){e.next=9;break}return e.abrupt("return");case 9:throw q(s),new Error("error");case 13:e.prev=13,e.t0=e.catch(1),q(s),je(!0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(p,{users:s,setSelectedUser:fe,selectedUser:j})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[N&&Object(u.jsx)(h,{}),be&&Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),!!S.length&&!N&&Object(u.jsx)(b,{posts:S,selectedPost:D,setSelectedPost:pe,setErrorPostComments:ne}),me&&Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),ue&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"})]})]})}),D&&Object(u.jsx)("div",{"data-cy":"Sidebar",className:m()("tile","is-parent","is-8-desktop","Sidebar","Sidebar--open"),children:Object(u.jsx)("div",{className:"tile is-child box is-success ",children:Object(u.jsx)(f,{post:D,comments:J,isLoadComments:Y,isErrorLoadComments:Q,onAddComment:ve,isPostNewComment:Z,isErrorPostComments:se,setErrorPostComments:ne,safeBodyComments:re,deletePost:Ne,isErrorDelete:de,setIsErrorDelete:je})})})]})})})};c.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.480f38a5.chunk.js.map