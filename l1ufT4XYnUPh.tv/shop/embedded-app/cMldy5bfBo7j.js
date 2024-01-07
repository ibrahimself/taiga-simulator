function installLivescaleStyle() {
  // Add Livescale Css to header
  const styles = `
    #livescale {
      background: rgba(0,0,0,0.7); 
      position:fixed; 
      right: 0; 
      bottom: 0; 
      z-index: 999999; 
      align-items: center; 
      justify-content: center;
      padding: 0;
      width: auto;
      height: auto;
    } 

    .livescale-open:not(.livescale-pip-open) {
      overflow: hidden !important;
    }

    .livescale-open #livescale {
        width: 100%;
        height: 100%;
        display: flex;
    }
    
    #livescale iframe { 
      border: 0 !important;
    }
    
    #livescale #livescale-modal-content {
      max-height: 100vh;
      max-width: 100vw;
      position: relative;
    }
    
    #livescale #livescale-modal-content #livescale-modal-inner-content {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    
    #livescale #close-btn {
      color: #fff; 
      position:absolute; 
      right: 0; 
      top: -20px; 
      font-size: 14px; 
      line-height: 13px;
      letter-spacing: 1px; 
      font-family: sans-serif;
      display: none;
    }
    
    .livescale-open #livescale #close-btn {
      display: flex;
    }

    #ls-expand {
      position: absolute;
      top: -20px;
      right: 30px;
      z-index: 3;
      display: none;
      width: 20px;
    }

    .livescale-open:not(.livescale-pip-open) #livescale.live.event-joined #ls-expand, .livescale-open:not(.livescale-pip-open) #livescale.replay.event-joined #ls-expand, .livescale-open:not(.livescale-pip-open) #livescale.practice.event-joined #ls-expand {
      display: flex;
    }

    .livescale-pip-open #livescale.live #ls-expand, .livescale-pip-open #livescale.replay #ls-expand, .livescale-pip-open #livescale.practice #ls-expand {
      left: 10px;
      top: 10px;
    }

    
    .livescale-pip-open #livescale #close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      z-index: 3;
      display: none;
    }

    .livescale-pip-open #livescale #ls-expand, .livescale-pip-open #livescale #close-btn {
      display: none;
    }

    .livescale-pip-open:not(.touch-device) #livescale.video-ready:hover #close-btn, 
    .livescale-pip-open:not(.touch-device) #livescale.video-ready.live:hover #ls-expand, 
    .livescale-pip-open:not(.touch-device) #livescale.video-ready.replay:hover #ls-expand, 
    .livescale-pip-open:not(.touch-device) #livescale.video-ready.practice:hover #ls-expand
    {
      display: flex;
      flex-direction: column;
    }

    .livescale-pip-open #livescale.video-ready.hover #close-btn, .livescale-pip-open #livescale.video-ready.live.hover #ls-expand, .livescale-pip-open #livescale.video-ready.replay.hover #ls-expand, .livescale-pip-open #livescale.video-ready.practice.hover #ls-expand
    {
      display: flex;
      flex-direction: column;
    }

    .livescale-open:not(.livescale-pip-open) #livescale.event-joined #ls-expand {
      display: flex;
      flex-direction: column;
    }

    #pip-overlay { 
      display: flex;
      background: rgba(0,0,0,1);
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;
      right: 0;
      top: 0; 
      bottom: 0;
      color: white;
      font-size: 12px;
      z-index: 1;
      transition: opacity 0.5s;
      transition-delay: 1s;
      align-items: center;
      justify-content: center;
      pointer-events: none;
    }

    :not(livescale-open) #pip-overlay, .scheduled #pip-overlay, .done #pip-overlay, .ended #pip-overlay, .canceled #pip-overlay, .video-ready #pip-overlay { 
      display: none;
    }

    .livescale-pip-open #livescale {
      border: 0 !important;
      min-width: 240px;
      width: 266px;
      height: 200px;
      border-radius: 5px;
      overflow: hidden;
    }

    .livescale-pip-open #livescale #livescale-modal-content {
      position: static;
      width: 100%;
      padding-bottom: 75%;
    }

    @media only screen and (max-width: 766px) {
      #livescale #livescale-modal-content {
        width: 100%;
        height: 100%;
        position: relative;
      }
      #livescale #close-btn, .livescale-open #livescale #ls-expand {
        width: 48px;
        height: 48px;
      }

      #livescale #close-btn {
        position: fixed;
        right: 0; 
        top: 0;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.6); 
      }
      .livescale-open #livescale #ls-expand {
        position: fixed;
        right: 48px; 
        top: 0;
        align-items: center;
        justify-content: center;
        background: rgba(0,0,0,0.6); 
        border-radius: 0 0 0 6px;
      }
      .livescale-open.livescale-pip-open #livescale #livescale-modal-inner-content #ls-expand {
        position: absolute;
        background: none;
        left: 0;
        top: 0;
      }
      .livescale-open.livescale-pip-open #livescale #close-btn {
        background: none;
        right: 0;
        top: 0;
        left: auto;
      }
      
    }
    .lds-ring {
      position: relative;
      width: 30px;
      height: 30px;
    }
    .lds-ring div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 30px;
      height: 30px;
      margin: 2px;
      border: 2px solid #fff;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: #fff transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
      animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
      animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
      animation-delay: -0.15s;
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    
    @media (max-width: 1151px) and (min-width: 767px) {
      #livescale #livescale-modal-content {
        max-height: 84vh;
        width: 0;
        height: 100%;
        padding-right: calc(84vh * 0.5);
      }
    }
    @media only screen and (min-width: 1152px) {
      #livescale #livescale-modal-content {
        max-height: 92vh;
        max-width: 100%;
        width: 0;    
        height: 100%;
      }
      #livescale:not(.narrow) #livescale-modal-content {
        padding-left: calc(92vh * 1.62);
      }
      #livescale.narrow #livescale-modal-content {
        padding-right: calc(92vh * 0.5);
      }
    }
  `;

  let styleSheet = document.createElement('style');
  styleSheet.rel = 'stylesheet';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
function debounce(fn, wait) {
  let t;
  return function () {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait);
  };
}

