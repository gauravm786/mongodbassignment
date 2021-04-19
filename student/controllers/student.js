import {Student} from '../model/student.js'

let students=[] 

export const getStudents= (req,res)=>{
   //console.log({status:"sucess"})
    if(req.query.name){
        getStudentbyName(req,res)
        //console.log(req.query)
    }else{
        Student.find()
            .then(
                (result)=>{
                    res.send(result)
                }
            )
            .catch(
                (err)=>{
                    console.log(err)
                    
                }
            )
    }
}
export const createStudents = (req,res)=>{
    const student = new Student({
        name: req.body.name,
        collegename: req.body.collegename,
        location: req.body.location,
    })
    student.save()
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}
const getStudentbyName = (req,res) => {
    // Student.aggregate(
    //     [{$match:{"name":req.query.name}}], //$match:{"collegename":req.query.collegename},$match:{"location":req.query.location}}] 
    // )
    Student.aggregate([  
           {$match:{"name":req.query.name}},
             { $project:{ _id :0,name :1,collegename :1,location :1}}     
    ])
    //.pretty()
    .then(
        (result)=>{
            res.send(result)
            console.log(result)
            //res.status(200).json({status:"sucess"})
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        }
    )
}