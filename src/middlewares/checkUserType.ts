import { verifyToken } from '../helpers/generateToken'
import { Type } from '../types/data/enums'
import { CheckUserType } from '../types/methods'

import UsuarioModel from '../apiServices/usuario/model'
import ProveedorModel from '../apiServices/proveedor/model'
const checkUserType: CheckUserType = (types) => async (req, res, next) => {
  try {
    console.log('iniciando check user type')
    const auth = req.headers.authorization
    if (auth == null) throw new Error('Token no proporcionado')
    console.log('spliteando token')
    const token = auth.split(' ').pop()
    if (token == null) throw new Error('Token inválido')
    console.log('verificando token')
    const tokenData = verifyToken(token)
    if (tokenData == null) {
      return res.status(400).send({
        error: true,
        message: 'Token inválido'
      })
    }
    console.log('definiendo array')
    const initialArray: Type[] = []
    console.log('type token ', tokenData.type, ' ', types.toString())
    if (initialArray.concat(types).includes(tokenData.type)) {
      if (tokenData.type === Type.User) {
        const user = await UsuarioModel.findById(tokenData._id)
        if (user == null) return res.status(400).send({ message: 'Usuario sin permisos', error: true })
        if (user.estado === 'offline') return res.status(400).send({ message: 'Debe iniciar sesión', error: true })
        req.user = user
      }
      if (tokenData.type === Type.Proveedor) {
        const proveedor = await ProveedorModel.findById(tokenData._id)
        if (proveedor == null) return res.status(400).send({ message: 'Usuario sin permisos', error: true })
        req.proveedor = proveedor
      }
      console.log('antes del next en user type')
      return next()
    }
    console.log('else antes del res status en checkuser type')
    return res.status(400).send({
      error: true,
      message: 'No tiene permisos para realizar esta acción'
    })
  } catch (err) {
    console.log('error catch user type ', err)
    return res.status(500).send('Ha ocurrido un error en la autenticación')
  }
}

export default checkUserType
