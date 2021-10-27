/* polygonchart.js@v1.0.0 (es) */(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):(a=a||self,a.PolygonChart=b())})(this,function(){'use strict';var a=Math.PI;return function(b){var c=Math.sin,d=Math.cos;const e=this,f=b=>parseFloat(b)*a/180,g={makeCircle:(a={})=>{const b=Object.assign({fill:"transparent",stroke:"none",radius:0,strokeWidth:"0"},a),c=g.createSVGElement("circle");return c.setAttribute("fill",b.fill),c.setAttribute("stroke",b.stroke),c.setAttribute("r",b.radius),c.setAttribute("stroke-width",b.strokeWidth),c.setAttribute("stroke-linecap","round"),c},makeLabel:a=>{const b=Object.assign({text:"",x:0,y:0,color:"",fontFamily:"sans-serif",fontSize:"7px"},a),c=g.createSVGElement("text");return c.setAttribute("text-anchor","middle"),c.setAttribute("font-family",b.fontFamily),c.setAttribute("font-size",b.fontSize),c.setAttribute("fill",b.color),c.setAttribute("x",b.x),c.setAttribute("y",b.y),c.textContent=b.text,c},makePolygon:(a=[],b)=>{const c=Object.assign({fill:"#000",stroke:"#000",strokeWidth:"1px"},b),d=g.createSVGElement("polygon");return d.setAttribute("stroke-linecap","round"),d.setAttribute("points",a),d.setAttribute("fill",c.fill),d.setAttribute("stroke",c.stroke),d.setAttribute("stroke-width",c.strokeWidth),d},getSVG:(a=0)=>{const b=2*parseFloat(a),c=g.createSVGElement("svg","polygonchart");return c.setAttribute("xmlns","http://www.w3.org/2000/svg"),c.setAttribute("polygonchart",""),c.setAttribute("height",`${b}px`),c.setAttribute("width",`${b}px`),c.setAttribute("viewBox",`0 0 ${b} ${b}`),c},createSVGElement:(a,b)=>{const c=document.createElementNS("http://www.w3.org/2000/svg",a);return b&&c.setAttribute("data-name",b),c}};//
e.options=Object.assign({target:null,radius:0,data:{data:[],sides:0,tooltips:{roundTo:0,percentage:!1},colors:{normal:{polygonStroke:"#1e3d96",polygonFill:"rgba(39, 78, 192,.5)",pointStroke:"transparent",pointFill:"#1e3d96"},onHover:{polygonStroke:"#1a3480",polygonFill:"rgba(39, 78, 192,.85)",pointStroke:"transparent",pointFill:"#1a3480"}}},polygon:{colors:{normal:{fill:"#fff",stroke:"#8c8c8c"},onHover:{splineFill:"#fff",splineStroke:"#000"}}},levels:{count:5,labels:{enabled:!0,position:{spline:1,quadrant:0},colors:{normal:"#8c8c8c",onHover:"#000"}}},tippy:{},anime:{duration:1e3,easing:"linear"},animation:{autoplay:!1}},b),e.svg=null,e.animations=[];let h,j,k,l=[],n=[],o=[],p=0,q=0,r=-1,s=-1,t=-1,u=-1,v=-1;//
const w={onEnterDataPoint:a=>{a.setAttribute("fill",e.options.data.colors.onHover.pointFill),a.setAttribute("stroke",e.options.data.colors.onHover.pointStroke)},onLeaveDataPoint:a=>{a.setAttribute("fill",e.options.data.colors.normal.pointFill),a.setAttribute("stroke",e.options.data.colors.normal.pointStroke)},onEnterSpline:a=>{a.setAttribute("fill",e.options.polygon.colors.onHover.fill),a.setAttribute("stroke",e.options.polygon.colors.onHover.stroke);const b=a.getAttribute("index"),c=j.querySelector(`text[index='${b}']`);c&&c.setAttribute("fill",e.options.levels.labels.colors.onHover)},onLeaveSpline:a=>{a.setAttribute("fill",e.options.polygon.colors.normal.fill),a.setAttribute("stroke",e.options.polygon.colors.normal.stroke);const b=a.getAttribute("index"),c=j.querySelector(`text[index='${b}']`);c&&c.setAttribute("fill",e.options.levels.labels.colors.normal)},onEnterDataPoly:a=>{a.setAttribute("fill",e.options.data.colors.onHover.polygonFill),a.setAttribute("stroke",e.options.data.colors.onHover.polygonStroke)},onLeaveDataPoly:a=>{a.setAttribute("fill",e.options.data.colors.normal.polygonFill),a.setAttribute("stroke",e.options.data.colors.normal.polygonStroke)}},x=()=>{const a=g.createSVGElement("g","data"),b=g.createSVGElement("g","data-points");for(let a=1;a<=e.options.data.sides;a++){const c=g.createSVGElement("g",`point-${a}`),d=g.makeCircle({radius:10}),f=g.makeCircle({fill:e.options.data.colors.normal.pointFill,stroke:e.options.data.colors.normal.pointStroke,radius:4,strokeWidth:"2px"});c.appendChild(d),c.appendChild(f),b.appendChild(c),c.addEventListener("mouseenter",w.onEnterDataPoint.bind(this,f)),c.addEventListener("touchstart",w.onEnterDataPoint.bind(this,f)),c.addEventListener("mouseleave",w.onLeaveDataPoint.bind(this,f)),c.addEventListener("touchend",w.onLeaveDataPoint.bind(this,f)),c.style.setProperty("cursor","pointer"),l.push(c)}a.appendChild(k),e.svg.appendChild(a),e.svg.appendChild(b)},y=()=>{const{radius:a}=e.options;for(let b,g=0;g<e.options.data.data.length;g++){b="";for(let h=1,i=0;h<=e.options.data.sides;h++,i++){const j=f(u*h-r),k=a*e.options.data.data[g][i]*d(j)+a,l=a*e.options.data.data[g][i]*c(j)+a;b+=`${k},${l} `,Array.isArray(n[i])||(n[i]=[]),n[i].push({x:k,y:l})}o.push(b)}},z=(a=-1)=>{const{radius:b}=e.options;let g="";for(let h=1,i=0;h<=e.options.data.sides;h++,i++){const j=f(u*h-r),k=b*e.options.data.data[a][i]*d(j)+b,m=b*e.options.data.data[a][i]*c(j)+b;g+=`${k},${m} `;let n=e.options.data.data[a][i];e.options.data.tooltips.percentage&&(n*=100),e.options.data.tooltips.roundTo&&(n=n.toFixed(e.options.data.tooltips.roundTo));const o=`${n}${e.options.data.tooltips.percentage?"%":""}`;l[i].style.setProperty("transform",`translateX(${k}px) translateY(${m}px)`),l[i].setAttribute("data-value",n),l[i].setAttribute("data-tippy-content",o)}k.setAttribute("points",g)},A=(a={})=>{var b=Math.floor;const{radius:i,levels:k}=a;let l;k===e.options.levels.count&&(l=g.createSVGElement("g","crosshairs"));let m="",n=-1;const o=e.options.radius/e.options.levels.count*d(f(1*u-r));for(let b=1;b<=e.options.data.sides;b++){const a=f(u*b-r),g=i*d(a)+e.options.radius,h=i*c(a)+e.options.radius;/* + appended space */if(b===e.options.data.sides&&q?n=g:2===b&&!q&&(n=g),m+=`${g},${h} `,k===e.options.levels.count){const b=t*d(a)+e.options.radius,f=t*c(a)+e.options.radius,g=s*d(a)+e.options.radius,h=s*c(a)+e.options.radius,i=document.createElementNS("http://www.w3.org/2000/svg","line");i.setAttribute("stroke",e.options.polygon.colors.normal.stroke),i.setAttribute("x1",b),i.setAttribute("y1",f),i.setAttribute("x2",g),i.setAttribute("y2",h),l&&l.appendChild(i)}}const p=100/e.options.levels.count*k,x=`${p}%`;let y=`${e.options.radius}px`;const z=q?0:o,B=`${n+z}px`,C=6*(x.length-1),D=g.makeLabel({text:x,x:y,y:B,color:e.options.levels.labels.colors.normal});if(D.setAttribute("index",k),v){const a=e.options.levels.labels.position.quadrant%e.options.data.sides>=b(e.options.data.sides/2);let c=`${n+C}px`,d=0;a&&(d=180,c=B),D.style.setProperty("transform-origin",`${y} ${c}`),D.style.setProperty("transform",`rotateZ(${d}deg)`)}else{let a=e.options.data.sides/2;q&&(a=b(a));const c=e.options.levels.labels.position.spline%e.options.data.sides>=a;let d=`${n-2+C}px`,f=180/e.options.data.sides;c&&(f+=180,y=`${e.options.radius-7}px`,d=B),D.style.setProperty("transform-origin",`${y} ${d}`),D.style.setProperty("transform",`rotateZ(${-f}deg)`)}0!==k&&j.appendChild(D);const E=g.makePolygon(m,{stroke:e.options.polygon.colors.normal.stroke,fill:e.options.polygon.colors.normal.fill});// additional inner polygon ...
if(E.setAttribute("index",k),E.addEventListener("mouseenter",w.onEnterSpline.bind(this,E)),E.addEventListener("touchstart",w.onEnterSpline.bind(this,E)),E.addEventListener("mouseleave",w.onLeaveSpline.bind(this,E)),E.addEventListener("touchend",w.onLeaveSpline.bind(this,E)),h.appendChild(E),0<k){const a=i-e.options.radius/e.options.levels.count,b=0<=k-1?k-1:0;A({radius:a,levels:b})}e.svg.appendChild(h),k===e.options.levels.count&&e.svg.appendChild(l),e.svg.appendChild(j)},B=()=>{const a=180/e.options.data.sides;let b=0;b=v?a+2*a*(e.options.levels.labels.position.quadrant-1):2*a*e.options.levels.labels.position.spline,(!q||p)&&3<e.options.data.sides&&(b+=a),j.style.setProperty("transform-origin",`${e.options.radius}px ${e.options.radius}px`),j.style.setProperty("transform",`rotateZ(${b}deg)`)},C=()=>{const a=e.options.target.querySelector("[polygonchart]");a&&a.remove(),l=[],n=[],o=[],h=g.createSVGElement("g","splines"),j=g.createSVGElement("g","labels"),e.svg=g.getSVG(e.options.radius),k=g.makePolygon("",{fill:e.options.data.colors.normal.polygonFill,stroke:e.options.data.colors.normal.polygonStroke}),k.addEventListener("mouseenter",w.onEnterDataPoly.bind(this,k)),k.addEventListener("touchstart",w.onEnterDataPoly.bind(this,k)),k.addEventListener("mouseleave",w.onLeaveDataPoly.bind(this,k)),k.addEventListener("touchend",w.onLeaveDataPoly.bind(this,k)),q=0==e.options.data.sides%2,p=0==e.options.data.sides%4,r=q?360/(2*e.options.data.sides):90,v=0!==e.options.levels.labels.position.quadrant,s=e.options.radius,t=e.options.radius/e.options.levels.count,u=360/e.options.data.sides,e.options.target.appendChild(e.svg)},D=()=>{const a=window.anime||null;if("undefined"!=typeof a&&null!==a){const b=a({...e.options.anime,targets:k,autoplay:!1,points:o.map(a=>({value:a}))});e.animations.push(b);for(let b=0;b<l.length;b++){const c=l[b],d=n[b];if(d){const b=a({...e.options.anime,targets:c,autoplay:!1,translateX:d.map(({x:a})=>({value:a})),translateY:d.map(({y:a})=>({value:a}))});e.animations.push(b)}}e.options.animation.autoplay&&e.start()}};//
return e.init=()=>{C(),A({levels:e.options.levels.count,radius:e.options.radius}),x(),z(0),y(),B(),D();const a=window.tippy||null;return"undefined"==typeof a||null===a?e:(a("[data-tippy-content]",e.options.tippy),e)},e.startAnimation=()=>{const{animations:a}=e;for(let b=0;b<a.length;b++)a[b].play();return e},e.resetAnimation=()=>{const{animations:b}=e;for(let c=0;c<b.length;c++){const d=b[c];d.restart(),d.pause()}return e},e.stopAnimation=()=>{const{animations:a}=e;for(let b=0;b<a.length;b++)a[b].pause();return e},e.seekAnimation=(a=0)=>{const{animations:b}=e;for(let c=0;c<b.length;c++)b[c].seek(a);return e},e.reload=()=>(e.init(),e),e}});
