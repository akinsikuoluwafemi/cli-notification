### CLI ALERTS

## Usage

```
import {alert} from 'cli-notification

alert({
  type: `success`,
  msg: `Everything is complete!`
})

alert({
  type: `info`,
  msg: `Dont forget to use lowercase`
})
alert({
  type: `warning`,
  msg: `You didn't add something`
})
alert({
  type: `error`,
  msg: `Something went wrong`
})


```
