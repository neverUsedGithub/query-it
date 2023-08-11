"use strict";var A=Object.create;var m=Object.defineProperty,N=Object.defineProperties,P=Object.getOwnPropertyDescriptor,$=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertyNames,x=Object.getOwnPropertySymbols,q=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(t,e,r)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,F=(t,e)=>{for(var r in e||(e={}))f.call(e,r)&&y(t,r,e[r]);if(x)for(var r of x(e))S.call(e,r)&&y(t,r,e[r]);return t},T=(t,e)=>N(t,$(e));var j=(t,e)=>{for(var r in e)m(t,r,{get:e[r],enumerable:!0})},C=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of k(e))!f.call(t,s)&&s!==r&&m(t,s,{get:()=>e[s],enumerable:!(i=P(e,s))||i.enumerable});return t};var Q=(t,e,r)=>(r=t!=null?A(q(t)):{},C(e||!t||!t.__esModule?m(r,"default",{value:t,enumerable:!0}):r,t)),L=t=>C(m({},"__esModule",{value:!0}),t);var n=(t,e,r)=>new Promise((i,s)=>{var a=o=>{try{l(r.next(o))}catch(g){s(g)}},u=o=>{try{l(r.throw(o))}catch(g){s(g)}},l=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,u);l((r=r.apply(t,e)).next())});var I={};j(I,{Client:()=>p});module.exports=L(I);var w=Q(require("node-fetch"));var b={id:"id",icon:"icon",displayName:"displayName"};var R={id:"id",isOfficial:"isOfficial"};var c={title:"title",id:"id",iconUrl:"iconUrl",url:"url",templateLabel:"templateLabel",isPrivate:"isPrivate",isRenamed:"isRenamed",imageUrl:"imageUrl",language:"language",likeCount:"likeCount",timeUpdated:"timeUpdated",timeCreated:"timeCreated",description:"description(plainText: true)",publicForkCount:"publicForkCount",releasesForkCount:"releasesForkCount",slug:"slug",wasPosted:"wasPosted",wasPublished:"wasPublished",publishedAs:"publishedAs",lang:t=>`lang { ${t(b).join(" ")} }`,tags:t=>` tags { ${t(R).join(" ")} }`};var d={username:"username",image:"image",id:"id",bio:"bio",fullName:"fullName",firstName:"firstName",lastName:"lastName",url:"url",userSubscriptionType:"userSubscriptionType",followerCount:"followerCount",followers:(t,e)=>{var r,i;return`followers(count: ${(r=e==null?void 0:e.count)!=null?r:10}, after: ${JSON.stringify((i=e==null?void 0:e.after)!=null?i:null)}) { items { ${t(d).join(" ")} } pageInfo { nextCursor hasNextPage } }`},publicRepls:(t,e)=>{var r,i;return`publicRepls(count: ${(r=e==null?void 0:e.count)!=null?r:10}, after: ${JSON.stringify((i=e==null?void 0:e.after)!=null?i:null)}) { items { ${t(c).join(" ")} } pageInfo { nextCursor hasNextPage } }`}};var U={image:"image",username:"username",url:"url",id:"id"};var h=T(F({},d),{teams:t=>`teams { ${t(U).join(" ")} }`});var p=class{constructor(e){this.sid=e}doQuery(e,r){return n(this,null,function*(){let i=yield(0,w.default)("https://replit.com/graphql",{method:"POST",headers:{"User-Agent":"mozilla/5.0",referer:"https://replit.com","X-Requested-With":"XMLHttpRequest","Content-Type":"application/json",Cookie:this.sid?`connect.sid=${this.sid}`:""},body:JSON.stringify({query:e,variables:r})}),s=yield i.json();if(s.errors)throw new Error(`Failed to query.
Query: '${e}'
Variables: ${JSON.stringify(r)}
Status: ${i.status}
${JSON.stringify(s.errors)}`);return s})}userByUsername(e,r){return n(this,null,function*(){let i=r(d);return(yield this.doQuery(`query Query($username: String!) { userByUsername(username: $username) { ${i.join(" ")} } }`,{username:e})).data.userByUsername})}userById(e,r){return n(this,null,function*(){let i=r(d);return(yield this.doQuery(`query Query($id: Int!) { user(id: $id) { ${i.join(" ")} } }`,{id:e})).data.user})}replById(e,r){return n(this,null,function*(){let i=r(c);return(yield this.doQuery(`query Query($replId: String!) { repl(id: $replId) { ... on Repl { ${i.join(" ")} } } }`,{replId:e})).data.repl})}replByURL(e,r){return n(this,null,function*(){let i=r(c);return(yield this.doQuery(`query Query($replUrl: String!) { repl(url: $replUrl) { ... on Repl { ${i.join(" ")} } } }`,{replUrl:e})).data.repl})}currentUser(e){return n(this,null,function*(){let r=e(h);return(yield this.doQuery(`query Query { currentUser { ${r.join(" ")} } }`,{})).data.currentUser})}paginated(e,r){return n(this,null,function*(){let i=yield e(),s=0,a=[i],u=r(i);return{current:()=>a[s],next:()=>n(this,null,function*(){if(!u.hasNextPage)return{success:!1,error:"no more pages"};if(s++,s<a.length)return{success:!0,data:a[s]};let l=yield e(u.nextCursor);return a.push(l),u=r(l),{success:!0,data:l}}),back:()=>(s--,s<0?{success:!1,error:"no more pages"}:{success:!0,data:a[s]})}})}};0&&(module.exports={Client});
