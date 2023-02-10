import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { increment, selectCount } from "./counterSlice";

const InnerCounter = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./InnerCounter")), 1000);
    })
);

export const Dispatcher = memo(() => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoad(true), 50);
  }, []);
  return load ? (
    <InnerCounter incremetOuter={() => dispatch(increment())} />
  ) : null;
});

export const Counter = memo(() => {
  const count = useSelector(selectCount);
  const store = useStore();

  useEffect(() => {
    const unsub = store.subscribe(() => {
      console.log(store.getState());
    });

    return () => {
      unsub();
    };
  }, [store]);

  return (
    <div>
      Outer store value: {count} (if this is not incremented on button click,
      there is an error)
      <Dispatcher />
    </div>
  );
});
