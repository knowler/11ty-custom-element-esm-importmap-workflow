module.exports = config => {
	config.addShortcode('importmap', function() {
		const importmap = {
			imports: {
        app: "./app.js",
        preact: "https://unpkg.com/htm@3.1.0/preact/standalone.module.js",
        'preact-custom-element': "https://unpkg.com/preact-custom-element@4.2.1/dist/preact-ce.module.js",
			},
		};

		return `
			<script async src="https://unpkg.com/es-module-shims@1.3.0/dist/es-module-shims.js"></script>
			<script async src="https://unpkg.com/construct-style-sheets-polyfill@3.0.4/dist/adoptedStyleSheets.js"></script>
			<script type="importmap-shim">${JSON.stringify(importmap)}</script>
			<script type="module-shim">import 'app';</script>
		`.trim();
	});
};
