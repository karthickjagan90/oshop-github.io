(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-orders/admin-orders.component */ "./src/app/admin/components/admin-orders/admin-orders.component.ts");
/* harmony import */ var _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-products/admin-products.component */ "./src/app/admin/components/admin-products/admin-products.component.ts");
/* harmony import */ var _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product-form/product-form.component */ "./src/app/admin/components/product-form/product-form.component.ts");
/* harmony import */ var _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/admin-auth-guard.service */ "./src/app/admin/services/admin-auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: 'admin/products/new', component: _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ProductFormComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]] },
                    { path: 'admin/products/:id', component: _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ProductFormComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]] },
                    { path: 'admin/products', component: _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_5__["AdminProductsComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]] },
                    { path: 'admin/orders', component: _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_4__["AdminOrdersComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]] }
                ])
            ],
            declarations: [
                _components_admin_products_admin_products_component__WEBPACK_IMPORTED_MODULE_5__["AdminProductsComponent"],
                _components_admin_orders_admin_orders_component__WEBPACK_IMPORTED_MODULE_4__["AdminOrdersComponent"],
                _components_product_form_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ProductFormComponent"]
            ],
            providers: [_services_admin_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <strong>Orders</strong>\n        <span *ngIf=\"orders\" style=\"margin-left: 80%\" class=\"badge pull-right\">Count : {{orders.length}}</span>\n    </div>\n    <div class=\"panel-body\">\n            <table class=\"table table-striped\" [mfData]=\"orders\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                    <thead>\n                    <tr>            \n                        <th style=\"width: 60%\">\n                            <mfDefaultSorter by=\"shipping.name\">Customer</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter by=\"datePlaced\">Date</mfDefaultSorter>\n                        </th> \n                        <th></th>                    \n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let order of mf.data\">            \n                        <td>{{order.shipping.name}}</td>\n                        <td>{{order.datePlaced | date }}</td> \n                        <td>\n                            <a href=\"#\">View</a>                    \n                        </td>          \n                    </tr>\n                    </tbody>\n                    <tfoot>\n                    <tr>\n                        <td colspan=\"3\">\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                        </td>\n                    </tr>\n                    </tfoot>\n            </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/components/admin-orders/admin-orders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/admin-orders/admin-orders.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminOrdersComponent", function() { return AdminOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminOrdersComponent = /** @class */ (function () {
    function AdminOrdersComponent(orderService) {
        var _this = this;
        this.orderService = orderService;
        this.orders = [];
        this.orderService.getOrders().valueChanges().subscribe(function (orders) {
            _this.initializeTable(orders);
        });
    }
    AdminOrdersComponent.prototype.initializeTable = function (orders) {
        var _this = this;
        console.log(orders);
        this.orders = [];
        orders.forEach(function (order) {
            _this.orders.push(order);
        });
    };
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__(/*! ./admin-orders.component.html */ "./src/app/admin/components/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__(/*! ./admin-orders.component.css */ "./src/app/admin/components/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <a routerLink=\"/admin/products/new\" class=\"btn btn-primary\">New Product</a>\n</p>\n<p>\n    <input type=\"text\"\n           #query\n           (keyup)=\"filter(query.value)\"\n           class=\"form-control\" placeholder=\"search...\">\n</p>\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <strong>Products</strong>\n        <span *ngIf=\"products\" style=\"margin-left: 80%\" class=\"badge pull-right\">Count : {{products.length}}</span>\n    </div>\n    <div class=\"panel-body\">\n            <table class=\"table table-striped\" [mfData]=\"filteredProducts\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                    <thead>\n                    <tr>            \n                        <th style=\"width: 60%\">\n                            <mfDefaultSorter by=\"title\">Title</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter by=\"price\">Price</mfDefaultSorter>\n                        </th> \n                        <th></th>                    \n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let product of mf.data\">            \n                        <td>{{product.title}}</td>\n                        <td>{{product.price}}</td> \n                        <td>\n                            <a [routerLink]=\"['/admin/products/',product.$key]\">Edit</a>                    \n                        </td>          \n                    </tr>\n                    </tbody>\n                    <tfoot>\n                    <tr>\n                        <td colspan=\"3\">\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                        </td>\n                    </tr>\n                    </tfoot>\n            </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/admin-products/admin-products.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/admin-products/admin-products.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProductsComponent", function() { return AdminProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminProductsComponent = /** @class */ (function () {
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.subscription = this.productService.getAll().snapshotChanges().subscribe(function (products) {
            _this.initializeTable(products);
        });
    }
    AdminProductsComponent.prototype.initializeTable = function (products) {
        var _this = this;
        this.products = [];
        this.filteredProducts = [];
        products.forEach(function (product) {
            var y = product.payload.toJSON();
            y["$key"] = product.key;
            _this.products.push(y);
            _this.filteredProducts.push(y);
        });
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent.prototype.filter = function (query) {
        this.filteredProducts = (query) ? this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); })
            : this.products;
    };
    AdminProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__(/*! ./admin-products.component.html */ "./src/app/admin/components/admin-products/admin-products.component.html"),
            styles: [__webpack_require__(/*! ./admin-products.component.css */ "./src/app/admin/components/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n      <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input id=\"title\" #title=\"ngModel\" required name=\"title\" [(ngModel)]=\"product.title\" \n            class=\"form-control\" type=\"text\">\n            <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\">\n              Title is required\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"price\">Price</label>\n            <div class=\"input-group mb3\">    \n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">$</span>\n              </div>    \n              <input type=\"number\" #price=\"ngModel\" id=\"price\" name=\"price\" required [(ngModel)]=\"product.price\" \n                    [min]=\"0\"\n                    class=\"form-control\" aria-label=\"Amount\">          \n            </div>  \n            <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\">\n              <div *ngIf=\"price.errors.required\">Price is required</div>\n              <div *ngIf=\"price.errors.min\">Price should be 0 or higher</div>      \n            </div>    \n          </div>\n          <div class=\"form-group\">\n            <label for=\"category\">Category</label>\n            <select #category=\"ngModel\" required id=\"category\" name=\"category\" ngModel=\"{{product.category}}\" \n             class=\"form-control\">\n              <option value=\"\"></option>\n              <option *ngFor=\"let c of categoriesList\" [value]=\"c.$key\" [attr.selected]=\"product.category\">\n                {{ c.name }}\n              </option>\n            </select>\n            <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\">\n              Category is required\n            </div>  \n          </div>\n          <div class=\"form-group\">\n            <label for=\"imageUrl\">Image URL</label>\n            <input [(ngModel)]=\"product.imageUrl\" #imageUrl=\"ngModel\" required name=\"imageUrl\"\n                   url\n                   id=\"imageUrl\" class=\"form-control\" type=\"text\">\n            <div class=\"alert alert-danger\" *ngIf=\"imageUrl.touched && imageUrl.invalid\">\n              <div *ngIf=\"imageUrl.errors.required\">Image URL is required</div>\n              <div *ngIf=\"imageUrl.errors.url\">Please enter a valid URL</div> \n            </div>\n          </div>  \n          <button class=\"btn btn-primary\" style=\"margin-right:5px;\">Save</button>          \n          <button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n        </form>     \n  </div>\n  <div class=\"col-md-6\">\n     <product-card [product]=\"product\" [show-actions]=\"false\"></product-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/product-form/product-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/product-form/product-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFormComponent", function() { return ProductFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var shared_models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/models/product */ "./src/app/shared/models/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductFormComponent = /** @class */ (function () {
    function ProductFormComponent(categoryService, router, route, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.product = new shared_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
        this.id = this.route.snapshot.paramMap.get('id');
        categoryService.getAll().snapshotChanges().subscribe(function (item) {
            _this.categoriesList = [];
            item.forEach(function (category) {
                var y = category.payload.toJSON();
                y["$key"] = category.key;
                _this.categoriesList.push(y);
            });
            if (_this.id) {
                _this.productService.get(_this.id).snapshotChanges().subscribe(function (res) {
                    var y = res.payload.toJSON();
                    if (y != null) {
                        console.log(res);
                        y["$key"] = res.key;
                        _this.product = y;
                    }
                    else {
                        _this.product = new shared_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"]();
                    }
                });
            }
        });
    }
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent.prototype.save = function (product) {
        if (this.id) {
            this.productService.update(this.id, product);
        }
        else {
            this.productService.create(product);
        }
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm('Are you sure you want to delete this product?'))
            return;
        this.productService.delete(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__(/*! ./product-form.component.html */ "./src/app/admin/components/product-form/product-form.component.html"),
            styles: [__webpack_require__(/*! ./product-form.component.css */ "./src/app/admin/components/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/admin-auth-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/services/admin-auth-guard.service.ts ***!
  \************************************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        return this.auth.appUser$.map(function (appUser) {
            if (appUser)
                return appUser.isAdmin;
        });
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<bs-navbar></bs-navbar>\n<main role=\"main\" class=\"container img-responsive\">\n<router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(userService, auth, router) {
        this.userService = userService;
        this.auth = auth;
        auth.user$.subscribe(function (user) {
            if (!user)
                return;
            userService.save(user);
            var returnUrl = localStorage.getItem('returnUrl');
            if (!returnUrl)
                return;
            localStorage.removeItem('returnUrl');
            router.navigateByUrl(returnUrl);
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shopping/shopping.module */ "./src/app/shopping/shopping.module.ts");
/* harmony import */ var _shopping_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopping/products/products.component */ "./src/app/shopping/products/products.component.ts");
/* harmony import */ var _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/login/login.component */ "./src/app/core/components/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_4__["AdminModule"],
                _shopping_shopping_module__WEBPACK_IMPORTED_MODULE_7__["ShoppingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', component: _shopping_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
                    { path: 'login', component: _core_components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] }
                ])
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle {\n    cursor: pointer;\n}\n\n.dropdown-item {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top\">\n  <div class=\"container\">\n      <a class=\"navbar-brand\" routerLink=\"/\">\n        <i class=\"fas fa-leaf\"></i>\n      </a>\n      <button class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" [attr.aria-expanded]=\"!isCollapsed\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    \n      <div class=\"collapse navbar-collapse\" [ngbCollapse]=isCollapsed id=\"navbarsExampleDefault\">\n        <ul class=\"navbar-nav mr-auto\">     \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/shopping-cart\">\n              <i class=\"fas fa-shopping-cart\"></i>\n              <span class=\"badge badge-warning badge-pill\" *ngIf=\"cart$ | async as cart\">\n                {{ cart.totalItemsCount }}\n              </span>\n            </a>        \n          </li>                       \n        </ul>\n        <ul class=\"navbar-nav\">                 \n            <ng-template #anonymousUser>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n              </li>\n            </ng-template>            \n            <li ngbDropdown *ngIf=\"appUser; else anonymousUser\" class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" \n              aria-haspopup=\"true\" aria-expanded=\"false\" ngbDropdownToggle>{{appUser.name}}</a>\n              <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                <a class=\"dropdown-item\" routerLink=\"/my/orders\">My Orders</a>\n                <ng-container *ngIf=\"appUser.isAdmin\">\n                  <a class=\"dropdown-item\" routerLink=\"/admin/orders\">Manage Orders</a>\n                  <a class=\"dropdown-item\" routerLink=\"/admin/products\">Manage Products</a>\n                </ng-container>          \n                <a class=\"dropdown-item\" (click)=\"logout()\">Log Out</a>\n              </div>\n            </li>\n          </ul>    \n      </div>\n  </div>  \n</nav>"

/***/ }),

/***/ "./src/app/core/components/bs-navbar/bs-navbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/components/bs-navbar/bs-navbar.component.ts ***!
  \******************************************************************/
/*! exports provided: BsNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BsNavbarComponent", function() { return BsNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BsNavbarComponent = /** @class */ (function () {
    function BsNavbarComponent(auth, shoppingCartService) {
        this.auth = auth;
        this.shoppingCartService = shoppingCartService;
        this.isCollapsed = true;
    }
    BsNavbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    BsNavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.auth.appUser$.subscribe(function (appUser) { return _this.appUser = appUser; });
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.ngAfterViewInit = function () {
    };
    BsNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__(/*! ./bs-navbar.component.html */ "./src/app/core/components/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__(/*! ./bs-navbar.component.css */ "./src/app/core/components/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/components/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core/components/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n   (click)=\"login()\"\n   class=\"btn btn-primary\">Login with Google</button>"

/***/ }),

/***/ "./src/app/core/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth) {
        this.auth = auth;
    }
    LoginComponent.prototype.login = function () {
        this.auth.login();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/core/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/core/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bs-navbar/bs-navbar.component */ "./src/app/core/components/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/core/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/core/components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([])
            ],
            declarations: [
                _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_1__["BsNavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            ],
            exports: [
                _components_bs_navbar_bs_navbar_component__WEBPACK_IMPORTED_MODULE_1__["BsNavbarComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-footer {\n    padding:0;\n}\n\n.card {\n    margin-bottom: 30px;\n}\n\n.no-gutters {\n    margin-left: 0;\n    margin-right: 0; \n}\n\n.card-footer button {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\"  class=\"card\" >\n<img class=\"card-img-top responsive\" [src]=\"product.imageUrl\" *ngIf=\"product.imageUrl\" alt=\"{{ product.title }}\">\n<div class=\"card-body\">\n  <h5 class=\"card-title\" *ngIf=\"product.title\">{{ product.title }}</h5>\n  <p class=\"card-text\">{{ product.price | currency:'INR':true }}</p>\n</div>\n<div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n  <button *ngIf=\"shoppingCart.getQuantity(product) === 0 else updateQuantity\" (click)=\"addToCart()\" \n   class=\"btn btn-secondary btn-block\">Add to Cart</button> \n  <ng-template #updateQuantity>\n    <product-quantity [product]=\"product\" [shopping-cart]=\"shoppingCart\"></product-quantity>\n  </ng-template>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("product"),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("show-actions"),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('shopping-cart'),
        __metadata("design:type", shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_2__["ShoppingCart"])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/shared/components/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/shared/components/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters\">\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-block\" (click)=\"removeFromCart()\">-</button>\n  </div>\n  <div class=\"col text-center quantity\">\n    {{ shoppingCart.getQuantity(product) }} in cart\n  </div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-block\" (click)=\"addToCart()\">+</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/product-quantity/product-quantity.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/product-quantity/product-quantity.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductQuantityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQuantityComponent", function() { return ProductQuantityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductQuantityComponent = /** @class */ (function () {
    function ProductQuantityComponent(cartService) {
        this.cartService = cartService;
    }
    ProductQuantityComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ProductQuantityComponent.prototype.removeFromCart = function () {
        this.cartService.removeFromCart(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("product"),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('shopping-cart'),
        __metadata("design:type", Object)
    ], ProductQuantityComponent.prototype, "shoppingCart", void 0);
    ProductQuantityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-quantity',
            template: __webpack_require__(/*! ./product-quantity.component.html */ "./src/app/shared/components/product-quantity/product-quantity.component.html"),
            styles: [__webpack_require__(/*! ./product-quantity.component.css */ "./src/app/shared/components/product-quantity/product-quantity.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ProductQuantityComponent);
    return ProductQuantityComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/order.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/order.ts ***!
  \****************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order(userId, shipping, shoppingCart) {
        this.userId = userId;
        this.shipping = shipping;
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    imageUrl: i.imageUrl,
                    price: i.price
                },
                quantity: i.quantity,
                totalPrice: i.total
            };
        });
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/shared/models/product.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/product.ts ***!
  \******************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/shared/models/shipping.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/shipping.ts ***!
  \*******************************************/
/*! exports provided: Shipping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shipping", function() { return Shipping; });
var Shipping = /** @class */ (function () {
    function Shipping() {
    }
    return Shipping;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart-item.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/shopping-cart-item.ts ***!
  \*****************************************************/
/*! exports provided: ShoppingCartItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartItem", function() { return ShoppingCartItem; });
var ShoppingCartItem = /** @class */ (function () {
    function ShoppingCartItem(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItem.prototype, "total", {
        get: function () {
            return this.price * this.quantity;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItem;
}());



/***/ }),

/***/ "./src/app/shared/models/shopping-cart.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/shopping-cart.ts ***!
  \************************************************/
/*! exports provided: ShoppingCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCart", function() { return ShoppingCart; });
/* harmony import */ var _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopping-cart-item */ "./src/app/shared/models/shopping-cart-item.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(itemsMap) {
        this.itemsMap = itemsMap;
        this.items = [];
        for (var productId in itemsMap) {
            var item = itemsMap[productId];
            this.items.push(new _shopping_cart_item__WEBPACK_IMPORTED_MODULE_0__["ShoppingCartItem"](__assign({}, item, { $key: productId })));
        }
    }
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var total = 0;
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                total = total + item.total;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemsCount", {
        get: function () {
            var count = 0;
            if (this.items) {
                for (var itemIndex = 0; itemIndex < this.items.length; itemIndex++) {
                    count = count + this.items[itemIndex].quantity;
                }
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCart.prototype.getQuantity = function (product) {
        if (this.itemsMap) {
            var item = this.itemsMap[product.$key];
            var no = item ? item.quantity : 0;
            return no;
        }
        return 0;
    };
    return ShoppingCart;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(afAuth, route, router, userService) {
        this.afAuth = afAuth;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user$ = afAuth.authState;
    }
    AuthService.prototype.login = function () {
        var returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', returnUrl);
        this.afAuth.auth.signInWithRedirect(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['']);
        });
        ;
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$.switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid).valueChanges();
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getAll = function () {
        this.categoryList = this.db.list('categories');
        return this.categoryList;
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/order.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = /** @class */ (function () {
    function OrderService(db, shoppingCartService) {
        this.db = db;
        this.shoppingCartService = shoppingCartService;
    }
    OrderService.prototype.placeOrder = function (order) {
        var result = this.db.list('/orders').push(order);
        this.shoppingCartService.clearCart();
        return result;
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService.prototype.getOrdersByUser = function (userId) {
        console.log(userId);
        return this.db.list('/orders', function (ref) {
            return ref.orderByChild('userId').equalTo(userId);
        });
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCartService"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products', function (ref) { return ref.orderByChild('title'); });
    };
    ProductService.prototype.get = function (productId) {
        return this.db.object('/products/' + productId);
    };
    ProductService.prototype.update = function (productId, product) {
        return this.db.object('/products/' + productId).update(product);
    };
    ProductService.prototype.delete = function (productId) {
        return this.db.object('/products/' + productId).remove();
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/services/shopping-cart.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/shopping-cart.service.ts ***!
  \**********************************************************/
/*! exports provided: ShoppingCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartService", function() { return ShoppingCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService(db) {
        this.db = db;
        this.getOrCreateCartId();
    }
    ShoppingCartService.prototype.getCart = function () {
        var cartId = this.getOrCreateCartId();
        return this.db.object('/shopping-cart/' + cartId).valueChanges().map(function (x) {
            if (x) {
                return new shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_4__["ShoppingCart"](x['items']);
            }
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        this.updateItem(product, -1);
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItem(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-cart').push({
            dateCreated: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getOrCreateCartId = function () {
        var cartId = localStorage.getItem('cartId');
        if (cartId)
            return cartId;
        var result = this.create();
        localStorage.setItem('cartId', result.key);
        return result.key;
    };
    ShoppingCartService.prototype.getItem = function (cartId, productKey) {
        return this.db.object('/shopping-cart/' + cartId + '/items/' + productKey);
    };
    ShoppingCartService.prototype.clearCart = function () {
        var cartId = this.getOrCreateCartId();
        this.db.object('/shopping-cart/' + cartId + '/items').remove();
    };
    ShoppingCartService.prototype.updateItem = function (product, change) {
        return __awaiter(this, void 0, void 0, function () {
            var cartId, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateCartId()];
                    case 1:
                        cartId = _a.sent();
                        item = this.getItem(cartId, product.$key);
                        item.snapshotChanges().take(1).subscribe(function (p) {
                            var productToUpdate = p.payload.toJSON();
                            var quantity = ((productToUpdate && productToUpdate["quantity"]) || 0) + change;
                            if (quantity === 0) {
                                item.remove();
                            }
                            else {
                                item.update({
                                    title: product["title"],
                                    imageUrl: product["imageUrl"],
                                    price: product["price"],
                                    quantity: quantity
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_0__["AngularFireDatabase"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/product-card/product-card.component */ "./src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/components/product-quantity/product-quantity.component */ "./src/app/shared/components/product-quantity/product-quantity.component.ts");
/* harmony import */ var shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
/* harmony import */ var shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-6-datatable */ "./node_modules/angular-6-datatable/index.js");
/* harmony import */ var angular_6_datatable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angular_6_datatable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_13__["CustomFormsModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_14__["DataTableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"].forRoot(),
                angularfire2__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"]
            ],
            declarations: [
                shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"],
                shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_4__["ProductQuantityComponent"]
            ],
            providers: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], shared_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"], shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
                shared_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"], shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_10__["ShoppingCartService"], shared_services_order_service__WEBPACK_IMPORTED_MODULE_8__["OrderService"]
            ],
            exports: [
                shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_3__["ProductCardComponent"],
                shared_components_product_quantity_product_quantity_component__WEBPACK_IMPORTED_MODULE_4__["ProductQuantityComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_13__["CustomFormsModule"],
                angular_6_datatable__WEBPACK_IMPORTED_MODULE_14__["DataTableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"].forRoot().ngModule,
                angularfire2__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shopping/check-out/check-out.component.css":
/*!************************************************************!*\
  !*** ./src/app/shopping/check-out/check-out.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/check-out/check-out.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shopping/check-out/check-out.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Shipping</h2>\n<div class=\"row\" *ngIf=\"cart$ | async as cart\">\n  <div class=\"col-6\">\n    <shipping-form [cart]=\"cart\"></shipping-form>\n  </div>\n  <div class=\"col-6\">\n    <shopping-cart-summary [cart]=\"cart\"></shopping-cart-summary>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shopping/check-out/check-out.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shopping/check-out/check-out.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        this.cart$ = this.shoppingCartService.getCart();
    };
    CheckOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/shopping/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/shopping/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/shopping/my-orders/my-orders.component.css":
/*!************************************************************!*\
  !*** ./src/app/shopping/my-orders/my-orders.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/my-orders/my-orders.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shopping/my-orders/my-orders.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <strong>Orders</strong>\n        <span *ngIf=\"orders\" style=\"margin-left: 80%\" class=\"badge pull-right\">Count : {{orders.length}}</span>\n    </div>\n    <div class=\"panel-body\">\n            <table class=\"table table-striped\" [mfData]=\"orders\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n                    <thead>\n                    <tr>            \n                        <th style=\"width: 60%\">\n                            <mfDefaultSorter by=\"shipping.name\">Customer</mfDefaultSorter>\n                        </th>\n                        <th style=\"width: 20%\">\n                            <mfDefaultSorter by=\"datePlaced\">Date</mfDefaultSorter>\n                        </th> \n                        <th></th>                    \n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr *ngFor=\"let order of mf.data\">            \n                        <td>{{order.shipping.name}}</td>\n                        <td>{{order.datePlaced | date }}</td> \n                        <td>\n                            <a href=\"#\">View</a>                    \n                        </td>          \n                    </tr>\n                    </tbody>\n                    <tfoot>\n                    <tr>\n                        <td colspan=\"3\">\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n                        </td>\n                    </tr>\n                    </tfoot>\n            </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shopping/my-orders/my-orders.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shopping/my-orders/my-orders.component.ts ***!
  \***********************************************************/
/*! exports provided: MyOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function() { return MyOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyOrdersComponent = /** @class */ (function () {
    function MyOrdersComponent(orderService, authService) {
        var _this = this;
        this.orderService = orderService;
        this.authService = authService;
        this.orders = [];
        var order$ = this.authService.user$.switchMap(function (user) { return orderService.getOrdersByUser(user.uid).valueChanges(); });
        order$.subscribe(function (order) {
            _this.initializeTable(order);
        });
    }
    MyOrdersComponent.prototype.initializeTable = function (orders) {
        var _this = this;
        console.log(orders);
        this.orders = [];
        orders.forEach(function (order) {
            _this.orders.push(order);
        });
    };
    MyOrdersComponent.prototype.ngOnInit = function () {
    };
    MyOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-orders',
            template: __webpack_require__(/*! ./my-orders.component.html */ "./src/app/shopping/my-orders/my-orders.component.html"),
            styles: [__webpack_require__(/*! ./my-orders.component.css */ "./src/app/shopping/my-orders/my-orders.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"], shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MyOrdersComponent);
    return MyOrdersComponent;
}());



/***/ }),

/***/ "./src/app/shopping/order-success/order-success.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shopping/order-success/order-success.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/order-success/order-success.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/order-success/order-success.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "./src/app/shopping/order-success/order-success.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/order-success/order-success.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrderSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessComponent", function() { return OrderSuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = /** @class */ (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__(/*! ./order-success.component.html */ "./src/app/shopping/order-success/order-success.component.html"),
            styles: [__webpack_require__(/*! ./order-success.component.css */ "./src/app/shopping/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "./src/app/shopping/products/product-filter/product-filter.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/shopping/products/product-filter/product-filter.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sticky-top {\n    top:80px;\n    overflow: hidden;\n}\n.wrapper {\n    display: flex;\n    align-items: stretch;\n}\n#sidebar {\n    min-width: 250px;\n    max-width: 250px;\n    min-height: 100vh;\n}\n#sidebar.active {\n    margin-left: -250px;\n}\na[data-toggle=\"collapse\"] {\n    position: relative;\n}\n.dropdown-toggle::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n@media (max-width: 768px) {\n    #sidebar {\n        margin-left: -250px;\n    }\n    #sidebar.active {\n        margin-left: 0;\n    }\n}\na, a:hover, a:focus {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n#sidebar {\n    /* don't forget to add all the previously mentioned styles here too */\n    background: #7386D5;\n    color: #fff;\n    transition: all 0.3s;\n}\n#sidebar .sidebar-header {\n    padding: 20px;\n    background: #6d7fcc;\n}\n#sidebar ul.components {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n#sidebar ul p {\n    color: #fff;\n    padding: 10px;\n}\n#sidebar ul li a {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n#sidebar ul li a:hover {\n    color: #7386D5;\n    background: #fff;\n}\n#sidebar ul li.active > a, a[aria-expanded=\"true\"] {\n    color: #fff;\n    background: #6d7fcc;\n}\nul ul a {\n    font-size: 0.9em !important;\n    padding-left: 30px !important;\n    background: #6d7fcc;\n}\n\n"

/***/ }),

/***/ "./src/app/shopping/products/product-filter/product-filter.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shopping/products/product-filter/product-filter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sticky-top\" id=\"#navbarsExampleDefault\">\n\n  <div class=\"img-responsive\">\n  <div class=\"list-group\">\n    <a class=\"list-group-item list-group-item-action\"\n     routerLink=\"/\"\n     [class.active]=\"!category\">All Categories</a>\n    <a *ngFor=\"let c of categoriesList\" \n         routerLink=\"/\"            \n         [queryParams]=\"{ category: c.$key }\"\n         [class.active]=\"category === c.$key\"\n         class=\"list-group-item list-group-item-action\">\n       {{ c.name }}\n    </a>\n  </div>\n</div>\n</div>>"

/***/ }),

/***/ "./src/app/shopping/products/product-filter/product-filter.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shopping/products/product-filter/product-filter.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductFilterComponent", function() { return ProductFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/category.service */ "./src/app/shared/services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductFilterComponent = /** @class */ (function () {
    function ProductFilterComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        categoryService.getAll().snapshotChanges().subscribe(function (item) {
            _this.categoriesList = [];
            item.forEach(function (category) {
                var y = category.payload.toJSON();
                y["$key"] = category.key;
                _this.categoriesList.push(y);
            });
        });
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-filter',
            template: __webpack_require__(/*! ./product-filter.component.html */ "./src/app/shopping/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__(/*! ./product-filter.component.css */ "./src/app/shopping/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "./src/app/shopping/products/products.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shopping/products/products.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/products/products.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shopping/products/products.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">\n    <product-filter [category]=\"category\"></product-filter>\n  </div>\n  <div class=\"col\">\n      <div class=\"row\" *ngIf=\"cart$ | async as cart\">\n          <ng-container *ngFor=\"let p of filteredProductList; let i = index\">\n              <div class=\"col\">\n                 <product-card [product]=\"p\" [shopping-cart]=\"cart\"></product-card>\n              </div>\n              <div *ngIf=\"(i+1) %2 === 0\" class=\"w-100\"></div>\n          </ng-container>\n        </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/shopping/products/products.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shopping/products/products.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(route, productService, shoppingCartService) {
        this.route = route;
        this.productService = productService;
        this.shoppingCartService = shoppingCartService;
        this.productList = [];
        this.filteredProductList = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        this.populateProducts();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductsComponent.prototype.populateProducts = function () {
        var _this = this;
        this.products$ = this.productService.getAll().snapshotChanges().switchMap(function (item) {
            _this.productList = [];
            _this.filteredProductList = [];
            item.forEach(function (product) {
                var y = product.payload.toJSON();
                y["$key"] = product.key;
                if (y != null) {
                    _this.productList.push(y);
                }
            });
            _this.filteredProductList = _this.productList;
            return _this.route.queryParamMap;
        })
            .subscribe(function (params) {
            _this.category = params.get('category');
            _this.applyFilter();
        });
    };
    ProductsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.filteredProductList =
            (this.category) ?
                this.productList.filter(function (p) {
                    return p.category.toLowerCase().includes(_this.category.toLowerCase());
                }) :
                this.productList;
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/shopping/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/shopping/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shipping-form/shipping-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shopping/shipping-form/shipping-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/shipping-form/shipping-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/shipping-form/shipping-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"placeOrder()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input id=\"name\" #name=\"ngModel\" required name=\"name\" [(ngModel)]=\"shipping.name\" placeholder=\"name\"\n      class=\"form-control\" type=\"text\">\n      <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\">\n        Name is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addressLine1\">Address</label>\n      <input id=\"addressLine1\" #addressLine1=\"ngModel\" required name=\"addressLine1\" [(ngModel)]=\"shipping.addressLine1\" \n      class=\"form-control\" placeholder=\"line1\" type=\"text\">\n      <div class=\"alert alert-danger\" *ngIf=\"addressLine1.touched && addressLine1.invalid\">\n        Address is required\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label></label>   \n      <input id=\"addressLine2\" #addressLine2=\"ngModel\" required name=\"addressLine2\" placeholder=\"line2\" [(ngModel)]=\"shipping.addressLine2\" \n      class=\"form-control\" type=\"text\">    \n    </div>\n    <div class=\"form-group\">\n      <label for=\"city\">City</label>\n      <input id=\"city\" #city=\"ngModel\" required name=\"city\" [(ngModel)]=\"shipping.city\" placeholder=\"city\" \n      class=\"form-control\" type=\"text\">\n      <div class=\"alert alert-danger\" *ngIf=\"city.touched && city.invalid\">\n        City is required\n      </div>\n    </div>\n    <button class=\"btn btn-primary\" [disabled]=\"!f.valid\" style=\"margin-right:5px;\">Place Order</button>  \n    <button type=\"button\" class=\"btn btn-primary btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n  </form>"

/***/ }),

/***/ "./src/app/shopping/shipping-form/shipping-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/shipping-form/shipping-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShippingFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingFormComponent", function() { return ShippingFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var shared_models_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/models/order */ "./src/app/shared/models/order.ts");
/* harmony import */ var shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/services/order.service */ "./src/app/shared/services/order.service.ts");
/* harmony import */ var shared_models_shipping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/models/shipping */ "./src/app/shared/models/shipping.ts");
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShippingFormComponent = /** @class */ (function () {
    function ShippingFormComponent(authService, orderService, router) {
        this.authService = authService;
        this.orderService = orderService;
        this.router = router;
        this.shipping = new shared_models_shipping__WEBPACK_IMPORTED_MODULE_4__["Shipping"]();
    }
    ShippingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userId = user.uid; });
    };
    ShippingFormComponent.prototype.placeOrder = function () {
        var order = new shared_models_order__WEBPACK_IMPORTED_MODULE_2__["Order"](this.userId, this.shipping, this.cart);
        var result = this.orderService.placeOrder(order);
        this.router.navigate(['order-success', result.key]);
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        this.userSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cart'),
        __metadata("design:type", shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_5__["ShoppingCart"])
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__(/*! ./shipping-form.component.html */ "./src/app/shopping/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__(/*! ./shipping-form.component.css */ "./src/app/shopping/shipping-form/shipping-form.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">    \n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Order Summary</h5>\n      <p class=\"card-text\">You have {{ cart.totalItemsCount }} items in your shopping cart</p>\n      <ul class=\"list-group list-group-flush\">\n        <li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n          {{ item.quantity }} x {{ item.title }}\n          <div class=\"float-right\">\n            {{ item.total | currency:'INR':true }}\n          </div>\n        </li>\n        <li class=\"list-group-item font-weight-bold\">\n          Total\n          <div class=\"float-right\">\n            {{ cart.totalPrice | currency:'INR':true }}\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShoppingCartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartSummaryComponent", function() { return ShoppingCartSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/models/shopping-cart */ "./src/app/shared/models/shopping-cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShoppingCartSummaryComponent = /** @class */ (function () {
    function ShoppingCartSummaryComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("cart"),
        __metadata("design:type", shared_models_shopping_cart__WEBPACK_IMPORTED_MODULE_1__["ShoppingCart"])
    ], ShoppingCartSummaryComponent.prototype, "cart", void 0);
    ShoppingCartSummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shopping-cart-summary',
            template: __webpack_require__(/*! ./shopping-cart-summary.component.html */ "./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart-summary.component.css */ "./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShoppingCartSummaryComponent);
    return ShoppingCartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n    width: 80px;\n    height: 80px;\n    border-radius: 100%;\n    background-size: cover;\n}\n\n.card { \n    margin-bottom: 80px;\n  }"

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart</h1>\n<div class=\"row col-10\" *ngIf=\"cart$ | async as cart\">\n  <p>\n    You have {{ cart.totalItemsCount }} items in your shopping cart.\n    <button (click)=\"clearCart()\" *ngIf=\"cart && cart.items && cart.items.length\" \n     class=\"float-right btn btn-light btn-sm\">Clear Shopping Cart</button>\n  </p>\n  <div class=\"table-responsive-lg\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Product</th>\n        <th class=\"text-center\" style=\"width:300px\">Quantity</th>\n        <th class=\"text-right\" style=\"width:200px\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of cart.items\">\n        <td>\n          <div [style.backgroundImage]=\"'url(' + item.imageUrl + ')'\" class=\"thumbnail\"></div>\n        </td>\n        <td>{{ item.title }}</td>\n        <td>\n          <product-quantity [product]=\"item\" [shopping-cart]=\"cart\"></product-quantity>\n        </td>\n        <td class=\"text-right\">{{ item.total | currency:'INR':true }} </td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <th></th>\n        <th></th>\n        <th></th>\n        <th class=\"text-right\">{{ cart.totalPrice | currency:'USD':true }}</th>\n      </tr>\n    </tfoot>\n  </table>\n  \n  <div>\n  <a routerLink=\"/check-out\" *ngIf=\"cart && cart.items && cart.items.length\" class=\"btn btn-primary\">Check Out</a>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/shopping/shopping-cart/shopping-cart.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shopping/shopping-cart/shopping-cart.component.ts ***!
  \*******************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/services/shopping-cart.service */ "./src/app/shared/services/shopping-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ShoppingCartComponent = /** @class */ (function () {
    function ShoppingCartComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCartComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartComponent.prototype.clearCart = function () {
        console.log(" clear cart ");
        this.shoppingCartService.clearCart();
    };
    ShoppingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shopping-cart',
            template: __webpack_require__(/*! ./shopping-cart.component.html */ "./src/app/shopping/shopping-cart/shopping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shopping-cart.component.css */ "./src/app/shopping/shopping-cart/shopping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [shared_services_shopping_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartService"]])
    ], ShoppingCartComponent);
    return ShoppingCartComponent;
}());



/***/ }),

/***/ "./src/app/shopping/shopping.module.ts":
/*!*********************************************!*\
  !*** ./src/app/shopping/shopping.module.ts ***!
  \*********************************************/
/*! exports provided: ShoppingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingModule", function() { return ShoppingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "./src/app/shopping/shopping-cart/shopping-cart.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "./src/app/shopping/products/products.component.ts");
/* harmony import */ var _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check-out/check-out.component */ "./src/app/shopping/check-out/check-out.component.ts");
/* harmony import */ var _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-success/order-success.component */ "./src/app/shopping/order-success/order-success.component.ts");
/* harmony import */ var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-orders/my-orders.component */ "./src/app/shopping/my-orders/my-orders.component.ts");
/* harmony import */ var _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shopping-cart-summary/shopping-cart-summary.component */ "./src/app/shopping/shopping-cart-summary/shopping-cart-summary.component.ts");
/* harmony import */ var _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipping-form/shipping-form.component */ "./src/app/shopping/shipping-form/shipping-form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/product-filter/product-filter.component */ "./src/app/shopping/products/product-filter/product-filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ShoppingModule = /** @class */ (function () {
    function ShoppingModule() {
    }
    ShoppingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild([
                    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"] },
                    { path: 'shopping-cart', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartComponent"] },
                    { path: 'check-out', component: _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_3__["CheckOutComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                    { path: 'order-success/:id', component: _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_4__["OrderSuccessComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
                    { path: 'my/orders', component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_5__["MyOrdersComponent"], canActivate: [shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }
                ])
            ],
            declarations: [
                _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_1__["ShoppingCartComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"],
                _products_product_filter_product_filter_component__WEBPACK_IMPORTED_MODULE_11__["ProductFilterComponent"],
                _check_out_check_out_component__WEBPACK_IMPORTED_MODULE_3__["CheckOutComponent"],
                _order_success_order_success_component__WEBPACK_IMPORTED_MODULE_4__["OrderSuccessComponent"],
                _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_5__["MyOrdersComponent"],
                _shopping_cart_summary_shopping_cart_summary_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCartSummaryComponent"],
                _shipping_form_shipping_form_component__WEBPACK_IMPORTED_MODULE_7__["ShippingFormComponent"]
            ]
        })
    ], ShoppingModule);
    return ShoppingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyA27Ey_-oMj94YLFCIBTpUI-YPdrKsrMUo",
        authDomain: "oshop-801ff.firebaseapp.com",
        databaseURL: "https://oshop-801ff.firebaseio.com",
        projectId: "oshop-801ff",
        storageBucket: "oshop-801ff.appspot.com",
        messagingSenderId: "1053942118727"
    }
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/karthickj/Documents/shop-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map