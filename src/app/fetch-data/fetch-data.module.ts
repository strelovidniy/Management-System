import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import SharedModule from '../shared/shared.module';
import FetchDataComponent from './fetch-data.component';

@NgModule({
    declarations: [
        FetchDataComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: FetchDataComponent, pathMatch: 'full' },
        ]),
    ]
})
export default class FetchDataModule { }
