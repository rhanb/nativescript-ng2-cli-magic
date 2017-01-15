declare var NSObject, NSString, android, java;
import * as fs from 'file-system';
const documents = fs.knownFolders.documents();


export class MagicService {

    public static TEMPLATE_URL(filePath: string, platformSpecific?: boolean): string {
        console.log("TEMPLATE_URL");
        let newTemplateUrl: string = filePath;
        if (MagicService.IS_NATIVESCRIPT()) {
            newTemplateUrl = MagicService.pathParser(filePath, platformSpecific);
        }
        console.log('last version of templateUrl');
        console.log(newTemplateUrl);
        return newTemplateUrl;
    }

    public static STYLE_URLS(filePaths: string[], platformSpecific?: boolean): string[] {
        console.log("STYLE_URLS");
        let newStyleUrls: string[] = filePaths;
        if (MagicService.IS_NATIVESCRIPT()) {
            let currentStyleUrl: string;
            newStyleUrls = filePaths.map((currentStyleUrl) => {
                return MagicService.pathParser(currentStyleUrl, platformSpecific, 'css');
            });
        }
        console.log("last version of styleUrls");
        console.dir(newStyleUrls);
        return newStyleUrls;
    }

    public static pathParser(filePath: string, platformSpecific?: boolean, fileExtension?: string): string {
        filePath = filePath.replace("./", "./app/");
        filePath = MagicService.fixExtension(filePath, platformSpecific, fileExtension);
        let fileNameTab: string[] = filePath.split('/'),
            fileName: string = fileNameTab[fileNameTab.length - 1],
            completeFilePath: string = fs.path.join(documents.path, "app/app/", fileName),
            fileExistsInCurrentFolder: boolean = fs.File.exists(completeFilePath);
        if (!fileExistsInCurrentFolder) {
            console.log("file doesnt exist in the root folder of the app");
            console.log(filePath);
            let ngEntities: any = documents.getFolder("app/app").getEntitiesSync(),
                ngEntity: any;
            for (var i = 0; i < ngEntities.length; i++) {
                ngEntity = ngEntities[i];
                if (fs.Folder.exists([documents.path, "/app/app/", ngEntity.name].join(""))) {
                    console.log("folder with entity name found");
                    filePath = filePath.replace("./app/", ["./app/", ngEntity.name, "/"].join(""));
                    console.log("new path is:");
                    console.log(filePath);
                    break;
                }
            }
        }
        return filePath;
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
