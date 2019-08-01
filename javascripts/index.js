 function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }


function myFunction () {
    setTimeout(() => {
        var x = document.getElementById("frm1");
        if (x.elements[0].value === "") {
            $('#result').empty();
            var sentence = document.createElement("p");
            sentence.innerHTML += "Please upload a valid image"
            document.getElementById("result").appendChild(sentence);
            x.elements[0].value = "";
        } else {
            const sentences = ["Of course this is cute!", "The beauty of this dog captures me!", "I wonder what I was doing in life before I saw this picture! So cute!!", "You're breathtaking! *Keanu wink*", "They shouldn't hold puppy beauty constests because this would win every year! So cute!!"]
            $('#result').empty();
            var sentence = document.createElement("p");
            sentence.innerHTML += sentences[Math.floor(Math.random()*sentences.length)]
            document.getElementById("result").appendChild(sentence);
            x.elements[0].value = "";
        }
    }, 1000);
}       