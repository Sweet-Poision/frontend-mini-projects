const regionSelect = document.getElementById("regionSelect");
const typeSelect = document.getElementById("typeSelect");
const language = document.getElementById("lang1");

const categories = {
    India: ["Movies", "TV Shows"],
    Global: [
        "Movies (English)",
        "Movies (Other)",
        "TV Shows (English)",
        "TV Shows (Other)",
    ],
};

const hindiCategories = {
    Movies: "फ़िल्में",
    TVShows: "टीवी शो",
    MoviesEnglish: "फ़िल्में - अंग्रेज़ी",
    MoviesOther: "फ़िल्में - अन्य भाषाएं",
    TVShowsEnglish: "टीवी शो - अंग्रेज़ी",
    TVShowsOther: "टीवी शो - अन्य भाषाएं",
};

function getTrimmedId(category) {
    return category.replace(/\s+/g, "").replace(/[()]/g, "");
}

const sections = {
    IndianMovie: document.getElementById("IndianMovie"),
    IndianTVShows: document.getElementById("IndianTVShows"),
    globalMovieEnglish: document.getElementById("globalMovieEnglish"),
    globalMovieOther: document.getElementById("globalMovieOther"),
    globalTVShowsEnglish: document.getElementById("globalTVShowsEnglish"),
    globalTVShowsOther: document.getElementById("globalTVShowsOther"),
};

function updateTypeOptions() {
    const selectedRegion = regionSelect.value;

    typeSelect.innerHTML = "";

    categories[selectedRegion].forEach((category) => {
        const option = document.createElement("option");
        const optionId = getTrimmedId(category);
        if (language.value === "hi-in") {
            option.textContent = hindiCategories[optionId];
        } else if (language.value === "en-us") {
            option.textContent = category;
        }
        option.value = category;
        option.id = optionId;
        typeSelect.appendChild(option);
    });

    updateVisibleSection();
}

function updateVisibleSection() {
    const selectedRegion = regionSelect.value;
    const selectedType = typeSelect.value;

    Object.values(sections).forEach(
        (section) => (section.style.display = "none")
    );

    if (selectedRegion === "India") {
        if (selectedType === "Movies")
            sections["IndianMovie"].style.display = "block";
        else if (selectedType === "TV Shows")
            sections["IndianTVShows"].style.display = "block";
    } else if (selectedRegion === "Global") {
        if (selectedType === "Movies (English)")
            sections["globalMovieEnglish"].style.display = "block";
        else if (selectedType === "Movies (Other)")
            sections["globalMovieOther"].style.display = "block";
        else if (selectedType === "TV Shows (English)")
            sections["globalTVShowsEnglish"].style.display = "block";
        else if (selectedType === "TV Shows (Other)")
            sections["globalTVShowsOther"].style.display = "block";
    }
}

regionSelect.addEventListener("change", updateTypeOptions);
typeSelect.addEventListener("change", updateVisibleSection);

updateTypeOptions();

