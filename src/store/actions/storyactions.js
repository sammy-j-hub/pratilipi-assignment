
export const createStory= (story)=>{
    return(dispatch, getState,  { getFirestore} ) => {
        //make async call to DB
        const fireStore =  getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('stories').add({
            ...story,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=> {
            dispatch({ type: 'CREATE_STORY', story });
        }).catch(err => {
            dispatch({ type: 'CREATE_STORY_ERROR' }, err);
        });
    }
};