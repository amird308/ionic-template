//import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
// import loggerMiddleware from './middleware/logger';
// import monitorReducersEnhancer from './enhancers/monitorReducers';

export default function configureAppStore() {
    const store = configureStore({
      //reducer: rootReducer,
      //middleware: (getDefaultMiddleware) =>
      //  getDefaultMiddleware().concat(loggerMiddleware),
      //enhancers: [monitorReducersEnhancer],
    })
  
    // if (process.env.NODE_ENV !== 'production' && module.hot) {
    //   module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
    // }
  
    return store
  }