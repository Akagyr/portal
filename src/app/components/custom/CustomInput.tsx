import { ChangeEventHandler } from 'react';

export default function CustomInput({
  placeholder,
  containerStyles,
  type,
  onChange,
  value,
  required,
  error,
  name,
  id,
}: {
  placeholder?: string;
  containerStyles?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: 'text' | 'number';
  value?: string;
  required?: boolean;
  error?: string | null;
  name: string;
  id?: string;
}) {
  return (
    <div className='w-full'>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type || 'text'}
        className={`${
          containerStyles ? containerStyles : ''
        } outline-none w-full border-2 rounded-full py-[10px] px-[15px] text-sm ${
          error ? 'border-2 border-red-600' : 'border border-gray-500'
        }`}
        placeholder={placeholder}
        required={required}
      />
      <div className='text-red-600 text-sm mt-[5px] pl-[15px]'>{error ? error : ''}</div>
    </div>
  );
}
