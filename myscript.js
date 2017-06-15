function display()
dispWin = window.open('','NewWin','toolbar=no, status=no, width=300, height=200')

message = "<ul><li> Name: " + document.kForm.the_name.value;
message += "<ul><li> E-mail: " + document.kForm.the_email.value;
message += "<ul><li> Gender: " + document.kForm.the_gender.value;
message += "</ul>";
dispWin.document.write(message);
}
