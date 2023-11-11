import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type Option = {
  label: string;
  value: string;
};

interface Props extends SelectProps {
  label?: string;
  options: Option[];
  defaultOption: Option;
}
export const Select = ({ label, options, defaultOption, ...props }: Props) => {
  return (
    <div className="w-100 flex flex-col">
      {label && (
        <label htmlFor={props.id} className="font-bold">
          {label}
        </label>
      )}
      <select {...props} className="px-4 py-2">
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
