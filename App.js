if (__DEV__) import("./reactotronConfig");

import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";

import Navigation from "./src/navigation";

import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <TailwindProvider>
        <Navigation />
      </TailwindProvider>
    </Provider>
  );
}