function checkRatio() {
  let livescale = document.getElementById('livescale');

  window.innerWidth / window.innerHeight < 1.56
    ? livescale.classList.add('narrow')
    : livescale.classList.remove('narrow');
}

function Store() {
  function isLocalStorageAvailable() {
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  function isSessionStorageAvailable() {
    var test = 'test';
    try {
      sessionStorage.setItem(test, test);
      sessionStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  if (isLocalStorageAvailable()) return localStorage;
  if (isSessionStorageAvailable()) return sessionStorage;
}

const storage = Store();

const livescaleURL = 'livescale.tv';
const embeddedQS = 'embed=true';

const installHandler = () => {
  console.debug(' Running the installation script ');
  if (document.getElementById('livescale')) {
    // just to make sure to run this script once.
    console.debug('Livescale is already installed.');
    return;
  }
  console.log("Hi and welcome to Livescale's Live Shopping ! Made with love in Montreal");
  console.log(
    "Upgrade your online shop today with Livescale's Live Shopping experience : https://www.livescale.tv/"
  );

  window.livescale = true;

  const debouncedCheckRatio = debounce(checkRatio, 200);

  /* LocalStorage functions */
  const setWithExpiry = function (key, value, ttl) {
    const now = new Date();

    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      expiry: now.getTime() + ttl
    };
    try {
      storage.setItem(key, JSON.stringify(item));
    } catch (error) {}
  };

  const getWithExpiry = function (key) {
    const itemStr = storage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      storage.removeItem(key);
      return null;
    }
    return item.value;
  };
  /* UTILITY FUNCTIONS ENDS */

  /* STATE */
  let livescale;
  let currentTarget; /* keep the livescale url */
  let isPIP = false; /* keep track of the status of pip */
  let currentTime = 0; /* keep track of the currentTime of the videoPlayer */
  let isReplay = false; /* we need this to set the currenttime for the video if replay */
  let iframe;
  let liveStatus;
  let practice = false;

  /* CREATE LIVESCALE HOLDER IN DOCUMENT */

  const createLivescaleDiv = function () {
    livescale = document.createElement('div');
    livescale.id = 'livescale';
    livescale.innerHTML = `
  <div id="livescale-modal-content">
  <div id="pip-overlay">    
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
    <div id="livescale-modal-inner-content">
      <div id="ls-expand">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8H1C0.447716 8 0 7.55228 0 7V1C0 0.447715 0.447715 0 1 0H9C9.55228 0 10 0.447715 10 1V4H13C13.5523 4 14 4.44772 14 5V9C14 9.55228 13.5523 10 13 10H7C6.44772 10 6 9.55228 6 9V8ZM1 1H9V4H7C6.44772 4 6 4.44772 6 5V7H1V1ZM10 5H13V9H7V8H9C9.55229 8 10 7.55228 10 7V5ZM9 5V7H7V5H9Z" fill="white"/>
        </svg>
      </div>
      <div id="close-btn">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.2 1.20001L10.8 10.8M1.2 10.8L10.8 1.20001" stroke="white"></path></svg>
      </div>
    </div>
  </div>
`;
    document.body.appendChild(livescale);
  };

  createLivescaleDiv();
  /* CREATE LIVESCALE HOLDER IN DOCUMENT ENDS */

  /* alias */
  let livescaleDiv = document.getElementById('livescale');

  console.debug('Setting up the message handler');

  /* MESSAGES FROM IFRAME */
  window.addEventListener('message', event => {
    const url = new URL(event.origin);
    const splittedUrl = url.host.split('.');

    if (splittedUrl.length === 3 && splittedUrl[1] === 'livescale' && splittedUrl[2] === 'tv') {
      const action = event.data.action;
      switch (action) {
        case 'ls-document-interaction':
          livescaleDiv.classList.add('document-interacted');
          break;
        case 'ls-redirect': {
          const parentLocation = (parent !== window) ? document.referrer : document.location;
          const parentURL = new URL(parentLocation.href);
          const eventURL = new URL(event.data.href);

          setOpenWithPip(event.data.isReplay);

          if(eventURL.host === parentURL.host) {
          window.location.replace(event.data.href);
          } else {
            window.open(event.data.href, '_blank');
          }
          break;
        }
        case 'ls-state-change': {
          if (liveStatus) livescaleDiv.classList.remove(liveStatus.toLowerCase());
          if (liveStatus === 'REPLAY') isReplay = true;
          if (event.data.status) livescaleDiv.classList.add(event.data.status.toLowerCase());
          liveStatus = event.data.status;
          if (
            event.data.status &&
            liveStatus &&
            !['LIVE', 'REPLAY'].includes(event.data.status) &&
            !practice &&
            isPIP
          ) {
            openLivescaleMain();
          }
          break;
        }
        default:
          break;
      }
      switch (event.data.type) {
        case 'player-clicked':
          livescaleDiv.classList.add('hover');
          debounce(
            setTimeout(() => {
              livescaleDiv.classList.remove('hover');
            }, 3500),
            500
          );
          break;
        case 'player-timeupdate':
          if (event?.data?.payload?.currentTime) currentTime = event.data.payload.currentTime;
          break;
        case 'ls-event-joined':
          livescaleDiv.classList.add('event-joined');
          break;

        case 'player-play':
          livescaleDiv.classList.add('playing');
          break;
        case 'player-pause':
          livescaleDiv.classList.remove('playing');
          break;
        case 'player-ready':
          livescaleDiv.classList.add('video-ready');
          if (isReplay) {
            iframe.contentWindow.postMessage(
              {
                action: 'update-current-time',
                value: savedTime
              },
              '*'
            );
          }
          if (isPIP) {
            iframe.contentWindow.postMessage(
              {
                action: 'update-picture-in-picture',
                value: true
              },
              '*'
            );
            iframe.contentWindow.postMessage(
              {
                action: 'player-play'
              },
              '*'
            );
            if (
              'ontouchstart' in window ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0
            ) {
              livescaleDiv.classList.add('hover');
            }
            setTimeout(() => {
              livescaleDiv.classList.remove('hover');
            }, 3000);
          }
          break;
        default:
          break;
      }
    }
  });
  /* MESSAGES FROM IFRAME ENDS*/

  /* Find all link with diva embedded url */

  console.debug('livescale: âš™ï¸ Installing events handlers on buttons  ');

  document.addEventListener(
    'click',
    function (e) {
      // loop parent nodes from the target to the delegation node
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target?.href?.includes(livescaleURL) && target?.href?.includes(embeddedQS)) {
          currentTarget = e.target.href;
          e.preventDefault();
          openLivescaleMain(target.href);
          break;
        }
      }
    },
    true
  );

  const setOpenWithPip = function (replay) {
    setWithExpiry('ls-product-redirect', currentTime, 900000);
    setWithExpiry('ls-iframe-target', currentTarget, 900000);
    setWithExpiry('ls-is-replay', replay, 900000);
  };

  const removeLivescale = function () {
    if (iframe) {
      iframe.parentNode.removeChild(iframe);
      document.body.classList.remove('livescale-open');
      document.body.classList.remove('livescale-pip-open');
      livescaleDiv.classList.remove('event-joined-pip-open');
      window.removeEventListener('resize', debouncedCheckRatio, false);
      isPIP = false;
      iframe = null;
      localStorage.removeItem('ls-product-redirect');
      localStorage.removeItem('ls-iframe-target');
      localStorage.removeItem('ls-is-replay');
    }
  };

  /* ATTACH TO CLOSE BUTTON */
  let close = document.getElementById('close-btn');

  close.addEventListener('click', removeLivescale);

  /* switch to pip */
  const switchPIP = function () {
    iframe.contentWindow.postMessage(
      {
        action: 'update-picture-in-picture',
        value: true
      },
      '*'
    );
    document.body.classList.add('livescale-pip-open');
    isPIP = true;
  };

  /* click on pip opens full screen */
  const maxmize = document.getElementById('ls-expand');

  maxmize.addEventListener('click', () => {
    if (isPIP) {
      openLivescaleMain();
    } else {
      setOpenWithPip(isReplay);
      switchPIP();
    }
  });

  /* Create iframe */
  const createLivescaleIframe = function (href) {
    iframe = document.createElement('iframe');
    if (href) currentTarget = href;
    iframe.type = 'text/html';
    iframe.src = href || currentTarget;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.scrolling = 'no'; // It complains but still needed for chrome
    document.getElementById('livescale-modal-inner-content').appendChild(iframe);
    iframe.style.display = 'block';
    iframe.allow = 'autoplay; fullscreen;';
    iframe.allowtransparency = 'true';
    iframe.addEventListener('click', () => {
      if (!livescaleDiv.classList.contains('video-started'))
        livescaleDiv.classList.add('video-started');
    });
    if (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    ) {
      addTouchDeviceManager();
    }
  };

  /* MOBILE show the overlay*/
  const addTouchDeviceManager = function () {
    document.body.classList.add('touch-device');
  };

  /* Open iframe */
  const openLivescaleMain = function (href) {
    if (!iframe) {
      createLivescaleIframe(href);
    }
    document.body.classList.add('livescale-open');

    if (isPIP) {
      document.body.classList.remove('livescale-pip-open');
      isPIP = false;
      iframe.contentWindow.postMessage(
        {
          action: 'update-picture-in-picture',
          value: false
        },
        '*'
      );
    }
    checkRatio();
    window.addEventListener('resize', debouncedCheckRatio, false);
    if (currentTarget.includes('practice=true') && !livescaleDiv.classList.contains('practice')) {
      practice = true;
      livescaleDiv.classList.add('practice');
    }
  };

  const openLivescaleWithPIP = function () {
    createLivescaleIframe(currentTarget);
    document.body.classList.add('livescale-open');
    document.body.classList.add('livescale-pip-open');
    isPIP = true;
    if (currentTarget.includes('practice=true') && !livescaleDiv.classList.contains('practice')) {
      practice = true;
      livescaleDiv.classList.add('practice');
    }
    iframe.contentWindow.postMessage(
      {
        action: 'player-play'
      },
      '*'
    );
  };

  console.debug('livescale: âš™ï¸ Adding css styles...  ');

  installLivescaleStyle();

  // Check LocalStorage to see if it's redirected by LS
  const savedTime = getWithExpiry('ls-product-redirect');
  const iframeTarget = getWithExpiry('ls-iframe-target');
  isReplay = getWithExpiry('ls-is-replay');

  currentTarget = iframeTarget;
  if (iframeTarget) {
    openLivescaleWithPIP();
  }
  livescaleDiv.click();
  console.debug('livescale: âš™ï¸ Done ! ');
};

