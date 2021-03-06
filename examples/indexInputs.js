'use strict';

// =================================================================================
// App Configuration: Create Webhook + Enable Logging
// =================================================================================

const webhook = require('../index').Webhook;
const app = require('../index').Jovo;

// Enable Logging for Quick Testing
app.enableRequestLogging();
app.enableResponseLogging();

// Listen for post requests
webhook.listen(3000, function() {
    console.log('Example server listening on port 3000!');
});

webhook.post('/webhook', function(req, res) {
    app.handleRequest(req, res, handlers);
    app.execute();
});


// =================================================================================
// App Logic: Get name parameter and say hello
// =================================================================================

let handlers = {

    'LAUNCH': function() {
        app.tell('App launched.');
    },

    'NameIntent': function(name) {
        app.tell('Hello ' + name);
    },
};

// quick testing
// node indexInputs.js --intent NameIntent --parameter name=John

