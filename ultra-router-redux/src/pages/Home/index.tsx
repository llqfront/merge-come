import {
  // RecoilRoot,
  // atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function Page() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      Home page
    </div>
  );
}
