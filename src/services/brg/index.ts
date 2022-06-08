import { Document, Types } from "mongoose";
import { getBrgDao, createBrgDao } from "../../dao/brg";
import { handleError } from "../../helpers/handleError";
import { ErrorResponse, ResponseParent } from "../../types/data";
import { FieldsAdd } from "../../types/form";
import { Service, ServiceWithoutParam } from "../../types/methods";

export const getBrgService:ServiceWithoutParam<ErrorResponse|Array<Document<any, any, FieldsAdd> & FieldsAdd & {
    _id: Types.ObjectId}>>=async()=>{
    try{
        const result=await getBrgDao();
        if("error" in result)return handleError(result.error,result.message);
        return result
    }catch(err){
        let error=err as Error;
        return handleError(error,"Ha ocurrido un error en la capa de servicios");
    }
}
export const addBrgService:Service<FieldsAdd,ErrorResponse|ResponseParent>=async(fields)=>{
    try{
        const response=await createBrgDao(fields);
        if("error" in response)return handleError(response.error,response.message);
        return response;
    }catch(err){
        let error=err as Error;
        return handleError(error,"Ha ocurrido un error en la capa de servicios");
    }
}
