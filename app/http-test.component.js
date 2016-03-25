System.register(['angular2/core', './http-test.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_test_service_1;
    var HTTPTestComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_test_service_1_1) {
                http_test_service_1 = http_test_service_1_1;
            }],
        execute: function() {
            HTTPTestComponent = (function () {
                function HTTPTestComponent(_httpServie) {
                    this._httpServie = _httpServie;
                }
                HTTPTestComponent.prototype.onTestGet = function () {
                    var _this = this;
                    this._httpServie.getCurrentTime()
                        .subscribe(function (data) { return _this.getData = JSON.stringify(data); }, function (error) { return alert(error.message); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent.prototype.onTestPost = function () {
                    var _this = this;
                    this._httpServie.postJSON()
                        .subscribe(function (data) {
                        _this.postData = JSON.stringify(data);
                        _this.user = data;
                    }, function (error) { return alert(error.message); }, function () { return console.log("Finished"); });
                };
                HTTPTestComponent = __decorate([
                    core_1.Component({
                        selector: 'http-test',
                        template: "<button (click)=\"onTestGet()\">Test GET : Request</button>\n             <p>Output : {{getData}}</p>\n             <button (click)=\"onTestPost()\">Test POST : Request</button>\n             <p>Output : {{postData}}</p>\n              <h4 *ngIf=\"user\">{{user.prenom}} {{user.nom}} {{user.age}}</h4>\n  ", providers: [http_test_service_1.HTTPTestService]
                    }), 
                    __metadata('design:paramtypes', [http_test_service_1.HTTPTestService])
                ], HTTPTestComponent);
                return HTTPTestComponent;
            }());
            exports_1("HTTPTestComponent", HTTPTestComponent);
        }
    }
});
//# sourceMappingURL=http-test.component.js.map