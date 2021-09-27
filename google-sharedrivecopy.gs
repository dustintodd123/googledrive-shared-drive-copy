function start() {
  // Google App Script to the rescue
  // Code adapted from this artcile https://www.labnol.org/code/19979-copy-folders-drive
  // Thank you Amit Agarwal https://github.com/labnol
  // This script will copy all files and folders from the source Folder ID to a Destination Folder ID
  // The Source Folder name will be created in the destination folder
  // If you have been driven insane by Google Drives inability to copy a folder structure from MyDrive to a Shared drive BOOM!
  // 
  // Important note: Enable the Drive service in the script editor https://developers.google.com/apps-script/advanced/drive

  var sourceFolderId = "XXXX"; //Folder ID of the folder structure you want to copy
  //Add target folder ID if you want the dest to be somewhere other than the root of Mydrive
  var targetParentFolderId = "";  
  
  var sourceFolder = DriveApp.getFolderById(sourceFolderId); //Source Folder
  
  if (targetParentFolderId.length > 0 ) {
    // If the target folder ID has been provided, create the target folder within that folder
    var targetParent = DriveApp.getFolderById(targetParentFolderId); //Parent Folder (target)
    console.log( "Create target folder: " + sourceFolder.getName() + " in " + targetParent.getName());
    var target = targetParent.createFolder(sourceFolder.getName()); //Create the source folder we are copying
  } else {
    // If the target folder ID is empty, create the target folder within the root of Mydrive
    console.log( "Create target folder in Mydrive: " + sourceFolder.getName());
    var target = DriveApp.createFolder(sourceFolder.getName()); //Create the source folder
  }
  
  //Here we go
  copyFolder(sourceFolder, target);
  console.log("Copy finish");
}

function copyFolder(source, target) {

  var folders = source.getFolders();
  var files   = source.getFiles();

  while(files.hasNext()) {
    var file = files.next();
    console.log( "Copying file: " + file.getName());
    file.makeCopy(file.getName(), target);
  }

  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    console.log( "Copying folder: " + folderName);
    var targetFolder = target.createFolder(folderName);
    copyFolder(subFolder, targetFolder);
  }

}
