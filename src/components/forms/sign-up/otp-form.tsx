import OTPInput from '@/components/otp'
import React from 'react'

type Props = {
    setOTP: React.Dispatch<React.SetStateAction<string>>
    onOTP: string
}

const OTPForm = ({ onOTP, setOTP }: Props) => {
    return (
        <>
            <h2 className='text-gravel md:text-4xl font-bold'>Enter OTP</h2>
            <p>
                Enter the one time password sent to your email.
            </p>
            <div className='w-full flex justify-center py-5'>
                <OTPInput
                    otp={onOTP}
                    setOtp={setOTP}
                />
            </div>
        </>
    )
}

export default OTPForm