//  第一个页面
/*import React from 'react';
import './App.css';

function App() {
  return (
      <div className="app">
          <div className="main">
            <div className="touxiang"></div>
            <button>Connect</button>
            <div className="touxiang1"></div>
          </div>
      </div>
  );
}

export default App;*/

//  第二个页面
// import React from 'react';
// import './App.css';
// const image = require('./huli.png');
// const image1 = require('./banner 1.png')
// const image2 = require('./phantom-logo-freelogovectors 1.png')
// function App() {
//     return (
//         <>
//             <div className="app">
//                 <div className="main-content">
//                 </div>
//                 <div className="sidebar">
//                     <div className="touxiang"></div>
//                     <button>Connect</button>
//                     <div className="touxiang1"></div>
//                 </div>
//             </div>
//             <div className="center">
//                 <img src={image}  alt="" className="huli"/>
//             </div>
//             <div><img src={image1} alt="" className="banner" /></div>
//             <div><img src={image2} alt="" className="phantom" /></div>
//         </>
//     );
// }
//
// export default App;

// 第三个页面
import React from 'react';
import './App.css';

const cancel = require('./img/Cancel.png')
const coin = require('./img/Coin Wallet.png')
const contacts = require('./img/Contacts.png')
const ellipse10 = require('./img/Ellipse 10.png')
const ellipse11 = require('./img/Ellipse 11.png')
const ellipse12 = require('./img/Ellipse 12.png')
const ellipse13 = require('./img/Ellipse 13.png')
const ellipse14 = require('./img/Ellipse 14.png')
const ethereumfolder = require('./img/ethereum folder.png')
const minus = require('./img/Minus.png')
const money = require('./img/Money Bag Bitcoin.png')
const ok = require('./img/Ok.png')
const user = require('./img/user location.png')
const yellow = require('./img/Yellow dollar coin.png')

function App() {
    return (
        <div className="app">
            <div className="main">
                <div className="touxiang"></div>
                <button>Connect</button>
                <div className="touxiang1"></div>
                <div className="top">
                    <img src={coin} alt="1" /><span style={{marginLeft: 60,marginTop:15}}>My assets</span>
                </div>
                <div style={{marginTop: 10}}><img src={yellow} alt="1" /><span style={{marginLeft: 60,marginBottom:-20}}>My tokens</span></div>
                <div><img src={user} alt="1" /><span style={{marginLeft: 60}}>My Profiile</span></div>
                <div className="center1">
                    <div className="name"><img src={contacts} alt="1" style={{paddingTop:15}} /><input type={"text"} value={"name"} /></div>
                    <div className="Emma"><img src={ellipse10} alt="1" style={{paddingTop:5}} /><span style={{marginLeft: 60}}>Emma</span><img src={cancel} alt="" style={{float:"right",width:30,height:30}} /></div>
                    <div className="Liarn"><img src={ellipse11} alt="1" style={{paddingTop:5}} /><span style={{marginLeft: 60}}>Liarn</span><img src={ok} alt="" style={{float:"right"}} /></div>
                    <div className="Noah"><img src={ellipse12} alt="1" style={{paddingTop:5}} /><span style={{marginLeft: 60}}>Noah</span><img src={ok} alt="" style={{float:"right"}} /></div>
                    <div className="Ava"><img src={ellipse13} alt="1" style={{paddingTop:5}} /><span style={{marginLeft: 60}}>Ava</span><img src={ok} alt="" style={{float:"right"}} /></div>
                    <div className="isabela"><img src={ellipse14} alt="1" style={{paddingTop:5}} /><span style={{marginLeft: 60}}>lsabela</span><img src={cancel} alt="" style={{float:"right",width:30,height:30}} /></div>
                </div>
                <div className="bottom">
                    <img src={ethereumfolder} alt="" />
                    <img src={money} alt="" style={{position:"absolute",right:25,bottom:90}} />
                    <img src={cancel} alt="" style={{position:"absolute",right:25,bottom:-60}}  />
                </div>
        </div>
        </div>
    );
}
export default App;