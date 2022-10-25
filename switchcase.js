switch (expression) {
    case 1: statement(s)
    break;
    
    case 2: statement(s)
    break;

    case 3: statement(s)
    break;
    
    default: statement(s)
 }

 
 <html>
   <body>   
      <script type = "text/javascript">
            var grade = 'A';
            document.write("Entering switch block<br />");
            switch (grade) {
               case 'A': document.write("Good job<br />");
               break;
            
               case 'B': document.write("Pretty good<br />");
               break;
            
               case 'C': document.write("Passed<br />");
               break;
            
               case 'D': document.write("Not so good<br />");
               break;
            
               case 'F': document.write("Failed<br />");
               break;
            
               default:  document.write("Unknown grade<br />")
            }
            document.write("Exiting switch block");
         
      </script>      
      <p>Set the variable to different value and then try...</p>
   </body>
</html>

let age =prompt("What is your age : ");
// here we need to pass the age in '' bozz we are getting a string from prompt.
switch (age){
    case '12' : 
     console.log("Your age is 12")
     break;
    case '13' : 
     console.log("Nice age")
      break;
    default :
     console.log("Nice age not")
    }


    let a=12;
    let b = a >12 ? "you are nice boy " : "you are not nice boy" 
    console.log(b) 
    