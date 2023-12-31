import AppNavigator from "./navigation/index";
import { Provider } from "react-redux";
import { init } from "./db";
import { store } from "./store-toolkit";

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
