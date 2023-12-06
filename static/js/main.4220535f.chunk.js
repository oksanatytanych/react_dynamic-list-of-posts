(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){"use strict";s.r(t);var n=s(7),c=s.n(n),a=s(1),i=s.n(a),o=(s(13),s(14),s(15),s(2)),r="https://mate.academy/students-api";function l(e){return new Promise((function(t){setTimeout(t,e)}))}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:t};return s&&(n.body=JSON.stringify(s),n.headers={"Content-Type":"application/json; charset=UTF-8"}),l(300).then((function(){return fetch(r+e,n)})).then((function(e){return e.json()}))}var m,j=function(e){return d(e)},u=function(e,t){return d(e,"POST",t)},b=function(e){return d(e,"DELETE")};!function(e){e[e.NoSelectedUser=0]="NoSelectedUser",e[e.Loader=1]="Loader",e[e.PostsLoadingError=2]="PostsLoadingError",e[e.NoPostsYet=3]="NoPostsYet",e[e.PostsList=4]="PostsList"}(m||(m={}));var h,O=s(0),x=i.a.createContext({users:[],setUsers:function(){},mainContent:m.NoSelectedUser,setMainContent:function(){},selectedUser:null,setSelectedUser:function(){}}),f=function(e){var t=e.children,s=Object(a.useState)([]),n=Object(o.a)(s,2),c=n[0],i=n[1],r=Object(a.useState)(m.NoSelectedUser),l=Object(o.a)(r,2),d=l[0],u=l[1],b=Object(a.useState)(null),h=Object(o.a)(b,2),f=h[0],N=h[1];Object(a.useEffect)((function(){j("/users").then(i).catch((function(){return u(m.PostsLoadingError)}))}),[]);var v=Object(a.useMemo)((function(){return{users:c,setUsers:i,mainContent:d,setMainContent:u,selectedUser:f,setSelectedUser:N}}),[c,d,f]);return Object(O.jsx)(x.Provider,{value:v,children:t})};!function(e){e[e.None=0]="None",e[e.IsLoading=1]="IsLoading",e[e.CommentsError=2]="CommentsError",e[e.NoCommentsMessage=3]="NoCommentsMessage",e[e.CommentsList=4]="CommentsList"}(h||(h={}));var N=i.a.createContext({posts:[],setPosts:function(){},selectedPost:null,setSelectedPost:function(){},details:h.None,setDetails:function(){},formIsVisible:!1,setFormIsVisible:function(){}}),v=function(e){var t=e.children,s=Object(a.useState)([]),n=Object(o.a)(s,2),c=n[0],i=n[1],r=Object(a.useState)(h.None),l=Object(o.a)(r,2),d=l[0],u=l[1],b=Object(a.useState)(null),f=Object(o.a)(b,2),v=f[0],p=f[1],g=Object(a.useState)(!1),y=Object(o.a)(g,2),C=y[0],P=y[1],S=Object(a.useContext)(x),L=S.selectedUser,E=S.setMainContent;Object(a.useEffect)((function(){var e;L&&(E(m.Loader),(e=L.id,j("/posts?userId=".concat(e))).then((function(e){0===e.length?E(m.NoPostsYet):(i(e),E(m.PostsList))})).catch((function(){return E(m.PostsLoadingError)})))}),[L,E]);var I=Object(a.useMemo)((function(){return{posts:c,setPosts:i,selectedPost:v,setSelectedPost:p,details:d,setDetails:u,formIsVisible:C,setFormIsVisible:P}}),[c,v,d,C]);return Object(O.jsx)(N.Provider,{value:I,children:t})},p=i.a.createContext({comments:[],setComments:function(){},formIsLoading:!1,setFormIsLoading:function(){}}),g=function(e){var t=e.children,s=Object(a.useState)([]),n=Object(o.a)(s,2),c=n[0],i=n[1],r=Object(a.useState)(!1),l=Object(o.a)(r,2),d=l[0],m=l[1],u=Object(a.useContext)(N),b=u.selectedPost,x=u.setDetails;Object(a.useEffect)((function(){var e;b&&(x(h.IsLoading),(e=b.id,j("/comments?postId=".concat(e))).then((function(e){return i(e)})).catch((function(){return x(h.CommentsError)})))}),[b,x]),Object(a.useEffect)((function(){0===c.length?x(h.NoCommentsMessage):x(h.CommentsList)}),[c,x]);var f=Object(a.useMemo)((function(){return{comments:c,setComments:i,formIsLoading:d,setFormIsLoading:m}}),[c,d]);return Object(O.jsx)(p.Provider,{value:f,children:t})},y=s(3),C=s.n(y),P=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1],c=Object(a.useRef)(null),i=Object(a.useContext)(x),r=i.users,l=i.selectedUser,d=i.setSelectedUser,m=Object(a.useContext)(N).setSelectedPost,j=function(e){c.current&&!c.current.contains(e.target)&&n(!1)};Object(a.useEffect)((function(){return document.addEventListener("mousedown",j),function(){document.removeEventListener("mousedown",j)}}),[]);return Object(O.jsxs)("div",{"data-cy":"UserSelector",className:C()("dropdown",{"is-active":s}),children:[Object(O.jsx)("div",{className:"dropdown-trigger",children:Object(O.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:function(){return n(!s)},children:[Object(O.jsx)("span",{children:(null===l||void 0===l?void 0:l.name)||"Choose a user"}),Object(O.jsx)("span",{className:"icon is-small",children:Object(O.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),Object(O.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",ref:c,children:Object(O.jsx)("div",{className:"dropdown-content",children:r.map((function(e){return Object(O.jsx)("a",{href:"#user-".concat(e.id),className:C()("dropdown-item",{"is-active":(null===l||void 0===l?void 0:l.id)===e.id}),onClick:function(){return d(e),n(!1),void m(null)},children:e.name},e.id)}))})})]})},S=(s(17),function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(O.jsx)("div",{className:"Loader__content"})})}),L=function(){var e=Object(a.useContext)(N),t=e.posts,s=e.selectedPost,n=e.setSelectedPost;return Object(O.jsxs)("div",{"data-cy":"PostsList",children:[Object(O.jsx)("p",{className:"title",children:"Posts:"}),Object(O.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{className:"has-background-link-light",children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Title"}),Object(O.jsx)("th",{children:" "})]})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsxs)("tr",{"data-cy":"Post",children:[Object(O.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(O.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(O.jsx)("td",{className:"has-text-right is-vcentered",children:Object(O.jsx)("button",{type:"button","data-cy":"PostButton",className:C()("button","is-link",{"is-light":s!==e}),onClick:function(){var t;(t=e).id===(null===s||void 0===s?void 0:s.id)?n(null):n(t)},children:s===e?"Close":"Open"})})]},e.id)}))})]})]})},E=s(8),I=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),r=i[0],l=i[1],d=Object(a.useState)(""),m=Object(o.a)(d,2),j=m[0],b=m[1],x=Object(a.useState)(!1),f=Object(o.a)(x,2),v=f[0],g=f[1],y=Object(a.useState)(!1),P=Object(o.a)(y,2),S=P[0],L=P[1],I=Object(a.useState)(!1),w=Object(o.a)(I,2),k=w[0],U=w[1],F=Object(a.useContext)(N),M=F.selectedPost,T=F.setDetails,D=F.setFormIsVisible,V=Object(a.useContext)(p),B=V.setComments,Y=V.setFormIsLoading,A=V.formIsLoading;return Object(O.jsxs)("form",{"data-cy":"NewCommentForm",onSubmit:function(e){e.preventDefault();var t=s.trim(),n=r.trim(),c=j.trim();g(!t),L(!n),U(!c),t&&n&&c&&M&&(Y(!0),function(e){var t=e.postId,s=e.name,n=e.email,c=e.body;return u("/comments",{postId:t,name:s,email:n,body:c})}({postId:M.id,name:t,email:n,body:c}).then((function(e){b(""),B((function(t){return[].concat(Object(E.a)(t),[e])}))})).catch((function(){T(h.CommentsError),D(!1)})).finally((function(){return Y(!1)})))},children:[Object(O.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(O.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:C()("input",{"is-danger":v}),value:s,onChange:function(e){n(e.target.value),g(!1)}}),Object(O.jsx)("span",{className:"icon is-small is-left",children:Object(O.jsx)("i",{className:"fas fa-user"})}),v&&Object(O.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(O.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),v&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(O.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(O.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(O.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:C()("input",{"is-danger":S}),value:r,onChange:function(e){l(e.target.value),L(!1)}}),Object(O.jsx)("span",{className:"icon is-small is-left",children:Object(O.jsx)("i",{className:"fas fa-envelope"})}),S&&Object(O.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(O.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),S&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(O.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(O.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:C()("textarea",{"is-danger":k}),value:j,onChange:function(e){b(e.target.value),U(!1)}})}),k&&Object(O.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(O.jsxs)("div",{className:"field is-grouped",children:[Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("button",{type:"submit",className:C()("button","is-link",{"is-loading":A}),children:"Add"})}),Object(O.jsx)("div",{className:"control",children:Object(O.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){return n(""),l(""),b(""),g(!1),L(!1),void U(!1)},children:"Clear"})})]})]})},w=function(e){var t=e.item,s=Object(a.useContext)(p),n=s.comments,c=s.setComments,i=function(e){c(n.filter((function(t){return t.id!==e}))),b("/comments/".concat(e))};return Object(O.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(O.jsxs)("div",{className:"message-header",children:[Object(O.jsx)("a",{href:"mailto:".concat(t.email),"data-cy":"CommentAuthor",children:t.name}),Object(O.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return i(t.id)},children:"delete button"})]}),Object(O.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:t.body})]})},k=function(){var e=Object(a.useContext)(p).comments;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:"title is-4",children:"Comments:"}),e.map((function(e){return Object(O.jsx)(w,{item:e},e.id)}))]})},U=function(){var e=Object(a.useContext)(N),t=e.selectedPost,s=e.details,n=e.setFormIsVisible,c=e.formIsVisible;return Object(O.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(O.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(O.jsxs)("div",{className:"block",children:[Object(O.jsx)("h2",{"data-cy":"PostTitle",children:"#".concat(null===t||void 0===t?void 0:t.id,": ").concat(null===t||void 0===t?void 0:t.title)}),Object(O.jsx)("p",{"data-cy":"PostBody",children:null===t||void 0===t?void 0:t.body})]}),Object(O.jsxs)("div",{className:"block",children:[s===h.IsLoading&&Object(O.jsx)(S,{}),s===h.CommentsError&&Object(O.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),s===h.NoCommentsMessage&&Object(O.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),s===h.CommentsList&&Object(O.jsx)(k,{}),(s===h.CommentsList||s===h.NoCommentsMessage)&&!c&&Object(O.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){return n(!0)},children:"Write a comment"})]}),c&&Object(O.jsx)(I,{})]})})},F=function(){var e=Object(a.useContext)(N).selectedPost,t=Object(a.useContext)(x).mainContent;return Object(O.jsx)("main",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"tile is-ancestor",children:[Object(O.jsx)("div",{className:"tile is-parent",children:Object(O.jsxs)("div",{className:"tile is-child box is-success",children:[Object(O.jsx)("div",{className:"block",children:Object(O.jsx)(P,{})}),Object(O.jsxs)("div",{className:"block","data-cy":"MainContent",children:[t===m.NoSelectedUser&&Object(O.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),t===m.Loader&&Object(O.jsx)(S,{}),t===m.PostsLoadingError&&Object(O.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),t===m.NoPostsYet&&Object(O.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),t===m.PostsList&&Object(O.jsx)(L,{})]})]})}),Object(O.jsx)("div",{"data-cy":"Sidebar",className:C()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":e}),children:Object(O.jsx)("div",{className:"tile is-child box is-success ",children:Object(O.jsx)(U,{})})})]})})})},M=function(){return Object(O.jsx)(f,{children:Object(O.jsx)(v,{children:Object(O.jsx)(g,{children:Object(O.jsx)(F,{})})})})};c.a.render(Object(O.jsx)(M,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4220535f.chunk.js.map