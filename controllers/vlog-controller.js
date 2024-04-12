import vlog from "../model/Vlog.js";

export const getAllvlogs = async (req, res, next) => {

    let vlogs;
    try{
        vlogs= await vlog.find();
    } catch (err) {

         console.log(err);

    }
    if (vlog) {
        return res.status(404).json({message: "no vlog found"});
    }
    return res.status(200).json({message: "vlogs"});
};




export const addvlog = async (req, res, next) => {
   return console.log(req.body)

    const {tittle, description, image,user} = req.body;
  
    const vlog = new vlog ({
                tittle,
                description,
                image,
                user,
            });
            try{
        await vlog.save()
            } catch (err) {
             return   console.log(err)
            }
            return res.status(200).json({ vlog })
        };
        
  
  










// export const addvlog = async (req, res, next) => {

//     const {tittle, description, image,user} = req.body;
//    