function fill_color(shape1,shape2){
    if(shape1.x-shape2.x < shape1.width/2+shape2.width/2&&
      shape2.x-shape1.x < shape1.width/2+shape2.width/2&&
      shape1.y-shape2.y < shape1.height/2+shape2.height/2&&
      shape2.y-shape1.y < shape1.height/2+shape2.height/2){
  return true;
        
      }else {
        
        return false;
        }
  }
  
  function bounceoff(obj1,obj2){
    if(obj1.x-obj2.x < obj1.width/2+obj2.width/2&&
      obj2.x-obj1.x < obj1.width/2+obj2.width/2){
    
        obj1.velocityX=obj1.velocityX*-1;
        obj2.velocityX=obj2.velocityX*-1;
      }
    if(obj1.y-obj2.y < obj1.height/2+obj2.height/2&&
      obj2.y-obj1.y < obj1.height/2+obj2.height/2){
    
        obj1.velocityY=obj1.velocityY*-1;
        obj2.velocityY=obj2.velocityY*-1;
    
      }
  
  }