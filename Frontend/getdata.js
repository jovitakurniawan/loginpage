// const SERVER = "https://593ba88e-9e31-465e-927c-d69737d9a8a1.mock.pstmn.io";
// let path = "/user/all";

// let URL = SERVER + path;

// const b2 = document.getElementById("b2");
// b2.addEventListener("click", () => {
//   $.getJSON(URL, (data) => {
//     let code = "<ul>";
//     data.forEach((element) => {
//       code += `<li> Full Name: ${element.first_name} ${element.last_name}`;
//     });
//     code += "</ul>";
//     $(".mypanel").html(code);
//   });
// });

const b2 = document.getElementById("b2");

b2.addEventListener("click", () => {
    fetch("https://593ba88e-9e31-465e-927c-d69737d9a8a1.mock.pstmn.io/user/all")
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        // console.log(response);
        let text = `Hello, ${response[0].first_name}!`;
        $(".mypanel").html(text);
    });
});