# codeceptjs-html-reporter

Beautiful HTML Reporter for CodeceptJS

## Installation

```bash
npm install codeceptjs-html-reporter --save-dev
```

## Usage

Add to your `codecept.conf.js`:

```js
export const config = {
  plugins: {
    htmlReporter: {
      enabled: true,
      require: 'codeceptjs-html-reporter',
      output: './output',
      reportFileName: 'report.html'
    }
  }
}
```

## Configuration

| Option | Default | Description |
|--------|---------|-------------|
| `output` | `./output` | Output directory for reports |
| `reportFileName` | `report.html` | Name of the HTML report file |
| `includeArtifacts` | `true` | Include screenshots and artifacts |
| `showSteps` | `true` | Show individual test steps |
| `showSkipped` | `true` | Show skipped tests |
| `showMetadata` | `true` | Show test metadata |
| `showTags` | `true` | Show test tags |
| `showRetries` | `true` | Show retry attempts |
| `exportStats` | `false` | Export statistics to JSON |
| `exportStatsPath` | `./stats.json` | Path for stats export |
| `keepHistory` | `false` | Keep test history |
| `historyPath` | `./test-history.json` | Path for history file |
| `maxHistoryEntries` | `50` | Maximum history entries |

## Example

```js
export const config = {
  plugins: {
    htmlReporter: {
      enabled: true,
      require: 'codeceptjs-html-reporter',
      output: './output',
      reportFileName: 'report.html',
      includeArtifacts: true,
      showSteps: true,
      exportStats: true,
      keepHistory: true
    }
  }
}
```

## License

MIT