function waitForLivescaleButton(waitingTime = 5000) {
  return new Promise((resolve, reject) => {
    console.debug('livescale: Check all existing elements...');
    const links = document.querySelectorAll('a');
    for (let link of links) {
      if (link.href?.includes(livescaleURL) && link.href?.includes(embeddedQS))
        return resolve(link);
    }
    console.debug('livescale: Not found in existing elements ...');
    console.debug('livescale: Check the newly created elements ...');

    // not found in existing elements ...
    // check the newly created elements.
    const observer = new MutationObserver(mutations => {
      const disconnectionTimeout = setTimeout(() => {
        console.warn(
          "livescale: Timeout while waiting checking for the elements...falling back and loading the script anyway ! hoping it's in a PiP "
        );
        observer.disconnect();
        resolve();
      }, waitingTime);

      const links = document.querySelectorAll('a');
      for (let link of links) {
        if (link.href?.includes(livescaleURL) && link.href?.includes(embeddedQS)) {
          console.debug('livescale: Found the livescale button ! Great work ...');
          resolve(link);
          clearTimeout(disconnectionTimeout);
          observer.disconnect(); // disconnect the observer
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.debug('livescale: DOMContentLoaded fired!');

  waitForLivescaleButton(5000).then(el => {
    installHandler(el);
  });
});

setTimeout(() => {
  if (!window.livescale) {
    console.debug('livescale: livescale is not loaded ...');
    if (document.readyState === 'complete') {
      console.warn('livescale: loadingthe script manually!');
      waitForLivescaleButton(1000).then(el => {
        installHandler(el);
      });
    } else {
      console.debug('livescale: The dom is not ready... waiting for it to be ready');
      document.onreadystatechange = function () {
        if (document.readyState == 'complete') {
          console.warn('livescale: The dom is  ready... loading the script');
          waitForLivescaleButton(1000).then(el => {
            installHandler(el);
          });
        }
      };
    }
  } else {
    console.debug('Livescale is loaded ! no need for fallback ');
  }
}, 500);
