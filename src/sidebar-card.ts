
// Returns the Home Assistant Sidebar element
function getSidebar() {
  let sidebar = document.querySelector('home-assistant');
  sidebar = sidebar && sidebar.shadowRoot;
  sidebar = sidebar && sidebar.querySelector('home-assistant-main');
  sidebar = sidebar && sidebar.shadowRoot;
  sidebar = sidebar && sidebar.querySelector('ha-drawer ha-sidebar');
  return sidebar;
}

function setLoading() {
  const newImage = document.createElement('img');

  // Set the source (src) attribute to the desired image URL
  newImage.src = 'https://vidabyfermax.com/wp-content/uploads/2018/06/LOGO_VIDA_BLUE.png';

  // Get a reference to the SVG element you want to replace
  const svgElement = document.querySelector('#ha-launch-screen svg');

  // Replace the SVG element with the new image element
  if (svgElement && svgElement.parentNode) {
    svgElement.parentNode.replaceChild(newImage, svgElement);
  } else {
    console.error('SVG element not found. Make sure the selector is correct.');
  }
}

// ##########################################################################################
// ###   The Sidebar Card code base initialisation
// ##########################################################################################

function buildSidebar() {
  console.log("hi")
  const hassSidebar = getSidebar();
  // Get a reference to the <div class="title"> element
  const titleDiv = hassSidebar.shadowRoot.querySelector('.title');

  // Create a new img element
  const imageElement = document.createElement('img');

  // Set the src attribute of the img element to the image URL
  imageElement.src = 'https://vidabyfermax.com/wp-content/uploads/2018/06/LOGO_VIDA_BLUE.png'; // Replace with your image URL

  // Apply styles to the titleDiv
  titleDiv.style.width = 'auto';
  titleDiv.style.height = '100%';
  titleDiv.style.boxSizing = 'border-box';
  titleDiv.style.margin = 'auto';
  titleDiv.style.padding = '7px';

  // Apply styles to the imageElement
  imageElement.style.width = '100%';
  imageElement.style.height = '100%';
  imageElement.style.margin = 'auto';

  // Clear the existing content of the titleDiv
  titleDiv.innerHTML = '';

  // Append the img element to the titleDiv
  titleDiv.appendChild(imageElement);

  (function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://vidabyfermax.com/wp-content/uploads/2017/03/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
  })();
// Append the titleDiv to the document or a parent container
// Example: document.body.appendChild(titleDiv);
  // const lovelace = await getConfig();
  // if (lovelace.config.sidebar) {
  //   const sidebarConfig = Object.assign({}, lovelace.config.sidebar);
  //   if (!sidebarConfig.width || (sidebarConfig.width && typeof sidebarConfig.width == 'number' && sidebarConfig.width > 0 && sidebarConfig.width < 100) || (sidebarConfig.width && typeof sidebarConfig.width == 'object')) {
  //     const root = getRoot();
  //     const hassSidebar = getSidebar();
  //     const appDrawerLayout = getAppDrawerLayout();
  //     const appDrawer = getAppDrawer();
  //     const offParam = getParameterByName('sidebarOff');

  //     changeSidebar(hassSidebar);


  //     if (sidebarConfig.hideTopMenu && sidebarConfig.hideTopMenu === true && offParam == null) {
  //       if (root.shadowRoot.querySelector('ch-header')) root.shadowRoot.querySelector('ch-header').style.display = 'none';
  //       if (root.shadowRoot.querySelector('app-header')) root.shadowRoot.querySelector('app-header').style.display = 'none';
  //       if (root.shadowRoot.querySelector('ch-footer')) root.shadowRoot.querySelector('ch-footer').style.display = 'none';
  //       if (root.shadowRoot.getElementById('view')) root.shadowRoot.getElementById('view').style.minHeight = 'calc(100vh)';
  //     }
  //     if (sidebarConfig.hideHassSidebar && sidebarConfig.hideHassSidebar === true && offParam == null) {
  //       if (hassSidebar) {
  //         hassSidebar.style.display = 'none';
  //       }
  //       if (appDrawerLayout) {
  //         appDrawerLayout.style.marginLeft = '0';
  //         appDrawerLayout.style.paddingLeft = '0';
  //       }
  //       if (appDrawer) {
  //         appDrawer.style.display = 'none';
  //       }
  //     }
  //     if (!sidebarConfig.breakpoints) {
  //       sidebarConfig.breakpoints = {
  //         tablet: 1024,
  //         mobile: 768,
  //       };
  //     } else if (sidebarConfig.breakpoints) {
  //       if (!sidebarConfig.breakpoints.mobile) {
  //         sidebarConfig.breakpoints.mobile = 768;
  //       }
  //       if (!sidebarConfig.breakpoints.tablet) {
  //         sidebarConfig.breakpoints.tablet = 1024;
  //       }
  //     }

  //     let appLayout = root.shadowRoot.querySelector('div');
  //     let css = createCSS(sidebarConfig, document.body.clientWidth);
  //     let style: any = document.createElement('style');
  //     style.setAttribute('id', 'customSidebarStyle');
  //     appLayout.appendChild(style);
  //     style.type = 'text/css';
  //     if (style.styleSheet) {
  //       // This is required for IE8 and below.
  //       style.styleSheet.cssText = css;
  //     } else {
  //       style.appendChild(document.createTextNode(css));
  //     }
  //     // get element to wrap
  //     let contentContainer = appLayout.querySelector('#view');
  //     // create wrapper container
  //     const wrapper = document.createElement('div');
  //     wrapper.setAttribute('id', 'customSidebarWrapper');
  //     // insert wrapper before el in the DOM tree
  //     contentContainer.parentNode.insertBefore(wrapper, contentContainer);
  //     // move el into wrapper
  //     let sidebar = document.createElement('div');
  //     sidebar.setAttribute('id', 'customSidebar');
  //     wrapper.appendChild(sidebar);
  //     wrapper.appendChild(contentContainer);
  //     await buildCard(sidebar, sidebarConfig);
  //     //updateStyling(appLayout, sidebarConfig);
  //     subscribeEvents(appLayout, sidebarConfig, contentContainer, sidebar);
  //     setTimeout(function() {
  //       updateStyling(appLayout, sidebarConfig);
  //     }, 1);
  //   } else {
  //     error2console('buildSidebar', 'Error sidebar in width config!');
  //   }
  // } else {
  //   log2console('buildSidebar', 'No sidebar in config found!');
  // }
}

console.info('JAREAX');
buildSidebar();
setLoading();

