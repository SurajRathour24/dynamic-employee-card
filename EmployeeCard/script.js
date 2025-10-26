      let form = document.querySelector("form");
      let submitBtn = document.querySelector("#submit-btn");

      let inputs = document.querySelectorAll(".form-inputs");

      let formContainer = document.querySelector(".form-container");

      let controlForm = (dt) => {
        dt.preventDefault();
        // console.log(dt);
        // console.log(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].target);

        let cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");

        let cardBox = document.createElement("div");
        cardBox.classList.add("card-box");

        let imgBox = document.createElement("div");
        imgBox.classList.add("profile-photo");

        let empImg = document.createElement("img");
        if (inputs[3].value !== "") {
          empImg.setAttribute("src", inputs[3].value);
        } else {
          empImg.setAttribute(
            "src",
            "https://images.unsplash.com/photo-1750535135593-3a8e5def331d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
          );
        }

        imgBox.appendChild(empImg);

        let empName = document.createElement("h4");
        if (inputs[0].value !== "") {
          empName.textContent = inputs[0].value;
        } else {
          empName.textContent = "User";
        }
        let empAge = document.createElement("h5");
        if (inputs[2].value !== "") {
          empAge.textContent = inputs[2].value;
        } else {
          empAge.textContent = "1";
        }
        let empEmail = document.createElement("p");
        if (inputs[1].value !== "") {
          empEmail.textContent = inputs[1].value;
        } else {
          empEmail.textContent = "user@gmail.com";
        }

        cardContainer.appendChild(cardBox);
        cardBox.appendChild(imgBox);
        cardBox.appendChild(empName);
        cardBox.appendChild(empAge);
        cardBox.appendChild(empEmail);

        formContainer.appendChild(cardContainer);

        inputs.forEach(function(e){
            e.value = "";
        })
        console.log(dt);
        // console.log(cardContainer);
      };
      form.addEventListener("submit", controlForm);