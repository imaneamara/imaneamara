window.onload = function(){
    document.getElementById("download")
    .addEventListener("click",()=>{
        const curriculumvitae = this.document.getElementById("curriculumvitae");
        console.log(curriculumvitae);
        console.log(window);
        html2pdf().from(invoice).save();
    })
}

