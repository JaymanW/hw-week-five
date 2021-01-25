$(document).ready(function() {

    const list = $(".input-control").length;
    let adjustedCurrentHour = 0;

    const refreshTime = () => {
        const currentHour = parseInt(moment().format("h"));
        const amOrPm = moment().format("a");
        if (amOrPm === "pm") {
            adjustedCurrentHour = currentHour + 12;
        } else {
            adjustedCurrentHour = currentHour;
        }
        console.log(adjustedCurrentHour);
    }

    // const updateScheduleDisplay = () => {
    //     for (let i = 0; i < list.length; i++) {
    //         const adjustedIndex = i + 6;
            
    //     }
    // }

    refreshTime();

    const refreshInputs = () => {
        for (let i = 0; i <= $(".savedText").length; i++) {
            const adjustedIndex = i + 6;
            const storedInput = localStorage.getItem("inputText" + adjustedIndex);
            $(`*[data-input=${adjustedIndex}]`).val(storedInput);
        }
    }
    refreshInputs();

    $(".saveBtn").on("click", function(e) {
        e.preventDefault();
        const btnId = $(this).attr("data-btn");
        localStorage.setItem("inputText" + btnId, $(`*[data-input=${btnId}]`).val());
    });

    $("#clear-storage").on("click", function(e) {
        e.preventDefault();
        localStorage.clear();
        refreshInputs();
    })

    // moment().format('MMMM Do, YYYY');

});

