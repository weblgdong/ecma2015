/*{
    let a,b,rest;
    [a,b] = [1,2];
    console.log(a,b);
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);
}

{
    let a, b, rest;
    ({a, b} = {a: 1, b: 2});
    console.log(a, b);
}

{
    let a,b,c,rest;
    [a,b,c=3] = [1,2];
    console.log(a,b,c);
}
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);
}


{
    let a,b,rest;
    function fn(){
        return [1,2]
    }
    [a,b] = fn();
    console.log(a,b);
}

{
    let a,b;
    function fn(){
        return [1,2,3,4,5,6]
    }
    [a,,...b] = fn();
    console.log(a,b);
}

{
    let a,b,c;
    let o = {p:42,q:true};
    let {p,q} = o;
    console.log(p,q);
}

{
    let {a=5,b=10} = {a:3};
    console.log(a);
}


{
    let metaDate = {
        title:'abc',
        test:[{
            title:'test',
            desc:['description']
        }]
    };
    let {title:esTitle,test:[{title:cnTitle}]} = metaDate;
    console.log(esTitle,cnTitle)
}
*/
{
    let metaDate = {
        title:'abc',
        test:[
            {
                title:'test',
                desc:'description'
            }
        ]
    };

    let {title:esTitle,test:[{title:cnTitle}]} = metaDate;
    console.log(cnTitle);
}























