import React, { useState } from "react";
import "../css/Line.css";

interface FormProps {
  btnNumber: number;
  codeValue?: string;
  handleCodeChange?: any;
}

interface DeclareVarForm {
  varName: string;
  varValue: number;
}

interface LoopForm {
  initVar: string;
  initVal: number;
  conditionVar: string;
  conditionOperand: string;
  conditionVal: number;
  operandVar: string;
  operandOp: string;
  operandVal: number;
}

const UpdateCodeForm: React.FC<FormProps> = ({
  btnNumber,
  codeValue,
  handleCodeChange,
}) => {
  const [varDeclareForm, setVarDeclareForm] = useState<DeclareVarForm>({
    varName: "",
    varValue: 0,
  });
  //   const [varDeclareForm, setVarDeclareForm] = useState<DeclareVarForm>({
  //     varName: "",
  //     varValue: "",
  //   });

  const renderInputField = (
    btnType: number
    // value: string,
    // handleCodeChange: any
  ) => {
    switch (btnType) {
      case 1:
        return (
          <div className="input-field">
            <label> Set </label>
            <input
              className="setVarName"
              type="text"
              value={varDeclareForm.varName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setVarDeclareForm({
                  varName: e.target.value,
                  varValue: varDeclareForm.varValue,
                })
              }
            />
            <label> = </label>
            <input
              className="setVarName"
              type="number"
              value={varDeclareForm.varValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setVarDeclareForm({
                  varName: varDeclareForm.varName,
                  varValue: parseInt(e.target.value),
                })
              }
            />
          </div>
        );

      default:
        return <p> Something Went wrong !! Try again Later</p>;
    }
  };
  const input = renderInputField(btnNumber);
  return (
    <div className="UpdateCodeForm">
      <div className="line-code" style={{ marginTop: "1rem" }}>
        <form>
          {/* <label htmlFor="update-code-form">
            {" "}
            Code Button pressed {btnNumber}{" "}
          </label> */}
          {/* <input type="text" value={codeValue} onChange={handleCodeChange} /> */}
          {input}
        </form>
      </div>
    </div>
  );
};

export default UpdateCodeForm;
