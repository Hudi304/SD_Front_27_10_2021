import { FormObj } from "../../../pages/account/account.types";

interface DeafaultButtonProps {
  text: string;
  formObj : FormObj
}

export function DefaultButtom(props: DeafaultButtonProps) : JSX.Element  {
  return (
    <div className="change-password-button-container">
      <button className="save-button" onClick={ () => { onClick(props.formObj) } }>{props.text}</button>
    </div>
  );
}


function onClick( formObj : FormObj) {
  console.log(formObj)
}