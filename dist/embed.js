// Embed script for integrating Loomis Sayles content
// Adds styles and scripts from the built project to the current page

(function() {
  'use strict';

  // Configuration of resource paths
  const config = {
    cssFile: './assets/index.css',
    jsFile: './assets/index.js'
  };
  
  // HTML fragments (will be replaced during build)
  const sceneHtml = ``;
  const sectionsHtml = ``;
  
  // Protect variables from being removed by the bundler
  window.LOOMIS_EMBED_DATA = { sceneHtml, sectionsHtml };

  // Add CSS file to the end of head
  function addCSS() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    link.href = config.cssFile;
    
    // Add to the very end of head
    document.head.appendChild(link);
  }

  // Add scene right after body
  function addScene() {
    // Check if there is HTML for the scene
    if (!sceneHtml || sceneHtml === '@scene') {
      console.warn('Scene HTML not found');
      return;
    }
    
    // Create temporary element for parsing HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = sceneHtml;
    
    // Insert elements right after the opening body tag
    while (tempDiv.firstChild) {
      document.body.insertBefore(tempDiv.firstChild, document.body.firstChild);
    }
    
    console.log('✅ Scene added to document');
  }

  // Add JS file to the end of body
  function addJS() {
    const script = document.createElement('script');
    script.type = 'module';
    script.crossOrigin = 'anonymous';
    script.src = config.jsFile;
    

    console.log('✅ JS file added:', config.jsFile);
    // Add to the very end of body
    document.body.appendChild(script);
  }

  // Main initialization function
  function init() {
    // Check if document is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    try {
      // Add CSS to head
    //   addCSS();
      
    //   // Add scene right after body
    //   addScene();
      
    //   // Add JS to the end of body
    //   addJS();
      
      console.log('Embed script loaded successfully');
    } catch (error) {
      console.error('Error loading embed script:', error);
    }
  }

  // Start initialization
  init();

})(); 