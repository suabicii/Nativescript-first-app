import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FilmyComponent } from "./filmy/filmy.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    { path: "", redirectTo: "/filmy", pathMatch: "full" },
    { path: "filmy", component: FilmyComponent },
    { path: "film/:id", component: DetailsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
