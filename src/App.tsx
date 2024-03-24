import "./App.css";

import { connect } from "react-redux";

import { increment, decrement } from "./actions"; // Import Redux actions
import { Action, Dispatch } from "redux";

interface Props {
  counter: number;
  dispatch: Dispatch<Action<string>>;
}

const App = ({ counter, dispatch }: Props) => (
  <div className="content-center">
    <div>
      <div className="columns column is-12">
        <h1>Counter : {counter}</h1>
      </div>

      <div className="buttons">
        <button onClick={() => dispatch(increment(1))} className="button is-primary">
          +1
        </button>
        <button onClick={() => dispatch(increment(2))} className="button is-link">
          +2
        </button>
        <button onClick={() => dispatch(increment(3))} className="button is-info">
          +3
        </button>
      </div>

      <div className="buttons">
        <button onClick={() => dispatch(decrement(1))} className="button is-primary">
          -1
        </button>
        <button onClick={() => dispatch(decrement(2))} className="button is-link">
          -2
        </button>
        <button onClick={() => dispatch(decrement(3))} className="button is-info">
          -3
        </button>
      </div>
    </div>
  </div>
);

// mapStateToProps เป็น function ที่รับค่า state ปัจจุบัน และ return เป็น props ส่งไปหา Component
const mapStateToProps = function (state: any) {
  return {
    counter: state.counterReducer || 0,
  };
};

// connect เป็น function ที่ช่วยให้เราสามารถเรียกใช้ dispatch() จาก store ได้เลย
// รวมถึง การ bind หรือ map ค่า state กับ props ต่างๆ ด้วย mapStateToProps และ mapDispatchToProps
// ซึ่ง connect() เป็น HOC (Higher Order Component) : ฟังค์ชันที่รับ Component แล้ว return เป็น Component ที่มีดีกว่าเดิม
// เรียกว่าเป็นการ upgrade component ก็ได้
const AppWithConnect = connect(mapStateToProps)(App);
export default AppWithConnect;
