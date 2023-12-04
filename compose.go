    import { applyMiddleware, compose }  
    from "redux";  
    import thunk from "redux-thunk";  
    [...]  
    const store = createStore(  
        rootReducer,  
        compose(  
            applyMiddleware(thunk),  
            devtools  
        )  
    );  
