"use client"
import { Button } from '@/components/ui/button'
import { useAuthContextHook } from '@/context/use-auth-context'
import { useSignUpForm } from '@/hooks/sign-up/use-sign-up'
import Link from 'next/link'
import React from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {}

const ButtonHandler = (props: Props) => {
  const { currentStep, setCurrentStep } = useAuthContextHook();
  const { formState, getFieldState, getValues } = useFormContext();
  const { onGenerateOTP } = useSignUpForm()

  const { isDirty: isName } = getFieldState("fullname", formState);
  const { isDirty: isEmail } = getFieldState("email", formState);
  const { isDirty: isPassword } = getFieldState("password", formState);

  if (currentStep === 3) {
    return (
      <div className='w-full flex flex-col gap-3 items-center'>
        <Button type='submit' className='w-full'>Create Account</Button>
        <p>
          Already have an account?&nbsp;
          <Link href="/auth/sign-in" className='font-bold'>
            Sign In
          </Link>
        </p>
      </div>
    )
  }

  if (currentStep === 2) {
    return (
      <div className='w-full flex flex-col gap-3 items-center'>
        <Button type='submit' className='w-full'
          {...(isName && isEmail && isPassword && {
            onClick: () => {
              onGenerateOTP(getValues("email"), getValues("password"), setCurrentStep)
              console.log("Here2")
            }
          })} // Note this way of conditionally adding event handlers
        >
          Continue 2
        </Button>
        <p>
          Already have an account?&nbsp;
          <Link href="/auth/sign-in" className='font-bold'>
             Sign In
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col gap-3 items-center'>
      <Button type='submit' className='w-full' onClick={() => setCurrentStep((prev: number) => prev + 1)}>
        Continue 1
      </Button>
      <p>
        Already have an account?&nbsp;
        <Link href="/auth/sign-in" className='font-bold'>
          Sign In
        </Link>
      </p>
    </div>
  )

}

export default ButtonHandler