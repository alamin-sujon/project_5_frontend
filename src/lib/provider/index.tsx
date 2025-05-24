"use client"
import store, { persistor } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from 'sonner'

const MainProvider = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
                <Toaster richColors position="top-center" />
            </PersistGate>


        </Provider>
    );
};

export default MainProvider;