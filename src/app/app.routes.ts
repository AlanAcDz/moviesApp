import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleComponent } from './components/detalle/detalle.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: BuscadorComponent },
    { path: 'search/:texto', component: BuscadorComponent },
    { path: 'movie/:id/:pag', component: DetalleComponent },
    { path: 'movie/:id/:pag/:busqueda', component: DetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
