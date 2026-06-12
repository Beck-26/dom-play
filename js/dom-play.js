/*
    DOM Play Project by Beckham Kunda

    This app highlights an actor's lines when the actor's button is clicked.
    With a single click, all lines for the selected actor are highlighted.
    Lines from all other actors are un-highlighted.

    This works by using data-actor attributes as HTML hooks.
    The function can work with any number of actors and any number of
    additional lines added to the page, as long as the data-actor values match.
*/

document.addEventListener("DOMContentLoaded", function () {
    const actorButtons = document.querySelectorAll(".actor-buttons button");
    const scriptLines = document.querySelectorAll(".line");

    actorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedActor = this.dataset.actor;

            highlightActorLines(selectedActor);
            showActiveActorButton(selectedActor);
        });
    });

    function highlightActorLines(actor) {
        scriptLines.forEach(function (line) {
            line.classList.remove("highlight");

            if (line.dataset.actor === actor) {
                line.classList.add("highlight");
            }
        });
    }

    function showActiveActorButton(actor) {
        actorButtons.forEach(function (button) {
            button.classList.remove("active-actor");

            if (button.dataset.actor === actor) {
                button.classList.add("active-actor");
            }
        });
    }
});