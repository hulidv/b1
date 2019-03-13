var feedback

function collect_feedback(){
    feedback = document.getElementById("feedback")
    var link = "mailto:dai.w@pg.com" + "&subject=" + escape("B1_community_feedback") + "&body=" + escape(feedback.value);

    window.location.href = link;
}
