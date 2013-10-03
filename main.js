/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Simple extension that adds php highliting to commond drupal file extentions */
define(function (require, exports, module) {
    "use strict";

	var LanguageManager = brackets.getModule("language/LanguageManager");
		
		var php = LanguageManager.getLanguage("php");
		
	  // 
		// to add more extensions
		// the simple function to use is
		// php.addFileExtension("__EXTENSION__");	
		// 
		php.addFileExtension("module");	
	  php.addFileExtension("install");	
	  php.addFileExtension("info");	
    php.addFileExtension("inc");		
	
});
