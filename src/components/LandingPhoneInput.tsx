'use client';

import PhoneInputLib, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export { isValidPhoneNumber };

type LandingPhoneInputProps = {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

export function LandingPhoneInput({
  id,
  name,
  value,
  onChange,
  onFocus,
  placeholder,
  required,
  className = '',
}: LandingPhoneInputProps) {
  return (
    <div dir="ltr" onFocus={onFocus}>
      <PhoneInputLib
        id={id}
        name={name}
        defaultCountry="PK"
        international
        countryCallingCodeEditable={false}
        autoComplete="tel"
        placeholder={placeholder}
        required={required}
        value={value || undefined}
        onChange={(val) => onChange(val ?? '')}
        className={`${className} flex items-center gap-2 [&_.PhoneInputCountry]:mr-1 [&_.PhoneInputCountrySelect]:bg-inherit [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:outline-none`}
      />
    </div>
  );
}
