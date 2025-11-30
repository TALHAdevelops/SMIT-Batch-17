// Default Parameters

function abc(a = "Kuch Likhenge") {
  console.log(a);
}

abc();        
abc("Adil");  

// Rest Parameters

function info(name, ...hobbies) {
  console.log(name);
  console.log(hobbies);
}

info("Ali", "Cricket", "Football", "Coding");