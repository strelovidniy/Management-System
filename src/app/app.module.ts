import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';

import AppComponent from './app.component';
import NavMenuComponent from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', loadChildren: (): any => import("./home/home.module").then(m => m.default) },
            { path: 'counter', loadChildren: (): any => import("./counter/counter.module").then(m => m.default) },
            { path: 'fetch-data', loadChildren: (): any => import("./fetch-data/fetch-data.module").then(m => m.default) },
            { path: 'loader', loadChildren: (): any => import("./loader/loader.module").then(m => m.default) },
        ], { relativeLinkResolution: 'corrected', preloadingStrategy: PreloadAllModules }),
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent]
})
export default class AppModule { }
