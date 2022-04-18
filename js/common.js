
//選択中のメニュー
function chooseNav(currentNav){
    $(currentNav).addClass('active');
}     

//modal画面表示
function modalControl(triggerClassName, viewerIdName) {
    var clickedObj = document.getElementsByClassName(triggerClassName);
    for(var i=0; i < clickedObj.length; i++) {
        clickedObj[i].addEventListener("click", function() {
            $(viewerIdName).on('show.bs.modal', function (event) {
                var triggered = $(event.relatedTarget); // Button that triggered the modal
                var category = triggered.data("category");
                var memo = triggered.data("memo");
                var id = triggered.data("id");
                var imgSrc = triggered.attr('src');

                var modal = $(this)
                modal.find('.modal-title').text(category)
                modal.find('#modal-image').attr("src", imgSrc);
                modal.find('#modal-image').css("width", "100%");
                modal.find('#modal-memo').html(memo)
                modal.find("input").val(id);
            })
        });
    }
}

$(document).ready(function(){

    //ファイルのpreview用
    $('#photo').on('change', function (e) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#preview").attr('src', e.target.result);
            $("#preview").css('width', "200px");
            $("#preview").addClass('img-thumbnail');
        }
        reader.readAsDataURL(e.target.files[0]);
    });

});

