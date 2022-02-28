<?php
$name = $_POST['name'];
$thingsliked = $_POST['thingsliked'];
print ("<p>你的姓名為 : $name</p>");
if(isset($thingsliked))
{
    $n = count($thingsliked);
    echo("你喜歡的樣式為 : ");
    for($i =0;$i<$n;$i++)
    {
        echo($thingsliked[$i] . "  ");

    }

}
?>
 
