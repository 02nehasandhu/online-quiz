<!DOCTYPE html>
<html>
<body>
<h2 id="result"></h2>

<script>
const score = localStorage.getItem("score");
document.getElementById("result").innerText = "Your Score: " + score;
</script>

</body>
</html>