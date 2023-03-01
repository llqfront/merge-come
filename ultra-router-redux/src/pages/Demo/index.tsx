
import type { RootState } from '~/stores/index.ts';
import { useSelector, useDispatch } from 'react-redux'
export default function Page() {
    const count = useSelector((state: RootState) => state.counter.value)
  return (
    <div>
      Demo page<div>dsaf运{count}营sdfa</div>
    </div>
  );
}
