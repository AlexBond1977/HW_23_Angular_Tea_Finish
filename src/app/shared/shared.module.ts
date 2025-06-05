import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {ProductComponent} from "./components/product/product.component";
import {LongTextPipe} from "./pipes/long-text.pipe";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {FooterComponent} from "./common/footer/footer.component";
import {PricePipe} from "./pipes/price.pipe";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ProductComponent,
        LongTextPipe,
        PricePipe,
        ProductCardComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedRoutingModule
    ],
    exports: [
        ProductComponent,
        LongTextPipe,
        PricePipe,
        ProductCardComponent,
        FooterComponent
    ],
})
export class SharedModule {
}
