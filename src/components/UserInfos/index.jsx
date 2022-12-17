import React from 'react';

export default function UserInfos() {
    return (  
        <div className="dashboard__header">
            <h1>Bonjour <span className="dashboard__headerName">Thomas</span></h1>
            <span className="dashboard__headerCongrats">Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    );
}