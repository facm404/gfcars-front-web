import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { Banner2Component } from './banner2/banner2.component';
import { Banner3Component } from './banner3/banner3.component';
import { InfoComponent } from './info/info.component';
import { FactsNumbersComponent } from './facts-numbers/facts-numbers.component';
import { StepsComponent } from './steps/steps.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { Banner4Component } from './banner4/banner4.component';

@NgModule({
    declarations: [
        BannerComponent,
        MainHomeComponent,
        Banner2Component,
        Banner3Component,
        InfoComponent,
        FactsNumbersComponent,
        StepsComponent,
        DownloadAppComponent,
        Banner4Component,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MainHomeComponent
    ]
})
export class HomeModule { }