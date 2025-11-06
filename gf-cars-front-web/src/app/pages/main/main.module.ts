import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainRoutingModule } from './main-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsBannerComponent } from './about-us/about-us-banner/about-us-banner.component';
import { AboutUsBanner2Component } from './about-us/about-us-banner2/about-us-banner2.component';
import { AboutUsDownloadComponent } from './about-us/about-us-download/about-us-download.component';
import { AboutUsReviewComponent } from './about-us/about-us-review/about-us-review.component';
import { AboutUsTopCarComponent } from './about-us/about-us-top-car/about-us-top-car.component';
import { AboutUsUnlockComponent } from './about-us/about-us-unlock/about-us-unlock.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Banner1Component } from './contact-us/banner1/banner1.component';
import { InfoComponent } from './contact-us/info/info.component';
import { BlogComponent } from './contact-us/blog/blog.component';
import { LogosComponent } from './contact-us/logos/logos.component';

@NgModule({
    declarations: [
    AboutUsComponent,
    AboutUsBannerComponent,
    AboutUsBanner2Component,
    AboutUsDownloadComponent,
    AboutUsReviewComponent,
    AboutUsTopCarComponent,
    AboutUsUnlockComponent,
    ContactUsComponent,
    Banner1Component,
    InfoComponent,
    BlogComponent,
    LogosComponent,
  ],
    imports: [
        CommonModule,
        RouterModule,
        MainRoutingModule
    ]
})
export class MainModule { }