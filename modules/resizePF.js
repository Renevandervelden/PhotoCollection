//function to enlarge a profile picture
function enlargePF(flexGroup) {
  var dimension = kony.os.deviceInfo().screenWidth * 0.9;
  flexGroup.width = dimension;
  flexGroup.height = dimension;
  
  frmHome.profilePicture1.width = dimension;
  frmHome.profilePicture1.height = dimension;

  frmHome.imageCounterPerson1.width = frmHome.FlexGroupPerson1.width * 0.1;
  frmHome.imageCounterPerson1.height = frmHome.FlexGroupPerson1.width * 0.1;
  
  flexGroupPerson1size = 1;
  
  //frmHome.imageCounterPerson1.right = frmHome.FlexGroupPerson1.width * 0.1;
  //frmHome.imageCounterPerson1.bottom = frmHome.FlexGroupPerson1.width * 0.1;
}

function shrinkPF(flexGroup) {
  var dimension = kony.os.deviceInfo().screenWidth * 0.4;
  flexGroup.width = dimension;
  flexGroup.height = dimension;
  
  frmHome.profilePicture1.width = dimension;
  frmHome.profilePicture1.height = dimension;

  frmHome.imageCounterPerson1.width = frmHome.FlexGroupPerson1.width * 0.1;
  frmHome.imageCounterPerson1.height = frmHome.FlexGroupPerson1.width * 0.1;
  
    flexGroupPerson1size = 0;
  
  //frmHome.imageCounterPerson1.right = frmHome.FlexGroupPerson1.width * 0.1;
  //frmHome.imageCounterPerson1.bottom = frmHome.FlexGroupPerson1.width * 0.1;
}
