import * as $ from "jquery";
import { signUserUp, signUserOut, signUserIn } from "./model";

function initListeners() {
    $("#submit").on("click", () => {
        const firstName = $(" #fName").val();
        const lastName = $(" #lName").val();
        const email = $(" #email").val();
        const password = $(" #password").val();

        signUserUp(firstName, lastName, email, password);
    });
    $("#so").on("click", () => {
        signUserOut();
    })

    $("#siSubmit").on("click", () => {
        let siEmail = $(" #siEmail").val();
        let siPassword = $(" #siPassword").val();

        signUserIn(siEmail, siPassword);
    })
}

$(document).ready(function () {
    initListeners();
});