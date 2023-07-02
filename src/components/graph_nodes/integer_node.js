import { useState } from 'react';
import { InputNumber } from 'antd';

const IntegerNode = (
    { questionText, min, max, submitCallback }) => {
    const [answer, setAnswer] = useState(null);
    return (
        <div>
            <label>{questionText}</label>
            <br />
            <InputNumber
                min={min}
                max={max}
                defaultValue={null}
                onChange={setAnswer} />
            <br />
            <button
                disabled={answer === null}
                onClick={e => submitCallback(answer)}>
                Save
            </button>
        </div>
    );
};

export default IntegerNode;
