const fs = requir('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`)