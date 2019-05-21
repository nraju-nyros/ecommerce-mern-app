
import Products from '../models/products'

export function createProducts(req, res){

  var data={name:req.body.name,description:req.body.description,price:req.body.price,image:req.body.image,category_id:req.body.category_id}
  const newProducts = new Products(req.body);
  console.log('req.body.products',newProducts)

    Products.create(data,(err , user_doc) => {
            if(err){
                  res.json({
                    status: 400,
                    message:'Something went wrong!',
                    err: err
                  });
            }
            else{
                res.json({
                    status: 200,
                    message: 'Product data upload!',
                    data:user_doc
                });
            }
    });
}

export function getProducts(req, res) {
  Products.find().populate('category_id').sort('name').exec((err2, result2) => {
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


