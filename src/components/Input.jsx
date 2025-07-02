import { Input as AntdInput } from 'antd';

const Input = ({ placeholder, type, value, onChange, className, style }) => {
    return (
        <AntdInput
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            className={className}
            style={style}
        />
    );
}

export default Input;