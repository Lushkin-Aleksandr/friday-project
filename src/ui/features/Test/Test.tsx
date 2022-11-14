import React from 'react';
import SuperButton from "../../common/components/SuperButton/SuperButton";
import SuperInputText from "../../common/components/SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/components/SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/components/SuperEditableSpan/SuperEditableSpan";

const Test = () => {
    return (
        <div>
            <SuperButton>Button</SuperButton>
            <SuperInputText placeholder={'Input'}/>
            <SuperCheckbox/>
            <SuperEditableSpan value={'Editable span'}/>
        </div>
    );
};

export default Test;