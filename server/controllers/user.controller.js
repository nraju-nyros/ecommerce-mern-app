
import Users from '../models/users'


export function createUser(req, res){
    var data={name:req.body.name,email:req.body.email,phone:req.body.phone,Address:req.body.Address}
    const newUsers = new Users(req.body);
    console.log('req.body.uesr',newUsers)

  Users.create(data,(err2 , user_doc) => {
            if(err2)
            {
              res.json({
                status: 400,
                message:'Something went wrong!',
                err: err2
              });
            }
            else{
                res.json({
                  status: 200,
                  message: 'user created successfully!',
                  data:user_doc
                });
            }
  });
}


export function getUsers(req, res) {
  Users.find().sort('name').exec((err2, result2) => {
    if(err2){
          res.json({
            staus:400,
            message:'Something wrong',
            err:err2
          })
    }
    else{
      res.json({
          status:200,
          message:'products data',
          data:result2
       })
    }
  });
}

