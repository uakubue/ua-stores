import React, { useState } from 'react';
import { RxEyeOpen } from "react-icons/rx";
import { RxEyeClosed } from "react-icons/rx";



const usePasswordToggle = () => {
    const [visible1, setVisibility1] = useState(false);
    const [visible2, setVisibility2] = useState(false);

    const Icon1 =   visible1 ? <RxEyeClosed onClick={() => setVisibility1(visibility => !visibility)} /> :
                     <RxEyeOpen  onClick={() => setVisibility1(visibility => !visibility)} />
                    
    const Icon2 =   visible2 ? <RxEyeClosed onClick={() => setVisibility2(visibility => !visibility)} /> :
                     <RxEyeOpen  onClick={() => setVisibility2(visibility => !visibility)} />

    const InputType1 = visible1 ? 'text' : 'password';
    const InputType2 = visible2 ? 'text' : 'password';

  return [InputType1, InputType2, Icon1, Icon2];
};

export default usePasswordToggle