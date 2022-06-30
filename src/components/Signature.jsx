export const Signature = ({userData}) =>{
    return(
        <div>
            <br/>
            <a href="http://hero99.com.br/" target="_blank" rel ="noreferrer">
                <img src="http://hero99.com.br/signatures/avatar.jpg" style={{float:"left",margin:"0px 10px 0px 0px"}} alt="logo"/>
            </a>
            <div style={{fontSize:"10px",lineHeight:"normal",fontFamily:"Arial,sans-serif"}}>
                <p style={{padding:"10px 0px 5px",fontSize:"1.2em",margin:"0px"}}>
                    <b>{userData.name}</b>
                    <span>&nbsp;</span>•<span>&nbsp;</span><span>Hero99</span>
                    <br/>
                    <i style={{fontStyle:"normal",padding:"0px",color:"rgb(102,102,102)"}}>
                        <a href="mailto:rafaelpedroso@hero99.com.br" target="_blank" rel ="noreferrer">
                            {userData.email}
                        </a>
                    </i>
                </p>
                <p style={{padding:"5px 0px",fontSize:"1.2em",margin:"0px"}}>
                    <i style={{fontStyle:"normal",display:"block",padding:"0px"}}>
                        <span>
                            <span>
                                <span style={{fontSize:"0.9em",letterSpacing:"-0.075em",color:"rgb(102,102,102)"}}>
                                    +55 41
                                </span>
                                <span>&nbsp;</span>
                                    3088.8899
                            </span>
                            <span>
                                &nbsp;
                            </span>
                        </span>
                        <span style={{padding:"0px 5px",color:"rgb(153,153,153)"}}>•</span>
                        <span>&nbsp;</span>
                        <span>
                            <span>
                                <span style={{fontSize:"0.9em",letterSpacing:"-0.075em",color:"rgb(102,102,102)"}}>
                                    +55 {userData.ddd}
                                </span>
                                <span>&nbsp;</span>
                                {userData.phone}
                            </span>
                        </span>
                    </i>
                </p>
            </div>
        </div>
)
}