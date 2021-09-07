import React from "react";

function Preloader(){
    return (
        <div className="d-flex align-items-center ">
            <strong>Загрузка...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    );

}

export default Preloader;