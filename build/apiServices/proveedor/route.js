"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adapters_1 = require("../../adapters");
const adapter_middleware_1 = require("../../middlewares/adapter.middleware");
const checkAuth_1 = __importDefault(require("../../middlewares/checkAuth"));
const checkUserType_1 = __importDefault(require("../../middlewares/checkUserType"));
const roleAdminAuth_1 = require("../../middlewares/roleAdminAuth");
const roleAuth_1 = __importDefault(require("../../middlewares/roleAuth"));
const enums_1 = require("../../types/data/enums");
const controller_1 = require("./controller");
const router = express_1.default.Router();
router.post('/crearOferta', (0, adapter_middleware_1.adapter)(adapters_1.createOfertaAdapter), checkAuth_1.default, (0, checkUserType_1.default)([enums_1.Type.Proveedor]), (0, roleAuth_1.default)([enums_1.Role.Basico, enums_1.Role.Premium]), controller_1.participarLicitacion);
router.get('/proveedores', checkAuth_1.default, (0, checkUserType_1.default)([enums_1.Type.Admin]), (0, roleAdminAuth_1.checkRoleAdminAuth)([enums_1.RoleAdmin.Employee, enums_1.RoleAdmin.Boss]), controller_1.showProveedores);
router.post('/createProveedor', checkAuth_1.default, (0, checkUserType_1.default)([enums_1.Type.Admin]), (0, roleAdminAuth_1.checkRoleAdminAuth)([enums_1.RoleAdmin.Employee, enums_1.RoleAdmin.Boss]), controller_1.createProveedor);
router.get('/infoDashboardProveedor', checkAuth_1.default, (0, checkUserType_1.default)([enums_1.Type.Proveedor]), (0, roleAuth_1.default)([enums_1.Role.Basico, enums_1.Role.Premium]), controller_1.getInfoDashboardProveedor);
router.get('/getProveedoresToUser', checkAuth_1.default, (0, checkUserType_1.default)([enums_1.Type.User]), (0, roleAuth_1.default)([enums_1.Role.Basico, enums_1.Role.Premium]), controller_1.getProveedoresToUser);
exports.default = router;
