const express = require('express');
const rsvpRouter = express.Router();

rsvpRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the rsvps to you');
})
.post((req, res) => {
    res.end(`Will add the rsvp: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /people');
})
.delete((req, res) => {
    res.end('Deleting all rsvps');
});


rsvpRouter.route('/:rsvpId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the rsvp: ${req.params.rsvpId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /campsites/ ${req.params.rsvpId}`);
})
.put((req, res) => {
    res.write(`Updating the campsites: ${req.params.rsvpId}.`);
    res.end(` Will update the campsite: ${req.body.name} with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting your campsites ${req.params.rsvpId}`);
});

module.exports = rsvpRouter;


// // a catch all routing method
// campsiteRouter.route('/')
// .all((req, res, next) => {
//     res.statusCode = 200;
//     // saying we are sending back plain text in the response body
//     res.setHeader('Content-Type', 'text/plain');
//     // pass control of the application routing body to the next relevant routing method so it may continue
//     next();
// })
// .get((req, res) => {
//     res.end('Will send all the campsites to you');
// })
// .post((req, res) => {
//     res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
// })
// .put((req, res) => {
//     res.statusCode = 403;
//     res.end('PUT operation not supported on /campsites');
// })
// .delete((req, res) => {
//     res.end('Deleting all campsites');
// });

// // export campsie router
// module.export = campsiteRouter;