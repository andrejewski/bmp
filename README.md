# bmp

Bmp (said /bump/) is a small command-line utility for quickly setting or incrementing the version in an NPM module's package.json file.

```bash
npm install --global bmp
```

## Usage

```bash

usage: bmp [command]

commands:
  (no args):      prints current version
  major, b, M:    increment major version (M.0.0)
  minor, m:       increment minor version (x.m.0)
  patch, p:       increment patch version (x.x.p)
  help:           prints the help menu
  (otherwise):    validates & sets version to arg

```

## Examples

```bash
bmp        # -> 1.0.4
bmp M      # -> 2.0.0
bmp m      # -> 2.1.0
bmp p      # -> 2.1.1
bmp 1.0.4  # -> 1.0.4
```

## Contributing 

If you find a bug, create an issue or be **fabulous** and fix the problem and write the tests up yourself in a coherent pull request.

Run tests with the `npm test` command.

Follow me on [Twitter](https://twitter.com/compooter) for updates or just for the lolz and please check out my other [repositories](https://github.com/andrejewski) if I have earned it. I thank you for reading.
