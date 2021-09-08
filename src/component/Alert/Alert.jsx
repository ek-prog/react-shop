

import React, { useEffect }  from "react";

function Alert(props) {
    const { name = '', closeAlert = Function.prototype } = props;


    useEffect(()=>{
        const timerId = setTimeout(closeAlert, 3000);
        return() =>{clearTimeout(timerId)};
        //eslint-disable-next-line
    }, [name]);
        return(
            <div className="position-fixed top-50 end-0 translate-middle-y p-3 divAlert" >
                <div id="liveToast" className=" hide" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-body">
                        {name} добавлен в корзину
                    </div>
                </div>
            </div>
        )
}
export default Alert;