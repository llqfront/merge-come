import type { RootState } from '~/stores/index.ts';
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from '~/src/features/actions.ts';

export default function Page() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const { decrement, increment } = counterSlice.actions;
  return (
      <div>
          <div>dsafMemberasdfa</div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
            About page
    </div>
  );
}
