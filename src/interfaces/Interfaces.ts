export interface UserInterface {
    _id?: string;
    ativo: boolean;
    nome: string;
    login?: string;
    senha?: string; 
    admin?:boolean;
}
export interface ErrorInterface{
    erro:boolean,
    valor:string|object,
    codigo:number
}