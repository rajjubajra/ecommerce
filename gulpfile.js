const {src, dest, watch, series} = require('gulp');

/**
 * 
 * Move Files and Folder from 
 * 'build' folder to 
 * ../tw2-*
 * 
 */

/** IMPORTANT: 
 * Change working project Folder 
 * in following "src" and "watch" */



function moveFiles(){
  return src('./shopify/shopify-tw2-01/build/**/*.*')
  .pipe(dest('./themes/shopify/tw2-01'));
}

function watchTask(){
  watch('./t-shirt-store/build/**/*.*');
}

//default gulp
exports.default = series(moveFiles);