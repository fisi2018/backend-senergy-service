"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistorialParametrosListDao = void 0;
const handleError_1 = require("../../helpers/handleError");
const model_1 = __importDefault(require("../../apiServices/historial-parametros/model"));
const getHistorialParametrosListDao = (listIds) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parametros = yield model_1.default.find({ _id: { $in: listIds } });
        return parametros;
    }
    catch (e) {
        throw (0, handleError_1.handleError)(e, 'Ha ocurrido un erorr al obtener la lista de parametros');
    }
});
exports.getHistorialParametrosListDao = getHistorialParametrosListDao;
