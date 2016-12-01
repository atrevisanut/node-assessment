///////////////////////////////////
//        EXTERNAL MODULES       //   
///////////////////////////////////
var express = require('express');
var bodyParser = require('body-parser');

///////////////////////////////////
//             JSON              //   
///////////////////////////////////
var user = require('./users.json');

///////////////////////////////////
//         CONTROLLER            //   
///////////////////////////////////
var mainCtrl = require('./controllers/mainCtrl.js');

///////////////////////////////////
//            EXPRESS            //   
///////////////////////////////////
var app = express();
app.use(bodyParser.json());

///////////////////////////////////
//             GETS              //   
///////////////////////////////////

app.get('/api/users/admin/:type', mainCtrl.getUsersByType);
app.get('/api/filtered', mainCtrl.getUsersFiltered);
app.get('/api/users', mainCtrl.getUsersByLanguage);
app.get('/api/users/:id', mainCtrl.getUserById);
app.get('/api/users', mainCtrl.getUsers);

///////////////////////////////////
//             POSTS             //   
///////////////////////////////////

app.post('/api/users', mainCtrl.createUser);
app.post('/api/users/admin/:admin', mainCtrl.createAdmin);

///////////////////////////////////
//             PUTS              //   
///////////////////////////////////

app.put('/api/users/language/:id', mainCtrl.updateLanguageById);
app.put('/api/users/forums/:id', mainCtrl.addToFavorites);
app.put('/api/users/:id', mainCtrl. updateUserById);

///////////////////////////////////
//             DELETES           //   
///////////////////////////////////

app.delete('/api/users/forums/:id', mainCtrl.deleteItemFromFavorites);
app.delete('/api/users', mainCtrl.deleteByQuery)

///////////////////////////////////
//             PORT              //   
///////////////////////////////////

var port = 3000;
app.listen(port, function(){
    console.log('so this is what level ' + port + ' looks like... beautiful');
})