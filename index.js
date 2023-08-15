const express = require('express') // đi vào thư mục node_modules
const app = express()
const port = 3000

/* Định nghĩa biến route, trong trường hợp muốn chạy vào www.google.com/home thì thêm home vào sao dấu / */
app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})
// localhost = 127.0.0.1
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})