$('#sem_select').on('change',function() {
  var sem = $(this).val();
  $.ajax({
    method : 'GET',
    url : '/api/'+sem+'/getbranch',
    success : function(data){
      console.log(data);
    }
  })
})
