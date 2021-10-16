import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import MaterialModule from '../shared/material.module';
import SharedModule from '../shared/shared.module';
import CounterComponent from './counter.component';

@NgModule({
    declarations: [
        CounterComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([
            { path: '', component: CounterComponent, pathMatch: 'full' },
        ]),
    ]
})
export default class CounterModule { }
