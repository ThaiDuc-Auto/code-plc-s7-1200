// hàm chức năng chuyển  trang
function fn_ScreenChange(src_1,scr_2)
{
    document.getElementById(src_1).style.visibility= 'visible'; // hiển thị trang được chọn
    document.getElementById(scr_2).style.visibility= 'hidden';   // an trang 1
}

// Hàm chức năng ghi giá trị tag
function setTag(tag,val) {
    var tag_Link = '"web_com".' + tag;
    var url = "IO.html";
    sdata = tag_Link + '=' + val;
    $.post(url, sdata, function (result2){ });
}
 
// Hàm chức năng đọc giá trị tag
function IOField(ObjectID, tag) {
    url = "IO.html";
    $.getJSON(url, function (result) {
        document.getElementById(ObjectID).value = result[tag];
    });
}

// HIỂN THỊ DỮ LIỆU LÊN IO FIELD
setInterval(function () {
    if(tag_Edit_Enable == false)
    {
        // IO Field - Màn hình chính (Actual value)
        IOField("tbx_tag_Bool", "tag_Bool"); 
        IOField("tbx_tag_Byte", "tag_Byte"); 
        IOField("tbx_tag_Integer", "tag_Integer"); 
        IOField("tbx_tag_Real", "tag_Real"); 
        IOField("tbx_tag_String", "tag_String"); 
        IOField("tbx_tag_Integer_2", "tag_Integer_2"); 
    }
}, 1000);

// Hàm chức năng nút sửa/lưu dữ liệu
function fn_DataEdit(button1, button2)
{
    document.getElementById(button1).style.zIndex='1';  // Hiển nút 1
    document.getElementById(button2).style.zIndex='0';  // Ẩn nút 2
}

// Tại file “FC1_Common.js” tạo hàm chức năng báo đang sửa dữ liệu
// de nhap du lieu nha
// Tag Edit
var tag_Edit_Enable = false;
// Hàm báo đang sửa dữ liệu
function fn_Edditing(){
    fn_DataEdit("btt_Save", "btt_Edit")
    tag_Edit_Enable = true;  // tag noi
    // Enable chức năng IO Field
    document.getElementById("tbx_tag_Bool").disabled = false;
    document.getElementById("tbx_tag_Byte").disabled = false;
    document.getElementById("tbx_tag_Integer").disabled = false;
    document.getElementById("tbx_tag_Real").disabled = false;
    document.getElementById("tbx_tag_String").disabled = false;
    document.getElementById("tbx_tag_Integer_2").disabled = false;
}

// Hàm báo đã sửa dữ liệu
function fn_Saving(){
    fn_DataEdit("btt_Edit", "btt_Save")
    tag_Edit_Enable = false;
    // Set giá trị tag
    var tag_Bool_data = document.getElementById("tbx_tag_Bool").value; // Lấy giá trị từ textbox
    var tag_Byte_data = document.getElementById("tbx_tag_Byte").value;
    var tag_Integer_data = document.getElementById("tbx_tag_Integer").value;
    var tag_Real_data = document.getElementById("tbx_tag_Real").value;
    var tag_String_data = document.getElementById("tbx_tag_String").value;
    var tag_Integer_data_2 = document.getElementById("tbx_tag_Integer_2").value;
    
 
    setTag('tag_bool',tag_Bool_data); // Ghi dữ liệu xuống plc    
    setTag('tag_byte',tag_Byte_data);     // cai nay la su dung tag nha pro
    setTag('tag_integer',tag_Integer_data);    
    setTag('tag_real',tag_Real_data);    
    setTag('tag_string',tag_String_data);
    setTag('tag_integer_2',tag_Integer_data_2);  
 
    // Disable chức năng IO field
    document.getElementById("tbx_tag_Bool").disabled = true;
    document.getElementById("tbx_tag_Byte").disabled = true;
    document.getElementById("tbx_tag_Integer").disabled = true;
    document.getElementById("tbx_tag_Real").disabled = true;
    document.getElementById("tbx_tag_String").disabled = true;
    document.getElementById("tbx_tag_Integer_2").disabled = true;
    alert('Dữ liệu đã được lưu!');
}