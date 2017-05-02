SystemJS.config({
    map: {
        "@angular/platform-browser": "node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
        "@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "@angular/compiler": "node_modules/@angular/compiler/bundles/compiler.umd.js",
        "@angular/core": "node_modules/@angular/core/bundles/core.umd.js",
        "@angular/common": "node_modules/@angular/common/bundles/common.umd.js",
        "rxjs": "node_modules/rxjs",
    },
    packages: {
        "app": {
            defaultExtension: "js"
        },
        "rxjs": {
            defaultExtension: "js"
        }
    }
});
