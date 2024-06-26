const corsHeaders = require("./corsHeaders");

function errorHandle(res) {
  res.writeHead(400, corsHeaders);
  res.write(
    JSON.stringify({
      status: "false",
      message: "欄位未填寫正確，或無此 todo id",
    })
  );
  res.end();
}

module.exports = errorHandle;
