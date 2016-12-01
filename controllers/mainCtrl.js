var user = require('./../users.json');
var person = user;
module.exports = {

    ///////////////////////////////////
    //             GETS              //   
    ///////////////////////////////////
    getUsers: function(req, res, next){
        res.status(200).json(user);
    },



    getUsersFiltered: function(req, res, next){
            var arr=[];
            if(req.query.language){  
                var ans = [];
                for(var i = 0; i < person.length; i++){
                    if(req.query.language === person[i].language){
                        arr.push(person[i]);
                    }
                }        
            }
            else if(req.query.age){
                var ans = [];
                for(var i = 0; i < person.length; i++){
                    if(req.query.age == person[i].age){
                        arr.push(person[i]);
                    }
                }
            }
            else if(req.query.city){
                var ans = [];
                for(var i = 0; i < person.length; i++){
                    if(req.query.city === person[i].city){
                        arr.push(person[i]);
                    }
                }
            }
            else if(req.query.state){
                            var ans = [];
                for(var i = 0; i < person.length; i++){
                    if(req.query.state === person[i].state){
                        arr.push(person[i]);
                    }
                }
            }
            else if(req.query.gender){
                            var ans = [];
                for(var i = 0; i < person.length; i++){
                    if(req.query.gender === person[i].gender){
                        arr.push(person[i]);
                    }
                }
            }
            res.status(200).json(arr);
    },



    getUsersByLanguage: function(req, res, next){
        if(req.query.language){
            person = person.filter(function(person){
                return person["language"] === req.query.language;
            })
        }
        res.status(200).json(person);
    },



    getUsersByType: function(req, res, next){
        if(req.params.type){
            person = person.filter(function(person){
                return person["type"] === req.params.type;
            })
        }
        res.status(200).json(person);
    },



    getUserById: function(req, res, next){
        var ans = [];
            for(var i = 0; i < person.length; i++){
                if(req.params.id == person[i].id){
                     ans.push(person[i]);
                }
            }
            res.status(200).json(ans);
    },



    ///////////////////////////////////
    //             POSTS             //   
    ///////////////////////////////////
    createUser: function(req, res, next){
        person.push(req.body);
        res.json(person);
    },



    createAdmin: function(req, res, next){
        var slot = req.body;
        var newUser = {
            id: slot.id,
            first_name: slot.first_name,
            last_name: slot.last_name,
            email: slot.email,
            gender: slot.gender,
            language: slot.language,
            age: slot.age,
            city: slot.city,
            state: slot.state,
            type: req.params.admin,
            favorites: slot.favorites
        }
       person.push(newUser);
       res.status(200).json(newUser);
    },



    ///////////////////////////////////
    //             PUTS              //   
    ///////////////////////////////////
    updateLanguageById: function(req, res, next){
        var personAtI = [];
        for(var i = 0; i < person.length; i++){
            if(req.params.id == person[i].id){
                person[i].language = req.body.language;
                personAtI.push(person[i]);
            }
        }
        res.status(200).json(personAtI);
    },



    addToFavorites: function(req, res, next){
        var personAtI = [];
        for(var i = 0; i < person.length; i++){
            if(req.params.id == person[i].id){
                person[i].favorites.push(req.body.favorites);
                personAtI.push(person[i]);
            }
        }
        res.status(200).json(personAtI);
    },



    updateUserById: function(req, res, next){
        var personAtI = [];
        for(var i = 0; i < person.length; i++){
            if(req.params.id == person[i].id){
                person[i] = req.body;
                personAtI.push(person[i]);
            }
        }
        res.status(200).json(personAtI);
    },

    ///////////////////////////////////
    //             DELETES           //   
    ///////////////////////////////////
    deleteItemFromFavorites: function(req, res, next){
        var personAtI = [];
        for(var i = 0; i < person.length; i++){
            
            if(req.params.id == person[i].id){
               for(var j = 0; j < person[i].favorites.length; j ++){
                   if(req.query.favorites === person[i].favorites[j]){
                       person[i].favorites.splice(j,1);
                       personAtI.push(person[i]);
                   }
               }
            }
        }
        res.status(200).json(personAtI);
    },



    deleteByQuery: function(req, res, next){
            for(var i = 0; i < person.length; i++){
                if(req.query.id == person[i].id){
                    person.splice(person[i],1);
                }
            }
            res.status(200).json(person);
    }
    
}