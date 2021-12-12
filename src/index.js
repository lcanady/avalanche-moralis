import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import ThemeContext from "./context/ThemeContext";

import { MoralisProvider } from "react-moralis";

ReactDOM.render(
    <React.StrictMode>
        <MoralisProvider appId={proccess.env.MORALIS_APP_ID} serverUrl={process.env.MORALIS_SERVER_URL}>
            <Provider store={store}>
                <SimpleReactLightbox>
                    <BrowserRouter basename='/'>
                        <ThemeContext>
                            <App />
                        </ThemeContext>
                    </BrowserRouter>
                </SimpleReactLightbox>
            </Provider>
        </MoralisProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
