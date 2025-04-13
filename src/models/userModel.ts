import { UserInterface } from "../interfaces/Interfaces"
import user from "../schemas/user"

class UserModel {

    public async salvar(infos:object){

        try{

            return await user.create(infos)

        }catch(e){

            console.log(e)
            throw new Error(e.message)
        }
        
    }

    public async findPorLogin(login:string){

        try{
            
            return await user.find({login:login})

        }catch(e){

            console.log(e)
            throw new Error(e.message)
            
        }
    }
}
export default new UserModel()