var cont = $("#cont")

function show_it(){
    $.get("https://codingninjas.in/api/v3/courses",function(data){
        var courses =data.data.courses;
        var len = courses.length;
        for (let course of courses){

            cont.append(
      `          <div class="card" style="width: 18rem;">
                    <img src="${course.preview_image_url}" class="card-img-top" alt="">
                    <div class="card-body">
                        <p class="card-text">${course.name}</p>
                        <p class="card-text">${course.level}</p>
                    </div>
                </div>`
            )


        }
        
    })
    $("#one").empty()

}


var button = document.getElementById("btn");
var click_h = button.addEventListener("click",show_it);