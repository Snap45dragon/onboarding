import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as CheckIcon } from "../../assets/icons/check.svg";
import "../../css/components/Steps.scss";
import Button from "../base-components/Button";
import Header from "../onboarding/Header";

function StepFour() {
  const { t } = useTranslation();
  return (
    <div className="step-four flex-column-center">
      <div className="icon-container">
        <div className="icon large">
          <CheckIcon></CheckIcon>
        </div>
      </div>
      <Header
        className="header"
        title={t("onboarding.step4.title")}
        subtitle={t("onboarding.step4.subtitle")}
      ></Header>
      <div className="form">
        <Button
          name={t("common.launch_eden")}
          type={"primary"}
          width={"100%"}
        ></Button>
      </div>
    </div>
  );
}

export default StepFour;
