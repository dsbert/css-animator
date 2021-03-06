"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var animation_service_1 = require('./animation.service');
var AnimatesDirective = (function () {
    function AnimatesDirective(_elementRef, animationService) {
        this._elementRef = _elementRef;
        this._animationBuilder = animationService.builder();
    }
    Object.defineProperty(AnimatesDirective.prototype, "animates", {
        set: function (options) {
            this._defaultOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimatesDirective.prototype, "animatesOnInit", {
        set: function (options) {
            this._initOptions = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimatesDirective.prototype, "animationBuilder", {
        get: function () {
            return this._animationBuilder;
        },
        enumerable: true,
        configurable: true
    });
    AnimatesDirective.prototype.ngOnInit = function () {
        if (!this._initOptions) {
            return;
        }
        this._animationBuilder
            .setOptions(this._initOptions)
            .show(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.start = function (options) {
        this.setOptions(options);
        return this._animationBuilder
            .animate(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.hide = function (options) {
        this.setOptions(options);
        return this._animationBuilder
            .setOptions(options)
            .hide(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.show = function (options) {
        this.setOptions(options);
        return this._animationBuilder
            .show(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.animate = function () {
        if (!this._defaultOptions) {
            return;
        }
        return this._animationBuilder
            .setOptions(this._defaultOptions)
            .animate(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.pause = function () {
        this._animationBuilder
            .setPlayState('paused')
            .applyPlayState(this._elementRef.nativeElement);
    };
    AnimatesDirective.prototype.resume = function () {
        this._animationBuilder
            .setPlayState('running')
            .applyPlayState(this._elementRef.nativeElement);
    };
    AnimatesDirective.prototype.toggle = function () {
        this._animationBuilder
            .setPlayState(this._animationBuilder.playState === 'running' ? 'paused' : 'running')
            .applyPlayState(this._elementRef.nativeElement);
    };
    AnimatesDirective.prototype.stop = function () {
        this._animationBuilder
            .stop(this._elementRef.nativeElement)
            .then(function (element) { return element; }, function (error) {
            // Animation interrupted
        });
    };
    AnimatesDirective.prototype.setOptions = function (options) {
        if (options) {
            this._animationBuilder.setOptions(options);
            return;
        }
        this._animationBuilder.setOptions(this._defaultOptions);
    };
    AnimatesDirective = __decorate([
        core_1.Directive({
            selector: '[animates]',
            exportAs: 'animates',
            inputs: [
                'animates',
                'animatesOnInit'
            ]
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(animation_service_1.AnimationService)), 
        __metadata('design:paramtypes', [core_1.ElementRef, animation_service_1.AnimationService])
    ], AnimatesDirective);
    return AnimatesDirective;
}());
exports.AnimatesDirective = AnimatesDirective;
