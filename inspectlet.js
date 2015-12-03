/* globals Inspectlet: true, InspectletInternals: true */

'use strict';

// Documentation: https://www.inspectlet.com/docs
Inspectlet = {
  push: function (data) {
    if (window.__insp) {
      window.__insp.push(data);
    }

    return this;
  },

  tagSession: function (tagData) {
    this.push(['tagSession', tagData]);

    return this;
  }
};

InspectletInternals = {
  init: function () {
    var self = this;
    var inspectletSettings = Meteor.settings.public.inspectlet;

    if (inspectletSettings && inspectletSettings.id) {
      window.__insp = window.__insp || [];

      var websiteId = parseInt(inspectletSettings.id, 10);
      Inspectlet.push(['wid', websiteId]);

      $(window).on('load', self.injectInspectlet);

      Meteor.startup(function () {

        if (Meteor.isCordova) {
          Inspectlet.push(['meteor-platform', 'cordova']);
        } else {
          Inspectlet.push(['meteor-platform', 'web']);
        }

        // check if IronRouter is being used
        var Router = window.Router;
        if (Router && Router.onAfterAction) {
          Router.onAfterAction(function () {
            Inspectlet.push(['virtualPage']);
          });
        }

        Accounts.onLogin(function () {
          var user = Meteor.user();

          if (user) {
            Inspectlet
              .push(['identify', user._id])
              .push(['name', user.profile.name])
              .push(['tagSession', {email: self.getEmail(user)}]);
          }
        });

      });
    } else {
      console.error(
        'Inspectlet is not loaded because ' +
        '"Meteor.settings.public.inspectlet.id" is not set.'
      );
    }
  },

  getEmail: function (user) {
    if (user) {
      if (user.registered_emails) {
        return user.registered_emails[0];
      } else if (user.emails) {
        return user.emails[0];
      }
    }

    return null;
  },

  injectInspectlet: function () {
    var insp = document.createElement('script');
    insp.type = 'text/javascript';
    insp.async = true;
    insp.id = "inspsync";
    insp.src = ('https:' === document.location.protocol ? 'https' : 'http') +
    '://cdn.inspectlet.com/inspectlet.js';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(insp, x);
  }
};

Meteor.startup(function () {
  InspectletInternals.init();
});
