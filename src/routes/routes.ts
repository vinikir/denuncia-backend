import { Router} from 'express'
import userController from '../controllers/userController'
import denunciaController from '../controllers/denunciaController'
const routes = Router()

routes.get('/', (req, res) => {
    res.send({"versao":"3"})
})	

routes.post('/user/create', userController.create)
routes.post('/user/login', userController.login)

routes.post('/denuncia/salvar', denunciaController.create)
routes.post('/denuncia/buscar', denunciaController.buscaPorData)

export default routes