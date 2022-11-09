var MongoClient = require('mongodb').MongoClient,
    Hapi = require('hapi');
var fs = require('fs');

var url = 'mongodb://servername.com:27017/QuickDocs'; // DB we are connected to

var server = new Hapi.Server();

// server.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

server.connection({
    port:8080
})

server.route( [
    // Get list
    {
        method: 'GET',
        path: '/api/links',
        config: {json: {space: 2},
        cors: { // Allow for Cross Domain
              origin: ['*'],
              additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }, // Format look in browser
        handler:
        function(request, reply) {
          var findObject = {};
          for (var key in request.query) {
              console.log(request.query[key]);
            findObject[key] = request.query[key];
          }
            collection.find(findObject).toArray(function(error, links) {
              // collection.find().toArray(function(error, links) {
              console.log(links);
              fs.writeFile('docObjects.json', JSON.stringify(links, null, 3));
              reply(links);

            });
            // reply ("Getting link list!");
        }
    },
    // Add new tour
    {
        method: 'POST',
        path: '/api/links',
        config: {json: {space: 2},
        cors: { // Allow for Cross Domain
              origin: ['*'],
              additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }, // Format look in browser
        handler: function(request, reply) {
            // reply ("Adding new tour");
            collection.insertOne(request.payload, function(error, result) {
                reply(request.payload);
            });
        }
    },
    // Get a single tour
    {
        method: 'GET',
        path: '/api/links/{linkID}',
        config: {json: {space: 2},
        cors: { // Allow for Cross Domain
              origin: ['*'],
              additionalHeaders: ['cache-control', 'x-requested-with']
          }
        }, // Format look in browser
        handler: function(request, reply) {
            // reply ("Retrieving " + request.params.name);
            collection.findOne({"linkID":request.params.linkID}, function(error, link){
              reply(link);
            });
        }
    },
    // Update a single tour
    {
        method: 'PUT',
        path: '/api/links/{linkID}',
        config: {json: {space: 2},
          cors: { // Allow for Cross Domain
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }//,
          // validate: {
          //   params: { //`id` is required field and can only accept string data
          //   // id: Joi.string().required()
          //     // id:
          //   },
          //   payload: {
          //     // name: Joi.string(),
          //     // age: Joi.number()
          //   }
          // }
        }, // Format look in browser

        handler: function(request, reply) {
            // request.payload variables
            // reply ("Updating " + request.params.name);

            if(request.query.replace == "true") { // Replace the whole Object
              request.payload.linkID = request.params.linkID;
              collection.replaceOne({"linkID":request.params.linkID}, request.payload, function(error, results) {
                collection.findOne({"linkID":request.params.linkID}, function(error, results) {
                  reply(results);
                });
                // reply(results);
              })
            } else { // If update
            collection.updateOne({"linkID":request.params.linkID},
            {set: request.payload}, function(error, results) {
              collection.findOne({"linkID":request.params.linkID}, function(error, results) {
                reply(results);
              });
            }
        );
        }
      }
    },
    // Delete a single link
    {
          method: 'DELETE',
          path: '/api/links/{name}',
          config: {json: {space: 2},
          cors: { // Allow for Cross Domain
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
          }, // Format look in browser
          handler: function(request, reply) {
              collection.deleteOne({linkID:request.params.name},
              function(error, results) {
              reply ().code(204); // Empty Body, ok for delete
            });
          }
      },
    {
        method: 'GET',
        path: '/',
        handler: function(request, reply) {
            reply( "Hello world from Hapi/Mongo example.")
        }
    }
])

MongoClient.connect(url, function(err, db) {
    console.log("connected correctly to server");
    collection = db.collection('DocObjects');
    server.start(function(err) {
        console.log('QD: Hapi is listening to http://localhost:8080')
    })
})
