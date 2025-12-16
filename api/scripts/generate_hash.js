const bcrypt = require('bcrypt');

async function hash() {
  const hash = await bcrypt.hash('admin123', 10);
  console.log(hash);
}

hash();
