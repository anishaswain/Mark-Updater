$('#sem_select').on('change',function() {
  var sem = $(this).val();
  $.ajax({
    method : 'GET',
    url : '/api/'+sem+'/getbranch',
    dataType: 'json',
    success : function(data){
      var $el = $("#branch_select");
                    $el.empty(); // remove old options
                    $el.append($("<option></option>")
                            .attr("value", '').text('Please Select'));
                    $.each(data, function(value, key) {
                        $el.append($("<option></option>")
                                .attr("value", value).text(key.BRANCH));
                    });                           
                  



    }
  })
})

$('#subject_select').on('change',function() {
  // var sem = $('#sem_select').val();
  // console.log(sem);
  var subj = $(this).val();
  console.log(subj);
  $.ajax({
    method : 'GET',
    url : '/api/'+sem+subj+'/getsubj',
    dataType: 'json',
    success : function(data){
      console.log(data[0]);
      var $el = $("#branch_select");
                    $el.empty(); // remove old options
                    $el.append($("<option></option>")
                            .attr("value", '').text('Please Select'));
                    $.each(data, function(value, key) {
                        $el.append($("<option></option>")
                                .attr("value", value).text(key.BRANCH));
                    });                           
                  



    }
  })
})
