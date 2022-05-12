let wrapper = $(".main");
let load = 0;
let int = setInterval(blurring, 20);
const scale = (number, inMin, inMax, outMin, outMax) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }

    wrapper.css({
        filter: `blur(${scale(load, 0, 100, 30, 0)}px)`,
    });
}



$(function () {
    let container = document.getElementById("container");

    toggle = () => {
        container.classList.toggle("sign-in");
        container.classList.toggle("sign-up");
    };

    setTimeout(() => {
        container.classList.add("sign-in");
    }, 50);
})

// validation forms
function validationRegisterForm() {
    let registerForm = $("#register-form");
    if (registerForm.length) {
        registerForm.validate({
            rules: {
                username: {
                    minlength: 2,
                },
                email: {
                    email: true
                },

                password: {
                    required: true
                },
                phone: {
                    minlength: 11,
                    maxlength: 11,
                },
            },
            messages: {
                username: {
                    required: "Please enter your username",
                    minlength: "Please, at least {0} characters are necessary"
                },
                email: "please enter your email",
                password: "Please enter your password",
                phone: {
                    required: "Please enter your phone",
                    minlength: 'phone number is less than 11 digit',
                    maxlength: "phone number is more than 11 digit"

                },
            },


            submitHandler: function (registerForm) {
                registerForm.submit();
            }

        })
    }



}
validationRegisterForm()


function btnLogin(e) {


    window.open("dashboard.html", "_self");

}
// end of validation

function ExitBtn() {
    window.open("index.html", "_self");
}
