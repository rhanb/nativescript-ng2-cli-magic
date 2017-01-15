declare var NSObject, NSString, android, java;
/*import fs = require('file-system');
const documents = fs.knownFolders.documents();
import async = require('async');*/


export class MagicService {

    public static TEMPLATE_URL(filePath: string, platformSpecific?: boolean): string {
        if (MagicService.IS_NATIVESCRIPT()) {
            return MagicService.pathParser(filePath, platformSpecific);
        } else {
            return filePath;
        }
    }

    public static STYLE_URLS(filePaths: string[], platformSpecific?: boolean): string[] {
        if (MagicService.IS_NATIVESCRIPT()) {
            filePaths.forEach(function (filePath) {
                filePath = MagicService.pathParser(filePath, platformSpecific, 'css');
            });
            return filePaths;
            /*async.each(filePaths, function (filePath, callback) {
                filePath = MagicService.pathParser(filePath, platformSpecific, 'css');
                callback();
            }, function (error) {
                if (error) {
                    console.error(error);
                } else {
                    return filePaths;
                }
            });*/
        } else {
            return filePaths;
        }
    }

    public static pathParser(filePath: string, platformSpecific?: boolean, fileExtension?: string): string {
        var pathResult;
        /*filePath = filePath.replace("./", "./app/");
        var fileNameTab = filePath.split('/');
        var fileName = fileNameTab[fileNameTab.length - 1];
        var completeFilePath = fs.path.join(documents.path, "app/app/", fileName);
        var fileExistsInCurrentFolder = fs.File.exists(completeFilePath);
        if (!fileExistsInCurrentFolder) {
            var ngDocuments = documents.getFolder("app/app");
            ngDocuments.getEntities()
                .then(function (ngEntities) {
                    ngEntities.forEach(function (ngEntity) {
                        if (fs.Folder.exists([documents.path, "/app/app/", ngEntity.name].join(""))) {
                            filePath = filePath.replace("./app/", ["./app/", ngEntity.name, "/"].join(""));
                            pathResult = MagicService.fixExtension(filePath, platformSpecific, fileExtension);
                            console.log(pathResult);
                            return pathResult;
                        }
                    });
                }, function (error) {
                    console.error(error);
                });

        } else {
            return this.fixExtension(filePath, platformSpecific, fileExtension);
        }*/
        return this.fixExtension(filePath, platformSpecific, fileExtension);
    };

    public static fixExtension(filePath: string, platformSpecific?: boolean, fileExtension?: string): string {
        var parts = filePath.split('.');
        if (!fileExtension) {
            fileExtension = parts[parts.length - 1];
        }
        parts.splice(-1);
        var platform = platformSpecific ? (MagicService.IS_ANDROID() ? 'android' : 'ios') : 'tns';
        //var pathResult = `${parts.join('.')}...${platform}...${fileExtension}`;
        var pathResult = [parts.join("."), '.', platform, '.', fileExtension].join("");
        return pathResult;
    };

    public static IS_NATIVESCRIPT() {
        return (MagicService.IS_IOS() || MagicService.IS_ANDROID());
    }

    public static IS_IOS() {
        return (typeof NSObject !== 'undefined' && typeof NSString !== 'undefined');
    }

    public static IS_ANDROID() {
        return (typeof android !== 'undefined' && typeof java !== 'undefined');
    }
}
