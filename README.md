# deity-fetcher
This is a simple script that fetches deities from several mythologies.

You can fetch all deities, random deities, or deities by select mythos.

```javascript
const deities = require('deity-fetcher');

const randomDeity = deity.random()
// randomDeity === Bacchus

const randomDeities = deity.random(3)
// randomDeities === ['Loki', 'Jupiter', 'Bacchus']
```
