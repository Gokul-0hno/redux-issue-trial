import React, { useState } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { increment, selectCount } from "./counterSlice";
import { initStore } from "../../app/store";

export function InnerestCounter({ incremetOuter }) {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [inc, setInc] = useState(0);
  return (
    <div
      onClick={() => {
        setInc((old) => old + 1);
        dispatch(increment());
        incremetOuter();
        dispatch(increment());
        setInc((old) => old + 1);
      }}
    >
      <input type="button" value="Incremet Counter" /> State: {inc}{" "}
      InnerStoreValue: {count}
    </div>
  );
}

export function InnerCounter({ incremetOuter }) {
  const [store] = useState(() => initStore());

  return (
    <Provider store={store}>
      <InnerestCounter incremetOuter={incremetOuter} />
    </Provider>
  );
}

export default InnerCounter;
