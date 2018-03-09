import * as React from 'react';

type Props = Readonly<{
    name: string;
    label: string;
    onChange: (fieldName: string, value: string) => void;
    defaultOption?: string;
    value?: string;
    options: Option[];
    error?: string;
}>;

export type Option = Readonly<{
    value: string;
    text: string;
}>;

const SelectInput: React.StatelessComponent<Props> = props => {
    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <div className="field">
                <select
                    name={props.name}
                    value={props.value}
                    onChange={event => props.onChange(event.target.name, event.target.value)}
                    className="form-control"
                >
                    <option value="">{props.defaultOption}</option>
                    {props.options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.text}</option>;
                    })
                    }
                </select>
                {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>
    );
};

SelectInput.defaultProps = {
    options: []
};

export default SelectInput;