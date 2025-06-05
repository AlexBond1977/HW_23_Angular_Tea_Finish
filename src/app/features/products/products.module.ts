import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {CatalogComponent} from "./catalog.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
    declarations: [
        CatalogComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule {
}
