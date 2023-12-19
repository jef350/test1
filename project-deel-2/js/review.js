document.getElementById("saveButton").addEventListener("click", function () {
    let reviewText = document.getElementById("reviewText").value;
    if (reviewText.trim() !== "") {
        var listItem = document.createElement("li");

        var imgElement = document.createElement("img");

        imgElement.src = 'assets/icons/Ontwerp zonder titel.png';

        listItem.appendChild(imgElement);

        listItem.appendChild(document.createTextNode(reviewText));

        document.getElementById("reviewList").appendChild(listItem);

        document.getElementById("reviewText").value = "";
    }
});