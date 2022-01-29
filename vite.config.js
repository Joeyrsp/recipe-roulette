export default {
    esbuild: {
        jsxFactory: "h",
        jsxInject: `import h from 'hyperapp-jsx-pragma'`,
    },
    css: {
        modules: {
            localsConvention: "camelCase",
        },
    },
    base: "/recipe-roulette/",
    root: "src",
    build: {
        outDir: "../docs",
    },
};
