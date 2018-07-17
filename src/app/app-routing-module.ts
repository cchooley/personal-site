
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainComponent } from './components/main/main.component'
import { AboutComponent } from './components/about/about.component'
import { ProjectsComponent } from './components/projects/projects.component'
import { ContactComponent } from './components/contact/contact.component'

import { BettershipComponent } from './components/bettership/bettership.component'
import { VypComponent } from './components/vyp/vyp.component'
import { GogotComponent } from './components/gogot/gogot.component'
import { CannalogComponent } from './components/cannalog/cannalog.component'

const appRoutes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'bettership', component: BettershipComponent },
    { path: 'vyp', component: VypComponent },
    { path: 'gogot', component: GogotComponent },
    { path: 'cannalog', component: CannalogComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }