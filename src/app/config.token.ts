import { InjectionToken } from "@angular/core";

export interface AppConfig{
    expEnabled:boolean
}

export const APP_CONFIG=new InjectionToken<AppConfig>('app.config',{
   
    providedIn:'root',
    factory:()=>({
        expEnabled:false
    })
})

export const LegacyLoogger={
    prefix:"javid",
    getDate():string{
        return "My name is"+this.prefix
    }
}