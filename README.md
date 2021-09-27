# Google Drive Folder copy 
Google made it nearly impossible to copy a folder structure from mydrive to a shared drive. Problem solved with Google App Script and Google Drive API. 

Getting started with Google App Script https://developers.google.com/apps-script
1. https://script.google.com/
2. New Project
3. Delete the sample code and paste in the code from this project
4. Edit the source folder ID 
5. If you want the folder structured copied to the root of Mydrive leave the variable blank, otherwise provide the ID of the target folder
6. Click Services and add the Drive API
7. Click Save
8. Click Run
9. You will get a Authorization required prompt, click Review Permissions
10. It asks to verify your google acct 
11. Next comes the "Google hasn’t verified this app" warning. To get past this click "Advanced" then "Go to Untitled project (unsafe)"
12. Click "Allow" on the permission dialog

