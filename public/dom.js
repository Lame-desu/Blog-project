$(".edit").click(function () {
  var parentDiv = $(this).parent();
  var heading = parentDiv.find("h4").text();
  var body = parentDiv.find("p").text();
  // console.log(parentDiv.find("div").find("p").text());
  var readClass = parentDiv.find("button").eq(0).text();
  var parClass;
  if (readClass == "Read") {
    parClass = "hide-content";
  } else {
    parClass = "";
  }
  console.log(parClass);
  // console.log(body);
  var newHtml =
    `<h4>Edit Your Blog</h4> </br>
    <p>Edit Heading</p>
    <input size="100" class="mb-3 heading" type="text" value="` +
    heading +
    `" /> </br> </br> <p>Edit Body</p>
    <textarea id="message" name="content" rows="20" cols="150" required>` +
    body +
    `</textarea> </br>
    <button class="btn btn-success submit">Submit</button> </br>`;
  var editedParent = parentDiv.parent().find("div").eq(0);
  editedParent.html(newHtml);
  console.log(editedParent);
  parentDiv.hide();
  editedParent.find("button").click(function () {
    var editedHeading = editedParent.find("input").val();
    var editedBody = editedParent.find("textarea").val();
    // console.log(editedBody);
    var separatedBodyParagraphs = editedBody.split("\n");
    // console.log(separatedBodyParagraphs);
    let paragraphs = "";
    for (var i = 0; i < separatedBodyParagraphs.length; i++) {
      paragraphs +=
        "<p class=" + parClass + ">" + separatedBodyParagraphs[i] + "\n</p>";
    }
    // var editedHtml = `<h3>${editedHeading}</h3>
    //     <hr/> ${paragraphs}`;
    // console.log(paragraphs);
    editedParent.empty();
    parentDiv.show();
    parentDiv.find("h4").html(editedHeading);
    parentDiv.find("p").remove();
    parentDiv.append(paragraphs);
    // parentDiv.find("div").html(editedHtml);
    // console.log(parentDiv.find("div").find("p").text());
  });
});

$(".read-body").click(function () {
  var text = $(this).text();
  var parentt = $(this).parent();
  if (text == "Read") {
    parentt.find("p").removeClass("hide-content");
    $(this).text("Hide");
  } else {
    parentt.find("p").addClass("hide-content");
    $(this).text("Read");
  }
});
// $(".delete").click(function () {
//   var parent = $(this).parent();
//   parent.remove();
// });
