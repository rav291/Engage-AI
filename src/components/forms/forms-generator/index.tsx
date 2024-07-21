import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message"
import { Textarea } from '@/components/ui/textarea';

type Props = {
    type: "email" | "text" | "password";
    inputType: "select" | "input" | "textarea";
    options?: { value: string; label: string; id: string }[];
    label?: string;
    placeholder: string;
    register: UseFormRegister<any>;
    name: string;
    errors: FieldErrors<FieldValues>;
    lines?: number;
    form?: string;
    defaultValue?: string
}

const FormGenerator = ({ type, inputType, options, defaultValue, label, placeholder, register, name, errors, lines, form }: Props) => {
    switch (inputType) {
        case "input":
        default:
            return (
                <Label className='flex flex-col gap-2' htmlFor={`input-${label}`}>
                    {label && label}
                    <Input
                        id={`input-${label}`}
                        type={type}
                        placeholder={placeholder}
                        form={form}
                        {...register(name)}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className='text-red-400 mt-2'>
                                {message === "Required" ? "" : message}
                            </p>
                        )}
                    />
                </Label>
            )
        case "select":
            return (
                <Label htmlFor={`select-${label}`}>
                    {label && label}
                    <select form={form} id={`select-${label}`} {...register(name)}>
                        {options?.length && options.map((option) => (
                            <option value={option.value} key={option.id}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className='text-red-400 mt-2'>
                                {message === "Required" ? "" : message}
                            </p>
                        )}
                    />
                </Label>
            )
        case "textarea":
            return (
                <Label className='flex flex-col gap-2' htmlFor={`input-${label}`}>
                    {label && label}
                    <Textarea form={form} id={`input-${label}`} {...register(name)}
                        placeholder={placeholder} rows={lines} defaultValue={defaultValue}
                    />
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className='text-red-400 mt-2'>
                                {message === "Required" ? "" : message}
                            </p>
                        )}
                    />
                </Label>
            )
    }
}

export default FormGenerator