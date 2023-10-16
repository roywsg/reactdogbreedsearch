import {Loader2} from "lucide-react";

export const Icons = {
  spinner: Loader2
}

export default function Spinner() {
  return (
    <Icons.spinner className={'animate-spin'}/>
  );
}