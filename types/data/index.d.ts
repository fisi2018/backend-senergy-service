import { ObjectId } from "mongoose"
import { LicitacionRegisterFields, OfertaCreateFields, ProveedorRegisterFields, UserRegisterFields } from "../form"

export type DataToken=DataProveedorToken|DataUserToken
export type DataUserToken={
    _id:string,
    correo:string,
    role:Role,
    type:Type.User
}
export type DataProveedorToken={
    _id:string,
    razSocial:string,
    correo:string,
    ruc:number,
    type:Type.Proveedor
}
enum Estado{
    Online="online",
    Offline="offline",
    ToConfirm="toConfirm"
}
export type ErrorResponse={
    error:Error,
    message:string
}
export interface Licitacion extends LicitacionRegisterFields{
    _id:string,
    participantes:string[]
}
export interface Oferta extends OfertaCreateFields{
    _id:string,
    licitacion:Licitacion|string
}
export interface Proveedor extends ProveedorRegisterFields{
    _id:ObjectId,
    role:Role,
    estado:Estado,
    codeToConfirm:string,
    verified:boolean,
    session:string,
    licitaciones:string[]
}
enum Role{
    Basico="basico",
    Premium="premium",
    Admin="admin"
}
export enum Type{
    User="user",
    Proveedor="proveedor"
}
export interface User extends UserRegisterFields{
    _id:string,
    estado:Estado,
    sessionId:string,
    role:Role
}
