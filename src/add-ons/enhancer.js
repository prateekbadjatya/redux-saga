export const addLoggingOnDispatch = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {
        // console.log('preloadedState', preloadedState)
        // console.log('enhancers', enhancers)
        // console.log('rootReducer', rootReducer)

        const store = createStore(rootReducer, preloadedState, enhancers)
        
        function customDispatch(action) {
            const result = store.dispatch(action)
            console.log('logging my action')
            return result
        }
        store.Prateek = {}
        return {
            ...store, dispatch: customDispatch
        }
    }
}

export const addAppVersion = (createStore) => {
    return (rootReducer, preloadedState, enhancers) => {

        const store = createStore(rootReducer, preloadedState, enhancers)

       function newgetState() {
        return {
            ...store.getState(),
            appVersion: 1.0
        }
       }
        return {
            ...store, 
            getState: newgetState
        }
    }
}