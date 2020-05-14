define(['csui/utils/contexts/page/page.context',
  'otcsw/widgets/noteview/noteview.view', './noteview.mock.js'
], function (PageContext, NoteviewView, mock) {
  'use strict';

  describe('NoteviewView', function () {
    beforeEach(function () {
      // Make sure that the server connection is mocked in the test specs
      mock.enable();
    });

    afterEach(function () {
      // Remove the mocks not to interfere with other test specs
      mock.disable();
    });

    describe('given a server connection with the person to greet', function () {

      // Declare objects used in the checks
      var context, view;

      // Initialize the objects first here to enable ddescribe and iit
      // tricks; wait until the model gets fetched by the CS REST API
      // mock before any spec is executed
      beforeEach(function (done) {
        context = new PageContext({
          factories: {
            connector: {
              connection: {
                url: '//server/otcs/cs/api/v1',
                supportPath: '/support',
                session: {
                  ticket: 'dummy'
                }
              }
            }
          }
        });

        view = new NoteviewView({
          context: context
        });

        view.render();

        context
            .fetch()
            .done(done);
      }, 5000);

      

    });

  });

});
