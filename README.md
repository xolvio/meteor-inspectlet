Meteor Inspectlet
=================

Wrapper around [Inspectlet](http://www.inspectlet.com/), a service that enables you to record the actions user take on your site and play them back later.

## Features

Inspectlet lets you playback everything visitors do on your site so you can learn about how your
app is being used.

[Find out more / Sign up for a free account](http://www.inspectlet.com/?u=xolvio)

### Click Heatmaps
![](https://raw.githubusercontent.com/xolvio/meteor-inspectlet/master/images/click-heatmap.png)

### Mouse movement Heatmaps
![](https://raw.githubusercontent.com/xolvio/meteor-inspectlet/master/images/eyetracking-heatmap.png)

### Scroll Heatmaps
![](https://raw.githubusercontent.com/xolvio/meteor-inspectlet/master/images/scroll-heatmap.png)

[Find out more / Sign up for a free account](http://www.inspectlet.com/?u=xolvio)

## Installation

`meteor add xolvio:inspectlet`

and set your site id in the Meteor settings like this:

```
{
  "public": {
    "inspectlet": {
      "id": "1234567890"
    }
  }
}
```

## Usage

This package wires up Inspectlet into the Meteor lifecycle as follows:

* Inspectlet is loaded from CDN on startup
* If IronRouter is detected, virtualPageViews are tagged
* Logged in users are identified and their name + emails are sent
* The platform is sent to distinguish between a web or cordova Meteor build

The package also exposes an `Inspectlet` object on the client. This is the same as the `__insp`
object in the docs. You can use this to `push` and to do so in a chained fashion, for example you
can write:

```
Inspectlet
  .push(['myVar', '1234'])
  .push(['anotherVar', '456']);
```

See the [full Inspectlet documentation](https://www.inspectlet.com/docs).
