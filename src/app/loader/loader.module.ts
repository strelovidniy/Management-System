import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import LoaderComponent from './loader.component';

@NgModule({
    declarations: [
        LoaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: LoaderComponent, pathMatch: 'full' },
        ]),
    ]
})
export default class HomeModule { }
