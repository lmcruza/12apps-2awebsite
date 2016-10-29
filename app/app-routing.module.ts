import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: HomeComponent }
        ])
    ],
    exports: [RouterModule],
    declarations: [
        HomeComponent,
        AboutComponent
    ]
})
export class AppRoutingModule { }
