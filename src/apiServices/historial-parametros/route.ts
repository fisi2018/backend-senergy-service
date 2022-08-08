import express from 'express'
import { createExportFileDates } from '../../adapters'
import { adapter } from '../../middlewares'
import checkAuth from '../../middlewares/checkAuth'
import checkUserType from '../../middlewares/checkUserType'
import uploadParametros from '../../middlewares/filesUser/uploadParametros'
import { checkRoleAdminAuth } from '../../middlewares/roleAdminAuth'
import { ExportFileAdminData } from '../../types/data'
import { RoleAdmin, Type } from '../../types/data/enums'
import { ExportFileAdminRequest } from '../../types/requests'
import { addParametros, downloadFile, exportFile, getFilename } from './controller'
const router = express.Router()

// router.post('/addParametro', checkAuth, checkUserType([Type.Admin]), checkRoleAdminAuth([RoleAdmin.Employee, RoleAdmin.Boss]), addParametro)
router.post('/exportFile', adapter<ExportFileAdminRequest, ExportFileAdminData>(createExportFileDates), checkAuth, checkUserType([Type.Admin]), checkRoleAdminAuth([RoleAdmin.Employee, RoleAdmin.Boss]), exportFile)
router.get('/downloadFile/:filename', checkAuth, checkUserType([Type.Admin]), checkRoleAdminAuth([RoleAdmin.Boss, RoleAdmin.Employee]), downloadFile)
router.param('filename', getFilename)
router.post('/addParametros/:filename', uploadParametros, checkAuth, checkUserType([Type.Admin]), checkRoleAdminAuth([RoleAdmin.Employee, RoleAdmin.Boss]), addParametros)
export default router
