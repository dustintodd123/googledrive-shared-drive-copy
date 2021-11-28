function start() {

  //global variables to facilitate logging and email

  PropertiesService.getScriptProperties().setProperty('sourceFolderIdGlobal', 'xxx');
  PropertiesService.getScriptProperties().setProperty('targetParentFolderIdGlobal', 'xxx');
  PropertiesService.getScriptProperties().setProperty('StartTime', new Date());   //get timestamp to record the intial execution time

  

{
  // Google App Script to the rescue
  // Code adapted from this artcile https://www.labnol.org/code/19979-copy-folders-drive
  // Thank you Amit Agarwal https://github.com/labnol
  // This script will copy all files and folders from the source Folder ID to a Destination Folder ID
  // The Source Folder name will be created in the destination folder
  // If you have been driven insane by Google Drives inability to copy a folder structure from MyDrive to a Shared drive BOOM!
  // 
  // Important note: Enable the Drive service in the script editor https://developers.google.com/apps-script/advanced/drive
  
  
  var sourceFolderId = PropertiesService.getScriptProperties().getProperty('sourceFolderIdGlobal'); //Folder ID of the folder structure you want to copy
  //Add target folder ID if you want the dest to be somewhere other than the root of Mydrive
  var targetParentFolderId = PropertiesService.getScriptProperties().getProperty('targetParentFolderIdGlobal');  
  
  var sourceFolder = DriveApp.getFolderById(sourceFolderId); //Source Folder
  
  if (targetParentFolderId.length > 0 ) {
    // If the target folder ID has been provided, create the target folder within that folder
    var targetParent = DriveApp.getFolderById(targetParentFolderId); //Parent Folder (target)
    Logger.log( "Create target folder: " + sourceFolder.getName() + " in " + targetParent.getName()); //copy console entry into stored logger
    var target = targetParent.createFolder(sourceFolder.getName()); //Create the source folder we are copying
  } else {
    // If the target folder ID is empty, create the target folder within the root of Mydrive
    
    Logger.log( "Create target folder in Mydrive: " + sourceFolder.getName()); //copy console entry into stored logger
    Logger.log( "Create target folder in Mydrive: " + sourceFolder.getName()); //copy console entry into stored logger
    var target = DriveApp.createFolder(sourceFolder.getName()); //Create the source folder
  }
  
  //Here we go

  Logger.clear; //Clear stored log data before next execution so we don't keep sending old data
  var recipient = 'email@email.com';  //Destination email address to notify that script has started (for triggered executions)
  var subject = 'MyDrive Copy Log';
  var body = 'MyDrive Copy Started for folder pair: '+sourceFolderId+' to '+targetParentFolderId+"\n This script execution was started at "+ PropertiesService.getScriptProperties().getProperty('StartTime');
  MailApp.sendEmail(recipient, subject, body);


  copyFolder(sourceFolder, target);
  Logger.log("Copy finish"); //copy console entry into stored logger
  
  var recipient = 'email@email.com'; //Destination email address to send final completion notice and the logged console data
  var subject = 'MyDrive Copy Log';
  var body = 'MyDrive Copy finished at '+ new Date()+';'+" The execution log is as follows: \n" +Logger.getLog();
  MailApp.sendEmail(recipient, subject, body);

}
}


function copyFolder(source, target) {
  var folders = source.getFolders();
  var files   = source.getFiles();

  

  while(files.hasNext()) {
    var file = files.next();
    Logger.log( "Copying file: " + file.getName()); //copy console entry into stored logger
    file.makeCopy(file.getName(), target);
  }

  while(folders.hasNext()) {
    var subFolder = folders.next();
    var folderName = subFolder.getName();
    Logger.log( "Copying folder: " + folderName); //copy console entry into stored logger
    var targetFolder = target.createFolder(folderName);
    copyFolder(subFolder, targetFolder);
  }

}
