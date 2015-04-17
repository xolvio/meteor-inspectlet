Meteor Inspectlet
=================

## Installation

Inspectlet lets you playback everything visitors do on your site.

## Features

### Click Heatmaps

### Mouse movement Heatmaps

### Scroll Heatmaps

## Sign Up

[Sign up for a free account](http://www.inspectlet.com/?u=xolvio)

## Usage

This package exposes an `Inspectlet` object on the client. This is the same as the `__insp` object
in the docs. You can use this to `push` and to do so in a chained fashion, for example you can
write:

```
Inspectlet
  .push(['myVar', '1234'])
  .push(['anotherVar', '456']);
```

See the [full Inspectlet documentation](https://www.inspectlet.com/docs).