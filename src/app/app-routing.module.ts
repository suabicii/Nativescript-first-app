import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FilmyComponent } from "./filmy/filmy.component";

const routes: Routes = [
    { path: "", redirectTo: "/filmy", pathMatch: "full" },
    { path: "filmy", component: FilmyComponent },
    // { path: "item/:id", component: ItemDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
