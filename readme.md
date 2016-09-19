# emoji-search

I made [muan/emojilib](https://github.com/muan/emojilib) because I wanted to build an emoji searcher. By now I have 3 projects doing emoji search, one web([emoji](http://emoji.muan.co)), one Electron app([mojibar](https://github.com/muan/mojibar)), one mruby command line tool([emoji-cli](https://github.com/muan/emoji-cli)), and each duplicating the search logic. About time this happens!

## Usage

```javascript
> const es = require('emoji-search')
> es('panda')
[ '🐼', '🎍' ]
> es('v')[0]
✌️
```

## Development

```
$ npm install
```

# OK

![](https://cl.ly/2e011s2B3m1E/Image%202016-09-17%20at%2010.44.25%20AM.gif)

Sup.
