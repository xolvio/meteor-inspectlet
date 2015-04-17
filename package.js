Package.describe({
  name: 'xolvio:inspectlet',
  version: '1.0.1',
  summary: 'Inspectlet in an easy to use package.',
  git: 'https://github.com/xolvio/meteor-inspectlet',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.3.1');
  api.export('Inspectlet', 'client');
  api.export('InspectletInternals', 'client', {testOnly: true});
  api.addFiles('inspectlet.js', 'client');
});
