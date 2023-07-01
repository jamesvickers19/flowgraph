import { useState } from 'react';
import { Radio } from 'antd';

const BooleanNode = ({ questionText, submitCallback }) => {
    const [answer, setAnswer] = useState(null);
    return (
        <div>
            <label>{questionText}</label>
            <br />
            <Radio.Group onChange={e => setAnswer(e.target.value)} value={answer}>
                <Radio value={true}>Yes</Radio>
                <Radio value={false}>No</Radio>
            </Radio.Group>
            <button
                disabled={answer === null}
                onClick={e => submitCallback(answer)}>
                Save
            </button>
        </div>
    );
};

export default BooleanNode;
