// Helper functions
function clone(obj) { return JSON.parse(JSON.stringify(obj)); }
function print(obj) {
    document.getElementById('disp').innerHTML += JSON.stringify(obj, undefined, '  ') + '<br />';
    console.log(obj);
}

Object.filter = function (obj, ignore, invert) {
    if (ignore === undefined) {
        return obj;
    }
    invert = invert || false;
    var not = function(condition, yes) { return yes ? !condition : condition; };
    var isArray = Ext.isArray(ignore);
    for (var key in obj) {
        if (obj.hasOwnProperty(key) &&
                (isArray && not(!Ext.Array.contains(ignore, key), invert)) ||
                (!isArray && not(!ignore.call(undefined, key, obj[key]), invert))) {
            delete obj[key];
        }
    }
    return obj;
};

var foo = {
    x: 1,
    y: 0,
    z: -1,
    a: 'Hello',
    b: 'World'
}, bar = clone(foo);

print(Object.filter(foo, ['z', 'a', 'b'], true));
print(Object.filter(bar, function (key, value) {
    return Ext.isString(value);
}));



// function main() {
//     var Types = {
//         INTEGER:   { value: 'int'    },
//         CHARACTER: { value: 'char'   },
//         FLOAT:     { value: 'float'  },
//         DOUBLE :   { value: 'double' },
//         STRING:    { value: 'str'    },
//         BOOLEAN:   { value: 'bool'   }
//     };
//
//     var Numbers = filterByKeys(Types, [ 'INTEGER', 'FLOAT', 'DOUBLE' ]);
//
//     write(JSON.stringify(Numbers, undefined, '  '));
// };
//
// function listToSet(list) {
//     var _set = {};
//     if (isArr(list)) {
//         for (var i = 0; i < list.length; i++) {
//             _set[list[i]] = true;
//         }
//     }
//     return _set;
// };
//
// function filterByKeys(obj, keep) {
//     var result = {},
//         unfiltered = keep === undefined,
//         keys = listToSet(keep);
//     if (isObj(obj)) {
//         for (var key in obj) {
//             if (unfiltered ||  (!unfiltered && keys[key])) {
//                 result[key] = obj[key];
//             }
//         };
//     }
//     return result;
// };
//
// function write(text) {
//     document.getElementsByTagName('body')[0].innerHTML = text;
// }
//
// var tObj='[object Object]',tArr='[object Array]',str=Object.prototype.toString;
// var isArr='isArray'in Array?Array.isArray:function(v){return str.call(v)===tArr};
// var isObj=str.call(null)===tObj?function(v){return v!==null&&v!==void 0&&str.call(v)===tObj&&v.ownerDocument===void 0}:function(v){return str.call(v)===tObj
// };
//
// $(document).ready(function () {
//     main();
// });
