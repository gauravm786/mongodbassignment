import {Quote} from '../model/quotes.js'

let quote=[] 

export const createQuotes = (req,res)=>{
    const quotes = new Quote({
        quote: req.body.quote,
        author: req.body.author,
    })
    quotes.save()
        .then(
            (result)=>{
                res.send(result)
                console.log({"status":"success"})
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}

export const getQuotes= (req,res)=>{
    
        getAll(req,res)
        //console.log(req.query)
   //console.log({status:"sucess"})
//    Product.find()
//         .then(
//             (result)=>{
//                 res.send(result)
//             }
//         )
//         .catch(
//             (err)=>{
//                 console.log(err)            
//             }
//         )
}

const getAll = (req,res) => {
    Quote.aggregate([  
             { $project:{ _id :0,quote :1,author :1}}     
    ])
    .then(
        (result)=>{
            res.send(result)
            console.log(result)
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}
//res.status(200).json({status:"sucess"}