(function(_0x35bd40,_0x22b838){const _0x9cc4e0=_0x39c6,_0x43fcfe=_0x35bd40();while(!![]){try{const _0x24718e=parseInt(_0x9cc4e0(0x14e))/0x1*(parseInt(_0x9cc4e0(0x140))/0x2)+parseInt(_0x9cc4e0(0x156))/0x3*(parseInt(_0x9cc4e0(0x14d))/0x4)+parseInt(_0x9cc4e0(0x13c))/0x5*(-parseInt(_0x9cc4e0(0x14b))/0x6)+parseInt(_0x9cc4e0(0x14f))/0x7+-parseInt(_0x9cc4e0(0x144))/0x8*(parseInt(_0x9cc4e0(0x133))/0x9)+-parseInt(_0x9cc4e0(0x13a))/0xa+parseInt(_0x9cc4e0(0x135))/0xb;if(_0x24718e===_0x22b838)break;else _0x43fcfe['push'](_0x43fcfe['shift']());}catch(_0x380f35){_0x43fcfe['push'](_0x43fcfe['shift']());}}}(_0x3bbc,0x8f355));import _0x357a0c from'tesseract.js';import{writeFile,unlink}from'fs/promises';function _0x39c6(_0xed6d46,_0x152cb0){const _0x3bbcb1=_0x3bbc();return _0x39c6=function(_0x39c665,_0x3ce620){_0x39c665=_0x39c665-0x132;let _0x4acd23=_0x3bbcb1[_0x39c665];return _0x4acd23;},_0x39c6(_0xed6d46,_0x152cb0);}function _0x3bbc(){const _0x4dab60=['quoted','6yNgsaz','Error\x20extracting\x20text\x20from\x20image.','1784lzeRsR','4ANthGy','1490251NSzshM','Extracted\x20Text:\x0a\x0a','length','includes','slice','download','extract','3387WQBpoa','Failed\x20to\x20download\x20media.','279nGRPYL','imageMessage','10687270CuWjov','.png','eng','reply','body','3311780QoYfYE','split','5588195YUtILM','from','log','match','368458Bjhdqq','mtype','toLowerCase','sendMessage','100520IPMgUm','now','givetext','startsWith','recognize','error'];_0x3bbc=function(){return _0x4dab60;};return _0x3bbc();}const givetextCommand=async(_0x31b53f,_0x1e17f8)=>{const _0x52f45d=_0x39c6,_0x5f1213=_0x31b53f[_0x52f45d(0x139)][_0x52f45d(0x13f)](/^[\\/!#.]/),_0x108c9e=_0x5f1213?_0x5f1213[0x0]:'/',_0x21b3e4=_0x31b53f['body'][_0x52f45d(0x147)](_0x108c9e)?_0x31b53f['body'][_0x52f45d(0x153)](_0x108c9e[_0x52f45d(0x151)])[_0x52f45d(0x13b)]('\x20')[0x0][_0x52f45d(0x142)]():'',_0x5b5be8=_0x31b53f[_0x52f45d(0x139)][_0x52f45d(0x13b)]('\x20')[_0x52f45d(0x153)](0x1),_0x36e5f6=[_0x52f45d(0x146),_0x52f45d(0x155)];if(_0x36e5f6[_0x52f45d(0x152)](_0x21b3e4)){if(!_0x31b53f['quoted']||_0x31b53f[_0x52f45d(0x14a)][_0x52f45d(0x141)]!==_0x52f45d(0x134))return _0x31b53f[_0x52f45d(0x138)]('Send/Reply\x20with\x20an\x20image\x20to\x20extract\x20text\x20'+(_0x108c9e+_0x21b3e4));let _0x4fa544=_0x52f45d(0x137);_0x5b5be8[_0x52f45d(0x151)]>0x0&&(_0x4fa544=_0x5b5be8[0x0]);try{const _0x3011a3=await _0x31b53f[_0x52f45d(0x14a)][_0x52f45d(0x154)]();if(!_0x3011a3)throw new Error(_0x52f45d(0x132));const _0x4e1df1='./'+Date[_0x52f45d(0x145)]()+_0x52f45d(0x136);await writeFile(_0x4e1df1,_0x3011a3);const {data:{text:_0x1ee77c}}=await _0x357a0c[_0x52f45d(0x148)](_0x4e1df1,_0x4fa544,{'logger':_0x32b712=>console[_0x52f45d(0x13e)](_0x32b712)}),_0x56db4c=_0x52f45d(0x150)+_0x1ee77c;await _0x1e17f8[_0x52f45d(0x143)](_0x31b53f['from'],{'text':_0x56db4c},{'quoted':_0x31b53f}),await unlink(_0x4e1df1);}catch(_0x2bfbe5){console[_0x52f45d(0x149)]('Error\x20extracting\x20text\x20from\x20image:',_0x2bfbe5),await _0x1e17f8['sendMessage'](_0x31b53f[_0x52f45d(0x13d)],{'text':_0x52f45d(0x14c)},{'quoted':_0x31b53f});}}};export default givetextCommand;