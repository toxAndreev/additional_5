module.exports = function check(str, bracketsConfig) {
var result;
if(str.length%2)
result = false;
else
{
var a,b,c,last,q, stack = [];
for(var i=0; i<str.length; i++){
    q = str[i];
    if(q == '(' || q == '[' ||  q == '{' || q == '1' || q == '3' || q == '5' )
    {
        stack.push(q);
        last = q;

        }
     else if(q == ')' || q == ']' || q == '}' || q == '2' || q == '4' || q == '6' )
     {
     if(last)
     {
     if(q == '(' && last == ')' || q == '[' && last == ']' || q == '{' && last == '}' || q == '1' && last == '2' || q == '3' && last == '4' || q == '5' && last == '6')
     {

     stack.pop();
     last = stack.length > 0 ? stack[stack.length - 1] : undefined;

        }

        }else
        result = false;
        }
}

result = true;


}
return result;
}

