document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("loginEmailHeader");
    const inputText = document.getElementById("inputTextHeader");
    const submitButton = document.getElementById("emailSubmitHeader");
    const errorText = document.getElementById("inputInvalidTextHeader");
    const errorMessage = document.getElementById("invalidTextTextHeader");

    let hasTypedOnce = false;
    let hasBlurredOnce = false;
    const isValidEmail = (text) => {
        const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
        const containsMultipleDotsBeforeAt =
            text.split("@")[1]?.split(".").length > 1;
        const endsWithAlphabet = /[a-zA-Z]$/.test(text);
        const validChars = /^[a-zA-Z0-9@.]+$/.test(text);

        return (
            emailPattern.test(text) &&
            containsMultipleDotsBeforeAt &&
            endsWithAlphabet &&
            validChars
        );
    };

    inputField.addEventListener("input", () => {
        if (!hasTypedOnce) {
            hasTypedOnce = true;
        }
        if (hasTypedOnce && hasBlurredOnce) {
            if (isValidEmail(inputField.value)) {
                inputField.style.borderColor = "green";
                errorText.style.opacity = 0;
            } else {
                inputField.style.borderColor = "#e50915";
                const language = document.getElementById("lang1");
                if (inputField.value.trim() === "") {
                    if (language.value === "en-us") {
                        errorMessage.textContent = "Email is required.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "ईमेल ज़रूरी है.";
                    } else {
                        errorMessage.textContent = "Email is required.";
                    }
                } else {
                    if (inputField.value === "en-us") {
                        errorMessage.textContent = "Please enter a valid email address.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "कृपया सही ईमेल एड्रेस डालें";
                    } else {
                        errorMessage.textContent = "Please enter a valid email address.";
                    }
                }
                errorText.style.opacity = 1;
            }
        }
    });

    inputField.addEventListener("blur", () => {
        if (hasTypedOnce && !hasBlurredOnce) {
            hasBlurredOnce = true;
        }
        if (hasTypedOnce && hasBlurredOnce) {
            if (isValidEmail(inputField.value)) {
                inputField.style.borderColor = "green";
                errorText.style.opacity = 0;
            } else {
                inputField.style.borderColor = "#e50915";
                const language = document.getElementById("lang1");
                if (inputField.value.trim() === "") {
                    if (language.value === "en-us") {
                        errorMessage.textContent = "Email is required.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "ईमेल ज़रूरी है.";
                    } else {
                        errorMessage.textContent = "Email is required.";
                    }
                } else {
                    if (inputField.value === "en-us") {
                        errorMessage.textContent = "Please enter a valid email address.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "कृपया सही ईमेल एड्रेस डालें";
                    } else {
                        errorMessage.textContent = "Please enter a valid email address.";
                    }
                }
                errorText.style.opacity = 1;
            }
        }
    });

    const updateInputTextStyle = () => {
        if (
            inputField.value.trim() !== "" ||
            document.activeElement === inputField
        ) {
            inputText.style.top = "30%";
            inputText.style.fontSize = "0.75rem";
        } else {
            inputText.style.top = "50%";
            inputText.style.fontSize = "1rem";
        }
    };

    inputField.addEventListener("focus", updateInputTextStyle);

    inputField.addEventListener("input", updateInputTextStyle);

    inputField.addEventListener("blur", updateInputTextStyle);

    updateInputTextStyle();

    submitButton.addEventListener("click", (event) => {
        if (inputField.value.trim() === "" || !isValidEmail(inputField.value)) {
            event.preventDefault();
            inputField.focus();
        }
    });

    const inputFieldFooter = document.getElementById("loginEmailFooter");
    const inputTextFooter = document.getElementById("inputTextFooter");
    const submitButtonFooter = document.getElementById("emailSubmitFooter");
    const errorTextFooter = document.getElementById("inputInvalidTextFooter");
    const errorMessageFooter = document.getElementById("invalidTextTextFooter");

    let hasTypedOnceFooter = false;
    let hasBlurredOnceFooter = false;

    inputFieldFooter.addEventListener("input", () => {
        if (!hasTypedOnceFooter) {
            hasTypedOnceFooter = true;
        }
        if (hasTypedOnceFooter && hasBlurredOnceFooter) {
            if (isValidEmail(inputFieldFooter.value)) {
                inputFieldFooter.style.borderColor = "green";
                errorTextFooter.style.opacity = 0;
            } else {
                inputFieldFooter.style.borderColor = "#e50915";
                const language = document.getElementById("lang1");
                if (inputFieldFooter.value.trim() === "") {
                    if (language.value === "en-us") {
                        errorMessage.textContent = "Email is required.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "ईमेल ज़रूरी है.";
                    } else {
                        errorMessage.textContent = "Email is required.";
                    }
                } else {
                    if (inputField.value === "en-us") {
                        errorMessage.textContent = "Please enter a valid email address.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "कृपया सही ईमेल एड्रेस डालें";
                    } else {
                        errorMessage.textContent = "Please enter a valid email address.";
                    }
                }
                errorTextFooter.style.opacity = 1;
            }
        }
    });

    inputFieldFooter.addEventListener("blur", () => {
        if (hasTypedOnceFooter && !hasBlurredOnceFooter) {
            hasBlurredOnceFooter = true;
        }
        if (hasTypedOnceFooter && hasBlurredOnceFooter) {
            if (isValidEmail(inputFieldFooter.value)) {
                inputFieldFooter.style.borderColor = "green";
                errorTextFooter.style.opacity = 0;
            } else {
                inputFieldFooter.style.borderColor = "#e50915";
                const language = document.getElementById("lang1");
                if (inputFieldFooter.value.trim() === "") {
                    if (language.value === "en-us") {
                        errorMessage.textContent = "Email is required.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "ईमेल ज़रूरी है.";
                    } else {
                        errorMessage.textContent = "Email is required.";
                    }
                } else {
                    if (inputField.value === "en-us") {
                        errorMessage.textContent = "Please enter a valid email address.";
                    } else if (language.value === "hi-in") {
                        errorMessage.textContent = "कृपया सही ईमेल एड्रेस डालें";
                    } else {
                        errorMessage.textContent = "Please enter a valid email address.";
                    }
                }
                errorTextFooter.style.opacity = 1;
            }
        }
    });

    const updateInputTextStyleFooter = () => {
        if (
            inputFieldFooter.value.trim() !== "" ||
            document.activeElement === inputFieldFooter
        ) {
            inputTextFooter.style.top = "30%";
            inputTextFooter.style.fontSize = "0.75rem";
        } else {
            inputTextFooter.style.top = "50%";
            inputTextFooter.style.fontSize = "1rem";
        }
    };

    inputFieldFooter.addEventListener("focus", updateInputTextStyleFooter);

    inputFieldFooter.addEventListener("input", updateInputTextStyleFooter);

    inputFieldFooter.addEventListener("blur", updateInputTextStyleFooter);

    updateInputTextStyleFooter();

    submitButtonFooter.addEventListener("click", (event) => {
        if (
            inputFieldFooter.value.trim() === "" ||
            !isValidEmail(inputFieldFooter.value)
        ) {
            event.preventDefault();
            inputFieldFooter.focus();
        }
    });
});
