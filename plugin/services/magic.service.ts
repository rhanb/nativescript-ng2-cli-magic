declare var NSObject, NSString, android, java;
import * as fs from 'file-system';
const documents = fs.knownFolders.documents();


export class MagicService {

    public static TEMPLATE_URL(filePath: string, platformSpecific?: boolean): string {
        let newTemplateUrl: string = filePath;
        if (MagicService.IS_NATIVESCRIPT()) {
            newTemplateUrl = MagicService.pathParser(filePath, platformSpecific);
        }
        return newTemplateUrl;
    }

    public static STYLE_URLS(filePaths: string[], platformSpecific?: boolean): string[] {
        let newStyleUrls: string[] = filePaths;
        if (MagicService.IS_NATIVESCRIPT()) {
            let currentStyleUrl: string;
            for (var y = 0; y < filePaths.length; y++) {
                currentStyleUrl = filePaths[y];
                filePaths[y] = MagicService.pathParser(currentStyleUrl, platformSpecific, 'css');
            }
            newStyleUrls = filePaths;
        }
        return newStyleUrls;
    }

    public static pathParser(filePath: string, platformSpecific?: boolean, fileExtension?: string): string {
        filePath = filePath.replace("./", "./app/");
        let pathResult: string = filePath;
        let fileNameTab: string[] = filePath.split('/');
        let fileName: string = fileNameTab[fileNameTab.length - 1];
        let completeFilePath: string = fs.path.join(documents.path, "app/app/", fileName);
        let fileExistsInCurrentFolder: boolean = fs.File.exists(completeFilePath);
        if (!fileExistsInCurrentFolder) {
            let ngDocuments: any = documents.getFolder("app/app");
            let ngEntities: any = ngDocuments.getEntitiesSync();
            console.log("all antities of root folder");
            console.dir(ngEntities);
            let ngEntity: any;
            for (var i = 0; i < ngEntities.length; i++) {
                ngEntity = ngEntities[i];
                if (fs.Folder.exists([documents.path, "/app/app/", ngEntity.name].join(""))) {
                    console.log("folder with entity name found");
                    filePath = filePath.replace("./app/", ["./app/", ngEntity.name, "/"].join(""));
                    console.log("new path is:");
                    console.log(filePath);
                    pathResult = MagicService.fixExtension(filePath, platformSpecific, fileExtension);
                    console.log("changing extension");
                    console.log(pathResult);
                    break;
                }
            }
        } else {
            pathResult = MagicService.fixExtension(filePath, platformSpecific, fileExtension);
        }
        return pathResult;
    };

    public static fixExtension(filePath: string, platformSpecific?: boolean, fileExtension?: string): string {
        let parts: string[] = filePath.split('.');
        if (!fileExtension) {
            fileExtension = parts[parts.length - 1];
        }
        parts.splice(-1);
        let platform: any = platformSpecific ? (MagicService.IS_ANDROID() ? 'android' : 'ios') : 'tns';
        return [parts.join("."), '.', platform, '.', fileExtension].join("");
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
