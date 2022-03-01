import { InjectionToken } from "@angular/core";
import { Reporter } from "./reporter";

export const REPORTER=new InjectionToken<Reporter>('Reporter');