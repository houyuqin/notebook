 $(function(){

  var $filei = $('<div id="notepadd-dlg-file">选择文件</div>'),
      $editi = $('<div id="notepadd-dlg-edit">编辑</div>'),
      $viewi = $('<div id="notepadd-dlg-view">查看</div>'),
      $helpi = $('<div id="notepadd-dlg-help">帮助</div>');

  $file.click(function(){
    $('#box').append($filei);
  });
  $edit.click(function(){
    $('#box').append($editi);
  });
  $view.click(function(){
    $('#box').append($viewi);
  });
  $help.click(function(){
    $('#box').append($helpi);
  });

  :wq

});


