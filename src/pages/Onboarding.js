import React, { useState } from "react";
import LogoText from "../components/base-components/LogoText";
import ProgressBar from "../components/base-components/ProgressBar";
import StepFour from "../components/onboarding/StepFour";
import StepOne from "../components/onboarding/StepOne";
import StepThree from "../components/onboarding/StepThree";
import StepTwo from "../components/onboarding/StepTwo";

function Onboarding() {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");
  const [workspaceType, setWorkspaceType] = useState(null);

  return (
    <div className="onboarding flex-column-center">
      <LogoText className="header" />
      <ProgressBar
        stateCount={4}
        currentState={step}
        className="progress-bar"
      ></ProgressBar>
      {step === 1 && (
        <StepOne
          fullName={fullName}
          displayName={displayName}
          setFullName={setFullName}
          setDisplayName={setDisplayName}
          setStep={setStep}
        ></StepOne>
      )}
      {step === 2 && (
        <StepTwo
          workspaceName={workspaceName}
          workspaceUrl={workspaceUrl}
          setWorkspaceName={setWorkspaceName}
          setWorkspaceUrl={setWorkspaceUrl}
          setStep={setStep}
        ></StepTwo>
      )}
      {step === 3 && (
        <StepThree
          workspaceType={workspaceType}
          setWorkspaceType={setWorkspaceType}
          setStep={setStep}
        ></StepThree>
      )}
      {step === 4 && <StepFour></StepFour>}
    </div>
  );
}

export default Onboarding;
