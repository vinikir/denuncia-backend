import { Response } from "express";
import { ErrorInterface } from "../interfaces/Interfaces";

const erros = {
    0:{
        "msg":"A senha é obrigatória.",
        "codHttp": 400,
    },
    1:{
        "msg": "Informe o login.",
        "codHttp": 400,
    },
    2:{
        "msg": "Credenciais inválidas.",
        "codHttp": 401,
        
    },
    
}


export const ReturnSucesso = (res:Response, valor:any):Response => {
    return res.json( {
        "erro":false,
        "valor":valor
    })
}

export const ReturnErro = (res:Response, msg :string, status:number):Response => {
    return res.status(status).json( {
        "erro":true,
        "valor":msg,
        "codigo":9998
    })
}

export const ReturnErroPadrao = (res:Response, cod:number):Response => {
    if(!erros[cod]){
        return res.status(500).
        json({
            
            "erro":true,
            "valor":"Erro inesperado",
            "codigo":0
            
        })
    }

    return res.status(erros[cod].codHttp).json({
        "erro":true,
        "valor":erros[cod].msg,
        "codigo":cod
    })
}

export const ReturnErroCatch = (res: Response, msg: string): Response => {
    const erroResponse: ErrorInterface = {
      erro: true,
      valor: msg,
      codigo: 9999,
    };
  
    return res.status(500).json(erroResponse);
};
    
