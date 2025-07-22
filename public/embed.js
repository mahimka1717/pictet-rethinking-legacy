// Embed script for integrating Loomis Sayles content
// Adds styles and scripts from the built project to the current page

(function() {
  'use strict';

  // Configuration of resource paths
  const config = {
    cssFile: 'https://ft-shorthand-prod-eu.s3.amazonaws.com/partnercontent/pictet/rethinking-legacy/dist/assets/index.css',
    jsFile: 'https://ft-shorthand-prod-eu.s3.amazonaws.com/partnercontent/pictet/rethinking-legacy/dist/assets/index.js'
  };
  
  // HTML fragments (will be replaced during build)
  const articleHtml = `@article`;

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
  function addArticle() {
    // Check if there is HTML for the article
    if (!articleHtml || articleHtml === '@article') {
      console.warn('Article HTML not found');
      return;
    }
    // Find the target container
    const container = document.getElementById('ag-infographic');
    if (!container) {
      console.warn("Element with id 'ag-infographic' not found");
      return;
    }
    // Insert HTML into the container
    container.innerHTML = articleHtml;
    // console.log('✅ Article HTML injected into #ag-infographic');
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
      addArticle();
      
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