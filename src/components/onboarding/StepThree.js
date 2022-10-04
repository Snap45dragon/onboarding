import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as TeamIcon } from "../../assets/icons/team.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import "../../css/components/Steps.scss";
import Button from "../base-components/Button";
import Header from "../onboarding/Header";
import OptionCard from "../OptionCard";

function StepThree({ workspaceType, setWorkspaceType, setStep }) {
  const { t } = useTranslation();
  const [showError, setShowError] = useState(false);
  return (
    <div className="step-three flex-column-center">
      <Header
        className="header"
        title={t("onboarding.step3.title")}
        subtitle={t("onboarding.step3.subtitle")}
      ></Header>
      <div className="form">
        <div className="options">
          <OptionCard
            icon={<UserIcon />}
            title={t("common.for_myself")}
            desc={t("common.for_myself_desc")}
            active={workspaceType === 1}
            error={showError && workspaceType === null}
            onClick={() => setWorkspaceType(1)}
          ></OptionCard>
          <OptionCard
            icon={<TeamIcon />}
            title={t("common.with_my_team")}
            desc={t("common.with_my_team_desc")}
            active={workspaceType === 2}
            error={showError && workspaceType === null}
            onClick={() => setWorkspaceType(2)}
          ></OptionCard>
        </div>
        <Button
          name={t("common.create_workspace")}
          type={"primary"}
          width={"100%"}
          onClick={handleSubmit}
        ></Button>
      </div>
    </div>
  );

  function handleSubmit() {
    if (!workspaceType) {
      setShowError(true);
    } else setStep(4);
  }
}

export default StepThree;
