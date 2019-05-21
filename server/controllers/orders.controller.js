import Orders from '../models/orders'


export function createOrder(req, res){
    
    var data={product_id:req.body.product_id,user_id:req.body.user_id,cart_id:req.body.cart_id,Amount:req.body.Amount}
    const newOrders = new Orders(req.body);
    console.log('req.body.Orders',newOrders)

    Orders.create(data,(err2 , user_doc) => {
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
                  message: 'Add to Orders',
                  data:user_doc
                });
            }
    });
}


export function getOrders(req, res) {
  
    Orders.find().populate('product_id').populate('user_id').populate('cart_id').sort('name').exec((err2, result2) => {
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
            message:'Orders data',
            data:result2
         })
      }
    });
}
