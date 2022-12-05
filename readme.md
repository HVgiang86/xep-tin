## Tool hỗ trợ xếp lịch cho các đồng chí KMA
[Demo](https://tin-chi-ngosangns.web.app/)
### Hướng dẫn tự deploy tool và cập nhật lịch
1. Clone repo về và chuẩn bị file excel tín chỉ của trường cấp
2. Làm theo các bước trong [video hướng dẫn này](https://www.youtube.com/watch?v=rQEv9uwFc18)  
*CHÚ Ý: Bản update mới không cần làm bước **thêm tiết lý thuyết vào tiết thực hành** như trong video hướng dẫn nữa nhé!*
3. Copy file excel vào thư mục gốc của project và đổi tên theo định dạng như các file excel khác để người xem có thể download file excel tín chỉ về xem
4. Cập nhật lại thông tin download excel và tiêu đề trong file `config.js`
5. Nhớ để nguyên credit tác giả nhé :)
5. Up lên một hosting nào đó và xếp lịch thôi! :D


## Hướng dẫn Deploy lên Firebase Hosting
**Deploy lên Firebase hosting thì sẽ có url dạng cáigìđấy.web.app**
- Bước 1: cài NodeJS vào máy
- Bước 2: Tạo project trên Firebase
- Bước 2: Chạy lệnh sau trong CMD:  *npm install -g firebase-tools*
- Bước 3: Mở CMD, cd tới thư mục chứa project của mình. Chạy lệnh; *firebase login*
- Bước 4: Sau khi đã đăng nhập thành công, chạy lệnh: *firebase init*
- Bước 5: Cứ Enter thôi, cái gì yêu cầu xác nhận thì yes (y). Sau khi xong thì sẽ xuất hiện thư mục tên là **public**. Copy hết tài nguyên website vào thư mục này (tất nhiên là trừ các fire và thư mục thuộc về firebase)
- Bước 6: Chạy lệnh *firebase serve*. Sau đó chạy lệnh *firebase deploy*

## Hướng dẫn Deploy với Github Pages
