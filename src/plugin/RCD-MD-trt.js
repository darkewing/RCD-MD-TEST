function _0x248f(_0x85a5c9,_0x15e6b0){const _0x485efb=_0x485e();return _0x248f=function(_0x248f97,_0x39932c){_0x248f97=_0x248f97-0x19c;let _0x18f12f=_0x485efb[_0x248f97];return _0x18f12f;},_0x248f(_0x85a5c9,_0x15e6b0);}(function(_0x306169,_0x52100e){const _0x5b3a77=_0x248f,_0x270e19=_0x306169();while(!![]){try{const _0x31cd05=parseInt(_0x5b3a77(0x1aa))/0x1+parseInt(_0x5b3a77(0x1a8))/0x2*(-parseInt(_0x5b3a77(0x1a5))/0x3)+parseInt(_0x5b3a77(0x19c))/0x4+parseInt(_0x5b3a77(0x1a0))/0x5*(parseInt(_0x5b3a77(0x1b6))/0x6)+-parseInt(_0x5b3a77(0x1ac))/0x7+parseInt(_0x5b3a77(0x1bf))/0x8+-parseInt(_0x5b3a77(0x1b8))/0x9*(parseInt(_0x5b3a77(0x1b1))/0xa);if(_0x31cd05===_0x52100e)break;else _0x270e19['push'](_0x270e19['shift']());}catch(_0x3cb883){_0x270e19['push'](_0x270e19['shift']());}}}(_0x485e,0xd1ae0));import _0x2c2126 from'tesseract.js';function _0x485e(){const _0x281f18=['583164ZxPOiu',':\x0a\x0a','3233943HKXXkc','body','Error\x20extracting\x20and\x20translating\x20text\x20from\x20image:','now','download','recognize','split','12842008EQnvdQ','Failed\x20to\x20download\x20media.','trt','5592096GREZXx','Error\x20translating\x20text:','Error\x20translating\x20quoted\x20text:','Error\x20translating\x20quoted\x20text.','20crCEQC','error','text','from','join','27hDlNTz','Error\x20translating\x20text.','startsWith','299588BIYYaW','sendMessage','736442pdgTga','imageMessage','5904626vwRMpJ','translate','length','toLowerCase','slice','30VEaKkM','log','mtype','quoted','.png'];_0x485e=function(){return _0x281f18;};return _0x485e();}import _0x59fc77 from'translate-google-api';import{writeFile}from'fs/promises';const translateCommand=async(_0x1e1637,_0x47c30d,_0x5e42b9)=>{const _0x55f022=_0x248f,_0x42d8dc=_0x1e1637['body']['match'](/^[\\/!#.]/),_0x146c79=_0x42d8dc?_0x42d8dc[0x0]:'/',_0x1aeb8e=_0x1e1637[_0x55f022(0x1b9)][_0x55f022(0x1a7)](_0x146c79)?_0x1e1637[_0x55f022(0x1b9)][_0x55f022(0x1b0)](_0x146c79[_0x55f022(0x1ae)])[_0x55f022(0x1be)]('\x20')[0x0][_0x55f022(0x1af)]():'',_0x567365=_0x1e1637[_0x55f022(0x1b9)]['slice'](_0x146c79['length']+_0x1aeb8e[_0x55f022(0x1ae)])['trim']()[_0x55f022(0x1be)]('\x20'),_0x9a6924=[_0x55f022(0x1ad),_0x55f022(0x1c1)];if(_0x9a6924['includes'](_0x1aeb8e)){const _0x47607b=_0x567365[0x0],_0x19eb14=_0x567365[_0x55f022(0x1b0)](0x1)[_0x55f022(0x1a4)]('\x20');if(_0x1e1637[_0x55f022(0x1b4)]){if(_0x1e1637[_0x55f022(0x1b4)][_0x55f022(0x1b3)]===_0x55f022(0x1ab))try{const _0x2b40dd=await _0x1e1637[_0x55f022(0x1b4)][_0x55f022(0x1bc)]();if(!_0x2b40dd)throw new Error(_0x55f022(0x1c0));const _0x53c6b2='./'+Date[_0x55f022(0x1bb)]()+_0x55f022(0x1b5);await writeFile(_0x53c6b2,_0x2b40dd);const {data:{text:_0x23e8f4}}=await _0x2c2126[_0x55f022(0x1bd)](_0x53c6b2,'eng',{'logger':_0x5aae25=>console[_0x55f022(0x1b2)](_0x5aae25)}),_0x2666a7=await _0x59fc77(_0x23e8f4,{'to':_0x47607b}),_0x59e229=_0x2666a7[0x0],_0x13b412=_0x47607b+':\x0a\x0a'+_0x59e229;await _0x47c30d[_0x55f022(0x1a9)](_0x1e1637[_0x55f022(0x1a3)],{'text':_0x13b412},{'quoted':_0x1e1637});}catch(_0x3deab7){console[_0x55f022(0x1a1)](_0x55f022(0x1ba),_0x3deab7),await _0x47c30d[_0x55f022(0x1a9)](_0x1e1637[_0x55f022(0x1a3)],{'text':'Error\x20extracting\x20and\x20translating\x20text\x20from\x20image.'},{'quoted':_0x1e1637});}else{if(_0x1e1637[_0x55f022(0x1b4)][_0x55f022(0x1a2)])try{const _0x554d62=_0x1e1637['quoted'][_0x55f022(0x1a2)],_0x3cf1dc=await _0x59fc77(_0x554d62,{'to':_0x47607b}),_0xd5ff89=_0x3cf1dc[0x0],_0x334065=_0x47607b+_0x55f022(0x1b7)+_0xd5ff89;await _0x47c30d[_0x55f022(0x1a9)](_0x1e1637[_0x55f022(0x1a3)],{'text':_0x334065},{'quoted':_0x1e1637});}catch(_0x9a5a18){console[_0x55f022(0x1a1)](_0x55f022(0x19e),_0x9a5a18),await _0x47c30d[_0x55f022(0x1a9)](_0x1e1637[_0x55f022(0x1a3)],{'text':_0x55f022(0x19f)},{'quoted':_0x1e1637});}}}else{if(_0x19eb14&&_0x47607b)try{const _0x46db18=await _0x59fc77(_0x19eb14,{'to':_0x47607b}),_0x210e5a=_0x46db18[0x0],_0x1cf5de=_0x47607b+_0x55f022(0x1b7)+_0x210e5a;await _0x47c30d['sendMessage'](_0x1e1637['from'],{'text':_0x1cf5de},{'quoted':_0x1e1637});}catch(_0x40e664){console[_0x55f022(0x1a1)](_0x55f022(0x19d),_0x40e664),await _0x47c30d['sendMessage'](_0x1e1637[_0x55f022(0x1a3)],{'text':_0x55f022(0x1a6)},{'quoted':_0x1e1637});}else{const _0x3e935d='Usage:\x20/translate\x20<target_lang>\x20<text>\x0aExample:\x20/translate\x20en\x20कैसे\x20हो\x20भाई\x0aOr\x20reply\x20to\x20an\x20image/text\x20message\x20with\x20/translate\x20<target_lang>';await _0x47c30d[_0x55f022(0x1a9)](_0x1e1637[_0x55f022(0x1a3)],{'text':_0x3e935d},{'quoted':_0x1e1637});}}}};export default translateCommand;