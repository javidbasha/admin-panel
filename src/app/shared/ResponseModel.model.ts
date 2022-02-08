export class ResponseModel{
    constructor(
        private idToken:string,
        private expiresIn:string,
        private refreshToken:string,
        private localId:string
    ){}
     setAPIKey(){
        localStorage.setItem('key',this.idToken);
    }
    
}