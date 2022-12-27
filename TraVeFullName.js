var FirstName = 'aBCdefG';
var LateName = 'hIgjLMnOp';
FirstName=FirstName.toLowerCase()
LateName=LateName.toLowerCase()
var FullName = FirstName.concat(LateName);
FirstName=FirstName.replace(FirstName.charAt(0),FirstName.charAt(0).toUpperCase())
LateName=LateName.replace(LateName.charAt(0),LateName.charAt(0).toUpperCase())
var FullName = FirstName + ' '+ LateName
console.log(FullName)
//convertToArray = FullName.toLowerCase().split(' ');
