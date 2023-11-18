import { SelectHTMLAttributes } from "react";

import { Option } from "../../interfaces/common";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

interface Props extends SelectProps {
  label?: string;
  options: Option[];
  defaultOption: Option;
}
export const Select = ({ label, options, defaultOption, ...props }: Props) => {
  return (
    <div className="w-100 flex flex-col  border-b border-black h-50  mb-6  rounded-lg">
      {label && (
        <label htmlFor={props.id} className="text-left">
          {label}
        </label>
      )}
      <select {...props} className="px-4 py-2  ">
        {defaultOption && (
          <option value={defaultOption.value}>{defaultOption.label}</option>
        )}
        {options.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};
