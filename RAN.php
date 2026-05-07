<?php
session_start():
include'db.php';

if(!isset($_SESSION['user])){
header(''Location:index.php');
}
$result=mysqli__query($conn,"
"SELECT*FROM question"):?>
<!DOCTYPE htmlL>
<html>
<head>
 <title>quiz</title>
 </head>
 <body>
 <h2>welcome<?php echo
 $-SESSION['user'];?></h2>
 
 <form action="result.php"
 methoht="post">
 <?php
 while($row=
 mysqli-fetch-assoc($result.php)){
?>
<p><?php echo $row[question'];?
></p>
<input type="radio"name="q<?php
echo$row['id'];?>"value="1"> <?php
echo$row['option1'];?><br>
<input type="radio"name="q<?php
echo$row['id'];?>"value="2"> <?php
echo$row['option2'];?> 
<input type=''radio''name=''q<?php
echo$row['id'];?>''value=''3''> <?php
echo$row['option3'];?><br>
<input type=''radio'name='q<?php
echo$row ['option4'];/><br>
<?php
 }
 ?>
   <br>
   <buttontype=''submit''>submit
 Quiz</button>
</from>

</body>
</html> 

