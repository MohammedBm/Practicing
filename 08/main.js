//selecting the all tag with li tags
let lis = document.querySelectorAll("li");
// for loop to go over all li tags and adding the EventListener to them
for (let i = 0; i < lis.length; i++) {
  //adding the color green to the text
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("selcted")
    });
    //remving the color green from the text
    lis[i].addEventListener("mouseout", function() {
      this.classList.remove("selcted")
    });
    //this add a toggle function to the text when clicked it turns to grey
    //and when clicked again it turns to its orignal condition
    lis[i].addEventListener("click", function() {
        this.classList.toggle("done")
    });


}
