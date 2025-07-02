// src/components/Fieldset.jsx
import { Form } from 'antd';

// Re-export Form.Item as Field for form field functionality
export const Field = Form.Item;

// Custom Label component for form field labels
export const Label = ({ children, ...props }) => {
  return <label {...props}>{children}</label>;
};