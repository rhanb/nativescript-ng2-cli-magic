"use strict";
var MagicService = (function () {
  function MagicService() {
  }

  MagicService.TEMPLATE_URL = function (path) {
    if (MagicService.IS_NATIVESCRIPT()) {
      path = path.replace("./", "./app/");
      var paths = path.split('.');
      paths.splice(-1);
      console.error('TEMPLATE_URL', path);
      return paths.join('.') + ".tns.html";
    }
    else {
      return path;
    }
  };
  MagicService.STYLE_URLS = function (pathArray) {
    if (MagicService.IS_NATIVESCRIPT()) {
      var currentPath;
      for (var i = 0; i < pathArray.length; i++) {
        console.log(currentPath);
        currentPath = pathArray[i];
        currentPath = currentPath.replace("./", "./app/");
        var paths = currentPath.split('.');
        paths.splice(-1);
        currentPath = paths.join('.') + ".tns.css";
        pathArray[i] = currentPath;
        console.error(pathArray[i]);
      }
      console.error('STYLE_URLS', pathArray);
      return pathArray;
    }
    else {
      return path;
    }
  };
  MagicService.IS_NATIVESCRIPT = function () {
    return ((typeof NSObject !== 'undefined' && typeof NSString !== 'undefined') || (typeof android !== 'undefined' && typeof java !== 'undefined'));
  };
  return MagicService;
}());
exports.MagicService = MagicService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFnaWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hZ2ljLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBO0lBQUE7SUFlQSxDQUFDO0lBYmUseUJBQVksR0FBMUIsVUFBMkIsSUFBWTtRQUNyQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFXLENBQUM7UUFDdkMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRWEsNEJBQWUsR0FBN0I7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ25KLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFmRCxJQWVDO0FBZlksb0JBQVksZUFleEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIE5TT2JqZWN0LCBOU1N0cmluZywgYW5kcm9pZCwgamF2YTtcblxuZXhwb3J0IGNsYXNzIE1hZ2ljU2VydmljZSB7XG5cbiAgcHVibGljIHN0YXRpYyBURU1QTEFURV9VUkwocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoTWFnaWNTZXJ2aWNlLklTX05BVElWRVNDUklQVCgpKSB7XG4gICAgICBsZXQgcGF0aHMgPSBwYXRoLnNwbGl0KCcuJyk7XG4gICAgICBwYXRocy5zcGxpY2UoLTEpO1xuICAgICAgcmV0dXJuIGAke3BhdGhzLmpvaW4oJy4nKX0udG5zLmh0bWxgO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIElTX05BVElWRVNDUklQVCgpIHtcbiAgICByZXR1cm4gKCh0eXBlb2YgTlNPYmplY3QgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBOU1N0cmluZyAhPT0gJ3VuZGVmaW5lZCcpIHx8ICh0eXBlb2YgYW5kcm9pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGphdmEgIT09ICd1bmRlZmluZWQnKSk7XG4gIH1cbn1cbiJdfQ==
