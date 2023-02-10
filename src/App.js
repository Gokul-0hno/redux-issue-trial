import React, { useState, Suspense } from "react";
import { Provider } from "react-redux";

import { initStore } from "./app/store";
import { Counter } from "./features/counter/Counter";

function App() {
  const [store] = useState(() => initStore());

  return (
    <Suspense>
      <Provider store={store}>
        <Counter />
      </Provider>
    </Suspense>
  );
}

export default App;
