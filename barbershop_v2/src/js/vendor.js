import jQuery from 'jquery';
import svg4everybody from 'svg4everybody';

// Import jQuery plugins
import 'slick-carousel';

// Expose libraries to global Window object
window.$ = window.jQuery = jQuery;

// Manually initialize third-party libraries
svg4everybody();
