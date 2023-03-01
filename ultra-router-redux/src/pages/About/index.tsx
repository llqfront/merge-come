import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState,charCountState } from "../../stores/index.ts";
export default function Page() {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);
  return (
    <div>
      about page
      Echo: {text}
      {count}
    </div>
  );
}
