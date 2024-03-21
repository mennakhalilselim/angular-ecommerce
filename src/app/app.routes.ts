import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleProductComponent } from './single-product/single-product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'product-details/:id',
    component: SingleProductComponent,
    title: 'Product',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',

  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found',
  },
];
