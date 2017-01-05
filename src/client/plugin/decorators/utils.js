"use strict";
// angular
var core_1 = require('@angular/core');
// app
var magic_service_1 = require('../services/magic.service');
var _reflect = Reflect;
var MagicDecoratorUtils = (function () {
    function MagicDecoratorUtils() {
    }
    MagicDecoratorUtils.getMetadata = function (metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        if (metadata.templateUrl) {
            // correct view for platform target
            metadata.templateUrl = magic_service_1.MagicService.TEMPLATE_URL(metadata.templateUrl, !!metadata.platformSpecific);
        }
        if (metadata.styleUrls) {
            // correct style for platform target
            metadata.styleUrls = magic_service_1.MagicService.STYLE_URLS(metadata.styleUrls);
        }
        return metadata;
    };
    MagicDecoratorUtils.annotateComponent = function (cls, metadata, customDecoratorMetadata) {
        if (metadata === void 0) { metadata = {}; }
        var annotations = _reflect.getMetadata('annotations', cls) || [];
        annotations.push(new core_1.Component(MagicDecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
        _reflect.defineMetadata('annotations', annotations, cls);
        return cls;
    };
    return MagicDecoratorUtils;
}());
exports.MagicDecoratorUtils = MagicDecoratorUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsVUFBVTtBQUNWLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUV4QyxNQUFNO0FBQ04sOEJBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFHdkQsSUFBTSxRQUFRLEdBQVEsT0FBTyxDQUFDO0FBRTlCO0lBQUE7SUFzQkEsQ0FBQztJQXJCZSwrQkFBVyxHQUF6QixVQUEwQixRQUFrQixFQUFFLHVCQUE2QjtRQUFqRCx3QkFBa0IsR0FBbEIsYUFBa0I7UUFFMUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDekIsbUNBQW1DO1lBQ25DLFFBQVEsQ0FBQyxXQUFXLEdBQUcsNEJBQVksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEcsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLG9DQUFvQztZQUNwQyxRQUFRLENBQUMsU0FBUyxHQUFHLDRCQUFZLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRWEscUNBQWlCLEdBQS9CLFVBQWdDLEdBQVEsRUFBRSxRQUFrQixFQUFFLHVCQUE2QjtRQUFqRCx3QkFBa0IsR0FBbEIsYUFBa0I7UUFDMUQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pFLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBUyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsMEJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJZLDJCQUFtQixzQkFzQi9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbmd1bGFyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8vIGFwcFxuaW1wb3J0IHtNYWdpY1NlcnZpY2V9IGZyb20gJy4uL3NlcnZpY2VzL21hZ2ljLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBSZWZsZWN0OiBhbnk7XG5jb25zdCBfcmVmbGVjdDogYW55ID0gUmVmbGVjdDtcblxuZXhwb3J0IGNsYXNzIE1hZ2ljRGVjb3JhdG9yVXRpbHMge1xuICBwdWJsaWMgc3RhdGljIGdldE1ldGFkYXRhKG1ldGFkYXRhOiBhbnkgPSB7fSwgY3VzdG9tRGVjb3JhdG9yTWV0YWRhdGE/OiBhbnkpIHtcblxuICAgIGlmIChtZXRhZGF0YS50ZW1wbGF0ZVVybCkge1xuICAgICAgLy8gY29ycmVjdCB2aWV3IGZvciBwbGF0Zm9ybSB0YXJnZXRcbiAgICAgIG1ldGFkYXRhLnRlbXBsYXRlVXJsID0gTWFnaWNTZXJ2aWNlLlRFTVBMQVRFX1VSTChtZXRhZGF0YS50ZW1wbGF0ZVVybCwgISFtZXRhZGF0YS5wbGF0Zm9ybVNwZWNpZmljKTtcbiAgICB9XG5cbiAgICBpZiAobWV0YWRhdGEuc3R5bGVVcmxzKSB7XG4gICAgICAvLyBjb3JyZWN0IHN0eWxlIGZvciBwbGF0Zm9ybSB0YXJnZXRcbiAgICAgIG1ldGFkYXRhLnN0eWxlVXJscyA9IE1hZ2ljU2VydmljZS5TVFlMRV9VUkxTKG1ldGFkYXRhLnN0eWxlVXJscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBhbm5vdGF0ZUNvbXBvbmVudChjbHM6IGFueSwgbWV0YWRhdGE6IGFueSA9IHt9LCBjdXN0b21EZWNvcmF0b3JNZXRhZGF0YT86IGFueSkge1xuICAgIGxldCBhbm5vdGF0aW9ucyA9IF9yZWZsZWN0LmdldE1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIGNscykgfHwgW107XG4gICAgYW5ub3RhdGlvbnMucHVzaChuZXcgQ29tcG9uZW50KE1hZ2ljRGVjb3JhdG9yVXRpbHMuZ2V0TWV0YWRhdGEobWV0YWRhdGEsIGN1c3RvbURlY29yYXRvck1ldGFkYXRhKSkpO1xuICAgIF9yZWZsZWN0LmRlZmluZU1ldGFkYXRhKCdhbm5vdGF0aW9ucycsIGFubm90YXRpb25zLCBjbHMpO1xuICAgIHJldHVybiBjbHM7XG4gIH1cbn1cbiJdfQ==