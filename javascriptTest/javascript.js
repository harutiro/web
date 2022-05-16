
function sample(){
    // id属性で要素を取得
var textbox_element = document.getElementById('textbox');

// 新しいHTML要素を作成
var new_element = document.createElement('p');
new_element.textContent = '追加テキスト';

// 指定した要素の中の末尾に挿入
textbox_element.appendChild(new_element);
}