export const handleTypewriterEffect = async function(
  setCurrentEmStrState,
  isDeleting,
  currentEmArrIndex,
  currentEmStr,
  emStrArr
){
  const getNextEmStr = async function(){
    const changeTypingDirection = ()=>{isDeleting.current = !isDeleting.current};
    
    const handleCompletion = ()=>{
      changeTypingDirection();
      currentEmStr.current = nextStr;
      setCurrentEmStrState(currentEmStr.current);
    };
  
    const fullStr = emStrArr[currentEmArrIndex.current];
  
    // get the next string to be shown in the typewriter effect
    let nextStr = '';
    isDeleting.current === true ? nextStr = fullStr.substring(0,currentEmStr.current.length-1) : nextStr = fullStr.substring(0,currentEmStr.current.length+1);
  
    if (nextStr===fullStr){
      handleCompletion();
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }else if (nextStr.length===0){
      handleCompletion();   
      currentEmArrIndex.current = (currentEmArrIndex.current+1) % emStrArr.length;
    }else{
      currentEmStr.current = nextStr;
      setCurrentEmStrState(currentEmStr.current);
    };
  };
 
  //endlessly loop
  while (true){
    //get the next string to be shown in the typewriter effect
    await getNextEmStr();

    //set a sleep for 50ms to simulate actual typing
    await new Promise((resolve) => setTimeout(resolve, 40));
  };
};