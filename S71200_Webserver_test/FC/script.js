window.onload = function() {
    var loginForm = document.getElementById('loginForm');
    var message = document.getElementById('message');
    var rememberCheckbox = document.getElementById('remember');
    var logoutBtn = document.getElementById('logoutBtn');
    var loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // Kiểm tra nếu đã lưu thông tin đăng nhập, tự động điền vào trường người dùng và mật khẩu
        var user = JSON.parse(loggedInUser);
        document.getElementById('username').value = user.username;
        document.getElementById('password').value = user.password;
        rememberCheckbox.checked = true;
        showLogoutButton(user.role);
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Kiểm tra thông tin đăng nhập
        var user = checkLogin(username, password);

        if (user) {
            // Đăng nhập thành công
            if (rememberCheckbox.checked) {
                // Lưu thông tin đăng nhập nếu chọn "Ghi nhớ"
                localStorage.setItem('loggedInUser', JSON.stringify(user));
            } else {
                // Xóa thông tin đăng nhập nếu không chọn "Ghi nhớ"
                localStorage.removeItem('loggedInUser');
            }
            showLogoutButton(user.role);
            message.textContent = 'Đăng nhập thành công!';
        } else {
            // Đăng nhập thất bại
            message.textContent = 'Tên người dùng hoặc mật khẩu không chính xác!';
        }
    });

    logoutBtn.addEventListener('click', function() {
        // Xóa thông tin đăng nhập và ẩn nút "Đăng xuất"
        localStorage.removeItem('loggedInUser');
        logoutBtn.style.display = 'none';
        message.textContent = 'Đã đăng xuất!';
    });

    function checkLogin(username, password) {
        // Kiểm tra thông tin đăng nhập và trả về thông tin người dùng nếu hợp lệ
        if (username === 'admin' && password === 'adminpass') {
            return {
                username: username,
                role: 'admin'
            };
        } else if (username === 'user1' && password === 'user1pass') {
            return {
                username: username,
                role: 'user'
            };
        } else if (username === 'user2' && password === 'user2pass') {
            return {
                username: username,
                role: 'user'
            };
        } else {
            return null;
        }
    }

    function showLogoutButton(role) {
        // Hiển thị nút "Đăng xuất" nếu người dùng đã đăng nhập
        if (role === 'admin' || role === 'user') {
            logoutBtn.style.display = 'block';
        }
    }
};