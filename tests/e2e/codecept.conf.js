export const config = {
  tests: './sample_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://jsonplaceholder.typicode.com'
    },
    JSONResponse: {},
  },
  plugins: {
    htmlReporter: {
      enabled: true,
      require: '../../index.js',
      output: './output',
      reportFileName: 'report.html'
    }
  },
  name: 'e2e-tests'
}
