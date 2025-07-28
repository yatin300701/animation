function call(){
   
  function callThis(){ let _count = 0;
    if(_count>1) return;
    console.log("here")
    _count++;}

    return function(){
        callThis()
    }()
}
call()
call()
call()