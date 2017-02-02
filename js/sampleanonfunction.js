<!DOCTYPE html>
<html>
<body>

<p>After a function has been stored in a variable,
the variable can be used as a function:</p>

<p id="demo"></p>
<p id="demo2"></p>

<script>

function myFunction(a, b) {
    return a * b;
}

var x = function (a, b) {return a * b};
document.getElementById("demo").innerHTML = x(4, 3);

document.getElementById("demo2").innerHTML = myFunction(4, 3);

</script>

</body>
</html>