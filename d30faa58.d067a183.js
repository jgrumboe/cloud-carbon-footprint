(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(120)),s={id:"classifying-usage-types",title:"Classifying Usage Types"},i={unversionedId:"classifying-usage-types",id:"classifying-usage-types",isDocsHomePage:!1,title:"Classifying Usage Types",description:"In order to estimate the energy and carbon emissions for a given amount of cloud provider usage, we need to first classify a row of usage as either Compute, SSD Storage, HDD Storage or Networking. It's also possible that the usage row is memory, unsupported or unknown, in which case the application ignores these rows. To understand the steps involved in the classification, please see the methodology page. Once the application has classified the usage row, it then uses the assosiated usage amount when estimating energy and carbon emissions.",source:"@site/docs/ClassifyingUsageTypes.md",slug:"/classifying-usage-types",permalink:"/docs/classifying-usage-types",version:"current",sidebar:"tryNowSidebar",previous:{title:"Methodology",permalink:"/docs/methodology"},next:{title:"Introduction",permalink:"/docs/introduction"}},c=[],u={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In order to estimate the energy and carbon emissions for a given amount of cloud provider usage, we need to first classify a row of usage as either Compute, SSD Storage, HDD Storage or Networking. It's also possible that the usage row is memory, unsupported or unknown, in which case the application ignores these rows. To understand the steps involved in the classification, please see the ",Object(a.b)("a",{parentName:"p",href:"https://www.cloudcarbonfootprint.org/docs/methodology#1-using-billing-data-for-cloud-usage-holistic"},"methodology page"),". Once the application has classified the usage row, it then uses the assosiated usage amount when estimating energy and carbon emissions."),Object(a.b)("p",null,"In order to make these classification decisions, we pulled all the various types of usage rows that ThoughtWorks has utilized into a spreadsheet for analysis. We then researched each type of usage using publically available information from the cloud providers about the underlying services, often looking at documenation regarding payment/costs as this often gives hints as to the usage type. We have published these usage types and the various classifications in ",Object(a.b)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1rMt1lb3G23JnwbAODCka1ohrbl-4pELFSqi6xwwW4q4/"},"this spreadsheet")," with detailed notes and links to sources when available. "),Object(a.b)("p",null,"Given that these usage types have been derived from ThoughtWorks' usage, there may be usage types missing that aren't currently supported. If this is case for when using the application, please see instructions for adding unsupported usage types in the documentation for your cloud provider: ",Object(a.b)("a",{parentName:"p",href:"aws#unsupported-usage-types"},"AWS"),", ",Object(a.b)("a",{parentName:"p",href:"gcp#unsupported-usage-types"},"GCP")," and ",Object(a.b)("a",{parentName:"p",href:"azure#unsupported-usage-types"},"Azure"),". We welcome feedback any/all on these classfications."))}p.isMDXComponent=!0},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},g=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(n),g=r,f=l["".concat(s,".").concat(g)]||l[g]||d[g]||a;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);