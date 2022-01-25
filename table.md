## table head ,table foot 不常用
```html
<!DOCTYPE html>
<html>
   <head>
      <meta charset = "utf-8">
      <title>A simple HTML5 table</title>
   </head>
   <body>
      <table border = "1">

         <tbody>
            <tr>
               <td>Apple</td>
               <td>$0.25</td>
            </tr>
            <tr>
               <td>Orange</td>
               <td>$0.50</td>
            </tr>
            <tr>
               <td>Banana</td>
               <td>$1.00</td>
            </tr>
            <tr>
               <td>Pineapple</td>
               <td>$2.00</td>
            </tr>
         </tbody>
      </table>
   </body>
</html>
```
&nbsp;
&nbsp;

<!DOCTYPE html>
<html lang = "en">
	<head>
		<meta charset = "utf-8">
		<title>Table</title>
	</head>
	<body>
		<table border = "1">
		<tr>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td rowspan="2">4</td>
		</tr>
		<tr>
			<td>5</td>
			<td rowspan = "2" colspan = "2">6</td>
		</tr>
		<tr>
			<td>9</td>
			<td rowspan = "3">12</td>
		</tr>
		<tr>
			<td colspan = "2">13</td>
			<td>15</td>
		</tr>
		<tr>
			<td>17</td>
			<td>18</td>
			<th>19</th>
		</tr>
		</table>
	</body>
</html>
