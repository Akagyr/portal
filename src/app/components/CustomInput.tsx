import { ChangeEventHandler } from 'react';

export default function CustomInput({
  placeholder,
  containerStyles,
  inputType,
  type,
  onChangeInput,
  value,
  required,
  error,
  name,
}: {
  placeholder?: string;
  containerStyles?: string;
  onChangeInput?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  inputType: 'input' | 'textarea';
  type?: 'text' | 'number';
  value?: string;
  required?: boolean;
  error?: string | null;
  name: string;
}) {
  return (
    <div className='w-full'>
      {inputType === 'textarea' ? (
        <textarea
          name={name}
          value={value}
          onChange={onChangeInput}
          className={`${containerStyles ? containerStyles : ''} resize-none outline-none ${
            error ? 'border-2 border-red-600' : 'border border-gray-500'
          }`}
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          name={name}
          value={value}
          onChange={onChangeInput}
          type={type || 'text'}
          className={`${
            containerStyles ? containerStyles : ''
          } outline-none w-full border-2 rounded-full py-[10px] px-[15px] text-sm ${
            error ? 'border-2 border-red-600' : 'border border-gray-500'
          }`}
          placeholder={placeholder}
          required={required}
        />
      )}
      <div className='text-red-600 text-sm mt-[5px] pl-[15px]'>{error ? error : ''}</div>
    </div>
  );
}
