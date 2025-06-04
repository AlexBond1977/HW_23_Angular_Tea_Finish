import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductType} from "../../../types/product.type";
import {ProductsService} from "../../../services/products.service";
import {tap} from "rxjs";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: ProductType[] = [];
  public searchTerm: string = '';
  public loading: boolean = false;


  public constructor(private http: HttpClient, private productsService: ProductsService,  private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const paramValue = params.get('search') || '';
      this.searchTerm = paramValue;
      this.loadProducts();
    });
  }

  loadProducts() {
    this.loading = true;
    this.productsService.getProducts(this.searchTerm)
      .pipe(tap(() => this.loading = false))
      .subscribe(data => {
        this.products = data;
        console.log(this.products);
      });
  }
}