document.addEventListener("DOMContentLoaded", function () {
    const scrollWrappers = document.querySelectorAll(".scroll-view-wrapper");
    const leftButtons = document.querySelectorAll(".left-scroll-bg");
    const rightButtons = document.querySelectorAll(".right-scroll-bg");
    const accElements = document.querySelectorAll(".faq-title");
    const time_ms = 180;

    accElements.forEach((acc) => {
        acc.addEventListener("click", () => {
            const accBody = acc.nextElementSibling;
            const isActive = accBody.getAttribute("active") === "true";

            document.querySelectorAll(".faq-title + .faq-body").forEach((body) => {
                body.removeAttribute("active");
            });

            if (accBody && !isActive) {
                accBody.setAttribute("active", "true");
            }
        });
    });

    function smoothScroll(element, distance, duration) {
        const start = element.scrollLeft;
        const startTime = performance.now();

        function scrollStep(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            element.scrollLeft = start + distance * progress;

            if (progress < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }

    function getScrollDistance(wrapper) {
        const scrollView = wrapper.querySelector(".scroll-view");
        const lb = wrapper.querySelector(".left-scroll");
        const rb = wrapper.querySelector(".right-scroll");
        if (!scrollView || !lb || !rb) {
            console.error("Required elements are missing in the wrapper");
            return 0;
        }
        const scrollButtonWidth = Math.max(
            lb.getBoundingClientRect().width,
            rb.getBoundingClientRect().width
        );
        const LiElement = scrollView.querySelector(".trending-item-item");
        if (!LiElement) {
            console.error("No trending item found in the scroll view");
            return 0;
        }
        const scrollDistance =
            LiElement.getBoundingClientRect().width * 5 - scrollButtonWidth;
        return scrollDistance;
    }

    function toggleSnap(scrollContainer, isSnapEnabled) {
        scrollContainer.style.scrollSnapType = isSnapEnabled
            ? "inline proximity"
            : "none";
    }

    function scrollAllLeft() {
        scrollWrappers.forEach((wrapper) => {
            const scrollView = wrapper.querySelector(".scroll-view");
            const scrollDistance = getScrollDistance(wrapper);
            toggleSnap(scrollView, false);

            if (scrollView) {
                smoothScroll(scrollView, -scrollDistance, time_ms);
            }
            setTimeout(() => toggleSnap(scrollView, true), time_ms);
        });
    }

    function scrollAllRight() {
        scrollWrappers.forEach((wrapper) => {
            const scrollView = wrapper.querySelector(".scroll-view");
            const scrollDistance = getScrollDistance(wrapper);
            toggleSnap(scrollView, false);
            if (scrollView) {
                smoothScroll(scrollView, scrollDistance, time_ms);
            }
            setTimeout(() => toggleSnap(scrollView, true), time_ms);
        });
    }
    leftButtons.forEach((button) => {
        button.addEventListener("click", scrollAllLeft);
    });

    rightButtons.forEach((button) => {
        button.addEventListener("click", scrollAllRight);
    });

    function updateScrollButtons(wrapper) {
        const scrollContainer = wrapper.querySelector(".scroll-view");
        const leftButtonBody = wrapper.querySelector(".left-scroll");
        const rightButtonBody = wrapper.querySelector(".right-scroll");

        if (scrollContainer.scrollLeft <= 5) {
            leftButtonBody.setAttribute("hidden", "");
        } else {
            leftButtonBody.removeAttribute("hidden");
        }
        if (
            scrollContainer.scrollLeft + scrollContainer.clientWidth >=
            scrollContainer.scrollWidth - 5
        ) {
            rightButtonBody.setAttribute("hidden", "");
        } else {
            rightButtonBody.removeAttribute("hidden");
        }
    }

    scrollWrappers.forEach((wrapper) => {
        const scrollContainer = wrapper.querySelector(".scroll-view");
        scrollContainer.addEventListener("scroll", () =>
            updateScrollButtons(wrapper)
        );
    });
    const floatingButton = document.getElementById("floatingButton");
    const trendingStart = document.getElementById("trendingStart");
    const footerStart = document.getElementById("footerStart");

    function activateButton() {
        floatingButton.setAttribute("active", "");
    }

    function deactivateButton() {
        floatingButton.removeAttribute("active");
    }

    function checkButtonVisibility() {
        const trendingStartRect = trendingStart.getBoundingClientRect();
        const footerStartRect = footerStart.getBoundingClientRect();

        const isTrendingAboveViewport = trendingStartRect.top <= 0;

        const isFooterBelowViewport = footerStartRect.top > window.innerHeight;

        if (isTrendingAboveViewport && isFooterBelowViewport) {
            activateButton();
        } else {
            deactivateButton();
        }
    }

    window.addEventListener("scroll", checkButtonVisibility);

    checkButtonVisibility();
});
