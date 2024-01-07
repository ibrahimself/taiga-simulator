function essentialCountdownCloseAnnouncementBar(e,t){let n=document.querySelector(`.countdown_annoucement_bar_wrapper_${e}`);if(n){n.parentNode.removeChild(n);try{window.localStorage.setItem("countdownTimerAnnoucementBarClosed",JSON.stringify({value:!0,id:e,updatedAt:t}))}catch(o){console.log(o)}}}function essentialCountdownCloseAnnouncementBarOnClick(e,t){!e.target.closest("button")&&t&&(window.location.href=t)}async function getCartEssentialApps(){let e=await fetch(window.Shopify.routes.root+"cart.js",{headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e).catch(e=>{console.error("Error:",e)});return e}function clearCartEssentialApps(e){fetch(window.Shopify.routes.root+"cart/clear.js",{method:"POST",headers:{"Content-Type":"application/json"}}).then(()=>{try{window.localStorage.removeItem(`essentialCountdownTimer-${e.id}`)}catch(t){console.log(t)}let n=window.location&&window.location.pathname.includes("/cart");(n||window.cartTimerObserver)&&location.reload()}).catch(e=>{console.error("Error:",e)})}async function getProductEssentialApps(){let e=await fetch(window.location.pathname+".js",{headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e).catch(e=>{console.error("Error:",e)});return e}!function(){let e=null;async function t(){let t=window.Shopify?window.Shopify.shop:window.location.origin,n=window.essentialCountdownTimerConfigs,o=`https://cache-essential-apps.cc/config/${t}`;if(n){let r=n.find(e=>e.locationType&&"on-countries"===e.locationType);return r&&await fetch("https://cache-essential-apps.cc/config/geolocation").then(t=>{t.headers.has("country")&&(e=t.headers.get("country"))}),new Promise(e=>{e(n)})}return fetch(o).then(t=>(t.headers.has("country")&&(e=t.headers.get("country")),t.json()))}function n(e){let t=document.getElementsByTagName("head")[0],n=document.createElement("style");n.setAttribute("type","text/css"),n.setAttribute("id","countdown_timer"),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)}function o(){if(window.essentialViewCounted)return;window.essentialViewCounted=!0;let e=window.Shopify?window.Shopify.shop:window.location.origin,t=document.querySelectorAll(".essential_countdown_timer"),n=t&&t.length>0?t.length:0;e&&0!==n&&fetch("https://essential-apps-analytics.herokuapp.com/post_event",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shop:e,views:n})})}function r(e){return""!==e.font&&e.font?`font-family: ${e.font};
`:""}function i(e,t){let n=e.style;return`
      .countdown_wrapper_${e.id} {
          display: grid;
          ${w(e)?"grid-template-columns: 1fr 10px 1fr 10px 1fr;":"grid-template-columns: 1fr 10px 1fr 10px 1fr 10px 1fr;"} 
          ${"top-bar"===t?"row-gap: 0;":"row-gap: 6px;"}  
          justify-items: center;
          align-items: center;
          column-gap: 5px;
          direction: ltr;
          ${"top-bar"===t?"column-gap: 2px;":"padding-top: 4px;"}          
      }

      .countdown_time_${e.id} {
          ${r(n)}color: ${n.timerColor};
          font-weight: bold;
          font-size: ${n.timerSize}px;
          line-height: 1;
          font-feature-settings: 'tnum';
          font-variant-numeric: tabular-nums;
          ${"top-bar"!==t&&"padding-top: 4px;"}       
      }

      .countdown_legend_${e.id} {
          ${r(n)}color: ${n.legendColor};
          font-size: ${n.legendSize}px;
          padding-right: 10px;
          grid-column: 2 span;
          line-height: 1;
      }

      .countdown_legend_${e.id}.last {
        grid-column: auto;
        padding-right: 0;
      }`}function a(e){let t=e.style,o="gradientBackground"===t.backgroundType?`linear-gradient(${t.gradientTurn}deg, ${t.gradientStart}, ${t.gradientEnd})`:t.singleColor,a=`
        .countdown_timer_wrapper_${e.id} {
            display: flex;
            flex-flow: column;
            ${r(t)}background: ${o};
            ${void 0!==t.insideTopSpacing?`margin-top: ${t.outsideTopSpacing}px;
                   margin-bottom: ${t.outsideBottomSpacing}px;
                   padding-top: ${t.insideTopSpacing}px;
                   padding-bottom: ${t.insideBottomSpacing}px;
                `:`margin: 20px 0;
                   padding: 30px;`}
            border-radius: ${t.borderRadius}px;
            border: ${t.borderColor} solid ${t.borderSize}px;
            text-align: center;
            flex:auto;
            align-items: center;
        }

        .countdown_timer_wrapper_${e.id}.clickable {
          cursor: pointer;
        }
    
        .countdown_timer_wrapper_${e.id} h2 {
            ${r(t)}font-weight: bold;
            font-size: ${t.titleSize}px;
            color: ${t.titleColor};
            margin: 0;
            padding: 0;
            line-height: 1.2;
            letter-spacing: normal;
            text-transform: none;
        }
    
        .countdown_timer_subheading_${e.id} {
            ${r(t)}font-size: ${t.subheadingSize}px;
            color: ${t.subheadingColor};
            line-height: 1.2;
            letter-spacing: normal;
            padding: 0;
            padding-top: 2px;
            margin: 0;
        }

        .countdown_timer_bar_cta_${e.id}, .countdown_timer_bar_cta_${e.id}:visited {
          display: block;        
          cursor: pointer;
          text-decoration: none;
          background: ${t.buttonBackgroundColor};
          border: 0;
          white-space: nowrap;
          padding: 8px 16px;
          line-height: 1.5;
          border-radius: ${t.buttonBorderRadius}px;
          font-size: ${t.buttonFontSize}px;
          color: ${t.buttonFontColor};
          margin-top: 16px;
        }
    
        ${i(e,"product-page")}
    `;n(a)}function l(e){return 1===e.toString().length?`0${e}`:e}function d(e,t,n,o=null){let r,i=new Date(e+6e4*n.fixedMinutes),a=new Date().getTime();if("toDate"===n.timerType)r=new Date(n.endDate)-a;else if("recurring"===n.timerType){let d=new Date(n.endDate)-a;if("never"!==n.endType&&d<0)r=d;else{let c=x(n.startDate),p=x(n.endDate);r=c<p?p-a:p.getTime()>a?p-a:c.getTime()>a?0:p.getTime()+864e5-a}}else{r=t?i-(6e4*n.fixedMinutes-t)-a:i-a;try{"cart-page"===n.type&&o.item_count>0&&window.localStorage.setItem(`essentialCountdownTimer-${n.id}`,JSON.stringify({id:n.id,userDistance:r,sessionCurrentDate:new Date().getTime(),updatedAt:n.updatedAt})),"cart-page"!==n.type&&window.localStorage.setItem(`essentialCountdownTimer-${n.id}`,`${r}, ${new Date().getTime()}, ${n.timerType}-${n.fixedMinutes}-${n.id}`)}catch(s){console.log(s)}}if(r<0){if("custom-title"===n.onceItEnds){var u;let m,g;"product-page"===(u=n).type||"landing-page"===u.type?(m=document.querySelector(`.countdown_timer_wrapper_${u.id} h2`),g=document.querySelector(`.countdown_timer_subheading_${u.id}`)):(m=document.querySelector(`.countdown_annoucement_bar_title_${u.id}`),g=document.querySelector(`.countdown_annoucement_bar_subheading_${u.id}`)),g&&g.remove(),m&&(m.textContent=u.customTitle)}if("hide"===n.onceItEnds||""===n.onceItEnds||"delete-items"===n.onceItEnds){let $;"product-page"===n.type||"landing-page"===n.type?$=document.querySelector(`.countdown_timer_wrapper_${n.id}`):"cart-page"===n.type?(window.cartTimerObserver&&window.cartTimerObserver.disconnect(),$=document.querySelector(`.countdown_cart_page_timer_wrapper_${n.id}`)):$=document.querySelector(`.countdown_annoucement_bar_wrapper_${n.id}`),$&&$.remove()}"delete-items"===n.onceItEnds&&"cart-page"===n.type&&o.item_count>0&&clearCartEssentialApps(n);return}let f=Math.floor(r/864e5);f=l(f);let h=Math.floor(r%864e5/36e5);h=l(h);let b=Math.floor(r%36e5/6e4);b=l(b);let y=Math.floor(r%6e4/1e3);return y=l(y),w(n)?{hours:h,minutes:b,seconds:y}:{days:f,hours:h,minutes:b,seconds:y}}function c(e,t){let n=Number(new Date().getTime()),r,i,a,l;try{a=window.localStorage.getItem(`essentialCountdownTimer-${t.id}`)}catch(c){console.log(c)}a&&([r,i,l]=a&&a.split(","),-1===l.indexOf(`${t.timerType}-${t.fixedMinutes}-${t.id}`)&&(a=null,r=null)),a&&parseInt(i)+6e4*t.fixedMinutes>n&&(n=parseInt(i)),p(d(n,r,t),e,t),setTimeout(()=>{o()},700);let s=setInterval(()=>{let o=d(n,r,t);(t.repeat||"repeat"===t.onceItEnds)&&"fixedMinutes"===t.timerType&&!o?(r=0,n=Number(new Date().getTime())):o||clearInterval(s),p(d(n,r,t),e,t)},1e3)}function p(e,t,n){let o=document.createElement("div");o.className=`countdown_wrapper_${n.id} essential_countdown_timer notranslate`,e||(e=w(n)?{hours:"00",minutes:"00",seconds:"00"}:{days:"00",hours:"00",minutes:"00",seconds:"00"}),Object.values(e).forEach((e,t)=>{let r=document.createElement("span");r.className=`countdown_time_${n.id}`,r.textContent=e;let i=r.cloneNode(!0);i.textContent=":",o.append(r);let a=w(n)?2:3;t!==a&&o.append(i)}),t.innerHTML="",function e(t,n,o){let r=w(o)?[o.legendCopyHours,o.legendCopyMins,o.legendCopySecs]:[o.legendCopyDays,o.legendCopyHours,o.legendCopyMins,o.legendCopySecs,];r.forEach((e,n)=>{let r=document.createElement("div");r.className=`countdown_legend_${o.id}`;let i=w(o)?2:3;n===i&&(r.className=`countdown_legend_${o.id} last`),r.textContent=e,t.append(r)}),n.append(t)}(o,t,n),t.append(o)}function s(e,t,n){let o=document.createElement("div");o.className="cart-page-inline-timer h2";let r=document.createElement("span");var i,a,l="{timer}";e||(e={days:"00",hours:"00",minutes:"00",seconds:"00"}),Object.values(e).forEach((e,t)=>{if(0===t&&"00"===e||1===t&&"00"===e)return;let o=document.createElement("span");o.className=`countdown_time_${n.id}`,o.textContent=e;let i=o.cloneNode(!0);i.textContent=":",r.append(o),3!==t&&r.append(i)}),t.innerHTML="",o.innerHTML+=(i=n.title,a=r,i.replace(l,a.outerHTML)),t.append(o)}function u(e,t=null){let o=document.querySelector(".essential_countdown_annoucement_bar_wrapper");if(o&&!t)return;try{let a=window.localStorage.getItem("countdownTimerAnnoucementBarClosed");if((a=JSON.parse(a))&&a.id===e.id&&a.updatedAt===e.updatedAt&&a.value)return}catch(l){console.log(l)}if(e.timerPlacement){let d=window.location.pathname,p=window.Shopify.routes.root||"/";if(p.length>1&&(p=p.slice(0,p.length-1)),"home-page"===e.timerPlacement&&d!==p||"all-products"===e.timerPlacement&&!window.location.pathname.includes("/products/")||"all-collections"===e.timerPlacement&&(!window.location.pathname.includes("/collections/")||window.location.pathname.includes("/products/")))return}!function e(t){let o=t.style,a="gradientBackground"===o.backgroundType?`linear-gradient(${o.gradientTurn}deg, ${o.gradientStart}, ${o.gradientEnd})`:o.singleColor,l=`
        .countdown_annoucement_bar_wrapper_${t.id} {
          position: relative;
          ${r(o)}background: ${a};
          z-index: ${!t.createdAt||1697704508e3>new Date(t.createdAt).getTime()?100:1};
          display: flex !important;
          width: 100%;
          flex-wrap: wrap;
          ${"seperate-centered"===o.announcementBarStyle?`flex-flow: column;
              justify-items: center;`:""}

          align-items: center;
          justify-content: center;
          padding: 10px;
          column-gap: 26px;
          row-gap: 10px;
          border-bottom: ${o.borderColor} solid ${o.borderSize}px;
        }

        .countdown_annoucement_bar_wrapper_${t.id}.top_page {
          position: sticky; 
          top: 0;
        }

        .countdown_annoucement_bar_wrapper_${t.id}.bottom_page {
          bottom: 0; 
          left: 0;
          position: fixed;
          width: 100%;
          border-bottom: none;
          border-top: ${o.borderColor} solid ${o.borderSize}px;
        }
        
        .countdown_annoucement_bar_wrapper_${t.id}.clickable {
          cursor: pointer;
        }
    
        .countdown_annoucement_bar_title_${t.id}.h2 {
            ${r(o)}font-weight: bold;
            font-size: ${o.titleSize}px;
            color: ${o.titleColor};
            margin: 0;
            padding: 0;
            line-height: 1.2;
            letter-spacing: normal;
            text-transform: none;
            text-align: left;
        }
    
        .countdown_annoucement_bar_subheading_${t.id} {
            ${r(o)}font-size: ${o.subheadingSize}px;
            color: ${o.subheadingColor};
            line-height: 1.2;
            letter-spacing: normal;
            padding: 0;
            margin: 0;
        }
        
        .countdown_annoucement_bar_cta_${t.id}, .countdown_annoucement_bar_cta_${t.id}:visited  {
          display: block;        
          cursor: pointer;
          text-decoration: none;
          background: ${o.buttonBackgroundColor};
          border: 0;
          white-space: nowrap;
          padding: 8px 16px;
          line-height: 1.5;
          border-radius: ${o.buttonBorderRadius}px;
          font-size: ${o.buttonFontSize}px;
          color: ${o.buttonFontColor};
        }

        .countdown_annoucement_bar_close_button_${t.id} {
          position: absolute;
          display: block;
          border: none;
          background: none;
          padding: 6px;
          cursor: pointer;
          top: 50%;
          right: 10px;
          transform: translate(0, -50%);
        }

        .countdown_annoucement_bar_close_button_${t.id} svg {
          width: 12px;
          height: 12px;
          display: block;
        }

        .countdown_annoucement_bar_close_button_${t.id}.top_right {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        ${(e=>{if(!e.createdAt||1697704508e3>new Date(e.createdAt).getTime())return"";let t=!e.legendCopyDays&&!e.legendCopyHours&&!e.legendCopyMins&&!e.legendCopySecs;return`
        @media (max-width: 620px) {
          .countdown_annoucement_bar_wrapper_${e.id} {
            padding: 7px;
            column-gap: 10px;
            row-gap: 7px;
          }

          span.countdown_time_${e.id} {
            font-size: ${Math.floor(.8*o.timerSize)}px;
            padding-top: ${t?0:"2px"};
          }

          div.countdown_legend_${e.id} {
            font-size: ${Math.floor(.8*o.legendSize)}px;
          }

          .countdown_annoucement_bar_title_${e.id}.h2 {
            font-size: ${Math.floor(.8*o.titleSize)}px;
          }

          .countdown_annoucement_bar_subheading_${e.id} {
            font-size: ${Math.floor(.8*o.subheadingSize)}px;  
          }
        
          .countdown_annoucement_bar_cta_${e.id}, .countdown_annoucement_bar_cta_${e.id}:visited  {
            padding: 6px 14px;
            line-height: 1.5;
            font-size: ${Math.floor(.9*o.buttonFontSize)}px;
          }
        }`})(t)}
      
        @media (max-width: 430px) {
          .countdown_annoucement_bar_wrapper_${t.id} {
            justify-items: center;
            text-align: center;
            padding: 10px 15px;
          }

          .countdown_annoucement_bar_close_button_${t.id} {
            position: absolute;
            padding: 0;
            transform: none;
            top: 5px;
            right: 5px;
          }

          .countdown_annoucement_bar_title_${t.id}.h2 {
              text-align: center;
          }
        }

        ${i(t,"top-bar")}
    `;n(l)}(e);let s=document.createElement("div");s.className=`essential_countdown_annoucement_bar_wrapper countdown_annoucement_bar_wrapper_${e.id}`,"top-page"===e.style.position&&e.style.stickyBar&&(s.className+=" top_page"),"bottom-page"===e.style.position&&(s.className+=" bottom_page"),"clickable"===e.CTAType&&e.CTALink&&(s.className+=" clickable",s.setAttribute("onclick",`essentialCountdownCloseAnnouncementBarOnClick(event, "${e.CTALink}")`));let u=document.createElement("p");u.className+=`countdown_annoucement_bar_title_${e.id} h2`,u.textContent+=e.title;let m=document.createElement("p");m.className=`countdown_annoucement_bar_subheading_${e.id}`,m.textContent+=e.subheading;let g=document.createElement("div");g.append(u),g.append(m);let $=document.createElement("div"),f=document.createElement("a");f.className=`countdown_annoucement_bar_cta_${e.id}`,f.setAttribute("href",e.CTALink),f.textContent+=e.buttonText;let h=document.createElement("button");h.className=`countdown_annoucement_bar_close_button_${e.id}`,h.setAttribute("onclick",`essentialCountdownCloseAnnouncementBar("${e.id}", "${e.updatedAt}")`),h.append(function e(t){let n=document.createElementNS("http://www.w3.org/2000/svg","svg"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("width",12),n.setAttribute("height",12),n.setAttribute("fill","none"),o.setAttribute("d","m7.414 6 4.293-4.293A.999.999 0 1 0 10.293.293L6 4.586 1.707.293A.999.999 0 1 0 .293 1.707L4.586 6 .293 10.293a.999.999 0 1 0 1.414 1.414L6 7.414l4.293 4.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L7.414 6Z"),o.setAttribute("fill",t),n.append(o),n}(e.style.closeIconColor)),s.append(g),s.append($),"button"===e.CTAType&&s.append(f),e.closeButton&&s.append(h);let w=document.querySelector(".essential-countdown-top-bar");w?w.append(s):t?t.append(s):document.querySelector("body").prepend(s),c($,e)}async function m(e,t,n){if(n&&e.productTags&&e.productTags.length>0){let o=!1;try{let r=await getProductEssentialApps(),i=r.tags||[];o=e.productTags.some(e=>i.includes(e))}catch(l){console.log(l)}if(!o)return!1}let d=document.querySelector(`.countdown_timer_wrapper_${e.id}`);if(d)return;let p=document.createElement("div");p.className=`countdown_timer_wrapper_${e.id}`;let s=document.createElement("h2");s.textContent+=e.title;let u=document.createElement("p");u.className=`countdown_timer_subheading_${e.id}`,u.textContent+=e.subheading;let m=document.createElement("div");p.append(s),p.append(u),p.append(m),a(e),t.append(p),c(m,e)}function g(e,t,n=!0){let o=document.createElement("div");o.className=`countdown_timer_wrapper_${e.id}`;let r=document.createElement("h2");r.textContent+=e.title;let i=document.createElement("p");i.className=`countdown_timer_subheading_${e.id}`,i.textContent+=e.subheading;let l=document.createElement("div");"clickable"===e.CTAType&&e.CTALink&&(o.className+=" clickable",o.setAttribute("onclick",`essentialCountdownCloseAnnouncementBarOnClick(event, "${e.CTALink}")`));let d=document.createElement("a");d.className=`countdown_timer_bar_cta_${e.id}`,d.setAttribute("href",e.CTALink),d.textContent+=e.buttonText,o.append(r),o.append(i),o.append(l),"button"===e.CTAType&&o.append(d),a(e),n?t.append(o):t.prepend(o),c(l,e)}async function $(e,t,i){let a=await getCartEssentialApps();if(a&&a.item_count<1){try{window.localStorage.removeItem(`essentialCountdownTimer-${e.id}`)}catch(l){console.log(l)}return}let c=document.querySelector(".essential_countdown_cart_page_timer");if(c)return;let p=document.createElement("div");p.className=`essential_countdown_cart_page_timer countdown_cart_page_timer_wrapper_${e.id} essential_countdown_timer`;let u=document.createElement("div");p.append(u),t&&t.prepend(p),function e(t){let o=t.style,i="gradientBackground"===o.backgroundType?`linear-gradient(${o.gradientTurn}deg, ${o.gradientStart}, ${o.gradientEnd})`:o.singleColor,a=`
        .countdown_cart_page_timer_wrapper_${t.id} {
            ${r(o)}background: ${i};
            margin-top: ${o.outsideTopSpacing}px;
                margin-bottom: ${o.outsideBottomSpacing}px;
                padding-top: ${o.insideTopSpacing}px;
                padding-bottom: ${o.insideBottomSpacing}px;
                padding-left: 10px;
                padding-right: 10px;
              
            border-radius: ${o.borderRadius}px;
            border: ${o.borderColor} solid ${o.borderSize}px;
            text-align: center;
            flex:auto;
            align-items: center;
        }
    
        .countdown_cart_page_timer_wrapper_${t.id} .h2 {
          ${r(o)}font-weight: bold;
          font-size: ${o.titleSize}px;
          color: ${o.titleColor};
          margin: 0;
          padding: 0;
          line-height: 1.2;
          letter-spacing: normal;
          text-transform: none;
          white-space: break-spaces;
        }
    
        .countdown_wrapper_${t.id} {
          white-space: nowrap;
        }

        .countdown_time_${t.id} {
          ${r(o)}color: ${o.timerColor};
          font-weight: bold;
          font-size: ${o.timerSize}px;
          line-height: 1;
          font-feature-settings: 'tnum';
          font-variant-numeric: tabular-nums;
        }`;n(a)}(e),function e(t,n,o){let r=Number(new Date().getTime()),i,a={};try{i=window.localStorage.getItem(`essentialCountdownTimer-${n.id}`)}catch(l){console.log(l)}if(i){try{let c=JSON.parse(i);a={...a,...c}}catch(p){console.log(p)}a&&a.id===n.id&&a.updatedAt!==n.updatedAt&&(window.localStorage.removeItem(`essentialCountdownTimer-${n.id}`),i=null,a={...a,userDistance:null})}i&&parseInt(a.sessionCurrentDate)+6e4*n.fixedMinutes>r&&(r=parseInt(a.sessionCurrentDate)),s(d(r,a.userDistance,n,o),t,n);let u=setInterval(()=>{let e=d(r,a.userDistance,n,o);(n.repeat||"repeat"===n.onceItEnds)&&"fixedMinutes"===n.timerType&&!e?(a={...a,userDistance:0},r=Number(new Date().getTime())):e||clearInterval(u),s(d(r,a.userDistance,n,o),t,n)},1e3)}(u,e,a),i||setTimeout(()=>{o()},700)}function f(){let e,t=window.Shopify.routes.root||"/",n=document.querySelector(`form[action="${t}cart"]`),o=document.querySelectorAll(".side-cart"),r=document.querySelector(".countdown-timer-side-cart");return n&&"cart-notification-form"===n.getAttribute("id")&&(n=null),r?e=r:n?e=n:o.length>0&&(e=o[o.length-1]),e}function h(e){if(e.startDate&&"fixedMinutes"!==e.timerType){let t=Number(new Date().getTime()),n=Number(x(e.startDate).getTime()),o=Number(x(e.endDate).getTime()),r=w(e)&&"today"===e.startType?n:Number(new Date(e.startDate).getTime());return(!w(e)||"today"!==e.startType||!(n>o))&&!(t>=r)}return!1}function w(e){return"recurring"===e.timerType}function b(e){if("do-nothing"===e.onceItEnds||"custom-title"===e.onceItEnds)return!0;let t=Number(new Date().getTime()),n=Number(x(e.startDate).getTime()),o=Number(x(e.endDate).getTime());return n<o?n<t&&t<o:n<t&&t<o+864e5}function y(e){let t=new Date().getDay();return!e.recurringDays||!(e.recurringDays.length>0)||e.recurringDays.includes(t)}function x(e){let t=new Date,n=new Date(e).getHours(),o=new Date(e).getMinutes(),r=new Date(e).getSeconds();return t.setHours(n),t.setMinutes(o),t.setSeconds(r),t}!function n(){let o,r=window.location&&window.location.pathname.includes("/products/"),i=window.location&&window.location.pathname.includes("/collections/"),a=window.location&&window.location.pathname.includes("/password"),l=window.location&&window.location.pathname.includes("/cart"),d=document.querySelectorAll('form[action="/cart/add"]'),c=document.querySelector("#MainContent"),p=document.querySelector("main"),s=document.querySelector("form#contact_form"),x=document.querySelector(".essential-countdown-timer-placement"),C=c||p;if(d&&0===d.length){let T=document.querySelectorAll("form[action]");d=Array.from(T).filter(e=>e.getAttribute("action").includes("/cart/add"))}if(l){let S=window.Shopify.routes.root||"/",_=document.querySelectorAll(`form[action="${S}cart"]`),N=_[_.length-1];N&&(o=N.parentNode)}let A=document.querySelectorAll("div.countdown-timer-block"),E=[],v=(e,t,n,o)=>{if(e.type!==t||n&&"custom"===e.timerPlacement||o&&e.productTags&&e.productTags.length>0)return!1;if(e.showOnProducts&&0!==e.showOnProducts.length){let r=decodeURI(window.location.pathname),i=window.meta&&window.meta.product,a=e.showOnProducts.find(e=>i&&i.gid?i.gid===e.id:"function"==typeof r.endsWith?r.endsWith(`products/${e.handle}`):r.includes(`products/${e.handle}`));if(!a)return!1}return!(h(e)||w(e)&&!y(e)||w(e)&&!b(e))},k=(e,t,n)=>{if(e.type!==t||n&&"custom"===e.timerPlacement||n&&"password-page"===e.timerPlacement)return!1;if(e.showOnCollections&&0!==e.showOnCollections.length){let o=decodeURI(window.location.pathname),r;if(!(r="american-uncle-alpha.myshopify.com"===Shopify.shop?essentialCollectionId&&e.showOnCollections.find(e=>e.id.includes(essentialCollectionId)):e.showOnCollections.find(e=>o.includes(`collections/${e.handle}`))))return!1}return!(h(e)||w(e)&&!y(e)||w(e)&&!b(e))},z=(e,t,n)=>!(e.type!==t||n&&""===e.timerPlacement||e.timerPlacement&&"password-page"!==e.timerPlacement||h(e)||w(e)&&!y(e)||w(e)&&!b(e)),D=(e,t,n)=>e.type===t&&(!n||"custom"!==e.timerPlacement);A&&A.length>0&&(E=Array.from(A).filter(e=>e&&""!==e.getAttribute("countdown-timer-id"))),t().then(async t=>{if(t&&!Array.isArray(t)&&0===t.length)return null;let n=t.reduce((e,t)=>t.showInCountries&&t.showInCountries.length?[...e,...t.showInCountries]:e,[]),c=t.find(e=>e.locationType&&"on-countries"===e.locationType),p=t.filter(t=>{if(!c||!(n.length>0))return t;if("on-countries"===t.locationType){if(!e)return;return t.showInCountries.includes(e)}if(!n.includes(e))return t});p.forEach(e=>{if(e.translations&&e.translations.length>0){let t=e.translations.find(e=>e.locale===Shopify?.locale);t&&Object.assign(e,t)}});let h=p.filter(e=>"top-bar"===e.type),w=p.find(e=>"cart-page"===e.type);if(h.forEach(e=>{e&&"custom"!==e.timerPlacement&&v(e,"top-bar")&&k(e,"top-bar")&&u(e)}),E.forEach(e=>{let t=e.getAttribute("countdown-timer-id"),n=p.find(e=>e.id===t&&"top-bar"===e.type);n&&v(n,"top-bar")&&k(n,"top-bar")&&u(n,e)}),(E=E.filter(e=>{let t=e.getAttribute("countdown-timer-id"),n=p.find(e=>e.id===t);return!n||!!n&&n?.type!=="top-bar"})).forEach(e=>{let t=e.getAttribute("countdown-timer-id"),n=p.find(e=>e.id===t);n&&v(n,"product-page")&&m(n,e,!0),n&&k(n,"landing-page")&&g(n,e),n&&"cart-page"===n.type&&$(n,e)}),0===E.length&&r&&(d&&d.length>0||x)){let b,y;y=x||d[d.length-1];let T=p.find(e=>e.productTags&&e.productTags.length>0),S;if(T)try{let _=await getProductEssentialApps(),N=_.tags||[];S=p.filter(e=>e.productTags.some(e=>N.includes(e)))}catch(A){console.log(A)}(b=S&&S.length>0?S.find(e=>v(e,"product-page",!0)):p.find(e=>v(e,"product-page",!0,!0)))&&(Shopify?.theme?.name&&Shopify.theme.name.toLowerCase().includes("debutify")&&b.createdAt&&new Date(b.createdAt).getTime()>1698142755e3&&!x&&(y=document.querySelector("form.product-single__form")),m(b,y))}if(0===E.length&&i&&C){let q;(q=p.find(e=>k(e,"landing-page",!0)))&&g(q,C,!1)}if(0===E.length&&a&&s){let B;(B=p.find(e=>z(e,"landing-page",!0)))&&g(B,s)}if(0===E.length&&l){let I=p.find(e=>D(e,"cart-page",!0));o&&I&&$(I,o)}if(f()&&w&&!l){let M=f();if(M&&"custom"!==w.timerPlacement){$(w,M);let O=new MutationObserver(()=>{let e=document.querySelector(`.countdown_cart_page_timer_wrapper_${w.id}`);!e&&f()&&$(w,f(),!0)});if(!window.sideCartObserver&&M){let P;P=M.parentNode.parentNode.parentNode.parentNode&&"BODY"!==M.parentNode.parentNode.parentNode.parentNode.tagName&&"HTML"!==M.parentNode.parentNode.parentNode.parentNode.tagName?M.parentNode.parentNode.parentNode.parentNode:M.parentNode.parentNode.parentNode&&"BODY"!==M.parentNode.parentNode.parentNode.tagName&&"HTML"!==M.parentNode.parentNode.parentNode.tagName?M.parentNode.parentNode.parentNode:M.parentNode.parentNode&&"BODY"!==M.parentNode.parentNode.tagName&&"HTML"!==M.parentNode.parentNode.tagName?M.parentNode.parentNode:M.parentNode,window.cartTimerObserver=O,O.observe(P,{childList:!0,subtree:!0}),window.sideCartObserver=!0}}}if(!f()&&!l&&w)try{(timerSession=window.localStorage.getItem(`essentialCountdownTimer-${w.id}`))&&$(w,!1)}catch(L){console.log(L)}})}()}();