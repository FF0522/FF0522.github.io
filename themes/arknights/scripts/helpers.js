// 確保 Hexo 能正確識別頁面類型，修復 arknights 主題在部分 Hexo 版本下的 bug
hexo.extend.helper.register('is_post', function(){
  return this.page.__post === true || this.page.layout === 'post';
});

hexo.extend.helper.register('is_archive', function(){
  return this.page.layout === 'archive' || this.page.__archive === true;
});