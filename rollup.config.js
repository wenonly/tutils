import json from 'rollup-plugin-json';

export default {
    input: 'src/index.js',
    output: {
      file: 'tutils.js',
      format: 'esm'
    },
    plugins: [ json() ]
  };