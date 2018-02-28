import * as React from 'react';

type Props = Readonly<{
    name: string;
    label: string;
    onChange: (field: string, value: string) => void;
    value?: string;
    placeholder?: string;
    error?: string;
}>;

const TextIntput: React.StatelessComponent<Props> = props => {
    let wrapperClass = 'form-group';
    if (props.error && props.error.length > 0) {
        wrapperClass += ' is-invalid';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <input
                    type="text"
                    name={props.name}
                    className={'form-control' + (props.error && props.error.length > 0 ? ' is-invalid' : '')}
                    placeholder={props.placeholder}
                    onChange={event => props.onChange(event.target.name, event.target.value)}
                    value={props.value}
                />
                <div className="invalid-feedback">{props.error}</div>
            </div>
        </div>
    );
};

export default TextIntput;