import Cart from '../models/cart';

export function createCart(req, res){
    console.log('createCart',req.body);

    var data={product_id:req.body.product_id}
    const newCart = new Cart(req.body);
    console.log('req.body.Cart',newCart);

    Cart.create(data,(err2 , user_doc) => {
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
                        message: 'Add products in Cart succesfully',
                        data:user_doc
                      });
                  }
  });
}


export function getCart(req, res) {
   console.log('getCart',getCart);

  Cart.find({}).populate('product_id').exec((err2, result2) => {
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
            message:'Cart data',
            data:result2
          })
    }
  });
}

export function deleteCart(req, res) {
       console.log("deleteCart",deleteCart)
       
  Cart.findOne({ _id: req.params.cart_id }).exec((err, post) => {
        if (err) {
          res.status(500).send(err);
        }

        post.remove(() => {
          res.status(200).end();
        });
  });
}