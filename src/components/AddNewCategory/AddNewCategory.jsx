import React, { useRef } from "react";

const AddNewCategory = () => {
    const categoryRef = useRef(null);
    
    const handleSubmit = () => {
        console.log(categoryRef.current.value);
    };

    return (
        <>
            <div>
            <input ref={categoryRef} type="text" />
            </div>
            <button onClick={() => handleSubmit()}>Add</button>
        </>
    );
};

export default AddNewCategory;