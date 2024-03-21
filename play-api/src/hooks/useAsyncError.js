import {useState} from "react";

const useAsyncError = () => {
    const [_,setError] = useState(null);

    const catchAsyncError = () => {
        setError((err)=>{
            throw err
        })
    }
    return {catchAsyncError};

}
export default useAsyncError