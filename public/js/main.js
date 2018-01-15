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
                                .text(key.BRANCH));
                    });                           
      
    }
  })
})

$('#branch_select').on('change',function() {
  var sem = $('#sem_select').val();
  console.log(sem);
  var branch = $(this).val();
  console.log(branch);
  $.ajax({
    method : 'GET',
    url : '/api/'+sem+'/'+branch+'/getsubj',
    dataType: 'json',
    success : function(data){
      console.log(data[0]);
      var $el = $("#subject_select");
                    $el.empty(); // remove old options
                    $el.append($("<option></option>")
                            .attr("value", '').text('Please Select'));
                    $.each(data, function(value, key) {
                        $el.append($("<option></option>")
                                .text(key.Subject));
                    });                          
    }
  })
})

$('#searchbtn').on('click',function() {
  var sem = $('#sem_select').val();
  console.log(sem);
  var branch = $('#branch_select').val();
  console.log(branch);
  var subject = $('#subject_select').val();
  console.log(subject);
  $.ajax({
      method : 'GET',
      url : '/result/'+sem+'/'+branch+'/'+subject,
      dataType: 'json',
      success : function(data){
        console.log(data);
    }
  })
})
