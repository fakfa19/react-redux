import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// หุ้ม component หลักของแอปพลิเคชันด้วย <Provider> เพื่อให้ทุก component ในแอปพลิเคชันสามารถเข้าถึง store ของ Redux ได้
// ตัว Provider ต้องมี props store ด้วย ซึ่งเราจะได้มาจาก createStore ของ redux โดยใช้ reducers ของเรา
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
