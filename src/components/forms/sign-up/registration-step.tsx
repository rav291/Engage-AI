import { useAuthContextHook } from "@/context/use-auth-context";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import TypeSelectionForm from "./type-selection-form";
import dynamic from "next/dynamic";
import { Spinner } from "@/components/spinner";

type Props = {};

const DetailForm = dynamic(() => import("./account-details-form"), {
  ssr: false,
  loading: Spinner
});

const RegistrationFormStep = (props: Props) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const { currentStep } = useAuthContextHook();
  const [onOTP, setOnOTP] = useState<string>("");
  const [onUserType, setOnUserType] = useState<"owner" | "student">("owner");

  setValue("otp", onOTP);

  switch (currentStep) {
    case 1:
      return (
        <TypeSelectionForm
          register={register}
          userType={onUserType}
          setUserType={setOnUserType}
        />
      );
    case 2:
      return (
        <DetailForm></DetailForm>
      )
    case 3:
  }
};

export default RegistrationFormStep;
