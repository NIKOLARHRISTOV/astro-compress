/**
 * @module Option
 *
 */
declare const _default: Omit<{} & {
    CSS: {
        csso: {
            comments: false;
            forceMediaMerge: true;
            restructure: false;
        };
        lightningcss: {
            minify: true;
        };
    };
    HTML: {
        "html-minifier-terser": {
            caseSensitive: true;
            collapseInlineTagWhitespace: false;
            collapseWhitespace: true;
            continueOnParseError: true;
            html5: true;
            ignoreCustomComments: RegExp[];
            includeAutoGeneratedTags: true;
            keepClosingSlash: true;
            minifyCSS: true;
            minifyJS: true;
            minifyURLs: false;
            noNewlinesBeforeTagClose: true;
            preventAttributesEscaping: false;
            processConditionalComments: false;
            processScripts: string[];
            quoteCharacter: string;
            removeAttributeQuotes: true;
            removeComments: true;
            removeScriptTypeAttributes: true;
            removeStyleLinkTypeAttributes: true;
            removeTagWhitespace: false;
            sortAttributes: true;
            sortClassName: true;
            trimCustomFragments: true;
            useShortDoctype: false;
        };
    };
    Image: {
        sharp: {
            avif: {
                chromaSubsampling: string;
                effort: number;
                lossless: true;
            };
            gif: {
                effort: number;
            };
            jpeg: {
                chromaSubsampling: string;
                mozjpeg: true;
                trellisQuantisation: true;
                overshootDeringing: true;
                optimiseScans: true;
            };
            png: {
                compressionLevel: number;
                palette: true;
            };
            tiff: {
                compression: string;
            };
            webp: {
                effort: number;
                lossless: true;
            };
            heif: {
                effort: number;
                lossless: true;
            };
            sharp: {
                failOn: "error";
                sequentialRead: true;
                unlimited: true;
            };
        };
    };
    JavaScript: {
        terser: {
            ecma: 5;
            enclose: false;
            keep_classnames: false;
            keep_fnames: false;
            ie8: false;
            module: false;
            safari10: false;
            toplevel: false;
            format: {
                comments: false;
            };
        };
    };
    SVG: {
        svgo: {
            multipass: true;
            js2svg: {
                indent: number;
                pretty: false;
            };
            plugins: "preset-default"[];
        };
    };
    Map: {
        CSS: string;
        HTML: string;
        Image: string;
        JavaScript: string;
        SVG: string;
    };
    Parser: {
        CSS: ("csso" | "lightningcss")[];
        HTML: "html-minifier-terser";
        Image: "sharp";
        JavaScript: "terser";
        SVG: "svgo";
    };
    Cache: {
        Search: string;
        Folder: string;
    };
    Logger: number;
    Action: Omit<{} & {
        Read: ({ Input: e }: {
            Input: any;
        }) => Promise<string>;
        Wrote: ({ Buffer: e }: {
            Buffer: any;
        }) => Promise<any>;
        Passed: ({ Before, Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<boolean>;
        Failed: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Accomplished: ({ Input, Before, After }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: ({ File: e }: {
            File: any;
        }) => Promise<string | false>;
        Changed: (Plan: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<any>;
    }, "__proto__">;
    Exclude: boolean;
    File: string;
    Path: string;
}, "__proto__">;
export default _default;
