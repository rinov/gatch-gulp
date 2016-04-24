# gatch-gulp
These are `gatch` configuration files.
- package.json
- gulpfile.js
- gatch-config.json

## Usage
  Set up:`$ gatch init`
  Starting gatch:`$ gatch start`
  Cheking version:$ `gatch -v`

## Introduction

`1. $mkdir mysite`

`2. $cd mysite`

`3. $gatch init`

`4. $npm install`

`5. $vi gatch-config.json`

`6. $gatch start`

First , you make a new directory for work.And move your working directory, run `gatch init` and `npm install` to install dependencies. Then, modify `gatch-config.json` to your information. After you set up gatch-config.json you can run `gatch start` command , And you'll see your web site on WebBrowser. After you edit  `watches` in your `gatch-config.json`,and if those files are changed that will reflect on your browser when you save a  file. So it can help your reloading task and it is possible to syncronize of browser on multiple access.

## About gatch-config.json

- `targetDir` Set your root working directory. (Default:common)
- `target` Your index.html file name. (Default:index.html)
- `watches` Please set your  files or directory that you want to monitoring of change.(Default:common/*.html)
- `port` Working port number. (Default:3000)
- `openBrowser` Launching browser when you perform to command.(Default:true)

Section `watches` can use wild card,Like this...
- `common/js/*.js`
- `common/**`

##Warning
if you made html file.Like this ...
`<!DOCTYLE html>
hello gatch!
</html>`
but it doesn't work.because it has `html validation`.
So in this case , `<html>` tag and `<body>` tag are required.And it will work.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rinov/gatch. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

