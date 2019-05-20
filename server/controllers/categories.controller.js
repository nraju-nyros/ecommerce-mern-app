import Categories from '../models/categories';

export function createCategory(req,res){
	var data = {name:req.body.name,type:req.body.type}
     const newCategories = new Categories(req.body);
	console.log("req.body.categories",req.body)


	Categories.create(data,(err3,result3) => {
		if(err3){
			res.json({
				status:400,
				message:'something went wrong',
				err: err3
			});
		}
		else{
			res.json({
				status:200,
				message:'categories created',
				data:result3
			});
		}
	});


}

export function getCategory(req, res) {
  Categories.find().sort('name').exec((err2, result2) => {
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
          message:'Categories data',
          data:result2
       })
    }
  });
}