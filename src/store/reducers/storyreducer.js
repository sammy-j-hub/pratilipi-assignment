//initially the basket is completely empty
const initState = {
    storyDummy: [
      {id: '1', title: 'is tiktok worth it', content: 'blah blah blah'},
      {id: '2', title: 'get arsha help', content: 'blah blah blah'},
      {id: '3', title: 'do i really need new shoes', content: 'blah blah blah'}
    ]
  }
  //This is the listener present in every component
  const storyReducer = (state = initState, action) => {
    switch(action.type){
      case 'CREATE_STORY':
        console.log('Created story', action.story);
        return state;
      case 'CREATE_STORY_ERROR':
        console.log('Created story error', action.story);
        return state;
      default:
        return state;
    }
    
  };
  
  export default storyReducer;
  