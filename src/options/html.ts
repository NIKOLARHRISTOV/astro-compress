import type { Options } from "html-minifier-terser";

export default {
	caseSensitive: true,
	collapseInlineTagWhitespace: false,
	collapseWhitespace: true,
	continueOnParseError: true,
	html5: true,
	ignoreCustomComments: [/^\s*#/, /^\s*\[/, /^\s*\]/, /^\s*!/, /^\s*\//],
	includeAutoGeneratedTags: true,
	keepClosingSlash: true,
	minifyCSS: true,
	minifyJS: true,
	minifyURLs: false,
	noNewlinesBeforeTagClose: true,
	preventAttributesEscaping: false,
	processConditionalComments: false,
	processScripts: [
		"application/ecmascript",
		"application/javascript",
		"application/json",
		"application/ld+json",
		"application/manifest+json",
		"application/schema+json",
		"application/vnd.geo+json",
		"application/x-web-app-manifest+json",
		"application/xhtml+xml",
		"application/xml",
		"image/svg+xml",
		// "module",
		// "modulepreload",
		// "template-module",
		"template-worker",
		"template",
		"text/css",
		"text/ecmascript",
		"text/html",
		"text/javascript",
		"text/markdown",
		"text/ng-template",
		"text/plain",
		"text/template",
		"text/x-dust",
		"text/x-dustjs",
		"text/x-eco-template",
		"text/x-eco",
		"text/x-handlebars-template",
		"text/x-handlebars",
		"text/x-jade-template",
		"text/x-jade",
		"text/x-less",
		"text/x-lodash-template",
		"text/x-lodash",
		"text/x-markdown",
		"text/x-mustache-template",
		"text/x-mustache",
		"text/x-pug-template",
		"text/x-pug",
		"text/x-sass",
		"text/x-scss",
		"text/x-stylus",
		"text/x-template",
		"text/x-underscore-template",
		"text/x-underscore",
		"text/x-yaml",
		"text/xml",
		// "worker-module",
		// "worker",
	],
	quoteCharacter: '"',
	removeAttributeQuotes: true,
	removeComments: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	removeTagWhitespace: false,
	sortAttributes: true,
	sortClassName: true,
	trimCustomFragments: true,
	useShortDoctype: false,
} satisfies Options & {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;
};
