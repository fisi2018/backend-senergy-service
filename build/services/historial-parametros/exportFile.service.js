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
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportFileService = void 0;
const constants_1 = require("../../constants");
const handleError_1 = require("../../helpers/handleError");
const utils_1 = require("../../utils");
const excel_1 = require("../excel");
const exportFileService = ({ fechaInicio, fechaFin, id }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const meses = (0, utils_1.generateMesesArray)(fechaInicio, fechaFin);
        const ids = meses.map((_mes, i) => i + 1);
        const values = meses.map((_mes) => 0);
        const workbook = (0, excel_1.createWorkbook)();
        const worksheet = (0, excel_1.createWorksheetFromArrays)([
            ['Meses', 'Nombre', ...meses],
            ['Codigo', 'Id', ...ids],
            ...constants_1.FACTORES.map((el) => ([el.nombre, el.codigo, ...values]))
        ]);
        (0, excel_1.addWorksheetToBook)(workbook, worksheet, 'Base de datos Factores');
        const path = `uploads/files/admin/base-de-datos-factores-${id}.xlsx`;
        (0, excel_1.createFile)(workbook, path);
        return {
            message: 'Se ha exportado el archivo exitosamente',
            filename: `base-de-datos-factores-${id}.xlsx`
        };
    }
    catch (err) {
        const error = err;
        return (0, handleError_1.handleError)(error, 'Ha ocurrido un error al exportar el archivo');
    }
});
exports.exportFileService = exportFileService;
