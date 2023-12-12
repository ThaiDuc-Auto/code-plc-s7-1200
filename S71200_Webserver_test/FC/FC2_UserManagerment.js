// thanh lap danh sach người dùn bao gồm user va pass word
// tao cac bien chưa gia trị tham số nha
var admin=["admin","123456"]
var user_1=["user_1","111111"]
var user_2=["user_2","222222"]

// viết chương trình con cho việc phân quyền nha
function login()
{
    var a = document.getElementById("inputuser").value;
    var b = document.getElementById("inputpass").value;

    // code cho admin
    if(a==admin[0] && b==admin[1])
    {
        fn_ScreenChange('ScreenMain','Screen_1','Screen_2');
        document.getElementById('id01').style.display='none';
    }
     // code  User 1
     if(a==user_1[0] && b==user_1[1])
     {
         fn_ScreenChange('Screen_1','ScreenMain','Screen_2');   
         document.getElementById('id01').style.display='none';  
         document.getElementById("btt_Screen_2").disabled =true;
     }
         // code  User 2
     if(a==user_2[0] && b==user_2[1])
     {
         fn_ScreenChange('Screen_2','ScreenMain','Screen_1');   
         document.getElementById('id01').style.display='none';  
         document.getElementById("btt_Screen_1").disabled =true;
         document.getElementById("btt_Screen_main").disabled =true;
     }
     else{
        window.location.href='';
     }
}
 // chuong trinhg logout nha pro
function logout()
{
  alert("Đăng xuất thành công");
  window.Location.href='Dev_by_ThaiDucautomation.com';
}