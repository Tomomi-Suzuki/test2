function setBlobUrl(id, content) {

 // �w�肳�ꂽ�f�[�^��ێ�����Blob���쐬����B
    var blob = new Blob([ content ], { "type" : "application/x-msdownload" });
 
 // A�^�O��href������Blob�I�u�W�F�N�g��ݒ肵�A�����N�𐶐�
    window.URL = window.URL || window.webkitURL;
    $("#" + id).attr("href", window.URL.createObjectURL(blob));
    $("#" + id).attr("download", "tmp.txt");
}