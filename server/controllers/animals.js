var Animal = require('../models/animals');

module.exports = {
    index:function(req,res){
        console.log("hello")
        Animal.find({}, (err,animal)=>{
            if(err){
                console.log(err);
                return redirect('/')
            }
            return res.render('index', {'animal':animal});
        })
},
    show: function(req,res){
        var animal = Animal.findOne({_id: req.params.id},function(err,animal){
            if(err){
                console.log(err);
            }
            return res.render('show', {'animal':animal});
    })
},
    create: function(req,res){
        var animal = new Animal(req.body);
        animal.save(function(err){
            if(err) {
                console.log("Something went wrong");
                return res.redirect('/');
            } 
                return res.redirect('/');
        })
    },
    update: function(req,res){
        Animal.update({_id:req.params.id},
            req.body, function(err, result){
                if(err){
                    console.log(err);
                }
                console.log("Successfully updated animal");
                return res.redirect('/');
            });
    },
    destroy: function(req,res){
        Animal.remove({_id:req.params.id},
       function(err, result){
           if(err){
               console.log(err);
           }
           return res.redirect('/');

       });
    }
}
