// Embed script for integrating Loomis Sayles content
// Adds styles and scripts from the built project to the current page

(function() {
  'use strict';

  // Configuration of resource paths
  const config = {
    cssFile: './static/index.css',
    jsFile: './static/index.js'
  };
  
  // HTML fragments (will be replaced during build)
  const sceneHtml = `@scene`;
  const sectionsHtml = `@sections`;
  
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
    
    // console.log('✅ Scene added to document');
  }

  // Add sections to the element where this script is located
  function addSections() {
    // Check if there is HTML for sections
    if (!sectionsHtml || sectionsHtml === '@sections') {
      console.warn('Sections HTML not found');
      return;
    }
    
    // Find current script
    const currentScript = document.currentScript || 
      document.querySelector('script[src*="inject.js"]') ||
      document.querySelector('script[src*="embed.js"]') ||
      document.scripts[document.scripts.length - 1];
    
    if (currentScript && currentScript.parentElement) {
      // Create temporary element for parsing HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = sectionsHtml;
      
      // Insert elements at the very beginning of parent element
      const parentElement = currentScript.parentElement;
      while (tempDiv.firstChild) {
        parentElement.insertBefore(tempDiv.firstChild, parentElement.firstChild);
      }
      
      // console.log('✅ Sections added to:', parentElement);
    } else {
      console.warn('Could not find parent element for sections');
    }
  }

  // Add JS file to the end of body
  function addJS() {
    const script = document.createElement('script');
    script.type = 'module';
    script.crossOrigin = 'anonymous';
    script.src = config.jsFile;
    

    // console.log('✅ JS file added:', config.jsFile);
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
      addCSS();
      
      // Add scene right after body
      addScene();
      
      // Add sections to parent element of script
      addSections();
      
      // Add JS to the end of body
      addJS();
      
      // console.log('Embed script loaded successfully');
    } catch (error) {
      console.error('Error loading embed script:', error);
    }
  }

  // Start initialization
  init();

})(); 