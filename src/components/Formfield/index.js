import React from 'react';

// import { Container } from './styles';

function Formfield({ tag, label, type, name, value, onChange }) {
    const Tag = tag;
    return (
        <div>
            <label>
                {label}:' ' 
                <Tag 
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default Formfield;