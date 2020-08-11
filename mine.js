function bounceOff(thing1,thing2) {
 
    if (thing1.x - thing2.x < thing2.width/2 + thing1.width/2
      && thing2.x - thing1.x < thing2.width/2 + thing1.width/2) {
        thing1.velocityX = thing1.velocityX * (-1);
        thing2.velocityX = thing2.velocityX * (-1);
  }
  if (thing1.y - thing2.y < thing2.height/2 + thing1.height/2
    && thing2.y - thing1.y < thing2.height/2 + thing1.height/2){
      thing1.velocityY = thing1.velocityY * (-1);
      thing2.velocityY = thing2.velocityY * (-1);
  }
  }